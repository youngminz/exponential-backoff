(this["webpackJsonpexponential-backoff"]=this["webpackJsonpexponential-backoff"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(16)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),u=(a(9),a(12),a(1)),o=(a(13),function(e){var t=e.label,a=e.value,c=e.type,l=void 0===c?"text":c,o=e.placeholder,s=e.onChange,i=e.addons,m=e.maxLength,f=e.minLength,d=Object(n.useState)(!1),b=Object(u.a)(d,2),p=b[0],E=b[1],h=Object(n.useRef)(),v=function(e){s&&s instanceof Function&&s(e)};return r.a.createElement("div",{className:"Input ".concat(p?"active":""),onClick:function(){return E(!0),void h.current.focus()}},t&&r.a.createElement("label",null,t),r.a.createElement("div",{className:"inner-wrapper"},r.a.createElement("input",{ref:h,type:l,value:a,placeholder:o,maxLength:m,minLength:f,onChange:function(e){return v(e)},onFocus:function(){return E(!0)},onBlur:function(){return E(!1)}}),i&&r.a.createElement("div",{className:"addons"},i)))}),s=(a(14),function(e){var t=e.calculationResult,a=r.a.createElement("tr",null,r.a.createElement("th",null,"retry #"),r.a.createElement("th",null,"current backoff"),r.a.createElement("th",null,"accumulated backoff")),n=t.map((function(e){var t=e.retryCount,a=e.backoffSeconds,n=e.accumulateBackoffSeconds;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a.toFixed(2)," sec"),r.a.createElement("td",null,n.toFixed(2)," sec"))}));return r.a.createElement("table",{className:"Result"},r.a.createElement("thead",null,a),r.a.createElement("tbody",null,n))}),i=(a(15),function(){var e=Object(n.useState)(.1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(60),i=Object(u.a)(l,2),m=i[0],f=i[1],d=Object(n.useState)(15),b=Object(u.a)(d,2),p=b[0],E=b[1],h=null;return h=Number.isNaN(parseFloat(a))||Number.isNaN(parseFloat(m))||Number.isNaN(parseInt(p))?[]:function(e,t,a){for(var n=[],r=0,c=1;c<=a;c++){var l=Math.min(e*Math.pow(2,c-1),t);r+=l,n.push({retryCount:c,backoffSeconds:l,accumulateBackoffSeconds:r})}return n}(parseFloat(a),parseFloat(m),parseInt(p)),r.a.createElement("main",{className:"app"},r.a.createElement("h1",null,"truncated exponential backoff simulator"),r.a.createElement("div",{className:"form-wrapper"},r.a.createElement(o,{label:"min retry backoff",value:a,onChange:function(e){return c(e.target.value)},addons:"sec"}),r.a.createElement(o,{label:"max retry backoff",value:m,onChange:function(e){return f(e.target.value)},addons:"sec"}),r.a.createElement(o,{label:"total retry count",value:p,onChange:function(e){return E(e.target.value)},maxLength:"3",addons:"retry"})),r.a.createElement(s,{calculationResult:h}))});l.a.render(r.a.createElement(i,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.43d2e644.chunk.js.map