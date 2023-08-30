<!--
 * Author  rhys.zhao
 * Date  2023-01-24 09:48:17
 * LastEditors  rhys.zhao
 * LastEditTime  2023-08-18 18:16:59
 * Description webpack面试题
-->

# Webpack

## 1. 说说你对 webpack 的理解？解决了什么问题？

最初的 js 没有模块化，一个文件就是一个模块。这样一方面会带来全局变量污染的问题，还会因为引入顺序出现问题。后来有了 ESM 和 commonJs 模块化方案，js 开始进入模块化开发。这时候出现了新的问题，比如：

- 模块化支持：浏览器并不支持 ESM 和 commonJs (现在可以通过设置 script 标签的 type=module 来支持 ESM)。
- 代码兼容处理：jsx => js，ES 降级，sass/less => css 需要各类工具处理。

webpack 就解决了此类问题，主要做了以下工作：

- 模块化开发支持：支持直接从 node_modules 引入代码，支持多重模块化

- 处理代码的兼容性：比如 ES6 的代码降级，jsx 转换为 js, less/sass 转换为 css(不是构建工具做的，构建工具将这些工具集成进来自动化处理)
- 提高项目性能：压缩代码，代码分割
- 提高开发体验：提供开发服务器`webpack-dev-server`，能够解决服务跨域的问题（本地代理）。监听文件的变化，文件变化后能够自动调用相应的工具重新处理、打包，在浏览器重新运行(热更新)

本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。

## 2. 说说 webpack 的构建流程?

- 读取配置：Webpack 会读取项目根目录下的配置文件（如 webpack.config.js），或者根据命令行参数获取配置信息。

- 解析配置：Webpack 解析配置文件，获取入口文件、出口文件、Loader、Plugin 等配置信息。

- 创建 Compiler 对象：Webpack 使用解析后的配置创建一个 Compiler 对象。Compiler 对象负责控制整个打包过程，是构建过程的主要实例。

- 加载内置插件和配置的插件：Webpack 内置了一些常用插件，并根据配置加载用户配置的插件。

- 构建 Compilation 对象：Compiler 创建一个 Compilation 对象表示当前的构建过程。Compilation 对象包含当前构建的所有模块、依赖图等信息。

- 根据入口文件开始递归构建：Webpack 根据配置中的入口文件（entry）开始递归解析所有依赖的模块。

- 解析模块：Webpack 使用 Parser 对象解析模块代码，找到模块之间的依赖关系。

- 加载模块：根据模块的类型和配置的 Loader，Webpack 加载模块的源代码。

- 转换模块：Webpack 使用配置的 Loader 对模块的源代码进行转换，将其转换为 Webpack 可以识别的代码。

- 构建模块：将转换后的模块添加到 Compilation 对象中，并递归处理模块的依赖关系。

- 构建 Chunk：根据模块之间的依赖关系，将相关联的模块组合成 Chunk。

- 输出文件：将生成的 Chunk 输出到指定的输出目录中，生成打包后的静态文件。

- 应用 Plugin：在特定的构建步骤中触发插件，插件可以在构建过程中执行自定义的操作。

## 3. 说说 webpack 中常见的 Loader？解决了什么问题？

webpack 是基于 node 的，默认只能处理 JS 和 JSON 文件，loader 的作用是用来处理其他类型的文件。
loader 用以对某个文件进行 import 或者 require，在此过程中可能会涉及到解析与编译，如 js 通过 babel 进行编译。

常见的 loader 如下：

- style-loader: 将 css 添加到 DOM 的内联样式标签 style 里
- css-loader :允许将 css 文件通过 require 的方式引入，并返回 css 代码
- less-loader: 处理 less
- sass-loader: 处理 sass
- postcss-loader: 用 postcss 来处理 CSS
- file-loader: 分发文件到 output 目录并返回相对路径 (webpack5 已经内置)
- url-loader: 和 file-loader 类似，但是当文件小于设定的 limit 时可以返回一个 Data Url(webpack5 已经内置)
- babel-loader: 用 babel 来转换 ES6 文件到 ES5

## 4. 说说 webpack 中常见的 Plugin？解决了什么问题？

loaders 的作用是转换其他类型的语言到 JS 语言, plugins 可以做其他所有 loaders 做不了的事情, 比如:

- bundle optimization(bundle 优化)
- assets management(assets 管理)
- injection of environment variables(注入环境变量)

