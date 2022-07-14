<template>
  <header>
    <div class="app-container">
      <div id="brand">
        <h1><span class="highlight">Učilica</span></h1>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Početna</router-link></li>
          <li><router-link to="/onama">O nama</router-link></li>
          <li><router-link to="/kontakt">Rezervacija</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/prijava">Prijava</router-link></li>
        </ul>
      </nav>
      <router-view />
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
header {
  background: #434b4e;
  color: #ffffff;
  padding-top: 30px;
  min-height: 70px;
  border-bottom: #dd5c88 4px solid;
}

header nav {
  float: right;
  margin-top: 10px;
  padding-right: 20px;
}
header a {
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
}

header li {
  float: left;
  display: inline;
  padding: 0 20px 0 20px;
}

header #brand {
  float: left;
}
header #brand h1 {
  margin-left: 30px;
  margin-top: 5px;
}

header .highlight,
header .current a {
  color: #dd5c88;
  font-weight: bold;
}

header a:hover {
  color: #cccccc;
  font-weight: bold;
}
.app-container {
  width: 80%;
  margin: 0 auto;
}
</style>