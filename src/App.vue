<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png" /> -->
    <Home msg="Dobrodošli u Vue 2 za PWA kolegij" />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
}

img {
  display: block;
  margin: 30px auto;
}
</style>
