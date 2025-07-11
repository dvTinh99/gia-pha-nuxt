// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  plugins: [{ src: '~/plugins/konva', ssr: false, mode: 'client' }],
  build: {
    extend(config){
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
})
