<template>
  <div class="lkl-htk-fold-select">
    <div :class="disabled ? 'lkl-htk-fold-select-main-disabled' : 'lkl-htk-fold-select-main-normal'" :style="{ width: foldWidth }" @click="onMainClick" v-clickOutside="onClickoutside">
      <span :class="disabled ? 'lkl-htk-fold-select-main-disabled-title' : 'lkl-htk-fold-select-main-normal-title'">{{ title }}</span>
      <lkl-icon-fold :color="disabled ? 'var(--clrT3)' : 'var(--clrTint)'" />
    </div>
    <div class="lkl-htk-fold-select-dropdown" v-show="!isFold">
      <div v-for="(e, i) in items" :key="i" class="lkl-htk-fold-select-dropdown-item" @click="onItemClick($event,e)" >
        <div class="lkl-htk-fold-select-dropdown-item-content" :style="{ width: foldListWidth }" :class="itemCls(e)">{{ e.label }}</div>
        <div v-if="i < items.length - 1" class="lkl-htk-fold-select-dropdown-item-line"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LklIconFold from '../lkl-icons/icon-fold.vue'
import clickOutside from '../utils/directives/clickOutside'
import { LklLabelValue } from '../defines/key-value'

@Component({
  directives: {
    clickOutside
  },
  components: {
    LklIconFold
  }
})
export default class LklHtkFoldSelect extends Vue {
  @Prop({ required: true }) public selectValue!: string;
  @Prop({ default: () => [] }) public items!: LklLabelValue[];
  @Prop({ default: '类型' }) public placeholder!: string;
  @Prop({ default: false }) public disabled!: boolean;

  @Prop({ default: '100px' }) public foldWidth!: string;

  private onClickoutside () {
    this.isFold = true
  }

  private isFold = true

  private get title (): string {
    let str: string | null = null
    for (const e of this.items) {
      if (this.selectValue === e.value) {
        str = e.label
      }
    }
    return str ?? this.placeholder
  }

  private itemCls (e: LklLabelValue): string {
    return this.selectValue === e.value ? 'lkl-htk-fold-select-dropdown-item-content lkl-htk-fold-select-dropdown-item-content-select' : 'lkl-htk-fold-select-dropdown-item-content lkl-htk-fold-select-dropdown-item-content-normal'
  }

  private get foldListWidth () {
    return `calc(${this.foldWidth} - 2px)`
  }

  private onMainClick () {
    if (this.disabled) {
      return
    }
    this.isFold = !this.isFold
  }

  private onItemClick (event: Event, e: LklLabelValue) {
    if (this.disabled) {
      return
    }
    this.isFold = true
    this.$emit('update:selectValue', e.value)
    this.$nextTick(() => {
      this.$emit('change', this.selectValue)
    })
  }
}
</script>

<style lang="less" scoped>
.lkl-htk-fold-select {
  position: relative;
  display: inline-block;
  &-main-normal {
    box-sizing: border-box;
    height: 35px;
    padding: 0 12px 0 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
    border-color: var(--clrTint);
    border-radius: 4px;
    &-title {
      flex: 1;
      font-size: 14px;
      font-weight: bold;
      color: var(--clrTint);
      text-align: center;
    }
  }
  &-main-disabled {
    box-sizing: border-box;
    height: 35px;
    padding: 0 12px 0 12px;
    background-color: var(--clrBackGray);
    display: flex;
    flex-direction: row;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-color: var(--clrT3);
    border-radius: 4px;
    &-title {
      flex: 1;
      font-size: 14px;
      font-weight: bold;
      color: var(--clrT3);
      text-align: center;
    }
  }
  &-dropdown {
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    top: 34px;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-style: solid;
    border-width: 1px;
    border-color: var(--clrTint);
    border-radius: 4px;
    background-color: var(--clrBody);
    &-item {
      height: 35px;
      line-height: 32px;
      &-content {
        text-align: center;
        height: 35px;
        line-height: 34px;
        color: var(--clrT3);
        font-size: 14px;
      }
      &-content-normal {
        color: var(--clrT1);
      }
      &-content-select {
        color: #ffffff;
        background-color: var(--clrTint);
      }
      &-line {
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: var(--clrLine);
      }
    }
  }
}
</style>
