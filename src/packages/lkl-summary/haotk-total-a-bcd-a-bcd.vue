<template>
  <div class="lkl-total-a-bcd-a-bcd">
    <div class="lkl-total-a-bcd-a-bcd-card" :style="{ height }">
      <div v-if="total" class="lkl-total-a-bcd-a-bcd-card-total-label">
        {{ total.label }}
        <div v-if="totalArrow" class="lkl-total-a-bcd-a-bcd-card-total-label-arrow"></div>
        <div v-if="totalHelp" class="lkl-total-a-bcd-a-bcd-card-total-label-help"></div>
      </div>

      <div v-if="help" class="lkl-total-a-bcd-a-bcd-card-help"></div>
      <div v-if="total" class="lkl-total-a-bcd-a-bcd-card-total-value">{{ total.value }}</div>

      <div class="lkl-total-a-bcd-a-bcd-card-tip">{{ tip }}</div>
      <div class="lkl-total-a-bcd-a-bcd-card-tip1">{{ tip1 }}</div>

      <div v-if="showSub" class="lkl-total-a-bcd-a-bcd-card-row" style="top: 106px">
        <div v-if="a" class="lkl-total-a-bcd-a-bcd-card-row-a">
          <div class="lkl-total-a-bcd-a-bcd-card-row-a-label">
            {{ a.label }}
          </div>
          <div class="lkl-total-a-bcd-a-bcd-card-row-a-value">{{ a.value }}</div>
        </div>
        <div class="lkl-total-a-bcd-a-bcd-card-row-bcd">
          <div v-if="b" class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-label">
              {{ b.label }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ b.value }}</div>
          </div>
          <div v-if="c" class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-label">
              {{ c.label }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ c.value }}</div>
          </div>
          <div v-if="d" class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-label">
              {{ d.label }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ d.value }}</div>
          </div>
        </div>
      </div>
      <div v-if="showSub" class="lkl-total-a-bcd-a-bcd-card-row" style="top: 166px">
        <div v-if="a1" class="lkl-total-a-bcd-a-bcd-card-row-a">
          <div class="lkl-total-a-bcd-a-bcd-card-row-a-label">
            {{ a1.label }}
          </div>
          <div class="lkl-total-a-bcd-a-bcd-card-row-a-value">{{ a1.value }}</div>
        </div>
        <div class="lkl-total-a-bcd-a-bcd-card-row-bcd">
          <div v-if="b1" class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-label">
              {{ b1.label }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ b1.value }}</div>
          </div>
          <div v-if="c1" class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-label">
              {{ c1.label }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ c1.value }}</div>
          </div>
          <div v-if="d1" class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-label">
              {{ d1.label }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ d1.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklLabelValue } from '../defines/label-value'

@Component
export default class LklHaoTkTotalABcdABcd extends Vue {
  @Prop({ default: '' }) tip!: string;
  @Prop({ default: '' }) tip1!: string;

  @Prop({ default: undefined }) total!: LklLabelValue;
  @Prop({ default: false }) totalArrow!: boolean;
  @Prop({ default: false }) totalHelp!: boolean;

  @Prop({ default: false }) help!: boolean;

  @Prop({ default: true }) showSub!: boolean;

  @Prop({ default: undefined }) a!: LklLabelValue;
  @Prop({ default: undefined }) b!: LklLabelValue;
  @Prop({ default: undefined }) c!: LklLabelValue;
  @Prop({ default: undefined }) d!: LklLabelValue;

  @Prop({ default: undefined }) a1!: LklLabelValue;
  @Prop({ default: undefined }) b1!: LklLabelValue;
  @Prop({ default: undefined }) c1!: LklLabelValue;
  @Prop({ default: undefined }) d1!: LklLabelValue;

  private get height () {
    return this.showSub ? '227px' : '100px'
  }
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-total-a-bcd-a-bcd {
  width: 100%;
  margin-top: var(--marginTB);
  margin-bottom: var(--marginTB);
  &-card {
    margin: 0 var(--marginLR) 0 var(--marginLR);
    width: calc(100% - var(--marginLR) * 2);
    .auto-bg-image('resources/haotk-total-a-bcd-a-bcd-bg');
    background-size: 100% !important;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
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
    &-row {
      position: absolute;
      left: 0;
      right: 0;
      &-a {
        &-label {
          margin-left: 24px;
          color: #333333;
          font-size: var(--font12);
        }
        &-value {
          margin-top: 7px;
          margin-left: 24px;
          color: #333333;
          font-size: var(--font14);
          font-weight: bold;
        }
      }
      &-bcd {
        position: absolute;
        display: flex;
        left: 130px;
        right: 10px;
        top: 0;
        &-item {
          flex: 1;
          text-align: center;
          &-label {
            color: #333333;
            font-size: var(--font12);
          }
          &-value {
            margin-top: 7px;
            color: #333333;
            font-size: var(--font14);
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
