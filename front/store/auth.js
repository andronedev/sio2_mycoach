// Importation des modules nécessaires depuis "pinia"
import { defineStore, createPinia, setActivePinia } from "pinia"
// Création d'une instance Pinia
const pinia = createPinia()

// Activation de Pinia dans l'application
export default { store: setActivePinia(pinia) }

// Définition du store 'useAuthStore'
export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: true,
        user_id: null,
        user_email: null,
        user_name: null,
    }),
    
    actions: {
        // Action asynchrone pour authentifier l'utilisateur
        async authenticateUser({ email, password }) {
            this.loading = true;

            // Utilisation de FormData pour préparer les données de la requête
            const formData = new FormData();
            formData.append('action', 'login');
            formData.append('email', email);
            formData.append('password', password);

            // Appel à useFetch (de Nuxt 3) pour effectuer une requête HTTP
            const { data, pending } = await useFetch('/api/auth.php', {
                method: 'POST',
                body: formData
            });


            // Vérification du succès de la requête
            if (data.value.success) {
                
                const token = useCookie('PHPSESSID'); // Utilisation du nouveau hook 'useCookie' de Nuxt 3
                token.value = data.value.token; // Définition du jeton dans le cookie
                this.user_id = data.value.user.id; // Mise à jour de l'identifiant utilisateur
                this.user_email = data.value.user.email; // Mise à jour de l'adresse e-mail utilisateur
                this.user_name = data.value.user.nom; // Mise à jour du nom utilisateur
                this.authenticated = true; // Définition de l'état d'authentification à "true"
                console.log('Store updated:', this.user_name, this.user_email);

            }
            this.loading = false;
        },
        // Action pour déconnecter l'utilisateur
        logUserOut() {
            const token = useCookie('PHPSESSID'); // Utilisation du nouveau hook 'useCookie' de Nuxt 3
            this.authenticated = false; // Définition de l'état d'authentification à "false"
            token.value = null; // Effacement du jeton du cookie
            this.user_id = null; // Effacement de l'identifiant utilisateur
            this.user_email = null; // Effacement de l'adresse e-mail utilisateur
            this.user_name = null; // Effacement du nom utilisateur
        },

    }
});
