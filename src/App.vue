<template>
  <div class="app-container">
    <app-header>  </app-header>
    <app-body>  </app-body>
    <app-footer>  </app-footer>


  </div>
</template>

<script>
 import Header from "./components/Header";
 import Body from "./components/Body";
 import Footer from "./components/Footer";

  export default {
  name: 'App',
  components: {
    "app-header": Header,  
    "app-footer": Footer,
    "app-body": Body
  }
};
</script>

<style>
  body {
  font-family: Arial, Helvetica, sans-serif;
  font-size:15px;
  line-height:1.5;
  padding:0;
  margin:0;
  background-color: #f4f4f4;
    }  
	
  app-container {
	max-width: 70%;
	margin:auto;
	overflow:hidden;
} 
</style>
