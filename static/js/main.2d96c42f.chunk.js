(this.webpackJsonpaustinwilliams=this.webpackJsonpaustinwilliams||[]).push([[0],{18:function(A){A.exports=JSON.parse('{"a":175,"b":5,"c":3,"d":1,"e":["close angle","indent","start angle","operator","space"],"f":4,"g":16,"h":14,"i":"G-JFBLY5T1C0"}')},418:function(A,e,t){},419:function(A,e,t){},420:function(A,e,t){},422:function(A,e,t){},423:function(A,e,t){},427:function(A,e,t){},428:function(A,e,t){},429:function(A,e,t){"use strict";t.r(e);t(211),t(223);var n=t(16),i=t.n(n),c=t(208),r=t.n(c),o=(t(418),t(18)),a=t(32),s=t(209),u=t(65),l=t.n(u),d=t.p+"static/media/eraser.33f55e37.svg",f=t.p+"static/media/pause.62ab8f81.svg",b=t.p+"static/media/rewind.2215bc26.svg",j=t.p+"static/media/pin_on.f3fd3dd6.svg",m=t.p+"static/media/pin_off.d7cc560b.svg",g=t.p+"static/media/person.04a0aa74.png",h=t.p+"static/media/play.725e94b8.svg",B=t.p+"static/media/fast_forward.ad17a8f2.svg",C={ATTRIBUTE:"attribute",CLOSE_ANGLE:"close angle",INDENT:"indent",START_ANGLE:"start angle",OPERATOR:"operator",STRING:"string",TAG_NAME:"tag-name",VALUE:"value"},w=t(108),v=t(109),E=function(){function A(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Object(w.a)(this,A),this.decreaseSize=function(){t.currentSize>=--t.maximumSize&&(t.currentSize=t.maximumSize)},this.increaseSize=function(){t.currentSize>=t.maximumSize++&&(t.currentSize=t.maximumSize)},this.updateSize=function(){t.isVisible?t.maximumSize<++t.currentSize&&console.error("CodeBlock CurrentSize property is out of range"):t.isVisible=!0},this.blockType=e,this.isVisible=!1,this.currentSize=o.e.includes(e)?n:1,this.maximumSize=n}return Object(v.a)(A,[{key:"isActive",get:function(){return!this.isVisible||this.currentSize<this.maximumSize}}]),A}(),O=t(141),p=t(431),k=function(){function A(){Object(w.a)(this,A);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.codeBlocks=t,this.isClicked=!1,this.key=Object(p.a)()}return Object(v.a)(A,[{key:"activeCodeBlock",get:function(){return this.codeBlocks.find((function(A){return A.isActive}))}},{key:"indentSize",get:function(){var A,e;return null!==(A=null===(e=this.codeBlocks.find((function(A){return A.blockType===C.INDENT})))||void 0===e?void 0:e.maximumSize)&&void 0!==A?A:0}},{key:"isActive",get:function(){return this.codeBlocks.some((function(A){return A.isActive}))}},{key:"isNewLine",get:function(){return 0===this.codeBlocks.reduce((function(A,e){return A+e.isVisible}),0)}},{key:"maximumSize",get:function(){return this.codeBlocks.reduce((function(A,e){return A+e.maximumSize}),0)}},{key:"addCodeBlocks",value:function(){var A;(A=this.codeBlocks).push.apply(A,arguments)}},{key:"addConditionalCodeBlocks",value:function(){for(var A,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];(A=this.codeBlocks).push.apply(A,Object(O.a)(t.filter((function(A){return null!==A&&"object"===typeof A}))))}},{key:"getCodeBlockSizes",value:function(){for(var A=arguments.length,e=new Array(A),t=0;t<A;t++)e[t]=arguments[t];return this.codeBlocks.filter((function(A){return e.includes(A.blockType)})).reduce((function(A,e){return A+e.maximumSize}),0)}},{key:"getCodeBlockTypes",value:function(){return Object(O.a)(new Set(this.codeBlocks.map((function(A){return A.blockType}))))}},{key:"findCodeBlock",value:function(A){return this.codeBlocks.find((function(e){return e.blockType===A}))}},{key:"hasCodeBlock",value:function(A){return this.codeBlocks.some((function(e){return e.blockType===A}))}}]),A}(),I=(t(419),t(210)),Q=(t(420),t(2)),N=function(A){var e=A.blockType,t=A.currentSize,n=A.useColor;return Object(Q.jsx)("div",{className:l()([e],{color:n},Object(I.a)({},"size-".concat(t),t>1))})};t(422);var S=function(A){var e=A.codeBlocks,t=A.isClicked,i=A.onClick,c=Object(n.useState)(!1),r=Object(a.a)(c,2),o=r[0],s=r[1];return Object(Q.jsxs)("div",{className:"code-line",onClick:function(){return i(!t)},onMouseOut:function(){return s(!1)},onMouseOver:function(){return s(!0)},children:[e.some((function(A){return A.isVisible}))&&Object(Q.jsx)("div",{className:l()("line-number",{clicked:t},{hovered:o&&!t})}),e.map((function(A,e){return A.isVisible&&Object(Q.jsx)(N,{blockType:A.blockType,currentSize:A.currentSize,useColor:t||o},e)}))]})},z=[new k(new E(C.INDENT),new E(C.START_ANGLE),new E(C.TAG_NAME,2),new E(C.CLOSE_ANGLE)),new k(new E(C.START_ANGLE),new E(C.TAG_NAME,2),new E(C.CLOSE_ANGLE)),new k(new E(C.START_ANGLE),new E(C.TAG_NAME,3),new E(C.ATTRIBUTE),new E(C.CLOSE_ANGLE))],L=function(A){return A<1e3?A:"".concat((A/1e3).toFixed(1),"k")},T=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return Math.random()<A},x=function(A){return Math.floor(Math.random()*A)+1},y=function(A,e){return Math.floor(Math.random()*(e-A+1))+A};var W=function(){var A=Object(n.useState)(z),e=Object(a.a)(A,2),t=e[0],i=e[1],c=Object(n.useState)(o.a),r=Object(a.a)(c,2),u=r[0],w=r[1],v=t.slice(),O=Object(n.useState)(!1),p=Object(a.a)(O,2),I=p[0],N=p[1],W=Object(n.useState)(!1),G=Object(a.a)(W,2),M=G[0],X=G[1],V=Object(n.useState)(!1),D=Object(a.a)(V,2),H=D[0],R=D[1],U=Object(n.useState)(0),P=Object(a.a)(U,2),q=P[0],F=P[1],Y=Object(n.useState)(0),K=Object(a.a)(Y,2),Z=K[0],J=K[1],_=L(q),$=L(Z),AA=H||I||M,eA=l()({visible:AA},{pause:AA&&M},{debug:AA&&!M&&t.some((function(A){return A.isClicked}))});return Object(n.useEffect)((function(){var A=v.map((function(A){return A.isActive})).lastIndexOf(!0),e=A>-1&&v[A],t=function(){var A=v[0],e=new k,t=A.hasCodeBlock(C.VALUE),n=A.getCodeBlockTypes().length<=4,i=function(A){var e,t=A[0].indentSize,n=0,i=Object(s.a)(A);try{for(i.s();!(e=i.n()).done&&e.value.indentSize===t;)n++}catch(c){i.e(c)}finally{i.f()}return n}(v),c=i>=o.f&&A.indentSize>=o.c,r=i>=o.f&&A.indentSize<=1,a=i>=x(o.f),u=a&&A.indentSize>o.d,l=a&&A.indentSize<o.c&&!t&&!n,d=A.indentSize;r||l?d++:(c||u)&&d--;var f=new E(C.INDENT,d);if(e.addCodeBlocks(f),e.indentSize<A.indentSize){var b,j,m=(null===(b=v.find((function(A){return A.indentSize===e.indentSize})))||void 0===b||null===(j=b.findCodeBlock(C.TAG_NAME))||void 0===j?void 0:j.maximumSize)||x(2)+T(.75);e.addCodeBlocks(new E(C.START_ANGLE),new E(C.TAG_NAME,m),new E(C.CLOSE_ANGLE))}else{var g=i===o.f-1,h=T(.8),B=h&&T(.675),w=!g&&T(B?.25:.5),O=o.g-f.maximumSize-2;B&&(O-=1),w&&(O-=2);var p=1+h+B+2*w,I=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.b,t=Math.floor(O/p),n=Math.min(t,A),i=Math.min(t,1+T()),c=e.codeBlocks.some((function(A){return 1===A.maximumSize&&!o.e.includes(A.blockType)})),r=e.getCodeBlockTypes().length<=3&&p<=1;1===i&&c&&(i=Math.min(2,t)),1===i&&r&&(i+=T(.8));var a=y(i,n);return O-=a,p-=1,a},Q=I(3);w&&(O-=Q,p-=1),e.addCodeBlocks(new E(C.START_ANGLE),new E(C.TAG_NAME,Q)),e.addConditionalCodeBlocks(h&&new E(C.ATTRIBUTE,I()),B&&new E(C.OPERATOR),B&&new E(C.STRING,I()),new E(C.CLOSE_ANGLE),w&&new E(C.VALUE,I()),w&&new E(C.START_ANGLE),w&&new E(C.TAG_NAME,Q),w&&new E(C.CLOSE_ANGLE))}v.length>=o.h&&(v.length=o.h-1),v.unshift(e)},n=setInterval((function(){M||(e?function(){var A=e.activeCodeBlock.blockType!==C.INDENT,t=e.isNewLine;A&&F((function(A){return A+1})),t&&J((function(A){return A+1})),e.activeCodeBlock.updateSize()}():t(),i(v))}),u);return function(){return clearInterval(n)}}),[t,u,M,v]),Object(Q.jsx)("div",{className:"aspect-ratio-wrapper",children:Object(Q.jsxs)("div",{id:"animator-wrapper",onMouseOver:function(){return N(!0)},onMouseLeave:function(){return N(!1)},children:[Object(Q.jsxs)("div",{id:"animator-title",children:[Object(Q.jsx)("div",{}),Object(Q.jsx)("div",{}),Object(Q.jsx)("div",{}),Object(Q.jsx)("div",{})]}),Object(Q.jsxs)("div",{id:"animator-body",children:[Object(Q.jsx)("div",{id:"animator-code",children:v.map((function(A){return Object(Q.jsx)(S,{codeBlocks:A.codeBlocks,isClicked:A.isClicked,onClick:function(e){return function(A,e){A.isClicked=e,i(v)}(A,e)}},A.key)}))}),Object(Q.jsxs)("div",{id:"animator-name",children:[Object(Q.jsx)("img",{src:g,alt:"man technologist emoji"}),Object(Q.jsx)("span",{children:"Austin Williams"})]})]}),Object(Q.jsxs)("div",{id:"animator-footer",className:eA,children:[Object(Q.jsx)("button",{onClick:function(){return R((function(A){return!A}))},children:H?Object(Q.jsx)("img",{src:m,alt:"pin off"}):Object(Q.jsx)("img",{src:j,alt:"pin on"})}),Object(Q.jsx)("button",{onClick:function(){return A=25,!M&&w((function(e){return Math.min(e+A,1e3)}));var A},children:Object(Q.jsx)("img",{src:b,alt:"rewind"})}),Object(Q.jsx)("button",{onClick:function(){return X((function(A){return!A}))},children:M?Object(Q.jsx)("img",{src:h,alt:"play"}):Object(Q.jsx)("img",{src:f,alt:"pause"})}),Object(Q.jsx)("button",{onClick:function(){return A=25,!M&&w((function(e){return Math.max(e-A,0)}));var A},children:Object(Q.jsx)("img",{src:B,alt:"fast forward"})}),Object(Q.jsx)("button",{children:M?"Paused":"".concat(u,"ms")}),Object(Q.jsx)("button",{onClick:function(){v.filter((function(A){return A.isClicked})).forEach((function(A){return A.isClicked=!1})),X(!1),R(!1),w(o.a)},children:Object(Q.jsx)("img",{src:d,alt:"reset"})}),Object(Q.jsxs)("button",{children:["Lines: ",$]}),Object(Q.jsxs)("button",{children:["Chars: ",_]})]})]})})},G=(t(423),t.p+"static/media/avatar_placeholder.52b066a1.svg"),M=t.p+"static/media/banner.0442ce7c.png",X=t.p+"static/media/github.a5813f4e.svg",V=t(85),D=t.n(V),H=t.p+"static/media/scroll.c01715c4.svg",R=t.p+"static/media/wave.41c3d15c.png";function U(A){var e=A.isRef,t=Object(n.useState)(G),i=Object(a.a)(t,2),c=i[0],r=i[1],o=function(A,e){return D.a.event({category:A,action:e})};return Object(n.useEffect)((function(){fetch("https://api.github.com/users/au-williams").then((function(A){return A.json()})).then((function(A){return r(A.avatar_url)})).catch((function(A){return console.error("Error:",A)}))})),Object(Q.jsxs)("div",{id:"content-wrapper",ref:e,children:[Object(Q.jsxs)("div",{className:"flex-wrapper",children:[Object(Q.jsx)("img",{src:c,alt:"avatar",draggable:"false"}),Object(Q.jsxs)("div",{children:["Hey ",Object(Q.jsx)("img",{src:R,alt:"waving emoji"})," \u2014 My name is ",Object(Q.jsx)("a",{href:"https://www.linkedin.com/in/auwilliams",children:"Austin"}),". I started my career by developing government programs and collaborating with major tech companies, who taught me their art of delivering great software from start to finish."]})]}),Object(Q.jsxs)("div",{className:"flex-wrapper",children:[Object(Q.jsx)("img",{src:M,alt:"banner",draggable:"false"}),Object(Q.jsxs)("div",{children:["I love working with computers and I'm always open to new opportunities. Feel free to send an email for side-work or employment inquiries \u2014 you can reach me at ",Object(Q.jsx)("a",{href:"mailto:me@austinwilliams.dev",children:"me@austinwilliams.dev"}),". ",Object(Q.jsx)("img",{src:"data:image/png;base64,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",alt:"mailbox emoji"})]})]}),Object(Q.jsxs)("div",{id:"footer",children:[Object(Q.jsxs)("button",{onClick:function(){o("click","back_to_top_button"),window.scrollTo({top:0,behavior:"smooth"})},children:[Object(Q.jsx)("img",{src:H,alt:"return icon"}),"Back to top"]}),Object(Q.jsxs)("a",{href:"https://github.com/au-williams/au-williams.github.io",onClick:function(){return o("click","github_outbound_link")},rel:"noopener noreferrer",target:"_blank",children:[Object(Q.jsx)("img",{src:X,alt:"github"}),"GitHub"]})]})]})}t(427);function P(A){var e=A.toRef;return Object(Q.jsxs)("button",{id:"hover-button",onClick:function(){return e.current.scrollIntoView({behavior:"smooth"})},children:[Object(Q.jsx)("div",{children:"About"}),Object(Q.jsx)("div",{children:"\u2193"})]})}function q(){var A=Object(n.useRef)(null);return Object(n.useEffect)((function(){D.a.initialize(o.i),D.a.send("pageview")})),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("div",{className:"viewport-wrapper",children:[Object(Q.jsx)(W,{}),Object(Q.jsx)(P,{toRef:A})]}),Object(Q.jsx)(U,{isRef:A})]})}t(428);r.a.render(Object(Q.jsx)(i.a.StrictMode,{children:Object(Q.jsx)(q,{})}),document.getElementById("root"))}},[[429,1,2]]]);
//# sourceMappingURL=main.2d96c42f.chunk.js.map