<template>
  <div v-show="isMaskShow" ref="popup" :class="isMaskShow ? 'lkl-popup lkl-popup-show' : 'lkl-popup lkl-popup-hide'" @click.stop="onClickBackground($event)">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div v-show="isPopupShow" class="lkl-popup-popup-box" :class="popupClass" @click.stop.prevent>
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export interface LklPopupRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

@Component
export default class LklPopup extends Vue {
  @Prop({ default: undefined }) popupStartRect!: (maskRect: LklPopupRect) => LklPopupRect;
  @Prop({ required: true }) popupRect!: (maskRect: LklPopupRect) => LklPopupRect;
  @Prop({ default: 0.2 }) popupShowSecs!: number;
  @Prop({ default: 0.2 }) popupHideSecs!: number;
  @Prop({ default: true }) isHideOnTapBankground!: boolean;
  @Prop({ default: undefined }) popupClass!: string;

  private isMounted = false
  private isMaskShow = false
  private isPopupShow = false

  private mounted () {
    this.isMounted = true
  }

  public show (): void {
    this.isMaskShow = true
    this.$nextTick(() => {
      this.isPopupShow = true
    })
  }

  public close (): void {
    this.isPopupShow = false
  }

  private onClickBackground () {
    if (this.isHideOnTapBankground === true) {
      this.close()
    }
  }

  private beforeEnter (el: HTMLElement) {
    const mask = this.$refs.popup as HTMLElement
    mask.style.opacity = '0'
    const r = (this.$refs.popup as HTMLDivElement).getBoundingClientRect()
    let rect: LklPopupRect
    if (this.popupStartRect !== undefined && this.popupStartRect !== null) {
      rect = this.popupStartRect({ x: r.x, y: r.y, w: r.width, h: r.height })
    } else {
      rect = this.popupRect({ x: r.x, y: r.y, w: r.width, h: r.height })
    }
    el.style.left = rect.x + 'px'
    el.style.top = rect.y + 'px'
    el.style.width = rect.w + 'px'
    el.style.height = rect.h + 'px'
  }

  private enter (el: HTMLElement, done: () => void) {
    const mask = this.$refs.popup as HTMLElement
    const r = (this.$refs.popup as HTMLDivElement).getBoundingClientRect()
    const to = this.popupRect({ x: r.x, y: r.y, w: r.width, h: r.height })
    let from = to
    if (this.popupStartRect !== undefined && this.popupStartRect !== null) {
      from = this.popupStartRect({ x: r.x, y: r.y, w: r.width, h: r.height })
    }
    this.__animatePopup(el, from, to, this.popupShowSecs, done)
    this.__animateMask(mask, 0, 1, this.popupHideSecs, () => {
      // nothing to do
    })
  }

  private leave (el: HTMLElement, done: () => void) {
    const mask = this.$refs.popup as HTMLElement
    const r = (this.$refs.popup as HTMLDivElement).getBoundingClientRect()
    const from = this.popupRect({ x: r.x, y: r.y, w: r.width, h: r.height })
    let to = from
    if (this.popupStartRect !== undefined && this.popupStartRect !== null) {
      to = this.popupStartRect({ x: r.x, y: r.y, w: r.width, h: r.height })
    }
    this.__animatePopup(el, from, to, this.popupHideSecs, () => {
      done()
    })
    this.__animateMask(mask, 1, 0, this.popupHideSecs + 0.1, () => {
      this.isMaskShow = false
    })
  }

  private __animateMask (el: HTMLElement, from: number, to: number, secs: number, done: () => void) {
    let alpha = from
    this.__animatePoints([from], [to], secs, (frame: number, deltas: number[], isDone: boolean) => {
      alpha += deltas[0]
      el.style.opacity = alpha.toString()
      if (isDone) {
        done()
      }
    })
  }

  private __animatePopup (el: HTMLElement, from: LklPopupRect, to: LklPopupRect, secs: number, done: () => void) {
    let x = from.x
    let y = from.y
    let w = from.w
    let h = from.h
    this.__animatePoints([from.x, from.y, from.w, from.h], [to.x, to.y, to.w, to.h], secs, (frame: number, deltas: number[], isDone: boolean) => {
      x += deltas[0]
      y += deltas[1]
      w += deltas[2]
      h += deltas[3]
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      el.style.width = w + 'px'
      el.style.height = h + 'px'
      if (isDone) {
        done()
      }
    })
  }

  private __animatePoints (froms: number[], tos: number[], secs: number, todo: (frame: number, deltas: number[], isDone: boolean) => void) {
    const ds: number[] = []
    const count = froms.length
    for (let i = 0; i < count; i++) {
      const from = froms[i]
      const to = tos[i]
      const s = to - from
      const d = s / (60 * secs)
      ds.push(d)
    }
    const frames = Math.ceil(60 * secs)
    let frame = 0
    let timer: number | null = null
    function __frameDo () {
      const isEnd = frame === frames - 1
      todo(frame, ds, isEnd)
      if (isEnd) {
        if (timer !== null) {
          cancelAnimationFrame(timer)
        }
      } else {
        timer = requestAnimationFrame(() => {
          __frameDo()
        })
      }
      frame += 1
    }
    __frameDo()
  }
}
</script>

<style lang="less">
.lkl-popup {
  z-index: 97;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--clrMask);
  &-popup-box {
    position: fixed;
  }
}
</style>
