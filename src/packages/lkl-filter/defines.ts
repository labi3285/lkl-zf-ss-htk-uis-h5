export interface LabelValue {
  label: string
  value: string
}

export interface Dimension {
  name: string
  key: string
  select: LabelValue | null
  options: LabelValue[]
}
