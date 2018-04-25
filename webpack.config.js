const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    index: "./src/index/index.js",
    pageOne: "./src/page1/index.js",
    pageTwo: "./src/page2/index.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist/"
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          interpolate: "require"
        }
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /common/, // you may add "vendor.js" here if you want to
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index/index.html",
      filename: "index.html",
      inject: true,
      hash: true,
      minify: true,
      chunks: ["vendor", "index"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/page1/index.html",
      filename: "page1.html",
      inject: true,
      hash: true,
      minify: true,
      chunks: ["vendor", "pageOne"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/page2/index.html",
      filename: "page2.html",
      inject: true,
      hash: true,
      minify: true,
      chunks: ["vendor", "pageTwo"]
    })
  ],
  mode: "none" // webpack --mode=production
  // mode: "production"
  // mode: 'development'
};

module.exports = config;
