'use strict';
var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('nsp', function (cb) {
	$.nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('pre-test', function () {
	return gulp.src('generators/**/*.js')
		.pipe($.excludeGitignore())
		.pipe($.istanbul({
			includeUntested: true
		}))
		.pipe($.istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function (cb) {
	var mochaErr;

	gulp.src('test/**/*.js')
		.pipe($.plumber())
		.pipe($.mocha({reporter: 'spec'}))
		.on('error', function (err) {
			mochaErr = err;
		})
		.pipe($.istanbul.writeReports())
		.on('end', function () {
			if (mochaErr.message) {
				console.error(mochaErr.message);
			}
			cb(mochaErr);
		});
});

gulp.task('watch', function () {
	gulp.watch(['generators/**/*.js', 'test/**'], ['test']);
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['test']);
