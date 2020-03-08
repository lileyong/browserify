var gulp = require('gulp')
var browserify = require('browserify')
var fs = require('fs')
var sequence = require('run-sequence')

gulp.task('mainjs', (cb) => {
    browserify().add('src/index.js').bundle().pipe(fs.createWriteStream('build/main.js'))
    cb()
})

gulp.watch('src/*.js',()=>{
    sequence('mainjs')
})

gulp.task('default', (done) => {
    sequence('mainjs')
    done()
})