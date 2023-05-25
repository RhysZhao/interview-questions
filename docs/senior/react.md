<!--
 * Author  rhys.zhao
 * Date  2023-04-25 09:25:50
 * LastEditors  rhys.zhao
 * LastEditTime  2023-05-23 19:35:56
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

## 5. 受控组件&非受控组件

表单组件才会受控。

判断受控与非受控的标准是 是否有受控属性。比如：input 里面，value 就是受控属性。当给 input 设置 value 值后，input 框里出现的文字，不再由用户输入决定，而是由 value 的值决定。

正常情况下，非受控组件就可以解决问题。但是当我们需要操作表单的数据的时候，可能会用到受控组件。比如：一键清除 input 输入框

## 6. useState hook

React 16.8 推出的一个新特性，这个特性允许开发者在函数组件中生成状态 state 以及其他一些属于类组件的问题。

useState 必须写在 React 函数组件作用域的最顶层。useState 的初始值可以是一个值或者纯函数

纯函数：如果我的参数永远一致，那么我的返回值也永远一致。也就是说函数的执行不会依赖任何其他外部因素。

比如：

```js
// 纯函数
function(a, b) {
  return a + b;
}

// 非纯函数，函数的执行依赖外部因素
async function(a, b) {
  const c = await getCount(); // 副作用
  return a + b +c;
}
```

setFunction 不会立即更新，而是在 react 的下一次渲染阶段更新。

引用类型的更新，每次都要传递新的引用才会触发更新。

## 7. useEffect hook

useEffect 官方定义为是用来处理副作用的。两个参数：

- setup
  setup 函数有一个返回值，这个返回值是一个清理函数。会在函数卸载时执行。

- dependencies

副作用：完全不依赖 react 的外部操作。比如：http 请求，dom 操作，异步操作。官方建议将副作用放在 useEffect 里处理。

React 会在组件每次挂载完毕后执行响应的 setup 函数。
当依赖项变更的时候，会执行对应的 setup 函数。

dom 事件绑定，计时器都需要清除。

## 8. 自定义 hook

消除冗余代码，提高代码的可维护性，同时将复杂的逻辑进行内聚，减少出错的可能。

## 9. useCallback hook

useCallback 是用来长期稳定的维护某一个函数引用的。它会将函数创建后的引用保存。下一次更新，直接返回保存的函数引用。

每次函数组件重新渲染都是函数的重新执行，那么重新执行的话，函数的上下文整体就会变化。

这就会导致每次更新都会创建一个新的函数。

useCallback 存在一个依赖，依赖会导致对应的引用重新刷新。

依赖作用:
useEffect: 导致 useEffect 注册函数重新执行。
useCallback: 导致 useCallback 对应的函数引用重新生成。

## 10. useRef hook

useRef: 构建一个状态出来，但是这个状态是直接脱离 react 控制的，它的变化不会造成重新渲染，同时状态还不会因为组件的重新渲染而被初始化。

## 11. key

key 应该来自于我们的数据。如果你在后续插入、删除或重新排序这些项目，React 将依靠你提供的 key 来思考发生了什么。

开发组件的时候，应该保持组件的存粹。对于函数式组件，就是纯函数。

## 12. state

如果它们不相关，那么存在多个 state 变量是一个好主意，例如本例中的 index 和 showMore。但是，如果你发现经常同时更改两个 state 变量，那么最好将它们合并为一个。例如，如果你有一个包含多个字段的表单，那么有一个值为对象的 state 变量比每个字段对应一个 state 变量更方便。

- 如果两个 state 变量总是一起更新，请考虑将它们合并为一个。
- 仔细选择你的 state 变量，以避免创建“极难处理”的 state。
- 用一种减少出错更新的机会的方式来构建你的 state。
- 避免冗余和重复的 state，这样您就不需要保持同步。
- 除非您特别想防止更新，否则不要将 props 放入 state 中。
- 对于选择类型的 UI 模式，请在 state 中保存 ID 或索引而不是对象本身。
- 如果深度嵌套 state 更新很复杂，请尝试将其展开扁平化。

## 13. react state 保留机制

- 相同的位置，渲染不同的组件，组件的整个子树都会重置。
- 如果想要在渲染时保留 state,几次渲染的树形结构就应该互相匹配。

```js
<div>{isPlayerA ? <Counter person='Taylor' /> : <Counter person='Sarah' />}</div>
```

上面这个例子，每次切换的时候，组件的状态会被保留。有两种方案重置 state

- 将组件渲染在不同的位置
- 使用 key 标识这个组件,key 只能用来标识组件/元素在父组件内部的顺序。

```js
<div>
  {isPlayerA ? (
    <div>
      <Counter person='Taylor' />
    </div>
  ) : (
    <section>
      <Counter person='Sarah' />
    </section>
  )}
</div>
```

或

```js
<div>{isPlayerA ? <Counter key='Taylor' person='Taylor' /> : <Counter key='Sarah' person='Sarah' />}</div>
```

- 只要在相同位置渲染的是相同组件， React 就会保留状态。
- state 不会被保存在 JSX 标签里。它与你在树中放置该 JSX 的位置相关联。
- 你可以通过为一个子树指定一个不同的 key 来重置它的 state。
- 不要嵌套组件的定义，否则你会意外地导致 state 被重置。

位置相同，且同一个组件，会复用组件。组件的属性则不会复用。正常改变。
加上 key 之后，会标识这个组件。

## useContext

定义：允许组件通过 props 以外的方法共享数据

## 浏览器渲染帧

浏览器渲染一帧会做哪些事情？

1. 处理交互事件（点击、hover 等）
2. 调用 requestAnimationFrame
3. 回流重绘
4. requestIdleBack()

用来渲染一帧的时间只有 16.6ms,当一帧花费的时间过多，就会掉帧。

## React 渲染原理

1. fiber 架构
2. concurrency - 并发，可中断渲染

React 初次渲染要做的事情？

1. jsx 转化成一个对象
2. 通过 render 方法渲染

- 如果是 react 组件，则会在执行渲染过程中保存对应的 hook 上以及触发对应的 hooks（比如 useState 要立即触发的，但是 useEffect 要留存到 dom 挂载完毕以后触发）
- 如果是 react 元素节点，会生成一个描述对象，这个描述对象就是 fiber

3. 通过整个清单将清单内的东西编译成真实 dom，然后插入父元素的子节点 appendChild
4. 等整个渲染流程结束以后，得到一个真实 dom 树，挂载到 root 元素上
5. 触发对应的生命周期函数

再次渲染（更新）做的事情？
生成一个 react 节点

- 不会全部重新生成，比如 Counter 组件的状态变化了，Counter 以及 Counter 下的所有组件全部重新生成 react 节点
- diff 算法，比较已 Counter 为根元素的两棵树的差异
- diff 算法完结后生成一个清单，也就是 fiber 清单，记录 fiber 节点的操作是（create, delete, update）
- 将差异应用到真实 dom 上去
- 触发对应的生命周期函数
