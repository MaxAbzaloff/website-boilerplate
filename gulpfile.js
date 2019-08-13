const {
  src,
  dest,
  watch,
  series,
  parallel,
  task,
} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const inject = require('gulp-inject');

const PATHES = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'public'
  },
  html: {
    src: 'src/index.html',
    dest: 'public',
  },
};

function clean() {
  return del([ PATHES.styles.dest ]);
}

function styles() {
  return src(PATHES.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('main.min.css'))
    .pipe(dest(PATHES.styles.dest));
}

function watchStyles() {
  watch(PATHES.styles.src, styles);
}

function html() {
  return src(PATHES.html.src)
  .pipe(dest(PATHES.html.dest))
  .pipe(src(PATHES.html.dest))
  .pipe(
    inject(
      src([ PATHES.styles.dest + '/**/*.css' ], { read: false }),
      { relative: true },
    )
  )
  .pipe(dest(PATHES.html.dest))
}

function watchHtml() {
  watch(PATHES.html.src, html);
}

function serve() {
  browserSync
    .init({
      server: 'public'
    });
  
  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
}

const build = series(clean, styles, html);
const dev = series(
  build,
  parallel(serve, watchStyles, watchHtml),
);

task('build', build);
task('serve', dev);

task('default', dev);
