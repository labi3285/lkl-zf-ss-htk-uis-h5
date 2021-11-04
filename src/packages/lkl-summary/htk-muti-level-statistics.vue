<template>
  <div v-if="dataSource" class="htk-muti-level-statistics">
    <div class="htk-muti-level-statistics-total">
      <div class="htk-muti-level-statistics-total-item">
        <div class="htk-muti-level-statistics-total-item-value">{{ dataSource.total.a.value }}</div>
        <div class="htk-muti-level-statistics-total-item-tip">{{ dataSource.total.a.tip }}</div>
      </div>
      <div v-if="dataSource.total.b" class="htk-muti-level-statistics-total-item">
        <div class="htk-muti-level-statistics-total-item-value">{{ dataSource.total.b.value }}</div>
        <div class="htk-muti-level-statistics-total-item-tip">{{ dataSource.total.b.tip }}</div>
      </div>
      <div v-if="dataSource.total.c" class="htk-muti-level-statistics-total-item">
        <div class="htk-muti-level-statistics-total-item-value">{{ dataSource.total.c.value }}</div>
        <div class="htk-muti-level-statistics-total-item-tip">{{ dataSource.total.c.tip }}</div>
      </div>
    </div>

    <div v-if="dataSource.dimensions && dataSource.dimensions.length > 0" class="htk-muti-level-statistics-dimensions">
      <div v-for="(e, i) in dataSource.dimensions" :key="i" class="htk-muti-level-statistics-dimensions-dimension">
        <div style="font-size: 13px;" class="htk-muti-level-statistics-dimensions-dimension-row" :class="!e.isFold && (e.subItems && e.subItems.length > 0) ? 'htk-muti-level-statistics-bottom-grid-line' : ''">
          <div :style="{ color: '#0068F1', fontWeight: 'bold', marginLeft:  '12px', width: (nameColumWidth) + 'px' }" class="htk-muti-level-statistics-dimensions-dimension-row-name">{{ e.name }}</div>
          <div class="htk-muti-level-statistics-dimensions-dimension-row-abc">
            <div :style="{ color: e.isFold ? 'var(--clrT1)' : '#0068F1' }" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e.a.value }}</div>
            <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e.a.tip }}</div>
          </div>
          <div v-if="e.b" class="htk-muti-level-statistics-dimensions-dimension-row-abc">
            <div :style="{ color: e.isFold ? 'var(--clrT1)' : '#0068F1' }" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e.b.value }}</div>
            <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e.b.tip }}</div>
          </div>
          <div v-if="e.c" class="htk-muti-level-statistics-dimensions-dimension-row-abc">
            <div :style="{ color: e.isFold ? 'var(--clrT1)' : '#0068F1' }" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e.c.value }}</div>
            <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e.c.tip }}</div>
          </div>
        </div>

        <div v-if="!e.isFold && e.subItems">
          <div v-for="(e1, i) in e.subItems" :key="i" class="htk-muti-level-statistics-dimensions-dimension">
            <div style="font-size: 12px;" class="htk-muti-level-statistics-dimensions-dimension-row" :class="(((e1.subItems === undefined || e1.subItems.length === 0) && i !== e.subItems.length - 1) || (e1.subItems && e1.subItems.length > 0)) ? 'htk-muti-level-statistics-bottom-grid-line' : ''">
              <div :style="{ color: '#F7BA13', fontWeight: 'bold', marginLeft: (12 + levelIndent) + 'px', width: (nameColumWidth - levelIndent) + 'px' }" class="htk-muti-level-statistics-dimensions-dimension-row-name">{{ e1.name }}</div>
              <div class="htk-muti-level-statistics-dimensions-dimension-row-abc">
                <div style="color: #F7BA13" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e1.a.value }}</div>
                <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e1.a.tip }}</div>
              </div>
              <div v-if="e1.b" class="htk-muti-level-statistics-dimensions-dimension-row-abc">
                <div style="color: #F7BA13" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e1.b.value }}</div>
                <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e1.b.tip }}</div>
              </div>
              <div v-if="e1.c" class="htk-muti-level-statistics-dimensions-dimension-row-abc">
                <div style="color: #F7BA13" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e1.c.value }}</div>
                <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e1.c.tip }}</div>
              </div>
            </div>

            <div v-if="e1.subItems">
              <div v-for="(e2, i) in e1.subItems" :key="i" class="htk-muti-level-statistics-dimensions-dimension">
                <div style="font-size: 12px;" class="htk-muti-level-statistics-dimensions-dimension-row" :class="(((e2.subItems === undefined || e2.subItems.length === 0) && i !== e1.subItems.length - 1) || (e2.subItems && e2.subItems.length > 0)) ? 'htk-muti-level-statistics-bottom-grid-line' : ''">
                  <div :style="{ color: '#FA7268', marginLeft: (12 + levelIndent * 2) + 'px', width: (nameColumWidth - levelIndent * 2) + 'px' }" class="htk-muti-level-statistics-dimensions-dimension-row-name">{{ e2.name }}</div>
                  <div class="htk-muti-level-statistics-dimensions-dimension-row-abc">
                    <div style="color: #FA7268" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e2.a.value }}</div>
                    <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e2.a.tip }}</div>
                  </div>
                  <div v-if="e2.b" class="htk-muti-level-statistics-dimensions-dimension-row-abc">
                    <div style="color: #FA7268" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e2.b.value }}</div>
                    <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e2.b.tip }}</div>
                  </div>
                  <div v-if="e2.c" class="htk-muti-level-statistics-dimensions-dimension-row-abc">
                    <div style="color: #FA7268" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e2.c.value }}</div>
                    <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e2.c.tip }}</div>
                  </div>
                </div>

                <div v-if="e2.subItems">
                  <div v-for="(e3, i) in e2.subItems" :key="i" class="htk-muti-level-statistics-dimensions-dimension">
                    <div style="font-size: 10px;" class="htk-muti-level-statistics-dimensions-dimension-row" :class="i < e2.subItems.length - 1 ? 'htk-muti-level-statistics-bottom-grid-line' : ''">
                      <div :style="{ color: '#999999', marginLeft: (12 + levelIndent * 3) + 'px', width: (nameColumWidth - levelIndent * 3) + 'px' }" class="htk-muti-level-statistics-dimensions-dimension-row-name">{{ e3.name }}</div>
                      <div class="htk-muti-level-statistics-dimensions-dimension-row-abc">
                        <div style="color: #999999" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e3.a.value }}</div>
                        <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e3.a.tip }}</div>
                      </div>
                      <div v-if="e3.b" class="htk-muti-level-statistics-dimensions-dimension-row-abc">
                        <div style="color: #999999" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e3.b.value }}</div>
                        <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e3.b.tip }}</div>
                      </div>
                      <div v-if="e3.c" class="htk-muti-level-statistics-dimensions-dimension-row-abc">
                        <div style="color: #999999" class="htk-muti-level-statistics-dimensions-dimension-row-abc-value">{{ e3.c.value }}</div>
                        <div class="htk-muti-level-statistics-dimensions-dimension-row-abc-tip">{{ e3.c.tip }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="e.subItems && e.subItems.length > 0" :style="{ marginLeft: foldButtonMarginLeft }" class="htk-muti-level-statistics-dimensions-dimension-fold" :class="i < dataSource.dimensions.length ? 'htk-muti-level-statistics-bottom-grid-line' : ''" @click="onFoldClick(e)">
          {{ e.isFold ? '详情' : '收起' }}
          <div :style="{ transform: e.isFold ? '' : 'rotate(180deg)' }" class="htk-muti-level-statistics-dimensions-dimension-fold-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklStatisticsDimension, LklStatisticsData } from './defines'

@Component
export default class LklMutiLevelStatistics extends Vue {
  @Prop({ default: undefined }) dataSource!: LklStatisticsData;

  // 左侧名称列宽度
  @Prop({ default: 120 }) nameColumWidth!: number;
  // 缩进
  @Prop({ default: 12 }) levelIndent!: number;

  @Prop({ default: undefined }) handleUnfold!: (dimension: LklStatisticsDimension, done: () => void) => void;

  @Prop({ default: '' }) foldButtonMarginLeft!: string;

  private onFoldClick (e: LklStatisticsDimension) {
    if (e.isFold) {
      if (this.handleUnfold !== undefined && this.handleUnfold !== null) {
        this.handleUnfold(e, () => {
          e.isFold = false
        })
      } else {
        e.isFold = false
      }
    } else {
      e.isFold = true
    }
  }
}
</script>

<style lang="less">
@import "../utils/style.less";

.htk-muti-level-statistics {
  margin: 8px 22px 8px 22px;
  // -webkit-box-shadow: var(--clrShadow) 0px 0px 3px;
  // -moz-box-shadow: var(--clrShadow) 0px 0px 3px;
  // box-shadow: var(--clrShadow) 0px 0px 3px;
  // border-radius: 4px;
  &-total {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: var(--clrBody);
    &-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &-value {
        font-size: 18px;
        font-weight: bold;
        color: var(--clrT1);
      }
      &-tip {
        margin-top: 5px;
        font-size: 12px;
        color: var(--clrT1);
      }
    }
  }
  &-dimensions {
    background-color: var(--clrBackGray);
    border-radius: 6px;
    &-dimension {
      &-row {
        display: flex;
        &-name {
          display: flex;
          align-items: center;
          padding-top: 15px;
          padding-bottom: 7px;
        }
        &-abc {
          padding-top: 15px;
          padding-bottom: 7px;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-left-style: solid;
          border-left-width: 1px;
          border-left-color: var(--clrLineSlight);
          &-value {
            font-weight: bold;
          }
          &-tip {
            margin-top: 5px;
            font-size: 9px;
            color: var(--clrT3);
          }
        }
      }
      &-fold {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        font-size: 12px;
        color: #3A75F3;
        &-icon {
          .auto-bg-image('resources/fold-down');
          margin-left: 5px;
          width: 10px;
          height: 8px;
        }
      }
    }
  }
  &-bottom-grid-line {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--clrLineSlight);
  }
}
</style>
