!function(e){function t(t){for(var r,u,o=t[0],c=t[1],i=t[2],p=0,m=[];p<o.length;p++)u=o[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&m.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);m.length;)m.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={0:0},l=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var f=c;l.push([142,1]),n()}({142:function(e,t,n){n(143),e.exports=n(340)},340:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(137),u=n.n(l),o=n(51),c=n(8),i=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Home"))},f=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"About"))},p=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Dashboard"))},m=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Your first project"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.b,{to:"/"},"1")),a.a.createElement("li",null,a.a.createElement(o.b,{to:"/about"},"2")),a.a.createElement("li",null,a.a.createElement(o.b,{to:"/dashboard"},"3"))))};function d(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    background: linear-gradient(233.1deg, #216190 19.65%, #0834D0 81.25%);\n    height: 100%;\n"]);return d=function(){return e},e}var b=n(138).a.div(d()),s=function(){return a.a.createElement(o.a,null,a.a.createElement(b,null,a.a.createElement(m,null),a.a.createElement(c.d,null,a.a.createElement(c.b,{exact:!0,path:"/"},a.a.createElement(i,null)),a.a.createElement(c.b,{path:"/about"},a.a.createElement(f,null)),a.a.createElement(c.b,{path:"/dashboard"},a.a.createElement(p,null)),a.a.createElement(c.a,{to:"/"}))))};u.a.render(a.a.createElement(s,null),document.getElementById("root"))}});