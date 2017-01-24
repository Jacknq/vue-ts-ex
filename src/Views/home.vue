<template>
    <div>
        This Home template..{{someabout}}
        </br>
         <h3 @click="hello">
            {{name}} has the best button for {{i}} times
            <button class="btn btn-secondary" @click.stop="add(2)">+</button>
            <button class="btn btn-secondary" @click.stop="sub">-</button>
          </h3>

    
      
      <div class="col-sm-5">
     
        <calendar v-model='date2' > </calendar>
          <calendar v-model='date' > </calendar>
      </div>
      
    
<!--<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-addon"> <i class="fa fa-calendar"></i></span>
 
</div>-->

    </div>
    
</template>
<script lang="ts">
import  {Component, create, getHelper,Vue,Vuex, Prop, Watch,Lifecycle,p }  from '../ext'
 var multiselect = require('vue-multiselect').default;
 import  store  from '../System/store'
 var { getters, commit } = getHelper(store)
 import calendar from '../components/common/calendar.vue'
 //$.datepicker = require("bootstrap-datepicker");

 @Component({
      name: 'home', components:{  multiselect:multiselect, 
  
      calendar }
 })
export default class extends Vue {
  name = 'home'
  someabout = 'home' 
  date= ''  
  date2 = ''
  @Prop result1 = p({
    type: Object,
    // required: true
      default: null
     //,twoWay: true
  })
 
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
<style lang="stylus">
  @import "../../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css"; 
  @import "../../node_modules/font-awesome/css/font-awesome.min.css" ;
  </style>