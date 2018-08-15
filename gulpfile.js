var gulp = require('gulp');
var svgSprite = require("gulp-svg-sprite");

var paths = {
    source: 'svg/*.svg',
    destination: 'sprite'
};

var configSprite = {
    shape: {
        dimension: {
            maxWidth: 32,
            maxHeight: 32
        }
    },
    mode: {
        css: {
            dest: './',
            layout: 'diagonal',
            sprite: "sprite.svg",
            bust: false,
            render: {
                css: { }
            }
        }
    },
    variables: {
        mapname: "icons"
    }
};


gulp.task("svg", function() {
     gulp.src(paths.source)
        .pipe(svgSprite(configSprite))
        .pipe(gulp.dest(paths.destination))
});