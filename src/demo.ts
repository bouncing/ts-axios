/*
 * @Date: 2022-12-21 09:39:35
 * @LastEditTime: 2022-12-23 21:00:29
 * @Description: 学习中不聊天
 *
 * Copyright (c) 2022 by 课书壬盘 kebook.net, All Rights Reserved.
 */

type Alias = { num: number }
interface Interface {
  num:number
}

declare function aliased(arg:Alias):Alias
declare function interface(arg:Interface):Interface
