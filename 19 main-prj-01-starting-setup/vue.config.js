/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  publicPath: '',
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'index.html',
      title: 'The Main Project',
    },
  },
};
