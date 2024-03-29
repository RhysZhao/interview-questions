<!--
 * Author  rhys.zhao
 * Date  2023-05-26 13:46:34
 * LastEditors  rhys.zhao
 * LastEditTime  2023-07-21 17:20:34
 * Description
-->

# 浏览器原理

## 浏览器的主要功能

浏览器的主要功能就是**发出请求，并在浏览器窗口展示你选择的网络资源**。这里的网络资源一般是指 HTML 文档，也可以是 PDF、图片或者其他类型。

## 进程与线程

进程：运行的程序实例。**CPU 资源分配的最小单位。系统会分配独立的一块内存。**

线程：**CPU 调度的最小单位**。不会分配独立的内存。

可以这样理解：

进程好比是工厂。不同工厂之间是独立的。也就是说**各个进程间是独立的**。

线程好比是工人。**一个进程可以有一个或多个线程。同一进程下的多个线程共享内存**。

## 浏览器是多进程的

### 多进程的优势

浏览器是多进程的。这是出于以下两个方面的考虑：

1. **性能**

   多进程能够充分发挥多核 CPU 的优势。

2. **安全性、稳定性**

   **每个 Tab 页、插件都会开启一个独立的进程**。这样做可以：

   - 避免单个 Tab 页的崩溃影响整个浏览器。
   - 避免插件恶意代码或崩溃影响整个浏览器。

### 浏览器的主要进程

**1. Browser 进程**

浏览器进程。负责浏览器的主题部分展示及交互，以及协调其他进程之间的通信。

**2. Network 进程**

网络进程。负责页面的网络资源加载, 包括 HTML/CSS/JS 等。

**3. GPU 进程**

图像渲染进程。负责图形渲染、硬件加速、视频解码等工作。

GPU 的使用初衷是为了实现 CSS 3D 的效果。 后来网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后， Chrome 在其多进程架构上也引入了 GPU 进程。

**4. Plugins 进程**

每种类型的插件对应一个进程，使用该插件时创建。

**5. Renderer 进程**

浏览器渲染进程。每个 Tab 页都会在独立的渲染进程中运行，互不影响。主要工作有页面渲染，脚本执行，事件处理等。

除了这 5 个主要进程，在资源充足的情况下可能还会有 storage 进程、UI 进程、存储进程、设备进程、Audio 进程、Video 进程、Profile 进程等其他进程。

但对于前端开发来说，我们比较关心的是 Renderer(渲染)进程。

## Renderer 进程

### 常驻线程

浏览器渲染进程是**多线程**的。一些常驻线程有：

**1. 主线程**

也称为渲染线程或 UI 线程。负责渲染浏览器界面。包括解析 HTML, CSS, 构建 DOM 树和 RenderObject 树，布局和绘制等。当页面需要重绘和回流时，该线程就会执行。

**2. JS 引擎线程**

负责运行 JS 脚本。一个 Tab 页中只有一个 JS 引擎线程。

**GUI 线程与 JS 线程互斥**。也就是说 JavaScript 执行与页面渲染不能同时执行。

之所以设计成二者互斥是因为 JS 可以操作 DOM，如果在修改元素的同时渲染页面，渲染线程前后获取的元素可能不一致。

**3. 事件触发线程**

当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程, 如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中。

当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理

**4. 定时器线程**

setInterval 与 setTimeout 所在线程。

浏览器定时计数器并不是由 JavaScript 引擎计数的。这是由于 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确性。

因此通过单独线程来计时并触发定时。计时完毕后，添加到事件队列中，等待 JS 引擎空闲后执行。

**5. 异步 HTTP 请求线程**

在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求

当检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由 JavaScript 引擎执行。

**6. 合成线程（Compositor Thread）**

这个线程负责将渲染好的页面内容合成为最终的图像。它会将不同的图层进行合成，实现动画效果和页面滚动。

### Web Worker

对于密集型计算可以使用 Web Worker。

创建 Worker 时，Renderer 进程会单独开一个线程，也就是 worker 线程。

JS 引擎线程与 worker 线程间通过 `postMessage API` 通信。

所以，如果有非常耗时的工作，请单独开一个 Worker 线程，这样里面不管如何翻天覆地都不会影响 JS 引擎主线程，
只待计算出结果后，将结果通信给主线程即可。

