(this.webpackJsonpaustinwilliams=this.webpackJsonpaustinwilliams||[]).push([[0],{22:function(e,A,t){e.exports={wrapper:"CodeWindow_wrapper__4Zs5s",name:"CodeWindow_name__MIoGr",title:"CodeWindow_title__1XfQ9",body:"CodeWindow_body__25m19",code:"CodeWindow_code__UtQxN",footer:"CodeWindow_footer__5nK2F",visible:"CodeWindow_visible__2JHlF",tooltip:"CodeWindow_tooltip__3KFYY",debug:"CodeWindow_debug__3QsLh",pause:"CodeWindow_pause__1IsNJ"}},425:function(e,A,t){},426:function(e,A,t){"use strict";t.r(A);t(214),t(226);var n=t(17),o=t.n(n),i=t(211),c=t.n(i),r=t(32),a=t(111),s=t.n(a),l=t.p+"static/media/avatar.52b066a1.svg",d=t.p+"static/media/eraser.1624377e.svg",u=t.p+"static/media/fast_forward.8509e017.svg",b=t.p+"static/media/github.a5813f4e.svg",C=t.p+"static/media/pause.1e0b1de4.svg",j=t.p+"static/media/pin_off.46908c29.svg",m=t.p+"static/media/pin_on.0674b3a1.svg",g=t.p+"static/media/play.ddd3a5ee.svg",p=t.p+"static/media/rewind.7872dd63.svg",f=t.p+"static/media/scroll.c01715c4.svg",B=t.p+"static/media/banner.0442ce7c.png",_=t.p+"static/media/person_emoji.04a0aa74.png",h=t.p+"static/media/wave_emoji.41c3d15c.png",w=t(213),E=t(212),O=t(143),v=t(144),I=t(66),k=t.n(I),N=t(428),Q=t(57),L=t(87),W=t.n(L),x=t(2),X=function(e){var A=e.blockType,t=e.currentSize,n=e.isCurrentBlock,o=e.useColor;return Object(x.jsx)("div",{className:k()(W.a[A],Object(Q.a)({},W.a.press,n),Object(Q.a)({},W.a.color,o),Object(Q.a)({},W.a["size-".concat(t)],t>1))})},S=t(88),M=t.n(S),D=function(e){var A=e.codeBlocks,t=e.isClicked,o=e.isCurrentLine,i=e.onClick,c=Object(n.useState)(!1),a=Object(r.a)(c,2),s=a[0],l=a[1];return Object(x.jsxs)("div",{className:M.a.codeLine,onClick:function(){return i(!t)},onMouseLeave:function(){return l(!1)},onMouseOver:function(){return l(!0)},onFocus:function(){return l(!0)},role:"presentation",children:[Object(x.jsx)("div",{className:k()(M.a.lineNumber,Object(Q.a)({},M.a.clicked,t),Object(Q.a)({},M.a.hovered,s&&!t))}),A.map((function(e,n){var i=e.blockType,c=e.currentSize,r=o&&A.map((function(e){return e.isVisible})).lastIndexOf(!0)===n;return Object(x.jsx)(X,{blockType:i,currentSize:c,isCurrentBlock:r,useColor:t||s})}))]})},z=t(22),V=t.n(z),y="attribute",T="close-angle",H="indent",P="start-angle",U="operator",q="string",F="tag-name",G="value",K={CODE_BLOCK_ANIMATE_SPEED:175,CODE_BLOCK_MAX_SIZE:5,CODE_BLOCK_NO_RESIZE:["close-angle","indent","start-angle","operator"],CODE_LINE_MAX_SCROLL:14,CODE_LINE_MAX_SIZE:16,INDENT_MAX_CONSECUTIVE_COUNT:4,INDENT_MAX_SIZE:3,INDENT_MIN_SIZE:1},R=function(){function e(A){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Object(O.a)(this,e),this.blockType=A,this.isVisible=!1,this.currentSize=1,this.maximumSize=t}return Object(v.a)(e,[{key:"isActive",get:function(){return!this.isVisible||this.currentSize<this.maximumSize}}]),e}(),Y=function(){function e(){Object(O.a)(this,e);for(var A=arguments.length,t=new Array(A),n=0;n<A;n++)t[n]=arguments[n];this.codeBlocks=t,this.isClicked=!1,this.key=Object(N.a)()}return Object(v.a)(e,[{key:"isActive",get:function(){return this.codeBlocks.some((function(e){return e.isActive}))}}]),e}(),Z=function(e){return e<1e3?e:"".concat((e/1e3).toFixed(1),"k")},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return Math.random()<e},$=function(e,A){return Math.floor(Math.random()*(A-e+1))+e},ee=function(){var e=Object(n.useState)([]),A=Object(r.a)(e,2),t=A[0],o=A[1],i=Object(n.useState)(K.CODE_BLOCK_ANIMATE_SPEED),c=Object(r.a)(i,2),a=c[0],s=c[1],l=t.slice(),b=Object(n.useState)(!1),f=Object(r.a)(b,2),B=f[0],h=f[1],O=function(){return h(!0)},v=Object(n.useState)(!1),I=Object(r.a)(v,2),N=I[0],Q=I[1],L=Object(n.useState)(!1),W=Object(r.a)(L,2),X=W[0],S=W[1],M=Object(n.useState)(0),z=Object(r.a)(M,2),ee=z[0],Ae=z[1],te=Object(n.useState)(0),ne=Object(r.a)(te,2),oe=ne[0],ie=ne[1],ce=Z(ee),re=Z(oe),ae=X||B||N,se=k()(V.a.footer,ae&&V.a.visible,ae&&N&&V.a.pause,ae&&!N&&t.some((function(e){return e.isClicked}))&&V.a.debug);return Object(n.useEffect)((function(){var e=l.map((function(e){return e.isActive})).lastIndexOf(!0),A=e>-1&&l[e],t=function(){var e=new Y;switch(l.length){case 0:e.codeBlocks.push(new R(P),new R(F,3),new R(y),new R(T));break;case 1:e.codeBlocks.push(new R(P),new R(F,2),new R(T));break;case 2:e.codeBlocks.push(new R(H),new R(P),new R(F,2),new R(T));break;default:var A=l[0],t=new Set(A.codeBlocks.map((function(e){return e.blockType}))),n=t.has(G),o=t.size<=4,i=A.codeBlocks[0].maximumSize,c=i,r=function(e){var A,t,n,o=null===(A=e[0])||void 0===A||null===(t=A.codeBlocks[0])||void 0===t?void 0:t.maximumSize,i=0,c=Object(E.a)(e);try{for(c.s();!(n=c.n()).done;){var r;if((null===(r=n.value.codeBlocks[0])||void 0===r?void 0:r.maximumSize)!==o)break;i+=1}}catch(a){c.e(a)}finally{c.f()}return i}(l),a=r>=K.INDENT_MAX_CONSECUTIVE_COUNT&&i>=K.INDENT_MAX_SIZE,s=r>=K.INDENT_MAX_CONSECUTIVE_COUNT&&i<=1,d=r>=$(1,K.INDENT_MAX_CONSECUTIVE_COUNT),u=d&&i>K.INDENT_MIN_SIZE,b=d&&i<K.INDENT_MAX_SIZE&&!n&&!o;s||b?c+=1:(a||u)&&(c-=1);var C=new R(H,c);if(C.currentSize=C.maximumSize,e.codeBlocks.push(C),c<i){var j,m,g=(null===(j=l.find((function(e){return e.codeBlocks[0].maximumSize===c})))||void 0===j||null===(m=j.codeBlocks.find((function(e){return e.blockType===F})))||void 0===m?void 0:m.maximumSize)||$(2,3);e.codeBlocks.push(new R(P),new R(F,g),new R(T))}else{var p,f=r===K.INDENT_MAX_CONSECUTIVE_COUNT-1,B=J(.8),_=B&&J(.675),h=!f&&J(_?.25:.5),O=K.CODE_LINE_MAX_SIZE-C.maximumSize-2;_&&(O-=1),h&&(O-=2);var v=1+B+_+2*h,I=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K.CODE_BLOCK_MAX_SIZE,t=Math.floor(O/v),n=Math.min(t,A),o=Math.min(t,1+J()),i=new Set(e.codeBlocks.map((function(e){return e.blockType}))),c=e.codeBlocks.some((function(e){return 1===e.maximumSize&&!K.CODE_BLOCK_NO_RESIZE.includes(e.blockType)})),r=i.size<=3&&v<=1;1===o&&c&&(o=Math.min(2,t)),1===o&&r&&(o+=J(.8));var a=$(o,n);return O-=a,v-=1,a},k=I(3);h&&(O-=k,v-=1),e.codeBlocks.push(new R(P),new R(F,k)),(p=e.codeBlocks).push.apply(p,Object(w.a)([B&&new R(y,I()),_&&new R(U),_&&new R(q,I()),new R(T),h&&new R(G,I()),h&&new R(P),h&&new R(F,k),h&&new R(T)].filter((function(e){return"boolean"!==typeof e}))))}}l.length>=K.CODE_LINE_MAX_SCROLL&&(l.length=K.CODE_LINE_MAX_SCROLL-1),l.unshift(e)},n=setInterval((function(){N||(A?function(){var e=A.codeBlocks.find((function(e){return e.isActive})),t=e.blockType!==H,n=0===A.codeBlocks.reduce((function(e,A){return e+A.isVisible}),0);t&&Ae((function(e){return e+1})),n&&ie((function(e){return e+1})),e.isVisible?e.currentSize+=1:e.isVisible=!0}():t(),o(l))}),a);return function(){return clearInterval(n)}}),[t,a,N,l]),Object(x.jsxs)("div",{className:V.a.wrapper,onMouseOver:O,onFocus:O,onMouseLeave:function(){return h(!1)},children:[Object(x.jsxs)("div",{className:V.a.title,children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]}),Object(x.jsxs)("div",{className:V.a.body,children:[Object(x.jsx)("div",{className:V.a.code,children:l.map((function(e,A){var t=e.codeBlocks.filter((function(e){return e.isVisible})),n=0===A;return Object(x.jsx)(D,{codeBlocks:t,isClicked:e.isClicked,isCurrentLine:n,onClick:function(A){return function(e,A){e.isClicked=A,o(l)}(e,A)}},e.key)}))}),Object(x.jsxs)("div",{className:V.a.name,children:[Object(x.jsx)("img",{src:_,alt:"man technologist emoji"}),Object(x.jsx)("span",{children:"Austin Williams"})]})]}),Object(x.jsxs)("div",{className:se,children:[Object(x.jsxs)("button",{onClick:function(){return S((function(e){return!e}))},type:"button",children:[Object(x.jsx)("div",{className:V.a.tooltip,children:"Pin"}),Object(x.jsx)("img",{src:X?j:m,alt:"pin ".concat(X?"off":"on")})]}),Object(x.jsxs)("button",{onClick:function(){return e=25,!N&&s((function(A){return Math.min(A+e,1e3)}));var e},type:"button",children:[Object(x.jsx)("div",{className:V.a.tooltip,children:"Slow down"}),Object(x.jsx)("img",{src:p,alt:"rewind"})]}),Object(x.jsxs)("button",{onClick:function(){return Q((function(e){return!e}))},type:"button",children:[Object(x.jsx)("div",{className:V.a.tooltip,children:N?"Play":"Pause"}),Object(x.jsx)("img",{src:N?g:C,alt:N?"play":"pause"})]}),Object(x.jsxs)("button",{onClick:function(){return e=25,!N&&s((function(A){return Math.max(A-e,0)}));var e},type:"button",children:[Object(x.jsx)("div",{className:V.a.tooltip,children:"Speed up"}),Object(x.jsx)("img",{src:u,alt:"fast forward"})]}),Object(x.jsx)("span",{children:N?"Paused":"".concat(a,"ms")}),Object(x.jsxs)("button",{onClick:function(){l.filter((function(e){return e.isClicked})).forEach((function(e){e.isClicked=!1})),Q(!1),S(!1),s(K.CODE_BLOCK_ANIMATE_SPEED)},type:"button",children:[Object(x.jsx)("div",{className:V.a.tooltip,children:"Reset"}),Object(x.jsx)("img",{src:d,alt:"reset"})]}),Object(x.jsxs)("span",{children:[Object(x.jsxs)("span",{children:["Lines: ",re]}),Object(x.jsxs)("span",{children:["Chars: ",ce]})]})]})]})},Ae=t(67),te=t.n(Ae),ne=function(e,A){return s.a.event({category:e,action:A})},oe=function(){ne("click","back_to_top_button"),window.scrollTo({top:0,behavior:"smooth"})},ie=function(){return ne("click","github_outbound_link")},ce=function(){var e=Object(n.useState)(l),A=Object(r.a)(e,2),t=A[0],o=A[1],i=Object(n.useRef)(null);return Object(n.useEffect)((function(){s.a.initialize("G-JFBLY5T1C0"),s.a.send("pageview"),fetch("https://api.github.com/users/au-williams").then((function(e){return e.json()})).then((function(e){return o(e.avatar_url)})).catch((function(e){return console.error("Error:",e)}))})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("header",{className:te.a.viewportWrapper,children:[Object(x.jsx)(ee,{}),Object(x.jsxs)("button",{type:"button",onClick:function(){ne("click","about_button"),i.current.scrollIntoView({behavior:"smooth"})},children:["About",Object(x.jsx)("br",{}),"\u2193"]})]}),Object(x.jsxs)("section",{className:te.a.appSection,ref:i,children:[Object(x.jsxs)("article",{className:te.a.flexWrapper,children:[Object(x.jsx)("img",{src:t,alt:"avatar",draggable:"false"}),Object(x.jsxs)("p",{children:["Hey ",Object(x.jsx)("img",{src:h,alt:"waving emoji"})," \u2014 My name is"," ",Object(x.jsx)("a",{href:"https://www.linkedin.com/in/auwilliams",children:"Austin"}),". I started my career by developing government programs and collaborating with major tech companies, who taught me their art of delivering great software from start to finish."]})]}),Object(x.jsxs)("article",{className:te.a.flexWrapper,children:[Object(x.jsx)("img",{src:B,alt:"banner",draggable:"false"}),Object(x.jsxs)("p",{children:["I love working with computers and I'm always open to new opportunities. Feel free to send an email for side-work or employment inquiries \u2014 you can reach me at"," ",Object(x.jsx)("a",{href:"mailto:me@austinwilliams.dev",children:"me@austinwilliams.dev"}),"."," ",Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAYAAADNkKWqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH4wUcCjYu1na9twAAAAZiS0dEAAAAAAAA+UO7fwAAFIlJREFUeNrt3VlsXNd9x/H/LORQ3DdRpGSJ2iwZSmRtlqV4kWJVdZy6ihugMAqliFEETdMWqI1CD0EKoy3QDW3S5aFFkaBoHloggFO4aB/coPZDorp2bdSbUMm2bNmSba0kRYr7MjM9vzt3ZEqk5OHw3OFw5vtB/hhJRobDmbm/+Z9zzz1jBhRum6vLrrJUUXXeVQ9vo/IR5ykAQAACAAEIAAQgABCAAEAAAgABCAAEIKpLfj0bUBGSFRrqKVc14Z9VifBW/9ZI8Bcl42pzhb5nSnm8bXHV6ipWpq/xiKvp8M/p8DYT/ttk+OeKEVvmj19B1+2qy9Uqy62yX+tqnatOVytcNbhqCv9cF4ZhjGOxqO4vGR68fIAUHzBXyzhEsmHoTbgadzXsajT884Crc64+stwVLZcsd1XQpfC/E4Al0BiGnTqR/a7udXVHeFC2h/+dcAOiDcnRMBAHXV1w9Yqrl129GwbiMAHojzq3u10ddLUrrF5XtXQiQNmE4lTYHb7h6nVXPwtvRwnAhVO4bXT1gKsjru4Jh7gJ3mtA2dMw+koYgP/m6rir9yw3h0gA3kazqwOuHgvD705CD1jWNN/5vqv/CsPwp5abByUAZ2l1ddjV11w95KqF9w1QcYbDbvCHrv7TcnOIVR2AHWHg/ZqrBy13thZA5Qfhi67+KQzCy9UWgKmw4/vNMADreU8AVWcyHBL/rauf2BLMES5FAH7O1W+4+hVXK3kPAFWv39WPXf2dqxNWwquNShmAHWHofcvV53nNkXTvvt5UwmpisbK7vk4HxmQ2a+cm05bm4r9SOeXq+67+2XJnkSsiAPUz9rj6PVePWO5qDMC6auL2r59rs1XuthwD8PRE2o6eGrSBmQwvVmmHxS+4+iPLLa6O9K0R9XWdWsT8uKtvu7qL1xazxV3KdLjw66qNWyZbfo+t3wVfnOuKSk3nB37BctdM/6mrH7kaW44BqOtyf9fVrxvLWnALbpQZhF+2DB8XI98lpctd/9pyV4F9z3JXmfj/oIvowevKjX9w9RThB6BIWhb3267+0dUXlkMAasBwyHITmV82tk4CsPhR6s+5+oGrL5nn8xY+A1CXrOm63b+33IYFAOCLls9pmcwv+2ysfAWgNhrVZWxa0HgnrxWACGiDlL9x9XXLbZhSFgGoB/INV9+13N58ABAVnVz9C1ff9BGCcQ//fy1u/kPjqg4ApaHNj//A1a/aIneLWuxYWnN+f2y5XZrLSiwWs3g8Htzm/z7ff1clEgmrra21ZDJp2Wz2eiE6enbb3btPz3+5Pr5EImkd7e2WTVfPNuN632cymeu3MzMzNjU1FdyWGV1ZpsXS2ljhx1bkqqXFvK4626sTHmUx56fwqqurs1QqFYSZblX699lBlw+3mpoaW7FiRVBNTU22atUq6+7utra2Nmt3b3rd5g9OwjCKgIlZ7fBV2/6D3w9uLRYrtySw8a477OTXv21TDS0Wq5JVgel02sbHx21iYiKoa9eu2YULF+yTTz6xK1eu2MWLF+3cuXM2NDRULg/5jKvfstxmCiXrALXO77tLGX4KJwVcY2NjUPX19cHfFWyFBpc+2VR6MT/++OMgIHVfzc3NtmbNGtuyZYv19vYGYaigpDP02qJbMqUPpfL9VoNkMmEdnZ2WbmrNrYyuupcoNud46e/vD0Lw3XfftbfeestOnjwZ/H1ycsk2e9aJke+FneB/l6ID1CSkFjl/eSl+W3V36thaW1uDoNLf9UKpfIRTPuR0fwpE/azNmzfb3XffHQSi/q6A1fAAiwzAoX6748+fDG7LsQOc6um1T37nz6o2AG/VeOjY0Pt/enraLl26ZK+++qq99NJL9sYbb9jAwMBSNQm6flj7ii7oipGFTiDq2t7vuDpqJdyqXk+4hrcrV660devWBbcKIgVUzPOBkw/TfKBqGKD2/+2337ZTp07Z6Oho0CU2NDR4/9nVFoDxyXFrfvE/glsrw+dSwTe877BlU+zfcXODkA/DlpYW27Ztm9133322f//+4LhQl6jjpMRBuC4c0erLmKajCkCt9dOuLiXbwFTDWs3PrV271jrdcER/L2Xw5MNQk8CDg4N2+vTpoP3XPEl+aEwQEoDVHooaiek43bt3r+3ZsycIRnWHw8Ml+4ZMzaVosfTHlvsyJu8BuM/VX7paU4rfRt2dAk9zcB0dHUHwLfV8SD7oNDH8/vvvB0Gof1NHqjcA84MEYLUHoY6Hrq4u2717t+3atStoHM6fPx/MH5aiXwpD8H8LHQoXGoCdrv7KIrog+eag0RBTQ92enp6Sd3yFPka92Dp5ohDUJ53mJPWpRzdIABKEuSBUR3jvvffa+vXr7fLly8HQuARNgtYI6jyFvmvkM7fRKjQAdaXHtyzizQ00p6BuSk+YTnCUe5jkh8ZaJqAgVNeq0NbSGxCABGFuaKyTiPfcc08wbfThhx+WYk1hr6tLrv7HRwCqpdTGhKsj7V1dp6d5vtWrVwdLWZbPcZwbGo+NjQXDYs15KAS1LAcEIHJBqNGR5ga1xvaDDz6Iem4wEYbg8TAIiw5AXWuns75Hony0CosNGzYEc33lemVAod2gFomqI9Siag2LQQAiDBPXDeqM8caNG+29994LhsQR0qW58XAonC42AB929bSrhqgepeb78kPe5X9M5w5irZj/6KOPghDUJx4IQHxKI72tW7famTNngrnBCG1w9X+u3ikmAHXk/olFuLefQk+dn0Kwso7tWHCCRPMdOpOt4uQIAYhP6QTJ9u3b7ezZs8E626gGl5a7ZliXyc17QuR2403twnooqkemBZPq/HRbmcd3LDj9/8wzz1xfLgMgR/OCOjly7Ngx27FjR5Q/6qDldpK2hQSg9uL/mkW04Flzfgo/3Vby2jnNZ6rFf/bZZ4O5QUIQ+JQup9u0aZM99dRTwWWmEUmFWda2kAA8FCand5oI1RyALmWrjpFeLJgPVAhqbpAQBG7sBHWd/ZNPPhmsnojI/a5+vtAAVDI94ao1io5Iv6QuIasmCj0Ng5977rlgLRQhCNwYgvv27bMnnngiuLQ0ArfMtPkC8EFXD0XxKLTMRZfJVOuL/Nprr9nLL7/MTjLAPE3Co48+akeOHAkuKIjAvLl2cwDqJ/9iFN2fTnZoj72Ifrll8QLresgXXnghWANFFwjc2CDonIC6wJ07d0bVBWo9c+3tAnCTqwO+f3L+EjFtaVXtn3Ja/Pn888/byMgIIQjcFILKiaNHj0a1LlhzgZtvF4D7XW31/VN1RUS1zfvdLgQ1H6jhMLvHAHNDUPsKHj58OIq7V4P3wK0CUO3ZY+Z5wwNd46tUr9ah762GwsePHw+WyNAFAjcGoE6EPP7448FWeL4Ho66+YrOW980OQG16sNf3T9SJj0pd7LyYENT1wq+88gonRICb5NcHPvLII1Hc/W5XO+YLQJ0l8brji7q/5bzBQdQv8uuvvx50gTw/wE2tmhsxHjp0KNgX1LNum3WeI3/k1YfJ6HWcqo0AKv1qj8V0gQq/N998ky4QmKdB0D4BBw54PyerOac9ljsrfD0AtXWM100PtKcf3d/t6TtYdTLk6tWrzAUCN9HGwg8//HCQI57tDDPvegBuCMsbXeqW/y5d3LoL1Hb6bJYAzKXs0J4B+m4Rz9Za+J3m+QDU8hdv16Co69PSF7aG/+wA1BdK6ys39fWbhCBwYwBqqzwti9EeAh5pg4T78gGolNprt98aa0H0YLWQke6vsBDUV2329fXxZADzhKC+atPzRgn5ecA6hV532BJ6o2UvS/01lsspAPU1m9odF16OGG8VMz7AyyEAtXmqttL3TF/vu0bdn5a+eN23XfN/DOcKp5Mh+qKY+++/n+dtMQdLPGEznd3B7eJbhKxNda7WfA5P7BLTCVVtmaXdlDzSpWk9CsAeu8VmgcXQvJ86wPx356KwT7mLFy8G35Slb8/ieSuu88s0NNmFb3zH0s3tuS5usVz4pVc0+rkvLOJliAcbpurY0FdNRBGALb7uVUNfzxOWVTEM1lIYrQvUySMCsNgO0AVWQ0vwXR7eQovXoiwaBH3BmBZFnzhxwtfdareFNerv15vHBdAKQLWsHMQLC0B1f9ophiHwYo6U3NDV5zwglp4WRWstoELQs40KQK/r/9T9sfHBwmkeUF2gbgHMzZWVK1dGEoCdPjsZhr/FP3cDAwPBl6sDmEsbKnteW9ypAGz0eRBrCMzwtzjqABWADIOBubQW0HODVa8A9Pb1bDpwufqjeGNjYwyBgVvQxRWe86VRAehtsz4FIJsfFE8bpdI9A3PpuNBXanjOl2avHaBwAqR4ui6YrbGA+SkAPU8PNXgfAjN/VTwNf+kAgflpdynPHWBdfjMEOkAAZU3Z4rvB8hqndH8AlhPOWAAgAAGAAAQAAhAACEAAIAABgAAEAAIQAAhAACAAAYAABAACEAAIQAAgAAGAAAQAAhAACEAAIAABgAAEAAIQAAhAACAAAYAABAACEAAIQAAgAAHgVpLl/gCz2WxVvBD6PavldwUIwAIkEgmrr6+3WCwWVKUHYHNzs8XjNOVA1QegAqGnp8eOHTsWBOHo6Kil0+mKfjEUfo2NjXSCAB2gWU1NjW3ZssVaWlrs2rVr1tfXZyMjI0EQVmpHSPgBBOCczqi1tdWampqCIOzv77fh4eGKDkIABOANNBRua2sLglABqCBURzgzM0MQAqjsALz+oJPJIAh10kAd4cDAQBCIBCGAig/AmztCBWG+I8wPjQGgogNwdhDm5wgJQgBVFYCfFYQMjQFUfAAShACqPgAJwmXE98vAMkoQgIUFIXOESysbi1u2JuXzhXb3yQcbCECCcDkEoHs90k2tVnPlvJf7Sze2BCEIFKoqr7zPB+H69euD0lIa/RuXoZUy/bKWra2zqZ7e4M8+7m+qe51lalN+7g8EYLUEYW9vr23YsMHa29uDRdYEYYky0IXV+KbPu9taW+zkXTZZY+N3brdsagVPLAjAhQahNlzId4QKwgRDqZJ0gWNbd9hE710WyywiADMZm1y32d3Xbro/LEiSp2DWp0E8HgSh5gh1jbF2n9GldswRRheA6ZYOGzr4Fau9eNYSI9fMFnoSw91HpqHJhg4csZn2lQQgCEAfQajL6xoaGoIgnL18Br5D0Gx0+z6r6btgbT/5kcUnxgoPwWAeMWWDBx+zkZ0PsAQGBGAUQ+PZZ43VEbKO0G8Cav5u8OCR4M+tz/+L6wSH9Cn0mcPeTH2jDX3xMRs89FXL1tTS/YEAjHJorN2aZ3eE09PTBKGnobDOCA8+9FWb7ui21p/+u6XOvmOx6am53WA2F5iT6+60a27YO7z7wdxaQsIPBODSdITMEXoKwUSNjew+YBMbttmKd16z+tMnrPbC2VxH6KQbmm2qe62Nb95uY3ftshkXlvn/L0AAlrgj5GSJ/+Gw/jfT1mnDX/iSC8ODFp+acMmXzn8CWcZ1e9lUHcEHArAcgjB/skRf2qSNWYeGhjhZ4qEbDDrCmlpL16bmZCTBBwKwzIbGCkLNESoINTQmCD2GIUAALo+OUMPifEeYnyPUyRIABGDVBiEdIUAAEoQEIUAAEoQEIUAAEoQEIUAAVncQcrIEIACrOgi1oPrq1avsRwgQgNUXhKlU6vo1xgBKcOzxFJQPNlYACEAAIAABgAAEAAIQAAhAACAAAYAABAACEAAIQAAgAAGAAAQAAhAACEAABCAAEIAAQAACAAEIAAQgABCAAEAAAgABCAAEIAAQgABAAAIAAQgABCAAEIAAQAACAAEIAAQgABCAAEAAAgABCAAEIAAQgABAAAIAAQgABCAAEIAAQAACAAEIgADkKQBAAAIAAQgABCAAEIAAUImSPu8sm83ecLvY+/JxPwBQkgCMx+PW2tpqdXV1iw4v/f9bWlqC20wmU/FhGIvFgt8TwDINwObmZnv66aetq6vLS2AlEgmbnJy0K1euVMWLkU6nCUFguXeA7e3t3jo23Y+CoVoCkGE/sEwDMB9YzN8VPwwGUDqcBQZAAAIAAQgABCAAEIAAUJG8nwXWmUwth2E9W/HPXTWdQff9m3IevXKPjShWSXgNQK1jyy9aZhnMwulDY2BgoGo+PPR+bqhNWtzT+zrj3nKjUzPGW68yA7C/v9/7sRHz+SGs7kWLoHUFB4rohsLL/qql82uuS9o3D2wMbrMe3sjXJmbs+z87E9zSCVZmgzA4OOj1GEn6foB9fX28UijItAu+yeE2m5xJmo8EnByfsX73/lMAAiUPQGDBY+Agu2KWXWTLFrvpPoGCRq08BQAIQAAgAAGAAAQAAhAACEAAIAABgAAEAAIQAAhAACAAAYAABAACEAAIQAAgAAGAAASAktOGqCd5GlCglKteq56NdCddnXXFFtMVHIBf5GlAAbRp/V2unnXVWSW/s8Lvl1zpm77YarpCA/AKTwMK1O+qmr7vVJ1fX1ioQMwBYiFidEIgAAGAAAQAAhAACEAAIAABgAAEAAIQAAhAACAAAYAABAACEAAIQAAgAAGAAAQAAhAACEAAIAABgAAEAAIQAAhAACAAAYAABAACEAABCAAEIAAQgABAAAIAAQgABCAAEIAAQAACAAEIAAQgABCAAEAAAgABCAAEIAAQgABAAAIAAQgABCAAEIAAQAACAAEIAAQgABCAAEAAAgABCAAEIAAQgABAAAIAAQiAAAQAAhAACEAAIAABgAAEAAIQAAhAACAAAYAABAACEAAIQAAgAAGAAAQAAhAACEAAIAABgAAEAAIQAAhAACAAAYAABAACEAAIQAAgAAGAAAQAAhAACEAAIAABgAAEQAACAAEIAAQgABCAAFCRkjwFWEqxWCwos+zi7sfy9wMQgFgGMpmsXR6etLGp9KIDUBE4MjkT3CdAAKLsjU7N2A9f/NBb55bNZm1sOs0TCwIQ5c/llQtBAgtLh5MgAAhAACAAAYAABAACEAAIQAAgAAGAAAQAAhAACEAAIAABgAAEAAIQAAhAACAAAYAABAACEAAIQACI2v8DRhhSyNlkTaAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDUtMjhUMTA6NTQ6MTYrMDA6MDAHfkfXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA1LTI4VDEwOjU0OjE2KzAwOjAwdiP/awAAAABJRU5ErkJggg==",alt:"mailbox emoji"})]})]}),Object(x.jsxs)("footer",{className:te.a.appFooter,children:[Object(x.jsxs)("button",{type:"button",onClick:oe,children:[Object(x.jsx)("img",{src:f,alt:"return icon"}),"Back to top"]}),Object(x.jsxs)("a",{href:"https://github.com/au-williams/au-williams.github.io",onClick:ie,rel:"noopener noreferrer",target:"_blank",children:[Object(x.jsx)("img",{src:b,alt:"github"}),"GitHub"]})]})]})]})};t(425);c.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(ce,{})}),document.getElementById("root"))},67:function(e,A,t){e.exports={flexWrapper:"App_flexWrapper__3fNSW",viewportWrapper:"App_viewportWrapper__319Mh",appSection:"App_appSection__2_S0q",appFooter:"App_appFooter__2HQnu"}},87:function(e,A,t){e.exports={wrapper:"CodeBlock_wrapper__BTX12",name:"CodeBlock_name__2Txj0",title:"CodeBlock_title__173et",body:"CodeBlock_body__zQIn6",code:"CodeBlock_code__37MWX",footer:"CodeBlock_footer__1ERb7",visible:"CodeBlock_visible__Pc1QQ",tooltip:"CodeBlock_tooltip__1q9W1",debug:"CodeBlock_debug__2gAFH",pause:"CodeBlock_pause__3UHTx",press:"CodeBlock_press__30KHR",attribute:"CodeBlock_attribute__2Zt9e",indent:"CodeBlock_indent__ENPKl",operator:"CodeBlock_operator__2ZPrX",string:"CodeBlock_string__3Rfvq","start-angle":"CodeBlock_start-angle__2gSdX","close-angle":"CodeBlock_close-angle__dKYkr","tag-name":"CodeBlock_tag-name__3ffyg",value:"CodeBlock_value__3Lroo","size-2":"CodeBlock_size-2__21TkX","size-3":"CodeBlock_size-3__bzssd","size-4":"CodeBlock_size-4__2oxVd","size-5":"CodeBlock_size-5__3X5k7",color:"CodeBlock_color__3s4gk"}},88:function(e,A,t){e.exports={wrapper:"CodeLine_wrapper__1dsY2",name:"CodeLine_name__1w83x",title:"CodeLine_title__17Pec",body:"CodeLine_body__1oRGg",code:"CodeLine_code__NM5C-",footer:"CodeLine_footer__1xVfP",visible:"CodeLine_visible__Hmvu5",tooltip:"CodeLine_tooltip__dv6sc",debug:"CodeLine_debug__3d147",pause:"CodeLine_pause__1ZHB3",codeLine:"CodeLine_codeLine__2G8SB",lineNumber:"CodeLine_lineNumber__1vN0i",clicked:"CodeLine_clicked__UgZA8",hovered:"CodeLine_hovered__DsELs"}}},[[426,1,2]]]);
//# sourceMappingURL=main.592bafc4.chunk.js.map