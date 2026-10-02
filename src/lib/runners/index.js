import { spawn, converse } from './worker.js'
import { runCFamily } from './cfamily.js'

/* ============================================================
   One entry point for every track.
   Every runner resolves to { ok, output, error }.
   `error` may be one of the sentinels BOOT_TIMEOUT / BOOT_FAILED /
   TIMEOUT, which the UI turns into a sentence in the reader's language.
   ============================================================ */

export const RUNTIME_INFO = {
  python: { name: 'Python', size: '6 MB', real: true },
  lua: { name: 'Lua', size: '400 KB', real: true },
  js: { name: 'JavaScript', size: null, real: true },
  web: { name: 'HTML + CSS', size: null, real: true },
  c: { name: 'C', size: null, real: false },
  csharp: { name: 'C#', size: null, real: false },
}

/* ---------------- JavaScript ---------------- */

const JS_WORKER = `
const lines = [];
const show = (v, seen) => {
  if (typeof v === 'string') return v;
  if (v === null) return 'null';
  if (v === undefined) return 'undefined';
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (typeof v === 'function') return '[function ' + (v.name || 'anonymous') + ']';
  seen = seen || new Set();
  if (seen.has(v)) return '[circular]';
  seen.add(v);
  if (Array.isArray(v)) return '[' + v.map((x) => show(x, seen)).join(', ') + ']';
  try {
    return '{ ' + Object.keys(v).map((k) => k + ': ' + show(v[k], seen)).join(', ') + ' }';
  } catch (e) { return String(v); }
};
const record = (args) => {
  lines.push(args.map((a) => show(a)).join(' '));
  if (lines.length > 5000) throw new Error('too much output — is a loop printing forever?');
};
self.console = {
  log: (...a) => record(a),
  info: (...a) => record(a),
  warn: (...a) => record(a),
  error: (...a) => record(a),
  debug: (...a) => record(a),
};
self.onmessage = (e) => {
  try {
    // Indirect eval keeps learner code out of this closure's scope.
    (0, eval)(e.data.code);
    self.postMessage({ type: 'result', ok: true, output: lines.join('\\n') });
  } catch (err) {
    self.postMessage({
      type: 'result',
      ok: false,
      output: lines.join('\\n'),
      error: (err && err.name ? err.name + ': ' : '') + (err && err.message ? err.message : String(err)),
    });
  }
};
self.postMessage({ type: 'ready' });
`

/* ---------------- Python (Pyodide) ---------------- */

const PY_WORKER = `
importScripts('https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js');
let pyodide = null;
let lines = [];

async function boot() {
  pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' });
  pyodide.setStdout({ batched: (s) => lines.push(s) });
  pyodide.setStderr({ batched: (s) => lines.push(s) });
  self.postMessage({ type: 'ready' });
}

self.onmessage = async (e) => {
  lines = [];
  try {
    await pyodide.runPythonAsync(e.data.code);
    self.postMessage({ type: 'result', ok: true, output: lines.join('\\n') });
  } catch (err) {
    let msg = String(err && err.message ? err.message : err);
    // Pyodide prefixes a traceback that mentions its own internals; the
    // useful part for a beginner is the last few lines.
    const parts = msg.trim().split('\\n');
    const tail = parts.slice(-6).join('\\n');
    self.postMessage({ type: 'result', ok: false, output: lines.join('\\n'), error: tail });
  }
};

boot().catch((err) => {
  self.postMessage({ type: 'result', ok: false, output: '', error: 'BOOT_FAILED' });
});
`

/* ---------------- Lua (wasmoon) ---------------- */

const LUA_WORKER = `
let lua = null;
let lines = [];

function show(v) {
  if (v === null || v === undefined) return 'nil';
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  if (typeof v === 'number') return Number.isInteger(v) ? String(v) : String(v);
  if (typeof v === 'object') return '[table]';
  return String(v);
}

async function boot() {
  const mod = await import('https://cdn.jsdelivr.net/npm/wasmoon@1.16.0/+esm');
  const factory = new mod.LuaFactory('https://cdn.jsdelivr.net/npm/wasmoon@1.16.0/dist/glue.wasm');
  lua = await factory.createEngine();
  lua.global.set('print', (...args) => {
    lines.push(args.map(show).join('\\t'));
    if (lines.length > 5000) throw new Error('too much output — is a loop printing forever?');
  });
  self.postMessage({ type: 'ready' });
}

self.onmessage = async (e) => {
  lines = [];
  try {
    await lua.doString(e.data.code);
    self.postMessage({ type: 'result', ok: true, output: lines.join('\\n') });
  } catch (err) {
    let msg = String(err && err.message ? err.message : err);
    msg = msg.replace(/^\\[string "[^"]*"\\]:/, 'line ');
    self.postMessage({ type: 'result', ok: false, output: lines.join('\\n'), error: msg });
  }
};

boot().catch(() => {
  self.postMessage({ type: 'result', ok: false, output: '', error: 'BOOT_FAILED' });
});
`

/**
 * Runs a learner's code for the given track.
 * @param {string} runner one of python | lua | js | c | csharp | web
 * @param {string} code
 * @param {{onBoot?: () => void}} [opts] onBoot fires when a language runtime
 *        has finished downloading, so the UI can drop its loading state.
 */
export async function runCode(runner, code, opts = {}) {
  if (runner === 'c' || runner === 'csharp') {
    // Synchronous, but step-limited inside the interpreter itself.
    return runCFamily(code, runner)
  }

  if (runner === 'web') {
    // The preview iframe renders this directly; nothing to execute here.
    return { ok: true, output: '', error: null }
  }

  const source = runner === 'python' ? PY_WORKER : runner === 'lua' ? LUA_WORKER : JS_WORKER
  const type = runner === 'lua' ? 'module' : 'classic'

  let worker
  try {
    worker = spawn(source, { type })
  } catch {
    return { ok: false, output: '', error: 'BOOT_FAILED' }
  }

  return converse(worker, { code }, {
    runMs: runner === 'js' ? 5000 : 10000,
    bootMs: runner === 'python' ? 120000 : 45000,
    onBoot: opts.onBoot,
  })
}

/** True when this runner needs a download before its first run. */
export function needsDownload(runner) {
  return runner === 'python' || runner === 'lua'
}
