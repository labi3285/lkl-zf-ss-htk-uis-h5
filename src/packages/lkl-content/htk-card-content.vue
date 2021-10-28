<template>
  <div class="lkl-htk-card-content">
    <div class="lkl-htk-card-content-head-space"></div>
    <div class="lkl-htk-card-content-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklContentCardHead extends Vue {
}
</script>

<style lang="less">
.lkl-htk-card-content {
  position: relative;
  background-color: var(--clrTheme);
  // margin-bottom: -1px;
  &-head-space {
    height: var(--marginTB);
  }
  &-content {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: var(--clrBody);
    min-height: 100px;
    overflow: hidden;
  }
}
</style>
