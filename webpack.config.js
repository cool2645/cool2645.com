const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
      'index': './src/js/index.js',
  },
  output: {
    path: __dirname + '/public',
    filename: "./js/[name].[hash].js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,loader: "babel-loader",exclude: /(node_modules|bower_components)/ },
      { test:/\.(s*)css$/, use: ExtractTextPlugin.extract({ fallback:'style-loader', use:['css-loader','sass-loader'], publicPath: "../" })},
      { test: /\.(png|jpe?g|gif|svg)$/,loader: 'file-loader',options: { name: 'img/[name].[hash].[ext]' } },
      { test: /\.(eot|ttf|woff|woff2)$/,loader: 'file-loader',options: { name: 'font/[name].[hash].[ext]' } },
      { test: /\.md$/,loader: 'file-loader',options: { name: 'static/[name].[hash].[ext]' } },
      { test: /\.html$/, loader: "html-loader?interpolate&minimize&removeComments" }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin("stylesheet/app.bundle.[hash].css", {allChunks: true}),
    new webpack.DefinePlugin({
     'process.env.NODE_ENV': '"production"'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ['popper.js', 'default'],
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require']
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: __dirname + "/src/tmpl/index.html",
      inject: true,
      chunks: ['index']
    }),
  ],
  devtool:'eval',
  devServer: {
    contentBase: "./public/",
    historyApiFallback: true,
    inline: true
  },
};
