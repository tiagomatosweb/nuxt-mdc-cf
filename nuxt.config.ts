// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/mdc'],
  mdc: {
    highlight: {
      theme: 'material-theme-palenight',
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'php'],
    },
    headings: {
      anchorLinks: {
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false,
      },
    },
  },
})