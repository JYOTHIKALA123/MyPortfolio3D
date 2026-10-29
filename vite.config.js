import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the built site works on Vercel,
// Netlify, GitHub Pages (even in a sub-folder) or any static host.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // Always emit PDFs as real files (never inline them as base64), however small.
    assetsInlineLimit: (file) => (file.endsWith('.pdf') ? false : undefined),
    // The 3D scene is lazy-loaded in its own chunk, so a larger size is expected.
    chunkSizeWarningLimit: 1400,
  },
})
