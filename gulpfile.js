var gulp = require('gulp')
var shelljs = require('shelljs')

gulp.task('default', (done) => {
    shelljs.exec('browserify index.js -o main.js')
    done()
})