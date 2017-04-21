const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: "./index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/'),
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [__dirname],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
       test: /\.scss$/,
       use:  ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: ["css-loader", "sass-loader"]
        }),
    },
    {
       test: /\.css$/,
       use:  ExtractTextPlugin.extract({
         use: [{
          loader: 'css-loader',
          options: { minimize: true }
        }]
      }),
    }
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.scss']
  },
  devServer: {
    contentBase: path.join(__dirname, "../public/"),     
    compress: true,
    port: 4000
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css', allChunks: true})
  ],
  devtool: 'source-map'
};