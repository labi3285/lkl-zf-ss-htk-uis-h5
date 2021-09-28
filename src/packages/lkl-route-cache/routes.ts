// import { Route } from 'vue-router/types'

let routes: string[] = []

if (window.sessionStorage.LKL_ROUTE_CACHE) {
  routes = JSON.parse(window.sessionStorage.LKL_ROUTE_CACHE)
}

export default routes
