---
version: 1
slug: "src-pages-home-jsx"
primary_target: "src/pages/Home.jsx"
related_targets: ["src/pages/Lesson.jsx","src/pages/Tracks.jsx","src/pages/Community.jsx","src/pages/About.jsx"]
---

# Surface brief — iLearn site (Home, Tracks, Lessons, Community, Teach, About, Impact, Safety)

Visitor mode: **Persuade** on Home / Community / Teach / Impact. **Read + Operate** on lesson pages (comprehension first, then a working editor). The world is identical across both; only density changes.

Audience: 13–18 beginners in Georgia, phone-first, often on mobile data, usually zero prior coding. Secondary: volunteer helpers, and adults (parents, a supervising organisation, FLEX selectors) checking whether this is real.

Action: press a track button → finish Lesson 1 → join Discord → show up Sunday 18:00.

Proof on hand: the permanent invite, the channel/role list, the session hour and format, the rules text, the 8-level curriculum, Saba's first name and age. **Nothing else is real yet** — no members, no sessions run, no projects, no testimonials. Counters start at zero and the site says so.

Constraints: no account, no backend, no tracking, no personal data. Georgian first, English second. `prefers-reduced-motion` kills drift, typewriter, confetti. Sound off by default. No school/address/phone/email/socials anywhere.

## Direction contract

**THESIS:** The site is a two-player arcade cabinet set to FREE PLAY — a machine that costs nothing and was never built for one player. The coin plate carries the promise ("FREE PLAY — NO SIGN-UP — NO ADS") so it reads as hardware fact rather than marketing badge, and PLAYER 2 is the human helper, which is the product's actual thesis. It refuses the course-platform scaffold: hero, three feature cards, curriculum accordion, testimonials, footer.

**OWN-WORLD:** Pinned palette, non-negotiable — ground `#0F1226` dark / `#F5F6FD` light, cards `#1A1E3A` / `#FFFFFF`, purple `#7C5CFF` / `#6B4BF0`, mint `#2EF2B0` / `#0F9F72`, yellow `#FFD84D` / `#A67600`, wine red `#B3202A` both. Baloo 2 display, Nunito body 17–18px/1.5, JetBrains Mono code 15px, Noto Sans/Serif Georgian. Components are cabinet hardware: injection-moulded lit plastic buttons with a real pressed state and a bottom bevel that compresses; silkscreened bezel labels in tracked mono over panel; segmented-LED readouts for every number; a dark bezel frame that holds the attract screen only. Cards 20px radius, thin border, purple hover glow. Buttons 56px pill. Spacing 8/16/24/48/96, max-width 1100px.

**STORY:** A beginner sees a machine already playing itself, understands in one glance that it is free and that a person is on the other side, presses the button for the language they actually care about, and types working code before deciding whether to trust the project.

**FIRST VIEWPORT:** Marquee bar across the top — wordmark + mascot + `FREE PLAY` lamp + GE/EN + Join. Below it a bezel splitting left/right: left holds the headline "Learn to code. Free. With real people." in Baloo 2 at 56px desktop / 32px phone, a one-line sub, and the struck silkscreen plate `FREE PLAY · NO SIGN-UP · NO ADS`; right holds the attract screen, a code box typing a tiny program to itself and printing its result, looping like a cabinet demo. Directly under the bezel, full width, the six lit track buttons (Python, Roblox Lua, JavaScript, C, C#, Web design) — this is the primary action, because picking a language is starting. Then: the 8-step level row that scales and never wraps; READ/TRY/ASK; the Discord panel with the live TOURNAMENT NIGHT readout; the high-score table reading NO SCORES YET — BE THE FIRST; the helper banner.

**FORM:** Free Play Cabinet — candidate 6 of 7 on the grounded list, ordered by resonance (1 campaign map, 2 Discord vernacular, 3 character select, 4 terminal boot, 5 sticker album, 6 free play cabinet, 7 school notebook). Seed key `2606518e`, assigned index 6, confirmed by the user against the campaign-map pick, the step row, and the canon.

Raises, each named for the challenger that donated it:
- *from the step row* — the 8-level row never wraps on any screen, it scales, and a lit indicator always marks where you are.
- *from the character sheet* — the mascot ships as an honest reference sheet on About: four poses, named swatches, drawn here not borrowed.
- *from monochrome claim-and-proof* — every promise sits beside the thing that proves it; "no sign-up" is immediately followed by a working editor.
- *from the urban nocturne* — the hour is a live state; the cabinet shifts into TOURNAMENT NIGHT as Sunday 18:00 approaches and says so while it runs.
- *from the sneaker wall* — every track and lesson card carries the same strict mono spec strip (track · level · XP · minutes).
- *from ebru* — the editor is edited in place with live result; no modal, no submit step between typing and seeing.

Signature interaction: the **attract screen** — idle, the cabinet demos itself by typing and running a tiny program; the moment the visitor touches the editor it hands over control and stops demoing, exactly as a cabinet drops out of attract mode when a player arrives.

Motion grammar: one authored moment per screen, exponential ease-out from an already-visible default. Button press = real 2px compression of the bevel, 0.15s. Level row = lit indicator travel. Confetti only on a passed challenge. Reduced motion kills attract typing, drift, confetti.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved

- C and C# run on a small built-in runner covering only lessons 1–8; it must say so on screen and point to the real compiler. Never implied to be a full compiler.
- Georgian lesson copy is authored here; a native reader should proofread before launch.
