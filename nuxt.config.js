export default {
  loading: false,
  loadingIndicator: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    // title: 'qinziceshi',
    title: '你和孩子是哪种缘分?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'http://res.wx.qq.com/open/js/jweixin-1.6.0.js',
        defer: true,
        id: 'jweixin',
        onload: 'window.scriptLoadedJweixin=1'
      }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/wx.client.js',
    '~/plugins/analytics.client.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'autoprefixer': {},
        'postcss-css-variables': {
          variables: {
            green: '#85CCBE'
          }
        },
        'postcss-nested-ancestors': {},
        'postcss-nested': {}
      }
    },
    publicPath: process.env.NODE_ENV === 'production' 
      ? 'http://www.c9-d.com/3li6xun/qinziceshi'
      : ''
  },
  router: {
    base: process.env.NODE_ENV === 'production' 
      ? '/3li6xun/qinziceshi/'
      : ''
  },
  transpile: ['gsap'],
  target: 'static'
}
