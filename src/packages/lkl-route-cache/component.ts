/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Vue, { VNode } from 'vue'
// import { ExtendedVue } from 'vue/types'
import Routes from './routes'
import { getKey, matches } from './utils'

Vue.component('')

const InitCache: Record<string, VNode> = {}

export default function createRouteCache (keyName: string) {
  const vue = Vue.extend({
    name: 'lkl-route-cache',
    // abstract: true,
    data: () => ({
      cache: InitCache,
      routes: Routes
    }),
    watch: {
      routes (val) {
        for (const key in this.cache) {
          if (!matches(val, key)) {
            const vnode = this.cache[key]
            if (vnode !== undefined && vnode.componentInstance) {
              vnode.componentInstance.$destroy()
            }
            delete this.cache[key]
          }
        }
      }
    },
    destroyed () {
      for (const key in this.cache) {
        const vnode = this.cache[key]
        if (vnode !== undefined && vnode.componentInstance) {
          vnode.componentInstance.$destroy()
        }
      }
    },
    render (): VNode {
      const vnode = this.$slots.default ? this.$slots.default[0] : null
      if (vnode) {
        vnode.key = vnode.key || (vnode.isComment ? 'comment' : vnode.tag)
        // prevent vue-router reuse component
        const key = getKey(this.$route, keyName)
        if (vnode.key && vnode.key.toString().indexOf(key) === -1) {
          vnode.key = `__navigation-${key}-${String(vnode.key)}`
        }
        if (this.cache[key]) {
          if (vnode.key === this.cache[key].key) {
            // restore vnode from cache
            vnode.componentInstance = this.cache[key].componentInstance
          } else {
            // replace vnode to cache
            const componentInstance = this.cache[key].componentInstance
            if (componentInstance) {
              componentInstance.$destroy()
            }
            this.cache[key] = vnode
          }
        } else {
          // cache new vnode
          this.cache[key] = vnode
        }
        if (vnode.data) {
          vnode.data.keepAlive = true
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return vnode!
    }
  })
  return vue
}
