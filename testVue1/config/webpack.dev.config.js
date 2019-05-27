const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/main.js' // 入口js
    }, 
    output: { // 打包输出目录
        path: path.join(__dirname, '../dist'), //打包输出路径
        filename: '[name].js' // 打包输出文件的文件名，name对应的是entry里面的app
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html', // html文件名
            template: 'index.html', // 定制文件模板
            inject: true // 是否引入打包好的js
        })
    ],
    devServer: {
        // allowedHosts:[ // 允许的域名
        //     'localhost'
        // ],
        // compress: true, // 一切服务器都启用gzip压缩
        hot: true, // 启用热部署
        open: true, // 是否自动打开浏览器
        // port: 3000,
        inline: true,
        progress: true
    }
}

