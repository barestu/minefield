import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [],
    players: ''
  },
  getters: {
    startGame: (state) => {
      if (state.player1 === true && state.player2 === true) {
        return 1
      } else {
        return 0
      }
    }
  },
  mutations: {
    showcard (state, payload) {
      state.boards = payload
    },
    update (state, payload) {
      state.boards = payload
    },
    playerJoin (state, payload) {
      state.players = payload
    }
  },
  actions: {
    setPlayer ({ commit }, players) {
      commit('setPlayer', players)
    },
    player1Join ({ commit }) {
      db.ref('RoomMinefield').child('player1').update({
        status: true
      })
      document.getElementById('button2').setAttribute('disabled', 'disabled')
      commit('playerJoin', 'player1')
    },
    player2Join ({ commit }) {
      db.ref('RoomMinefield').child('player2').update({
        status: true
      })
      document.getElementById('button1').setAttribute('disabled', 'disabled')
      commit('playerJoin', 'player2')
    },
    player1Finish ({ commit }) {
      db.ref('RoomMinefield').child('player1').update({
        status: false
      })
    },
    player2Finish ({ commit }) {
      db.ref('RoomMinefield').child('player2').update({
        status: false
      })
    }
  }
})
