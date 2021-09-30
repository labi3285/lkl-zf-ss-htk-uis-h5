<template>
  <div class="lkl-pie-chart">
    <div v-if="dataSource" class="lkl-pie-chart-chart" ref="chart"></div>
    <div v-if="dataSource" class="lkl-pie-chart-legend">
      <div class="lkl-pie-chart-legend-dots">
        <div v-for="(e, i) in legends" :key="i" class="lkl-pie-chart-legend-dots-item" :style="{ backgroundColor: e.color, opacity: e.name === allName ? 0 : 1 }" ></div>
      </div>
      <div class="lkl-pie-chart-legend-labels">
        <div v-for="(e, i) in legends" :key="i" class="lkl-pie-chart-legend-labels-item">{{ e.name }}</div>
      </div>
      <div class="lkl-pie-chart-legend-values">
        <div v-for="(e, i) in legends" :key="i" class="lkl-pie-chart-legend-values-item">{{ e.value }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import echarts from 'echarts/lib/echarts'
// 引入图表类型，标题，提示信息等
import 'echarts/lib/chart/pie'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/legend'

export interface ChartInfoValue {
  name: string
  color: string
  value: number
}

@Component
export default class LklPieChart extends Vue {
  @Prop({ default: undefined }) dataSource!: ChartInfoValue[];
  @Watch('dataSource')
  private onDataChange () {
    this.refresh()
  }

  @Prop({ default: true }) showAll!: boolean;
  @Prop({ default: undefined }) allValue!: number;
  @Prop({ default: '全部' }) allName!: string;

  private hexToRgba (hex: string) {
    return 'rgba(' + parseInt('0x' + hex.slice(1, 3), 0) + ',' + parseInt('0x' + hex.slice(3, 5), 0) + ',' + parseInt('0x' + hex.slice(5, 7), 0) + ',' + parseInt('0x' + hex.slice(7, 9), 0) / 100.0 + ')'
  }

  private get legends () {
    if (this.showAll) {
      let c = 0
      if (this.allValue) {
        c = this.allValue
      } else {
        for (const e of this.dataSource) {
          c += e.value
        }
      }
      let arr: ChartInfoValue[] = [{ name: this.allName, value: c, color: 'transparent' }]
      arr = arr.concat(this.dataSource)
      return arr
    }
    return this.dataSource
  }

  private chart: any | null = null

  private mounted () {
    this.chart = echarts.init(this.$refs.chart as HTMLCanvasElement)
    this.refresh()
  }

  private refresh () {
    // eslint-disable-next-line no-unused-expressions
    this.chart?.clear()
    // eslint-disable-next-line no-unused-expressions
    this.chart?.setOption(this.options())
  }

  private options () {
    if (this.dataSource === undefined) {
      return null
    }
    const serie: any = {
      type: 'pie',
      name: '',
      radius: ['40%', '70%'],
      hoverAnimation: false,
      avoidLabelOverlap: false,
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '0',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      }
    }
    const data = []
    for (const e of this.dataSource) {
      data.push({
        value: e.value,
        name: e.name,
        itemStyle: {
          normal: {
            color: e.color
          },
          emphasis: { color: e.color }
        }
      })
    }
    serie.data = data
    return {
      series: [serie]
    }
  }
}
</script>

<style lang="less">
.lkl-pie-chart {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &-chart {
    width: 200px;
    height: 200px;
  }
  &-legend {
    padding-right: 10px;
    // width: 140px;
    height: 100px;
    display: flex;
    align-items: center;
    &-dots {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &-item {
        width: 8px;
        height: 8px;
        border-radius: var(--radiusL);
        border-width: 1px;
        border-color: #ffffff;
        border-style: solid;
        -webkit-box-shadow: var(--clrShadow) 0px 0px 8px;
        -moz-box-shadow: var(--clrShadow) 0px 0px 8px;
        box-shadow: var(--clrShadow) 0px 0px 8px;
      }
    }
    &-labels {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 8px;
      &-item {
        color: var(--clrT2);
        font-size: var(--font12);
      }
    }
    &-values {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 20px;
      &-item {
        color: var(--clrT2);
        font-size: var(--font12);
      }
    }

  }
}
</style>
