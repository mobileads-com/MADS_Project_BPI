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
var m=function a(b,c){"use strict";function d(a){return"function"==typeof a}function e(a){return"[object Object]"===qb.call(a)}function f(a){return"[object String]"===qb.call(a)}function g(a){kb=a.document,lb=a.location,nb=a.cancelAnimationFrame||a.clearTimeout,mb=a.requestAnimationFrame||a.setTimeout}function h(a,b){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];if(e(a))return V(a,c);var g,h=null!=b&&e(b)&&!("tag"in b||"view"in b||"subtree"in b),i=h?b:{},j="class"in i?"class":"className",k={tag:"div",attrs:{}},l=[];if(!f(a))throw new Error("selector in m(selector, attrs, children) should be a string");for(;null!=(g=rb.exec(a));)if(""===g[1]&&g[2])k.tag=g[2];else if("#"===g[1])k.attrs.id=g[2];else if("."===g[1])l.push(g[2]);else if("["===g[3][0]){var m=sb.exec(g[3]);k.attrs[m[1]]=m[3]||(m[2]?"":!0)}var n=h?c.slice(1):c;k.children=1===n.length&&pb(n[0])?n[0]:n;for(var o in i)i.hasOwnProperty(o)&&(o===j&&null!=i[o]&&""!==i[o]?(l.push(i[o]),k.attrs[o]=""):k.attrs[o]=i[o]);return l.length&&(k.attrs[j]=l.join(" ")),k}function i(a,b){for(var c=0;c<a.length&&!b(a[c],c++););}function j(a,b){i(a,function(a,c){return(a=a&&a.attrs)&&null!=a.key&&b(a,c)})}function k(a){try{if(null==a||null==a.toString())return""}catch(b){return""}return a}function l(a,b,c,d){try{n(a,b,c),b.nodeValue=d}catch(e){}}function m(a){for(var b=0;b<a.length;b++)pb(a[b])&&(a=a.concat.apply([],a),b--);return a}function n(a,b,c){a.insertBefore(b,a.childNodes[c]||null)}function o(a,b,c,d){j(a,function(a,d){b[a=a.key]=b[a]?{action:yb,index:d,from:b[a].index,element:c.nodes[b[a].index]||kb.createElement("div")}:{action:xb,index:d}});var e=[];for(var f in b)e.push(b[f]);var g=e.sort(N),h=new Array(c.length);return h.nodes=c.nodes.slice(),i(g,function(b){var e=b.index;if(b.action===wb&&(P(c[e].nodes,c[e]),h.splice(e,1)),b.action===xb){var f=kb.createElement("div");f.key=a[e].attrs.key,n(d,f,e),h.splice(e,0,{attrs:{key:a[e].attrs.key},nodes:[f]}),h.nodes[e]=f}if(b.action===yb){var g=b.element,i=d.childNodes[e];i!==g&&null!==g&&d.insertBefore(g,i||null),h[e]=c[b.from],h.nodes[e]=g}}),h}function p(a,b,c,d){var e=a.length!==b.length;return e||j(a,function(a,c){var d=b[c];return e=d&&d.attrs&&d.attrs.key!==a.key}),e?o(a,c,b,d):b}function q(a,b,c){i(a,function(a,d){null!=b[d]&&c.push.apply(c,b[d].nodes)}),i(b.nodes,function(a,d){null!=a.parentNode&&c.indexOf(a)<0&&P([a],[b[d]])}),a.length<b.length&&(b.length=a.length),b.nodes=c}function r(a){var b=0;j(a,function(){return i(a,function(a){(a=a&&a.attrs)&&null==a.key&&(a.key="__mithril__"+b++)}),1})}function s(a,b,c){(a.tag!==b.tag||c.sort().join()!==Object.keys(b.attrs).sort().join()||a.attrs.id!==b.attrs.id||a.attrs.key!==b.attrs.key||"all"===h.redraw.strategy()&&(!b.configContext||b.configContext.retain!==!0)||"diff"===h.redraw.strategy()&&b.configContext&&b.configContext.retain===!1)&&(b.nodes.length&&P(b.nodes),b.configContext&&d(b.configContext.onunload)&&b.configContext.onunload(),b.controllers&&i(b.controllers,function(a){a.unload&&a.onunload({preventDefault:ub})}))}function t(a,b){return a.attrs.xmlns?a.attrs.xmlns:"svg"===a.tag?"http://www.w3.org/2000/svg":"math"===a.tag?"http://www.w3.org/1998/Math/MathML":b}function u(a,b,c){c.length&&(a.views=b,a.controllers=c,i(c,function(a){if(a.onunload&&a.onunload.$old&&(a.onunload=a.onunload.$old),Ob&&a.onunload){var b=a.onunload;a.onunload=ub,a.onunload.$old=b}}))}function v(a,b,c,e,f){if(d(b.attrs.config)){var g=f.configContext=f.configContext||{};a.push(function(){return b.attrs.config.call(b,c,!e,g,f)})}}function w(a,b,d,e,f,g,h,i){var j=a.nodes[0];return e&&O(j,b.tag,b.attrs,a.attrs,f),a.children=M(j,b.tag,c,c,b.children,a.children,!1,0,b.attrs.contenteditable?j:d,f,h),a.nodes.intact=!0,i.length&&(a.views=g,a.controllers=i),j}function x(a,b,c){var d;a.$trusted?d=R(b,c,a):(d=[kb.createTextNode(a)],b.nodeName.match(tb)||n(b,d[0],c));var e="string"==typeof a||"number"==typeof a||"boolean"==typeof a?new a.constructor(a):a;return e.nodes=d,e}function y(a,b,c,d,e,f){var g=b.nodes;return d&&d===kb.activeElement||(a.$trusted?(P(g,b),g=R(c,e,a)):"textarea"===f?c.value=a:d?d.innerHTML=a:((1===g[0].nodeType||g.length>1||g[0].nodeValue.trim&&!g[0].nodeValue.trim())&&(P(b.nodes,b),g=[kb.createTextNode(a)]),l(c,g[0],e,a))),b=new a.constructor(a),b.nodes=g,b}function z(a,b,c,d,e,f,g){return 0===a.nodes.length?x(b,d,c):a.valueOf()!==b.valueOf()||e===!0?y(b,a,d,f,c,g):(a.nodes.intact=!0,a)}function A(a){if(a.$trusted){var b=a.match(/<[^\/]|\>\s*[^<]/g);if(null!=b)return b.length}else if(pb(a))return a.length;return 1}function B(a,b,d,e,f,g,h,i,k){a=m(a);var l=[],n=b.length===a.length,o=0,s={},t=!1;j(b,function(a,c){t=!0,s[b[c].attrs.key]={action:wb,index:c}}),r(a),t&&(b=p(a,b,s,d));for(var u=0,v=0,w=a.length;w>v;v++){var x=M(d,f,b,e,a[v],b[u],g,e+o||o,h,i,k);x!==c&&(n=n&&x.nodes.intact,o+=A(x),b[u++]=x)}return n||q(a,b,l),b}function C(a,b,c,d,e){if(null!=b){if(qb.call(b)===qb.call(a))return b;if(e&&e.nodes){var f=c-d,g=f+(pb(a)?a:b.nodes).length;P(e.nodes.slice(f,g),e.slice(f,g))}else b.nodes&&P(b.nodes,b)}return b=new a.constructor,b.tag&&(b={}),b.nodes=[],b}function D(a,b){return b===c?a.attrs.is?kb.createElement(a.tag,a.attrs.is):kb.createElement(a.tag):a.attrs.is?kb.createElementNS(b,a.tag,a.attrs.is):kb.createElementNS(b,a.tag)}function E(a,b,c,d){return d?O(b,a.tag,a.attrs,{},c):a.attrs}function F(a,b,d,e,f,g){return null!=a.children&&a.children.length>0?M(b,a.tag,c,c,a.children,d.children,!0,0,a.attrs.contenteditable?b:e,f,g):a.children}function G(a,b,c,d,e,f,g){var h={tag:a.tag,attrs:b,children:c,nodes:[d]};return u(h,f,g),h.children&&!h.children.nodes&&(h.children.nodes=[]),"select"===a.tag&&"value"in a.attrs&&O(d,a.tag,{value:a.attrs.value},{},e),h}function H(a,b,c,d){var e="diff"===h.redraw.strategy()&&a?a.indexOf(b):-1;return e>-1?c[e]:"function"==typeof d?new d:{}}function I(a,b,c,d){null!=d.onunload&&Kb.push({controller:d,handler:d.onunload}),a.push(c),b.push(d)}function J(a,b,c,d,e,f){var g=H(c.views,b,d,a.controller),h=+(a&&a.attrs&&a.attrs.key);return a=0===Ob||Nb||d&&d.indexOf(g)>-1?a.view(g):{tag:"placeholder"},"retain"===a.subtree?c:(h===h&&((a.attrs=a.attrs||{}).key=h),I(f,e,b,g),a)}function K(a,b,c,d){for(var e=b&&b.controllers;null!=a.view;)a=J(a,a.view.$original||a.view,b,e,d,c);return a}function L(a,b,c,d,e,g,h,i){var j=[],k=[];if(a=K(a,b,j,k),!a.tag&&k.length)throw new Error("Component template must return a virtual element, not an array, string, etc.");a.attrs=a.attrs||{},b.attrs=b.attrs||{};var l=Object.keys(a.attrs),m=l.length>("key"in a.attrs?1:0);if(s(a,b,l),f(a.tag)){var o=0===b.nodes.length;h=t(a,h);var p;if(o){p=D(a,h);var q=E(a,p,h,m),r=F(a,p,b,c,h,i);b=G(a,q,r,p,h,j,k)}else p=w(b,a,c,m,h,j,i,k);return(o||g===!0&&null!=p)&&n(d,p,e),v(i,a,p,o,b),b}}function M(a,b,c,f,g,h,i,j,l,m,n){return g=k(g),"retain"===g.subtree?h:(h=C(g,h,j,f,c),pb(g)?B(g,h,a,j,b,i,l,m,n):null!=g&&e(g)?L(g,h,l,a,j,i,m,n):d(g)?h:z(h,g,j,a,i,l,b))}function N(a,b){return a.action-b.action||a.index-b.index}function O(a,b,c,f,g){for(var h in c){var i=c[h],j=f[h];if(h in f&&j===i)"value"===h&&"input"===b&&a.value!=i&&(a.value=i);else{f[h]=i;try{if("config"===h||"key"===h)continue;if(d(i)&&"on"===h.slice(0,2))a[h]=S(i,a);else if("style"===h&&null!=i&&e(i)){for(var k in i)(null==j||j[k]!==i[k])&&(a.style[k]=i[k]);for(var k in j)k in i||(a.style[k]="")}else null!=g?"href"===h?a.setAttributeNS("http://www.w3.org/1999/xlink","href",i):a.setAttribute("className"===h?"class":h,i):h in a&&"list"!==h&&"style"!==h&&"form"!==h&&"type"!==h&&"width"!==h&&"height"!==h?("input"!==b||a[h]!==i)&&(a[h]=i):a.setAttribute(h,i)}catch(l){if(l.message.indexOf("Invalid argument")<0)throw l}}}return f}function P(a,b){for(var c=a.length-1;c>-1;c--)if(a[c]&&a[c].parentNode){try{a[c].parentNode.removeChild(a[c])}catch(d){}b=[].concat(b),b[c]&&Q(b[c])}a.length&&(a.length=0)}function Q(a){a.configContext&&d(a.configContext.onunload)&&(a.configContext.onunload(),a.configContext.onunload=null),a.controllers&&i(a.controllers,function(a){d(a.onunload)&&a.onunload({preventDefault:ub})}),a.children&&(pb(a.children)?i(a.children,Q):a.children.tag&&Q(a.children))}function R(a,c,d){var e=a.childNodes[c];if(e){var f=1!==e.nodeType,g=kb.createElement("span");f?(a.insertBefore(g,e||null),g.insertAdjacentHTML("beforebegin",d),a.removeChild(g)):e.insertAdjacentHTML("beforebegin",d)}else b.Range&&b.Range.prototype.createContextualFragment?a.appendChild(kb.createRange().createContextualFragment(d)):a.insertAdjacentHTML("beforeend",d);for(var h=[];a.childNodes[c]!==e;)h.push(a.childNodes[c]),c++;return h}function S(a,b){return function(c){c=c||event,h.redraw.strategy("diff"),h.startComputation();try{return a.call(b,c)}finally{Y()}}}function T(a){var b=Ab.indexOf(a);return 0>b?Ab.push(a)-1:b}function U(a){var b=function(){return arguments.length&&(a=arguments[0]),a};return b.toJSON=function(){return a},b}function V(a,b){var c=function(){return(a.controller||ub).apply(this,b)||this};a.controller&&(c.prototype=a.controller.prototype);var d=function(c){var d=arguments.length>1?b.concat([].slice.call(arguments,1)):b;return a.view.apply(a,d?[c].concat(d):[c])};d.$original=a.view;var e={controller:c,view:d};return b[0]&&null!=b[0].key&&(e.attrs={key:b[0].key}),e}function W(a,b){Db.splice(b,1),Fb.splice(b,1),Eb.splice(b,1),db(a),Ab.splice(T(a),1)}function X(){Ib&&(Ib(),Ib=null),i(Db,function(a,b){var c=Eb[b];if(Fb[b]){var d=[Fb[b]];h.render(a,c.view?c.view(Fb[b],d):"")}}),Jb&&(Jb(),Jb=null),Gb=null,Hb=new Date,h.redraw.strategy("diff")}function Y(){"none"===h.redraw.strategy()?(Ob--,h.redraw.strategy("diff")):h.endComputation()}function Z(a){return a.slice(Rb[h.route.mode].length)}function $(a,b,c){Pb={};var d=c.indexOf("?");-1!==d&&(Pb=cb(c.substr(d+1,c.length)),c=c.substr(0,d));var e=Object.keys(b),f=e.indexOf(c);if(-1!==f)return h.mount(a,b[e[f]]),!0;for(var g in b){if(g===c)return h.mount(a,b[g]),!0;var j=new RegExp("^"+g.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(j.test(c))return c.replace(j,function(){var c=g.match(/:[^\/]+/g)||[],d=[].slice.call(arguments,1,-2);i(c,function(a,b){Pb[a.replace(/:|\./g,"")]=decodeURIComponent(d[b])}),h.mount(a,b[g])}),!0}}function _(a){if(a=a||event,!a.ctrlKey&&!a.metaKey&&2!==a.which){a.preventDefault?a.preventDefault():a.returnValue=!1;for(var b=a.currentTarget||a.srcElement,c="pathname"===h.route.mode&&b.search?cb(b.search.slice(1)):{};b&&"A"!==b.nodeName.toUpperCase();)b=b.parentNode;Ob=0,h.route(b[h.route.mode].slice(Rb[h.route.mode].length),c)}}function ab(){"hash"!==h.route.mode&&lb.hash?lb.hash=lb.hash:b.scrollTo(0,0)}function bb(a,b){var d={},f=[];for(var g in a){var h=b?b+"["+g+"]":g,j=a[g];if(null===j)f.push(encodeURIComponent(h));else if(e(j))f.push(bb(j,h));else if(pb(j)){var k=[];d[h]=d[h]||{},i(j,function(a){d[h][a]||(d[h][a]=!0,k.push(encodeURIComponent(h)+"="+encodeURIComponent(a)))}),f.push(k.join("&"))}else j!==c&&f.push(encodeURIComponent(h)+"="+encodeURIComponent(j))}return f.join("&")}function cb(a){if(""===a||null==a)return{};"?"===a.charAt(0)&&(a=a.slice(1));var b=a.split("&"),c={};return i(b,function(a){var b=a.split("="),d=decodeURIComponent(b[0]),e=2===b.length?decodeURIComponent(b[1]):null;null!=c[d]?(pb(c[d])||(c[d]=[c[d]]),c[d].push(e)):c[d]=e}),c}function db(a){var b=T(a);P(a.childNodes,Bb[b]),Bb[b]=c}function eb(a,b){var c=h.prop(b);return a.then(c),c.then=function(c,d){return eb(a.then(c,d),b)},c["catch"]=c.then.bind(null,null),c}function fb(a,b){function c(a){n=a||l,p.map(function(a){n===k?a.resolve(o):a.reject(o)})}function f(a,b,c,f){if((null!=o&&e(o)||d(o))&&d(a))try{var g=0;a.call(o,function(a){g++||(o=a,b())},function(a){g++||(o=a,c())})}catch(i){h.deferred.onerror(i),o=i,c()}else f()}function g(){var e;try{e=o&&o.then}catch(l){return h.deferred.onerror(l),o=l,n=j,g()}n===j&&h.deferred.onerror(o),f(e,function(){n=i,g()},function(){n=j,g()},function(){try{n===i&&d(a)?o=a(o):n===j&&d(b)&&(o=b(o),n=i)}catch(g){return h.deferred.onerror(g),o=g,c()}o===m?(o=TypeError(),c()):f(e,function(){c(k)},c,function(){c(n===i&&k)})})}var i=1,j=2,k=3,l=4,m=this,n=0,o=0,p=[];m.promise={},m.resolve=function(a){return n||(o=a,n=i,g()),this},m.reject=function(a){return n||(o=a,n=j,g()),this},m.promise.then=function(a,b){var c=new fb(a,b);return n===k?c.resolve(o):n===l?c.reject(o):p.push(c),c.promise}}function gb(a){return a}function hb(a){if(!a.dataType||"jsonp"!==a.dataType.toLowerCase()){var e=new b.XMLHttpRequest;if(e.open(a.method,a.url,!0,a.user,a.password),e.onreadystatechange=function(){4===e.readyState&&(e.status>=200&&e.status<300?a.onload({type:"load",target:e}):a.onerror({type:"error",target:e}))},a.serialize===JSON.stringify&&a.data&&"GET"!==a.method&&e.setRequestHeader("Content-Type","application/json; charset=utf-8"),a.deserialize===JSON.parse&&e.setRequestHeader("Accept","application/json, text/*"),d(a.config)){var g=a.config(e,a);null!=g&&(e=g)}var h="GET"!==a.method&&a.data?a.data:"";if(h&&!f(h)&&h.constructor!==b.FormData)throw new Error("Request data should be either be a string or FormData. Check the `serialize` option in `m.request`");return e.send(h),e}var i="mithril_callback_"+(new Date).getTime()+"_"+Math.round(1e16*Math.random()).toString(36),j=kb.createElement("script");b[i]=function(d){j.parentNode.removeChild(j),a.onload({type:"load",target:{responseText:d}}),b[i]=c},j.onerror=function(){return j.parentNode.removeChild(j),a.onerror({type:"error",target:{status:500,responseText:JSON.stringify({error:"Error making jsonp request"})}}),b[i]=c,!1},j.onload=function(){return!1},j.src=a.url+(a.url.indexOf("?")>0?"&":"?")+(a.callbackKey?a.callbackKey:"callback")+"="+i+"&"+bb(a.data||{}),kb.body.appendChild(j)}function ib(a,b,c){if("GET"===a.method&&"jsonp"!==a.dataType){var d=a.url.indexOf("?")<0?"?":"&",e=bb(b);a.url=a.url+(e?d+e:"")}else a.data=c(b);return a}function jb(a,b){var c=a.match(/:[a-z]\w+/gi);return c&&b&&i(c,function(c){var d=c.slice(1);a=a.replace(c,b[d]),delete b[d]}),a}var kb,lb,mb,nb,ob="v0.2.2-rc.1",pb=Array.isArray||function(a){return"[object Array]"===qb.call(a)},qb={}.toString,rb=/(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,sb=/\[(.+?)(?:=("|'|)(.*?)\2)?\]/,tb=/^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/,ub=function(){};g(b),h.version=function(){return ob};var vb,wb=1,xb=2,yb=3,zb={appendChild:function(a){vb===c&&(vb=kb.createElement("html")),kb.documentElement&&kb.documentElement!==a?kb.replaceChild(a,kb.documentElement):kb.appendChild(a),this.childNodes=kb.childNodes},insertBefore:function(a){this.appendChild(a)},childNodes:[]},Ab=[],Bb={};h.render=function(a,b,d){var e=[];if(!a)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var f=T(a),g=a===kb,h=g||a===kb.documentElement?zb:a;g&&"html"!==b.tag&&(b={tag:"html",attrs:{},children:b}),Bb[f]===c&&P(h.childNodes),d===!0&&db(a),Bb[f]=M(h,null,c,c,b,Bb[f],!1,0,null,c,e),i(e,function(a){a()})},h.trust=function(a){return a=new String(a),a.$trusted=!0,a},h.prop=function(a){return(null!=a&&e(a)||d(a))&&d(a.then)?eb(a):U(a)};var Cb,Db=[],Eb=[],Fb=[],Gb=null,Hb=0,Ib=null,Jb=null,Kb=[],Lb=16;h.component=function(a){for(var b=[],c=1;c<arguments.length;c++)b.push(arguments[c]);return V(a,b)},h.mount=h.module=function(a,b){if(!a)throw new Error("Please ensure the DOM element exists before rendering a template into it.");var c=Db.indexOf(a);0>c&&(c=Db.length);var e=!1,f={preventDefault:function(){e=!0,Ib=Jb=null}};i(Kb,function(a){a.handler.call(a.controller,f),a.controller.onunload=null}),e?i(Kb,function(a){a.controller.onunload=a.handler}):Kb=[],Fb[c]&&d(Fb[c].onunload)&&Fb[c].onunload(f);var g=null===b;if(!e){h.redraw.strategy("all"),h.startComputation(),Db[c]=a;var j=Cb=b?b:b={controller:ub},k=new(b.controller||ub);return j===Cb&&(Fb[c]=k,Eb[c]=b),Y(),g&&W(a,c),Fb[c]}g&&W(a,c)};var Mb=!1,Nb=!1;h.redraw=function(a){if(!Mb){Mb=!0,a&&(Nb=!0);try{Gb&&!a?(mb===b.requestAnimationFrame||new Date-Hb>Lb)&&(Gb>0&&nb(Gb),Gb=mb(X,Lb)):(X(),Gb=mb(function(){Gb=null},Lb))}finally{Mb=Nb=!1}}},h.redraw.strategy=h.prop();var Ob=0;h.startComputation=function(){Ob++},h.endComputation=function(){Ob>1?Ob--:(Ob=0,h.redraw())},h.withAttr=function(a,b,c){return function(d){d=d||event;var e=d.currentTarget||this,f=c||this;b.call(f,a in e?e[a]:e.getAttribute(a))}};var Pb,Qb,Rb={pathname:"",hash:"#",search:"?"},Sb=ub,Tb=!1;return h.route=function(a,c,d,e){if(0===arguments.length)return Qb;if(3===arguments.length&&f(c)){Sb=function(b){var e=Qb=Z(b);if(!$(a,d,e)){if(Tb)throw new Error("Ensure the default route matches one of the routes defined in m.route");Tb=!0,h.route(c,!0),Tb=!1}};var g="hash"===h.route.mode?"onhashchange":"onpopstate";b[g]=function(){var a=lb[h.route.mode];"pathname"===h.route.mode&&(a+=lb.search),Qb!==Z(a)&&Sb(a)},Ib=ab,b[g]()}else if(a.addEventListener||a.attachEvent)a.href=("pathname"!==h.route.mode?lb.pathname:"")+Rb[h.route.mode]+e.attrs.href,a.addEventListener?(a.removeEventListener("click",_),a.addEventListener("click",_)):(a.detachEvent("onclick",_),a.attachEvent("onclick",_));else if(f(a)){var i=Qb;Qb=a;var j=c||{},k=Qb.indexOf("?"),l=k>-1?cb(Qb.slice(k+1)):{};for(var m in j)l[m]=j[m];var n=bb(l),o=k>-1?Qb.slice(0,k):Qb;n&&(Qb=o+(-1===o.indexOf("?")?"?":"&")+n);var p=(3===arguments.length?d:c)===!0||i===a;b.history.pushState?(Ib=ab,Jb=function(){b.history[p?"replaceState":"pushState"](null,kb.title,Rb[h.route.mode]+Qb)},Sb(Rb[h.route.mode]+Qb)):(lb[h.route.mode]=Qb,Sb(Rb[h.route.mode]+Qb))}},h.route.param=function(a){if(!Pb)throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");return a?Pb[a]:Pb},h.route.mode="search",h.route.buildQueryString=bb,h.route.parseQueryString=cb,h.deferred=function(){var a=new fb;return a.promise=eb(a.promise),a},h.deferred.onerror=function(a){if("[object Error]"===qb.call(a)&&!a.constructor.toString().match(/ Error/))throw Ob=0,a},h.sync=function(a){function b(a,b){return function(g){return f[a]=g,b||(c="reject"),0===--e&&(d.promise(f),d[c](f)),g}}var c="resolve",d=h.deferred(),e=a.length,f=new Array(e);return a.length>0?i(a,function(a,c){a.then(b(c,!0),b(c,!1))}):d.resolve([]),d.promise},h.request=function(a){a.background!==!0&&h.startComputation();var b=new fb,c=a.dataType&&"jsonp"===a.dataType.toLowerCase(),d=a.serialize=c?gb:a.serialize||JSON.stringify,e=a.deserialize=c?gb:a.deserialize||JSON.parse,f=c?function(a){return a.responseText}:a.extract||function(a){return 0===a.responseText.length&&e===JSON.parse?null:a.responseText};return a.method=(a.method||"GET").toUpperCase(),a.url=jb(a.url,a.data),a=ib(a,a.data,d),a.onload=a.onerror=function(c){try{c=c||event;var d=("load"===c.type?a.unwrapSuccess:a.unwrapError)||gb,g=d(e(f(c.target,a)),c.target);"load"===c.type?(pb(g)&&a.type?i(g,function(b,c){g[c]=new a.type(b)}):a.type&&(g=new a.type(g)),b.resolve(g)):b.reject(g),b["load"===c.type?"resolve":"reject"](g)}catch(c){b.reject(c)}finally{a.background!==!0&&h.endComputation()}},hb(a),b.promise=eb(b.promise,a.initialValue),b.promise},h.deps=function(a){return g(b=a||b),b},h.deps.factory=a,h}("undefined"!=typeof window?window:{});"object"==typeof module&&null!=module&&module.exports?module.exports=m:"function"==typeof define&&define.amd&&define(function(){return m});
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

    var tap = '<svg id="tap" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="388" height="36" viewBox="0 0 388 36" version="1.1"><g transform="translate(-121.40625,-444.64346)"><path d="m129.45 472.36 5.55 0 0-22.34 8.05 0 0-4.84-18.83 0c-0.78 0-1.48 0.31-2.03 0.86-0.55 0.63-0.78 1.25-0.78 2.03l0 1.95 8.05 0 0 22.34zM155.47 461.74l0 1.95M155.47 461.74l0 1.95M155.47 461.74l0 1.95c0 1.56-0.47 2.73-1.25 3.52-0.94 0.86-2.11 1.25-3.52 1.25-1.72 0-2.58-0.78-2.66-2.5 0-1.56 1.02-2.5 3.2-2.97 1.56-0.31 2.97-0.7 4.22-1.25zm1.25 9.69c2.58-1.41 3.91-3.91 3.91-7.5l0-7.19c-0.16-3.91-3.12-5.86-8.91-5.86-4.92 0-7.66 1.95-8.28 5.86l5.31 0c0.23-0.94 1.33-1.48 3.2-1.48 2.19 0 3.28 0.63 3.44 1.8 0 1.17-1.17 1.88-3.44 2.11-3.28 0.31-5.55 1.02-6.95 2.11-1.41 1.09-2.19 2.73-2.19 4.84 0 2.81 1.09 4.69 3.28 5.78 1.41 0.78 3.2 1.02 5.31 0.86 2.11-0.16 3.91-0.55 5.31-1.33zM168.52 477.99c0 1.8-0.94 2.66-2.66 2.66l-2.66 0 0-20.23c0.23-6.25 3.52-9.45 9.92-9.45 6.56 0 9.84 3.59 9.84 10.7 0 7.19-2.81 10.94-8.44 11.09-2.66 0-4.69-1.09-6.02-3.28l0 8.52zM177.5 461.89c0-4.22-1.56-6.41-4.53-6.41-3.05 0-4.53 2.19-4.45 6.41 0.16 4.06 1.64 6.09 4.53 6.09 2.81 0 4.3-2.03 4.45-6.09zM209.53 458.77c0-2.81 0.63-5.08 1.95-6.8 1.25-1.56 3.13-2.42 5.47-2.42 2.34 0 4.14 0.86 5.55 2.42 1.25 1.64 1.95 3.91 1.95 6.8 0 3.05-0.7 5.31-1.95 6.88-1.41 1.64-3.28 2.42-5.55 2.42-2.34 0-4.14-0.78-5.47-2.42-1.33-1.64-1.95-3.91-1.95-6.87zm-5.55 0c0 4.38 1.17 7.73 3.52 10.23 2.19 2.5 5.39 3.75 9.45 3.75 4.06 0 7.19-1.25 9.53-3.75 2.34-2.5 3.52-5.86 3.52-10.23 0-4.22-1.17-7.58-3.52-10.23-2.42-2.5-5.62-3.83-9.53-3.83-3.91 0-7.11 1.33-9.45 3.83-2.34 2.5-3.52 5.94-3.52 10.23zM250.78 472.36l0-12.42c0-6.02-2.97-9.06-8.98-9.06-6.09 0-9.06 3.05-9.06 9.06l0 12.42 5.39 0 0-13.52c0-2.19 1.25-3.28 3.59-3.28 2.34 0 3.52 1.09 3.67 3.28l0 10.86c0 1.72 0.86 2.58 2.66 2.66l2.73 0zM280 472.36l5.55 0 0-22.34 8.05 0 0-4.84-18.83 0c-0.78 0-1.48 0.31-2.03 0.86-0.55 0.63-0.78 1.25-0.78 2.03l0 1.95 8.05 0 0 22.34zM309.3 457.21c0.7 0.86 1.09 2.27 1.09 4.3l0 10.86 5.31 0 0-12.27c0.16-4.53-1.25-7.42-4.22-8.52-3.98-1.41-7.34-0.55-10 2.58l0-6.33c0-1.72-0.94-2.66-2.66-2.66l-2.66 0 0 27.19 5.31 0 0-10.86c0-1.72 0.39-3.2 1.17-4.3 0.78-1.02 1.88-1.56 3.36-1.56 1.33 0 2.42 0.55 3.28 1.56zM333.2 465.88c-0.78 0-1.33 0.31-1.8 0.78-1.09 1.02-2.19 1.48-3.44 1.48-2.66 0-4.06-1.56-4.22-4.84l13.67 0c0.39-8.28-2.73-12.42-9.45-12.42-6.48 0.08-9.69 3.67-9.69 10.86 0 7.19 3.2 10.94 9.61 11.09 2.34 0 4.38-0.55 6.09-1.72 1.41-1.09 2.5-2.81 3.13-5.23l-3.91 0zm-9.37-6.41c0.39-2.81 1.72-4.22 4.06-4.22 2.27 0 3.59 1.41 3.91 4.22l-7.97 0zM358.67 472.36l5.63 0 0-12.03 11.17 0 0 12.03 5.63 0 0-27.19-5.62 0 0 10.16-11.17 0 0-10.16-2.81 0c-0.78 0-1.48 0.31-2.03 0.86-0.55 0.63-0.78 1.25-0.78 2.03l0 24.3zM393.13 450.88c-6.41 0-9.61 3.67-9.61 11.02 0 7.34 3.2 10.94 9.61 10.94 6.41 0 9.61-3.59 9.61-10.94 0-7.34-3.2-11.02-9.61-11.02zm0 4.69c2.66 0 4.06 2.11 4.06 6.17-0.08 4.22-1.48 6.33-4.14 6.33-2.73 0-4.14-2.03-4.14-6.17 0-4.22 1.41-6.33 4.22-6.33zM413.83 472.13l0-4.06-1.64 0c-1.09 0-1.56-0.39-1.56-1.33l0-11.72 0.55 0c0.7 0 1.33-0.23 1.88-0.7 0.47-0.47 0.78-1.17 0.78-1.95l0-1.17-3.2 0 0-3.36c0-0.7-0.31-1.33-0.78-1.87-0.55-0.47-1.17-0.78-1.8-0.78l-2.73 0 0 23.13c-0.08 2.34 0.86 3.67 2.89 3.83 2.03 0.16 3.91 0.16 5.63 0zM415.47 465.41c0 2.5 0.78 4.3 2.42 5.47 1.41 1.25 3.67 1.88 6.64 1.88 3.13 0 5.55-0.55 7.19-1.8 1.64-1.17 2.5-2.97 2.5-5.31 0-1.41-0.55-2.66-1.48-3.75-1.17-1.09-3.52-1.95-7.11-2.73-2.81-0.47-4.14-1.33-4.14-2.42 0-1.09 1.02-1.64 3.13-1.64 1.72 0 2.81 0.47 3.2 1.41 0.31 0.86 1.09 1.33 2.34 1.33l3.36 0c-0.16-2.19-0.94-3.91-2.5-5.16-1.64-1.17-3.83-1.8-6.48-1.8-2.66 0.08-4.77 0.7-6.17 1.8-1.56 1.25-2.27 2.97-2.27 5 0 3.36 2.42 5.47 7.11 6.25 3.59 0.63 5.47 1.48 5.47 2.58 0 1.41-1.17 2.03-3.36 2.03-1.48 0-2.58-0.23-3.2-0.78-0.78-0.47-1.17-1.25-1.17-2.34l-5.47 0zM441.88 477.99c0 1.8-0.94 2.66-2.66 2.66l-2.66 0 0-20.23c0.23-6.25 3.52-9.45 9.92-9.45 6.56 0 9.84 3.59 9.84 10.7 0 7.19-2.81 10.94-8.44 11.09-2.66 0-4.69-1.09-6.02-3.28l0 8.52zm8.98-16.09c0-4.22-1.56-6.41-4.53-6.41-3.05 0-4.53 2.19-4.45 6.41 0.16 4.06 1.64 6.09 4.53 6.09 2.81 0 4.3-2.03 4.45-6.09zM468.28 450.88c-6.41 0-9.61 3.67-9.61 11.02 0 7.34 3.2 10.94 9.61 10.94 6.41 0 9.61-3.59 9.61-10.94 0-7.34-3.2-11.02-9.61-11.02zm0 4.69c2.66 0 4.06 2.11 4.06 6.17-0.08 4.22-1.48 6.33-4.14 6.33-2.73 0-4.14-2.03-4.14-6.17 0-4.22 1.41-6.33 4.22-6.33zM488.98 472.13l0-4.06-1.64 0c-1.09 0-1.56-0.39-1.56-1.33l0-11.72 0.55 0c0.7 0 1.33-0.23 1.88-0.7 0.47-0.47 0.78-1.17 0.78-1.95l0-1.17-3.2 0 0-3.36c0-0.7-0.31-1.33-0.78-1.87-0.55-0.47-1.17-0.78-1.8-0.78l-2.73 0 0 23.13c-0.08 2.34 0.86 3.67 2.89 3.83 2.03 0.16 3.91 0.16 5.63 0zM490.63 465.41c0 2.5 0.78 4.3 2.42 5.47 1.41 1.25 3.67 1.88 6.64 1.88 3.13 0 5.55-0.55 7.19-1.8 1.64-1.17 2.5-2.97 2.5-5.31 0-1.41-0.55-2.66-1.48-3.75-1.17-1.09-3.52-1.95-7.11-2.73-2.81-0.47-4.14-1.33-4.14-2.42 0-1.09 1.02-1.64 3.13-1.64 1.72 0 2.81 0.47 3.2 1.41 0.31 0.86 1.09 1.33 2.34 1.33l3.36 0c-0.16-2.19-0.94-3.91-2.5-5.16-1.64-1.17-3.83-1.8-6.48-1.8-2.66 0.08-4.77 0.7-6.17 1.8-1.56 1.25-2.27 2.97-2.27 5 0 3.36 2.42 5.47 7.11 6.25 3.59 0.63 5.47 1.48 5.47 2.58 0 1.41-1.17 2.03-3.36 2.03-1.48 0-2.58-0.23-3.2-0.78-0.78-0.47-1.17-1.25-1.17-2.34l-5.47 0z" style="-inkscape-font-specification:\'Harabara Mais Bold, \';font-family:\'Harabara Mais Bold\'"/></g></svg>';

    app.view = function () {
        return m('div', {id: 'bpi-ad'}, [
            m.trust(tap)
        ]);
    };

    app.loadCss('css/style.css');
    m.render(app.contentTag, app.view());
};

var ad = new bpi();