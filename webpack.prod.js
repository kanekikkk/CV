const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {

    mode: 'production',
    entry: './src/index.js',
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].js',
        clean: true

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
        filename: "[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            filename: "[contenthash].html",
             template: "./src/index.html"
        })
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
      minimize: true,
    }

}