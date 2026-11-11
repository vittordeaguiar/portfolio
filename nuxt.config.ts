// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Newsreader', provider: 'google', weights: [400, 500], styles: ['normal', 'italic'] },
      { name: 'Instrument Sans', provider: 'google', weights: [400, 500, 600] }
    ]
  },

  app: {
    head: {
      title: 'Vittor de Aguiar, desenvolvedor back-end',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Vittor de Aguiar, desenvolvedor back-end na TentosCap. Sistemas financeiros, integrações e .NET.'
        }
      ],
      script: [
        {
          // Aplica o tema antes da primeira pintura para evitar flash.
          innerHTML:
            "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()",
          tagPosition: 'head'
        }
      ],
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  }
})
