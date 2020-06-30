const merge = require("webpack-merge");
const os = require("os");
const common = require("./webpack.common.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = merge(common, {
  devtool: "inline-source-map",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true, //不跳转
    clientLogLevel: "none",
    hot: true,
    // open: false,
    inline: true,
    compress: true,
    port: 9874,
  },
});
