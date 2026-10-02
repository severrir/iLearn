# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite (user's explicit choice, confirmed in the init round over a plain-HTML alternative). Plain CSS, no UI framework. Progress stored in `localStorage` only — no database, no backend, no accounts. Deploy target: GitHub Pages or Netlify (static build).

## Users

**Primary:** Teenagers and absolute beginners in Georgia (the country) who want to learn to code but cannot pay for courses. Age 13+ because the community lives on Discord, which requires 13+. Many arrive on a phone, on an ordinary home connection, with no prior programming of any kind — they do not know what a variable is and have never opened a terminal.

**Their situation:** curious but unsure they are "the kind of person who codes." They have probably bounced off a free course before because nothing answered their question when they got stuck at 11pm. The thing that keeps them going is not content — it is a person replying.

**Their job:** read one short lesson, type one piece of code and see it run, and get a real human answer when it breaks.

**Secondary audience:** volunteer helpers (slightly more experienced teens) who want to teach, and the adults — parents, a scout centre or Georgian Youth for Europe supervisor, FLEX selectors — who will look at the site to judge whether this is real.

## Product Purpose

Teach absolute beginners to code, free, with real people available to help. Lessons are short on purpose: the website is the on-ramp and the reference, while the actual teaching happens in the Discord server and the weekly live session.

**Success means:** a learner finishes Lesson 1, asks a question in `#help`, gets an answer from a human, and comes back for the weekly session. Volume of visitors is explicitly not the success measure; returning learners and answered questions are.

**Stated order of importance (binding):** the Discord sessions and the real people being taught come first. The website exists to support them, not to replace them.

## Positioning

Free coding lessons are abundant. A named person who will actually answer you, at a fixed weekly hour, in Georgian, for free, is not. The mechanism is **short lesson → immediate try → a real human in `#help`** — the site never pretends to be the teacher. Nothing on it is gated, metered, upsold, or account-walled, and it collects nothing about the visitor.

Honest differentiator a competitor could not copy: this is run by one 14-year-old (Saba) and a handful of trained volunteer helpers in a specific country and language, at a specific hour. That smallness is the product, not a limitation to hide.

## Operating Context

- **Learner loop:** open site → pick a track → read lesson → type into the live code box → get stuck → `#help` on Discord → weekly Sunday session.
- **Weekly live session:** Sunday 18:00 Tbilisi time (UTC+4), 45–60 minutes, same hour every week. Format: 0–5 welcome, 5–20 teach one idea by screen share, 20–45 everyone codes while helpers answer, 45–55 members show what they made, 55–60 next topic and weekly challenge.
- **Discord server:** one permanent invite, `https://discord.gg/rryP8c8DfG`. Channels: `#welcome`, `#rules`, `#announcements`, `#introduce-yourself`, `#lessons`, `#help`, `#showcase`, `#resources`, `#general-chat`, voice rooms, plus private `#helpers` and `#mod-log`. Roles: Founder, Moderator, Helper, Learner.
- **Record-keeping ritual (for FLEX and for the supervising adult):** one row per session — date, topic, number of people, questions answered, one story. Monthly total members. Numbers are updated by hand.
- **Devices:** phone-first. Must stay fast on a mid-range Android over mobile data.

## Capabilities and Constraints

**Learner picks a track.** The original plan assumed one language; the user's init answer changed this: learners choose from six tracks, each with its own 8-lesson path.

1. Python
2. Roblox Lua (Luau)
3. JavaScript
4. C
5. C#
6. Web design (HTML + CSS)

**The 8-level path, identical in shape across every track:**
1. What is code? Your first program (output, variables)
2. Decisions: if / else
3. Loops
4. Functions
5. Lists and data
6. A small project (quiz or calculator)
7. Fixing bugs and reading errors
8. Show what you made

Every lesson holds exactly one idea, a short explanation, a copyable example, a challenge, and a "Stuck? Ask in `#help`" exit.

**In-browser code execution — real where possible, honestly labelled where not:**
- JavaScript and Web design run natively in the browser.
- Python and Lua run through a real interpreter loaded on demand.
- C and C# cannot run client-side without a multi-megabyte toolchain. These two tracks use a small built-in runner that covers only what lessons 1–8 teach, and it must say so plainly on screen, with a pointer to installing the real compiler. **It must never imply it is a full compiler.**

**No-account constraints:** XP, level, badges, completed lessons, chosen track, theme, and sound preference all live in `localStorage`. Nothing syncs between devices, and the site must say that rather than let a learner think progress is safe.

