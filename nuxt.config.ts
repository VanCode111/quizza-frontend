import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-socket-io',
  ],
  io: {
    // module options
    sockets: [{
      name: 'main',
      default: true,
      // url: 'http://localhost:3000',
      url: 'https://quizza-pd-api.herokuapp.com',
    }],
    server: {
      port: 3000
    }
  },
  publicRuntimeConfig: undefined,
  privateRuntimeConfig: undefined,
  css: [
    'vuetify/lib/styles/main.sass',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  ssr: false,
  target: 'static'
});
