// Importation des modules nécessaires depuis "pinia"
import { defineStore, createPinia, setActivePinia } from "pinia"
// Création d'une instance Pinia
const pinia = createPinia()

// Activation de Pinia dans l'application
export default { store: setActivePinia(pinia) }

// Définition du store 'useAuthStore'
export const useAuthStore = defineStore('auth', {
    state: () => (
        {
            authenticated: false, // État d'authentification initial à "false"
            loading: false, // État de chargement initial à "false"
            user: {
                id: null, // Identifiant utilisateur initial à "null"
                email: null, // Adresse e-mail utilisateur initial à "null"
                name: null // Nom utilisateur initial à "null"
            }
        }
    ),
    actions: {
        // Action asynchrone pour authentifier l'utilisateur
        async authenticateUser({ email, password }) {
            // Utilisation de FormData pour préparer les données de la requête
            const formData = new FormData();
            formData.append('action', 'login');
            formData.append('email', email);
            formData.append('password', password);

            // Appel à useFetch (de Nuxt 3) pour effectuer une requête HTTP
            const { data, pending } = await useFetch('http://127.0.0.1/edsa-mycoach/auth.php', {
                method: 'POST',
                body: formData
            });

            // Mise à jour de l'état de chargement
            this.loading = pending;

            // Vérification du succès de la requête
            if (data.value.success) {
                const token = useCookie('PHPSESSID'); // Utilisation du nouveau hook 'useCookie' de Nuxt 3
                token.value = data.value.token; // Définition du jeton dans le cookie
                this.user.id = data.value.user.id; // Mise à jour de l'identifiant utilisateur
                this.user.email = data.value.user.email; // Mise à jour de l'adresse e-mail utilisateur
                this.user.name = data.value.user.name; // Mise à jour du nom utilisateur
                this.authenticated = true; // Définition de l'état d'authentification à "true"
            }
        },
        // Action pour déconnecter l'utilisateur
        logUserOut() {
            const token = useCookie('PHPSESSID'); // Utilisation du nouveau hook 'useCookie' de Nuxt 3
            this.authenticated = false; // Définition de l'état d'authentification à "false"
            token.value = null; // Effacement du jeton du cookie
        }
    }
});
