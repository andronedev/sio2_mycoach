// Importation du module 'storeToRefs' depuis 'pinia'
import { storeToRefs } from 'pinia';
// Importation du store 'useAuthStore' depuis '~/store/auth'
import { useAuthStore } from '~/store/auth';

// Définition d'un plugin Nuxt
export default defineNuxtPlugin(async (nuxtApp) => {
  // Obtention des références au store 'useAuthStore'
  const { authenticated, user_email, user_id, user_name, loading } = storeToRefs(useAuthStore()); // Rendre l'état 'authenticated' réactif
  loading.value = true; // Mise à jour de l'état de chargement à "true"

  // Récupération du jeton d'authentification à partir des cookies en utilisant le nouveau hook 'useCookie' de Nuxt 3
  const token = useCookie('PHPSESSID');

  // Vérification de l'existence du jeton
  if (token.value) {

    
    // Vérification de la validité du jeton avant de mettre à jour l'état
    // Appel à une API distante pour récupérer des données utilisateur
    const { data } = await useFetch('/api/me.php?action=info', {
      method: 'GET',
      credentials: 'include',
    });
    // Vérification de la réussite de la requête
    if (data.value.success) {
      // Mise à jour de l'état d'authentification en le définissant sur 'true'
      // Mise à jour des données utilisateur
      console.log("user : " +data.value.user.nom);
      user_id.value = data.value.user.id; // Définition de l'identifiant de l'utilisateur
      user_email.value = data.value.user.email; // Définition de l'adresse e-mail de l'utilisateur
      user_name.value = data.value.user.nom; // Définition du nom de l'utilisateur
      authenticated.value = true;

      console.log('Store updated:', user_name, user_email);

    }
  }
  loading.value = false; // Mise à jour de l'état de chargement à "false"


}, {
  // Options du plugin
  name: 'initAuth', // Nom du plugin
  priority: 10, // Priorité du plugin
  global: true, // Plugin global
});
