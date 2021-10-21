import { LklValueProp, LklColorProp } from './utils/Prop'

export function setupProps (props: LklValueProp[]): void {
  for (const e of props) {
    document.body.style.setProperty(e.key, e.value)
  }
}
export function updateLklColorProps (props: LklColorProp[], isDarkMode: boolean): void {
  for (const e of props) {
    if (isDarkMode && e.value.dark) {
      document.body.style.setProperty(e.key, e.value.dark)
    } else {
      document.body.style.setProperty(e.key, e.value.normal)
    }
  }
}
