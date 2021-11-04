import { LklLabelValue } from '../defines'

export interface LklStatisticsItem {
  name: string
  a: LklLabelValue
  b?: LklLabelValue
  c?: LklLabelValue
  subItems?: LklStatisticsItem[]
}

export interface LklStatisticsDimension extends LklStatisticsItem {
  isFold: boolean
  key: string
}

export interface LklStatisticsData {
  total: {
    a: LklLabelValue
    b?: LklLabelValue
    c?: LklLabelValue
  }
  dimensions: LklStatisticsDimension[]
}

export interface LklTotalAbListFoldData {
  name: string,
  total: {
    a: LklLabelValue
    b: LklLabelValue
  }
  isFold: boolean,
  list: {
    name: string,
    a: {
      total: LklLabelValue,
      list: LklLabelValue[]
    },
    b: {
      total: LklLabelValue,
      list: LklLabelValue[]
    }
  }[]
}
