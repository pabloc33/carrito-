const gulp = require("gulp");
// const sass = require("gulp-sass");
var sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
//var autoprefixer = require("autoprefixer");

function css() {
  return gulp
    .src("scss/app.scss")
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(
      sass({
        outputStyle: "expanded", // nested, compact, compressed
      })
    )
    .pipe(gulp.dest("css"));
}

function watchFiles() {
  gulp.watch("scss/*.scss", css);
  gulp.watch("index.html");
}

// Registrar funciones como tareas
gulp.task("css", css);
gulp.task("watch", gulp.parallel(watchFiles));
