<template>
  <div class="lkl-total-ab">
    <div class="lkl-total-ab-card">
      <div class="lkl-total-ab-card-total-tip">{{ totalTip }}</div>
      <div class="lkl-total-ab-card-total-value">{{ totalValue }}</div>

      <div class="lkl-total-ab-card-a-tip">{{ aTip }}</div>
      <div class="lkl-total-ab-card-a-value">{{ aValue }}</div>
      <div class="lkl-total-ab-card-b-tip">{{ bTip }}</div>
      <div class="lkl-total-ab-card-b-value">{{ bValue }}</div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklHaoTkTotalAb extends Vue {
  @Prop({ default: 'Total' }) private totalTip!: string;
  @Prop({ default: '0' }) private totalValue!: string;
  @Prop({ default: 'A' }) private aTip!: string;
  @Prop({ default: '0' }) private aValue!: string;
  @Prop({ default: 'B' }) private bTip!: string;
  @Prop({ default: '0' }) private bValue!: string;
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-total-ab {
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  &-card {
    margin: 0 8px 0 8px;
    width: calc(100% - 8px * 2);
    height: 200px;
    .auto-bg-image('haotk-total-ab-bg');
    border-radius: 8px;
    position: relative;
    &-total-tip {
      position: absolute;
      top: 30px;
      left: 24px;
      right: 24px;
      color: #333333;
      font-size: 12px;
    }
    &-total-value {
      position: absolute;
      top: 50px;
      left: 24px;
      right: 24px;
      color: #333333;
      font-size: 26px;
      font-weight: bold;
    }
    &-a-tip {
      position: absolute;
      top: 130px;
      left: 24px;
      width: calc(50% - 24px * 2);
      color: #333333;
      font-size: 12px;
    }
    &-a-value {
      position: absolute;
      top: 150px;
      left: 24px;
      right: 24px;
      width: calc(50% - 24px * 2);
      color: #333333;
      font-size: 26px;
      font-weight: bold;
    }
    &-b-tip {
      position: absolute;
      top: 130px;
      left: calc(50% + 24px);
      width: calc(50% - 24px * 2);
      color: #333333;
      font-size: 12px;
    }
    &-b-value {
      position: absolute;
      top: 150px;
      left: calc(50% + 24px);
      right: 24px;
      width: calc(50% - 24px * 2);
      color: #333333;
      font-size: 26px;
      font-weight: bold;
    }
  }
}
</style>
