/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { VNode } from 'vue'
import { DirectiveOptions, DirectiveBinding } from 'vue/types/options'

// @ts-ignore
export default {
  // @ts-ignore
  bind (el: HTMLElement, binding: DirectiveBinding) {
    // @ts-ignore
    function __scrollTop_in_scroll () {
      let _offsetTop = el.offsetTop
      let _next = el.parentElement
      while (_next) {
        // @ts-ignore
        if (_next.__vue_BScroll_scrollPosition__) {
          // @ts-ignore
          return _next.__vue_BScroll_scrollPosition__.y + _offsetTop
        } else {
          _offsetTop += _next.offsetTop
        }
        _next = _next.parentElement
      }
      return _offsetTop
    }
    function __update () {
      // @ts-ignore
      el.__vue_offsetChange_scrollTopInScroll__ = __scrollTop_in_scroll()
      // @ts-ignore
      el.__vue_offsetChange_windowScrollY__ = window.scrollY
    }
    __update()
    // @ts-ignore
    el.__vue_offsetChange_timer__ = setInterval(function () {
      const _scrollTopInScroll = __scrollTop_in_scroll()
      if (
        // @ts-ignore
        el.__vue_offsetChange_windowScrollY__ !== window.scrollY ||
        // @ts-ignore
        el.__vue_offsetChange_scrollTopInScroll__ !== _scrollTopInScroll
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
