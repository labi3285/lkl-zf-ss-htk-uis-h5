<template>
  <div v-if="tabs !== undefined" class="lkl-htk-segs">
    <div class="lkl-htk-segs-tabs">
      <div v-for="(e, i) in tabs" :key="i" :class="currentTabCode === e.code ? 'lkl-htk-segs-tabs-tab-select' : 'lkl-htk-segs-tabs-tab'" @click="onTabClick(e)">{{ e.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Tab } from './defines'

@Component
export default class LklHaotkSegs extends Vue {
  @Prop({ default: undefined }) private tabs!: Tab[];
  @Prop({ required: true }) private currentTabCode!: string | number;

  private onTabClick (e: Tab) {
    this.$emit('update:currentTabCode', e.code)
    this.$nextTick(() => {
      this.$emit('change')
    })
  }
}
</script>

<style lang="less">
.lkl-htk-segs {
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
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-width: 1px;
      padding-left: 25px;
      padding-right: 25px;
      min-width: 50px;
      border-style: solid;
      border-width: 1px;
      border-color: transparent;
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
