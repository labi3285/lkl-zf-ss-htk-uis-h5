<template>
  <svg t="1632855297879" :fill="color" class="lkl-icon-fold" :style="{ transform: rotate }" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11408" width="200" height="200"><path d="M534.72 649.92l230.4-230.4A32 32 0 0 0 742.4 364.8H281.6a32 32 0 0 0-22.72 54.72l230.4 230.4a32 32 0 0 0 45.44 0z" p-id="11409"></path></svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklIconFold extends Vue {
  @Prop({ default: 'bottom' }) direction!: string;
  @Prop({ default: 'var(--clrT2)' }) color!: string;

  private get rotate (): string {
    switch (this.direction) {
      case 'left':
        return 'rotate(-90deg)'
      case 'right':
        return 'rotate(90deg)'
      case 'down':
        return 'rotate(180deg)'
      default:
        return ''
    }
  }
}
</script>

<style lang="less">
.lkl-icon-fold {
  width: 13px;
  height: 13px;
  // 保证在flex布局中不被压缩
  flex-shrink: 0;
  // background-color: red;
}
</style>
