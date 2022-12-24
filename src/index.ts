/*
 * @Author: 小神仙他爹老神经
 * @Date: 2022-11-27 14:24:26
 * @LastEditTime: 2022-12-24 23:30:16
 * @Description: axios 入口文件
 *
 * Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
 */
import {AxiosRequestConfig,AxiosPromise, AxiosResponse} from './type'
import xhr from './xhr';
import { buildURL } from './helpers/url';
import { transformRequest, transformResponse } from './helpers/data';
import { processHeaders } from './helpers/headers';

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res) => {
    return transformResponseData(res);
  })
}

function processConfig(config: AxiosRequestConfig): void{
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string{
  const { url, params } = config
  return buildURL(url,params)
}

function transformRequestData(config: AxiosRequestConfig): any{
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any{
  const {headers={},data}=config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse{
  res.data = transformResponse(res.data)
  return res
}

export default axios
