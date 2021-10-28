<template>
  <div class="lkl-htk-rank-top3">
    <div class="lkl-htk-rank-top3-rank">
      <div class="lkl-htk-rank-top3-rank-top" style="height: 30px"></div>
      <div :class="rank2 ? 'lkl-htk-rank-top3-rank-pic-rank2-1' : 'lkl-htk-rank-top3-rank-pic-rank2-0'" class="lkl-htk-rank-top3-rank-pic"></div>
      <div v-if="rank2" class="lkl-htk-rank-top3-rank-name">{{ rank2.name }}</div>
      <div v-if="rank2" class="lkl-htk-rank-top3-rank-value">{{ rank2.value }}</div>
      <div v-if="rank2 && isUnitShow" class="lkl-htk-rank-top3-rank-unit">{{ rank2.unit }}</div>
      <div v-if="!rank2" class="lkl-htk-rank-top3-rank-empty">暂无排名</div>
    </div>
    <div class="lkl-htk-rank-top3-rank">
      <div :class="rank1 ? 'lkl-htk-rank-top3-rank-pic-rank1-1' : 'lkl-htk-rank-top3-rank-pic-rank1-0'" class="lkl-htk-rank-top3-rank-pic"></div>
      <div v-if="rank1" class="lkl-htk-rank-top3-rank-name">{{ rank1.name }}</div>
      <div v-if="rank1" class="lkl-htk-rank-top3-rank-value">{{ rank1.value }}</div>
      <div v-if="rank1 && isUnitShow" class="lkl-htk-rank-top3-rank-unit">{{ rank1.unit }}</div>
      <div v-if="!rank1" class="lkl-htk-rank-top3-rank-empty">暂无排名</div>
    </div>
    <div class="lkl-htk-rank-top3-rank">
      <div class="lkl-htk-rank-top3-rank-top" style="height: 40px"></div>
      <div :class="rank3 ? 'lkl-htk-rank-top3-rank-pic-rank3-1' : 'lkl-htk-rank-top3-rank-pic-rank3-0'" class="lkl-htk-rank-top3-rank-pic "></div>
      <div v-if="rank3" class="lkl-htk-rank-top3-rank-name">{{ rank3.name }}</div>
      <div v-if="rank3" class="lkl-htk-rank-top3-rank-value">{{ rank3.value }}</div>
      <div v-if="rank3 && isUnitShow" class="lkl-htk-rank-top3-rank-unit">{{ rank3.unit }}</div>
      <div v-if="!rank3" class="lkl-htk-rank-top3-rank-empty">暂无排名</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { LklRankItem } from './defines'

@Component
export default class LklHtkRankTop3 extends Vue {
  @Prop({ default: undefined }) public rank1!: LklRankItem;
  @Prop({ default: undefined }) public rank2!: LklRankItem;
  @Prop({ default: undefined }) public rank3!: LklRankItem;
  @Prop({ default: false }) public isUnitShow!: boolean;
}
</script>

<style lang="less" scoped>
@import "../utils/style.less";

.lkl-htk-rank-top3 {
  width: 100%;
  box-sizing: border-box;
  padding: var(--marginTB) var(--marginLR) var(--marginTB) var(--marginLR);
  display: flex;
  align-items: flex-start;
  &-rank {
    flex-shrink: 0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-top {
      flex-shrink: 0;
      width: 100%;
    }
    &-pic {
      width: 62px;
      height: 62px;
      flex-shrink: 0;
    }
    &-name {
      margin-top: 5px;
      font-size: 14px;
      font-weight: bold;
      color: var(--clrT1);
      flex-shrink: 0;
      word-break: break-all;
      text-align: center;
    }
    &-value {
      margin-top: 5px;
      font-size: 12px;
      color: var(--clrT1);
      flex-shrink: 0;
    }
    &-unit {
      margin-top: 3px;
      font-size: 10px;
      color: var(--clrT3);
      flex-shrink: 0;
    }
    &-empty {
      margin-top: 10px;
      font-size: 12px;
      color: var(--clrT3);
      flex-shrink: 0;
    }
    &-pic-rank1-0 { .auto-bg-image("./resources/pic_no1_dis"); }
    &-pic-rank1-1 { .auto-bg-image("./resources/pic_no1"); }
    &-pic-rank2-0 { .auto-bg-image("./resources/pic_no2_dis"); }
    &-pic-rank2-1 { .auto-bg-image("./resources/pic_no2"); }
    &-pic-rank3-0 { .auto-bg-image("./resources/pic_no3_dis"); }
    &-pic-rank3-1 { .auto-bg-image("./resources/pic_no3"); }
  }

}

.lkl-htk-rank-top31 {
  // background: @clrBody;
  display: flex;
  margin-top: 8px;
  padding-bottom: 8px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 8px;
  flex-direction: row;
  .ranking-left {
    flex: 1;
    // padding-top: 0;
    // padding-bottom: 15px;
    // margin: 4px, 4px, 4px, 4px;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      width: 62px;
      height: 62px;
      .auto-bg-image("./resources/pic_no2");
    }
    .img_dis {
      width: 62px;
      height: 62px;
      .auto-bg-image("./resources/pic_no2_dis");
    }
    .span {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: bold;
      color: #0F0F0F;
    }
    .span-none {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 10px;
      color: #999999;
    }
    .span-bottom {
      font-size: 14px;
      font-weight: normal;
      color: #0F0F0F;
    }
    .span-tip {
      margin-top: 3px;
      font-size: 10px;
      // color: @clrT2;
    }
  }
  .ranking-right {
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      width: 62px;
      height: 62px;
      .auto-bg-image("./resources/pic_no3");
    }
    .img_dis {
      width: 62px;
      height: 62px;
      .auto-bg-image("./resources/pic_no3_dis");
    }
    .span {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: bold;
      color: #0F0F0F;
    }
    .span-none {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 10px;
      color: #999999;
    }
    .span-bottom {
      font-size: 14px;
      font-weight: normal;
      color: #0F0F0F;
    }
    .span-tip {
      margin-top: 3px;
      font-size: 10px;
      // color: @clrT2;
    }
  }
  .ranking-middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      width: 62px;
      height: 62px;
      .auto-bg-image("./resources/pic_no1");
    }
    .img_dis {
      width: 62px;
      height: 62px;
      .auto-bg-image("./resources/pic_no1_dis");
    }
    .span {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: bold;
      color: #0F0F0F;
    }
    .span-none {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 10px;
      color: #999999;
    }
    .span-bottom {
      font-size: 14px;
      font-weight: normal;
      color: #0F0F0F;
    }
    .span-tip {
      margin-top: 3px;
      font-size: 10px;
      // color: @clrT2;
    }
  }
}
</style>
