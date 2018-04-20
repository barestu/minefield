<template>
<div class="card-field mx-auto" id="flip" @click="flipCard(board)" :class="{clickNone: clickNone}">
  <div id="card" :class="{flipped: board.isAlive}">
    <figure class="front">
      <img :src="cardBack" class="card-img p-1" style="height: 100%;"/>
    </figure>
    <figure class="back">
      <!-- {{ board.status }} {{ board.isAlive }} -->
      <h1 v-if="board.status === 'bom'">
        <img :src="cardBoom" class="card-img pt-4" style="height: 100%;"/>
      </h1>
      <h1 v-else>
        <img :src="cardSafe" class="card-img py-1" style="height: 100%;"/>
      </h1>
    </figure>
  </div>
</div>
</template>

<script>
import { boardRef } from '@/firebase.js'
import cardBack from '@/assets/img/card-back.jpg'
import cardBoom from '@/assets/img/card-boom.png'
import cardSafe from '@/assets/img/card-safe.jpg'
import { db } from '@/firebase'
import cron from 'cron'
const CronJob = cron.CronJob

export default {
  name: 'Card',
  props: ['board'],
  data: function () {
    return {
      cardBack: cardBack,
      cardBoom: cardBoom,
      cardSafe: cardSafe,
      clickNone: false
    }
  },
  firebase: {
    boards: boardRef
  },
  methods: {
    scan () {
      console.log('------------------------------------------------------')
      let players = this.$store.state.players
      console.log(players)
      if (players.length === 0) {
        this.clickNone = true
      } else {
        this.clickNone = false
      }
    },
    flipCard (data) {
      let key = data['.key']
      boardRef.child(key).update({
        isAlive: true
      })
      if (data.status === 'bom') {
        db.ref('status').update({isWin: true})
      }
    }
  },
  created: function () {
    this.scan()
  }
}
</script>

<style scoped>
.card-field {
  position: relative;
  perspective: 800px;
  width: 100%;
  height: 100%;
}

#card {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
}

#card figure {
  margin: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

#card .front {
  background: #fbfbfb;
}

#card .back {
  background: #fbfbfb;
  transform: rotateY( 180deg);
}

#card.flipped {
  transform: rotateY( 180deg);
}

.card-img {
  height: 100%;
  background-size: cover
}

.clickNone {
  pointer-events:none;
}
</style>
