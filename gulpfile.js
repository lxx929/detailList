const gulp = require('gulp');
const scss = require('gulp-sass');
const server = require('gulp-webserver');

gulp.task('scss', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', () => {
    gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
});

gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(server({
            port: 9090,
            open: true,
            livereload: true,
            fallback: "index.html"
        }));
});

gulp.task('default', gulp.series('scss', 'server', 'watch'));