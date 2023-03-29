# JavaScript

## 1. 面试官：说说 Javascript 中的数据类型？如何区分?

Javascript 数据类型分为简单类型和引用类型。<br>
简单数据类型有 6 种: number, string, null, undefined, boolean, symbol<br>
引用类型只有一种 object, 包括数组、对象和函数。<br>

基本类型数据保存在在栈内存中。<br>
引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中。<br>

需要注意的是,我们在声明的时候并不能确认数据类型，只有到运行期间才会确定当前类型。<br>
确认数据类型的话，可以使用 `typeOf`。但是 `typeof(null)` 会返回 object，并且 typeof 不能区分函数、数组和对象。<br>
比较推荐用 `Object.prototype.toString.call()`来判断, 能够精确的返回数据的类型,包括日期/正则表达式/函数类型。

代码如下:

```
typeof(null) // object
Object.prototype.toString.call(null) // [object Null]
Object.prototype.toString.call([]) // [object Array]
Object.prototype.toString.call({}) // [object Object]
Object.prototype.toString.call(3) // [object Number]
Object.prototype.toString.call('test') // [object String]
Object.prototype.toString.call(/^abc/) // [object RegExp]
Object.prototype.toString.call(new Date()) // [object Date]
Object.prototype.toString.call(() => {})) // [object Function]
```

## 2. 面试官：JavScript 数组的常用方法有哪些？

- 增：
  `push`: 向数组末尾插入任意数量的参数。返回数组的最新长度。改变原有数组。

```
let colors = ['red'];
const len = colors.push('green', 'blue');
console.log(len); // 3
console.log(colors); // ['red', 'green', 'blue']
```

`unshift`: 向数组开头插入任意数量的参数。返回数组的最新长度。改变原有数组。

```
let colors = ['red'];
const len = colors.unshift('green', 'blue');
console.log(len); // 3
console.log(colors); // ['green', 'blue', 'red']
```

`splice`: 传入三个参数，分别是开始位置，删除的元素个数，插入的元素。返回删除元素组成的数组。改变原有数组。

```
let colors = ['red', 'green', 'blue'];
let removeList = colors.splice(1, 0, 'yellow', 'black');
console.log(removeList); // []
console.log(colors); // ['red','yellow', 'black', 'green', 'blue']
```

`concat`: 创建一个当前数组的副本，并把参数添加到副本末尾。常用来合并多个数组。不改变原有数组。

```
let colors = ['red'];
let newColors = colors.concat('green', 'blue', ['yellow']);
console.log(newColors); // ['red', 'green', 'blue', 'yellow']
console.log(colors); // ['red']
```

- 删：
  `pop`: 删除数组的最后一个元素。返回被删除的元素。改变原有数组。
  `shift`: 删除数组的第一个元素。返回被删除的元素。改变原有数组。
  `splice`: 改变原有数组。返回被删除元素组成的数组。

```
let colors = ['red', 'green', 'blue'];
let removeList = colors.splice(1, 2);
console.log(removeList); // ['green', 'blue']
console.log(colors); // ['red']
```

`slice`: 分割数组，不影响原有数组。

```
let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink'];
let newColors = colors.slice(2, 4);
console.log(newColors); // ['blue', 'yellow']
console.log(colors); // ['red', 'green', 'blue', 'yellow', 'orange', 'pink']
```

- 改：
  `splice`：同上面。返回被删除元素的数组。改变原有数组
- 查：
  `indexOf`: 返回要查找的元素在数组中的位置，如果没找到则返回 -1
  `includes`: 数组是否包含某个元素。返回 true 或 false
  `find`: 查找满足某个条件的元素。返回第一个满足条件的元素。
  `findIndex`: 查找满足某个条件的元素索引。返回第一个满足条件的元素索引。
- 排序：
  `reverse`: 反转数组。改变原有数组。返回新数组。

