
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
  },
  plugins: ['~/plugins/responsive-video-background-player.js']

})