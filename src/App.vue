<template>
  <div id="app">
    <div id="nav">
    <router-link to="/">Body</router-link> | 
     <router-link to="/about">Header</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './views/Header.vue';
import Body from './views/Body.vue';
import Footer from './views/Footer.vue';
</script>



<style lang="scss">

</style>
