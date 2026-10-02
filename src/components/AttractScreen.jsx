import { useEffect, useRef, useState } from 'react'
import { tokenize } from '../lib/highlight.js'
import { prefersReducedMotion } from '../lib/fx.js'
import { useLang } from '../i18n/index.jsx'
import CodeBox from './CodeBox.jsx'
import Icon from './Icon.jsx'

/**
 * A cabinet demos itself when nobody is playing. This types a small program
 * to itself, prints the result, and starts over — until a visitor touches it,
 * at which point it hands over control and stops demoing, exactly like an
 * arcade machine dropping out of attract mode.
 */

const DEMO = {
  code: `const learners = ["you"];

function welcome(name) {
  return "hello, " + name + "!";
}

for (const person of learners) {
  console.log(welcome(person));
}

console.log("cost:", 0);`,
  output: ['hello, you!', 'cost: 0'],
}

const JS_TRACK = { runner: 'js', syntax: 'js', real: true, name: 'JavaScript' }

export default function AttractScreen() {
  const { t } = useLang()
  const [taken, setTaken] = useState(false)

  if (taken) {
    return (
      <div className="attract attract--live">
        <div className="screen__bar">
          <span
            className="screen__dot"
            style={{
              background: 'var(--screen-mint)',
              boxShadow: '0 0 6px var(--screen-mint)',
            }}
          />
          {t('hero.yours')}
        </div>
        <div className="attract__live">
          <CodeBox track={JS_TRACK} initial={DEMO.code} minRows={11} autoFocus />
        </div>
      </div>
    )
  }

  return <Demo onTakeOver={() => setTaken(true)} />
}

function Demo({ onTakeOver }) {
  const { t } = useLang()
  const reduced = prefersReducedMotion()
  const [typed, setTyped] = useState(reduced ? DEMO.code.length : 0)
  const [shown, setShown] = useState(reduced ? DEMO.output.length : 0)
  const timers = useRef([])

  useEffect(() => {
    if (reduced) return

    let cancelled = false
    const clearAll = () => timers.current.forEach(clearTimeout)

    const cycle = () => {
      if (cancelled) return
      // Each pass queues ~160 timeouts; without clearing the list it grows
      // for as long as the page stays open.
      clearAll()
      timers.current = []
      setTyped(0)
      setShown(0)

      // 1.5s to type the visible program, matching the brief's typewriter timing
      const perChar = 1500 / DEMO.code.length
      for (let i = 1; i <= DEMO.code.length; i++) {
        timers.current.push(setTimeout(() => !cancelled && setTyped(i), i * perChar))
      }

      DEMO.output.forEach((_, i) => {
        timers.current.push(
          setTimeout(() => !cancelled && setShown(i + 1), 1500 + 380 + i * 320),
        )
      })

      // Hold the finished state, then run the demo again.
      timers.current.push(setTimeout(cycle, 1500 + 380 + DEMO.output.length * 320 + 4200))
    }

    cycle()
    return () => {
      cancelled = true
      clearAll()
    }
  }, [reduced])

  const visible = DEMO.code.slice(0, typed)
  const tokens = tokenize(visible, 'js')
  const done = typed >= DEMO.code.length

  return (
    <button
      type="button"
      className="attract"
      onClick={onTakeOver}
      // Tabbing to the cabinet hands over too, so a keyboard visitor gets the
      // same moment as someone who touched it.
      onFocus={onTakeOver}
      aria-label={t('hero.attractHint')}
    >
      <span className="screen__bar">
        <span className="screen__dot" />
        {t('hero.attract')}
      </span>

      <span className="attract__code">
        <code>
          {tokens.map((tk, i) => (
            <span key={i} className={`tok-${tk.t}`}>
              {tk.v}
            </span>
          ))}
          {!done && <span className="attract__caret" />}
        </code>
      </span>

      <span className="attract__out">
        {DEMO.output.slice(0, shown).map((line) => (
          <span key={line} className="attract__line">
            {line}
          </span>
        ))}
        {shown === 0 && <span className="attract__line attract__line--dim">…</span>}
      </span>

      <span className="attract__hint">
        <Icon name="spark" size={15} />
        {t('hero.attractHint')}
      </span>
    </button>
  )
}
