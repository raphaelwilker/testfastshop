var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
//var server = require('gulp-server-livereload');

gulp.task('default', function() {
  // place code for your default task here
});


//gulp.task('ngdocs', [], function () {
//  var gulpDocs = require('gulp-ngdocs');
//  return gulp.src([
//  	'./view/**/*.js',
//  	'./controller/**/*.js',
//  	'./scripts/**/*.js'])
//    .pipe(gulpDocs.process())
//    .pipe(gulp.dest('./docs'));
//});

gulp.task('compress', function () {
  
  	gulp.src([
	  	'./controller/**/*.js',
	  	'./view/**/*.js'])
  	    .pipe(concat('teste-mercado-livre-min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('./bin/js'))

    gulp.src(['./scripts/angular/angular.min.js'])    
		.pipe(concat('angular.js'))
	    .pipe(gulp.dest('./bin/js'))

	gulp.src(['./scripts/angular/modules/*.js'])
		.pipe(concat('angular-modules.js'))
	    .pipe(gulp.dest('./bin/js'))

	gulp.src(['./scripts/jquery/**/*.js',
		'./scripts/bootstrap/**/*.js'])    
		.pipe(concat('libs.js'))
	    .pipe(gulp.dest('./bin/js'))        

	gulp.src(['./css/**/*.css'])
		.pipe(concat('teste-mercado-livre-min.css'))
		.pipe(cssMin())
		.pipe(gulp.dest('./bin/css'))
  
  gulp.src(['./css/bootstrap/fonts/*.woff2'])  
    .pipe(gulp.dest('./bin/fonts'))

  gulp.src(['./css/bootstrap/fonts/*.woff'])  
    .pipe(gulp.dest('./bin/fonts'))
    
  gulp.src(['./css/bootstrap/fonts/*.ttf'])  
    .pipe(gulp.dest('./bin/fonts'))    

});