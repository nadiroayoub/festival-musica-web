const {src, series, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

function css(done){
    
    return src('./src/scss/app.scss')
            .pipe( sass({
                outputStyle: 'expanded'
            }) )
            .pipe( dest('./build/css') )
    done();

}
function minificarcss(){
    return src('./src/scss/app.scss')
            .pipe( sass({
                outputStyle: 'compressed'
            }) )
            .pipe( dest('./build/css') )
    done();
}

function imagenes(){
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
}

function watchArchivos(){
    watch( './src/scss/**/*.scss', css );
}
exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;