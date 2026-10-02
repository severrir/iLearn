import { Link } from 'react-router-dom'
import AttractScreen from '../components/AttractScreen.jsx'
import TrackKeys from '../components/TrackKeys.jsx'
import LevelRow from '../components/LevelRow.jsx'
import Countdown from '../components/Countdown.jsx'
import Mascot from '../components/Mascot.jsx'
import Icon from '../components/Icon.jsx'
import { Reveal, Silk } from '../components/bits.jsx'
import ScoreTable from '../components/ScoreTable.jsx'
import { useLang } from '../i18n/index.jsx'
import { DISCORD_INVITE, CHANNELS, IMPACT } from '../data/community.js'
import { getTrack, trackName } from '../data/tracks.js'
import { useProgress } from '../components/bits.jsx'
import { nextLesson } from '../lib/progress.js'

export default function Home() {
  const { t, lang } = useLang()
  const progress = useProgress()
  const current = progress.track ? getTrack(progress.track) : null

  return (
    <>
      {/* ---------- Hero: the cabinet, on free play ---------- */}
      <section className="wrap hero">
        <div className="bezel hero__bezel">
          <div>
            <h1 className="hero__title">
              <span>{t('hero.title1')}</span>
              <span>{t('hero.title2')}</span>
              <span>{t('hero.title3')}</span>
            </h1>

            <p className="hero__sub">{t('hero.sub')}</p>

            <div className="hero__cta">
              {current ? (
                <Link
                  className="btn btn--primary"
                  to={`/lesson/${current.id}/${nextLesson(current.id)}`}
                >
                  {t('common.continue')} · {trackName(current, lang)}
                </Link>
              ) : (
                <Link className="btn btn--primary" to="/tracks">
                  {t('common.start')}
                </Link>
              )}

              <a
                className="btn btn--ghost"
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="discord" size={19} />
                {t('common.join')}
              </a>
            </div>

            {/* The promise, struck into the cabinet rather than printed on it */}
            <p className="plate">
              <strong>{t('hero.plateFree')}</strong>
              <span className="plate__sep" aria-hidden="true">
                ·
              </span>
              {t('hero.plateNoSignup')}
              <span className="plate__sep" aria-hidden="true">
                ·
              </span>
              {t('hero.plateNoAds')}
            </p>
          </div>

          <AttractScreen />
        </div>
      </section>

      {/* ---------- The six keys: picking a language IS starting ---------- */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <Reveal className="sechead">
          <Silk>{t('tracks.silk')}</Silk>
          <h2>{t('tracks.title')}</h2>
          <p>{t('tracks.sub')}</p>
        </Reveal>

        <Reveal>
          <TrackKeys />
        </Reveal>
      </section>

      {/* ---------- The 8-level row ---------- */}
      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{t('path.silk')}</Silk>
          <h2>{t('path.title')}</h2>
          <p>{t('path.sub')}</p>
        </Reveal>

        <Reveal className="panel" style={{ padding: 'var(--s3)' }}>
          <LevelRow track={current} />
        </Reveal>
      </section>

      {/* ---------- Read, Try, Ask ---------- */}
      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{t('how.silk')}</Silk>
          <h2>{t('how.title')}</h2>
        </Reveal>

        <div className="steps3">
          {[
            { icon: 'book', color: 'var(--purple)', title: t('how.read'), body: t('how.readBody') },
            { icon: 'play', color: 'var(--mint)', title: t('how.try'), body: t('how.tryBody') },
            { icon: 'chat', color: 'var(--yellow)', title: t('how.ask'), body: t('how.askBody') },
          ].map((step, i) => (
            <Reveal key={step.title} className="card step3" delay={i * 80}>
              <span
                className="step3__icon"
                style={{
                  background: step.color,
                  color: step.icon === 'book' ? 'var(--on-purple)' : '#0F1226',
                }}
              >
                <Icon name={step.icon} size={23} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Community: you never play alone ---------- */}
      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{t('community.silk')}</Silk>
          <h2>{t('community.title')}</h2>
          <p>{t('community.sub')}</p>
        </Reveal>

        <div className="community">
          <Reveal className="panel" style={{ padding: 'var(--s3)' }}>
            <Countdown />
            <div style={{ marginTop: 'var(--s3)' }}>
              <a
                className="btn btn--mint btn--block"
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="discord" size={19} />
                {t('community.player2')}
              </a>
            </div>
            <p
              style={{
                marginTop: 'var(--s2)',
                color: 'var(--text-faint)',
                fontSize: 'var(--t-micro)',
              }}
            >
              {t('community.age')}
            </p>
          </Reveal>

          <Reveal className="card" delay={80}>
            <Silk>{t('community.channels')}</Silk>
            <div style={{ marginTop: 'var(--s2)' }}>
              {CHANNELS.slice(0, 6).map((channel) => (
                <p className="channel" key={channel.name}>
                  <span className="channel__name">{channel.name}</span>
                  <span className="channel__desc">{channel[lang] ?? channel.en}</span>
                </p>
              ))}
            </div>
            <Link
              className="btn btn--ghost btn--sm"
              to="/community"
              style={{ marginTop: 'var(--s2)' }}
            >
              {t('nav.community')}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- High scores: honest, and honestly empty ---------- */}
      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{t('impact.silk')}</Silk>
          <h2>{t('impact.title')}</h2>
          <p>{t('impact.emptyBody')}</p>
        </Reveal>

        <Reveal className="panel" style={{ padding: 'var(--s3)' }}>
          <ScoreTable
            rows={[
              [IMPACT.members, t('impact.members')],
              [IMPACT.lessons, t('impact.lessonsPub')],
              [IMPACT.sessions, t('impact.sessions')],
              [IMPACT.projects, t('impact.projects')],
            ]}
          />
        </Reveal>
      </section>

      {/* ---------- Teach with us ---------- */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <Reveal className="banner">
          <Mascot size={92} pose="cheer" interactive />
          <div className="banner__text">
            <Silk>{t('teach.silk')}</Silk>
            <h2>{t('teach.title')}</h2>
            <p>{t('teach.sub')}</p>
          </div>
          <Link className="btn btn--primary" to="/teach">
            {t('teach.cta')}
          </Link>
        </Reveal>
      </section>
    </>
  )
}
