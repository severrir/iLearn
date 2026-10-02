import Countdown from '../components/Countdown.jsx'
import Icon from '../components/Icon.jsx'
import { Reveal, Silk } from '../components/bits.jsx'
import { useLang } from '../i18n/index.jsx'
import {
  DISCORD_INVITE,
  ROBLOX_GROUP,
  CHANNELS,
  PRIVATE_CHANNELS,
  ROLES,
  RULES,
  SESSION_FORMAT,
} from '../data/community.js'

const COPY = {
  intro: {
    ka: 'Discord არის აპლიკაცია, სადაც ხალხი ტექსტით და ხმით საუბრობს. ჩვენი სერვერი არის ადგილი, სადაც კითხვას სვამ და ადამიანი გიპასუხებს — და სადაც კვირაში ერთხელ ერთად ვწერთ კოდს.',
    en: 'Discord is an app where people talk by text and voice. Our server is the place where you ask a question and a person answers it — and where once a week we write code together.',
  },
  free: {
    ka: 'უფასოა. რეგისტრაცია ამ საიტზე არ გჭირდება. Discord-ზე ანგარიში დაგჭირდება, მაგრამ ისიც უფასოა და ჩვენ შენი ელფოსტა არ გვინახავს.',
    en: 'It is free. You do not need an account on this site. You will need a Discord account, which is also free, and we never see your email.',
  },
  whatHappens: {
    ka: 'რა ხდება სერვერზე',
    en: 'What happens on the server',
  },
  privateTitle: { ka: 'დახურული არხები', en: 'Private channels' },
  privateBody: {
    ka: 'ორი არხი დახურულია. ისინი იმისთვის არსებობს, რომ მოდერაცია გამჭვირვალე იყოს და ზრდასრულ მეთვალყურეს ყველაფრის ნახვა შეეძლოს.',
    en: 'Two channels are private. They exist so moderation stays transparent and the supervising adult can see everything.',
  },
  rulesIntro: {
    ka: 'შვიდი წესი. ერთხელ წაიკითხე — ისინი ლოგიკურია და დასამახსოვრებელი არაფერია.',
    en: 'Seven rules. Read them once — they are obvious and there is nothing to memorise.',
  },
  joinTitle: { ka: 'როგორ შემოგვიერთდე', en: 'How to join' },
  steps: {
    ka: [
      'დააჭირე ქვემოთ ღილაკს — გაიხსნება Discord.',
      'თუ ანგარიში არ გაქვს, შექმენი (უფასოა).',
      'წაიკითხე #rules და დაწერე გამარჯობა #introduce-yourself-ში.',
      'კითხვა გაჩნდა? პირდაპირ #help-ში დაწერე.',
    ],
    en: [
      'Press the button below — Discord opens.',
      'If you do not have an account, make one. It is free.',
      'Read #rules, then say hello in #introduce-yourself.',
      'Got a question? Post it straight into #help.',
    ],
  },
}

export default function Community() {
  const { t, lang, pick } = useLang()

  return (
    <>
      <section className="wrap phead">
        <Silk>{t('community.silk')}</Silk>
        <h1>{t('community.title')}</h1>
        <p>{pick(COPY.intro)}</p>
        <p style={{ marginTop: 'var(--s2)' }}>{pick(COPY.free)}</p>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="community">
          <Reveal className="panel" style={{ padding: 'var(--s3)' }}>
            <Countdown />
            <a
              className="btn btn--mint btn--block"
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 'var(--s3)' }}
            >
              <Icon name="discord" size={19} />
              {t('common.join')}
            </a>
            <p
              style={{
                marginTop: 'var(--s2)',
                color: 'var(--text-faint)',
                fontSize: 'var(--t-micro)',
              }}
            >
              {t('community.age')}
            </p>
          </Reveal>

          <Reveal className="card" delay={70}>
            <Silk>{t('community.format')}</Silk>
            <ul className="schedule" style={{ marginTop: 'var(--s2)' }}>
              {SESSION_FORMAT.map((slot) => (
                <li key={slot.t}>
                  <time>{slot.t}</time>
                  <span>{slot[lang] ?? slot.en}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{t('community.channels')}</Silk>
          <h2>{pick(COPY.whatHappens)}</h2>
        </Reveal>

        <Reveal className="card">
          {CHANNELS.map((channel) => (
            <p className="channel" key={channel.name}>
              <span className="channel__name">{channel.name}</span>
              <span className="channel__desc">{channel[lang] ?? channel.en}</span>
            </p>
          ))}
        </Reveal>

        <Reveal className="note" style={{ marginTop: 'var(--s2)' }}>
          <Silk>{pick(COPY.privateTitle)}</Silk>
          <p
            style={{
              color: 'var(--text-dim)',
              fontSize: 'var(--t-small)',
              margin: 'var(--s1) 0 var(--s2)',
            }}
          >
            {pick(COPY.privateBody)}
          </p>
          {PRIVATE_CHANNELS.map((channel) => (
            <p className="channel" key={channel.name}>
              <span className="channel__name">{channel.name}</span>
              <span className="channel__desc">{channel[lang] ?? channel.en}</span>
            </p>
          ))}
        </Reveal>
      </section>

      {/* ---- The Roblox group, for the Lua track and anyone building there ---- */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <Reveal className="banner">
          <span
            className="trackcard__cap"
            style={{ background: '#6B4BF0', color: '#fff', fontSize: '0.9rem' }}
            aria-hidden="true"
          >
            lua
          </span>
          <div className="banner__text">
            <h2>{t('community.robloxTitle')}</h2>
            <p>{t('community.robloxBody')}</p>
          </div>
          <a
            className="btn btn--primary"
            href={ROBLOX_GROUP}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('community.robloxCta')}
          </a>
        </Reveal>
      </section>

      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{t('community.roles')}</Silk>
          <h2>{t('community.roles')}</h2>
        </Reveal>
        <Reveal className="roles">
          {ROLES.map((role) => (
            <span className="role" key={role.name}>
              <span className="role__dot" style={{ background: role.color }} />
              {role.name}
              <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}>
                {role[lang] ?? role.en}
              </span>
            </span>
          ))}
        </Reveal>
      </section>

      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{t('community.rules')}</Silk>
          <h2>{t('community.rules')}</h2>
          <p>{pick(COPY.rulesIntro)}</p>
        </Reveal>

        <Reveal>
          <ol className="rules">
            {RULES.map((rule) => (
              <li key={rule.en}>{rule[lang] ?? rule.en}</li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <Reveal className="banner">
          <div className="banner__text">
            <Silk>{pick(COPY.joinTitle)}</Silk>
            <ol className="checklist" style={{ marginTop: 'var(--s2)' }}>
              {pick(COPY.steps).map((step) => (
                <li key={step}>
                  <Icon name="check" size={17} />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <a
            className="btn btn--primary"
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="discord" size={19} />
            {t('common.join')}
          </a>
        </Reveal>
      </section>
    </>
  )
}
