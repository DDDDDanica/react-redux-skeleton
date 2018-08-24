/* eslint no-console: 0 */
const webpack = require("webpack");
const common = require("./webpack.common.js");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const isLocalBuildProduction =
  typeof process.env.ENVIRONMENT_NAME === "undefined";

const isProduction =
  isLocalBuildProduction || process.env.ENVIRONMENT_NAME !== "development";

const API_VERSION = process.env.NODE_API_VERSION || "/kpis";

console.log("Environment name: ", process.env.ENVIRONMENT_NAME);
console.log(isProduction ? "Production build" : "Development build");

common.devtool = isProduction ? "none" : "cheap-module-eval-source-map";

common.plugins.push(
  new ExtractTextPlugin({
    filename: "[name].css",
    allChunks: true
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(isProduction ? "production" : "development"),
      NODE_API_ENDPOINT: JSON.stringify(API_VERSION)
    }
  })
);

if (isProduction) {
  common.plugins.push(
    new UglifyJSPlugin({
      parallel: true,
      sourceMap: false,
      uglifyOptions: {
        compress: {
          drop_console: true
        },
        output: {
          comments: false
        }
      }
    })
  );
}

module.exports = common;
