/*
* @Date: 2022-12-24 12:12:43
 * @LastEditTime: 2022-12-24 23:16:45
* @Description:
*
* Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
*/
import { isPlainObject } from './util'

// 处理 Content-Type 与 content-type 大小写差异
function normalizeHeaderName(headers: any, normalizedName: string): void{
  if (!headers) {
    return
  }
  Object.keys(headers).forEach((name) => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers,'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type']='application/json;charset=utf-8'
    }
  }

  return headers
}

export function parseHeaders(headers: string): any{
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach((line) => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val=val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
