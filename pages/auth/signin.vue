<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-6 text-gray-900">Sign In</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" v-model="email"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" id="password" v-model="password"
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required />
                </div>
                <div v-if="error" class="mb-4 text-red-500 text-sm">
                    {{ error }}
                </div>
                <div class="mb-6">
                    <button type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleSubmit = async () => {

    if(email === '' || password === '') {
        error.value = 'Please fill in all fields.'
        return
    }

    console.log("ERT ", email.value, password.value)
    try {
        const response = await signIn(email.value, password.value)
        console.log("DATA ", response, response.$id)
        if (response.$id) {
            console.log("Account Found: ", response)
            if(!checkUserStatus(response)){
                navigateTo('/auth/verification')                
            }else{
                navigateTo('/dashboard')
            }
        }
    } catch (e) {
        error.value = 'Failed to sign up. Please try again.'
    }
}
</script>