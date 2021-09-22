<template>
  <div class="lkl-line-chart">
    <div class="lkl-line-chart-chart" ref="chart"></div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import echarts from 'echarts/lib/echarts'
// 引入图表类型，标题，提示信息等
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

export interface ChartInfoValues {
  name: string
  color: string
  values: number[]
}

@Component
export default class LklLineChart extends Vue {
  @Prop({ default: undefined }) dataSource!: { xLabels: string[]; yInfoValues: ChartInfoValues[]; };
  @Watch('dataSource')
  private onDataChange () {
    this.refresh()
  }

  // 展示底部的渐变
  @Prop({ default: false }) areaStyle!: boolean;

  private hexToRgba (hex: string) {
    return 'rgba(' + parseInt('0x' + hex.slice(1, 3), 0) + ',' + parseInt('0x' + hex.slice(3, 5), 0) + ',' + parseInt('0x' + hex.slice(5, 7), 0) + ',' + parseInt('0x' + hex.slice(7, 9), 0) / 100.0 + ')'
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
    const series = []
    const legendSeries = []
    if (this.dataSource === undefined) {
      return null
    }
    for (const e of this.dataSource.yInfoValues) {
      const serie: any = {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        showSymbol: true,
        symbolSize: 8,
        color: e.color,
        lineStyle: {
          width: 2,
          color: e.color
        },
        name: e.name,
        data: e.values
      }
      if (this.areaStyle) {
        serie.areaStyle = {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: this.hexToRgba(e.color + '22') // 0% 处的颜色
              },
              {
                offset: 1,
                color: this.hexToRgba(e.color + '00') // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        }
      }
      legendSeries.push(e.name)
      series.push(serie)
    }

    return {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '16px',
        right: '24px',
        bottom: '30px',
        top: '16px',
        containLabel: true,
        show: false
      },
      legend: {
        left: 20,
        bottom: 0,
        data: legendSeries,
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: { color: '#666666', size: 9 }
      },
      xAxis: {
        splitLine: {
          show: false,
          type: 'dashed'
        },
        axisTick: {
          show: false
        },
        data: this.dataSource.xLabels,
        // boundaryGap: true,
        nameLocation: 'middle',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#999999',
            fontSize: 10
          }
        },
        axisLine: {
          symbol: 'none',
          lineStyle: {
            color: '#00000000',
            width: 1
          }
        }
      },
      yAxis: {
        type: 'value',
        minInterval: 1,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#999999',
            fontSize: 10
          }
        },
        axisLine: {
          symbol: 'none',
          lineStyle: {
            color: '#00000000',
            width: 1
          }
        }
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100,
          moveOnMouseWheel: false,
          preventDefaultMouseMove: false,
          zoomLock: true,
          moveOnMouseMove: false
        }
      ],
      series
    }
  }
}
</script>

<style lang="less" scoped>
.lkl-line-chart {
  width: 100%;
  height: 243px;
  &-chart {
    width: 100%;
    height: calc(100% - 10px);
  }
}
</style>
