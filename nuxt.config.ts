import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
    app: {
    head: {
      title: 'Ferienhaus Pürstl – Urlaub an der Reiteralm',
      meta: [
        { name: 'description', content: 'Im Ferienhaus Pürstl beginnt dein Bergurlaub direkt an der Reiteralm – egal ob Skifahren im Winter oder Wandern im Sommer.' },
        { property: 'og:title', content: 'Ferienhaus Pürstl – Urlaub an der Reiteralm' },
        { property: 'og:description', content: 'Bergurlaub direkt an der Reiteralm – Ruhe, Natur und Komfort im Ferienhaus Pürstl.' },
        { property: 'og:type', content: 'website' },
      ],
      htmlAttrs: { lang: 'de' },
    }
  },
  ssr: true,
  nitro: {
    preset: 'static'
  },

  devtools: { enabled: true },

  components: true, // Auto-Import aktivieren
  modules: ['@nuxt/image'],
    vite: {
    plugins: [
      tailwindcss()],
  },
  css: ['../app/assets/main.css'],
})