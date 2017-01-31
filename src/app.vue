<template>
  <div class="container-fluid">
   <link rel="stylesheet" type="text/css" :href="'/static/skins/'+loc+'/style.css'"  />
 
    <navbar></navbar>

    <div class="row">
      <div class="col-md-2">
        <br/> <br/> <br/> 1a of 3
      </div>
      <div class="col-md-10">
        <br/> <br/> <br/>
        <div>
   
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

      <!--<div class="col-md-2">
        <br/> <br/> <br/> 3 of 3
      </div>-->
    </div>

  </div>
  </div>
</template>
<script lang="ts">
//CSS It's recommended to combine it with the css-loader: require("style!css!./file.css").
//var navbar = require('./src/components/navbar.vue').default
//require('style-loader!css-loader!./Todolist.css').toString(‌​)
//var cstyle = require("css-loader!./src/assets/AT/style.css").toString(‌​)
//import './src/assets/AT/style.css'
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
import  navbar from './components/navbar.vue'
import  store  from './System/store'
import {Component, create, getHelper,Vue, Store,Lifecycle }  from './ext'

 var { getters, commit } = getHelper(store)
//require("css!./src/assets/AT/style.css");
//require("style!raw!./src/assets/AT/style.css");
//require("style!raw!./src/assets/AT/style.css")
//import Vue from "./node_modules/vue/dist/vue.common.js";
//var { getters, commit } = getHelper(store)
//import 'tether';
//import "jquery";

//import "bootstrap/dist/js/bootstrap.js";
//import "bootstrap-select/dist/js/bootstrap-select.js";
//var bo = require('bootstrap-vue').default;
//Vue.use(bo);

@Component({  components:{ navbar  }  // multiselect:multiselect,vselect:vselect bo.alert, dropdown:bo.dropdown

 }) //,separatets, about , Bootstrap
export default class App extends Vue {
  name = 'App'
  @Store loc = getters('location')
  @Store vars = getters('vars')
  //example of manipulating central store values
  @Lifecycle mounted() {
       //here you show the alert
       console.log('app mounted')       
    }
}
 </script>
<style lang="stylus">
  @import "./../node_modules/bootstrap/dist/css/bootstrap.min.css" 
  /* @import "./node_modules/bootstrap-select/dist/css/bootstrap-select.css";*/
  /*@import "//maxcdn.bootstrapcdn.com/bootswatch/3.3.6/sandstone/bootstrap.min.css"*/

    hover-drpdwn-col = #7ca8ef

    .dropdown-item
        &:hover
          background-color:hover-drpdwn-col


</style>