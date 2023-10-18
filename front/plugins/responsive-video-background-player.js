import { defineNuxtPlugin } from "#app";
import { Plugin } from "vue-responsive-video-background-player";

/**
 * Plugin Nuxt.js pour la lecture de vidéos en arrière-plan.
 * @param {Object} nuxtApp - L'instance de l'application Nuxt.js.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Plugin);
});