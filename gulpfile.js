
var gulp = require('gulp'),
    notify = require("gulp-notify"),
    concatCSS = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    jade = require('gulp-jade'),
    rename = require("gulp-rename"),
    sass = require('gulp-sass');

// css

gulp.task('css', function () {
  gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concatCSS('main.css'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('dist/css/'))
    .pipe(notify("All right!"));
});

// jade

gulp.task('template', function() {
  gulp.src('*.jade')
    .pipe(jade({
      pretty:true
    }))
    .pipe(gulp.dest('dist/'));
});

// watch

gulp.task('watch', function() {
  gulp.watch("scss/*.scss", ['css']);
  gulp.watch("*.jade", ['template']);
  gulp.watch("includes/*.jade", ['template']);
});

// default

gulp.task('default', ['template', 'css', 'watch']);