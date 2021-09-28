import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Test from '../views/Test.vue'
import A from '../views/A.vue'
import B from '../views/B.vue'
import C from '../views/C.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Test',
    component: Test
  },
  { path: '/aa', name: 'AA', component: A },
  { path: '/bb', name: 'BB', component: B },
  { path: '/cc', name: 'CC', component: C },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
