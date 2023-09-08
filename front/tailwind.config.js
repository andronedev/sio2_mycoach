/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        text: "#090601",
        light: "#f8e4bf",
        background: "#fcf2de",
        primary: "#c03016",
        secondary: "#f8e4bf",
        accent: "#d29119",
      },
    },
  },
  plugins: [],
};
