const _HtmlWebpackPlugin = require("html-webpack-plugin");
// const _StyleLintPlugin = require("stylelint-webpack-plugin");
// const _OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const cssnano = require("cssnano");

const path = require("path");



const HtmlWebpackPlugin = new _HtmlWebpackPlugin(
  {
    minify: false,
    title: "webpackinit",
    filename: "index.html",
    template: "public/index.html"
  }
);
const jsLoader={
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: `babel-loader`
  }
};

const xmlLoader={
  test: /\.xml$/,
  use: [`xml-loader`]
}
module.exports = {
  HtmlWebpackPlugin
};
