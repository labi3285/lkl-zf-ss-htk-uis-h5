export interface LklTipValue {
  tip: string
  value: string
}

export interface LklStatisticsItem {
  name: string
  a: LklTipValue
  b?: LklTipValue
  c?: LklTipValue
  subItems?: LklStatisticsItem[]
}

export interface LklStatisticsDimension extends LklStatisticsItem {
  isFold: boolean
  key: string
}

export interface LklStatisticsData {
  total: {
    a: LklTipValue
    b?: LklTipValue
    c?: LklTipValue
  }
  dimensions: LklStatisticsDimension[]
}
