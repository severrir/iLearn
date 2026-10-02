import { Link } from 'react-router-dom'
import { TRACKS, trackName } from '../data/tracks.js'
import { useLang } from '../i18n/index.jsx'
import { Reveal, Silk, Spec, useProgress } from '../components/bits.jsx'
import Icon from '../components/Icon.jsx'
import { countDone, nextLesson, setTrack } from '../lib/progress.js'
import { ROBLOX_GROUP } from '../data/community.js'

export default function Tracks() {
  const { t, lang, pick } = useLang()
  useProgress()

  return (
    <>
      <section className="wrap phead">
        <Silk>{t('tracks.silk')}</Silk>
        <h1>{t('tracks.title')}</h1>
        <p>{t('tracks.sub')}</p>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="trackgrid">
          {TRACKS.map((track, i) => {
            const done = countDone(track.id)
            const next = nextLesson(track.id)
            const totalXp = track.lessons.reduce((sum, lesson) => sum + lesson.xp, 0)
            const totalMin = track.lessons.reduce((sum, lesson) => sum + lesson.minutes, 0)

            return (
              <Reveal key={track.id} delay={i * 60}>
                <Link
                  to={`/lesson/${track.id}/${next}`}
                  className="trackcard"
                  onClick={() => setTrack(track.id)}
                >
                  <span className="trackcard__top">
                    <span
                      className="trackcard__cap"
                      style={{ background: track.color, color: track.ink }}
                      aria-hidden="true"
                    >
                      {track.glyph}
                    </span>
                    <span>
                      <h2>{trackName(track, lang)}</h2>
                      <span
                        style={{
                          fontSize: 'var(--t-micro)',
                          color: track.real ? 'var(--mint-ink)' : 'var(--yellow-ink)',
                          fontFamily: 'var(--font-code)',
                          fontWeight: 700,
                        }}
                      >
                        {track.real ? t('tracks.runsHere') : t('tracks.runsMini')}
                      </span>
                    </span>
                  </span>

                  <span className="trackcard__blurb">{pick(track.blurb)}</span>

                  <span className="trackcard__makes">
                    {lang === 'ka' ? 'რისთვის: ' : 'Makes: '}
                    {pick(track.makes)}
                  </span>

                  <Spec
                    items={[
                      ['LVL ', `${done}/8`],
                      ['XP ', totalXp],
                      ['MIN ', totalMin],
                    ]}
                  />

                  <span className="trackcard__bar">
                    <span className="xp">
                      <span
                        className="xp__fill"
                        style={{ clipPath: `inset(0 ${100 - (done / 8) * 100}% 0 0 round 999px)` }}
                      />
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-code)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: 'var(--text-faint)',
                      }}
                    >
                      {done === 8 ? t('path.done') : `L${next}`}
                    </span>
                    <Icon name="arrow" size={17} />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="note note--safe" style={{ marginTop: 'var(--s3)' }}>
          <p
            style={{
              color: 'var(--text-dim)',
              fontSize: 'var(--t-small)',
              marginBottom: 'var(--s2)',
            }}
          >
            {t('community.robloxBody')}
          </p>
          <a
            className="btn btn--primary btn--sm"
            href={ROBLOX_GROUP}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('community.robloxCta')}
          </a>
        </Reveal>

        <Reveal className="note" style={{ marginTop: 'var(--s2)' }}>
          <p style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)' }}>
            {lang === 'ka'
              ? 'ყველა მიმართულებას ერთი და იგივე 8 დონე აქვს, ამიტომ თუ ერთი დაასრულე, მეორე უკვე ნაცნობი მოგეჩვენება. არჩევანს ნებისმიერ დროს შეცვლი — პროგრესი არ იკარგება.'
              : 'Every track runs the same 8 levels, so once you finish one the next feels familiar. You can switch any time and nothing you already did is lost.'}
          </p>
        </Reveal>
      </section>
    </>
  )
}
