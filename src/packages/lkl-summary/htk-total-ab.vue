<template>
  <div class="lkl-total-ab">
    <div class="lkl-total-ab-item">
      <div class="lkl-total-ab-item-value">{{ valueA }}</div>
      <div class="lkl-total-ab-item-dot"></div>
      <div class="lkl-total-ab-item-tip">
        <div class="lkl-total-ab-item-tip-tip">{{ tipA }}</div>
        <div v-if="helpA" class="lkl-total-ab-item-tip-help">?</div>
        <div v-if="arrowA" class="lkl-total-ab-item-tip-arrow"></div>
      </div>
    </div>
    <div v-if="isBShow" class="lkl-total-ab-item">
      <div class="lkl-total-ab-item-value">{{ valueB }}</div>
      <div class="lkl-total-ab-item-dot"></div>
      <div class="lkl-total-ab-item-tip">
        <div class="lkl-total-ab-item-tip-tip">{{ tipB }}</div>
        <div v-if="helpB" class="lkl-total-ab-item-tip-help">?</div>
        <div v-if="arrowB" class="lkl-total-ab-item-tip-arrow"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklTotalAb extends Vue {
  @Prop({ default: 'A' }) tipA!: string;
  @Prop({ default: '0' }) valueA!: string;
  @Prop({ default: false }) helpA!: boolean;
  @Prop({ default: false }) arrowA!: boolean;

  @Prop({ default: true }) isBShow!: boolean;
  @Prop({ default: 'B' }) tipB!: string;
  @Prop({ default: '0' }) valueB!: string;
  @Prop({ default: false }) helpB!: boolean;
  @Prop({ default: false }) arrowB!: boolean;
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-total-ab {
  width: 100%;
  padding: 16px var(--marginLR) 16px var(--marginLR);
  width: calc(100% - var(--marginLR) * 2);
  display: flex;
  &-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    &-value {
      font-size: 20px;
      color: var(--clrT1);
      font-weight: bold;
    }
    &-dot {
      width: 12px;
      height: 3px;
      background-color: #FC4C8C;
      border-radius: 1.5px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    &-tip {
      display: flex;
      align-items: center;
      height: 22px;
      &-tip {
        font-size: 14px;
        color: var(--clrT2);
      }
      &-help {
        width: 14px;
        height: 14px;
        font-size: 9px;
        color: #3A75F3;
        font-weight: bold;
        line-height: 14px;
        margin-left: var(--marginS);
        background-color: yellow;
        text-align: center;
        border-radius: 7px;
      }
      &-arrow {
        width: 22px;
        height: 22px;
        margin-left: var(--marginS);
        .auto-bg-image('resources/htk-arrow');
      }
    }
  }
}
</style>
