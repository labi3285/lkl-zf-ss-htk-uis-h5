<template>
  <div :style="{ padding, margin, justifyContent, alignItems }" class="lkl-layout-colum">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklLayoutColum extends Vue {
  @Prop({ default: 'left' }) alignX!: string;
  @Prop({ default: 'top' }) alignY!: string;
  @Prop({ default: '' }) padding!: string;
  @Prop({ default: '' }) margin!: string;

  private get alignItems () {
    switch (this.alignX) {
      case 'center':
        return 'center'
      case 'right':
        return 'flex-end'
      default:
        return 'flex-start'
    }
  }

  private get justifyContent () {
    switch (this.alignY) {
      case 'center':
        return 'center'
      case 'bottom':
        return 'flex-end'
      default:
        return 'flex-start'
    }
  }
}
</script>

<style lang="less">
.lkl-layout-colum {
  display: flex;
  flex-direction: column;
}
</style>
