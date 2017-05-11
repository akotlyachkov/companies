const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    ProgressBarPlugin = require('progress-bar-webpack-plugin'),
    extractLibs = new ExtractTextPlugin('libs.css'),
    extractApp = new ExtractTextPlugin('styles.css');
module.exports = {
    entry: {
        app: './web/application/index.ts',
    },
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, './web/build')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        transpileOnly: true
                    }
                }, 'angular2-template-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, './web/application'),
                use: extractApp.extract([
                    {
                        loader: 'css-loader', options: {
                        sourceMap: true,

                    }
                    },
                    {
                        loader: 'sass-loader', options: {
                        sourceMap: true,
                        includePaths: [
                            path.resolve("./web/application")
                        ]
                    }
                    },
                ]),
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, './web/styles'),
                use: extractLibs.extract(['css-loader', 'sass-loader']),
            },
            {
                test: /\.woff$/,
                loader: 'base64-font-loader',

            },
            {
                test: /\.jpg$/,
                use: [{loader: 'file-loader',}]

            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {minimize: false}
            }
        ]
    },
    plugins: [new ProgressBarPlugin(),
        extractLibs,
        extractApp,
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(__dirname, 'web/application')
        ),

    ],
    resolve: {
        extensions: ['.ts', '.scss', '.html', '.js', '.css', '.woff', '.jpg'],
        modules: [
            path.resolve(__dirname,'node_modules'),
            path.resolve(__dirname,'web/application')
        ]

    },
    devtool: 'source-map',
};