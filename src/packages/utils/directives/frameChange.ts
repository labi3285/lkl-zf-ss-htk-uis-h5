/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { VNode } from 'vue'
import { DirectiveOptions, DirectiveBinding } from 'vue/types/options'

// @ts-ignore
export default {
  bind (el: HTMLElement, binding: DirectiveBinding) {
    // @ts-ignore
    function __update () {
      // @ts-ignore
      el.__vue_frameChange_top__ = el.offsetTop
      // @ts-ignore
      el.__vue_frameChange_left__ = el.offsetLeft
      // @ts-ignore
      el.__vue_frameChange_width__ = el.offsetWidth
      // @ts-ignore
      el.__vue_frameChange_height__ = el.offsetHeight
    }
    __update()
    // @ts-ignore
    el.__vue_frameChange_timer__ = setInterval(function () {
      if (
        // @ts-ignore
        el.__vue_frameChange_top__ !== el.offsetTop ||
        // @ts-ignore
        el.__vue_frameChange_left__ !== el.offsetLeft ||
        // @ts-ignore
        el.__vue_frameChange_width__ !== el.offsetWidth ||
        // @ts-ignore
        el.__vue_frameChange_height__ !== el.offsetHeight
      ) {
        binding.value()
        __update()
      }
    }, 100)
  },
  unbind (el: HTMLElement) {
    // @ts-ignore
    clearInterval(el.__vue_frameChange_timer__)
  }
} as DirectiveOptions
