const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const del = require("del");
gulp.task("clean", function () {
  return del("dist");
});
gulp.task("build-scripts", function () {
  return gulp
    .src("src/*.js")
    .pipe(concat("out.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
});
gulp.task("report", function () {
  console.log("done!");
  return Promise.resolve();
});
gulp.task("begin", gulp.series("clean", "build-scripts", "report"));
