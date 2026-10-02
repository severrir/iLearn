/* ============================================================
   A small interpreter for the C and C# subset these 8 lessons teach.
   It is NOT a compiler and the interface says so wherever it is used.

   Covered: variables with types, arithmetic, comparison, logical
   operators, if/else if/else, while, for, foreach, functions and
   methods with return values, fixed-size arrays, printf format
   strings, Console.Write/WriteLine, string interpolation, casts,
   int.Parse, and the error messages beginners actually hit.
   ============================================================ */

const MAX_STEPS = 2_000_000
const MAX_OUTPUT = 20000

class CError extends Error {
  constructor(message, line) {
    super(line ? `${message} (line ${line})` : message)
    this.line = line
  }
}

/* ---------------- Lexer ---------------- */

const PUNCT = [
  '++', '--', '==', '!=', '<=', '>=', '&&', '||', '+=', '-=', '*=', '/=', '%=',
  '+', '-', '*', '/', '%', '=', '<', '>', '!', '(', ')', '{', '}', '[', ']',
  ';', ',', '.', '?', ':', '&', '|',
]

function lex(src) {
  const toks = []
  let i = 0
  let line = 1

  while (i < src.length) {
    const c = src[i]

    if (c === '\n') {
      line++
      i++
      continue
    }
    if (c === ' ' || c === '\t' || c === '\r') {
      i++
      continue
    }

    // Preprocessor and using-directives are not part of the subset; skip the line.
    if (c === '#' || src.startsWith('using ', i)) {
      while (i < src.length && src[i] !== '\n') i++
      continue
    }

    if (src.startsWith('//', i)) {
      while (i < src.length && src[i] !== '\n') i++
      continue
    }
    if (src.startsWith('/*', i)) {
      const end = src.indexOf('*/', i + 2)
      const stop = end === -1 ? src.length : end + 2
      for (let k = i; k < stop; k++) if (src[k] === '\n') line++
      i = stop
      continue
    }

    // Interpolated string: $"...{expr}..."
    if (c === '$' && src[i + 1] === '"') {
      const { parts, next } = readInterpolated(src, i + 2, line)
      toks.push({ k: 'interp', v: parts, line })
      i = next
      continue
    }

    if (c === '"' || c === "'") {
      const { value, next } = readString(src, i, line)
      toks.push({ k: c === '"' ? 'str' : 'char', v: value, line })
      i = next
      continue
    }

    if (/\d/.test(c)) {
      let j = i
      while (j < src.length && /[\d.]/.test(src[j])) j++
      const text = src.slice(i, j)
      // A decimal point or an f/d suffix makes it floating-point, which
      // decides whether `/` truncates later on.
      let isFloat = text.includes('.')
      if (/[fFdD]/.test(src[j] || '')) {
        isFloat = true
        j++
      } else if (/[lL]/.test(src[j] || '')) {
        j++
      }
      toks.push({ k: 'num', v: parseFloat(text), f: isFloat, line })
      i = j
      continue
    }

    if (/[A-Za-z_]/.test(c)) {
      let j = i
      while (j < src.length && /[A-Za-z0-9_]/.test(src[j])) j++
      toks.push({ k: 'word', v: src.slice(i, j), line })
      i = j
      continue
    }

    const p = PUNCT.find((op) => src.startsWith(op, i))
    if (p) {
      toks.push({ k: 'punct', v: p, line })
      i += p.length
      continue
    }

    throw new CError(`unexpected character '${c}'`, line)
  }

  toks.push({ k: 'eof', v: null, line })
  return toks
}

const ESCAPES = { n: '\n', t: '\t', r: '\r', '0': '\0', '\\': '\\', '"': '"', "'": "'" }

function readString(src, start, line) {
  const quote = src[start]
  let out = ''
  let i = start + 1
  while (i < src.length && src[i] !== quote) {
    if (src[i] === '\\') {
      const e = src[i + 1]
      out += Object.prototype.hasOwnProperty.call(ESCAPES, e) ? ESCAPES[e] : e
      i += 2
      continue
    }
    if (src[i] === '\n') throw new CError('newline in string literal', line)
    out += src[i]
    i++
  }
  if (i >= src.length) throw new CError('unterminated string literal', line)
  return { value: out, next: i + 1 }
}

