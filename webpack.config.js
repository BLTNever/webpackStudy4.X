const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    // 入口
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    // module模块、rule-非必须
    module: {
        rules: [{
            test: /\.css$/, // 正则匹配css文件
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }]
    },

    // plugin插件-非必须
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new CleanWebpackPlugin(['dist']), // 删除dist文件
        new HtmlWebpackPlugin({
            filename : 'index.html', //生成的文件名称
            chunks : ['index'], //加入的js文件，若无此属性，则默认为所有js
            hash : true, //生成hash数值，避免产生缓存
            title : '实际标题', //html的title标签值
            template : './src/index.html' //模板文件路径
        }),
    ],

    // 开发服务器-非必须
    devServer: {
        contentBase: path.resolve(__dirname,'dist'), //设置服务器的基本访问目录
        host: 'localhost',  //服务器地址，localhost
        port: 8888,//设置端口
        open: true,//自动打开页面
        hot: true // 热更新
    }
};

    