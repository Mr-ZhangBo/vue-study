const port = 7070;
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

console.log(process.env.foo)
console.log(process.env.VUE_APP_DONG)

module.exports = {
    publicPath: '/best-practice',
    devServer: {
        port
    },
    
    // webpack基础配置，下面这个配置项将来会和webpack默认配置合并
    // configureWebpack: {
    //     name: '项目最佳实践',
    //     resolve: {
    //         // 配置路径别名
    //         alias: {
    //             comps: path.resolve(__dirname, 'src/components')
    //         }
    //     }
    // }

    configureWebpack: config => {
        // 可以直接修改config,也可以返回一个合并的对象,拿取环境变量
        config.resolve.alias.comps = path.resolve(__dirname, 'src/components')
        if (process.env.NODE_ENV === 'development') {
            config.name = '项目最佳实践'
        } else {
            config.name = 'Vue Best Practice'
        }
    },
    // vue inspect > output.js
    // vue inspect --rules
    // vue inspect --rule svg
    chainWebpack(config) {
        // 1.找到默认svg-loader，让它排除icons目录
        config.module.rule('svg').exclude.add(resolve('src/icons'))
        // 2.新增svg-sprite-loader，让它去加载icons中的svg
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
                .options({
                    symbolId: 'icon-[name]'
                })
        }



}