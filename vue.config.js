/*解决跨域问题*/

module.exports = {

    publicPath:'./',
    
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: { //配置跨域
            '/api': {
                target: 'http://82.157.179.123',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    },

    configureWebpack: {
        devtool: 'source-map'
    },

  

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: []
      }
    }
};
