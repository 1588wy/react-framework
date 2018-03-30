/*
 * @Author: wying 
 * @Date: 2018-03-30 11:28:23 
 * @Last Modified by:   wying 
 * @Last Modified time: 2018-03-30 11:28:23 
 */

const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const port = 3000;

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        bundle: './app/main.jsx',
        vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'redux'],
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', 'css', 'less'], //后缀名自动补全
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    'css-loader?#sourceMap',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp|eot|ttf|svg|woff)$/i,
                use: 'url-loader?limit=5000',
            }
        ],
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['vendor'],
        // }),
        // 	new OpenBrowserPlugin({
        //   url: `http://localhost:${port}`
        // }),
        // 	new BundleAnalyzerPlugin()
    ],
    devServer: {
        compress: false, // 启用gzip压缩
        contentBase: path.join(__dirname, 'app'),
        port: port, // 运行端口3000
        inline: true,
        hot: true,
        historyApiFallback: true,
    },
};
