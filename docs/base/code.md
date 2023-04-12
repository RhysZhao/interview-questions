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

## 4. some

## 5. every

## 6. find

## 7. findIndex

## 8. fill

## 9. reduce

## 10. flat

## 11. instanceOf

## 12. Object.is()

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

## 13. call

## 14. apply

## 15. bind

## 16. Promise

## 17. async...await

## 18. Promise.all

## 19. Promise.race

## 20. new

## 21. Promise.allSettled

## 22. Promise.any
