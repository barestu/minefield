import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase'

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
    player1Join ({ commit }) {
      db.ref('RoomMinefield').child('player1').update({
        status : true
      })
      commit('player1Join', true)
    },
    player2Join ({ commit }) {
      db.ref('RoomMinefield').child('player2').update({
        status : true
      })
      commit('player2Join', true)
    },
    player1Finish ({ commit }) {
      db.ref('RoomMinefield').child('player1').update({
        status : false
      })
      commit('player1Join', false)
    },
    player2Finish ({ commit }) {
      db.ref('RoomMinefield').child('player2').update({
        status : false
      })
      commit('player2Join', false)
    }
  }
})
