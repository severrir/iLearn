import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps the build working on GitHub Pages under a project subpath
// (username.github.io/repo-name) as well as at a domain root on Netlify.
// Routing uses a hash router for the same reason — no server rewrites needed.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    // Pyodide and wasmoon are pulled from a CDN at runtime, on demand, so the
    // shipped bundle stays small enough for mobile data.
    chunkSizeWarningLimit: 700,
  },
})
