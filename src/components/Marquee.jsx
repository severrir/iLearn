import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Mascot from './Mascot.jsx'
import Icon from './Icon.jsx'
import { useLang } from '../i18n/index.jsx'
import { DISCORD_INVITE } from '../data/community.js'
import { getTheme, applyTheme, soundOn, setSound, pop } from '../lib/fx.js'

const LINKS = [
  { to: '/tracks', key: 'nav.lessons' },
  { to: '/community', key: 'nav.community' },
  { to: '/help', key: 'nav.help' },
  { to: '/teach', key: 'nav.teach' },
  { to: '/impact', key: 'nav.impact' },
  { to: '/about', key: 'nav.about' },
]

export default function Marquee() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getTheme)
  const [sound, setSnd] = useState(soundOn)
  const location = useLocation()

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const toggleSound = () => {
    const next = !sound
    setSound(next)
    setSnd(next)
    if (next) pop(660)
  }

  return (
    <header className="marquee">
      <div className="wrap marquee__in">
        <Link to="/" className="marquee__brand">
          <Mascot size={34} pose="idle" />
          <span>iLearn</span>
        </Link>

        <span className="lamp" aria-label="Free play">
          <span className="lamp__bulb" />
          FREE PLAY
        </span>

        <nav aria-label="Main" className="marquee__navwrap">
          <ul className={`marquee__nav ${open ? 'marquee__nav--open' : ''}`}>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="marquee__link">
                  {t(link.key)}
                </NavLink>
              </li>
            ))}

            {/* On narrow screens the header drops Join and the two preference
                toggles for space, so they live here and stay reachable. */}
            <li className="marquee__menurow">
              <a
                className="btn btn--mint btn--sm"
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="discord" size={18} />
                {t('common.join')}
              </a>
              <button
                type="button"
                className="ctrl"
                onClick={toggleTheme}
                aria-label={t('common.theme')}
              >
                <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={18} />
              </button>
              <button
                type="button"
                className="ctrl"
                onClick={toggleSound}
                aria-pressed={sound}
                aria-label={t('common.sound')}
              >
                <Icon name={sound ? 'soundOn' : 'soundOff'} size={18} />
              </button>
            </li>
          </ul>
        </nav>

        <div className="marquee__tools">
          {/* Language switch stays visible at every screen size. */}
          <div className="lang" role="group" aria-label="Language">
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              lang="en"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('ka')}
              aria-pressed={lang === 'ka'}
              lang="ka"
            >
              ქარ
            </button>
          </div>

          <button
            type="button"
            className="ctrl"
            onClick={toggleTheme}
            aria-label={t('common.theme')}
            title={t('common.theme')}
          >
            <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={18} />
          </button>

          <button
            type="button"
            className="ctrl"
            onClick={toggleSound}
            aria-pressed={sound}
            aria-label={t('common.sound')}
            title={t('common.sound')}
          >
            <Icon name={sound ? 'soundOn' : 'soundOff'} size={18} />
          </button>

          <a
            className="btn btn--primary btn--sm"
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="discord" size={18} />
            {t('common.joinShort')}
          </a>

          <button
            type="button"
            className="ctrl marquee__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={t('nav.menu')}
          >
            <Icon name={open ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
