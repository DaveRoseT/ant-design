webpackJsonp([66,366],{847:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(158),s(157)),o=t(p),c=s(1),e=t(c),u=s(2);t(u);n.exports={content:[["p","\u5e26\u641c\u7d22\u6846\u7684\u7a7f\u68ad\u6846\u3002"]],meta:{order:1,title:"\u5e26\u641c\u7d22\u6846",filename:"components/transfer/demo/search.md",id:"components-transfer-demo-search"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Transfer <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      mockData<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      targetKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentDidMount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >getMock</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >getMock</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> targetKeys <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> mockData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> <span class="token number" >20</span><span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n        key<span class="token punctuation" >:</span> i<span class="token punctuation" >,</span>\n        title<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u5185\u5bb9</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i <span class="token operator" >+</span> <span class="token number" >1</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span>\n        description<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u5185\u5bb9</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i <span class="token operator" >+</span> <span class="token number" >1</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >\u7684\u63cf\u8ff0`</span></span><span class="token punctuation" >,</span>\n        chosen<span class="token punctuation" >:</span> Math<span class="token punctuation" >.</span><span class="token function" >random</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >*</span> <span class="token number" >2</span> <span class="token operator" >></span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>data<span class="token punctuation" >.</span>chosen<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        targetKeys<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>data<span class="token punctuation" >.</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      mockData<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>data<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> mockData<span class="token punctuation" >,</span> targetKeys <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>targetKeys<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> targetKeys <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Transfer</span>\n        <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>mockData<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >showSearch</span>\n        <span class="token attr-name" >targetKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>targetKeys<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >render</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item <span class="token operator" >=</span><span class="token operator" >></span> item<span class="token punctuation" >.</span>title<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=e["default"].createClass({displayName:"App",getInitialState:function(){return{mockData:[],targetKeys:[]}},componentDidMount:function(){this.getMock()},getMock:function(){for(var n=[],a=[],s=0;s<20;s++){var t={key:s,title:"\u5185\u5bb9"+(s+1),description:"\u5185\u5bb9"+(s+1)+"\u7684\u63cf\u8ff0",chosen:2*Math.random()>1};t.chosen&&n.push(t.key),a.push(t)}this.setState({mockData:a,targetKeys:n})},handleChange:function(n){this.setState({targetKeys:n})},render:function(){return e["default"].createElement(o["default"],{dataSource:this.state.mockData,showSearch:!0,targetKeys:this.state.targetKeys,onChange:this.handleChange,render:function(n){return n.title}})}});return e["default"].createElement(n,null)}}}});