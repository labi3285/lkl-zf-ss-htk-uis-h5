<template>
  <div class="lkl-htk-rank-mine">
    <div class="lkl-htk-rank-mine-mine">
      <div class="lkl-htk-rank-mine-mine-value">{{ rank }}</div>
      <div class="lkl-htk-rank-mine-mine-tip">{{ mineTip }}</div>
    </div>
    <div class="lkl-htk-rank-mine-value">
      <div class="lkl-htk-rank-mine-value-value">{{ value }}</div>
      <div class="lkl-htk-rank-mine-value-tip">{{ tip }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklHtkRankMine extends Vue {
  @Prop({ default: '-' }) rank!: string;
  @Prop({ default: '我的排名' }) mineTip!: string;
  @Prop({ default: '0' }) value!: string;
  @Prop({ default: '数值' }) tip!: string;
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-htk-rank-mine {
  width: 100%;
  height: 116px;
  padding-left: var(--marginLR);
  padding-right: var(--marginLR);
  box-sizing: border-box;
  display: flex;
  &-mine {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    &-value {
      line-height: 40px;
      font-size: 32px;
      color: #D16954;
      font-weight: bold;
    }
    &-tip {
      line-height: 20px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: var(--clrT2);
      font-weight: bold;
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
      font-size: 26px;
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
