// The six tracks. Each runs the same 8 levels.
// `color` is the arcade key cap; `ink` is the label on it.

import { pythonLessons } from './lessons/python.js'
import { luaLessons } from './lessons/lua.js'
import { jsLessons } from './lessons/javascript.js'
import { cLessons } from './lessons/c.js'
import { csharpLessons } from './lessons/csharp.js'
import { webLessons } from './lessons/web.js'

export const TRACKS = [
  {
    id: 'python',
    name: 'Python',
    glyph: 'py',
    color: '#2EF2B0',
    ink: '#05210f',
    runner: 'python',
    syntax: 'python',
    real: true,
    blurb: {
      ka: 'ყველაზე რბილი დასაწყისი. მოკლე, წასაკითხად ადვილი კოდი — და თითქმის ყველგან გამოგადგება.',
      en: 'The gentlest start. Short, readable code that is useful almost everywhere.',
    },
    makes: {
      ka: 'კალკულატორები, ბოტები, პატარა თამაშები, ავტომატიზაცია',
      en: 'calculators, bots, small games, automating boring things',
    },
    lessons: pythonLessons,
  },
  {
    id: 'lua',
    name: 'Roblox Lua',
    glyph: 'lua',
    color: '#6B4BF0',
    ink: '#ffffff',
    runner: 'lua',
    syntax: 'lua',
    real: true,
    blurb: {
      ka: 'თუ Roblox-ში თამაშის გაკეთება გინდა, ეს შენი ენაა. Luau სწორედ Lua-ზეა აწყობილი.',
      en: 'If you want to build a Roblox game, this is your language. Luau is built on Lua.',
    },
    makes: {
      ka: 'Roblox-ის თამაშები, სკრიპტები, obby-ები',
      en: 'Roblox games, scripts, obbies',
    },
    lessons: luaLessons,
  },
  {
    id: 'js',
    name: 'JavaScript',
    glyph: 'js',
    color: '#FFD84D',
    ink: '#241a00',
    runner: 'js',
    syntax: 'js',
    real: true,
    blurb: {
      ka: 'ყველა ვებგვერდი მას იყენებს — ეს საიტიც. ბრაუზერში უკვე დაყენებულია.',
      en: 'Every website uses it, including this one. It is already installed in your browser.',
    },
    makes: {
      ka: 'ვებგვერდები, თამაშები ბრაუზერში, Discord-ის ბოტები',
      en: 'websites, browser games, Discord bots',
    },
    lessons: jsLessons,
  },
  {
    id: 'web',
    name: { ka: 'ვებ-დიზაინი', en: 'Web design' },
    glyph: '</>',
    color: '#FF8A3D',
    ink: '#2a1200',
    runner: 'web',
    syntax: 'html',
    real: true,
    blurb: {
      ka: 'HTML და CSS. აქ შედეგს თვალით ხედავ — გვერდი მაშინვე იცვლება.',
      en: 'HTML and CSS. Here you see the result with your eyes — the page changes as you type.',
    },
    makes: {
      ka: 'შენი საკუთარი გვერდი, პორტფოლიო, პოსტერები',
      en: 'your own page, a portfolio, posters',
    },
    lessons: webLessons,
  },
  {
    id: 'c',
    name: 'C',
    glyph: 'c',
    color: '#45C8FF',
    ink: '#00212f',
    runner: 'c',
    syntax: 'c',
    real: false,
    tool: 'GCC',
    toolUrl: 'https://code.visualstudio.com/docs/cpp/config-mingw',
    blurb: {
      ka: 'ძველი, მკაცრი და სწრაფი. აიძულებს გაიგო, რა ხდება მანქანაში სინამდვილეში.',
      en: 'Old, strict, and fast. It makes you understand what the machine is actually doing.',
    },
    makes: {
      ka: 'ოპერაციული სისტემები, თამაშის ძრავები, მიკროკონტროლერები',
      en: 'operating systems, game engines, microcontrollers',
    },
    lessons: cLessons,
  },
  {
    id: 'csharp',
    name: 'C#',
    glyph: 'c#',
    color: '#B3202A',
    ink: '#ffffff',
    runner: 'csharp',
    syntax: 'csharp',
    real: false,
    tool: '.NET SDK',
    toolUrl: 'https://dotnet.microsoft.com/download',
    blurb: {
      ka: 'Unity-ის ენა. თუ თამაშების გაკეთება გინდა Roblox-ის მიღმა, აქედან დაიწყე.',
      en: "Unity's language. If you want to make games beyond Roblox, start here.",
    },
    makes: {
      ka: 'Unity-ის თამაშები, დესკტოპ აპები',
      en: 'Unity games, desktop apps',
    },
    lessons: csharpLessons,
  },
]

export function getTrack(id) {
  return TRACKS.find((t) => t.id === id) || null
}

export function trackName(track, lang) {
  if (!track) return ''
  return typeof track.name === 'string' ? track.name : (track.name[lang] ?? track.name.en)
}

/** The 8 levels, named once and shared by every track. */
export const LEVELS = [
  { n: 1, ka: 'რა არის კოდი', en: 'What is code' },
  { n: 2, ka: 'if / else', en: 'if / else' },
  { n: 3, ka: 'ციკლები', en: 'Loops' },
  { n: 4, ka: 'ფუნქციები', en: 'Functions' },
  { n: 5, ka: 'სიები', en: 'Lists' },
  { n: 6, ka: 'პატარა პროექტი', en: 'A small project' },
  { n: 7, ka: 'შეცდომები', en: 'Fixing bugs' },
  { n: 8, ka: 'აჩვენე', en: 'Show it' },
]
