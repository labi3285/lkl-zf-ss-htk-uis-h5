<template>
  <div class="lkl-total-ab-simple">
    <div class="lkl-total-ab-simple-item">
      <div :style="{ color: valueColor }" class="lkl-total-ab-simple-item-value">{{ valueA }}</div>
      <div class="lkl-total-ab-simple-item-tip">{{ tipA }}</div>
    </div>
    <div v-if="isBShow" class="lkl-total-ab-simple-item">
      <div :style="{ color: valueColor }" class="lkl-total-ab-simple-item-value">{{ valueB }}</div>
      <div class="lkl-total-ab-simple-item-tip">{{ tipB }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklTotalAbSimple extends Vue {
  @Prop({ default: 'A' }) tipA!: string;
  @Prop({ default: '0' }) valueA!: string;
  @Prop({ default: true }) isBShow!: boolean;
  @Prop({ default: 'B' }) tipB!: string;
  @Prop({ default: '0' }) valueB!: string;

  @Prop({ default: '' }) valueColor!: string;
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-total-ab-simple {
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
