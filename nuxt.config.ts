import { defineNuxtConfig } from 'nuxt'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: true,
  modules: ['@nuxt/image'],

  vite: {
    plugins: [tailwindcss()]
  },

  css: ['../app/assets/main.css'],

  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: '0.0.0.0'
  }
})
