import { useEffect, useState } from 'react'
import { sessionState, pad2 } from '../lib/session.js'
import { useLang } from '../i18n/index.jsx'
import { Led } from './bits.jsx'
import { DISCORD_INVITE } from '../data/community.js'

/**
 * The hour is a live state, not a static date. As Sunday 18:00 Tbilisi
 * approaches the cabinet counts down; while the session runs it says so.
 */
export default function Countdown() {
  const { t } = useLang()
  const [state, setState] = useState(() => sessionState())

  useEffect(() => {
    const id = setInterval(() => setState(sessionState()), 1000)
    return () => clearInterval(id)
  }, [])

  const { live, parts } = state

  if (live) {
    return (
      <div className="stack-2">
        <a className="livebar" href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
          <span className="livebar__dot" />
          {t('community.live')}
          <span style={{ marginInlineStart: 'auto', fontWeight: 400, color: 'var(--text-dim)' }}>
            {pad2(parts.mins)}:{pad2(parts.secs)}
          </span>
        </a>
        <p style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)' }}>
          {t('community.liveBody')}
        </p>
      </div>
    )
  }

  const units = [
    [parts.days, t('community.days')],
    [parts.hours, t('community.hours')],
    [parts.mins, t('community.mins')],
    [parts.secs, t('community.secs')],
  ]

  return (
    <div className="stack-2">
      <p className="silk">{t('community.tournament')}</p>
      <div className="countdown">
        {units.map(([value, label]) => (
          <span key={label} className="countdown__unit">
            <Led size="lg" tone={value === 0 && label === t('community.days') ? 'yellow' : ''}>
              {pad2(value)}
            </Led>
            <span className="countdown__label">{label}</span>
          </span>
        ))}
      </div>
      <p style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)' }}>
        {t('community.every')} · {t('community.duration')}
      </p>
    </div>
  )
}
