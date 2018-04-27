const MiniCssExtractPlugin = require("mini-css-extract-plugin")
var path = require("path")
var webpack = require("webpack")

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
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    }
  }
}
var styles = {
  entry: "./src/styles/style.scss",
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
}

module.exports = [createConfig("umd"), createConfig("var", "index.var"), styles]
