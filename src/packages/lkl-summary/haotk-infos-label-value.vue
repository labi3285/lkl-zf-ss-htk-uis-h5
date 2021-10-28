<template>
  <div class="lkl-haotk-infos-key-value">
    <div class="lkl-haotk-infos-key-value-label">
      <slot name="key">{{ label }}：</slot>
    </div>
    <div class="lkl-haotk-infos-key-value-value">
      <slot>{{ value }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklHaotkInfosLklDimensionlOption extends Vue {
  @Prop({ default: 'label' }) label!: string;
  @Prop({ default: 'value' }) value!: string;
}
</script>

<style lang="less">
.lkl-haotk-infos-key-value {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 8px 16px 8px 16px;
  &-label {
    color: #333333;
    font-size: var(--font14);
  }
  &-value {
    color: #333333;
    font-size: var(--font14);
    font-weight: bold;
  }
}
</style>
