(this["webpackJsonpexponential-backoff"]=this["webpackJsonpexponential-backoff"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(16)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(9),a(12),a(1)),u=(a(13),function(e){var t=e.label,a=e.value,c=e.type,l=void 0===c?"text":c,u=e.placeholder,i=e.onChange,s=e.addons,m=e.maxLength,f=e.minLength,d=Object(n.useState)(!1),p=Object(o.a)(d,2),b=p[0],h=p[1],E=Object(n.useRef)(),v=function(e){i&&i instanceof Function&&i(e)};return r.a.createElement("div",{className:"Input ".concat(b?"active":""),onClick:function(){return h(!0),void E.current.focus()}},t&&r.a.createElement("label",null,t),r.a.createElement("div",{className:"inner-wrapper"},r.a.createElement("input",{ref:E,type:l,value:a,placeholder:u,maxLength:m,minLength:f,onChange:function(e){return v(e)},onFocus:function(){return h(!0)},onBlur:function(){return h(!1)}}),s&&r.a.createElement("div",{className:"addons"},s)))}),i=(a(14),function(e){var t=e.calculationResult,a=r.a.createElement("tr",null,r.a.createElement("th",null,"retry #"),r.a.createElement("th",null,"current backoff"),r.a.createElement("th",null,"accumulated backoff")),n=t.map((function(e){var t=e.retryCount,a=e.backoffSeconds,n=e.accumulateBackoffSeconds;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a.toFixed(2)," sec"),r.a.createElement("td",null,n.toFixed(2)," sec"))}));return r.a.createElement("table",{className:"Result"},r.a.createElement("thead",null,a),r.a.createElement("tbody",null,n))}),s=(a(15),function(e){var t=new URL(window.location);return new URLSearchParams(t.search).get(e)}),m=function(){var e=Object(n.useState)(s("min")||.1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(s("max")||60),m=Object(o.a)(l,2),f=m[0],d=m[1],p=Object(n.useState)(s("retry")||15),b=Object(o.a)(p,2),h=b[0],E=b[1],v=null;if(isNaN(parseFloat(a))||isNaN(parseFloat(f))||isNaN(parseInt(h)))v=[];else if(v=function(e,t,a){for(var n=[],r=0,c=1;c<=a;c++){var l=Math.min(e*Math.pow(2,c-1),t);r+=l,n.push({retryCount:c,backoffSeconds:l,accumulateBackoffSeconds:r})}return n}(parseFloat(a),parseFloat(f),parseInt(h)),window.history.replaceState){var y=new URL(window.location).origin+"?min=".concat(a,"&max=").concat(f,"&retry=").concat(h);window.history.replaceState({path:y},"",y)}return r.a.createElement("main",{className:"app"},r.a.createElement("h1",null,"truncated exponential backoff simulator"),r.a.createElement("div",{className:"form-wrapper"},r.a.createElement(u,{type:"number",label:"min retry backoff",value:a,onChange:function(e){return c(e.target.value)},addons:"sec"}),r.a.createElement(u,{type:"number",label:"max retry backoff",value:f,onChange:function(e){return d(e.target.value)},addons:"sec"}),r.a.createElement(u,{type:"number",label:"total retry count",value:h,onChange:function(e){return E(e.target.value)},maxLength:"3",addons:"retry"})),r.a.createElement(i,{calculationResult:v}))};l.a.render(r.a.createElement(m,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.5cc42ab7.chunk.js.map