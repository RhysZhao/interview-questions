<!--
 * Author  rhys.zhao
 * Date  2023-01-24 09:48:17
 * LastEditors  rhys.zhao
 * LastEditTime  2023-03-29 16:00:35
 * Description webpack面试题
-->

# Webpack

## 1. 说说你对 webpack 的理解？解决了什么问题？

最初的 js 没有模块化，一个文件就是一个模块。这样一方面会带来全局变量污染的问题，还会因为引入顺序出现问题。后来有了 ESM 和 commonJs 模块化方案，js 开始进入模块化开发。这时候出现了新的问题，比如：
模块化支持：浏览器并不支持 ESM 和 commonJs (现在可以通过设置 script 标签的 type=module 来支持 ESM)。
代码兼容处理：jsx => js，ES 降级，sass/less => css 需要各类工具处理。

webpack 就解决了此类问题，主要做了以下工作：
模块化开发支持：支持直接从 node_modules 引入代码，支持多重模块化
处理代码的兼容性：比如 ES6 的代码降级，jsx 转换为 js, less/sass 转换为 css(不是构建工具做的，构建工具将这些工具集成进来自动化处理)
提高项目性能：压缩代码，代码分割
提高开发体验：提供开发服务器，能够解决服务跨域的问题（本地代理）。监听文件的变化，文件变化后能够自动调用相应的工具重新处理、打包，在浏览器重新运行(热更新)

本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。

## 2. 说说 webpack 的构建流程?

初始化参数：解析 webpack 配置参数，合并 shell 传入和 webpack.config.js 文件配置的参数,形成最后的配置结果；
开始编译：上一步得到的参数初始化 compiler 对象，注册所有配置的插件，插件 监听 webpack 构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译；
确定入口：从配置的 entry 入口，开始解析文件构建 AST 语法树，找出依赖，递归下去；
编译模块：递归中根据文件类型和 loader 配置，调用所有配置的 loader 对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
完成模块编译并输出：递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据 entry 或分包配置生成代码块 chunk;
输出完成：输出所有的 chunk 到文件系统；

## 3. 说说 webpack 中常见的 Loader？解决了什么问题？

webpack 是基于 node 的，默认只能处理 JS 和 JSON 文件，loader 的作用是用来处理其他类型的文件。
loader 用以对某个文件进行 import 或者 require，在此过程中可能会涉及到解析与编译，如 js 通过 babel 进行编译。

常见的 loader 如下：
style-loader: 将 css 添加到 DOM 的内联样式标签 style 里
css-loader :允许将 css 文件通过 require 的方式引入，并返回 css 代码
less-loader: 处理 less
sass-loader: 处理 sass
postcss-loader: 用 postcss 来处理 CSS
file-loader: 分发文件到 output 目录并返回相对路径 (webpack5 已经内置)
url-loader: 和 file-loader 类似，但是当文件小于设定的 limit 时可以返回一个 Data Url(webpack5 已经内置)
babel-loader: 用 babel 来转换 ES6 文件到 ES

## 4. 说说 webpack 中常见的 Plugin？解决了什么问题？

loaders 的作用是转换其他类型的语言到 JS 语言, plugins 可以做其他所有 loaders 做不了的事情, 比如:

- bundle optimization(bundle 优化)
- assets management(assets 管理)
- injection of environment variables(注入环境变量)

常见的 Plugin 有：
HTMLWebpackPlugin: ⾃动生成⼀个 html ⽂文件，并把打包生成的 js 模块引⼊到该 html 中
CopyWebpackPlugin: 复制文件或目录到 dist 目录
CleanWebpackPlugin: 清理构建目录
MiniCssExtractPlugin: 提取 CSS 到一个单独的文件中
DefinePlugin: 允许在编译时创建配置的全局对象，是一个 webpack 内置的插件，不需要安装

## 5. 说说 Loader 和 Plugin 的区别？编写 Loader，Plugin 的思路？

运行时机上的区别：

- loader 运行在打包文件之前
- plugins 在整个编译周期都起作用

webpack 基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件，就可以在特定的阶段执行自己的插件任务。

