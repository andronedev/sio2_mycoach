import initAuth from "./plugins/initAuth";

export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true
  },

  css: ["~/assets/css/main.css"],
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
  plugins: [
    {src: '~/plugins/initAuth.js', mode: 'client'},
    { src: "~/plugins/responsive-video-background-player.js", ssr: false },
  ],

  modules: ["nuxt-icon", "@pinia/nuxt"],
 
});
