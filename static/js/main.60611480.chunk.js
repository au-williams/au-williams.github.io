(this.webpackJsonpaustinwilliams=this.webpackJsonpaustinwilliams||[]).push([[0],{414:function(A,e,t){},415:function(A,e,t){},416:function(A,e,t){},417:function(A,e,t){},419:function(A,e,t){},420:function(A,e,t){},421:function(A,e,t){},422:function(A,e,t){"use strict";t.r(e);t(207),t(219);var n=t(21),i=t.n(n),r=t(205),o=t.n(r),c=(t(414),t(55)),a=(t(415),t.p+"static/media/person emoji.04a0aa74.png"),s="attribute",l="close angle",d="indent",u="start angle",g="operator",j="string",b="tag-name",m="value",f=t(104),B=t(105),h=function(){function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Object(f.a)(this,A),this.blockType=e,this.isVisible=!1,this.currentSize=e===d?t:1,this.maximumSize=t}return Object(B.a)(A,[{key:"isActive",get:function(){return!this.isVisible||this.currentSize<this.maximumSize}},{key:"update",value:function(){this.isVisible?this.currentSize++:this.isVisible=!0}}]),A}(),w=t(423),C=function(){function A(){Object(f.a)(this,A);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.codeBlocks=t,this.key=Object(w.a)()}return Object(B.a)(A,[{key:"activeCodeBlock",get:function(){return this.codeBlocks.find((function(A){return A.isActive}))}},{key:"indentSize",get:function(){var A,e;return null!==(A=null===(e=this.codeBlocks.find((function(A){return A.blockType===d})))||void 0===e?void 0:e.maximumSize)&&void 0!==A?A:0}},{key:"isActive",get:function(){return this.codeBlocks.some((function(A){return A.isActive}))}},{key:"maximumSize",get:function(){return this.codeBlocks.reduce((function(A,e){return A+e.maximumSize}),0)}},{key:"addCodeBlocks",value:function(){var A;(A=this.codeBlocks).push.apply(A,arguments)}},{key:"getCodeBlockSizes",value:function(){for(var A=arguments.length,e=new Array(A),t=0;t<A;t++)e[t]=arguments[t];return this.codeBlocks.filter((function(A){return e.includes(A.blockType)})).reduce((function(A,e){return A+e.maximumSize}),0)}}]),A}(),v=(t(416),t(106)),Q=t.n(v),I=t(138),E=(t(417),t(4));function O(A){var e=A.blockType,t=A.currentSize,n=A.isColored,i=A.isVisible,r=Q()(Object(I.a)({},e,i),Object(I.a)({},"size-".concat(t),i&&t>1),{color:n});return Object(E.jsx)("div",{className:r})}function p(A){var e=A.codeBlocks,t=Object(n.useState)(!1),i=Object(c.a)(t,2),r=i[0],o=i[1],a=Object(n.useState)(!1),s=Object(c.a)(a,2),l=s[0],d=s[1],u=Q()("line-number",{clicked:r},{hovered:l&&!r});return Object(E.jsxs)("div",{className:"code-line",onClick:function(){return o(!r)},onMouseOut:function(){return d(!1)},onMouseOver:function(){return d(!0)},children:[e.some((function(A){return A.isVisible}))&&Object(E.jsx)("div",{className:u}),e.map((function(A){return Object(E.jsx)(O,{blockType:A.blockType,currentSize:A.currentSize,isVisible:A.isVisible,isColored:r||l},Object(w.a)())}))]})}var k=t(56),W=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return Math.random()<A},z=function(A){return Math.floor(Math.random()*A)+1},N=k.animatorGenerationSpeed,L=k.codeLineMaxIndentSize,X=k.codeLineMinIndentSize,x=k.codeLineMaxTotalSize,V=k.codeBlockMaxSize,M=[new C(new h(d),new h(u),new h(b,2),new h(l)),new C(new h(u),new h(b,2),new h(l)),new C(new h(u),new h(b,3),new h(s),new h(l))];function S(){var A=Object(n.useState)(M),e=Object(c.a)(A,2),t=e[0],i=e[1];return Object(n.useEffect)((function(){var A=setInterval((function(){var A=t.slice(),e=A.map((function(A){return A.isActive})).lastIndexOf(!0),n=e>-1&&A[e];if(n)n.activeCodeBlock.update();else{var r=A[0],o=new C(new h(d,H(r.indentSize)),new h(u),new h(b,z(Math.round(V/2)))),c=W(),a=c&&W(.75),f=W(),B=f&&!a&&W(.75),w=x-(o.maximumSize+a+B+1)-(f?o.getCodeBlockSizes(b):0),v=c+a+2*f+B,Q=function(){return Math.min(Math.floor(w/v),V)};if(c&&w>0){var I=z(Q());o.addCodeBlocks(new h(s,I)),w-=I,v-=1}if(a&&w>0){var E=z(Q());o.addCodeBlocks(new h(g),new h(j,E)),w-=E,v-=1}o.addCodeBlocks(new h(l)),f&&w>0&&(o.addCodeBlocks(new h(m,z(Q()))),B&&w>0&&o.addCodeBlocks(new h(g),new h(m,z(Q()))),o.addCodeBlocks(new h(u),new h(b,o.getCodeBlockSizes(b)),new h(l)),w-=o.getCodeBlockSizes(m),v-=2+B),A.length>=k.codeLineMaxTotalCount&&A.pop(),A.unshift(o)}i(A)}),N);return function(){return clearInterval(A)}}),[t]),Object(E.jsxs)("div",{id:"animator-wrapper",children:[Object(E.jsxs)("div",{id:"animator-title-bar",children:[Object(E.jsx)("div",{}),Object(E.jsx)("div",{}),Object(E.jsx)("div",{}),Object(E.jsx)("div",{})]}),Object(E.jsxs)("div",{id:"animator-body",children:[Object(E.jsxs)("div",{id:"animator-name",children:[Object(E.jsx)("img",{src:a,alt:"man technologist emoji"}),Object(E.jsx)("span",{children:"Austin Williams"})]}),Object(E.jsxs)("div",{id:"animator-code",children:[Object(E.jsx)("div",{id:"animator-spacer"}),t.map((function(A){return Object(E.jsx)(p,{isActive:A.isActive,codeBlocks:A.codeBlocks},A.key)}))]})]})]})}var H=function(A){if(X===A)return A+W();if(L===A)return A-W();var e=z(4);return 3===e?A+1:4===e?A-1:A},D=(t(419),t.p+"static/media/avatar placeholder.52b066a1.svg"),y=t.p+"static/media/banner.0442ce7c.png",q=t.p+"static/media/github logo.a5813f4e.svg",P=t.p+"static/media/scroll icon.c01715c4.svg",G=t.p+"static/media/waving emoji.41c3d15c.png";function U(A){var e=A.isRef,t=Object(n.useState)(D),i=Object(c.a)(t,2),r=i[0],o=i[1];return Object(n.useEffect)((function(){fetch("https://api.github.com/users/au-williams").then((function(A){return A.json()})).then((function(A){return o(A.avatar_url)})).catch((function(A){return console.error("Error:",A)}))})),Object(E.jsxs)("div",{id:"content-wrapper",ref:e,children:[Object(E.jsxs)("div",{className:"flex-wrapper",children:[Object(E.jsx)("img",{src:r,alt:"avatar",draggable:"false"}),Object(E.jsxs)("div",{children:["Hey ",Object(E.jsx)("img",{src:G,alt:"waving emoji"})," \u2014 My name is ",Object(E.jsx)("a",{href:"https://www.linkedin.com/in/auwilliams",children:"Austin"}),". I started my career by developing government programs and collaborating with major tech companies, who taught me their art of delivering great software from start to finish."]})]}),Object(E.jsxs)("div",{className:"flex-wrapper",children:[Object(E.jsx)("img",{src:y,alt:"banner",draggable:"false"}),Object(E.jsxs)("div",{children:["I love working with computers and I'm always open to new opportunities. Feel free to send an email for side-work or employment inquiries \u2014 you can reach me at ",Object(E.jsx)("a",{href:"mailto:me@austinwilliams.dev",children:"me@austinwilliams.dev"}),". ",Object(E.jsx)("img",{src:"data:image/png;base64,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",alt:"mailbox emoji"})]})]}),Object(E.jsxs)("div",{id:"footer",children:[Object(E.jsxs)("button",{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:[Object(E.jsx)("img",{src:P,alt:"return icon"}),"Back to top"]}),Object(E.jsxs)("a",{href:"https://github.com/au-williams/au-williams.github.io",target:"_blank",rel:"noopener noreferrer",children:[Object(E.jsx)("img",{src:q,alt:"github logo"}),"GitHub"]})]})]})}t(420);function F(A){var e=A.toRef;return Object(E.jsxs)("button",{id:"hover-button",onClick:function(){return e.current.scrollIntoView({behavior:"smooth"})},children:[Object(E.jsx)("div",{children:"About"}),Object(E.jsx)("div",{children:"\u2193"})]})}function T(){var A=Object(n.useRef)(null);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"viewport-wrapper",children:[Object(E.jsx)(S,{}),Object(E.jsx)(F,{toRef:A})]}),Object(E.jsx)(U,{isRef:A})]})}t(421);o.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(T,{})}),document.getElementById("root"))},56:function(A){A.exports=JSON.parse('{"animatorGenerationSpeed":175,"codeBlockMaxSize":5,"codeLineMaxIndentSize":3,"codeLineMaxTotalCount":14,"codeLineMaxTotalSize":16}')}},[[422,1,2]]]);
//# sourceMappingURL=main.60611480.chunk.js.map