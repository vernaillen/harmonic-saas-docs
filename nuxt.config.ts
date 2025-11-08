export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', 'nuxt-studio'],
  studio: {
    route: '/en/_studio',
    repository: {
      provider: 'github',
      owner: 'vernaillen',
      repo: 'harmonic-saas-docs',
      branch: 'main',
      rootDir: ''
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }],
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root'
    },
    strategy: 'prefix_except_default'
  },
})
