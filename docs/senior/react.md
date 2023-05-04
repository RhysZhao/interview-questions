<!--
 * Author  rhys.zhao
 * Date  2023-04-25 09:25:50
 * LastEditors  rhys.zhao
 * LastEditTime  2023-04-27 16:48:20
 * Description
-->

# React 学习笔记

## 1. 组件更新机制

有三种情况会触发组件更新：

- props 改变可以触发更新

- setState 可以触发更新

- 父组件更新会触发子组件更新

- this.forceUpdate

出于性能考虑我们可以修改 ShouldComponentUpdate 方法的内容，或者使用 PureComponent。 PureComponent 实现了 ShouldComponentUpdate，只有当 state 或 props 发生变化的时候，组件才会更新。

需要注意的是，ShouldComponentUpdate 是浅比较，也就是说，对于复杂类型，比较的是对象的引用。

## 2. 组件性能优化

- **减轻 state**: 很多不触发页面更新的变量，避免放到 state 中
- **使用 PureComponent,或者实现 ShouldComponentUpdate**: 避免不必要的更新

## 3. 组件

在 React 每一次组件的使用，都是在直接调用对应的组件函数。不要用执行的方式去调用组件。重新渲染 === 调用组件函数

```js
<App />; // 组件调用

{
  App(); // 执行的方式
}
```

React 对组件有一些要求：

1. 组件名必须大写

- React 会把小写的当做 dom 元素，大写开头的当做组件。

2. 组件必须返回可以渲染的东西

- null
- React 元素
- 组件
- 可以被迭代的对象(symbol[Iterator])

出于性能考虑，状态更新是批量进行的，因此是异步的。

## 4. 事件机制

React 元素上的事件 onClick, onMouseOver 等都不是真实的事件，而是 React 自己实现的合成事件 SyntheticBaseEvent。
root 挂载的执行过程中，React 会收集所有元素上的事件，并委托到根元素上。

点击 dom 元素，dom 元素会触发两种事件 原生事件 和 react 合成事件。

如果直接在 dom 中绑定了原生事件，那么原生事件会先触发。然后冒泡到根元素，根元素根据 e.target 来触发对应的 React 合成事件回调。

在 React 元素中的事件使用 `e.stopPropagation()`可以阻止父元素的合成事件触发。

在原生事件中使用`e.stopPropagation()`则会导致 React 合成事件失效。因为点击事件不能够冒泡到根元素。

React17 中的事件流程，可简单理解如下：

React Element 捕获 --> root 捕获 --> dom 捕获 --> dom 冒泡 --> root 冒泡 --> React Element 冒泡

## 5. fiber 架构

## 6. react 调度机制

## 7. react 调度优先级

## 8. react commit

## 9. react render

## 10. hooks 原理
