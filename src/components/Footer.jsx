import { Link } from 'react-router-dom'
import Mascot from './Mascot.jsx'
import Icon from './Icon.jsx'
import { useLang } from '../i18n/index.jsx'
import { DISCORD_INVITE, ROBLOX_GROUP } from '../data/community.js'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div>
            <Link
              to="/"
              className="marquee__brand"
              style={{ marginBottom: 'var(--s2)' }}
            >
              <Mascot size={40} pose="wave" />
              iLearn
            </Link>
            <p style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)', maxWidth: '38ch' }}>
              {t('footer.safety')}
            </p>
          </div>

          <div>
            <h3>{t('nav.lessons')}</h3>
            <ul>
              <li>
                <Link to="/tracks">{t('tracks.silk')}</Link>
              </li>
              <li>
                <Link to="/help">{t('nav.help')}</Link>
              </li>
              <li>
                <Link to="/teach">{t('nav.teach')}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>{t('nav.community')}</h3>
            <ul>
              <li>
                <Link to="/community">{t('nav.community')}</Link>
              </li>
              <li>
                <Link to="/impact">{t('nav.impact')}</Link>
              </li>
              <li>
                <Link to="/safety">{t('nav.safety')}</Link>
              </li>
              <li>
                <Link to="/about">{t('nav.about')}</Link>
              </li>
              <li>
                <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
                  discord.gg/rryP8c8DfG
                </a>
              </li>
              <li>
                <a href={ROBLOX_GROUP} target="_blank" rel="noopener noreferrer">
                  {t('community.robloxCta')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot__note">
          <Icon name="shield" size={17} style={{ color: 'var(--mint-ink)', flex: 'none' }} />
          <span>
            {t('footer.contact')} {t('footer.rights')} {t('footer.built')}.
          </span>
        </div>
      </div>
    </footer>
  )
}
