<template>
  <div class="bg-black fixed w-full h-full min-h-screen">
    <NuxtLoadingIndicator />
    <navbar isHome="true" />
    <BackgroundVideo><slot /></BackgroundVideo>
    
  </div>
</template>
