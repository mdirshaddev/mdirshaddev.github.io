'use strict'

const { HotModuleReplacementPlugin  } = require('webpack')
const path = require('path')
const DotEnv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: 'static/js/[fullhash:8].bundle.js',
    chunkFilename: 'chunk-[name].[fullhash:4].js'
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    historyApiFallback: true,
    port: 7000,
    open: false,
    hot: true,
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log('Listening on port:', port);
    },
    overlay: {
      warnings: true,
      errors: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    //hot module webpack plugin
    new HotModuleReplacementPlugin(),
    //loading .env file in the runtime
    //so that we can access env variables it in react
    new DotEnv({
      path: path.resolve(__dirname, '../.env')
    }), // we are loading env variables in the runtime of webpack build
    new TerserPlugin({
      terserOptions: {
        keep_classnames: true,
        keep_fnames: true
      }
    })
  ]
}