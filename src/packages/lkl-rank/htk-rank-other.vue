<template>
  <div class="lkl-htk-rank-other">
    <div class="lkl-htk-rank-other-other">
      <div class="lkl-htk-rank-other-other-name">{{ name }}</div>
      <div class="lkl-htk-rank-other-other-rank">
        排名第
        <span>{{ rank }}</span>
      </div>
    </div>
    <div class="lkl-htk-rank-other-value">
      <div class="lkl-htk-rank-other-value-value">{{ value }}</div>
      <div class="lkl-htk-rank-other-value-tip">{{ tip }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklHtkRankMine extends Vue {
  @Prop({ default: '5' }) rank!: string;
  @Prop({ default: '??' }) name!: string;
  @Prop({ default: '0' }) value!: string;
  @Prop({ default: '数值' }) tip!: string;
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-htk-rank-other {
  width: 100%;
  height: 112px;
  padding-left: var(--marginLR);
  padding-right: var(--marginLR);
  box-sizing: border-box;
  display: flex;
  &-other {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    &-name {
      line-height: 40px;
      font-size: 16px;
      color: var(--clrT2);
      font-weight: bold;
    }
    &-rank {
      line-height: 20px;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: var(--clrT2);
      font-weight: bold;
      span {
        margin-left: 3px;
        color: #D16954;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
  &-value {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    &-value {
      line-height: 36px;
      font-size: 20px;
      color: var(--clrT1);
      font-weight: bold;
    }
    &-tip {
      line-height: 30px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: var(--clrT2);
      font-weight: bold;
    }
  }
}
</style>
