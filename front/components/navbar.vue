<template>
  <header :class="isHome ? 'fixed w-full text-white backdrop-blur-3xl	max-h-50' :'bg-background sticky top-0 z-50 max-h-50' ">
    <nav class="py-4">
      <div class="flex justify-start space-x-4 pl-4 w-full justify-between">
        <ul class="flex justify-start space-x-4 pl-4">
          <li>
            <NuxtLink to="/" class="hover:text-blue-900 font-bold"
              >MyCoach</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/activites" class="hover:text-blue-900"
              >Activités</NuxtLink
            >
          </li>
        </ul>
        <ul class="flex justify-start space-x-4 pr-4" v-show="loading">
          <li>
            <a
              href="#"
              class="text-black font-semibold bg-secondary px-4 py-2 rounded-xl disabled:opacity-50"
            >
              Chargement...
            </a>
          </li>
        </ul>
        <ul class="flex justify-start space-x-4 pr-4" v-if="!authenticated && !loading">
          <li>
            <NuxtLink to="/login" class="hover:text-blue-900">Connexion</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/register"
              class="text-light font-semibold bg-primary px-4 py-2 rounded-xl"
            >
              Inscription
            </NuxtLink>
          </li>
        </ul>
        <ul class="flex justify-start space-x-4 pr-4" v-else-if="authenticated && !loading">
          <li>
            <NuxtLink to="/profil" class="hover:text-blue-900">{{ user }}</NuxtLink>
          </li>
          <li>
            <a
              href="#"
              class="text-light font-semibold bg-primary px-4 py-2 rounded-xl"
              @click="logUserOut"
            >
              Déconnexion
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, computed } from 'vue';
import { useAuthStore } from '~/store/auth';



export default {
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const authStore = useAuthStore();
    const authenticated = computed(() => authStore.authenticated);
    const user = computed(() => authStore.name);
    const loading = computed(() => authStore.loading);
    const router = useRouter();


    const logUserOut = async () => {
      authStore.logUserOut();
      console.log('logged out, redirecting to login page');
      console.log('current route', router.currentRoute.value);
      router.push('/login');
      router.go();
      console.log('redirected to login page');
    };

    return {
      authenticated,
      user,
      loading,
      logUserOut,
    };
  },
};
</script>

<style scoped>
header {
  z-index: 1000;
}
</style>