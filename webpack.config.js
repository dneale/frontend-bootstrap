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
                  presets: ['es2015', 'stage-0', 'react']
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
