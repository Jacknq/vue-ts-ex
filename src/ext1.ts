
//export  module  avts{
//import { Vue as V} from './ext'
export {  Component, Prop, Watch, Lifecycle,CreateElement, p } from 'av-ts'
export { create, getHelper, Vuex, Store } from 'kilimanjaro'

// }
import b = require('./ext');
//extension methods for default class
export class Vue extends b.Vue {
    public log(val:String){
     console.log(val);
   }
   public logErr(val:String){
     console.log(val);
   }
}
// declare module "Vue" {
// export class Vue extends V {

//    public log(val:String){
//      console.log(val);
//    }
//    public logError(val:String){
//      console.log(val);
//    }
// }}