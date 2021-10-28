<template>
  <div class="lkl-htk-types-filter" @click.stop="onFilteClick">
    <div v-if="dimensions" class="lkl-htk-types-filter-items">
      <div v-for="(e, i) in dimensions" :key="i" :style="{ width: dimensionWidth }" :class="(e.select && e.select.value !== '') ? 'lkl-htk-types-filter-items-item-select' : 'lkl-htk-types-filter-items-item'">
        {{ ellipsisText((e.select && e.select.value !== '') ? e.select.label : e.name) }}
      </div>
    </div>
    <div class="lkl-htk-types-filter-button-left">
      <svg class="lkl-htk-types-filter-button-left-shadow" viewBox="0 0 9 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter x="-187.5%" y="-40.9%" width="475.0%" height="181.8%" filterUnits="objectBoundingBox" id="filter-1">
            <feGaussianBlur stdDeviation="3" in="SourceGraphic"></feGaussianBlur>
          </filter>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.149496389">
          <g fill="#000000">
            <ellipse filter="url(#filter-1)" cx="4.4" cy="13" rx="2.4" ry="11"></ellipse>
          </g>
        </g>
      </svg>
    </div>
    <div class="lkl-htk-types-filter-button">
      <lkl-icon-filter class="lkl-htk-types-filter-button-icon" color="var(--clrT1)" />
      筛选
    </div>
    <lkl-side-menu v-if="dimensions" ref="sideMenu" @reset="reset" @confirm="confirm">
      <lkl-side-menu-type-select v-for="(e, i) in dimensions" :index="i" :key="i" :title="e.name" :options="e.options" :selectItem.sync="e.select" :ignore="checkIgnore(e)" @noIgnore="onNoIgnore(e)" :beforeSelect="onBeforeSelectOption" />
    </lkl-side-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import LklIconFilter from '../lkl-icons/icon-filter.vue'
import { LklDimension, LklDimensionlOption } from './defines'
import LklSideMenu from './htk-side-menu.vue'
import LklSideMenuSection from './htk-side-menu-section.vue'
import LklSideMenuTypeSelect from './htk-side-menu-type-select.vue'

@Component({
  components: {
    LklIconFilter,
    LklSideMenu,
    LklSideMenuSection,
    LklSideMenuTypeSelect
  }
})
export default class LklHtkTypesFilter extends Vue {
  @Prop({ default: undefined }) dimensions!: LklDimension[];
  @Prop({ default: undefined }) query!: Record<string, string>;
  @Prop({ default: undefined }) beforeSideMenuShow!: (done: () => void) => void;
  @Prop({ default: undefined }) beforeSelectOption!: (dimension: LklDimension, option: LklDimensionlOption, done: () => void) => void;

  /// 互斥维度, 默认选择第一个
  @Prop({ default: undefined }) mutexDimensionKeysGroups!: string[][];
  @Watch('mutexDimensionKeysGroups')
  private mutexDimensionKeysGroupsChanged (val: string[][]) {
    if (val) {
      const arr: string[] = []
      for (const e of val) {
        if (e.length > 0) {
          arr.push(e[0])
        } else {
          arr.push('')
        }
      }
      this.notIgnoreLklDimensionKeys = arr
    }
  }

  private mounted () {
    if (this.mutexDimensionKeysGroups) {
      this.mutexDimensionKeysGroupsChanged(this.mutexDimensionKeysGroups)
    }
  }

  private notIgnoreLklDimensionKeys: string[] = []
  private checkIgnore (dimension: LklDimension): boolean {
    const i = this.mutexIndexOfLklDimension(dimension)
    if (i !== -1) {
      return this.notIgnoreLklDimensionKeys[i] !== dimension.key
    } else {
      return false
    }
  }

  private mutexIndexOfLklDimension (dimension: LklDimension): number {
    if (this.mutexDimensionKeysGroups) {
      let index = -1
      for (let i = 0; i < this.mutexDimensionKeysGroups.length; i++) {
        if (index !== -1) {
          break
        }
        for (const key of this.mutexDimensionKeysGroups[i]) {
          if (key === dimension.key) {
            index = i
            break
          }
        }
      }
      return index
    }
    return -1
  }

