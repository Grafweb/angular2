var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');


gulp.task('buildClient', function () {
	var tsProject = ts.createProject('./tsconfig.json');
	var tsResult =  gulp.src(['./app/**/*.ts', './typings/main.d.ts', '!./node_modules/**/*.*'])
		.pipe(ts(tsProject));
		
		return tsResult.js.pipe(gulp.dest('./app'));
});


gulp.task("default", ['buildClient']);