import { task } from 'gulp';
const path = require('path');
import * as gulp from 'gulp';
const gulpClean = require('gulp-clean');
const embedTemplates = require('gulp-angular-embed-templates');
const embedSass = require('gulp-angular2-embed-sass');
const resolveBin = require('resolve-bin');
import * as child_process from 'child_process';
import gulpRunSequence = require('run-sequence');
const exec = require('child_process').exec;

const DIST_ROOT = path.join(__dirname, 'dist');
const STAGE_ROOT = path.join(__dirname, 'staging');
const SRC_ROOT = path.join(__dirname, 'src');
const tsConfigPath = path.join(__dirname, 'tsconfig.prod.json');

task(':ts:stage', function () {
    return gulp.src(path.join(SRC_ROOT, '**/*.ts')) // also can use *.js files 
        .pipe(embedTemplates({ sourceType: 'ts' }))
        .pipe(embedSass({}))
        .pipe(gulp.dest(STAGE_ROOT));
});

task('clean', [':clean:dist', ':clean:stage']);
task('dist', (done)=>{
    gulpRunSequence(
        'clean',
        ':ts:stage',
        ':ts:build',
        ':copy-sass',
        done
    );
});

task(':clean:dist', cleanTask(DIST_ROOT));
task(':clean:stage', cleanTask(STAGE_ROOT));
task(':ts:build', function () {
    exec(`tsc -p "${tsConfigPath}"`, (err, stdout, stderr) => {
        console.log('dist done!');
    });
});
task(':copy-sass', ()=>{
    return gulp.src(path.join(SRC_ROOT, '**/*.scss'))
        .pipe(gulp.dest(DIST_ROOT));
});

task('publish', function(){
    exec(`npm publish --registry https://registry.npmjs.org/`, () => {
        console.log('publish done');
    });
});

/** Delete files. */
export function cleanTask(glob: string) {
  return () => gulp.src(glob, { read: false }).pipe(gulpClean(null));
}