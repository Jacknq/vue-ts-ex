import { Component, create, getHelper, Vue, Vuex } from '../ext'
//import Router = require('vue-router')
import { RouterOptions, Location, RouteConfig, Route } from 'vue-router'
import * as VueRouter from 'vue-router'


//import './vendor' //bootstrap
//require('./main.scss'); //global css

/*
  For components that will be used in html (such as navbar),
  all you need to do is import the file somewhere in your code,
  they are automatically registered when the file is loaded.
  However, if you import the class (ex: import { Navbar } from './navbar'),
  you will have to call new Navbar() somewhere as well. You would want
  to do that if you are defining a components{} object in the @Component
  options parameter. 
*/
//import './components/navbar/navbar'

//import { HomeComponent } from './views/home/home'
//import { AboutComponent } from './views/about/about'

//Vue.use(VueRouter);
var separatets = require('../Views/separatets.vue').default
var about = require('../Views/about.vue').default
var home = require('../Views/home.vue').default
//var app = Vue.extend({});
//var ro :RouteConfig[] = [ { path:'/', component:VueRouter  }]

const router = new VueRouter({
  mode: 'history',//base:'subdomain',
  routes: [

    { path: '/',component: home },
    { path: '/ts', component: separatets },
   // { path: '/ts/:id(\\d+)', component: separatets },
    { path: '/about', component: about },

    { path: '/module/:compname' },
    { path: '*', redirect: '/about' },

  ]
});
export default router
