<template>
  <div class="bg-black fixed w-full h-full min-h-screen">
    <NuxtLoadingIndicator />
    <navbar isHome="true" />
    <slot />
  </div>
</template>
