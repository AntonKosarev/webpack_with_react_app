const {HotModuleReplacementPlugin} = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {PROJECT_DIST_DIRECTORY, PROJECT_PUBLIC_DIRECTORY, INDEX_ENTRY_FILE, HOST, PORT, CLEAN_PATTERNS} = require('./constants');

module.exports = (env, options) => {
    return {
        // mode: 'development',
        // mode: 'production',
        mode: 'none',
        devtool: false,
        entry: [
            'webpack-hot-middleware/client?reload=true&timeout=2000',
            INDEX_ENTRY_FILE,
        ],
        output: {
            path: PROJECT_DIST_DIRECTORY,
            filename: 'bundle.js',
            publicPath: PROJECT_PUBLIC_DIRECTORY
        },
        devServer: {
            static: {
                directory: PROJECT_DIST_DIRECTORY,
            },
            host: HOST,
            port: PORT,
            historyApiFallback: true,
            // compress: false
        },
        plugins: [
            // new webpack.ProgressPlugin(),
            new CleanWebpackPlugin({
                verbose: true,
                cleanOnceBeforeBuildPatterns: [
                    // CLEAN_PATTERNS,
                ],
            }),
            new htmlWebpackPlugin({
                template: './static/template.html',
                title: 'WEBPACK ',
                favicon: './static/favicon.ico',

            }),
            new HotModuleReplacementPlugin(),
        ],
    };
}