/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Vue from 'vue'
import Routes from './routes'
import { Store } from 'vuex/types'
import { getKey } from './utils'
import { Route } from 'vue-router'

export default (bus: Vue, keyName: string, vuex?: { store: Store<any>, moduleName?: string }) => {
  const moduleName = vuex?.moduleName ?? 'lkl-route-cache'
  if (vuex) {
    vuex.store.registerModule(moduleName, {
      state: {
        routes: Routes
      },
      mutations: {
        'navigation/FORWARD': (state, { name }) => {
          state.routes.push(name)
        },
        'navigation/BACK': (state, { count }) => {
          state.routes.splice(state.routes.length - count, count)
        },
        'navigation/REPLACE': (state, { name }) => {
          state.routes.splice(Routes.length - 1, 1, name)
        },
        'navigation/REFRESH': () => {
          // x
        },
        'navigation/RESET': (state) => {
          state.routes.splice(0, state.routes.length)
        }
      }
    })
  }
  const forward = (name: string, toRoute: Route, fromRoute: Route) => {
    const to = { name: '', route: toRoute }
    const from = { name: '', route: fromRoute }
    const routes = vuex ? vuex.store.state[moduleName].routes : Routes
    // if from does not exist, it will be set null
    from.name = routes[routes.length - 1] || null
    to.name = name
    if (vuex) {
      vuex.store.commit('navigation/FORWARD', { to, from, name })
    } else {
      routes.push(name)
    }
    window.sessionStorage.LKL_ROUTE_CACHE = JSON.stringify(routes)
    bus.$emit('forward', to, from)
  }
  const back = (count: number, toRoute: Route, fromRoute: Route) => {
    const to = { name: '', route: toRoute }
    const from = { name: '', route: fromRoute }
    const routes = vuex ? vuex.store.state[moduleName].routes : Routes
    from.name = routes[routes.length - 1]
    to.name = routes[routes.length - 1 - count]
    if (vuex) {
      vuex.store.commit('navigation/BACK', { to, from, count })
    } else {
      routes.splice(Routes.length - count, count)
    }
    window.sessionStorage.LKL_ROUTE_CACHE = JSON.stringify(routes)
    bus.$emit('back', to, from)
  }
  const replace = (name: string, toRoute: Route, fromRoute: Route) => {
    const to = { name: '', route: toRoute }
    const from = { name: '', route: fromRoute }
    const routes = vuex ? vuex.store.state[moduleName].routes : Routes
    // if from does not exist, it will be set null
    from.name = routes[routes.length - 1] || null
    to.name = name
    if (vuex) {
      vuex.store.commit('navigation/REPLACE', { to, from, name })
    } else {
      routes.splice(Routes.length - 1, 1, name)
    }
    window.sessionStorage.LKL_ROUTE_CACHE = JSON.stringify(routes)
    bus.$emit('replace', to, from)
  }
  const refresh = (toRoute: Route, fromRoute: Route) => {
    const to = { name: '', route: toRoute }
    const from = { name: '', route: fromRoute }
    const routes = vuex ? vuex.store.state[moduleName].routes : Routes
    to.name = from.name = routes[routes.length - 1]
    if (vuex) {
      vuex.store.commit('navigation/REFRESH', { to, from })
    }
    bus.$emit('refresh', to, from)
  }
  const reset = () => {
    if (vuex) {
      vuex.store.commit('navigation/RESET')
    } else {
      Routes.splice(0, Routes.length)
    }
    window.sessionStorage.LKL_ROUTE_CACHE = JSON.stringify([])
    bus.$emit('reset')
  }

  const record = (toRoute: Route, fromRoute: Route, replaceFlag: boolean) => {
    const name = getKey(toRoute, keyName)
    if (replaceFlag) {
      replace(name, toRoute, fromRoute)
    } else {
      const toIndex = Routes.lastIndexOf(name)
      if (toIndex === -1) {
        forward(name, toRoute, fromRoute)
      } else if (toIndex === Routes.length - 1) {
        refresh(toRoute, fromRoute)
      } else {
        back(Routes.length - 1 - toIndex, toRoute, fromRoute)
      }
    }
  }

  return {
    record, reset
  }
}
