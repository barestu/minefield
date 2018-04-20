<template>
<!-- <img :src="cardImage" class="card-img py-1" style="height: 100%;"/> -->
<div class="card-field mx-auto border" id="flip" @click="flipCard(board)">
  <div id="card" :class="{flipped: board.isAlive}">
    <figure class="front">
      1
    </figure>
    <figure class="back">
      {{ board.status }} {{ board.isAlive }}
      <h1 v-if="board.status !== 'bom'">b</h1>
      <h1 v-else>s</h1>
    </figure>
  </div>
</div>
</template>

<script>
import { boardRef } from '@/assets/js/firebase.js'
import image from '@/assets/img/ground_grass.jpg'

export default {
  name: 'Card',
  props: ['board'],
  data: function () {
    return {
      cardImage: image
    }
  },
  firebase: {
    boards: boardRef
  },
  methods: {
    flipCard (data) {
      let key = data['.key']
      boardRef.child(key).update({
        isAlive: true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  background: red;
}

#card .back {
  background: blue;
  transform: rotateY( 180deg);
}

#card.flipped {
  transform: rotateY( 180deg);
}
</style>
