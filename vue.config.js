// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    lintOnSave: false
}

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        //const svgRule = config.module.rule('svg')
        //svgRule.uses.clear()
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/assets/icons')) //处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
    configureWebpack: () => ({
        // resolve: {
        //   alias: require('./alias.config').webpack
        // }
        // module: {
        //   rules: [{
        //     test: /\.svg$/,
        //     use: [{
        //       loader: "svg-sprite-loader",
        //       options: {
        //         symbolId: 'icon-[name]'
        //       }
        //     }]
        //   }]
        // }
    })
}
