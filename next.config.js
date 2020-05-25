const { PHASE_PRODUCTION_BUILD } = require('next/constants')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = phase => {
  const isProd = phase === PHASE_PRODUCTION_BUILD
  return withCSS(
    withSass({
      typescript: {
        ignoreDevErrors: true,
      },
      generateEtags: false,
      env: {
        API_URL: 'https://v3.football.api-sports.io',
        x_rapidapi_key: '4a197632a91d02614fba3dbaa524013e'
      },

    }),
  )
}
