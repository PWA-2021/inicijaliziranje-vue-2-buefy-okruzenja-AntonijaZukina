<template>
  <div class="testbox">
    <form>
      <div class="banner">
        <h1>Rezerviraj svoj termin</h1>
      </div>
      <div class="item">
        <p>Datum</p>
        <input type="date" name="bdate" />
        <i class="fas fa-calendar-alt"></i>
      </div>
      <div class="item">
        <p>Vrijeme</p>
        <input type="time" name="name" />
        <i class="fas fa-clock"></i>
      </div>
      <div class="item">
        <p>Izaberi razinu školovanja</p>
        <select>
          <option value=""></option>
          <option value="1">*Molim izaberite*</option>
          <option value="2">Osnovna škola</option>
          <option value="3">Srednja škola</option>
          <option value="4">Pripreme za maturu</option>
          <option value="5">Fakultet</option>
        </select>
      </div>
      <div class="item">
        <p>Izaberi predmet</p>
        <select>
          <option value=""></option>
          <option value="1">*Molim izaberite*</option>
          <option value="2">Matematika</option>
          <option value="3">Fizika</option>
          <option value="4">Hrvatski jezik</option>
          <option value="5">Kemija</option>
        </select>
      </div>
      <div class="item">
        <p>Zašto tražim instrukcije</p>
        <textarea rows="3"></textarea>
      </div>
      <div class="item">
        <p>Ime</p>
        <input type="text" name="name" />
      </div>
      <div class="item">
        <p>Prezime</p>
        <input type="text" name="name" />
      </div>
      <div class="item">
        <p>Adresa (ukoliko želiš da su instrukcije kod tebe)</p>
        <input type="text" name="name" placeholder="Ulica i broj" />

        <div class="city-item">
          <input type="text" name="name" placeholder="Grad" />
          <input type="text" name="name" placeholder="Kvart" />
          <input type="text" name="name" placeholder="Zip kod" />
          <select>
            <option value="">Kako želim imati instrukcije</option>
            <option value="1">Jedan na jedan</option>
            <option value="2">Prijatelj i ja</option>
            <option value="3">U grupi</option>
            <option value="4">Svejedno mi je</option>
          </select>
        </div>
      </div>
      <div class="item">
        <p>Potrebni sati</p>
        <input type="text" name="name" />
      </div>
      <div class="item">
        <p>Ostali komentari</p>
        <input type="text" name="name" />
      </div>
      <div class="item">
        <p>Pripremam se</p>
        <select>
          <option value=""></option>
          <option value="1">*Molim izaberite*</option>
          <option value="2">Za ispit</option>
          <option value="3">Za usmeni</option>
          <option value="4">Želim ponoviti</option>
          <option value="5">Ne znam ništa</option>
        </select>
      </div>
      <div class="item">
        <p>Željena dužina 1 termina (u minutama)</p>
        <input type="text" name="name" />
      </div>
      <div class="item">
        <p>Kontakt</p>
        <div class="name-item">
          <input type="text" name="name" placeholder="Ime" />
          <input type="text" name="name" placeholder="Prezime" />
        </div>
      </div>
      <div class="item">
        <p>Kontakt Email</p>
        <input type="text" name="name" />
      </div>
      <div class="item">
        <p>Kontakt broj</p>
        <input type="text" name="name" />
      </div>
      <div class="question">
        <p>
          Ukoliko okolnosti ne dopuste instrukcije uživo, online mi je okej?
        </p>
        <div class="question-answer">
          <div>
            <input type="radio" value="none" id="radio_1" name="recorded" />
            <label for="radio_1" class="radio"><span>Da</span></label>
          </div>
          <div>
            <input type="radio" value="none" id="radio_2" name="recorded" />
            <label for="radio_2" class="radio"><span>Ne</span></label>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <button type="submit" href="#">Pošalji</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Rezervacija",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
div,
form,
input,
select,
textarea,
p {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}
h1 {
  position: absolute;
  margin: 0;
  font-size: 32px;
  color: #fff;
  z-index: 2;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 20px;
}
form {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 20px 0;
}
.banner {
  position: relative;
  height: 210px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.banner::after {
  content: "";
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
}
input,
textarea,
select {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
input {
  width: calc(100% - 10px);
  padding: 5px;
}
select {
  width: 100%;
  padding: 7px 0;
  background: transparent;
}
textarea {
  width: calc(100% - 12px);
  padding: 5px;
}
.item:hover p,
.item:hover i,
.question:hover p,
.question label:hover,
input:hover::placeholder {
  color: blue;
}
.item input:hover,
.item select:hover,
.item textarea:hover {
  border: 1px solid transparent;
  box-shadow: 0 0 6px 0;
  color: blue;
}
.item {
  position: relative;
  margin: 10px 0;
}
input[type="date"]::-webkit-inner-spin-button {
  display: none;
}
.item i,
input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  font-size: 20px;
  color: blue;
}
.item i {
  right: 1%;
  top: 30px;
  z-index: 1;
}
[type="date"]::-webkit-calendar-picker-indicator {
  right: 0;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
}
input[type="time"] {
  margin: 2px 22px 0 0;
}
input[type="radio"],
input.other {
  display: none;
}
label.radio {
  position: relative;
  display: inline-block;
  margin: 5px 20px 10px 0;
  cursor: pointer;
}
.question span {
  margin-left: 30px;
}
label.radio:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
#radio_5:checked ~ input.other {
  display: block;
}
input[type="radio"]:checked + label.radio:before {
  border: 2px solid #a82877;
  background: #a82877;
}
label.radio:after {
  content: "";
  position: absolute;
  top: 7px;
  left: 5px;
  width: 7px;
  height: 4px;
  border: 3px solid #fff;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  opacity: 0;
}
input[type="radio"]:checked + label:after {
  opacity: 1;
}
.btn-block {
  margin-top: 10px;
  text-align: center;
}
button {
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #a82877;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background: blue;
}
</style>