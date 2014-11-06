'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    del = require("del"),
    runSequence = require('run-sequence'),
    scsslint = require('gulp-scss-lint'),
    handlebars = require('gulp-compile-handlebars');

gulp.task('clean', function(cb){
  del([
    'build/**/*'
  ], cb);
});

gulp.task('scss-lint', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }))
    .pipe(scsslint.failReporter());
});

gulp.task('compile-scss', function(){
  return gulp.src('./src/scss/_wvu-footer__links.scss')
    .pipe(rename('wvu-footer__links.scss'))
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'expanded'
    }))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true }))
    .pipe(gulp.dest('./build/css/'));
});


gulp.task('compile', ['scss-lint','compile-scss'], function () {
  var templateData = require('./src/handlebars/data/_wvu-footer__links.json');
  var options = {
    batch : [
      './src/handlebars'
    ]
  }
  return gulp.src('./src/handlebars/test/index.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./build'));
});

gulp.task('build',function(){
  runSequence('clean','compile');
});


gulp.task('test',['build']);
gulp.task('ci',['scss-lint']);
