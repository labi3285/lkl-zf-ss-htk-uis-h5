<template>
  <svg t="1632029907245" fill='var(--clrT2)' :style="{ marginTop, marginRight, marginBottom, marginLeft }" class="lkl-arrow-triangle" :transform="rotate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1153" width="200" height="200"><path d="M830.687738 603.071182c0 9.614985-3.933589 17.949814-11.799744 25.007557-7.867178 7.05672-17.222243 10.56052-28.065196 10.512425L232.716714 638.591163c-10.789741 0-20.144806-3.5038-28.064172-10.512425-7.919367-7.009647-11.852956-15.344476-11.799744-25.007557 0.053212-9.660011 3.986801-17.996886 11.799744-25.00551l279.05253-248.641917c7.867178-7.009647 17.22122-10.513448 28.065196-10.513448 10.842952 0 20.196994 3.504824 28.064172 10.513448l279.05253 248.641917C826.754149 585.074296 830.687738 593.411171 830.687738 603.071182z" p-id="1154"></path></svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklArrow extends Vue {
  @Prop({ default: 'bottom' }) private direction!: string;

  @Prop({ default: '0' }) private marginTop!: string;
  @Prop({ default: '0' }) private marginRight!: string;
  @Prop({ default: '0' }) private marginBottom!: string;
  @Prop({ default: '0' }) private marginLeft!: string;

  private get rotate (): string {
    switch (this.direction) {
      case 'left':
        return 'rotate(-90)'
      case 'right':
        return 'rotate(90)'
      case 'bottom':
        return 'rotate(180)'
      default:
        return ''
    }
  }
}
</script>

<style lang="less">
.lkl-arrow-triangle {
  width: 10px;
  height: 10px;
  // 保证在flex布局中不被压缩
  flex-shrink: 0;
}
</style>
