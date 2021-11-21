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
                    <li class ="current"><a href="#">Početna</a></li>
                    <li><a href="#nama">O nama</a></li>
					          <li><a href="#kontakt">Kontakt</a></li>
                    <li><a href="#">Predmeti</a></li> <!-- materijali uz prijavu -->
                    <li><a id="prijava" href="#">Prijava</a></li> <!--termin uz prijavu-->
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
			 <!--  sidrište -->
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
				<!--  karta -->
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
				<!-- video + sidrište-->
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
export default {
 
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size:15px;
  line-height:1.5;
  padding:0;
  margin:0;
  background-color:#f4f4f4;
    }  
	
.container {
	width:80%;
	margin:auto;
	overflow:hidden;
}

ul {
	padding:0;
	margin:0;
}
header {
	background:#434b4e;
	color:#ffffff;
	padding-top:30px;
	min-height:70px;
	border-bottom:#dd5c88 3px solid;
}
header a {
	color:#ffffff;
	text-decoration:none;
	text-transform:uppercase;
	font-size:15px;
}

header li {
	float:left;
	display:inline;
	padding: 0 20px 0 20px;
}

header #brand {
	float:left;

}
header #brand h1{
	margin:0;

}

header nav {
	float:right;
	margin-top:10px;
}

header .highlight, header .current a {
	color: #dd5c88;
	font-weight: bold;
	
}

header a:hover {
	color:#cccccc; 
	font-weight: bold;
}

#showcase {
	min-height:400px;
/* background:url("1611.jpg") no-repeat 0 -380px;*/
	background-size:1300px 900px;
	text-align:center;
	color: #ffffff;
}
#showcase h1{
	margin-top:100px;
	font-size:55px;
	margin-bottom:10px;
}
#showcase p{
	font-size:20px;	
	color:white;
	font-weight:bold;
}

#newsletter {
	padding:15px;
	color:#ffffff;
	background:#35424a;
}
#newsletter h1{
	float:left;
}
#newsletter form{
	float:right;
	margin-top:15px;
}
#newsletter input[type="email"]{
	padding:4px;
	height:25px;
	width:250px;
}

.button_1 {
	height:38px;
	background:#dd5c88;
	border:0;
	padding-left:20px;
	padding-right:20px;
	color:#ffffff;
}
#boxes {
	margin-top:20px;
	padding-bottom:20px;
	border-bottom:#dd5c88 3px solid;
}
#boxes .box {
	float:left;
	text-align:center;
	width:30%;
	padding:10px;
}
#boxes .box img {
	width:250px;
}

#nama {
	padding:30px;
	margin-top:20px;
	color:black;
	background-color:#f4f4f4;
	margin-bottom:20px;
}


#mapa {
	padding:20px;
	color:#ffffff;
	background-color:#dd5c88;
}
#mapa p {
	width: 40%;
	float:left;
}
#mapa iframe {
	float:right;
}

#kontakt {
	padding:20px;
	color:black;
	background-color:#f4f4f4
}
#kontakt p {
	float:left;
	width: 40%;
	margin-top:10px;
}
#kontakt iframe {
	float:right;
	margin-top:10px;
}

footer {
	padding:30px;
	margin-top:20px;
	color:#ffffff;
	background-color:#dd5c88;
	text-align:center;
}














</style>
