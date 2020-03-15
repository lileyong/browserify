var gulp = require('gulp')
var gulpif = require('gulp-if')
var sequence = require('run-sequence')
var browserify = require('browserify')
var watchify = require('watchify')
var buffer = require('vinyl-source-buffer')
var uglify = require('gulp-uglify')

var isPrd = process.env.ENV === 'production'

gulp.task('mainjs', (cb) => {
    var b = browserify({
        entries: ['src/index.js'],
        cache: {},
        packageCache: {},
        plugin: [watchify]
    })

    function bundle() {
        b
            .bundle()
            .pipe(buffer('main.js'))
            .pipe(gulpif(isPrd, uglify()))
            .pipe(gulp.dest('./build'))
    }

    bundle()
    b.on("update", () => {
        bundle()
    })
})

gulp.task('default', () => {
    sequence('mainjs')
})