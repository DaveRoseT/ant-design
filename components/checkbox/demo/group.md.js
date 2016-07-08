webpackJsonp([295,366],{613:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(54),s(53)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:[["p","\u65b9\u4fbf\u7684\u4ece\u6570\u7ec4\u751f\u6210 Checkbox \u7ec4\u3002"]],meta:{order:3,title:"Checkbox \u7ec4",filename:"components/checkbox/demo/group.md",id:"components-checkbox-demo-group"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Checkbox <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> CheckboxGroup <span class="token operator" >=</span> Checkbox<span class="token punctuation" >.</span>Group<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>checkedValues<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'checked = \'</span><span class="token punctuation" >,</span> checkedValues<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> plainOptions <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'Apple\'</span><span class="token punctuation" >,</span> <span class="token string" >\'Pear\'</span><span class="token punctuation" >,</span> <span class="token string" >\'Orange\'</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> options <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u82f9\u679c\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Apple\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u68a8\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Pear\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u6a58\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Orange\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> optionsWithDisabled <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u82f9\u679c\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Apple\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u68a8\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Pear\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> label<span class="token punctuation" >:</span> <span class="token string" >\'\u6a58\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'Orange\'</span><span class="token punctuation" >,</span> disabled<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckboxGroup</span> <span class="token attr-name" >options</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>plainOptions<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'Apple\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckboxGroup</span> <span class="token attr-name" >options</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>options<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'Pear\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckboxGroup</span> <span class="token attr-name" >options</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>optionsWithDisabled<span class="token punctuation" >}</span></span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'Apple\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("checked = ",n)}var a=o["default"].Group,s=["Apple","Pear","Orange"],t=[{label:"\u82f9\u679c",value:"Apple"},{label:"\u68a8",value:"Pear"},{label:"\u6a58",value:"Orange"}],p=[{label:"\u82f9\u679c",value:"Apple"},{label:"\u68a8",value:"Pear"},{label:"\u6a58",value:"Orange",disabled:!1}];return c["default"].createElement("div",null,c["default"].createElement(a,{options:s,defaultValue:["Apple"],onChange:n}),c["default"].createElement("br",null),c["default"].createElement(a,{options:t,defaultValue:["Pear"],onChange:n}),c["default"].createElement("br",null),c["default"].createElement(a,{options:p,disabled:!0,defaultValue:["Apple"],onChange:n}))}}}});