const {src, series, dest, watch} = require('gulp');
const sass = require('gulp-sass');

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
function watchArchivos(){
    watch( './src/scss/**/*.scss', css );
}
exports.minificarcss = minificarcss;
exports.css = css;
exports.watchArchivos = watchArchivos;