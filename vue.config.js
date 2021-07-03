module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://api.coinlayer.com/api',
  }
}