```
let a = [1, 2, 3, 4, 5];
let newArr = a.reverse();
console.log(newArr); // [5, 4, 3, 2, 1]
console.log(a); // [5, 4, 3, 2, 1]
```

`sort`: 数组排序。改变原有数组。返回新数组。

```
let a = [1, 2, 3, 4, 5];
let newArr = a.sort((x, y) => y - x);
console.log(newArr); // [5, 4, 3, 2, 1]
console.log(a); // [5, 4, 3, 2, 1]
```

- 迭代(都不改变原有数组)：
  `forEach`: 对数组的每一项都运行传入的函数。没有返回值。
  `map`: 对数组的每一项都运行传入的函数。返回每次结果组成的新数组。
  `filter`: 对数组的每一项都运行传入的函数。返回过滤后的数组。
  `some`: 对数组的每一项都执行操作，如果有一个返回 true. 则结果就为 true
  `every`: 对数组的每一项都执行操作，只有所有项都返回 true. 结果才为 true

转换(不改变原有数组)：
`join`: 接收一个参数作为分隔符，分割数组所有元素。返回分割后的字符串。不传参默认分隔符为 `,`

```
let a = [1, 2, 3];
a.join(); // 1,2,3
a.join('|'); // 1|2|3
```

## 3. 面试官：Javascript 字符串的常用方法有哪些？

- 增：
  `concat`: 用于将一个或多个字符串拼接成一个新字符串。不改变原字符串。

```
let str = 'hello';
let newStr = str.concat(' ', 'world', '!');
console.log(newStr); // 'hello, world!'
console.log(str); // 'hello'
```

- 删(都不改变原有数组)：
  `slice`: 切割字符串。返回切割后的字符串。不改变原有字符串。
  `substring`: 切割字符串。返回切割后的字符串。不改变原有字符串。
  `substr`: 跟`substring`的区别是第二个参数是长度，而不是结束节点的索引。
- 改(都不改变原有数组)：
  `trim()、trimLeft()、trimRight()`: 去除空格。并返回新的字符串。
  `repeat()`: 接收一个整数参数，表示要将字符串复制多少次，然后返回拼接后的结果
  `padStart()、padEnd()`: 复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件.
  `toLowerCase()、 toUpperCase()`: 大小写转换。

- 查：
  `charAt`: 返回给定索引位置的字符.

```
'hello'.charAt(1); // 'e'
```

`at`: 返回给定索引位置的字符，支持负数。

```
'hello'.at(-1); // 'o'
```

`indexOf`: 从字符串开头去搜索传入的字符串，并返回位置（如果没找到，则返回 -1 ）
`startWith`: 字符串是否以参数开头，返回 true 或 false.
`includes`: 字符串是否包含 参数，返回 true 或 false.

- 转换：
  `split`: 通过分隔符分割字符串，返回分割后元素的数组。

```
let str = 'test*test*test';
let strArr = str.split('*');
console.log(strArr);
```

## 4. 面试官：谈谈 JavaScript 中的类型转换机制

## 5. 面试官：== 、 === 和 `Object.is()`三者的区别，分别在什么情况使用？

== 在比较中会先进行类型转换，再确定操作数是否相等。分以下几种情况：

- 两个都为简单类型，字符串和布尔值都会转换成数值，再比较

```
2 == true // false
'2' == true // false
'1' == true // true
```

- 简单类型与引用类型比较，对象转化成其原始类型的值通过 `valueOf` 函数，再比较

```
let a = { name: 'Jack', age: 18 };
Object.prototype.valueOf = () => 1;
a == 1; // true
```

- 两个都为引用类型，则比较它们是否指向同一个对象

需要注意的是, null 和 undefined 相等。<br>
NaN 跟谁都不相等。<br>

=== 只有两个操作数在不转换的前提下相等才返回 true。即类型相同，值也需相同。

`Object.is()`与 `===` 只有两处不同:

- +0 不等于-0
- NaN 等于自身

代码如下：

