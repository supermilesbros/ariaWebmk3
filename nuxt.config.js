export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Aria Diagnostiscs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
    script: [
      { src: 'https://assets.calendly.com/assets/external/widget.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/scss/style.scss'],

  router: {
    linkExactActiveClass: 'active-link',
    base: '/'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-awesome-swiper.js', '~/plugins/vuejs-paginate.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    // 'nuxt-lazy-load'
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: '595764711058854',
      disabled: false
    }]
  ],
  googleAnalytics: {
    id: [
      'UA-189379505-1',
      'G-2M90197RZJ'
    ]
  },

  styleResources: {
    scss: ['assets/scss/_variables.scss']
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
