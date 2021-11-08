import { LklValueProp, LklColorProp } from './defines/style'

export const defaultSizeConfigs: LklValueProp[] = [

  // 字体大
  { key: '--font16', value: '16px' },
  // 字体正常
  { key: '--font14', value: '14px' },
  // 字体小
  { key: '--font12', value: '12px' },

  // 左右间隙
  { key: '--marginLR', value: '10px' },
  // 上下间隙
  { key: '--marginTB', value: '8px' },
  // 间隙大
  { key: '--marginL', value: '16px' },
  // 间隙中
  { key: '--marginM', value: '8px' },
  // 间隙小
  { key: '--marginS', value: '4px' },

  // 行上下的padding
  { key: '--paddingTB', value: '15px' },

  // 行高
  { key: '--rowH', value: '45px' },

  // 圆角小，用于小标签等
  { key: '--radiusS', value: '2px' },
  // 圆角大，用于卡片等
  { key: '--radiusL', value: '8px' },

  { key: '', value: '' }
]

export const defaultColorConfigs: LklColorProp[] = [
  // 主题色
  { key: '--clrTheme', value: { normal: '#FFC02E' } },
  // 点缀色、用于强调、强提示
  { key: '--clrTint', value: { normal: '#DC806A' } },
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
  { key: '--clrListDiv', value: { normal: '#FFFDEB', dark: '#000000' } },

  { key: '--clrDisable', value: { normal: '#efefef', dark: '#666666' } },

  // 卡片阴影
  { key: '--clrShadow', value: { normal: '#E3E3E3', dark: '#121212' } },

  // 点缀色、用于强调、强提示
  { key: '--clrTint', value: { normal: '#DC806A' } },
  // 用于required
  { key: '--clrRequire', value: { normal: 'red' } },

  // 提示颜色-警告
  { key: '--clrWarning', value: { normal: 'orange' } },
  // 提示颜色-成功
  { key: '--clrSuccess', value: { normal: 'green' } },
  // 提示颜色-失败
  { key: '--clrFailed', value: { normal: 'red' } },

  { key: '', value: { normal: '' } }
]
