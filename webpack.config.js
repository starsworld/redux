const path = require('path');

module.exports = {
    entry: './examples/counter/index.js',
    mode: 'production',
    output: {
        filename: 'a.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        contentBase: './dist',
        open: true,
        compress: true,
        port: 5678,
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['transform-class-properties', '@babel/transform-runtime', '@babel/plugin-syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};
