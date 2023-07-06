const path = require("path");

module.exports = {
  mode: "development",
  entry: "./result/tsc/index.js",
  target: "node",
  resolve: {
    alias: {
      "@models": path.resolve(__dirname, "result/tsc/models"),
      "@repositories": path.resolve(__dirname, "result/tsc/repositories"),
      "@routes": path.resolve(__dirname, "result/tsc/routes"),
      "@services": path.resolve(__dirname, "result/tsc/services"),
      "@utils": path.resolve(__dirname, "result/tsc/utils"),
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
};
