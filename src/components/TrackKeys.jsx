import { Link } from 'react-router-dom'
import { TRACKS, trackName } from '../data/tracks.js'
import { useLang } from '../i18n/index.jsx'
import { useProgress } from './bits.jsx'
import { countDone, nextLesson, setTrack } from '../lib/progress.js'
import { pop } from '../lib/fx.js'

/**
 * The six lit cabinet buttons. Pressing one starts you, because choosing a
 * language IS starting — this is the home page's primary action.
 */
export default function TrackKeys() {
  const { lang } = useLang()
  useProgress() // re-render when a lesson is completed elsewhere

  return (
    <div className="keyrow">
      {TRACKS.map((track) => {
        const done = countDone(track.id)
        const next = nextLesson(track.id)
        return (
          <Link
            key={track.id}
            to={`/lesson/${track.id}/${next}`}
            className={`key ${done === 8 ? 'key--done' : ''}`}
            style={{ '--key-cap': track.color, '--key-ink': track.ink }}
            onClick={() => {
              setTrack(track.id)
              pop(440 + TRACKS.indexOf(track) * 55)
            }}
          >
            <span className="key__glyph">{track.glyph}</span>
            <span>{trackName(track, lang)}</span>
            <span className="key__sub">{done > 0 ? `${done}/8` : 'LVL 1'}</span>
          </Link>
        )
      })}
    </div>
  )
}
