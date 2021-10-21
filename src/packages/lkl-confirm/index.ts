// import { App, createApp, ComponentPublicInstance, h, ref, reactive, Component, nextTick } from 'vue'
import Vue from 'vue'

import vConfirm from './index.vue'

export type LklButtonType = 'default' | 'danger' | 'warning' | 'cancel'
export interface LklButtonAction {
  type?: LklButtonType;
  title: string;
  /// default: false
  disabled?: boolean;
  /// default: true
  isAutoClose?: boolean;
  todo?: () => void;
}

export interface LklConfirmOptions {
  cls?: string;
  /// default: false
  isCloseOnTapBankground?: boolean;
}

export class LklConfirm {
  title?: string
  message?: string
  buttonActions?: LklButtonAction[]
  update (message?: string): void {
    this.__updater(message)
  }

  static show (title?: string, message?: string, buttonActions?: LklButtonAction[], options?: LklConfirmOptions): LklConfirm {
    return this.__createAndShowConfirm(title, message, buttonActions, options)
  }

  close (): void {
    if (this.__vue) {
      this.__vue.$destroy()
      if (this.__vue.$el.parentNode) {
        this.__vue.$el.parentNode.removeChild(this.__vue.$el)
      }
    }
  }

  __vue!: Vue;
  __updater!: ((message?: string) => void);
  static __createAndShowConfirm (title?: string, message?: string, buttonActions?: LklButtonAction[], options?: LklConfirmOptions): LklConfirm {
    const confirm = new LklConfirm()
    confirm.title = title
    confirm.message = message
    confirm.buttonActions = buttonActions
    const vue = new Vue({
      render: h => {
        return h(vConfirm, {
          props: {
            options,
            vm: confirm,
            closeHandler: () => {
              confirm.close()
            }
          }
        })
      }
    })
    const el = document.createElement('div')
    const app = document.getElementById('app')
    if (app) {
      app.appendChild(el)
    } else {
      console.error('id:app not found for mount')
    }
    vue.$mount(el)
    confirm.__vue = vue
    return confirm
  }
}

export default LklConfirm
