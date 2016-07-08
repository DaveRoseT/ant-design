webpackJsonp([221,366],{690:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(7),a(6)),o=t(p),c=(a(71),a(70)),e=t(c),u=a(1),l=t(u),k=a(2);t(k);n.exports={content:[["p","\u5305\u62ec\u6210\u529f\u3001\u5931\u8d25\u3001\u8b66\u544a\u3002"]],meta:{order:1,title:"\u5176\u4ed6\u63d0\u793a\u7c7b\u578b",filename:"components/message/demo/other.md",id:"components-message-demo-other"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> message<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> success <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  message<span class="token punctuation" >.</span><span class="token function" >success</span><span class="token punctuation" >(</span><span class="token string" >\'\u8fd9\u662f\u4e00\u6761\u6210\u529f\u63d0\u793a\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> error <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  message<span class="token punctuation" >.</span><span class="token function" >error</span><span class="token punctuation" >(</span><span class="token string" >\'\u8fd9\u662f\u4e00\u6761\u62a5\u9519\u63d0\u793a\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> warning <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  message<span class="token punctuation" >.</span><span class="token function" >warning</span><span class="token punctuation" >(</span><span class="token string" >\'\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>success<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u663e\u793a\u6210\u529f\u63d0\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>error<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u663e\u793a\u62a5\u9519\u63d0\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>warning<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u663e\u793a\u8b66\u544a\u63d0\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){e["default"].success("\u8fd9\u662f\u4e00\u6761\u6210\u529f\u63d0\u793a")},s=function(){e["default"].error("\u8fd9\u662f\u4e00\u6761\u62a5\u9519\u63d0\u793a")},a=function(){e["default"].warning("\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a")};return l["default"].createElement("div",null,l["default"].createElement(o["default"],{onClick:n},"\u663e\u793a\u6210\u529f\u63d0\u793a"),l["default"].createElement(o["default"],{onClick:s},"\u663e\u793a\u62a5\u9519\u63d0\u793a"),l["default"].createElement(o["default"],{onClick:a},"\u663e\u793a\u8b66\u544a\u63d0\u793a"))},style:"\n#components-message-demo-other .ant-btn {\n  margin-right: 8px;\n}\n"}}});