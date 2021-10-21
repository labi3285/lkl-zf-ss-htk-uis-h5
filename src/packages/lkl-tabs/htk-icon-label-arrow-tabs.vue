<template>
  <div v-if="tabs !== undefined" class="lkl-htk-icon-label-arrow-tabs">
    <div v-for="(e, i) in tabs" :key="i" :style="{ width: tabWidth }" class="lkl-htk-icon-label-arrow-tabs-tab" @click.stop="onTabClick(e)">
      <img class="lkl-htk-icon-label-arrow-tabs-tab-icon" :src="e.icon" />
      <div class="lkl-htk-icon-label-arrow-tabs-tab-label">{{ e.name }}</div>
      <svg :style="{ opacity: currentTabCode === e.code ? 1 : 0 }" t="1632860685404" class="lkl-htk-icon-label-arrow-tabs-tab-arrow" fill="var(--clrTint)" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12396" width="200" height="200"><path d="M42.666667 896 981.333333 896 512 85.333333" p-id="12397"></path></svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklTab } from './defines'

@Component
export default class LklHtkIconLabelArrowTabs extends Vue {
  @Prop({ default: undefined }) private tabs!: LklTab[];
  @Prop({ required: true }) private currentTabCode!: string | number;

  private onTabClick (e: LklTab) {
    this.$emit('update:currentTabCode', e.code)
    this.$nextTick(() => {
      this.$emit('change')
    })
  }

  private get tabWidth () {
    // if (this.tabs !== undefined) {
    //   if (this.tabs.length <= 2) {
    //     return '140px'
    //   } else if (this.tabs.length === 3) {
    //     return '100px'
    //   } else {
    //     return (345.0 / this.tabs.length) + 'px'
    //   }
    // }
    return '140px'
  }
}
</script>

<style lang="less">
.lkl-htk-icon-label-arrow-tabs {
  width: 100%;
  // background-color: var(--clrBody);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 0;
  &-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-icon {
      width: 24px;
      height: 24px;
    }
    &-label {
      padding-top: 8px;
      font-size: 12px;
      color: var(--clrT1);
    }
    &-arrow {
      margin-top: 8px;
      width: 14px;
      height: 10px;
    }
  }
}
</style>
