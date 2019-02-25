import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    list: [],
    cars: []
  },
  mutations: {
    shoplist: (state, payload) => {
      state.list = [...payload]
    },
    cars: (state, payload) => {
      state.cars = [...payload]
    }
  },
  actions: {
    shopcar({
      commit
    }) {
      axios.get("/car").then(res => {
        commit("shoplist", res.data)
      })
    }
  },
})
export default store
