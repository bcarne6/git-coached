var gulp = require('gulp');
var babel = require('gulp-babel');
const minify = require('gulp-minify');

/**
 * Copy sounds
 */
gulp.task('sounds', function() {
    return gulp.src("src/assets/sounds/*")
        .pipe(gulp.dest("app/assets/sounds"));
})

/**
 * Copy assets
 */
gulp.task('assets', gulp.series('sounds'));

/**
 * Copy and minify css
 */
gulp.task('minify-css', function() {
    return gulp.src("src/css/*.css")
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest("app/css"));
})

/**
 * Copy html files
 */
gulp.task('html', function() {
    return gulp.src("src/html/*.html")
        .pipe(gulp.dest("app/html"));
})

/**
 * Minify js files
 */
gulp.task('minify-js', function() {
    return gulp.src("src/js/*.js")
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest("app/js/"))
});

/**
 * Convert jsx to js and minify
 */
gulp.task('babel', function() {
    return gulp.src("src/jsx/*.jsx")
        .pipe(babel())
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest("app/js/"));
});

/**
 * Copy vendor js scripts
 */
gulp.task('vendor', function() {
    return gulp.src("src/vendor/*.js")
        .pipe(gulp.dest("app/vendor/"));
});

/**
 * Build with all src minified
 */
gulp.task('build', gulp.series('assets', 'minify-css', 'html', 'minify-js', 'babel', 'vendor'));