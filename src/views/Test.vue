<template>
  <lkl-content class="page">
    <lkl-nav></lkl-nav>
    <lkl-scroll class="scroll">

      <lkl-title title="xxx" :value="12" />

      <!-- <lkl-pull-down-refresh :isLoading.sync="isListLoading" type="theme" @load="onListLoad(true)" /> -->
      <lkl-head-content>

        <lkl-head-tabs :tabs="subTabs" :currentTabCode.sync="subTabCode" />

        <lkl-space />

        <lkl-row>
          <lkl-space width="var(--marginLR)" />
          <lklHeadSearch :text.sync="text" style="flex: 1" />
          <lkl-space width="var(--marginLR)" />
        </lkl-row>
        <lkl-space />

        <lkl-row>
          <lkl-space width="var(--marginLR)" />
          <lklHeadSearchButton style="flex: 1" />
          <div style="margin-left: 20px; width: 20px; height: 20px; background-color: yellow"></div>
        </lkl-row>

        <lkl-space />
        <lklHeadInfos>
          <lklHeadInfoItem title="编号">xxxx</lklHeadInfoItem>
          <lklHeadInfoItem title="编号">xxxx</lklHeadInfoItem>
          <lklHeadInfoItem title="编号">xxxx</lklHeadInfoItem>

        </lklHeadInfos>

        <lkl-space />

        <lkl-row-left-center-right>
          <lkl-date-range-picker color="#ffffff" :pickedDateRange.sync="dateRange" />
          <template v-slot:right>
            <lkl-text-button style="margin-top: 5px" color="#ffffff">
              <lkl-icon-filter class="lkl-htk-types-filter-button-icon" color="#ffffff" />
              筛选
            </lkl-text-button>
          </template>
        </lkl-row-left-center-right>

        <lkl-col alignX="center">
          <div class="total-value">123.00</div>
          <div class="total-tip">总收益金额（元）</div>
        </lkl-col>
        <lkl-head-segs :tabs="businesses" :currentTabCode.sync="business" />
        <lkl-space height="60px" />
      </lkl-head-content>

      <lkl-card-content>
        <lkl-card style="position: absolute; top: -50px; left: 0; right: 0">
          <lkl-icon-label-tabs :tabs="settleOrNots" :currentTabCode.sync="settleOrNot" />
        </lkl-card>
        <lkl-space height="18px" />

        <LklTotalAbSimple/>

        <LklFoldSelect :selectValue.sync="foldSelectSelectValue" :items="foldSelectItems" @change="xxx" />

        <lkl-tabs :tabs="subTabs" :currentTabCode.sync="subTabCode" />

        <lkl-item-segs :tabs="businesses" :currentTabCode.sync="business" />

        <LklRankTop3 :rank1="rank1" :rank2="rank1" :rank="rank1" />
        <lkl-break-space/>
        <LklRankMine />
        <lkl-break-space/>
        <LklRankOther />
        <lkl-break-space/>

        <lkl-icon-label-arrow-tabs style="background-color: var(--clrListHead)" lineWidth="55px" :tabs="posTypeTabs" :currentTabCode.sync="posType" />
        <lkl-types-filter :query="query" :dimensions="filteDimensions" :mutexDimensionKeysGroups="[['c', 'd']]" :handleSideMenuShow="handleSideMenuShow" @filte="onFilte" :beforeSelectOption="beforeFilterSelectOption" />
        <lkl-break-line type='through' />
        <lkl-muti-level-statistics foldButtonMarginLeft="130px" nameColumWidth="140" :dataSource="statisticsDataSource1" />

        <lkl-title title="全部人数总计（人）" :dotted="false" value="42" />

        <!-- <lkl-total tip="总交易金额(元）" value="889.00" />
        <lkl-break-line />
        <lkl-total-ab tipA="交易笔数(笔）" tipB="D0笔数(笔）" valueA="88.00" valueB="88.00" />
        <lkl-break-line />
        <lkl-total-ab tipA="联盟交易(元）" valueA="88.00" :isBShow="false" />
        <lkl-break-space /> -->
        <lkl-space />
        <lkl-tabs :tabs="subTabs" :currentTabCode.sync="subTabCode" />
        <lkl-colums-list-header :items="headerItems" :columWidths="['1.5', '1.5', '1', '1', '1']" />
        <lkl-colums-list-item v-for="(e, i) in list" :key="i" :items="e" :index="i" />
        <!-- <lkl-load-more :isLoadOnMounted="true" :isLoading.sync="isListLoading" :isThereMore="isListMore" @load="onListLoad(false)" /> -->
      </lkl-card-content>
    </lkl-scroll>

    <lkl-button @click.native="confirmClick">确认</lkl-button>
    <lkl-button :disabled="true" @click.native="confirmClick">确认</lkl-button>

    <lkl-button type='default' size='normal'>休闲鞋</lkl-button>
    <lkl-button type='default' size='normal' disabled="true">休闲鞋</lkl-button>

    <lkl-button type='border' size='normal'>休闲鞋</lkl-button>
    <lkl-button type='border' size='normal' disabled="true">休闲鞋1</lkl-button>

    <lkl-button type='default' size='small'>休闲鞋</lkl-button>
    <lkl-button type='default' size='small' disabled="true">休闲鞋</lkl-button>

    <lkl-button type='border' size='small'>休闲鞋</lkl-button>
    <lkl-button type='border' size='small' disabled="true">休闲鞋</lkl-button>

    <lkl-dialog ref="confirm" @reset="onReset" @confirm="onConfirm">
      基本流程：喷水、喷清洗剂、洗涤、喷水清洗、风干、喷抛光剂、抛光、出库。全程流水作业，不需要人工。
    </lkl-dialog>
  </lkl-content>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import LklDialog from '@/packages/lkl-dialog/htk-dialog.vue'

