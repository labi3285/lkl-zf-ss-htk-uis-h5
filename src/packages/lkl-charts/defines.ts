export interface LklPieChartInfoValue {
  name: string
  color: string
  value: number
}

export interface LklLineChartInfoValues {
  name: string
  color: string
  values: number[]
}

export interface LklLineChartDataSource {
  xLabels: string[]
  yInfoValues: LklLineChartInfoValues[]
}
