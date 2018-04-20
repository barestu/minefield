<template>
  <div class="home">
    <div class="container">
      <div v-if="show" class="row ml-auto">
        <div v-bind:key="index" v-for="(board, index) in boards" class="col-3" id="fieldCard">
          <Card v-bind:board="board"></Card>
        </div>
      </div>
    </div>
    <!-- <button type="button" @click="play(boards)">Play</button> -->
    <button type="button" @click="reset()">Reset</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
<<<<<<< 1b2ff6e9b39702530a083f8054a65f7b9da38727
import { db } from '@/firebase'
import { mapState } from 'vuex'
=======
import { boardRef } from '@/assets/js/firebase.js'
>>>>>>> add logic

export default {
  name: 'home',
  data () {
    return {
      name: '',
      show: false
    }
  },
  components: {
    Card
  },
  firebase: {
    boards: boardRef
  },
  method: {
    player1Join: function () {
      this.$store.dispatch('player1Join', true)
    },
    player2Join: function () {
      this.$store.dispatch('player2Join', true)
    },
    addData () {
      boardRef.push({
        status: 'safeToHit',
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
      this.show = true
    },
    reset () {
      this.boards.forEach(board => {
        let key = board['.key']
        boardRef.child(key).update({isAlive: false})
      })
      this.show = false
    },
    changeStatus (data) {
      let key = data['.key']
      boardRef.child(key).update({isAlive: true})
      if (data.status === 'bom') {
        alert('woi ini bom')
      }
    }
  },
  created () {
    let roomMineRef = db.ref('RoomMinefield')
    roomMineRef.on('value', (snapshot) => {
      console.log(snapshot.val())
      console.log(this)
      this.$store.dispatch('setPlayer', snapshot.val())
    })
    this.$store.commit('showcard',this.boards)
    this.play(this.boards)
  },
  computed: mapState([
    'player1',
    'player2',
    'player'
  ])
}
</script>

<style scoped>
.home {
  /* margin: 0 210px; */
}

#fieldCard {
  height: 140px;
}
</style>
