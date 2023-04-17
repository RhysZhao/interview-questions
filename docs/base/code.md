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

```js
/**
 * 构造函数
 * @param {function} executor 执行器函数，有两个函数类型的参数：resolve, reject
 */
function Promise(executor) {
  const self = this;
  self.status = PENDING;
  self.data = undefined; // 用来保存Promise的结果
  self.callbacks = []; // 用来保存回调函数对象数组，每一项的结构为{ onResolved, onRejected }

  function resolve(value) {
    if (self.status !== PENDING) {
      // Promise只能执行一次
      return;
    }
    self.status = RESOLVED;
    self.data = value;
    if (self.callbacks.length > 0) {
      // 如果回调函数对象数组不为空，则异步执行每一项的onResolved方法
      setTimeout(() => {
        self.callbacks.forEach((callbackObj) => {
          callbackObj.onResolved(value);
        });
      });
    }
  }

  function reject(reason) {
    if (self.status !== PENDING) {
      return;
    }
    self.status = REJECTED;
    self.data = reason;
    if (self.callbacks.length > 0) {
      setTimeout(() => {
        self.callbacks.forEach((callbackObj) => {
          callbackObj.onRejected(reason);
        });
      });
    }
  }

  try {
    executor(resolve, reject); // 一旦创建，立即执行
  } catch (err) {
    // 如果出现异常，则将该异常作为失败的结果
    reject(err);
  }
}

/**
 * then()方法，返回一个新Promise, 新Promise的执行结果取决于上一个Promise的返回值
 * 1. 如果抛出异常，新Promise的执行结果rejected, reason为抛出的异常
 * 2. 如果返回值是Promise, 新Promise的执行结果为上一个Promise的执行结果
 * 3. 如果返回值是非Promise, 新Promise的执行结果resolved, value为返回值
 * @param {function} onResolved Promise执行成功的回调，异步回调，接收一个参数value(Promise执行成功的结果)
 * @param {function} onRejected Promise执行失败的回调，异步回调，接收一个参数reason(Promise执行失败的结果)
 */
Promise.prototype.then = function (onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : (value) => value;
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : (reason) => {
          throw reason;
        };
  const self = this;
  return new Promise((resolve, reject) => {
    function handle(callback) {
      try {
        let result = callback(self.data);
        if (result instanceof Promise) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (err) {
        reject(err);
      }
    }
    if (self.status === RESOLVED) {
      setTimeout(() => {
        handle(onResolved);
      });
    } else if (self.status === REJECTED) {
      setTimeout(() => {
        handle(onRejected);
      });
    } else if (self.status === PENDING) {
      self.callbacks.push({
        onResolved: () => handle(onResolved),
        onRejected: () => handle(onRejected)
      });
    }
  });
};
```

## 25. Promise.all

```js
/**
 * Promise.all
 * @param {array} promiseList promise列表
 * @returns 返回一个Promise：若都成功，则返回所有promise结果的数组，若有一个失败则为失败的结果
 */
Promise.all = function (promiseList) {
  let resultList = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promiseList.forEach((item) => {
      const promise = item instanceof Promise ? item : Promise.resolve(item);
      promise.then((value) => {
        count++;
        resultList.push(value);
        if (count === promiseList.length) {
          resolve(resultList);
        }
      }, reject);
    });
  });
};
```

## 26. Promise.race

```js
/**
 * Promise.race
 * @param {array} promiseList promise列表
 * @returns 返回一个promise，结果为最先执行完 promise 的结果
 */
Promise.race = function (promiseList) {
  return new Promise((resolve, reject) => {
    promiseList.forEach((item) => {
      const promise = item instanceof Promise ? item : Promise.resolve(item);
      promise.then(resolve, reject);
    });
  });
};
```

## 27. Promise.allSettled

```js
/**
 * Promise.allSettled
 *  @param {array} promiseList promise列表
 * @returns 返回一个promise，结果为所有promise都执行完的结果
 */
Promise.allSettled = function (promiseList) {
  let resultList = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promiseList.forEach((item) => {
      const promise = item instanceof Promise ? item : Promise.resolve(item);
      promise
        .then(
          (value) => {
            count++;
            resultList.push({
              status: 'fulfilled',
              value
            });
          },
          (reason) => {
            count++;
            resultList.push({
              status: 'rejected',
              reason
            });
          }
        )
        .then(() => {
          if (count === promiseList.length) {
            resolve(resultList);
          }
        });
    });
  });
};
```

## 28. Promise.any

```js
/**
 * Promise.any
 *  @param {array} promiseList promise列表
 * @returns 返回一个promise，如果有一个成功就返回成功的结果，都不成功则reject，reason为AggregateError: All promises were rejected
 */
Promise.any = function (promiseList) {
  let count = 0;
  return new Promise((resolve, reject) => {
    promiseList.forEach((item) => {
      const promise = item instanceof Promise ? item : Promise.resolve(item);
      promise
        .then(resolve, () => {
          count++;
        })
        .then(() => {
          if (count === promiseList.length) {
            reject('AggregateError: All promises were rejected');
          }
        });
    });
  });
};
```

## 29. 实现 ajax 请求

```js
function ajax(url, method, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        success(xhr.responseText);
      } else {
        error(xhr.status);
      }
    }
  };
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
}

// 接口请求示例
ajax(
  '/api/login',
  'POST',
  { username: 'Tom', password: '123456' },
  function (response) {
    console.log('登录成功：' + response);
  },
  function (status) {
    console.log('登录失败：' + status);
  }
);
```

## 30. 使用 Promise 封装 ajax 请求

```js
const ajaxPromise = (url, method, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.status);
        }
      }
    };
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  });
};
```
