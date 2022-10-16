var path = require('path');
const webpack = require('webpack');

// const nodeEnv = process.env.NODE_ENV;
const nodeEnv = 'development';

const WrapperPlugin = require('wrapper-webpack-plugin');
const fs = require('fs');
let plugins = [new webpack.NamedModulesPlugin()];

let externals = ['utf-8-validate', 'bufferutil'];
const entry = ['webpack/hot/poll?1000', path.resolve(path.join(__dirname, './src/index.ts'))];

module.exports = {
    devtool: 'inline-source-map',
    performance: {
        hints: false
    },
    node: nodeEnv || 'development',
    entry: entry,
    plugins: plugins,
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'server.bundle.js'
    },
    target: 'node',
    externals: externals,
    module: {
        rules: [
            {
                test: /\.{graphql|gql}$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            },
            {
                test: /\.ts$/,
                use: {
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'ts',
                        target: 'es2019'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.jsson', '.gql'],
        alias: {
            'src': path.resolve(__dirname, './src')
        }
    }
}