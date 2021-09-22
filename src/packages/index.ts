import { Prop } from './utils/Prop'

export function updateGlobalProps (props: Prop[], isDarkMode: boolean): void {
  for (const e of props) {
    if (isDarkMode && e.value.dark) {
      document.body.style.setProperty(e.key, e.value.dark)
    } else {
      document.body.style.setProperty(e.key, e.value.normal)
    }
  }
}
