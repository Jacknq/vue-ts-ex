declare var require: any
//var navbar = require('./navbar.vue').default //from './Components/navbar'
//import * as home from './Components/Views/home'
//var home =  require('./Components/lib/home.vue').default
import { Component, create, getHelper, Vue, Store } from './ext'
//import Router = require('vue-router')
import { RouterOptions, Location, RouteConfig, Route } from 'vue-router'
import * as VueRouter from 'vue-router'
//import Vue = require('vue') abc++k00012001oo
import router from './System/router'
var App = require('./app.vue').default
Vue.use(VueRouter);

var appl;
window.onload = function () {
  appl =
    new Vue({
      el: '#app',
      router: router,
      components: { App:App },
      render: h => h('App')
    });
}
//sdsasd aaasd
//rt.push('/about');//will navigate to specific route
export default { appl, router }//app
