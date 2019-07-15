import { join } from 'path';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const configuration = {
  entry: join(__dirname, 'src', 'index.js'),
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js',
  },
  stats: 'errors-only',
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new Dotenv({
      safe: true,
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: join(__dirname, 'public', 'index.html'),
    })
  ],
  devServer: {
    port: 5000,
  },
};

export default configuration;