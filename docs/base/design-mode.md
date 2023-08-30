<!--
 * Author  rhys.zhao
 * Date  2023-01-24 09:53:01
 * LastEditors  rhys.zhao
 * LastEditTime  2023-08-07 17:07:35
 * Description
-->

# 设计模式

## 1. 说说对设计模式的理解？常见的设计模式有哪些？

设计模式可以理解为软件设计的经验总结。有助于提高代码的可读性、可维护性。

常见的设计模式有单例模式、装饰器模式、代理模式、策略模式、观察者模式、发布订阅模式等等。

## 2. 说说你对单例模式的理解？如何实现？

单例模式能够保证一个类只有一个实例。代码如下：

```js
class Person {
  static getInstance() {
    if (!this.instance) {
      this.instance = new Person();
    }
    return this.instance;
  }

  say() {
    console.log('你好');
  }
}

const jack = Person.getInstance();
const jim = Person.getInstance();

console.log(jack === jim); // true
```

当然，也可以把单例的逻辑放到 constructor 里：

```js
class Person {
  constructor() {
    if (!Person.instance) {
      Person.instance = this;
    }
    return Person.instance;
  }

  say() {
    console.log('你好');
  }
}

const jack = new Person();
const jim = new Person();

console.log(jack === jim); // true
```

## 3. 说说你对工厂模式的理解？应用场景？

## 4. 说说你对策略模式的理解？应用场景？

策略模式就是定义一系列算法，把它们一个个封装起来，并且可以相互替换。

经常的应用场景就是 if...else 里的逻辑单独抽离成一个函数：

```js
function bonus(performance, salary) {
  if (performance === 'S') {
    return 4 * salary;
  }
  if (performance === 'A') {
    return 3 * salary;
  }
  if (performance === 'B') {
    return 2 * salary;
  }
}
```

替换成：

```js
function performanceS(salary) {
  return 4 * salary;
}
function performanceA(salary) {
  return 3 * salary;
}
function performanceB(salary) {
  return 2 * salary;
}

function bonus(performance, salary) {
  if (performance === 'S') {
    return performanceS(salary);
  }
  if (performance === 'A') {
    return performanceA(salary);
  }
  if (performance === 'B') {
    return performanceB(salary);
  }
}
```

## 5. 说说你对代理模式的理解？应用场景？

一个对象不能访问另一个对象，需要通过第三者(代理)才能达到访问的目的。应用广泛，比如处理跨域的 proxy，本质上就是通过代理模式绕过跨域。再比如 vue3 的响应式，使用了 ES6 的 proxy。

## 6. 说说你对发布订阅、观察者模式的理解？区别？

观察者模式：一个对象观察另一个对象，当另一个对象变化时，做出相应操作

发布订阅模式：比起观察者模式多了一个事件中心，发布者不用关心谁订阅，订阅者也不关心谁发布。实现了发布者和订阅者的解耦。
