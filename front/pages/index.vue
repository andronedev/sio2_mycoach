<template>
  <div class="relative max-h-screen overflow-y-scroll select-none">
    <div class="w-full flex justify-center items-center flex-col min-h-screen">
      <!-- Background Video Component -->
      <div>
        <div class="flex flex-col text-center drop-shadow-2xl gap-4">
          <span class="text-6xl md:text-9xl text-white font-black"
            >MyCoach.</span
          >
          <span class="text-2xl md:text-4xl text-gray-100 font-light">
            Le coach sportif qui vous accompagne
          </span>
        </div>
        <div class="absolute bottom-0 mb-10 left-0 right-0 flex justify-center">
          <button
            @click="scrollTo('#content')"
            class="text-gray-100 hover:text-gray-300 animate-bounce"
          >
            <Icon name="bx:bxs-down-arrow" size="32" />
          </button>
        </div>
      </div>

      <!-- New content section -->
    </div>
    <section
      class="text-gray-700 body-font bg-opacity-90 rounded-t-2xl backdrop-blur-xl bg-gray-900"
      id="content"
    >
      <div class="container px-5 pt-24 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font text-white mb-4"
          >
            Les qualités d’un bon coach
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Découvrez ce qui fait la différence avec MyCoach.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <!-- Example for one quality -->
          <!-- Exemplarité -->
          <div class="p-4 lg:w-1/3">
            <div
              class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
            >
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                QUALITÉ
              </h2>
              <h1
                class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
              >
                Exemplarité
              </h1>
              <p class="leading-relaxed mb-3">
                Un coach doit être un exemple en matière de condition physique,
                posture, maîtrise technique, et hygiène de vie pour inspirer et
                guider ses élèves.
              </p>
            </div>
          </div>

          <!-- Écoute -->
          <div class="p-4 lg:w-1/3">
            <div
              class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
            >
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                QUALITÉ
              </h2>
              <h1
                class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
              >
                Écoute
              </h1>
              <p class="leading-relaxed mb-3">
                L'écoute attentive des besoins et des objectifs de chaque élève
                est essentielle pour proposer un accompagnement personnalisé et
                efficace.
              </p>
            </div>
          </div>

          <!-- Disponibilité -->
          <div class="p-4 lg:w-1/3">
            <div
              class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
            >
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                QUALITÉ
              </h2>
              <h1
                class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
              >
                Disponibilité
              </h1>
              <p class="leading-relaxed mb-3">
                La disponibilité au-delà des séances permet de soutenir les
                sportifs à tout moment, ajustant les programmes et fournissant
                des conseils continus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-10 py-10">
        <NuxtLink
          to="/register"
          class="inline-flex text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-primary-dark rounded-xl text-lg"
        >
          Je commence dès maintenant
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
definePageMeta({
  layout: "home",
});
export default {
  methods: {
    scrollTo(id) {
      const el = document.querySelector(id);
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
body,
html {
  background-color: #000;
  scroll-behavior: smooth;
}
</style>
