<template>
  <body>
    <div class="app-body">
      <section id="showcase">
        <div class="app-container">
          <h1>Instrukcije za sve!</h1>
          <p>Učenje nikad nije dosadno, provjeri u Učilici</p>
          <p>Prijavi se i rezerviraj svoj termin</p>
        </div>
      </section>
      <section id="newsletter">
        <div class="app-container">
          <h1 class="left half">Preplati se na novosti</h1>
          <form class="left half">
            <input type="email" placeholder="Upiši svoj email" />
            <button type="submit" class="button_1">Preplata</button>
          </form>
        </div>
      </section>

      <section id="novosti">
        <div class="app-container">
          <h1>Novosti</h1>
          <p>Prati najnovije vijesti koje objavljuje...</p>
          <!-- preplatom na novosti na mail dolaze novosti koje vučemo s neke obrazovne stranice -->
        </div>
      </section>
      <hr class="linija" />
      <section id="boxes">
        <div class="app-container">
          <div class="box">
            <img src="~@/assets/osnovna.jpg" />
            <h3>Osnovna škola</h3>
            <p>
              Svi predmeti osnovne škole za klince i klinceze. Nauči što poželiš
              uz naše instruktore. Ništa nije bauk!
            </p>
          </div>
          <div class="box">
            <img src="~@/assets/srednja.jpg" />
            <h3>Srednja škola</h3>
            <p>
              Fizika i matematika ti zadaju muke? Više ne, uz naše metode. Kod
              nas se možeš prijaviti i za pripreme za maturu
            </p>
          </div>
          <div class="box">
            <img src="~@/assets/img8.jpg" />
            <h3>Fakultet</h3>
            <p>
              Pronađi koje sve fakultetske predmete nudimo na našim
              instrukcijama. Sigurno ćeš se iznenaditi
            </p>
          </div>
        </div>
      </section>
      <hr class="linija" />

      <section id="nama">
        <div class="app-container">
          <!-- staviti o nama i sidrište -->
          <h1>O nama</h1>
          <p>
            Mi smo skupina instruktora koja je svoju strast pronašla u
            podučavanju.
          </p>
          <p>
            Uz naš svakodnevni posao svaki dan podučavamo one koji nas traže.
          </p>
        </div>
      </section>

      <section id="mapa">
        <div class="mapa-container">
          <h1>Pronađi nas</h1>
          <!-- staviti kartu -->
          <p>Naš ured nalazi se na Vrbiku. Adresa je.. Mail je..</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44513.140863961766!2d15.920146150078665!3d45.78979920103525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68b441ce2df%3A0x54e2a03adf42446f!2sTehni%C4%8Dko%20veleu%C4%8Dili%C5%A1te%20u%20Zagrebu!5e0!3m2!1shr!2shr!4v1637426172325!5m2!1shr!2shr"
            width="560"
            height="315"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section id="kontakt">
        <div class="kontakt-container">
          <h1>Kontakt</h1>
          <!-- staviti kontakt i sidrište-->
          <form action="/action_page.php">
            <label for="fname">Ime:</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label for="fname">Email:</label><br />
            <input type="email" id="email" name="email" /><br />
            <label for="lname">Naslov:</label><br />
            <input type="text" id="lname" name="lname" /><br /><br />
            <textarea name="message" rows="10" cols="30"></textarea>
            <input class="button_2" type="submit" value="Pošalji" />
          </form>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KGFPry6eL0g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  </body>
</template>
<script>
export default {
  name: "Body",
};
</script>
<style scoped>
app-container {
  max-width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.mapa-container {
  max-width: 80%;
  margin: 0 auto;
  overflow: hidden;
  min-height: 450px;
}
.kontakt-container {
  max-width: 80%;
  margin: 0 auto;
  overflow: hidden;
  min-height: 450px;
}
.left {
  float: left;
}
.half {
  width: 50%;
}

#showcase {
  min-height: 400px;
  background: url("/images/1611.jpg") no-repeat 0 -380px;
  background-size: 1300px 900px;
  text-align: center;
  color: #ffffff;
}
#showcase h1 {
  margin: 0px;
  padding-top: 100px;
  font-size: 55px;
}
#showcase p {
  font-size: 20px;
  color: white;
  font-weight: bold;
}

#newsletter {
  padding-top: 25px;
  padding-bottom: 60px;
  color: #ffffff;
  background: #35424a;
  margin: 0 auto;
  text-align: center;
}
#newsletter h1 {
  margin: 0;
  padding: 0;
}
#newsletter input[type="email"] {
  padding: 4px;
  height: 25px;
  width: 250px;
}

.button_1 {
  height: 38px;
  background: #dd5c88;
  border: 0;
  padding-left: 20px;
  padding-right: 20px;
  color: #ffffff;
  cursor: pointer;
}

#novosti {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
}
hr.linija {
  border-bottom: #dd5c88 3px solid;
}
#boxes {
  margin-top: 20px;
  padding-bottom: 20px;
  min-height: 340px;
}
#boxes .box {
  float: left;
  text-align: center;
  width: 30%;
  padding: 1.5%;
}
#boxes .box img {
  width: 250px;
}

#nama {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  margin-top: 20px;
  color: black;
  background-color: #f4f4f4;
  margin-bottom: 20px;
}

#mapa {
  min-height: 430px;
  color: #ffffff;
  background-color: #dd5c88;
}
#mapa p {
  width: 50%;
  float: left;
}
#mapa iframe {
  float: left;
  width: 50%;
}

#kontakt input {
  height: 25px;
  width: 250px;
}
#kontakt textarea {
  width: 250px;
}
#kontakt {
  padding: 20px;
  color: black;
  background-color: #f4f4f4;
}
#kontakt form {
  float: left;
  width: 50%;
  margin-top: 10px;
}

#kontakt .button_2 {
  padding: 4px;
  height: 50px;
  background: #dd5c88;
  border: 0;
  color: #ffffff;
  width: 256px;
}
#kontakt iframe {
  float: right;
  margin-top: 10px;
  width: 50%;
}
</style>
