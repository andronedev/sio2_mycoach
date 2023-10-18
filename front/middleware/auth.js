import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

/**
 * Middleware d'authentification pour les routes Nuxt.
 * @param {Object} to - L'objet de destination de la route.
 * @param {Object} from - L'objet de la route précédente.
 * @returns {Promise<void>} - Une promesse qui se résout une fois que le middleware a terminé son traitement.
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  // Obtention des références au store 'useAuthStore'
  const { authenticated, user } = storeToRefs(useAuthStore());
  // Récupération du jeton d'authentification à partir des cookies
  const token = useCookie("PHPSESSID");

  // Vérification de l'existence du jeton
  if (token.value) {
    // Appel à une API distante pour récupérer des données utilisateur
    const { data } = await useFetch(
      "http://127.0.0.1/edsa-mycoach/me.php?action=info",
      {
        method: "GET",
        credentials: "include",
      }
    );
    // Vérification de la réussite de la requête
    if (data.value.success) {
      // Mise à jour de l'état d'authentification et des données utilisateur
      authenticated.value = true;
      user.value.id = data.value.user.id;
      user.value.email = data.value.user.email;
      user.value.name = data.value.user.name;
    }
  }

  // Gestion des redirections en fonction de l'état de l'authentification et de la destination
  if (token.value && to?.name === "login") {
    return navigateTo("/");
  }

  if (!token.value && to?.name !== "login") {
    // Annulation de la navigation et redirection vers la page de connexion
    abortNavigation();
    return navigateTo("/login");
  }
});
