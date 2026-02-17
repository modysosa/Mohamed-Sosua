import gulp from 'gulp';
import concat from 'gulp-concat';
import prefix from 'gulp-autoprefixer';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import pug from 'gulp-pug';
import connect from 'gulp-connect';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import notify from 'gulp-notify';
import zip from 'gulp-zip';

const sass = gulpSass(dartSass);

gulp.task('connect', function() {
    connect.server({
        root: './dist/',
        livereload: true,
        index: 'homepage.html'
    });
});

gulp.task('html', function() {
    return gulp.src('stage/html/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload())
        .pipe(notify({ message: 'HTML task complete' }));
});

gulp.task('css', function() {
    return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(prefix('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
        .pipe(notify({ message: 'CSS task complete' }));
});

gulp.task('js', function() {
    return gulp.src('stage/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('compress', function() {
    return gulp.src('dist/**/*.*')
        .pipe(zip('website.zip'))
        .pipe(gulp.dest('.'))
        .pipe(notify({ message: 'Files Compressed' }));
});

gulp.task('watch', function() {
    gulp.watch('stage/html/**/*.pug', gulp.series('html'));
    gulp.watch('stage/css/**/*.scss', gulp.series('css'));
    gulp.watch('stage/js/**/*.js', gulp.series('js'));
    gulp.watch('dist/**/*.*', gulp.series('compress'));
});

gulp.task('default', gulp.parallel('connect', 'watch'));

// //modify this code
// import gulp from 'gulp';
// import concat from 'gulp-concat';
// import prefix from 'gulp-autoprefixer';
// import * as dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// import pug from 'gulp-pug';
// import connect from 'gulp-connect';
// import sourcemaps from 'gulp-sourcemaps';
// import uglify from 'gulp-uglify';
// import notify from 'gulp-notify';
// import zip from 'gulp-zip';

// const sass = gulpSass(dartSass);

// gulp.task('connect', function() {
//     connect.server({
//         root: './dist/',
//         livereload: true
//     });
// });

// gulp.task('html', function() {
//     return gulp.src('stage/html/*.pug')
//         .pipe(pug({ pretty: true }))
//         .pipe(gulp.dest('dist/'))
//         .pipe(connect.reload())
//         .pipe(notify({ message: 'HTML task complete' }));
// });

// gulp.task('css', function() {
//     return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
//         .pipe(sourcemaps.init())
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(prefix('last 2 versions'))
//         .pipe(concat('main.css'))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(connect.reload())
//         .pipe(notify({ message: 'CSS task complete' }));
// });

// gulp.task('js', function() {
//     return gulp.src('stage/js/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(concat('main.js'))
//         .pipe(uglify())
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist/js'))
//         .pipe(connect.reload())
//         .pipe(notify({ message: 'Scripts task complete' }));
// });

// gulp.task('compress', function() {
//     return gulp.src('dist/**/*.*')
//         .pipe(zip('website.zip'))
//         .pipe(gulp.dest('.'))
//         .pipe(notify({ message: 'Files Compressed' }));
// });

// gulp.task('watch', function() {
//     gulp.watch('stage/html/**/*.pug', gulp.series('html'));
//     gulp.watch('stage/css/**/*.scss', gulp.series('css'));
//     gulp.watch('stage/js/**/*.js', gulp.series('js'));
//     gulp.watch('dist/**/*.*', gulp.series('compress'));
// });

// gulp.task('default', gulp.parallel('connect', 'watch'));

// import gulp from 'gulp';
// import concat from 'gulp-concat';
// import prefix from 'gulp-autoprefixer';
// import * as dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// import pug from 'gulp-pug';
// import connect from 'gulp-connect';
// import sourcemaps from 'gulp-sourcemaps';
// import uglify from 'gulp-uglify';
// import notify from 'gulp-notify';  // Import gulp-notify
// import zip from 'gulp-zip';

// const sass = gulpSass(dartSass);

// gulp.task('connect', function() {
//     connect.server({
//         root: './dist/',
//         livereload: true
//     });
// });
// // HTML
// gulp.task('html', function() {
//     return gulp.src('stage/html/*.pug')
//         .pipe(pug({ pretty: true }))
//         .pipe(gulp.dest('dist/'))
//         .pipe(connect.reload())
//         .pipe(notify({ message: 'HTML task complete' }));  // Notify
// });
// //css
// gulp.task('css', function() {
//     return gulp.src(['stage/css/**/*.css','stage/css/**/*.scss'])
//         .pipe(sourcemaps.init())  // Initialize sourcemaps
//         .pipe(sass({ outputStyle: 'compressed' }).on("error"), sass.logError)
//         .pipe(prefix('last 2 versions'))
//         .pipe(concat('main.css'))
//         .pipe(sourcemaps.write('.'))  // Write sourcemaps
//         .pipe(gulp.dest('dist/css'))
//         .pipe(connect.reload())
//         .pipe(notify({ message: 'CSS task complete' }));  // Notify
// });
// //js
// gulp.task('js', function() {
//     return gulp.src('stage/js/*.js')
//         .pipe(sourcemaps.init())  // Initialize sourcemaps
//         .pipe(concat('main.js'))
//         .pipe(uglify())
//         .pipe(sourcemaps.write('.'))  // Write sourcemaps
//         .pipe(gulp.dest('dist/js'))
//         .pipe(connect.reload())
//         .pipe(notify({ message: 'Scripts task complete' }));  // Notify
// });

// // compress file
// gulp.task("compress",function () {
//     return gulp.src("dist/**/*.*")
//         .pipe(zip("website.zip"))
//         .pipe(gulp.dest("."))
//         .pipe(notify({ message: 'Files Compressed' }))
// });
// // Watch
// gulp.task('watch', function() {
//     gulp.watch('stage/html/**/*.pug', gulp.series('html'));
//     gulp.watch('stage/css/**/*.scss', gulp.series('css'));
//     gulp.watch('stage/js/**/*.js', gulp.series('js'));
//     gulp.watch('dist/**/*.*', gulp.series('compress'));
// });

// gulp.task('default', gulp.parallel('connect', 'watch'));

// import gulp from 'gulp';
// import concat from 'gulp-concat';
// import prefix from 'gulp-autoprefixer';
// import * as dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// import pug from 'gulp-pug';
// import connect from 'gulp-connect';

// const sass = gulpSass(dartSass);

// gulp.task('connect', function() {
//     connect.server({
//         root: './dist/',
//         livereload: true
//     });
// });

// gulp.task('css', function() {
//     return gulp.src('stage/css/main.scss')
//         .pipe(sass({ outputStyle: 'compressed' }))
//         .pipe(prefix('last 2 versions'))
//         .pipe(concat('main.css'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(connect.reload());
// });

// gulp.task('scripts', function() {
//     return gulp.src('stage/js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist/js'))
//         .pipe(connect.reload());
// });

// gulp.task('html', function() {
//     return gulp.src('stage/index.pug')
//         .pipe(pug({ pretty: true }))
//         .pipe(gulp.dest('dist/'))
//         .pipe(connect.reload());
// });

// gulp.task('watch', function() {
//     gulp.watch('stage/**/*.pug', gulp.series('html'));
//     gulp.watch('stage/css/**/*.scss', gulp.series('css'));
//     gulp.watch('stage/js/**/*.js', gulp.series('scripts'));
// });

// gulp.task('default', gulp.parallel('connect', 'watch'));
// import gulp from 'gulp';
// import concat from 'gulp-concat';
// import prefix from 'gulp-autoprefixer';
// import * as dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// import pug from 'gulp-pug';
// import connect from 'gulp-connect';
// import sourcemaps from 'gulp-sourcemaps';  // Import gulp-sourcemaps
// import uglify from 'gulp-uglify';          // Import gulp-uglify

// const sass = gulpSass(dartSass);

// gulp.task('connect', function() {
//     connect.server({
//         root: './dist/',
//         livereload: true
//     });
// });

// gulp.task('css', function() {
//     return gulp.src('stage/css/main.scss')
//         .pipe(sourcemaps.init())  // Initialize sourcemaps
//         .pipe(sass({ outputStyle: 'compressed' }))
//         .pipe(prefix('last 2 versions'))
//         .pipe(concat('main.css'))
//         .pipe(sourcemaps.write('.'))  // Write sourcemaps
//         .pipe(gulp.dest('dist/css'))
//         .pipe(connect.reload());
// });

// gulp.task('js', function() {
//     return gulp.src('stage/js/*.js')
//         .pipe(sourcemaps.init())  // Initialize sourcemaps
//         .pipe(concat('main.js'))
//         .pipe(uglify())
//         .pipe(sourcemaps.write('.'))  // Write sourcemaps
//         .pipe(gulp.dest('dist/js'))
//         .pipe(connect.reload());
// });

// gulp.task('html', function() {
//     return gulp.src('stage/index.pug')
//         .pipe(pug({ pretty: true }))
//         .pipe(gulp.dest('dist/'))
//         .pipe(connect.reload());
// });

// gulp.task('watch', function() {
//     gulp.watch('stage/**/*.pug', gulp.series('html'));
//     gulp.watch('stage/css/**/*.scss', gulp.series('css'));
//     gulp.watch('stage/js/**/*.js', gulp.series('js'));
// });

// gulp.task('default', gulp.parallel('connect', 'watch'));
