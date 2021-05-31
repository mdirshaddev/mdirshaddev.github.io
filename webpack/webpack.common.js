'use strict'

const { ProgressPlugin } = require('webpack')
const path = require('path')
const WebpackManifest = require('webpack-pwa-manifest')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 1. entry point of our application
  entry: {
    index: path.resolve(__dirname, '../src/index.jsx')
  },
  // 2. we want to see every bits of information that's why verbose
  stats: 'verbose',
  // 3. resolver for identification with the specified files
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss'],
    fallback: { "crypto": false },
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
      '@css': path.resolve(__dirname,'../src/assets/css'),
      '@components': path.resolve(__dirname,'../src/components/components'),
      '@pages': path.resolve(__dirname,'../src/components/pages'),
      '@stories': path.resolve(__dirname,'../src/stories'),
      '@utilities': path.resolve(__dirname, '../src/components/utilities'),
      '@actions': path.resolve(__dirname, '../src/redux/actions'),
      '@reducers': path.resolve(__dirname, '../src/redux/reducers'),
      '@store': path.resolve(__dirname, '../src/redux/store'),
      '@router': path.resolve(__dirname, '../src/router.jsx')
    }
  },
  // 4. module
  module: {
    rules: [
      // javascript support
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      // css support
      {
        test: /\.(css)$/,
        use: [
          MiniCSSExtractPlugin.loader, // extracting to a file with .css
          "css-loader" // loading css files to browser dom
        ]
      },
      // images, icons, svgs, gifs support
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/images",
          esModule: false
        }
      },
      // audios, mp3 support
      {
        test: /\.(aac|mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/audio",
            esModule: false
          }
        }
      },
      // videos, mp4 support
      {
        test: /\.(webm|mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/video",
            esModule: false
          }
        }
      }
    ]
  },
  // 5. Plugins(Very crucial in webpack)
  plugins: [
    // we could have pass progess as an argument within the npm package script
    new ProgressPlugin(),
    // adding manifest as we want our project to be a PWA Web Application
    new WebpackManifest({
      filename: "manifest.json",
      name: 'Md Irshad | Portfolio',
      short_name: 'Md Irshad | Portfolio',
      description: 'A Progressive Web Application based Portfolio to showcase Skills.',
      background_color: '#ffffff',
      crossorigin: 'anonymous',
      publicPath: '/',
      includeDirectory: true,
      icons: [
        //apple compatible icon
        {
          src: path.resolve(__dirname, '../public/assets/icon/quadrous.png'),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join('icons', 'ios'),
          ios: true
        },
        //apple compatible starup large screen icon
        {
          src: path.resolve(__dirname, '../public/assets/icon/quadrousBig.png'),
          size: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup'
        },
        //android compatible icon
        {
          src: path.resolve(__dirname, '../public/assets/icon/quadrous.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('icons', 'android')
        }
      ]
    }),
    // index.html where we will render everything
    new HtmlWebpackPlugin({
      title: 'Md Irshad | Portfolio',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/assets/favicon.png'),
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    // for extracting css to a file
    new MiniCSSExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[name].css"
    })
  ],
  // 6. Our target is an web please 
  target: 'web',
  performance: {
    maxAssetSize: 2500000,
    maxEntrypointSize: 2500000
  }
}