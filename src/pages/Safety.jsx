import Icon from '../components/Icon.jsx'
import { Reveal, Silk } from '../components/bits.jsx'
import { useLang } from '../i18n/index.jsx'
import { DISCORD_INVITE } from '../data/community.js'

const COPY = {
  title: { ka: 'უსაფრთხოება და პირადი მონაცემები', en: 'Safety and privacy' },
  lede: {
    ka: 'მოკლედ: ჩვენ შენზე არაფერს ვაგროვებთ. არც ელფოსტას, არც სახელს, არც ფოტოს, არც თვალთვალის ფაილებს. ქვემოთ ზუსტად წერია, რა ხდება.',
    en: 'The short version: we collect nothing about you. No email, no name, no photo, no tracking cookies. Below is exactly what happens.',
  },
  collectTitle: { ka: 'რას ვაგროვებთ', en: 'What we collect' },
  nothing: { ka: 'არაფერს.', en: 'Nothing.' },
  collectBody: {
    ka: 'ამ საიტს ანგარიში არ აქვს, შესვლის ფორმა არ აქვს და სერვერზე მონაცემთა ბაზა არ აქვს. არ არის Google Analytics, არ არის რეკლამის პიქსელები, არ არის თვალთვალი.',
    en: 'This site has no accounts, no sign-in form, and no database behind it. There is no Google Analytics, no advertising pixels, no tracking of any kind.',
  },
  storeTitle: { ka: 'რა ინახება შენს ბრაუზერში', en: 'What is stored in your browser' },
  store: {
    ka: [
      'რომელი გაკვეთილები დაასრულე და რამდენი XP გაქვს.',
      'რომელი მიმართულება აირჩიე.',
      'ენა, თემა (ნათელი/ბნელი) და ხმის პარამეტრი.',
    ],
    en: [
      'Which lessons you finished and how much XP you have.',
      'Which track you picked.',
      'Your language, theme, and sound preference.',
    ],
  },
  storeNote: {
    ka: 'ეს ყველაფერი მხოლოდ შენს მოწყობილობაზეა (localStorage-ში) და ჩვენამდე არასდროს აღწევს. ბრაუზერის მონაცემების გასუფთავებით წაიშლება. სხვა ტელეფონზე თავიდან იწყება. შეგიძლია თვითონაც წაშალო — ღილაკი „შედეგები“ გვერდზეა.',
    en: 'All of it lives only on your device, in localStorage, and never reaches us. Clearing your browser data erases it. On another phone you start over. You can also erase it yourself — the button is on the Impact page.',
  },
  thirdTitle: { ka: 'გარე სერვისები', en: 'Outside services' },
  third: {
    ka: [
      ['Google Fonts', 'შრიფტები აქედან იტვირთება. Google ხედავს შენს IP-ს, როგორც ნებისმიერ ჩატვირთვაზე.'],
      ['jsDelivr CDN', 'Python-ისა და Lua-ს გამშვები აქედან ჩამოიტვირთება — მხოლოდ მაშინ, როცა „გაუშვი“-ს დააჭერ.'],
      ['Discord', 'როცა „შემოგვიერთდი“-ს დააჭერ, Discord-ზე გადადიხარ. იქ მათი წესები მოქმედებს.'],
    ],
    en: [
      ['Google Fonts', 'The typefaces load from there. Google sees your IP address, as with any page load.'],
      ['jsDelivr CDN', 'The Python and Lua runners download from there — only when you press Run.'],
      ['Discord', 'Pressing Join takes you to Discord. Their rules apply once you are there.'],
    ],
  },
  codeTitle: { ka: 'შენი კოდი', en: 'Your code' },
  codeBody: {
    ka: 'რასაც კოდის ველში წერ, შენს ბრაუზერში სრულდება და არსად არ იგზავნება. არც ჩვენ ვინახავთ, არც ვხედავთ.',
    en: 'Whatever you type into the code box runs inside your browser and is sent nowhere. We do not store it and we cannot see it.',
  },
  discordTitle: { ka: 'წესები Discord-ზე', en: 'Rules on Discord' },
  discord: {
    ka: [
      'არასდროს დაწერო სახელი, სკოლა, მისამართი, ტელეფონი ან ელფოსტა — არც საჯაროდ, არც პირადში.',
      'გამოიყენე ზედმეტსახელი. ნამდვილი სახელი არავის სჭირდება.',
      'დახმარება საჯარო არხში ითხოვე, პირად შეტყობინებაში არა.',
      'თუ უცნობი პირადში გწერს და ფულს, ფოტოს ან პირად ინფორმაციას გთხოვს — ეს ჩვენგან არ არის. დაბლოკე და მოდერატორს შეატყობინე.',
      'პირისპირ შეხვედრა მხოლოდ საჯარო ადგილას, მშობლის ან ზრდასრულის თანხლებით.',
    ],
    en: [
      'Never post your full name, school, address, phone number, or email — not publicly, not in a DM.',
      'Use a nickname. Nobody needs your real name.',
      'Ask for help in a public channel, not in private messages.',
      'If a stranger DMs you asking for money, photos, or personal details, that is not us. Block them and tell a moderator.',
      'Meet in person only in a public place, with a parent or another adult nearby.',
    ],
  },
  modTitle: { ka: 'ვინ მოდერირებს', en: 'Who moderates' },
  modBody: {
    ka: 'სერვერს საბა და მოდერატორები მართავენ. მოდერაციის ჩანაწერი დახურულ არხში ინახება, რომ ყველაფერი გამჭვირვალე იყოს და ზრდასრულ მეთვალყურეს ნახვა შეეძლოს. ყველა ანგარიშს, რომელსაც მოდერატორის უფლება აქვს, ორფაქტორიანი ავთენტიფიკაცია (2FA) ჩართული უნდა ჰქონდეს.',
    en: 'The server is run by Saba and the moderators. The moderation record is kept in a private channel so everything stays transparent and the supervising adult can read it. Every account with moderator rights is required to have two-factor authentication switched on.',
  },
  reportTitle: { ka: 'როგორ შეატყობინო პრობლემაზე', en: 'How to report a problem' },
  report: {
    ka: [
      'დაწერე #help-ში ან პირდაპირ მოდერატორს სერვერზე.',
      'თუ Discord-ის წესებს არღვევს, Discord-შივე შეგიძლია მოახსენო (Report).',
      'თუ თავს საფრთხეში გრძნობ, პირველ რიგში ზრდასრულს უთხარი, რომელსაც ენდობი.',
    ],
    en: [
      'Post in #help, or message a moderator directly on the server.',
      'If it breaks Discord\'s own rules, you can report it inside Discord too.',
      'If you feel unsafe, tell a trusted adult first — before anything else.',
    ],
  },
}

