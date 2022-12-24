/*
 * @Author: 小神仙他爹老神经
 * @Date: 2022-11-27 19:33:40
 * @LastEditTime: 2022-12-24 12:42:11
 * @Description:
 *
 * Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
 */
import { AxiosRequestConfig } from './type'

export default function xhr(config: AxiosRequestConfig):void {
  const { data = null, url, method = 'get',headers } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach((name) => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name,headers[name])
    }
  })

  request.send(data)
}
