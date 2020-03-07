var gulp = require('gulp')
var browserify = require('browserify')
var fs = require('fs')

function js(cb) {
    browserify().add('src/index.js').bundle().pipe(fs.createWriteStream('build/main.js'))
    cb()
}

exports.default = gulp.series(js)