```
+0 === -0 // true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

## 6. 面试官：深拷贝浅拷贝的区别？如何实现一个深拷贝？

JavaScript 数据类型有两种：基本类型和引用类型。

基本类型数据保存在在栈内存中。<br>
引用类型数据保存在堆内存中，引用数据类型的变量存在栈中，指向堆内存中实际对象的地址。

当拷贝类型为引用类型的情况下：<br>
浅拷贝是拷贝一层，属性为对象时，拷贝对象和原对象指向同一个地址。一个对象的修改会影响另一个对象。<br>
深拷贝则是新开内存，拷贝对象和原对象指向不同的地址。因此也不会互相影响。

常用的方法，`Object.assign()`和扩展运算符`...`都属于浅拷贝。<br>
如果要实现深拷贝，有这样几个方法：

- JSON.parse(JSON.stringify()), 需要注意的是，如果深拷贝的对象是函数和 undefined 会报错
- lodash.cloneDeep()
- 自己手写一个深拷贝方法。
  具体方法就是利用递归，只要某个属性是对象类型，就递归；若是其他类型，则直接复制。代码如下：

```
function deepCopy(data) {
    if (typeof data !== 'object' || data === null) { // typeof null 的结果是 object
        return data
    }
    let result = Array.isArray(data) ? [] : {}
    for (let key in data) {
        // for...in 会遍历obj原型上的属性，因此需要用hasOwnProperty(key)来判断下当前属性是否属于obj
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] === 'object') {
                result[key] = deepCopy(data[key])
            } else {
                result[key] = data[key]
            }
        }
    }
    return result
}
```

## 7. 面试官：说说你对闭包的理解**\*\*\*\***\***\*\*\*\***

函数嵌套，内部函数能够访问外部函数的局部变量。

```
function fun() {
    var count = 2
    return function() {
        console.log(count)
    }
}
fun()
```

优点：长外部函数局部变量生命周期
缺点：容易造成内存泄漏，被内部函数访问的变量需要手动回收

## 8. 面试官：说说你对作用域链的理解

我们一般将作用域分成：全局作用域、函数作用域、块级作用域(ES6 新增)。

JavaScript 遵循的是静态作用域，变量被创建时作用域就确定了，而非执行阶段确定的。<br>
比如下面这段代码：

```
var a = 2;
function foo() {
    console.log(a)
}
function bar() {
    var a = 3;
    foo();
}
bar() // 输出2
```

当在 Javascript 中使用一个变量的时候，首先 Javascript 引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域.<br>
如果在全局作用域仍然找不到该变量，它就会在全局范围内隐式声明该变量(非严格模式下)或是直接报错

## 9. 面试官：JavaScript 原型，原型链 ? 有什么特点？

首先需要知道的是，在 JavaScript 里，一切皆对象。

每个构造函数都有一个 prototype 属性，是一个对象，我们称之为原型对象。原型对象有个 constructor 属性，指向这个函数。<br>
prototype 上的属性和方法可以被实例对象调用。<br>

每个对象都有`__proto__`属性，指向其构造函数的原型对象。当我们使用对象的属性时候，如果本身不包含某个属性，就会到其构造函数的原型上查找，而构造函数的原型也是对象，也可以向上查找，直到 null 为止。

看图就明白了：
![](https://upload-images.jianshu.io/upload_images/1745991-df4821f51e5f945a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 10. 面试官：Javascript 如何实现继承？

- 构造函数继承：只能继承构造函数里的属性和方法<br>
  其实就是在子构造函数里面调用父构造函数（需要修改 this 指向），这样就把父构造函数里的属性和方法放到了子构造函数里了。

```
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log('你好');
  };
}
Person.prototype.sing = function () {
  console.log('唱歌');
};

function Student(name, age, score) {
  Person.call(this, name, age); // 由于Person里的this指向为Person的实例，这里修改this指向为Student的实例
  this.score = score;
}

