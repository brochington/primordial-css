const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  entry: [
    path.join(process.cwd(), 'src/css/primordial.css')
  ],
  output: {
    filename: 'delete-me.js',
    path: path.join(process.cwd(), 'dist'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              postcssPresetEnv({ stage: 0 }),
            ]
          }
        }
      }]
    }]
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'primordial.css'
    })
  ]
}