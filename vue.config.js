process.env.VUE_CLI_TEST = true
module.exports = {
  // baseUrl: './', // 默认'/'，部署应用包时的基本 URL
  // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  // assetsDir: '',  // 相对于outputDir的静态资源(js、css、img、fonts)目录
  productionSourceMap: false,  // 生产环境的 source map
  parallel: require('os').cpus().length > 1,
  pwa: {},
}
