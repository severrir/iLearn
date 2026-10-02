import { nums, code, all, printed } from './_check.js'

export const jsLessons = [
  {
    n: 1,
    slug: 'first-program',
    minutes: 10,
    xp: 50,
    title: { ka: 'შენი პირველი პროგრამა', en: 'Your first program' },
    idea: { ka: 'JavaScript უკვე გაქვს — ბრაუზერშია ჩაშენებული.', en: 'You already have JavaScript — it is built into your browser.' },
    body: [
      {
        ka: 'JavaScript ყველა ვებგვერდს ამოძრავებს. ესეც, რომელსაც ახლა კითხულობ. არაფრის დაყენება არ გჭირდება — ბრაუზერში უკვე არის.',
        en: 'JavaScript runs every website, including the one you are reading. Nothing to install — your browser already has it.',
      },
      {
        ka: '`console.log()` ბეჭდავს შედეგს. სახელი უცნაურია, მაგრამ ეს არის „აჩვენე მე ეს“.',
        en: '`console.log()` prints a result. The name is odd, but it means "show me this".',
      },
      {
        ka: 'ბრჭყალებში ჩასმულ ტექსტს **სტრიქონი** (string) ჰქვია. ორმაგი თუ ერთმაგი ბრჭყალი — სულერთია, ოღონდ თანმიმდევრული იყავი.',
        en: 'Text in quotes is called a **string**. Double or single quotes both work — just be consistent.',
      },
      {
        ka: '**ცვლადი** სახელია მნიშვნელობისთვის. `let` ქმნის ცვლადს, რომლის შეცვლაც შეიძლება. `const` ქმნის ისეთს, რომელიც აღარ იცვლება.',
        en: 'A **variable** is a name for a value. `let` makes one you can change. `const` makes one you cannot.',
      },
      {
        ka: 'ტექსტში ცვლადის ჩასასმელად ყველაზე მოსახერხებელია **უკუშტრიხები**: `` `გამარჯობა, ${name}` ``. `${}`-ში ნებისმიერი ცვლადი ჩაჯდება.',
        en: 'The neatest way to drop a variable into text is **backticks**: `` `Hello, ${name}` ``. Anything goes inside `${}`.',
      },
    ],
    example: `console.log("გამარჯობა!");

let name = "Saba";
const age = 14;

console.log(name);
console.log(\`წლები: \${age}\`);`,
    expected: `გამარჯობა!
Saba
წლები: 14`,
    challenge: {
      ka: 'შექმენი ცვლადი `city` შენი ქალაქით და დაბეჭდე `ვცხოვრობ: Tbilisi`.',
      en: 'Make a variable `city` with your city and print `I live in: Tbilisi`.',
    },
    starter: `let city =

console.log(`,
    solution: `let city = "Tbilisi";

console.log(\`ვცხოვრობ: \${city}\`);`,
    check: all(code('city'), printed),
    recap: {
      ka: '`console.log()` ბეჭდავს. `let` და `const` ქმნის ცვლადებს. `${}` უკუშტრიხებში ჩასვამს მნიშვნელობას.',
      en: '`console.log()` prints. `let` and `const` make variables. `${}` inside backticks drops a value in.',
    },
  },

  {
    n: 2,
    slug: 'if-else',
    minutes: 12,
    xp: 60,
    title: { ka: 'გადაწყვეტილებები: if / else', en: 'Decisions: if / else' },
    idea: { ka: 'პროგრამა სხვადასხვა გზას ირჩევს პირობის მიხედვით.', en: 'The program picks a path based on a condition.' },
    body: [
      {
        ka: '`if` ნიშნავს „თუ“. პირობა მრგვალ ფრჩხილებშია, შესასრულებელი კოდი კი ფიგურულში `{ }`.',
        en: '`if` means "if". The condition goes in round brackets, the code to run goes in curly ones `{ }`.',
      },
      { ka: '`else` იჭერს ყველა დანარჩენ შემთხვევას.', en: '`else` catches every other case.' },
      {
        ka: 'შედარება: `===` ტოლია, `!==` არ არის ტოლი, `>`, `<`, `>=`, `<=`.',
        en: 'Comparing: `===` is equal, `!==` is not equal, plus `>`, `<`, `>=`, `<=`.',
      },
      {
        ka: 'ყურადღება: JavaScript-ში **სამი** ტოლობის ნიშანი გამოიყენე, არა ორი. `==` ზედმეტად ლმობიერია და უცნაურად იქცევა — `"5" == 5` ჭეშმარიტია. `===` ასეთ სიურპრიზებს არ გაწყობს.',
        en: 'Important: use **three** equals signs in JavaScript, not two. `==` is too forgiving and behaves oddly — `"5" == 5` is true. `===` never surprises you like that.',
      },
      {
        ka: 'რამდენიმე პირობის შეერთება: `&&` ნიშნავს „და“, `||` ნიშნავს „ან“.',
        en: 'To join conditions: `&&` means "and", `||` means "or".',
      },
    ],
    example: `let age = 14;

if (age >= 13) {
  console.log("Discord-ზე შეგიძლია");
} else {
  console.log("ცოტა კიდევ მოიცადე");
}

let score = 7;
let lives = 2;

if (score > 5 && lives > 0) {
  console.log("თამაში გრძელდება");
}`,
    expected: `Discord-ზე შეგიძლია
თამაში გრძელდება`,
    challenge: {
      ka: 'დააყენე `let temp = 30`. თუ 25-ზე მეტია, დაბეჭდე `ცხელა`, თორემ `ნორმალურია`.',
      en: 'Set `let temp = 30`. If it is over 25, print `hot`, otherwise `fine`.',
    },
    starter: `let temp = 30;

if (`,
    solution: `let temp = 30;

if (temp > 25) {
  console.log("ცხელა");
} else {
  console.log("ნორმალურია");
}`,
    check: all(code('if', 'temp'), printed),
    recap: {
      ka: '`if (პირობა) { }` და `else { }`. ყოველთვის `===`, არასდროს `==`.',
      en: '`if (condition) { }` and `else { }`. Always `===`, never `==`.',
    },
  },

  {
    n: 3,
    slug: 'loops',
    minutes: 12,
    xp: 60,
    title: { ka: 'ციკლები', en: 'Loops' },
    idea: { ka: 'ერთხელ წერ, მრავალჯერ სრულდება.', en: 'Write once, run many times.' },
    body: [
      {
        ka: '100-მდე დათვლა 100 ხაზით ხომ არ გინდა? ციკლი ამას ერთ ხაზში აგვარებს.',
        en: 'You would not count to 100 with 100 lines. A loop does it in one.',
      },
      {
        ka: '`for` ციკლს სამი ნაწილი აქვს, წერტილმძიმით გაყოფილი: სად დაიწყოს, სანამ იმუშაოს და როგორ შეიცვალოს ყოველ ჯერზე.',
        en: 'A `for` loop has three parts separated by semicolons: where to start, how long to keep going, and what changes each time.',
      },
      {
        ka: '`for (let i = 0; i < 5; i++)` ნიშნავს: დაიწყე ნულიდან, იმუშავე სანამ 5-ზე ნაკლებია, ყოველ ჯერზე ერთით გაზარდე. `i++` არის `i = i + 1`-ის მოკლე ჩანაწერი.',
        en: '`for (let i = 0; i < 5; i++)` means: start at zero, keep going while under 5, add one each time. `i++` is short for `i = i + 1`.',
      },
      {
        ka: '`while` მანამდე მეორდება, სანამ პირობა ჭეშმარიტია. ფრთხილად — თუ პირობა არასდროს გახდება მცდარი, გვერდი გაიყინება.',
        en: '`while` repeats while the condition is true. Careful — if it never turns false, the page freezes.',
      },
    ],
    example: `for (let i = 0; i < 3; i++) {
  console.log("გამარჯობა " + i);
}

for (let n = 1; n <= 5; n++) {
  console.log(\`\${n} x 2 = \${n * 2}\`);
}

let count = 3;
while (count > 0) {
  console.log(count);
  count = count - 1;
}
console.log("გაფრინდა!");`,
    expected: `გამარჯობა 0
გამარჯობა 1
გამარჯობა 2
1 x 2 = 2
2 x 2 = 4
3 x 2 = 6
4 x 2 = 8
5 x 2 = 10
3
2
1
გაფრინდა!`,
    challenge: {
      ka: 'ციკლით დაბეჭდე 1-დან 10-მდე ყველა რიცხვი, თითო ხაზზე.',
      en: 'Use a loop to print 1 to 10, one per line.',
    },
    starter: `for (let n = `,
    solution: `for (let n = 1; n <= 10; n++) {
  console.log(n);
}`,
    check: all(code('for'), nums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)),
    recap: {
      ka: '`for (დაწყება; პირობა; ნაბიჯი)`. `i++` ერთით ზრდის.',
      en: '`for (start; condition; step)`. `i++` adds one.',
    },
  },

  {
    n: 4,
    slug: 'functions',
    minutes: 13,
    xp: 70,
    title: { ka: 'ფუნქციები', en: 'Functions' },
    idea: { ka: 'კოდს სახელს არქმევ და იძახებ.', en: 'Name a piece of code and call it.' },
    body: [
      {
        ka: '`console.log()` ფუნქციაა — სხვისი დაწერილი. ახლა შენც დაწერ საკუთარს.',
        en: '`console.log()` is a function somebody else wrote. Now you write your own.',
      },
      {
        ka: '`function greet(name) { ... }` ქმნის ფუნქციას. შექმნა არაფერს აკეთებს — უნდა **გამოიძახო**: `greet("Saba")`.',
        en: '`function greet(name) { ... }` makes one. Making it does nothing — you must **call** it: `greet("Saba")`.',
      },
      {
        ka: 'ფრჩხილებში მოთავსებული სახელები **პარამეტრებია** — ინფორმაცია, რომელსაც ფუნქციას აწვდი.',
        en: 'The names in the brackets are **parameters** — information you give the function.',
      },
      {
        ka: '`return` აბრუნებს პასუხს. `console.log` **აჩვენებს**, `return` **აძლევს** პროგრამას შემდეგი ნაბიჯისთვის. ეს განსხვავება ძალიან მნიშვნელოვანია.',
        en: '`return` sends an answer back. `console.log` **shows**, `return` **gives** the program something to use. That difference matters a lot.',
      },
    ],
    example: `function greet(name) {
  console.log("გამარჯობა, " + name);
}

greet("Saba");
greet("Nino");

function double(x) {
  return x * 2;
}

let answer = double(21);
console.log(answer);`,
    expected: `გამარჯობა, Saba
გამარჯობა, Nino
42`,
    challenge: {
      ka: 'დაწერე `area(w, h)`, რომელიც აბრუნებს `w * h`-ს. გამოიძახე 4-ით და 5-ით და დაბეჭდე — 20 უნდა მიიღო.',
      en: 'Write `area(w, h)` returning `w * h`. Call it with 4 and 5 and print it — you should get 20.',
    },
    starter: `function area(w, h) {
  return `,
    solution: `function area(w, h) {
  return w * h;
}

console.log(area(4, 5));`,
    check: all(code('function area', 'return'), nums(20)),
    recap: {
      ka: '`function` ქმნის, `()` იძახებს, `return` აბრუნებს.',
      en: '`function` creates, `()` calls, `return` answers.',
    },
  },

  {
    n: 5,
    slug: 'arrays',
    minutes: 13,
    xp: 70,
    title: { ka: 'მასივები — ბევრი რამ ერთ ცვლადში', en: 'Arrays — many things in one variable' },
    idea: { ka: 'ერთი სახელი, რიგზე დალაგებული მრავალი მნიშვნელობა.', en: 'One name, many values in order.' },
    body: [
      {
        ka: '**მასივი** (array) კვადრატულ ფრჩხილებში იქმნება: `let friends = ["Nino", "Luka", "Ana"]`.',
        en: 'An **array** uses square brackets: `let friends = ["Nino", "Luka", "Ana"]`.',
      },
      {
        ka: 'ელემენტს ნომრით იღებ: `friends[0]` არის პირველი. **ნულიდან** იწყება — თავიდან უცნაურია, მაგრამ შეეჩვევი.',
        en: 'Take an item by number: `friends[0]` is the first. It starts at **zero** — odd at first, but you get used to it.',
      },
      { ka: '`friends.length` გეუბნება, რამდენი ელემენტია.', en: '`friends.length` tells you how many there are.' },
      {
        ka: '`push()` ამატებს ბოლოში. მთელ მასივს კი `for...of` ციკლით გაირბენ — ნომრები საერთოდ აღარ გჭირდება.',
        en: '`push()` adds to the end. And `for...of` walks the whole array — you do not need numbers at all.',
      },
    ],
    example: `let friends = ["Nino", "Luka", "Ana"];

console.log(friends[0]);
console.log(friends.length);

friends.push("Giorgi");

for (const f of friends) {
  console.log("გამარჯობა, " + f);
}

let scores = [10, 7, 9];
let total = 0;
for (const s of scores) {
  total = total + s;
}
console.log("ჯამი: " + total);`,
    expected: `Nino
3
გამარჯობა, Nino
გამარჯობა, Luka
გამარჯობა, Ana
გამარჯობა, Giorgi
ჯამი: 26`,
    challenge: {
      ka: 'შექმენი მასივი `nums` რიცხვებით 3, 8, 1, 6. დაბეჭდე რამდენი ელემენტია და მათი ჯამი.',
      en: 'Make an array `nums` with 3, 8, 1, 6. Print how many items and their total.',
    },
    starter: `let nums = [`,
    solution: `let nums = [3, 8, 1, 6];

console.log(nums.length);

let total = 0;
for (const n of nums) {
  total = total + n;
}
console.log(total);`,
    check: all(code('nums'), nums(4), nums(18)),
    recap: {
      ka: 'მასივი `[]`-ში. ნომრები ნულიდან. `.length` ითვლის. `for...of` გაივლის.',
      en: 'Arrays use `[]`. Numbering starts at zero. `.length` counts. `for...of` walks.',
    },
  },

  {
    n: 6,
    slug: 'project',
    minutes: 20,
    xp: 100,
    title: { ka: 'პატარა პროექტი: ქვიზი', en: 'A small project: a quiz' },
    idea: { ka: 'ყველაფერი, რაც ისწავლე, ერთ პროგრამაში.', en: 'Everything you learned, in one program.' },
    body: [
      {
        ka: 'ავაწყოთ ქვიზი: კითხვების სია, პასუხების შემოწმება, ქულის დათვლა.',
        en: 'Let us build a quiz: a list of questions, a check on each answer, a score.',
      },
      {
        ka: 'ყველა ნაწილი უკვე იცი: **მასივი**, **ციკლი**, **if** და **ფუნქცია**. ახალი არაფერია.',
        en: 'You know every piece: an **array**, a **loop**, an **if**, a **function**. Nothing new.',
      },
      {
        ka: 'დააკვირდი, როგორ ინახება კითხვა და პასუხი ერთ პატარა **ობიექტში** `{ }`. ობიექტი დაკავშირებულ მონაცემებს სახელებით აკავშირებს.',
        en: 'Notice the question and answer live in one small **object** `{ }`. An object ties related data together under names.',
      },
    ],
    example: `const questions = [
  { q: "2 + 2 რამდენია?", a: "4" },
  { q: "საქართველოს დედაქალაქი?", a: "Tbilisi" },
  { q: "რამდენი ტოლობის ნიშანი სჯობს JS-ში?", a: "3" },
];

const myAnswers = ["4", "Tbilisi", "2"];

function check(given, correct) {
  return given === correct;
}

let score = 0;

for (let i = 0; i < questions.length; i++) {
  const item = questions[i];
  const mine = myAnswers[i];
  console.log(item.q + " -> " + mine);
  if (check(mine, item.a)) {
    console.log("  სწორია");
    score++;
  } else {
    console.log("  არასწორია, სწორი იყო: " + item.a);
  }
}

console.log(\`ქულა: \${score} / \${questions.length}\`);`,
    expected: `2 + 2 რამდენია? -> 4
  სწორია
საქართველოს დედაქალაქი? -> Tbilisi
  სწორია
რამდენი ტოლობის ნიშანი სჯობს JS-ში? -> 2
  არასწორია, სწორი იყო: 3
ქულა: 2 / 3`,
    challenge: {
      ka: 'გაასწორე `myAnswers` ისე, რომ სამივე სწორი იყოს და ბოლო ხაზზე დაიბეჭდოს `3 / 3`.',
      en: 'Fix `myAnswers` so all three are right and the last line prints `3 / 3`.',
    },
    starter: `const questions = [
  { q: "2 + 2 რამდენია?", a: "4" },
  { q: "საქართველოს დედაქალაქი?", a: "Tbilisi" },
  { q: "რამდენი ტოლობის ნიშანი სჯობს JS-ში?", a: "3" },
];

const myAnswers = ["4", "Tbilisi", "2"];

let score = 0;
for (let i = 0; i < questions.length; i++) {
  if (myAnswers[i] === questions[i].a) score++;
}

console.log(\`ქულა: \${score} / \${questions.length}\`);`,
    solution: `const questions = [
  { q: "2 + 2 რამდენია?", a: "4" },
  { q: "საქართველოს დედაქალაქი?", a: "Tbilisi" },
  { q: "რამდენი ტოლობის ნიშანი სჯობს JS-ში?", a: "3" },
];

const myAnswers = ["4", "Tbilisi", "3"];

let score = 0;
for (let i = 0; i < questions.length; i++) {
  if (myAnswers[i] === questions[i].a) score++;
}

console.log(\`ქულა: \${score} / \${questions.length}\`);`,
    check: nums(3, 3),
    recap: {
      ka: 'ნამდვილი პროგრამა პატარა ნაწილების კომბინაციაა.',
      en: 'A real program is small pieces combined.',
    },
  },

  {
    n: 7,
    slug: 'bugs',
    minutes: 15,
    xp: 80,
    title: { ka: 'შეცდომები და როგორ წავიკითხოთ', en: 'Bugs, and how to read an error' },
    idea: { ka: 'შეცდომა მინიშნებაა, არა წარუმატებლობა.', en: 'An error is a clue, not a failure.' },
    body: [
      {
        ka: 'ყველა პროგრამისტს ყოველდღე აქვს შეცდომები. გამოცდილი მხოლოდ იმით განსხვავდება, რომ მათ კითხვა იცის.',
        en: 'Every programmer gets errors every day. The experienced ones just know how to read them.',
      },
      {
        ka: 'სამი ყველაზე ხშირი JavaScript-ში:',
        en: 'The three most common in JavaScript:',
      },
      {
        ka: '`ReferenceError: x is not defined` — ასეთი სახელი არ არსებობს. თითქმის ყოველთვის ასოა არასწორად დაწერილი.',
        en: '`ReferenceError: x is not defined` — no such name exists. Nearly always a typo.',
      },
      {
        ka: '`SyntaxError` — ენის წესი დაირღვა. ყველაზე ხშირად დაუხურავი ფიგურული ფრჩხილი `}`.',
        en: '`SyntaxError` — a rule of the language broke. Most often an unclosed curly bracket `}`.',
      },
      {
        ka: '`undefined` — ეს შეცდომა არ არის, მაგრამ თითქმის ყოველთვის ნიშნავს პრობლემას. ნიშნავს: „ასეთი რამ აქ არაფერია“. ჩვეულებრივ მასივის არარსებულ ნომერს ეკითხები.',
        en: '`undefined` — not an error, but almost always a problem. It means "there is nothing here". Usually you asked an array for a number it does not have.',
      },
      {
        ka: 'კიდევ ერთი მახე: `"5" + 5` იძლევა `"55"`, არა 10. JavaScript-მა გადაწყვიტა, რომ ტექსტების შეერთება გინდოდა. `Number("5") + 5` იძლევა 10-ს.',
        en: 'One more trap: `"5" + 5` gives `"55"`, not 10. JavaScript decided you wanted to join text. `Number("5") + 5` gives 10.',
      },
      {
        ka: 'ოქროს წესი: როცა გაგიჭირდა, `console.log(x)` ჩასვი და ნახე, რა აქვს ცვლადს სინამდვილეში.',
        en: 'Golden rule: when stuck, `console.log(x)` and see what the variable actually holds.',
      },
    ],
    example: `let age = "14";
console.log("ასაკი: " + age);

let number = Number(age);
console.log(number + 1);

let items = ["a", "b", "c"];
console.log(items[2]);
console.log(items[9]);`,
    expected: `ასაკი: 14
15
c
undefined`,
    challenge: {
      ka: 'ამ კოდს სამი შეცდომა აქვს: არასწორად დაწერილი სახელი, დაკარგული `}` და ტექსტის შეკრება რიცხვთან. გაასწორე ისე, რომ დაიბეჭდოს `ჯამი: 15`.',
      en: 'Three bugs here: a misspelled name, a missing `}`, and text added to a number. Fix them so it prints `Total: 15`.',
    },
    starter: `let total = 0;
const values = [4, 5, "6"];

for (const v of values) {
  totl = total + v;

console.log("ჯამი: " + total);`,
    solution: `let total = 0;
const values = [4, 5, "6"];

for (const v of values) {
  total = total + Number(v);
}

console.log("ჯამი: " + total);`,
    check: nums(15),
    recap: {
      ka: 'წაიკითხე შეცდომის ტიპი, იპოვე ხაზი, შემდეგ `console.log()` ჩასვი.',
      en: 'Read the error type, find the line, then drop in a `console.log()`.',
    },
  },

  {
    n: 8,
    slug: 'show',
    minutes: 20,
    xp: 120,
    title: { ka: 'აჩვენე, რაც ააწყვე', en: 'Show what you made' },
    idea: { ka: 'დასრულებული სჯობს სრულყოფილს.', en: 'Finished beats perfect.' },
    body: [
      {
        ka: 'შვიდი დონე გაიარე. ახლა ააწყვე რაღაც შენი და დადე `#showcase`-ში.',
        en: 'Seven levels done. Now build something of your own and post it in `#showcase`.',
      },
      {
        ka: 'იდეები: რიცხვის გამოცნობა, ტემპერატურის გადამყვანი, ან პატარა სტატისტიკა შენი კვირის შესახებ.',
        en: 'Ideas: a number-guessing game, a temperature converter, or a small summary of your week.',
      },
      {
        ka: 'ქვემოთ პატარა ანგარიშის გენერატორია. აიღე, შეცვალე, გატეხე, გაასწორე.',
        en: 'Below is a small report generator. Take it, change it, break it, fix it.',
      },
      {
        ka: 'როცა დადებ, დაწერე რისი გაკეთება გინდოდა და რა იყო ყველაზე რთული. ამაზე მოდის საუკეთესო პასუხები.',
        en: 'When you post, say what you were making and what was hardest. That gets the best replies.',
      },
    ],
    example: `function stars(n) {
  return "*".repeat(n);
}

function report(name, scores) {
  console.log(name);
  let total = 0;
  for (const s of scores) {
    console.log("  " + stars(s) + " " + s);
    total += s;
  }
  console.log("  საშუალო: " + (total / scores.length));
}

report("ჩემი კვირა", [3, 5, 2, 5, 4]);`,
    expected: `ჩემი კვირა
  *** 3
  ***** 5
  ** 2
  ***** 5
  **** 4
  საშუალო: 3.8`,
    challenge: {
      ka: 'გახადე შენი: სხვა სახელი, სხვა რიცხვები და ერთი ახალი ხაზი, რომელიც ყველაზე მაღალ ქულას ბეჭდავს (`Math.max(...scores)` გამოგადგება).',
      en: 'Make it yours: a different name, different numbers, and one line printing the highest score (`Math.max(...scores)` helps).',
    },
    starter: `function stars(n) {
  return "*".repeat(n);
}

function report(name, scores) {
  console.log(name);
  let total = 0;
  for (const s of scores) {
    console.log("  " + stars(s) + " " + s);
    total += s;
  }
  console.log("  საშუალო: " + (total / scores.length));
  // ახალი ხაზი აქ
}

report("ჩემი კვირა", [3, 5, 2, 5, 4]);`,
    solution: `function stars(n) {
  return "*".repeat(n);
}

function report(name, scores) {
  console.log(name);
  let total = 0;
  for (const s of scores) {
    console.log("  " + stars(s) + " " + s);
    total += s;
  }
  console.log("  საშუალო: " + (total / scores.length));
  console.log("  მაქსიმუმი: " + Math.max(...scores));
}

report("ჩემი კვირა", [3, 5, 2, 5, 4]);`,
    check: all(code('Math.max'), printed),
    recap: {
      ka: 'რვა დონე გავლილია. შემდეგი ნაბიჯი — ასწავლე სხვას.',
      en: 'Eight levels done. Next step: teach someone else.',
    },
  },
]
