<template>
  <div class="lkl-haotk-infos-key-value">
    <div v-if="item" class="lkl-haotk-infos-key-value-label">
      <slot name="key">{{ item.label }}：</slot>
    </div>
    <div v-if="item" class="lkl-haotk-infos-key-value-value">
      <slot>{{ item.value }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklLabelValue } from '../defines/label-value'

@Component
export default class LklHaotkInfosLklLabelValue extends Vue {
  @Prop({ default: undefined }) item!: LklLabelValue;
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
