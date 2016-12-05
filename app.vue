<template>
  <div class="container-fluid">
    <navbar></navbar>

    <div class="row">
      <div class="col-md-2">
        <br/> <br/> <br/> 1a of 3  

          
      </div>
      <div class="col-md-8">
       <br/> <br/> <br/>
        <div>
          <h3 @click="hello">
            {{name}} is the best girl for {{i}} times
            <button class="btn btn-secondary" @click.stop="add(2)">+</button>
            <button class="btn btn-secondary" @click.stop="sub">-</button>
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
</template>
<script lang="ts">
var navbar = require('./src/components/navbar.vue').default
var separatets = require('./src/Views/separatets.vue').default
import  store  from './src/System/store'
//import { alert } from 'vue-strap'
//var alert = require('vue-strap').alert;
//var dropdown = require('vue-strap').dropdown;

//var alert = require('bootstrap-vue').alert;
//var dropdown = require('bootstrap-vue').dropdown;

//var navbar = require('vue-strap').navbar;
import {Component, create, getHelper,Vue,Vuex,Lifecycle }  from './src/ext'
var { getters, commit } = getHelper(store)
//import 'tether';
//import "jquery";

//import "bootstrap/dist/js/bootstrap.js";
//import "bootstrap-select/dist/js/bootstrap-select.js";
//var bo = require('bootstrap-vue').default;
//Vue.use(bo);

@Component({  components:{ navbar }  //alert: bo.alert, dropdown:bo.dropdown

 }) //,separatets, about , Bootstrap
export default class App extends Vue {
  name = 'Jenny'
   showRight= false
  //example of manipulating central store values
  @Vuex i = getters('count')
  @Vuex add = commit('increment')
  @Vuex sub = commit('decrement')

  someother ='seomesome'

 @Lifecycle mounted() {
       //here you show the alert
       console.log('created')
       this.showRight = true;
    }
  hello() {
    alert(this.name + ' is the best girl!') 
  }
}
 </script>
<style lang="stylus">
  @import "./node_modules/bootstrap/dist/css/bootstrap.min.css" 
  /* @import "./node_modules/bootstrap-select/dist/css/bootstrap-select.css";*/
  /*@import "//maxcdn.bootstrapcdn.com/bootswatch/3.3.6/sandstone/bootstrap.min.css"*/

    hover-drpdwn-col = #7ca8ef

    .dropdown-item
        &:hover
          background-color:hover-drpdwn-col


</style>