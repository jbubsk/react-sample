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
    lib: './bower_components/',
    dest: {
        app: 'app.js',
        lib: 'libraries.js',
        style: 'style.css',
        distAll: './dist/**'
    },
    dist: './dist/'
};
