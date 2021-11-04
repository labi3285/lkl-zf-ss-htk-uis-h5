<template>
  <div v-if="tabs !== undefined" class="lkl-htk-tabs">
    <div class="lkl-htk-tabs-tabs">
      <div class="lkl-htk-tabs-tabs-content">
        <div v-for="(e, i) in tabs" :key="i" :style="{ width: tabWidth }" class="lkl-htk-tabs-tabs-content-tab" @click="onTabClick(e)">
          <div :class="e.code === currentTabCode ? 'lkl-htk-tabs-tabs-content-tab-title-select' : 'lkl-htk-tabs-tabs-content-tab-title'">{{ e.name }}</div>
          <div :style="{ opacity: e.code === currentTabCode ? 1 : 0, width: lineWidth }" class="lkl-htk-tabs-tabs-content-tab-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklTab } from './defines'

@Component
export default class LklHtkTabs extends Vue {
  @Prop({ default: undefined }) tabs!: LklTab[];
  @Prop({ required: true }) currentTabCode!: string | number;
  @Prop({ default: '108px' }) lineWidth!: string;

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
      if (this.tabs.length > 0 && this.tabs.length <= 4) {
        return 355 / this.tabs.length + 'px'
      }
    }
    return '140px'
  }
}
</script>

<style lang="less">
.lkl-htk-tabs {
  // padding: 0 var(--marginLR);
  padding-left: 10px;
  padding-right: 10px;
  &-tabs {
    width: 355px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
      height: 45px;
      display: flex;
      align-items: center;
      overflow: scroll;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      &-tab {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &-title {
          line-height: 43px;
          font-weight: bold;
          font-size: var(--font16);
          color: #666666;
        }
        &-title-select {
          line-height: 43px;
          font-weight: bold;
          font-size: var(--font16);
          color: var(--clrTint);
        }
        &-line {
          height: 2px;
          border-radius: 1px;
          background-color: var(--clrTint);
        }
      }
    }
  }
}
</style>
