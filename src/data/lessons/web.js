import { code, codeRe, all } from './_check.js'

// The web track's eight levels follow HTML and CSS rather than the
// if/else-loops shape, because that is the honest path for this subject.
// The structure is identical: one idea, an example, a challenge, an exit to #help.

export const webLessons = [
  {
    n: 1,
    slug: 'first-page',
    minutes: 10,
    xp: 50,
    title: { ka: 'შენი პირველი გვერდი', en: 'Your first page' },
    idea: { ka: 'HTML ეუბნება ბრაუზერს, რა არის რა.', en: 'HTML tells the browser what each thing is.' },
    body: [
      {
        ka: 'ყველა ვებგვერდი, რომელიც კი გინახავს, HTML-ით იწყება. HTML არ არის პროგრამირების ენა — ის **აღწერს**, რა არის რა გვერდზე.',
        en: 'Every website you have ever seen starts with HTML. HTML is not a programming language — it **describes** what each thing on a page is.',
      },
      {
        ka: '**ტეგი** კუთხოვან ფრჩხილებშია: `<p>`. თითქმის ყველა ტეგი იხურება დახრილი ხაზით: `</p>`. შიგნით ტექსტია.',
        en: 'A **tag** sits in angle brackets: `<p>`. Nearly every tag closes with a slash: `</p>`. The text goes between them.',
      },
      {
        ka: '`<h1>` არის მთავარი სათაური. `<h2>` ქვესათაურია. `<p>` არის აბზაცი (paragraph).',
        en: '`<h1>` is the main heading. `<h2>` is a sub-heading. `<p>` is a paragraph.',
      },
      {
        ka: 'ბრაუზერი ამ ტეგებს სერიოზულად იღებს: `<h1>`-ს დიდად და მსხვილად აჩვენებს, რადგან ეს სათაურია. შენ მნიშვნელობას ეუბნები, არა ზომას.',
        en: 'The browser takes these seriously: it shows `<h1>` big and bold because it is a heading. You are telling it meaning, not size.',
      },
      {
        ka: 'დააჭირე „გაუშვი“ და მარჯვნივ ნახავ ნამდვილ გვერდს. შეცვალე ტექსტი და თავიდან გაუშვი.',
        en: 'Press Run and a real page appears on the right. Change the text and run it again.',
      },
    ],
    example: `<h1>ჩემი პირველი გვერდი</h1>

<p>გამარჯობა! ეს მე დავწერე.</p>

<h2>რა მიყვარს</h2>

<p>თამაშები, მუსიკა და კოდის წერა.</p>`,
    expected: '',
    challenge: {
      ka: 'შეცვალე სათაური შენი სახელით და დაამატე კიდევ ერთი `<p>` აბზაცი იმაზე, რისი აწყობაც გინდა.',
      en: 'Change the heading to your name, and add one more `<p>` about what you want to build.',
    },
    starter: `<h1>ჩემი პირველი გვერდი</h1>

<p>გამარჯობა!</p>`,
    solution: `<h1>საბა</h1>

<p>გამარჯობა! ეს მე დავწერე.</p>

<p>მინდა ავაწყო თამაში Roblox-ში.</p>`,
    check: codeRe(/<p[^>]*>[\s\S]*?<\/p>[\s\S]*<p[^>]*>/i),
    recap: {
      ka: '`<h1>` სათაური, `<h2>` ქვესათაური, `<p>` აბზაცი. ტეგები იხურება `</>`-ით.',
      en: '`<h1>` heading, `<h2>` sub-heading, `<p>` paragraph. Tags close with `</>`.',
    },
  },

  {
    n: 2,
    slug: 'text-links',
    minutes: 11,
    xp: 60,
    title: { ka: 'ტექსტი და ბმულები', en: 'Text and links' },
    idea: { ka: 'ბმული აკავშირებს გვერდებს ერთმანეთთან.', en: 'A link is what ties pages together.' },
    body: [
      {
        ka: 'ბმულები ინტერნეტს ინტერნეტად აქცევს. ბმულის ტეგია `<a>` და მას **ატრიბუტი** სჭირდება.',
        en: 'Links are what make the internet an internet. The tag is `<a>` and it needs an **attribute**.',
      },
      {
        ka: '**ატრიბუტი** დამატებითი ინფორმაციაა ტეგის შიგნით: `<a href="https://example.com">ტექსტი</a>`. `href` ეუბნება ბრაუზერს, სად წავიდეს.',
        en: 'An **attribute** is extra information inside the tag: `<a href="https://example.com">text</a>`. `href` tells the browser where to go.',
      },
      {
        ka: 'გასქელებისთვის `<strong>`, დახრისთვის `<em>`. ნუ გამოიყენებ მათ მხოლოდ იმიტომ, რომ ლამაზია — ისინი **მნიშვნელობას** ამატებენ.',
        en: 'For bold use `<strong>`, for italics `<em>`. Do not use them just because they look nice — they add **meaning**.',
      },
      {
        ka: '`<br>` ხაზს ტეხს. ეს იშვიათი ტეგია, რომელიც არ იხურება, რადგან შიგნით არაფერი უდევს.',
        en: '`<br>` breaks a line. It is one of the rare tags that never closes, because nothing goes inside it.',
      },
    ],
    example: `<h1>ჩემი ბმულები</h1>

<p>
  აქ ვსწავლობ კოდს:
  <a href="https://discord.gg/rryP8c8DfG">ჩვენი Discord</a>
</p>

<p>
  <strong>მნიშვნელოვანი:</strong> ყველაფერი <em>უფასოა</em>.<br>
  ფულს არავინ გთხოვს.
</p>`,
    expected: '',
    challenge: {
      ka: 'დაამატე ბმული შენს საყვარელ საიტზე და ერთი სიტყვა გაასქელე `<strong>`-ით.',
      en: 'Add a link to a site you like, and make one word bold with `<strong>`.',
    },
    starter: `<h1>ჩემი ბმულები</h1>

<p>
  <a href="`,
    solution: `<h1>ჩემი ბმულები</h1>

<p>
  <a href="https://www.roblox.com">Roblox</a> ჩემი საყვარელი საიტია.
</p>

<p><strong>მართლა</strong> კარგია.</p>`,
    check: all(code('<a', 'href='), code('<strong')),
    recap: {
      ka: '`<a href="...">` ქმნის ბმულს. `<strong>` და `<em>` მნიშვნელობას ამატებს.',
      en: '`<a href="...">` makes a link. `<strong>` and `<em>` add meaning.',
    },
  },

  {
    n: 3,
    slug: 'images-lists',
    minutes: 11,
    xp: 60,
    title: { ka: 'სურათები და სიები', en: 'Images and lists' },
    idea: { ka: 'გვერდი მხოლოდ ტექსტი არ არის.', en: 'A page is more than text.' },
    body: [
      {
        ka: 'სურათის ტეგია `<img>` და არ იხურება. ორი ატრიბუტი სჭირდება: `src` (სად არის ფაილი) და `alt`.',
        en: 'The image tag is `<img>` and it does not close. It needs two attributes: `src` (where the file is) and `alt`.',
      },
      {
        ka: '`alt` არის ტექსტი იმისთვის, ვინც სურათს ვერ ხედავს — უსინათლო ადამიანებისთვის, ან როცა სურათი არ ჩაიტვირთა. ყოველთვის დაწერე. ეს უბრალო თავაზიანობაა.',
        en: '`alt` is text for anyone who cannot see the image — blind visitors, or when the file fails to load. Always write it. It is basic courtesy.',
      },
      {
        ka: 'სიები: `<ul>` არის დაუნომრავი სია (წერტილებით), `<ol>` დანომრილი. ორივეში თითო ელემენტი `<li>`-შია.',
        en: 'Lists: `<ul>` is unordered (bullets), `<ol>` is numbered. In both, each item goes in an `<li>`.',
      },
      {
        ka: 'აირჩიე მნიშვნელობით: `<ol>` მაშინ, როცა რიგითობას აქვს აზრი (რეცეპტის ნაბიჯები), `<ul>` — როცა არა.',
        en: 'Choose by meaning: `<ol>` when the order matters (steps in a recipe), `<ul>` when it does not.',
      },
    ],
    example: `<h1>ჩემი სია</h1>

<img
  src="https://placehold.co/300x160/7C5CFF/FFFFFF?text=Hello"
  alt="იისფერი ბანერი წარწერით Hello"
>

<h2>რისი სწავლა მინდა</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h2>რა თანმიმდევრობით</h2>
<ol>
  <li>ჯერ HTML</li>
  <li>მერე CSS</li>
  <li>ბოლოს JavaScript</li>
</ol>`,
    expected: '',
    challenge: {
      ka: 'შექმენი `<ul>` სია სამი ნივთით, რაც გიყვარს, და დაამატე ერთი სურათი `alt` ტექსტით.',
      en: 'Make a `<ul>` with three things you like, and add one image with an `alt` text.',
    },
    starter: `<h2>რაც მიყვარს</h2>

<ul>
  <li>`,
    solution: `<h2>რაც მიყვარს</h2>

<ul>
  <li>თამაშები</li>
  <li>მუსიკა</li>
  <li>კოდი</li>
</ul>

<img
  src="https://placehold.co/300x160/2EF2B0/05210F?text=Me"
  alt="მწვანე ბანერი"
>`,
    check: all(code('<ul', '<li'), code('<img', 'alt=')),
    recap: {
      ka: '`<img src alt>` სურათია. `<ul>`/`<ol>` + `<li>` სიებია. `alt` ყოველთვის დაწერე.',
      en: '`<img src alt>` is an image. `<ul>`/`<ol>` with `<li>` are lists. Always write `alt`.',
    },
  },

  {
    n: 4,
    slug: 'css-colors',
    minutes: 13,
    xp: 70,
    title: { ka: 'CSS — ფერები და შრიფტები', en: 'CSS — colours and fonts' },
    idea: { ka: 'HTML ამბობს რა არის, CSS ამბობს როგორ გამოიყურება.', en: 'HTML says what it is, CSS says how it looks.' },
    body: [
      {
        ka: 'აქამდე გვერდი შავ-თეთრი იყო. **CSS** გარეგნობაზეა პასუხისმგებელი და `<style>` ტეგში იწერება.',
        en: 'So far the page was black and white. **CSS** is in charge of appearance, and it goes inside a `<style>` tag.',
      },
      {
        ka: 'CSS წესს ორი ნაწილი აქვს: **სელექტორი** (რას ეხება) და **თვისებები** ფიგურულ ფრჩხილებში (რა შეიცვალოს).',
        en: 'A CSS rule has two parts: the **selector** (what it applies to) and the **properties** in curly brackets (what changes).',
      },
      {
        ka: '`h1 { color: red; }` ნიშნავს: „ყველა `h1` გახადე წითელი“. ყოველი თვისება წერტილმძიმით მთავრდება.',
        en: '`h1 { color: red; }` means "make every `h1` red". Each property ends with a semicolon.',
      },
      {
        ka: 'ფერი სამნაირად იწერება: სახელით (`red`), hex-კოდით (`#7C5CFF`) ან `rgb()`-ით. hex-კოდი ყველაზე ხშირია.',
        en: 'A colour can be written three ways: by name (`red`), as a hex code (`#7C5CFF`), or with `rgb()`. Hex is the most common.',
      },
      {
        ka: '`background` ფონია, `color` ტექსტის ფერი, `font-family` შრიფტი, `font-size` ზომა. შეამოწმე, რომ ტექსტი ფონზე კარგად იკითხება — ეს დიზაინის პირველი წესია.',
        en: '`background` is the background, `color` is the text colour, `font-family` the typeface, `font-size` the size. Check the text is readable on the background — that is design rule number one.',
      },
    ],
    example: `<style>
  body {
    background: #0F1226;
    color: #F2F4FF;
    font-family: system-ui, sans-serif;
  }

  h1 {
    color: #2EF2B0;
    font-size: 40px;
  }

  .note {
    color: #FFD84D;
    font-size: 20px;
  }
</style>

<h1>ფერადი გვერდი</h1>

<p>ეს ჩვეულებრივი ტექსტია.</p>

<p class="note">ეს ყვითელია, რადგან class="note" აქვს.</p>`,
    expected: '',
    challenge: {
      ka: 'შეცვალე ფონის ფერი და `h1`-ის ფერი შენი არჩევანით. დარწმუნდი, რომ ტექსტი კარგად იკითხება.',
      en: 'Change the background colour and the `h1` colour to your own picks. Make sure the text is still easy to read.',
    },
    starter: `<style>
  body {
    background:
  }
</style>

<h1>ჩემი ფერები</h1>
<p>ტექსტი.</p>`,
    solution: `<style>
  body {
    background: #1A1E3A;
    color: #F2F4FF;
    font-family: system-ui, sans-serif;
  }
  h1 {
    color: #FF8A3D;
  }
</style>

<h1>ჩემი ფერები</h1>
<p>ტექსტი.</p>`,
    check: all(code('<style'), code('background'), code('color')),
    recap: {
      ka: 'CSS `<style>`-ში წერია. `სელექტორი { თვისება: მნიშვნელობა; }`. `class` აკავშირებს წესს კონკრეტულ ელემენტთან.',
      en: 'CSS lives in `<style>`. `selector { property: value; }`. A `class` attaches a rule to specific elements.',
    },
  },

  {
    n: 5,
    slug: 'boxes',
    minutes: 14,
    xp: 70,
    title: { ka: 'ყუთები და დაშორება', en: 'Boxes and spacing' },
    idea: { ka: 'გვერდზე ყველაფერი ყუთია.', en: 'Everything on a page is a box.' },
    body: [
      {
        ka: 'ეს CSS-ის ყველაზე მნიშვნელოვანი იდეაა: **ყველა ელემენტი ყუთია**. სათაურიც, აბზაციც, სურათიც.',
        en: 'This is the most important idea in CSS: **every element is a box**. Headings, paragraphs, images, all of them.',
      },
      {
        ka: 'ყუთს სამი ფენა აქვს: `padding` — ადგილი **შიგნით**, ჩარჩოსა და ტექსტს შორის. `border` — თვითონ ჩარჩო. `margin` — ადგილი **გარეთ**, სხვა ყუთებამდე.',
        en: 'A box has three layers: `padding` is space **inside**, between the border and the text. `border` is the border itself. `margin` is space **outside**, up to the next box.',
      },
      {
        ka: 'ეს სამი ყველაზე ხშირად აურევია ერთმანეთში. დაიმახსოვრე ასე: padding ბალიშია შიგნით, margin კი მანძილი მეზობლამდე.',
        en: 'These three are what people mix up most. Remember it this way: padding is the cushion inside, margin is the distance to your neighbour.',
      },
      {
        ka: '`border-radius` კუთხეებს ამრგვალებს. `max-width` ზღუდავს სიგანეს, ხოლო `margin: 0 auto` გვერდის შუაში აყენებს.',
        en: '`border-radius` rounds the corners. `max-width` limits the width, and `margin: 0 auto` centres it on the page.',
      },
      {
        ka: 'ვიწრო ტექსტი უფრო ადვილად იკითხება — ამიტომ წიგნებს ვიწრო სვეტები აქვს, არა მთელ გვერდზე გადაჭიმული ხაზები.',
        en: 'Narrow text is easier to read — that is why books use narrow columns rather than lines stretched across the whole page.',
      },
    ],
    example: `<style>
  body {
    background: #0F1226;
    color: #F2F4FF;
    font-family: system-ui, sans-serif;
    padding: 20px;
  }

  .card {
    background: #1A1E3A;
    border: 1px solid #7C5CFF;
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 16px;
    max-width: 420px;
  }

  .card h2 {
    margin: 0 0 8px 0;
    color: #2EF2B0;
  }
</style>

<div class="card">
  <h2>პირველი ბარათი</h2>
  <p>padding შიგნითაა, margin გარეთ.</p>
</div>

<div class="card">
  <h2>მეორე ბარათი</h2>
  <p>ორივეს ერთი და იგივე წესი აქვს.</p>
</div>`,
    expected: '',
    challenge: {
      ka: 'შექმენი მესამე ბარათი და შეცვალე `border-radius` ისე, რომ კუთხეები უფრო მრგვალი გახდეს.',
      en: 'Add a third card, and change `border-radius` so the corners get rounder.',
    },
    starter: `<style>
  .card {
    background: #1A1E3A;
    color: #F2F4FF;
    border: 1px solid #7C5CFF;
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 16px;
  }
</style>

<div class="card">
  <h2>ბარათი</h2>
</div>`,
    solution: `<style>
  body { background: #0F1226; font-family: system-ui, sans-serif; }
  .card {
    background: #1A1E3A;
    color: #F2F4FF;
    border: 1px solid #7C5CFF;
    border-radius: 32px;
    padding: 24px;
    margin-bottom: 16px;
    max-width: 420px;
  }
</style>

<div class="card"><h2>ერთი</h2></div>
<div class="card"><h2>ორი</h2></div>
<div class="card"><h2>სამი</h2></div>`,
    check: all(code('border-radius'), code('padding'), codeRe(/class=["']card["'][\s\S]*class=["']card["'][\s\S]*class=["']card["']/i)),
    recap: {
      ka: 'padding შიგნით, border შუაში, margin გარეთ. ყველაფერი ყუთია.',
      en: 'Padding inside, border in the middle, margin outside. Everything is a box.',
    },
  },

  {
    n: 6,
    slug: 'project',
    minutes: 22,
    xp: 100,
    title: { ka: 'პატარა პროექტი: შენი გვერდი', en: 'A small project: your own page' },
    idea: { ka: 'ყველაფერი ერთად, ერთ ნამდვილ გვერდად.', en: 'Everything together, as one real page.' },
    body: [
      {
        ka: 'დროა ააწყო სრული გვერდი შენს შესახებ. ეს ნამდვილი პროექტია — შეგიძლია ინტერნეტშიც ატვირთო.',
        en: 'Time to build a whole page about yourself. This is a real project — you can put it online.',
      },
      {
        ka: 'ყველა ნაწილი იცი: სათაურები, აბზაცები, სია, ბმული, ფერები და ყუთები.',
        en: 'You know every piece: headings, paragraphs, a list, a link, colours, and boxes.',
      },
      {
        ka: '**უსაფრთხოება:** ნუ დაწერ სკოლას, მისამართს, ტელეფონს ან ელფოსტას. სახელიც საკმარისია მხოლოდ ის, რომლითაც გინდა გიძახოდნენ.',
        en: '**Safety:** do not put your school, address, phone number, or email on it. Only the name you want to be called is enough.',
      },
      {
        ka: 'ერთი ახალი რამ: `flex` ელემენტებს გვერდიგვერდ აწყობს. `display: flex` და `gap` — მეტი ახლა არ გჭირდება.',
        en: 'One new thing: `flex` puts elements side by side. `display: flex` and `gap` are all you need for now.',
      },
    ],
    example: `<style>
  body {
    background: #0F1226;
    color: #F2F4FF;
    font-family: system-ui, sans-serif;
    margin: 0;
    padding: 24px;
  }

  .page { max-width: 620px; margin: 0 auto; }

  h1 { color: #2EF2B0; font-size: 36px; margin-bottom: 4px; }

  .tag { color: #A8AFD6; margin-top: 0; }

  .row { display: flex; gap: 12px; flex-wrap: wrap; margin: 20px 0; }

  .chip {
    background: #1A1E3A;
    border: 1px solid #7C5CFF;
    border-radius: 999px;
    padding: 8px 16px;
  }

  a { color: #FFD84D; }
</style>

<div class="page">
  <h1>საბა</h1>
  <p class="tag">ვსწავლობ კოდს და მინდა თამაშები ვაკეთო.</p>

  <div class="row">
    <span class="chip">HTML</span>
    <span class="chip">CSS</span>
    <span class="chip">Roblox</span>
  </div>

  <h2>სად მპოვებ</h2>
  <p><a href="https://discord.gg/rryP8c8DfG">ჩვენი Discord</a></p>
</div>`,
    expected: '',
    challenge: {
      ka: 'გადააკეთე ეს გვერდი შენზე: შენი სახელი, შენი აღწერა და მინიმუმ ოთხი `chip`. პირადი ინფორმაცია არ დაწერო.',
      en: 'Make this page about you: your name, your description, and at least four `chip`s. No personal details.',
    },
    starter: `<style>
  body {
    background: #0F1226;
    color: #F2F4FF;
    font-family: system-ui, sans-serif;
    padding: 24px;
  }
  .chip {
    background: #1A1E3A;
    border: 1px solid #7C5CFF;
    border-radius: 999px;
    padding: 8px 16px;
  }
  .row { display: flex; gap: 12px; flex-wrap: wrap; }
</style>

<h1>სახელი</h1>
<p>ერთი წინადადება ჩემზე.</p>

<div class="row">
  <span class="chip">HTML</span>
</div>`,
    solution: `<style>
  body {
    background: #0F1226;
    color: #F2F4FF;
    font-family: system-ui, sans-serif;
    padding: 24px;
  }
  h1 { color: #2EF2B0; }
  .chip {
    background: #1A1E3A;
    border: 1px solid #7C5CFF;
    border-radius: 999px;
    padding: 8px 16px;
  }
  .row { display: flex; gap: 12px; flex-wrap: wrap; }
</style>

<h1>საბა</h1>
<p>ვსწავლობ კოდს და მინდა თამაშები ვაკეთო.</p>

<div class="row">
  <span class="chip">HTML</span>
  <span class="chip">CSS</span>
  <span class="chip">Roblox</span>
  <span class="chip">Python</span>
</div>`,
    check: all(
      code('display: flex'),
      codeRe(/class=["']chip["'][\s\S]*class=["']chip["'][\s\S]*class=["']chip["'][\s\S]*class=["']chip["']/i),
    ),
    recap: {
      ka: 'სრული გვერდი პატარა ნაწილების კომბინაციაა. `display: flex` აწყობს გვერდიგვერდ.',
      en: 'A whole page is small pieces combined. `display: flex` puts things side by side.',
    },
  },

  {
    n: 7,
    slug: 'bugs',
    minutes: 14,
    xp: 80,
    title: { ka: 'გატეხილი გვერდის გასწორება', en: 'Fixing a broken page' },
    idea: { ka: 'HTML არ იძახებს შეცდომას — უბრალოდ უცნაურად გამოიყურება.', en: 'HTML does not throw errors. It just looks wrong.' },
    body: [
      {
        ka: 'სხვა ენებისგან განსხვავებით, HTML შეცდომას არ გაჩვენებს. ის ყველაფერს აკეთებს, რომ გვერდი მაინც აჩვენოს — ამიტომ შეცდომა თვალით უნდა იპოვო.',
        en: 'Unlike other languages, HTML never shows you an error. It tries its best to display the page anyway — so you have to find the mistake with your eyes.',
      },
      {
        ka: 'ოთხი ყველაზე ხშირი პრობლემა:',
        en: 'The four most common problems:',
      },
      {
        ka: '**დაუხურავი ტეგი.** დაწერე `<p>`, დაგავიწყდა `</p>` — და ყველაფერი ქვემოთ აბზაცის ნაწილი ხდება.',
        en: '**An unclosed tag.** You wrote `<p>` and forgot `</p>` — and everything below becomes part of that paragraph.',
      },
      {
        ka: '**დაკარგული წერტილმძიმე CSS-ში.** ერთი `;` აკლია და **მომდევნო** წესიც წყვეტს მუშაობას. ყოველთვის იქ ეძებე, სადაც სტილმა მუშაობა შეწყვიტა, და ერთი ხაზით მაღლა შეხედე.',
        en: '**A missing semicolon in CSS.** One `;` is gone and the **next** rule stops working too. Always look where the styling stopped, then one line above.',
      },
      {
        ka: '**დაკარგული წერტილი სელექტორში.** `card { }` ეხება ტეგს სახელად card (ასეთი არ არსებობს). `.card { }` ეხება `class="card"`-ს. ერთი წერტილი ყველაფერს წყვეტს.',
        en: '**A missing dot in the selector.** `card { }` targets a tag called card (there is none). `.card { }` targets `class="card"`. One dot decides everything.',
      },
      {
        ka: '**ბრჭყალი არ დაიხურა** ატრიბუტში. შემდეგ ყველაფერი ბმულის ნაწილად იქცევა.',
        en: '**An unclosed quote** in an attribute. Everything after it gets swallowed into the link.',
      },
    ],
    example: `<style>
  body {
    background: #0F1226;
    color: #F2F4FF;
    font-family: system-ui, sans-serif;
  }
  .box {
    border: 2px solid #2EF2B0;
    padding: 16px;
    border-radius: 12px;
  }
</style>

<div class="box">
  <p>ეს სწორად არის დაწერილი.</p>
</div>`,
    expected: '',
    challenge: {
      ka: 'ამ გვერდს სამი შეცდომა აქვს: დაუხურავი `</p>`, დაკარგული `;` CSS-ში და სელექტორში დაკარგული წერტილი. გაასწორე სამივე ისე, რომ ორივე აბზაცი ცალ-ცალკე ჩანდეს და ჩარჩო გამოჩნდეს.',
      en: 'Three bugs here: an unclosed `</p>`, a missing `;` in the CSS, and a missing dot in the selector. Fix all three so both paragraphs show separately and the border appears.',
    },
    starter: `<style>
  body {
    background: #0F1226;
    color: #F2F4FF
    font-family: system-ui, sans-serif;
  }
  box {
    border: 2px solid #2EF2B0;
    padding: 16px;
  }
</style>

<div class="box">
  <p>პირველი აბზაცი.
  <p>მეორე აბზაცი.</p>
</div>`,
    solution: `<style>
  body {
    background: #0F1226;
    color: #F2F4FF;
    font-family: system-ui, sans-serif;
  }
  .box {
    border: 2px solid #2EF2B0;
    padding: 16px;
  }
</style>

<div class="box">
  <p>პირველი აბზაცი.</p>
  <p>მეორე აბზაცი.</p>
</div>`,
    check: all(code('.box'), code('#F2F4FF;'), codeRe(/<p>[\s\S]*?<\/p>[\s\S]*?<p>[\s\S]*?<\/p>/i)),
    recap: {
      ka: 'HTML შეცდომას არ გეუბნება. დახურე ტეგები, ნუ დაივიწყებ `;`-ს და კლასებს წერტილი სჭირდება.',
      en: 'HTML never tells you. Close your tags, keep your semicolons, and classes need their dot.',
    },
  },

  {
    n: 8,
    slug: 'show',
    minutes: 20,
    xp: 120,
    title: { ka: 'აჩვენე, რაც ააწყვე', en: 'Show what you made' },
    idea: { ka: 'ნამდვილი გვერდი, ნამდვილ ინტერნეტში.', en: 'A real page, on the real internet.' },
    body: [
      {
        ka: 'შვიდი დონე გაიარე და უკვე შეგიძლია გვერდის აწყობა. ახლა გამოაქვეყნე.',
        en: 'Seven levels done, and you can build a page. Now put it online.',
      },
      {
        ka: 'როგორ: დააკოპირე კოდი, შეინახე ფაილად `index.html`, შემდეგ ატვირთე უფასოდ GitHub Pages-ზე ან Netlify Drop-ზე. ორივე უფასოა.',
        en: 'How: copy your code, save it as a file called `index.html`, then upload it free to GitHub Pages or Netlify Drop. Both cost nothing.',
      },
      {
        ka: 'სრული ფაილი ასე იწყება: `<!doctype html>`, შემდეგ `<html>`, `<head>` და `<body>`. ბრაუზერში ეს აქამდე არ გვჭირდებოდა, მაგრამ ნამდვილ ფაილს სჭირდება.',
        en: 'A complete file starts with `<!doctype html>`, then `<html>`, `<head>`, and `<body>`. We did not need those here, but a real file does.',
      },
      {
        ka: 'ბოლო შეხსენება: არავითარი სკოლა, მისამართი, ტელეფონი ან ელფოსტა გვერდზე.',
        en: 'One last reminder: no school, address, phone number, or email on the page.',
      },
    ],
    example: `<style>
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 32px 20px;
    background: #0F1226;
    color: #F2F4FF;
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
  .page { max-width: 600px; margin: 0 auto; }
  h1 { color: #2EF2B0; font-size: 40px; margin: 0 0 8px; }
  .sub { color: #A8AFD6; margin: 0 0 28px; }
  .card {
    background: #1A1E3A;
    border: 1px solid #2A2F58;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 14px;
  }
  .card h3 { margin: 0 0 6px; color: #FFD84D; }
  .card p { margin: 0; color: #A8AFD6; }
  a { color: #7C5CFF; }
</style>

<div class="page">
  <h1>საბა</h1>
  <p class="sub">ვსწავლობ კოდს. აი, რაც ავაწყვე.</p>

  <div class="card">
    <h3>ჩემი პირველი გვერდი</h3>
    <p>HTML და CSS, ერთ საღამოში.</p>
  </div>

  <div class="card">
    <h3>ქვიზი</h3>
    <p>სამი კითხვა და ქულების დათვლა.</p>
  </div>

  <p><a href="https://discord.gg/rryP8c8DfG">იპოვე ჩვენი Discord</a></p>
</div>`,
    expected: '',
    challenge: {
      ka: 'გადააკეთე შენზე: შენი სახელი, შენი აღწერა და მინიმუმ სამი ბარათი იმაზე, რაც გააკეთე ან გინდა გააკეთო. მერე დადე `#showcase`-ში.',
      en: 'Make it yours: your name, your description, and at least three cards about what you made or want to make. Then post it in `#showcase`.',
    },
    starter: `<style>
  body {
    margin: 0; padding: 32px 20px;
    background: #0F1226; color: #F2F4FF;
    font-family: system-ui, sans-serif;
  }
  .page { max-width: 600px; margin: 0 auto; }
  .card {
    background: #1A1E3A;
    border: 1px solid #2A2F58;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 14px;
  }
</style>

<div class="page">
  <h1>სახელი</h1>
  <p>ერთი წინადადება.</p>

  <div class="card"><h3>პროექტი</h3></div>
</div>`,
    solution: `<style>
  body {
    margin: 0; padding: 32px 20px;
    background: #0F1226; color: #F2F4FF;
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
  .page { max-width: 600px; margin: 0 auto; }
  h1 { color: #2EF2B0; }
  .card {
    background: #1A1E3A;
    border: 1px solid #2A2F58;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 14px;
  }
  .card h3 { margin: 0 0 6px; color: #FFD84D; }
</style>

<div class="page">
  <h1>საბა</h1>
  <p>ვსწავლობ კოდს. აი, რაც ავაწყვე.</p>

  <div class="card"><h3>ჩემი გვერდი</h3><p>HTML და CSS.</p></div>
  <div class="card"><h3>ქვიზი</h3><p>სამი კითხვა.</p></div>
  <div class="card"><h3>კალკულატორი</h3><p>შემდეგი პროექტი.</p></div>
</div>`,
    check: codeRe(/class=["']card["'][\s\S]*class=["']card["'][\s\S]*class=["']card["']/i),
    recap: {
      ka: 'რვა დონე გავლილია. შენი გვერდი ინტერნეტში შეგიძლია ატვირთო უფასოდ.',
      en: 'Eight levels done. You can put your page on the internet for free.',
    },
  },
]
