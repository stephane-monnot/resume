module.exports = function configOverrides(config) {
  // Add the svg loader
  const loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.svg/,
    loader: 'svg-inline-loader?removeTags',
  });
};
