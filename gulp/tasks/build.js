var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    paths = require('../paths'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    reactify = require('reactify'),
    browserify = require('browserify');

/**** JS build ****/

gulp.task('build-js', function () {
    return browserify(paths.src.app)
        .transform(reactify)
        .bundle()
        .pipe(source(paths.dest.app))
        .pipe(gulp.dest(paths.dist));
});

/**** Stiles build ****/

gulp.task('build-styles', function (done) {
    gulp.src(paths.src.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.dist))
        .on('end', done);
});


// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        ['build-js', 'build-styles'],
        callback
    );
});
