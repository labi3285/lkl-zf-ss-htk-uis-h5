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
  { path: '/aa', name: 'AA', component: A, meta: { title: 'aa', cached: true } },
  { path: '/bb', name: 'BB', component: B, meta: { title: 'bb', cached: true } },
  { path: '/cc', name: 'CC', component: C, meta: { title: 'cc', cached: true } },
  {
    path: '/incomev2',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
