// import { App, createApp, ComponentPublicInstance, h, ref, reactive, Component, nextTick } from 'vue'
import Vue from 'vue'

import vToast from './index.vue'

// Vue.component('v-toast', vToast)

export type ToastType = 'default' | 'success' | 'warning' | 'error' | 'loading'
export type ToastPosition = 'auto' | 'top' | 'center' | 'bottom'

/// 获取message需要展示的时长
export function messageShowDuration (message: string): number {
  let n = 0
  for (const char of message) {
    n += (/^\w+$/.test(char) ? 1 : 2)
  }
  return Math.min(Math.max(2 * n / 16, 1.5), 6) * 1000.0
}

export interface Options {
  position?: ToastPosition;
  mountElement?: HTMLElement;
}

export class LklToast {
  type!: ToastType;
  message?: string;
  update (message?: string): void {
    this.__updater(message)
  }

  static show (message: string, options?: Options): LklToast {
    const toast = this.__createAndShowLklToast('default', message, options)
    setTimeout(() => {
      toast.clean()
    }, messageShowDuration(message))
    return toast
  }

  static success (message: string, options?: Options): LklToast {
    const toast = this.__createAndShowLklToast('success', message, options)
    setTimeout(() => {
      toast.clean()
    }, messageShowDuration(message))
    return toast
  }

  static warning (message: string, options?: Options): LklToast {
    const toast = this.__createAndShowLklToast('warning', message, options)
    setTimeout(() => {
      toast.clean()
    }, messageShowDuration(message))
    return toast
  }

  static error (message: string, options?: Options): LklToast {
    const toast = this.__createAndShowLklToast('error', message, options)
    setTimeout(() => {
      toast.clean()
    }, messageShowDuration(message))
    return toast
  }

  static loading (message?: string, options?: Options): LklToast {
    const toast = this.__createAndShowLklToast('loading', message, options)
    return toast
  }

  clean (): void {
    if (this.__vue) {
      this.__vue.$destroy()
      if (this.__vue.$el.parentNode) {
        this.__vue.$el.parentNode.removeChild(this.__vue.$el)
      }
    }
  }

  __vue!: Vue;
  __updater!: ((message?: string) => void);
  static __createAndShowLklToast (type: ToastType, message?: string, options?: Options): LklToast {
    const toast = new LklToast()
    toast.type = type
    toast.message = message
    const vue = new Vue({
      render: h => {
        return h(vToast, {
          props: {
            options,
            vm: toast,
            cleanHandler: () => {
              toast.clean()
            }
          }
        })
      }
    })
    const el = document.createElement('div')
    const app = options?.mountElement || document.getElementById('app')
    if (app) {
      app.appendChild(el)
    } else {
      console.error('id:app not found for mount')
    }
    vue.$mount(el)
    toast.__vue = vue
    return toast
  }
}

export default LklToast
