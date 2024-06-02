export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to.path)
    if (to.path!== '/') {
        // return navigateTo('/')
    }
})

// import { useAuthStore } from '~/store/auth';
// const requestStore = useRequestStore();
// export default defineNuxtRouteMiddleware(async (to, from) => {
//   const authStore = useAuthStore();
//   try {
//     if (!authStore.isLoggedIn || !authStore.getUserInfo) {
//       const { data, error } = await requestStore.get('/user/info');
//       if (error) {
//         console.log(`Auth Error User Information : ${error}`);
//       }
//       var userInfo = data;
//       if (userInfo) {
//         authStore.logIn(userInfo.user);
//         authStore.setUserRoles(userInfo.roles);
//         authStore.setIsClient(userInfo.is_client);
//       }
//     }
//   } catch (e) {
//     console.log('ERROR in Auth middleware' + e);
//   }
// });
