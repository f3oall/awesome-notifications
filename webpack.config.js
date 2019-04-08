const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var path = require("path")
var webpack = require("webpack")

module.exports = [createConfig("umd"), createConfig("var", "index.var"), {
  entry: "./src/styles/style.scss",
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
    }]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
}]

function createConfig(target, entry = "index") {
  return {
    entry: `./src/${entry}.js`,
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: `${entry}.js`,
      library: "AWN",
      libraryTarget: target
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }]
    }
  }
}
