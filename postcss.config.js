
// postcss.config.js
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer()
    // Você pode adicionar outros plugins aqui, por exemplo:
    // require('cssnano')()
  ]
};
