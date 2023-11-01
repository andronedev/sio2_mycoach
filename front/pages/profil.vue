<template>
  <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-12">
    <h1 class="text-2xl font-bold mb-6">Votre profil</h1>
    
    <div v-show="loading" class="flex justify-center items-center mt-4">
      <div class="animate-spin">
        <Icon name="line-md:loading-loop" size="64" />
      </div>
    </div>

    <div v-if="user" class="mt-4">
      <p class="text-xl">Bonjour, <span class="font-bold">{{ user }}</span>!</p>
    </div>

    <div v-if="authenticated" class="mt-6">
      <button @click="logUserOut" class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200 ease-in">
        Déconnexion
      </button>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue';
import { useAuthStore } from "~/store/auth";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const authenticated = computed(() => authStore.authenticated);
    const user = computed(() => authStore.user_name);
    const loading = computed(() => authStore.loading);
    const router = useRouter();


    const logUserOut = () => {
      authStore.logUserOut();
      router.push('/login');
    };

    return {
      authenticated,
      user,
      logUserOut,
      loading
    };
  },
};
</script>

<style scoped>
/* Vous pouvez ajouter vos styles ici si nécessaire */
</style>
