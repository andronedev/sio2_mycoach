<template>
  <section class="reallyfull">
    <div class="relative flex justify-center h-full overflow-hidden lg:px-0 md:px-12">
      <div class="hidden lg:block lg:flex-1 lg:relative sm:contents  bg-black">
        <div class="absolute inset-0 object-cover w-full min-h-screen  bg-black" alt="">
          <video autoplay muted loop id="bkgrdVideo" class="w-full h-full  bg-black object-cover shadow-inner">
            <source src="cinematicv3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="shadow-inner relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl lg:py-24 md:flex-none md:px-28 sm:justify-center">
        <div class="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div class="flex flex-col">
            <div>
              <h2 class="text-4xl text-black">Bienvenue!</h2>
              <p class="mt-2 text-sm text-gray-500">
                Créez votre compte pour accéder à l'ensemble des fonctionnalités de MyCoach.
              </p>
            </div>
          </div>
          <form class="mt-8 space-y-6" @submit.prevent="register" method="POST">
            <div v-if="error" class="text-red-500 text-center">
              {{ error }}
            </div>
            <input autocomplete="false" name="hidden" style="display: none" />
            <input name="_redirect" type="hidden" value="#" />
            <div class="mt-4 space-y-6">
              <div>
                <label class="block mb-3 text-sm font-medium text-gray-600" for="nom">
                  Vous pseudo
                </label>
                <input
                  v-model="name"
                  id="nom"
                  class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Votre pseudo"
                  type="nom"
                  required
                />
              </div>
              <div>
                <label class="block mb-3 text-sm font-medium text-gray-600" for="email">
                  Adresse e-mail
                </label>
                <input
                  v-model="email"
                  id="email"
                  class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Votre adresse e-mail"
                  type="email"
                  required
                />
              </div>
              <div>
                <label class="block mb-3 text-sm font-medium text-gray-600" for="password">
                  Mot de passe
                </label>
                <input
                  v-model="password"
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
                  S'inscrire
                </button>
              </div>
              <div class="col-span-full">
                <NuxtLink
                  class="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-black rounded-full inline-flex hover:bg-black hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="button"
                  to="/login"
                >
                  J'ai déjà un compte
                </NuxtLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

definePageMeta({
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in'
  },
})
export default {


data() {
  return {
    name: '',
    email: '',
    password: '',
    error: '',
    loading : false,
  }
},

methods: {
  register() {
    this.loading = true;
    const formData = new FormData();
    formData.append('action', 'register');
    formData.append('nom', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);

    fetch('http://127.0.0.1/edsa-mycoach/auth.php', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          this.error = res.error;
        } else {
          //get cookie
          const token = res.token;
          //store cookie
          document.cookie = `PHPSESSID=${token}; path=/`; // Assurez-vous d'ajuster le nom du cookie si nécessaire

          alert('Vous êtes connecté !');
        }
      }).finally(() => {
        this.loading = false;
      });
  },
},
};

</script>

<style scoped></style>
