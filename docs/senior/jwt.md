<!--
 * Author  rhys.zhao
 * Date  2023-05-04 11:06:39
 * LastEditors  rhys.zhao
 * LastEditTime  2023-05-04 16:25:19
 * Description
-->

# Cookie/Session/Token

http 是无状态的。也就是说对事务没有记忆，每次请求都是独立的，服务端无法确认当前访问者的身份信息，是否跟上一次请求是同一个人。

所以服务器与浏览器为了进行会话跟踪（知道是谁在访问我），就必须主动的去维护一个状态，这个状态用于告知服务端前后两个请求是否来自同一个人。而这个状态需要通过 cookie、 session 或者 token 去实现。

## Cookie

cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。

### 1. 属性

cookie 有几个重要的属性，如下：

- `name=value`: 键值对，用来 设置 cookie 的名称和值，必须是字符串类型
- `domain`: 指定 cookie 的所属域名，默认是当前域名
- `path`: 指定 cookie 生效的路径，默认是 '/'
- `maxAge`: cookie 失效的时间，单位是秒。如果为 0 则表示删除该 cookie。默认为-1，也就是关闭浏览器删除。
- `expires`: cookie 的过期时间。默认是会话级别，也就是说关闭浏览器 cookie 就会删除
- `secure`: 设置为 true 的时候，cookie 在 http 中是无效的
- `httpOnly`: 设置为 true，无法通过 js 脚本读取到 cookie 的信息

2. js 操作 cookie

```js
const allCookies = document.cookie; // 获取所有cookie
document.cookie = 'name=jack'; // 设置cookie
document.cookie = 'name=jack; Max-Age=0;'; // 删除该cookie
```

3. 应用场景

- 30 天内免登陆，把用户信息存储在 cookie 里，设置 Max-Age 为 30 天。
- 配合 sessionId 来实现会话跟踪。

## Session

session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的 cookie 中

session 认证流程：

- 用户向服务器发送用户名和密码。

- 服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。

- 服务器向用户返回一个 session_id，写入用户的 Cookie。

- 用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。

- 服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。

这种模式的问题在于，扩展性（scaling）不好。单机当然没有问题，如果是服务器集群，或者是跨域的服务导向架构，就要求 session 数据共享，每台服务器都能够读取 session。

## Token

可以用 token 避免 Session 的问题。

token 认证流程：

- 客户端使用用户名跟密码请求登录
- 服务端收到请求，去验证用户名与密码
- 验证成功后，服务端会签发一个 token 并把这个 token 发送给客户端，这个 token 一般包含加密过的用户信息
- 客户端收到 token 以后，会把它存储起来，比如放在 cookie 里或者 localStorage 里
- 客户端每次向服务端请求资源的时候需要带着服务端签发的 token
- 服务端收到请求，然后去解析客户端请求里面带着的 token ，如果解析成功，就向客户端返回请求的数据

token 跟 session 认证的区别是，用户信息会加密存储在 token 里，秘钥只有服务器才有。

基于 token 的用户认证是一种服务端无状态的认证方式，服务端不用存放 token 数据。用解析 token 的计算时间换取 session 的存储空间，从而减轻服务器的压力，减少频繁的查询数据库

## 参考文档

[傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.cn/post/6844904034181070861)
