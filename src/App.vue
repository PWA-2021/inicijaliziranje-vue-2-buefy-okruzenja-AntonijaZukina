<template>
	

<div>
<head>
		<meta charset="utf-8">
		<title>Instrukcije | Welcome</title>
		<meta name="viewport" content="width=device-width">
		<meta name="description" content="Instrukcije">
		<meta name="content" content="matematika, fizika, engleski">
		
    </head>

    <body>

        <header>
		
            <div class="container">
            <div id="brand">
				<h1><span class="highlight">Učilica</span></h1>
			</div>
			<nav>
                <ul>
                    <li class ="current"><a href="index1 - Copy.html">Početna</a></li>
                    <li><a href="#nama">O nama</a></li>
					 <li><a href="#kontakt">Kontakt</a></li>
                    <li><a href="#">Predmeti</a></li>
                    <li><a id="prijava" href="#">Prijava</a></li>
                </ul>
            </nav>
			</div>
        </header>
        
        <section id ="showcase">
			  <div class="container">
				<h1>Instrukcije za sve!</h1>
				<p>Učenje nikad nije dosadno, provjeri u Učilici</p>
				<p>Prijavi se i rezerviraj svoj termin</p>
			  </div>
		
		</section>
		<section id ="newsletter">
			 <div class="container">
				<h1>Preplati se na novosti</h1>
				<form>
					<input type="email" placeholder="Upiši svoj email">
					<button type="submit" class="button_1">Preplata</button>
				</form>
			 </div>
		</section>
		
		<section id ="boxes">
			<div class="container">
				<div class="box">
					<img src="osnovna.jpg">
					<h3>Osnovna škola</h3>
					<p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
				</div>
				<div class="box">
					<img src="srednja.jpg">
					<h3>Srednja škola</h3>
					<p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
				</div>
				<div class="box">
					<img src="img8.jpg">
					<h3>Fakultet</h3>
					<p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
				</div>
			 </div>
		</section>
		
		
		<section id ="nama">
			 <div class="container">
			 <!-- staviti o nama i sidrište -->
				<h1>O nama</h1>
				<p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
				<p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
			
			 </div>
		</section>
		
		<section id ="mapa">
			 <div class="container">
				<h1>Pronađi nas</h1>
				<!-- staviti kartu -->
				<p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44513.140863961766!2d15.920146150078665!3d45.78979920103525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68b441ce2df%3A0x54e2a03adf42446f!2sTehni%C4%8Dko%20veleu%C4%8Dili%C5%A1te%20u%20Zagrebu!5e0!3m2!1shr!2shr!4v1637426172325!5m2!1shr!2shr" width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
			
			 </div>
		</section>
		
		
		<section id ="kontakt">
			 <div class="container">
				<h1>Kontakt</h1>
				<!-- staviti kontakt i sidrište-->
				<p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
				Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/KGFPry6eL0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			 </div>
		</section>
	
        
        <footer>
            <p>Učilica, Copyright &copy; 2021</p>
        </footer>
    </body>
	</div>
</template> 

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

  
</script>

<style lang="scss">

</style>
