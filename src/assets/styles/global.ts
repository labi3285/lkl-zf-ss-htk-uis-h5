import { Prop } from '@/packages/utils/Prop'

export const Configs: Prop[] = [
  // 点缀色、主题色
  { key: '--clrTint', value: { normal: '#F29C1B' } },
  // 用于白色的背景，卡片
  { key: '--clrBody', value: { normal: '#ffffff', dark: '#191919' } },
  // 浅灰色背景、分隔
  { key: '--clrBackGray', value: { normal: '#f5f5f5', dark: '#000000' } },
  // 分割线
  { key: '--clrLine', value: { normal: '#e6e6e6', dark: '#3d3d41' } },
  // 标题
  { key: '--clrT1', value: { normal: '#333333', dark: '#EFEFEF' } },
  // 次标题、正文
  { key: '--clrT2', value: { normal: '#666666', dark: '#999999' } },
  // 备注、placeholder
  { key: '--clrT3', value: { normal: '#999999', dark: '#666666' } },

  // 列表高亮row
  { key: '--clrListDiv', value: { normal: '#FFFDEB', dark: '#000000' } }

]
