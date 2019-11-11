const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: resolve(__dirname, 'src', 'index.js'),
    },

    output: {
        path: resolve(__dirname, 'dist'),
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
        ]
    },

    context: resolve(__dirname, 'src'),

    resolve: {
        extensions: ['.json', '.jsx', '.js', '.html'],
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
            template: resolve(__dirname, 'src', 'index.html'),
        }),
    ],
}
