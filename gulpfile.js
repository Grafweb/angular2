var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');


gulp.task('buildClient', function () {
	var tsProject = ts.createProject('./tsconfig.json');
	var tsResult =  gulp.src(['./typings/main.d.ts','./app/**/*.ts'])
		.pipe(ts(tsProject));
		
		return tsResult.js.pipe(gulp.dest('./app'));
});

gulp.task('buildServer', function () {
	var tsProject = ts.createProject('./server/tsconfig.json');
	var tsResult =  gulp.src(['./server/**/*.ts'])
		.pipe(ts(tsProject));
		
		return tsResult.js.pipe(gulp.dest('./server'));
});

gulp.task('server', function() {
	var server = gls.new('./server/server.js');
    server.start();
});

gulp.task("default", ['buildClient', 'buildServer','server']);