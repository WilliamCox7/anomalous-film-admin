var path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  entry: [
    './client/index.js'
  ],
  mode: 'development',
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'file-loader'
    }, {
      test: /\.(ttc|ttf|eot|woff|woff2)$/,
      loader: 'file-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".css"]
  }
}
