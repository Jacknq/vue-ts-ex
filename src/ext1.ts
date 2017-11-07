
import { Component, Inject, Model, Prop, Watch  } from 'vue-property-decorator'
export { Component, Inject, Model, Prop, Watch  } from 'vue-property-decorator'
//import Vue from 'vue'
import   store ,{storeData}  from './System/store'
declare var require: any
import  VueRouter from 'vue-router';
import axio, { AxiosRequestConfig, AxiosPromise } from 'axios';
var moment = require("moment");
//export { d }
//SgnRCloud
 //var { getters, commit } = getHelper(store)

// }
//import b = require('./ext');
import * as b from './ext';
b.Vue.use(VueRouter);
//extension methods for default class
// @Trait class VegetableSearchable extends b.Vue {
//   vegetableName = 'tomato'
//   searchVegetable() { alert('find vegi!')}
// }
//extend inferace for validations
declare module 'vue/types/options' {
  interface ComponentOptions<V extends b.Vue> {
    validations?: {} //; validations () {};
  }
}

//declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
//interface Vue {
//$myProperty: string
  //}
//}
//declare module "Vue" {
  export class Vue extends b.Vue {
    $v:any;
    get sstore () {
      return store;
    }
    get vars ():storeData {
      return store.state.vars
    }
  //@Store setvars = commit('varsset')  
      public log(val:String){
      console.log(val);
    }
    public logErr(val:String){
      console.log(val);
    }
    
  }
//}
 
//var v = new Vue();
//EXAMPLE OF DATETIME formatting - FILTER
// b.Vue.filter('dtformat', function (val) {
  	
//   if(val!=null && val!='')
//     return  moment(val).format(v.vars.dateformat);
// return '';
// })

// declare module "Vue" {
// export class Vue extends V {

//    public log(val:String){
//      console.log(val);
//    }
//    public logError(val:String){
//      console.log(val);
//    }
// }}