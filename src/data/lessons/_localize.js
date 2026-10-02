/**
 * Lesson code is authored once, in Georgian, and the text *inside* it —
 * string literals, comments, HTML content — is swapped to English here.
 *
 * Only human-readable text is translated. Keywords, identifiers, numbers and
 * syntax never change, because `print`, `local` and `console.log` are the same
 * words in every language and a learner will meet them in English everywhere
 * else they ever look.
 *
 * Phrases are applied longest-first, so "Total: 26" falls out of "Total"
 * automatically and only the base phrase needs an entry. A missing entry
 * leaves Georgian visible, so `npm run build` is backed by a check that walks
 * every lesson and fails if any Georgian survives the swap.
 */

const KA_TO_EN = {
  // --- greetings, totals, scores ---
  'გამარჯობა': 'Hello',
  'ჯამი': 'Total',
  'სულ': 'Total',
  'საშუალო': 'Average',
  'მაქსიმუმი': 'Highest',
  'ქულა': 'Score',
  'სწორია': 'correct',
  'არასწორია, სწორი იყო:': 'wrong, the answer was:',
  'ჩემი კვირა': 'My week',
  'გაფრინდა!': 'Liftoff!',
  'დასრულდა': 'Done',

  // --- conditions ---
  'Discord-ზე შეგიძლია': 'You can use Discord',
  'ცოტა კიდევ მოიცადე': 'Wait a little longer',
  'კარგი შედეგია': 'Good score',
  'თამაში გრძელდება': 'The game continues',
  'თამაში დასრულდა': 'Game over',
  'ფრთხილად!': 'Careful!',
  'კარგად ხარ': 'You are fine',
  'ცხელა': 'hot',
  'ნორმალურია': 'fine',
  'ძალიან სწრაფია': 'too fast',
  'ნორმალური სიჩქარეა': 'normal speed',

  // --- people and variables ---
  'შენ ხარ 14 წლის': 'You are 14 years old',
  'შენ ხარ ': 'You are ',
  ' წლის': ' years old',
  'წლები': 'Age',
  'ასაკი': 'Age',
  'საბა': 'Saba',
  'ვცხოვრობ': 'I live in',
  'წელი': 'Year',

  // --- quiz questions ---
  '2 + 2 რამდენია?': 'What is 2 + 2?',
  'საქართველოს დედაქალაქი?': 'Capital of Georgia?',
  'რა ნიშნით იქმნება ცვლადი?': 'Which sign makes a variable?',
  'რამდენი ტოლობის ნიშანი სჯობს JS-ში?': 'How many equals signs are better in JS?',
  'როგორ იწყება მეთოდის სახელი C#-ში?': 'How does a C# method name start?',
  'დიდი ასოთი': 'with a capital letter',
  'პატარა ასოთი': 'with a small letter',

  // --- the Roblox shop and game lessons ---
  'მონეტები': 'Coins',
  'შენი მონეტები': 'Your coins',
  'მონეტა არ გყოფნის': 'Not enough coins',
  'იყიდე მახვილი!': 'Buy the sword!',
  'ჩემი თამაში': 'My game',
  'მახვილი': 'Sword',
  'ფარი': 'Shield',
  'დრაკონი': 'Dragon',
  'ჩაფხუტი': 'Helmet',
  'ნივთები': 'Items',
  'შეგიძლია': 'you can afford it',
  'ძვირია': 'too expensive',
  'საფეხური': 'Step',
  'სიცოცხლე': 'Lives',
  'დონე': 'Level',
  'ბლოკი': 'bricks',
  'ნულზე გაყოფა არ შეიძლება': 'Cannot divide by zero',

  // --- comments ---
  'ახალი ხაზი აქ': 'new line here',

  // --- the web-design track ---
  'ჩემი პირველი გვერდი': 'My first page',
  'გამარჯობა! ეს მე დავწერე.': 'Hello! I wrote this.',
  'რა მიყვარს': 'What I like',
  'რაც მიყვარს': 'What I like',
  'თამაშები, მუსიკა და კოდის წერა.': 'Games, music, and writing code.',
  'ვსწავლობ კოდს და მინდა თამაშები ვაკეთო.':
    'I am learning to code and I want to make games.',
  'მინდა ავაწყო თამაში Roblox-ში.': 'I want to build a game in Roblox.',
  'ჩემი ბმულები': 'My links',
  'აქ ვსწავლობ კოდს:': 'This is where I learn to code:',
  'იპოვე ჩვენი Discord': 'Find our Discord',
  'ჩვენი Discord': 'Our Discord',
  'მნიშვნელოვანი': 'Important',
  'ყველაფერი': 'Everything',
  'უფასოა': 'is free',
  'ფულს არავინ გთხოვს.': 'Nobody asks you for money.',
  'ჩემი საყვარელი საიტია.': 'is my favourite site.',
  'მართლა': 'Really',
  'კარგია.': 'good.',
  'ჩემი სია': 'My list',
  'იისფერი ბანერი წარწერით Hello': 'A purple banner reading Hello',
  'მწვანე ბანერი': 'A green banner',
  'რისი სწავლა მინდა': 'What I want to learn',
  'რა თანმიმდევრობით': 'In what order',
  'ჯერ HTML': 'HTML first',
  'მერე CSS': 'Then CSS',
  'ბოლოს JavaScript': 'JavaScript last',
  'თამაშები': 'Games',
  'მუსიკა': 'Music',
  'კოდი': 'Code',
  'ფერადი გვერდი': 'A page with colour',
  'ეს ჩვეულებრივი ტექსტია.': 'This is ordinary text.',
  'ეს ყვითელია, რადგან class="note" აქვს.': 'This is yellow because it has class="note".',
  'ჩემი ფერები': 'My colours',
  'ტექსტი.': 'Text.',
  'პირველი ბარათი': 'First card',
  'padding შიგნითაა, margin გარეთ.': 'padding is inside, margin is outside.',
  'მეორე ბარათი': 'Second card',
  'ორივეს ერთი და იგივე წესი აქვს.': 'Both use the same rule.',
  'ბარათი': 'Card',
  'ერთი წინადადება ჩემზე.': 'One sentence about me.',
  'ერთი წინადადება.': 'One sentence.',
  'ერთი': 'One',
  'ორი': 'Two',
  'სამი კითხვა და ქულების დათვლა.': 'Three questions and a score.',
  'სამი კითხვა.': 'Three questions.',
  'სამი': 'Three',
  'სახელი': 'Name',
  'სად მპოვებ': 'Where to find me',
  'ვსწავლობ კოდს. აი, რაც ავაწყვე.': 'I am learning to code. Here is what I made.',
  'ჩემი გვერდი': 'My page',
  // Space-wrapped so it only ever matches the standalone conjunction,
  // never the same letters sitting inside a longer word.
  ' და ': ' and ',
  'ქვიზი': 'Quiz',
  'კალკულატორი': 'Calculator',
  'შემდეგი პროექტი.': 'Next project.',
  'პროექტი': 'Project',
  'პირველი აბზაცი.': 'First paragraph.',
  'მეორე აბზაცი.': 'Second paragraph.',
  'ეს სწორად არის დაწერილი.': 'This one is written correctly.',
  'ერთ საღამოში.': 'In one evening.',
}

// Longest first, so a specific phrase always beats a word inside it.
const ENTRIES = Object.entries(KA_TO_EN).sort((a, b) => b[0].length - a[0].length)

/** Swaps the human-readable text inside a code sample to English. */
export function localizeCode(code, lang) {
  if (lang !== 'en' || typeof code !== 'string') return code
  let out = code
  for (const [ka, en] of ENTRIES) out = out.split(ka).join(en)
  return out
}

export const GEORGIAN = /[Ⴀ-ჿᲐ-Ჿ]/
