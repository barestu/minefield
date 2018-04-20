<template>
  <div class="home">
    <div class="container mx-auto">
      <div class="text-center">
        <h1 class="display-4">The Minefield Game</h1>
      </div>

      <div class="row ml-auto border">
        <div class="col-md-8 offset-md-2 board border">
          <div class="row">
          <!-- CARD -->
          <div v-bind:key="index" v-for="(board, index) in box" class="col-md-3 border" id="fieldCard">
            <Card v-bind:board="board"></Card>
          </div>

          </div>
        </div>
      </div>
      
      <div class="text-right p-2">
        <button type="button" class="btn btn-info" @click ="reset()">Reset</button>
      </div>
    </div>
<<<<<<< 27bd78d24c45ceba5ba745aa7e7748545565289c
    <button type="button" @click="play(boards)">Play</button>
    <button type="button" @click="reset()">Reset</button>
=======
>>>>>>> styling game board
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import { boardRef } from '@/firebase.js'
// import { mapState } from 'vuex'

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
    Card
  },
  firebase: {
    boards: boardRef
  },
  created: function () {
    this.$store.commit('showcard', this.boards)
    this.box = this.boards
    // this.play(this.boards)
  },
  methods: {
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
        boardRef.child(key1).update({status: array[j].status, isAlive: array[j].isAlive})
        boardRef.child(key2).update({status: temp.status, isAlive: temp.isAlive})
      }
    },
    reset () {
      // this.play(this.boards)
      this.boards.forEach(board => {
        let key = board['.key']
        boardRef.child(key).update({isAlive: false})
      })
    },
    changeStatus (data) {
      let key = data['.key']
      boardRef.child(key).update({isAlive: true})
      if (data.status === 'bom') {
        alert('woi ini bom')
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Coda', cursive;
}

.board {
  background-color: whitesmoke; 
}

#fieldCard {
  height: 130px;
}
</style>
