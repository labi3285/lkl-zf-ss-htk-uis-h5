<template>
  <div class="lkl-tip-value-ab">
    <div v-if="a" class="lkl-tip-value-ab-item">
      <div class="lkl-tip-value-ab-item-value">{{ a?.value }}</div>
      <div class="lkl-tip-value-ab-item-dot"></div>
      <div class="lkl-tip-value-ab-item-tip">
        <div class="lkl-tip-value-ab-item-tip-tip">{{ a?.label }}</div>
        <div v-if="helpA" class="lkl-tip-value-ab-item-tip-help">?</div>
        <div v-if="arrowA" class="lkl-tip-value-ab-item-tip-arrow"></div>
      </div>
    </div>
    <div v-if="b" class="lkl-tip-value-ab-item">
      <div class="lkl-tip-value-ab-item-value">{{ b?.value }}</div>
      <div class="lkl-tip-value-ab-item-dot"></div>
      <div class="lkl-tip-value-ab-item-tip">
        <div class="lkl-tip-value-ab-item-tip-tip">{{ b?.label }}</div>
        <div v-if="helpB" class="lkl-tip-value-ab-item-tip-help">?</div>
        <div v-if="arrowB" class="lkl-tip-value-ab-item-tip-arrow"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklLabelValue } from '../defines/label-value'

@Component
export default class LklTipValueAb extends Vue {
  @Prop({ default: undefined }) a!: LklLabelValue;
  @Prop({ default: false }) helpA!: boolean;
  @Prop({ default: false }) arrowA!: boolean;

  @Prop({ default: undefined }) b!: LklLabelValue;

  @Prop({ default: false }) helpB!: boolean;
  @Prop({ default: false }) arrowB!: boolean;
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-tip-value-ab {
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
