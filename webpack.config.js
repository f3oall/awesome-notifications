const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
var path = require("path");

module.exports = [
  createConfig("umd", "index", ["defaults"]),
  createConfig("var", "index.var", ["defaults"]),
  createConfig("umd", "index", ["> 5%", "not ie <= 11"], "modern.js"),
  createConfig("var", "index.var", ["> 5%", "not ie <= 11"], "modern.var.js"),
  {
    entry: "./src/styles/style.scss",
    output: {
      path: path.resolve(__dirname, "./dist"),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new CompressionPlugin(),
    ],
  },
];

function createConfig(target, entry = "index", browsers, filename) {
  if (!filename) filename = `${entry}.js`;
  return {
    entry: `./src/${entry}.js`,
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: filename,
      library: "AWN",
      libraryTarget: target,
    },
    plugins: [new CompressionPlugin()],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: browsers,
                  },
                },
              ],
            ],
          },
          exclude: /node_modules/,
        },
      ],
    },
  };
}
