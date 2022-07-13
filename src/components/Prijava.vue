<<template>
  <div class="container">
    <h1>Prijava</h1>
    <p>Ispunite formu kako biste kreirali račun</p>
    <hr />

    <label for="email"><b>Email</b></label>
    <input
      type="text"
      placeholder="Unesite Email"
      name="email"
      id="email"
      required
    />

    <label for="psw"><b>Lozinka</b></label>
    <input
      type="password"
      placeholder="Unesite lozinku"
      name="psw"
      id="psw"
      required
    />

    <label for="psw-repeat"><b>Ponovite lozinku</b></label>
    <input
      type="password"
      placeholder="Ponovite lozinku"
      name="psw-repeat"
      id="psw-repeat"
      required
    />
    <hr />
    <p>
      Prijavljujući se pristajete na naše <a href="#">Postavke & Privatnost</a>.
    </p>

    <button type="submit" class="registerbtn" value="Prijava">Prijava</button>
    <div class="container signin">
      <p>Već imate račun? <a href="#">Sign in</a>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prijava",
  props: {
    msg: String,
  },
};
</script>



<style scoped>
div.container {
  font-family: "Times New Roman", Times, serif;
  background-color: black;
  padding: 16px;
  background-color: white;
  box-sizing: border-box;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #ce7522;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

a {
  color: blue;
}

.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>