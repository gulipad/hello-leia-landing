module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hello Leia. Tech + Humans',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description',
        name: 'Hello Leia. Building the future',
        content: 'Home of Hello Leia. A non-commercial exploration of Technology and Design for everyone',
        keywords: 'blockchain, cryptocoins, machine learning, chatbots, messenger, español'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedin', 'faGithub', 'faMediumM']
      }
    ]
  },
  modules: [
    ['nuxt-buefy', {
      materialDesignIcons: false}],
    ['nuxt-fontawesome']
  ],

  plugins: [
    {src: '~/plugins/vue-typer', ssr: false},
    {src: '~/plugins/vue-smooth-scroll', ssr: false},
    {src: '~/plugins/aos', ssr: false}
  ]

}
