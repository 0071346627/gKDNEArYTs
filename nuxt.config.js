import pkg from './package'

const nuxtConfig = {
  mode: 'universal',
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Manifest https://developer.mozilla.org/en-US/docs/Web/Manifest
  */
  manifest: {
    name: 'My Weather',
    lang: 'en',
    short_name: 'My Weather',
    start_url: '.',
    display: 'standalone',
    background_color: '#fff',
    description: 'A simply readable weather app.'
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/index.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/global-components.js'],
  /*
  ** Loading bar colour
  */
  loading: { color: 'lime' },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    'nuxt-svg-loader'
  ],
  router: {
    linkExactActiveClass: 'is-active'
  },
  // Doc: https://axios.nuxtjs.org/usage
  axios: {
    proxy: true
  },
  proxy: {
    '/darksky/': {
      target: 'https://api.darksky.net/',
      pathRewrite: { '^/darksky/': '' }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default nuxtConfig
