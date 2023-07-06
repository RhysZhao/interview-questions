import{_ as t,o as r,c as o,a as s,b as n,e,F as c,d as p,r as l}from"./app.2beee078.js";var i="/interview-questions/assets/cors.750703ab.jpg";const u={},d=p('<h1 id="\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a> \u8DE8\u57DF</h1><h2 id="\u4E3A\u4EC0\u4E48\u4F1A\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F1A\u8DE8\u57DF" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4F1A\u8DE8\u57DF</h2><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5F53\u6D4F\u89C8\u5668\u5411\u4E0D\u540C \u6E90(\u534F\u8BAE\u3001IP\u3001\u7AEF\u53E3)\u7684\u8D44\u6E90\u53D1\u51FA\u8BF7\u6C42\u65F6\uFF0C\u4F1A\u62A5\u9519\u8BEF\u5982\u4E0B\uFF1A</p><p><img src="'+i+'" alt=""></p><p>\u8FD9\u5C31\u662F \u8DE8\u57DF \u95EE\u9898\u3002</p><p>\u8DE8\u57DF\u662F\u56E0\u4E3A\u6D4F\u89C8\u5668\u7684<strong>\u540C\u6E90\u7B56\u7565</strong>\u6240\u5BFC\u81F4\u7684\u3002</p><h3 id="\u4EC0\u4E48\u662F\u540C\u6E90\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u540C\u6E90\u7B56\u7565" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u540C\u6E90\u7B56\u7565</h3>',7),k={href:"https://juejin.cn/post/7147638444355747870",target:"_blank",rel:"noopener noreferrer"},b=s("strong",null,"\u6E90\u6307\u7684\u662F\u534F\u8BAE\u3001IP\u3001\u7AEF\u53E3\u3002",-1),h=p(`<h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h2><h3 id="_1-jsonp" tabindex="-1"><a class="header-anchor" href="#_1-jsonp" aria-hidden="true">#</a> 1. JSONP</h3><p><strong>\u53EA\u652F\u6301 Get \u8BF7\u6C42\uFF0C\u5E76\u4E14\u53EA\u80FD\u63A5\u6536 json \u683C\u5F0F\u7684\u6570\u636E\uFF0C\u8FD8\u5BB9\u6613\u6536\u5230 XSS \u653B\u51FB\u3002\u4E0D\u63A8\u8350\u3002</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">function</span> <span class="token function">handleResponse</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;https://10.2.2.25/api?callback=handleResponse&#39;</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5176\u5B9E\u5C31\u662F\u52A8\u6001\u521B\u5EFA\u4E00\u4E2A script \u6807\u7B7E\uFF0C\u5E76\u5728\u6807\u7B7E\u91CC\u52A0\u5165 callback \u53C2\u6570, \u7136\u540E\u5728\u56DE\u8C03\u51FD\u6570\u91CC\u5904\u7406\u540E\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u3002</p><h3 id="_2-cors" tabindex="-1"><a class="header-anchor" href="#_2-cors" aria-hidden="true">#</a> 2. CORS</h3><p><strong>\u5B98\u65B9\u63A8\u8350\uFF0C\u540E\u7AEF\u5904\u7406\uFF0C\u63A8\u8350\u3002</strong></p><p>CORS\uFF08Cross-Origin Resource Sharing\uFF09\u662F\u4E00\u79CD\u5B98\u65B9\u63A8\u8350\u7684\u8DE8\u57DF\u89E3\u51B3\u65B9\u6848\u3002\u5B83\u901A\u8FC7\u5728\u670D\u52A1\u5668\u7AEF\u8BBE\u7F6E\u54CD\u5E94\u5934\u6765\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u3002\u5177\u4F53\u800C\u8A00\uFF0C\u670D\u52A1\u5668\u5728\u54CD\u5E94\u4E2D\u6DFB\u52A0 Access-Control-Allow-Origin \u5934\uFF0C\u5E76\u8BBE\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684\u6E90\u5730\u5740\u3002\u6D4F\u89C8\u5668\u5728\u6536\u5230\u8FD9\u4E2A\u54CD\u5E94\u5934\u540E\uFF0C\u5C31\u4F1A\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u5E76\u5C06\u54CD\u5E94\u6570\u636E\u8FD4\u56DE\u7ED9\u524D\u7AEF\u9875\u9762\u3002CORS \u652F\u6301\u5404\u79CD\u7C7B\u578B\u7684 HTTP \u8BF7\u6C42\uFF0C\u5305\u62EC GET\u3001POST \u7B49\uFF0C\u5E76\u4E14\u5177\u6709\u8F83\u597D\u7684\u5B89\u5168\u6027\u3002</p><h3 id="_3-proxy" tabindex="-1"><a class="header-anchor" href="#_3-proxy" aria-hidden="true">#</a> 3. proxy</h3><p>\u65E2\u7136\u8DE8\u57DF\u662F\u6D4F\u89C8\u5668\u5BFC\u81F4\u7684\uFF0C\u90A3\u6211\u4EEC\u7ED5\u5F00\u6D4F\u89C8\u5668\u5C31\u884C\u4E86\u3002\u4F7F\u7528\u4EE3\u7406\u4E5F\u662F\u5E38\u7528\u7684\u89E3\u51B3\u8DE8\u57DF\u7684\u65B9\u6848\u3002</p><p>\u8BF7\u6C42\u7684\u8D44\u6E90\u8DE8\u57DF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BF7\u6C42\u81EA\u5DF1\u540C\u6E90\u7684\u670D\u52A1(\u4EE3\u7406)\uFF0C\u7136\u540E<strong>\u901A\u8FC7\u4EE3\u7406\u53BB\u8BF7\u6C42\u8DE8\u57DF\u7684\u8D44\u6E90</strong>\u3002\u5E38\u7528\u7684\u89E3\u51B3\u65B9\u6848\u4E00\u822C\u662F\u4E24\u79CD\uFF1A</p><h4 id="\u672C\u5730\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u4EE3\u7406" aria-hidden="true">#</a> \u672C\u5730\u4EE3\u7406</h4><p><strong>\u5F00\u53D1\u73AF\u5883\uFF0C\u524D\u7AEF\u5904\u7406\uFF0C\u63A8\u8350\u3002</strong></p><p>\u65E0\u8BBA\u662F webpack \u8FD8\u662F vite \u90FD\u5185\u7F6E\u4E86\u672C\u5730\u4EE3\u7406\u3002\u8FD9\u8BA9\u6211\u4EEC\u80FD\u591F\u5728\u4E0D\u4F9D\u8D56\u540E\u7AEF\u7684\u524D\u63D0\u4E0B\u89E3\u51B3\u8DE8\u57DF\u7684\u95EE\u9898(\u4EC5\u4EC5\u662F\u672C\u5730\u5F00\u53D1\u73AF\u5883\u4E0B, \u7EBF\u4E0A\u73AF\u5883\u9700\u8981 nginx \u914D\u7F6E\u53CD\u5411\u4EE3\u7406)</p>`,14),m={href:"https://webpack.docschina.org/configuration/dev-server/#devserverproxy",target:"_blank",rel:"noopener noreferrer"},g=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,1),_={href:"https://cn.vitejs.dev/config/server-options.html#server-proxy",target:"_blank",rel:"noopener noreferrer"},v=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="nginx-\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#nginx-\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> nginx \u53CD\u5411\u4EE3\u7406</h4><p><strong>\u751F\u4EA7\u73AF\u5883\uFF0C\u8FD0\u7EF4\u5904\u7406\uFF0C\u63A8\u8350\u3002</strong></p><p>\u751F\u4EA7\u73AF\u5883\u4E00\u822C\u7528 nginx \u6258\u7BA1\u90E8\u7F72\u6211\u4EEC\u7684\u524D\u7AEF\u4EE3\u7801\u5305\u3002\u5904\u7406\u8DE8\u57DF\u95EE\u9898\u9700\u8981 nginx \u914D\u7F6E\u53CD\u5411\u4EE3\u7406\u3002</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server {
    listen: 8001;
    server_name 10.2.2.25;

    location ~ /api/ {
        proxy_pass http://127.0.0.1:8081;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,6),f={href:"https://juejin.cn/post/7147638444355747870",target:"_blank",rel:"noopener noreferrer"};function x(y,j){const a=l("ExternalLinkIcon");return r(),o(c,null,[d,s("p",null,[n("\u6D4F\u89C8\u5668\u51FA\u4E8E"),s("a",k,[n("\u5B89\u5168"),e(a)]),n("\u7684\u8003\u8651\u505A\u4E86\u540C\u6E90\u7B56\u7565\u7684\u9650\u5236\u3002"),b,n(" \u534F\u8BAE\u3001IP\u3001\u7AEF\u53E3 \u5FC5\u987B\u5168\u90FD\u76F8\u540C\u624D\u662F\u540C\u6E90\u3002")]),h,s("p",null,[n("webpack \u7684\u5904\u7406\u65B9\u5F0F\u5982\u4E0B(\u5B98\u65B9\u6587\u6863\u770B"),s("a",m,[n("\u8FD9\u91CC"),e(a)]),n("):")]),g,s("p",null,[n("vite \u7684\u5904\u7406\u65B9\u5F0F(\u5B98\u65B9\u6587\u6863\u770B"),s("a",_,[n("\u8FD9\u91CC"),e(a)]),n("):")]),v,s("p",null,[s("a",f,[n("Web \u5B89\u5168\u5F00\u7BC7\uFF1A\u6D4F\u89C8\u5668\u4E3A\u4EC0\u4E48\u4F1A\u6709\u540C\u6E90\u7B56\u7565\uFF1F"),e(a)])])],64)}var S=t(u,[["render",x],["__file","cors.html.vue"]]);export{S as default};
