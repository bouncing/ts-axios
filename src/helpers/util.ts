/*
 * @Date: 2022-12-23 22:09:43
 * @LastEditTime: 2022-12-23 22:18:15
 * @Description:
 *
 * Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
 */

const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val:any):val is Object {
  return val !== null && typeof val === 'object'
}
