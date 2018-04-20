<template>
  <div id="app" class="background">
    <router-view/>
  </div>
</template>

<style scoped>
.background {
  background: #f3e2c7;
  background: -moz-linear-gradient(45deg, #f3e2c7 0%, #c19e67 50%, #b68d4c 51%, #e9d4b3 100%);
  background: -webkit-linear-gradient(45deg, #f3e2c7 0%,#c19e67 50%,#b68d4c 51%,#e9d4b3 100%);
  background: linear-gradient(45deg, #f3e2c7 0%,#c19e67 50%,#b68d4c 51%,#e9d4b3 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3e2c7', endColorstr='#e9d4b3',GradientType=1 );
}
</style>
