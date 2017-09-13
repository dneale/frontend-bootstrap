var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  module: {
      loaders: [
          {
              test: /\.(js)$/,
              loader: 'babel-loader',
              query: {
                  presets: ['stage-0', 'es2015', 'react']
              }
          }
      ]
  }, resolve: {
      extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
  ]
};
