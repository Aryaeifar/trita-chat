export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },

  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      title: "Trita Chat",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  css: [
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/scss/app.scss",
  ],




  compatibilityDate: "2024-08-12",
});