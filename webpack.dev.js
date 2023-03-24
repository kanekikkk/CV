const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',

    },
    devtool: 'inline-source-map',
    module:{

        rules: [

            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options:{
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  } 
                }
            },
            {

                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],

            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            
            }

        ]

    },
    plugins: [new MiniCssExtractPlugin({
        filename: "style.css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
             template: "./src/index.html"
        })
    ]

}