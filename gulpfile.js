const gulp = require('gulp')
const chalk = require('chalk')
const shell = require('gulp-shell')
const envVersion = require('./package.json').envVersion
const compare = require('node-version-compare');
const execSync = (cmd) => {
  require('child_process').execSync(cmd, {stdio:[0,1,2]})
}


gulp.task('check:node', () => {
  const checkCmdExisted = require('child_process').execSync(
    'if ! [ -x "$(command -v node)" ]; then echo "0"; else echo "-1"; fi'
  )
  if (!checkCmdExisted.toString() === '-1') {
    console.log('nodejs not installed')
    process.exit()
  }
  const version = execSync(
    'node --version | cut -d " " -f 3 | sed -e "s/[ |v]//g"'
  )
  const versionStr = version.toString()
  if (compare(versionStr, envVersion.nodejs.min) < 0) {
    console.warn(
      'nodejs should be at least ' +
        envVersion.nodejs.min +
        ', current ' +
        versionStr
    )
    process.exit()
  }
})

gulp.task('check:git', () => {
  const checkCmdExisted = execSync(
    'if ! [ -x "$(command -v git)" ]; then echo "0"; else echo "-1"; fi'
  )
  if (!checkCmdExisted.toString() === '-1') {
    console.log('git not installed')
    process.exit()
  }
  const version = execSync('git --version | cut -d " " -f 3 | sed -e "s/ //g"')
  const versionStr = version.toString()
  if (compare(versionStr, envVersion.git.min) < 0) {
    console.warn(
      'git should be at least ' + envVersion.git.min + ', current ' + versionStr
    )
    process.exit()
  }
})

gulp.task(
  'run:storybook',
  shell.task(['npm run storybook'], { cwd: './example' })
)

gulp.task(
  'run:android',
  shell.task(['react-native run-android'], { cwd: './example' })
)

gulp.task(
  'run:ios',
  shell.task(['react-native run-ios'], { cwd: './example' })
)

gulp.task('setup', ['check:node', 'check:git'], () => {
  shell('git config core.hooksPath ./.githooks')
  const install = require('gulp-install')
  return gulp
    .src(['./lib/package.json', 'example/package.json'])
    .pipe(install());
})

gulp.task(
  'publish:major',
  shell.task(
    [
      'npm version major',
      'npm publish --access=public',
      'git push --follow-tags'
    ],
    { cwd: './lib' }
  )
)

gulp.task(
  'publish:minor',
  shell.task(
    [
      'npm version minor',
      'npm publish --access=public',
      'git push --follow-tags'
    ],
    { cwd: './lib' }
  )
)

gulp.task(
  'publish:patch',
  shell.task(
    [
      'npm version patch',
      'npm publish --access=public',
      'git push --follow-tags'
    ],
    { cwd: './lib' }
  )
)

/**
 * Clean lib
 */
gulp.task('clean:lib', () => {
  execSync('rm -rf lib/*')
})

/**
 * Build core library
 */
gulp.task('build:lib', ['clean:lib'], () => {
  execSync('cp -R src/* lib/')
})

/**
 * Build core library
 */
gulp.task('build:lib-web', () => {
  execSync('./node_modules/webpack/bin/webpack.js')
})

/**
 * Build documents
 */
gulp.task('build:docs', () => {
  execSync('node ./scripts/compile-docs.js')
})

/**
 * Build react native web player
 */
gulp.task('build:webplayer', () => {
  execSync('cd website/react-native-web-player; npm run build; cp -r dist ../public/web-player; cd ../../;')
})

/**
 * Build documents website
 */
gulp.task('build:website', ['build:lib', 'build:lib-web', 'build:docs', 'build:webplayer'], () => {
  execSync('cd website; npm run build; cp -rf build/public/* ../docs/ && cd ..;')
})

// gulp.task('watch:website', ['build:docs', 'build:webplayer'], () => {
//   execSync('./node_modules/webpack/bin/webpack.js')
// })

/**
 * Build All
 */
gulp.task('build', ['build:lib', 'build:website'])

gulp.task('run:website', ['build'], () => {
  execSync('cd website; npm run start')
})

/**
 * Build All
 */
gulp.task('test', () => {
  execSync('npm test')
})

