<template>
  <div class="lkl-total">
    <div class="lkl-total-card">
      <div v-if="total" class="lkl-total-card-total-label">
        {{ total.label }}
        <div v-if="totalArrow" class="lkl-total-card-total-tip-arrow"></div>
        <div v-if="totalHelp" class="lkl-total-card-total-tip-help"></div>
      </div>

      <div v-if="help" class="lkl-total-card-help"></div>

      <div v-if="total" class="lkl-total-card-total-value">{{ total.value }}</div>

      <div class="lkl-total-card-tip">{{ tip }}</div>
      <div class="lkl-total-card-tip1">{{ tip1 }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklLabelValue } from '../defines/label-value'

@Component
export default class LklTotal extends Vue {
  @Prop({ default: '' }) tip!: string;
  @Prop({ default: '' }) tip1!: string;
  @Prop({ default: undefined }) total!: LklLabelValue;
  @Prop({ default: false }) totalArrow!: boolean;
  @Prop({ default: false }) totalHelp!: boolean;

  @Prop({ default: false }) help!: boolean;
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-total {
  width: 100%;
  margin-top: var(--marginTB);
  margin-bottom: var(--marginTB);
  &-card {
    margin: 0 var(--marginLR) 0 var(--marginLR);
    width: calc(100% - var(--marginLR) * 2);
    .auto-bg-image('resources/haotk-total-bg');
    border-radius: 8px;
    position: relative;
    height: 100px;
    background-color: #ffd53e;
    &-total-label {
      position: absolute;
      top: 30px;
      left: 24px;
      color: #333333;
      font-size: var(--font12);
      display: flex;
      align-items: center;
      &-arrow {
        width: 6px;
        height: 10px;
        margin-left: var(--marginS);
        .auto-bg-image('resources/haotk-arrow');
      }
      &-help {
        width: 17px;
        height: 17px;
        margin-left: var(--marginS);
        .auto-bg-image('resources/haotk-help');
      }
    }
    &-total-value {
      position: absolute;
      top: 50px;
      left: 24px;
      color: #333333;
      font-size: 26px;
      font-weight: bold;
    }
    &-help {
      width: 17px;
      height: 17px;
      .auto-bg-image('resources/haotk-help');
      position: absolute;
      top: 12px;
      right: 12px;
    }
    &-tip {
      position: absolute;
      top: 15px;
      right: 24px;
      color: #333333;
      font-size: var(--font12);
    }
    &-tip1 {
      position: absolute;
      top: 36px;
      right: 24px;
      color: #333333;
      font-size: var(--font12);
    }
    &-items {
      position: absolute;
      left: 0;
      right: 0;
      top: 130px;
      display: flex;
      &-item {
        flex: 1;
        &-tip {
          margin-left: 24px;
          color: #333333;
          font-size: var(--font12);
          display: flex;
          align-items: center;
          &-arrow {
            width: 6px;
            height: 10px;
            margin-left: var(--marginS);
            .auto-bg-image('resources/haotk-arrow');
          }
        }
        &-value {
          margin-top: 7px;
          margin-left: 24px;
          color: #333333;
          font-size: 26px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
