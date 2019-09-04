const webpack = require("webpack");

const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode:`production`,
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
