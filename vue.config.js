// vue.config.js
let path = require('path')

const debug = process.env.NODE_ENV !== 'production'

function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    publicPath: debug ? '/' : './',
    outputDir:'dist',
    assetsDir:'static',
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: false, // 生产环境的 source map
    chainWebpack(config){
        // 配置svg
        config.module
        .rule('svg')
    },
    configureWebpack:{
        resolve:{
            alias:{
                'api':'@/api',
                'assets':'@/assets',
                'components':'@/components',
                'icons':'@/icons',
                'layout':'@/layout',
                'views':'@/views',
                'utils':'@/utils',
            }
        }
    },
    devServer:{
        open: true,
        // host: '127.0.0.1',
        // port: 3000,
        https: false,
        hotOnly: false,
        proxy:{  //跨域配置
            '/cityPlanDev': {
                target: 'http://172.17.6.123:8083/',
              },
        },
        before: app => {
        }
    }
}