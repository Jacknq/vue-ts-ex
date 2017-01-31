var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { app: './src/app.ts' },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  //  , libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['','.ts', '.js', '.vue'],//['','.ts', '.js', '.vue', '.vuets'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      // {
      //   test: /\.vue$/,
      //   loader: 'eslint',
      //   include: projectRoot,
      //   exclude: /node_modules/
      // },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
       { test: /\.vts$/, loader: 'vue' },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
       // query: { presets: ['es2015'], plugins: ['transform-decorators-legacy']} 
      },    
    
      // It's important to run 'babel' first this will avoid a compilation error     
      // Run ts loader to transform our typescript into JS     
     // { test: /\.ts(x?)$/, loader: 'babel' },  
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        //loader: 'vue-ts'
        loaders: ['babel-loader', 'vue-ts']
      },
    //    { test: /\.css$/, loader: "style-loader!css-loader",
    //   query: {
    //       limit: 100000,
    //       name: utils.assetsPath('css/[name].[ext]')
    //     }  
    //  },
     // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
    // {
    //   test: /\.ts$/, loaders: [ 'ts-loader'], exclude: /node_modules/
    // }, 
    //  { test: /\.ts(x?)$/, loader: 'babel?presets[]=es2015!ts' },      
      // Run ts loader to transform our typescript into JS
     // { test: /\.ts?$/, loader: "ts-loader" },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 100000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },

  vue: {
      loaders: { ts: 'babel-loader!vue-ts-loader', js: 'babel',
        //loaders: { ts: 'babel-loader!vue-ts-loader', js: 'babel!eslint',
      css: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
       //css:'css',
      stylus: 'vue-style-loader!css!stylus',    
      less: 'vue-style-loader!css!less'   
   }, //{ css: 'vue-style-loader!css'}],//js: 'vue-ts-loader',
 
    // loaders: [ {
    //     test: /\.js$/,
    //     loader: 'babel',
    //     include: projectRoot,
    //     exclude: /node_modules/,
    //     query: { presets: ['es2015'], plugins: ['transform-decorators-legacy','blodsin']} 
    //   }],// utils.cssLoaders(),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]//,
    , esModule: true
  },
    plugins: [
      // new CopyWebpackPlugin([  //replaced with use of root static folder
      //  // context: path.join(__dirname, ''),
      // { from: path.join(__dirname, '../src/assets/AT'), to: path.join(config.build.assetsRoot,'static/AT')}
      //   ])
    ] 
};
