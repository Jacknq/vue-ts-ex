import { Component, create, getHelper, Vuex } from '../ext'
import * as Vue from 'vue'
import * as moment from 'moment'
import { StorageService } from './localstorage'

const state = { count: 0, isAuth: false, lang: 'de', mandantid: 0 };

const storage = new StorageService();
storage.setItemInit(storage.ENV_KEYs, state);
const storeData = JSON.parse(storage.getItem(storage.ENV_KEYs));

var store = create(storeData)//.
  .getter('count', s => { return s.count })
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
      storage.setItem(storage.ENV_KEYs, state)
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