  private onNoIgnore (dimension: LklDimension) {
    const i = this.mutexIndexOfLklDimension(dimension)
    if (i !== -1) {
      this.notIgnoreLklDimensionKeys[i] = dimension.key
      this.$forceUpdate()
    }
  }

  public reset (): void {
    if (this.dimensions) {
      for (const e of this.dimensions) {
        e.select = null
      }
    }
  }

  public confirm (): void {
    if (this.dimensions) {
      const params: Record<string, string> = {}
      for (const e of this.dimensions) {
        const i = this.mutexIndexOfLklDimension(e)
        if (i === -1) {
          const val = e.select?.value || ''
          params[e.key] = val
          if (this.query) {
            this.query[e.key] = val
          }
        } else {
          if (this.notIgnoreLklDimensionKeys[i] === e.key) {
            const val = e.select?.value || ''
            params[e.key] = val
            if (this.query) {
              this.query[e.key] = val
            }
          } else {
            params[e.key] = ''
            if (this.query) {
              this.query[e.key] = ''
            }
          }
        }
      }
      this.$emit('filte', params)
    }
  }

  private get dimensionWidth () {
    if (this.dimensions) {
      if (this.dimensions.length === 1) {
        return '280px'
      } else if (this.dimensions.length === 2) {
        return '140px'
      } else if (this.dimensions.length === 3) {
        return '85px'
      } else {
        return '65px'
      }
    }
    return ''
  }

  private dimensionChars () {
    if (this.dimensions) {
      if (this.dimensions.length === 1) {
        return 47
      } else if (this.dimensions.length === 2) {
        return 23
      } else if (this.dimensions.length === 3) {
        return 14
      } else {
        return 11
      }
    }
    return 11
  }

  private ellipsisText (str: string) {
    if (!str) {
      return ''
    }
    const chars = this.dimensionChars()
    let len = 0
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 255) {
        len += 2
      } else {
        len += 1
      }
    }
    if (len <= chars) {
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
        const a = Math.ceil((chars - 3) / 2)
        if (_len < a || _len > len - a + 1) {
          _str += String.fromCharCode(charCode)
        } else if (len >= a && _len <= len - a + 1 && !isDotAdd) {
          _str += '...'
          isDotAdd = true
        }
      }
      return _str
    }
  }

  private onFilteClick () {
    if (this.beforeSideMenuShow === undefined || this.beforeSideMenuShow === null) {
      (this.$refs.sideMenu as LklSideMenu).show()
    } else {
      this.beforeSideMenuShow(() => {
        (this.$refs.sideMenu as LklSideMenu).show()
      })
    }
  }

  private onBeforeSelectOption (option: LklDimensionlOption, i: number, done: () => void) {
    if (this.beforeSelectOption === undefined || this.beforeSelectOption === null) {
      done()
    } else {
      this.beforeSelectOption(this.dimensions[i], option, done)
    }
  }
}
</script>

<style lang="less">
.lkl-htk-types-filter {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: var(--clrBody);
  &-items {
    height: 40px;
    width: calc(100% - 64px);
    display: flex;
    align-items: center;
    overflow: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      margin-left: 5px;
      margin-right: 5px;
      font-size: 12px;
      color: var(--clrT3);
      flex-shrink: 0;
      white-space: nowrap;
    }
    &-item-select {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      margin-left: 5px;
      margin-right: 5px;
      font-size: 12px;
      color: var(--clrTint);
      flex-shrink: 0;
      white-space: nowrap;
    }
  }
  &-button-left {
    width: 4.5px;
    height: 25px;
    position: relative;
    overflow: hidden;
    &-shadow {
      position: absolute;
      top: 0;
      right: -4.5px;
      width: 9px;
      height: 25px;
    }
  }
  &-button {
    width: 49px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon {
      margin-right: 2px;
    }
    font-size: 12px;
    color: var(--clrT1);
  }
}
</style>
