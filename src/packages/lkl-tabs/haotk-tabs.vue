<template>
  <div v-if="tabs !== undefined" class="lkl-haotk-tabs">
    <div class="lkl-haotk-tabs-tabs">
      <div class="lkl-haotk-tabs-tabs-content">
        <div v-for="(e, i) in tabs" :key="i" :style="{ width: tabWidth }" class="lkl-haotk-tabs-tabs-content-tab" @click="onTabClick(e)">
          <div :class="e.code === currentTabCode ? 'lkl-haotk-tabs-tabs-content-tab-title-select' : 'lkl-haotk-tabs-tabs-content-tab-title'">{{ e.name }}</div>
          <div :style="{ opacity: e.code === currentTabCode ? 1 : 0 }" class="lkl-haotk-tabs-tabs-content-tab-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklTab } from './defines'

@Component
export default class LklHaotkTabs extends Vue {
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

  private get tabWidth () {
    if (this.tabs !== undefined) {
      if (this.tabs.length <= 2) {
        return '140px'
      } else if (this.tabs.length === 3) {
        return '100px'
      } else {
        return (345.0 / this.tabs.length) + 'px'
      }
    }
    return '140px'
  }
}
</script>

<style lang="less">
.lkl-haotk-tabs {
  padding: 8px;
  &-tabs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
      width: calc(100% - 20px);
      height: 35px;
      display: flex;
      justify-content: left;
      align-items: center;
      &-tab {
        margin-left: 20px;
        width: auto !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 50px;
        &-title {
          line-height: 34px;
          font-weight: bold;
          font-size: var(--font16);
          color: #666666;
        }
        &-title-select {
          line-height: 34px;
          font-weight: bold;
          font-size: var(--font16);
          color: var(--clrTint);
        }
        &-line {
          height: 2px;
          width: 32px;
          border-radius: 1px;
          background-color: var(--clrTint);
        }
      }
    }
  }
}
</style>
