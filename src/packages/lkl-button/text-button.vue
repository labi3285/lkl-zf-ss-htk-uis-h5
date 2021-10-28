<template>
  <div class="lkl-text-button" :style="{ color, textDecoration: isUnderline ? 'underline' : '' }">
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklTextButton extends Vue {
  @Prop({ default: 'var(--clrTheme)' }) color!: string;
  @Prop({ default: '按钮' }) text!: string;
  @Prop({ default: false }) isUnderline!: boolean;
}
</script>

<style lang="less">
.lkl-text-button {
  font-size: var(--font14);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
