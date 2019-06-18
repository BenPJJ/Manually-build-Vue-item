const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/main.js', // 入口js
        index: './index.js'
    }, 
    output: { // 打包输出目录
        path: path.join(__dirname, '../dist'), //打包输出路径
        filename: '[id].[hash].js', // 打包输出文件的文件名，name对应的是entry里面的app
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/, // 排除node_modules文件
                options: {
                    extractCSS: true // 提取.vue文件中style作为单个css文件
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env'] // 作为参数传入babel-loader，babel-loader会根据浏览器不同，自动编译es5、es6语法
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html', // html文件名
            template: 'index.html', // 定制文件模板
            inject: true // 是否引入打包好的js
        }),
        new CleanWebpackPlugin()
    ]
}

