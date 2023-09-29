<template>
  <header class="sticky top-0 z-50 max-h-50">
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
        <ul class="flex justify-start space-x-4 pr-4">
          <li>
            <NuxtLink to="/" class="hover:text-blue-900">Connexion</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/"
              class="text-light font-semibold bg-primary px-4 py-2 rounded-xl"
            >
              Inscription
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<style scoped>
header {
  z-index: 1000;
}
</style>
