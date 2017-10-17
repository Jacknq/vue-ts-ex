import { Component } from '../ext'
import { ActionContext, Store,
   Action,ActionMethod,Getter,
   Mutation,MutationMethod,Plugin } from "vuex";
import * as Vue from 'vue'
import * as moment from 'moment'
import { StorageService } from './localstorage'
//import * as cl  from '../components/hubsflow'
interface Oauth{
  data:object,
  provider:string
}
export interface storeData {
    count: number, isAuth: boolean, lang: string,
     mandantid: number,
     location:string, token:string, servurl:string, dateformat:string//, db:cl.SgnRCloud
     oauth?:Oauth| null
}
var host = window.document.location.port=='8080'?'http://localhost:5000':window.location.origin;
//will be in local storage
const state : storeData = { count: 0, isAuth: false,token:'', lang: 'de', 
mandantid: 0, location:'AT', 
servurl : host, dateformat:'DD.MM.YYYY'
,oauth:null
//db : null 
};


const storage = new StorageService();
//state.db = new cl.SgnRCloud(state.servurl, state.token);
      storage.setItemInit(storage.C_ENV_KEY, state);


const storeData : storeData = JSON.parse(storage.getItem(storage.C_ENV_KEY));

 
var store3 = storeData;
//lets create vatiables that are not in local storage
// var store3 = create({db: 'abc'})
// .getter('db',s => { return s.db;  })
// .mutation('dbset',s => (n: string)=> { s.db = n; } )
// .module('store', 
// //insert lets put sub variable that is in local storage, dont put complex objects inside
// create(storeData)
// .getter('count', s => { return s.count  })
//  // .getter('location', s => { return s.location  })
//   .getter('vars', s => { return s  })

//   .mutation('varsset', s => (n: storeData) => { Object.keys(s).forEach(key=>s[key]=n[key]); })// Object.keys(s).forEach(key=>s[key]=n[key]);
//   .mutation('increment', s => (n: number) => { s.count += n; })//
//   .mutation('decrement', s => () => {
//     if (s.count <= 0) {
//       alert('Start from 0')
//       return
//     }
//     s.count--
//   })

// //insert END
// ).plugin(store => {
//     //  initState = store.state
//     store.subscribe((mut, state) => {
//       // expect(state).to.equal(store.state)
//       //  mutations.push(mut)
//       console.log('saving mutation');
//       storage.setItem(storage.C_ENV_KEY, state.$('store'))
//     })
//   }
//   ).done();

//cmpdStore.db = new cl.SgnRCloud(state.servurl, state.token);
//END COMpound store

//how to subscribe
// store.subscribe(s => {
//   if (s.type == 'increment') console.log('sumbsicribed increment is' + JSON.stringify(s.payload))
//   // else console.log(s.payload) //s
//   //console.log(store.state)
// })//
export default store3