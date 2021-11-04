/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { VNode } from 'vue'
import { DirectiveOptions, DirectiveBinding } from 'vue/types/options'

// @ts-ignore
export default {
  bind (el: HTMLElement, binding: DirectiveBinding) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function clickHandler (e: any) {
      console.log('click')
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    // @ts-ignore
    el.__vueClickOutside__ = clickHandler
    // document.addEventListener('click', clickHandler)
    // document.addEventListener('mousedown', clickHandler)
    // document.addEventListener('touchStart', clickHandler)
  },
  unbind (el: HTMLElement) {
    // @ts-ignore
    // document.removeEventListener('mousedown', el.__vueClickOutside__)
    // @ts-ignore
    // document.removeEventListener('touchStart', el.__vueClickOutside__)
    // @ts-ignore
    delete el.__vueClickOutside__
  }
} as DirectiveOptions
