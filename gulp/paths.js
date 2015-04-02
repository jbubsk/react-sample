var path = require('path');

var appRoot = './src/';

module.exports = {
    root: appRoot,
    src: {
        app: appRoot + 'application.js',
        js: appRoot + '**/*.js',
        html: ['./index.html'],
        scss: 'styles/**/*.scss',
        style: 'styles/'
    },
    dest: {
        app: 'app.js',
        style: 'style.css',
        distAll: 'dist/**'
    },
    dist: './dist/'
};
