import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './i18n/index.jsx'
import { getTheme, applyTheme } from './lib/fx.js'

import './styles/tokens.css'
import './styles/base.css'
import './styles/cabinet.css'
import './styles/mascot.css'
import './styles/editor.css'
import './styles/home.css'
import './styles/pages.css'

// Apply the saved theme before first paint so the page never flashes.
applyTheme(getTheme())

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* A hash router needs no server rewrites, so GitHub Pages works as-is. */}
    <HashRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>,
)
