import { Reveal, Silk, useProgress } from '../components/bits.jsx'
import ScoreTable from '../components/ScoreTable.jsx'
import Icon from '../components/Icon.jsx'
import { useLang } from '../i18n/index.jsx'
import { IMPACT, SESSION_LOG } from '../data/community.js'
import { TRACKS } from '../data/tracks.js'
import { levelInfo, countDone, resetProgress, totalDone } from '../lib/progress.js'

const COPY = {
  lede: {
    ka: 'ეს გვერდი ყოველი თვის ბოლოს ხელით განახლდება. აქ მხოლოდ ნამდვილი რიცხვები წერია. რვა ადამიანი, რომელმაც მართლა ისწავლა, უფრო ღირებულია, ვიდრე გამოგონილი ორასი.',
    en: 'This page is updated by hand at the end of each month. Only real numbers go on it. Eight people who genuinely learned something is worth more than a made-up two hundred.',
  },
  logTitle: { ka: 'სესიების ჩანაწერი', en: 'Session log' },
  logEmpty: {
    ka: 'პირველი სესია ჯერ არ ჩატარებულა. როცა ჩატარდება, აქ გამოჩნდება თარიღი, თემა, რამდენი ადამიანი იყო და რამდენ კითხვას ვუპასუხეთ.',
    en: 'The first session has not happened yet. When it does, this table will show the date, the topic, how many people came, and how many questions got answered.',
  },
  yoursTitle: { ka: 'შენი პროგრესი', en: 'Your progress' },
  yoursBody: {
    ka: 'ეს მხოლოდ შენ ხედავ. ამ ბრაუზერში ინახება და ჩვენამდე არასდროს აღწევს.',
    en: 'Only you can see this. It lives in this browser and never reaches us.',
  },
  whyTitle: { ka: 'რატომ ვწერთ ნულებს', en: 'Why we print zeros' },
  whyBody: {
    ka: 'იმიტომ, რომ ეს პროექტი ახალია და ამის დამალვა უფრო ცუდი იქნებოდა, ვიდრე თქმა. თუ ვინმე — მშობელი, მასწავლებელი ან ორგანიზაცია — აქ დაწერილ რიცხვს შეამოწმებს, უნდა დარწმუნდეს, რომ სიმართლეა. ერთხელ რომ გავაზვიადოთ, ყველა დანარჩენი რიცხვიც ეჭვქვეშ დგება.',
    en: 'Because this project is new, and hiding that would be worse than saying it. If anyone — a parent, a teacher, an organisation — checks a number on this page, it has to hold up. Exaggerate once and every other number becomes doubtful too.',
  },
}

