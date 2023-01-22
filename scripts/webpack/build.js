// Core
const webpack = require('webpack');
// const chalk = require('chalk');// console painting

console.log('run build.js');
// console.log(chalk.whiteBright('run build.js'));

// Config
const getConfig = require('./webpack.config');

// Compiler
const compiler = webpack(getConfig());

// Run
compiler.run((error, stats) => {
    if (error) {
        // configuration erorrs
        console.error(error.state || error);
        if (error.details) {
            console.log(error.details);
        }
        return null;
    }
    const info = stats.toString({
        colors: true,
        modules: false,
        hash: true,
        assets: true,
        // children: false,
        // chunks: false,
        // chunkModules: false
    });

    // console.log(chalk.greenBright('build completed'));
    console.log('build completed');
    console.log(info);

    if (stats.hasErrors()) {
        // Compilation errors
        // console.log(chalk.yellowBright('Error!'));
        console.log('Error!');
        console.error(info);
    }
    if (stats.hasWarnings()) {
        // Warning during compilation
        // console.log(chalk.greenBright('Warning!'));
        console.log('Warning!');
        console.warn(info);
    }
});