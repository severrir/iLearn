import Icon from '../components/Icon.jsx'
import Mascot from '../components/Mascot.jsx'
import { Reveal, Silk } from '../components/bits.jsx'
import { useLang } from '../i18n/index.jsx'
import { DISCORD_INVITE } from '../data/community.js'

const COPY = {
  lede: {
    ka: 'დამხმარე არ ნიშნავს ექსპერტს. ნიშნავს ადამიანს, რომელსაც ახსოვს, როგორი იყო არაფრის ცოდნა — და ამიტომ უკეთ ხსნის, ვიდრე ის, ვინც ეს დიდი ხნის წინ დაივიწყა.',
    en: 'Being a helper does not mean being an expert. It means being someone who still remembers what not knowing felt like — which makes you better at explaining than someone who forgot years ago.',
  },
  doTitle: { ka: 'რას აკეთებს დამხმარე', en: 'What a helper does' },
  does: {
    ka: [
      ['chat', 'პასუხობს #help-ში', 'კვირაში რამდენიმე კითხვა. არ გჭირდება ყველაფრის ცოდნა — „არ ვიცი, ერთად ვნახოთ“ სრულიად ნორმალური პასუხია.'],
      ['clock', 'ესწრება კვირის სესიას', 'კვირადღეს 18:00. სანამ საბა ხსნის, შენ კითხვებზე პასუხობ ჩატში.'],
      ['people', 'ამჩნევს ვინც ჩუმადაა', 'ვიღაც მესამე დონეზე გაჩერდა და აღარ წერს? მისწერე. ეს ყველაზე დიდი დახმარებაა.'],
    ],
    en: [
      ['chat', 'Answers in #help', 'A few questions a week. You do not need to know everything — "I am not sure, let us look together" is a perfectly good answer.'],
      ['clock', 'Shows up on Sunday', '18:00. While Saba explains, you answer questions in the chat.'],
      ['people', 'Notices who went quiet', 'Someone stalled on Level 3 and stopped posting? Message them. That is the single most useful thing you can do.'],
    ],
  },
  needTitle: { ka: 'რა გჭირდება', en: 'What you need' },
  need: {
    ka: [
      'მე-2 დონეზე მეტი ცოდნა ერთ მიმართულებაში. სულ ეს არის.',
      '13 წელი ან მეტი (Discord-ის წესი).',
      'კვირაში დაახლოებით ერთი საათი.',
      'მოთმინება. ეს უფრო მნიშვნელოვანია, ვიდრე ცოდნა.',
    ],
    en: [
      'You know more than Level 2 in one track. That is the whole bar.',
      'You are 13 or older — a Discord rule, not ours.',
      'About one hour a week.',
      'Patience. This matters more than how much you know.',
    ],
  },
  getTitle: { ka: 'რას იღებ სანაცვლოდ', en: 'What you get back' },
  get: {
    ka: [
      ['spark', 'უკეთ ისწავლი', 'სხვისთვის ახსნა ყველაზე სწრაფი გზაა, საკუთარი ხარვეზები აღმოაჩინო.'],
      ['book', 'სარეკომენდაციო წერილი', 'თუ სამ თვეზე მეტი ხნის განმავლობაში აქტიური დამხმარე იყავი, საბა დაწერს წერილს, სადაც ზუსტად წერია რა გააკეთე და რამდენ ხანს. ეს სასწავლებლად ან პროგრამებზე გამოგადგება.'],
      ['people', 'Helper ნიშანი', 'სერვერზე და ამ საიტზე.'],
    ],
    en: [
      ['spark', 'You learn it better', 'Explaining something to another person is the fastest way to find the holes in your own understanding.'],
      ['book', 'A reference letter', 'If you have been an active helper for more than three months, Saba will write a letter saying exactly what you did and for how long. That is useful for school applications and programmes.'],
      ['people', 'The Helper badge', 'On the server and on this site.'],
    ],
  },
  howTitle: { ka: 'როგორ გახდე დამხმარე', en: 'How to become one' },
  steps: {
    ka: [
      'შემოდი Discord-ზე და დაწერე გამარჯობა #introduce-yourself-ში.',
      'უპასუხე რამდენიმე კითხვას #help-ში — უბრალოდ ისე, თავისით.',
      'დაწერე #general-chat-ში, რომ დამხმარეობა გინდა.',
      'საბა დაგელაპარაკება და Helper როლს მოგცემს.',
    ],
    en: [
      'Join the Discord and say hello in #introduce-yourself.',
      'Answer a few questions in #help — just normally, on your own.',
      'Say in #general-chat that you want to help.',
      'Saba will talk with you and give you the Helper role.',
    ],
  },
  rulesTitle: { ka: 'დამხმარის წესები', en: 'The helper rules' },
  rules: {
    ka: [
      'ასწავლე საჯარო არხებში, არა პირად შეტყობინებებში.',
      'არასდროს სთხოვო ან მიიღო ფული.',
      'არასდროს იკითხო პირადი ინფორმაცია — სკოლა, მისამართი, ტელეფონი, ფოტო.',
      'პასუხი ნუ გასცემ მზა კოდით. ჯერ იკითხე, რა სცადა.',
      '„სულელური კითხვა“ არ არსებობს და ამას არასდროს აჩვენებ.',
      'თუ რამე გაწუხებს ან უხერხულად გრძნობ თავს, მოდერატორს აცნობე.',
    ],
    en: [
      'Teach in public channels, never in private messages.',
      'Never ask for or accept money.',
      'Never ask for personal information — school, address, phone, photos.',
      'Do not answer with finished code. Ask what they tried first.',
      'There is no stupid question, and you never let anyone feel like there is.',
      'If anything worries you or feels off, tell a moderator.',
    ],
  },
}

