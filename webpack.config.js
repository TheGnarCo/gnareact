const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)|(\.test\.js$)/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: [
            { loader: 'css-loader',
              query: {
                minimize: true
              }
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
            { loader: 'import-glob-loader' }
          ]
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename: "bundle.css"
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
    ],
  },
};
