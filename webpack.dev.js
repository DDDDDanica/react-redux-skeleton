/* eslint no-console: 0 */
const webpack = require("webpack");
const common = require("./webpack.common.js");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const KPIS_ENDPOINT = "http://www.google.com"; // TODO: Change to BE endpoint

const KPIS_ENDPOINT_CONFIG = {
  target: KPIS_ENDPOINT,
  secure: true,
  changeOrigin: true
};

common.devtool = "cheap-module-eval-source-map";
common.devServer.proxy = {};
common.devServer.proxy[`/user`] = KPIS_ENDPOINT_CONFIG;
common.plugins.push(
  new StyleLintPlugin(),
  new ExtractTextPlugin({
    filename: "[name].css",
    allChunks: true,
    disable: true
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development")
    }
  })
);
module.exports = common;
