<template>
  <div class="home">
    <div class="container">
      <div class="row ml-auto">
        <div :key="index" v-for="index in 16" class="col-3" id="fieldCard">
          <Card></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import { db } from '@/firebase'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    Card
  },
  method: {
    player1Join: function () {
      this.$store.dispatch('player1Join', true)
    },
    player2Join: function () {
      this.$store.dispatch('player2Join', true)
    }
  },
  created () {
    let roomMineRef = db.ref('RoomMinefield')
    roomMineRef.on('value', (snapshot) => {
      console.log(snapshot.val())
      console.log(this)
      this.$store.dispatch('setPlayer', snapshot.val())
    })
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
  margin: 0 210px;
}

#fieldCard {
  height: 140px;
}
</style>
