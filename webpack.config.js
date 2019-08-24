const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = ({ mode }) => {
  return {
    mode,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif|svg|webp)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.(TTF|otf)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'public'),
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
        favicon: 'src/images/favicon.ico',
      }),
      new CopyWebpackPlugin([
        {
          context: 'node_modules/@webcomponents/webcomponentsjs',
          from: '**/*.js',
          to: 'webcomponents',
        },
      ]),
    ],
    devtool: mode === 'development' ? 'eval-source-map' : 'source-map',
    devServer: {
      port: 3000,
    },
  }
}
