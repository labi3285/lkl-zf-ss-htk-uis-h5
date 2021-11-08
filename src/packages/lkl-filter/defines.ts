import { LklLabelValue } from '../defines/label-value'

export interface LklDimension {
  name: string
  key: string
  select: LklLabelValue | null
  options: LklLabelValue[]
}
