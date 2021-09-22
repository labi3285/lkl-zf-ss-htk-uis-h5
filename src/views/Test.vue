<template>
  <v-content class="page">
    <v-pull-down-refresh :is-loading.sync="isListLoading" @load="onListLoad(true)" />
    <v-space />
    <v-dot-title title="交易统计">
      <v-date-picker-date-single :pickedDate.sync="pickDate" :defaultDate="new Date()" />
      <!-- <v-date-picker-date-range :pickedDateRange.sync="pickDateRange" :defaultDateRange="{ start: new Date(), end: new Date() }" /> -->
    </v-dot-title>
    <v-space height="4px" />
    <v-summary-total-ab
      totalTip="交易额(元)"
      aTip="自有交易额(元)"
      bTip="团队交易额(元)"
    />
    <v-space />

    <v-break-space/>
    <v-space />
    <v-dot-title title="交易趋势">
      <v-text-button text="查看明细">
        <template v-slot:right>
          <v-arrow />
        </template>
      </v-text-button>
    </v-dot-title>
    <v-space height="4px" />
    <v-line-chart :data-source="chartDataSource" />

    <v-break-space/>
    <v-space />
    <v-dot-title title="团队情况(本月)" />
    <v-space height="12px" />
    <v-colums-list-header :items="headerItems" :colum-widths="['150px', '1', '1']" :right-arrowed="true" />
    <v-colums-list-item v-for="(e, i) in list" :key="i" :index="i" :items="e" :colum-widths="['150px', '1', '1']" :right-arrowed="true">
      <template v-slot:item1>
        <v-arrow />
      </template>
      <template v-slot:left0>
        <v-arrow margin-right="10px" />
      </template>
    </v-colums-list-item>
    <v-load-more
      :is-loading.sync="isListLoading"
      :is-load-on-mounted="true"
      :is-there-more="isListMore"
      @load="onListLoad(false)"
    />

  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import vContent from '@/packages/lkl-content/index.vue'
import vSpace from '@/packages/lkl-space/index.vue'
import vBreakSpace from '@/packages/lkl-break-space/index.vue'
import vLine from '@/packages/lkl-line/index.vue'
import vBreakLine from '@/packages/lkl-break-line/index.vue'
import vArrow from '@/packages/lkl-arrow/index.vue'

import vDotTitle from '@/packages/lkl-dot-title/haotk.vue'

import vTextButton from '@/packages/lkl-text-button/index.vue'

import vSummaryTotalAb from '@/packages/lkl-summary/haotk-total-ab.vue'

import vColumsListHeader from '@/packages/lkl-colums-list/haotk-header.vue'
import vColumsListItem from '@/packages/lkl-colums-list/haotk-item.vue'

import vPullDownRefresh from '@/packages/lkl-pull-down-refresh/index.vue'
import vLoadMore from '@/packages/lkl-load-more/index.vue'

import vDatePickerDateSingle from '@/packages/lkl-date-picker/date-single.vue'
import vDatePickerDateRange from '@/packages/lkl-date-picker/date-range.vue'

import vLineChart from '@/packages/lkl-charts/line-chart.vue'

@Component({
  components: {
    vContent,
    vSpace,
    vBreakSpace,
    vLine,
    vBreakLine,
    vArrow,
    vDotTitle,
    vTextButton,
    vColumsListHeader,
    vColumsListItem,

    vPullDownRefresh,
    vLoadMore,

    vDatePickerDateSingle,
    vDatePickerDateRange,

    vSummaryTotalAb,

    vLineChart

  }
})
export default class Test extends Vue {
  private onClick () {
    // xx
  }

  private chartDataSource = {
    xLabels: ['x1', 'x2', 'x3', 'x4', 'x5'],
    yInfoValues: [
      { name: 'a', color: '#ff0000', values: [1, 2, 3, 2, 6] },
      { name: 'b', color: '#00ff00', values: [2, 2, 1, 4, 3] },
      { name: 'c', color: '#0000ff', values: [5, 2, 5, 4, 2] }
    ]
  }

  private isLoading = false

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
}

</style>
