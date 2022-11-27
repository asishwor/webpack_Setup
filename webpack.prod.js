const path = require("path");
const prod = require("./webpack.common");
const { merge } = require("webpack-merge");
module.exports = merge(prod, {
  mode: "production",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
});
