<template>
  <svg t="1631873334160" fill='var(--clrT2)' :style="{ marginTop, marginRight, marginBottom, marginLeft }" class="lkl-arrow" :transform="rotate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4519" width="200" height="200"><path d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z" p-id="4520"></path></svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklArrow extends Vue {
  @Prop({ default: 'right' }) private direction!: string;

  @Prop({ default: '0' }) private marginTop!: string;
  @Prop({ default: '0' }) private marginRight!: string;
  @Prop({ default: '0' }) private marginBottom!: string;
  @Prop({ default: '0' }) private marginLeft!: string;

  private get rotate (): string {
    switch (this.direction) {
      case 'left':
        return 'rotate(180)'
      case 'top':
        return 'rotate(-90)'
      case 'bottom':
        return 'rotate(90)'
      default:
        return ''
    }
  }
}
</script>

<style lang="less">
.lkl-arrow {
  width: 15px;
  height: 15px;
  // 保证在flex布局中不被压缩
  flex-shrink: 0;
}
</style>
