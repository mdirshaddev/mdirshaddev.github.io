'use strict'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const CssMinimzerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'static/js/[name].[fullhash:4].chunk.js',
    chunkFilename: 'chunk-[name].[fullhash:4].js'
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
          priority: 1
        }
      }
    },
    minimize: true,
    minimizer: [
      new CssMinimzerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}