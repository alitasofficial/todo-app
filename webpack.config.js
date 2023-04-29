const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main[contenthash].js", // contenthash is a hash of the file contents
    clean: true, // cleans the dist folder before each build
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map", // allows us to see the original source code in the browser
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true, // opens browser window automatically
    hot: true, // automatically refreshes browser when code changes
    compress: true, // compresses files
    historyApiFallback: true, // History API fallback to index.html. When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses. For more info => https://developer.mozilla.org/en-US/docs/Web/API/History
  },
  module: {
    // loaders
    rules: [
      {
        // sass loader
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // babel loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // babel options
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // file loader
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // html webpack plugin
    new HtmlWebpackPlugin({
      title: "Todo App",
      filename: "index.html",
      template: path.resolve(__dirname, "src", "template.html"),
    }),
  ],
};
