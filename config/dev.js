const {merge}= require("webpack-merge");
const common = require("./common");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = merge(common, {
  devtool: "inline-source-map",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: "../dist",
    historyApiFallback: true, //不跳转
    clientLogLevel: "none",
    hot: true,
    // open: false,
    inline: true,
    compress: true,
    port: 9800,
  },
});
