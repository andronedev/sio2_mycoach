
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },
  plugins: [{src:'~/plugins/responsive-video-background-player.js' ,ssr: false}],

  modules: ['nuxt-icon']
})