```
class MyPlugin {
    // Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply (compiler) {
    // 找到合适的事件钩子，实现自己的插件功能
    compiler.hooks.emit.tap('MyPlugin', compilation => {
        // compilation: 当前打包构建流程的上下文
        console.log(compilation);

        // do something...
    })
  }
}
```

对于 loader，实质是一个转换器，将 A 文件进行编译形成 B 文件，操作的是文件，比如将 A.scss 或 A.less 转变为 B.css，单纯的文件转换过程

```
// 导出一个函数，source为webpack传递给loader的文件源内容
module.exports = function(source) {
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
}
```

## 6. 说说 webpack 的热更新是如何做到的？原理是什么？

HMR 全称 Hot Module Replacement，可以理解为模块热替换，在应用运行过程中修改了某个模块，通过自动刷新会导致整个应用的整体刷新，那页面中的状态信息都会丢失
如果使用的是 HMR，就可以实现只将修改的模块实时替换至应用中，不必完全刷新整个应用

关于 webpack 热模块更新的总结如下：
通过 webpack-dev-server 创建两个服务器：提供静态资源的服务（express）和 Socket 服务
express server 负责直接提供静态资源的服务（打包后的资源直接被浏览器请求和解析）
socket server 是一个 websocket 的长连接，双方可以通信
当 socket server 监听到对应的模块发生变化时，会生成两个文件.json（manifest 文件）和.js 文件（update chunk）
通过长连接，socket server 可以直接将这两个文件主动发送给客户端（浏览器）
浏览器拿到两个新的文件后，通过 HMR runtime 机制，加载这两个文件，并且针对修改的模块进行更新

## 7. 说说 webpack proxy 工作原理？为什么能解决跨域?

proxy 工作原理实质上是利用 http-proxy-middleware 这个 http 代理中间件，实现请求转发给其他服务器
举个例子：
在开发阶段，本地地址为 http://localhost:3000，该浏览器发送一个前缀带有/api 标识的请求到服务端获取数据，但响应这个请求的服务器只是将请求转发到另一台服务器中

```
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/api', proxy({target: 'http://www.example.org', changeOrigin: true}));
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
  ```
  module.exports = {
  resolve: {
    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
    // 其中 __dirname 表示当前工作目录，也就是项目根目录
    modules: [path.resolve(__dirname, 'node_modules')]
  },
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

智能解析：对 CommonJS 、 AMD 、ES6 的语法做了兼容
万物模块：对 js、css、图片等资源文件都支持打包
开箱即用：HRM、Tree-shaking 等功能
代码分割：可以将代码切割成不同的 chunk，实现按需加载，降低了初始化时间
插件系统，具有强大的 Plugin 接口，具有更好的灵活性和扩展性
易于调试：支持 SourceUrls 和 SourceMaps
快速运行：webpack 使用异步 IO 并具有多级缓存，这使得 webpack 很快且在增量编译上更加快
生态环境好：社区更丰富，出现的问题更容易解决

需要从以下几个方面提升对 webpack 原理的理解：

1. 整个构建流程，最好是源码解析
2. 手写 loader/plugin
3. 热更新原理，源码解析

简历：

一面：
做个自我介绍呗。
面试官你好，我 xxx,我在上家公司 xx 职位，做些 xx 工作。
工作之外，喜欢研究一些技术。最近正在看 vue3 源码。实现了 xx 功能。我给你讲讲我的实现思路。
引导话题：
主动表现自己。不聊自己擅长的，面试官就占据主导权了。

项目：看你近期的项目，来给你定级。然后深入去问。
p5: 我做了哪些项目，哪些模块，做了哪些优化，优化了什么
p6: 带过哪些项目，主导了哪些项目。做技术选型，难点攻坚，人员分配怎么做。培养新人思考

你在项目中遇到什么困哪，怎么解决？
给你抛问题：基于特定的场景，你该怎么办？
你对我有什么问题吗？

三面：
压力测试，打压你。聊天过程的亲和力，沟通能力，性格。不会过分关心你的技术细节。

hr 面：
谈钱。

想办法证明自己的能力。开源项目贡献者。github star 数。社区里有影响力。博客反映了你的学习态度。

面试官
