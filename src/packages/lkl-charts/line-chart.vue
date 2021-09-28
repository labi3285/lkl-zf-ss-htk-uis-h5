<template>
  <div class="lkl-line-chart">
    <div v-if="dataSource" class="lkl-line-chart-chart" ref="chart"></div>
    <div v-if="dataSource" class="lkl-line-chart-legend">
      <div class="lkl-line-chart-legend">
        <div v-for="(e, i) in dataSource.yInfoValues" :key="i" class="lkl-line-chart-legend-item">
          <div class="lkl-line-chart-legend-item-dot" :style="{ backgroundColor: e.color }"></div>
          <div class="lkl-line-chart-legend-item-label">{{ e.name }}</div>
        </div>
      </div>
    </div>
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
      series.push(serie)
    }

    return {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '20px',
        right: '20px',
        bottom: '8px',
        top: '8px',
        containLabel: true,
        show: false
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
  &-chart {
    width: 100%;
    height: 200px;
    // background-color: green;
  }
  &-legend {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &-item {
      display: flex;
      align-items: center;
      &-dot {
        width: 8px;
        height: 8px;
        border-radius: var(--radiusL);
        border-width: 1px;
        border-color: #ffffff;
        border-style: solid;
        -webkit-box-shadow: var(--clrShadow) 0px 0px 8px;
        -moz-box-shadow: var(--clrShadow) 0px 0px 8px;
        box-shadow: var(--clrShadow) 0px 0px 8px;
        margin-right: 8px;
      }
      &-label {
        color: var(--clrT2);
        font-size: var(--font12);
      }
    }
  }
}
</style>
