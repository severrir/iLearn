import { nums, code, all, printed } from './_check.js'

export const cLessons = [
  {
    n: 1,
    slug: 'first-program',
    minutes: 12,
    xp: 50,
    title: { ka: 'შენი პირველი პროგრამა', en: 'Your first program' },
    idea: { ka: 'C მკაცრია: ყველაფერს სახელი და ტიპი სჭირდება.', en: 'C is strict: everything needs a name and a type.' },
    body: [
      {
        ka: 'C ძველი ენაა და თითქმის ყველაფერი მასზეა აგებული — Windows, Linux, თამაშის ძრავები, მანქანის კომპიუტერიც კი.',
        en: 'C is old, and almost everything is built on it — Windows, Linux, game engines, even the computer in a car.',
      },
      {
        ka: 'ყველა C პროგრამა იწყება `main()` ფუნქციით. ეს არის კარი, საიდანაც კომპიუტერი შემოდის.',
        en: 'Every C program starts at a function called `main()`. That is the door the computer walks in through.',
      },
      {
        ka: '`#include <stdio.h>` ზემოთ ნიშნავს: „მომეცი ბეჭდვის ინსტრუმენტები“. `stdio` არის standard input/output.',
        en: '`#include <stdio.h>` at the top means "give me the printing tools". `stdio` is standard input/output.',
      },
      {
        ka: '`printf()` ბეჭდავს. `\\n` ნიშნავს ახალ ხაზს — C თვითონ არ გადადის ახალ ხაზზე, შენ უნდა უთხრა.',
        en: '`printf()` prints. `\\n` means a new line — C does not move to a new line by itself, you have to say so.',
      },
      {
        ka: 'ცვლადს **ტიპი** სჭირდება: `int` მთელი რიცხვია, `float` წილადი, `char` ერთი სიმბოლო. ტიპი წინ იწერება: `int age = 14;`',
        en: 'A variable needs a **type**: `int` is a whole number, `float` has decimals, `char` is a single character. The type goes first: `int age = 14;`',
      },
      {
        ka: 'ბეჭდვისას **ფორმატი** უნდა მიუთითო: `%d` რიცხვისთვის, `%s` ტექსტისთვის, `%f` წილადისთვის. ყოველი ხაზი წერტილმძიმით მთავრდება.',
        en: 'When printing you must say the **format**: `%d` for a number, `%s` for text, `%f` for a decimal. Every line ends with a semicolon.',
      },
    ],
    example: `#include <stdio.h>

int main() {
    printf("გამარჯობა!\\n");

    int age = 14;
    char name[] = "Saba";

    printf("%s\\n", name);
    printf("წლები: %d\\n", age);

    return 0;
}`,
    expected: `გამარჯობა!
Saba
წლები: 14`,
    challenge: {
      ka: 'შექმენი `int year = 2026;` და დაბეჭდე `წელი: 2026`.',
      en: 'Make `int year = 2026;` and print `Year: 2026`.',
    },
    starter: `#include <stdio.h>

int main() {
    int year =

    return 0;
}`,
    solution: `#include <stdio.h>

int main() {
    int year = 2026;
    printf("წელი: %d\\n", year);
    return 0;
}`,
    check: all(code('year'), nums(2026)),
    recap: {
      ka: '`main()` არის დასაწყისი. `printf` ბეჭდავს. ტიპი ყოველთვის სახელის წინ. წერტილმძიმე ყოველ ხაზზე.',
      en: '`main()` is the start. `printf` prints. The type always comes first. Semicolon on every line.',
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
        ka: '`if` პირობას მრგვალ ფრჩხილებში იღებს, შესასრულებელ კოდს კი ფიგურულში `{ }`.',
        en: '`if` takes its condition in round brackets and the code to run in curly ones `{ }`.',
      },
      { ka: '`else` იჭერს დანარჩენს, `else if` კი შუალედურ ვარიანტს ამატებს.', en: '`else` catches the rest, and `else if` adds an option in between.' },
      {
        ka: 'შედარება: `==` ტოლია, `!=` არ არის ტოლი, `>`, `<`, `>=`, `<=`. შეერთება: `&&` არის „და“, `||` არის „ან“.',
        en: 'Comparing: `==` equal, `!=` not equal, plus `>`, `<`, `>=`, `<=`. Joining: `&&` is "and", `||` is "or".',
      },
      {
        ka: 'კლასიკური მახე: `if (x = 5)` ნაცვლად `if (x == 5)`. პირველი **ანიჭებს** 5-ს და ყოველთვის ჭეშმარიტია. ეს შეცდომა ყველას დაუშვია.',
        en: 'The classic trap: `if (x = 5)` instead of `if (x == 5)`. The first one **assigns** 5 and is always true. Everyone makes this mistake once.',
      },
    ],
    example: `#include <stdio.h>

int main() {
    int age = 14;

    if (age >= 13) {
        printf("Discord-ზე შეგიძლია\\n");
    } else {
        printf("ცოტა კიდევ მოიცადე\\n");
    }

    int score = 7;
    int lives = 2;

    if (score > 5 && lives > 0) {
        printf("თამაში გრძელდება\\n");
    }

    return 0;
}`,
    expected: `Discord-ზე შეგიძლია
თამაში გრძელდება`,
    challenge: {
      ka: 'დააყენე `int temp = 30;`. თუ 25-ზე მეტია, დაბეჭდე `ცხელა`, თორემ `ნორმალურია`.',
      en: 'Set `int temp = 30;`. If over 25, print `hot`, otherwise `fine`.',
    },
    starter: `#include <stdio.h>

int main() {
    int temp = 30;

    if (

    return 0;
}`,
    solution: `#include <stdio.h>

int main() {
    int temp = 30;

    if (temp > 25) {
        printf("ცხელა\\n");
    } else {
        printf("ნორმალურია\\n");
    }

    return 0;
}`,
    check: all(code('if', 'temp'), printed),
    recap: {
      ka: '`if (პირობა) { }` და `else { }`. ორი ტოლობის ნიშანი შესადარებლად, ერთი მისანიჭებლად.',
      en: '`if (condition) { }` and `else { }`. Two equals to compare, one to assign.',
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
        ka: '`for` ციკლს სამი ნაწილი აქვს წერტილმძიმეებით გაყოფილი: საიდან დაიწყოს, სანამ იმუშაოს, რა შეიცვალოს ყოველ ჯერზე.',
        en: 'A `for` loop has three parts split by semicolons: where to start, how long to keep going, what changes each time.',
      },
      {
        ka: '`for (int i = 0; i < 5; i++)` ნიშნავს: დაიწყე ნულიდან, იმუშავე სანამ 5-ზე ნაკლებია, ყოველ ჯერზე ერთით გაზარდე.',
        en: '`for (int i = 0; i < 5; i++)` means: start at zero, keep going while under 5, add one each time.',
      },
      { ka: '`i++` არის `i = i + 1`-ის მოკლე ჩანაწერი. `i--` ერთით ამცირებს.', en: '`i++` is short for `i = i + 1`. `i--` subtracts one.' },
      {
        ka: '`while` მეორდება სანამ პირობა ჭეშმარიტია. თუ პირობა არასდროს გახდება მცდარი, პროგრამა გაიყინება — C-ში ამას არაფერი შეაჩერებს.',
        en: '`while` repeats while the condition is true. If it never turns false the program hangs — and in C nothing will stop it.',
      },
    ],
    example: `#include <stdio.h>

int main() {
    for (int i = 0; i < 3; i++) {
        printf("გამარჯობა %d\\n", i);
    }

    for (int n = 1; n <= 5; n++) {
        printf("%d x 2 = %d\\n", n, n * 2);
    }

    int count = 3;
    while (count > 0) {
        printf("%d\\n", count);
        count = count - 1;
    }
    printf("გაფრინდა!\\n");

    return 0;
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
    starter: `#include <stdio.h>

