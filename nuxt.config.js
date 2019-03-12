const pkg = require('./package')


module.exports = {
  mode: 'universal',
  server: {
    port: 3001, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  serverMiddleware: ['~/api/index.js'],

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather+Sans:300,800|Playfair+Display:400,700' },
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.26/js/uikit.min.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading:  {
        color: 'red',
        height: '5px'
    },

  /*
  ** Global CSS
  */
  css: ['uikit/dist/css/uikit.css', '@/assets/style.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/uikit.js', ssr: false },{ src: '~/plugins/global.js', ssr: false },
  { src: '~/plugins/vuemodal.js'}, {src: '~/plugins/vue2-filters.js', ssr: false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'https://api.privadosvip.cl'
    // See https://github.com/nuxt-community/axios-module#options
  },

  auth: {
    // Options
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/local', method: 'post', propertyName: 'jwt' },
          register: { url: '/auth/local/register', method: 'post'},
          user: { url: '/users/me', method: 'get', propertyName: null},
          logout: null
        },
         tokenRequired: true,
         tokenType: 'bearer',
      }
    },
    redirect: {
      logout: '/',
      login: '/login',
      home: '/panel'
    }
  },

  router: {
  middleware: ['auth']
},

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vuejs-datepicker'],
    extend(config, ctx) {

    }
  }
}
