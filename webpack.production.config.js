const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'helloPage': './src/helloPage.js',
    'imagePage': './src/imagePage.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/'
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function(){
                return [
                  require('precss'),
                  require('autoprefixer')
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'helloPage.html',
      chunks: ['helloPage', 'vendors~helloPage~imagePage'],
      title: 'Hello world',
      template: 'src/page-template.hbs',
      description: 'Some description'
    }),
    new HtmlWebpackPlugin({
      filename: 'imagePage.html',
      chunks: ['imagePage', 'vendors~helloPage~imagePage'],
      title: 'Image page',
      template: 'src/page-template.hbs',
      description: 'Some description'
    })
  ]
}