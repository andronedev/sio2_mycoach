<template>
  <section class="reallyfull">
    <div
      class="relative flex justify-center h-full overflow-hidden lg:px-0 md:px-12"
    >
      <div
        class="shadow-inner relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl lg:py-24 md:flex-none md:px-28 sm:justify-center"
      >
        <div
          class="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4"
        >
          <div class="flex flex-col">
            <div>
              <h2 class="text-4xl text-black">Bienvenue!</h2>
              <p class="mt-2 text-sm text-gray-500">
                Connectez-vous avec votre compte.
              </p>
            </div>
          </div>
          <form>
            <input autocomplete="false" name="hidden" style="display: none" />
            <input name="_redirect" type="hidden" value="#" />
            <div class="mt-4 space-y-6">
              <div>
                <label
                  class="block mb-3 text-sm font-medium text-gray-600"
                  for="email"
                >
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Votre adresse e-mail"
                  type="email"
                  required
                />
              </div>
              <div>
                <label
                  class="block mb-3 text-sm font-medium text-gray-600"
                  for="password"
                >
                  Mot de passe
                </label>
                <input
                  id="password"
                  class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Votre mot de passe"
                  type="password"
                  required
                />
              </div>
              <div class="col-span-full">
                <button
                  class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                >
                  Connexion
                </button>
              </div>
              <div class="col-span-full">
                <NuxtLink
                  class="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-black rounded-full inline-flex hover:bg-black hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="button"
                  to="/register"
                >
                  Je n'ai pas encore de compte
                </NuxtLink>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="hidden lg:block lg:flex-1 lg:relative sm:contents bg-black">
        <div
          class="absolute inset-0 object-cover w-full min-h-screen bg-black"
          alt=""
        >
          <video
            autoplay
            muted
            loop
            id="bkgrdVideo"
            class="w-full h-full bg-black object-cover shadow-inner"
          >
            <source src="cinematicv3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
})

export default {};
</script>

<style scoped></style>
