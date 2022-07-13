<template>
  <div class="cont">
    <div class="intro">
      <h1>Useful Tools For Your Life</h1>
      <p>
        Our platform is used for help people to reach their success day by day
      </p>
    </div>
    <section class="row-3">
      <div class="first">
        <img src="img/calender.png" />
        <h2>Daily Based</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi
          lacus, ullamcorper vitae varius eu, bibendum eu nulla. Nunc
          pellentesque leo quis diam dictum tincidunt. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Aliquam aliquet volutpat ipsum
          vitae dictum. Mauris ultricies, quam sit amet laoreet ullamcorper,
          magna augue lobortis quam, vel pharetra sem erat a risus. Duis luctus
          maximus justo, nec maximus neque scelerisque feugiat. Mauris gravida
          ornare sem eleifend interdum. Donec vitae massa quam. Etiam pulvinar
          velit metus, at pellentesque purus condimentum in. Nam nec lacus et
          turpis auctor pretium. Suspendisse sodales mauris in egestas
          vulputate. Aliquam erat volutpat. Nam in tortor ante. Sed eu risus
          eget magna tempus mattis.
        </p>
        <a href="#">read more</a>
      </div>
      <div class="second">
        <img src="img/clock.png" />
        <h2>Timeline & Milestone</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi
          lacus, ullamcorper vitae varius eu, bibendum eu nulla. Nunc
          pellentesque leo quis diam dictum tincidunt. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Aliquam aliquet volutpat ipsum
          vitae dictum. Mauris ultricies, quam sit amet laoreet ullamcorper,
          magna augue lobortis quam, vel pharetra sem erat a risus. Duis luctus
          maximus justo, nec maximus neque scelerisque feugiat. Mauris gravida
          ornare sem eleifend interdum. Donec vitae massa quam. Etiam pulvinar
          velit metus, at pellentesque purus condimentum in. Nam nec lacus et
          turpis auctor pretium. Suspendisse sodales mauris in egestas
          vulputate. Aliquam erat volutpat. Nam in tortor ante. Sed eu risus
          eget magna tempus mattis.
        </p>
        <a href="#">read more</a>
      </div>
      <div class="third">
        <img src="img/user.png" />
        <h2>Community Support</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi
          lacus, ullamcorper vitae varius eu, bibendum eu nulla. Nunc
          pellentesque leo quis diam dictum tincidunt. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Aliquam aliquet volutpat ipsum
          vitae dictum. Mauris ultricies, quam sit amet laoreet ullamcorper,
          magna augue lobortis quam, vel pharetra sem erat a risus. Duis luctus
          maximus justo, nec maximus neque scelerisque feugiat. Mauris gravida
          ornare sem eleifend interdum. Donec vitae massa quam. Etiam pulvinar
          velit metus, at pellentesque purus condimentum in. Nam nec lacus et
          turpis auctor pretium. Suspendisse sodales mauris in egestas
          vulputate. Aliquam erat volutpat. Nam in tortor ante. Sed eu risus
          eget magna tempus mattis.
        </p>
        <a href="#">read more</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
body {
  background-image: url(img/hero-bg.jpg);
  background-size: cover;
  font-family: verdana;
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

footer {
  background: #fafafa;
  border-top: 1px solid #d7d7d7;
  padding: 30px 20px;
  text-align: center;
}
</style>