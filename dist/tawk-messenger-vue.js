!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=70)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(36))},function(t,n){t.exports=function(t){return"function"==typeof t}},function(t,n){var e=Function.prototype,r=e.bind,o=e.call,i=r&&r.bind(o);t.exports=r?function(t){return t&&i(o,t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(1);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},function(t,n,e){var r=e(2),o=e(26),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},function(t,n,e){var r=e(0),o=e(25),i=e(5),u=e(27),a=e(24),c=e(23),f=o("wks"),s=r.Symbol,d=s&&s.for,p=c?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!a&&"string"!=typeof f[t]){var n="Symbol."+t;a&&i(s,t)?f[t]=s[t]:f[t]=c&&d?d(n):p(n)}return f[t]}},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(0),o=e(1),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},function(t,n){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(38),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(2),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},function(t,n,e){var r=e(39),o=e(22);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},function(t,n,e){var r,o,i=e(0),u=e(41),a=i.process,c=i.Deno,f=a&&a.versions||c&&c.version,s=f&&f.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},function(t,n,e){var r=e(0),o=e(16),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(7),o=e(18),i=e(10);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(0),o=e(7),i=e(28),u=e(29),a=e(13),c=r.TypeError,f=Object.defineProperty;n.f=o?f:function(t,n,e){if(u(t),n=a(n),u(e),i)try{return f(t,n,e)}catch(t){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(2),o=e(1),i=e(15),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},function(t,n,e){var r=e(7),o=e(9),i=e(37),u=e(10),a=e(11),c=e(13),f=e(5),s=e(28),d=Object.getOwnPropertyDescriptor;n.f=r?d:function(t,n){if(t=a(t),n=c(n),s)try{return d(t,n)}catch(t){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},function(t,n,e){var r=e(0).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(8),i=e(1),u=e(40),a=e(23),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,c(t))}},function(t,n,e){var r=e(24);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(14),o=e(3);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(t,n,e){var r=e(46),o=e(15);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.19.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(0),o=e(21),i=r.Object;t.exports=function(t){return i(o(t))}},function(t,n,e){var r=e(2),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},function(t,n,e){var r=e(7),o=e(3),i=e(47);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(4),i=r.String,u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},function(t,n,e){var r=e(59);t.exports=function(t){return r(t.length)}},function(t,n,e){var r=e(12);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(35),o=e(0),i=e(3),u=e(33),a=e(4),c=e(26),f=e(32),s=e(63),d=e(64),p=e(69),l=e(6),w=e(14),v=l("isConcatSpreadable"),h=o.TypeError,y=w>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=p("concat"),m=function(t){if(!a(t))return!1;var n=t[v];return void 0!==n?!!n:u(t)};r({target:"Array",proto:!0,forced:!y||!g},{concat:function(t){var n,e,r,o,i,u=c(this),a=d(u,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(m(i=-1===n?u:arguments[n])){if(p+(o=f(i))>9007199254740991)throw h("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&s(a,p,i[e])}else{if(p>=9007199254740991)throw h("Maximum allowed index exceeded");s(a,p++,i)}return a.length=p,a}})},function(t,n,e){var r=e(0),o=e(20).f,i=e(17),u=e(48),a=e(16),c=e(53),f=e(62);t.exports=function(t,n){var e,s,d,p,l,w=t.target,v=t.global,h=t.stat;if(e=v?r:h?r[w]||a(w,{}):(r[w]||{}).prototype)for(s in n){if(p=n[s],d=t.noTargetGet?(l=o(e,s))&&l.value:e[s],!f(v?s:w+(h?".":"#")+s,t.forced)&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(2),i=e(3),u=e(12),a=r.Object,c=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?c(t,""):a(t)}:a},function(t,n,e){var r=e(0),o=e(9),i=e(4),u=e(22),a=e(42),c=e(45),f=e(6),s=r.TypeError,d=f("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var e,r=a(t,d);if(r){if(void 0===n&&(n="default"),e=o(r,t,n),!i(e)||u(e))return e;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},function(t,n,e){var r=e(2);t.exports=r({}.isPrototypeOf)},function(t,n,e){var r=e(8);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(43);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},function(t,n,e){var r=e(0),o=e(1),i=e(44),u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},function(t,n,e){var r=e(0).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},function(t,n,e){var r=e(0),o=e(9),i=e(1),u=e(4),a=r.TypeError;t.exports=function(t,n){var e,r;if("string"===n&&i(e=t.toString)&&!u(r=o(e,t)))return r;if(i(e=t.valueOf)&&!u(r=o(e,t)))return r;if("string"!==n&&i(e=t.toString)&&!u(r=o(e,t)))return r;throw a("Can't convert object to primitive value")}},function(t,n){t.exports=!1},function(t,n,e){var r=e(0),o=e(4),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(1),i=e(5),u=e(17),a=e(16),c=e(19),f=e(49),s=e(52).CONFIGURABLE,d=f.get,p=f.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var f,d=!!c&&!!c.unsafe,w=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,h=c&&void 0!==c.name?c.name:n;o(e)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||s&&e.name!==h)&&u(e,"name",h),(f=p(e)).source||(f.source=l.join("string"==typeof h?h:""))),t!==r?(d?!v&&t[n]&&(w=!0):delete t[n],w?t[n]=e:u(t,n,e)):w?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return o(this)&&d(this).source||c(this)}))},function(t,n,e){var r,o,i,u=e(50),a=e(0),c=e(2),f=e(4),s=e(17),d=e(5),p=e(15),l=e(51),w=e(30),v=a.TypeError,h=a.WeakMap;if(u||p.state){var y=p.state||(p.state=new h),g=c(y.get),m=c(y.has),b=c(y.set);r=function(t,n){if(m(y,t))throw new v("Object already initialized");return n.facade=t,b(y,t,n),n},o=function(t){return g(y,t)||{}},i=function(t){return m(y,t)}}else{var x=l("state");w[x]=!0,r=function(t,n){if(d(t,x))throw new v("Object already initialized");return n.facade=t,s(t,x,n),n},o=function(t){return d(t,x)?t[x]:{}},i=function(t){return d(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw v("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(1),i=e(19),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},function(t,n,e){var r=e(25),o=e(27),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(7),o=e(5),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,f=a&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:f}},function(t,n,e){var r=e(5),o=e(54),i=e(20),u=e(18);t.exports=function(t,n){for(var e=o(n),a=u.f,c=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||a(t,s,c(n,s))}}},function(t,n,e){var r=e(8),o=e(2),i=e(55),u=e(61),a=e(29),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(a(t)),e=u.f;return e?c(n,e(t)):n}},function(t,n,e){var r=e(56),o=e(60).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(5),i=e(11),u=e(57).indexOf,a=e(30),c=r([].push);t.exports=function(t,n){var e,r=i(t),f=0,s=[];for(e in r)!o(a,e)&&o(r,e)&&c(s,e);for(;n.length>f;)o(r,e=n[f++])&&(~u(s,e)||c(s,e));return s}},function(t,n,e){var r=e(11),o=e(58),i=e(32),u=function(t){return function(n,e,u){var a,c=r(n),f=i(c),s=o(u,f);if(t&&e!=e){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(31),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(3),o=e(1),i=/#|\.prototype\./,u=function(t,n){var e=c[a(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},function(t,n,e){"use strict";var r=e(13),o=e(18),i=e(10);t.exports=function(t,n,e){var u=r(n);u in t?o.f(t,u,i(0,e)):t[u]=e}},function(t,n,e){var r=e(65);t.exports=function(t,n){return new(r(t))(0===n?0:n)}},function(t,n,e){var r=e(0),o=e(33),i=e(66),u=e(4),a=e(6)("species"),c=r.Array;t.exports=function(t){var n;return o(t)&&(n=t.constructor,(i(n)&&(n===c||o(n.prototype))||u(n)&&null===(n=n[a]))&&(n=void 0)),void 0===n?c:n}},function(t,n,e){var r=e(2),o=e(3),i=e(1),u=e(67),a=e(8),c=e(19),f=function(){},s=[],d=a("Reflect","construct"),p=/^\s*(?:class|function)\b/,l=r(p.exec),w=!p.exec(f),v=function(t){if(!i(t))return!1;try{return d(f,s,t),!0}catch(t){return!1}};t.exports=!d||o((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return w||!!l(p,c(t))}:v},function(t,n,e){var r=e(0),o=e(68),i=e(1),u=e(12),a=e(6)("toStringTag"),c=r.Object,f="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=c(t),a))?e:f?u(n):"Object"==(r=u(n))&&i(n.callee)?"Arguments":r}},function(t,n,e){var r={};r[e(6)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r=e(3),o=e(6),i=e(14),u=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e.r(n);e(34);function a(t,n){return!(!n||0===n.length)&&(n instanceof t||null!=n&&n.constructor===t)}var c=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),a(String,e.propertyId)&&a(String,e.widgetId)&&(this.root=n,this.propertyId=e.propertyId,this.widgetId=e.widgetId,this.settings=e.settings,this.load())}var n,e,r;return n=t,(e=[{key:"load",value:function(){window&&document&&(window.Tawk_API=window.Tawk_API||{},function(t,n){new Date;var e=document.createElement("script");e.async=!0,e.src="https://embed.talk.lv/".concat(t,"/").concat(n),e.charset="UTF-8",e.setAttribute("crossorigin","*");var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r)}(this.propertyId,this.widgetId),this.init())}},{key:"init",value:function(){this.settings&&"object"===i(this.settings)&&this.settings.customStyle&&"object"===i(this.settings.customStyle)&&(window.Tawk_API.customStyle=this.settings.customStyle),this.mapActions(),this.mapGetters(),this.mapListeners(),this.mapSetters()}},{key:"mapActions",value:function(){this.root.maximize=function(){return window.Tawk_API.maximize()},this.root.minimize=function(){return window.Tawk_API.minimize()},this.root.toggle=function(){return window.Tawk_API.toggle()},this.root.popup=function(){return window.Tawk_API.popup()},this.root.showWidget=function(){return window.Tawk_API.showWidget()},this.root.hideWidget=function(){return window.Tawk_API.hideWidget()},this.root.toggleVisibility=function(){return window.Tawk_API.toggleVisibility()},this.root.endChat=function(){return window.Tawk_API.endChat()}}},{key:"mapGetters",value:function(){this.root.getWindowType=function(){return window.Tawk_API.getWindowType()},this.root.getStatus=function(){return window.Tawk_API.getStatus()},this.root.isChatMaximized=function(){return window.Tawk_API.isChatMaximized()},this.root.isChatMinimized=function(){return window.Tawk_API.isChatMinimized()},this.root.isChatHidden=function(){return window.Tawk_API.isChatHidden()},this.root.isChatOngoing=function(){return window.Tawk_API.isChatOngoing()},this.root.isVisitorEngaged=function(){return window.Tawk_API.isVisitorEngaged()},this.root.onLoaded=function(){return window.Tawk_API.onLoaded}}},{key:"mapListeners",value:function(){var t=this;window.addEventListener("tawkLoad",(function(){t.root.$emit("load")})),window.addEventListener("tawkStatusChange",(function(n){t.root.$emit("statusChange",n.detail)})),window.addEventListener("tawkBeforeLoad",(function(){t.root.$emit("beforeLoad")})),window.addEventListener("tawkChatMaximized",(function(){t.root.$emit("chatMaximized")})),window.addEventListener("tawkChatMinimized",(function(){t.root.$emit("chatMinimized")})),window.addEventListener("tawkChatHidden",(function(){t.root.$emit("chatHidden")})),window.addEventListener("tawkChatStarted",(function(){t.root.$emit("chatStarted")})),window.addEventListener("tawkChatEnded",(function(){t.root.$emit("chatEnded")})),window.addEventListener("tawkPrechatSubmit",(function(n){t.root.$emit("prechatSubmit",n.detail)})),window.addEventListener("tawkOfflineSubmit",(function(n){t.root.$emit("offlineSubmit",n.detail)})),window.addEventListener("tawkChatMessageVisitor",(function(n){t.root.$emit("chatMessageVisitor",n.detail)})),window.addEventListener("tawkChatMessageAgent",(function(n){t.root.$emit("chatMessageAgent",n.detail)})),window.addEventListener("tawkChatMessageSystem",(function(n){t.root.$emit("chatMessageSystem",n.detail)})),window.addEventListener("tawkAgentJoinChat",(function(n){t.root.$emit("agentJoinChat",n.detail)})),window.addEventListener("tawkAgentLeaveChat",(function(n){t.root.$emit("agentLeaveChat",n.detail)})),window.addEventListener("tawkChatSatisfaction",(function(n){t.root.$emit("chatSatisfaction",n.detail)})),window.addEventListener("tawkVisitorNameChanged",(function(n){t.root.$emit("visitorNameChanged",n.detail)})),window.addEventListener("tawkFileUpload",(function(n){t.root.$emit("fileUpload",n.detail)})),window.addEventListener("tawkTagsUpdated",(function(n){t.root.$emit("tagsUpdated",n.detail)}))}},{key:"mapSetters",value:function(){this.root.visitor=function(t){return window.Tawk_API.visitor=t},this.root.setAttributes=function(t,n){return window.Tawk_API.setAttributes(t,n)},this.root.addEvent=function(t,n,e){return window.Tawk_API.addEvent(t,n,e)},this.root.addTags=function(t,n){return window.Tawk_API.addTags(t,n)},this.root.removeTags=function(t,n){return window.Tawk_API.removeTags(t,n)}}}])&&u(n.prototype,e),r&&u(n,r),t}(),f=!1;var s={version:"v1",install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.propertyId,r=n.widgetId;a(String,e)?a(String,r)?t.mixin({mounted:function(){if(!f){var e=new t;new c(e,n),t.prototype.$tawkMessenger=e,f=!0}}}):console.error("[Tawk-messenger-vue warn]: You didn't specified 'widgetId' property in the plugin."):console.error("[Tawk-messenger-vue warn]: You didn't specified 'propertyId' property in the plugin.")}},d=s.install;s.install=function(t,n){d.call(s,t,function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},n))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(s);n.default=s}])}));