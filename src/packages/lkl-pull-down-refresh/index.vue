<template>
  <div ref="pullDownRefresher" class="lkl-pull-down-refresh">
    <slot>
      <div class="slot-default">{{ isLoading ? '刷新中...' : isTriggerRefresh ? '松开刷新' : '下拉刷新' }}</div>
    </slot>
  </div>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class LklLoadMore extends Vue {
  @Prop({ default: false }) private isLoading!: boolean;
  @Prop({ default: 50 }) private refreshDistance!: number;

  private isTriggerRefresh = false
  private startY = 0
  private endY = 0

  @Watch('isLoading')
  private isLoadingChanged (newVal: boolean) {
    if (!newVal) {
      const el = this.$refs.pullDownRefresher as HTMLElement
      if (el.style.display !== 'none') {
        this.animate(el, 0, 300, () => {
          el.style.display = 'none'
        })
      }
    }
  }

  private mounted () {
    document.addEventListener('touchstart', this.onTouchStart)
    document.addEventListener('touchmove', this.onTouchMove)
    document.addEventListener('touchend', this.onTouchEnd)
  }

  private unmounted () {
    document.removeEventListener('touchstart', this.onTouchStart)
    document.removeEventListener('touchmove', this.onTouchMove)
    document.removeEventListener('touchend', this.onTouchEnd)
  }

  private onTouchStart (event: TouchEvent) {
    this.isTriggerRefresh = false
    const touch = event.touches[0]
    this.startY = touch.pageY
  }

  private onTouchMove (event: TouchEvent) {
    const el = this.$refs.pullDownRefresher as HTMLElement
    if (this.isLoading) {
      return
    }
    const touch = event.touches[0]
    this.endY = touch.pageY - this.startY
    el.style.display = 'none'
    if (this.endY > 5) {
      el.style.display = 'block'
      el.style.height = this.endY + 'px'
    }
    if (this.endY > this.refreshDistance) {
      this.isTriggerRefresh = true
    }
  }

  private onTouchEnd () {
    const el = this.$refs.pullDownRefresher as HTMLElement
    if (this.isLoading) {
      return
    }
    // const touch = event.touches[0]
    if (this.isTriggerRefresh) {
      el.style.display = 'block'
      this.animate(el, this.refreshDistance, 1000, () => {
        this.loadData()
      })
    } else {
      this.animate(el, 0, 300, () => {
        el.style.display = 'none'
      })
    }
  }

  private loadData () {
    this.$emit('update:isLoading', true)
    this.$emit('load')
  }

  private animate (el: HTMLElement, toHeight: number, pxInOneSec: number, done: () => void) {
    const _from_height = el.offsetHeight
    const _px_in_one_sec = pxInOneSec
    const _total_height = Math.abs(toHeight - _from_height)
    const _total_t = _total_height / _px_in_one_sec
    const _frame_t = 1 / 30
    const _delta_height = _total_height / (_total_t / _frame_t)
    let _height = _from_height
    function _interpolator_loop (done: () => void) {
      setTimeout(() => {
        if (_from_height > toHeight) {
          if (_height - _delta_height > toHeight) {
            _height -= _delta_height
            el.style.height = _height + 'px'
            _interpolator_loop(done)
          } else {
            el.style.height = toHeight + 'px'
            done()
          }
        } else {
          if (_height + _delta_height > toHeight) {
            _height += _delta_height
            el.style.height = _height + 'px'
            _interpolator_loop(done)
          } else {
            el.style.height = toHeight + 'px'
            done()
          }
        }
      }, _frame_t * 1000)
    }
    _interpolator_loop(done)
  }
}
</script>

<style lang="less">
.lkl-pull-down-refresh {
  width: 100%;
  text-align: center;
  display: none;
  overflow: hidden;
  .slot-default {
    font-size: 14px;
    color: var(--clrT3);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
