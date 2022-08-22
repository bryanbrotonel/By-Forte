const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new Dotenv()],
  devServer: {
    static: './dist',
    historyApiFallback: true,
    open: true,
    hot: true,
    liveReload: true,
  },
});
