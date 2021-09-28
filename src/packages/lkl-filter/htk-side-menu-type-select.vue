<template>
  <v-side-menu-section class="lkl-side-menu-type-select" :title="title" :selectText="selectText" :ignore="ignore">
    <div v-if="items === undefined || items.length === 0" class="lkl-side-menu-type-select-empty">暂无筛选条件</div>
    <div else class="lkl-side-menu-type-select-labels">
      <div v-for="(e, i) in items" :key="i" :class="isSelect(e) ? (ignore ? 'lkl-side-menu-type-select-labels-label-select-ignore' : 'lkl-side-menu-type-select-labels-label-select') : 'lkl-side-menu-type-select-labels-label'" @click.stop="onItemClick(e)">
        {{ ellipsisText(e.label) }}
        <svg v-if="isSelect(e)" class="lkl-side-menu-type-select-labels-label-select-corner" viewBox="0 0 13 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>画板备份</title>
          <g id="画板备份" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="小组件/调价新/小按钮/无色">
              <g id="编组" :fill="ignore ? '#bbbbbb' : 'var(--clrTint)'">
                <path d="M13,0.11105913 C13,0.11105913 12.9896614,3.40737275 12.9689841,10 L0.92252491,10 C4.73213741,3.40737275 8.75796244,0.11105913 13,0.11105913 Z" id="三角形"></path>
              </g>
              <g id="勾选框对勾" transform="translate(6.000000, 4.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path d="M0.567749576,1.83660841 L1.90630525,2.93609436 L4.91342917,0.10793685 C4.91342917,0.10793685 5.13549371,-0.101791685 5.33288441,0.0634489788 C5.39148477,0.11429226 5.45933782,0.254111283 5.30821057,0.473372933 L2.15304362,4.33428459 C2.15304362,4.33428459 1.88471564,4.70925379 1.57012422,4.33110689 L0.0681043705,2.24335466 C0.0681043705,2.24335466 -0.11078095,1.9605389 0.111283586,1.79212054 C0.188389327,1.73174414 0.358021959,1.6427684 0.567749576,1.83660841 Z" id="路径"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </v-side-menu-section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import vSideMenuSection from './htk-side-menu-section.vue'
import { LabelValue } from './defines'

@Component({
  components: {
    vSideMenuSection
  }
})
export default class LklSideMenuTypeSelect extends Vue {
  @Prop({ default: '类型' }) private title!: string;
  @Prop({ default: undefined }) private items!: LabelValue[];
  @Prop({ default: null }) private selectItem!: LabelValue | null;
  @Prop({ default: true }) private canDisselect!: boolean;
  @Prop({ default: false }) private ignore!: boolean;

  private get selectText () {
    if (this.selectItem && this.selectItem !== null) {
      return this.selectItem.label
    }
    return undefined
  }

  private isSelect (item: LabelValue) {
    if (this.selectItem && this.selectItem !== null) {
      if (item.value === this.selectItem.value) {
        return true
      }
    }
    return false
  }

  private ellipsisText (str: string) {
    if (!str) {
      return ''
    }
    let len = 0
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 255) {
        len += 2
      } else {
        len += 1
      }
    }
    if (len <= 14) {
      return str
    } else {
      let _str = ''
      let _len = 0
      let isDotAdd = false
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)
        if (charCode > 255) {
          _len += 2
        } else {
          _len += 1
        }
        if (_len < 7 || _len > len - 6) {
          _str += String.fromCharCode(charCode)
        } else if (!isDotAdd) {
          _str += '...'
          isDotAdd = true
        }
      }
      return _str
    }
  }

  private onItemClick (item: LabelValue) {
    if (this.ignore) {
      this.$emit('update:selectItem', item)
    } else {
      if (this.canDisselect && this.selectItem !== null && this.selectItem.value === item.value) {
        this.$emit('update:selectItem', null)
      } else {
        this.$emit('update:selectItem', item)
      }
    }
    this.$nextTick(() => {
      this.$emit('change')
      if (this.ignore) {
        this.$emit('noIgnore')
      }
    })
  }
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-side-menu-type-select {
  padding-left: 11px;
  &-empty {
    font-size: 14px;
    color: var(--clrT3);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
  }
  &-labels {
    display: flex;
    flex-wrap: wrap;
    &-label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
      height: 37px;
      width: 92px;
      color: var(--clrT1);
      font-size: 12px;
      border-radius: 4px;
      white-space:nowrap;
      overflow: hidden;
      border-width: 1px;
      border-style: solid;
      background-color: var(--clrBackGray);
      border-color: var(--clrBackGray);
    }
    &-label-select {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
      height: 37px;
      width: 92px;
      color: var(--clrTint);
      font-size: 12px;
      border-radius: 4px;
      white-space:nowrap;
      overflow: hidden;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(58, 117, 243, 0.3);
      background-color: rgba(58, 117, 243, 0.15);
      position: relative;
      overflow: hidden;
      &-corner {
        position: absolute;
        width: 12px;
        height: 12px;
        right: -1px;
        bottom: -1px;
        width: 13px;
        height: 12px;
      }
    }
    &-label-select-ignore {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
      height: 37px;
      width: 92px;
      color: var(--clrT1);
      font-size: 12px;
      border-radius: 4px;
      white-space:nowrap;
      overflow: hidden;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(187, 187, 187, 0.3);
      background-color: rgba(187, 187, 187, 0.3);
      position: relative;
      overflow: hidden;
      &-corner {
        position: absolute;
        width: 12px;
        height: 12px;
        right: -1px;
        bottom: -1px;
        width: 13px;
        height: 12px;
      }
    }
  }
}
</style>
