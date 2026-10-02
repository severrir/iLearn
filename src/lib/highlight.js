// A small tokenizer for the six languages we teach.
// It returns tokens, never HTML strings, so React does the escaping and we
// never hand innerHTML a learner's code.

const KEYWORDS = {
  python: 'and as assert break class continue def del elif else except finally for from global if import in is lambda None nonlocal not or pass raise return True False try while with yield print len range sum min max int str float list dict input append',
  lua: 'and break do else elseif end false for function goto if in local nil not or repeat return then true until while print ipairs pairs table insert tonumber tostring type math string',
  js: 'async await break case catch class const continue default delete do else export extends false finally for from function if import in instanceof let new null of return super switch this throw true try typeof undefined var void while yield console log Math Number String Boolean',
  c: 'auto break case char const continue default do double else enum extern float for goto if inline int long register return short signed sizeof static struct switch typedef union unsigned void volatile while printf scanf include stdio main NULL',
  csharp:
    'abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using var virtual void volatile while Console WriteLine Write Length Parse',
}

const KW_SET = Object.fromEntries(
  Object.entries(KEYWORDS).map(([k, v]) => [k, new Set(v.split(/\s+/))]),
)

const LINE_COMMENT = { python: '#', lua: '--', js: '//', c: '//', csharp: '//' }

/**
 * @returns {Array<{t:string, v:string}>} token stream; `t` is a CSS class suffix
 */
export function tokenize(src, lang) {
  const code = String(src ?? '')
  if (lang === 'html') return tokenizeHtml(code)

  const kw = KW_SET[lang] || KW_SET.js
  const lc = LINE_COMMENT[lang] || '//'
  const out = []
  let i = 0
  let buf = ''

  const flush = () => {
    if (buf) {
      out.push({ t: 'txt', v: buf })
      buf = ''
    }
  }
  const push = (t, v) => {
    flush()
    out.push({ t, v })
  }

  while (i < code.length) {
    const rest = code.slice(i)

    // Block comments
    if (lang !== 'python' && lang !== 'lua' && rest.startsWith('/*')) {
      const end = code.indexOf('*/', i + 2)
      const stop = end === -1 ? code.length : end + 2
      push('com', code.slice(i, stop))
      i = stop
      continue
    }
    if (lang === 'lua' && rest.startsWith('--[[')) {
      const end = code.indexOf(']]', i + 4)
      const stop = end === -1 ? code.length : end + 2
      push('com', code.slice(i, stop))
      i = stop
      continue
    }

    // Line comments
    if (rest.startsWith(lc)) {
      const nl = code.indexOf('\n', i)
      const stop = nl === -1 ? code.length : nl
      push('com', code.slice(i, stop))
      i = stop
      continue
    }

    // Strings, including template literals and interpolated C# strings
    const q = rest[0]
    if (q === '"' || q === "'" || q === '`') {
      let j = i + 1
      while (j < code.length) {
        if (code[j] === '\\') {
          j += 2
          continue
        }
        if (code[j] === q) {
          j++
          break
        }
        if (code[j] === '\n' && q !== '`') {
          break
        }
        j++
      }
      push('str', code.slice(i, j))
      i = j
      continue
    }

    // Numbers
    const num = /^\d+(\.\d+)?/.exec(rest)
    if (num && !/[A-Za-z_]/.test(code[i - 1] || '')) {
      push('num', num[0])
      i += num[0].length
      continue
    }

    // C preprocessor
    if (lang === 'c' && rest.startsWith('#')) {
      const nl = code.indexOf('\n', i)
      const stop = nl === -1 ? code.length : nl
      push('key', code.slice(i, stop))
      i = stop
      continue
    }

    // Words
    const word = /^[A-Za-z_$][A-Za-z0-9_$]*/.exec(rest)
    if (word) {
      const w = word[0]
      const after = code.slice(i + w.length).match(/^\s*\(/)
      if (kw.has(w)) push('key', w)
      else if (after) push('fn', w)
      else buf += w
      i += w.length
      continue
    }

    // Operators
    if (/^[+\-*/%=<>!&|^~?:.,;(){}[\]]/.test(rest)) {
      push('op', rest[0])
      i += 1
      continue
    }

    buf += code[i]
    i += 1
  }

  flush()
  return out
}

function tokenizeHtml(code) {
  const out = []
  let i = 0

  const push = (t, v) => v && out.push({ t, v })

  while (i < code.length) {
    const rest = code.slice(i)

    if (rest.startsWith('<!--')) {
      const end = code.indexOf('-->', i + 4)
      const stop = end === -1 ? code.length : end + 3
      push('com', code.slice(i, stop))
      i = stop
      continue
    }

    if (rest[0] === '<') {
      const end = code.indexOf('>', i)
      const stop = end === -1 ? code.length : end + 1
      const tag = code.slice(i, stop)

      // Split the tag into name, attribute names, and attribute values
      const parts = tag.split(/("[^"]*"|'[^']*')/)
      let first = true
      for (const part of parts) {
        if (!part) continue
        if (/^["']/.test(part)) {
          push('str', part)
          continue
        }
        if (first) {
          const m = /^(<\/?)([A-Za-z][\w-]*)([\s\S]*)$/.exec(part)
          if (m) {
            push('op', m[1])
            push('key', m[2])
            pushAttrs(m[3], push)
            first = false
            continue
          }
        }
        pushAttrs(part, push)
        first = false
      }
      i = stop
      continue
    }

    const next = code.indexOf('<', i)
    const stop = next === -1 ? code.length : next
    push('txt', code.slice(i, stop))
    i = stop
  }

  return out
}

function pushAttrs(chunk, push) {
  const re = /([A-Za-z-]+)|(=)|([\s\S]+?)/g
  let m
  while ((m = re.exec(chunk))) {
    if (m[1]) push('fn', m[1])
    else if (m[2]) push('op', '=')
    else push('txt', m[0])
    if (re.lastIndex >= chunk.length) break
  }
}
