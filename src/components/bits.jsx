import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { getProgress, subscribe } from '../lib/progress.js'
import { prefersReducedMotion } from '../lib/fx.js'

/** Live progress state, re-rendering whenever localStorage progress changes. */
export function useProgress() {
  return useSyncExternalStore(subscribe, getProgress, getProgress)
}

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12, ...options },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, inView]
}

/** Fades a section up by 24px the first time it scrolls into view. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Counts up to a value once visible. Zero stays zero, with no animation. */
export function Counter({ value, duration = 1500 }) {
  const [ref, inView] = useInView()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || value === 0) return
    if (prefersReducedMotion()) {
      setN(value)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      // ease-out so it decelerates into the final number
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="tnum">
      {value === 0 ? 0 : n}
    </span>
  )
}

/** Segmented-LED readout. */
export function Led({ children, size = '', tone = '', unit }) {
  return (
    <span className={`led ${size ? `led--${size}` : ''} ${tone ? `led--${tone}` : ''}`}>
      <span className="tnum">{children}</span>
      {unit && <span className="led__unit">{unit}</span>}
    </span>
  )
}

/** A silkscreened section label struck onto the cabinet. */
export function Silk({ children, className = '' }) {
  return <p className={`silk ${className}`}>{children}</p>
}

/** The strict mono spec strip every track and lesson card carries. */
export function Spec({ items }) {
  return (
    <p className="spec">
      {items.filter(Boolean).map(([label, value]) => (
        <span key={label}>
          {label}
          <b>{value}</b>
        </span>
      ))}
    </p>
  )
}

/** Slowly drifting code symbols behind the page. Off under reduced motion. */
export function Drift() {
  const [symbols] = useState(() => {
    const glyphs = ['{', '}', '<', '>', '/', ';', '(', ')', '[', ']', '=', '*']
    return Array.from({ length: 16 }, (_, i) => ({
      id: i,
      char: glyphs[i % glyphs.length],
      left: Math.round((i * 61) % 100),
      size: 18 + ((i * 7) % 30),
      duration: 8 + ((i * 3) % 8),
      delay: -((i * 2.3) % 14),
    }))
  })

  return (
    <div className="drift" aria-hidden="true">
      {symbols.map((s) => (
        <span
          key={s.id}
          style={{
            left: `${s.left}%`,
            top: '100%',
            fontSize: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.char}
        </span>
      ))}
    </div>
  )
}

/** Renders a short text with `backticks` as inline code and **bold**. */
export function Rich({ text, as: Tag = 'p', className = '' }) {
  const nodes = []
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*)/g
  let last = 0
  let m
  let key = 0

  while ((m = pattern.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    const token = m[0]
    if (token.startsWith('`')) {
      nodes.push(
        <code className="ic" key={key++}>
          {token.slice(1, -1)}
        </code>,
      )
    } else {
      nodes.push(<strong key={key++}>{token.slice(2, -2)}</strong>)
    }
    last = m.index + token.length
  }
  if (last < text.length) nodes.push(text.slice(last))

  return <Tag className={className}>{nodes}</Tag>
}
