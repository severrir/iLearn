import { nums, code, all, printed } from './_check.js'

export const luaLessons = [
  {
    n: 1,
    slug: 'first-program',
    minutes: 10,
    xp: 50,
    title: { ka: 'შენი პირველი სკრიპტი', en: 'Your first script' },
    idea: { ka: 'Roblox-ში ყველაფერს სკრიპტი ამოძრავებს.', en: 'In Roblox, a script is what makes anything happen.' },
    body: [
      {
        ka: 'Roblox-ში თამაშს ქმნი სკრიპტებით. სკრიპტი ინსტრუქციების სიაა, რომელსაც კომპიუტერი ზემოდან ქვემოთ კითხულობს.',
        en: 'In Roblox you build a game out of scripts. A script is a list of instructions the computer reads top to bottom.',
      },
      {
        ka: 'ენას ჰქვია **Luau** და ის Lua-ზეა აგებული. აქ რასაც ისწავლი, პირდაპირ Roblox Studio-ში გადაგაქვს.',
        en: 'The language is called **Luau** and it is built on Lua. What you learn here goes straight into Roblox Studio.',
      },
      {
        ka: '`print()` წერს რაღაცას Output ფანჯარაში. Roblox Studio-ში ეს შენი საუკეთესო მეგობარია.',
        en: '`print()` writes something to the Output window. In Roblox Studio this will be your best friend.',
      },
      {
        ka: '**ცვლადი** სახელია, რომელშიც მნიშვნელობას ინახავ. ყოველთვის დაწერე `local` — ეს ნიშნავს „ეს ცვლადი მხოლოდ აქ მოქმედებს“ და კარგი ჩვევაა.',
        en: 'A **variable** is a name holding a value. Always write `local` — it means "this variable only lives here", and it is a good habit.',
      },
      {
        ka: 'ტექსტის შესაერთებლად ორი წერტილი გამოიყენე: `..`. ეს Lua-ს თავისებურებაა.',
        en: 'To join text together use two dots: `..`. That is a Lua thing.',
      },
    ],
    example: `print("გამარჯობა, Roblox!")

local playerName = "Saba"
local coins = 25

print(playerName)
print("მონეტები: " .. coins)`,
    expected: `გამარჯობა, Roblox!
Saba
მონეტები: 25`,
    challenge: {
      ka: 'შექმენი `local gameName` შენი თამაშის სახელით და დაბეჭდე `ჩემი თამაში: <სახელი>`.',
      en: 'Make a `local gameName` with your game name and print `My game: <name>`.',
    },
    starter: `local gameName =

print(`,
    solution: `local gameName = "Tower of Doom"

print("ჩემი თამაში: " .. gameName)`,
    check: all(code('gameName'), printed),
    recap: {
      ka: '`print()` აჩვენებს. `local` ქმნის ცვლადს. `..` აერთებს ტექსტს.',
      en: '`print()` shows. `local` makes a variable. `..` joins text.',
    },
  },

  {
    n: 2,
    slug: 'if-else',
    minutes: 12,
    xp: 60,
    title: { ka: 'გადაწყვეტილებები: if / else', en: 'Decisions: if / else' },
    idea: { ka: 'თამაშმა უნდა იცოდეს, როდის რა მოიმოქმედოს.', en: 'A game has to know when to do what.' },
    body: [
      {
        ka: 'თამაშში მუდმივად არის შემოწმება: საკმარისი მონეტა აქვს? სიცოცხლე გაუთავდა? აი, სწორედ ამას აკეთებს `if`.',
        en: 'A game checks things constantly: do they have enough coins? did their health hit zero? That is what `if` does.',
      },
      {
        ka: 'ფორმა ასეთია: `if` პირობა `then` ... `end`. გაითვალისწინე — Lua-ში **ყოველი** ბლოკი `end`-ით მთავრდება.',
        en: 'The shape is: `if` condition `then` ... `end`. Note — in Lua **every** block closes with `end`.',
      },
      {
        ka: '`else` იჭერს დანარჩენ შემთხვევებს, `elseif` კი დამატებით ვარიანტს ამატებს.',
        en: '`else` catches everything else, and `elseif` adds another option in between.',
      },
      {
        ka: 'შედარება: `==` ტოლია, `~=` **არ** არის ტოლი (სხვა ენებისგან განსხვავებით, Lua-ში `~=` წერია), `>`, `<`, `>=`, `<=`.',
        en: 'Comparing: `==` equal, `~=` **not** equal (Lua writes it with a tilde, unlike most languages), plus `>`, `<`, `>=`, `<=`.',
      },
    ],
    example: `local coins = 25
local price = 20

if coins >= price then
    print("იყიდე მახვილი!")
else
    print("მონეტა არ გყოფნის")
end

local health = 0
if health <= 0 then
    print("თამაში დასრულდა")
elseif health < 20 then
    print("ფრთხილად!")
else
    print("კარგად ხარ")
end`,
    expected: `იყიდე მახვილი!
თამაში დასრულდა`,
    challenge: {
      ka: 'დააყენე `local speed = 32`. თუ 16-ზე მეტია, დაბეჭდე `ძალიან სწრაფია`, თორემ `ნორმალური სიჩქარეა`.',
      en: 'Set `local speed = 32`. If it is over 16, print `too fast`, otherwise print `normal speed`.',
    },
    starter: `local speed = 32

if `,
    solution: `local speed = 32

if speed > 16 then
    print("ძალიან სწრაფია")
else
    print("ნორმალური სიჩქარეა")
end`,
    check: all(code('if', 'speed', 'end'), printed),
    recap: {
      ka: '`if ... then ... end`. „არ ტოლია“ არის `~=`. ყველა ბლოკს `end` სჭირდება.',
      en: '`if ... then ... end`. "Not equal" is `~=`. Every block needs its `end`.',
    },
  },

  {
    n: 3,
    slug: 'loops',
    minutes: 12,
    xp: 60,
    title: { ka: 'ციკლები — გამეორება', en: 'Loops — repeating' },
    idea: { ka: 'ერთი კოდი, მრავალი შესრულება.', en: 'One piece of code, run many times.' },
    body: [
      {
        ka: 'წარმოიდგინე, 50 კიბის საფეხური უნდა შექმნა Roblox-ში. 50-ჯერ ხომ არ დაწერ ერთსა და იმავეს? ციკლი ამას აგვარებს.',
        en: 'Imagine building 50 steps of a staircase in Roblox. You would not write the same thing 50 times. A loop solves that.',
      },
      {
        ka: '`for i = 1, 5 do` ნიშნავს: „`i` იყოს ჯერ 1, მერე 2 და ასე 5-მდე“. Python-ისგან განსხვავებით, Lua-ში **1-დან** იწყება და ბოლო რიცხვიც შედის.',
        en: '`for i = 1, 5 do` means "let `i` be 1, then 2, up to 5". Unlike Python, Lua starts at **1** and includes the last number.',
      },
      {
        ka: 'ნაბიჯის შეცვლაც შეიძლება: `for i = 0, 10, 2 do` დათვლის 0, 2, 4, 6, 8, 10.',
        en: 'You can change the step: `for i = 0, 10, 2 do` counts 0, 2, 4, 6, 8, 10.',
      },
      {
        ka: '`while` მანამდე მეორდება, სანამ პირობა ჭეშმარიტია. ფრთხილად — Roblox-ში უსასრულო ციკლს თამაში შეუძლია გაყინოს.',
        en: '`while` repeats while the condition is true. Be careful — in Roblox an endless loop can freeze the game.',
      },
    ],
    example: `for i = 1, 3 do
    print("საფეხური " .. i)
end

for i = 0, 10, 5 do
    print(i)
end

local lives = 3
while lives > 0 do
    print("სიცოცხლე: " .. lives)
    lives = lives - 1
end
print("დასრულდა")`,
    expected: `საფეხური 1
საფეხური 2
საფეხური 3
0
5
10
სიცოცხლე: 3
სიცოცხლე: 2
სიცოცხლე: 1
დასრულდა`,
    challenge: {
      ka: 'ციკლით დაბეჭდე 1-დან 10-მდე ყველა რიცხვი, თითო ხაზზე.',
      en: 'Use a loop to print every number from 1 to 10, one per line.',
    },
    starter: `for i = `,
    solution: `for i = 1, 10 do
    print(i)
end`,
    check: all(code('for'), nums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)),
    recap: {
      ka: '`for i = 1, 10 do ... end`. 1-დან იწყება და ბოლო რიცხვიც შედის.',
      en: '`for i = 1, 10 do ... end`. Starts at 1 and includes the last number.',
    },
  },

  {
    n: 4,
    slug: 'functions',
    minutes: 13,
    xp: 70,
    title: { ka: 'ფუნქციები — საკუთარი ბრძანებები', en: 'Functions — your own commands' },
    idea: { ka: 'კოდს სახელს არქმევ და მერე იძახებ.', en: 'Name a piece of code, then call it by name.' },
    body: [
      {
        ka: 'Roblox-ში ფუნქციები ყველგანაა: როცა მოთამაშე ღილაკს დააჭერს, ფუნქცია გაეშვება. ახლა შენც დაწერ საკუთარს.',
        en: 'Functions are everywhere in Roblox: a player touches a button, a function runs. Now you write your own.',
      },
      {
        ka: '`local function greet(name)` ქმნის ფუნქციას. `end` ხურავს. შექმნა თავისთავად არაფერს აკეთებს — უნდა **გამოიძახო**.',
        en: '`local function greet(name)` makes a function. `end` closes it. Making it does nothing — you have to **call** it.',
      },
      {
        ka: 'ფრჩხილებში მოთავსებული სახელები **პარამეტრებია** — ეს ის მონაცემია, რომელსაც ფუნქციას აწვდი.',
        en: 'The names in the brackets are **parameters** — the data you hand the function.',
      },
      {
        ka: '`return` აბრუნებს პასუხს. `print` **აჩვენებს** ადამიანს, `return` კი **აძლევს** პროგრამას შემდეგი ნაბიჯისთვის.',
        en: '`return` hands an answer back. `print` **shows** a human; `return` **gives** the program something to use.',
      },
    ],
    example: `local function greet(name)
    print("გამარჯობა, " .. name)
end

greet("Saba")
greet("Nino")

local function double(x)
    return x * 2
end

local answer = double(21)
print(answer)`,
    expected: `გამარჯობა, Saba
გამარჯობა, Nino
42`,
    challenge: {
      ka: 'დაწერე ფუნქცია `area(w, h)`, რომელიც აბრუნებს `w * h`-ს. გამოიძახე 4-ით და 5-ით და დაბეჭდე — 20 უნდა მიიღო.',
      en: 'Write `area(w, h)` returning `w * h`. Call it with 4 and 5 and print it — you should get 20.',
    },
    starter: `local function area(w, h)
    return `,
    solution: `local function area(w, h)
    return w * h
end

print(area(4, 5))`,
    check: all(code('function area', 'return'), nums(20)),
    recap: {
      ka: '`local function` ქმნის, `()` იძახებს, `return` აბრუნებს, `end` ხურავს.',
      en: '`local function` creates, `()` calls, `return` answers, `end` closes.',
    },
  },

  {
    n: 5,
    slug: 'tables',
    minutes: 13,
    xp: 70,
    title: { ka: 'ცხრილები — ბევრი რამ ერთად', en: 'Tables — many things at once' },
    idea: { ka: 'ერთი ცვლადი, რომელიც მთელ სიას იტევს.', en: 'One variable holding a whole list.' },
    body: [
      {
        ka: 'Lua-ში სიას **ცხრილი** (table) ჰქვია და ფიგურული ფრჩხილებით იქმნება: `{ }`. Roblox-ში ყველაფერი ცხრილია.',
        en: 'In Lua a list is called a **table** and uses curly brackets: `{ }`. In Roblox nearly everything is a table.',
      },
      {
        ka: 'ელემენტს ნომრით იღებ: `friends[1]` არის პირველი. Lua **1-დან** ითვლის — ეს იშვიათია, ენების უმეტესობა ნულიდან იწყებს.',
        en: 'You get an item by number: `friends[1]` is the first. Lua counts from **1** — that is unusual; most languages start at zero.',
      },
      { ka: '`#friends` გეუბნება, რამდენი ელემენტია ცხრილში.', en: '`#friends` tells you how many items are in it.' },
      {
        ka: 'დამატება: `table.insert(friends, "Giorgi")`. მთელი ცხრილის გასავლელად `ipairs` გამოიყენე.',
        en: 'To add: `table.insert(friends, "Giorgi")`. To walk the whole table, use `ipairs`.',
      },
    ],
    example: `local friends = {"Nino", "Luka", "Ana"}

print(friends[1])
print(#friends)

table.insert(friends, "Giorgi")

for i, f in ipairs(friends) do
    print(i .. ". " .. f)
end

local scores = {10, 7, 9}
local total = 0
for _, s in ipairs(scores) do
    total = total + s
end
print("ჯამი: " .. total)`,
    expected: `Nino
3
1. Nino
2. Luka
3. Ana
4. Giorgi
ჯამი: 26`,
    challenge: {
      ka: 'შექმენი ცხრილი `nums` რიცხვებით 3, 8, 1, 6. დაბეჭდე რამდენი ელემენტია და მათი ჯამი.',
      en: 'Make a table `nums` with 3, 8, 1, 6. Print how many there are and their total.',
    },
    starter: `local nums = {`,
    solution: `local nums = {3, 8, 1, 6}

print(#nums)

local total = 0
for _, n in ipairs(nums) do
    total = total + n
end
print(total)`,
    check: all(code('nums'), nums(4), nums(18)),
    recap: {
      ka: 'ცხრილი `{}`-ში. ნომრები 1-დან. `#` ითვლის. `ipairs` გაივლის.',
      en: 'Tables use `{}`. Numbering starts at 1. `#` counts. `ipairs` walks.',
    },
  },

  {
    n: 6,
    slug: 'project',
    minutes: 20,
    xp: 100,
    title: { ka: 'პატარა პროექტი: მაღაზია', en: 'A small project: a shop' },
    idea: { ka: 'ყველაფერი, რაც ისწავლე, ერთ სკრიპტში.', en: 'Everything you learned, in one script.' },
    body: [
      {
        ka: 'ავაწყოთ Roblox-ის მაღაზიის ლოგიკა: ნივთების სია, ფასები და შემოწმება, ხომ არ ჰყოფნის მოთამაშეს მონეტა.',
        en: 'Let us build the logic of a Roblox shop: a list of items, prices, and a check on whether the player can afford it.',
      },
      {
        ka: 'ყველა ნაწილი უკვე იცი: **ცხრილი** ნივთებისთვის, **ციკლი** რომ ყველა გაიაროს, **if** ფასის შესამოწმებლად, **ფუნქცია** რომ კოდი დალაგდეს.',
        en: 'You know all the pieces: a **table** of items, a **loop** over them, an **if** on the price, a **function** to keep it tidy.',
      },
      {
        ka: 'დააკვირდი, როგორ ინახება ნივთი და ფასი ერთად, ერთ პატარა ცხრილში. ეს ზუსტად ისეა, როგორც ნამდვილ თამაშებში.',
        en: 'Notice how an item and its price live together in one small table. That is exactly how real games do it.',
      },
    ],
    example: `local coins = 60

local shop = {
    {name = "მახვილი", price = 20},
    {name = "ფარი", price = 35},
    {name = "დრაკონი", price = 500},
}

local function canAfford(money, price)
    return money >= price
end

for _, item in ipairs(shop) do
    if canAfford(coins, item.price) then
        print(item.name .. " (" .. item.price .. ") - შეგიძლია")
    else
        print(item.name .. " (" .. item.price .. ") - ძვირია")
    end
end

print("შენი მონეტები: " .. coins)`,
    expected: `მახვილი (20) - შეგიძლია
ფარი (35) - შეგიძლია
დრაკონი (500) - ძვირია
შენი მონეტები: 60`,
    challenge: {
      ka: 'დაამატე მაღაზიას ახალი ნივთი (შენი არჩევანით) და ბოლოში ერთი ხაზი, რომელიც ბეჭდავს, სულ რამდენი ნივთია მაღაზიაში.',
      en: 'Add one new item to the shop, and a last line printing how many items the shop has in total.',
    },
    starter: `local coins = 60

local shop = {
    {name = "მახვილი", price = 20},
    {name = "ფარი", price = 35},
    {name = "დრაკონი", price = 500},
}

for _, item in ipairs(shop) do
    if coins >= item.price then
        print(item.name .. " - შეგიძლია")
    else
        print(item.name .. " - ძვირია")
    end
end
`,
    solution: `local coins = 60

local shop = {
    {name = "მახვილი", price = 20},
    {name = "ფარი", price = 35},
    {name = "დრაკონი", price = 500},
    {name = "ჩაფხუტი", price = 15},
}

for _, item in ipairs(shop) do
    if coins >= item.price then
        print(item.name .. " - შეგიძლია")
    else
        print(item.name .. " - ძვირია")
    end
end

print("ნივთები: " .. #shop)`,
    check: all(code('#shop'), nums(4)),
    recap: {
      ka: 'ნამდვილი სკრიპტი პატარა ნაწილების კომბინაციაა.',
      en: 'A real script is small pieces combined.',
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
        ka: 'Roblox Studio-ში Output ფანჯარა წითლად გიწერს შეცდომებს. ბევრი ახალბედა ამას უბრალოდ ხურავს — ეს ყველაზე დიდი შეცდომაა.',
        en: 'In Roblox Studio the Output window shows errors in red. A lot of beginners just close it — that is the biggest mistake.',
      },
      {
        ka: 'შეცდომა ყოველთვის ხაზის ნომერს გეუბნება. დაიწყე იქიდან და შემდეგ ერთი-ორი ხაზით მაღლა შეხედე.',
        en: 'An error always tells you a line number. Start there, then look a line or two above it.',
      },
      {
        ka: 'სამი ყველაზე ხშირი Lua-ში:',
        en: 'The three most common in Lua:',
      },
      {
        ka: '`attempt to concatenate a nil value` — `..`-ით ცარიელ ცვლადს აერთებ. ჩვეულებრივ სახელი არასწორად გაქვს დაწერილი.',
        en: '`attempt to concatenate a nil value` — you joined something that does not exist. Usually a misspelled name.',
      },
      {
        ka: "`'end' expected` — ბლოკი არ დაგიხურავს. დათვალე: ყოველ `if`, `for` და `function`-ს თავისი `end` სჭირდება.",
        en: "`'end' expected` — a block is not closed. Count them: every `if`, `for`, and `function` needs its own `end`.",
      },
      {
        ka: '`attempt to perform arithmetic on a string` — ტექსტს უმრავლებ რიცხვს. `tonumber("5")` გადააქცევს რიცხვად.',
        en: '`attempt to perform arithmetic on a string` — you did maths on text. `tonumber("5")` turns it into a number.',
      },
      {
        ka: 'ოქროს წესი: როცა გაგიჭირდა, `print()` ჩასვი შუაში და ნახე, რა აქვს ცვლადს სინამდვილეში.',
        en: 'Golden rule: when stuck, drop a `print()` in the middle and see what the variable really holds.',
      },
    ],
    example: `local age = "14"
print("ასაკი: " .. age)

local number = tonumber(age)
print(number + 1)

local items = {"a", "b", "c"}
print(items[3])`,
    expected: `ასაკი: 14
15
c`,
    challenge: {
      ka: 'ამ კოდს სამი შეცდომა აქვს: არასწორად დაწერილი სახელი, დაკარგული `end` და ტექსტზე მათემატიკა. გაასწორე ისე, რომ დაიბეჭდოს `ჯამი: 15`.',
      en: 'This code has three bugs: a misspelled name, a missing `end`, and maths on text. Fix them so it prints `Total: 15`.',
    },
    starter: `local total = 0
local values = {4, 5, "6"}

for _, v in ipairs(values) do
    total = totl + v

print("ჯამი: " .. total)`,
    solution: `local total = 0
local values = {4, 5, "6"}

for _, v in ipairs(values) do
    total = total + tonumber(v)
end

print("ჯამი: " .. total)`,
    check: nums(15),
    recap: {
      ka: 'ხაზის ნომერი ჯერ, შემდეგ `end`-ები დათვალე, შემდეგ `print()` ჩასვი.',
      en: 'Line number first, then count your `end`s, then drop in a `print()`.',
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
        ka: 'შვიდი დონე გაიარე. ახლა გახსენი Roblox Studio, ჩასვი შენი სკრიპტი და ნახე, როგორ მუშაობს ნამდვილ თამაშში.',
        en: 'Seven levels done. Now open Roblox Studio, paste your script in, and see it work in a real game.',
      },
      {
        ka: 'იდეები: ქულების მთვლელი, ნივთების მაღაზია, ან გზა, რომელზეც საფეხურები ციკლით იქმნება.',
        en: 'Ideas: a score counter, an item shop, or a path whose steps are built by a loop.',
      },
      {
        ka: 'ქვემოთ დონეების გენერატორია. აიღე, შეცვალე რიცხვები, გატეხე, გაასწორე — ასე სწავლობს ყველა.',
        en: 'Below is a level generator. Take it, change the numbers, break it, fix it — that is how everyone learns.',
      },
      {
        ka: 'როცა `#showcase`-ში დადებ, დაწერე რისი გაკეთება გინდოდა და რა იყო ყველაზე რთული.',
        en: 'When you post in `#showcase`, say what you were trying to make and what was hardest.',
      },
    ],
    example: `local function makeLevel(number, difficulty)
    local bricks = number * difficulty
    return bricks
end

local levels = {1, 2, 3, 4}

for _, n in ipairs(levels) do
    local bricks = makeLevel(n, 3)
    print("დონე " .. n .. ": " .. bricks .. " ბლოკი")
end`,
    expected: `დონე 1: 3 ბლოკი
დონე 2: 6 ბლოკი
დონე 3: 9 ბლოკი
დონე 4: 12 ბლოკი`,
    challenge: {
      ka: 'გახადე შენი: შეცვალე სირთულე, დაამატე მეხუთე დონე და ერთი ხაზი, რომელიც სულ რამდენი ბლოკი დასჭირდა, იმას ბეჭდავს.',
      en: 'Make it yours: change the difficulty, add a fifth level, and one line printing the total bricks used.',
    },
    starter: `local function makeLevel(number, difficulty)
    return number * difficulty
end

local levels = {1, 2, 3, 4}
local total = 0

for _, n in ipairs(levels) do
    local bricks = makeLevel(n, 3)
    print("დონე " .. n .. ": " .. bricks)
end
`,
    solution: `local function makeLevel(number, difficulty)
    return number * difficulty
end

local levels = {1, 2, 3, 4, 5}
local total = 0

for _, n in ipairs(levels) do
    local bricks = makeLevel(n, 4)
    total = total + bricks
    print("დონე " .. n .. ": " .. bricks)
end

print("სულ: " .. total)`,
    check: all(code('total'), printed),
    recap: {
      ka: 'რვა დონე გავლილია. შემდეგი ნაბიჯი — ასწავლე სხვას #help-ში.',
      en: 'Eight levels done. Next step: teach someone else in #help.',
    },
  },
]
