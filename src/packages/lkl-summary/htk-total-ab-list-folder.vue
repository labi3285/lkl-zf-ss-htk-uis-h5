<template>
  <div class="lkl-total-ab-list-folder">
    <div class="lkl-total-ab-list-folder-card">
      <div class="lkl-total-ab-list-folder-card-total">
        <div @click="onFolderClick" class="lkl-total-ab-list-folder-card-total-folder">
          {{ dataSource.isFold ? unfoldTitle : '收起' }}
          <lkl-icon-fold-arrow :direction="dataSource.isFold ? 'down' : 'up'" />
        </div>
        <div class="lkl-total-ab-list-folder-card-total-name">{{ dataSource.name }}</div>
        <div class="lkl-total-ab-list-folder-card-total-line"></div>
        <div class="lkl-total-ab-list-folder-card-total-total">
          <div class="lkl-total-ab-list-folder-card-total-total-a">
            <span>{{ dataSource.total.a.label }}</span>
            {{ dataSource.total.a.value }}
          </div>
          <div class="lkl-total-ab-list-folder-card-total-total-b">
            <span>{{ dataSource.total.b.label }}</span>
            {{ dataSource.total.b.value }}
          </div>
        </div>
      </div>
      <div v-if="!dataSource.isFold" class="lkl-total-ab-list-folder-card-fold-content">
        <div v-for="(e, i) in dataSource.list" :key="i" class="lkl-total-ab-list-folder-card-fold-content-item">
          <div class="lkl-total-ab-list-folder-card-fold-content-item-name">
            <div class="lkl-total-ab-list-folder-card-fold-content-item-name-dot"></div>
            {{ e.name }}
          </div>
          <div class="lkl-total-ab-list-folder-card-fold-content-item-line-h"></div>
          <div class="lkl-total-ab-list-folder-card-fold-content-item-total">
            <div class="lkl-total-ab-list-folder-card-fold-content-item-total-item">
              <div class="lkl-total-ab-list-folder-card-fold-content-item-total-item-label">{{ e.a.total.label }}</div>
              <div class="lkl-total-ab-list-folder-card-fold-content-item-total-item-value">{{ e.a.total.value }}</div>
            </div>
            <div class="lkl-total-ab-list-folder-card-fold-content-item-total-item">
              <div class="lkl-total-ab-list-folder-card-fold-content-item-total-item-label">{{ e.b.total.label }}</div>
              <div class="lkl-total-ab-list-folder-card-fold-content-item-total-item-value">{{ e.b.total.value }}</div>
            </div>
          </div>
          <div class="lkl-total-ab-list-folder-card-fold-content-item-sub">
            <div class="lkl-total-ab-list-folder-card-fold-content-item-line-h"></div>
            <div v-for="(e1, j) in e.a.list" :key="j">
              <div class="lkl-total-ab-list-folder-card-fold-content-item-sub-row">
                <div class="lkl-total-ab-list-folder-card-fold-content-item-sub-row-item">
                  <div class="lkl-total-ab-list-folder-card-fold-content-item-sub-row-item-label">{{ e1.label }}</div>
                  <div class="lkl-total-ab-list-folder-card-fold-content-item-sub-row-item-value">{{ e1.value }}</div>
                </div>
                <div class="lkl-total-ab-list-folder-card-fold-content-item-sub-row-item">
                  <div class="lkl-total-ab-list-folder-card-fold-content-item-sub-row-item-label">{{ e1.label }}</div>
                  <div class="lkl-total-ab-list-folder-card-fold-content-item-sub-row-item-value">{{ e1.value }}</div>
                </div>
              </div>
              <div v-if="j < e.a.list.length - 1" class="lkl-total-ab-list-folder-card-fold-content-item-line-h"></div>
            </div>
          </div>
          <div v-if="i < dataSource.list.length - 1" class="lkl-total-ab-list-folder-card-fold-content-item-break"></div>
          <div class="lkl-total-ab-list-folder-card-fold-content-item-line-v"></div>
        </div>
        <div class="lkl-total-ab-list-folder-card-fold-content-bottom-append"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LklTotalAbListFoldData } from './defines'
import LklIconFoldArrow from '../lkl-icons/icon-fold-arrow.vue'

@Component({
  components: {
    LklIconFoldArrow
  }
})
export default class LklHtkAbListFolder extends Vue {
  @Prop({ required: true }) dataSource!: LklTotalAbListFoldData;
  @Prop({ default: '展开' }) unfoldTitle!: string;
  @Prop({ default: undefined }) beforeUnfold!: (done: () => void) => void;

  private onFolderClick () {
    if (this.dataSource.isFold) {
      if (this.beforeUnfold) {
        this.beforeUnfold(() => {
          this.dataSource.isFold = false
        })
      } else {
        this.dataSource.isFold = false
      }
    } else {
      this.dataSource.isFold = true
    }
  }
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-total-ab-list-folder {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  &-card {
    background-color: #E3EDFF;
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
        color: var(--clrT2);
      }
      &-name {
        padding: 16px 100px 0 16px;
        font-size: 16px;
        font-weight: bold;
        color: var(--clrT1);
      }
      &-line {
        margin: 8px 16px 0 16px;
        height: 1px;
        background-color: var(--clrLine);
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
            color: var(--clrT1);
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
            color: var(--clrT1);
            font-weight: normal;
          }
          color: #FA7268;
          font-weight: bold;

        }
      }
    }
    &-fold-content {
      background-color: #E7F2FD;
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
          background-color: #DBECFF;
        }
        &-line-v {
          width: 1px;
          position: absolute;
          background-color: #DBECFF;
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
              color: var(--clrT1);
              text-align: center;
            }
            &-value {
              padding-top: 10px;
              font-size: 12px;
              color: var(--clrT1);
              font-weight: bold;
              text-align: center;
            }
          }
        }
        &-sub {
          &-row {
            display: flex;
            // padding-top: 12px;
            // padding-bottom: 12px;

            display: flex;
            &-item {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              padding-top: 12px;
              padding-bottom: 12px;
              &-label {
                width: 55px;
                padding-left: 16px;
                padding-right: 5px;
                font-size: 12px;
                color: var(--clrT2);
              }
              &-value {
                flex: 1;
                font-size: 12px;
                color: var(--clrT1);
                font-weight: bold;
                // text-align: center;
              }
            }
          }
        }
        &-break {
          height: 4px;
          background-color: #DBECFF;
          width: 100%;
        }
      }
      &-bottom-append {
        width: 100%;
        height: 8px;
        background-color: #E3EDFF;
      }
    }
  }

  &-value {
    display: flex;
    align-items: center;
    &-value {
      font-size: 32px;
      color: var(--clrT1);
      font-weight: bold;
    }
  }
  &-tip {
    display: flex;
    align-items: center;
    margin-top: var(--marginM);
    height: 22px;
    &-dot {
      width: 5px;
      height: 16px;
      background-color: #FC4C8C;
      border-radius: 2.5px;
      margin-right: var(--marginM);
    }
    &-tip {
      font-size: 14px;
      color: var(--clrT2);
    }
    &-help {
      width: 14px;
      height: 14px;
      font-size: 9px;
      color: #3A75F3;
      font-weight: bold;
      line-height: 14px;
      margin-left: var(--marginS);
      background-color: yellow;
      text-align: center;
      border-radius: 7px;
    }
    &-arrow {
      width: 22px;
      height: 22px;
      margin-left: var(--marginS);
      .auto-bg-image('resources/htk-arrow');
    }
  }
}
</style>
