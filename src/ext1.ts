import { Component, Inject, Model, Prop, Watch } from "vue-property-decorator";
export { Component, Inject, Model, Prop, Watch } from "vue-property-decorator";
//import Vue from 'vue'
import store, { storeData } from "./System/store";
declare var require: any;
import VueRouter from "vue-router";
//import axio, { AxiosRequestConfig, AxiosPromise } from "axios";
//import moment from moment

import * as b from "./ext";
b.Vue.use(VueRouter);

//extending default vue instance with some more stuff
export class Vue extends b.Vue {
  $v: any;
  get sstore() {
    return store;
  }
  get vars(): storeData {
    return store.state.vars;
  }

  public log(val: String) {
    console.log(val);
  }
  public logErr(val: String) {
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

// declare module "vue/types/options" {
//   interface ComponentOptions<V extends b.Vue> {
//     validations?: {}; //; validations () {};
//   }
// }
