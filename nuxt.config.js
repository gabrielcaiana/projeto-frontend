export default {
  head: {
    title: 'projeto-quero-educacao',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '~/assets/scss/base.scss',
    '~/assets/scss/font-face.scss',
    '~/components/bosons/utilities/index.scss',
  ],

  plugins: ['~/plugins/featherIcons', '~/plugins/screenListener'],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
  ],

  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? process.env.BASE_URL
        : 'http://localhost:3000',
  },

  pwa: {
    manifest: {
      name: 'Quero Educação',
      short_name: 'Quero Educação',
      lang: 'pt-BR',
    },
  },

  styleResources: {
    scss: ['~/components/bosons/*.scss'],
  },

  build: {
    extractCSS: true,
  },
}
