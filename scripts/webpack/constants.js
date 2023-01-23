const {resolve} = require('path');
const {path: PROJECT_ROOT} = require('app-root-path');

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.PROJECT_DIST_DIRECTORY = resolve(PROJECT_ROOT, './dist');
exports.PROJECT_PUBLIC_DIRECTORY = resolve(PROJECT_ROOT, './static/');
exports.CLEAN_PATTERNS = resolve(PROJECT_ROOT, './dist**/*');
exports.INDEX_ENTRY_FILE = resolve(PROJECT_ROOT, './src/index.js');
exports.HOST = 'localhost';
exports.PORT = 80;

