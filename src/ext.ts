
//export  module  avts{
import { Vue, Component } from 'av-ts'
export { Vue, Component, Prop, Watch } from 'av-ts'
export { create, getHelper, Vuex } from 'kilimanjaro'
//import { ComponentOptions } from 'vue/types/options';
import { ComponentMeta } from'av-ts/dist/src/interface.d'
 declare module 'av-ts/dist/src/interface.d' {
   //export  module  avts {
  export  interface ComponentMeta extends Vue.ComponentOptions<Vue> {
            TESTER?:string
         // etx.e         
         }
         
//export declare function Component(config?: ComponentMeta): <T extends VClass<Vue>>(ctor: T) => T;         
 }
// }
//export {Vue,Component, create,getHelper,Vuex}