const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: `${__dirname}/index.tsx`,
    },
    output: {
        path: `${__dirname}/dist`,
        filename: `bundle.js`
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /^(?!.*\.spec\.tsx?$).*\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: { loader: 'url-loader?limit=1000' }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    },
    stats: { children: false },
    plugins: [
        new ExtractTextPlugin({
            filename: `[name]${ process.env.NODE_ENV === 'production' ? '.[contenthash]' : ''}.css`
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: process.env.NODE_ENV === 'development',
            compress: {
                warnings: process.env.NODE_ENV === 'production'
            }
        }),
        new HtmlWebpackPlugin({
            template : __dirname + '/index.html',
        })
    ]
};
