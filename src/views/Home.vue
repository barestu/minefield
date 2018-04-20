<template>
  <div class='home'>
    <Login v-if='players && players.length'/>
    <div class='container mx-auto' v-if='players[0].status === true && players[1].status === true'>
      <div class='text-center'>
        <h1 class='display-4'>The Minefield Game</h1>
      </div>

      <div class='row ml-auto border'>
        <div class='col-md-8 offset-md-2 board border'>
          <div class='row'>
          <!-- CARD -->
          <div v-bind:key='index' v-for='(board, index) in box' class='col-md-3 border' id='fieldCard'>
            <Card v-bind:board='board'></Card>
          </div>

          </div>
        </div>
      </div>
      <div class='text-right p-2'>
        <button type='button' class='btn btn-info' @click ='reset()'>Reset</button>
      </div>
    </div>
    <button type='button' @click='play(boards)'>Play</button>
    <button type='button' @click='reset()'>Reset</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import { boardRef } from '@/firebase.js'
import Login from '@/components/Login.vue'
import { db } from '@/firebase'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      name: '',
      box: this.$store.state.boards,
      start: false
    }
  },
  components: {
    Card,
    Login
  },
  firebase: {
    boards: boardRef,
    players: db.ref('RoomMinefield')
  },
  created: function () {
    this.$store.commit('showcard', this.boards)
    this.box = this.boards
  },
  methods: {
    player1Join: function () {
      this.$store.dispatch('player1Join', true)
    },
    player2Join: function () {
      this.$store.dispatch('player2Join', true)
    },
    addData () {
      boardRef.push({
        status: 'bom',
        isAlive: false
      })
    },
    play (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        let key1 = array[i]['.key']
        let key2 = array[j]['.key']
        boardRef
          .child(key1)
          .update({ status: array[j].status, isAlive: array[j].isAlive })
        boardRef
          .child(key2)
          .update({ status: temp.status, isAlive: temp.isAlive })
      }
    },
    reset () {
      // this.play(this.boards)
      this.boards.forEach(board => {
        let key = board['.key']
        boardRef.child(key).update({ isAlive: false })
      })
    },
    changeStatus (data) {
      let key = data['.key']
      boardRef.child(key).update({ isAlive: true })
      if (data.status === 'bom') {
        alert('woi ini bom')
      }
    }
  },
  computed: mapState(['player1', 'player2'])
}
</script>

<style scoped>
h1 {
  font-family: 'Coda', cursive
}

.board {
  background-color: whitesmoke
}

#fieldCard {
  height: 130px
}

.home {
  margin: 0 210px
}

#fieldCard {
  height: 140px
}
</style>
