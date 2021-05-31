'use strict'

const path = require('path')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  plugins: [
    new BundleAnalyzer({
      reportFilename: path.resolve(__dirname, '../../report/index.html'),
      reportTitle: 'Quadrous | Analysis',
      analyzerMode: 'static',
      generateStatsFile: false,
      logLevel: 'info'
    })
  ]
}