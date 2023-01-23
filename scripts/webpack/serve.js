// Core
const webpack = require('webpack');
const DevServer = require('webpack-dev-server'); //https://webpack.js.org/api/hot-module-replacement/
const hot = require('webpack-hot-middleware');

// Config
const webpackConfig = require('./webpack.config.js');

// Constants
const {HOST, PORT, PROJECT_DIST_DIRECTORY} = require('./constants');

// Compiler
const compiler = webpack(webpackConfig());

// Run
const devServerOptions = {
    static: {
        directory: PROJECT_DIST_DIRECTORY,
    },
    compress: true,
    host: HOST,
    port: PORT,
    open: true
};
const server = new DevServer(devServerOptions, compiler);

const runServer = async () => {
    console.log('Starting server...');
    await server.start();
    hot(compiler, {log: false});
};

runServer();