/** Reads $"text{expr}text" into alternating literal / expression-source parts. */
function readInterpolated(src, start, line) {
  const parts = []
  let lit = ''
  let i = start

  while (i < src.length && src[i] !== '"') {
    if (src[i] === '\\') {
      const e = src[i + 1]
      lit += Object.prototype.hasOwnProperty.call(ESCAPES, e) ? ESCAPES[e] : e
      i += 2
      continue
    }
    if (src[i] === '{') {
      parts.push({ lit })
      lit = ''
      let depth = 1
      let j = i + 1
      while (j < src.length && depth > 0) {
        if (src[j] === '{') depth++
        else if (src[j] === '}') depth--
        if (depth > 0) j++
      }
      if (depth > 0) throw new CError('unclosed { in interpolated string', line)
      parts.push({ expr: src.slice(i + 1, j) })
      i = j + 1
      continue
    }
    lit += src[i]
    i++
  }
  if (i >= src.length) throw new CError('unterminated string literal', line)
  parts.push({ lit })
  return { parts, next: i + 1 }
}

/* ---------------- Parser ---------------- */

const TYPE_WORDS = new Set([
  'int', 'float', 'double', 'char', 'string', 'bool', 'void', 'var', 'long',
  'short', 'decimal', 'object', 'byte',
])
const MODIFIERS = new Set([
  'static', 'public', 'private', 'protected', 'internal', 'const', 'readonly',
  'unsigned', 'signed', 'extern', 'inline', 'virtual', 'override', 'sealed',
])