常见的 Plugin 有：

- HTMLWebpackPlugin: ⾃动生成⼀个 html ⽂文件，并把打包生成的 js 模块引⼊到该 html 中
- CopyWebpackPlugin: 复制文件或目录到 dist 目录
- CleanWebpackPlugin: 清理构建目录（webpack5 已经内置）
- MiniCssExtractPlugin: 提取 CSS 到一个单独的文件中
- DefinePlugin: 允许在编译时创建配置的全局对象，是一个 webpack 内置的插件，不需要安装

## 5. 说说 Loader 和 Plugin 的区别？编写 Loader，Plugin 的思路？

从功能上来讲：

- loader 主要用来处理 webpack 不能处理的文件，比如 less-loader 可以处理 less

- plugin 可以让 webpack 实现不能实现的功能, 比如 html-webpack-plugin 可以创建一个 html 模板

从运行时间来讲：

- loader 运行在打包文件之前

- plugin 运行在整个编译周期

从本质来讲：

- loader 就是一个函数。loader 能够链式调用。接收上一个 loader 的处理结果，返回下一个 loader 要接收的结果。

- plugin 是一个类。我们需要关注 constructor 和 apply 方法。constructor 能够获取插件使用时传入的参数。apply 中能够调用编译各个阶段的 hooks,从而在对应的时机执行插件逻辑。

自定义 loader:

```js
// 导出一个函数，source为webpack传递给loader的文件源内容
module.exports = function (source) {
  const content = doSomeThing2JsString(source);

  // 如果 loader 配置了 options 对象，那么this.query将指向 options
  const options = this.query;

  // 可以用作解析其他模块路径的上下文
  console.log('this.context');

  /*
   * this.callback 参数：
   * error：Error | null，当 loader 出错时向外抛出一个 error
   * content：String | Buffer，经过 loader 编译后需要导出的内容
   * sourceMap：为方便调试生成的编译后内容的 source map
   * ast：本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST，进而省去重复生成 AST 的过程
   */
  this.callback(null, content); // 异步
  return content; // 同步
};
```

自定义 plugin:

```js
class MyPlugin {
  // Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply(compiler) {
    // 找到合适的事件钩子，实现自己的插件功能
    compiler.hooks.emit.tap('MyPlugin', (compilation) => {
      // compilation: 当前打包构建流程的上下文
      console.log(compilation);

      // do something...
    });
  }
}
```

## 6. 说说 webpack 的热更新是如何做到的？原理是什么？

HMR 全称 Hot Module Replacement，可以理解为模块热替换，在应用运行过程中修改了某个模块，通过自动刷新会导致整个应用的整体刷新，那页面中的状态信息都会丢失
如果使用的是 HMR，就可以实现只将修改的模块实时替换至应用中，不必完全刷新整个应用

关于 webpack 热模块更新的总结如下：

- 监听文件变化：Webpack 开发服务器会在后台监听源代码文件的变化，当有文件发生修改时，Webpack 会感知到这些变化。

- 打包更新的模块：当有文件变化时，Webpack 会将修改过的模块及其依赖重新打包，生成一个新的临时模块。

- 构建补丁（Patch）：Webpack 会生成表示当前模块状态的补丁（Patch），包含了需要替换的旧模块和新模块的差异信息。

- 发送更新到浏览器：Webpack 将生成的补丁通过 WebSocket 或者其他实时连接机制发送到浏览器端。

- 应用补丁：浏览器接收到补丁后，会根据补丁信息进行模块的替换，用新模块替换掉旧模块，从而实现实时更新。

需要注意的是，HMR 并不是完全取代整个模块，而是替换部分代码块或模块。这样做的好处是减少了页面的重新加载时间，只更新需要更新的部分，同时保持了应用的状态，避免了页面重置和状态丢失。

webpack 基于 express 启动的本地服务。webpack 会监听本地文件，一旦出现文件修改，则会对修改的文件进行重新打包，产生一个 manifest.json 文件和补丁文件。然后通过 websocket 把文件 hash 值发送到浏览器端。
然后浏览器通过 hash 值获取响应的资源更新页面。

## 7. 说说 webpack proxy 工作原理？为什么能解决跨域?

