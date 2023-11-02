<template>
  <div class="w-full">
    <video autoplay muted loop id="bkgrdVideo" class="fullscreen-video">
      <source src="/cinematicv3.mp4" type="video/mp4" />
    </video>
    <slot class="middle" />
  </div>
</template>

<style scoped>
.fullscreen-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  overflow: scroll;
}

</style>
