const path = require("path");

module.exports = {
  mode: "development",
  entry: "./result/tsc/index.js",
  target: "node",
  resolve: {
    alias: {
      "@routes": path.resolve(__dirname, "result/tsc/routes"),
    },
    fallback: {
      http: require.resolve("stream-http"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      os: require.resolve("os-browserify/browser"),
      url: require.resolve("url"),
      path: require.resolve("path-browserify"),
      zlib: require.resolve("browserify-zlib"),
      util: require.resolve("util"),
    },
  },
  output: {
    path: path.resolve(__dirname, "result/build"),
    filename: "index.js",
  },
  devServer: {
    port: 8080,
  },
};
