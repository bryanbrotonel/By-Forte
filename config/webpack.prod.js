const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/static' }],
    }),
  ],
});
