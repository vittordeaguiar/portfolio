export default defineNuxtConfig({
  app: {
    head: {
      title: 'Vittor de Aguiar',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/icons/favicon.png',
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'tippy.js/themes/light-border.css', 'tippy.js/dist/tippy.css'],
  modules: ['@nuxtjs/tailwindcss'],
});
