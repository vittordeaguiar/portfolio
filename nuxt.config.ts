export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "tippy.js/themes/light-border.css",
    "tippy.js/dist/tippy.css",
  ],
  modules: ["@nuxtjs/tailwindcss"],
});
