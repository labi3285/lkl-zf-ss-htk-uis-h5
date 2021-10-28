<template>
  <div class="lkl-break-line" :style="{ marginLeft, width }" ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklBreakLine extends Vue {
  @Prop({ default: 'leftRightMargin' }) type!: string;

  private get marginLeft (): string {
    switch (this.type) {
      case 'leftRightMargin':
        return 'var(--marginLR)'
      case 'leftMargin':
        return 'var(--marginLR)'
      default:
        return ''
    }
  }

  private get width (): string {
    switch (this.type) {
      case 'leftRightMargin':
        return 'calc(100% - var(--marginLR) * 2)'
      case 'leftMargin':
        return 'calc(100% - var(--marginLR))'
      default:
        return '100%'
    }
  }
}
</script>

<style lang="less">
.lkl-break-line {
  background-color: var(--clrLine);
  height: 1px;
}
</style>
