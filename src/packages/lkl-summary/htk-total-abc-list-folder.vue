<template>
  <div class="lkl-total-abc-list-folder">
    <div :style="{ backgroundColor: getColorCard }" class="lkl-total-abc-list-folder-card">
      <div class="lkl-total-abc-list-folder-card-total">
        <div @click="onFolderClick" class="lkl-total-abc-list-folder-card-total-folder">
          {{ dataSource.isFold ? unfoldTitle : '收起' }}
          <lkl-icon-fold-arrow :direction="dataSource.isFold ? 'down' : 'up'" />
        </div>
        <div class="lkl-total-abc-list-folder-card-total-name">{{ dataSource.name }}</div>
        <div class="lkl-total-abc-list-folder-card-total-line"></div>
        <div class="lkl-total-abc-list-folder-card-total-total">
          <span>{{ dataSource.total.label }}</span>
          {{ dataSource.total.value }}
        </div>
        <div class="lkl-total-abc-list-folder-card-total-items">
          <div class="lkl-total-abc-list-folder-card-total-items-item">
            <div class="lkl-total-abc-list-folder-card-total-items-item-label">{{ dataSource.a.label }}</div>
            <div class="lkl-total-abc-list-folder-card-total-items-item-value">{{ dataSource.a.value }}</div>
          </div>
          <div class="lkl-total-abc-list-folder-card-total-items-item">
            <div class="lkl-total-abc-list-folder-card-total-items-item-label">{{ dataSource.b.label }}</div>
            <div class="lkl-total-abc-list-folder-card-total-items-item-value">{{ dataSource.b.value }}</div>
          </div>
          <div v-if="dataSource.c" class="lkl-total-abc-list-folder-card-total-items-item">
            <div class="lkl-total-abc-list-folder-card-total-items-item-label">{{ dataSource.c.label }}</div>
            <div class="lkl-total-abc-list-folder-card-total-items-item-value">{{ dataSource.c.value }}</div>
          </div>
        </div>
      </div>
      <div :style="{ backgroundColor: getColorFold }" v-if="!dataSource.isFold" class="lkl-total-abc-list-folder-card-fold-content">
        <div v-for="(e, i) in dataSource.list" :key="i" class="lkl-total-abc-list-folder-card-fold-content-item">
          <div class="lkl-total-abc-list-folder-card-fold-content-item-name">
            <div class="lkl-total-abc-list-folder-card-fold-content-item-name-dot"></div>
            {{ e.name }}
          </div>
          <div :style="{ backgroundColor: getColorLine }" class="lkl-total-abc-list-folder-card-fold-content-item-line-h"></div>
          <div class="lkl-total-abc-list-folder-card-fold-content-item-items">
            <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item">
              <div style="font-weight: bold;" class="lkl-total-abc-list-folder-card-fold-content-item-items-item-label">{{ e.total.label }}</div>
              <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item-value">{{ e.total.value }}</div>
            </div>
            <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item">
              <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item-label">{{ e.a.label }}</div>
              <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item-value">{{ e.a.value }}</div>
            </div>
            <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item">
              <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item-label">{{ e.b.label }}</div>
              <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item-value">{{ e.b.value }}</div>
            </div>
            <div v-if="e.c" class="lkl-total-abc-list-folder-card-fold-content-item-items-item">
              <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item-label">{{ e.c.label }}</div>
              <div class="lkl-total-abc-list-folder-card-fold-content-item-items-item-value">{{ e.c.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklColor, LklGetColor } from '../defines/style'
import { LklLabelValue } from '../defines/label-value'
import { LklAbTotalListFoldData, LklAbTotalListFoldSubItem } from './defines'
import LklIconFoldArrow from '../lkl-icons/icon-fold-arrow.vue'

@Component({
  components: {
    LklIconFoldArrow
  }
})
export default class LklHtkTotalAbcListFolder extends Vue {
  @Prop({ required: true }) dataSource!: LklAbTotalListFoldData;
  @Prop({ default: '展开' }) unfoldTitle!: string;
  @Prop({ default: undefined }) beforeUnfold!: (done: () => void) => void;

  @Prop({ default: undefined }) colorCard!: LklColor;
  @Prop({ default: undefined }) colorFold!: LklColor;
  @Prop({ default: undefined }) colorLine!: LklColor;
  private get getColorCard () { return LklGetColor(this.colorCard) ?? '#E3EDFF' }
  private get getColorFold () { return LklGetColor(this.colorFold) ?? '#E7F2FD' }
  private get getColorLine () { return LklGetColor(this.colorLine) ?? '#DBECFF' }

  private subList (e: LklAbTotalListFoldSubItem) {
    const c = Math.max(e.a.list.length, e.b.list.length)
    const arr: LklLabelValue[][] = []
    for (let i = 0; i < c; i++) {
      let _a: LklLabelValue = { label: '', value: '' }
      let _b: LklLabelValue = { label: '', value: '' }
      if (e.a.list.length > i) {
        _a = e.a.list[i]
      }
      if (e.b.list.length > i) {
        _b = e.b.list[i]
      }
      arr.push([_a, _b])
    }
    return arr
  }

  private onFolderClick () {
    if (this.dataSource.isFold) {
      if (this.beforeUnfold) {
        this.beforeUnfold(() => {
          this.dataSource.isFold = false
          this.$forceUpdate()
        })
      } else {
        this.dataSource.isFold = false
        this.$forceUpdate()
      }
    } else {
      this.dataSource.isFold = true
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-total-abc-list-folder {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  &-card {
    border-radius: 5px;
    overflow: hidden;
    &-total {
      width: 100%;
      position: relative;
      &-folder {
        position: absolute;
        right: 16px;
        top: 16px;
        font-size: 12px;
        color: #666666;
      }
      &-name {
        padding: 16px 100px 0 16px;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
      }
      &-line {
        margin: 8px 16px 0 16px;
        height: 1px;
        background-color: #e6e6e6;
      }
      &-total {
        width: 100%;
        display: flex;
        align-items: center;
        height: 42px;
        padding-left: 16px;
        flex: 1;
        font-size: 14px;
        span {
          color: #333333;
          font-weight: normal;
          margin-right: 5px;
        }
        color: #0068F1;
        font-weight: bold;
      }
      &-items {
        display: flex;
        &-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding-top: 12px;
          padding-bottom: 12px;
          &-label {
            font-size: 12px;
            color: #333333;
            text-align: center;
          }
          &-value {
            padding-top: 10px;
            font-size: 12px;
            color: #333333;
            font-weight: bold;
            text-align: center;
          }
        }
      }
    }
    &-fold-content {
      &-item {
        position: relative;
        &-name {
          display: flex;
          align-items: center;
          color: #3A75F3;
          font-size: 13px;
          font-weight: bold;
          padding: 16px 16px 16px 16px;
          &-dot {
            width: 4px;
            height: 12px;
            background-color: #3A75F3;
            margin-right: 5px;
          }
        }
        &-items {
          display: flex;
          &-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding-top: 12px;
            padding-bottom: 12px;
            &-label {
              font-size: 12px;
              color: #333333;
              text-align: center;
            }
            &-value {
              padding-top: 10px;
              font-size: 12px;
              color: #333333;
              font-weight: bold;
              text-align: center;
            }
          }
        }
        &-line-h {
          height: 1px;
        }
      }
    }
  }
}
</style>
