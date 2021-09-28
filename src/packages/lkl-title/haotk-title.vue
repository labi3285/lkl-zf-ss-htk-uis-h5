<template>
  <div class="lkl-title">
    <div v-if="isDotShow" class="lkl-title-dot"></div>
    <div class="lkl-title-text">{{ title }}</div>
    <div class="lkl-title-flex-space"></div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class QXTitle extends Vue {
  @Prop({ default: '' }) private title!: string;
  @Prop({ default: true }) private isDotShow!: boolean;
}
</script>

<style lang="less">
.lkl-title {
  margin: var(--marginTB) 10px var(--marginTB) 10px;
  display: flex;
  align-items: center;
  &-dot {
    width: 4px;
    height: 16px;
    background-color: var(--clrTheme);
    margin-right: 8px;
  }
  &-text {
    font-weight: bold;
    font-size: var(--font16);
    color: var(--clrT1);
  }
  &-flex-space {
    flex: 1;
  }
}
</style>
