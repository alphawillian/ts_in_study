/*
 * @Author: willian126@126.com
 * @Description: 第一章：基础篇；05|基本类型
 * @Date: 2020-04-23 20:05:06
 * @LastEditors: willian126@126.com
 * @LastEditTime: 2022-03-17 18:10:52
 */
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
let arr1: number[] = [1, 2, 3]
let arr3: Array<number | string> = ['1', 4, 5, 6, '7']
console.log('str:', str)

// 元组
let tuple: [number, string] = [0, '1']
tuple.push(2)
console.log('tuple:', tuple)
// console.log('tuple[2]:', tuple[2]) // 会报错

// 枚举 enum
enum Color {Red = 1, Green = 3, Blue = 5}
let c: Color = Color.Blue
let colorName: string = Color[3];
console.log('colorName:', colorName)

// try catch
try {
  throw "oh no!";
}
catch (e) {
  console.log('e:', e)
  console.log("Oh well.");
}

// 函数
// let add = (x: number, y: number) => x + y 
// let compute: (x: number, y: number) => number
// compute = (a, b) => a + b
// console.log('add:', add(1, 2))

// 对象
let obj: {x: number, y: Number} = {
  x: 1,
  y: 2
}
obj.y = 3
console.log('obj:', obj)
// symbol
let s1: symbol = Symbol()
let s2: symbol = Symbol()
console.log(s1 === s2)

// undefined null
let un: undefined = undefined
let nu: null = null
num = undefined
num = null
console.log('num:', num)


// void
let noReturn = () => {}

// any
let x
x = 1
x = []

// never
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while (true) {}
}
