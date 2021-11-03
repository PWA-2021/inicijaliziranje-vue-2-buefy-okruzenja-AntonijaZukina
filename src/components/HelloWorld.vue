<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Ovaj projekt dolazi s predinicijaliziranim Buefyem za lakšu izradu UI
      elemenata. Primjer kako to izgleda pronađite u Form.vue (pokušajte
      Form.vue integrirati u App.vue kao što je integriran ovaj HelloWorld.vue
      da bi vidjeli formu izrađenu s Buefy).
    </p>
    <p>
      <a href="https://buefy.org/documentation/layout" target="_blank"
        >Buefy dokumentaciju možete pronaći ovdje</a
      >. Trebat će vam za izradu cijele vaše aplikacije.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  overflow: hidden;
  padding: 20px;
  background: #f0efef;
  border-radius: 5px;
}

p {
  margin-top: 20px;
}
</style>
