declare var require: any

import { Component, Vue} from './ext1'
import { RouterOptions, Location, RouteConfig, Route } from 'vue-router'
import VueRouter from 'vue-router'
declare var require: any
//import Vue = require('vue') abc++k00012001oo
import router from './System/router'
import App from './app.vue'


Vue.use(VueRouter);
Vue.config.devtools = true; //enable debug for build

//var appl:Vue;
//window.onload = function () {
  
  //Vue.config.debug = true;
  let  appl =
    new Vue({
      el: '#app',
      router: router,
      components: { App:App },
      render: h => h('App'), 
      //validations:{},
      methods:{ 
      //  validations(){}
       }
    });
    
//}
//sdsasd aaasd
//rt.push('/about');//will navigate to specific route
export default { appl, router }//app
