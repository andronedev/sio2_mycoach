<template>
  <div>
    <h1>Profile Page</h1>
    <p>Welcome, {{ user.name }}!</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
const authenticated = computed(() => authStore.authenticated);
const user = computed(() => authStore.user);

definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
  pageTransition: {
    name: "slide-left",
    mode: "out-in",
  },
});
</script>
