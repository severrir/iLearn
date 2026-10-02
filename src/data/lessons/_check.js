// Helpers for checking a learner's challenge answer.
// Deliberately forgiving: we check that the idea worked, never that the
// learner typed the same characters we did.

const norm = (s) =>
  String(s ?? '')
    .replace(/\r/g, '')
    .trim()
    .toLowerCase()

const squash = (s) => norm(s).replace(/[ \t]+/g, ' ')

/** Output contains every one of these fragments. */
export const has =
  (...subs) =>
  ({ out }) => {
    const o = squash(out)
    return subs.every((s) => o.includes(squash(s)))
  }

/** Output equals this exactly, ignoring case and outer whitespace. */
export const is =
  (expected) =>
  ({ out }) =>
    squash(out).replace(/\n+/g, '\n') === squash(expected).replace(/\n+/g, '\n')

/** Output has at least n non-empty lines. */
export const lines =
  (n) =>
  ({ out }) =>
    norm(out).split('\n').filter(Boolean).length >= n

/** Output contains these numbers, in this order, as whole tokens. */
export const nums =
  (...wanted) =>
  ({ out }) => {
    const found = String(out).match(/-?\d+(?:\.\d+)?/g) || []
    let i = 0
    for (const w of wanted) {
      const at = found.indexOf(String(w), i)
      if (at === -1) return false
      i = at + 1
    }
    return true
  }

/** The source contains every one of these fragments. */
export const code =
  (...subs) =>
  ({ code: src }) => {
    const c = squash(src)
    return subs.every((s) => c.includes(squash(s)))
  }

/** The source matches this regular expression. */
export const codeRe =
  (re) =>
  ({ code: src }) =>
    re.test(String(src))

export const all =
  (...fns) =>
  (ctx) =>
    fns.every((f) => f(ctx))

export const any =
  (...fns) =>
  (ctx) =>
    fns.some((f) => f(ctx))

/** Output is non-empty — the lowest bar, for "make it print anything". */
export const printed = ({ out }) => norm(out).length > 0
