export interface LklDimensionlOption {
  label: string
  value: string
}

export interface LklDimension {
  name: string
  key: string
  select: LklDimensionlOption | null
  options: LklDimensionlOption[]
}
