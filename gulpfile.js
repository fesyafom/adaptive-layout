'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/test'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});