const jack = new Student('Jack', 18, 100);
console.log(jack.name); // Jack
jack.say(); // 你好
jack.sing(); // 无结果，Student没有继承Person原型上的方法
```

- 原型链继承<br>
  通过上面的例子我们可以看出，构造函数继承并不能继承原型链上的方法。那我们怎么才能继承父构造函数原型上的方法呢？<br>
  我们可以把子构造函数原型指向父构造函数的原型。

```
Student.prototype = Person.prototype; // - 原始版 缺陷：Student的原型改变导致Person原型改变，因此不可取
```

原型一样，自然能够继承原型上的方法。
但是这样一来就会出现问题，原型是个对象，是引用类型数据，我们再 **修改`Student.prototype`会导致`Person.prototype`的变化。这是不合理的。** 比如：

```
Student.prototype.dance = function () {
  console.log('跳舞');
};

const jack = new Person('Jack', 18);
jack.dance(); // 跳舞    Person的原型上是没有dance方法的。这里是因为我们扩展了Student的原型导致Person原型变化
```

常用的解决办法是，我们将子构造函数的原型指向福构造函数的一个实例。

```
Student.prototype = new Person();
```

![](https://upload-images.jianshu.io/upload_images/1745991-861aedc643cbeb93.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

前面说过，调用一个函数的属性时，编译器会先看对象本身是否有这个属性，如果没有就到对象的`__proto__`属性上去找，如果还找不到，继续找`__proto__`的`__proto__`属性，直到 null 为止。这样一来，Student 实例就能够调用 Person 实例的方法，从而调用 Person 原型的方法。

- 组合继承<br>
  把构造函数继承和组合继承结合起来就是组合继承了。整体代码如下：

```
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log('你好');
  };
}
Person.prototype.sing = function () {
  console.log('唱歌');
};

function Student(name, age, score) {
  Person.call(this, name, age);
  this.score = score;
}
Student.prototype = new Person();
Student.prototype.constructor = Student; // 修改constructor指向
```

组合继承调用了两次父构造函数，且每创建一个子构造函数，都会生成一个父构造函数实例。还是不够完美。

- 寄生组合继承

```
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log('你好');
  };
}
Person.prototype.sing = function () {
  console.log('唱歌');
};

