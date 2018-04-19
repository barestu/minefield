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

export default {
  name: 'home',
  components: {
    Card
  }
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
