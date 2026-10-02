import { nums, code, all, printed } from './_check.js'

export const csharpLessons = [
  {
    n: 1,
    slug: 'first-program',
    minutes: 12,
    xp: 50,
    title: { ka: 'შენი პირველი პროგრამა', en: 'Your first program' },
    idea: { ka: 'C# მოწესრიგებული ენაა — ყველაფერს თავისი ადგილი აქვს.', en: 'C# is a tidy language — everything has its place.' },
    body: [
      {
        ka: 'C# არის Unity-ის ენა. თუ თამაშების გაკეთება გინდა Roblox-ის მიღმა, ეს შენი გზაა.',
        en: 'C# is the language of Unity. If you want to make games beyond Roblox, this is your route.',
      },
      {
        ka: 'ყველა C# პროგრამა `Main()` მეთოდით იწყება. ის `class`-ის შიგნითაა — კლასი უბრალოდ კონტეინერია კოდისთვის.',
        en: 'Every C# program starts at `Main()`. It lives inside a `class` — a class is just a container for code.',
      },
      {
        ka: '`Console.WriteLine()` ბეჭდავს და ავტომატურად გადადის ახალ ხაზზე. `Console.Write()` ახალ ხაზზე არ გადადის.',
        en: '`Console.WriteLine()` prints and moves to a new line by itself. `Console.Write()` does not.',
      },
      {
        ka: 'ცვლადს ტიპი სჭირდება: `int` მთელი რიცხვი, `double` წილადი, `string` ტექსტი, `bool` ჭეშმარიტი/მცდარი.',
        en: 'A variable needs a type: `int` whole number, `double` decimal, `string` text, `bool` true or false.',
      },
      {
        ka: 'ტექსტში ცვლადის ჩასასმელად დოლარის ნიშანი გამოიყენე: `$"წლები: {age}"`. ფიგურულ ფრჩხილებში ცვლადის სახელს წერ.',
        en: 'To drop a variable into text, use a dollar sign: `$"Age: {age}"`. The variable name goes in the curly brackets.',
      },
      { ka: 'ყოველი ბრძანება წერტილმძიმით მთავრდება.', en: 'Every statement ends with a semicolon.' },
    ],
    example: `using System;

class Program {
    static void Main() {
        Console.WriteLine("გამარჯობა!");

        string name = "Saba";
        int age = 14;

        Console.WriteLine(name);
        Console.WriteLine($"წლები: {age}");
    }
}`,
    expected: `გამარჯობა!
Saba
წლები: 14`,
    challenge: {
      ka: 'შექმენი `string city` შენი ქალაქით და დაბეჭდე `ვცხოვრობ: Tbilisi`.',
      en: 'Make a `string city` with your city and print `I live in: Tbilisi`.',
    },
    starter: `using System;

class Program {
    static void Main() {
        string city =

    }
}`,
    solution: `using System;

class Program {
    static void Main() {
        string city = "Tbilisi";
        Console.WriteLine($"ვცხოვრობ: {city}");
    }
}`,
    check: all(code('city'), printed),
    recap: {
      ka: '`Main()` არის დასაწყისი. `Console.WriteLine()` ბეჭდავს. ტიპი სახელის წინ. წერტილმძიმე ბოლოში.',
      en: '`Main()` is the start. `Console.WriteLine()` prints. Type before the name. Semicolon at the end.',
    },
  },

  {
    n: 2,
    slug: 'if-else',
    minutes: 12,
    xp: 60,
    title: { ka: 'გადაწყვეტილებები: if / else', en: 'Decisions: if / else' },
    idea: { ka: 'პროგრამა ირჩევს გზას პირობის მიხედვით.', en: 'The program picks a path based on a condition.' },
    body: [
      {
        ka: '`if` პირობას მრგვალ ფრჩხილებში იღებს, კოდს კი ფიგურულში `{ }`.',
        en: '`if` takes a condition in round brackets and the code in curly ones `{ }`.',
      },
      { ka: '`else` იჭერს დანარჩენს, `else if` შუალედურ ვარიანტს ამატებს.', en: '`else` catches the rest, `else if` adds one in between.' },
      {
        ka: 'შედარება: `==` ტოლია, `!=` არ არის ტოლი, `>`, `<`, `>=`, `<=`. შეერთება: `&&` არის „და“, `||` არის „ან“.',
        en: 'Comparing: `==` equal, `!=` not equal, plus `>`, `<`, `>=`, `<=`. Joining: `&&` is "and", `||` is "or".',
      },
      {
        ka: 'C#-ს აქვს `bool` ტიპი — ცვლადი, რომელიც მხოლოდ `true` ან `false` არის. პირობები სწორედ ამას აბრუნებენ.',
        en: 'C# has a `bool` type — a variable that is only ever `true` or `false`. That is exactly what a condition produces.',
      },
    ],
    example: `using System;

class Program {
    static void Main() {
        int age = 14;

        if (age >= 13) {
            Console.WriteLine("Discord-ზე შეგიძლია");
        } else {
            Console.WriteLine("ცოტა კიდევ მოიცადე");
        }

        int score = 7;
        bool alive = true;

        if (score > 5 && alive) {
            Console.WriteLine("თამაში გრძელდება");
        }
    }
}`,
    expected: `Discord-ზე შეგიძლია
თამაში გრძელდება`,
    challenge: {
      ka: 'დააყენე `int temp = 30;`. თუ 25-ზე მეტია, დაბეჭდე `ცხელა`, თორემ `ნორმალურია`.',
      en: 'Set `int temp = 30;`. If over 25, print `hot`, otherwise `fine`.',
    },
    starter: `using System;

class Program {
    static void Main() {
        int temp = 30;

        if (

    }
}`,
    solution: `using System;

class Program {
    static void Main() {
        int temp = 30;

        if (temp > 25) {
            Console.WriteLine("ცხელა");
        } else {
            Console.WriteLine("ნორმალურია");
        }
    }
}`,
    check: all(code('if', 'temp'), printed),
    recap: {
      ka: '`if (პირობა) { }` და `else { }`. `bool` არის `true` ან `false`.',
      en: '`if (condition) { }` and `else { }`. A `bool` is `true` or `false`.',
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
        ka: '`for` ციკლს სამი ნაწილი აქვს: საიდან დაიწყოს, სანამ იმუშაოს, რა შეიცვალოს ყოველ ჯერზე.',
        en: 'A `for` loop has three parts: where to start, how long to keep going, what changes each time.',
      },
      {
        ka: '`for (int i = 0; i < 5; i++)` ნიშნავს: დაიწყე ნულიდან, იმუშავე სანამ 5-ზე ნაკლებია, ყოველ ჯერზე ერთით გაზარდე.',
        en: '`for (int i = 0; i < 5; i++)` means: start at zero, keep going while under 5, add one each time.',
      },
      { ka: '`i++` არის `i = i + 1`-ის მოკლე ჩანაწერი.', en: '`i++` is short for `i = i + 1`.' },
      {
        ka: '`while` მეორდება სანამ პირობა ჭეშმარიტია. ფრთხილად უსასრულო ციკლებთან.',
        en: '`while` repeats while the condition is true. Watch out for endless loops.',
      },
    ],
    example: `using System;

class Program {
    static void Main() {
        for (int i = 0; i < 3; i++) {
            Console.WriteLine($"გამარჯობა {i}");
        }

        for (int n = 1; n <= 5; n++) {
            Console.WriteLine($"{n} x 2 = {n * 2}");
        }

        int count = 3;
        while (count > 0) {
            Console.WriteLine(count);
            count = count - 1;
        }
        Console.WriteLine("გაფრინდა!");
    }
}`,
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
    starter: `using System;

class Program {
    static void Main() {
        for (int n =

    }
}`,
    solution: `using System;

class Program {
    static void Main() {
        for (int n = 1; n <= 10; n++) {
            Console.WriteLine(n);
        }
    }
}`,
    check: all(code('for'), nums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)),
    recap: {
      ka: '`for (დაწყება; პირობა; ნაბიჯი)`. `i++` ერთით ზრდის.',
      en: '`for (start; condition; step)`. `i++` adds one.',
    },
  },

  {
    n: 4,
    slug: 'methods',
    minutes: 13,
    xp: 70,
    title: { ka: 'მეთოდები', en: 'Methods' },
    idea: { ka: 'C#-ში ფუნქციას მეთოდი ჰქვია.', en: 'In C#, a function is called a method.' },
    body: [
      {
        ka: '`Main()` თვითონ მეთოდია. ახლა შენი დაწერე — იმავე კლასის შიგნით.',
        en: '`Main()` is itself a method. Now write your own, inside the same class.',
      },
      {
        ka: 'მეთოდს სჭირდება: `static`, დასაბრუნებელი ტიპი, სახელი და პარამეტრები. მაგალითად `static int Area(int w, int h)`.',
        en: 'A method needs: `static`, a return type, a name, and parameters. For example `static int Area(int w, int h)`.',
      },
      {
        ka: '`static` ჯერჯერობით მიიღე როგორც „ასე უნდა იყოს“. მნიშვნელობას მოგვიანებით გაიგებ, კლასებისა და ობიექტების სწავლისას.',
        en: 'Take `static` as "that is just how it is" for now. It makes sense later, when you learn classes and objects.',
      },
      {
        ka: 'თუ მეთოდი არაფერს აბრუნებს, ტიპი `void` არის. `return` აბრუნებს პასუხს და იქვე წყვეტს მეთოდს.',
        en: 'If a method returns nothing, its type is `void`. `return` hands back an answer and stops the method there.',
      },
      {
        ka: 'C#-ში მეთოდების სახელები დიდი ასოთი იწყება — `Area`, არა `area`. ეს ჩვეულებაა და ყველა ასე წერს.',
        en: 'In C#, method names start with a capital letter — `Area`, not `area`. It is a convention, and everyone follows it.',
      },
    ],
    example: `using System;

class Program {
    static void Greet(string name) {
        Console.WriteLine($"გამარჯობა, {name}");
    }

    static int Double(int x) {
        return x * 2;
    }

    static void Main() {
        Greet("Saba");
        Greet("Nino");

        int answer = Double(21);
        Console.WriteLine(answer);
    }
}`,
    expected: `გამარჯობა, Saba
გამარჯობა, Nino
42`,
    challenge: {
      ka: 'დაწერე `static int Area(int w, int h)`, რომელიც აბრუნებს `w * h`-ს. გამოიძახე 4-ით და 5-ით და დაბეჭდე — 20 უნდა მიიღო.',
      en: 'Write `static int Area(int w, int h)` returning `w * h`. Call it with 4 and 5 and print it — you should get 20.',
    },
    starter: `using System;

class Program {
    static int Area(int w, int h) {
        return
    }

    static void Main() {

    }
}`,
    solution: `using System;

class Program {
    static int Area(int w, int h) {
        return w * h;
    }

    static void Main() {
        Console.WriteLine(Area(4, 5));
    }
}`,
    check: all(code('Area', 'return'), nums(20)),
    recap: {
      ka: '`static ტიპი სახელი(პარამეტრები)`. `return` აბრუნებს. სახელი დიდი ასოთი.',
      en: '`static Type Name(parameters)`. `return` answers. Names start with a capital.',
    },
  },

  {
    n: 5,
    slug: 'arrays',
    minutes: 13,
    xp: 70,
    title: { ka: 'მასივები', en: 'Arrays' },
    idea: { ka: 'ერთი სახელი, მრავალი მნიშვნელობა.', en: 'One name, many values.' },
    body: [
      {
        ka: '**მასივი** ერთი ტიპის რამდენიმე მნიშვნელობას ინახავს: `int[] nums = {3, 8, 1, 6};`',
        en: 'An **array** holds several values of one type: `int[] nums = {3, 8, 1, 6};`',
      },
      {
        ka: 'კვადრატული ფრჩხილები **ტიპის** გვერდითაა, არა სახელის: `int[]` ნიშნავს „მთელი რიცხვების მასივი“.',
        en: 'The square brackets go next to the **type**, not the name: `int[]` means "array of whole numbers".',
      },
      {
        ka: 'ელემენტს ნომრით იღებ: `nums[0]` პირველია. **ნულიდან** იწყება. `nums.Length` გეუბნება რამდენია.',
        en: 'Take an item by number: `nums[0]` is the first. It starts at **zero**. `nums.Length` tells you how many.',
      },
      {
        ka: '`foreach` მთელ მასივს გაირბენს ნომრების გარეშე — ხშირად ეს ყველაზე სუფთა გზაა.',
        en: '`foreach` walks the whole array without numbers — often the cleanest way.',
      },
      {
        ka: 'C#-ში მასივს ფიქსირებული ზომა აქვს. თუ ზრდადი სია გჭირდება, `List<int>` არსებობს — ამას მოგვიანებით ისწავლი.',
        en: 'A C# array has a fixed size. When you need one that grows there is `List<int>` — you will meet it later.',
      },
    ],
    example: `using System;

class Program {
    static void Main() {
        string[] friends = {"Nino", "Luka", "Ana"};

        Console.WriteLine(friends[0]);
        Console.WriteLine(friends.Length);

        foreach (string f in friends) {
            Console.WriteLine($"გამარჯობა, {f}");
        }

        int[] scores = {10, 7, 9};
        int total = 0;

        foreach (int s in scores) {
            total = total + s;
        }

        Console.WriteLine($"ჯამი: {total}");
    }
}`,
    expected: `Nino
3
გამარჯობა, Nino
გამარჯობა, Luka
გამარჯობა, Ana
ჯამი: 26`,
    challenge: {
      ka: 'შექმენი `int[] nums = {3, 8, 1, 6};`. დაბეჭდე რამდენი ელემენტია და მათი ჯამი.',
      en: 'Make `int[] nums = {3, 8, 1, 6};`. Print how many items there are and their total.',
    },
    starter: `using System;

class Program {
    static void Main() {
        int[] nums = {

    }
}`,
    solution: `using System;

class Program {
    static void Main() {
        int[] nums = {3, 8, 1, 6};

        Console.WriteLine(nums.Length);

        int total = 0;
        foreach (int n in nums) {
            total = total + n;
        }
        Console.WriteLine(total);
    }
}`,
    check: all(code('nums'), nums(4), nums(18)),
    recap: {
      ka: '`int[]` არის ტიპი. ნომრები ნულიდან. `.Length` ითვლის. `foreach` გაივლის.',
      en: '`int[]` is the type. Numbering starts at zero. `.Length` counts. `foreach` walks.',
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
        ka: 'ავაწყოთ ქვიზი: კითხვების მასივი, პასუხების შემოწმება, ქულის დათვლა.',
        en: 'Let us build a quiz: an array of questions, a check on each answer, and a score.',
      },
      {
        ka: 'ყველა ნაწილი იცი: **მასივი**, **ციკლი**, **if** და **მეთოდი**. ახალი არაფერია.',
        en: 'You know all the pieces: an **array**, a **loop**, an **if**, and a **method**. Nothing new.',
      },
      {
        ka: 'ორი პარალელური მასივი გვაქვს — კითხვები და სწორი პასუხები — და ერთი და იგივე ნომერი ორივეში ერთ წყვილს ნიშნავს.',
        en: 'We use two parallel arrays — questions and correct answers — where the same index means one pair.',
      },
      {
        ka: 'ნამდვილ პროგრამაში ამისთვის კლასს დაწერდი. ჯერჯერობით მასივები საკმარისია.',
        en: 'In a real program you would write a class for this. For now, arrays are enough.',
      },
    ],
    example: `using System;

class Program {
    static bool Check(string given, string correct) {
        return given == correct;
    }

    static void Main() {
        string[] questions = {
            "2 + 2 რამდენია?",
            "საქართველოს დედაქალაქი?",
            "როგორ იწყება მეთოდის სახელი C#-ში?"
        };

        string[] answers = {"4", "Tbilisi", "დიდი ასოთი"};
        string[] mine = {"4", "Tbilisi", "პატარა ასოთი"};

        int score = 0;

        for (int i = 0; i < questions.Length; i++) {
            Console.WriteLine($"{questions[i]} -> {mine[i]}");

            if (Check(mine[i], answers[i])) {
                Console.WriteLine("  სწორია");
                score++;
            } else {
                Console.WriteLine($"  არასწორია, სწორი იყო: {answers[i]}");
            }
        }

        Console.WriteLine($"ქულა: {score} / {questions.Length}");
    }
}`,
    expected: `2 + 2 რამდენია? -> 4
  სწორია
საქართველოს დედაქალაქი? -> Tbilisi
  სწორია
როგორ იწყება მეთოდის სახელი C#-ში? -> პატარა ასოთი
  არასწორია, სწორი იყო: დიდი ასოთი
ქულა: 2 / 3`,
    challenge: {
      ka: 'გაასწორე `mine` მასივი ისე, რომ სამივე პასუხი სწორი იყოს და ბოლო ხაზზე დაიბეჭდოს `3 / 3`.',
      en: 'Fix the `mine` array so all three answers are right and the last line prints `3 / 3`.',
    },
    starter: `using System;

class Program {
    static void Main() {
        string[] answers = {"4", "Tbilisi", "დიდი ასოთი"};
        string[] mine = {"4", "Tbilisi", "პატარა ასოთი"};

        int score = 0;
        for (int i = 0; i < answers.Length; i++) {
            if (mine[i] == answers[i]) {
                score++;
            }
        }

        Console.WriteLine($"ქულა: {score} / {answers.Length}");
    }
}`,
    solution: `using System;

class Program {
    static void Main() {
        string[] answers = {"4", "Tbilisi", "დიდი ასოთი"};
        string[] mine = {"4", "Tbilisi", "დიდი ასოთი"};

        int score = 0;
        for (int i = 0; i < answers.Length; i++) {
            if (mine[i] == answers[i]) {
                score++;
            }
        }

        Console.WriteLine($"ქულა: {score} / {answers.Length}");
    }
}`,
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
    idea: { ka: 'C# შეცდომას გაშვებამდე პოულობს.', en: 'C# finds errors before the program runs.' },
    body: [
      {
        ka: 'C# **კომპილირებადი** ენაა: შეცდომას გაშვებამდე პოულობს. Visual Studio ხაზს წითლად გიხაზავს ჯერ კიდევ წერის დროს.',
        en: 'C# is **compiled**: it finds errors before running. Visual Studio underlines the line in red while you are still typing.',
      },
      { ka: 'ყოველთვის პირველი შეცდომა გაასწორე — დანარჩენი ხშირად თავისით ქრება.', en: 'Always fix the first error — the rest often disappear on their own.' },
      { ka: 'ოთხი ყველაზე ხშირი:', en: 'The four most common:' },
      {
        ka: "`; expected` — წერტილმძიმე აკლია. შეხედე იმ ხაზს და ერთით ზემოთაც.",
        en: "`; expected` — a semicolon is missing. Check that line, and the one above.",
      },
      {
        ka: '`The name ... does not exist` — ასეთი ცვლადი არ არსებობს. ასო არასწორად გაქვს, ან `{ }`-ის არასწორ ადგილას დაწერე.',
        en: '`The name ... does not exist` — no such variable. A typo, or you declared it inside the wrong `{ }`.',
      },
      {
        ka: '`Cannot implicitly convert type string to int` — ტიპები აგერია. `int.Parse("5")` ტექსტს რიცხვად აქცევს.',
        en: '`Cannot implicitly convert type string to int` — the types do not match. `int.Parse("5")` turns text into a number.',
      },
      {
        ka: '`IndexOutOfRangeException` — მასივს ისეთ ნომერს ეკითხები, რომელიც არ აქვს. გახსოვდეს: 3 ელემენტი ნიშნავს ნომრებს 0, 1, 2 — **არა** 3.',
        en: '`IndexOutOfRangeException` — you asked the array for a number it does not have. Remember: 3 items means indexes 0, 1, 2 — **not** 3.',
      },
    ],
    example: `using System;

class Program {
    static void Main() {
        string age = "14";
        Console.WriteLine($"ასაკი: {age}");

        int number = int.Parse(age);
        Console.WriteLine(number + 1);

        string[] items = {"a", "b", "c"};
        Console.WriteLine(items[2]);
    }
}`,
    expected: `ასაკი: 14
15
c`,
    challenge: {
      ka: 'ამ კოდს სამი შეცდომა აქვს: დაკარგული წერტილმძიმე, არასწორად დაწერილი სახელი და ტექსტის მიმატება რიცხვთან. გაასწორე ისე, რომ დაიბეჭდოს `ჯამი: 15`.',
      en: 'Three bugs: a missing semicolon, a misspelled name, and text added to a number. Fix them so it prints `Total: 15`.',
    },
    starter: `using System;

class Program {
    static void Main() {
        int total = 0
        string[] values = {"4", "5", "6"};

        foreach (string v in values) {
            total = totl + int.Parse(v);
        }

        Console.WriteLine($"ჯამი: {total}");
    }
}`,
    solution: `using System;

class Program {
    static void Main() {
        int total = 0;
        string[] values = {"4", "5", "6"};

        foreach (string v in values) {
            total = total + int.Parse(v);
        }

        Console.WriteLine($"ჯამი: {total}");
    }
}`,
    check: nums(15),
    recap: {
      ka: 'პირველი შეცდომა ჯერ. წერტილმძიმეები დათვალე. `int.Parse()` ტექსტს რიცხვად აქცევს.',
      en: 'First error first. Count your semicolons. `int.Parse()` turns text into a number.',
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
        ka: 'შვიდი დონე გაიარე. ახლა დააყენე .NET SDK უფასოდ და გაუშვი C# ნამდვილად შენს კომპიუტერზე.',
        en: 'Seven levels done. Now install the .NET SDK for free and run C# properly on your own machine.',
      },
      {
        ka: 'ტერმინალში: `dotnet new console -o myapp`, შემდეგ `cd myapp` და `dotnet run`. სულ სამი ბრძანება.',
        en: 'In a terminal: `dotnet new console -o myapp`, then `cd myapp` and `dotnet run`. Three commands in total.',
      },
      {
        ka: 'როცა მზად იქნები, დააყენე Unity — უფასოა სტუდენტებისთვის — და იგივე ენით თამაშებს გააკეთებ.',
        en: 'When you are ready, install Unity — free for students — and make games with this same language.',
      },
      {
        ka: 'იდეები: ნიშნების საშუალო, ინვენტარის სისტემა, ან პატარა სტატისტიკა. დადე `#showcase`-ში.',
        en: 'Ideas: a grade average, an inventory system, or small statistics. Post it in `#showcase`.',
      },
    ],
    example: `using System;

class Program {
    static string Bar(int n) {
        string s = "";
        for (int i = 0; i < n; i++) {
            s = s + "*";
        }
        return s;
    }

    static void Main() {
        int[] scores = {3, 5, 2, 5, 4};
        int total = 0;

        Console.WriteLine("ჩემი კვირა");

        foreach (int s in scores) {
            Console.WriteLine($"  {Bar(s)} {s}");
            total = total + s;
        }

        double average = (double)total / scores.Length;
        Console.WriteLine($"  საშუალო: {average}");
    }
}`,
    expected: `ჩემი კვირა
  *** 3
  ***** 5
  ** 2
  ***** 5
  **** 4
  საშუალო: 3.8`,
    challenge: {
      ka: 'გახადე შენი: შეცვალე რიცხვები და დაამატე ხაზი, რომელიც ყველაზე მაღალ ქულას ბეჭდავს. გამოიყენე `if` ციკლის შიგნით.',
      en: 'Make it yours: change the numbers and add a line printing the highest score. Use an `if` inside the loop.',
    },
    starter: `using System;

class Program {
    static void Main() {
        int[] scores = {3, 5, 2, 5, 4};
        int total = 0;
        int best = 0;

        foreach (int s in scores) {
            total = total + s;
        }

        Console.WriteLine($"საშუალო: {(double)total / scores.Length}");
    }
}`,
    solution: `using System;

class Program {
    static void Main() {
        int[] scores = {3, 5, 2, 5, 4};
        int total = 0;
        int best = 0;

        foreach (int s in scores) {
            total = total + s;
            if (s > best) {
                best = s;
            }
        }

        Console.WriteLine($"საშუალო: {(double)total / scores.Length}");
        Console.WriteLine($"მაქსიმუმი: {best}");
    }
}`,
    check: all(code('best'), nums(5)),
    recap: {
      ka: 'რვა დონე გავლილია. შემდეგი ნაბიჯი — დააყენე .NET და ასწავლე სხვას.',
      en: 'Eight levels done. Next: install .NET, and teach someone else.',
    },
  },
]
