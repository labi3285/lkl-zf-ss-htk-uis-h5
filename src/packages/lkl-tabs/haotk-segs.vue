<template>
  <div v-if="tabs !== undefined" class="lkl-haotk-segs">
    <div class="lkl-haotk-segs-tabs">
      <div v-for="(e, i) in tabs" :key="i" :style="{ width: tabWidth }" :class="currentTabCode === e.code ? 'lkl-haotk-segs-tabs-tab-select' : 'lkl-haotk-segs-tabs-tab'" @click="onTabClick(e)">{{ e.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklTab } from './defines'

@Component
export default class LklHaotkSegs extends Vue {
  @Prop({ default: undefined }) private tabs!: LklTab[];
  @Prop({ required: true }) private currentTabCode!: string | number;

  private onTabClick (e: LklTab) {
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
.lkl-haotk-segs {
  padding: 8px;
  &-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1px;
    &-tab {
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-width: 1px;
      border-color: var(--clrTheme);
      border-style: solid;
      color: var(--clrTheme);
      font-size: var(--font14);
      font-weight: bold;
      margin-left: -1px;
    }
    &-tab-select {
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-width: 1px;
      border-color: var(--clrTheme);
      border-style: solid;
      background-color: var(--clrTheme);
      color: #ffffff;
      font-size: var(--font14);
      font-weight: bold;
      margin-left: -1px;
    }
  }
}
</style>
