(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{112:function(e,t,c){},113:function(e,t,c){"use strict";c.r(t);var n,i=c(0),a=c.n(i),s=c(23),r=c.n(s),j=(c(80),c(3)),o=(c(81),c(122)),d=c(120),l=c(123),b=c(121),u=c(8),h=c(24),m=c(1),O=function(e){var t=Object(u.e)();return Object(m.jsx)(o.a,{bg:"light",expand:"lg",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(o.a.Brand,{children:Object(m.jsx)(h.b,{className:"nav-brand",to:"/",children:"YonaSte\ud83e\udd38\ud83c\udffc\u200d\u2640\ufe0f\ud83e\uddd8\ud83c\udffc\u200d\u2640\ufe0f"})}),Object(m.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(l.a,{className:"me-auto",children:[Object(m.jsx)(l.a.Link,{as:h.b,to:"/",children:"Home"}),Object(m.jsx)(l.a.Link,{as:h.b,to:"/detail/0",children:"Detail"}),Object(m.jsxs)(b.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(m.jsx)(b.a.Item,{children:"Action"}),Object(m.jsx)(b.a.Item,{children:"Another action"}),Object(m.jsx)(b.a.Item,{children:"Something"}),Object(m.jsx)(b.a.Divider,{}),Object(m.jsx)(b.a.Item,{children:"Separated link"})]})]})}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){t.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})})},p=function(e){var t=e.item;return Object(m.jsx)(h.b,{to:"/detail/".concat(t.id),children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:c(55)("./"+t.img).default,alt:"yona"})}),Object(m.jsx)("h4",{children:t.title}),Object(m.jsxs)("p",{children:[t.price," \u20a9"]})]})})},x=function(e){var t=e.items;return Object(m.jsx)("div",{className:"contents",children:t&&t.map((function(e,t){return Object(m.jsx)(p,{item:e},t+Date.now())}))})},g=c(30),f=c(2),v=c(69),N=c.n(v),y=function(e){var t=e.items,c=e.setItems;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("section",{className:"jumbo",children:[Object(m.jsx)("h1",{children:"YonaYoga"}),Object(m.jsx)("p",{children:"Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary",children:"Primary"})]}),Object(m.jsx)(x,{items:t}),Object(m.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px"},children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){N.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){e.data=e.data.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{id:e.id+3,desc:"\ub354\ubcf4\uae30\uc6a9",img:"".concat(e.id-2,".jpeg")})}));var n=[].concat(Object(g.a)(t),Object(g.a)(e.data));c(n)})).catch((function(e){console.log(e)}))},children:"\ub354\ubcf4\uae30"})})]})},k=c(70),w=c(71),C=(c(112),w.a.h3(n||(n=Object(k.a)(["\n  color: ",";\n  padding: 10px;\n"])),(function(e){return e.color}))),I=function(e){var t=e.items,n=Object(u.f)().id,a=Object(i.useState)(!0),s=Object(j.a)(a,2),r=s[0],o=s[1];return Object(i.useEffect)((function(){o(!0);var e=setTimeout((function(){o(!1)}),2e3);return function(){clearTimeout(e)}}),[n]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(C,{color:"lightGrey",children:"\ud074\ub798\uc2a4 \uc0c1\uc138\ud398\uc774\uc9c0"}),r&&Object(m.jsx)("div",{className:"alertGreen",children:"\ub9c8\uac10\uc784\ubc15 \uc11c\ub450\ub974\uc138\uc694!! \ud83c\udfc3\ud83c\udffb\u200d\u2640\ufe0f\ud83c\udfc3\ud83c\udffb\ud83c\udfc3\ud83c\udffb\u200d\u2642\ufe0f "}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("img",{src:c(55)("./"+t[n].img).default,width:"100%",style:{borderRadius:"20px"},alt:"detail"})}),Object(m.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(m.jsx)("h4",{className:"pt-5",children:t[n].title}),Object(m.jsx)("p",{children:t[n].desc}),Object(m.jsxs)("p",{children:[t[n].price,"\u20a9"]}),Object(m.jsx)("button",{className:"btn btn-danger",children:"\uc8fc\ubb38\ud558\uae30"})]})]})]})},D=[{id:0,title:"\ubb3c\uad6c\ub098\ubb34 \ub9c8\uc2a4\ud130\ud558\uae30",img:"1.jpeg",price:27e4},{id:1,title:"\uc11d\ucd0c\ud638\uc218 \ub9c8\uc2a4\ud130 \ud074\ub798\uc2a4",img:"2.jpeg",price:38e4},{id:2,title:"\ud50c\ub77c\uc789\uc694\uac00 \ub9c8\uc2a4\ud130 \ud074\ub798\uc2a4",img:"3.jpeg",price:29e4},{id:3,title:"\uc11d\ucd0c\ud638\uc218 \uc990\uae30\uae30",img:"4.jpeg",price:19e4},{id:4,title:"\uc544\uc0ac\ub098 \ubc15\uc0b4\ub0b4\uae30",img:"5.jpeg",price:57e4}];var S=function(){var e=Object(i.useState)(D),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{}),Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(y,{items:c,setItems:n})}),Object(m.jsxs)(u.a,{path:"/detail/:id",children:[Object(m.jsx)(I,{items:c}),Object(m.jsx)(x,{items:c})]})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(h.a,{children:Object(m.jsx)(S,{})})}),document.getElementById("root")),F()},55:function(e,t,c){var n={"./1.jpeg":89,"./2.jpeg":90,"./3.jpeg":91,"./4.jpeg":92,"./5.jpeg":93};function i(e){var t=a(e);return c(t)}function a(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=55},80:function(e,t,c){},81:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.e40dbaa3.jpeg"},90:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.5618a320.jpeg"},91:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.f18c8808.jpeg"},92:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.c5111fe3.jpeg"},93:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/5.84caa5b0.jpeg"}},[[113,1,2]]]);
//# sourceMappingURL=main.b8d2a18b.chunk.js.map