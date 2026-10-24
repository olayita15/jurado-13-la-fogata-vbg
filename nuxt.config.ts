export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  // GitHub Pages entrega archivos estáticos; la aplicación se hidrata en el navegador.
  ssr: false,
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Jurado 13 · VBG',
      meta: [
        { name: 'description', content: 'Experiencia pedagógica para analizar violencias basadas en género.' },
        { name: 'theme-color', content: '#682b36' }
      ]
    }
  },
  // El resultado queda en .output/public y se publica como sitio estático en GitHub Pages.
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/equipo/vela-roja', '/equipo/puente-verde', '/equipo/sol-ambar']
    }
  },
  compatibilityDate: '2025-03-01'
})
