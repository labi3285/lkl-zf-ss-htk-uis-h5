<template>
  <div ref="scroll" class="lkl-better-scroll">
    <div ref="content" :class="contentCls" v-frameChange="onFrameChange" class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Component, Prop, Vue } from 'vue-property-decorator'
import BScroll from 'better-scroll'
import frameChange from '../utils/directives/frameChange'

@Component({
  directives: {
    frameChange
  }
})
export default class LklBetterScroll extends Vue {
  @Prop({ default: undefined }) contentCls!: string;

  private betterScroll: any | null;

  private mounted () {
    this.checkOrRefreshScroll()
  }

  private checkOrRefreshScroll () {
    if (this.betterScroll === undefined) {
      const el = this.$refs.scroll as HTMLDivElement
      const scroll = new BScroll(el, {
        click: true,
        probeType: 3,
        bounce: false,
        momentum: true
      })
      // @ts-ignore
      el.__vue_BScroll_scrollPosition__ = { x: 0, y: 0 }
      scroll.on('scroll', (pos: any) => {
        // @ts-ignore
        el.__vue_BScroll_scrollPosition__ = pos
      })
      this.betterScroll = scroll
    } else {
      this.betterScroll.refresh()
    }
  }

  private onFrameChange () {
    this.checkOrRefreshScroll()
  }
}
</script>

<style lang="less">
.lkl-better-scroll {
  overflow: hidden;
}
</style>
