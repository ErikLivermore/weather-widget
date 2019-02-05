!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("node-fetch")},function(e,t,n){n(6),e.exports=n(7)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(0),i=n.n(o),c=n(3),u=n.n(c),l=n(1),s=[{path:"/",component:function(){return i.a.createElement("div",{className:"widget",style:{margin:"10px",width:"300px"}},i.a.createElement("div",{className:"panel panel-info"},i.a.createElement("div",{className:"panel-heading"},"Weather in ",i.a.createElement("b",null,"Copenhagen")),i.a.createElement("ul",{className:"list-group"},i.a.createElement("li",{className:"list-group-item"},"Temperature: ",i.a.createElement("b",null,"5°C")),i.a.createElement("li",{className:"list-group-item"},"Humidity: ",i.a.createElement("b",null,"65")),i.a.createElement("li",{className:"list-group-item"},"Wind: ",i.a.createElement("b",null,"11 m/s Øst")),i.a.createElement("li",{className:"list-group-item"},i.a.createElement("form",{className:"form-inline"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",className:"form-control",id:"city",placeholder:"City"})),i.a.createElement("button",{type:"submit",className:"btn btn-default"},"Search"))))))}}];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(){return i.a.createElement(l.Switch,null,s.map(function(e,t){return i.a.createElement(l.Route,p({exact:!0,key:t},e))}))},m=n(4),d=n.n(m);function v(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){v(o,r,a,i,c,"next",e)}function c(e){v(o,r,a,i,c,"throw",e)}i(void 0)})}}var y=a()();function h(e){return b.apply(this,arguments)}function b(){return(b=g(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.openweathermap.org/data/2.5/weather?q="+t+",dk&appid=166d00e26d3ff2c6149e89feccc5c59a&units=metric",e.next=3,d()(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}y.set("view engine","ejs"),y.set("views","src"),y.use("/static",a.a.static("public")),y.get("*",function(){var e=g(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("Copenhagen");case 2:e.sent,r={},n.render("layout",{content:u.a.renderToString(i.a.createElement(l.StaticRouter,{location:t.url,context:r},i.a.createElement(f,null)))});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()),y.listen(3e3,function(){return console.log("Listening on port 3000")})}]);