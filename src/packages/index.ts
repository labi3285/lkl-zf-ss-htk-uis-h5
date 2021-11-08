import { LklValueProp, LklColorProp } from './defines/style'
import Globals from './globals'

export function setupProps (props: LklValueProp[]): void {
  for (const e of props) {
    document.body.style.setProperty(e.key, e.value)
  }
}
export function updateColorProps (props: LklColorProp[], isDarkMode: boolean): void {
  Globals.isDarkMode = isDarkMode
  for (const e of props) {
    if (isDarkMode && e.value.dark) {
      document.body.style.setProperty(e.key, e.value.dark)
    } else {
      document.body.style.setProperty(e.key, e.value.normal)
    }
  }
}
