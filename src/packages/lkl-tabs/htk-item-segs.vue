<template>
  <div class="lkl-htk-item-segs">
    <div v-for="(e, i) in tabs" :key="i" class="lkl-htk-item-segs-tab" :class="currentTabCode === e.code ? 'lkl-htk-item-segs-tab-select' : 'lkl-htk-item-segs-tab-normal'" @click.stop="onTabClick(e)">{{ e.name }}</div>
    <div class="lkl-htk-item-segs-flex-space"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklTab } from './defines'

@Component
export default class LklHtkItemSegs extends Vue {
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

<style lang="less" scoped>
.lkl-htk-item-segs {
  height: 54px;
  padding: 0 24px 0 24px;
  width: calc(100% - 25px * 2);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  &-tab {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    height: 24px;
    padding: 0 4px 0 4px;
    margin-right: 10px;
    margin-bottom: 5px;
    border-radius: 12px;
  }
  &-tab-normal {
    background-color: var(--clrBackGray);
    font-size: var(--font14);
    color: var(--clrT2);
  }
  &-tab-select {
    background-color: var(--clrTint);
    font-size: var(--font14);
    color: #ffffff;
  }
  &-flex-space {
    flex: 1;
  }
}
</style>
