/*
 *
 * mads - version 2.00.01
 * Copyright (c) 2015, Ninjoe
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://en.wikipedia.org/wiki/MIT_License
 * https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
 *
 */
//@formatter:off
!function(a,b){"use strict";var c=b(a);"object"==typeof module&&null!=module&&module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):a.m=c}("undefined"!=typeof window?window:{},function(a,b){"use strict";function c(a){return"function"==typeof a}function d(a){return"[object Object]"===Aa.call(a)}function e(a){return"[object String]"===Aa.call(a)}function f(){}function g(a){va=a.document,wa=a.location,ya=a.cancelAnimationFrame||a.clearTimeout,xa=a.requestAnimationFrame||a.setTimeout}function h(a,b){for(var c,d=[],e=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g;c=e.exec(b);)if(""===c[1]&&c[2])a.tag=c[2];else if("#"===c[1])a.attrs.id=c[2];else if("."===c[1])d.push(c[2]);else if("["===c[3][0]){var f=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(c[3]);a.attrs[f[1]]=f[3]||(f[2]?"":!0)}return d}function i(a,b){var c=b?a.slice(1):a;return 1===c.length&&Ba(c[0])?c[0]:c}function j(a,b,c){var d="class"in b?"class":"className";for(var e in b)za.call(b,e)&&(e===d&&null!=b[e]&&""!==b[e]?(c.push(b[e]),a[e]=""):a[e]=b[e]);c.length&&(a[d]=c.join(" "))}function k(a,b){var c=[].slice.call(arguments,1);if(d(a))return ba(a,c);if(!e(a))throw new Error("selector in m(selector, attrs, children) should be a string");var f=null!=b&&d(b)&&!("tag"in b||"view"in b||"subtree"in b),g=f?b:{},k={tag:"div",attrs:{},children:i(c,f)};return j(k.attrs,g,h(k,a)),k}function l(a,b){for(var c=0;c<a.length&&!b(a[c],c++););}function m(a,b){l(a,function(a,c){return(a=a&&a.attrs)&&null!=a.key&&b(a,c)})}function n(a){try{if(null!=a&&null!=a.toString())return a}catch(b){}return""}function o(a,b,c,d){try{q(a,b,c),b.nodeValue=d}catch(e){}}function p(a){for(var b=0;b<a.length;b++)Ba(a[b])&&(a=a.concat.apply([],a),b--);return a}function q(a,b,c){a.insertBefore(b,a.childNodes[c]||null)}function r(a,b,c,d){m(a,function(a,d){b[a=a.key]=b[a]?{action:Fa,index:d,from:b[a].index,element:c.nodes[b[a].index]||va.createElement("div")}:{action:Ea,index:d}});var e=[];for(var f in b)za.call(b,f)&&e.push(b[f]);var g=e.sort(R),h=new Array(c.length);return h.nodes=c.nodes.slice(),l(g,function(b){var e=b.index;if(b.action===Da&&(W(c[e].nodes,c[e]),h.splice(e,1)),b.action===Ea){var f=va.createElement("div");f.key=a[e].attrs.key,q(d,f,e),h.splice(e,0,{attrs:{key:a[e].attrs.key},nodes:[f]}),h.nodes[e]=f}if(b.action===Fa){var g=b.element,i=d.childNodes[e];i!==g&&null!==g&&d.insertBefore(g,i||null),h[e]=c[b.from],h.nodes[e]=g}}),h}function s(a,b,c,d){var e=a.length!==b.length;return e||m(a,function(a,c){var d=b[c];return e=d&&d.attrs&&d.attrs.key!==a.key}),e?r(a,c,b,d):b}function t(a,b,c){l(a,function(a,d){null!=b[d]&&c.push.apply(c,b[d].nodes)}),l(b.nodes,function(a,d){null!=a.parentNode&&c.indexOf(a)<0&&W([a],[b[d]])}),a.length<b.length&&(b.length=a.length),b.nodes=c}function u(a){var b=0;m(a,function(){return l(a,function(a){(a=a&&a.attrs)&&null==a.key&&(a.key="__mithril__"+b++)}),1})}function v(a,b,c){return a.tag!==b.tag?!0:c.sort().join()!==Object.keys(b.attrs).sort().join()?!0:a.attrs.id!==b.attrs.id?!0:a.attrs.key!==b.attrs.key?!0:"all"===k.redraw.strategy()?!b.configContext||b.configContext.retain!==!0:"diff"===k.redraw.strategy()?b.configContext&&b.configContext.retain===!1:!1}function w(a,b,d){v(a,b,d)&&(b.nodes.length&&W(b.nodes),b.configContext&&c(b.configContext.onunload)&&b.configContext.onunload(),b.controllers&&l(b.controllers,function(a){a.onunload&&a.onunload({preventDefault:f})}))}function x(a,b){return a.attrs.xmlns?a.attrs.xmlns:"svg"===a.tag?"http://www.w3.org/2000/svg":"math"===a.tag?"http://www.w3.org/1998/Math/MathML":b}function y(a,b,c){c.length&&(a.views=b,a.controllers=c,l(c,function(a){if(a.onunload&&a.onunload.$old&&(a.onunload=a.onunload.$old),Ga&&a.onunload){var b=a.onunload;a.onunload=f,a.onunload.$old=b}}))}function z(a,b,d,e,f){if(c(b.attrs.config)){var g=f.configContext=f.configContext||{};a.push(function(){return b.attrs.config.call(b,d,!e,g,f)})}}function A(a,c,d,e,f,g,h,i){var j=a.nodes[0];return e&&V(j,c.tag,c.attrs,a.attrs,f),a.children=Q(j,c.tag,b,b,c.children,a.children,!1,0,c.attrs.contenteditable?j:d,f,h),a.nodes.intact=!0,i.length&&(a.views=g,a.controllers=i),j}function B(a,b,c){var d;a.$trusted?d=Z(b,c,a):(d=[va.createTextNode(a)],b.nodeName in Ca||q(b,d[0],c));var e;return e="string"==typeof a||"number"==typeof a||"boolean"==typeof a?new a.constructor(a):a,e.nodes=d,e}function C(a,b,c,d,e,f){var g=b.nodes;return d&&d===va.activeElement||(a.$trusted?(W(g,b),g=Z(c,e,a)):"textarea"===f?c.value=a:d?d.innerHTML=a:((1===g[0].nodeType||g.length>1||g[0].nodeValue.trim&&!g[0].nodeValue.trim())&&(W(b.nodes,b),g=[va.createTextNode(a)]),o(c,g[0],e,a))),b=new a.constructor(a),b.nodes=g,b}function D(a,b,c,d,e,f,g){return a.nodes.length?a.valueOf()!==b.valueOf()||e?C(b,a,d,f,c,g):(a.nodes.intact=!0,a):B(b,d,c)}function E(a){if(a.$trusted){var b=a.match(/<[^\/]|\>\s*[^<]/g);if(null!=b)return b.length}else if(Ba(a))return a.length;return 1}function F(a,c,d,e,f,g,h,i,j){a=p(a);var k=[],l=c.length===a.length,n=0,o={},q=!1;m(c,function(a,b){q=!0,o[c[b].attrs.key]={action:Da,index:b}}),u(a),q&&(c=s(a,c,o,d));for(var r=0,v=0,w=a.length;w>v;v++){var x=Q(d,f,c,e,a[v],c[r],g,e+n||n,h,i,j);x!==b&&(l=l&&x.nodes.intact,n+=E(x),c[r++]=x)}return l||t(a,c,k),c}function G(a,b,c,d,e){if(null!=b){if(Aa.call(b)===Aa.call(a))return b;if(e&&e.nodes){var f=c-d,g=f+(Ba(a)?a:b.nodes).length;W(e.nodes.slice(f,g),e.slice(f,g))}else b.nodes&&W(b.nodes,b)}return b=new a.constructor,b.tag&&(b={}),b.nodes=[],b}function H(a,b){return a.attrs.is?null==b?va.createElement(a.tag,a.attrs.is):va.createElementNS(b,a.tag,a.attrs.is):null==b?va.createElement(a.tag):va.createElementNS(b,a.tag)}function I(a,b,c,d){return d?V(b,a.tag,a.attrs,{},c):a.attrs}function J(a,c,d,e,f,g){return null!=a.children&&a.children.length>0?Q(c,a.tag,b,b,a.children,d.children,!0,0,a.attrs.contenteditable?c:e,f,g):a.children}function K(a,b,c,d,e,f,g){var h={tag:a.tag,attrs:b,children:c,nodes:[d]};return y(h,f,g),h.children&&!h.children.nodes&&(h.children.nodes=[]),"select"===a.tag&&"value"in a.attrs&&V(d,a.tag,{value:a.attrs.value},{},e),h}function L(a,b,d,e){var f;return f="diff"===k.redraw.strategy()&&a?a.indexOf(b):-1,f>-1?d[f]:c(e)?new e:{}}function M(a,b,c,d){null!=d.onunload&&Ia.push({controller:d,handler:d.onunload}),a.push(c),b.push(d)}function N(a,b,c,d,e,f){var g=L(c.views,b,d,a.controller),h=a&&a.attrs&&a.attrs.key;return a=0===Ga||Ja||d&&d.indexOf(g)>-1?a.view(g):{tag:"placeholder"},"retain"===a.subtree?a:(a.attrs=a.attrs||{},a.attrs.key=h,M(f,e,b,g),a)}function O(a,b,c,d){for(var e=b&&b.controllers;null!=a.view;)a=N(a,a.view.$original||a.view,b,e,d,c);return a}function P(a,b,c,d,f,g,h,i){var j=[],k=[];if(a=O(a,b,j,k),"retain"===a.subtree)return b;if(!a.tag&&k.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");a.attrs=a.attrs||{},b.attrs=b.attrs||{};var l=Object.keys(a.attrs),m=l.length>("key"in a.attrs?1:0);if(w(a,b,l),e(a.tag)){var n=0===b.nodes.length;h=x(a,h);var o;if(n){o=H(a,h);var p=I(a,o,h,m),r=J(a,o,b,c,h,i);b=K(a,p,r,o,h,j,k)}else o=A(b,a,c,m,h,j,i,k);return(n||g===!0&&null!=o)&&q(d,o,f),z(i,a,o,n,b),b}}function Q(a,b,e,f,g,h,i,j,k,l,m){return g=n(g),"retain"===g.subtree?h:(h=G(g,h,j,f,e),Ba(g)?F(g,h,a,j,b,i,k,l,m):null!=g&&d(g)?P(g,h,k,a,j,i,l,m):c(g)?h:D(h,g,j,a,i,k,b))}function R(a,b){return a.action-b.action||a.index-b.index}function S(a,b,c){for(var d in b)za.call(b,d)&&(null!=c&&c[d]===b[d]||(a.style[d]=b[d]));for(d in c)za.call(c,d)&&(za.call(b,d)||(a.style[d]=""))}function T(a,b,e,f,g,h){if("config"===b||"key"===b)return!0;if(c(e)&&"on"===b.slice(0,2))a[b]=$(e,a);else if("style"===b&&null!=e&&d(e))S(a,e,f);else if(null!=h)"href"===b?a.setAttributeNS("http://www.w3.org/1999/xlink","href",e):a.setAttribute("className"===b?"class":b,e);else if(b in a&&!Ka[b])try{"input"===g&&a[b]===e||(a[b]=e)}catch(i){a.setAttribute(b,e)}else a.setAttribute(b,e)}function U(a,b,c,d,e,f,g){if(b in e&&d===c)"value"===b&&"input"===f&&a.value!==c&&(a.value=c);else{e[b]=c;try{return T(a,b,c,d,f,g)}catch(h){if(h.message.indexOf("Invalid argument")<0)throw h}}}function V(a,b,c,d,e){for(var f in c)if(za.call(c,f)&&U(a,f,c[f],d[f],d,b,e))continue;return d}function W(a,b){for(var c=a.length-1;c>-1;c--)if(a[c]&&a[c].parentNode){try{a[c].parentNode.removeChild(a[c])}catch(d){}b=[].concat(b),b[c]&&X(b[c])}a.length&&(a.length=0)}function X(a){a.configContext&&c(a.configContext.onunload)&&(a.configContext.onunload(),a.configContext.onunload=null),a.controllers&&l(a.controllers,function(a){c(a.onunload)&&a.onunload({preventDefault:f})}),a.children&&(Ba(a.children)?l(a.children,X):a.children.tag&&X(a.children))}function Y(a,b){try{a.appendChild(va.createRange().createContextualFragment(b))}catch(c){a.insertAdjacentHTML("beforeend",b)}}function Z(a,b,c){var d=a.childNodes[b];if(d){var e=1!==d.nodeType,f=va.createElement("span");e?(a.insertBefore(f,d||null),f.insertAdjacentHTML("beforebegin",c),a.removeChild(f)):d.insertAdjacentHTML("beforebegin",c)}else Y(a,c);for(var g=[];a.childNodes[b]!==d;)g.push(a.childNodes[b]),b++;return g}function $(a,b){return function(c){c=c||event,k.redraw.strategy("diff"),k.startComputation();try{return a.call(b,c)}finally{fa()}}}function _(a){var b=Ma.indexOf(a);return 0>b?Ma.push(a)-1:b}function aa(a){function b(){return arguments.length&&(a=arguments[0]),a}return b.toJSON=function(){return a},b}function ba(a,b){function c(){return(a.controller||f).apply(this,b)||this}function d(c){for(var d=[c].concat(b),e=1;e<arguments.length;e++)d.push(arguments[e]);return a.view.apply(a,d)}a.controller&&(c.prototype=a.controller.prototype),d.$original=a.view;var e={controller:c,view:d};return b[0]&&null!=b[0].key&&(e.attrs={key:b[0].key}),e}function ca(a,b,c,d){if(!d){k.redraw.strategy("all"),k.startComputation(),Pa[c]=b;var e;e=Oa=a?a:a={controller:f};var g=new(a.controller||f);return e===Oa&&(Ra[c]=g,Qa[c]=a),fa(),null===a&&da(b,c),Ra[c]}null==a&&da(b,c)}function da(a,b){Pa.splice(b,1),Ra.splice(b,1),Qa.splice(b,1),ma(a),Ma.splice(_(a),1)}function ea(){Ua&&(Ua(),Ua=null),l(Pa,function(a,b){var c=Qa[b];if(Ra[b]){var d=[Ra[b]];k.render(a,c.view?c.view(Ra[b],d):"")}}),Va&&(Va(),Va=null),Sa=null,Ta=new Date,k.redraw.strategy("diff")}function fa(){"none"===k.redraw.strategy()?(Ga--,k.redraw.strategy("diff")):k.endComputation()}function ga(a){return a.slice($a[k.route.mode].length)}function ha(a,b,c){Ya={};var d=c.indexOf("?");-1!==d&&(Ya=la(c.substr(d+1,c.length)),c=c.substr(0,d));var e=Object.keys(b),f=e.indexOf(c);if(-1!==f)return k.mount(a,b[e[f]]),!0;for(var g in b)if(za.call(b,g)){if(g===c)return k.mount(a,b[g]),!0;var h=new RegExp("^"+g.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(h.test(c))return c.replace(h,function(){var c=g.match(/:[^\/]+/g)||[],d=[].slice.call(arguments,1,-2);l(c,function(a,b){Ya[a.replace(/:|\./g,"")]=decodeURIComponent(d[b])}),k.mount(a,b[g])}),!0}}function ia(a){if(a=a||event,!(a.ctrlKey||a.metaKey||a.shiftKey||2===a.which)){a.preventDefault?a.preventDefault():a.returnValue=!1;var b,c=a.currentTarget||a.srcElement;for(b="pathname"===k.route.mode&&c.search?la(c.search.slice(1)):{};c&&!/a/i.test(c.nodeName);)c=c.parentNode;Ga=0,k.route(c[k.route.mode].slice($a[k.route.mode].length),b)}}function ja(){"hash"!==k.route.mode&&wa.hash?wa.hash=wa.hash:a.scrollTo(0,0)}function ka(a,c){var e={},f=[];for(var g in a)if(za.call(a,g)){var h=c?c+"["+g+"]":g,i=a[g];if(null===i)f.push(encodeURIComponent(h));else if(d(i))f.push(ka(i,h));else if(Ba(i)){var j=[];e[h]=e[h]||{},l(i,function(a){e[h][a]||(e[h][a]=!0,j.push(encodeURIComponent(h)+"="+encodeURIComponent(a)))}),f.push(j.join("&"))}else i!==b&&f.push(encodeURIComponent(h)+"="+encodeURIComponent(i))}return f.join("&")}function la(a){if(""===a||null==a)return{};"?"===a.charAt(0)&&(a=a.slice(1));var b=a.split("&"),c={};return l(b,function(a){var b=a.split("="),d=decodeURIComponent(b[0]),e=2===b.length?decodeURIComponent(b[1]):null;null!=c[d]?(Ba(c[d])||(c[d]=[c[d]]),c[d].push(e)):c[d]=e}),c}function ma(a){var c=_(a);W(a.childNodes,Na[c]),Na[c]=b}function na(a,b){var c=k.prop(b);return a.then(c),c.then=function(c,d){return na(a.then(c,d),b)},c["catch"]=c.then.bind(null,null),c}function oa(a,b){function e(a){i=a||eb,l.map(function(a){i===db?a.resolve(j):a.reject(j)})}function f(a,b,e,f){if((null!=j&&d(j)||c(j))&&c(a))try{var g=0;a.call(j,function(a){g++||(j=a,b())},function(a){g++||(j=a,e())})}catch(h){k.deferred.onerror(h),j=h,e()}else f()}function g(){var d;try{d=j&&j.then}catch(l){return k.deferred.onerror(l),j=l,i=cb,g()}i===cb&&k.deferred.onerror(j),f(d,function(){i=bb,g()},function(){i=cb,g()},function(){try{i===bb&&c(a)?j=a(j):i===cb&&c(b)&&(j=b(j),i=bb)}catch(g){return k.deferred.onerror(g),j=g,e()}j===h?(j=TypeError(),e()):f(d,function(){e(db)},e,function(){e(i===bb&&db)})})}var h=this,i=0,j=0,l=[];h.promise={},h.resolve=function(a){return i||(j=a,i=bb,g()),h},h.reject=function(a){return i||(j=a,i=cb,g()),h},h.promise.then=function(a,b){var c=new oa(a,b);return i===db?c.resolve(j):i===eb?c.reject(j):l.push(c),c.promise}}function pa(a){return a}function qa(c){var d="mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),e=va.createElement("script");a[d]=function(f){e.parentNode.removeChild(e),c.onload({type:"load",target:{responseText:f}}),a[d]=b},e.onerror=function(){return e.parentNode.removeChild(e),c.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),a[d]=b,!1},e.onload=function(){return!1},e.src=c.url+(c.url.indexOf("?")>0?"&":"?")+(c.callbackKey?c.callbackKey:"callback")+"="+d+"&"+ka(c.data||{}),va.body.appendChild(e)}function ra(b){var d=new a.XMLHttpRequest;if(d.open(b.method,b.url,!0,b.user,b.password),d.onreadystatechange=function(){4===d.readyState&&(d.status>=200&&d.status<300?b.onload({type:"load",target:d}):b.onerror({type:"error",target:d}))},b.serialize===JSON.stringify&&b.data&&"GET"!==b.method&&d.setRequestHeader("Content-Type","application/json; charset=utf-8"),b.deserialize===JSON.parse&&d.setRequestHeader("Accept","application/json, text/*"),c(b.config)){var f=b.config(d,b);null!=f&&(d=f)}var g="GET"!==b.method&&b.data?b.data:"";if(g&&!e(g)&&g.constructor!==a.FormData)throw new Error("Request data should be either be a string or FormData. Check the `serialize` option in `m.request`");return d.send(g),d}function sa(a){return a.dataType&&"jsonp"===a.dataType.toLowerCase()?qa(a):ra(a)}function ta(a,b,c){if("GET"===a.method&&"jsonp"!==a.dataType){var d=a.url.indexOf("?")<0?"?":"&",e=ka(b);a.url+=e?d+e:""}else a.data=c(b)}function ua(a,b){return b&&(a=a.replace(/:[a-z]\w+/gi,function(a){var c=a.slice(1),d=b[c];return delete b[c],d})),a}k.version=function(){return"v0.2.2-rc.1"};var va,wa,xa,ya,za={}.hasOwnProperty,Aa={}.toString,Ba=Array.isArray||function(a){return"[object Array]"===Aa.call(a)},Ca={AREA:1,BASE:1,BR:1,COL:1,COMMAND:1,EMBED:1,HR:1,IMG:1,INPUT:1,KEYGEN:1,LINK:1,META:1,PARAM:1,SOURCE:1,TRACK:1,WBR:1};k.deps=function(b){return g(a=b||window),a},k.deps(a);var Da=1,Ea=2,Fa=3,Ga=0;k.startComputation=function(){Ga++},k.endComputation=function(){Ga>1?Ga--:(Ga=0,k.redraw())};var Ha,Ia=[],Ja=!1,Ka={list:1,style:1,form:1,type:1,width:1,height:1},La={appendChild:function(a){Ha===b&&(Ha=va.createElement("html")),va.documentElement&&va.documentElement!==a?va.replaceChild(a,va.documentElement):va.appendChild(a),this.childNodes=va.childNodes},insertBefore:function(a){this.appendChild(a)},childNodes:[]},Ma=[],Na={};k.render=function(a,c,d){if(!a)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var e,f=[],g=_(a),h=a===va;e=h||a===va.documentElement?La:a,h&&"html"!==c.tag&&(c={tag:"html",attrs:{},children:c}),Na[g]===b&&W(e.childNodes),d===!0&&ma(a),Na[g]=Q(e,null,b,b,c,Na[g],!1,0,null,b,f),l(f,function(a){a()})},k.trust=function(a){return a=new String(a),a.$trusted=!0,a},k.prop=function(a){return(null!=a&&d(a)||c(a))&&c(a.then)?na(a):aa(a)};var Oa,Pa=[],Qa=[],Ra=[],Sa=null,Ta=0,Ua=null,Va=null,Wa=16;k.component=function(a){var b=[].slice.call(arguments,1);return ba(a,b)},k.mount=k.module=function(a,b){if(!a)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var d=Pa.indexOf(a);0>d&&(d=Pa.length);var e=!1,f={preventDefault:function(){e=!0,Ua=Va=null}};return l(Ia,function(a){a.handler.call(a.controller,f),a.controller.onunload=null}),e?l(Ia,function(a){a.controller.onunload=a.handler}):Ia=[],Ra[d]&&c(Ra[d].onunload)&&Ra[d].onunload(f),ca(b,a,d,e)};var Xa=!1;k.redraw=function(b){if(!Xa){Xa=!0,b&&(Ja=!0);try{Sa&&!b?(xa===a.requestAnimationFrame||new Date-Ta>Wa)&&(Sa>0&&ya(Sa),Sa=xa(ea,Wa)):(ea(),Sa=xa(function(){Sa=null},Wa))}finally{Xa=Ja=!1}}},k.redraw.strategy=k.prop(),k.withAttr=function(a,b,c){return function(d){d=d||event;var e=d.currentTarget||this,f=c||this,g=a in e?e[a]:e.getAttribute(a);b.call(f,g)}};var Ya,Za,$a={pathname:"",hash:"#",search:"?"},_a=f,ab=!1;k.route=function(b,c,d,f){if(0===arguments.length)return Za;if(3===arguments.length&&e(c)){_a=function(a){var e=Za=ga(a);if(!ha(b,d,e)){if(ab)throw new Error("Ensure the default route matches one of the routes defined in m.route");ab=!0,k.route(c,!0),ab=!1}};var g="hash"===k.route.mode?"onhashchange":"onpopstate";return a[g]=function(){var a=wa[k.route.mode];"pathname"===k.route.mode&&(a+=wa.search),Za!==ga(a)&&_a(a)},Ua=ja,void a[g]()}if(b.addEventListener||b.attachEvent){var h="pathname"!==k.route.mode?wa.pathname:"";return b.href=h+$a[k.route.mode]+f.attrs.href,void(b.addEventListener?(b.removeEventListener("click",ia),b.addEventListener("click",ia)):(b.detachEvent("onclick",ia),b.attachEvent("onclick",ia)))}if(e(b)){var i=Za;Za=b;var j,l=c||{},m=Za.indexOf("?");j=m>-1?la(Za.slice(m+1)):{};for(var n in l)za.call(l,n)&&(j[n]=l[n]);var o,p=ka(j);o=m>-1?Za.slice(0,m):Za,p&&(Za=o+(-1===o.indexOf("?")?"?":"&")+p);var q=(3===arguments.length?d:c)===!0||i===b;if(a.history.pushState){var r=q?"replaceState":"pushState";Ua=ja,Va=function(){a.history[r](null,va.title,$a[k.route.mode]+Za)},_a($a[k.route.mode]+Za)}else wa[k.route.mode]=Za,_a($a[k.route.mode]+Za)}},k.route.param=function(a){if(!Ya)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return a?Ya[a]:Ya},k.route.mode="search",k.route.buildQueryString=ka,k.route.parseQueryString=la,k.deferred=function(){var a=new oa;return a.promise=na(a.promise),a};var bb=1,cb=2,db=3,eb=4;return k.deferred.onerror=function(a){if("[object Error]"===Aa.call(a)&&!/ Error/.test(a.constructor.toString()))throw Ga=0,a},k.sync=function(a){function b(a,b){return function(g){return e[a]=g,b||(f="reject"),0===--d&&(c.promise(e),c[f](e)),g}}var c=k.deferred(),d=a.length,e=new Array(d),f="resolve";return a.length>0?l(a,function(a,c){a.then(b(c,!0),b(c,!1))}):c.resolve([]),c.promise},k.request=function(a){a.background!==!0&&k.startComputation();var b,c,d,e=new oa,f=a.dataType&&"jsonp"===a.dataType.toLowerCase();return f?(b=a.serialize=c=a.deserialize=pa,d=function(a){return a.responseText}):(b=a.serialize=a.serialize||JSON.stringify,c=a.deserialize=a.deserialize||JSON.parse,d=a.extract||function(a){return a.responseText.length||c!==JSON.parse?a.responseText:null}),a.method=(a.method||"GET").toUpperCase(),a.url=ua(a.url,a.data),ta(a,a.data,b),a.onload=a.onerror=function(b){try{b=b||event;var f=c(d(b.target,a));"load"===b.type?(a.unwrapSuccess&&(f=a.unwrapSuccess(f,b.target)),Ba(f)&&a.type?l(f,function(b,c){f[c]=new a.type(b)}):a.type&&(f=new a.type(f)),e.resolve(f)):(a.unwrapError&&(f=a.unwrapError(f,b.target)),e.reject(f))}catch(g){e.reject(g)}finally{a.background!==!0&&k.endComputation()}},sa(a),e.promise=na(e.promise,a.initialValue),e.promise},k});
function animator(n,o,t,i){return function(e,r,a){function u(e,r,a){function u(){var n=i?e:e.cloneNode(!0),t=null;l&&f&&l.parentNode===f&&(t=l),animating=!0,setTimeout(function(){animating=!1},0),f.insertBefore(n,t),o(n,function(){f.removeChild(n)})}var v,g;return c&&(v=c(e,r,a),g=a.onunload),r||((n&&t||animating)&&n(e,noop),a.onunload=o?g?function(){u(),g()}:u:g,f=e.parentElement,l=e.nextElementSibling),v}var c,f,l;return e.nodeType?u(e,r,a):e.attrs?(c=e.attrs.config,e.attrs.config=u,e):e.view?{controller:e.controller||noop,view:function(n){var o=e.view(n);return c=o.config,o.attrs.config=u,o}}:void 0}}function noop(){}var animating=!1;
//@formatter:on

var mads = function () {
  /* Get Tracker */
  if (typeof custTracker == 'undefined' && typeof rma != 'undefined') {
    this.custTracker = rma.customize.custTracker;
  } else if (typeof custTracker != 'undefined') {
    this.custTracker = custTracker;
  } else {
    this.custTracker = [];
  }

  /* CT */
  if (typeof ct == 'undefined' && typeof rma != 'undefined') {
    this.ct = rma.ct;
  } else if (typeof ct != 'undefined') {
    this.ct = ct;
  } else {
    this.ct = [];
  }

  /* CTE */
  if (typeof cte == 'undefined' && typeof rma != 'undefined') {
    this.cte = rma.cte;
  } else if (typeof cte != 'undefined') {
    this.cte = cte;
  } else {
    this.cte = [];
  }

  /* Unique ID on each initialise */
  this.id = this.uniqId();

  /* Tracked tracker */
  this.tracked = [];
  /* each engagement type should be track for only once and also the first tracker only */
  this.trackedEngagementType = [];
  /* trackers which should not have engagement type */
  this.engagementTypeExlude = [];
  /* first engagement */
  this.firstEngagementTracked = false;

  /* Body Tag */
  this.bodyTag = document.getElementsByTagName('body')[0];

  /* Head Tag */
  this.headTag = document.getElementsByTagName('head')[0];

  /* RMA Widget - Content Area */
  this.contentTag = document.getElementById('rma-widget');

  /* URL Path */
  this.path = typeof rma != 'undefined' ? rma.customize.src : '';

  /* Solve {2} issues */
  for (var i = 0; i < this.custTracker.length; i++) {
    if (this.custTracker[i].indexOf('{2}') != -1) {
      this.custTracker[i] = this.custTracker[i].replace('{2}', '{{type}}');
      this.tracker('N', 'macro_replaced');
    }
  }
};

/* Generate unique ID */
mads.prototype.uniqId = function () {

  return new Date().getTime();
};

/* Link Opner */
mads.prototype.linkOpener = function (url) {

  if (typeof url != "undefined" && url != "") {

    if (typeof mraid !== 'undefined') {
      mraid.open(url);
    } else {
      window.open(url);
    }
  }
};

/* tracker */
mads.prototype.tracker = function (tt, type, name, value) {

  /*
   * name is used to make sure that particular tracker is tracked for only once
   * there might have the same type in different location, so it will need the name to differentiate them
   */
  name = name || type;

  if (typeof this.custTracker != 'undefined' && this.custTracker != '' && this.tracked.indexOf(name) == -1) {
    for (var i = 0; i < this.custTracker.length; i++) {
      var img = document.createElement('img');

      if (typeof value == 'undefined') {
        value = '';
      }

      /* Insert Macro */
      var src = this.custTracker[i].replace('{{rmatype}}', type);
      src = src.replace('{{rmavalue}}', value);

      /* Insert TT's macro */
      if (this.trackedEngagementType.indexOf(tt) != '-1' || this.engagementTypeExlude.indexOf(tt) != '-1') {
        src = src.replace('tt={{rmatt}}', '');
      } else {
        src = src.replace('{{rmatt}}', tt);
        this.trackedEngagementType.push(tt);
      }

      /* Append ty for first tracker only */
      if (!this.firstEngagementTracked) {
        src = src + '&ty=E';
        this.firstEngagementTracked = true;
      }

      /* */
      img.src = src + '&' + this.id;

      img.style.display = 'none';
      this.bodyTag.appendChild(img);

      this.tracked.push(name);
    }
  }
};

/* Load JS File */
mads.prototype.loadJs = function (js, callback) {
  var script = document.createElement('script');
  script.src = js;

  if (typeof callback != 'undefined') {
    script.onload = callback;
  }

  this.headTag.appendChild(script);
};

/* Load CSS File */
mads.prototype.loadCss = function (href) {
  var link = document.createElement('link');
  link.href = href;
  link.setAttribute('type', 'text/css');
  link.setAttribute('rel', 'stylesheet');

  this.headTag.appendChild(link);
};


var bpi = function () {
  var app = new mads();

  var fI = function (el, cb) {
    var els = ['top-text', 'hotspots'],
        goto = document.getElementById('goto'),
        learn = document.getElementById('learn');

    goto.style.opacity = learn.style.opacity = 0;

    for (var i in els) {
      var e = document.getElementById(els[i]);
      e.style.opacity = 0;
    }

    setTimeout(function () {
      for (var i in els) {
        var e = document.getElementById(els[i]);
        e.style.opacity = 1;
      }
    }, 3500);

    setTimeout(function () {
      goto.style.opacity = learn.style.opacity = 1;
    }, 5200);

    for (var i in els) {
      var eTransit = document.getElementById(els[i]);
      eTransit.addEventListener('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', cb, false);
    }

    goto.addEventListener('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', cb, false);
    learn.addEventListener('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', cb, false);
  };

  var fO = function (el, cb) {
    // Fade Out
    document.getElementById('first').className = '';
    var topText = document.getElementById('top-text');
    topText.style.opacity = 1;

    setTimeout(function () {
      topText.style.opacity = 0;
    }, 3000);

    topText.addEventListener('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', cb, false);
  };

  var fadeInOut = animator(fI, fO);

  m.route.mode = 'hash';

  var data = {
    hidalgoMarker: {
      title: 'Hidalgo Street',
      desc: 'Indulge your Inner cameraphile! Hidalgo street is packed with camera shops, and you can get anything from newest models to vintage SLRs.',
      map: 'http://maps.google.com/maps/api/staticmap?sensor=false&maptype=roadmap&zoom=16&size=146x66&markers=size:mid%7Ccolor:red%7CFR+Hidalgo+St,+Quiapo,+Manila,+Metro+Manila',
      coord: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.6765684798362!2d120.98675434639858!3d14.598722433918322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca1d44c4a2db%3A0xe9eda40e3a331b1!2sF-R.+Hidalgo+St%2C+Quiapo%2C+Manila%2C+Metro+Manila!5e0!3m2!1sen!2sph!4v1456366946645" width="480" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>',
      img: 'camera'
    },
    churchMarker: {
      title: 'Quiapo Church',
      desc: 'Experience the Philippines\' unique blend of Christianity and folk beliefs at Quiapo church, where visitors can shop for amulets or get their fortunes in told after attending mass.',
      map: 'http://maps.google.com/maps/api/staticmap?sensor=false&maptype=roadmap&zoom=16&size=175x66&markers=size:mid%7Ccolor:red%7C14.598932, 120.983767',
      coord: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.5356952677627!2d120.9834828385187!3d14.598793827399883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM1JzU2LjIiTiAxMjDCsDU5JzAxLjYiRQ!5e0!3m2!1sen!2sph!4v1456366761721" width="480" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>',
      img: 'church'
    },
    foodMarker: {
      title: 'Eat Street Food',
      desc: 'No trip to Manila <br/> is complete without the street food! Start the day with hot taho (soy beancurd jelly with syrup and tapioca), and have turon (deep fried banana wraps drizzled with caramelized sugar) for merienda.',
      map: 'http://maps.google.com/maps/api/staticmap?sensor=false&maptype=roadmap&zoom=16&size=210x66&markers=size:mid%7Ccolor:red%7C14.601239, 120.976279',
      coord: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.240507033754!2d120.9757318292072!3d14.601238999362613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzA0LjUiTiAxMjDCsDU4JzM0LjYiRQ!5e0!3m2!1sen!2sph!4v1456366308495" width="480" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>',
      img: 'food'
    },
    sunMarker: {
      title: 'Watch a <br/>Noon Time Show',
      desc: 'Get a taste  of Philippine pop culture by watching a noontime show on one of the local channels over lunch. We\'ve got everything from dance competitions to lip-synching maids.',
      map: 'http://maps.google.com/maps/api/staticmap?sensor=false&maptype=roadmap&zoom=16&size=215x66&markers=size:mid%7Ccolor:red%7C14.639628, 121.035363',
      coord: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.1436323934165!2d121.03426865807462!3d14.639627997444435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM4JzIyLjciTiAxMjHCsDAyJzA3LjMiRQ!5e0!3m2!1sen!2sph!4v1456367053172" width="480" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>',
      img: 'sun'
    },
    fishMarker: {
      title: "Visit <br/>the Wet Market",
      desc: 'Sample the freshest ingredients at a local wet market! Find everything from seafood and vegetables to walis (local brooms).',
      map: 'http://maps.google.com/maps/api/staticmap?sensor=false&maptype=roadmap&zoom=16&size=210x85&markers=size:mid%7Ccolor:red%7C14.608053, 120.969402',
      coord: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.7227630495727!2d120.96895708980978!3d14.608143750362547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzI5LjAiTiAxMjDCsDU4JzA5LjgiRQ!5e0!3m2!1sen!2sph!4v1456367091293" width="480" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>',
      img: 'fish'
    },
    ballMarker: {
      title: 'Play <br/>Basketball',
      desc: 'Basketball is the country\'s most popular sport. It won\'t be difficult to find a game happening near you, as locals love playing basketball in the streets as well as the courts.',
      map: 'http://maps.google.com/maps/api/staticmap?sensor=false&maptype=roadmap&zoom=16&size=200x80&markers=size:mid%7Ccolor:red%7C14.611338, 120.963035',
      coord: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.1971581216274!2d120.96257038702477!3d14.61111333686712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzQwLjgiTiAxMjDCsDU3JzQ2LjkiRQ!5e0!3m2!1sen!2sph!4v1456367127364" width="480" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>',
      img: 'ball'
    },
    shopMarker: {
      title: 'Shopping<br/>in Divisoria',
      desc: 'The city\'s largest and most popular bargain market will welcome you into its sprawling, chaotic arms. Shop for anything from textiles to souvenirs to fresh fruit.',
      map: 'http://maps.google.com/maps/api/staticmap?sensor=false&maptype=roadmap&zoom=16&size=210x60&markers=size:mid%7Ccolor:red%7C14.603643, 120.969495',
      coord: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.61509728741663!2d120.96930251653286!3d14.603588639998156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca0dc386c4f9%3A0xf9292bda346cf23b!2sDivisoria+Commercial!5e0!3m2!1sen!2sph!4v1456368008480" width="480" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>',
      img: 'shop'
    },
    karaokeMarker: {
      title: 'Karaoke',
      desc: 'Filipinos love to sing, which is why karaoke is an immensely popular activity. No need to visit a high-end karaoke bar. If you\'re staying with a local family, they probably have a karaoke machine on hand.',
      map: 'http://maps.google.com/maps/api/staticmap?sensor=false&maptype=roadmap&zoom=16&size=200x70&markers=size:mid%7Ccolor:red%7C14.635728, 121.032068',
      coord: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d811.5394158351166!2d121.03175508331287!3d14.635847605129658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7afc2577f2d%3A0xae1875e3ec89a0c2!2sKaraoke+Republic!5e0!3m2!1sen!2sph!4v1456367863685" width="480" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>',
      img: 'karaoke'
    },
    jeepMarker: {
      title: 'Ride Local',
      desc: 'Ride a jeepney, a pedicab or a kalesa and see, hear and smell Manila from a local\'s point of view.',
      map: 'http://maps.google.com/maps/api/staticmap?sensor=false&maptype=roadmap&zoom=16&size=210x100&markers=size:mid%7Ccolor:red%7C14.653695, 121.072746',
      coord: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.4734419858975!2d121.07228819860569!3d14.653672966740672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7641b0869f7%3A0x4c705f94673a3c57!2sKatipunan+Jeepney+Terminal!5e0!3m2!1sen!2sph!4v1456367714394" width="480" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>',
      img: 'jeep'
    }
  };

  var selected = false,
      markerOpen = false,
      onceManila = true;

  var persistent = function (el, isInit, context) {
    if (el.id === 'manila' && !isInit) {
      el.style.opacity = 0;

      var si = setInterval(function () {
        if (!onceManila) {
          onceManila = !onceManila;
          el.style.opacity = 1;
          setTimeout(function () {
            m.mount(document.getElementById('ad'), fadeInOut(second));
            clearInterval(si);
          }, 1000);
        }
      }, 100);
    }
    context.retain = true;
  };

  window.onload = function () {
    var f = document.getElementById('first');
    f.style.opacity = 0;
    setTimeout(function () {
      f.style.opacity = 1;

    }, 1000);

    setTimeout(function () {
      onceManila = false;
    }, 2000)
  };

  var first = {
    controller: function () {

    },
    view: function () {
      return m('div#first', [
        m('div#top-text', 'Welcome To'),
        m('div#manila', {config: persistent}, m('img', {src: app.path + 'img/manila.png'}))
      ])
    }
  };

  var markerClick = function (el) {
    m.startComputation();
    if (!markerOpen) {
      selected = data[el.target.id];

      var modal = document.querySelector('.modal');
      var dialog = document.querySelector('.modal-dialog');
      var highspot = document.getElementById('highspot');

      highspot.className = el.target.id.replace('Marker', '');
      dialog.id = el.target.id.replace('Marker', '');
      modal.className = 'modal show-modal ' + dialog.id;
      markerOpen = true;

      var markers = document.querySelectorAll('.marker');
      for (var i in markers) {
        markers[i].className = 'marker no-display';
      }

      var learnBox = document.getElementById('learnBox');
      learnBox.className = 'no-display';
    }
    m.endComputation();
  };

  var markerClose = function () {
    m.startComputation();
    markerOpen = false;
    var modal = document.querySelector('.modal');
    var dialog = document.querySelector('.modal-dialog');
    var highspot = document.getElementById('highspot');
    modal.className = 'modal hiding';
    var imgMap = document.getElementById('smallmap');

    var markers = document.querySelectorAll('.marker');
    for (var i in markers) {
      markers[i].className = 'marker';
    }

    var learnBox = document.getElementById('learnBox');
    learnBox.className = '';

    setTimeout(function () {

      selected = false;
      highspot.className = 'none';
      modal.className = 'modal'
    }, 300);
    setTimeout(function () {
      imgMap.src = app.path + 'img/loading.gif';
    }, 900);
    m.endComputation();
  };

  var mapExpand = function () {
    var mapContainer = document.getElementById('mapexpanded');
    mapContainer.className = '';
  };

  var mapCollapse = function () {
    var mapContainer = document.getElementById('mapexpanded');
    mapContainer.className = 'hide';
  };

  var learnMore = function () {
    app.tracker('CTR', 'site');
    app.linkOpener('http://makethebesthappen.ph');
  };

  var downloadFile = function (el) {
    app.linkOpener(el.target.href);
    el.preventDefault();
  };

  var second = {
    controller: function () {
      return {download: '//rmarepo.richmediaads.com/3212/bpi/attachments/Manila_Guide_Mobile.jpg'}
    },
    view: function (ctrl) {
      return m('div#second', [
        m('div#top-text', 'Tap On The Hotspots'),
        m('div#hotspots', m('img', {src: app.path + 'img/hotspots.png'})),
        m('div#goto.bottom', 'Go to http://makethebesthappen.ph'),
        m('button#learn.bottom', 'LEARN MORE ▸'),
        m('div#hidalgoMarker.marker', {onclick: markerClick}),
        m('div#karaokeMarker.marker', {onclick: markerClick}),
        m('div#ballMarker.marker', {onclick: markerClick}),
        m('div#foodMarker.marker', {onclick: markerClick}),
        m('div#churchMarker.marker', {onclick: markerClick}),
        m('div#fishMarker.marker', {onclick: markerClick}),
        m('div#jeepMarker.marker', {onclick: markerClick}),
        m('div#sunMarker.marker', {onclick: markerClick}),
        m('div#shopMarker.marker', {onclick: markerClick}),
        m('div#learnBox', {onclick: learnMore}),
        m('div#highspot.none'),
        m('div#mapexpanded.hide', [m('button#closemap', {onclick: mapCollapse}, m.trust('CLOSE MAP <span class="gray">✖</span>')), m.trust(selected.coord)]),
        m('div.modal', {'aria-hidden': true}, m('div.modal-dialog', [
              m('div.modal-header', [
                m('h2', m.trust(selected.title)),
                m('div.img-' + selected.img),
                m('button[aria-hidden="true"].btn-close', {onclick: markerClose}, '✖')
              ]),
              m('div.modal-body', [
                m('div.desc', m.trust(selected.desc)),
                m('img#smallmap.map', {src: selected.map || app.path + 'img/loading.gif'}),

                m('a.download', {
                  onclick: downloadFile,
                  href: ctrl.download,
                  download: 'BPI Manila Guide Mobile'
                  //target: '_blank'
                }, m.trust('Download <span class="icon-download3"></span>')),
                m('div.expand', {onclick: mapExpand}, m.trust('Expand <span class="icon-enlarge"></span>'))
              ])
            ])
        )
      ])
    }
  };

  app.contentTag.innerHTML = '<div id="ad"></div>';


  m.render(document.getElementById('ad'), fadeInOut(first));


  app.loadCss('css/style.css');

};

var ad = new bpi();