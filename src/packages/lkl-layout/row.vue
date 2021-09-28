<template>
  <div :style="{ justifyContent, alignItems, flexWrap }" class="lkl-layout-row">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklLayoutRow extends Vue {
  @Prop({ default: 'left' }) private alignX!: string;
  @Prop({ default: 'center' }) private alignY!: string;
  @Prop({ default: true }) private wrap!: boolean;

  private get alignItems () {
    switch (this.alignY) {
      case 'center':
        return 'center'
      case 'bottom':
        return 'flex-end'
      default:
        return 'flex-start'
    }
  }

  private get justifyContent () {
    switch (this.alignX) {
      case 'center':
        return 'center'
      case 'right':
        return 'flex-end'
      default:
        return 'flex-start'
    }
  }

  private get flexWrap () {
    return this.wrap ? 'wrap' : 'nowrap'
  }
}
</script>

<style lang="less">
.lkl-layout-row {
  display: flex;
  flex-direction: row;
}
</style>
