(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(14),a=n.n(o),i=(n(21),n(22),n(11)),s=n.n(i),u=n(15),l=n(7),j=n(8),d=n(12),b=n(9),f=n(27),h=n(13),O=n(16),x=n(2),p=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!0),a=Object(l.a)(o,2),i=a[0],p=a[1],v=Object(c.useState)(100),m=Object(l.a)(v,2),g=m[0],w=m[1],q=Object(c.useState)(""),k=Object(l.a)(q,2),y=k[0],S=k[1],C=Object(c.useState)(""),E=Object(l.a)(C,2),I=E[0],N=E[1],M=Object(c.useState)("#198754"),Q=Object(l.a)(M,2),J=Q[0],R=Q[1],B=Object(c.useRef)(null),D=Object(c.useRef)(null),L=function(e){return Math.floor(Math.random()*e)},z=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,fetch("https://goquotes-api.herokuapp.com/api/v1/all/quotes");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,r(n.quotes),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:p(!1);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=n[L(n.length-1)],t=e.text,c=e.author;S(t),N(c),R("#198754"),F(D),F(B),w(0)},F=function(e){e.current.animate([{opacity:0,color:"#fff"},{opacity:1,color:"#000"}],300)};return Object(c.useEffect)((function(){z()}),[]),Object(c.useEffect)((function(){void 0!==n[0]&&A()}),[n]),Object(c.useEffect)((function(){var e=setInterval((function(){A()}),1e4);return function(){clearInterval(e)}}),[y]),Object(c.useEffect)((function(){var e=setInterval((function(){w((function(e){return e+1}))}),100);return function(){clearInterval(e)}}),[g,y]),Object(x.jsxs)(b.a,{id:"quote-box",style:{borderColor:J},children:[Object(x.jsxs)(b.a,{id:"quote-container",children:[Object(x.jsx)("div",{id:"quote-text",className:"d-flex justify-content-center align-items-end",children:Object(x.jsx)("p",{id:"text",ref:B,children:i?Object(x.jsx)(O.a,{className:"loading-icon",style:{color:J}}):'"'.concat(y,'"')})}),Object(x.jsx)("div",{id:"auth-text",children:Object(x.jsx)("p",{id:"author",ref:D,children:i?"":"-".concat(I)})})]}),Object(x.jsxs)(b.a,{id:"btn-container",children:[Object(x.jsxs)(d.a,{id:"link-group",children:[Object(x.jsx)(j.a,{id:"tweet-quote",href:"twitter.com/intent/tweet",style:{borderColor:J,color:J},children:Object(x.jsx)(h.b,{})}),Object(x.jsx)(j.a,{id:"facebook-quote",href:"www.facebook.com",style:{borderColor:J,color:J},children:Object(x.jsx)(h.a,{})})]}),Object(x.jsxs)(d.a,{className:"btn-group",children:[Object(x.jsx)(j.a,{variant:"outline-success",id:"new-quote",onClick:A,disabled:i,children:"New Quote"}),Object(x.jsx)(j.a,{variant:"outline-primary",id:"short-quote",onClick:function(){var e=n.filter((function(e){return e.text.split(" ").length<=10})),t=e[L(e.length-1)],c=t.text,r=t.author;S(c),N(r),R("#0d6efd"),F(D),F(B),w(0)},disabled:i,children:"Short Quote"}),Object(x.jsx)(j.a,{variant:"outline-danger",id:"long-quote",onClick:function(){var e=n.filter((function(e){return e.text.split(" ").length>20})),t=e[L(e.length-1)],c=t.text,r=t.author;S(c),N(r),R("#DC3545"),F(D),F(B),w(0)},disabled:i,children:"Long Quote"})]})]}),Object(x.jsx)("div",{children:Object(x.jsx)(f.a,{id:"progress-bar",animated:!0,now:g,min:0,max:88})})]})};var v=function(){return Object(x.jsx)("div",{id:"wrapper",children:Object(x.jsx)(p,{})})};a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.bd6ad032.chunk.js.map