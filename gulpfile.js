'use strict';
 
var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default', function() {
    return gulp.src('./data/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
