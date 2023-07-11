<!--
 * Author  rhys.zhao
 * Date  2023-07-03 10:30:33
 * LastEditors  rhys.zhao
 * LastEditTime  2023-07-07 15:26:38
 * Description
-->

# 浏览器性能优化

## 网络优化策略

1. 减少 http 请求数, 合并 JS、css。合理内嵌 CSS/JS
2. 合理设置服务端缓存，提高服务器读取速度(强缓存、协商缓存)
3. 避免重定向
4. 使用 dns-prefetch 进行 DNS 预解析
5. 域名分片技术，将资源放到不同的域名下。解决同一个域名最多处理 6 个 TCP 连接的问题。
6. 使用 CDN(最近指派、高度可用)
7. gzip 压缩，图片、视频没有必要 gzip,gzip 甚至会更大
8. 加载数据优先级：preload 与 prefetch

## 性能工具

### Performance API

### performance

### lighthouse
