/*
 * @Author: 小神仙他爹老神经
 * @Date: 2022-11-27 14:24:26
 * @LastEditTime: 2022-12-23 22:46:40
 * @Description: axios 入口文件
 *
 * Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
 */
import {AxiosRequestConfig} from './type'
import xhr from './xhr';
import { buildURL } from './helpers/url';

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void{
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string{
  const { url, params } = config
  return buildURL(url,params)
}

export default axios
