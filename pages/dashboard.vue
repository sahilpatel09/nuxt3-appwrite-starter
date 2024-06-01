<template>
    <div v-if="currentUser">
        Data: {{ currentUser }}
        <button @click="handleLogout">Logout</button>
    </div>
    <div v-else>
        No user found
    </div>
</template>
<script setup>
const currentUser = ref()

onMounted(async ()=>{
    currentUser.value = await getCurrentUser()
})

async function handleLogout(){
    await logOut()
}
</script>