proxy 工作原理实质上是利用 `http-proxy-middleware` 这个 http 代理中间件，实现请求转发给其他服务器
举个例子：
在开发阶段，本地地址为 http://localhost:3000，该浏览器发送一个前缀带有/api 标识的请求到服务端获取数据，但响应这个请求的服务器只是将请求转发到另一台服务器中

```js
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/api', proxy({ target: 'http://www.example.org', changeOrigin: true }));
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```

## 8. 说说如何借助 webpack 来优化前端性能？

通过 webpack 优化前端的手段有：

- JS 代码压缩
- CSS 代码压缩
- Html 文件代码压缩
- 文件大小压缩
- 图片压缩
- Tree Shaking
- 代码分离: 将代码分离到不同的 bundle 中，之后我们可以按需加载，或者并行加载这些文件
  默认情况下，所有的 JavaScript 代码（业务代码、第三方依赖、暂时没有用到的模块）在首页全部都加载，就会影响首页的加载速度
  代码分离可以分出出更小的 bundle，以及控制资源加载优先级，提供代码的加载性能
  这里通过 splitChunksPlugin 来实现，该插件 webpack 已经默认安装和集成，只需要配置即可
- 内联 chunk
  可以通过 InlineChunkHtmlPlugin 插件将一些 chunk 的模块内联到 html，如 runtime 的代码（对模块进行解析、加载、模块信息相关的代码），代码量并不大，但是必须加载的

关于 webpack 对前端性能的优化，可以通过文件体积大小入手，其次还可通过分包的形式、减少 http 请求次数等方式，实现对前端性能的优化

## 9. 如何提高 webpack 的构建速度？

常见的提升构建速度的手段有如下：

- 优化 loader 配置
  通过 include、exclude 来缩减范围

- 合理使用 resolve.extensions
  当我们引入文件的时候，若没有文件后缀名，则会根据数组内的值依次查找
  当我们配置的时候，则不要随便把所有后缀都写在里面，这会调用多次文件的查找，这样就会减慢打包速度

- 优化 resolve.modules
  resolve.modules 用于配置 webpack 去哪些目录下寻找第三方模块。默认值为['node_modules']，所以默认会从 node_modules 中查找文件
  当安装的第三方模块都放在项目根目录下的 ./node_modules 目录下时，所以可以指明存放第三方模块的绝对路径，以减少寻找，配置如下：
  ```js
  module.exports = {
    resolve: {
      // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
      // 其中 __dirname 表示当前工作目录，也就是项目根目录
      modules: [path.resolve(__dirname, 'node_modules')]
    }
  };
  ```
- 优化 resolve.alias
- 使用 DLLPlugin 插件
- 使用 thread-loader
  对于比较耗时的 loader，比如 babel-loader。 可以启动一个新的进程处理响应文件
- 合理使用 sourceMap
  打包生成 sourceMap 的时候，如果信息越详细，打包速度就会越慢。

## 10. 与 webpack 类似的工具还有哪些？区别？

- rollup
  Rollup 是一款 ES Modules 打包器，从作用上来看，Rollup 与 Webpack 非常类似。不过相比于 Webpack，Rollup 要小巧的多
  可以看到 Rollup 的优点：

代码效率更简洁、效率更高
默认支持 Tree-shaking
但缺点也十分明显，加载其他类型的资源文件或者支持导入 CommonJS 模块，又或是编译 ES 新特性，这些额外的需求 Rollup 需要使用插件去完成

综合来看，rollup 并不适合开发应用使用，因为需要使用第三方模块，而目前第三方模块大多数使用 CommonJs 方式导出成员，并且 rollup 不支持 HMR，使开发效率降低

但是在用于打包 JavaScript 库时，rollup 比 webpack 更有优势，因为其打包出来的代码更小、更快，其存在的缺点可以忽略

- vite
  vite ，是一种新型前端构建工具，能够显著提升前端开发体验

它主要由两部分组成：

