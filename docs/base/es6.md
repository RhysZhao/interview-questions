<!--
 * Author  rhys.zhao
 * Date  ## 2023-03-30 09:21:24
 * LastEditors  rhys.zhao
 * LastEditTime  2023-07-31 15:25:29
 * Description
-->

# ES6

## 1. 说说 var、let、const 之间的区别

var let const 都是用来声明变量。

不同的是，var 只有全局作用于和函数作用域。存在变量提升并可以重复声明变量。

而 let 与 const 则会形成块级作用域。不存在变量提升，更不能重复声明。const 用来修饰常量。

变量提升：

```js
console.log(foo); // foo() { console.log(1); }
function foo() {
  console.log(1);
}
var foo = function () {
  console.log(2);
};

var foo = 3;
```

## 2. ES6 中新增的 Set、Map 两种数据结构怎么理解?

在 ES6 中，Set 和 Map 是两种新增的数据结构，它们分别对应着数学中的**集合**和**映射**的概念。

Set 是一种**无序、不重复**的集合，可以用来存储任何类型的值，它的主要特点如下：

- Set 中的值不会重复，如果添加重复的值，只会保留一个；
- Set 中的值是无序的，不会按照添加顺序进行排序；
- Set 可以存储任何类型的值，包括原始类型和对象类型；
- Set 的大小可以动态改变，可以添加、删除、查询集合中的值。

Map 是一种**键值对**的映射表，可以用来存储任何类型的键和值，它的主要特点如下：

- Map 中的键是唯一的，如果添加重复的键，后面的值会覆盖前面的值；
- Map 中的键和值可以是任何类型，包括原始类型和对象类型；
- Map 的大小可以动态改变，可以添加、删除、查询映射表中的键值对；
- Map 中的键值对是有序的，可以按照添加顺序进行遍历。

Set 和 Map 都提供了丰富的操作方法，例如添加、删除、查询等方法，同时它们也都具有迭代器，可以通过迭代器对集合或映射表进行遍历。在实际开发中，Set 和 Map 都可以用来解决一些常见的问题，例如去重、查找、缓存等。

## 3. Map 和 Object 的区别？

JavaScript 中的 Map 和 Object 都是用来存储键值对的数据结构，但是它们有一些区别。

1. 键类型：Object 的键必须是字符串或者 Symbol，而 Map 的键可以是任何类型，包括函数、对象和基本类型。

2. 大小：Object 的大小是不确定的，而 Map 的大小可以通过 size 属性得到。

3. 迭代：Map 有一个 forEach 方法用来遍历所有的键值对，而 Object 需要使用 for...in 或 Object.keys()方法进行遍历。

4. 命名冲突：由于 Object 的键必须是字符串或 Symbol 类型，如果两个属性使用相同的键名，后面的属性会覆盖前面的属性。而在 Map 中，不同类型的键可以使用相同的值而不会发生冲突。

5. 内存：Object 是 JavaScript 中最基本的数据结构之一，因此通常比 Map 更快。但是，当需要存储大量的键值对时，Map 的内存使用更有效率。

总的来说，如果需要存储任意类型的键和值，并且需要快速的遍历和修改键值对，那么使用 Map 更为合适。如果只需要存储简单的键值对，并且需要使用点操作符来访问属性，那么 Object 更适合。

## 4. 你是怎么理解 ES6 中 Promise 的？使用场景？

Promise 是异步编程的一种解决方案。常用来封装一个异步操作并获取其结果。跟回调函数比，有着明显的优势：

1. 链式调用，解决了回调地狱
2. 可以在 then 中指定回调，而不是在异步操作执行前指定回调

有三种状态：pending, resolved, rejected。

1. 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态。
2. 一旦状态改变（从 pending 变为 fulfilled 和从 pending 变为 rejected），就不会再变，任何时候都可以得到这个结果

异常穿透：异常会一直向后传递，直到捕获为止。

可以通过返回一个 Pending 的 Promise 来中断 Promise 链

最常用的就是封装 ajax 请求，我们常用的 axios 库就是基于 Promise 封装的 ajax

## 5. 怎么理解 ES6 中 Generator 的？使用场景？

一个 Generator 函数如下：

```js
function* gen() {
  yield 'hello';
  yield 'world';
  return 'ok';
}

let g = gen();

console.log(g.next()); // {value: 'hello', done: false}
console.log(g.next()); // {value: 'world', done: false}
console.log(g.next()); // {value: 'ok', done: true}
console.log(g.next()); // {value: undefined, done: true}
```

其中, yield 表达式可以暂停函数执行，next 方法用于恢复函数执行

Generator 函数会返回一个迭代器对象，所以可以使用 for...of 遍历：

```js
function* gen() {
  yield 'hello';
  yield 'world';
  return 'ok';
}

let g = gen();

for (let i of g) {
  console.log(i); // hello world
}
```

## 6. promise、Generator、async/await 比较

promise 和 async/await 是专门用于处理异步操作的

Generator 并不是为异步而设计出来的，它还有其他功能（对象迭代、控制输出、部署 Interator 接口...）

promise 编写代码相比 Generator、async 更为复杂化，且可读性也稍差

Generator、async 需要与 promise 对象搭配处理异步情况

async 实质是 Generator 的语法糖，相当于会自动执行 Generator 函数

async 使用上更为简洁，将异步代码以同步的形式进行编写，是处理异步编程的最终方案

## 7. 你是怎么理解 ES6 中 Proxy 的？使用场景?

Proxy 其功能非常类似于设计模式中的代理模式，常用功能如下：

1. 拦截和监视外部对对象的访问
2. 降低函数或类的复杂度
3. 在复杂操作前对操作进行校验或对所需资源进行管理

```js
const person = {
  name: 'jack',
  age: 18
};

const proxyPerson = new Proxy(person, {
  get: function (target, propKey) {
    console.log('-- 拦截操作 --');
    return Reflect.get(target, propKey);
  }
});

console.log(proxy.age); // -- 拦截操作 --  18
```

## 8. 你是怎么理解 ES6 中 Decorator 的？使用场景？

Decorator 类似设计模式中的装饰器模式。本质就是用来扩展类或者类的属性和方法。

```js
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```

如果一个方法有多个装饰器，就像洋葱一样，先从外到内进入，再由内到外执行

```js
function dec(id) {
  console.log('evaluated', id);
  return (target, property, descriptor) => console.log('executed', id);
}

class Example {
  @dec(1)
  @dec(2)
  method() {}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
```

需要注意的是，装饰器不能用于修饰函数，因为存在函数提升情况。

```js
var counter = 0;
var add = function () {
  counter++;
};
@add
function foo() {}
```

上面的代码，意图是执行后 counter 等于 1，但是实际上结果是 counter 等于 0。因为函数提升，使得实际执行的代码是下面这样。

```js
@add
function foo() {}
var counter;
var add;
counter = 0;
add = function () {
  counter++;
};
```