int main() {
    for (int n =

    return 0;
}`,
    solution: `#include <stdio.h>

int main() {
    for (int n = 1; n <= 10; n++) {
        printf("%d\\n", n);
    }
    return 0;
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
    idea: { ka: 'საკუთარი ბრძანება, სახელითა და ტიპით.', en: 'Your own command, with a name and a type.' },
    body: [
      {
        ka: '`main()` თვითონ ფუნქციაა. ახლა შენი დაწერე.',
        en: '`main()` is itself a function. Now write your own.',
      },
      {
        ka: 'C-ში ფუნქციას **ორი** ტიპი აქვს: რას აბრუნებს (წინ) და რას იღებს (ფრჩხილებში). `int area(int w, int h)` აბრუნებს `int`-ს და იღებს ორ `int`-ს.',
        en: 'In C a function has **two** kinds of type: what it returns (in front) and what it takes (in the brackets). `int area(int w, int h)` returns an `int` and takes two `int`s.',
      },
      {
        ka: 'თუ ფუნქცია არაფერს აბრუნებს, ტიპი `void` არის.',
        en: 'If a function returns nothing, its type is `void`.',
      },
      {
        ka: 'მნიშვნელოვანი: ფუნქცია `main()`-ზე **წინ** დაწერე. C ზემოდან ქვემოთ კითხულობს და ჯერ უნდა იცოდეს, რომ ასეთი ფუნქცია არსებობს.',
        en: 'Important: write the function **above** `main()`. C reads top to bottom and needs to know the function exists before you use it.',
      },
      {
        ka: '`return` აბრუნებს პასუხს და იქვე წყვეტს ფუნქციას.',
        en: '`return` hands back an answer and stops the function right there.',
      },
    ],
    example: `#include <stdio.h>

void greet(char name[]) {
    printf("გამარჯობა, %s\\n", name);
}

int doubleIt(int x) {
    return x * 2;
}

int main() {
    greet("Saba");
    greet("Nino");

    int answer = doubleIt(21);
    printf("%d\\n", answer);

    return 0;
}`,
    expected: `გამარჯობა, Saba
გამარჯობა, Nino
42`,
    challenge: {
      ka: 'დაწერე `int area(int w, int h)`, რომელიც აბრუნებს `w * h`-ს. გამოიძახე 4-ით და 5-ით და დაბეჭდე — 20 უნდა მიიღო.',
      en: 'Write `int area(int w, int h)` returning `w * h`. Call it with 4 and 5 and print it — you should get 20.',
    },
    starter: `#include <stdio.h>

int area(int w, int h) {
    return
}

int main() {

    return 0;
}`,
    solution: `#include <stdio.h>

int area(int w, int h) {
    return w * h;
}

int main() {
    printf("%d\\n", area(4, 5));
    return 0;
}`,
    check: all(code('int area', 'return'), nums(20)),
    recap: {
      ka: 'დასაბრუნებელი ტიპი წინ, პარამეტრების ტიპები ფრჩხილებში, `main()`-ზე ზემოთ დაწერე.',
      en: 'Return type in front, parameter types in the brackets, written above `main()`.',
    },
  },

  {
    n: 5,
    slug: 'arrays',
    minutes: 13,
    xp: 70,
    title: { ka: 'მასივები', en: 'Arrays' },
    idea: { ka: 'ერთი სახელი, მრავალი მნიშვნელობა — და ფიქსირებული ზომა.', en: 'One name, many values — and a fixed size.' },
    body: [
      {
        ka: '**მასივი** ერთი ტიპის რამდენიმე მნიშვნელობას ინახავს: `int nums[4] = {3, 8, 1, 6};`',
        en: 'An **array** holds several values of the same type: `int nums[4] = {3, 8, 1, 6};`',
      },
      {
        ka: 'ელემენტს ნომრით იღებ: `nums[0]` პირველია. **ნულიდან** იწყება.',
        en: 'Take an item by number: `nums[0]` is the first. It starts at **zero**.',
      },
      {
        ka: 'მნიშვნელოვანი განსხვავება სხვა ენებისგან: C-ში მასივს **ფიქსირებული ზომა** აქვს. `int nums[4]` ყოველთვის ოთხია — ვერ გაზრდი.',
        en: 'A big difference from other languages: in C an array has a **fixed size**. `int nums[4]` is always four — you cannot grow it.',
      },
      {
        ka: 'საშიში ნაწილი: C **არ ამოწმებს** საზღვრებს. `nums[99]` არ გაჩვენებს შეცდომას — უბრალოდ წაიკითხავს უცხო მეხსიერებას და ნაგავს დაგიბრუნებს. ეს C-ის ყველაზე ცნობილი ხაფანგია.',
        en: 'The dangerous part: C **does not check** bounds. `nums[99]` gives no error — it just reads memory that is not yours and hands you rubbish. This is C\'s most famous trap.',
      },
      {
        ka: 'ამიტომ ზომა თვითონ უნდა იცოდე. ჩვეულებრივ ცვლადში ინახავენ: `int count = 4;`',
        en: 'So you have to track the size yourself. People usually keep it in a variable: `int count = 4;`',
      },
    ],
    example: `#include <stdio.h>

int main() {
    int nums[4] = {3, 8, 1, 6};
    int count = 4;

    printf("%d\\n", nums[0]);

    int total = 0;
    for (int i = 0; i < count; i++) {
        printf("nums[%d] = %d\\n", i, nums[i]);
        total = total + nums[i];
    }

    printf("ჯამი: %d\\n", total);

    return 0;
}`,
    expected: `3
nums[0] = 3
nums[1] = 8
nums[2] = 1
nums[3] = 6
ჯამი: 18`,
    challenge: {
      ka: 'შექმენი მასივი `int scores[3] = {10, 7, 9};` და ციკლით დაბეჭდე მათი ჯამი — 26 უნდა მიიღო.',
      en: 'Make `int scores[3] = {10, 7, 9};` and use a loop to print their total — you should get 26.',
    },
    starter: `#include <stdio.h>

int main() {
    int scores[3] = {10, 7, 9};
    int total = 0;

    return 0;
}`,
    solution: `#include <stdio.h>

int main() {
    int scores[3] = {10, 7, 9};
    int total = 0;

    for (int i = 0; i < 3; i++) {
        total = total + scores[i];
    }

    printf("ჯამი: %d\\n", total);
    return 0;
}`,
    check: all(code('scores'), nums(26)),
    recap: {
      ka: 'მასივს ფიქსირებული ზომა აქვს, ნომრები ნულიდან, საზღვრებს C არ ამოწმებს.',
      en: 'Arrays have a fixed size, numbering starts at zero, and C checks no bounds.',
    },
  },

  {
    n: 6,
    slug: 'project',
    minutes: 20,
    xp: 100,
    title: { ka: 'პატარა პროექტი: კალკულატორი', en: 'A small project: a calculator' },
    idea: { ka: 'ყველაფერი, რაც ისწავლე, ერთ პროგრამაში.', en: 'Everything you learned, in one program.' },
    body: [
      {
        ka: 'ავაწყოთ კალკულატორი, რომელიც რამდენიმე მოქმედებას ასრულებს და შედეგებს აჩვენებს.',
        en: 'Let us build a calculator that runs several operations and shows the results.',
      },
      {
        ka: 'ყველა ნაწილი იცი: **მასივი** მონაცემებისთვის, **ციკლი**, **if** მოქმედების ასარჩევად, **ფუნქციები** თითო მოქმედებისთვის.',
        en: 'You know every piece: an **array** of data, a **loop**, an **if** to pick the operation, and **functions** for each one.',
      },
      {
        ka: 'ერთი ახალი რამ: `%.2f` ბეჭდავს წილად რიცხვს ზუსტად ორი ციფრით მძიმის შემდეგ.',
        en: 'One new thing: `%.2f` prints a decimal number with exactly two digits after the point.',
      },
      {
        ka: 'დააკვირდი გაყოფის შემოწმებას. ნულზე გაყოფა პროგრამას ანგრევს, ამიტომ ყოველთვის ამოწმებენ.',
        en: 'Notice the check before dividing. Dividing by zero crashes a program, so people always check first.',
      },
    ],
    example: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}

float divide(int a, int b) {
    if (b == 0) {
        printf("ნულზე გაყოფა არ შეიძლება\\n");
        return 0;
    }
    return (float)a / b;
}

int main() {
    int x = 12;
    int y = 5;

    printf("%d + %d = %d\\n", x, y, add(x, y));
    printf("%d * %d = %d\\n", x, y, multiply(x, y));
    printf("%d / %d = %.2f\\n", x, y, divide(x, y));

    printf("%d / %d = ", x, 0);
    divide(x, 0);

    return 0;
}`,
    expected: `12 + 5 = 17
12 * 5 = 60
12 / 5 = 2.40
12 / 0 = ნულზე გაყოფა არ შეიძლება`,
    challenge: {
      ka: 'დაამატე ფუნქცია `int subtract(int a, int b)` და გამოიძახე `main()`-ში ისე, რომ დაიბეჭდოს `12 - 5 = 7`.',
      en: 'Add a function `int subtract(int a, int b)` and call it in `main()` so it prints `12 - 5 = 7`.',
    },
    starter: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int x = 12;
    int y = 5;

    printf("%d + %d = %d\\n", x, y, add(x, y));

    return 0;
}`,
    solution: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int main() {
    int x = 12;
    int y = 5;

    printf("%d + %d = %d\\n", x, y, add(x, y));
    printf("%d - %d = %d\\n", x, y, subtract(x, y));

    return 0;
}`,
    check: all(code('subtract'), nums(7)),
    recap: {
      ka: 'ნამდვილი პროგრამა პატარა ფუნქციების კომბინაციაა.',
      en: 'A real program is small functions combined.',
    },
  },

  {
    n: 7,
    slug: 'bugs',
    minutes: 15,
    xp: 80,
    title: { ka: 'შეცდომები და როგორ წავიკითხოთ', en: 'Bugs, and how to read an error' },
    idea: { ka: 'C-ის შეცდომები მკაცრია, მაგრამ ზუსტი.', en: "C's errors are harsh but precise." },
    body: [
      {
        ka: 'C შეცდომას **კომპილაციის** დროს პოულობს — ანუ სანამ პროგრამა გაეშვება. ეს კარგია: შეცდომას მაშინვე გიჩვენებს.',
        en: 'C finds errors at **compile** time — before the program ever runs. That is good news: you learn about the mistake immediately.',
      },
      {
        ka: 'ყოველთვის **პირველი** შეცდომა გაასწორე. ერთმა დაკარგულმა წერტილმძიმემ შეიძლება ოცი შეცდომა გამოიწვიოს, და პირველის გასწორებისთანავე დანარჩენი გაქრება.',
        en: 'Always fix the **first** error. One missing semicolon can produce twenty errors, and fixing the first makes the rest vanish.',
      },
      { ka: 'ოთხი ყველაზე ხშირი:', en: 'The four most common:' },
      {
        ka: "`expected ';'` — წერტილმძიმე აკლია. შეხედე იმ ხაზს და **ერთით ზემოთაც**.",
        en: "`expected ';'` — a semicolon is missing. Look at that line, and at the one **above** it.",
      },
      {
        ka: '`undeclared identifier` — ასეთი ცვლადი არ არსებობს. ან ასო გაქვს არასწორად დაწერილი, ან ტიპი დაგავიწყდა.',
        en: '`undeclared identifier` — no such variable. Either a typo, or you forgot the type.',
      },
      {
        ka: '`expected declaration` ან დაუხურავი `}` — ფიგურული ფრჩხილები დათვალე. რამდენი გაიხსნა, იმდენი უნდა დაიხუროს.',
        en: '`expected declaration` or an unclosed `}` — count your curly brackets. As many close as open.',
      },
      {
        ka: 'ლოგიკური შეცდომა: არასწორი ფორმატი. `%d`-ით ტექსტის ბეჭდვა უაზრობას დაბეჭდავს და შეცდომა **არ** გამოვა.',
        en: 'A logic bug: the wrong format. Printing text with `%d` gives nonsense and raises **no** error at all.',
      },
    ],
    example: `#include <stdio.h>

