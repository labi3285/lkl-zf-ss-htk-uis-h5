<template>
  <div class="lkl-label-value-ab-simple">
    <div v-if="a" class="lkl-label-value-ab-simple-item">
      <div :style="{ color: valueColor }" class="lkl-label-value-ab-simple-item-value">{{ a.value }}</div>
      <div class="lkl-label-value-ab-simple-item-tip">{{ a.label }}</div>
    </div>
    <div v-if="b" class="lkl-label-value-ab-simple-item">
      <div :style="{ color: valueColor }" class="lkl-label-value-ab-simple-item-value">{{ b.value }}</div>
      <div class="lkl-label-value-ab-simple-item-tip">{{ b.label }}</div>
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

.lkl-label-value-ab-simple {
  width: 100%;
  padding-left: var(--marginLR);
  padding-right: var(--marginLR);
  box-sizing: border-box;
  display: flex;
  height: 90px;
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    &-value {
      padding-top: 20px;
      font-size: 24px;
      color: var(--clrT1);
      font-weight: bold;
    }
    &-tip {
      padding-top: 8px;
      display: flex;
      align-items: center;
      height: 22px;
      font-size: 14px;
      color: var(--clrT2);
    }
  }
}
</style>
