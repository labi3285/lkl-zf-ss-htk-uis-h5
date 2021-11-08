<template>
  <div class="lkl-label-value-ab-small">
    <div v-if="a" class="lkl-label-value-ab-small-item">
      <div :style="{ color: valueColor }" class="lkl-label-value-ab-small-item-value">{{ a.value }}</div>
      <div class="lkl-label-value-ab-small-item-tip">{{ a.label }}</div>
    </div>
    <div v-if="b" class="lkl-label-value-ab-small-item">
      <div :style="{ color: valueColor }" class="lkl-label-value-ab-small-item-value">{{ b.value }}</div>
      <div class="lkl-label-value-ab-small-item-tip">{{ b.label }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklLabelValue } from '../defines/label-value'

@Component
export default class LklLabelValueAbSimple extends Vue {
  @Prop({ default: undefined }) a!: LklLabelValue;
  @Prop({ default: undefined }) b!: LklLabelValue;

  @Prop({ default: '' }) valueColor!: string;
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-label-value-ab-small {
  width: 100%;
  padding-left: var(--marginLR);
  padding-right: var(--marginLR);
  box-sizing: border-box;
  display: flex;
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    &-value {
      padding-top: 10px;
      font-size: 18px;
      color: var(--clrT1);
      font-weight: bold;
    }
    &-tip {
      padding-top: 8px;
      display: flex;
      align-items: center;
      height: 22px;
      font-size: 12px;
      color: var(--clrT2);
      padding-bottom: 10px;
    }
  }
}
</style>
