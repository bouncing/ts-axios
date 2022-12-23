/*
 * @Author: 小神仙他爹老神经
 * @Date: 2022-11-27 19:33:40
 * @LastEditTime: 2022-12-20 20:33:08
 * @Description:
 *
 * Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
 */
import { AxiosRequestConfig } from './type'

export default function xhr(config: AxiosRequestConfig):void {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(),url,true)

  request.send(data)
}
