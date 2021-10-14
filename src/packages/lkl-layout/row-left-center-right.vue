<template>
  <div :style="{ }" class="lkl-layout-row-left-center-right">
    <slot />
    <div class="lkl-layout-row-left-center-right-left">
      <slot name="left"></slot>
    </div>
    <div class="lkl-layout-row-left-center-right-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklLayoutRowLeftCenterRight extends Vue {
}
</script>

<style lang="less">
.lkl-layout-row-left-center-right {
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - var(--marginLR) * 2);
  margin-left: var(--marginLR);
  margin-right: var(--marginLR);
  &-left {
    position: absolute;
    left: 0;
    top: 0;
  }
  &-right {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
