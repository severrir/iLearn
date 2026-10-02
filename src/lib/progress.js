// Progress lives in this browser and nowhere else.
// No account, no server, no sync. The site says so out loud on the Impact
// and Safety pages, because a learner should never think it is backed up.

const KEY = 'ilearn.progress.v1'
const XP_PER_LEVEL = 250

const EMPTY = {
  track: null,
  done: {}, // "python:3": true
  ran: 0, // how many times they pressed Run
  xp: 0,
  badges: {}, // firstCode, bugHunter, helper, finisher, egg
}

let cache = null
const listeners = new Set()

function read() {
  if (cache) return cache
  try {
    const raw = localStorage.getItem(KEY)
    cache = raw ? { ...EMPTY, ...JSON.parse(raw) } : { ...EMPTY }
  } catch {
    // Private mode, blocked storage, corrupted JSON — all the same to us.
    cache = { ...EMPTY }
  }
  return cache
}

function write(next) {
  cache = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    // Storage is unavailable. The session still works; it just will not persist.
  }
  listeners.forEach((fn) => fn(next))
}

export function getProgress() {
  return read()
}

export function subscribe(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function setTrack(trackId) {
  write({ ...read(), track: trackId })
}

export function lessonKey(trackId, n) {
  return `${trackId}:${n}`
}

export function isDone(trackId, n) {
  return Boolean(read().done[lessonKey(trackId, n)])
}

/** Returns the XP actually awarded — 0 if this lesson was already finished. */
export function completeLesson(trackId, n, xp) {
  const state = read()
  const key = lessonKey(trackId, n)
  if (state.done[key]) return 0

  const done = { ...state.done, [key]: true }
  const badges = { ...state.badges }

  if (n === 7) badges.bugHunter = true

  const finishedTrack = [1, 2, 3, 4, 5, 6, 7, 8].every((i) => done[lessonKey(trackId, i)])
  if (finishedTrack) badges.finisher = true

  write({ ...state, done, badges, xp: state.xp + xp })
  return xp
}

export function countDone(trackId) {
  const done = read().done
  return [1, 2, 3, 4, 5, 6, 7, 8].filter((i) => done[lessonKey(trackId, i)]).length
}

export function totalDone() {
  return Object.keys(read().done).length
}

/** The first lesson they have not finished, or 8 when the track is complete. */
export function nextLesson(trackId) {
  for (let i = 1; i <= 8; i++) if (!isDone(trackId, i)) return i
  return 8
}

export function recordRun() {
  const state = read()
  const badges = { ...state.badges }
  let xp = state.xp
  if (!badges.firstCode) {
    badges.firstCode = true
    xp += 10
  }
  write({ ...state, ran: state.ran + 1, badges, xp })
}

export function awardBadge(name, xp = 0) {
  const state = read()
  if (state.badges[name]) return false
  write({ ...state, badges: { ...state.badges, [name]: true }, xp: state.xp + xp })
  return true
}

export function levelInfo() {
  const { xp } = read()
  const level = Math.floor(xp / XP_PER_LEVEL) + 1
  const into = xp % XP_PER_LEVEL
  return {
    xp,
    level,
    into,
    need: XP_PER_LEVEL,
    toNext: XP_PER_LEVEL - into,
    percent: Math.round((into / XP_PER_LEVEL) * 100),
  }
}

export function resetProgress() {
  write({ ...EMPTY })
}