**Bilingual:** Georgian is the primary language, English is the second, with a switch in the nav. Every piece of interface copy and every lesson exists in both.

**Accessibility/motion:** `prefers-reduced-motion` must disable drifting background symbols, the typewriter, and confetti. Sound is off by default.

**Undecided / deliberately deferred:** a help-request form with a small database (nicknames only) is a "maybe later", not in scope. Testimonial quotes require real permission and do not exist yet.

## Brand Commitments

- **Name/voice:** warm, plain, encouraging, never salesy and never condescending. "No question is stupid" is the house tone.
- **The promise, repeated verbatim across the site:** free forever, no sign-up, no ads. Nobody will ever ask for money or personal information.
- **Mascot:** an original small round robot / code-bug — big eyes, a tiny `</>` on its chest, mint body with purple accents, poses for waving, thinking, and celebrating. Must be original work, not a stock or borrowed character.
- **Pinned visual world (binding, from the brief):** "a playful hacker game." Bright colors, big friendly shapes, things react when touched.
  - Dark theme — background `#0F1226`, cards `#1A1E3A`, text `#F2F4FF`.
  - Light theme — background `#F5F6FD`, cards `#FFFFFF`, text `#1A1E36`.
  - Purple accent `#7C5CFF` dark / `#6B4BF0` light. Mint (free/success) `#2EF2B0` dark / `#0F9F72` light. Yellow (XP/highlight) `#FFD84D` dark / `#A67600` light. Georgian wine red `#B3202A` both themes.
  - Type — headlines Baloo 2 or Fredoka (chunky, rounded); body Nunito or Inter at 17–18px/1.5; code JetBrains Mono 15px; Georgian text Noto Sans Georgian, Georgian accents Noto Serif Georgian. All free on Google Fonts.
  - Layout — content max-width 1100px centered, 16px side padding on phones, 8px spacing scale (8/16/24/48/96), cards 20px radius with a thin border and a purple hover glow, buttons 56px tall and pill-shaped, one column under 700px.
  - Motion timings are pinned per element (typewriter 1.5s, section fade-up 24px/0.5s, button grow 5%/0.15s, card lift 6px/0.2s, path nodes 0.1s stagger, counters 1.5s, background drift 8–15s, confetti 1s, mascot blink every 4s).

## Evidence on Hand

- **Real and usable:** the permanent Discord invite `https://discord.gg/rryP8c8DfG`; the channel and role list; the weekly session hour (Sunday 18:00 UTC+4) and its 60-minute format; the `#rules` text; the 8-level curriculum shape; the founder's first name (Saba) and age (14).
- **Deliberately absent — must not be fabricated:** member counts, sessions run, projects shared, learner testimonials, helper names, partner-organisation endorsements, press, any success statistic. The project is brand new. Per the user's explicit init answer, impact counters start at zero and the site says so in plain words. Inventing a number here would damage the one thing this project is trading on, which is being checkable.
- **Must never appear on the site:** school name, home address, phone number, email, personal social accounts, learner photos, or real names of minors. Contact happens only through the Discord server.

## Product Principles

1. **The people are the product; the site is the on-ramp.** Every page ends in a route to a human. If a page cannot lead somewhere a person will answer, it is the wrong page.
2. **Honest numbers, even when they are zero.** Eight learners who really learned beats a made-up two hundred. Being new is stated, not hidden, because an adult has to be able to confirm every claim.
3. **No cost, no account, no data.** The visitor gives up nothing to use this — not an email, not a name, not a tracking cookie. Say it out loud and keep saying it.
4. **One idea per lesson, and the beginner is never assumed to know anything.** No unexplained jargon, no "simply", no skipped step.
5. **Safety is a design constraint, not a page.** A 14-year-old runs this. Public channels over DMs, no personal details anywhere, a trusted adult with full visibility, and nothing on the site that could locate a minor.

## Accessibility & Inclusion

- Georgian first, English second — a learner must never have to read English to start.
- Phone-first and light enough for mobile data on a mid-range Android.
- `prefers-reduced-motion` honored for drift, typewriter, and confetti; sound off by default.
- Text contrast must hold in both themes (WCAG AA: 4.5:1 body, 3:1 large). The pinned light-theme mint `#0F9F72` and yellow `#A67600` exist specifically to keep contrast on white, and must be used instead of the dark-theme values on light backgrounds.
- Full keyboard reach with visible focus, including the code editor and the track picker.
- No paid font, no paid tool, no paid hosting anywhere in the stack.
