// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui-pro', '@nuxtjs/mdc'],
  css: ['~/assets/css/main.css'],
  mdc: {
    highlight: {
      theme: 'material-theme-palenight',
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'php'],
      shikiEngine: 'javascript'
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
  content: {
    build: {
      markdown: {
        // toc: {
        //   searchDepth: 1,
        // },
        highlight: {
          // theme: 'github-light',
          theme: 'material-theme-palenight',
          // theme: 'github-dark',
          langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'php'],
        },
      },
    }
  },
})