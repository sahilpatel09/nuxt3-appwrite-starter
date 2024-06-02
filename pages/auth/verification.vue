<template>
    <div>
        Verification...
        <button @click="sendVerification">Click to receive email verification link</button>
    </div>
</template>
<script setup>
const router = useRouter()
// https://9000-idx-n3-appwrite-starter-1717206831772.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev/auth/verification?userId=665aa363aedb6b37ad4a&secret=5e2d8ec927c24530148534ce64e71f09a0b393fee022f6d85117ea7641884d1bba4cbe6c90b368f6b50206c1ed9231d4f964bef9047c949b57bbde2d4f1bad9617a7d24f9d9a2c265794f7bff6d1d61f002dbf45daa92e37d5e092a29b44ab2c140e12e75f518c2f520ef8f07d5b037840f3f6566786f0910ce9cf25ae4f74ab&expire=2024-06-01+05%3A28%3A33.112

async function sendVerification() {
    try {
        const data = await userEmailVerification()
        console.log("VERIFICATION ", data)
    } catch (e) {
        console.log("Failed to send verification "+e)
    }
}

onMounted(async () => {
    const { userId, secret } = router.currentRoute.value.query
    console.log(userId, secret)

    if (userId && secret) {
        const data = await updateUserEmailVerification(userId, secret)
        console.log("VERIFIED ", data)
    }else{
        await sendVerification();
    }
})
</script>