int main() {
    int total = 0;
    int values[3] = {4, 5, 6};

    for (int i = 0; i < 3; i++) {
        total = total + values[i];
    }

    printf("ჯამი: %d\\n", total);

    return 0;
}`,
    expected: `ჯამი: 15`,
    challenge: {
      ka: 'ამ კოდს სამი შეცდომა აქვს: დაკარგული წერტილმძიმე, არასწორად დაწერილი სახელი და დაუხურავი `}`. გაასწორე ისე, რომ დაიბეჭდოს `ჯამი: 15`.',
      en: 'Three bugs: a missing semicolon, a misspelled name, and an unclosed `}`. Fix them so it prints `Total: 15`.',
    },
    starter: `#include <stdio.h>

int main() {
    int total = 0
    int values[3] = {4, 5, 6};

    for (int i = 0; i < 3; i++) {
        total = totl + values[i];

    printf("ჯამი: %d\\n", total);

    return 0;
}`,
    solution: `#include <stdio.h>

int main() {
    int total = 0;
    int values[3] = {4, 5, 6};

    for (int i = 0; i < 3; i++) {
        total = total + values[i];
    }

    printf("ჯამი: %d\\n", total);

    return 0;
}`,
    check: nums(15),
    recap: {
      ka: 'პირველი შეცდომა ჯერ. წერტილმძიმეები და ფიგურული ფრჩხილები დათვალე.',
      en: 'First error first. Count your semicolons and your curly brackets.',
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
        ka: 'შვიდი დონე გაიარე. ახლა დროა C ნამდვილად დააყენო შენს კომპიუტერზე და ნახო, როგორ მუშაობს კომპილატორი.',
        en: 'Seven levels done. Now it is time to install C properly and see a real compiler work.',
      },
      {
        ka: 'უფასო გზა: დააყენე VS Code და MinGW (GCC). შემდეგ ტერმინალში `gcc program.c -o program` და `./program`.',
        en: 'The free route: install VS Code and MinGW (GCC). Then in a terminal: `gcc program.c -o program` and `./program`.',
      },
      {
        ka: 'იდეები: ნიშნების საშუალოს კალკულატორი, ტემპერატურის გადამყვანი, ან რიცხვების სტატისტიკა.',
        en: 'Ideas: a grade-average calculator, a temperature converter, or statistics over a set of numbers.',
      },
      {
        ka: 'როცა `#showcase`-ში დადებ, დაწერე რისი გაკეთება გინდოდა და რა იყო ყველაზე რთული.',
        en: 'When you post in `#showcase`, say what you were making and what was hardest.',
      },
    ],
    example: `#include <stdio.h>

void bar(int n) {
    for (int i = 0; i < n; i++) {
        printf("*");
    }
}

int main() {
    int scores[5] = {3, 5, 2, 5, 4};
    int count = 5;
    int total = 0;

    printf("ჩემი კვირა\\n");

    for (int i = 0; i < count; i++) {
        printf("  ");
        bar(scores[i]);
        printf(" %d\\n", scores[i]);
        total = total + scores[i];
    }

    printf("  საშუალო: %.1f\\n", (float)total / count);

    return 0;
}`,
    expected: `ჩემი კვირა
  *** 3
  ***** 5
  ** 2
  ***** 5
  **** 4
  საშუალო: 3.8`,
    challenge: {
      ka: 'გახადე შენი: შეცვალე რიცხვები და დაამატე ხაზი, რომელიც ყველაზე მაღალ ქულას ბეჭდავს. ციკლში `if`-ით იპოვე მაქსიმუმი.',
      en: 'Make it yours: change the numbers and add a line printing the highest score. Find the maximum with an `if` inside the loop.',
    },
    starter: `#include <stdio.h>

int main() {
    int scores[5] = {3, 5, 2, 5, 4};
    int total = 0;
    int best = 0;

    for (int i = 0; i < 5; i++) {
        total = total + scores[i];
    }

    printf("საშუალო: %.1f\\n", (float)total / 5);

    return 0;
}`,
    solution: `#include <stdio.h>

int main() {
    int scores[5] = {3, 5, 2, 5, 4};
    int total = 0;
    int best = 0;

    for (int i = 0; i < 5; i++) {
        total = total + scores[i];
        if (scores[i] > best) {
            best = scores[i];
        }
    }

    printf("საშუალო: %.1f\\n", (float)total / 5);
    printf("მაქსიმუმი: %d\\n", best);

    return 0;
}`,
    check: all(code('best'), nums(5)),
    recap: {
      ka: 'რვა დონე გავლილია. შემდეგი ნაბიჯი — დააყენე GCC და ასწავლე სხვას.',
      en: 'Eight levels done. Next: install GCC, and teach someone else.',
    },
  },
]
