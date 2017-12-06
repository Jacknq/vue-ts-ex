import Vue from "vue";
import { StorageService } from "./localstorage";

interface Oauth {
  data: object;
  provider: string;
}
export interface storeData {
  count: number;
  isAuth: boolean;
  lang: string;
  mandantid: number;
  location: string;
  token: string;
  servurl: string;
  dateformat: string; //, db:cl.SgnRCloud
  oauth: Oauth;
}
//you may need to store backend url somewhere
var host =
  window.document.location.port == "8080"
    ? "http://localhost:5000"
    : window.location.origin;
//will be in local storage
const dstate: storeData = {
  count: 0,
  isAuth: false,
  token: "",
  lang: "de",
  mandantid: 0,
  location: "AT",
  servurl: host,
  dateformat: "DD.MM.YYYY",
  oauth: null
};

const storage = new StorageService();
//save store in localstorage initialy if doesnt exist yet
storage.setItemInit(storage.C_ENV_KEY, dstate);

const storeData: storeData = JSON.parse(storage.getItem(storage.C_ENV_KEY));
import Vuex from "vuex";
Vue.use(Vuex);
//playing around with vuex,
export interface State {
  vars: storeData;
}
// you can have multiple slots in state, some types you have outside existing store
const statee: State = {
  vars: storeData
}; //if your store gets big you can separate it into several files
const store = new Vuex.Store({
  state: statee,
  mutations: {
    setvars(state, s: storeData) {
      state.vars = s; //storage.setItem(storage.C_ENV_KEY, s)
    },
    increment(state) {
      state.vars.count++;
    },
    decrement(state) {
      state.vars.count--;
    }
  }
});

store.subscribe((mutate, statee) => {
  storage.setItem(storage.C_ENV_KEY, statee);
  if (mutate.type == "setvars") {
    console.log("subscribed muttate");
  }
});

//END COMpound store

export default store;
