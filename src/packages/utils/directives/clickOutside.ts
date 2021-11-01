/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { VNode } from 'vue'
import { DirectiveOptions, DirectiveBinding } from 'vue/types/options'

// @ts-ignore
export default {
  bind (el: HTMLElement, binding: DirectiveBinding) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function clickHandler (e: any) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    // @ts-ignore
    el.__vueClickOutside__ = clickHandler
    document.addEventListener('click', clickHandler)
  },
  unbind (el: HTMLElement) {
    // @ts-ignore
    document.removeEventListener('click', el.__vueClickOutside__)
    // @ts-ignore
    delete el.__vueClickOutside__
  }
} as DirectiveOptions