export default function Impact() {
  const { t, pick } = useLang()
  const progress = useProgress()
  const info = levelInfo()

  const stats = [
    [IMPACT.members, t('impact.members')],
    [IMPACT.lessons, t('impact.lessonsPub')],
    [IMPACT.sessions, t('impact.sessions')],
    [IMPACT.projects, t('impact.projects')],
  ]

  return (
    <>
      <section className="wrap phead">
        <Silk>{t('impact.silk')}</Silk>
        <h1>{t('impact.title')}</h1>
        <p>{pick(COPY.lede)}</p>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <Reveal className="panel" style={{ padding: 'var(--s3)' }}>
          <ScoreTable rows={stats} />
        </Reveal>

        <Reveal className="note" style={{ marginTop: 'var(--s2)' }}>
          <p style={{ color: 'var(--text-faint)', fontSize: 'var(--t-micro)', fontFamily: 'var(--font-code)' }}>
            {t('impact.updated')}: {IMPACT.updated ?? t('impact.never')}
          </p>
        </Reveal>
      </section>

      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{pick(COPY.logTitle)}</Silk>
          <h2>{pick(COPY.logTitle)}</h2>
        </Reveal>

        {SESSION_LOG.length === 0 ? (
          <Reveal className="note note--warn">
            <p
              style={{
                fontFamily: 'var(--font-code)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                marginBottom: 'var(--s1)',
              }}
            >
              {t('impact.empty')}
            </p>
            <p style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)' }}>
              {pick(COPY.logEmpty)}
            </p>
          </Reveal>
        ) : (
          <Reveal className="card">
            <ul className="timeline">
              {SESSION_LOG.map((row) => (
                <li key={row.date}>
                  <time>{row.date}</time>
                  <strong>{row.topic}</strong>
                  <p style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)', marginTop: 4 }}>
                    {row.people} people · {row.questions} questions answered
                  </p>
                  {row.moment && (
                    <p
                      style={{
                        color: 'var(--text-faint)',
                        fontSize: 'var(--t-micro)',
                        marginTop: 6,
                        fontStyle: 'italic',
                      }}
                    >
                      {row.moment}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </section>

      {/* ---- The learner's own progress, which is theirs alone ---- */}
      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{pick(COPY.yoursTitle)}</Silk>
          <h2>{t('xp.level', { n: info.level })}</h2>
          <p>{pick(COPY.yoursBody)}</p>
        </Reveal>

        <Reveal className="card stack-3">
          <div className="stack-1">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-code)',
                fontSize: 'var(--t-micro)',
                fontWeight: 700,
                color: 'var(--text-faint)',
              }}
            >
              <span>
                {info.xp} {t('xp.label')}
              </span>
              <span>{t('xp.toNext', { n: info.toNext })}</span>
            </div>
            <div className="xp">
              <div
                className="xp__fill"
                style={{ clipPath: `inset(0 ${100 - info.percent}% 0 0 round 999px)` }}
              />
            </div>
          </div>

          <div className="trackgrid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
            {TRACKS.map((track) => {
              const done = countDone(track.id)
              return (
                <div key={track.id} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <span
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 4,
                      background: track.color,
                      flex: 'none',
                    }}
                  />
                  <span style={{ fontSize: 'var(--t-small)', flex: 1 }}>
                    {typeof track.name === 'string' ? track.name : track.name.en}
                  </span>
                  <span
                    className="tnum"
                    style={{
                      fontFamily: 'var(--font-code)',
                      fontSize: 'var(--t-micro)',
                      color: done === 8 ? 'var(--mint-ink)' : 'var(--text-faint)',
                      fontWeight: 700,
                    }}
                  >
                    {done}/8
                  </span>
                </div>
              )
            })}
          </div>

          <div className="badgegrid">
            {[
              ['firstCode', 'badges.firstCode', 'badges.firstCodeHow'],
              ['bugHunter', 'badges.bugHunter', 'badges.bugHunterHow'],
              ['finisher', 'badges.finisher', 'badges.finisherHow'],
              ['helper', 'badges.helper', 'badges.helperHow'],
            ].map(([key, nameKey, howKey]) => {
              const earned = Boolean(progress.badges[key])
              return (
                <div key={key} className={`badgecard ${earned ? 'badgecard--on' : ''}`}>
                  <Icon
                    name={earned ? 'spark' : 'lock'}
                    size={19}
                    style={{ color: earned ? 'var(--yellow)' : 'var(--text-faint)', flex: 'none', marginTop: 2 }}
                  />
                  <div>
                    <h3>{t(nameKey)}</h3>
                    <p>{earned ? t(howKey) : t('badges.locked')}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div
            style={{
              display: 'flex',
              gap: 'var(--s2)',
              alignItems: 'center',
              flexWrap: 'wrap',
              paddingTop: 'var(--s2)',
              borderTop: '1px solid var(--border-soft)',
            }}
          >
            <p style={{ color: 'var(--text-faint)', fontSize: 'var(--t-micro)', flex: '1 1 260px' }}>
              {t('xp.saved')} · {totalDone()}/48
            </p>
            <button
              type="button"
              className="ctrl"
              onClick={() => {
                if (window.confirm(t('xp.resetConfirm'))) resetProgress()
              }}
            >
              {t('xp.reset')}
            </button>
          </div>
        </Reveal>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <Reveal className="note note--safe">
          <Silk>{pick(COPY.whyTitle)}</Silk>
          <p
            style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)', marginTop: 'var(--s1)' }}
          >
            {pick(COPY.whyBody)}
          </p>
        </Reveal>
      </section>
    </>
  )
}
