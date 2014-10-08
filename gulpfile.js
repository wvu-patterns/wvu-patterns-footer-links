'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    inject = require("gulp-inject"),
    clean = require("gulp-clean"),
    scsslint = require('gulp-scss-lint');

gulp.task('clean', function () {
  return gulp.src('./build/*', { read: false })
    .pipe(clean());
});

gulp.task('scss-lint', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }));
});

gulp.task('rename-scss-partial',function(){
  return gulp.src('./src/scss/_wvu-footer__links.scss')
    .pipe(rename('styles.scss'))
    .pipe(gulp.dest('./build/scss/'));
});

gulp.task('compile-css', ['rename-scss-partial'], function(){
  return gulp.src('./build/scss/*.scss')
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'expanded'
    }))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true }))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('copy-test',function(){
  return gulp.src('./src/test/index.html')
    .pipe(gulp.dest('./build/'))
})

gulp.task('inject-css', ['scss-lint','copy-test','compile-css'], function () {
  var target = gulp.src('./build/index.html');
  target.pipe(inject(gulp.src(['./build/css/*.css'], {read: false}), {relative: true}))
    .pipe(gulp.dest('./build/'));
    
  return target.pipe(inject(gulp.src(['./src/html/*.html']), {
    starttag: '<!-- inject:{{ext}} -->',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest('./build/'))
});

gulp.task('build',['clean','inject-css'],function(){
  return
});

gulp.task('test',['scss-lint']);
gulp.task('ci',['build']);