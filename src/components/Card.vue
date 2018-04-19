<template>
  <!-- <img :src="cardImage" class="card-img py-1" style="height: 100%;"/> -->
  <div class="card-field mx-auto border" id="flip" @click="flipCard">
    <div id="card" :class="{flipped: this.showCard}">
      <figure class="front">
        1
      </figure>
      <figure class="back">
        2
      </figure>
    </div>
  </div>
</template>

<script>
import image from '@/assets/img/ground_grass.jpg'

export default {
  name: 'Card',
  props: {
    msg: String
  },
  data: function () {
    return {
      cardImage: image,
      showCard: false
    }
  },
  methods: {
    flipCard () {
      console.log('flip')

      this.showCard = true
      // let card = document.getElementById('card')

      // document.getElementById('flip').addEventListener('click', function () {
      //   card.toggleClassName('flipped')
      // }, false)
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
  transform: rotateY( 180deg );
}

#card.flipped {
  transform: rotateY( 180deg );
}
</style>
