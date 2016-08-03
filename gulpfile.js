var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer'),
	htmlmin = require('gulp-html-minifier');

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

//HTML Task
//Minifies

gulp.task('minify', function() {
  gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .on('error', errorLog)
    .pipe(gulp.dest('build/'))
    .pipe(livereload());
});

// Scripts Task
// Uglifies

gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.on('error', errorLog)
	.pipe(gulp.dest('build/js'))
	.pipe(livereload());
});

//Styles Task
//Compiles Sass

gulp.task('styles', function() {
	gulp.src('css/**/*.scss')
	.pipe(sass({
		style: 'compressed'
	}))
	.on('error', errorLog)
	.pipe(prefix())
	.pipe(gulp.dest('build/css/'))
	.pipe(livereload());
});

//Image Task
//Compress

gulp.task('image', function() {
	gulp.src('img/*')
	.pipe(imagemin())
	.on('error', errorLog)
	.pipe(gulp.dest('build/img'));
});

//Watch Task
//Watches JS

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/**/*.scss', ['styles']);
	gulp.watch('*.html', ['minify']);
	gulp.watch('img/*', ['image']);
});

gulp.task('default', ['scripts', 'styles', 'minify', 'watch']);