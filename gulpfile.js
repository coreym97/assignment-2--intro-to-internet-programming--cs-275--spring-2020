const { src, dest, series, watch } = require(`gulp`);
const babel = require(`gulp-babel`);
const cssLinter = require(`gulp-stylelint`);
const cssCompressor = require('gulp-clean-css');
const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const jsLinter = require(`gulp-eslint`);
const jsCompressor = require(`gulp-uglify`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let validateHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlValidator());
};

let compressHTML = () => {
    return src(`temp/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let lintJS = () => {
    return src(`js/*.js`)
        .pipe(jsLinter(src(`.eslintrc.json`)))
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let transpileJS = () => {
    return src(`js/*.js`)
        .pipe(babel());
};

let compressJS = () => {
    return src(`temp/*.js`)
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

let compressCSS = () => {
    return src(`temp/*.css`)
        .pipe(cleanCSS())
        .pipe(gulp.dest('prod/styles'));
};

let serve = () => {
    browserSync({
        server: {
            baseDir: [
                `html`,
                `temp`
            ]
        }
    });

    watch([`html/**/*.html`, `css/*.css`, `js/*.js`]).on(`change`, reload);
};

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.lintJS = lintJS;
exports.transpileJS = transpileJS;
exports.compressJS = compressJS;
exports.lintCSS = lintCSS;
exports.compressCSS = compressCSS;
exports.dev = series(validateHTML, lintCSS, lintJS, transpileJS, serve);
exports.build = series(compressHTML, compressCSS, compressJS);
