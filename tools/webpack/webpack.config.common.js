import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const appPath = path.resolve(__dirname, '../..');
const isProd = process.env.NODE_ENV === 'production';

export default {
  context: appPath,
  resolve: {
    extensions: ['*', '.mjs', '.mts', '.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      moment$: 'moment/moment.js',
    }
  },
  target: 'web',
  output: {
    path: path.resolve(appPath, '.tmp/public'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpe?g|gif|png|ico|eot|svg|woff|woff2|[ot]tf|wav|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProd ? '[name].[contenthash].[ext]' : '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('cssnano'),
                require('autoprefixer'),
              ],
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(appPath, 'assets', 'styles')]
              },
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  }
};
