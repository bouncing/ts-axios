/*
 * @Date: 2022-11-27 21:51:06
 * @LastEditTime: 2022-12-23 22:38:16
 * @Description:
 *
 * Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
 */
import { isDate, isObject } from './util'

function encode(val:string) {
  return encodeURIComponent(val)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url:string,params?:any):string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach((key) => {
    const val = params[key]
    if (val===null || typeof val==='undefined') {
      return
    }
    let values = []  // 临时数组
    if (Array.isArray(val)) { // 数组 key -> key[]
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    values.forEach((val) => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1? '?' : '&') + serializedParams
  }

  return url
}
