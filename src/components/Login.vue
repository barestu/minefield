<template>
  <section class='login-block'>
    <div class='container'>
      <div class='row'>
        <div class='col-md-6 login-sec'>
          <h2 class='text-center'>Player 1</h2>
           <div class='form-check'>
              <div v-if='players.length'>
                 <button  v-if='!players[0].status' @click='player1Join()' type='button' class='btn btn-primary btn-lg btn-block' id='button1'>JOIN</button>
                <h3 v-else class='text-center'>READY !</h3>
              </div>
            </div>
        </div>
        <div class='col-md-6 login-sec'>
          <h2 class='text-center'>Player 2</h2>
            <div class='form-check'>
              <div v-if='players.length'>
                 <button  v-if='!players[1].status' @click='player2Join()' type='button' class='btn btn-primary btn-lg btn-block' id='button2'>JOIN</button>
                <h3 v-else class='text-center'>READY !</h3>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { db } from '@/firebase'
export default {
  name: 'Login',
  props: {
    msg: String
  },
  methods: {
    ...mapActions([
      'player1Join',
      'player2Join',
      'player1Finish',
      'player2Finish'
    ])
  },
  firebase: {
    players: db.ref('RoomMinefield')
  },
  computed: mapState([ 'player1', 'player2' ])
}
</script>