import { LklLabelValue } from '@/packages/defines/key-value'
import LklFoldSelect from '@/packages/lkl-fold-select/htk.vue'

import { LklRankItem } from '@/packages/lkl-rank/defines'
import LklRankTop3 from '@/packages/lkl-rank/htk-rank-top3.vue'
import LklRankMine from '@/packages/lkl-rank/htk-rank-mine.vue'
import LklRankOther from '@/packages/lkl-rank/htk-rank-other.vue'

import LklHeadSearchButton from '@/packages/lkl-search/htk-head-search-button.vue'
import LklHeadSearch from '@/packages/lkl-search/htk-head-search.vue'

import LklHeadInfos from '@/packages/lkl-content/htk-head-infos.vue'
import LklHeadInfoItem from '@/packages/lkl-content/htk-head-info-item.vue'

import LklHeadSegs from '@/packages/lkl-tabs/htk-head-segs.vue'
import LklItemSegs from '@/packages/lkl-tabs/htk-item-segs.vue'
import LklHeadTabs from '@/packages/lkl-tabs/htk-head-tabs.vue'
import LklTabs from '@/packages/lkl-tabs/htk-tabs.vue'
import LklIconLabelTabs from '@/packages/lkl-tabs/htk-icon-label-tabs.vue'
import LklIconLabelArrowTabs from '@/packages/lkl-tabs/htk-icon-label-arrow-tabs.vue'
import LklDateRangePicker from '@/packages/lkl-date-picker/date-range.vue'
import LklTypesFilter from '@/packages/lkl-filter/htk-types-filter.vue'
import LklMutiLevelStatistics from '@/packages/lkl-summary/htk-muti-level-statistics.vue'

import { LklToast } from '@/packages/lkl-toast/index'
import { LklDimension } from '@/packages/lkl-filter/defines'
import { LklConfirm, LklButtonAction, LklConfirmButtonType } from '@/packages/lkl-confirm/index'

import LklTotalAbSimple from '@/packages/lkl-summary/htk-total-ab-simple.vue'

@Component({
  components: {
    LklDialog,

    LklFoldSelect,

    LklTotalAbSimple,
    LklHeadSearchButton,
    LklHeadSearch,

    LklHeadInfos,
    LklHeadInfoItem,

    LklRankTop3,
    LklRankMine,
    LklRankOther,

    LklHeadSegs,
    LklItemSegs,
    LklHeadTabs,
    LklTabs,
    LklIconLabelTabs,
    LklIconLabelArrowTabs,
    LklDateRangePicker,
    LklTypesFilter,
    LklMutiLevelStatistics
  }
})
export default class Test extends Vue {
  private dateRange: { start: Date, end: Date } | null = null;

  private text = ''

