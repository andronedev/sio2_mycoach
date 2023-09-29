
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  // app: {
  //   pageTransition: {
  //     name: 'fade',
  //     mode: 'out-in',
  //   },

  //   layoutTransition: {
  //     name: "fade",
  //     mode: "out-in"
  // },
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },
  plugins: [{src:'~/plugins/responsive-video-background-player.js' ,ssr: false}],

  modules: ['nuxt-icon']
})