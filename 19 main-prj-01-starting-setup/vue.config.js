/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const dev = process.env.NODE_ENV !== 'production';
module.exports = {
  lintOnSave: dev,
  // publicPath: dev ? '/' : '/vue/',
  // outputDir: 'vue',
  // pages: {
  //   index: {
  //     entry: 'src/index/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html',
  //     title: 'The Main Project',
  //   },
  // },
};
