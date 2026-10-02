# iLearn


**Learn to code. Free. With real people.**

Free coding lessons in English and Georgian, plus a Discord where humans actually answer.
Six tracks, eight levels each. No accounts, no ads, no tracking, no database.

Discord: https://discord.gg/rryP8c8DfG · Roblox group: https://www.roblox.com/share/g/473814178
Live session: **Sunday 18:00 Tbilisi (UTC+4)**

---

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # check the built version before deploying
```

## Deploying (both free)

**Netlify** — drag the `dist/` folder onto https://app.netlify.com/drop. Done.

**GitHub Pages** — push this repo, run `npm run build`, and publish `dist/`.
`base: './'` in `vite.config.js` plus the hash router mean it works under a project
subpath with no extra configuration and no server rewrites.

---

## The things you will actually want to edit

| What | Where |
|---|---|
| Lesson text, examples, challenges, answers | `src/data/lessons/<track>.js` |
| Track names, colours, blurbs | `src/data/tracks.js` |
| Discord invite, Roblox group, channels, roles, rules, session | `src/data/community.js` |
| English text inside code samples | `src/data/lessons/_localize.js` |
| **The impact numbers** | `IMPACT` in `src/data/community.js` |
| **The session log** | `SESSION_LOG` in `src/data/community.js` |
| Interface wording, both languages | `src/i18n/ui.js` |
| Colours, type, spacing | `src/styles/tokens.css` |

### Updating the impact numbers

Edit `IMPACT` in `src/data/community.js` at the end of each month and set
`updated` to that date:

```js
export const IMPACT = {
  members: 14,
  sessions: 3,
  projects: 5,
  lessons: 48,
  updated: '2026-11-01',
}
```

Only put real numbers here. The site is explicitly built on being checkable —
a parent, a teacher, or a FLEX selector should be able to verify anything on it.
Zero is a fine number to show, and the page says so in plain words.

### Logging a session

Add one row to `SESSION_LOG` after each session. It renders on `/impact` as a timeline.

```js
export const SESSION_LOG = [
  {
    date: '2026-10-05',
    topic: 'Variables and print',
    people: 6,
    questions: 11,
    moment: 'Nika got his first program running and immediately rewrote it as a joke generator.',
  },
]
```

Keep a personal copy of this too — dates, numbers, and one real story per session
are exactly what an application or a reference letter needs later.

### Adding a lesson

Every lesson is one object. Copy an existing one and fill it in — each field is
bilingual (`{ ka, en }`) except the code:

```js
{
  n: 9, slug: 'dictionaries', minutes: 12, xp: 70,
  title: { ka: '…', en: '…' },
  idea: { ka: '…', en: '…' },          // the single idea, one sentence
  body: [{ ka: '…', en: '…' }],         // `backticks` = inline code, **bold** = bold
  example: '…',                          // must really produce `expected`
  expected: '…',
  challenge: { ka: '…', en: '…' },
  starter: '…',                          // must NOT pass check() untouched
  solution: '…',                         // must pass check()
  check: all(code('…'), nums(42)),       // helpers in lessons/_check.js
  recap: { ka: '…', en: '…' },
}
```

---

## How the code runners work

| Track | Runs on | Notes |
|---|---|---|
| JavaScript | The browser itself | In a Web Worker, so an endless loop is killed, not fatal |
| Web design | A sandboxed iframe | Preview updates live as you type |
| Python | Pyodide (real CPython, WebAssembly) | ~6 MB, downloaded only on first Run, then cached |
| Roblox Lua | wasmoon (real Lua 5.4) | ~400 KB, downloaded only on first Run |
| C | A small interpreter in `src/lib/runners/cfamily.js` | **Not a compiler** — see below |
| C# | The same interpreter | **Not a compiler** — see below |

C and C# cannot genuinely run in a browser without a multi-megabyte toolchain,
so they use a purpose-built interpreter covering exactly what lessons 1–8 teach:
typed variables, arithmetic, comparison and logical operators, `if`/`else if`/`else`,
`while`, `for`, `foreach`, functions and methods with return values, fixed-size
arrays, `printf` format strings, `Console.Write`/`WriteLine`, string interpolation,
casts, and `int.Parse`. It tracks int-versus-double properly, so `(float)a / b`
behaves the way C does.

**Every lesson page using it says on screen that it is a mini runner, not a
compiler, and links to the real toolchain.** Please keep that notice if you edit
those pages — the whole project runs on not overstating things.

Runners live in `src/lib/runners/`. Python and Lua load from a CDN on demand; if
the connection fails, the lesson still shows the expected output and says what
happened, instead of looking broken.

---

## Privacy, in one paragraph

No accounts, no backend, no analytics, no cookies. XP, finished lessons, chosen
track, language, theme, and sound preference are kept in `localStorage` on the
visitor's own device and never leave it. Code typed into the editor runs locally
and is sent nowhere. The only outside requests are Google Fonts, the jsDelivr CDN
for the Python and Lua runners, and the Discord link when someone clicks it. All
of this is stated on `/safety`.

## Credits

Mascot ("Bit") drawn for this project — `src/components/Mascot.jsx`, with its
reference sheet on `/about`. Icons drawn for this project — `src/components/Icon.jsx`.
Fonts: Baloo 2, Nunito, JetBrains Mono, Noto Sans Georgian (all free, via Google Fonts).

Design direction and system: see `DESIGN.md` and `PRODUCT.md`.
