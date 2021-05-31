'use strict'

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    '@tailwindcss/jit': {},
    autoprefixer: {},
    'postcss-map-get': {},
    'postcss-advanced-variables': {},
    'postcss-nested': {},
    'postcss-discard-comments': {}
  },
};