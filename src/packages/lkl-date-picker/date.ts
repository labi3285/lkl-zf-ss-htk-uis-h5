
export function formatDate (date: Date, fmt: string): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const o: any = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const x = o[k]
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (x) : (('00' + x).substr(('' + x).length)))
    }
  }
  return fmt
}

// export function dateString (date: Date): string {
//   return formatDate(date, 'yyyy-MM-dd')
// }

// export function timeString (date: Date): string {
//   if (date === null || date === undefined) {
//     return ''
//   }
//   return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
// }
