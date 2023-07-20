<!--
 * Author  rhys.zhao
 * Date  2023-07-03 10:30:33
 * LastEditors  rhys.zhao
 * LastEditTime  2023-07-18 17:35:47
 * Description
-->

# 浏览器性能优化

## 网络优化策略

1. 减少 http 请求数, 合并 JS、css。合理内嵌 CSS/JS
2. 合理设置服务端缓存，提高服务器读取速度(强缓存、协商缓存)
3. 避免重定向
4. 使用 dns-prefetch 进行 DNS 预解析
5. 域名分片技术，将资源放到不同的域名下。解决同一个域名最多处理 6 个 TCP 连接的问题。也可使用 http2.
6. 使用 CDN(最近指派、高度可用)
7. gzip 压缩，图片、视频没有必要 gzip, gzip 甚至会更大
8. 加载数据优先级：preload(预加载) 与 prefetch(预请求)

## 渲染优化策略

渲染优化主要就是减少回流和重绘。

1. 脱离文档流
   position: absolute, fixed, sticky。

2. 渲染时给图片增加固定宽高

3. 尽量使用 css3 动画

4. 可以使用 will-change 提取到单独的图层中

## 静态文件优化

### 图片资源

1.  避免空 src 的图片
2.  img 标签设置 alt 属性，提升图片加载失败时用户体验
3.  loading:lazy 图片懒加载
4.  base64 减少图片请求
5.  雪碧图合并图标图片

### html 优化

1. 语义化 html：代码简洁清晰，利于搜索引擎，便于团队开发
2. 提前声明字符编码，让浏览器快速确定如何渲染网页内容
3. 减少 HTML 嵌套关系、减少 DOM 节点数量
4. 删除多余空格、空行、注释、及无用的属性等
5. HTML 减少 iframes 使用 (iframe 会阻塞 onload 事件可以动态加载 iframe)
6. 避免使用 table 布局

### css 优化

1. 减少伪类选择器、减少样式层数、减少使用通配符

2. 删除空行、注释、减少无意义的单位、css 进行压缩

3. 使用外链 css,可以对 CSS 进行缓存

4. 添加媒体字段，只加载有效的 css 文件
   html 复制代码<link href="index.css" rel="stylesheet" media="screen and (min-width:1024px)" />

5. CSS contain 属性,将元素进行隔离

6. 减少@import 使用，由于@import 采用的是串行加载

### JS 优化

1. 通过 async、defer 异步加载文件

2. 减少 DOM 操作，缓存访问过的元素

3. 操作不直接应用到 DOM 上，而应用到虚拟 DOM 上。最后一次性的应用到 DOM 上。

4. 使用 webworker 解决程序阻塞问题

5.虚拟滚动  vertual-scroll-list

6.尽量避免使用 eval, 消耗时间久

7. 使用事件委托，减少事件绑定个数。

8. 尽量使用 canvas 动画、CSS 动画

### 字体优化

```css
@font-face {
  font-family: 'Bmy';
  src: url('./HelloQuincy.ttf');
  font-display: block;
  /* block 3s 内不显示, 如果没加载完毕用默认的   */
  /* swap 显示老字体 在替换 */
  /* fallback 缩短不显示时间， 如果没加载完毕用默认的 ，和block类似*/
  /* optional 替换可能用字体 可能不替换*/
}
body {
  font-family: 'Bmy';
}
```

## 性能工具

### Performance API

### performance

### lighthouse
