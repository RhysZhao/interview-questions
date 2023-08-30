<!--
 * Author  rhys.zhao
 * Date  2023-03-29 15:48:33
 * LastEditors  rhys.zhao
 * LastEditTime  2023-08-21 09:54:54
 * Description
-->

# CSS

## 1. 说说你对盒子模型的理解?

当浏览器对一个文档进行布局时，浏览器会依据盒模型原则来对每一个元素进行渲染，将每一个元素渲染成为一个矩形盒子。
这个矩形盒子会有四个属性，从内到外分别是 content、padding、border、margin。

content 表示的是实质内容。
padding 表示的是内填充。
border 表示的盒子的边框。
margin 表示的是盒子的外边距。

盒模型有 2 类，第一类是标准盒模型，是目前浏览器默认使用的盒模型，第二类是 IE 盒模型。
这 2 类盒模型最主要的区别还是在 width 和 height 的含义上

在标准盒模型中，width、height 代表的是 content 的宽高
在 IE 盒模型中，width、height 代表的是 content + padding + border 的宽高
这 2 类模型是可以使用一个 css 属性来切换的，那就是 `box-sizing`。

`box-sizing: content-box;` 代表的是标准盒模型，
`box-sizing: border-box;` 代表的是 IE 盒模型。

## 2. css 选择器有哪些？优先级？哪些属性可以继承？

CSS 选择器是用于选择特定 HTML 元素的规则集合。以下是一些常见的 CSS 选择器：

1. 类选择器（Class Selector）：以“.”开头，选择具有指定类名的元素。
   例如：`.example { color: red; }`

2. ID 选择器（ID Selector）：以“#”开头，选择具有指定 ID 的元素。
   例如：`#example { color: blue; }`

3. 元素选择器（Element Selector）：选择特定类型的 HTML 元素。
   例如：`p { font-size: 16px; }`

4. 后代选择器（Descendant Selector）：选择某个元素的后代元素。
   例如：`ul li { list-style: none; }`

5. 子元素选择器：选择某个元素的子元素
   例如：`ul > li {list-style: none;}`

一般而言，选择器的优先级如下：
ID 选择器 > 类选择器 > 元素选择器 > 子元素选择器 > 后代选择器

常见的可以继承的属性：

1. 字体属性（font-family、font-size、font-weight 等）
2. 文本属性（color、line-height、text-align 等）
3. 列表属性（list-style-type、list-style-position 等）

## 3. 说说 px/em/rem/vh/vw 区别?

1. px (像素)：是相对于显示器屏幕分辨率的单位，1px 表示显示器上的一个物理像素点。由于像素点数量与显示器大小有关，因此在不同的显示器上，同样的像素数可能会显示不同的物理大小。

2. em (字号)：是相对于当前元素的字号的单位。例如，如果一个元素的字号为 16px，那么 1em 等于 16px。如果将 em 应用于嵌套元素中，则基于父元素的字号来计算。

3. rem (根字号)：是相对于根元素（html）的字号的单位。例如，如果根元素的字号为 16px，那么 1rem 等于 16px。rem 通常被认为是一种更好的字号单位，因为它不会受到嵌套元素的影响，只受到根元素字号的影响。

4. vh (视窗高度)：是相对于视口高度的单位，1vh 表示视口高度的 1%。

5. vw (视窗宽度)：是相对于视口宽度的单位，1vw 表示视口宽度的 1%。

## 4. 说说设备像素、css 像素、设备独立像素、dpr、ppi 之间的区别？

设备像素（Device Pixel）是显示设备中最小的物理像素，它是组成屏幕的基本元素。设备像素是硬件决定的，它们的数量是固定的，一般表示为屏幕分辨率的宽度和高度，如 1920x1080。

CSS 像素（CSS Pixel）是相对单位，它是 CSS 布局中的基本单位，它不是一个物理像素，而是一个抽象的像素，可以通过 CSS 控制大小。在未经缩放的情况下，1 个 CSS 像素等于 1 个设备像素，也就是 1:1 的比例。

设备独立像素（DIP，Device Independent Pixel），也称为逻辑像素，是一个抽象的概念，是一个和设备无关的长度单位，它是由设备像素密度（DPI，Dots Per Inch）和缩放因子（Scale Factor）计算得出的。缩放因子通常为 1，但在高分辨率屏幕（如 Retina 屏幕）上，缩放因子可能会大于 1，因此，DIP 数量相对于设备像素数量更少。

DPR（Device Pixel Ratio）是设备像素密度和 CSS 像素之间的比例关系。DPR = 设备像素数量 / CSS 像素数量。DPR 值越高，屏幕显示的图像就越清晰，也越耗费设备的资源。

PPI（Pixels Per Inch）是指每英寸的像素数量，是设备像素密度的单位。PPI 值越高，像素的数量就越多，显示的图像就越清晰。

