<template>
  <v-content class="page">
    <v-nav></v-nav>
    <v-scroll class="scroll">

      <!-- <v-pull-down-refresh :isLoading.sync="isListLoading" type="theme" @load="onListLoad(true)" /> -->
      <v-head-content>

        <v-space />
        <vHeadInfos>
          <vHeadInfoItem title="编号">xxxx</vHeadInfoItem>
          <vHeadInfoItem title="编号">xxxx</vHeadInfoItem>
          <vHeadInfoItem title="编号">xxxx</vHeadInfoItem>

        </vHeadInfos>

        <v-space />

        <v-row-left-center-right>
          <v-date-range-picker color="#ffffff" :pickedDateRange.sync="dateRange" />
          <template v-slot:right>
            <v-text-button style="margin-top: 5px" color="#ffffff">
              <v-icon-filter class="lkl-htk-types-filter-button-icon" color="#ffffff" />
              筛选
            </v-text-button>
          </template>
        </v-row-left-center-right>

        <v-col alignX="center">
          <div class="total-value">123.00</div>
          <div class="total-tip">总收益金额（元）</div>
        </v-col>
        <v-segs :tabs="businesses" :currentTabCode.sync="business" />
        <v-space height="60px" />
      </v-head-content>

      <v-card-content>
        <v-card style="position: absolute; top: -50px; left: 0; right: 0">
          <v-icon-label-tabs :tabs="settleOrNots" :currentTabCode.sync="settleOrNot" />
        </v-card>
        <v-space height="18px" />

        <vRank :rank1="rank1" :rank2="rank1" :rank="rank1" />

        <v-icon-label-arrow-tabs style="background-color: var(--clrListHead)" lineWidth="55px" :tabs="posTypeTabs" :currentTabCode.sync="posType" />
        <v-types-filter :query="query" :dimensions="filteDimensions" :mutexDimensionKeysGroups="[['c', 'd']]" :handleSideMenuShow="handleSideMenuShow" @filte="onFilte" />
        <v-break-line type='through' />
        <v-muti-level-statistics foldButtonMarginLeft="130px" nameColumWidth="140" :dataSource="statisticsDataSource1" />

        <v-title title="全部人数总计（人）" :dotted="false" value="42" />

        <!-- <v-total tip="总交易金额(元）" value="889.00" />
        <v-break-line />
        <v-total-ab tipA="交易笔数(笔）" tipB="D0笔数(笔）" valueA="88.00" valueB="88.00" />
        <v-break-line />
        <v-total-ab tipA="联盟交易(元）" valueA="88.00" :isBShow="false" />
        <v-break-space /> -->

        <v-space />
        <v-tabs :tabs="subTabs" :currentTabCode.sync="subTabCode" />
        <v-colums-list-header :items="headerItems" :columWidths="['1.5', '1.5', '1', '1', '1']" />
        <v-colums-list-item v-for="(e, i) in list" :key="i" :items="e" :index="i" />
        <!-- <v-load-more :isLoadOnMounted="true" :isLoading.sync="isListLoading" :isThereMore="isListMore" @load="onListLoad(false)" /> -->
      </v-card-content>
    </v-scroll>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { RankItem } from '@/packages/lkl-rank/defines'
import vRank from '@/packages/lkl-rank/htk.vue'

import vHeadInfos from '@/packages/lkl-content/htk-head-infos.vue'
import vHeadInfoItem from '@/packages/lkl-content/htk-head-info-item.vue'

import vSegs from '@/packages/lkl-tabs/htk-segs.vue'
import vTabs from '@/packages/lkl-tabs/htk-tabs.vue'
import vIconLabelTabs from '@/packages/lkl-tabs/htk-icon-label-tabs.vue'
import vIconLabelArrowTabs from '@/packages/lkl-tabs/htk-icon-label-arrow-tabs.vue'
import vDateRangePicker from '@/packages/lkl-date-picker/date-range.vue'
import vTypesFilter from '@/packages/lkl-filter/htk-types-filter.vue'
import vMutiLevelStatistics from '@/packages/lkl-summary/htk-muti-level-statistics.vue'

import { LklToast } from '@/packages/lkl-toast/index'
// import { LklConfirm, ButtonAction } from '@/packages/lkl-confirm/index'

@Component({
  components: {
    vHeadInfos,
    vHeadInfoItem,

    vRank,

    vSegs,
    vTabs,
    vIconLabelTabs,
    vIconLabelArrowTabs,
    vDateRangePicker,
    vTypesFilter,
    vMutiLevelStatistics
  }
})
export default class Test extends Vue {
  private dateRange: { start: Date, end: Date } | null = null;

  private mounted () {
    // const l = LklToast.loading()
    // setTimeout(() => {
    //   // l.clean()
    // }, 1000)
  }

  private handleSideMenuShow (done: () => void) {
    setTimeout(() => {
      done()
    }, 1000)
  }

  private rank1: RankItem = {
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
        { label: '全部', value: '' },
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
        { label: '全部', value: '' },
        { label: '4G电签全活动', value: 'b1' }
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
        { label: '全部', value: '' },
        { label: '交易收益', value: 'd1' },
        { label: '返现收益', value: 'd2' },
        { label: 'D0收益', value: 'd3' }
      ]
    }
  ]

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
