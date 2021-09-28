import Vue from 'vue'
import App from './App.vue'
import router from './router'

import lklRouteCache from '@/packages/lkl-route-cache/index'

import store from './store'
// import '@/packages/index-mini-haotk.ts'
import '@/packages/index-mini-htk.ts'

Vue.use(lklRouteCache, { router, vuex: { store } })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
