const path = require('path');
const aliases = require('./aliases');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const babelLoaderConfig = {
  loader: 'babel-loader',
  options: {
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      'react-refresh/babel'
    ],
    presets: [
      '@babel/preset-typescript',
      '@babel/preset-react',
    ]
  }
};

module.exports = {
  mode: 'development',
  entry: [
    // 'webpack-hot-middleware/client',
    path.join(process.cwd(), 'src/playground/index.tsx')
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(process.cwd(), 'dist'),
    // publicPath: '/static/',
    clean: true,
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      ...aliases,
      // 'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.mjs', '.ts', '.tsx', '.wasm'],
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      include: path.join(process.cwd(), 'src/playground'),
      use: [babelLoaderConfig]
    }, {
      test: /\.m?js$/,
      include: path.join(process.cwd(), 'src/playground'),
      use: [babelLoaderConfig]
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
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
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Primordial',
      template: path.join(process.cwd(), 'config/indexTemplate.html'),
      filename: 'index.html',
    }),
    // new RemoveEmptyScriptsPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'primordial.css'
    // })
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 9000,
    hot: true
  },
}