import Globals from '../globals'

export interface LklColor {
  normal: string,
  dark?: string
}
export function LklGetColor (color: LklColor | undefined): string | undefined {
  if (!color) {
    return undefined
  }
  return (Globals.isDarkMode ? (color.dark ?? color.normal) : color.normal)
}

export interface LklValueProp {
  key: string;
  value: string;
}
export interface LklColorProp {
  key: string;
  value: LklColor;
}
