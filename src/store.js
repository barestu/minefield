import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: [],
    player1: false,
    player2: false
  },
  mutations: {
    setPlayer (state, players) {
      state.player = players
    },
    player1Join (state, status) {
      state.player1 = status
    },
    player2Join (state, status) {
      state.player2 = status
    }
  },
  actions: {
    setPlayer ({ commit }, players) {
      commit('setPlayer', players)
    },
    player1Join ({ commit }, status) {
      commit('player1Join', status)
    },
    player2Join ({ commit }, status) {
      commit('player2Join', status)
    }
  }
})
