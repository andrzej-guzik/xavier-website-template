var gulp = require('gulp'),
	del = require('del'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify');

gulp.task('previewDist', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: docs
		}
	});
});

gulp.task('clearDist', function() {
	del('./docs');
});

gulp.task('copyGeneralFiles', ['clearDist'], function() {
	var pathsToCopy = [
	    './app/**/*',
	    '!./app/index.html',
	    '!./app/assets/styles/**',
	    '!./app/assets/scripts/**',
	    '!./app/temp',
	    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
  			.pipe(gulp.dest('./docs'));
});

gulp.task('usemin', ['styles', 'scripts'], function() {
	return gulp.src('./app/index.html')
			.pipe(usemin({
				css: [function() {return rev()}, function() {return cssnano()}],
				js: [function() {return rev()}, function() {return uglify()}]
			}))
			.pipe(gulp.dest('./docs'))
});

gulp.task('build', ['copyGeneralFiles', 'usemin']);
