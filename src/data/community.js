// Real facts about the Discord server. Nothing here is invented:
// if it is not confirmed, it is not in this file.

export const DISCORD_INVITE = 'https://discord.gg/rryP8c8DfG'

/** The Roblox group, for the Roblox Lua track and anyone who builds there. */
export const ROBLOX_GROUP = 'https://www.roblox.com/share/g/473814178'

/** Weekly live session: Sunday 18:00, Tbilisi time (UTC+4, no DST). */
export const SESSION = {
  weekday: 0, // Sunday
  hour: 18,
  minute: 0,
  tzOffsetHours: 4,
  durationMinutes: 60,
}

export const CHANNELS = [
  {
    name: '#welcome',
    ka: 'დაიწყე აქედან — სამ წინადადებაში ყველაფერი წერია.',
    en: 'Start here. Everything you need in three sentences.',
  },
  {
    name: '#rules',
    ka: 'შვიდი წესი. წაიკითხე ერთხელ და დაგავიწყდება, რადგან ლოგიკურია.',
    en: 'Seven rules. Read once and forget them, because they are obvious.',
  },
  {
    name: '#announcements',
    ka: 'როდის არის სესია და რა ახალი გაკვეთილი დაემატა.',
    en: 'When the session is, and what lesson just went up.',
  },
  {
    name: '#introduce-yourself',
    ka: 'დაწერე სახელი, რომლითაც გინდა გიძახოდნენ, და რა გინდა რომ ააწყო.',
    en: 'The name you want to be called, and what you want to build.',
  },
  { name: '#lessons', ka: 'გაკვეთილების განხილვა ერთად.', en: 'We go through the lessons together.' },
  {
    name: '#help',
    ka: 'აქ სვამ კითხვას. ყველაზე მნიშვნელოვანი არხია.',
    en: 'Where you ask. The most important channel on the server.',
  },
  {
    name: '#showcase',
    ka: 'აჩვენე, რაც ააწყვე — თუნდაც პატარა იყოს.',
    en: 'Show what you made, however small.',
  },
  { name: '#resources', ka: 'უფასო ბმულები და წიგნები.', en: 'Free links and books.' },
  { name: '#general-chat', ka: 'უბრალოდ საუბარი.', en: 'Just talking.' },
  {
    name: 'voice',
    ka: 'ხმოვანი ოთახები ცოცხალი სესიებისთვის.',
    en: 'Voice rooms for the live sessions.',
  },
]

export const PRIVATE_CHANNELS = [
  {
    name: '#helpers',
    ka: 'დამხმარეების კოორდინაცია.',
    en: 'Where helpers coordinate.',
  },
  {
    name: '#mod-log',
    ka: 'მოდერაციის ჩანაწერი — ზრდასრული მეთვალყურისთვის.',
    en: 'A moderation record the supervising adult can read.',
  },
]

export const ROLES = [
  { name: 'Founder', color: '#FFD84D', ka: 'საბა — ვინც პროექტი დაიწყო.', en: 'Saba, who started this.' },
  {
    name: 'Moderator',
    color: '#B3202A',
    ka: 'უსაფრთხოებაზე პასუხისმგებელი.',
    en: 'Keeps the server safe.',
  },
  {
    name: 'Helper',
    color: '#2EF2B0',
    ka: 'პასუხობს კითხვებს #help-ში.',
    en: 'Answers questions in #help.',
  },
  { name: 'Learner', color: '#7C5CFF', ka: 'ყველა, ვინც სწავლობს.', en: 'Everyone who is learning.' },
]

export const RULES = [
  { ka: 'იყავი კეთილი და მომთმენი.', en: 'Be kind and patient.' },
  { ka: 'სულელური კითხვა არ არსებობს.', en: 'No question is stupid.' },
  { ka: 'არასდროს გააზიარო პირადი ინფორმაცია.', en: 'Never share personal information.' },
  {
    ka: 'დახმარება #help-ში ითხოვე, პირად შეტყობინებებში არა.',
    en: 'Ask for help in #help, not in private messages.',
  },
  {
    ka: 'აქ ყველაფერი უფასოა. ფულს არავინ გთხოვს.',
    en: 'Everything here is free. Nobody will ask you for money.',
  },
  { ka: 'არავითარი სპამი და შეუფერებელი შიგთავსი.', en: 'No spam, no inappropriate content.' },
  {
    ka: 'მოდერატორს შეუძლია წესების დამრღვევი გარიცხოს.',
    en: 'Moderators can remove anyone who breaks the rules.',
  },
]

export const SESSION_FORMAT = [
  { t: '0–5', ka: 'მოგესალმებით, ვინ ვართ დღეს', en: 'Welcome, who is here today' },
  { t: '5–20', ka: 'ერთი იდეა, ეკრანის გაზიარებით', en: 'One idea, taught by screen share' },
  { t: '20–45', ka: 'ყველა წერს კოდს, დამხმარეები პასუხობენ', en: 'Everyone codes, helpers answer' },
  { t: '45–55', ka: 'ვინც რა ააწყო, აჩვენებს', en: 'People show what they made' },
  { t: '55–60', ka: 'შემდეგი თემა და კვირის დავალება', en: 'Next topic and the weekly challenge' },
]

/**
 * Honest counters. Edit these by hand at the end of each month.
 * `updated` is an ISO date string, or null if it has never been updated.
 * Leave a number at 0 until it is really above 0.
 */
export const IMPACT = {
  members: 0,
  sessions: 0,
  projects: 0,
  lessons: 48, // 6 tracks × 8 lessons, published on this site
  updated: null,
}

/**
 * One row per session, filled in by hand after each one.
 * Shape: { date: '2026-10-05', topic: '…', people: 6, questions: 11, moment: '…' }
 * Keep it empty until the first real session happens.
 */
export const SESSION_LOG = []
