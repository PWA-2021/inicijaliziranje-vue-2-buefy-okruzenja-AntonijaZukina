<template>
  <div class="body">
    <div class="timeline">
      <div class="container left">
        <div class="content">
          <h2>2022</h2>
          <p>
            U sklopu bilateralne suradnje Ekonomskog fakulteta i Ural Federal
            University-a, naši su studenti imali mogućnost pohađati desetu
            jesensku školu na temu „Sustainable business development: Smart
            future for all" koja se održala od 10. do 18. studenog u
            Ekaterinburgu, Rusija.
          </p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>2021</h2>
          <p>
            U nizu natjecanja koje organizira Agencija za odgoj i obrazovanje
            26. i 27. travnja 2021. u Crikvenici je održano državno natjecanje
            iz područja vizualnih umjetnosti i dizajna. U kategoriji 2A i 2B za
            učenike od 1.-4.razreda srednjih škola gimnazija na državnu razinu
            pozvano je deset učenika među kojima su bile i naše učenice trećih
            razreda Klara Crčić ( 3.f), Tereza Turić ( 3.g) i Lucija Adžaga (
            3.d) Tema ovogodišnjeg natjecanja bila je Ljudsko tijelo u
            umjetnosti.
          </p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>2017</h2>
          <p>
            Ekonomska i birotehnička škola Bjelovar dobila je od Agencije za
            mobilnost i programe EU Erasmus + eTwinning, Nacionalnu oznaku
            kvalitete za eTwinning projekte “Virtualni sajam vježbeničkih
            tvrtki” i “SWOT VET”. Spomenute projekte su zajedno s učenicima
            provodili naši nastavnici Biljana Ilkoski i Saša Aušperger.
          </p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>2016</h2>
          <p>
            Naši učenici ponovno su briljirali na jednom od većih informatičkih
            natjecanja, Srednjoeuropskoj informatičkoj olimpijadi, osvojivši čak
            sedam medalja. Natjecanje je održano od 1. do 5. rujna u Zagrebu u
            online formatu. Sudjelovalo je 48 natjecatelja iz 11 zemalja, a
            Hrvatsku su predstavljale dvije ekipe.
          </p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>2013</h2>
          <p>
            Nekolicina naših najboljih učenika sdjelovala je na dvije velike
            olimpijade, a devetero njih osvojilo je medalje. S 5. europske
            juniorske informatičke olimpijade u Hrvatsku stižu četiri medalje, a
            na Srednjoeuropskoj matematičkoj olimpijadi, čiji je domaćin bila
            Hrvatska, naši su učenici osvojili pet medalja u pojedinačnom dijelu
            natjecanja.
          </p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>2012</h2>
          <p>
            Osim naših mladih matematičara, briljantan uspjeh ostvarili su i
            informatičari na 5. europskoj juniorskoj informatičkoj olimpijadi
            koja se održala online, a domaćin je bila Rumunjska.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Uspjesi",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.body {
  background-color: #474e5d;
  font-family: "Times New Roman", Times, serif;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}
.container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #ff9f55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

.right::after {
  left: -16px;
}
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}
</style>