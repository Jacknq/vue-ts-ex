//import { Component, create, getHelper, Store } from '../ext'
import  Vue from 'vue'

import { StorageService } from './localstorage'

interface Oauth{
  data:object,
  provider:string
}
export interface storeData {
    count: number, isAuth: boolean, lang: string,
     mandantid: number,
     location:string, token:string, servurl:string, dateformat:string//, db:cl.SgnRCloud
     oauth:Oauth
}
var host = window.document.location.port=='8080'?'http://localhost:5000':window.location.origin;
//will be in local storage
const dstate : storeData = { 
  count: 0, isAuth: false,token:'', lang: 'de', 
  mandantid: 0, location:'AT', 
  servurl : host, dateformat:'DD.MM.YYYY'
  ,oauth:null
//db : null 
  };


const storage = new StorageService();
//state.db = new cl.SgnRCloud(state.servurl, state.token);
      storage.setItemInit(storage.C_ENV_KEY, dstate);

const storeData : storeData = JSON.parse(storage.getItem(storage.C_ENV_KEY));
  import Vuex from 'vuex'
   Vue.use(Vuex);
//playing around with vuex
export interface State {
 
  vars:storeData
}
const statee:State = {

  vars:storeData
}
               const store =  new Vuex.Store({
               
                 state:statee,
                  mutations: {
                   setvars (state, s:storeData) {
                      state.vars = s; //storage.setItem(storage.C_ENV_KEY, s)
                   },
                   increment(state){
                    state.vars.count++;
                  },
                  decrement(state){
                   state.vars.count--;
                 }
                  
                  }
               })

    //  store.subscribe(s => {
    //    if(s.type=='setvars')
    //    {console.log('subscribed');}
    //  })    
     store.subscribe((mutate,  statee ) => {
      storage.setItem(storage.C_ENV_KEY, statee);
      if(mutate.type=='setvars')
      {console.log('subscribed muttate');}
    })     

//END COMpound store

export default store