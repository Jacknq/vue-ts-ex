<template>
  <div class="container">
   <navbar></navbar>

    <div class="container">

      <div class="row">
        <div class="col-md-2">
           <br/><br/><br/>
          1a of 3
        </div>
        <div class="col-md-8">
          <br/><br/><br/>
          <div>
            <h3 @click="hello">
              {{name}} is the best girl for {{i}} times
              <button @click.stop="add(2)">+</button>
              <button @click.stop="sub">-</button>
            </h3>
            </transition>
          </div>
          <transition name="fade" mode="out-in">
            <!--<div v-if="this.$route.params.compname==undefined">-->
            <router-view class="view"></router-view>
            <!--</div>-->
          </transition>
          <!--DYNAMIC MODULE-->
          <div class="view" v-if="$route.params.compname!=undefined">
            <transition name="fade" mode="out-in">
              <component :is="$route.params.compname"></component>
            </transition>
          </div>
        </div>

        <div class="col-md-2">
          3 of 3
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
var navbar = require('./src/components/navbar.vue').default
var separatets = require('./src/Views/separatets.vue').default
import  store  from './src/System/store'
//import { alert } from 'vue-strap'
//var navbar = require('vue-strap').navbar;
//-let jquery = require('jquery');
//let Bootstrap= require('bootstrap');
//var Bootstrap= require('bootstrap-without-jquery');
//let BootstrapVue = require('bootstrap-vue');

// Globally register bootstrap-vue components
//Vue.use(BootstrapVue);
import {Component, create, getHelper,Vue,Vuex }  from './src/ext'
//Vue.use(BootstrapVue);
var { getters, commit } = getHelper(store)
import 'tether';
import "jquery";
import "bootstrap/dist/js/bootstrap.js";


@Component({  components:{ navbar}  }) //,separatets, about , Bootstrap

export default class App extends Vue {
  name = 'Rem'
  //example of manipulating central store values
  @Vuex i = getters('count')
  @Vuex add = commit('increment')
  @Vuex sub = commit('decrement')

  someother ='seomesome'

  hello() {
    alert(this.name + ' is the best girl!') 
  }
}
 </script>
<style lang="stylus">
  @import "./node_modules/bootstrap/dist/css/bootstrap.min.css"
  /*@import "//maxcdn.bootstrapcdn.com/bootswatch/3.3.6/sandstone/bootstrap.min.css"*/
</style>