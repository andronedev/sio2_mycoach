import {defineStore, createPinia, setActivePinia} from "pinia"
const pinia = createPinia()

export default {store: setActivePinia(pinia)}

export const useAuthStore = defineStore('auth', {
    state: () => (
        {
            authenticated: false,
            loading: false,
            user: {
                id: null,
                email: null,
                name: null
            }
        }
    ),
    actions: {
        async authenticateUser(
            {email, password}
        ) { // useFetch from nuxt 3
            const formData = new FormData();
            formData.append('action', 'login');
            formData.append('email', email);
            formData.append('password', password);

            const {data, pending} = await useFetch('http://127.0.0.1/edsa-mycoach/auth.php', {
                method: 'POST',
                body: formData
            });
            this.loading = pending;
            if (data.value.success) {
                const token = useCookie('PHPSESSID'); // useCookie new hook in nuxt 3
                token.value = data.value.token; // set token to cookie
                this.user.id = data.value.user.id; // set user id
                this.user.email = data.value.user.email; // set user email
                this.user.name = data.value.user.name; // set user name
                this.authenticated = true; // set authenticated  state value to true
            }
        },
        logUserOut() {
            const token = useCookie('PHPSESSID'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
        }
    }
});
