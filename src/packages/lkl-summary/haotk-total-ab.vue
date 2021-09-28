<template>
  <div class="lkl-total-ab">
    <div class="lkl-total-ab-card" :style="{ height }">
      <div class="lkl-total-ab-card-total-tip">
        {{ totalTip }}
        <div v-if="totalArrow" class="lkl-total-ab-card-total-tip-arrow"></div>
        <div v-if="totalHelp" class="lkl-total-ab-card-total-tip-help"></div>
      </div>

      <div v-if="help" class="lkl-total-ab-card-help"></div>

      <div class="lkl-total-ab-card-total-value">{{ totalValue }}</div>

      <div class="lkl-total-ab-card-tip">{{ tip }}</div>
      <div class="lkl-total-ab-card-tip1">{{ tip1 }}</div>

      <div v-if="showSub" class="lkl-total-ab-card-items">
        <div class="lkl-total-ab-card-items-item">
          <div class="lkl-total-ab-card-items-item-tip">
            {{ aTip }}
            <div v-if="aArrow" class="lkl-total-ab-card-total-tip-arrow"></div>
          </div>
          <div class="lkl-total-ab-card-items-item-value">{{ aValue }}</div>
        </div>
        <div class="lkl-total-ab-card-items-break"></div>
        <div class="lkl-total-ab-card-items-item">
          <div class="lkl-total-ab-card-items-item-tip">
            {{ bTip }}
            <div v-if="bArrow" class="lkl-total-ab-card-total-tip-arrow"></div>
          </div>
          <div class="lkl-total-ab-card-items-item-value">{{ bValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklHaoTkTotalAb extends Vue {
  @Prop({ default: '' }) private tip!: string;
  @Prop({ default: '' }) private tip1!: string;
  @Prop({ default: 'Total' }) private totalTip!: string;
  @Prop({ default: false }) private totalArrow!: boolean;
  @Prop({ default: false }) private totalHelp!: boolean;

  @Prop({ default: false }) private help!: boolean;

  @Prop({ default: true }) private showSub!: boolean;

  @Prop({ default: '0' }) private totalValue!: string;
  @Prop({ default: 'A' }) private aTip!: string;
  @Prop({ default: '0' }) private aValue!: string;
  @Prop({ default: false }) private aArrow!: boolean;

  @Prop({ default: 'B' }) private bTip!: string;
  @Prop({ default: '0' }) private bValue!: string;
  @Prop({ default: false }) private bArrow!: boolean;

  private get height () {
    return this.showSub ? '184px' : '100px'
  }
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-total-ab {
  width: 100%;
  margin-top: var(--marginTB);
  margin-bottom: var(--marginTB);
  &-card {
    margin: 0 var(--marginLR) 0 var(--marginLR);
    width: calc(100% - var(--marginLR) * 2);
    .auto-bg-image('haotk-total-abc-bg');
    background-size: 100% !important;
    border-radius: var(--radiusL);
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
        .auto-bg-image('haotk-arrow');
      }
      &-help {
        width: 17px;
        height: 17px;
        margin-left: var(--marginS);
        .auto-bg-image('haotk-help');
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
      .auto-bg-image('haotk-help');
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
            .auto-bg-image('haotk-arrow');
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
      &-break {
        width: 1px;
        height: 32px;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}
</style>
