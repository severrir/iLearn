import Icon from '../components/Icon.jsx'
import Mascot from '../components/Mascot.jsx'
import { Reveal, Silk } from '../components/bits.jsx'
import { useLang } from '../i18n/index.jsx'
import { DISCORD_INVITE } from '../data/community.js'

const COPY = {
  title: { ka: 'როგორ მიიღებ დახმარებას', en: 'How you get help' },
  lede: {
    ka: 'ეს არის ის ნაწილი, რომლითაც ეს პროექტი სხვებისგან განსხვავდება. უფასო გაკვეთილი ბევრია — ადამიანი, რომელიც მართლა გიპასუხებს, იშვიათია.',
    en: 'This is the part that makes this project different. Free lessons are everywhere. A person who actually answers you is not.',
  },
  howTitle: { ka: 'სამი გზა', en: 'Three ways' },
  ways: {
    ka: [
      {
        icon: 'chat',
        h: 'დაწერე #help-ში',
        p: 'ნებისმიერ დროს. ვიღაც ნახავს და გიპასუხებს — ხან სწრაფად, ხან რამდენიმე საათში. უფასოა და ყოველთვის ასე დარჩება.',
      },
      {
        icon: 'clock',
        h: 'მოდი კვირის სესიაზე',
        p: 'კვირადღეს 18:00-ზე. ეკრანს ვუზიარებთ, ერთად ვწერთ კოდს და კითხვებზე პირდაპირ ვპასუხობთ. დაგვიანება ნორმალურია.',
      },
      {
        icon: 'people',
        h: 'სთხოვე ცალკე ახსნა',
        p: 'თუ რამე სულ ვერ გაიგე, დაწერე #help-ში და ვიღაც დამხმარე ან საბა ცალკე აგიხსნის — ჯგუფურ ზარში, უფასოდ.',
      },
    ],
    en: [
      {
        icon: 'chat',
        h: 'Post in #help',
        p: 'Any time. Someone will see it and answer — sometimes in minutes, sometimes in a few hours. Free, and it stays that way.',
      },
      {
        icon: 'clock',
        h: 'Come to the weekly session',
        p: 'Sunday at 18:00. We share a screen, write code together, and answer questions live. Turning up late is fine.',
      },
      {
        icon: 'people',
        h: 'Ask for it explained again',
        p: 'If something will not click, say so in #help and a helper or Saba will go through it with you in a group call, free.',
      },
    ],
  },
  askTitle: { ka: 'როგორ იკითხო ისე, რომ სწრაფად გიპასუხონ', en: 'How to ask so you get answered fast' },
  askIntro: {
    ka: 'ეს ხრიკი არ არის — უბრალოდ ასე უფრო ადვილია დახმარება. სამი რამ დაწერე:',
    en: 'This is not a trick — it just makes you easier to help. Write three things:',
  },
  askList: {
    ka: [
      'რისი გაკეთება გინდოდა, ერთ წინადადებაში.',
      'შენი კოდი, დაკოპირებული (სკრინშოტი არა — კოდი).',
      'რა მოხდა სინამდვილეში: შეცდომის ტექსტი, ან რა დაიბეჭდა.',
    ],
    en: [
      'What you were trying to do, in one sentence.',
      'Your code, pasted as text — not a screenshot.',
      'What actually happened: the error text, or what got printed.',
    ],
  },
  dmTitle: { ka: 'პირადი შეტყობინებების შესახებ', en: 'About private messages' },
  dmBody: {
    ka: 'დახმარებას ყოველთვის საჯარო არხში ითხოვე, არა პირად შეტყობინებაში. ეს ორივესთვის უსაფრთხოა და ამასთან შენს კითხვაზე პასუხი სხვასაც დაეხმარება. თუ ვინმე პირადში გწერს და ფულს ან პირად ინფორმაციას გთხოვს — ეს ჩვენგან არ არის. დაბლოკე და მოდერატორს შეატყობინე.',
    en: 'Always ask for help in a public channel, never in a private message. It is safer for everyone, and your question ends up helping the next person too. If somebody DMs you asking for money or personal details, that is not us. Block them and tell a moderator.',
  },
  faq: {
    ka: [
      ['მართლა უფასოა?', 'დიახ. არც ახლა, არც მერე — ფულს არავინ გთხოვს. რეკლამაც არ არის და ანგარიშიც არ გჭირდება.'],
      ['არაფერი ვიცი პროგრამირებაზე. შემიძლია?', 'სწორედ შენთვისაა. გაკვეთილები იმ დაშვებით იწყება, რომ არაფერი იცი — და არცერთი სიტყვა რჩება აუხსნელი.'],
      ['რამდენი ხნის ვარ, მნიშვნელობა აქვს?', 'Discord 13 წლიდან არის ნებადართული, ამიტომ სერვერი 13+ არის. საიტს ნებისმიერ ასაკში წაიკითხავ.'],
      ['ინგლისური მჭირდება?', 'არა. ყველაფერი ქართულადაც არის. კოდში სიტყვები ინგლისურია, მაგრამ ყველა მათგანს ვხსნით.'],
      ['ჩემი პროგრესი შეინახება?', 'მხოლოდ ამ მოწყობილობაზე, ბრაუზერში. სხვა ტელეფონზე თავიდან დაიწყება — რადგან ანგარიშს არ ვქმნით და მონაცემებს არ ვინახავთ.'],
      ['კომპიუტერი არ მაქვს, მხოლოდ ტელეფონი.', 'ყველა გაკვეთილი ტელეფონშიც მუშაობს. კოდის წერა ტელეფონზე ცოტა მოუხერხებელია, მაგრამ სრულიად შესაძლებელი.'],
    ],
    en: [
      ['Is it really free?', 'Yes. Not now, not later — nobody asks you for money. There are no ads and you do not need an account.'],
      ['I know nothing about programming. Can I do this?', 'It is built for exactly that. The lessons assume you know nothing, and no word is left unexplained.'],
      ['Does my age matter?', 'Discord is 13+, so the server is 13+. You can read the site at any age.'],
      ['Do I need English?', 'No. Everything is in Georgian too. The words inside code are English, but we explain every one of them.'],
      ['Is my progress saved?', 'Only on this device, in this browser. On another phone you start over — because we create no account and store nothing about you.'],
      ['I only have a phone, not a computer.', 'Every lesson works on a phone. Typing code on one is a bit awkward, but completely possible.'],
    ],
  },
}

