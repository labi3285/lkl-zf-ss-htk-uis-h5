<template>
  <svg t="1632732550449" :fill="color" class="lkl-icon-fold-arrow" :transform="rotate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2459" width="200" height="200"><path d="M231.424 346.208a32 32 0 0 0-46.848 43.584l297.696 320a32 32 0 0 0 46.4 0.48l310.304-320a32 32 0 1 0-45.952-44.544l-286.848 295.808-274.752-295.36z" p-id="2460"></path></svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklIconFoldArrow extends Vue {
  @Prop({ default: 'down' }) direction!: string;
  @Prop({ default: 'var(--clrT2)' }) color!: string;

  private get rotate (): string {
    switch (this.direction) {
      case 'left':
        return 'rotate(90)'
      case 'right':
        return 'rotate(-90)'
      case 'up':
        return 'rotate(180)'
      default:
        return ''
    }
  }
}
</script>

<style lang="less">
.lkl-icon-fold-arrow {
  width: 12px;
  height: 10px;
  // 保证在flex布局中不被压缩
  flex-shrink: 0;
}
</style>
