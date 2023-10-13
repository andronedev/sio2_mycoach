<template>
    <div>
        <h1>Profile Page</h1>
        <p>Welcome, {{ user.name }}!</p>
    </div>
</template>

<script>
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
const { authenticated } = storeToRefs(useAuthStore());
const { authenticateUser } = useAuthStore(); // us

definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
});

export default {
    data() {
        return {
            user: authenticated.value,
        }
    },
    async mounted() {
        console.log(this.user)
    },
    setup() {
        const { authenticated } = storeToRefs(useAuthStore());
        const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
        const router = useRouter();
        definePageMeta({
            pageTransition: {
                name: "slide-left",
                mode: "out-in",
            },
        });
        return {
            authenticated,
            authenticateUser,
            router
        }
    }

}
</script>

