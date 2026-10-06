import { useEffect, useRef, useState } from 'react'

const NODES = [
  { id: 'm1', label: 'M¹', cx: 118, cy: 92, color: '#fbbf24' },
  { id: 'm2', label: 'M²', cx: 248, cy: 188, color: '#34d399' },
  { id: 'm3', label: 'M³', cx: 92, cy: 228, color: '#818cf8' },
] as const

const BONDS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 0],
]

export function SystemMolecule() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el || reduced) return
    const io = new IntersectionObserver(
      ([entry]) => setActive(Boolean(entry?.isIntersecting)),
      { threshold: 0.25, rootMargin: '40px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])

  const run = active && !reduced

  return (
    <div
      ref={rootRef}
      className={`system-molecule${run ? ' is-running' : ''}${reduced ? ' is-static' : ''}`}
      aria-hidden
    >
      <svg viewBox="0 0 340 320" className="system-molecule-svg" role="presentation">
        <defs>
          <radialGradient id="mol-core" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#fbbf24" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#d97706" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </radialGradient>
          {NODES.map((n) => (
            <radialGradient key={`g-${n.id}`} id={`mol-glow-${n.id}`} cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="45%" stopColor={n.color} stopOpacity="1" />
              <stop offset="100%" stopColor={n.color} stopOpacity="0.85" />
            </radialGradient>
          ))}
          <filter id="mol-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        <g className="mol-orbit mol-orbit-a">
          <ellipse cx="170" cy="160" rx="118" ry="78" />
        </g>
        <g className="mol-orbit mol-orbit-b">
          <ellipse cx="170" cy="160" rx="96" ry="112" />
        </g>

        <g className="mol-bonds">
          {BONDS.map(([a, b], i) => {
            const from = NODES[a]
            const to = NODES[b]
            return (
              <g key={`bond-${i}`}>
                <line
                  className="mol-bond-glow"
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                  stroke="#fbbf24"
                  filter="url(#mol-soft)"
                />
                <line
                  className="mol-bond"
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                  stroke="#fbbf24"
                />
                {run ? (
                  <circle className={`mol-spark mol-spark-${i}`} r="3.4" fill="#ffffff">
                    <animateMotion
                      dur={`${2.8 + i * 0.45}s`}
                      repeatCount="indefinite"
                      path={`M${from.cx},${from.cy} L${to.cx},${to.cy}`}
                    />
                  </circle>
                ) : null}
              </g>
            )
          })}
        </g>

        <circle className="mol-nucleus" cx="168" cy="168" r="18" fill="url(#mol-core)" />
        <circle className="mol-nucleus-ring" cx="168" cy="168" r="28" />

        <g className="mol-nodes">
          {NODES.map((n, i) => (
            <g key={n.id} className={`mol-node mol-node-${i}`}>
              <circle className="mol-halo" cx={n.cx} cy={n.cy} r="36" fill={n.color} />
              <circle
                className="mol-orb"
                cx={n.cx}
                cy={n.cy}
                r="25"
                fill={`url(#mol-glow-${n.id})`}
                stroke="#ffffff"
                strokeWidth="1.6"
                strokeOpacity="0.75"
              />
              <text className="mol-label" x={n.cx} y={n.cy + 1}>
                {n.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