而且注意下，JS 引擎是单线程的，这一点的本质仍然未改变，Worker 可以理解是浏览器给 JS 引擎开的外挂，专门用来解决那些大量计算问题。

### WebWorker 与 SharedWorker

WebWorker 只属于某个 Tab 页面，不会和其他页面的 Render 进程共享。

SharedWorker 是浏览器所有 Tab 页面共享的(共享型 Worker)，可以为多个 Render 进程共享使用。

SharedWorker 由独立的进程管理，WebWorker 只是属于 Render 进程下的一个线程。

## 从输入 URL 到页面渲染出来经历了什么？

### 从进程角度来分析

1. 用户输入 url 地址(如果是关键字，则根据默认引擎生成一个 url),会开始导航。这部分工作在 Browser 进程中做。
2. Network 进程请求资源，获取当前 url 下的 HTML
3. Renderer 进程解析 HTML 内容，遇到需要请求的资源交由 Network 进程处理
4. Renderer 进程通过解析、计算得到图像帧，并交给 GPU 进程
5. GPU 进程将图像帧渲染到屏幕上

### 从细分的角度来讲

#### 1. 渲染前的工作

1. 当我们输入一个 URL 的时候，浏览器会先去查找缓存。如果有缓存(强缓存)，则直接返回缓存内容。
2. 如果没有缓存或者缓存已经过期，则进行域名解析(域名 => IP)。
3. IP 寻址，确定目标 IP 地址。
4. 创建 TCP 连接，三次握手
5. 如果是 HTTPS, 则进行 SSL/TLS 协商
6. 利用 tcp 传输数据(https 会进行加密处理)。拆分成数据包，有序传输，可靠传输(丢包重传)。服务器收到后，按照序号重排数据包。
7. http 请求： 默认不会断开(keep-alive)。这样下次传输数据时，可以复用上次创建的连接。
8. http 响应： 响应码 301/302 会重定向, 304 协商缓存，200 正常返回数据

#### 2. 渲染相关工作

![](../images/browser/render-flow.png)

1. 浏览器无法直接使用 HTML，需要将 HTML 转化成 DOM 树。（document）

2. 浏览器无法解析纯文本的 CSS 样式，需要对 CSS 进行解析,解析成 CSSOM（document.styleSeets）

3. 计算出 DOM 树中每个节点的具体样式（Attachment）

4. 创建渲染树，将 DOM 树中可见节点，添加到布局树中。并计算节点渲染到页面的坐标位置。（layout）

5. 通过布局树，进行分层 （根据定位属性、透明属性、transform 属性、clip 属性等）生产图层树

6. 将不同图层进行绘制，转交给 合成线程 处理。最终生产页面，并显示到浏览器上 (Painting, Display)

### 一个由来已久的问题

**为什么在 HTML 中， CSS 要放在顶端，JS 要放在下面?**

将 CSS 放在顶端，而将 JavaScript 放在底部是出于页面加载性能的考虑。具体来说：

- 当浏览器解析 HTML 文档时，会逐行解析并构建 DOM 树，遇到 CSS 样式表会进行下载和解析，如果 CSS 放在顶端，浏览器能够尽早获取并解析 CSS 样式，从而更快地开始渲染页面内容，避免出现未样式化的页面闪烁。

- 当解析 HTML 中遇到 JavaScript 脚本时，它会立即执行脚本，这会阻塞页面的渲染和交互响应。

可以参考下图：

![](../images/browser/html-dom.jpg)

当然也可以在 script 脚本中设置 defer 或 async ，来避免阻塞 html 解析。

- 普通 script: 无论是 JS 加载还是执行，都会阻塞 HTML 解析

- defer: 无论 JS 加载还是执行，都不会阻塞 HTML 解析

- async: JS 加载不会阻塞 HTML 解析，JS 执行会阻塞

可以参考下图：

![](../images/browser/defer.webp)

## 最后

由于 Chrome 浏览器一直在更新，部分内容可能涉及时效性的问题。不过，对于前端开发来说，通过本文来了解浏览器的主要工作原理，还是 OK 的。

## 参考文档

[浏览器原理——看完这篇可以尝试和面试官扯皮了](https://juejin.cn/post/7171419987603619848)

[从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理](https://juejin.cn/post/6844903553795014663)

[浏览器渲染原理与性能优化](https://www.bilibili.com/video/BV1yy4y1i7o1/?p=1&vd_source=41e6d1d28e504860272fd13300cb250c)
