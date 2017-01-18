import { Component, create, getHelper, Vuex } from '../ext'
import * as Vue from 'vue'
import * as moment from 'moment'
import { StorageService } from './localstorage'
interface storeData {
    count: number, isAuth: boolean, lang: string, mandantid: number, location:string, token:string
}
const state : storeData = { count: 0, isAuth: false,token:'', lang: 'de', mandantid: 0, location:'AT' };


const storage = new StorageService();
      storage.setItemInit(storage.C_ENV_KEY, state);
const storeData : storeData = JSON.parse(storage.getItem(storage.C_ENV_KEY));

var store = create(storeData)//.
  .getter('count', s => { return s.count  })
  .getter('location', s => { return s.location  })
  .getter('vars', s => { return s  })
  .mutation('increment', s => (n: number) => { s.count += n; })//
  .mutation('decrement', s => () => {
    if (s.count <= 0) {
      alert('Start from 0')
      return
    }
    s.count--
  }).plugin(store => {
    //  initState = store.state
    store.subscribe((mut, state) => {
      // expect(state).to.equal(store.state)
      //  mutations.push(mut)
      console.log('saving mutation');
      storage.setItem(storage.C_ENV_KEY, state)
    })
  }
  )
  .done()

//how to subscribe
store.subscribe(s => {
  if (s.type == 'increment') console.log('sumbsicribed increment is' + JSON.stringify(s.payload))
  // else console.log(s.payload) //s
  //console.log(store.state)
})//
export default store