const nextConfig = {
  trailingSlash: true,
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { preload: false, fallback: ['sans-serif'], weight: ['400', '500', '700'] } }],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    loader: 'akamai',
    path: 'https://waaave.me/',
  },
}

module.exports = nextConfig
