import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from https://aperez2313.github.io/andreportfolio/, so every URL starts with /andreportfolio/.
  // If you move to your own domain later, change this to '/'.
  base: '/andreportfolio/',
  plugins: [react(), tailwindcss()],
})
