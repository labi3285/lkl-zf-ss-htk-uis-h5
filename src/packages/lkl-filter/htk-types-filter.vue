<template>
  <div class="lkl-htk-types-filter">
    <div v-if="dimensions" class="lkl-htk-types-filter-items">
      <div v-for="(e, i) in dimensions" :key="i" :style="{ width: dimensionWidth }" :class="e.select ? 'lkl-htk-types-filter-items-item-select' : 'lkl-htk-types-filter-items-item'">
        {{ ellipsisText(e.select ? e.select.label : e.name) }}
      </div>
    </div>
    <div class="lkl-htk-types-filter-button-left">
      <div class="lkl-htk-types-filter-button-left-line"></div>
    </div>
    <div class="lkl-htk-types-filter-button" @click.stop="onFilteClick" >
      <k-icon-filter class="lkl-htk-types-filter-button-icon" color="var(--clrT1)" />
      筛选
    </div>

    <v-side-menu v-if="dimensions" ref="sideMenu" @reset="reset" @confirm="confirm">
      <v-side-menu-type-select v-for="(e, i) in dimensions" :key="i" :title="e.name" :items="e.options" :selectItem.sync="e.select" :ignore="checkIgnore(e)" @noIgnore="onNoIgnore(e)" />
    </v-side-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import kIconFilter from '../lkl-icons/icon-filter.vue'
import { Dimension, LabelValue } from './defines'
import vSideMenu from './htk-side-menu.vue'
import vSideMenuSection from './htk-side-menu-section.vue'
import vSideMenuTypeSelect from './htk-side-menu-type-select.vue'

@Component({
  components: {
    kIconFilter,
    vSideMenu,
    vSideMenuSection,
    vSideMenuTypeSelect
  }
})
export default class LklHtkTypesFilter extends Vue {
  @Prop({ default: undefined }) private dimensions!: Dimension[];
  @Prop({ default: undefined }) private query!: Record<string, string>;
  @Prop({ default: undefined }) private handleSideMenuShow!: (done: () => void) => void;

  /// 互斥维度, 默认选择第一个
  @Prop({ default: undefined }) private mutexDimensionKeysGroups!: string[][];
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
      this.notIgnoreDimensionKeys = arr
    }
  }

  private mounted () {
    if (this.mutexDimensionKeysGroups) {
      this.mutexDimensionKeysGroupsChanged(this.mutexDimensionKeysGroups)
    }
  }

  private notIgnoreDimensionKeys: string[] = []
  private checkIgnore (dimension: Dimension): boolean {
    const i = this.mutexIndexOfDimension(dimension)
    if (i !== -1) {
      return this.notIgnoreDimensionKeys[i] !== dimension.key
    } else {
      return false
    }
  }

  private mutexIndexOfDimension (dimension: Dimension): number {
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

  private onNoIgnore (dimension: Dimension) {
    const i = this.mutexIndexOfDimension(dimension)
    if (i !== -1) {
      this.notIgnoreDimensionKeys[i] = dimension.key
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
        const i = this.mutexIndexOfDimension(e)
        if (i === -1) {
          const val = e.select?.value || ''
          params[e.key] = val
          if (this.query) {
            this.query[e.key] = val
          }
        } else {
          if (this.notIgnoreDimensionKeys[i] === e.key) {
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
    if (this.handleSideMenuShow === undefined || this.handleSideMenuShow === null) {
      (this.$refs.sideMenu as vSideMenu).show()
    } else {
      this.handleSideMenuShow(() => {
        (this.$refs.sideMenu as vSideMenu).show()
      })
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
    width: calc(100% - 70px);
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
    }
  }
  &-button-left {
    width: 1px;
    height: 30px;
    position: relative;
    &-line {
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 30px;
      background-color: var(--clrLine);
      // background-color: red;
      // background-color: var(--clrBody);
      box-shadow: var(--clrShadow) 0px 0px 8px;
      -webkit-box-shadow: var(--clrShadow) 0px 0px 8px;
      -moz-box-shadow: var(--clrShadow) 0px 0px 8px;
    }
    // background-color: var(--clrBody);
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
