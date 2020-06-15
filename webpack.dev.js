const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

   module.exports = merge(common, {
     mode: 'development',
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             'style-loader',
             'css-loader'
           ],
         }
       ],
     },
     devServer: {
       contentBase: path.join(__dirname, 'dist'),
       compress: true,
       port: 9000,
       hot: true
     },
 });