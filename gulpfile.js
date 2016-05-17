var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
var bower = require('gulp-bower');
 
gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('./app/libs/'))
});
 

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

gulp.task("default", ['bower', 'buildClient', 'buildServer','server']);

/* autoprefixer sample work */
/*gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('./app/libs/css'));
}); */