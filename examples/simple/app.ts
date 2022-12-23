/*
 * @Date: 2022-11-27 20:37:48
 * @LastEditTime: 2022-12-23 21:48:47
 * @Description: 学习中不聊天
 *
 * Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
