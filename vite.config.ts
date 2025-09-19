import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // Importar el plugin de PostCSS para tailwindcss
import autoprefixer from 'autoprefixer' // Importar autoprefixer

export default defineConfig({
  base: '/portfolio-dhilsenmmv/', // Añadir la ruta base para GitHub Pages
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Usar el plugin de PostCSS
        autoprefixer(),
      ],
    },
  },
})