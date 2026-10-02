import { Led, Counter } from './bits.jsx'
import { useLang } from '../i18n/index.jsx'

/**
 * The cabinet's high-score board. An arcade machine nobody has played yet
 * shows an empty table, and that reads as an invitation rather than a failure
 * — which is exactly what this project needs while every number is still zero.
 */
export default function ScoreTable({ rows }) {
  const { t } = useLang()
  const allZero = rows.every(([value]) => value === 0)

  return (
    <div className="score">
      {rows.map(([value, label]) => (
        <p className="score__row" key={label}>
          <span className="score__name">{label}</span>
          <Led size="lg" tone={value === 0 ? 'yellow' : ''}>
            <Counter value={value} />
          </Led>
        </p>
      ))}

      {allZero && <p className="score__empty">{t('impact.empty')}</p>}
    </div>
  )
}
