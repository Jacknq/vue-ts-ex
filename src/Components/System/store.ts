import {Component, create, getHelper,Vuex }  from '../etx'
import * as Vue from 'vue'
import * as moment from 'moment'

const ENV_KEY = 'ENV_KEY'
const SET_ENV = 'SET_ENV'
const C_time = 'setuptime'

const state = { count:0, isAuth:false, lang:'de', mandantid:0 }; 
 
var hours = 8; // Reset when storage is more than Xhours
var now = moment.utc().format(); //no new date, got problems
var setupTime = localStorage.getItem(C_time);//cannot dateparse here diferent browsers problem
if ( setupTime==undefined ||setupTime==null) {
  //  console.log('setuptime '+setupTime)
    console.log('setting now '+now)
    localStorage.setItem(C_time, now)
} else {
    console.log(Date.parse(now)-Date.parse(setupTime))
    if(Date.parse(now)-Date.parse(setupTime) > 2*60*1000) {//hours*60*60*1000   //2min  2*60*1000
        localStorage.clear()
        localStorage.setItem('setupTime', JSON.stringify(now));
    }
}
if(localStorage.getItem(ENV_KEY)==undefined)
{ 
  localStorage.setItem(ENV_KEY,JSON.stringify(state))
}

var store = create(JSON.parse(localStorage.getItem(ENV_KEY)) )//.
  .getter('count', s => { return s.count}) //s.count)
  .mutation('increment', s=> (n: number) =>{ s.count+=n; })//
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
        localStorage.setItem(ENV_KEY,JSON.stringify(state))
      })}
  )
  .done()

//how to subscribe
store.subscribe( s => { if(s.type=='increment') console.log('sumbsicribed increment is'+ JSON.stringify(s.payload) ) //s
//console.log(store.state)
 })//
//store.subscribe('increment', s => )
  
 export default store