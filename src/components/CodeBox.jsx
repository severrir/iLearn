import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { tokenize } from '../lib/highlight.js'
import { runCode, RUNTIME_INFO, needsDownload } from '../lib/runners/index.js'
import { recordRun } from '../lib/progress.js'
import { useLang } from '../i18n/index.jsx'
import { pop } from '../lib/fx.js'
import Icon from './Icon.jsx'

/* ---------------- Highlighted editor ---------------- */

export function Editor({ value, onChange, syntax, label, minRows = 8, autoFocus = false }) {
  const taRef = useRef(null)
  const preRef = useRef(null)
  const tokens = useMemo(() => tokenize(value, syntax), [value, syntax])
  const lineCount = Math.max(minRows, value.split('\n').length)

  // The cabinet hands over control: when the visitor takes the demo, the
  // caret is already in the editor and waiting at the end of the code.
  useLayoutEffect(() => {
    if (!autoFocus) return
    const el = taRef.current
    if (!el) return
    el.focus({ preventScroll: true })
    el.setSelectionRange(el.value.length, el.value.length)
  }, [autoFocus])

  // The highlighted layer sits behind the textarea, so it has to follow it
  // sideways or the colours drift off the characters.
  const syncScroll = () => {
    if (preRef.current && taRef.current) {
      preRef.current.scrollLeft = taRef.current.scrollLeft
    }
  }

  // Tab inserts four spaces instead of leaving the field — a beginner typing
  // an indent should not lose their place in the page.
  const handleKeyDown = (event) => {
    if (event.key !== 'Tab' || event.shiftKey) return
    event.preventDefault()
    const el = event.currentTarget
    const { selectionStart: s, selectionEnd: e } = el
    const next = `${value.slice(0, s)}    ${value.slice(e)}`
    onChange(next)
    requestAnimationFrame(() => {
      el.selectionStart = el.selectionEnd = s + 4
    })
  }

  return (
    <div className="ed">
      <div className="ed__gutter" aria-hidden="true">
        {Array.from({ length: lineCount }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      <pre className="ed__pre" aria-hidden="true" ref={preRef}>
        {tokens.map((tk, i) => (
          <span key={i} className={`tok-${tk.t}`}>
            {tk.v}
          </span>
        ))}
        {'\n'}
      </pre>

      <textarea
        ref={taRef}
        className="ed__ta"
        value={value}
        rows={lineCount + 1}
        onChange={(e) => onChange(e.target.value)}
        onScroll={syncScroll}
        onKeyDown={handleKeyDown}
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        aria-label={label}
      />
    </div>
  )
}

/* ---------------- Read-only sample with a copy button ---------------- */

export function Sample({ code, syntax }) {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)
  const tokens = useMemo(() => tokenize(code, syntax), [code, syntax])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      pop(700)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard blocked — the learner can still select the text by hand.
    }
  }

  return (
    <div className="sample">
      <button type="button" className="ctrl sample__copy" onClick={copy}>
        {copied ? t('common.copied') : t('common.copy')}
      </button>
      <pre>
        {tokens.map((tk, i) => (
          <span key={i} className={`tok-${tk.t}`}>
            {tk.v}
          </span>
        ))}
      </pre>
    </div>
  )
}

/* ---------------- The full box: edit, run, see ---------------- */

