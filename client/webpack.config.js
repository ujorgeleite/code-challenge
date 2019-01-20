const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles.css');
const extractCSSVendors = new ExtractTextPlugin('vendors.css');

module.exports = {
  entry: {
  	bundle: __dirname + '/entry.js',
    vendor: ['angular', 'angular-ui-router', 'bootstrap/dist/js/bootstrap']
  },
  output: {
  	path: __dirname + '/compiled',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        loaders: extractCSS.extract(["css-loader", "less-loader"])
      },
      {
        test: /node_modules.*\.css$/,
        loaders: extractCSSVendors.extract(["css-loader"])
      },
      { 
        test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
        loader: "url-loader"
      },
      { test: /\.html$/, loader: "raw-loader" },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "stage-2"],
          plugins: ['babel-root-slash-import']
        }
      }
    ]
  },
  plugins: [
    extractCSSVendors,
    extractCSS,
    new HtmlWebpackPlugin({template: './client/src/index.html'}),
    new webpack.optimize.CommonsChunkPlugin({
    	names: ['vendor']
    }),
    new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
  ],
  node: {
    fs: "empty"
  }
};