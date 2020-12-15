const path = require('path');

module.exports = {
  dev: {
    host: 'localhost',
    port: 8080,
    proxyTable: {},
    useEslint: true,
    showEslintErrorsInOverlay: true,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    assetsPublicPath: '/',
    devtool: 'cheap-module-eval-source-map',
    poll: false,
    assetsSubDirectory: 'static',
    cssSourceMap: true,
    define: undefined
  },
  build: {
    bundleAnalyzerReport: false,
    index: path.resolve('./dist/index.html'),
    assetsRoot: path.resolve('./dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: 'eval',
    define: undefined
  }
};