export default function CodeBox({
  track,
  initial,
  expected,
  onResult,
  minRows = 10,
  autoPreview = true,
  autoFocus = false,
}) {
  const { t, lang } = useLang()
  const [code, setCode] = useState(initial)
  const [state, setState] = useState('idle') // idle | loading | running | done
  const [result, setResult] = useState(null)
  const [preview, setPreview] = useState(autoPreview && track.runner === 'web' ? initial : '')

  useEffect(() => {
    setCode(initial)
    setResult(null)
    setState('idle')
    if (track.runner === 'web' && autoPreview) setPreview(initial)
  }, [initial, track.runner, autoPreview])

  // Web design updates live as you type — the brief's "result updates live".
  useEffect(() => {
    if (track.runner !== 'web' || !autoPreview) return
    const id = setTimeout(() => setPreview(code), 350)
    return () => clearTimeout(id)
  }, [code, track.runner, autoPreview])

  const run = useCallback(async () => {
    pop(480)
    recordRun()

    if (track.runner === 'web') {
      setPreview(code)
      setState('done')
      const res = { ok: true, output: code, error: null }
      setResult(res)
      onResult?.({ out: code, code, ok: true })
      return
    }

    setState(needsDownload(track.runner) ? 'loading' : 'running')
    const res = await runCode(track.runner, code, { onBoot: () => setState('running') })
    setState('done')
    setResult(res)
    onResult?.({ out: res.output, code, ok: res.ok })
  }, [code, track.runner, onResult])

  const reset = () => {
    setCode(initial)
    setResult(null)
    setState('idle')
    if (track.runner === 'web') setPreview(initial)
  }

  const info = RUNTIME_INFO[track.runner]
  const busy = state === 'loading' || state === 'running'

  return (
    <div className={`codebox ${track.runner === 'web' ? 'codebox--split' : ''}`}>
      <div className="stack-2">
        <div className="codebox__head">
          <span className="silk">{t('editor.label')}</span>
          <span className="codebox__actions">
            <button type="button" className="ctrl" onClick={reset}>
              {t('common.reset')}
            </button>
            <button
              type="button"
              className="btn btn--mint btn--sm"
              onClick={run}
              disabled={busy}
            >
              {busy ? (
                t('runner.running')
              ) : (
                <>
                  <Icon name="play" size={16} />
                  {t('common.run')}
                </>
              )}
            </button>
          </span>
        </div>

        <Editor
          value={code}
          onChange={setCode}
          syntax={track.syntax}
          label={t('editor.label')}
          minRows={minRows}
          autoFocus={autoFocus}
        />

        {!track.real && (
          <p className="mini">
            <Icon name="warning" size={18} style={{ flex: 'none', color: 'var(--yellow-ink)' }} />
            <span>
              <b>{t('runner.miniTitle')}.</b>{' '}
              {t('runner.miniBody', {
                lang: typeof track.name === 'string' ? track.name : track.name[lang],
                tool: track.tool,
              })}{' '}
              <a href={track.toolUrl} target="_blank" rel="noopener noreferrer">
                {track.tool}
              </a>
            </span>
          </p>
        )}
      </div>

      <div className="stack-2">
        <span className="silk">
          {track.runner === 'web' ? t('runner.preview') : t('common.output')}
        </span>

        <div className="out">
          {track.runner === 'web' ? (
            <iframe
              className="out__preview"
              title={t('runner.preview')}
              sandbox="allow-scripts"
              srcDoc={wrapHtml(preview)}
            />
          ) : (
            <OutputBody state={state} result={result} expected={expected} />
          )}
        </div>
      </div>
    </div>
  )
}

function OutputBody({ state, result, expected }) {
  const { t } = useLang()

  if (state === 'loading') {
    return (
      <div className="loadbar">
        <span className="loadbar__spin" />
        <span>{t('runner.loading', { name: 'Python / Lua' })}</span>
      </div>
    )
  }

  if (state === 'running') {
    return (
      <div className="loadbar">
        <span className="loadbar__spin" />
        <span>{t('runner.running')}</span>
      </div>
    )
  }

  if (!result) {
    return <pre className="out__body out__idle">{t('runner.idle')}</pre>
  }

  // The runner could not start at all — be honest and show the expected result
  // so the lesson is still usable on a weak connection.
  if (result.error === 'BOOT_FAILED' || result.error === 'BOOT_TIMEOUT') {
    return (
      <>
        <pre className="out__body out__idle">
          {expected ? `${t('runner.expected')}:\n\n${expected}` : ''}
        </pre>
        <p className="out__err">
          {t('runner.failed')} — {t('runner.failedBody')}
        </p>
      </>
    )
  }

  const timedOut = result.error === 'TIMEOUT'

  return (
    <>
      <pre className="out__body">
        {result.output || (result.ok ? t('runner.empty') : '')}
      </pre>
      {!result.ok && (
        <p className="out__err">{timedOut ? t('runner.timeout') : result.error}</p>
      )}
    </>
  )
}

/** Wraps a learner's HTML fragment into a full document for the preview. */
function wrapHtml(fragment) {
  return `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  html{color-scheme:light}
  body{margin:0;padding:18px;font-family:system-ui,-apple-system,"Noto Sans Georgian",sans-serif;line-height:1.5}
</style></head><body>${fragment}</body></html>`
}