总之，设备像素是硬件物理像素，CSS 像素是网页设计中的抽象像素，设备独立像素是一个和设备无关的长度单位，DPR 是设备像素和 CSS 像素之间的比例关系，PPI 是设备像素密度的单位。在开发网页时，需要考虑不同设备的像素密度和缩放因子，使用合适的单位进行布局和设计。

## 5. css 中，有哪些方式可以隐藏页面元素？区别?

1. `display: none`
   隐藏当前元素，且该元素的占有的位置空间不再保留。

2. `visibility: hidden`
   隐藏当前元素，但是保留该元素的位置空间。

3. `opacity: 0`
   该元素依然存在，但是完全透明

4. `position: absolute; left: -99999px;`
   该元素依然存在，只不过在页面里不可见。

## 6. 谈谈你对 BFC 的理解？

BFC 即块级格式化上下文。一个 BFC 就是一个独立的空间，空间内的子元素与外面的布局互不干扰。

同一个 BFC 中的元素会出现 margin 重叠的现象。解决办法就是将出现 margin 重叠的元素各自放到一个 BFC.

触发 BFC 的情况：

1. 根元素
2. float 属性不为 none
3. position 为 absolute 或 fixed
4. display 为 inline-block, table-cell, table-caption, flex, inline-flex
5. overflow 不为 visible

## 7. 元素水平垂直居中的方法有哪些？如果元素不定宽高呢？

内部元素宽高不确定：

1. flex 布局

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.child {
}
```

2. absolute + transform

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

3. absolute

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

4. grid

```css
.parent {
  display: grid;
  place-items: center;
}

.child {
}
```

内部元素宽高确定的话，可以用 absolute 配合 calc 处理：

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  width: 200px;
  height: 200px;
}
```

## 8. 怎么理解回流跟重绘？什么场景下会触发？

回流（reflow）和重绘（repaint）是指浏览器在渲染页面时发生的两个不同的过程。

回流是指当渲染树中的元素因为样式等属性的改变而需要重新构建，导致整个文档的布局发生变化时触发的过程。回流会比较耗费性能，因为它涉及到重新计算每个元素的位置和大小。

重绘是指当元素的外观（例如颜色、边框等）发生改变，但不影响其布局时触发的过程。重绘的开销相对于回流要小得多。

以下是一些可能触发回流和重绘的情况：

1. 添加、删除、修改 DOM 节点时；
2. 修改元素的样式（如改变宽高、字体、颜色等）；
3. 改变元素的尺寸或位置时，或者窗口大小发生改变时；
4. 滚动页面时；
5. 读取一些元素的计算样式（例如 offsetWidth、offsetHeight、clientWidth、clientHeight 等）。

为了优化性能，应该尽量避免频繁的回流和重绘操作。可以通过以下方法来减少回流和重绘：

1. 尽量减少 DOM 的操作次数，可以考虑一次性修改多个属性，或者使用文档片段（document fragment）来批量插入多个元素；
2. 使用 class 替代样式属性的操作，可以使用 classList 属性来添加或删除 class；
3. 尽量使用 transform 和 opacity 属性来代替 top、left、width、height 等属性的操作；
4. 避免频繁读取计算样式，可以把需要用到的属性缓存起来；
5. 避免频繁操作需要回流的元素，可以使用 position: absolute 或 fixed 来脱离文档流。

回流一定会触发重绘，重绘不一定触发回流。

## 9. 什么是响应式设计？响应式设计的基本原理是什么？如何做？

响应式是指网页在不同尺寸的屏幕上能够有良好的显示效果，提供最佳的用户体验。

基本原理是是用媒体查询，根据不同的屏幕宽度来做区分，从而展示不同的样式。

比较常用的方式：

1. 媒体查询

- 选择屏幕大小分割点

- 编写不同的样式

2. rem 布局
3. 百分比布局
4. 结合 flex，grid，BFC，栅格系统等已经成型的方案

## 10. 如果要做优化，CSS 提高性能的方法有哪些？

CSS 的性能优化可以从以下几个方面入手：

1. 尽可能减少 CSS 文件的大小：CSS 文件越大，加载的时间就越长，因此需要尽可能减小文件的大小。可以通过使用压缩工具（例如 UglifyCSS）来删除不必要的空格、注释和换行符。

2. 使用最小化的 CSS：在编写 CSS 时，尽可能使用最小化的代码，例如使用缩写属性、减少重复代码等，以减少文件的大小。

3. 避免使用昂贵的选择器：使用昂贵的选择器（例如后代选择器、通用选择器等）会增加渲染时间。应该尽可能使用简单的选择器，例如类选择器和 ID 选择器。

4. 避免使用过多的浮动元素：浮动元素会影响页面的渲染速度。应该尽可能避免使用过多的浮动元素。

5. 使用媒体查询：媒体查询可以根据不同的设备和屏幕尺寸加载不同的 CSS 样式，从而减少不必要的加载时间。

6. 使用字体图标：字体图标比图像文件更小，加载更快。可以使用字体图标来代替图像文件，从而减小文件的大小。

