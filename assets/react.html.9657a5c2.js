import{_ as a,d as e}from"./app.ef95b5d4.js";const r={},h=e('<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><h2 id="_1-\u8BF4\u8BF4\u5BF9-react-\u7684\u7406\u89E3-\u6709\u54EA\u4E9B\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_1-\u8BF4\u8BF4\u5BF9-react-\u7684\u7406\u89E3-\u6709\u54EA\u4E9B\u7279\u6027" aria-hidden="true">#</a> 1. \u8BF4\u8BF4\u5BF9 React \u7684\u7406\u89E3\uFF1F\u6709\u54EA\u4E9B\u7279\u6027\uFF1F</h2><h2 id="_2-\u8BF4\u8BF4-real-dom-\u548C-virtual-dom-\u7684\u533A\u522B-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-\u8BF4\u8BF4-real-dom-\u548C-virtual-dom-\u7684\u533A\u522B-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 2. \u8BF4\u8BF4 Real DOM \u548C Virtual DOM \u7684\u533A\u522B\uFF1F\u4F18\u7F3A\u70B9\uFF1F</h2><h2 id="_3-\u8BF4\u8BF4-react-\u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B\u4E0D\u540C\u9636\u6BB5-\u6BCF\u4E2A\u9636\u6BB5\u5BF9\u5E94\u7684\u65B9\u6CD5\u662F" tabindex="-1"><a class="header-anchor" href="#_3-\u8BF4\u8BF4-react-\u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B\u4E0D\u540C\u9636\u6BB5-\u6BCF\u4E2A\u9636\u6BB5\u5BF9\u5E94\u7684\u65B9\u6CD5\u662F" aria-hidden="true">#</a> 3. \u8BF4\u8BF4 React \u751F\u547D\u5468\u671F\u6709\u54EA\u4E9B\u4E0D\u540C\u9636\u6BB5\uFF1F\u6BCF\u4E2A\u9636\u6BB5\u5BF9\u5E94\u7684\u65B9\u6CD5\u662F\uFF1F</h2><h2 id="_4-state-\u548C-props-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_4-state-\u548C-props-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 4. state \u548C props \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><h2 id="_5-super-\u548C-super-props-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-super-\u548C-super-props-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 5. super()\u548C super(props)\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><h2 id="_6-\u8BF4\u8BF4-react-\u4E2D\u7684-setstate-\u6267\u884C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_6-\u8BF4\u8BF4-react-\u4E2D\u7684-setstate-\u6267\u884C\u673A\u5236" aria-hidden="true">#</a> 6. \u8BF4\u8BF4 React \u4E2D\u7684 setState \u6267\u884C\u673A\u5236</h2><h2 id="_7-\u8BF4\u8BF4-react-\u7684\u4E8B\u4EF6\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_7-\u8BF4\u8BF4-react-\u7684\u4E8B\u4EF6\u673A\u5236" aria-hidden="true">#</a> 7. \u8BF4\u8BF4 React \u7684\u4E8B\u4EF6\u673A\u5236\uFF1F</h2><h2 id="_8-react-\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_8-react-\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B-\u533A\u522B" aria-hidden="true">#</a> 8. React \u4E8B\u4EF6\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F\u533A\u522B\uFF1F</h2><h2 id="_9-react-\u6784\u5EFA\u7EC4\u4EF6\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_9-react-\u6784\u5EFA\u7EC4\u4EF6\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B-\u533A\u522B" aria-hidden="true">#</a> 9. React \u6784\u5EFA\u7EC4\u4EF6\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F\u533A\u522B\uFF1F</h2><h2 id="_10-react-\u4E2D\u7EC4\u4EF6\u4E4B\u95F4\u5982\u4F55\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#_10-react-\u4E2D\u7EC4\u4EF6\u4E4B\u95F4\u5982\u4F55\u901A\u4FE1" aria-hidden="true">#</a> 10. React \u4E2D\u7EC4\u4EF6\u4E4B\u95F4\u5982\u4F55\u901A\u4FE1\uFF1F</h2><h2 id="_11-react-\u4E2D\u7684-key-\u6709\u4EC0\u4E48\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_11-react-\u4E2D\u7684-key-\u6709\u4EC0\u4E48\u4F5C\u7528" aria-hidden="true">#</a> 11. React \u4E2D\u7684 key \u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</h2><h2 id="_12-\u8BF4\u8BF4\u5BF9-react-refs-\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_12-\u8BF4\u8BF4\u5BF9-react-refs-\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 12. \u8BF4\u8BF4\u5BF9 React refs \u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F</h2><h2 id="_13-\u8BF4\u8BF4\u5BF9-react-\u4E2D\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u7406\u89E3-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_13-\u8BF4\u8BF4\u5BF9-react-\u4E2D\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u7406\u89E3-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 13. \u8BF4\u8BF4\u5BF9 React \u4E2D\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u7406\u89E3\uFF1F\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><h2 id="_14-\u8BF4\u8BF4\u5BF9\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_14-\u8BF4\u8BF4\u5BF9\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 14. \u8BF4\u8BF4\u5BF9\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F</h2><h2 id="_15-\u8BF4\u8BF4\u5BF9\u9AD8\u9636\u7EC4\u4EF6\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_15-\u8BF4\u8BF4\u5BF9\u9AD8\u9636\u7EC4\u4EF6\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 15. \u8BF4\u8BF4\u5BF9\u9AD8\u9636\u7EC4\u4EF6\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F?</h2><h2 id="_16-\u8BF4\u8BF4\u5BF9-react-hooks-\u7684\u7406\u89E3-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_16-\u8BF4\u8BF4\u5BF9-react-hooks-\u7684\u7406\u89E3-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> 16. \u8BF4\u8BF4\u5BF9 React Hooks \u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F</h2><h2 id="_17-\u8BF4\u8BF4-react-\u4E2D\u5F15\u5165-css-\u7684\u65B9\u5F0F\u6709\u54EA\u51E0\u79CD-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_17-\u8BF4\u8BF4-react-\u4E2D\u5F15\u5165-css-\u7684\u65B9\u5F0F\u6709\u54EA\u51E0\u79CD-\u533A\u522B" aria-hidden="true">#</a> 17. \u8BF4\u8BF4 react \u4E2D\u5F15\u5165 css \u7684\u65B9\u5F0F\u6709\u54EA\u51E0\u79CD\uFF1F\u533A\u522B\uFF1F</h2><h2 id="_18-\u5728-react-\u4E2D\u7EC4\u4EF6\u95F4\u8FC7\u6E21\u52A8\u753B\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_18-\u5728-react-\u4E2D\u7EC4\u4EF6\u95F4\u8FC7\u6E21\u52A8\u753B\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> 18. \u5728 react \u4E2D\u7EC4\u4EF6\u95F4\u8FC7\u6E21\u52A8\u753B\u5982\u4F55\u5B9E\u73B0\uFF1F</h2><h2 id="_19-\u8BF4\u8BF4\u4F60\u5BF9-redux-\u7684\u7406\u89E3-\u5176\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_19-\u8BF4\u8BF4\u4F60\u5BF9-redux-\u7684\u7406\u89E3-\u5176\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> 19. \u8BF4\u8BF4\u4F60\u5BF9 Redux \u7684\u7406\u89E3\uFF1F\u5176\u5DE5\u4F5C\u539F\u7406\uFF1F</h2><h2 id="_20-\u8BF4\u8BF4\u5BF9-redux-\u4E2D\u95F4\u4EF6\u7684\u7406\u89E3-\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6\u6709\u54EA\u4E9B-\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_20-\u8BF4\u8BF4\u5BF9-redux-\u4E2D\u95F4\u4EF6\u7684\u7406\u89E3-\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6\u6709\u54EA\u4E9B-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 20. \u8BF4\u8BF4\u5BF9 Redux \u4E2D\u95F4\u4EF6\u7684\u7406\u89E3\uFF1F\u5E38\u7528\u7684\u4E2D\u95F4\u4EF6\u6709\u54EA\u4E9B\uFF1F\u5B9E\u73B0\u539F\u7406\uFF1F</h2><h2 id="_21-\u4F60\u5728-react-\u9879\u76EE\u4E2D\u662F\u5982\u4F55\u4F7F\u7528-redux-\u7684-\u9879\u76EE\u7ED3\u6784\u662F\u5982\u4F55\u5212\u5206\u7684" tabindex="-1"><a class="header-anchor" href="#_21-\u4F60\u5728-react-\u9879\u76EE\u4E2D\u662F\u5982\u4F55\u4F7F\u7528-redux-\u7684-\u9879\u76EE\u7ED3\u6784\u662F\u5982\u4F55\u5212\u5206\u7684" aria-hidden="true">#</a> 21. \u4F60\u5728 React \u9879\u76EE\u4E2D\u662F\u5982\u4F55\u4F7F\u7528 Redux \u7684? \u9879\u76EE\u7ED3\u6784\u662F\u5982\u4F55\u5212\u5206\u7684\uFF1F</h2><h2 id="_22-\u8BF4\u8BF4\u4F60\u5BF9-react-router-\u7684\u7406\u89E3-\u5E38\u7528\u7684-router-\u7EC4\u4EF6\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_22-\u8BF4\u8BF4\u4F60\u5BF9-react-router-\u7684\u7406\u89E3-\u5E38\u7528\u7684-router-\u7EC4\u4EF6\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 22. \u8BF4\u8BF4\u4F60\u5BF9 React Router \u7684\u7406\u89E3\uFF1F\u5E38\u7528\u7684 Router \u7EC4\u4EF6\u6709\u54EA\u4E9B\uFF1F</h2><h2 id="_23-\u8BF4\u8BF4-react-router-\u6709\u51E0\u79CD\u6A21\u5F0F-\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_23-\u8BF4\u8BF4-react-router-\u6709\u51E0\u79CD\u6A21\u5F0F-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 23. \u8BF4\u8BF4 React Router \u6709\u51E0\u79CD\u6A21\u5F0F\uFF1F\u5B9E\u73B0\u539F\u7406\uFF1F</h2><h2 id="_24-\u8BF4\u8BF4\u4F60\u5BF9-immutable-\u7684\u7406\u89E3-\u5982\u4F55\u5E94\u7528\u5728-react-\u9879\u76EE\u4E2D" tabindex="-1"><a class="header-anchor" href="#_24-\u8BF4\u8BF4\u4F60\u5BF9-immutable-\u7684\u7406\u89E3-\u5982\u4F55\u5E94\u7528\u5728-react-\u9879\u76EE\u4E2D" aria-hidden="true">#</a> 24. \u8BF4\u8BF4\u4F60\u5BF9 immutable \u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5E94\u7528\u5728 react \u9879\u76EE\u4E2D\uFF1F</h2><h2 id="_25-\u8BF4\u8BF4-react-render-\u65B9\u6CD5\u7684\u539F\u7406-\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u88AB\u89E6\u53D1" tabindex="-1"><a class="header-anchor" href="#_25-\u8BF4\u8BF4-react-render-\u65B9\u6CD5\u7684\u539F\u7406-\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u88AB\u89E6\u53D1" aria-hidden="true">#</a> 25. \u8BF4\u8BF4 React render \u65B9\u6CD5\u7684\u539F\u7406\uFF1F\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u88AB\u89E6\u53D1\uFF1F</h2><h2 id="_26-\u8BF4\u8BF4\u4F60\u662F\u5982\u4F55\u63D0\u9AD8\u7EC4\u4EF6\u7684\u6E32\u67D3\u6548\u7387\u7684-\u5728-react-\u4E2D\u5982\u4F55\u907F\u514D\u4E0D\u5FC5\u8981\u7684-render" tabindex="-1"><a class="header-anchor" href="#_26-\u8BF4\u8BF4\u4F60\u662F\u5982\u4F55\u63D0\u9AD8\u7EC4\u4EF6\u7684\u6E32\u67D3\u6548\u7387\u7684-\u5728-react-\u4E2D\u5982\u4F55\u907F\u514D\u4E0D\u5FC5\u8981\u7684-render" aria-hidden="true">#</a> 26. \u8BF4\u8BF4\u4F60\u662F\u5982\u4F55\u63D0\u9AD8\u7EC4\u4EF6\u7684\u6E32\u67D3\u6548\u7387\u7684\uFF1F\u5728 React \u4E2D\u5982\u4F55\u907F\u514D\u4E0D\u5FC5\u8981\u7684 render\uFF1F</h2><h2 id="_27-\u8BF4\u8BF4-react-diff-\u7684\u539F\u7406\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_27-\u8BF4\u8BF4-react-diff-\u7684\u539F\u7406\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 27. \u8BF4\u8BF4 React diff \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F</h2><h2 id="_28-\u8BF4\u8BF4\u5BF9-fiber-\u67B6\u6784\u7684\u7406\u89E3-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_28-\u8BF4\u8BF4\u5BF9-fiber-\u67B6\u6784\u7684\u7406\u89E3-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> 28. \u8BF4\u8BF4\u5BF9 Fiber \u67B6\u6784\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F</h2><h2 id="_29-\u8BF4\u8BF4-react-jsx-\u8F6C\u6362\u6210\u771F\u5B9E-dom-\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_29-\u8BF4\u8BF4-react-jsx-\u8F6C\u6362\u6210\u771F\u5B9E-dom-\u8FC7\u7A0B" aria-hidden="true">#</a> 29. \u8BF4\u8BF4 React Jsx \u8F6C\u6362\u6210\u771F\u5B9E DOM \u8FC7\u7A0B\uFF1F</h2><h2 id="_30-\u8BF4\u8BF4-react-\u6027\u80FD\u4F18\u5316\u7684\u624B\u6BB5\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_30-\u8BF4\u8BF4-react-\u6027\u80FD\u4F18\u5316\u7684\u624B\u6BB5\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 30. \u8BF4\u8BF4 React \u6027\u80FD\u4F18\u5316\u7684\u624B\u6BB5\u6709\u54EA\u4E9B\uFF1F</h2><h2 id="_31-\u8BF4\u8BF4\u4F60\u5728-react-\u9879\u76EE\u662F\u5982\u4F55\u6355\u83B7\u9519\u8BEF\u7684" tabindex="-1"><a class="header-anchor" href="#_31-\u8BF4\u8BF4\u4F60\u5728-react-\u9879\u76EE\u662F\u5982\u4F55\u6355\u83B7\u9519\u8BEF\u7684" aria-hidden="true">#</a> 31. \u8BF4\u8BF4\u4F60\u5728 React \u9879\u76EE\u662F\u5982\u4F55\u6355\u83B7\u9519\u8BEF\u7684\uFF1F</h2><h2 id="_32-\u8BF4\u8BF4-react-\u670D\u52A1\u7AEF\u6E32\u67D3\u600E\u4E48\u505A-\u539F\u7406\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_32-\u8BF4\u8BF4-react-\u670D\u52A1\u7AEF\u6E32\u67D3\u600E\u4E48\u505A-\u539F\u7406\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 32. \u8BF4\u8BF4 React \u670D\u52A1\u7AEF\u6E32\u67D3\u600E\u4E48\u505A\uFF1F\u539F\u7406\u662F\u4EC0\u4E48\uFF1F</h2><h2 id="_33-\u8BF4\u8BF4\u4F60\u5728\u4F7F\u7528-react-\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u5E38\u89C1\u95EE\u9898-\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_33-\u8BF4\u8BF4\u4F60\u5728\u4F7F\u7528-react-\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u5E38\u89C1\u95EE\u9898-\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> 33. \u8BF4\u8BF4\u4F60\u5728\u4F7F\u7528 React \u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u5E38\u89C1\u95EE\u9898\uFF1F\u5982\u4F55\u89E3\u51B3?</h2>',34);function d(t,c){return h}var n=a(r,[["render",d],["__file","react.html.vue"]]);export{n as default};