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

```

## 10. flat

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

## 15. new 操作符

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

## 29. async...await

## 30. 实现 ajax 请求

## 31. 使用 Promise 封装 ajax 请求
