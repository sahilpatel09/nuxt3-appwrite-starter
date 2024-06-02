<template>
    <div v-if="currentUser">
        Data: {{ currentUser }}
        <button @click="handleLogout">Logout</button>
        <div v-if="user">
            {{ user }}
        </div>
        <div v-else>
            No store user found.
        </div>
    </div>
    <div v-else>
        No user found
    </div>
</template>
<script setup>
import { useUserStore } from '~/stores/user';

definePageMeta({
  middleware: ['auth'],
});

const currentUser = ref()
const { user } = useUserStore()

onMounted(async () => {
    currentUser.value = await getCurrentUser()
})

async function handleLogout() {
    await logOut()
}
</script>