// Importation du module 'storeToRefs' depuis 'pinia'
import { storeToRefs } from 'pinia';
// Importation du store 'useAuthStore' depuis '~/store/auth'
import { useAuthStore } from '~/store/auth';

// Définition d'un plugin Nuxt
export default defineNuxtPlugin(async (nuxtApp) => {
  // Obtention des références au store 'useAuthStore'
  const { authenticated, user } = storeToRefs(useAuthStore()); // Rendre l'état 'authenticated' réactif
  // Récupération du jeton d'authentification à partir des cookies en utilisant le nouveau hook 'useCookie' de Nuxt 3
  const token = useCookie('PHPSESSID');

  // Vérification de l'existence du jeton
  if (token.value) {
    // Vérification de la validité du jeton avant de mettre à jour l'état
    // Appel à une API distante pour récupérer des données utilisateur
    const { data } = await useFetch('http://127.0.0.1/edsa-mycoach/me.php?action=info', {
      method: 'GET',
      credentials: 'include',
    });
    // Vérification de la réussite de la requête
    if (data.value.success) {
      // Mise à jour de l'état d'authentification en le définissant sur 'true'
      authenticated.value = true;
      // Mise à jour des données utilisateur
      user.value.id = data.value.user.id; // Définition de l'identifiant de l'utilisateur
      user.value.email = data.value.user.email; // Définition de l'adresse e-mail de l'utilisateur
      user.value.name = data.value.user.name; // Définition du nom de l'utilisateur
    }
  }
}, {
  // Options du plugin
  name: 'initAuth', // Nom du plugin
  priority: 10, // Priorité du plugin
  global: true, // Plugin global
});
