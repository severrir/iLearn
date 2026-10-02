// Confetti, the optional pop, and the theme switch.
// All three check reduced motion or an explicit opt-in before doing anything.

import { TRACKS } from '../data/tracks.js'

// Confetti comes out in the six key-cap colours, read from the tracks
// themselves — so adding or recolouring a track recolours the celebration
// instead of leaving a second copy of the palette to drift.
const PALETTE = TRACKS.map((track) => track.color)

export function prefersReducedMotion() {
  return (
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** A one-second burst from a point, in the site's own colours. */
export function confetti(originX = 0.5, originY = 0.45) {
  if (prefersReducedMotion() || typeof document === 'undefined') return

  const canvas = document.createElement('canvas')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: '9999',
  })
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)

  const w = window.innerWidth
  const h = window.innerHeight
  const ox = w * originX
  const oy = h * originY

  const pieces = Array.from({ length: 90 }, () => {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.1
    const speed = 7 + Math.random() * 11
    return {
      x: ox,
      y: oy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 5 + Math.random() * 7,
      color: PALETTE[(Math.random() * PALETTE.length) | 0],
      spin: (Math.random() - 0.5) * 0.4,
      rot: Math.random() * Math.PI,
      life: 1,
      square: Math.random() > 0.4,
    }
  })

  const start = performance.now()

  function frame(now) {
    const elapsed = now - start
    ctx.clearRect(0, 0, w, h)

    for (const p of pieces) {
      p.vy += 0.34 // gravity
      p.vx *= 0.99
      p.x += p.vx
      p.y += p.vy
      p.rot += p.spin
      p.life = Math.max(0, 1 - elapsed / 1000)

      ctx.save()
      ctx.globalAlpha = p.life
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.fillStyle = p.color
      if (p.square) ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
      else {
        ctx.beginPath()
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    if (elapsed < 1000) requestAnimationFrame(frame)
    else canvas.remove()
  }

  requestAnimationFrame(frame)
}

/* ---------------- Sound: off unless asked for ---------------- */

const SOUND_KEY = 'ilearn.sound'
let audioCtx = null

export function soundOn() {
  try {
    return localStorage.getItem(SOUND_KEY) === 'on'
  } catch {
    return false
  }
}

export function setSound(on) {
  try {
    localStorage.setItem(SOUND_KEY, on ? 'on' : 'off')
  } catch {
    /* preference simply will not persist */
  }
}

/** A short soft pop. Never plays unless the learner switched sound on. */
export function pop(frequency = 520) {
  if (!soundOn()) return
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)()
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.6, audioCtx.currentTime + 0.09)
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.16, audioCtx.currentTime + 0.012)
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.17)
    osc.connect(gain).connect(audioCtx.destination)
    osc.start()
    osc.stop(audioCtx.currentTime + 0.18)
  } catch {
    /* audio blocked by the browser; silence is an acceptable outcome */
  }
}

/* ---------------- Theme ---------------- */

const THEME_KEY = 'ilearn.theme'

export function getTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    /* fall through */
  }
  // Dark is the default: this is a cabinet in a dark arcade, and most
  // learners open it in the evening.
  return 'dark'
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    /* preference will not persist */
  }
}
