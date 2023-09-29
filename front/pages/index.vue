<template>
  <div class="w-full h-full min-h-screen">
      <BackgroundVideo>
        <div class="middle justify-center text-center drop-shadow-2xl">
          <span class="text-9xl text-white font-black ">MyCoach.</span>
          <br>
          <br>  
          <span class="text-4xl text-gray-100 font-light ">Le coach sportif qui vous accompagne</span> 
      </div>
    
    </BackgroundVideo>
    
 </div>
</template>

<script>

definePageMeta({
  layout: "home",
});
export default {
  // use layout home



}
 
</script>

<style scoped>

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

</style>
