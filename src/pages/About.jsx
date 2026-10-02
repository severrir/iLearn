import Mascot from '../components/Mascot.jsx'
import Icon from '../components/Icon.jsx'
import { Reveal, Silk } from '../components/bits.jsx'
import { useLang } from '../i18n/index.jsx'
import { DISCORD_INVITE } from '../data/community.js'

const SWATCHES = [
  { hex: '#2EF2B0', ka: 'ტანი', en: 'Shell' },
  { hex: '#7C5CFF', ka: 'მკერდი და ხელები', en: 'Chest and limbs' },
  { hex: '#FFD84D', ka: 'ანტენა', en: 'Antenna' },
  { hex: '#0F1226', ka: 'თვალები', en: 'Eyes' },
]

const POSES = [
  { pose: 'wave', ka: 'ესალმება', en: 'Waving' },
  { pose: 'idle', ka: 'ელოდება', en: 'Idle' },
  { pose: 'think', ka: 'ფიქრობს', en: 'Thinking' },
  { pose: 'cheer', ka: 'ხარობს', en: 'Celebrating' },
]

const COPY = {
  title: { ka: 'ვინ აკეთებს ამას', en: 'Who makes this' },
  who: {
    ka: 'საბა ვარ, 14 წლის, საქართველოდან. კოდის წერა თვითონ ვისწავლე — ძირითადად უფასო გაკვეთილებით და ბევრი გატეხილი პროგრამით.',
    en: 'I am Saba, 14, from Georgia. I taught myself to code, mostly from free lessons and a lot of broken programs.',
  },
  why: {
    ka: 'ყველაზე მეტად ის მაკლდა, რომ ვერავის ვკითხავდი, როცა საღამოს 11 საათზე რაღაც არ მუშაობდა. გაკვეთილი ბევრი იყო — ადამიანი არა. ამიტომ გავაკეთე ეს: გაკვეთილები და, რაც მთავარია, Discord, სადაც ნამდვილად გიპასუხებენ.',
    en: 'The thing I actually missed was having anyone to ask when something broke at eleven at night. There were plenty of lessons. There was no person. So I built this: the lessons, and more importantly a Discord where somebody really answers.',
  },
  free: {
    ka: 'უფასოა, რადგან როცა ვსწავლობდი, ფული არ მქონდა. რეკლამა არ არის, ანგარიში არ გჭირდება და შენზე არაფერს ვინახავთ. ასე დარჩება.',
    en: 'It is free because when I was learning, I did not have money. There are no ads, you need no account, and we store nothing about you. That is not going to change.',
  },
  bitTitle: { ka: 'გაიცანი ბიტი', en: 'Meet Bit' },
  bitBody: {
    ka: 'ბიტი ამ საიტის პერსონაჟია — პატარა კოდის-ბაგი მწვანე ტანითა და პატარა </> ნიშნით მკერდზე. მე დავხატე, სპეციალურად ამ პროექტისთვის. არსაიდან არ არის აღებული და არც საჭიროებს ვინმეს ნებართვას.',
    en: 'Bit is this site\'s character — a small code-bug with a mint shell and a tiny </> on its chest. I drew it for this project. It is not taken from anywhere and needs nobody\'s permission.',
  },
  bitTip: {
    ka: 'დააჭირე ბიტს ხუთჯერ. რაღაც მოხდება.',
    en: 'Click Bit five times. Something happens.',
  },
  notTitle: { ka: 'რა არ არის ეს საიტი', en: 'What this site is not' },
  not: {
    ka: [
      'ეს არ არის სკოლა და არანაირ ოფიციალურ სერტიფიკატს არ გასცემს.',
      'ეს არ არის ბიზნესი. არანაირი ფასიანი ვერსია არ არსებობს და არც დაიგეგმება.',
      'მე არ ვარ პროფესიონალი მასწავლებელი. ვარ ადამიანი, რომელმაც ცოტა ადრე დაიწყო და იმას გიზიარებს, რაც იცის.',
      'აქ არც ყველაფერი წერია. როცა მეტი მოგინდება, #resources-ში უფასო ბმულებია.',
    ],
    en: [
      'This is not a school and it gives no official certificate.',
      'This is not a business. There is no paid tier and there is not going to be one.',
      'I am not a professional teacher. I am someone who started a bit earlier and shares what he knows.',
      'This is not everything either. When you want more, #resources has free links.',
    ],
  },
  contactTitle: { ka: 'კონტაქტი', en: 'Contact' },
  contactBody: {
    ka: 'ერთადერთი გზა Discord-ია. სკოლას, მისამართს, ტელეფონს და ელფოსტას განზრახ არ ვწერ — ეს უსაფრთხოების ჩვეულებრივი წესია, როცა 14 წლის ხარ.',
    en: 'The only route is Discord. I deliberately do not publish a school, address, phone number, or email — that is just basic safety when you are 14.',
  },
}