function parse(toks, dialect) {
  let p = 0

  const peek = (o = 0) => toks[p + o]
  const at = (k, v) => peek().k === k && (v === undefined || peek().v === v)
  const atPunct = (v) => at('punct', v)
  const atWord = (v) => at('word', v)
  const next = () => toks[p++]

  function expect(k, v) {
    if (!at(k, v)) {
      const got = peek().v === null ? 'end of file' : `'${peek().v}'`
      const want = v ? `'${v}'` : k
      throw new CError(`${want} expected, found ${got}`, peek().line)
    }
    return next()
  }

  function skipModifiers() {
    while (at('word') && MODIFIERS.has(peek().v)) next()
  }

  /** Reads a type if one is present and we are really looking at a declaration. */
  function tryType() {
    const save = p
    skipModifiers()
    if (!at('word')) {
      p = save
      return null
    }
    const name = peek().v
    const isType = TYPE_WORDS.has(name) || /^[A-Z]/.test(name)
    if (!isType) {
      p = save
      return null
    }
    next()

    let arr = false
    if (atPunct('[') && peek(1).k === 'punct' && peek(1).v === ']') {
      next()
      next()
      arr = true
    }
    if (!at('word')) {
      p = save
      return null
    }
    return { name, arr }
  }

  function parseProgram() {
    const fns = []
    while (!at('eof')) {
      // C# wraps everything in a class; unwrap it and keep the members.
      skipModifiers()
      if (atWord('class') || atWord('struct') || atWord('namespace')) {
        next()
        if (at('word')) next()
        expect('punct', '{')
        let depth = 1
        const inner = []
        while (depth > 0 && !at('eof')) {
          if (atPunct('{')) depth++
          if (atPunct('}')) {
            depth--
            if (depth === 0) {
              next()
              break
            }
          }
          inner.push(next())
        }
        inner.push({ k: 'eof', v: null, line: peek().line })
        fns.push(...parse(inner, dialect).functions)
        continue
      }

      const fn = parseFunction()
      if (fn) fns.push(fn)
      else if (!at('eof')) next()
    }
    return { functions: fns }
  }

  function parseFunction() {
    skipModifiers()
    if (!at('word')) return null

    const retType = next().v
    if (atPunct('[') && peek(1).v === ']') {
      next()
      next()
    }
    if (!at('word')) return null
    const name = next().v
    if (!atPunct('(')) return null
    next()

    const params = []
    while (!atPunct(')')) {
      skipModifiers()
      let type = at('word') ? next().v : 'var'
      if (atPunct('[') && peek(1).v === ']') {
        next()
        next()
      }
      const pname = expect('word').v
      // C-style array parameter: char name[]
      if (atPunct('[')) {
        next()
        if (!atPunct(']')) next()
        expect('punct', ']')
      }
      params.push({ type, name: pname })
      if (atPunct(',')) next()
    }
    expect('punct', ')')

    const body = parseBlock()
    return { name, params, body, retType }
  }

  function parseBlock() {
    expect('punct', '{')
    const stmts = []
    while (!atPunct('}')) {
      if (at('eof')) throw new CError("'}' expected — a block was never closed", peek().line)
      stmts.push(parseStatement())
    }
    next()
    return { type: 'Block', body: stmts }
  }

  function parseStatement() {
    const line = peek().line

    if (atPunct('{')) return parseBlock()
    if (atPunct(';')) {
      next()
      return { type: 'Empty' }
    }

    if (atWord('if')) {
      next()
      expect('punct', '(')
      const test = parseExpression()
      expect('punct', ')')
      const then = parseStatement()
      let alt = null
      if (atWord('else')) {
        next()
        alt = parseStatement()
      }
      return { type: 'If', test, then, alt, line }
    }

    if (atWord('while')) {
      next()
      expect('punct', '(')
      const test = parseExpression()
      expect('punct', ')')
      return { type: 'While', test, body: parseStatement(), line }
    }

    if (atWord('foreach')) {
      next()
      expect('punct', '(')
      if (at('word')) next() // the element type
      if (atPunct('[') && peek(1).v === ']') {
        next()
        next()
      }
      const name = expect('word').v
      expect('word', 'in')
      const iter = parseExpression()
      expect('punct', ')')
      return { type: 'ForEach', name, iter, body: parseStatement(), line }
    }

    if (atWord('for')) {
      next()
      expect('punct', '(')
      const init = atPunct(';') ? null : parseSimpleStatement()
      expect('punct', ';')
      const test = atPunct(';') ? null : parseExpression()
      expect('punct', ';')
      const update = atPunct(')') ? null : parseExpressionStatementNoSemi()
      expect('punct', ')')
      return { type: 'For', init, test, update, body: parseStatement(), line }
    }

    if (atWord('return')) {
      next()
      const arg = atPunct(';') ? null : parseExpression()
      expect('punct', ';')
      return { type: 'Return', arg, line }
    }

    if (atWord('break')) {
      next()
      expect('punct', ';')
      return { type: 'Break', line }
    }
    if (atWord('continue')) {
      next()
      expect('punct', ';')
      return { type: 'Continue', line }
    }

    const st = parseSimpleStatement()
    expect('punct', ';')
    return st
  }

  /** A declaration or an expression — the thing a `for` initialiser allows. */
  function parseSimpleStatement() {
    const line = peek().line
    const t = tryType()

    if (t) {
      const decls = []
      for (;;) {
        const name = expect('word').v
        let size = null
        let isArray = t.arr

        // C-style: int nums[4]
        if (atPunct('[')) {
          next()
          isArray = true
          if (!atPunct(']')) size = parseExpression()
          expect('punct', ']')
        }

        let init = null
        if (atPunct('=')) {
          next()
          init = atPunct('{') ? parseArrayLiteral() : parseExpression()
        }
        decls.push({ name, init, isArray, size })
        if (atPunct(',')) {
          next()
          continue
        }
        break
      }
      return { type: 'Declare', cType: t.name, decls, line }
    }

    return { type: 'ExpressionStatement', expr: parseExpression(), line }
  }

  function parseExpressionStatementNoSemi() {
    return { type: 'ExpressionStatement', expr: parseExpression(), line: peek().line }
  }

  function parseArrayLiteral() {
    expect('punct', '{')
    const items = []
    while (!atPunct('}')) {
      items.push(atPunct('{') ? parseArrayLiteral() : parseExpression())
      if (atPunct(',')) next()
    }
    expect('punct', '}')
    return { type: 'ArrayLiteral', items }
  }

  /* --- expressions, lowest precedence first --- */

  function parseExpression() {
    return parseAssignment()
  }

  function parseAssignment() {
    const left = parseTernary()
    const ops = ['=', '+=', '-=', '*=', '/=', '%=']
    if (at('punct') && ops.includes(peek().v)) {
      const op = next().v
      const right = parseAssignment()
      return { type: 'Assign', op, target: left, value: right }
    }
    return left
  }

  function parseTernary() {
    const test = parseBinary(0)
    if (atPunct('?')) {
      next()
      const then = parseAssignment()
      expect('punct', ':')
      const alt = parseAssignment()
      return { type: 'Ternary', test, then, alt }
    }
    return test
  }

  const LEVELS = [['||'], ['&&'], ['==', '!='], ['<', '>', '<=', '>='], ['+', '-'], ['*', '/', '%']]

  function parseBinary(level) {
    if (level >= LEVELS.length) return parseUnary()
    let left = parseBinary(level + 1)
    while (at('punct') && LEVELS[level].includes(peek().v)) {
      const op = next().v
      const right = parseBinary(level + 1)
      left = { type: 'Binary', op, left, right }
    }
    return left
  }

  function parseUnary() {
    if (atPunct('!') || atPunct('-') || atPunct('+')) {
      const op = next().v
      return { type: 'Unary', op, arg: parseUnary() }
    }
    if (atPunct('++') || atPunct('--')) {
      const op = next().v
      return { type: 'Update', op, prefix: true, arg: parseUnary() }
    }
    // Cast: (int)x, (float)total, (double)total
    if (atPunct('(') && peek(1).k === 'word' && TYPE_WORDS.has(peek(1).v) && peek(2).v === ')') {
      next()
      const to = next().v
      next()
      return { type: 'Cast', to, arg: parseUnary() }
    }
    return parsePostfix()
  }

  function parsePostfix() {
    let node = parsePrimary()
    for (;;) {
      if (atPunct('(')) {
        next()
        const args = []
        while (!atPunct(')')) {
          args.push(parseExpression())
          if (atPunct(',')) next()
        }
        expect('punct', ')')
        node = { type: 'Call', callee: node, args }
        continue
      }
      if (atPunct('[')) {
        next()
        const index = parseExpression()
        expect('punct', ']')
        node = { type: 'Index', obj: node, index }
        continue
      }
      if (atPunct('.')) {
        next()
        const name = expect('word').v
        node = { type: 'Member', obj: node, name }
        continue
      }
      if (atPunct('++') || atPunct('--')) {
        const op = next().v
        node = { type: 'Update', op, prefix: false, arg: node }
        continue
      }
      return node
    }
  }

  function parsePrimary() {
    const tk = peek()

    if (tk.k === 'num') {
      next()
      return { type: 'Literal', value: tk.v, dbl: tk.f }
    }
    if (tk.k === 'str') {
      next()
      return { type: 'Literal', value: tk.v }
    }
    if (tk.k === 'char') {
      next()
      return { type: 'Literal', value: tk.v }
    }
    if (tk.k === 'interp') {
      next()
      const parts = tk.v.map((part) =>
        'lit' in part ? { lit: part.lit } : { node: parseExpressionSource(part.expr, dialect) },
      )
      return { type: 'Interp', parts }
    }
    if (tk.k === 'word') {
      if (tk.v === 'true' || tk.v === 'false') {
        next()
        return { type: 'Literal', value: tk.v === 'true' }
      }
      if (tk.v === 'null' || tk.v === 'NULL') {
        next()
        return { type: 'Literal', value: null }
      }
      if (tk.v === 'new') {
        next()
        if (at('word')) next()
        if (atPunct('[')) {
          next()
          const size = atPunct(']') ? null : parseExpression()
          expect('punct', ']')
          if (atPunct('{')) return parseArrayLiteral()
          return { type: 'NewArray', size }
        }
        return { type: 'Literal', value: null }
      }
      next()
      return { type: 'Identifier', name: tk.v }
    }
    if (tk.k === 'punct' && tk.v === '(') {
      next()
      const e = parseExpression()
      expect('punct', ')')
      return e
    }
    if (tk.k === 'punct' && tk.v === '{') {
      return parseArrayLiteral()
    }

    throw new CError(
      `unexpected ${tk.v === null ? 'end of file' : `'${tk.v}'`} in expression`,
      tk.line,
    )
  }

  const program = parseProgram()
  return program
}

