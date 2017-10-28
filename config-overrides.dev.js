const path = require('path');

module.exports = function(config) {
  // Add the svg loader
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.svg/,
    loader: 'svg-inline-loader?removeTags'
  });
}
