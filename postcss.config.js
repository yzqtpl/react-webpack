module.exports = {
  plugins: [
    require('autoprefixer')({
      "overrideBrowserslist": [
        "> 1%",
        "last 2 versions",
        "not ie <= 8",
        "ios >= 8",
        "android >= 4.0"
      ]
    })
  ]
};