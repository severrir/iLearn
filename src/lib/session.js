import { SESSION } from '../data/community.js'

const MIN = 60 * 1000
const HOUR = 60 * MIN

/**
 * The weekly session is fixed to Tbilisi wall-clock time (UTC+4, no daylight
 * saving), so the maths is done in UTC and never touches the visitor's own
 * timezone. Someone opening this from Berlin sees the correct countdown.
 */
export function sessionState(now = new Date()) {
  const { weekday, hour, minute, tzOffsetHours, durationMinutes } = SESSION

  // Shift into Tbilisi local time so weekday and hour are read there.
  const tb = new Date(now.getTime() + tzOffsetHours * HOUR)

  const day = tb.getUTCDay()
  const minsNow = tb.getUTCHours() * 60 + tb.getUTCMinutes()
  const minsStart = hour * 60 + minute

  let daysAhead = (weekday - day + 7) % 7
  if (daysAhead === 0 && minsNow >= minsStart + durationMinutes) daysAhead = 7

  // Start of the session, expressed back in real UTC.
  const startTb = Date.UTC(
    tb.getUTCFullYear(),
    tb.getUTCMonth(),
    tb.getUTCDate() + daysAhead,
    hour,
    minute,
    0,
  )
  const start = startTb - tzOffsetHours * HOUR
  const end = start + durationMinutes * MIN

  const live = now.getTime() >= start && now.getTime() < end
  const msUntil = Math.max(0, start - now.getTime())

  return {
    live,
    start: new Date(start),
    end: new Date(end),
    msUntil,
    parts: splitDuration(live ? end - now.getTime() : msUntil),
  }
}

export function splitDuration(ms) {
  const total = Math.max(0, Math.floor(ms / 1000))
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    mins: Math.floor((total % 3600) / 60),
    secs: total % 60,
  }
}

export const pad2 = (n) => String(n).padStart(2, '0')
