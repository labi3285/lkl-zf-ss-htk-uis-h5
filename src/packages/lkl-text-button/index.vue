<template>
  <div class="lkl-text-button" :style="{ color, textDecoration: isUnderline ? 'underline' : '' }">
    <slot name="left" />
    {{ text }}
    <slot name="right" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklTextButton extends Vue {
  @Prop({ default: 'var(--clrTheme)' }) private color!: string;
  @Prop({ default: '按钮' }) private text!: string;
  @Prop({ default: false }) private isUnderline!: boolean;
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
