import { Link } from 'react-router-dom'
import { LEVELS } from '../data/tracks.js'
import { useLang } from '../i18n/index.jsx'
import { isDone, nextLesson } from '../lib/progress.js'
import { useProgress } from './bits.jsx'
import Icon from './Icon.jsx'

/**
 * The 8-level row. It never wraps on any screen — it scales — and a lit
 * indicator always marks where you are.
 */
export default function LevelRow({ track, current = null, compact = false }) {
  const { lang, pick } = useLang()
  useProgress()

  const trackId = track?.id ?? null
  const here = current ?? (trackId ? nextLesson(trackId) : 1)

  const labelFor = (n) => {
    if (track) {
      const lesson = track.lessons[n - 1]
      if (lesson) return pick(lesson.title)
    }
    const level = LEVELS[n - 1]
    return level[lang] ?? level.en
  }

  return (
    <div>
      <div className="levelrow">
        {LEVELS.map(({ n }) => {
          const done = trackId ? isDone(trackId, n) : false
          const now = n === here && !done
          const cls = `step ${done ? 'step--done' : ''} ${now ? 'step--now' : ''}`
          const label = `${n}. ${labelFor(n)}`

          const inner = (
            <>
              <span className="step__key">
                {done ? <Icon name="check" size={15} /> : n}
              </span>
              {!compact && <span className="step__n">{String(n).padStart(2, '0')}</span>}
            </>
          )

          if (!trackId) {
            return (
              <Link key={n} to="/tracks" className={cls} title={label} aria-label={label}>
                {inner}
              </Link>
            )
          }

          return (
            <Link
              key={n}
              to={`/lesson/${trackId}/${n}`}
              className={cls}
              title={label}
              aria-label={label}
              aria-current={n === current ? 'page' : undefined}
            >
              {inner}
            </Link>
          )
        })}
      </div>

      {!compact && (
        <div className="levelrow__labels" aria-hidden="true">
          {LEVELS.map(({ n }) => (
            <span key={n} className="levelrow__label">
              {labelFor(n)}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
