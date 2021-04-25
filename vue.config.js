/*解决跨域问题*/

module.exports = {
    devServer:{
        open:true,
        host:'localhost',
        port:8080,
        https:false,
        hotOnly:false,
        proxy:{ //配置跨域
            '/api':{
                // target:'https://autumnfish.cn/',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        },
        before:app=>{ }
    },
    configureWebpack:{
        devtool:'source-map'
    },
    publicPath:'./'
};