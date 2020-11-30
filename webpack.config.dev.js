const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackMerge = require('webpack-merge');
const superConfig =  require('./webpack.config');

module.exports = webpackMerge(superConfig , {
    mode: 'development',
    devServer: {
       port: 3000
    },
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
})