<template>
  <div v-if="tabs !== undefined" class="lkl-htk-icon-label-tabs">
    <div class="lkl-htk-icon-label-tabs-tabs">
      <div v-for="(e, i) in tabs" :key="i" :style="{ width: tabWidth }" class="lkl-htk-icon-label-tabs-tabs-tab" @click.stop="onTabClick(e)">
        <img class="lkl-htk-icon-label-tabs-tabs-tab-icon" :src="currentTabCode === e.code ? e.iconSelect : e.icon" />
        <div class="lkl-htk-icon-label-tabs-tabs-tab-label">{{ e.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Tab } from './defines'

@Component
export default class LklHtkIconLabelTabs extends Vue {
  @Prop({ default: undefined }) private tabs!: Tab[];
  @Prop({ required: true }) private currentTabCode!: string | number;

  private onTabClick (e: Tab) {
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
  padding: 0 var(--marginTB);
  margin-left: 10px;
  margin-right: 10px;
  // margin-top: 10px;
  // margin-bottom: 10px;
  &-tabs {
    width: 100%;
    background-color: var(--clrBody);
    border-radius: 4px;
    -webkit-box-shadow: var(--clrShadow) 0px 0px 8px;
    -moz-box-shadow: var(--clrShadow) 0px 0px 8px;
    box-shadow: var(--clrShadow) 0px 0px 8px;
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
}
</style>
