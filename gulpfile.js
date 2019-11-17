var gulp = require('gulp');
var rename = require('gulp-rename');
var sass= require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

function sassToCss(done) {

    gulp.src('./sass/**/*.scss')
        .pipe( sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }) )
        .on( 'error', console.error.bind(console) )
        .pipe( autoprefixer({
            cascade: false
        }) )
        .pipe( rename({suffix: '.min'}) )
        .pipe( gulp.dest('./css/') )
        .pipe( browserSync.stream() );

    done();
}

function fileWatcher() {
    gulp.watch('./sass/**/*', sassToCss);
    gulp.watch('./**/*.html', browserReload);
    gulp.watch('./**/*.js', browserReload);
}

function sync(done) {

    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });

    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}

gulp.task( 'default', gulp.parallel(sync, fileWatcher) );