export default function Safety() {
  const { t, pick } = useLang()

  return (
    <>
      <section className="wrap phead">
        <Silk>{t('nav.safety')}</Silk>
        <h1>{pick(COPY.title)}</h1>
        <p>{pick(COPY.lede)}</p>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="twocol">
          <Reveal className="note note--safe">
            <Silk>{pick(COPY.collectTitle)}</Silk>
            <p
              style={{
                fontSize: 'var(--t-h2)',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                color: 'var(--mint)',
                margin: '6px 0 var(--s1)',
              }}
            >
              {pick(COPY.nothing)}
            </p>
            <p style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)' }}>
              {pick(COPY.collectBody)}
            </p>
          </Reveal>

          <Reveal className="card" delay={70}>
            <Silk>{pick(COPY.storeTitle)}</Silk>
            <ul className="checklist" style={{ margin: 'var(--s2) 0' }}>
              {pick(COPY.store).map((item) => (
                <li key={item}>
                  <Icon name="check" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: 'var(--text-faint)', fontSize: 'var(--t-micro)' }}>
              {pick(COPY.storeNote)}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="wrap section">
        <div className="twocol">
          <Reveal className="card">
            <Silk>{pick(COPY.thirdTitle)}</Silk>
            <div style={{ marginTop: 'var(--s2)' }}>
              {pick(COPY.third).map(([name, why]) => (
                <p className="channel" key={name}>
                  <span className="channel__name">{name}</span>
                  <span className="channel__desc">{why}</span>
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="card" delay={70}>
            <Silk>{pick(COPY.codeTitle)}</Silk>
            <p
              style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)', marginTop: 'var(--s1)' }}
            >
              {pick(COPY.codeBody)}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="wrap section">
        <Reveal className="sechead">
          <Silk>{pick(COPY.discordTitle)}</Silk>
          <h2>{pick(COPY.discordTitle)}</h2>
        </Reveal>
        <Reveal>
          <ol className="rules">
            {pick(COPY.discord).map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="wrap section">
        <div className="twocol">
          <Reveal className="card">
            <Silk>{pick(COPY.modTitle)}</Silk>
            <p
              style={{ color: 'var(--text-dim)', fontSize: 'var(--t-small)', marginTop: 'var(--s1)' }}
            >
              {pick(COPY.modBody)}
            </p>
          </Reveal>

          <Reveal className="note note--warn" delay={70}>
            <Silk>{pick(COPY.reportTitle)}</Silk>
            <ul className="checklist" style={{ marginTop: 'var(--s2)' }}>
              {pick(COPY.report).map((item) => (
                <li key={item}>
                  <Icon name="shield" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              className="btn btn--ghost btn--sm"
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 'var(--s2)' }}
            >
              <Icon name="discord" size={17} />
              {t('common.join')}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
