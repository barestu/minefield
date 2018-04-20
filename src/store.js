import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: []
  },
  mutations: {
    showcard (state, payload) {
      state.boards = payload
    },
    update (state, payload) {
      state.boards = payload
    }
  },
  actions: {

  }
})
