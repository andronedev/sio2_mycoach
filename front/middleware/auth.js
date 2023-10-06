import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { authenticated,user } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('PHPSESSID'); // useCookie new hook in nuxt 3

  if (token.value) {
    // check if value exists
    // todo verify if token is valid, before updating the state

    // fetch user data from api
    const { data } = await useFetch('http://127.0.0.1/edsa-mycoach/me.php?action=info', {
      method: 'GET',
      credentials: 'include',
    });
    if (data.value.success) {
      authenticated.value = true; // update the state to authenticated
      user.value.id = data.value.user.id; // set user id
      user.value.email = data.value.user.email; // set user email
      user.value.name = data.value.user.name; // set user name
      
      
    }
  }

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === 'login') {
    return navigateTo('/');
  }

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== 'login') {
    abortNavigation();
    return navigateTo('/login');
  }
});