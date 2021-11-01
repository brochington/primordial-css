const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const postcssPresetEnv = require('postcss-preset-env');

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
  entry: [
    path.join(process.cwd(), 'src/css/primordial.css'),
    path.join(process.cwd(), 'src/js/primordial.ts'),
  ],
  output: {
    filename: 'primordial.js',
    path: path.join(process.cwd(), 'dist'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      include: path.join(process.cwd(), 'src/js'),
      use: [babelLoaderConfig]
    }, {
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