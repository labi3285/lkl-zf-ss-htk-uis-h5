<template>
  <div class="lkl-dot-title">
    <div class="lkl-dot-title-dot"></div>
    <div class="lkl-dot-title-text">{{ title }}</div>
    <div class="lkl-dot-title-flex-space"></div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class QXDotTitle extends Vue {
  @Prop({ default: '' }) private title!: string;
}
</script>

<style lang="less">
.lkl-dot-title {
  margin: 8px 10px 8px 10px;
  display: flex;
  align-items: center;
  &-dot {
    width: 4px;
    height: 16px;
    background-color: var(--clrTint);
    margin-right: 8px;
  }
  &-text {
    font-weight: bold;
    font-size: 16px;
    color: var(--clrT1);
  }
  &-flex-space {
    flex: 1;
  }
}
</style>
