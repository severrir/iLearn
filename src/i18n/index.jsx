import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from './ui.js'

const KEY = 'ilearn.lang'
const LangCtx = createContext(null)

function readInitial() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'ka' || saved === 'en') return saved
  } catch {
    /* private mode, blocked storage — fall through to the default */
  }
  // English is the default. A browser that clearly asks for Georgian still
  // gets Georgian first; everyone else starts in English and can switch with
  // the GE/EN control in the header, which is visible at every screen size.
  if (typeof navigator !== 'undefined' && /^ka\b/i.test(navigator.language || '')) return 'ka'
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitial)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      /* nothing to do: the choice just will not survive a reload */
    }
  }, [lang])

  /** t('nav.lessons') → the string in the current language. */
  const t = useCallback(
    (path, vars) => {
      const node = path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), ui)
      if (!node) return path
      let out = typeof node === 'string' ? node : (node[lang] ?? node.en ?? path)
      if (vars) for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, v)
      return out
    },
    [lang],
  )

  /** pick({ka, en}) → the right half of a bilingual content object. */
  const pick = useCallback((obj) => (obj ? (obj[lang] ?? obj.en ?? '') : ''), [lang])

  const value = useMemo(() => ({ lang, setLang, t, pick }), [lang, t, pick])
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>
}

export function useLang() {
  const ctx = useContext(LangCtx)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
