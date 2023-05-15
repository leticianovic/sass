const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin')
const stripCss = require('gulp-strip-css-comments')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefasCSS(cb){
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'
    ])
        .pipe(stripCss()) // remover comentarios do css
        .pipe(concat('libs.css')) // mescla os arquivos
        .pipe(cssmin()) // minifica css
        .pipe(rename({suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css')) // cria arquivo em novo diretorio

    cb()
}

function tarefasSASS(cb){
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass()) // Transforma o sass para css
        .pipe(gulp.dest('./dist/css'))

    cb()
}

function tarefasImagem(){
    return gulp.src('./src/images/*')
        .pipe(imagemin({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
    .pipe(gulp.dest('./dist/images'))
}

// POC - Proof of Concept
function tarefasHTML(cb){
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))

    cb()
}

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })

    gulp.watch('./src/**/*').on('change', process) // repete o processo quando alterar algo em src
    gulp.watch('./dist/**/*').on('change', reload)
})

function end(cb){
    console.log("Tarefas concluídas!")
    return cb()
}

/* Series x Parallel */
const process = series(tarefasHTML, tarefasCSS, tarefasSASS, end)
//const process = parallel(tarefasHTML, tarefasCSS, tarefasSASS, end)

exports.styles = tarefasCSS
exports.images = tarefasImagem
exports.sass = tarefasSASS

exports.default = process