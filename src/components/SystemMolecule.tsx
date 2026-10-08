import { useEffect, useRef, useState } from 'react'

interface MoleculeNode {
  id: string
  label: string
  sub?: string
  cx: number
  cy: number
  color: string
  accent: string
}

const NODES: MoleculeNode[] = [
  { id: 'm1', label: 'M¹', sub: 'FOOD', cx: 228, cy: 82, color: '#fbbf24', accent: '#f59e0b' },
  { id: 'm2', label: 'M²', sub: 'MOVE', cx: 268, cy: 198, color: '#34d399', accent: '#10b981' },
  { id: 'm3', label: 'M³', sub: 'REPEAT', cx: 132, cy: 236, color: '#f59e0b', accent: '#d97706' },
]

const BONDS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 0],
]

const CORE_CENTER = { cx: 176, cy: 162 }

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
      { threshold: 0.2, rootMargin: '50px' },
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
      <svg viewBox="0 0 350 320" className="system-molecule-svg" role="presentation">
        <defs>
          {/* Central Reactor Core Gradient */}
          <radialGradient id="mol-core-grad" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="28%" stopColor="#fde68a" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
          </radialGradient>

          {/* Node Orb Gradients */}
          {NODES.map((n) => (
            <radialGradient key={`g-${n.id}`} id={`mol-glow-${n.id}`} cx="32%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="30%" stopColor={n.color} stopOpacity="1" />
              <stop offset="85%" stopColor={n.accent} stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0b0e14" stopOpacity="0.9" />
            </radialGradient>
          ))}

          {/* Core Ambient Aura */}
          <radialGradient id="mol-core-aura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#d97706" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </radialGradient>

          {/* Soft Blur Filter */}
          <filter id="mol-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <filter id="mol-diffuse" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Ambient Core Aura */}
        <circle
          className="mol-core-aura"
          cx={CORE_CENTER.cx}
          cy={CORE_CENTER.cy}
          r="84"
          fill="url(#mol-core-aura)"
        />

        {/* Outer Orbit Tracks */}
        <g className="mol-orbit mol-orbit-a">
          <ellipse cx={CORE_CENTER.cx} cy={CORE_CENTER.cy} rx="124" ry="76" />
        </g>
        <g className="mol-orbit mol-orbit-b">
          <ellipse cx={CORE_CENTER.cx} cy={CORE_CENTER.cy} rx="98" ry="116" />
        </g>

        {/* Synergy Core Spokes (Core to Nodes) */}
        <g className="mol-spokes">
          {NODES.map((n, i) => (
            <line
              key={`spoke-${i}`}
              className="mol-spoke"
              x1={CORE_CENTER.cx}
              y1={CORE_CENTER.cy}
              x2={n.cx}
              y2={n.cy}
              stroke="#fbbf24"
              strokeOpacity="0.22"
              strokeDasharray="2 5"
              strokeWidth="1.2"
            />
          ))}
        </g>

        {/* Inter-Node Kinetic Bonds */}
        <g className="mol-bonds">
          {BONDS.map(([a, b], i) => {
            const from = NODES[a]
            const to = NODES[b]
            return (
              <g key={`bond-${i}`}>
                {/* Glow Underlay */}
                <line
                  className="mol-bond-glow"
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                  stroke="#fbbf24"
                  filter="url(#mol-soft)"
                />
                {/* Crisp Bond Line */}
                <line
                  className="mol-bond"
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                  stroke="#fbbf24"
                />
                {/* Animated Photon Spark */}
                {run ? (
                  <circle className={`mol-spark mol-spark-${i}`} r="3.2" fill="#ffffff">
                    <animateMotion
                      dur={`${2.6 + i * 0.4}s`}
                      repeatCount="indefinite"
                      path={`M${from.cx},${from.cy} L${to.cx},${to.cy}`}
                    />
                  </circle>
                ) : null}
              </g>
            )
          })}
        </g>

        {/* Central Reactor Core */}
        <g className="mol-nucleus-group">
          <circle
            className="mol-nucleus-pulse"
            cx={CORE_CENTER.cx}
            cy={CORE_CENTER.cy}
            r="36"
            fill="#fbbf24"
            opacity="0.12"
          />
          <circle
            className="mol-nucleus-ring"
            cx={CORE_CENTER.cx}
            cy={CORE_CENTER.cy}
            r="28"
          />
          <circle
            className="mol-nucleus"
            cx={CORE_CENTER.cx}
            cy={CORE_CENTER.cy}
            r="16"
            fill="url(#mol-core-grad)"
          />
          <circle
            cx={CORE_CENTER.cx}
            cy={CORE_CENTER.cy}
            r="5"
            fill="#ffffff"
            opacity="0.9"
          />
        </g>

        {/* Pillar Nodes M¹, M², M³ */}
        <g className="mol-nodes">
          {NODES.map((n, i) => (
            <g key={n.id} className={`mol-node mol-node-${i}`}>
              {/* Outer Glow Halo */}
              <circle
                className="mol-halo"
                cx={n.cx}
                cy={n.cy}
                r="38"
                fill={n.color}
                filter="url(#mol-diffuse)"
              />
              {/* Node Orb Body */}
              <circle
                className="mol-orb"
                cx={n.cx}
                cy={n.cy}
                r="25"
                fill={`url(#mol-glow-${n.id})`}
                stroke="rgba(255, 255, 255, 0.75)"
                strokeWidth="1.6"
              />
              {/* Inner Specular Highlight Ring */}
              <circle
                cx={n.cx}
                cy={n.cy}
                r="21.5"
                fill="none"
                stroke="rgba(255, 255, 255, 0.28)"
                strokeWidth="1"
              />
              {/* Label */}
              <text
                className="mol-label"
                x={n.cx}
                y={n.cy}
                dominantBaseline="central"
                textAnchor="middle"
              >
                {n.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
