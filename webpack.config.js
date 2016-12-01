var path =  require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');


module.exports = {
      context: path.resolve(__dirname, './'),
    entry: { app: './app.ts', },
    output: { filename: 'app.js' },
//'vue$': 'vue/dist/vue.common.js',
    // resolve TypeScript and Vue file
    resolve: {
        extensions: ['', '.ts', '.vue', '.js'],
        alias: {   
          'vue$': 'vue/dist/vue.common.js'
       }
    },

    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.ts$/, loader: 'vue-ts' }
        ]
    },
    vue: {
      // instruct vue-loader to load TypeScript
      loaders: { ts: 'vue-ts-loader', js: 'vue-ts-loader' },//js: 'vue-ts-loader', 
      // make TS' generated code cooperate with vue-loader
      esModule: true
    },
     plugins: [
  
    // new webpack.DefinePlugin({
    //   'process.env': config.dev.env
    // }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  
  ]
};
