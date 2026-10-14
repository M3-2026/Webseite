import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

const OPEN_SRC = '/images/michel-work-training.webp'

// Winking eye in the source photo, y measured from the top.
// The ellipse stays on this lid: the other brow is ~0.05 to the right,
// the hairline is ~0.10 above.
const EYE_X = 0.449
const EYE_Y = 0.2

function smootherstep(x: number) {
  const t = Math.min(1, Math.max(0, x))
  return t * t * t * (t * (t * 6 - 15) + 10)
}

function winkAmount(t: number) {
  const cycle = 5.4
  const start = 1.4
  const close = 0.5
  const hold = 0.08
  const open = 0.68
  const u = (t % cycle) - start
  const span = close + hold + open
  if (u < 0 || u > span) return 0
  if (u < close) return smootherstep(u / close)
  if (u < close + hold) return 1
  return 1 - smootherstep((u - close - hold) / open)
}

const VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uOpen;
uniform float uBlink;
uniform vec2 uRes;
uniform vec2 uEye;
uniform vec2 uEyeRad;

vec2 coverUv(vec2 uv) {
  vec2 top = vec2(uv.x, 1.0 - uv.y);
  float containerAspect = uRes.x / max(uRes.y, 1.0);
  float imageAspect = 16.0 / 9.0;
  float dispW = max(1.0, imageAspect / containerAspect);
  float dispH = max(1.0, containerAspect / imageAspect);
  float ox = (1.0 - dispW) * 0.5;
  float oy = (1.0 - dispH) * 0.22;
  return vec2((top.x - ox) / dispW, (top.y - oy) / dispH);
}

void main() {
  vec2 iuv = coverUv(vUv);
  vec2 p = (iuv - uEye) / uEyeRad;
  float reach = smoothstep(1.12, 0.28, length(p));
  float cover = uBlink * reach;

  float brow = uEye.y - uEyeRad.y * 0.95;
  float rest = uEye.y - uEyeRad.y * 0.42;
  float shut = uEye.y + uEyeRad.y * 0.72;
  float curl = (1.0 - clamp(p.x * p.x, 0.0, 1.0)) * uEyeRad.y * 0.18;
  float edge = mix(rest, shut, cover) + curl * cover;

  float along = clamp((iuv.y - brow) / max(edge - brow, 0.0008), 0.0, 1.0);
  float srcY = mix(brow, rest, along);
  float above = 1.0 - smoothstep(edge - 0.0025, edge + 0.0025, iuv.y);
  vec2 sampleUv = vec2(iuv.x, mix(iuv.y, srcY, above * reach));

  vec3 col = texture2D(uOpen, vec2(sampleUv.x, 1.0 - sampleUv.y)).rgb;
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`

function WinkPlane() {
  const openMap = useTexture(OPEN_SRC)
  const mat = useRef<THREE.ShaderMaterial>(null)
  const { size, viewport } = useThree()

  const uniforms = useMemo(() => {
    openMap.colorSpace = THREE.SRGBColorSpace
    openMap.minFilter = THREE.LinearFilter
    openMap.magFilter = THREE.LinearFilter
    openMap.generateMipmaps = false
    return {
      uOpen: { value: openMap },
      uBlink: { value: 0 },
      uRes: { value: new THREE.Vector2(size.width, size.height) },
      uEye: { value: new THREE.Vector2(EYE_X, EYE_Y) },
      uEyeRad: { value: new THREE.Vector2(0.023, 0.02) },
    }
  }, [openMap])

  useFrame(({ clock }) => {
    const material = mat.current
    if (!material) return
    material.uniforms.uBlink.value = winkAmount(clock.elapsedTime)
    material.uniforms.uRes.value.set(size.width, size.height)
  })

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={VERT}
        fragmentShader={FRAG}
        toneMapped={false}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export function MichelWink() {
  const reduced = usePrefersReducedMotion()
  if (reduced) return null

  return (
    <Canvas
      className="michel-wink"
      orthographic
      flat
      dpr={[1, 2]}
      camera={{ position: [0, 0, 1], zoom: 1, near: 0.1, far: 10 }}
      gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
        borderRadius: 'inherit',
      }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace
        gl.setClearColor(0x000000, 0)
        gl.domElement.setAttribute('aria-hidden', 'true')
      }}
    >
      <Suspense fallback={null}>
        <WinkPlane />
      </Suspense>
    </Canvas>
  )
}
