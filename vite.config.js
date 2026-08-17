import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// NOTE: base path is set for GitHub Pages PROJECT sites:
//   https://USERNAME.github.io/REPOSITORY/
// If deploying to a user/organization page (USERNAME.github.io) or a
// custom domain, change base to '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
})
