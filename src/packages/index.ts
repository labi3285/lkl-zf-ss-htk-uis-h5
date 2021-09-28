import { ValueProp, ColorProp } from './utils/Prop'

export function setupProps (props: ValueProp[]): void {
  for (const e of props) {
    document.body.style.setProperty(e.key, e.value)
  }
}
export function updateColorProps (props: ColorProp[], isDarkMode: boolean): void {
  for (const e of props) {
    if (isDarkMode && e.value.dark) {
      document.body.style.setProperty(e.key, e.value.dark)
    } else {
      document.body.style.setProperty(e.key, e.value.normal)
    }
  }
}
