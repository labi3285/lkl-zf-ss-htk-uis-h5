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

export interface LklStatisticsDataSource {
  total: {
    a: LklLabelValue
    b?: LklLabelValue
    c?: LklLabelValue
  }
  dimensions: LklStatisticsDimension[]
}

export interface LklAbTotalListFoldSubItem {
  name: string,
  a: {
    total: LklLabelValue,
    list: LklLabelValue[]
  },
  b: {
    total: LklLabelValue,
    list: LklLabelValue[]
  }
}
export interface LklAbTotalListFoldData {
  name: string,
  total: {
    a: LklLabelValue
    b: LklLabelValue
  }
  isFold: boolean,
  list: LklAbTotalListFoldSubItem[]
}

export interface LklTipValueAbcListFoldSubItem {
  name: string,
  total: LklLabelValue,
  a: LklLabelValue,
  b: LklLabelValue,
  c?: LklLabelValue
}
export interface LklTipValueAbcListFoldData extends LklTipValueAbcListFoldSubItem {
  isFold: boolean,
  list: LklTipValueAbcListFoldSubItem[]
}
