abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}
class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}
let dog = new Dog('wangwang')
dog.eat()

class Cat extends Animal {
  sleep () {
    console.log('cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog, cat]
animals.forEach(i => {
  i.sleep()
})

class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
  next() {
    return this
  }
}
new Myflow().next().step1().next().step2()