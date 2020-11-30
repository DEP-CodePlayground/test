const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'main.bundle.js',
        path: __dirname + '/dist',
        publicPath: '',
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg|woff|woff2|eot|ttf|otf)/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
}