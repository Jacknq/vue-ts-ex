<template>
  <div>
    <navbar></navbar>
    <h1 @click="hello">
      {{name}} is the best girl for {{i}} times
      <button @click.stop="add(2)">+</button>
      <button @click.stop="sub">-</button>
    </h1>
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
  </div>
</template>
<script>
var navbar = require('./src/components/navbar.vue').default
var separatets = require('./src/Views/separatets.vue').default
import  store  from './src/System/store'
import {Component, create, getHelper,Vue,Vuex }  from './src/ext'

var { getters, commit } = getHelper(store)

@Component({  components:{ navbar}  }) //,separatets, about

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