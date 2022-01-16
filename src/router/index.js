import Vue from 'vue'
import VueRouter from 'vue-router'
import Body from '../views/Body.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Body',
    component: Home
  },
  {
    path: '/header',
    name: 'Header',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Header.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
