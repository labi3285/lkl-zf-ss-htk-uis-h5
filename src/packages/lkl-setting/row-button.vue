<template>
  <div class="lkl-setting-row-button">
    <div class="lkl-setting-row-button-button">
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
  @Prop({ default: '按钮' }) title!: string;
}
</script>

<style lang="less">
.lkl-setting-row-button {
  padding: var(--marginTB) var(--marginLR) var(--marginTB) var(--marginLR);
  &-button {
    height: 45px;
    border-radius: 4px;
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
