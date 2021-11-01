<template>
  <div class="lkl-total-a-bcd-a-bcd">
    <div class="lkl-total-a-bcd-a-bcd-card" :style="{ height }">
      <div class="lkl-total-a-bcd-a-bcd-card-total-tip">
        {{ totalTip }}
        <div v-if="totalArrow" class="lkl-total-a-bcd-a-bcd-card-total-tip-arrow"></div>
        <div v-if="totalHelp" class="lkl-total-a-bcd-a-bcd-card-total-tip-help"></div>
      </div>

      <div v-if="help" class="lkl-total-a-bcd-a-bcd-card-help"></div>

      <div class="lkl-total-a-bcd-a-bcd-card-total-value">{{ totalValue }}</div>

      <div class="lkl-total-a-bcd-a-bcd-card-tip">{{ tip }}</div>
      <div class="lkl-total-a-bcd-a-bcd-card-tip1">{{ tip1 }}</div>

      <div v-if="showSub" class="lkl-total-a-bcd-a-bcd-card-row" style="top: 106px">
        <div class="lkl-total-a-bcd-a-bcd-card-row-a">
          <div class="lkl-total-a-bcd-a-bcd-card-row-a-tip">
            {{ aTip }}
          </div>
          <div class="lkl-total-a-bcd-a-bcd-card-row-a-value">{{ aValue }}</div>
        </div>
        <div class="lkl-total-a-bcd-a-bcd-card-row-bcd">
          <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-tip">
              {{ bTip }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ bValue }}</div>
          </div>
          <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-tip">
              {{ cTip }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ cValue }}</div>
          </div>
          <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-tip">
              {{ dTip }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ dValue }}</div>
          </div>
        </div>
      </div>
      <div v-if="showSub" class="lkl-total-a-bcd-a-bcd-card-row" style="top: 166px">
        <div class="lkl-total-a-bcd-a-bcd-card-row-a">
          <div class="lkl-total-a-bcd-a-bcd-card-row-a-tip">
            {{ aTip1 }}
          </div>
          <div class="lkl-total-a-bcd-a-bcd-card-row-a-value">{{ aValue1 }}</div>
        </div>
        <div class="lkl-total-a-bcd-a-bcd-card-row-bcd">
          <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-tip">
              {{ bTip1 }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ bValue1 }}</div>
          </div>
          <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-tip">
              {{ cTip1 }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ cValue1 }}</div>
          </div>
          <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item">
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-tip">
              {{ dTip1 }}
            </div>
            <div class="lkl-total-a-bcd-a-bcd-card-row-bcd-item-value">{{ dValue1 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklHaoTkTotalABcdABcd extends Vue {
  @Prop({ default: '' }) tip!: string;
  @Prop({ default: '' }) tip1!: string;
  @Prop({ default: 'Total' }) totalTip!: string;
  @Prop({ default: '0' }) totalValue!: string;
  @Prop({ default: false }) totalArrow!: boolean;
  @Prop({ default: false }) totalHelp!: boolean;

  @Prop({ default: false }) help!: boolean;

  @Prop({ default: true }) showSub!: boolean;

  @Prop({ default: 'A' }) aTip!: string;
  @Prop({ default: '0' }) aValue!: string;
  @Prop({ default: 'B' }) bTip!: string;
  @Prop({ default: '0' }) bValue!: string;
  @Prop({ default: 'C' }) cTip!: string;
  @Prop({ default: '0' }) cValue!: string;
  @Prop({ default: 'D' }) dTip!: string;
  @Prop({ default: '0' }) dValue!: string;

  @Prop({ default: 'A1' }) aTip1!: string;
  @Prop({ default: '0' }) aValue1!: string;
  @Prop({ default: 'B1' }) bTip1!: string;
  @Prop({ default: '0' }) bValue1!: string;
  @Prop({ default: 'C1' }) cTip1!: string;
  @Prop({ default: '0' }) cValue1!: string;
  @Prop({ default: 'D1' }) dTip1!: string;
  @Prop({ default: '0' }) dValue1!: string;

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
    &-total-tip {
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
        &-tip {
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
          &-tip {
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