一个开发服务器，它基于 原生 ES 模块 提供了丰富的内建功能，如速度快到惊人的 [模块热更新 HMR
一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源
其作用类似 webpack + webpack-dev-server，其特点如下：

快速的冷启动
即时的模块热更新
真正的按需编译
vite 会直接启动开发服务器，不需要进行打包操作，也就意味着不需要分析模块的依赖、不需要编译，因此启动速度非常快

利用现代浏览器支持 ES Module 的特性，当浏览器请求某个模块的时候，再根据需要对模块的内容进行编译，这种方式大大缩短了编译时间

vite 主要的提升还是针对于开发阶段，生产打包使用的是 rollup

- webpack
  相比上述的模块化工具，webpack 大而全，很多常用的功能做到开箱即用。有两大最核心的特点：一切皆模块和按需加载

与其他构建工具相比，有如下优势：

- 智能解析：对 CommonJS 、 AMD 、ES6 的语法做了兼容
- 万物模块：对 js、css、图片等资源文件都支持打包
- 开箱即用：HRM、Tree-shaking 等功能
- 代码分割：可以将代码切割成不同的 chunk，实现按需加载，降低了初始化时间
- 插件系统，具有强大的 Plugin 接口，具有更好的灵活性和扩展性
- 易于调试：支持 SourceUrls 和 SourceMaps
- 快速运行：webpack 使用异步 IO 并具有多级缓存，这使得 webpack 很快且在增量编译上更加快
- 生态环境好：社区更丰富，出现的问题更容易解决

## 21. 性能优化

    一般说到性能优化，我们可能主要关注三个方面：

- 打包速度和大小
- 首屏渲染时间
- 用户交互响应

一定程度上，包越小也就意味着首屏渲染越快。

对于 webpack 配置，我们可以做这些优化：

- 压缩 JS,css，单独提取 css
- 使用 loader 的时候，配上 include/exclude，减小范围
- 编译 jsx 时候，使用 swc 替换 babel（swc 使用 rust 编写，速度比 babel 快很多倍，亲测有用）
- 按需引入,antd
- 替换一些包，比如 moment 换成 day.js，lodash 替换成 lodash-es(通过 alias)，以便于 tree-shaking
- 代码分割，使用动态导入配合 react.lazy 实现懒加载
- splitChunk,将常用的依赖库分成一个包
- cdn
- 魔法注释实现预获取和预加载
- dropConsole 去除 console
- gzip 压缩,需要再 nginx 上配置
- http2 替代 http1.1 nginx 配置
- http 缓存，nginx 配置

性能工具：

- webpack-bundle-analysis：来进行包大小分析，哪些包比较大替换掉
- performance: api 可以获取 FP,FCP,LCP 等指标数据，来进行具体分析。还可以分析内存是否泄漏，网络是否阻塞，长任务等等
- lighthouse：会给网站打个评分，推荐一些优化策略

代码方面：

- 密集型计算使用 web worker
- 函数，请求缓存
- 使用缓存相关的 hooks 避免不必要的渲染, memo, useMemo, useCallback
- 节流，防抖
- 自定义 hook 复用逻辑
- css 动画，替换 js 动画
- 避免重绘和回流
- 精灵图
- 避免使用@import

本地服务启动，终极解决方案使用 vite

## 22. webpack 知识点

core-js：包含所有 ES6+的 polyfill, 并集成在 babel 中

Webpack 运行时（Webpack Runtime）指的是打包后的代码中所包含的用于模块解析、加载和执行的代码部分。

比如热更新，code split 的动态导入都依赖运行时。

代码分割：

- 使用 splitChunk, 一般用来处理依赖的分包
- 使用动态导入，配合 react.lazy 实现懒加载

tree-shaking:

- webpack5 默认开启 tree-shaking
- 使用 esModule 的依赖才会 tree-shaking,比如 lodash-es，而不是 lodash
- 使用动态导入的组件，tree-shaking 会失效，因为动态导入的模块依赖在编译时无法确定。

Webpack 5 默认开启了持久缓存，并使用 chunkhash 作为哈希值来实现持久缓存。每次构建时，只有发生改变的文件的哈希值会发生变化，从而让浏览器能够正确地使用缓存。这样，在没有文件内容发生改变的情况下，Webpack 就可以直接使用之前的缓存结果，大大加快了构建速度。

DLL 插件最初是为了解决 Webpack 打包过程中长时间构建的问题。它的主要思想是将一些不经常改变的第三方依赖（如 React、lodash 等）单独打包成一个独立的动态链接库（DLL），并将其预先编译成静态文件。这样，在后续的构建过程中，可以跳过对这些不变的第三方依赖的重复打包，从而加快构建速度。

hash：一次打包，一个 hash
chunkhush: 一个代码块，一个 hash
contenthash: 一个文件，一个 hash。比如一个 js 里有 css。我们单独提取 css，而只改变了 js,这时候就用到 contenthash 了
