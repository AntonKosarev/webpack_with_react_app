const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {PROJECT_DIST_DIRECTORY, PROJECT_PUBLIC_DIRECTORY} = require('./constants');

module.exports = (env, options) => {
    return {
        // mode: 'development',
        // mode: 'production',
        mode: 'none',
        devtool: false,
        devServer: {
            static: {
                directory: PROJECT_DIST_DIRECTORY,
            },
            host: 'localhost',
            port: 8080,
            historyApiFallback: true,
            // compress: false
        },
        output: {
            path: PROJECT_DIST_DIRECTORY,
            filename: 'bundle.js',
            publicPath: PROJECT_PUBLIC_DIRECTORY
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './static/template.html',
                title: 'WEBPACK ',
                favicon: './static/favicon.ico',

            }),
            // new CleanWebpackPlugin(),
        ],
    };
}