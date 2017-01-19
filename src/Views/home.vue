<template>
    <div>
        This Home template..{{someabout}}
        </br>
         <h3 @click="hello">
            {{name}} has the best button for {{i}} times
            <button class="btn btn-secondary" @click.stop="add(2)">+</button>
            <button class="btn btn-secondary" @click.stop="sub">-</button>
          </h3>
    </div>
</template>
<script lang="ts">
import  {Component, create, getHelper,Vue,Vuex, Prop, Watch,Lifecycle }  from '../ext'
 var multiselect = require('vue-multiselect').default;
 import  store  from '../System/store'
 var { getters, commit } = getHelper(store)

 @Component({
      name: 'home', components:{  multiselect:multiselect }
 })
export default class extends Vue {
  name = 'home'
  someabout = 'home'    
  @Vuex i = getters('count')
  @Vuex add = commit('increment')
  @Vuex sub = commit('decrement')

 @Lifecycle mounted() {
       //here you show the alert
       console.log('home mounted')      
    }
  hello() {
    alert(this.name + ' is the best girl!') 
  }
}
</script>