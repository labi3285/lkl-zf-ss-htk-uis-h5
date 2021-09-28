import { Route } from 'vue-router/types'

let key = -1

export function genKey (): string {
  key += 1
  return key.toString()
  // const t  = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  // const t = 'xxxxxxxx'
  // return t.replace(/[xy]/g, function (c) {
  //   const r = Math.random() * 16 | 0
  //   const v = c === 'x' ? r : (r & 0x3 | 0x8)
  //   return v.toString(16)
  // })
}

export function getKey (route: Route, keyName: string): string {
  return `${route.name || route.path}?${route.query[keyName]}`
}

export function matches (pattern: unknown, name: string): boolean {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return (pattern as RegExp).test(name)
  }
  return false
}

export function isRegExp (val: unknown): boolean {
  return Object.prototype.toString.call(val) === '[object RegExp]'
}

export function isObjEqual (obj1: Record<string, unknown>, obj2: Record<string, unknown>): boolean {
  if (obj1 === obj2) {
    return true
  } else {
    const keys1 = Object.getOwnPropertyNames(obj1)
    const keys2 = Object.getOwnPropertyNames(obj2)
    if (keys1.length !== keys2.length) {
      return false
    }
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
    return true
  }
}
