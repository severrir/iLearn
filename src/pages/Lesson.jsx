import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTrack, trackName } from '../data/tracks.js'
import { DISCORD_INVITE } from '../data/community.js'
import { useLang } from '../i18n/index.jsx'
import CodeBox, { Sample } from '../components/CodeBox.jsx'
import LevelRow from '../components/LevelRow.jsx'
import Mascot from '../components/Mascot.jsx'
import Icon from '../components/Icon.jsx'
import { Reveal, Silk, Spec, Rich, useProgress } from '../components/bits.jsx'
import { completeLesson, isDone, setTrack } from '../lib/progress.js'
import { confetti, pop } from '../lib/fx.js'
import { localizeCode } from '../data/lessons/_localize.js'

export default function Lesson() {
  const { trackId, n } = useParams()
  const { t, lang, pick } = useLang()
  const [verdict, setVerdict] = useState(null) // null | 'yes' | 'no'
  const [showAnswer, setShowAnswer] = useState(false)
  const [scroll, setScroll] = useState(0)
  const progress = useProgress()

  const track = getTrack(trackId)
  const num = Number(n)
  const lesson = track?.lessons[num - 1]

  // Remember the track they are actually reading.
  useEffect(() => {
    if (track && progress.track !== track.id) setTrack(track.id)
  }, [track, progress.track])

  // Reset the challenge state when moving between lessons.
  useEffect(() => {
    setVerdict(null)
    setShowAnswer(false)
  }, [trackId, n])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScroll(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [trackId, n])

  const done = track ? isDone(track.id, num) : false

  const handleChallenge = useCallback(
    ({ out, code }) => {
      if (!lesson) return
      let passed = false
      try {
        passed = Boolean(lesson.check({ out, code }))
      } catch {
        passed = false
      }

      setVerdict(passed ? 'yes' : 'no')
      if (!passed) return

      const earned = completeLesson(track.id, num, lesson.xp)
      if (earned > 0) {
        confetti()
        pop(880)
      }
    },
    [lesson, track, num],
  )

  if (!track || !lesson || num < 1 || num > 8) {
    return (
      <section className="wrap phead">
        <h1>{t('lesson.notFound')}</h1>
        <Link className="btn btn--primary" to="/tracks" style={{ marginTop: 'var(--s3)' }}>
          {t('tracks.pickFirst')}
        </Link>
      </section>
    )
  }

  const prev = num > 1 ? num - 1 : null
  const next = num < 8 ? num + 1 : null

  // The text inside the code follows the interface language, so an English
  // reader never meets a Georgian string literal and vice versa.
  const example = localizeCode(lesson.example, lang)
  const starter = localizeCode(lesson.starter, lang)
  const solution = localizeCode(lesson.solution, lang)
  const expected = localizeCode(lesson.expected, lang)

  return (
    <>
      {/* Progress bar that fills as you scroll */}
      <div className="lhead">
        <div className="lhead__bar">
          <div
            className="lhead__fill"
            style={{ clipPath: `inset(0 ${100 - scroll}% 0 0)` }}
          />
        </div>
        <div className="wrap lhead__in">
          <span
            className="lhead__badge"
            style={{ background: track.color, color: track.ink }}
          >
            {track.glyph} · {t('common.level')} {num}
          </span>
          <h1>{pick(lesson.title)}</h1>
          {done && (
            <span className="badge badge--on">
              <Icon name="check" size={15} />
              {t('lesson.doneAlready')}
            </span>
          )}
        </div>
      </div>

      <section className="wrap" style={{ paddingTop: 'var(--s3)' }}>
        <LevelRow track={track} current={num} compact />
      </section>

      <section className="wrap lesson">
        {/* ---- Explanation ---- */}
        <div className="lesson__body stack-3">
          <div>
            <Silk>{trackName(track, lang)}</Silk>
            <p
              style={{
                fontSize: 'var(--t-body-lg)',
                color: 'var(--text)',
                fontWeight: 700,
                marginTop: 6,
              }}
            >
              {pick(lesson.idea)}
            </p>
          </div>

          <Spec
            items={[
              ['TRACK ', trackName(track, lang)],
              ['LVL ', `${num}/8`],
              ['XP ', lesson.xp],
              ['MIN ', lesson.minutes],
            ]}
          />

          <div className="prose">
            {lesson.body.map((para, i) => (
              <Rich key={i} text={pick(para)} className={i === 0 ? '' : ''} />
            ))}
          </div>

          <div className="stack-2">
            <Silk>{t('lesson.example')}</Silk>
            <Sample code={example} syntax={track.syntax} />
          </div>

          <div className="note note--safe">
            <p style={{ fontSize: 'var(--t-small)' }}>
              <strong>{t('lesson.recap')}: </strong>
              {pick(lesson.recap)}
            </p>
          </div>
        </div>

        {/* ---- Live code box ---- */}
        <div className="lesson__sticky">
          <div className="panel" style={{ padding: 'var(--s2)' }}>
            <CodeBox
              track={track}
              initial={example}
              expected={expected}
              minRows={12}
            />
          </div>
        </div>
      </section>

      {/* ---- Challenge ---- */}
      <section className="wrap" style={{ paddingBottom: 'var(--s4)' }}>
        <Reveal className="challenge stack-3">
          <div>
            <Silk>{t('lesson.yourTurn')}</Silk>
            <Rich
              text={pick(lesson.challenge)}
              className="lede"
              as="p"
            />
          </div>

          <CodeBox
            key={`${trackId}-${n}-${lang}-challenge`}
            track={track}
            initial={starter}
            expected={expected}
            onResult={handleChallenge}
            minRows={9}
            autoPreview={false}
          />

          {verdict === 'yes' && (
            <p className="verdict verdict--yes" role="status">
              <Mascot size={44} pose="cheer" />
              {t('lesson.passed')} {t('lesson.passedBody', { xp: lesson.xp })}
            </p>
          )}

          {verdict === 'no' && (
            <p className="verdict verdict--no" role="status">
              <Mascot size={44} pose="think" />
              {t('lesson.notYet')}
            </p>
          )}

          <div style={{ display: 'flex', gap: 'var(--s1)', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="ctrl"
              onClick={() => setShowAnswer((v) => !v)}
              aria-expanded={showAnswer}
            >
              {showAnswer ? t('common.hideAnswer') : t('common.showAnswer')}
            </button>

            {!done && (
              <button
                type="button"
                className="ctrl"
                onClick={() => {
                  if (completeLesson(track.id, num, lesson.xp) > 0) {
                    confetti()
                    pop(880)
                  }
                }}
              >
                {t('lesson.markDone')}
              </button>
            )}
          </div>

          {showAnswer && <Sample code={solution} syntax={track.syntax} />}
        </Reveal>
      </section>

      {/* ---- Stuck? ---- */}
      <section className="wrap" style={{ paddingBottom: 'var(--s4)' }}>
        <Reveal className="card" style={{ display: 'flex', gap: 'var(--s3)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Mascot size={72} pose="wave" interactive />
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontSize: 'var(--t-h3)', marginBottom: 6 }}>{t('lesson.stuck')}</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)' }}>
              {t('lesson.stuckBody')}
            </p>
          </div>
          <a
            className="btn btn--mint"
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="discord" size={19} />
            {t('lesson.askNow')}
          </a>
        </Reveal>
      </section>

      {/* ---- Previous / Next ---- */}
      <section className="wrap" style={{ paddingBottom: 'var(--s5)' }}>
        <nav className="lnav" aria-label="Lesson">
          {prev ? (
            <Link className="btn btn--ghost" to={`/lesson/${track.id}/${prev}`}>
              {t('common.prev')}
            </Link>
          ) : (
            <Link className="btn btn--ghost" to="/tracks">
              {t('tracks.switch')}
            </Link>
          )}

          {next ? (
            <Link className="btn btn--primary" to={`/lesson/${track.id}/${next}`}>
              {t('common.next')}
              <Icon name="arrow" size={19} />
            </Link>
          ) : (
            <Link className="btn btn--primary" to="/impact">
              {t('nav.impact')}
              <Icon name="arrow" size={19} />
            </Link>
          )}
        </nav>
      </section>
    </>
  )
}
