// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  runtimeConfig: {
    public: {
      backendAPIBase: process.env.APPWRITE_CLOUD_BASE_URL,
      backendProjectId: process.env.APPWRITE_PROJECT_ID,
    }
  }
})