/** Parses a bare expression — used for the inside of {} in interpolated strings. */
function parseExpressionSource(source, dialect) {
  const toks = lex(source)
  // Wrap it in a throwaway function so the normal parser path applies.
  const wrapped = [
    { k: 'word', v: 'void', line: 1 },
    { k: 'word', v: '__e', line: 1 },
    { k: 'punct', v: '(', line: 1 },
    { k: 'punct', v: ')', line: 1 },
    { k: 'punct', v: '{', line: 1 },
    { k: 'word', v: 'return', line: 1 },
    ...toks.slice(0, -1),
    { k: 'punct', v: ';', line: 1 },
    { k: 'punct', v: '}', line: 1 },
    { k: 'eof', v: null, line: 1 },
  ]
  const prog = parse(wrapped, dialect)
  return prog.functions[0].body.body[0].arg
}

/* ---------------- Evaluator ---------------- */

class ReturnSignal {
  constructor(value) {
    this.value = value
  }
}
const BREAK = Symbol('break')
const CONTINUE = Symbol('continue')

class CArray {
  constructor(items) {
    this.items = items
  }
  get length() {
    return this.items.length
  }
}

/**
 * A floating-point value. JavaScript cannot tell 12.0 from 12, but C and C#
 * very much can — it decides whether `/` truncates — so doubles carry a tag.
 */
