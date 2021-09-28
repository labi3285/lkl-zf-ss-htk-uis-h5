<template>
  <div class="lkl-setting-row-button">
    <div class="lkl-setting-row-button-button" @click.stop="onClick">
      <slot name="left"></slot>
      <slot>{{ title }}</slot>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklSettingRowButton extends Vue {
  @Prop({ default: '按钮' }) private title!: string;

  private onClick () {
    this.$emit('click')
  }
}
</script>

<style lang="less">
.lkl-setting-row-button {
  padding: var(--marginTB) var(--marginLR) var(--marginTB) var(--marginLR);
  &-button {
    height: var(--buttonH);
    border-radius: var(--radiusM);
    background-color: var(--clrTheme);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font16);
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
