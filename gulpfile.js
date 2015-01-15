var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src('Date.toW3CString.js')
        .pipe(sourcemaps.init())
        .pipe(concat('Date.toW3CString.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.', { sourceRoot: '.' }))
        .pipe(gulp.dest('.'));
});
