import { has, nums, lines, code, all, any, printed } from './_check.js'

export const pythonLessons = [
  {
    n: 1,
    slug: 'first-program',
    minutes: 10,
    xp: 50,
    title: { ka: 'შენი პირველი პროგრამა', en: 'Your first program' },
    idea: { ka: 'კომპიუტერს ბრძანებას აძლევ და ის ასრულებს.', en: 'You give the computer an instruction and it does it.' },
    body: [
      {
        ka: 'კოდი არის ინსტრუქციების სია, რომელსაც კომპიუტერი ზემოდან ქვემოთ კითხულობს. ზუსტად ისე, როგორც რეცეპტი.',
        en: 'Code is a list of instructions the computer reads from top to bottom. Exactly like a recipe.',
      },
      {
        ka: 'Python-ში ეკრანზე რაღაცის დასაბეჭდად `print()` გჭირდება. ფრჩხილებში წერ იმას, რისი ჩვენებაც გინდა.',
        en: 'In Python, `print()` puts something on the screen. Whatever you want shown goes inside the brackets.',
      },
      {
        ka: 'ბრჭყალებში ჩასმული ტექსტი ეწოდება **სტრიქონი** (string). ბრჭყალები ეუბნება Python-ს: „ეს ტექსტია, ნუ ეცდები მის გაგებას“.',
        en: 'Text inside quotes is called a **string**. The quotes tell Python: this is text, do not try to understand it.',
      },
      {
        ka: '**ცვლადი** არის სახელი, რომელსაც მნიშვნელობას აბამ. შემდეგ სახელით იყენებ. ცვლადის შექმნა `=` ნიშნით ხდება.',
        en: 'A **variable** is a name you attach a value to. After that you use the name. You make one with `=`.',
      },
      {
        ka: 'გაითვალისწინე: `=` არ ნიშნავს „ტოლია“. ის ნიშნავს „ჩადე მარჯვენა მხარე მარცხენა სახელში“.',
        en: 'Careful: `=` does not mean "equals". It means "put the right-hand side into the name on the left".',
      },
    ],
    example: `print("გამარჯობა!")

name = "Saba"
age = 14

print(name)
print("წლები:", age)`,
    expected: `გამარჯობა!
Saba
წლები: 14`,
    challenge: {
      ka: 'შექმენი ცვლადი `city` შენი ქალაქის სახელით და დაბეჭდე ასე: `ვცხოვრობ: Tbilisi`.',
      en: 'Make a variable called `city` holding your city, then print it like this: `I live in: Tbilisi`.',
    },
    starter: `city =

print(`,
    solution: `city = "Tbilisi"

print("ვცხოვრობ:", city)`,
    check: all(code('city'), printed),
    recap: {
      ka: '`print()` ბეჭდავს. ბრჭყალები ქმნის ტექსტს. `=` ქმნის ცვლადს.',
      en: '`print()` shows things. Quotes make text. `=` makes a variable.',
    },
  },

  {
    n: 2,
    slug: 'if-else',
    minutes: 12,
    xp: 60,
    title: { ka: 'გადაწყვეტილებები: if / else', en: 'Decisions: if / else' },
    idea: { ka: 'პროგრამა სხვადასხვა გზით მიდის პირობის მიხედვით.', en: 'A program takes different paths depending on a condition.' },
    body: [
      {
        ka: 'ახლა პროგრამას ვასწავლით არჩევანის გაკეთებას. `if` ნიშნავს „თუ“. თუ პირობა სწორია, შიგნითა კოდი შესრულდება.',
        en: 'Now we teach the program to choose. `if` means "if". When the condition is true, the code inside runs.',
      },
      {
        ka: '`else` ნიშნავს „თორემ“. ის მაშინ მუშაობს, როცა პირობა არ დადასტურდა.',
        en: '`else` means "otherwise". It runs when the condition was not true.',
      },
      {
        ka: 'ყურადღება ორ რამეზე: ბოლოში ორწერტილი `:` და შემდეგი ხაზის **შეწევა** (4 ღილაკი space). Python-ისთვის შეწევა ნიშნავს „ეს შიგნით არის“.',
        en: 'Two things matter: the colon `:` at the end, and the **indent** on the next line (4 spaces). To Python, an indent means "this is inside".',
      },
      {
        ka: 'შედარებისთვის გამოიყენე: `==` ტოლია, `!=` არ არის ტოლი, `>` მეტია, `<` ნაკლებია, `>=` და `<=`.',
        en: 'To compare, use: `==` is equal, `!=` is not equal, `>` greater, `<` less, plus `>=` and `<=`.',
      },
      {
        ka: 'ორი ტოლობის ნიშანი `==` იმიტომ გვჭირდება, რომ ერთი `=` უკვე დაკავებულია — ის ცვლადს ქმნის.',
        en: 'We need two equals signs `==` because one `=` is already taken — it makes a variable.',
      },
    ],
    example: `age = 14

if age >= 13:
    print("Discord-ზე შეგიძლია")
else:
    print("ცოტა კიდევ მოიცადე")

score = 7
if score > 5:
    print("კარგი შედეგია")`,
    expected: `Discord-ზე შეგიძლია
კარგი შედეგია`,
    challenge: {
      ka: 'ცვლადი `temp` დააყენე 30-ზე. თუ 25-ზე მეტია, დაბეჭდე `ცხელა`, თორემ `ნორმალურია`.',
      en: 'Set a variable `temp` to 30. If it is over 25, print `hot`, otherwise print `fine`.',
    },
    starter: `temp = 30

if `,
    solution: `temp = 30

if temp > 25:
    print("ცხელა")
else:
    print("ნორმალურია")`,
    check: all(code('if', 'temp'), printed),
    recap: {
      ka: '`if` ამოწმებს პირობას, `else` იჭერს დანარჩენს. ორწერტილი და შეწევა სავალდებულოა.',
      en: '`if` tests a condition, `else` catches the rest. The colon and the indent are not optional.',
    },
  },

  {
    n: 3,
    slug: 'loops',
    minutes: 12,
    xp: 60,
    title: { ka: 'ციკლები — როცა გამეორება გჭირდება', en: 'Loops — when you need repeating' },
    idea: { ka: 'ერთხელ წერ, მრავალჯერ სრულდება.', en: 'Write it once, run it many times.' },
    body: [
      {
        ka: 'წარმოიდგინე, 100-მდე დათვლა გინდა. 100 `print` ხაზს ხომ არ დაწერ? ამისთვის არის **ციკლი**.',
        en: 'Imagine counting to 100. You would not write 100 `print` lines. That is what a **loop** is for.',
      },
      {
        ka: '`for i in range(5):` ნიშნავს: „გაიმეორე 5-ჯერ და ყოველ ჯერზე `i`-ში ჩადე ნომერი“. `range(5)` იძლევა 0, 1, 2, 3, 4 — იწყება ნულიდან და **არ** შეიცავს ბოლო რიცხვს.',
        en: '`for i in range(5):` means "repeat 5 times, and each time put the number into `i`". `range(5)` gives 0, 1, 2, 3, 4 — it starts at zero and does **not** include the last number.',
      },
      {
        ka: 'სხვა მნიშვნელობიდან რომ დაიწყო: `range(1, 6)` იძლევა 1, 2, 3, 4, 5.',
        en: 'To start somewhere else: `range(1, 6)` gives 1, 2, 3, 4, 5.',
      },
      {
        ka: '`while` სხვანაირად მუშაობს: ის მანამდე მეორდება, სანამ პირობა სწორია. ფრთხილად — თუ პირობა არასდროს ხდება მცდარი, პროგრამა სამუდამოდ იმუშავებს.',
        en: '`while` works differently: it repeats as long as the condition stays true. Careful — if the condition never becomes false, the program runs forever.',
      },
    ],
    example: `for i in range(3):
    print("გამარჯობა", i)

for n in range(1, 6):
    print(n, "x 2 =", n * 2)

count = 3
while count > 0:
    print(count)
    count = count - 1
print("გაფრინდა!")`,
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
      ka: 'ციკლით დაბეჭდე 1-დან 10-მდე ყველა რიცხვი, თითო ახალ ხაზზე.',
      en: 'Use a loop to print every number from 1 to 10, one per line.',
    },
    starter: `for n in range(`,
    solution: `for n in range(1, 11):
    print(n)`,
    check: all(code('for'), nums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)),
    recap: {
      ka: '`for` + `range()` ითვლის. `while` მეორდება სანამ პირობა ძალაშია.',
      en: '`for` with `range()` counts. `while` repeats while a condition holds.',
    },
  },

  {
    n: 4,
    slug: 'functions',
    minutes: 13,
    xp: 70,
    title: { ka: 'ფუნქციები — საკუთარი ბრძანებები', en: 'Functions — your own commands' },
    idea: { ka: 'კოდს სახელს არქმევ და შემდეგ სახელით იძახებ.', en: 'You give a piece of code a name, then call it by name.' },
    body: [
      {
        ka: '`print()` ფუნქციაა — ვიღაცამ ის დაწერა და ჩვენ ვიყენებთ. ახლა შენც შექმნი საკუთარს.',
        en: '`print()` is a function — somebody wrote it and we use it. Now you will write your own.',
      },
      {
        ka: '`def greet():` ქმნის ფუნქციას სახელად `greet`. შიგთავსი შეწეულია. შექმნა ჯერ არაფერს აკეთებს — უნდა **გამოიძახო**: `greet()`.',
        en: '`def greet():` makes a function called `greet`. Its body is indented. Making it does nothing on its own — you have to **call** it: `greet()`.',
      },
      {
        ka: 'ფრჩხილებში შეგიძლია **პარამეტრი** ჩასვა — ეს ის ინფორმაციაა, რომელსაც ფუნქციას გადასცემ.',
        en: 'You can put a **parameter** in the brackets — that is information you hand to the function.',
      },
      {
        ka: '`return` აბრუნებს პასუხს. განსხვავება მნიშვნელოვანია: `print` **აჩვენებს** ადამიანს, `return` **აძლევს** პროგრამას, რომ შემდეგ გამოიყენოს.',
        en: '`return` sends an answer back. The difference matters: `print` **shows** a human, `return` **gives** the program something to use next.',
      },
      {
        ka: 'ფუნქციები იმიტომ გვჭირდება, რომ ერთი და იგივე კოდი არ გავიმეოროთ — და რომ დიდი პრობლემა პატარა ნაწილებად დავყოთ.',
        en: 'We use functions so we do not repeat the same code — and so a big problem breaks into small pieces.',
      },
    ],
    example: `def greet(name):
    print("გამარჯობა,", name)

greet("Saba")
greet("Nino")

def double(x):
    return x * 2

answer = double(21)
print(answer)`,
    expected: `გამარჯობა, Saba
გამარჯობა, Nino
42`,
    challenge: {
      ka: 'დაწერე ფუნქცია `area(w, h)`, რომელიც აბრუნებს ფართობს (`w * h`). გამოიძახე 4-ით და 5-ით და დაბეჭდე შედეგი — უნდა მიიღო 20.',
      en: 'Write a function `area(w, h)` that returns `w * h`. Call it with 4 and 5 and print the result — you should get 20.',
    },
    starter: `def area(w, h):
    return `,
    solution: `def area(w, h):
    return w * h

print(area(4, 5))`,
    check: all(code('def area', 'return'), nums(20)),
    recap: {
      ka: '`def` ქმნის, `()` იძახებს, `return` აბრუნებს პასუხს.',
      en: '`def` creates it, `()` calls it, `return` hands back an answer.',
    },
  },

  {
    n: 5,
    slug: 'lists',
    minutes: 13,
    xp: 70,
    title: { ka: 'სიები — ბევრი რამ ერთ ცვლადში', en: 'Lists — many things in one variable' },
    idea: { ka: 'ერთი სახელი, რომელშიც რიგზე დალაგებული მრავალი მნიშვნელობაა.', en: 'One name holding many values in order.' },
    body: [
      {
        ka: 'აქამდე ერთ ცვლადში ერთი რამ გვედო. **სია** ბევრს იტევს: `friends = ["Nino", "Luka", "Ana"]`.',
        en: 'So far one variable held one thing. A **list** holds many: `friends = ["Nino", "Luka", "Ana"]`.',
      },
      {
        ka: 'ელემენტს ნომრით იღებ: `friends[0]` არის პირველი. დიახ — **ნულიდან** იწყება. ეს თავიდან უცნაურია, მაგრამ თითქმის ყველა ენაში ასეა.',
        en: 'You take an item by its number: `friends[0]` is the first one. Yes — it starts at **zero**. That feels odd at first, but nearly every language does it.',
      },
      { ka: '`len(friends)` გეუბნება, რამდენი ელემენტია.', en: '`len(friends)` tells you how many items there are.' },
      {
        ka: '`append()` ამატებს ბოლოში. და `for` ციკლით მთელ სიას გაირბენ — `range()` აქ საერთოდ არ გჭირდება.',
        en: '`append()` adds to the end. And a `for` loop walks the whole list — you do not need `range()` at all here.',
      },
    ],
    example: `friends = ["Nino", "Luka", "Ana"]

print(friends[0])
print(len(friends))

friends.append("Giorgi")

for f in friends:
    print("გამარჯობა,", f)

scores = [10, 7, 9]
print("ჯამი:", sum(scores))`,
    expected: `Nino
3
გამარჯობა, Nino
გამარჯობა, Luka
გამარჯობა, Ana
გამარჯობა, Giorgi
ჯამი: 26`,
    challenge: {
      ka: 'შექმენი სია `nums` რიცხვებით 3, 8, 1, 6. დაბეჭდე რამდენი ელემენტია და მათი ჯამი.',
      en: 'Make a list `nums` with 3, 8, 1, 6. Print how many items it has, and their total.',
    },
    starter: `nums = [`,
    solution: `nums = [3, 8, 1, 6]

print(len(nums))
print(sum(nums))`,
    check: all(code('nums'), nums(4), nums(18)),
    recap: {
      ka: 'სია კვადრატულ ფრჩხილებშია. ნომრები ნულიდან. `for` გაირბენს ყველაფერს.',
      en: 'Lists use square brackets. Numbering starts at zero. `for` walks all of it.',
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
        ka: 'დროა ავაწყოთ რაღაც ნამდვილი. გავაკეთოთ ქვიზი, რომელიც კითხვებს სვამს, პასუხებს ამოწმებს და ქულას ითვლის.',
        en: 'Time to build something real. We will make a quiz that asks questions, checks answers, and counts a score.',
      },
      {
        ka: 'ყველა ნაწილი უკვე იცი: **სია** კითხვებისთვის, **ციკლი** რომ ყველა გაიაროს, **if** პასუხის შესამოწმებლად, **ფუნქცია** რომ კოდი დალაგდეს.',
        en: 'You already know every piece: a **list** for the questions, a **loop** to go through them, **if** to check the answer, a **function** to keep it tidy.',
      },
      {
        ka: 'აქ პასუხებს ცვლადში ვწერთ, რადგან ბრაუზერში კლავიატურით კითხვა არ გვაქვს. შენს კომპიუტერზე ამისთვის `input()` არსებობს.',
        en: 'Here the answers sit in a variable, because we cannot read the keyboard in the browser. On your own computer you would use `input()` for this.',
      },
      {
        ka: 'დააკვირდი: კითხვა და პასუხი წყვილად ინახება. ეს ხშირი ხერხია — დაკავშირებულ მონაცემებს ერთად აჩერებ.',
        en: 'Notice the question and answer are stored as a pair. That is a common move — keep related data together.',
      },
    ],
    example: `questions = [
    ["2 + 2 რამდენია?", "4"],
    ["საქართველოს დედაქალაქი?", "Tbilisi"],
    ["რა ნიშნით იქმნება ცვლადი?", "="],
]

my_answers = ["4", "Tbilisi", "=="]

def check(given, correct):
    return given == correct

score = 0

for i in range(len(questions)):
    q = questions[i][0]
    right = questions[i][1]
    mine = my_answers[i]
    print(q, "->", mine)
    if check(mine, right):
        print("  სწორია")
        score = score + 1
    else:
        print("  არასწორია, სწორი იყო:", right)

print("ქულა:", score, "/", len(questions))`,
    expected: `2 + 2 რამდენია? -> 4
  სწორია
საქართველოს დედაქალაქი? -> Tbilisi
  სწორია
რა ნიშნით იქმნება ცვლადი? -> ==
  არასწორია, სწორი იყო: =
ქულა: 2 / 3`,
    challenge: {
      ka: 'გაასწორე `my_answers` ისე, რომ სამივე პასუხი სწორი იყოს და ბოლოში დაიბეჭდოს `ქულა: 3 / 3`.',
      en: 'Fix `my_answers` so all three are right and the last line prints `3 / 3`.',
    },
    starter: `questions = [
    ["2 + 2 რამდენია?", "4"],
    ["საქართველოს დედაქალაქი?", "Tbilisi"],
    ["რა ნიშნით იქმნება ცვლადი?", "="],
]

my_answers = ["4", "Tbilisi", "=="]

score = 0
for i in range(len(questions)):
    if my_answers[i] == questions[i][1]:
        score = score + 1

print("ქულა:", score, "/", len(questions))`,
    solution: `questions = [
    ["2 + 2 რამდენია?", "4"],
    ["საქართველოს დედაქალაქი?", "Tbilisi"],
    ["რა ნიშნით იქმნება ცვლადი?", "="],
]

my_answers = ["4", "Tbilisi", "="]

score = 0
for i in range(len(questions)):
    if my_answers[i] == questions[i][1]:
        score = score + 1

print("ქულა:", score, "/", len(questions))`,
    check: nums(3, 3),
    recap: {
      ka: 'ნამდვილი პროგრამა პატარა ნაწილების კომბინაციაა — ახალი არაფერი ყოფილა.',
      en: 'A real program is small pieces combined — nothing new was needed.',
    },
  },

  {
    n: 7,
    slug: 'bugs',
    minutes: 15,
    xp: 80,
    title: { ka: 'შეცდომები და როგორ წავიკითხოთ', en: 'Bugs, and how to read an error' },
    idea: { ka: 'შეცდომა არ არის წარუმატებლობა — ის მინიშნებაა.', en: 'An error is not failure. It is a clue.' },
    body: [
      {
        ka: 'ყველა პროგრამისტს აქვს შეცდომები. ყოველდღე. განსხვავება მხოლოდ ისაა, რომ გამოცდილმა იცის შეცდომის წაკითხვა.',
        en: 'Every programmer gets errors. Every day. The only difference is that experienced ones know how to read them.',
      },
      {
        ka: 'წაიკითხე **ბოლო ხაზი ჯერ** — იქ წერია შეცდომის ტიპი. შემდეგ ნახე ნომერი: `line 3` ნიშნავს მესამე ხაზს.',
        en: 'Read **the last line first** — that is the kind of error. Then find the number: `line 3` means line three.',
      },
      {
        ka: 'სამი შეცდომა, რომელსაც ყველაზე ხშირად შეხვდები:',
        en: 'The three you will meet most often:',
      },
      {
        ka: '`NameError` — სახელი არ არსებობს. ჩვეულებრივ ასოს ასწორებ (`naem` ნაცვლად `name`).',
        en: '`NameError` — that name does not exist. Usually a typo (`naem` instead of `name`).',
      },
      {
        ka: '`SyntaxError` — ენის წესი დაირღვა. ხშირად დაკარგული ორწერტილი `:` ან ფრჩხილი.',
        en: '`SyntaxError` — a rule of the language broke. Often a missing colon `:` or bracket.',
      },
      {
        ka: '`TypeError` — ტექსტსა და რიცხვს ერთმანეთს უმატებ. `"5" + 5` არ მუშაობს; `int("5") + 5` მუშაობს.',
        en: '`TypeError` — you mixed text and numbers. `"5" + 5` fails; `int("5") + 5` works.',
      },
      {
        ka: 'ოქროს წესი: როცა გაგიჭირდა, დაბეჭდე. `print(x)` გაჩვენებს, რა აქვს ცვლადს სინამდვილეში.',
        en: 'The golden rule: when stuck, print. `print(x)` shows you what the variable actually holds.',
      },
    ],
    example: `age = "14"
print("შენ ხარ " + age + " წლის")

number = int(age)
print(number + 1)

items = ["a", "b", "c"]
print(items[2])`,
    expected: `შენ ხარ 14 წლის
15
c`,
    challenge: {
      ka: 'ამ კოდს სამი შეცდომა აქვს: დაკარგული ორწერტილი, არასწორად დაწერილი სახელი და ტექსტისა და რიცხვის შეკრება. გაასწორე სამივე ისე, რომ დაიბეჭდოს `ჯამი: 15`.',
      en: 'This code has three bugs: a missing colon, a misspelled name, and text added to a number. Fix all three so it prints `Total: 15`.',
    },
    starter: `total = 0
values = [4, 5, 6]

for v in values
    total = totl + v

print("ჯამი: " + total)`,
    solution: `total = 0
values = [4, 5, 6]

for v in values:
    total = total + v

print("ჯამი:", total)`,
    check: nums(15),
    recap: {
      ka: 'ბოლო ხაზი ჯერ, შემდეგ ხაზის ნომერი, შემდეგ `print()` რომ ნახო რა ხდება.',
      en: 'Last line first, then the line number, then `print()` to see what is really happening.',
    },
  },

  {
    n: 8,
    slug: 'show',
    minutes: 20,
    xp: 120,
    title: { ka: 'აჩვენე, რაც ააწყვე', en: 'Show what you made' },
    idea: { ka: 'დასრულებული და ნაჩვენები სჯობს სრულყოფილს და დამალულს.', en: 'Finished and shown beats perfect and hidden.' },
    body: [
      {
        ka: 'შვიდი დონე გაიარე. ახლა ააწყვე რაღაც შენი და დადე `#showcase`-ში.',
        en: 'You have done seven levels. Now build something of your own and post it in `#showcase`.',
      },
      {
        ka: 'არ უნდა იყოს დიდი. სამი კარგი იდეა: რიცხვის გამოცნობა, ტემპერატურის გადამყვანი, ან პატარა დღის დამგეგმავი.',
        en: 'It does not need to be big. Three good ideas: a number-guessing game, a temperature converter, or a tiny day planner.',
      },
      {
        ka: 'ქვემოთ მაგალითად დათვლის მანქანაა. აიღე, შეცვალე, გატეხე, გაასწორე — სწორედ ასე სწავლობს ყველა.',
        en: 'Below is a little counting machine. Take it, change it, break it, fix it — that is how everyone actually learns.',
      },
      {
        ka: 'როცა დადებ, დაწერე ორი რამ: რისი გაკეთება გინდოდა და რა იყო ყველაზე რთული. ამაზე ყველაზე კარგი პასუხები მოდის.',
        en: 'When you post it, say two things: what you were trying to make, and what was hardest. That is what gets the best replies.',
      },
    ],
    example: `def stars(n):
    return "*" * n

def report(name, scores):
    print(name)
    for s in scores:
        print(" ", stars(s), s)
    print("  საშუალო:", sum(scores) / len(scores))

report("ჩემი კვირა", [3, 5, 2, 5, 4])`,
    expected: `ჩემი კვირა
  *** 3
  ***** 5
  ** 2
  ***** 5
  **** 4
  საშუალო: 3.8`,
    challenge: {
      ka: 'შეცვალე ეს პროგრამა შენებურად: სხვა სახელი, სხვა რიცხვები და კიდევ ერთი ხაზი, რომელიც ყველაზე მაღალ ქულას ბეჭდავს (`max()` გამოგადგება). მერე დადე `#showcase`-ში.',
      en: 'Make this yours: a different name, different numbers, and one more line that prints the highest score (`max()` will help). Then post it in `#showcase`.',
    },
    starter: `def stars(n):
    return "*" * n

def report(name, scores):
    print(name)
    for s in scores:
        print(" ", stars(s), s)
    print("  საშუალო:", sum(scores) / len(scores))
    # ახალი ხაზი აქ

report("ჩემი კვირა", [3, 5, 2, 5, 4])`,
    solution: `def stars(n):
    return "*" * n

def report(name, scores):
    print(name)
    for s in scores:
        print(" ", stars(s), s)
    print("  საშუალო:", sum(scores) / len(scores))
    print("  მაქსიმუმი:", max(scores))

report("ჩემი კვირა", [3, 5, 2, 5, 4])`,
    check: all(code('max('), printed),
    recap: {
      ka: 'რვა დონე გავლილია. ახლა ყველაზე სასარგებლო ნაბიჯი — ასწავლე სხვას.',
      en: 'Eight levels done. The most useful next step is teaching someone else.',
    },
  },
]
