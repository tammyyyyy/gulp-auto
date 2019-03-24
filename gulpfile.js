const gulp= require('gulp');
const connect=require('gulp-connect');
const gulpSass=require('gulp-sass');
const buildSass=function(cd){
console.log('buildSass');
gulp.src('./src/styles/index.sass')
.pipe(gulpSass())
.pipe(gulp.dest('build/'));
cb();

}
const webServer=async function(){
console.log('reload');
connect.server({livereload:true});
}
const compressImage=async function(cb){
console.log('compressImage');
gulp.src('src/images/*')
.pipe(imagemin())
.pipe(gulp.dest('build/images'));
}
const webFont=async function(cb){
console.log('webFont');
gulp.src('./src/fonts/*')
.pipe(gulp.dest('build/fonts/'));
cb();
}
const CSSSprite=async function(cb){
console.log('CSSSprite');
gulp.src('src/sprite/*.png').pipe(spritesmith(params{
imgName:'sprite.png',
cssName:'sprite.css'}))
.pipe(gulp.dest('build'));
cb();
}
gulp.watch('src/**/*.scss',{events:'all'},function(cb){
console.log('change SASS');
buildSass(cb);
cb();
});
exports.default=gulp.series(buildSass,webServer);