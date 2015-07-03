// Include gulp & friends.
var gulp = require('gulp'),
	jade = require('gulp-jade'),
	less = require('gulp-less'),
	prefix = require('gulp-autoprefixer'),
	plumb = require('gulp-plumber'),
	minify = require('gulp-minify-css')
	concat = require('gulp-concat'),
	rename = require('gulp-rename')
	gutil = require('gulp-util');


var lessOpts = {
	'in':'src/less/style.less',
	'out':'css'
};

var jadeOpts = {
	'in':'src/jade/*.jade',
	'out':'.'
};

// LESS task.
gulp.task('less', function(){
	return gulp.src(lessOpts.in)
			.pipe(plumb())
			.pipe(less())
			.on('error', function(err){
				gutil.log(err);
				this.emit('end');
			})
			.pipe(prefix({
				browsers: [
                        '> 1%',
                        'last 2 versions',
                        'firefox >= 4',
                        'safari 7',
                        'safari 8',
                        'IE 8',
                        'IE 9',
                        'IE 10',
                        'IE 11'
                    ],
				cascade: true
			}))
			.pipe(rename('style.css'))
			.pipe(gulp.dest('css'))
			.pipe(minify())
			.pipe(concat('style.min.css'))
			.pipe(gulp.dest('css')).on('error', gutil.log);
});

gulp.task('jade', function(){
	var options = {
		pretty: true
	};

	gulp.src(jadeOpts.in)
		.pipe(jade({
			locals: {},
			pretty: true
		}))
		.pipe(gulp.dest(jadeOpts.out));
});

gulp.task('watch', function(){
	gulp.watch(['src/less/**/*.less', 'src/jade/*.jade'], ['less','jade']);
});

gulp.task('default', ['less','jade', 'watch']);
