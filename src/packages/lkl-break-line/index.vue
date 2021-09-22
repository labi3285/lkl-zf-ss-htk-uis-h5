<template>
  <div class="lkl-break-line" :style="{ width, marginLeft, marginRight }" ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklBreakLine extends Vue {
  @Prop({ default: '0' }) private marginLeft!: string;
  @Prop({ default: '0' }) private marginRight!: string;
  private get width (): string {
    return `calc(100% - ${this.marginLeft} - ${this.marginRight})`
  }
}
</script>

<style lang="less">
.lkl-break-line {
  background-color: var(--clrLine);
  height: 1px;
}
</style>
