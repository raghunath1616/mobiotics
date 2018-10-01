require("babel-polyfill")
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const publicPath = "/";
const envConstants = require("./envConstants.prod");

module.exports = {
  entry: [
    "babel-polyfill",
    "./src/index.js"
  ],
  output: {
    pathinfo: true,
    filename: "static/js/bundle.js",
    chunkFilename: "static/js/[name].chunk.js",
    publicPath: publicPath
  },
  resolve: {
    modules: ["src", "node_modules"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
      filename: "index.html"
    }),
    new webpack.DefinePlugin(envConstants)
  ]
};
