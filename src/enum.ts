// 数字枚举
enum Role {
  Repoter = 1,
  Developer,
  Maintainer,
  Owner,
  Guster
}
// console.log(Role.Repoter)
// console.log(Role)
// 字符串枚举
enum Message {
  Success = '恭喜您，成功了',
  Fail = '抱歉，失败了'
}
// 异构枚举
enum Answer{
  N,
  Y = 'Yes'
}
// 枚举成员
enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length
}
// 常量枚举
const enum Month {
  Jan,
}

interface List {
  // readonly id: number;
  id: number;
  name: string;
  // [x: string]: any;
  age?: number

}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach((value) => {
    // value.id++
    console.log(value.id, value.name)
    if (value.age) {
      console.log('value.age:', value.age)
    }
  })
}
let result = {
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'}
  ]
}
render(result)
render({
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'}
  ]
} as Result)

interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['a', 'b']

interface Names {
  [x: string]: string
  // y: number;
  [z: number]: string
}