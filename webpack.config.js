const ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require("path")
var webpack = require("webpack")

module.exports = [
  {
    entry: ["./src/index.js"],
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "index.js",
      library: "AWN",
      libraryTarget: "umd"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.js$/,
        minimize: true
      })
    ]
  },
  {
    entry: ["./src/index.js"],
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "index.var.js",
      library: "AWN",
      libraryTarget: "var"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.js$/,
        minimize: true
      })
    ]
  },
  {
    entry: ["./src/styles/style.scss"],
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "style.js",
      library: "AWN",
      libraryTarget: "var"
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              { loader: "css-loader", options: { minimize: true } },
              "sass-loader"
            ]
          })
        }
      ]
    },
    plugins: [new ExtractTextPlugin("style.css")]
  }
]
