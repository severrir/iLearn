import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Marquee from './components/Marquee.jsx'
import Footer from './components/Footer.jsx'
import { Drift } from './components/bits.jsx'
import { useLang } from './i18n/index.jsx'

import Home from './pages/Home.jsx'
import Tracks from './pages/Tracks.jsx'
import Lesson from './pages/Lesson.jsx'
import Community from './pages/Community.jsx'
import Help from './pages/Help.jsx'
import Teach from './pages/Teach.jsx'
import About from './pages/About.jsx'
import Impact from './pages/Impact.jsx'
import Safety from './pages/Safety.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const { t } = useLang()

  return (
    <>
      <Drift />
      <a className="skip-link" href="#main">
        {t('nav.skip')}
      </a>
      <ScrollToTop />
      <Marquee />

      <main id="main" style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/lesson/:trackId/:n" element={<Lesson />} />
          <Route path="/community" element={<Community />} />
          <Route path="/help" element={<Help />} />
          <Route path="/teach" element={<Teach />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