export default function About() {
  const { t, lang, pick } = useLang()

  return (
    <>
      <section className="wrap phead">
        <Silk>{t('nav.about')}</Silk>
        <h1>{pick(COPY.title)}</h1>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="twocol">
          <Reveal className="prose stack-2">
            <p style={{ fontSize: 'var(--t-body-lg)' }}>{pick(COPY.who)}</p>
            <p style={{ color: 'var(--text-dim)' }}>{pick(COPY.why)}</p>
            <p style={{ color: 'var(--text-dim)' }}>{pick(COPY.free)}</p>
          </Reveal>

          <Reveal className="note note--safe" delay={70}>
            <Silk>{pick(COPY.contactTitle)}</Silk>
            <p
              style={{
                color: 'var(--text-dim)',
                fontSize: 'var(--t-small)',
                margin: 'var(--s1) 0 var(--s2)',
              }}
            >
              {pick(COPY.contactBody)}
            </p>
            <a
              className="btn btn--mint btn--sm"
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="discord" size={17} />
              {t('common.join')}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---- Bit's reference sheet: four poses and named swatches ---- */}
      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{pick(COPY.bitTitle)}</Silk>
          <h2>{t('mascot.name')}</h2>
          <p>{pick(COPY.bitBody)}</p>
        </Reveal>

        <Reveal className="panel" style={{ padding: 'var(--s3)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: 'var(--s2)',
            }}
          >
            {POSES.map((item) => (
              <div
                key={item.pose}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  padding: 'var(--s2)',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-card)',
                }}
              >
                <Mascot size={92} pose={item.pose} />
                <span
                  style={{
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.1em',
                    color: 'var(--text-faint)',
                  }}
                >
                  {item[lang] ?? item.en}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--s1)',
              marginTop: 'var(--s3)',
              paddingTop: 'var(--s3)',
              borderTop: '1px solid var(--border)',
            }}
          >
            {SWATCHES.map((swatch) => (
              <span
                key={swatch.hex}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  padding: '7px 13px 7px 7px',
                  borderRadius: 999,
                  border: '1px solid var(--border)',
                  background: 'var(--card)',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 7,
                    background: swatch.hex,
                    border: '1px solid var(--border)',
                    flex: 'none',
                  }}
                />
                {swatch.hex}
                <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}>
                  {swatch[lang] ?? swatch.en}
                </span>
              </span>
            ))}
          </div>

          <p
            style={{
              marginTop: 'var(--s3)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              color: 'var(--yellow-ink)',
              fontSize: 'var(--t-small)',
              fontWeight: 700,
            }}
          >
            <Mascot size={44} pose="idle" interactive />
            {pick(COPY.bitTip)}
          </p>
        </Reveal>
      </section>

      <section className="wrap section">
        <Reveal className="sechead">
          <h2>{pick(COPY.notTitle)}</h2>
        </Reveal>
        <Reveal>
          <ol className="rules">
            {pick(COPY.not).map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
        </Reveal>
      </section>
    </>
  )
}
