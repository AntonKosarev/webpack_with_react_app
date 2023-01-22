const {resolve} = require('path');
const {path: PROJECT_ROOT} = require('app-root-path');

exports.PROJECT_DIST_DIRECTORY = resolve(PROJECT_ROOT, './dist');
exports.PROJECT_PUBLIC_DIRECTORY = resolve(PROJECT_ROOT, './static/');
exports.HOST = 'localhost';
exports.PORT = 80;

