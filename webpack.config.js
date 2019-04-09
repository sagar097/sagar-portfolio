//Author:Sagar Pawar
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
 
    entry: [
      // 'webpack-dev-server/client?http://0.0.0.0:90',
      // 'webpack/hot/only-dev-server',
      '!!style-loader!css-loader!sass-loader!react-mdl/extra/material.css',
      
      'react-mdl/extra/material.js',
      './src/index.js'
    ]
    ,
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: ['babel-loader'  ],
            // query: {
            //           cacheDirectory: true,
            //           presets: ['react', 'es2015']
            //         }
            // query: {
            //   cacheDirectory: true,
            //   presets: ['react', 'es2015']
            // }
            //'!!style!css!react-mdl/extra/material.css' 
           //'react-mdl/extra/material.js'
           
            // Exclude `js` files to keep "css" loader working as it injects
            // it's runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
           
         
          },
          { test: /\.css$/, use:['style-loader','css-loader'] },
          { test: /\.ts$/, use: 'ts-loader' },
          { test: /\.sass$/, use: 'sass-loader' },
          {test: /\.(jpg|jpeg|png|gif|mp3|svg)$/, use:['file-loader']}, 
          { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
          
          // {
          //   oneOf: [{
          //     exclude: [ /\.ejs$/],
          //     use: 'file-loader',
          //     // options: {
          //     //   name: 'static/media/[name].[hash:8].[ext]',
          //     // }
          //   }]   
          // }
        ],
        // loaders: [
        //     {
        //       test: /\.jsx?$/,
        //       loader: 'babel-loader',
        //       exclude: /node_modules/,
        //       query: {
        //         cacheDirectory: true,
        //         presets: ['react', 'es2015']
        //       }
        //     }
        //   ]
      },
      resolve: {
     
        extensions: ['*', '.js', '.jsx','.css'],
      
      },
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve('./build/index.html'),
        }),
        // new HtmlWebpackPlugin({
        //   template: './dist/index.html',
        //   filename: './index.html',
        //   favicon: './public/favicon.ico'
        // })
      ],
    devServer: {
      inline: true,
      contentBase: './build',
      hot:true,
      port:8092,
      historyApiFallback: true,
      open:true,
      watchContentBase: true,
      
      // --public --hot --host 127.0.0.1
      // overlay:{
      //   error:true,
      //   warning:true
      // },

      //  host:'1.1.1.1           '
    }
  //   middleware(compiler, {
  //     headers: {
  //         "Access-Control-Allow-Origin": 127.0.0.1
  //     }
  // }
  // --public --hot --host 127.0.0.1
  };