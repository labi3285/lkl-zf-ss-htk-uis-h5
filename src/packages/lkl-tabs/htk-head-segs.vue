<template>
  <div v-if="tabs !== undefined" class="lkl-htk-head-segs">
    <div class="lkl-htk-head-segs-tabs">
      <div v-for="(e, i) in tabs" :key="i" :class="currentTabCode === e.code ? 'lkl-htk-head-segs-tabs-tab-select' : 'lkl-htk-head-segs-tabs-tab'" @click="onTabClick(e)">{{ e.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklTab } from './defines'

@Component
export default class LklHtkHeadSegs extends Vue {
  @Prop({ default: undefined }) tabs!: LklTab[];
  @Prop({ required: true }) currentTabCode!: string | number;

  private onTabClick (e: LklTab) {
    if (e.code === this.currentTabCode) {
      return
    }
    this.$emit('update:currentTabCode', e.code)
    this.$nextTick(() => {
      this.$emit('change')
    })
  }
}
</script>

<style lang="less">
.lkl-htk-head-segs {
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  &-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 13px;
    background-color:rgba(255, 255, 255, 0.2);
    &-tab {
      height: 26px;
      line-height: 26px;
      text-align: center;
      padding-left: 25px;
      padding-right: 25px;
      min-width: 50px;
      border-width: 0;
      color: rgba(255, 255, 255, 0.7);
      font-size: var(--font14);
      font-weight: bold;
    }
    &-tab-select {
      border-radius: 13px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-width: 1px;
      padding-left: 30px;
      padding-right: 30px;
      min-width: 50px;
      border-color: #ffffff;
      border-style: solid;
      background-color: #ffffff;
      color: var(--clrTint);
      font-size: var(--font14);
      font-weight: bold;
    }
  }
}
</style>
