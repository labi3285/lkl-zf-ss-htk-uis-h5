<template>
  <div class="lkl-ab-total-list-folder">
    <div :style="{ backgroundColor: getColorCard }" class="lkl-ab-total-list-folder-card">
      <div class="lkl-ab-total-list-folder-card-total">
        <div @click="onFolderClick" class="lkl-ab-total-list-folder-card-total-folder">
          {{ dataSource.isFold ? unfoldTitle : '收起' }}
          <lkl-icon-fold-arrow :direction="dataSource.isFold ? 'down' : 'up'" />
        </div>
        <div class="lkl-ab-total-list-folder-card-total-name">{{ dataSource.name }}</div>
        <div class="lkl-ab-total-list-folder-card-total-line"></div>
        <div class="lkl-ab-total-list-folder-card-total-total">
          <div class="lkl-ab-total-list-folder-card-total-total-a">
            <span>{{ dataSource.total.a.label }}</span>
            {{ dataSource.total.a.value }}
          </div>
          <div class="lkl-ab-total-list-folder-card-total-total-b">
            <span>{{ dataSource.total.b.label }}</span>
            {{ dataSource.total.b.value }}
          </div>
        </div>
      </div>
      <div :style="{ backgroundColor: getColorFold }" v-if="!dataSource.isFold" class="lkl-ab-total-list-folder-card-fold-content">
        <div v-for="(e, i) in dataSource.list" :key="i" class="lkl-ab-total-list-folder-card-fold-content-item">
          <div class="lkl-ab-total-list-folder-card-fold-content-item-name">
            <div class="lkl-ab-total-list-folder-card-fold-content-item-name-dot"></div>
            {{ e.name }}
          </div>
          <div :style="{ backgroundColor: getColorLine }" class="lkl-ab-total-list-folder-card-fold-content-item-line-h"></div>
          <div class="lkl-ab-total-list-folder-card-fold-content-item-total">
            <div class="lkl-ab-total-list-folder-card-fold-content-item-total-item">
              <div class="lkl-ab-total-list-folder-card-fold-content-item-total-item-label">{{ e.a.total.label }}</div>
              <div class="lkl-ab-total-list-folder-card-fold-content-item-total-item-value">{{ e.a.total.value }}</div>
            </div>
            <div class="lkl-ab-total-list-folder-card-fold-content-item-total-item">
              <div class="lkl-ab-total-list-folder-card-fold-content-item-total-item-label">{{ e.b.total.label }}</div>
              <div class="lkl-ab-total-list-folder-card-fold-content-item-total-item-value">{{ e.b.total.value }}</div>
            </div>
          </div>
          <div class="lkl-ab-total-list-folder-card-fold-content-item-sub">
            <div :style="{ backgroundColor: getColorLine }" class="lkl-ab-total-list-folder-card-fold-content-item-line-h"></div>
            <div v-for="(e1, j) in subList(e)" :key="j">
              <div class="lkl-ab-total-list-folder-card-fold-content-item-sub-row">
                <div class="lkl-ab-total-list-folder-card-fold-content-item-sub-row-item">
                  <div class="lkl-ab-total-list-folder-card-fold-content-item-sub-row-item-label">{{ e1[0].label }}</div>
                  <div class="lkl-ab-total-list-folder-card-fold-content-item-sub-row-item-value">{{ e1[0].value }}</div>
                </div>
                <div class="lkl-ab-total-list-folder-card-fold-content-item-sub-row-item">
                  <div class="lkl-ab-total-list-folder-card-fold-content-item-sub-row-item-label">{{ e1[1].label }}</div>
                  <div class="lkl-ab-total-list-folder-card-fold-content-item-sub-row-item-value">{{ e1[1].value }}</div>
                </div>
              </div>
              <div v-if="j < e.a.list.length - 1" class="lkl-ab-total-list-folder-card-fold-content-item-line-h"></div>
            </div>
          </div>
          <div :style="{ backgroundColor: getColorLine }" v-if="i < dataSource.list.length - 1" class="lkl-ab-total-list-folder-card-fold-content-item-break"></div>
          <div :style="{ backgroundColor: getColorLine }" class="lkl-ab-total-list-folder-card-fold-content-item-line-v"></div>
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
export default class LklHtkAbTotalListFolder extends Vue {
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

.lkl-ab-total-list-folder {
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
        &-a {
          padding-left: 16px;
          flex: 1;
          font-size: 14px;
          span {
            color: #333333;
            font-weight: normal;
          }
          color: #0068F1;
          font-weight: bold;
        }
        &-b {
          padding-left: 16px;
          flex: 1;
          font-size: 14px;
          span {
            color: #333333;
            font-weight: normal;
          }
          color: #FA7268;
          font-weight: bold;

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
        &-line-h {
          height: 1px;
        }
        &-line-v {
          width: 1px;
          position: absolute;
          top: 45px;
          left: 177px;
          bottom: 0;
        }
        &-total {
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
        &-sub {
          &-row {
            display: flex;
            &-item {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              padding-top: 12px;
              padding-bottom: 12px;
              &-label {
                width: 64px;
                padding-left: 16px;
                padding-right: 5px;
                font-size: 12px;
                color: #666666;
              }
              &-value {
                flex: 1;
                font-size: 12px;
                color: #333333;
                font-weight: bold;
              }
            }
          }
        }
        &-break {
          height: 4px;
          width: 100%;
        }
      }
    }
  }
}
</style>
