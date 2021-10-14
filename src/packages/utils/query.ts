export function getQueryString (key: string): string {
  const url = location.href
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  const r = url.match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return ''
}
