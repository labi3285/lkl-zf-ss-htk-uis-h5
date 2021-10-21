<template>
  <div class="lkl-button">
    <slot>{{ title }}</slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklSettingRowButton extends Vue {
  @Prop({ default: '按钮' }) private title!: string;
}
</script>

<style lang="less">
.lkl-button {
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
</style>
