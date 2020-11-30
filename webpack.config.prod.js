const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackMerge = require("webpack-merge");
const superConfig = require('./webpack.config');

module.exports = webpackMerge(superConfig ,{
    output: {
        filename: 'main.[contenthash].bundle.js',
        path: __dirname + '/docs'
    },
    mode: 'production',  
    plugins: [ 
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].min.css'
        })
    ]
})