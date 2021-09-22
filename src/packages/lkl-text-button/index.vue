<template>
  <div class="lkl-text-button">
    <slot name="left" />
    {{ text }}
    <slot name="right" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklTextButton extends Vue {
  @Prop({ default: '按钮' }) private text!: string;
}
</script>

<style lang="less">
.lkl-text-button {
  color: var(--clrTint);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
