# 手写题

## 1. forEach

```js
Array.prototype.forEach = function (callback) {
  for (let i = 0, len = this.length; i < len; i++) {
    callback(this[i], i, this);
  }
};
```

## 2. map

```js
Array.prototype.map = function (callback) {
  let arr = [];
  for (let i = 0, len = this.length; i < len; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};
```

## 3. filter

```js
Array.prototype.filter = function (callback) {
  let result = [];
  for (let i = 0, len = this.length; i < len; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};
```

## 4. some

```js
Array.prototype.some = function (callback) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};
```

## 5. every

```js
Array.prototype.every = function (callback) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};
```

## 6. find

```js
Array.prototype.find = function (callback) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
};
```

## 7. findIndex

```js
Array.prototype.findIndex = function (callback) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (callback(this[i])) {
      return i;
    }
  }
  return -1;
};
```

## 8. fill

```js
Array.prototype.fill = function (value) {
  let result = [];
  for (let i = 0, len = this.length; i < len; i++) {
    result.push(value);
  }
  return result;
};
```

## 9. reduce

```js
Array.prototype.reduce = function (callback, initValue) {
  let preValue = initValue || this[0];
  let i = initValue ? 0 : 1;

  for (len = this.length; i < len; i++) {
    preValue = callback(preValue, this[i], i, this);
  }
  return preValue;
};
```

## 10. flat(depth)

```js
Array.prototype.flat = function (depth) {
  let result = this;
  while (depth > 0) {
    result = [].concat(...result);
    depth = depth - 1;
    // 没有数组则不等depth减为0就退出循环
    if (result.every((item) => !Array.isArray(item))) {
      break;
    }
  }
  return result;
};
```

## 11. Object.is

```js
Object.prototype.is = function (obj1, obj2) {
  // 处理NaN的情况
  if (obj1 !== obj1) {
    return obj1 + '' === obj2 + '';
  }
  // 处理+0 和 -0的情况
  if (obj1 === 0) {
    return obj1 / 1 === obj1 / 2;
  }

  return obj1 === obj2;
};
```

## 12. Object.create

```js
function objectCreate(proto) {
  function Fn() {}
  Fn.prototype = proto;
  return new Fn();
}
```

## 14. instanceof

```js
// 主要是判断obj是否出现在instance的原型链上
function instanceOf(instance, obj) {
  let proto = instance.__proto__;
  while (proto) {
    if (proto === obj.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}
```

## 15. new 操作符

```js
function myNew(fn, ...args) {
  if (typeof fn !== 'function') {
    throw new TypeError('fn必须是函数类型');
  }
  let result = Object.create(fn.prototype);
  fn.call(result, ...args);
  return result;
}
```

## 16. call

```js
Function.prototype.call = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('必须是函数类型才能调用call');
  }
  context = context || window;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
};
```

## 17. apply

```js
Function.prototype.apply = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('必须是函数类型才能调用apply');
  }
  context = context || window;
  context.fn = this;
  const result = context.fn([...args]);
  delete context.fn;
  return result;
};
```

## 18. bind

bind 在 call 的基础上实现比较简单，如下：

```js
Function.prototype.bind = function (context, ...args) {
  const self = this;
  return function (...args2) {
    return self.call(context, ...args, ...args2);
  };
};
```

## 19. debounce

```js
function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, wait);
  };
}
```

## 20. throttle

```js
function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    let nowTime = Date.now();
    if (nowTime - lastTime > wait) {
      fn.call(this, ...args);
      lastTime = nowTime;
    }
  };
}
```

## 21. cloneDeep

```js
function cloneDeep(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = cloneDeep(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
```

## 22. 函数柯里化

```js
function currying(fn, ...args) {
  return function (...args2) {
    let argsAll = [...args, ...args2];
    return argsAll.length >= fn.length ? fn.call(this, ...argsAll) : currying.call(this, fn, ...argsAll);
  };
}
```

或

```js
function currying(fn, ...args) {
  return args.length >= fn.length ? fn(...args) : currying.bind(null, fn, ...args);
}
```

## 23. 寄生组合继承

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function () {
  console.log('说话');
};

// 下面是寄生组合继承的代码，Student继承自Person
function Student(name, age, height) {
  Person.call(this, name, age);
  this.height = height;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
```

## 24. Promise

## 25. Promise.all

## 26. Promise.race

## 27. Promise.allSettled

## 28. Promise.any

## 29. 实现 ajax 请求

## 30. 使用 Promise 封装 ajax 请求
