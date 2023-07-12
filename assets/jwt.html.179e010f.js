import{_ as s,o as n,c as a,a as e,b as i,e as c,F as t,d as l,r}from"./app.40572329.js";const p={},d=l(`<h1 id="cookie-session-token" tabindex="-1"><a class="header-anchor" href="#cookie-session-token" aria-hidden="true">#</a> Cookie/Session/Token</h1><p>http \u662F\u65E0\u72B6\u6001\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\u5BF9\u4E8B\u52A1\u6CA1\u6709\u8BB0\u5FC6\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u90FD\u662F\u72EC\u7ACB\u7684\uFF0C\u670D\u52A1\u7AEF\u65E0\u6CD5\u786E\u8BA4\u5F53\u524D\u8BBF\u95EE\u8005\u7684\u8EAB\u4EFD\u4FE1\u606F\uFF0C\u662F\u5426\u8DDF\u4E0A\u4E00\u6B21\u8BF7\u6C42\u662F\u540C\u4E00\u4E2A\u4EBA\u3002</p><p>\u6240\u4EE5\u670D\u52A1\u5668\u4E0E\u6D4F\u89C8\u5668\u4E3A\u4E86\u8FDB\u884C\u4F1A\u8BDD\u8DDF\u8E2A\uFF08\u77E5\u9053\u662F\u8C01\u5728\u8BBF\u95EE\u6211\uFF09\uFF0C\u5C31\u5FC5\u987B\u4E3B\u52A8\u7684\u53BB\u7EF4\u62A4\u4E00\u4E2A\u72B6\u6001\uFF0C\u8FD9\u4E2A\u72B6\u6001\u7528\u4E8E\u544A\u77E5\u670D\u52A1\u7AEF\u524D\u540E\u4E24\u4E2A\u8BF7\u6C42\u662F\u5426\u6765\u81EA\u540C\u4E00\u4E2A\u4EBA\u3002\u800C\u8FD9\u4E2A\u72B6\u6001\u9700\u8981\u901A\u8FC7 cookie\u3001 session \u6216\u8005 token \u53BB\u5B9E\u73B0\u3002</p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2><p>cookie \u662F\u670D\u52A1\u5668\u53D1\u9001\u5230\u7528\u6237\u6D4F\u89C8\u5668\u5E76\u4FDD\u5B58\u5728\u672C\u5730\u7684\u4E00\u5C0F\u5757\u6570\u636E\uFF0C\u5B83\u4F1A\u5728\u6D4F\u89C8\u5668\u4E0B\u6B21\u5411\u540C\u4E00\u670D\u52A1\u5668\u518D\u53D1\u8D77\u8BF7\u6C42\u65F6\u88AB\u643A\u5E26\u5E76\u53D1\u9001\u5230\u670D\u52A1\u5668\u4E0A\u3002</p><h3 id="_1-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_1-\u5C5E\u6027" aria-hidden="true">#</a> 1. \u5C5E\u6027</h3><p>cookie \u6709\u51E0\u4E2A\u91CD\u8981\u7684\u5C5E\u6027\uFF0C\u5982\u4E0B\uFF1A</p><ul><li><code>name=value</code>: \u952E\u503C\u5BF9\uFF0C\u7528\u6765 \u8BBE\u7F6E cookie \u7684\u540D\u79F0\u548C\u503C\uFF0C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u7C7B\u578B</li><li><code>domain</code>: \u6307\u5B9A cookie \u7684\u6240\u5C5E\u57DF\u540D\uFF0C\u9ED8\u8BA4\u662F\u5F53\u524D\u57DF\u540D</li><li><code>path</code>: \u6307\u5B9A cookie \u751F\u6548\u7684\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u662F &#39;/&#39;</li><li><code>maxAge</code>: cookie \u5931\u6548\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\u3002\u5982\u679C\u4E3A 0 \u5219\u8868\u793A\u5220\u9664\u8BE5 cookie\u3002\u9ED8\u8BA4\u4E3A-1\uFF0C\u4E5F\u5C31\u662F\u5173\u95ED\u6D4F\u89C8\u5668\u5220\u9664\u3002</li><li><code>expires</code>: cookie \u7684\u8FC7\u671F\u65F6\u95F4\u3002\u9ED8\u8BA4\u662F\u4F1A\u8BDD\u7EA7\u522B\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5173\u95ED\u6D4F\u89C8\u5668 cookie \u5C31\u4F1A\u5220\u9664</li><li><code>secure</code>: \u8BBE\u7F6E\u4E3A true \u7684\u65F6\u5019\uFF0Ccookie \u5728 http \u4E2D\u662F\u65E0\u6548\u7684</li><li><code>httpOnly</code>: \u8BBE\u7F6E\u4E3A true\uFF0C\u65E0\u6CD5\u901A\u8FC7 js \u811A\u672C\u8BFB\u53D6\u5230 cookie \u7684\u4FE1\u606F</li></ul><h3 id="_2-js-\u64CD\u4F5C-cookie" tabindex="-1"><a class="header-anchor" href="#_2-js-\u64CD\u4F5C-cookie" aria-hidden="true">#</a> 2. js \u64CD\u4F5C cookie</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> allCookies <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u6240\u6709cookie</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;name=jack&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6Ecookie</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;name=jack; Max-Age=0;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664\u8BE5cookie</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 3. \u5E94\u7528\u573A\u666F</h3><ul><li>30 \u5929\u5185\u514D\u767B\u9646\uFF0C\u628A\u7528\u6237\u4FE1\u606F\u5B58\u50A8\u5728 cookie \u91CC\uFF0C\u8BBE\u7F6E Max-Age \u4E3A 30 \u5929\u3002</li><li>\u914D\u5408 sessionId \u6765\u5B9E\u73B0\u4F1A\u8BDD\u8DDF\u8E2A\u3002</li></ul><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h2><p>session \u662F\u57FA\u4E8E cookie \u5B9E\u73B0\u7684\uFF0Csession \u5B58\u50A8\u5728\u670D\u52A1\u5668\u7AEF\uFF0CsessionId \u4F1A\u88AB\u5B58\u50A8\u5230\u5BA2\u6237\u7AEF\u7684 cookie \u4E2D</p><p>session \u8BA4\u8BC1\u6D41\u7A0B\uFF1A</p><ul><li><p>\u7528\u6237\u5411\u670D\u52A1\u5668\u53D1\u9001\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002</p></li><li><p>\u670D\u52A1\u5668\u9A8C\u8BC1\u901A\u8FC7\u540E\uFF0C\u5728\u5F53\u524D\u5BF9\u8BDD\uFF08session\uFF09\u91CC\u9762\u4FDD\u5B58\u76F8\u5173\u6570\u636E\uFF0C\u6BD4\u5982\u7528\u6237\u89D2\u8272\u3001\u767B\u5F55\u65F6\u95F4\u7B49\u7B49\u3002</p></li><li><p>\u670D\u52A1\u5668\u5411\u7528\u6237\u8FD4\u56DE\u4E00\u4E2A session_id\uFF0C\u5199\u5165\u7528\u6237\u7684 Cookie\u3002</p></li><li><p>\u7528\u6237\u968F\u540E\u7684\u6BCF\u4E00\u6B21\u8BF7\u6C42\uFF0C\u90FD\u4F1A\u901A\u8FC7 Cookie\uFF0C\u5C06 session_id \u4F20\u56DE\u670D\u52A1\u5668\u3002</p></li><li><p>\u670D\u52A1\u5668\u6536\u5230 session_id\uFF0C\u627E\u5230\u524D\u671F\u4FDD\u5B58\u7684\u6570\u636E\uFF0C\u7531\u6B64\u5F97\u77E5\u7528\u6237\u7684\u8EAB\u4EFD\u3002</p></li></ul><p>\u8FD9\u79CD\u6A21\u5F0F\u7684\u95EE\u9898\u5728\u4E8E\uFF0C\u6269\u5C55\u6027\uFF08scaling\uFF09\u4E0D\u597D\u3002\u5355\u673A\u5F53\u7136\u6CA1\u6709\u95EE\u9898\uFF0C\u5982\u679C\u662F\u670D\u52A1\u5668\u96C6\u7FA4\uFF0C\u6216\u8005\u662F\u8DE8\u57DF\u7684\u670D\u52A1\u5BFC\u5411\u67B6\u6784\uFF0C\u5C31\u8981\u6C42 session \u6570\u636E\u5171\u4EAB\uFF0C\u6BCF\u53F0\u670D\u52A1\u5668\u90FD\u80FD\u591F\u8BFB\u53D6 session\u3002</p><h2 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> Token</h2><p>\u53EF\u4EE5\u7528 token \u907F\u514D Session \u7684\u95EE\u9898\u3002</p><p>token \u8BA4\u8BC1\u6D41\u7A0B\uFF1A</p><ul><li>\u5BA2\u6237\u7AEF\u4F7F\u7528\u7528\u6237\u540D\u8DDF\u5BC6\u7801\u8BF7\u6C42\u767B\u5F55</li><li>\u670D\u52A1\u7AEF\u6536\u5230\u8BF7\u6C42\uFF0C\u53BB\u9A8C\u8BC1\u7528\u6237\u540D\u4E0E\u5BC6\u7801</li><li>\u9A8C\u8BC1\u6210\u529F\u540E\uFF0C\u670D\u52A1\u7AEF\u4F1A\u7B7E\u53D1\u4E00\u4E2A token \u5E76\u628A\u8FD9\u4E2A token \u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u4E2A token \u4E00\u822C\u5305\u542B\u52A0\u5BC6\u8FC7\u7684\u7528\u6237\u4FE1\u606F</li><li>\u5BA2\u6237\u7AEF\u6536\u5230 token \u4EE5\u540E\uFF0C\u4F1A\u628A\u5B83\u5B58\u50A8\u8D77\u6765\uFF0C\u6BD4\u5982\u653E\u5728 cookie \u91CC\u6216\u8005 localStorage \u91CC</li><li>\u5BA2\u6237\u7AEF\u6BCF\u6B21\u5411\u670D\u52A1\u7AEF\u8BF7\u6C42\u8D44\u6E90\u7684\u65F6\u5019\u9700\u8981\u5E26\u7740\u670D\u52A1\u7AEF\u7B7E\u53D1\u7684 token</li><li>\u670D\u52A1\u7AEF\u6536\u5230\u8BF7\u6C42\uFF0C\u7136\u540E\u53BB\u89E3\u6790\u5BA2\u6237\u7AEF\u8BF7\u6C42\u91CC\u9762\u5E26\u7740\u7684 token \uFF0C\u5982\u679C\u89E3\u6790\u6210\u529F\uFF0C\u5C31\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE\u8BF7\u6C42\u7684\u6570\u636E</li></ul><p>token \u8DDF session \u8BA4\u8BC1\u7684\u533A\u522B\u662F\uFF0C\u7528\u6237\u4FE1\u606F\u4F1A\u52A0\u5BC6\u5B58\u50A8\u5728 token \u91CC\uFF0C\u79D8\u94A5\u53EA\u6709\u670D\u52A1\u5668\u624D\u6709\u3002</p><p>\u57FA\u4E8E token \u7684\u7528\u6237\u8BA4\u8BC1\u662F\u4E00\u79CD\u670D\u52A1\u7AEF\u65E0\u72B6\u6001\u7684\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u670D\u52A1\u7AEF\u4E0D\u7528\u5B58\u653E token \u6570\u636E\u3002\u7528\u89E3\u6790 token \u7684\u8BA1\u7B97\u65F6\u95F4\u6362\u53D6 session \u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u4ECE\u800C\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u538B\u529B\uFF0C\u51CF\u5C11\u9891\u7E41\u7684\u67E5\u8BE2\u6570\u636E\u5E93</p><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,24),k={href:"https://juejin.cn/post/6844904034181070861",target:"_blank",rel:"noopener noreferrer"};function h(u,m){const o=r("ExternalLinkIcon");return n(),a(t,null,[d,e("p",null,[e("a",k,[i("\u50BB\u50BB\u5206\u4E0D\u6E05\u4E4B Cookie\u3001Session\u3001Token\u3001JWT"),c(o)])])],64)}var x=s(p,[["render",h],["__file","jwt.html.vue"]]);export{x as default};