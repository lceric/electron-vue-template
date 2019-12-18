const path = require('path');
// const fs = require('fs');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const chalk = require('chalk');
// const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir);
}

var startElectron = require('./electron/utils/startElectron');
const target = ''; // 环境配置
const port = '7878'; // 端口
module.exports = {
  lintOnSave: false,
  publicPath: './',
  assetsDir: './',
  outputDir: 'webroot',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  devServer: {
    port,
    // disableHostCheck: true,
    after(app, server, compiler) {
      startElectron(compiler);
    }
    // proxy: {
    // '/api': {
    //   target,
    //   ws: true,
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/api': '/'
    //   }
    // }
    // }
  },
  chainWebpack: config => {
    config.resolve.alias // alias
      .set('src', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('styles', resolve('src/styles'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))
      .set('static', resolve('public/static'))
      .end()
      .end() // 回退
      .stats({ timings: true }) // stats
      // .externals({
      //   // externals
      //   vue: 'Vue',
      //   vuex: 'Vuex',
      //   'vue-router': 'VueRouter',
      //   'element-ui': 'ELEMENT',
      //   axios: 'axios'
      // })
      .plugin('progress-bar-webpack-plugin') // progress-bar-webpack-plugin
      .use(ProgressBarPlugin)
      .end()
      .plugins.delete('preload') // delete preload
      .delete('prefetch'); // delete prefetch
    // 开发模式
    if (process.env.NODE_ENV !== 'production') {
    }
    if (process.env.npm_config_anylize) {
      // 如果需要进行模块分析，使用--anylize
      config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
      config.plugins = config.plugins.concat([new HardSourceWebpackPlugin()]);
    }
  }
};
