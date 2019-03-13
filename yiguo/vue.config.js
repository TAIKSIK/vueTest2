module.exports = {
  devServer: {
    open: true,
    // host: '0.0.0.0',
    port:8080,
    // https: false,
    // hotOnly: false,
    // proxy: null, // string | Object
    // before: app => {}

  },
  lintOnSave: true, //关闭esling警告
  productionSourceMap: false, //打包不携带map文件
}