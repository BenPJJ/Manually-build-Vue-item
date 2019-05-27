const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/main.js' // 入口js
    }, 
    output: { // 打包输出目录
        path: path.join(__dirname, '../dist'), //打包输出路径
        filename: '[name].js' // 打包输出文件的文件名，name对应的是entry里面的app
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // html文件名
            template: 'index.html', // 定制文件模板
            inject: true // 是否引入打包好的js
        })
    ]
}

