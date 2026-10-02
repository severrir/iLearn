/**
 * One icon set, drawn here: 24px grid, 1.75 stroke, round caps and joins.
 * Filled shapes are used only where the real object is solid (the play
 * triangle, the Discord mark, a lit dot).
 */

const PATHS = {
  moon: <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.1" />
      <path d="M12 2.6v2.1M12 19.3v2.1M4.4 4.4l1.5 1.5M18.1 18.1l1.5 1.5M2.6 12h2.1M19.3 12h2.1M4.4 19.6l1.5-1.5M18.1 5.9l1.5-1.5" />
    </>
  ),
  soundOn: (
    <>
      <path d="M5 9.5h3L12 6v12l-4-3.5H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
      <path d="M15.6 9.2a4 4 0 0 1 0 5.6M18.3 6.5a7.8 7.8 0 0 1 0 11" />
    </>
  ),
  soundOff: (
    <>
      <path d="M5 9.5h3L12 6v12l-4-3.5H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z" />
      <path d="M16 10l4 4M20 10l-4 4" />
    </>
  ),
  menu: <path d="M3.8 7h16.4M3.8 12h16.4M3.8 17h16.4" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  play: <path d="M8 5.6v12.8l10.5-6.4Z" fill="currentColor" stroke="none" />,
  warning: (
    <>
      <path d="M12 4.2 2.9 19.3h18.2Z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="16.9" r=".4" fill="currentColor" stroke="none" />
    </>
  ),
  arrow: <path d="M4.5 12h14.5M13 6.2 19.3 12 13 17.8" />,
  check: <path d="M4.8 12.6 9.6 17.4 19.2 6.8" />,
  lock: (
    <>
      <rect x="4.6" y="10.4" width="14.8" height="10" rx="2.4" />
      <path d="M8.2 10.4V7.6a3.8 3.8 0 0 1 7.6 0v2.8" />
    </>
  ),
  copy: (
    <>
      <rect x="8.6" y="8.6" width="11" height="11" rx="2.2" />
      <path d="M15.4 5.4H6.6a2.2 2.2 0 0 0-2.2 2.2v8.8" />
    </>
  ),
  discord: (
    <path
      fill="currentColor"
      stroke="none"
      d="M19.3 5.9a16.3 16.3 0 0 0-4-1.2l-.3.5a12 12 0 0 1 3.5 1.8 16.6 16.6 0 0 0-13 0 12 12 0 0 1 3.5-1.8l-.3-.5c-1.4.2-2.8.6-4 1.2C2.2 9.5 1.4 13 1.8 16.5a16.5 16.5 0 0 0 5 2.5l.9-1.5c-.8-.3-1.6-.7-2.3-1.2l.6-.4a11.8 11.8 0 0 0 10 0l.6.4c-.7.5-1.5.9-2.3 1.2l.9 1.5a16.4 16.4 0 0 0 5-2.5c.5-4.1-.7-7.6-2.9-10.6ZM8.4 14.3c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7.2 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z"
    />
  ),
  spark: (
    <path d="M12 3.4l2.1 5.3 5.3 2.1-5.3 2.1L12 18.2l-2.1-5.3-5.3-2.1 5.3-2.1Z" />
  ),
  people: (
    <>
      <circle cx="9.2" cy="8.4" r="3.4" />
      <path d="M3.4 19.4a5.8 5.8 0 0 1 11.6 0" />
      <path d="M16 5.4a3.4 3.4 0 0 1 0 6.6M17.2 14.4a5.8 5.8 0 0 1 3.4 5" />
    </>
  ),
  book: (
    <>
      <path d="M4.4 5.2A1.8 1.8 0 0 1 6.2 3.4H19v14.2H6.2a1.8 1.8 0 0 0-1.8 1.8Z" />
      <path d="M4.4 19.4a1.8 1.8 0 0 1 1.8-1.8H19v3H6.2a1.8 1.8 0 0 1-1.8-1.2Z" />
    </>
  ),
  chat: (
    <path d="M20.4 12.4c0 3.9-3.8 7-8.4 7a9.8 9.8 0 0 1-2.6-.3l-5 1.5 1.6-4A6.6 6.6 0 0 1 3.6 12.4c0-3.9 3.8-7 8.4-7s8.4 3.1 8.4 7Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 4.8 6v5.6c0 4.2 3 7.6 7.2 9.2 4.2-1.6 7.2-5 7.2-9.2V6Z" />
      <path d="M9 12.2l2.2 2.2 4-4.2" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = '', style }) {
  const path = PATHS[name]
  if (!path) return null
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  )
}
