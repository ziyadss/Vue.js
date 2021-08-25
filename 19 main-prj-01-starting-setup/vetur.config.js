/** @type {import('vls').VeturConfig} */

module.exports = {
  projects: [
    {
      root: './',
      package: './package.json',
      globalComponents: ['./src/components/**/*.vue'],
    },
  ],
};
