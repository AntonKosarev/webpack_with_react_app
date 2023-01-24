const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main: [
            // 'webpack-hot-middleware/client?reload=true',
            path.resolve(__dirname, './src/index.js'),
        ]
    },
    output: {
        // path: path.resolve(__dirname, './dist/'),
        // publicPath: path.resolve(__dirname, './static/')
        // This parameters fail the path in dist/index.html. Last slash is different from previous
        // TO DO resolve that issue
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        static: {directory: path.join(__dirname, './dist')}, // updated version
        open: true,
        compress: true,
        hot: true,
        host: 'localhost',
        port: 8080,
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './static/template.html'),
            title: 'WEBPACK ',
            favicon: path.resolve(__dirname, './static/favicon.ico'),
        }),
        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            // JavaScript
            {
                // test: /\.js$/,
                // exclude: /node_modules/,
                // use: ['babel-loader'],
                // Если вы настраиваете TypeScript-проект, то вместо babel-loader следует использовать
                // typescript-loader для всех JavaScript-файлов, нуждающихся в транспиляции.
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'static/resource',
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'static/inline',
            },
        ],
    },
};