const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = {
  optimization: {
    usedExports: true,
  },
  entry: {
    app: './src/index.tsx',
  },
  resolve: {
    modules: [APP_DIR, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        exclude: /\.inline.svg$/,
      },
      {
        test: /\.inline.svg$/,
        issuer: /\.(tsx|ts|js)?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'By Forte',
      template: './resources/index.html',
      filename: './index.html',
      inject: true,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyURLs: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new Dotenv(),
    new FaviconsWebpackPlugin('./src/static/assets/images/favicon.png'),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
};