export default function Teach() {
  const { t, pick } = useLang()

  return (
    <>
      <section className="wrap phead">
        <Silk>{t('teach.silk')}</Silk>
        <h1>{t('teach.title')}</h1>
        <p>{pick(COPY.lede)}</p>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <Reveal className="sechead">
          <h2>{pick(COPY.doTitle)}</h2>
        </Reveal>
        <div className="steps3">
          {pick(COPY.does).map(([icon, h, p], i) => (
            <Reveal key={h} className="card step3" delay={i * 70}>
              <span
                className="step3__icon"
                style={{
                  background: ['var(--purple)', 'var(--mint)', 'var(--yellow)'][i],
                  color: i === 0 ? 'var(--on-purple)' : '#0F1226',
                }}
              >
                <Icon name={icon} size={23} />
              </span>
              <h3>{h}</h3>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="twocol">
          <Reveal className="card">
            <Silk>{pick(COPY.needTitle)}</Silk>
            <ul className="checklist" style={{ marginTop: 'var(--s2)' }}>
              {pick(COPY.need).map((item) => (
                <li key={item}>
                  <Icon name="check" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card" delay={70}>
            <Silk>{pick(COPY.getTitle)}</Silk>
            <div className="stack-2" style={{ marginTop: 'var(--s2)' }}>
              {pick(COPY.get).map(([icon, h, p]) => (
                <div key={h} style={{ display: 'flex', gap: 12 }}>
                  <Icon name={icon} size={19} style={{ color: 'var(--mint-ink)', flex: 'none', marginTop: 3 }} />
                  <div>
                    <h3 style={{ fontSize: 'var(--t-small)', fontFamily: 'var(--font-body)', fontWeight: 800 }}>
                      {h}
                    </h3>
                    <p style={{ fontSize: 'var(--t-micro)', color: 'var(--text-dim)', marginTop: 2 }}>
                      {p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="wrap section">
        <Reveal className="sechead">
          <h2>{pick(COPY.rulesTitle)}</h2>
        </Reveal>
        <Reveal>
          <ol className="rules">
            {pick(COPY.rules).map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <Reveal className="banner">
          <Mascot size={92} pose="cheer" interactive />
          <div className="banner__text">
            <Silk>{pick(COPY.howTitle)}</Silk>
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
            {t('teach.cta')}
          </a>
        </Reveal>
      </section>
    </>
  )
}
