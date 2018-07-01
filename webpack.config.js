const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    entry: './app/main.js',
    output: {
      path: path.resolve(__dirname, './app'),
      filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      contentBase: './app',
      port: 8100
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
    plugins: [
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 0,
        minRatio: 0
      })
    ]
  }