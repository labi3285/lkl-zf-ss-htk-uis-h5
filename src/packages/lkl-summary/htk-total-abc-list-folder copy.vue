<template>
  <div class="lkl-total">
    <div class="lkl-total-value">
      <div class="lkl-total-value-value">{{ value }}</div>
    </div>
    <div class="lkl-total-tip">
      <div class="lkl-total-tip-dot"></div>
      <div class="lkl-total-tip-tip">{{ tip }}</div>
      <div v-if="help" class="lkl-total-tip-help">?</div>
      <div v-if="arrow" class="lkl-total-tip-arrow"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklTotal extends Vue {
  @Prop({ default: 'Total' }) tip!: string;
  @Prop({ default: '0' }) value!: string;
  @Prop({ default: false }) arrow!: boolean;
  @Prop({ default: false }) help!: boolean;
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-total {
  width: 100%;
  padding: 16px var(--marginLR) 16px var(--marginLR);
  width: calc(100% - var(--marginLR) * 2);
  &-value {
    display: flex;
    align-items: center;
    &-value {
      font-size: 32px;
      color: var(--clrT1);
      font-weight: bold;
    }
  }
  &-tip {
    display: flex;
    align-items: center;
    margin-top: var(--marginM);
    height: 22px;
    &-dot {
      width: 5px;
      height: 16px;
      background-color: #FC4C8C;
      border-radius: 2.5px;
      margin-right: var(--marginM);
    }
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
</style>
