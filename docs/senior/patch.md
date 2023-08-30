<!--
 * Author  rhys.zhao
 * Date  2023-08-30 19:26:37
 * LastEditors  rhys.zhao
 * LastEditTime  2023-08-30 20:01:52
 * Description
-->

# 补丁

## 1. 代码规范

git hooks 工具，husky。设置为 pre-commit 触发。提交之前触发。
格式化：prettier + eslint + stylelint
每次只检验提交的内容：lint-staged，每次只对提交的部分格式化
这样保证了大家代码的一致。
commitlint 增加统一的提交规则，比如 #TTT-333 Update ....

## 2. node.js, express, mango

node 其实是一个服务端的 js 环境。基于 v8 引擎。

express 其实就是基于 node.js 的服务端框架。

## 3. nginx, docker, k8s

nginx 就是一个静态资源服务器。前端打包后的文件可以通过 nginx 开启 web 服务。

docker 就是一个轻量级的虚拟机。隔离性、安全性、移植性好。

也可以逻辑部署 nginx。但现在通常使用 docker。

k8s 是容器编排管理工具。主要是用来管理 docker 以及对应的服务。

zx.js 使用 js 来写 shell 脚本的工具

## 4. ssr

服务端渲染，react 常用的有 next.js， remix.js

vue 的 ssr 框架，nuxt.js

更好的 SEO

更快的首屏渲染(不能交互)。

缺点就是更慢的交互时间。

## 5. 单元测试

Jest

React 官方提供了两个组件单元测试的库。

## 6. 私有库搭建

verdaccio。用来搭建私库，配合 docker 使用最好。提供了一个基本的组件页面。不是很友好。可以使用阿里的 dumi。

dumi 好像用的 father，组件、库的打包工具。

## 7. 线上监控

Sentry
一个开源的前端错误监控工具，可以捕获和报告 JavaScript 和前端框架的错误和异常。它提供详细的错误信息和堆栈跟踪，帮助开发人员快速定位和解决问题。

fun debug
前端线上 bug 监控平台（免费试用 14 天）。主要用于查找线上 bug。除了监控 bug 之外，还支持录屏。也就是还原错误发生前几秒用户的所有操作。

## 8. 埋点，流量监控

诸葛 IO
是一个用户行为分析平台，通过埋点事件追踪、漏斗分析、留存分析等功能。

## 9. 性能优化

## 10. https 与 http

## 11. cookie, session, token

## 12. 输入 url 到页面渲染出来经历了什么？

## 13. v8 引擎、垃圾回收

## 14. 项目