class Dbl {
  constructor(v) {
    this.v = v
  }
}
const raw = (v) => (v instanceof Dbl ? v.v : v)
const isDbl = (v) => v instanceof Dbl
const mkNum = (v, asDouble) => (asDouble ? new Dbl(v) : v)
const FLOAT_TYPES = new Set(['float', 'double', 'decimal'])

class Scope {
  constructor(parent) {
    this.vars = new Map()
    this.parent = parent
  }
  declare(name, value) {
    this.vars.set(name, value)
  }
  has(name) {
    return this.vars.has(name) || (this.parent ? this.parent.has(name) : false)
  }
  get(name, line) {
    if (this.vars.has(name)) return this.vars.get(name)
    if (this.parent) return this.parent.get(name, line)
    throw new CError(`the name '${name}' does not exist in the current context`, line)
  }
  set(name, value, line) {
    if (this.vars.has(name)) {
      this.vars.set(name, value)
      return
    }
    if (this.parent) return this.parent.set(name, value, line)
    throw new CError(`the name '${name}' does not exist in the current context`, line)
  }
}

export function runCFamily(source, dialect /* 'c' | 'csharp' */) {
  const out = []
  let steps = 0

  const write = (text) => {
    out.push(String(text))
    if (out.join('').length > MAX_OUTPUT) {
      throw new CError('too much output — is a loop printing forever?')
    }
  }

  const tick = (line) => {
    if (++steps > MAX_STEPS) {
      throw new CError('this ran too long and was stopped — check for a loop that never ends', line)
    }
  }

  let program
  try {
    program = parse(lex(source), dialect)
  } catch (err) {
    return { ok: false, output: '', error: err.message }
  }

  const functions = new Map(program.functions.map((f) => [f.name, f]))
  const globals = new Scope(null)

  function fmtNumber(v) {
    if (typeof v !== 'number') return String(v)
    if (Number.isInteger(v)) return String(v)
    // Match what a learner sees in a real console: no trailing noise.
    return String(Math.round(v * 1e10) / 1e10)
  }

  function str(v) {
    if (v === null || v === undefined) return ''
    if (v instanceof Dbl) return fmtNumber(v.v)
    if (typeof v === 'boolean') return dialect === 'csharp' ? (v ? 'True' : 'False') : v ? '1' : '0'
    if (v instanceof CArray) return `[${v.items.map(str).join(', ')}]`
    return fmtNumber(v)
  }

  function truthy(value) {
    const v = raw(value)
    if (typeof v === 'boolean') return v
    if (typeof v === 'number') return v !== 0
    return Boolean(v)
  }

  /** printf("%d apples\n", 3) */
  function printf(args, line) {
    const fmt = args[0]
    if (typeof fmt !== 'string') throw new CError('printf expects a format string first', line)
    let ai = 1
    let result = ''
    for (let i = 0; i < fmt.length; i++) {
      if (fmt[i] !== '%') {
        result += fmt[i]
        continue
      }
      if (fmt[i + 1] === '%') {
        result += '%'
        i++
        continue
      }
      const m = /^%[-+ 0]*(\d+)?(?:\.(\d+))?([dioufFeEgGxXcsp])/.exec(fmt.slice(i))
      if (!m) {
        result += fmt[i]
        continue
      }
      const [whole, , prec, conv] = m
      const value = raw(args[ai++])
      if ('dioxX'.includes(conv)) result += String(Math.trunc(Number(value) || 0))
      else if ('fFeEgG'.includes(conv)) {
        const digits = prec === undefined ? 6 : Number(prec)
        result += Number(value || 0).toFixed(digits)
      } else if (conv === 'c') result += String(value)
      else result += str(value)
      i += whole.length - 1
    }
    write(result)
  }

  function callBuiltin(name, args, line) {
    switch (name) {
      case 'printf':
        printf(args, line)
        return null
      case 'puts':
        write(str(args[0]) + '\n')
        return null
      case 'Console.WriteLine':
        write(args.map(str).join(' ') + '\n')
        return null
      case 'Console.Write':
        write(args.map(str).join(' '))
        return null
      case 'int.Parse':
      case 'Int32.Parse': {
        const n = parseInt(String(args[0]).trim(), 10)
        if (Number.isNaN(n)) {
          throw new CError(`the input string '${args[0]}' was not in a correct format`, line)
        }
        return n
      }
      case 'double.Parse':
      case 'float.Parse': {
        const n = parseFloat(String(args[0]).trim())
        if (Number.isNaN(n)) {
          throw new CError(`the input string '${args[0]}' was not in a correct format`, line)
        }
        return n
      }
      case 'Convert.ToInt32':
        return Math.trunc(Number(raw(args[0])) || 0)
      case 'Convert.ToString':
        return str(args[0])
      case 'Math.Abs':
      case 'abs':
        return mkNum(Math.abs(Number(raw(args[0]))), isDbl(args[0]))
      case 'Math.Max':
        return mkNum(Math.max(...args.map((a) => Number(raw(a)))), args.some(isDbl))
      case 'Math.Min':
        return mkNum(Math.min(...args.map((a) => Number(raw(a)))), args.some(isDbl))
      case 'Math.Sqrt':
      case 'sqrt':
        return new Dbl(Math.sqrt(Number(raw(args[0]))))
      case 'Math.Pow':
      case 'pow':
        return new Dbl(Math.pow(Number(raw(args[0])), Number(raw(args[1]))))
      case 'Math.Round':
        return Math.round(Number(raw(args[0])))
      case 'Math.Floor':
      case 'floor':
        return Math.floor(Number(raw(args[0])))
      default:
        return undefined
    }
  }

  function memberPath(node) {
    if (node.type === 'Identifier') return node.name
    if (node.type === 'Member') {
      const base = memberPath(node.obj)
      return base === null ? null : `${base}.${node.name}`
    }
    return null
  }

  function evaluate(node, scope) {
    switch (node.type) {
      case 'Literal':
        return node.dbl ? new Dbl(node.value) : node.value

      case 'Identifier':
        return scope.get(node.name, node.line)

      case 'Interp':
        return node.parts
          .map((part) => ('lit' in part ? part.lit : str(evaluate(part.node, scope))))
          .join('')

      case 'ArrayLiteral':
        return new CArray(node.items.map((it) => evaluate(it, scope)))

      case 'NewArray': {
        const n = node.size ? Number(evaluate(node.size, scope)) : 0
        return new CArray(new Array(n).fill(0))
      }

      case 'Cast': {
        const v = evaluate(node.arg, scope)
        if (node.to === 'int' || node.to === 'long' || node.to === 'short' || node.to === 'byte') {
          return Math.trunc(Number(raw(v)))
        }
        if (node.to === 'string') return str(v)
        if (node.to === 'bool') return truthy(v)
        if (node.to === 'char') return str(v)
        return new Dbl(Number(raw(v)))
      }

      case 'Unary': {
        const v = evaluate(node.arg, scope)
        if (node.op === '!') return !truthy(v)
        if (node.op === '-') return mkNum(-Number(raw(v)), isDbl(v))
        return mkNum(Number(raw(v)), isDbl(v))
      }

      case 'Binary': {
        if (node.op === '&&') {
          return truthy(evaluate(node.left, scope)) ? truthy(evaluate(node.right, scope)) : false
        }
        if (node.op === '||') {
          return truthy(evaluate(node.left, scope)) ? true : truthy(evaluate(node.right, scope))
        }

        const l = evaluate(node.left, scope)
        const r = evaluate(node.right, scope)
        const ln = raw(l)
        const rn = raw(r)
        // Mixing a double into integer arithmetic makes the result a double,
        // exactly as it does in C and C#.
        const d = isDbl(l) || isDbl(r)

        switch (node.op) {
          case '+':
            if (typeof ln === 'string' || typeof rn === 'string') return str(l) + str(r)
            return mkNum(Number(ln) + Number(rn), d)
          case '-':
            return mkNum(Number(ln) - Number(rn), d)
          case '*':
            return mkNum(Number(ln) * Number(rn), d)
          case '/': {
            const div = Number(rn)
            if (div === 0) throw new CError('attempted to divide by zero', node.line)
            const res = Number(ln) / div
            if (d) return new Dbl(res)
            // Integer division truncates in both languages.
            return Math.trunc(res)
          }
          case '%': {
            const div = Number(rn)
            if (div === 0) throw new CError('attempted to divide by zero', node.line)
            return mkNum(Number(ln) % div, d)
          }
          case '==':
            return typeof ln === 'string' || typeof rn === 'string' ? str(l) === str(r) : ln === rn
          case '!=':
            return typeof ln === 'string' || typeof rn === 'string' ? str(l) !== str(r) : ln !== rn
          case '<':
            return ln < rn
          case '>':
            return ln > rn
          case '<=':
            return ln <= rn
          case '>=':
            return ln >= rn
          default:
            throw new CError(`operator '${node.op}' is not supported here`, node.line)
        }
      }

      case 'Ternary':
        return truthy(evaluate(node.test, scope))
          ? evaluate(node.then, scope)
          : evaluate(node.alt, scope)

      case 'Assign': {
        let value = evaluate(node.value, scope)
        if (node.op !== '=') {
          const current = evaluate(node.target, scope)
          const op = node.op[0]
          value = evaluate(
            { type: 'Binary', op, left: { type: 'Literal', value: current }, right: { type: 'Literal', value } },
            scope,
          )
        }
        assign(node.target, value, scope)
        return value
      }

      case 'Update': {
        const current = evaluate(node.arg, scope)
        const d = isDbl(current)
        const old = Number(raw(current))
        const updated = node.op === '++' ? old + 1 : old - 1
        assign(node.arg, mkNum(updated, d), scope)
        return mkNum(node.prefix ? updated : old, d)
      }

      case 'Index': {
        const obj = evaluate(node.obj, scope)
        const idx = Number(evaluate(node.index, scope))
        if (obj instanceof CArray) {
          if (idx < 0 || idx >= obj.items.length) {
            throw new CError(
              `index ${idx} is outside the bounds of the array (it has ${obj.items.length} items, numbered 0 to ${obj.items.length - 1})`,
              node.line,
            )
          }
          return obj.items[idx]
        }
        if (typeof obj === 'string') return obj[idx] ?? ''
        throw new CError('this value cannot be indexed with []', node.line)
      }

      case 'Member': {
        const path = memberPath(node)
        if (path && /^(Console|Math|int|double|float|Convert|Int32)\./.test(path)) {
          return { __builtin: path }
        }
        const obj = evaluate(node.obj, scope)
        if (node.name === 'Length' || node.name === 'length') {
          if (obj instanceof CArray) return obj.items.length
          if (typeof obj === 'string') return obj.length
        }
        throw new CError(`'${node.name}' is not available on this value`, node.line)
      }

      case 'Call': {
        const path = memberPath(node.callee)
        const args = node.args.map((a) => evaluate(a, scope))

        if (path) {
          const builtin = callBuiltin(path, args, node.line)
          if (builtin !== undefined) return builtin

          const fn = functions.get(path)
          if (fn) return callFunction(fn, args, node.line)

          if (path.includes('.')) {
            throw new CError(`'${path}' is not part of this mini runner`, node.line)
          }
          throw new CError(
            `the name '${path}' does not exist in the current context`,
            node.line,
          )
        }
        throw new CError('this is not something you can call', node.line)
      }

      default:
        throw new CError(`cannot evaluate ${node.type}`, node.line)
    }
  }

  function assign(target, value, scope) {
    if (target.type === 'Identifier') {
      scope.set(target.name, value, target.line)
      return
    }
    if (target.type === 'Index') {
      const obj = evaluate(target.obj, scope)
      const idx = Number(evaluate(target.index, scope))
      if (!(obj instanceof CArray)) throw new CError('this value cannot be indexed', target.line)
      if (idx < 0 || idx >= obj.items.length) {
        throw new CError(
          `index ${idx} is outside the bounds of the array (it has ${obj.items.length} items)`,
          target.line,
        )
      }
      obj.items[idx] = value
      return
    }
    throw new CError('cannot assign to this', target.line)
  }

  function execBlock(stmts, scope) {
    for (const st of stmts) {
      const r = exec(st, scope)
      if (r !== undefined) return r
    }
    return undefined
  }

  function exec(node, scope) {
    tick(node.line)

    switch (node.type) {
      case 'Block':
        return execBlock(node.body, new Scope(scope))

      case 'Empty':
        return undefined

      case 'Declare': {
        for (const d of node.decls) {
          let value
          if (d.init) {
            // An initialiser always wins, including `char name[] = "Saba"`,
            // where the declared array actually holds a string.
            value = evaluate(d.init, scope)
          } else if (d.isArray) {
            const n = d.size ? Number(evaluate(d.size, scope)) : 0
            value = new CArray(new Array(n).fill(defaultFor(node.cType)))
          } else {
            value = defaultFor(node.cType)
          }
          // A variable declared float/double holds a double even when the
          // initialiser looked like a whole number.
          if (FLOAT_TYPES.has(node.cType) && typeof value === 'number') value = new Dbl(value)
          scope.declare(d.name, value)
        }
        return undefined
      }

      case 'ExpressionStatement':
        evaluate(node.expr, scope)
        return undefined

      case 'If':
        if (truthy(evaluate(node.test, scope))) return exec(node.then, scope)
        if (node.alt) return exec(node.alt, scope)
        return undefined

      case 'While':
        while (truthy(evaluate(node.test, scope))) {
          tick(node.line)
          const r = exec(node.body, scope)
          if (r === BREAK) break
          if (r !== undefined && r !== CONTINUE) return r
        }
        return undefined

      case 'For': {
        const loopScope = new Scope(scope)
        if (node.init) exec(node.init, loopScope)
        while (node.test ? truthy(evaluate(node.test, loopScope)) : true) {
          tick(node.line)
          const r = exec(node.body, loopScope)
          if (r === BREAK) break
          if (r !== undefined && r !== CONTINUE) return r
          if (node.update) exec(node.update, loopScope)
        }
        return undefined
      }

      case 'ForEach': {
        const iter = evaluate(node.iter, scope)
        const items =
          iter instanceof CArray ? iter.items : typeof iter === 'string' ? [...iter] : null
        if (!items) throw new CError('foreach needs an array to walk through', node.line)
        for (const item of items) {
          tick(node.line)
          const inner = new Scope(scope)
          inner.declare(node.name, item)
          const r = exec(node.body, inner)
          if (r === BREAK) break
          if (r !== undefined && r !== CONTINUE) return r
        }
        return undefined
      }

      case 'Return':
        return new ReturnSignal(node.arg ? evaluate(node.arg, scope) : null)

      case 'Break':
        return BREAK

      case 'Continue':
        return CONTINUE

      default:
        throw new CError(`cannot run ${node.type}`, node.line)
    }
  }

  function defaultFor(type) {
    if (type === 'string') return ''
    if (type === 'bool') return false
    if (FLOAT_TYPES.has(type)) return new Dbl(0)
    return 0
  }

  function callFunction(fn, args, line) {
    const scope = new Scope(globals)
    fn.params.forEach((param, i) => scope.declare(param.name, args[i] ?? defaultFor(param.type)))
    const r = execBlock(fn.body.body, scope)
    if (r instanceof ReturnSignal) return r.value
    return null
  }

  const entry = functions.get('main') || functions.get('Main')
  if (!entry) {
    return {
      ok: false,
      output: '',
      error:
        dialect === 'csharp'
          ? "no entry point found — your code needs a 'static void Main()' method"
          : "no entry point found — your code needs an 'int main()' function",
    }
  }

  try {
    callFunction(entry, [], 0)
    return { ok: true, output: out.join(''), error: null }
  } catch (err) {
    if (err instanceof CError) return { ok: false, output: out.join(''), error: err.message }
    return { ok: false, output: out.join(''), error: err.message || String(err) }
  }
}

