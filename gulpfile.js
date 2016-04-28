var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');


gulp.task('buildClient', function () {
	var tsProject = ts.createProject('./tsconfig.json');
	var tsResult =  gulp.src(['./app/**/*.ts', './typings/main.d.ts', '!./node_modules/**/*.*'])
		.pipe(ts(tsProject));
		
		return tsResult.js.pipe(gulp.dest('./app'));
});

gulp.task('buildServer', function () {
	var tsProject = ts.createProject('./server/tsconfig.json');
	var tsResult =  gulp.src(['./server/**/*.ts', '!./node_modules/**/*.*'])
		.pipe(ts(tsProject));
		
		return tsResult.js.pipe(gulp.dest('./server'));
});


gulp.task("default", ['buildClient', 'buildServer']);