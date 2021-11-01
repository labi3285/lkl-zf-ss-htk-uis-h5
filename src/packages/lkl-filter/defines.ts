import { LklLabelValue } from '../defines/key-value'

export interface LklDimension {
  name: string
  key: string
  select: LklLabelValue | null
  options: LklLabelValue[]
}
