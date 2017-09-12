`use strict`

var gulp = require('gulp')
var mkdirp = require('mkdirp')
var del = require('del')
var uglify = require('gulp-uglify')

gulp.task('clean', [], (done) => {
    del('dist/**', {})
        .then((paths) => {
            console.log("Deleted paths:" + paths.join("\n"));
            done();
        });
});

gulp.task("create-build-dir", ["clean"], (done) => {
    mkdirp('build', (err) => {
        if (err) done(err);
        else done();
    })
});

gulp.task("build", ["clean", "create-build-dir"], (done) => {
    gulp.src(["src/**/*.html", "src/**/*.css"])
        .pipe(gulp.dest("dist"))
});