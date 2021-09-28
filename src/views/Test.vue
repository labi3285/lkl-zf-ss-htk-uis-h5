<template>
  <v-content class="page">
    <v-nav title="汇拓客"></v-nav>
    <v-scroll class="scroll">
      <v-pull-down-refresh :isLoading.sync="isListLoading" type="theme" @load="onListLoad(true)" />
      <v-head-content>
        <div style="height: 60px; position: relative"></div>
      </v-head-content>

      <v-card-content>
        <v-icon-label-tabs style="position: absolute; top: -50px; left: 0; right: 0" :tabs="tabs1" :currentTabCode.sync="currentTabCode" />
        <v-space />
        <v-space />
        <v-space />
        <v-tabs style="background-color: #EBF3FF" lineWidth="55px" :tabs="posTypeTabs" :currentTabCode.sync="posType" />
        <v-types-filter :query="query" :dimensions="filteDimensions" :mutexDimensionKeysGroups="[['c', 'd']]" @filte="onFilte" />
        <v-break-line type='through' />

        <v-title title="全部人数总计（人）" value="42" />

        <v-total tip="总交易金额(元）" value="889.00" />
        <v-break-line />
        <v-total-ab tipA="交易笔数(笔）" tipB="D0笔数(笔）" valueA="88.00" valueB="88.00" />
        <v-break-line />
        <v-total-ab tipA="联盟交易(元）" valueA="88.00" :isBShow="false" />
        <v-break-space />

        <v-space />
        <v-tabs :tabs="subTabs" :currentTabCode.sync="currentSubTabCode" />
        <v-colums-list-header :items="headerItems" />
        <v-colums-list-item v-for="(e, i) in list" :key="i" :items="e" :index="i" />
        <v-load-more :isLoadOnMounted="true" :isLoading.sync="isListLoading" :isThereMore="isListMore" @load="onListLoad(false)" />
      </v-card-content>
    </v-scroll>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import vTabs from '@/packages/lkl-tabs/htk-tabs.vue'
import vTotal from '@/packages/lkl-summary/htk-total.vue'
import vTotalAb from '@/packages/lkl-summary/htk-total-ab.vue'

import { LklToast } from '@/packages/lkl-toast/index'
import { LklConfirm, ButtonAction } from '@/packages/lkl-confirm/index'

import { LabelValue, Dimension } from '@/packages/lkl-filter/defines'
import vTypesFilter from '@/packages/lkl-filter/htk-types-filter.vue'
import vSideMenu from '@/packages/lkl-filter/htk-side-menu.vue'
import vSideMenuSection from '@/packages/lkl-filter/htk-side-menu-section.vue'
import vSideMenuTypeSelect from '@/packages/lkl-filter/htk-side-menu-type-select.vue'
import vIconLabelTabs from '@/packages/lkl-tabs/htk-icon-label-tabs.vue'

@Component({
  components: {
    vIconLabelTabs,
    vTabs,
    vTotal,
    vTotalAb,
    vTypesFilter,
    vSideMenu,
    vSideMenuSection,
    vSideMenuTypeSelect
  }
})
export default class Test extends Vue {
  private posTypeTabs = [
    { name: '电签POS', code: 'ZPOS' },
    { name: '传统POS', code: 'BPOS' },
    { name: '4G电签', code: ' ZPOS4G' }
  ]

  private posType = 'ZPOS'

  private subTabs = [
    { name: '合作方', code: 0 },
    { name: '联盟', code: 1 }
  ]

  private currentSubTabCode = 0

  private tabs1 = [
    { name: '合作方', code: 0, icon: require('./icon_reward_nor@3x.png'), iconSelect: require('./icon_reward_checked@3x.png') },
    { name: '联盟', code: 1, icon: require('./icon_settle_nor@3x.png'), iconSelect: require('./icon_settle_checked@3x.png') }
  ]

  private onFilte (params: Record<string, string>) {
    console.warn(params)
    console.warn(this.query)
  }

  private query: Record<string, string> = {}

  private filteDimensions: Dimension[] = [
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

  private headerItems = ['团队成员名称', '交易额', '交易笔数']
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

<style lang="less">
.page {
  height: 100vh;
  height: 100vh;
  flex-direction: column;
  .scroll {
    flex: 1;
    // height: 400px;
    // flex-shrink: 0;
  }
  .popup {
    background-color: yellow;
  }
}
</style>
