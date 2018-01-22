var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var cleanCSS = require('gulp-clean-css')
var del = require('del')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()

var paths = {
  styles: {
    src: 'src/**/*.scss',
    dest: 'public'
  }
};

function clean() {
  return del([ 'assets' ]);
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(paths.styles.dest))
}

function watch() {
  gulp.watch(paths.styles.src, styles)
}

function serve() {
    browserSync.init({
      server: 'public'
    })
  
    browserSync.watch('public/**/*.*').on('change', browserSync.reload)
}
  
exports.serve = serve
exports.clean = clean
exports.styles = styles
exports.watch = watch

var dev = gulp.parallel(serve, watch)
var build = gulp.series(clean, styles)

gulp.task('build', build)

gulp.task('default', dev)
