export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', 'nuxt-studio'],
  studio: {
    route: '/admin',
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
  },
})
