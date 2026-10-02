import { useRef, useState } from 'react'
import { confetti, pop } from '../lib/fx.js'
import { awardBadge } from '../lib/progress.js'
import { useLang } from '../i18n/index.jsx'

/**
 * Bit, the code-bug. Poses: idle | wave | think | cheer.
 * Clicking five times is the easter egg the brief asks for.
 *
 * The character's four colours are written out rather than taken from theme
 * tokens: Bit is a drawn character with a published reference sheet on /about,
 * and he has to look like his own swatches in both themes. Only the ground
 * shadow follows the theme.
 */
export default function Mascot({ size = 120, pose = 'idle', interactive = false, className = '' }) {
  const { t } = useLang()
  const [bounce, setBounce] = useState(false)
  const [found, setFound] = useState(false)
  const clicks = useRef(0)
  const timer = useRef(null)

  function handleClick(event) {
    if (!interactive) return
    pop(620)
    setBounce(true)
    setTimeout(() => setBounce(false), 560)

    clicks.current += 1
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      clicks.current = 0
    }, 2500)

    if (clicks.current >= 5) {
      clicks.current = 0
      const rect = event.currentTarget.getBoundingClientRect()
      confetti(
        (rect.left + rect.width / 2) / window.innerWidth,
        (rect.top + rect.height / 2) / window.innerHeight,
      )
      if (awardBadge('egg', 25)) setFound(true)
      else setFound(true)
      setTimeout(() => setFound(false), 4200)
    }
  }

  const svg = (
    <svg
      className={`bit bit--${pose} ${bounce ? 'bit--pop' : ''} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label={t('mascot.name')}
    >
      <ellipse className="bit__shadow" cx="60" cy="110" rx="27" ry="5" />

      <g className="bit__body-group">
        {/* antenna */}
        <path
          d="M60 40 L60 24"
          stroke="#7C5CFF"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle className="bit__antenna-bulb" cx="60" cy="18" r="7" fill="#FFD84D" />

        {/* arms */}
        <path
          className="bit__arm-left"
          d="M32 78 Q20 82 18 92"
          stroke="#7C5CFF"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="bit__arm-wave"
          d="M88 78 Q100 76 103 66"
          stroke="#7C5CFF"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* feet */}
        <ellipse cx="47" cy="104" rx="9" ry="6" fill="#7C5CFF" />
        <ellipse cx="73" cy="104" rx="9" ry="6" fill="#7C5CFF" />

        {/* shell */}
        <circle cx="60" cy="70" r="34" fill="#2EF2B0" />
        <path
          d="M60 36 A34 34 0 0 1 90 56 A34 34 0 0 0 60 44 A34 34 0 0 0 30 56 A34 34 0 0 1 60 36 Z"
          fill="#ffffff"
          opacity="0.35"
        />

        {/* eyes */}
        <g>
          <circle className="bit__eye" cx="49" cy="64" r="10.5" fill="#0F1226" />
          <circle className="bit__eye bit__eye--right" cx="71" cy="64" r="10.5" fill="#0F1226" />
          <circle cx="52" cy="60.5" r="3.4" fill="#ffffff" />
          <circle cx="74" cy="60.5" r="3.4" fill="#ffffff" />
        </g>

        {/* chest plate with the </> */}
        <rect x="44" y="80" width="32" height="18" rx="6" fill="#7C5CFF" />
        <path
          d="M54 85.5 L50 89 L54 92.5"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M66 85.5 L70 89 L66 92.5"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M62 84 L58 94"
          stroke="#2EF2B0"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  )

  if (!interactive) return svg

  return (
    <span style={{ position: 'relative', display: 'inline-block', lineHeight: 0 }}>
      <button
        type="button"
        className="bit-btn"
        onClick={handleClick}
        aria-label={t('mascot.name')}
      >
        {svg}
      </button>

      {found && (
        <span
          role="status"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '100%',
            transform: 'translate(-50%, -8px)',
            whiteSpace: 'nowrap',
            background: 'var(--yellow-ink)',
            color: 'var(--on-yellow)',
            fontWeight: 800,
            fontSize: '0.8125rem',
            padding: '8px 14px',
            borderRadius: '999px',
            boxShadow: 'var(--sh-2)',
            zIndex: 5,
          }}
        >
          {t('mascot.egg')} +25 XP
        </span>
      )}
    </span>
  )
}
