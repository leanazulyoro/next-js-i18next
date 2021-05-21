module.exports = {
  i18n: {
    defaultLocale: 'es-CO',
    locales: ['es-CO', 'es-AR'],
    domains: [
      {
        domain: 'example.com.ar',
        defaultLocale: 'es-AR',
      },
      {
        domain: 'example.com.co',
        defaultLocale: 'es-CO',
      },
    ],
    localeDetection: false,
  },
}