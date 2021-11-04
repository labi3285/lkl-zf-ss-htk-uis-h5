<template>
  <div v-if="tabs !== undefined" class="lkl-htk-icon-label-tabs">
    <div v-for="(e, i) in tabs" :key="i" :style="{ width: tabWidth }" class="lkl-htk-icon-label-tabs-tab" @click="onTabClick(e)">
      <img class="lkl-htk-icon-label-tabs-tab-icon" :src="currentTabCode === e.code ? e.iconSelect : e.icon" />
      <div class="lkl-htk-icon-label-tabs-tab-label">{{ e.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklTab } from './defines'

@Component
export default class LklHtkIconLabelTabs extends Vue {
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
.lkl-htk-icon-label-tabs {
  width: 100%;
  background-color: var(--clrBody);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-icon {
      width: 26px;
      height: 26px;
    }
    &-label {
      padding-top: 8px;
      font-size: 12px;
      color: var(--clrT1);
    }
  }
}
</style>
