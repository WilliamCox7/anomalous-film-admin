const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/index.js'
  ],
  mode: 'production',
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: [".js", ".css"]
  }
}
