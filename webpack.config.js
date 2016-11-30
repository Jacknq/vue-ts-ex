var path =  require('path');
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
}
