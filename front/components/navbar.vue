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
        <ul class="flex justify-start space-x-4 pr-4" v-if="!authenticated">
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
        <ul class="flex justify-start space-x-4 pr-4" v-else>
          <li>
            <NuxtLink to="/profile" class="hover:text-blue-900">{{ user.name }}</NuxtLink>
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

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
const authenticated = computed(() => authStore.authenticated);
const user = computed(() => authStore.user);

const logUserOut = () => {
  authStore.logUserOut();
};

const isHome = ref(false); // Si vous voulez toujours utiliser isHome comme une prop, vous pouvez le supprimer ici et le laisser dans la section props ci-dessous.
</script>

<script>
export default {
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
header {
  z-index: 1000;
}
</style>
