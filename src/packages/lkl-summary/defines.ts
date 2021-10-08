export interface TipValue {
  tip: string
  value: string
}

export interface StatisticsItem {
  name: string
  a: TipValue
  b?: TipValue
  c?: TipValue
  subItems?: StatisticsItem[]
}

export interface StatisticsDimension extends StatisticsItem {
  isFold: boolean
  key: string
}

export interface StatisticsData {
  total: TipValue
  dimensions: StatisticsDimension[]
}