export default function Help() {
  const { t, pick } = useLang()

  return (
    <>
      <section className="wrap phead">
        <Silk>{t('nav.help')}</Silk>
        <h1>{pick(COPY.title)}</h1>
        <p>{pick(COPY.lede)}</p>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="steps3">
          {pick(COPY.ways).map((way, i) => (
            <Reveal key={way.h} className="card step3" delay={i * 70}>
              <span
                className="step3__icon"
                style={{
                  background: ['var(--purple)', 'var(--mint)', 'var(--yellow)'][i],
                  color: i === 0 ? 'var(--on-purple)' : '#0F1226',
                }}
              >
                <Icon name={way.icon} size={23} />
              </span>
              <h3>{way.h}</h3>
              <p>{way.p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="twocol">
          <Reveal>
            <Silk>{pick(COPY.askTitle)}</Silk>
            <h2 style={{ fontSize: 'var(--t-h3)', margin: '8px 0 var(--s2)' }}>
              {pick(COPY.askIntro)}
            </h2>
            <ol className="checklist">
              {pick(COPY.askList).map((item) => (
                <li key={item}>
                  <Icon name="check" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="note note--warn" delay={70}>
            <Silk>{pick(COPY.dmTitle)}</Silk>
            <p
              style={{
                color: 'var(--text-dim)',
                fontSize: 'var(--t-small)',
                marginTop: 'var(--s1)',
              }}
            >
              {pick(COPY.dmBody)}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="wrap section">
        <Reveal className="sechead">
          <h2>FAQ</h2>
        </Reveal>
        <div className="faq">
          {pick(COPY.faq).map(([q, a]) => (
            <Reveal key={q} as="div">
              <details>
                <summary>{q}</summary>
                <p className="faq__body">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <Reveal className="banner">
          <Mascot size={88} pose="wave" interactive />
          <div className="banner__text">
            <h2>{t('lesson.stuck')}</h2>
            <p>{t('lesson.stuckBody')}</p>
          </div>
          <a
            className="btn btn--mint"
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="discord" size={19} />
            {t('lesson.askNow')}
          </a>
        </Reveal>
      </section>
    </>
  )
}