  private confirmClick () {
    LklConfirm.show('标题', '基本流程：喷水、喷清洗剂、洗涤、喷水清洗、风干、喷抛光剂、抛光、出库。全程流水作业，不需要人工。', [

      {
        type: 'default',
        title: '确定'
      },
      {
        type: 'default',
        title: '确定'
      },
      {
        type: 'default',
        title: '确定'
      },
      {
        type: 'cancel',
        title: '取消'
      }
    ])
    // (this.$refs.confirm as LklDialog).show()
  }

  private onReset () {
    // xx
  }

  private onConfirm () {
    // x
  }

  private xxx (e: string) {
    console.log(e)
  }

  private foldSelectSelectValue = ''
  private foldSelectItems: LklLabelValue[] = [
    { label: 'AAA', value: '1' },
    { label: 'BBB', value: '2' }
  ]

  private mounted () {
    // document.body.style.overflow = 'hidden'
    // const l = LklToast.loading()
    // setTimeout(() => {
    //   l.clean()
    // }, 1000)
  }

  private handleSideMenuShow (done: () => void) {
    setTimeout(() => {
      done()
    }, 1000)
  }

  private rank1: LklRankItem = {
    name: '1752115455017521154550',
    value: '123.4',
    unit: '元'
  }

  private statisticsDataSource = {
    total: {
      a: { tip: '交易金额(元)', value: '16.20' },
      b: { tip: 'D0笔数(笔)', value: '16' }
    },
    dimensions: [
      {
        name: '自有',
        isFold: true,
        key: 'self',
        color: 'red',
        a: { tip: '交易(元)', value: '1' },
        b: { tip: 'D0(笔)', value: '1' },
        subItems: [
          {
            name: '模块一',
            a: { tip: '交易(元)', value: '1' },
            b: { tip: 'D0(笔)', value: '1' },
            subItems: [
              {
                name: '电签POS非押',
                a: { tip: '交易(元)', value: '1' },
                b: { tip: 'D0(笔)', value: '1' },
                subItems: [
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } },
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } },
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } },
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } },
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } }
                ]
              }
            ]
          }
        ]
      },
      {
        name: '自有',
        isFold: true,
        key: 'self',
        color: 'red',
        a: { tip: '交易(元)', value: '1' },
        b: { tip: 'D0(笔)', value: '1' }
      },
      {
        name: '自有',
        isFold: true,
        key: 'self',
        color: 'red',
        a: { tip: '交易(元)', value: '1' },
        b: { tip: 'D0(笔)', value: '1' },
        subItems: [
          {
            name: '模块一',
            a: { tip: '交易(元)', value: '1' },
            b: { tip: 'D0(笔)', value: '1' },
            subItems: [
              {
                name: '电签POS非押',
                a: { tip: '交易(元)', value: '1' },
                b: { tip: 'D0(笔)', value: '1' },
                subItems: [
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } },
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } },
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } },
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } },
                  { name: '贷记卡', a: { tip: '交易(元)', value: '1' }, b: { tip: 'D0(笔)', value: '1' } }
                ]
              }
            ]
          }
        ]
      }

    ]
  }

  private statisticsDataSource1 = {
    total: {
      a: { tip: '总收益(元)', value: '12380.92' }
    },
    dimensions: [
      {
        name: '自有收益',
        isFold: true,
        key: 'self',
        a: { tip: '收益(元)', value: '3000.00' },
        subItems: [
          { name: '广发银行', a: { tip: '收益(元)', value: '2000.00' } },
          { name: '光大银行', a: { tip: '收益(元)', value: '1000.00' } }
        ]
      },
      {
        name: '合作方办卡',
        isFold: true,
        key: 'self',
        a: { tip: '收益(元)', value: '3000.00' },
        subItems: [
          { name: '广发银行', a: { tip: '收益(元)', value: '2000.00' } },
          { name: '光大银行', a: { tip: '收益(元)', value: '1000.00' } }
        ]
      }
    ]
  }

  private businesses = [
    { name: '收单', code: 'TPAD' },
    { name: '趣伴卡', code: 'CREDIT_CARD' }
  ]

  private business = 'TPAD'

  private posTypeTabs = [
    { name: '电签POS', code: 'ZPOS', icon: require('./icon_settle_nor@3x.png') },
    { name: '传统POS', code: 'BPOS', icon: require('./icon_settle_nor@3x.png') },
    { name: '4G电签', code: ' ZPOS4G', icon: require('./icon_settle_nor@3x.png') }
  ]

  private posType = 'ZPOS'

  private subTabs = [
    { name: '合作方', code: 0 },
    { name: '联盟', code: 1 }
  ]

  private subTabCode = 0

  private settleOrNots = [
    { name: '结算', code: 0, icon: require('./icon_settle_nor@3x.png'), iconSelect: require('./icon_settle_checked@3x.png') },
    { name: '其他', code: 1, icon: require('./icon_other_nor@3x.png'), iconSelect: require('./icon_other_checked@3x.png') }
  ]

  private settleOrNot = 0

  private onFilte (params: Record<string, string>) {
    console.warn(params)
    console.warn(this.query)
  }

  private query: Record<string, string> = {}

  private filteDimensions = [
    {
      name: '收益维度',
      key: 'a',
      select: null,
      options: [
        {
          label: '全部',
          value: '',
          sub: {
            b: [
              { label: '全部', value: '' },
              { label: '4G电签全活动', value: 'b1' }
            ]
          }
        },
        { label: '自有收益', value: 'a1' },
        { label: '合作方收益', value: 'a2' },
        { label: '联盟收益补贴', value: 'a3' }
      ]
    },
    {
      name: '结算类型',
      key: 'b',
      select: null,
      options: [
        { label: '全部', value: '' }
      ]
    },
    {
      name: '活动类型',
      key: 'c',
      select: null,
      options: [
        { label: '全部', value: '' },
        { label: '21年好拓客电签非押版活动', value: 'c1' },
        { label: '21年4G电签非押版活动', value: 'c2' }
      ]
    },
    {
      name: '收益类型',
      key: 'd',
      select: null,
      options: [
        { label: '全部', value: '' }
      ]
    }
  ]

  private beforeFilterSelectOption (dimension: LklDimension, option: LklLabelValue, done: () => void) {
    this.filteDimensions[3].options = [
      { label: '全部', value: '' },
      { label: '交易收益', value: 'd1' },
      { label: '返现收益', value: 'd2' },
      { label: 'D0收益', value: 'd3' }
    ]
    done()
  }

  private pieChartDataSource = [
    { name: '自有激活数', color: '#FF0000', value: 60000 },
    { name: '团队激活数', color: '#FFD02F', value: 20000 }
  ]

  private lineChartDataSource = {
    xLabels: ['x1', 'x2', 'x3', 'x4', 'x5'],
    yInfoValues: [
      { name: '总收益', color: '#F29C1B', values: [1, 2, 3, 2, 6] },
      { name: '自有收益', color: '#FF0000', values: [2, 2, 1, 4, 3] },
      { name: '团队贡献收益', color: '#457FFB', values: [5, 2, 5, 4, 2] }
    ]
  }

  private isLoading = false
  private isSelect = false

  private pickDate: Date | null = null
  private pickDateRange: { start: Date, end: Date } | null = null

  private headerItems = ['合作方名称', '总收益金额(元)', '电签POS', '传统POS', '4G电签']
  private list: string[][] = []
  private isListLoading = false
  private isListMore = true
  private listPage = 0
  private onListLoad (isRefresh: boolean) {
    this.isListLoading = true
    let arr = this.list
    const page = isRefresh ? 1 : this.listPage + 1
    setTimeout(() => {
      const newArr: string[][] = []
      for (let i = 0; i < 5; i++) {
        newArr.push([`${page} - ${i}`, i.toString(), page.toString()])
      }
      if (isRefresh) {
        arr = newArr
      } else {
        arr = arr.concat(newArr)
      }
      this.list = arr
      this.isListMore = true
      this.listPage += 1
      this.$nextTick(() => {
        this.isListLoading = false
      })
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
.page {
  height: 100vh;
  height: 100vh;
  flex-direction: column;
  .scroll {
    flex: 1;
    // height: 400px;
    // flex-shrink: 0;
  }
  .total-value {
    padding-top: 8px;
    color: #ffffff;
    font-weight: bold;
    font-size: 32px;
  }
  .total-tip {
    padding-top: 6px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 13px;
    padding-bottom: 8px;
  }
}
</style>
