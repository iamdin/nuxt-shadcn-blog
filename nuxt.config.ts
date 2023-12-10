// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],
  content: {
    markdown: {
      tags: {
        img: 'Image',
      },
    },
    highlight: {
      theme: 'one-dark-pro',
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'dark',
  },
})
