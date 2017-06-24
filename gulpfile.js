var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    babel = require('gulp-babel');

    gulp.task('default', function() {
      gulp.start('styles');
    });

    gulp.task('styles', function() {
      return gulp.src('./game/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./game/css'))
        .pipe(browserSync.reload({
          stream: true
        }))
    });

    gulp.task('browserSync', function() {
      browserSync.init({
        server: {
          baseDir: 'game'
        },
      })
    })

    gulp.task('watch',['browserSync', 'styles'], function() {
      gulp.watch('game/sass/**/*.sass', ['styles']);
      gulp.watch('game/index.html', browserSync.reload);
      gulp.watch('game/js/app.js', browserSync.reload);
    });