7. 使用 CSS Sprites：CSS Sprites 可以将多个图像合并为一个图像，减少 HTTP 请求次数，从而提高页面加载速度。

8. 避免使用 !important：!important 可以覆盖其他样式，但是会影响页面的渲染速度。应该尽可能避免使用 !important。

9. 避免重绘和重排：重绘和重排会影响页面的性能。应该尽可能避免使用会引起重绘和重排的属性，例如 width 和 height 等。

## 11. 如何实现单行／多行文本溢出的省略样式？

1. 单行文本溢出

```css
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

2. 多行文本溢出

```css
p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

## 12. CSS 如何画一个三角形？原理是什么？

使用 border 来画, 代码如下：

```css
.box {
  width: 0;
  height: 0;
  border-top: 50px solid blue;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}
```

## 13. 让 Chrome 支持小于 12px 的文字方式有哪些？区别？

Chrome 中文版浏览器会默认设定页面的最小字号是 12px，英文版没有限制
原因是 Chrome 团队认为汉字小于 12px 就会增加识别难度
浏览器默认设定页面的最小字号，用户可以前往 chrome://settings/fonts 根据需求更改

而我们在实际项目中，不能奢求用户更改浏览器设置。对于文本需要以更小的字号来显示，就需要用到一些小技巧
常见的解决方案有：

1. zoom 非标属性，有兼容问题，缩放会改变了元素占据的空间大小，触发重排

2. `transform:scale()` 大部分现代浏览器支持，并且对英文、数字、中文也能够生效，缩放不会改变了元素占据的空间大小，页面布局不会发生变化

## 14. 如何使用 css 完成视差滚动效果?

[https://juejin.cn/post/7144366818201698341](https://juejin.cn/post/7144366818201698341)

## 15. css3 动画有哪些？

1. transition 过渡动画：

transition 可以让元素在某个属性值发生变化时平滑地过渡到新的属性值，从而实现动画效果。常见的属性包括：background-color、color、width、height、transform 等。示例代码如下：

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: background-color 1s ease;
}

.box:hover {
  background-color: blue;
}
```

2. transform 变形动画：

transform 可以让元素在平移、旋转、缩放、倾斜等方面发生变化，从而实现动画效果。常见的 transform
属性包括：translate、rotate、scale、skew 等。示例代码如下：

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: transform 1s ease;
}

.box:hover {
  transform: rotate(360deg) scale(2);
}
```

3. animation 关键帧动画：

animation 可以让元素在不同的关键帧（keyframe）之间发生变化，从而实现动画效果。常见的 animation 属性包括：animation-name、animation-duration、animation-timing-function、animation-delay、animation-iteration-count、animation-direction 等。示例代码如下：

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  animation: myAnimation 2s ease infinite;
}

@keyframes myAnimation {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
}
```

## 16. 说说对 Css 预编语言的理解？有哪些区别?

比较常用的有 sass 与 less.

1. 变量

```scss
$primary-color: #409eff;
```

```less
@primary-color: #409eff;
```

2. 嵌套

3. 模块化
   二者一致，均用 @import 引入

```scss
@import '../index.scss';
```

```less
@import '../index.scss';
```

4. mixins

```scss
@mixin large-text {
  font: Arial 20px #ff0000;
  color: #ff0000;
}

.title {
  @include large-text;
  margin-top: 10px;
  padding: 4px;
}
```

```less
.highlight(@color: red) {
  font-size: 14px;
  color: @color;
}

.heads-up {
  .alert;
  .highlight(red);
}
```

## 17. 为什么有时候用 translate 来改变位置，而不是通过定位?

使用 translate 来改变位置，是出于性能的考虑。

translate 是 transform 的一个属性。transform 是合成属性，不会触发重排和重绘，只会触发合成。因此可以使用 transform 来创建平滑的动画。

而定位则会触发重新布局，进而重排、重绘以及合成。性能更差一些。

## 18. link 与@import 的区别

@import 引入的样式，会在页面加载完毕后被加载，容易出现闪屏的问题。因此不建议使用@import.

## 19. flex 属性是哪三个属性缩写，有什么用？

flex 是 flex-grow, flex-shrink, flex-basis 的缩写。

flex-grow 用来根据权重评分剩余空间。

flex-shrink 用来根据权重缩小，处理父盒子溢出的问题。

flex-basis 是盒子的大小。

几个属性优先级关系：

max-width/min-width > flex-basis > width > box

## 20. css 性能优化

- 删除无用 css
- 合并和压缩 css
- 使用精灵图
- 避免使用@import
- 减少重排和重绘：避免不了可以脱离文档流，避免整个文档的重排和重绘

## 21. css 工程化

- 使用 sass 或者 less 预处理语言
- 使用变量来统一管理样式变量
- 使用 mixin 来复用同样的样式代码
- 使用 stylelint 来统一样式规范，尤其是样式顺序
- 使用 css Module，避免样式冲突
- 使用 webpack 等打包工具，合并、压缩 css
