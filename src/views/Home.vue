<template>
  <div class="home border">
    <div class="container">
      <div class="row ml-auto">
        <div v-bind:key="index" v-for="(board, index) in box" class="col-3 my-1" id="fieldCard">
          <Card v-bind:board="board"></Card>
        </div>
      </div>
    </div>
    <button type="button" @click="reset()">Reset</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import { boardRef } from '@/firebase.js'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      name: '',
      box: this.$store.state.boards
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
    this.play(this.boards)
    this.box = this.boards
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
  }
}
</script>

<style scoped>
.home {
  margin: 0 210px;
  background-color: #ffffff;
  height: 100%;
}

#fieldCard {
  height: 140px;
}
</style>
