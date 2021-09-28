/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Routes from './routes'
import VueRouter, { Route } from 'vue-router'
import { RawLocation } from 'vue-router/types'

import { Store } from 'vuex/types'
import Navigator from './navigator'
import Component from './component'
import { genKey, isObjEqual } from './utils'
import { VueConstructor } from 'vue'

export interface Options {
  router: VueRouter
  vuex?: {
    store: Store<any>
    moduleName: string
  }
  keyName: string
}

export default {
  install: (Vue: VueConstructor, options: Options) => {
    const keyName = options.keyName || 'LklRCK'
    const bus = new Vue()
    const navigator = Navigator(bus, keyName, options.vuex)

    // hack vue-router replace for replaceFlag
    const routerReplace = options.router.replace.bind(options.router)
    let replaceFlag = false
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-types
    options.router.replace = (location: RawLocation, onComplete?: Function, onAbort?: (err: Error) => void): void => {
      replaceFlag = true
      routerReplace(location, onComplete, onAbort)
    }

    // init router`s keyName
    options.router.beforeEach((to: Route, from: Route, next) => {
      if (!to.query[keyName]) {
        const query = { ...to.query }
        // go to the same route will be set the same key
        if (to.path === from.path && isObjEqual(
          { ...to.query, [keyName]: null },
          { ...from.query, [keyName]: null }
        ) && from.query[keyName]) {
          query[keyName] = from.query[keyName]
        } else {
          query[keyName] = genKey()
        }
        next({ name: to.name || '', params: to.params, query, replace: replaceFlag || !from.query[keyName] })
      } else {
        next()
      }
    })

    // record router change
    options.router.afterEach((to: Route, from: Route) => {
      navigator.record(to, from, replaceFlag)
      replaceFlag = false
    })

    Vue.component('lkl-route-cache', Component(keyName))

    // Vue.navigation =
    Vue.prototype.$navigation = {
      on: (event: any, callback: any) => {
        bus.$on(event, callback)
      },
      once: (event: any, callback: any) => {
        bus.$once(event, callback)
      },
      off: (event: any, callback: any) => {
        bus.$off(event, callback)
      },
      getRoutes: () => Routes.slice(),
      cleanRoutes: () => navigator.reset()
    }
  }
}
