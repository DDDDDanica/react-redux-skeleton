/* eslint no-console: 0 */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Autoprefixer = require("autoprefixer");
const path = require("path");

const common = {
    entry: {
        app: ["babel-polyfill", "./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        sourceMapFilename: "[name].map.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "public"),
        port: 9000,
        historyApiFallback: true
    },
    devtool: "source-map",
    resolve: {
        alias: {
            actions: path.resolve(__dirname, "src/actions"),
            components: path.resolve(__dirname, "src/components"),
            api: path.resolve(__dirname, "src/utils/api/api.endpoints"),
            constant: path.resolve(__dirname, "src/utils/constant"),
            utils: path.resolve(__dirname, "src/utils/utils")
        }
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [Autoprefixer]
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.(eot|otf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    limit: 50000,
                    prefix: "font",
                    name: "[hash].[ext]",
                    outputPath: "assets/fonts/"
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: "url-loader?hash=sha512&digest=hex&name=[hash].[ext]"
            },
            {
                test: /\.svg$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.ico",
            inject: "body"
        })
    ]
};

module.exports = common;
