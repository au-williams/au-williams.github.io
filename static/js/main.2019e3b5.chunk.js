(this.webpackJsonpaustinwilliams=this.webpackJsonpaustinwilliams||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),r=i(8),s=i.n(r),o=(i(14),i(2)),a=(i(15),i.p+"static/media/emoji.04a0aa74.png"),l="attribute",u="close angle",d="indent",j="start angle",b="operator",m="string",f="tag-name",h="value",v=i(3),O=i(4),p=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Object(v.a)(this,e),this.blockType=t,this.isVisible=!1,this.currentSize=t===d?i:1,this.maximumSize=i}return Object(O.a)(e,[{key:"isActive",get:function(){return!this.isVisible||this.currentSize<this.maximumSize}},{key:"update",value:function(){this.isVisible?this.currentSize++:this.isVisible=!0}}]),e}(),w=175,k=5,g=3,x=14,y=16,B=1,S=i(23),z=function(){function e(){Object(v.a)(this,e);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];this.codeBlocks=i.filter((function(e){return"boolean"!==typeof e})),this.key=Object(S.a)()}return Object(O.a)(e,[{key:"activeCodeBlock",get:function(){return this.codeBlocks.find((function(e){return e.isActive}))}},{key:"indentSize",get:function(){var e,t;return null!==(e=null===(t=this.codeBlocks.find((function(e){return e.blockType===d})))||void 0===t?void 0:t.maximumSize)&&void 0!==e?e:0}},{key:"isActive",get:function(){return this.codeBlocks.some((function(e){return e.isActive}))}},{key:"maximumSize",get:function(){return this.codeBlocks.reduce((function(e,t){return e+t.maximumSize}),0)}},{key:"addCodeBlocks",value:function(){var e;(e=this.codeBlocks).push.apply(e,arguments)}},{key:"getCodeBlockSizes",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.codeBlocks.filter((function(e){return t.includes(e.blockType)})).reduce((function(e,t){return e+t.maximumSize}),0)}}]),e}(),C=(i(16),i(5)),A=i.n(C),M=i(7),V=(i(17),i(0));function I(e){var t=e.blockType,i=e.currentSize,n=e.isActive,c=e.isClicked,r=e.isHovered,s=e.isVisible,o=i>1,a=A()(Object(M.a)({},t,s),{clicked:s&&c},{hovered:s&&r&&!c||n},Object(M.a)({},"size-".concat(i),s&&o));return Object(V.jsx)("div",{className:a})}function T(e){var t=e.codeBlocks,i=(e.isActive,Object(n.useState)(!1)),c=Object(o.a)(i,2),r=c[0],s=c[1],a=Object(n.useState)(!1),l=Object(o.a)(a,2),u=l[0],d=l[1],j=A()("line-number",{clicked:r},{hovered:u&&!r});return Object(V.jsxs)("div",{className:"code-line",onClick:function(){return s(!r)},onMouseOut:function(){return d(!1)},onMouseOver:function(){return d(!0)},children:[t.some((function(e){return e.isVisible}))&&Object(V.jsx)("div",{className:j}),t.map((function(e){return Object(V.jsx)(I,{blockType:e.blockType,currentSize:e.currentSize,isVisible:e.isVisible,isClicked:r,isHovered:u},Object(S.a)())}))]})}var R=function(e){return Math.floor(Math.random()*e)+1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return Math.random()<e},N=g,E=B,F=y,J=k,q=[new z(new p(d),new p(j),new p(f,2),new p(u)),new z(new p(j),new p(f,2),new p(u)),new z(new p(j),new p(f,3),new p(l),new p(u))];function G(){var e=Object(n.useState)(q),t=Object(o.a)(e,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=i.slice(),t=e.map((function(e){return e.isActive})).lastIndexOf(!0),n=t>-1&&e[t];if(n)n.activeCodeBlock.update();else{var r=e[0],s=new z(new p(d,W(r.indentSize)),new p(j),new p(f,R(Math.round(J/2)))),o=H(),a=o&&H(.75),v=H(),O=v&&!a&&H(.75),w=F-(s.maximumSize+a+O+1)-(v?s.getCodeBlockSizes(f):0),k=o+a+2*v+O,g=function(){return Math.min(Math.floor(w/k),J)};if(o&&w>0){var y=R(g());s.addCodeBlocks(new p(l,y)),w-=y,k-=1}if(a&&w>0){var B=R(g());s.addCodeBlocks(new p(b),new p(m,B)),w-=B,k-=1}s.addCodeBlocks(new p(u)),v&&w>0&&(s.addCodeBlocks(new p(h,R(g()))),O&&w>0&&s.addCodeBlocks(new p(b),new p(h,R(g()))),s.addCodeBlocks(new p(j),new p(f,s.getCodeBlockSizes(f)),new p(u)),w-=s.getCodeBlockSizes(h),k-=2+O),e.length>=x&&e.pop(),e.unshift(s)}c(e)}),w);return function(){return clearInterval(e)}}),[i]),Object(V.jsxs)("header",{id:"animator-wrapper",children:[Object(V.jsxs)("div",{id:"animator-title",children:[Object(V.jsx)("div",{}),Object(V.jsx)("div",{}),Object(V.jsx)("div",{}),Object(V.jsx)("div",{})]}),Object(V.jsxs)("div",{id:"animator-body",children:[Object(V.jsxs)("div",{id:"animator-name",children:[Object(V.jsx)("img",{src:a,alt:"man technologist emoji"}),Object(V.jsx)("span",{children:"Austin Williams"})]}),Object(V.jsxs)("div",{id:"animator-code",children:[Object(V.jsx)("div",{id:"animator-spacer"}),i.map((function(e){return Object(V.jsx)(T,{isActive:e.isActive,codeBlocks:e.codeBlocks},e.key)}))]})]})]})}var W=function(e){if(E===e)return e+H();if(N===e)return e-H();var t=R(4);return 3===t?e+1:4===t?e-1:e},Y=(i(19),i.p+"static/media/avatar.a7e55642.jpg"),_=i.p+"static/media/banner.0442ce7c.png",D=i.p+"static/media/github.04be58c1.svg",K=i.p+"static/media/scroll.02761356.svg";function L(e){var t=e.asRef;return Object(V.jsxs)("main",{id:"description",ref:t,children:[Object(V.jsxs)("article",{children:[Object(V.jsx)("img",{src:Y,alt:"avatar",draggable:"false"}),Object(V.jsxs)("span",{children:["Hey \ud83d\udc4b \u2014 My name is ",Object(V.jsx)("a",{href:"https://www.linkedin.com/in/auwilliams",children:"Austin"}),". I started my career by developing government programs and collaborating directly with big tech companies who taught me the art of delivering great software from start to finish."]})]}),Object(V.jsxs)("article",{children:[Object(V.jsx)("img",{src:_,alt:"banner",draggable:"false"}),Object(V.jsxs)("span",{children:["I love working with computers and I'm always open to new opportunities. Feel free to send an email for side-work or employment inquiries. You can reach me anytime at ",Object(V.jsx)("a",{href:"mailto:me@austinwilliams.dev",children:"me@austinwilliams.dev"}),". \ud83d\udcec"]})]}),Object(V.jsxs)("footer",{children:[Object(V.jsxs)("button",{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:[Object(V.jsx)("img",{src:K,alt:"return icon"}),"Back to top"]}),Object(V.jsxs)("a",{href:"https://github.com/au-williams/au-williams.github.io",target:"_blank",rel:"noopener noreferrer",children:[Object(V.jsx)("img",{src:D,alt:"github logo"}),"GitHub"]})]})]})}i(20);function P(e){var t=e.toRef;return Object(V.jsxs)("button",{id:"hover-button",onClick:function(){return t.current.scrollIntoView({behavior:"smooth"})},children:[Object(V.jsx)("span",{children:"About"}),Object(V.jsx)("span",{children:"\u2193"})]})}function Q(e){var t=Object(n.useRef)(null);return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("div",{id:"vh-wrapper",children:[Object(V.jsx)(G,{}),Object(V.jsx)(P,{toRef:t})]}),Object(V.jsx)(L,{asRef:t})]})}i(21);s.a.render(Object(V.jsx)(c.a.StrictMode,{children:Object(V.jsx)(Q,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.2019e3b5.chunk.js.map