(this["webpackJsonpexponential-backoff"]=this["webpackJsonpexponential-backoff"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={Header:"Header_Header__uhOLT"}},,function(e,t,a){e.exports={Input:"Input_Input__2YPOO",active:"Input_active__1RN56","inner-wrapper":"Input_inner-wrapper__3Ydmx",addons:"Input_addons__29BWK"}},function(e,t,a){e.exports={Result:"Result_Result__4fLSh"}},function(e,t,a){e.exports={App:"App_App__3yAAK","form-wrapper":"App_form-wrapper__D_UVa"}},function(e,t,a){e.exports=a(19)},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(2),u=a(1),i=a.n(u),s=a(5),p=a.n(s),m=i.a.bind(p.a),f=function(){return r.a.createElement("header",{className:m("Header")},r.a.createElement("h1",null,"truncated exponential backoff simulator"))},d=a(6),b=a(7),h=a.n(b),E=i.a.bind(h.a),v=function(e){var t=e.label,a=e.value,c=e.type,l=e.placeholder,u=e.onChange,i=e.addons,s=e.maxLength,p=e.minLength,m=Object(n.useState)(!1),f=Object(o.a)(m,2),b=f[0],h=f[1],v=Object(n.useRef)(),_=function(e){u&&u instanceof Function&&u(e)};return r.a.createElement("div",{className:E("Input",Object(d.a)({},"active",b)),onClick:function(){return h(!0),void v.current.focus()}},t&&r.a.createElement("label",null,t),r.a.createElement("div",{className:E("inner-wrapper")},r.a.createElement("input",{ref:v,type:c,value:a,placeholder:l,maxLength:s,minLength:p,onChange:function(e){return _(e)},onFocus:function(){return h(!0)},onBlur:function(){return h(!1)}}),i&&r.a.createElement("div",{className:E("addons")},i)))},_=a(8),w=a.n(_),y=i.a.bind(w.a),g=function(e){return e>=60?"".concat(parseInt(e/60)," min ").concat(parseInt(e%60)," sec"):"".concat(e>=10?parseInt(e%60):(e%60).toFixed(2)," sec")},x=function(e){var t=e.calculationResult,a=r.a.createElement("tr",null,r.a.createElement("th",null,"retry #"),r.a.createElement("th",null,"current backoff"),r.a.createElement("th",null,"accumulated backoff")),n=t.map((function(e){var t=e.retryCount,a=e.backoffSeconds,n=e.accumulateBackoffSeconds;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,g(a)),r.a.createElement("td",null,g(n)))}));return r.a.createElement("div",{className:y("Result")},r.a.createElement("table",null,r.a.createElement("thead",null,a),r.a.createElement("tbody",null,n)))},k=a(9),N=a.n(k),I=i.a.bind(N.a),O=function(e){var t=new URL(window.location);return new URLSearchParams(t.search).get(e)},S=function(){var e=Object(n.useState)(O("min")||.1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(O("max")||60),u=Object(o.a)(l,2),i=u[0],s=u[1],p=Object(n.useState)(O("retry")||15),m=Object(o.a)(p,2),d=m[0],b=m[1],h=null;if(isNaN(parseFloat(a))||isNaN(parseFloat(i))||isNaN(parseInt(d)))h=[];else if(h=function(e,t,a){for(var n=[],r=0,c=1;c<=a;c++){var l=Math.min(e*Math.pow(2,c-1),t);r+=l,n.push({retryCount:c,backoffSeconds:l,accumulateBackoffSeconds:r})}return n}(parseFloat(a),parseFloat(i),parseInt(d)),window.history.replaceState){var E=new URL(window.location).origin+"?min=".concat(a,"&max=").concat(i,"&retry=").concat(d);window.history.replaceState({path:E},"",E)}return r.a.createElement("main",{className:I("App")},r.a.createElement(f,null),r.a.createElement("div",{className:I("form-wrapper")},r.a.createElement(v,{type:"number",label:"min retry backoff",value:a,onChange:function(e){return c(e.target.value)},addons:"sec"}),r.a.createElement(v,{type:"number",label:"max retry backoff",value:i,onChange:function(e){return s(e.target.value)},addons:"sec"}),r.a.createElement(v,{type:"number",label:"total retry count",value:d,onChange:function(e){return b(e.target.value)},maxLength:"3",addons:"retry"})),r.a.createElement(x,{calculationResult:h}))};a(15),a(18);l.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.0bd1f490.chunk.js.map