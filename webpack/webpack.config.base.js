const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')

module.exports = {
    entry: {
        main: resolve('src/index.js'),
    },

    output: {
        path: resolve('dist'),
        filename: '[name].bundle.[hash].js',
        chunkFilename: '[name].bundle.[hash].js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            localsConvention: 'camelCaseOnly',
                            modules: {
                                mode: 'local',
                            }
                        },
                    },
                ],
            },
        ]
    },

    context: resolve('src'),

    resolve: {
        alias: {
            components: resolve('src/components/'),
            pages: resolve('src/pages/'),
            services: resolve('src/services/'),
        },
        extensions: ['.jsx', '.js'],
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('public/index.html'),
        }),
        new DotenvPlugin(),
    ],
}
