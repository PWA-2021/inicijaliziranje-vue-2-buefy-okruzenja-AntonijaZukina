<template>
  <div class ="body">        
        <nav>
            <ul>
                <li><a href="#">Početna</a></li>
                <li><a href="#">O nama</a></li>
                <li><a href="#">Naši instruktori</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
        
        <div class="cont">
            <div class="intro">
                <h1>Ono što mi vjerujemo </h1>
                <p>Tu smo kako bi svi zavoljeli učenje i kako bi svakom pristupili najbolje što znamo!</p>
            </div>
            <section class="row-3">
                <div class="first">
                    <img src="~@/assets/calender.png" />
                    <h2>Raspored</h2>
                    <p>Mišljenje je kompleksan psihološki proces, koji zbog složenosti nije u potpunosti proučen. U svakodnevnom govoru mišljenje nije jednoznačan pojam: kada nekoga potičemo da se sjeti nečega (tj. da reproducira zapamćeni materijal), često mu kažemo misli malo, npr. kad zimi mislimo o tome kako bi nam bilo lijepo na nekoj toploj plaži, onda su to zapravo predodžbe mašte, a ako nekoga upitamo što misliš o religiji, mi zapravo želimo čuti njegovo stajalište o tome. Mišljenje uključuje nenamjerno ili namjerno služenje različitim kognitivnim (spoznajnim) doživljajima (osjeti, percepcije, predodžbe, pamćenja, riječi, pojmovi, stavovi itd.), što sve zajedno čini ono što se zove naša svijest o sebi i zbivanjima oko sebe. </p>
                    <a href="#">saznaj više</a>
                </div>
                <div class="second">
                    <img src="~@/assets/clock.png" />
                    <h2>Vrijeme</h2>
                    <p>Logika je umijeće ispravnoga mišljenja, rasuđivanja, prosuđivanja, raspravljanja. Temeljna je filozofska disciplina koja se bavi ispravnim oblicima mišljenja, poimanja, suđenja i zaključivanja, te je stoga polazište i nužni temelj svake valjane spoznaje. U širem smislu mogu se razlikovati filozofijska i znanstvena logika: predmet prve jest izučavanje misli kao zasebne realnosti te kritika i ispitivanje mogućnosti mišljenja uopće, pa se izravnije veže uz probleme spoznajne teorije; druga ispituje mogućnost i primjerenost posebnih misaonih stavova (stajališta), tvrdnji i pravila po kojima je ustrojen misaoni iskaz. Premda stalno mislimo (kada smo pri svijesti), proces mišljenja nije nam introspektivno dovoljno dostupan.</p>
                    <a href="#">saznaj više</a>
                </div>
                <div class="third">
                    <img src="~@/assets/user.png" />
                    <h2>Razmišljanje</h2>
                    <p>Razmišljanje nije prikupljanje informacija niti analiza podataka. Ono nije samo povezivanje predmeta s konceptima odnosno uspostavljanje logičkih veza između koncepata. Razmišljanje uključuje nešto više od mentalne procedure. Razmišljanje je stalna potraga za odgovorom na krajnje pitanje zašto nešto jest, radije negoli ništa. Budući da ništa ne izmiče egzistenciji te da ništa nije izvan velikog lanca bića, cjelokupno razmišljanje jeste aktivnost unutar egzistencije i njenih beskrajnih modaliteta. Bilo da sprovodimo neki naučni eksperiment, pišemo lijepu pjesmu na jutarnjem povjetarcu ili analiziramo moderne gradove, mi se bavimo različitim aspektima i manifestacijama egzistencije.</p>
                    <a href="#">saznaj više</a>
                </div>
            </section>
        </div>
</template>

<script>
export default {
  name: "About",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.body {
  background: url("assets/hero-bg.jpg");
  background-size: cover;
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  color: #202d33;
  font-weight: normal;
}

.cont {
  width: 1000px;
  margin: 0 auto;
  padding-top: 90px;
}

nav {
  position: fixed;
  top: 200px;
  left: 0;
  background: #fafafa;
  padding: 50px 80px 50px 30px;
  border-width: 1px 1px 1px 0px;
  border-color: #d7d7d7;
  border-style: solid;
}

nav h4 {
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 0;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 5px;
}

nav ul li a {
  text-decoration: none;
  color: #202d33;
  line-height: 25px;
}

nav ul li a:hover {
  display: inline-block;
  padding: 0 5px;
  color: white;
  background-color: #f4867c;
}

.intro {
  text-align: center;
  margin-bottom: 100px;
}

section.row-3 {
  position: relative;
  background-color: white;
  height: 640px;
  margin-bottom: 120px;
  padding: 50px 10px 20px 10px;
}

section.row-3 div {
  width: 300px;
  position: absolute;
  text-align: center;
  padding: 10px;
}

section.row-3 div img {
  margin-bottom: 20px;
}

section.row-3 div a {
  display: inline-block;
  background-color: #f4867c;
  color: white;
  padding: 10px 18px;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 30px;
}

section.row-3 div.second {
  left: 340px;
}

section.row-3 div.third {
  left: 660px;
}
</style>