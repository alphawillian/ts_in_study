/*
 * @Author: willian126@126.com
 * @Description: 12|类与接口的关系
 * @Date: 2022-04-01 18:05:26
 * @LastEditors: willian126@126.com
 * @LastEditTime: 2022-04-01 18:10:28
 */
interface Human  {
  name: string;
  eat(): void;
}
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
}
