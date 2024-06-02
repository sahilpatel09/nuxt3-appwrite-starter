export const useUserStore = defineStore('user', () => {
    const user = ref(null)

    function setUser(u: any) {
      user.value = u
    }
    
    return { user }
  })