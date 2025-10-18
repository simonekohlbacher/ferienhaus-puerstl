import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: true, // Auto-Import aktivieren
  modules: ['@nuxt/image'],
    vite: {
    plugins: [
      tailwindcss()],
  },
   css: ['../app/assets/main.css']
})