function Student(name, age, score) {
  Person.call(this, name, age);
  this.score = score;
}
Student.prototype = Object.create(Person.prototype); // Object.create(proto)创建一个对象，这个对象的__proto__属性为proto
Student.prototype.constructor = Student; // 修改constructor指向
```

![](https://upload-images.jianshu.io/upload_images/1745991-09fe4ca0e062f659.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Student 实例能够调用 Student 原型上的方法，而 Student 原型又可以通过`__proto__`获取 Person 原型上的方法。这样就实现了 Student 继承 Person 原型上的方法。

- 使用类

最好用的继承，自然是使用 ES6 里的 class:

```
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    say() {
        console.log(this.name)
    }
}
class Student extends Person {
    ...
}
```

ES6 的 class 本质上还是函数。如果用 babel 转译后会发现，它会被转译成寄生组合继承。

## 11. 面试官：谈谈 this 对象的理解

普通函数，this 指向调用它的那个对象。<br>
箭头函数，没有具体的 this,它的 this 相当于是从上下文继承的,也就是说定义时候的上下文 this(使用 call,apply 等任何方式都无法改变 this 的指向)。<br>

改变 this 指向可以使用 call, bind, apply 方法改变。

## 12. 面试官：JavaScript 中执行上下文和执行栈是什么？

## 13. 面试官：说说 JavaScript 中的事件模型(事件传播机制)

js 事件传播有三个阶段：事件捕获、目标阶段、事件冒泡

- 事件捕获阶段：事件从 document 一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
- 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数
- 事件冒泡阶段：事件从目标元素冒泡到 document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
  一般情况下，默认都是冒泡阶段触发事件，因此事件触发的顺序是从内到外。
  取消默认事件：W3C 的方法是 e.preventDefault()，IE 则是使用 e.returnValue = false

## 14. 面试官：解释下什么是事件代理？应用场景？

    利用事件冒泡的原理，把事件加到父级上，触发执行效果
    好处：减少事件数量，提高性能
    新添加的元素，依然可以触发该事件
    比如一个页面有 100 个按钮，点击每个按钮都会触发某个操作。我们可以给这 100 个按钮的父级添加点击事件，然后再判断是哪个按钮，执行对应的操作。

## 15. 面试官：typeof 与 instanceof 区别

## 16. 面试官：说说 new 操作符具体干了什么？

    创建一个空对象
    由 this 变量引用该对象
    该对象继承构造函数的原型（更改 this 指向）
    把属性和方法加入到 this 引用的对象
    最后隐式的返回 this

```
let obj = {}
obj.__proto__ = Person.prototype
Person.call(obj)
```

## 17. 面试官：ajax 原理是什么？如何实现？

## 18. 面试官：bind、call、apply 区别？如何实现一个 bind?

    call, apply 和 bind 是 Function 原型上的三个方法，都是为了改变函数体内部 this 的指向。
    call、apply、bind 三者第一个参数都是 this 要指向的对象，后面的参数 call 是一个个的参数列表，apply 则是放到数组中的
    bind 是返回一个函数，便于稍后调用。call, apply 则是立即调用

## 19. 面试官：说说你对正则表达式的理解？应用场景？

## 20. 面试官：说说你对事件循环的理解

    js 执行时，遇到同步任务，就将同步任务按照执行顺序排列到执行栈中。
    遇到异步任务，会将此类异步任务挂起，继续执行执行栈中的任务。等异步任务返回结果后，再按照顺序排列到事件队列中。
    主线程先将执行栈中的同步任务清空，然后检查事件队列中是否有任务，如果有，就将第一个事件对应的回调推到执行栈中执行，若在执行过程中遇到异步任务，则继续将这个异步任务排列到事件队列中。
    主线程每次将执行栈清空后，就去事件队列中检查是否有任务，如果有，就每次取出一个推到执行栈中执行，这个循环往复的过程被称为“Event Loop 事件循环”。

## 21. 面试官：DOM 常见的操作有哪些？

## 22. 面试官：说说你对 BOM 的理解，常见的 BOM 对象你了解哪些？

## 23. 面试官：举例说明你对尾递归的理解，有哪些应用场景

## 24. 面试官：说说 JavaScript 中内存泄漏的几种情况？

## 25. 面试官：Javascript 本地存储的方式有哪些？区别及应用场景？

## 26. 面试官：说说你对函数式编程的理解？优缺点？

## 27. 面试官：Javascript 中如何实现函数缓存？函数缓存有哪些应用场景？

## 28. 面试官：说说 Javascript 数字精度丢失的问题，如何解决？

## 29. 面试官：什么是防抖和节流？有什么区别？如何实现？

## 30. 面试官：如何判断一个元素是否在可视区域中？

## 31. 面试官：大文件上传如何做断点续传？

## 32. 面试官：如何实现上拉加载，下拉刷新？

## 33. 面试官：什么是单点登录？如何实现？

## 34. 面试官：web 常见的攻击方式有哪些？如何防御？

## ES6 系列

面试官：说说 var、let、const 之间的区别
面试官：ES6 中数组新增了哪些扩展?
面试官：ES6 中对象新增了哪些扩展?
面试官：ES6 中函数新增了哪些扩展?
面试官：ES6 中新增的 Set、Map 两种数据结构怎么理解?
面试官：你是怎么理解 ES6 中 Promise 的？使用场景？
面试官：怎么理解 ES6 中 Generator 的？使用场景？
面试官：你是怎么理解 ES6 中 Proxy 的？使用场景?
面试官：你是怎么理解 ES6 中 Module 的？使用场景？
面试官：你是怎么理解 ES6 中 Decorator 的？使用场景？
