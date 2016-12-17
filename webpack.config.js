'use strict'
const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlTemplate      = require('html-webpack-template');
const BUILD_DIR         = path.resolve(__dirname, 'dist');
const APP_DIR           = path.resolve(__dirname, 'src');


const config = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: '/js/[name].js',
  },
  cache: true,
  debug: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
         NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),             NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
      }),
    new HtmlWebpackPlugin({
      title: 'Tasks',
      xhtml: true,
      inject: false,
      template: htmlTemplate,
      appMountId: 'root-container'
    }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: true
    })
  ],

  module : {
    include: path.join(__dirname, 'src'),
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src'
      },
      {
        test: /\.mp4$/,
        loader: 'url?limit=10000&mimetype=video/mp4'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(svg|gif|png|jpg)$/,
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
      },
      {
        test: /\.ico$/, loader: 'file-loader?name=/[name].[ext]'
      },
      {
        test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel',
        query:
        {
         presets : ['es2015', 'react']
       }
      },
    ]
  }
};

if (process.env &&
 process.env.NODE_ENV &&
 process.env.NODE_ENV === 'production') {
 const prodPlugins = [
   new webpack.optimize.UglifyJsPlugin({
     compress: {
       warnings: true,
     },
     output: {
       comments: false,
     },
   }),
   new webpack.optimize.CommonsChunkPlugin('/js/common.js'),
 ];

 config.plugins = config.plugins.concat(prodPlugins);

 config.cache = false;
 config.debug = false;
 config.devtool = undefined;
}

module.exports = config;

