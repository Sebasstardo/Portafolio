const {src, dest, watch, parallel} =  require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');



function css (done){
    src('src/scss/**/*.scss') //Identifica el archivo .scss que exista
    .pipe(plumber()) // muestra mejor el msj de error y no se te cae la maquina
    .pipe(sass()) // Compilalo
    .pipe(dest('build/css')); //Almacena en el disco duro
    done();//Callback que avisa a gulp cuando se llega al final de la funcion
}

const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const  webp = require('gulp-webp');

function versionWebp(done){
    const opciones ={
        quality: 50
    };
    src('src/images/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'));
    done();
}
function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }
    src('src/images/**/*.{png,jpg}')
    .pipe( cache(imagemin(opciones)))
    .pipe(dest('build/img'));
    done();
}


//escucha los cambios que se realizan en la funcion css
function dev(done){
    watch('src/scss/**/*.scss',css)
    done();
}


exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev, imagenes);