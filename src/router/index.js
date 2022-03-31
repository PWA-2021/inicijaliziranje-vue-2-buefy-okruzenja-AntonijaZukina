import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import oNama from '../components/oNama.vue'
import Kontakt from '../components/Kontakt.vue'
import Prijava from '../components/Prijava.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Početna",
    component: Home
  },
  {
    path: "/onama",
    name: "O nama",
    component: oNama
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/prijava",
    name: "Prijava",
    component: Prijava
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
