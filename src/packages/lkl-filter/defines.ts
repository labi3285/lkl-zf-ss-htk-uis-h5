export interface LklLabelValue {
  label: string
  value: string
}

export interface LklDimension {
  name: string
  key: string
  select: LklLabelValue | null
  options: LklLabelValue[]
}
