(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(9),a=n.n(o),i=(n(30),n(31),n(16)),s=n.n(i),l=n(20),u=n(8),j=n(7),d=n(11),b=n(10),O=n(24),h=n(39),x=n(17),f=n(19),p=n(18),v=n(21),m=n(2),g=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!0),a=Object(u.a)(o,2),i=a[0],g=a[1],w=Object(c.useState)(100),k=Object(u.a)(w,2),q=k[0],y=k[1],C=Object(c.useState)(""),S=Object(u.a)(C,2),N=S[0],Q=S[1],E=Object(c.useState)(""),I=Object(u.a)(E,2),M=I[0],J=I[1],L=Object(c.useState)("#198754"),R=Object(u.a)(L,2),T=R[0],_=R[1],B=Object(c.useState)(!1),D=Object(u.a)(B,2),z=D[0],A=D[1],F=Object(c.useState)(null),G=Object(u.a)(F,2),H=G[0],K=G[1],P=Object(c.useRef)(null),U=Object(c.useRef)(null),V=function(e){return Math.floor(Math.random()*e)},W=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,fetch("https://goquotes-api.herokuapp.com/api/v1/all/quotes");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,r(n.quotes),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:g(!1);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=n[V(n.length-1)],t=e.text,c=e.author;Q(t),J(c),_("#198754"),$(U),$(P),y(0),K("random")},Y=function(){var e=n.filter((function(e){return e.text.split(" ").length<=10})),t=e[V(e.length-1)],c=t.text,r=t.author;Q(c),J(r),_("#0d6efd"),$(U),$(P),y(0),K("short")},Z=function(){var e=n.filter((function(e){return e.text.split(" ").length>20})),t=e[V(e.length-1)],c=t.text,r=t.author;Q(c),J(r),_("#DC3545"),$(U),$(P),y(0),K("long")},$=function(e){e.current.animate([{opacity:0,color:"#fff"},{opacity:1,color:"#000"}],300)},ee=function(){navigator.clipboard.writeText(N),A(!0),setTimeout((function(){A(!1)}),2e3)};return Object(c.useEffect)((function(){W()}),[]),Object(c.useEffect)((function(){void 0!==n[0]&&X()}),[n]),Object(c.useEffect)((function(){var e=setInterval((function(){switch(H){case"random":X();break;case"short":Y();break;case"long":Z();break;default:X()}}),1e4);return function(){clearInterval(e)}}),[N]),Object(c.useEffect)((function(){var e=setInterval((function(){y((function(e){return e+1}))}),100);return function(){clearInterval(e)}}),[q,N]),Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(b.a,{id:"quote-box",style:{borderColor:T},children:[Object(m.jsxs)(b.a,{id:"quote-container",children:[Object(m.jsx)("div",{id:"quote-text",className:"d-flex justify-content-center align-items-end",children:Object(m.jsx)("p",{id:"text",ref:P,children:i?Object(m.jsx)(v.a,{className:"loading-icon",style:{color:T}}):'"'.concat(N,'"')})}),Object(m.jsx)("div",{id:"auth-text",children:Object(m.jsx)("p",{id:"author",ref:U,children:i?"":"-".concat(M)})})]}),Object(m.jsxs)(b.a,{id:"btn-container",children:[Object(m.jsxs)(d.a,{id:"link-group-one",children:[Object(m.jsx)(j.a,{id:"tweet-quote",href:"twitter.com/intent/tweet",target:"_blank",style:{borderColor:T,color:T},children:Object(m.jsx)(x.a,{})}),Object(m.jsx)(j.a,{id:"copy-quote",onClick:ee,style:{borderColor:T,color:T},children:z?Object(m.jsx)(p.a,{}):Object(m.jsx)(f.a,{})})]}),Object(m.jsxs)(d.a,{id:"quote-select-one",className:"btn-group",children:[Object(m.jsx)(j.a,{variant:"outline-success",id:"new-quote",onClick:X,disabled:i,children:"New Quote"}),Object(m.jsx)(j.a,{variant:"outline-primary",id:"short-quote",onClick:Y,disabled:i,children:"Short Quote"}),Object(m.jsx)(j.a,{variant:"outline-danger",id:"long-quote",onClick:Z,disabled:i,children:"Long Quote"})]})]}),Object(m.jsx)("div",{children:Object(m.jsx)(h.a,{id:"progress-bar",animated:!0,now:q,min:0,max:88})}),z?Object(m.jsx)(O.a,{className:"alert",children:"Copied!"}):""]}),Object(m.jsxs)(b.a,{id:"btn-container-two",children:[Object(m.jsxs)(d.a,{id:"link-group-two",children:[Object(m.jsx)(j.a,{id:"tweet-quote",href:"twitter.com/intent/tweet",target:"_blank",style:{borderColor:T,color:T},children:Object(m.jsx)(x.a,{})}),Object(m.jsx)(j.a,{id:"copy-quote",onClick:ee,style:{borderColor:T,color:T},children:z?Object(m.jsx)(p.a,{}):Object(m.jsx)(f.a,{})})]}),Object(m.jsxs)(d.a,{id:"quote-select-two",className:"btn-group",children:[Object(m.jsx)(j.a,{variant:"outline-success",id:"new-quote",onClick:X,disabled:i,children:"New Quote"}),Object(m.jsx)(j.a,{variant:"outline-primary",id:"short-quote",onClick:Y,disabled:i,children:"Short Quote"}),Object(m.jsx)(j.a,{variant:"outline-danger",id:"long-quote",onClick:Z,disabled:i,children:"Long Quote"})]})]})]})};var w=function(){return Object(m.jsx)("div",{id:"wrapper",children:Object(m.jsx)(g,{})})};a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3bc54e83.chunk.js.map