(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Za(n,t){const e=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)e[i[s]]=!0;return t?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const Dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Id=Za(Dd);function gh(n){return!!n||n===""}function Yn(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ce(i)?Fd(i):Yn(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(ce(n))return n;if(ie(n))return n}}const Od=/;(?![^(]*\))/g,Nd=/:(.+)/;function Fd(n){const t={};return n.split(Od).forEach(e=>{if(e){const i=e.split(Nd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ir(n){let t="";if(ce(n))t=n;else if(Ft(n))for(let e=0;e<n.length;e++){const i=ir(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function PS(n){if(!n)return null;let{class:t,style:e}=n;return t&&!ce(t)&&(n.class=ir(t)),e&&(n.style=Yn(e)),n}const zd=n=>ce(n)?n:n==null?"":Ft(n)||ie(n)&&(n.toString===yh||!zt(n.toString))?JSON.stringify(n,_h,2):String(n),_h=(n,t)=>t&&t.__v_isRef?_h(n,t.value):ns(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s])=>(e[`${i} =>`]=s,e),{})}:vh(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!Ft(t)&&!Mh(t)?String(t):t,Jt={},es=[],mn=()=>{},Bd=()=>!1,Ud=/^on[^a-z]/,co=n=>Ud.test(n),$a=n=>n.startsWith("onUpdate:"),Ie=Object.assign,tl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Gd=Object.prototype.hasOwnProperty,kt=(n,t)=>Gd.call(n,t),Ft=Array.isArray,ns=n=>uo(n)==="[object Map]",vh=n=>uo(n)==="[object Set]",zt=n=>typeof n=="function",ce=n=>typeof n=="string",el=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",xh=n=>ie(n)&&zt(n.then)&&zt(n.catch),yh=Object.prototype.toString,uo=n=>yh.call(n),Vd=n=>uo(n).slice(8,-1),Mh=n=>uo(n)==="[object Object]",nl=n=>ce(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,jr=Za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ho=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},kd=/-(\w)/g,gn=ho(n=>n.replace(kd,(t,e)=>e?e.toUpperCase():"")),Hd=/\B([A-Z])/g,_s=ho(n=>n.replace(Hd,"-$1").toLowerCase()),fo=ho(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ro=ho(n=>n?`on${fo(n)}`:""),qs=(n,t)=>!Object.is(n,t),Xr=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},eo=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},wa=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Gl;const Wd=()=>Gl||(Gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let cn;class qd{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!t&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}run(t){if(this.active){const e=cn;try{return cn=this,t()}finally{cn=e}}}on(){cn=this}off(){cn=this.parent}stop(t){if(this.active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function jd(n,t=cn){t&&t.active&&t.effects.push(n)}const il=n=>{const t=new Set(n);return t.w=0,t.n=0,t},bh=n=>(n.w&ei)>0,wh=n=>(n.n&ei)>0,Xd=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=ei},Yd=n=>{const{deps:t}=n;if(t.length){let e=0;for(let i=0;i<t.length;i++){const s=t[i];bh(s)&&!wh(s)?s.delete(n):t[e++]=s,s.w&=~ei,s.n&=~ei}t.length=e}},Sa=new WeakMap;let Ns=0,ei=1;const Aa=30;let $e;const bi=Symbol(""),Ea=Symbol("");class sl{constructor(t,e=null,i){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,jd(this,i)}run(){if(!this.active)return this.fn();let t=$e,e=Jn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=$e,$e=this,Jn=!0,ei=1<<++Ns,Ns<=Aa?Xd(this):Vl(this),this.fn()}finally{Ns<=Aa&&Yd(this),ei=1<<--Ns,$e=this.parent,Jn=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(Vl(this),this.onStop&&this.onStop(),this.active=!1)}}function Vl(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let Jn=!0;const Sh=[];function vs(){Sh.push(Jn),Jn=!1}function xs(){const n=Sh.pop();Jn=n===void 0?!0:n}function Ue(n,t,e){if(Jn&&$e){let i=Sa.get(n);i||Sa.set(n,i=new Map);let s=i.get(e);s||i.set(e,s=il()),Ah(s)}}function Ah(n,t){let e=!1;Ns<=Aa?wh(n)||(n.n|=ei,e=!bh(n)):e=!n.has($e),e&&(n.add($e),$e.deps.push(n))}function In(n,t,e,i,s,r){const o=Sa.get(n);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Ft(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Ft(n)?nl(e)&&a.push(o.get("length")):(a.push(o.get(bi)),ns(n)&&a.push(o.get(Ea)));break;case"delete":Ft(n)||(a.push(o.get(bi)),ns(n)&&a.push(o.get(Ea)));break;case"set":ns(n)&&a.push(o.get(bi));break}if(a.length===1)a[0]&&Ta(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ta(il(l))}}function Ta(n,t){const e=Ft(n)?n:[...n];for(const i of e)i.computed&&kl(i);for(const i of e)i.computed||kl(i)}function kl(n,t){(n!==$e||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Kd=Za("__proto__,__v_isRef,__isVue"),Eh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(el)),Qd=rl(),Jd=rl(!1,!0),Zd=rl(!0),Hl=$d();function $d(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=Yt(this);for(let r=0,o=this.length;r<o;r++)Ue(i,"get",r+"");const s=i[t](...e);return s===-1||s===!1?i[t](...e.map(Yt)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){vs();const i=Yt(this)[t].apply(this,e);return xs(),i}}),n}function rl(n=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(n?t?mp:Rh:t?Lh:Ph).get(i))return i;const o=Ft(i);if(!n&&o&&kt(Hl,s))return Reflect.get(Hl,s,r);const a=Reflect.get(i,s,r);return(el(s)?Eh.has(s):Kd(s))||(n||Ue(i,"get",s),t)?a:Se(a)?o&&nl(s)?a:a.value:ie(a)?n?Dh(a):sr(a):a}}const tp=Th(),ep=Th(!0);function Th(n=!1){return function(e,i,s,r){let o=e[i];if(as(o)&&Se(o)&&!Se(s))return!1;if(!n&&(!no(s)&&!as(s)&&(o=Yt(o),s=Yt(s)),!Ft(e)&&Se(o)&&!Se(s)))return o.value=s,!0;const a=Ft(e)&&nl(i)?Number(i)<e.length:kt(e,i),l=Reflect.set(e,i,s,r);return e===Yt(r)&&(a?qs(s,o)&&In(e,"set",i,s):In(e,"add",i,s)),l}}function np(n,t){const e=kt(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&e&&In(n,"delete",t,void 0),i}function ip(n,t){const e=Reflect.has(n,t);return(!el(t)||!Eh.has(t))&&Ue(n,"has",t),e}function sp(n){return Ue(n,"iterate",Ft(n)?"length":bi),Reflect.ownKeys(n)}const Ch={get:Qd,set:tp,deleteProperty:np,has:ip,ownKeys:sp},rp={get:Zd,set(n,t){return!0},deleteProperty(n,t){return!0}},op=Ie({},Ch,{get:Jd,set:ep}),ol=n=>n,po=n=>Reflect.getPrototypeOf(n);function cr(n,t,e=!1,i=!1){n=n.__v_raw;const s=Yt(n),r=Yt(t);e||(t!==r&&Ue(s,"get",t),Ue(s,"get",r));const{has:o}=po(s),a=i?ol:e?cl:js;if(o.call(s,t))return a(n.get(t));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(t)}function ur(n,t=!1){const e=this.__v_raw,i=Yt(e),s=Yt(n);return t||(n!==s&&Ue(i,"has",n),Ue(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function hr(n,t=!1){return n=n.__v_raw,!t&&Ue(Yt(n),"iterate",bi),Reflect.get(n,"size",n)}function Wl(n){n=Yt(n);const t=Yt(this);return po(t).has.call(t,n)||(t.add(n),In(t,"add",n,n)),this}function ql(n,t){t=Yt(t);const e=Yt(this),{has:i,get:s}=po(e);let r=i.call(e,n);r||(n=Yt(n),r=i.call(e,n));const o=s.call(e,n);return e.set(n,t),r?qs(t,o)&&In(e,"set",n,t):In(e,"add",n,t),this}function jl(n){const t=Yt(this),{has:e,get:i}=po(t);let s=e.call(t,n);s||(n=Yt(n),s=e.call(t,n)),i&&i.call(t,n);const r=t.delete(n);return s&&In(t,"delete",n,void 0),r}function Xl(){const n=Yt(this),t=n.size!==0,e=n.clear();return t&&In(n,"clear",void 0,void 0),e}function fr(n,t){return function(i,s){const r=this,o=r.__v_raw,a=Yt(o),l=t?ol:n?cl:js;return!n&&Ue(a,"iterate",bi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function dr(n,t,e){return function(...i){const s=this.__v_raw,r=Yt(s),o=ns(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?ol:t?cl:js;return!t&&Ue(r,"iterate",l?Ea:bi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function zn(n){return function(...t){return n==="delete"?!1:this}}function ap(){const n={get(r){return cr(this,r)},get size(){return hr(this)},has:ur,add:Wl,set:ql,delete:jl,clear:Xl,forEach:fr(!1,!1)},t={get(r){return cr(this,r,!1,!0)},get size(){return hr(this)},has:ur,add:Wl,set:ql,delete:jl,clear:Xl,forEach:fr(!1,!0)},e={get(r){return cr(this,r,!0)},get size(){return hr(this,!0)},has(r){return ur.call(this,r,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:fr(!0,!1)},i={get(r){return cr(this,r,!0,!0)},get size(){return hr(this,!0)},has(r){return ur.call(this,r,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=dr(r,!1,!1),e[r]=dr(r,!0,!1),t[r]=dr(r,!1,!0),i[r]=dr(r,!0,!0)}),[n,e,t,i]}const[lp,cp,up,hp]=ap();function al(n,t){const e=t?n?hp:up:n?cp:lp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(kt(e,s)&&s in i?e:i,s,r)}const fp={get:al(!1,!1)},dp={get:al(!1,!0)},pp={get:al(!0,!1)},Ph=new WeakMap,Lh=new WeakMap,Rh=new WeakMap,mp=new WeakMap;function gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _p(n){return n.__v_skip||!Object.isExtensible(n)?0:gp(Vd(n))}function sr(n){return as(n)?n:ll(n,!1,Ch,fp,Ph)}function vp(n){return ll(n,!1,op,dp,Lh)}function Dh(n){return ll(n,!0,rp,pp,Rh)}function ll(n,t,e,i,s){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=_p(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function is(n){return as(n)?is(n.__v_raw):!!(n&&n.__v_isReactive)}function as(n){return!!(n&&n.__v_isReadonly)}function no(n){return!!(n&&n.__v_isShallow)}function Ih(n){return is(n)||as(n)}function Yt(n){const t=n&&n.__v_raw;return t?Yt(t):n}function Oh(n){return eo(n,"__v_skip",!0),n}const js=n=>ie(n)?sr(n):n,cl=n=>ie(n)?Dh(n):n;function Nh(n){Jn&&$e&&(n=Yt(n),Ah(n.dep||(n.dep=il())))}function Fh(n,t){n=Yt(n),n.dep&&Ta(n.dep)}function Se(n){return!!(n&&n.__v_isRef===!0)}function pn(n){return zh(n,!1)}function xp(n){return zh(n,!0)}function zh(n,t){return Se(n)?n:new yp(n,t)}class yp{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Yt(t),this._value=e?t:js(t)}get value(){return Nh(this),this._value}set value(t){const e=this.__v_isShallow||no(t)||as(t);t=e?t:Yt(t),qs(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:js(t),Fh(this))}}function Cn(n){return Se(n)?n.value:n}const Mp={get:(n,t,e)=>Cn(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Se(s)&&!Se(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Bh(n){return is(n)?n:new Proxy(n,Mp)}var Uh;class bp{constructor(t,e,i,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Uh]=!1,this._dirty=!0,this.effect=new sl(t,()=>{this._dirty||(this._dirty=!0,Fh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=Yt(this);return Nh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Uh="__v_isReadonly";function wp(n,t,e=!1){let i,s;const r=zt(n);return r?(i=n,s=mn):(i=n.get,s=n.set),new bp(i,s,r||!s,e)}function Zn(n,t,e,i){let s;try{s=i?n(...i):n()}catch(r){mo(r,t,e)}return s}function rn(n,t,e,i){if(zt(n)){const r=Zn(n,t,e,i);return r&&xh(r)&&r.catch(o=>{mo(o,t,e)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(rn(n[r],t,e,i));return s}function mo(n,t,e,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=e;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Zn(l,null,10,[n,o,a]);return}}Sp(n,e,s,i)}function Sp(n,t,e,i=!0){console.error(n)}let Xs=!1,Ca=!1;const we=[];let fn=0;const ss=[];let En=null,mi=0;const Gh=Promise.resolve();let ul=null;function Vh(n){const t=ul||Gh;return n?t.then(this?n.bind(this):n):t}function Ap(n){let t=fn+1,e=we.length;for(;t<e;){const i=t+e>>>1;Ys(we[i])<n?t=i+1:e=i}return t}function hl(n){(!we.length||!we.includes(n,Xs&&n.allowRecurse?fn+1:fn))&&(n.id==null?we.push(n):we.splice(Ap(n.id),0,n),kh())}function kh(){!Xs&&!Ca&&(Ca=!0,ul=Gh.then(Wh))}function Ep(n){const t=we.indexOf(n);t>fn&&we.splice(t,1)}function Tp(n){Ft(n)?ss.push(...n):(!En||!En.includes(n,n.allowRecurse?mi+1:mi))&&ss.push(n),kh()}function Yl(n,t=Xs?fn+1:0){for(;t<we.length;t++){const e=we[t];e&&e.pre&&(we.splice(t,1),t--,e())}}function Hh(n){if(ss.length){const t=[...new Set(ss)];if(ss.length=0,En){En.push(...t);return}for(En=t,En.sort((e,i)=>Ys(e)-Ys(i)),mi=0;mi<En.length;mi++)En[mi]();En=null,mi=0}}const Ys=n=>n.id==null?1/0:n.id,Cp=(n,t)=>{const e=Ys(n)-Ys(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function Wh(n){Ca=!1,Xs=!0,we.sort(Cp);try{for(fn=0;fn<we.length;fn++){const t=we[fn];t&&t.active!==!1&&Zn(t,null,14)}}finally{fn=0,we.length=0,Hh(),Xs=!1,ul=null,(we.length||ss.length)&&Wh()}}function Pp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Jt;let s=e;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Jt;f&&(s=e.map(p=>p.trim())),h&&(s=e.map(wa))}let a,l=i[a=Ro(t)]||i[a=Ro(gn(t))];!l&&r&&(l=i[a=Ro(_s(t))]),l&&rn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,rn(c,n,6,s)}}function qh(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!zt(n)){const l=c=>{const u=qh(c,t,!0);u&&(a=!0,Ie(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ie(n)&&i.set(n,null),null):(Ft(r)?r.forEach(l=>o[l]=null):Ie(o,r),ie(n)&&i.set(n,o),o)}function go(n,t){return!n||!co(t)?!1:(t=t.slice(2).replace(/Once$/,""),kt(n,t[0].toLowerCase()+t.slice(1))||kt(n,_s(t))||kt(n,t))}let Re=null,_o=null;function io(n){const t=Re;return Re=n,_o=n&&n.type.__scopeId||null,t}function Lp(n){_o=n}function Rp(){_o=null}function Dp(n,t=Re,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&sc(-1);const r=io(t);let o;try{o=n(...s)}finally{io(r),i._d&&sc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Do(n){const{type:t,vnode:e,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=n;let d,_;const y=io(n);try{if(e.shapeFlag&4){const v=s||i;d=un(u.call(v,v,h,r,p,f,g)),_=l}else{const v=t;d=un(v.length>1?v(r,{attrs:l,slots:a,emit:c}):v(r,null)),_=t.props?l:Ip(l)}}catch(v){Us.length=0,mo(v,n,1),d=ge(ni)}let x=d;if(_&&m!==!1){const v=Object.keys(_),{shapeFlag:E}=x;v.length&&E&7&&(o&&v.some($a)&&(_=Op(_,o)),x=ls(x,_))}return e.dirs&&(x=ls(x),x.dirs=x.dirs?x.dirs.concat(e.dirs):e.dirs),e.transition&&(x.transition=e.transition),d=x,io(y),d}const Ip=n=>{let t;for(const e in n)(e==="class"||e==="style"||co(e))&&((t||(t={}))[e]=n[e]);return t},Op=(n,t)=>{const e={};for(const i in n)(!$a(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Np(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Kl(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!go(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Kl(i,o,c):!0:!!o;return!1}function Kl(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!go(e,r))return!0}return!1}function Fp({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}const zp=n=>n.__isSuspense;function Bp(n,t){t&&t.pendingBranch?Ft(n)?t.effects.push(...n):t.effects.push(n):Tp(n)}function Yr(n,t){if(xe){let e=xe.provides;const i=xe.parent&&xe.parent.provides;i===e&&(e=xe.provides=Object.create(i)),e[n]=t}}function $n(n,t,e=!1){const i=xe||Re;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return e&&zt(t)?t.call(i.proxy):t}}function Up(n,t){return fl(n,null,t)}const Ql={};function Kr(n,t,e){return fl(n,t,e)}function fl(n,t,{immediate:e,deep:i,flush:s,onTrack:r,onTrigger:o}=Jt){const a=xe;let l,c=!1,u=!1;if(Se(n)?(l=()=>n.value,c=no(n)):is(n)?(l=()=>n,i=!0):Ft(n)?(u=!0,c=n.some(_=>is(_)||no(_)),l=()=>n.map(_=>{if(Se(_))return _.value;if(is(_))return vi(_);if(zt(_))return Zn(_,a,2)})):zt(n)?t?l=()=>Zn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),rn(n,a,3,[f])}:l=mn,t&&i){const _=l;l=()=>vi(_())}let h,f=_=>{h=d.onStop=()=>{Zn(_,a,4)}};if(Qs)return f=mn,t?e&&rn(t,a,3,[l(),u?[]:void 0,f]):l(),mn;let p=u?[]:Ql;const g=()=>{if(d.active)if(t){const _=d.run();(i||c||(u?_.some((y,x)=>qs(y,p[x])):qs(_,p)))&&(h&&h(),rn(t,a,3,[_,p===Ql?void 0:p,f]),p=_)}else d.run()};g.allowRecurse=!!t;let m;s==="sync"?m=g:s==="post"?m=()=>Oe(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>hl(g));const d=new sl(l,m);return t?e?g():p=d.run():s==="post"?Oe(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&tl(a.scope.effects,d)}}function Gp(n,t,e){const i=this.proxy,s=ce(n)?n.includes(".")?jh(i,n):()=>i[n]:n.bind(i,i);let r;zt(t)?r=t:(r=t.handler,e=t);const o=xe;cs(this);const a=fl(s,r.bind(i),e);return o?cs(o):wi(),a}function jh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}function vi(n,t){if(!ie(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Se(n))vi(n.value,t);else if(Ft(n))for(let e=0;e<n.length;e++)vi(n[e],t);else if(vh(n)||ns(n))n.forEach(e=>{vi(e,t)});else if(Mh(n))for(const e in n)vi(n[e],t);return n}function Li(n){return zt(n)?{setup:n,name:n.name}:n}const Bs=n=>!!n.type.__asyncLoader,Xh=n=>n.type.__isKeepAlive;function Vp(n,t){Yh(n,"a",t)}function kp(n,t){Yh(n,"da",t)}function Yh(n,t,e=xe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(vo(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Xh(s.parent.vnode)&&Hp(i,t,e,s),s=s.parent}}function Hp(n,t,e,i){const s=vo(t,n,i,!0);pl(()=>{tl(i[t],s)},e)}function vo(n,t,e=xe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;vs(),cs(e);const a=rn(t,e,n,o);return wi(),xs(),a});return i?s.unshift(r):s.push(r),r}}const On=n=>(t,e=xe)=>(!Qs||n==="sp")&&vo(n,(...i)=>t(...i),e),Wp=On("bm"),dl=On("m"),qp=On("bu"),jp=On("u"),Xp=On("bum"),pl=On("um"),Yp=On("sp"),Kp=On("rtg"),Qp=On("rtc");function Jp(n,t=xe){vo("ec",n,t)}function LS(n,t){const e=Re;if(e===null)return n;const i=yo(e)||e.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=Jt]=t[r];zt(o)&&(o={mounted:o,updated:o}),o.deep&&vi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function ai(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(vs(),rn(l,e,8,[n.el,a,n,t]),xs())}}const ml="components";function Zp(n,t){return Qh(ml,n,!0,t)||n}const Kh=Symbol();function RS(n){return ce(n)?Qh(ml,n,!1)||n:n||Kh}function Qh(n,t,e=!0,i=!1){const s=Re||xe;if(s){const r=s.type;if(n===ml){const a=Tm(r,!1);if(a&&(a===t||a===gn(t)||a===fo(gn(t))))return r}const o=Jl(s[n]||r[n],t)||Jl(s.appContext[n],t);return!o&&i?r:o}}function Jl(n,t){return n&&(n[t]||n[gn(t)]||n[fo(gn(t))])}function $p(n,t,e,i){let s;const r=e&&e[i];if(Ft(n)||ce(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=t(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r&&r[o])}else if(ie(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(n[c],c,a,r&&r[a])}}else s=[];return e&&(e[i]=s),s}function DS(n,t,e={},i,s){if(Re.isCE||Re.parent&&Bs(Re.parent)&&Re.parent.isCE)return ge("slot",t==="default"?null:{name:t},i&&i());let r=n[t];r&&r._c&&(r._d=!1),je();const o=r&&Jh(r(e)),a=xl(We,{key:e.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&n._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Jh(n){return n.some(t=>oo(t)?!(t.type===ni||t.type===We&&!Jh(t.children)):!0)?n:null}const Pa=n=>n?ff(n)?yo(n)||n.proxy:Pa(n.parent):null,so=Ie(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pa(n.parent),$root:n=>Pa(n.root),$emit:n=>n.emit,$options:n=>gl(n),$forceUpdate:n=>n.f||(n.f=()=>hl(n.update)),$nextTick:n=>n.n||(n.n=Vh.bind(n.proxy)),$watch:n=>Gp.bind(n)}),tm={get({_:n},t){const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(i!==Jt&&kt(i,t))return o[t]=1,i[t];if(s!==Jt&&kt(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&kt(c,t))return o[t]=3,r[t];if(e!==Jt&&kt(e,t))return o[t]=4,e[t];La&&(o[t]=0)}}const u=so[t];let h,f;if(u)return t==="$attrs"&&Ue(n,"get",t),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==Jt&&kt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,kt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return s!==Jt&&kt(s,t)?(s[t]=e,!0):i!==Jt&&kt(i,t)?(i[t]=e,!0):kt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==Jt&&kt(n,o)||t!==Jt&&kt(t,o)||(a=r[0])&&kt(a,o)||kt(i,o)||kt(so,o)||kt(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:kt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};let La=!0;function em(n){const t=gl(n),e=n.proxy,i=n.ctx;La=!1,t.beforeCreate&&Zl(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:y,destroyed:x,unmounted:v,render:E,renderTracked:S,renderTriggered:R,errorCaptured:M,serverPrefetch:C,expose:D,inheritAttrs:X,components:nt,directives:V,filters:O}=t;if(c&&nm(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const $ in o){const j=o[$];zt(j)&&(i[$]=j.bind(e))}if(s){const $=s.call(e,e);ie($)&&(n.data=sr($))}if(La=!0,r)for(const $ in r){const j=r[$],G=zt(j)?j.bind(e,e):zt(j.get)?j.get.bind(e,e):mn,k=!zt(j)&&zt(j.set)?j.set.bind(e):mn,ut=Le({get:G,set:k});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>ut.value,set:Z=>ut.value=Z})}if(a)for(const $ in a)Zh(a[$],i,e,$);if(l){const $=zt(l)?l.call(e):l;Reflect.ownKeys($).forEach(j=>{Yr(j,$[j])})}u&&Zl(u,n,"c");function K($,j){Ft(j)?j.forEach(G=>$(G.bind(e))):j&&$(j.bind(e))}if(K(Wp,h),K(dl,f),K(qp,p),K(jp,g),K(Vp,m),K(kp,d),K(Jp,M),K(Qp,S),K(Kp,R),K(Xp,y),K(pl,v),K(Yp,C),Ft(D))if(D.length){const $=n.exposed||(n.exposed={});D.forEach(j=>{Object.defineProperty($,j,{get:()=>e[j],set:G=>e[j]=G})})}else n.exposed||(n.exposed={});E&&n.render===mn&&(n.render=E),X!=null&&(n.inheritAttrs=X),nt&&(n.components=nt),V&&(n.directives=V)}function nm(n,t,e=mn,i=!1){Ft(n)&&(n=Ra(n));for(const s in n){const r=n[s];let o;ie(r)?"default"in r?o=$n(r.from||s,r.default,!0):o=$n(r.from||s):o=$n(r),Se(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function Zl(n,t,e){rn(Ft(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Zh(n,t,e,i){const s=i.includes(".")?jh(e,i):()=>e[i];if(ce(n)){const r=t[n];zt(r)&&Kr(s,r)}else if(zt(n))Kr(s,n.bind(e));else if(ie(n))if(Ft(n))n.forEach(r=>Zh(r,t,e,i));else{const r=zt(n.handler)?n.handler.bind(e):t[n.handler];zt(r)&&Kr(s,r,n)}}function gl(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ro(l,c,o,!0)),ro(l,t,o)),ie(t)&&r.set(t,l),l}function ro(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ro(n,r,e,!0),s&&s.forEach(o=>ro(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=im[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const im={data:$l,props:fi,emits:fi,methods:fi,computed:fi,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:fi,directives:fi,watch:rm,provide:$l,inject:sm};function $l(n,t){return t?n?function(){return Ie(zt(n)?n.call(this,this):n,zt(t)?t.call(this,this):t)}:t:n}function sm(n,t){return fi(Ra(n),Ra(t))}function Ra(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Te(n,t){return n?[...new Set([].concat(n,t))]:t}function fi(n,t){return n?Ie(Ie(Object.create(null),n),t):t}function rm(n,t){if(!n)return t;if(!t)return n;const e=Ie(Object.create(null),n);for(const i in t)e[i]=Te(n[i],t[i]);return e}function om(n,t,e,i=!1){const s={},r={};eo(r,xo,1),n.propsDefaults=Object.create(null),$h(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:vp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function am(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Yt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(go(n.emitsOptions,f))continue;const p=t[f];if(l)if(kt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=gn(f);s[g]=Da(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{$h(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!kt(t,h)&&((u=_s(h))===h||!kt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Da(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!kt(t,h))&&(delete r[h],c=!0)}c&&In(n,"set","$attrs")}function $h(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(jr(l))continue;const c=t[l];let u;s&&kt(s,u=gn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:go(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Yt(e),c=a||Jt;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Da(s,l,h,c[h],n,!kt(c,h))}}return o}function Da(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=kt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&zt(l)){const{propsDefaults:c}=s;e in c?i=c[e]:(cs(s),i=c[e]=l.call(null,t),wi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_s(e))&&(i=!0))}return i}function tf(n,t,e=!1){const i=t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!zt(n)){const u=h=>{l=!0;const[f,p]=tf(h,t,!0);Ie(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ie(n)&&i.set(n,es),es;if(Ft(r))for(let u=0;u<r.length;u++){const h=gn(r[u]);tc(h)&&(o[h]=Jt)}else if(r)for(const u in r){const h=gn(u);if(tc(h)){const f=r[u],p=o[h]=Ft(f)||zt(f)?{type:f}:f;if(p){const g=ic(Boolean,p.type),m=ic(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||kt(p,"default"))&&a.push(h)}}}const c=[o,a];return ie(n)&&i.set(n,c),c}function tc(n){return n[0]!=="$"}function ec(n){const t=n&&n.toString().match(/^\s*function (\w+)/);return t?t[1]:n===null?"null":""}function nc(n,t){return ec(n)===ec(t)}function ic(n,t){return Ft(t)?t.findIndex(e=>nc(e,n)):zt(t)&&nc(t,n)?0:-1}const ef=n=>n[0]==="_"||n==="$stable",_l=n=>Ft(n)?n.map(un):[un(n)],lm=(n,t,e)=>{if(t._n)return t;const i=Dp((...s)=>_l(t(...s)),e);return i._c=!1,i},nf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(ef(s))continue;const r=n[s];if(zt(r))t[s]=lm(s,r,i);else if(r!=null){const o=_l(r);t[s]=()=>o}}},sf=(n,t)=>{const e=_l(t);n.slots.default=()=>e},cm=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=Yt(t),eo(t,"_",e)):nf(t,n.slots={})}else n.slots={},t&&sf(n,t);eo(n.slots,xo,1)},um=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Jt;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:(Ie(s,t),!e&&a===1&&delete s._):(r=!t.$stable,nf(t,s)),o=t}else t&&(sf(n,t),o={default:1});if(r)for(const a in s)!ef(a)&&!(a in o)&&delete s[a]};function rf(){return{app:null,config:{isNativeTag:Bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hm=0;function fm(n,t){return function(i,s=null){zt(i)||(i=Object.assign({},i)),s!=null&&!ie(s)&&(s=null);const r=rf(),o=new Set;let a=!1;const l=r.app={_uid:hm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Pm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&zt(c.install)?(o.add(c),c.install(l,...u)):zt(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=ge(i,s);return f.appContext=r,u&&t?t(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,yo(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Ia(n,t,e,i,s=!1){if(Ft(n)){n.forEach((f,p)=>Ia(f,t&&(Ft(t)?t[p]:t),e,i,s));return}if(Bs(i)&&!s)return;const r=i.shapeFlag&4?yo(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===Jt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ce(c)?(u[c]=null,kt(h,c)&&(h[c]=null)):Se(c)&&(c.value=null)),zt(l))Zn(l,a,12,[o,u]);else{const f=ce(l),p=Se(l);if(f||p){const g=()=>{if(n.f){const m=f?kt(h,l)?h[l]:u[l]:l.value;s?Ft(m)&&tl(m,r):Ft(m)?m.includes(r)||m.push(r):f?(u[l]=[r],kt(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,kt(h,l)&&(h[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Oe(g,e)):g()}}}const Oe=Bp;function dm(n){return pm(n)}function pm(n,t){const e=Wd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=mn,insertStaticContent:g}=n,m=(b,A,I,B=null,U=null,et=null,at=!1,Q=null,ft=!!A.dynamicChildren)=>{if(b===A)return;b&&!As(b,A)&&(B=ct(b),Z(b,U,et,!0),b=null),A.patchFlag===-2&&(ft=!1,A.dynamicChildren=null);const{type:it,ref:T,shapeFlag:w}=A;switch(it){case vl:d(b,A,I,B);break;case ni:_(b,A,I,B);break;case Qr:b==null&&y(A,I,B,at);break;case We:nt(b,A,I,B,U,et,at,Q,ft);break;default:w&1?E(b,A,I,B,U,et,at,Q,ft):w&6?V(b,A,I,B,U,et,at,Q,ft):(w&64||w&128)&&it.process(b,A,I,B,U,et,at,Q,ft,xt)}T!=null&&U&&Ia(T,b&&b.ref,et,A||b,!A)},d=(b,A,I,B)=>{if(b==null)i(A.el=a(A.children),I,B);else{const U=A.el=b.el;A.children!==b.children&&c(U,A.children)}},_=(b,A,I,B)=>{b==null?i(A.el=l(A.children||""),I,B):A.el=b.el},y=(b,A,I,B)=>{[b.el,b.anchor]=g(b.children,A,I,B,b.el,b.anchor)},x=({el:b,anchor:A},I,B)=>{let U;for(;b&&b!==A;)U=f(b),i(b,I,B),b=U;i(A,I,B)},v=({el:b,anchor:A})=>{let I;for(;b&&b!==A;)I=f(b),s(b),b=I;s(A)},E=(b,A,I,B,U,et,at,Q,ft)=>{at=at||A.type==="svg",b==null?S(A,I,B,U,et,at,Q,ft):C(b,A,U,et,at,Q,ft)},S=(b,A,I,B,U,et,at,Q)=>{let ft,it;const{type:T,props:w,shapeFlag:N,transition:J,dirs:rt}=b;if(ft=b.el=o(b.type,et,w&&w.is,w),N&8?u(ft,b.children):N&16&&M(b.children,ft,null,B,U,et&&T!=="foreignObject",at,Q),rt&&ai(b,null,B,"created"),w){for(const bt in w)bt!=="value"&&!jr(bt)&&r(ft,bt,null,w[bt],et,b.children,B,U,z);"value"in w&&r(ft,"value",null,w.value),(it=w.onVnodeBeforeMount)&&ln(it,B,b)}R(ft,b,b.scopeId,at,B),rt&&ai(b,null,B,"beforeMount");const dt=(!U||U&&!U.pendingBranch)&&J&&!J.persisted;dt&&J.beforeEnter(ft),i(ft,A,I),((it=w&&w.onVnodeMounted)||dt||rt)&&Oe(()=>{it&&ln(it,B,b),dt&&J.enter(ft),rt&&ai(b,null,B,"mounted")},U)},R=(b,A,I,B,U)=>{if(I&&p(b,I),B)for(let et=0;et<B.length;et++)p(b,B[et]);if(U){let et=U.subTree;if(A===et){const at=U.vnode;R(b,at,at.scopeId,at.slotScopeIds,U.parent)}}},M=(b,A,I,B,U,et,at,Q,ft=0)=>{for(let it=ft;it<b.length;it++){const T=b[it]=Q?jn(b[it]):un(b[it]);m(null,T,A,I,B,U,et,at,Q)}},C=(b,A,I,B,U,et,at)=>{const Q=A.el=b.el;let{patchFlag:ft,dynamicChildren:it,dirs:T}=A;ft|=b.patchFlag&16;const w=b.props||Jt,N=A.props||Jt;let J;I&&li(I,!1),(J=N.onVnodeBeforeUpdate)&&ln(J,I,A,b),T&&ai(A,b,I,"beforeUpdate"),I&&li(I,!0);const rt=U&&A.type!=="foreignObject";if(it?D(b.dynamicChildren,it,Q,I,B,rt,et):at||j(b,A,Q,null,I,B,rt,et,!1),ft>0){if(ft&16)X(Q,A,w,N,I,B,U);else if(ft&2&&w.class!==N.class&&r(Q,"class",null,N.class,U),ft&4&&r(Q,"style",w.style,N.style,U),ft&8){const dt=A.dynamicProps;for(let bt=0;bt<dt.length;bt++){const mt=dt[bt],tt=w[mt],Ct=N[mt];(Ct!==tt||mt==="value")&&r(Q,mt,tt,Ct,U,b.children,I,B,z)}}ft&1&&b.children!==A.children&&u(Q,A.children)}else!at&&it==null&&X(Q,A,w,N,I,B,U);((J=N.onVnodeUpdated)||T)&&Oe(()=>{J&&ln(J,I,A,b),T&&ai(A,b,I,"updated")},B)},D=(b,A,I,B,U,et,at)=>{for(let Q=0;Q<A.length;Q++){const ft=b[Q],it=A[Q],T=ft.el&&(ft.type===We||!As(ft,it)||ft.shapeFlag&70)?h(ft.el):I;m(ft,it,T,null,B,U,et,at,!0)}},X=(b,A,I,B,U,et,at)=>{if(I!==B){if(I!==Jt)for(const Q in I)!jr(Q)&&!(Q in B)&&r(b,Q,I[Q],null,at,A.children,U,et,z);for(const Q in B){if(jr(Q))continue;const ft=B[Q],it=I[Q];ft!==it&&Q!=="value"&&r(b,Q,it,ft,at,A.children,U,et,z)}"value"in B&&r(b,"value",I.value,B.value)}},nt=(b,A,I,B,U,et,at,Q,ft)=>{const it=A.el=b?b.el:a(""),T=A.anchor=b?b.anchor:a("");let{patchFlag:w,dynamicChildren:N,slotScopeIds:J}=A;J&&(Q=Q?Q.concat(J):J),b==null?(i(it,I,B),i(T,I,B),M(A.children,I,T,U,et,at,Q,ft)):w>0&&w&64&&N&&b.dynamicChildren?(D(b.dynamicChildren,N,I,U,et,at,Q),(A.key!=null||U&&A===U.subTree)&&of(b,A,!0)):j(b,A,I,T,U,et,at,Q,ft)},V=(b,A,I,B,U,et,at,Q,ft)=>{A.slotScopeIds=Q,b==null?A.shapeFlag&512?U.ctx.activate(A,I,B,at,ft):O(A,I,B,U,et,at,ft):Y(b,A,ft)},O=(b,A,I,B,U,et,at)=>{const Q=b.component=bm(b,B,U);if(Xh(b)&&(Q.ctx.renderer=xt),wm(Q),Q.asyncDep){if(U&&U.registerDep(Q,K),!b.el){const ft=Q.subTree=ge(ni);_(null,ft,A,I)}return}K(Q,b,A,I,U,et,at)},Y=(b,A,I)=>{const B=A.component=b.component;if(Np(b,A,I))if(B.asyncDep&&!B.asyncResolved){$(B,A,I);return}else B.next=A,Ep(B.update),B.update();else A.el=b.el,B.vnode=A},K=(b,A,I,B,U,et,at)=>{const Q=()=>{if(b.isMounted){let{next:T,bu:w,u:N,parent:J,vnode:rt}=b,dt=T,bt;li(b,!1),T?(T.el=rt.el,$(b,T,at)):T=rt,w&&Xr(w),(bt=T.props&&T.props.onVnodeBeforeUpdate)&&ln(bt,J,T,rt),li(b,!0);const mt=Do(b),tt=b.subTree;b.subTree=mt,m(tt,mt,h(tt.el),ct(tt),b,U,et),T.el=mt.el,dt===null&&Fp(b,mt.el),N&&Oe(N,U),(bt=T.props&&T.props.onVnodeUpdated)&&Oe(()=>ln(bt,J,T,rt),U)}else{let T;const{el:w,props:N}=A,{bm:J,m:rt,parent:dt}=b,bt=Bs(A);if(li(b,!1),J&&Xr(J),!bt&&(T=N&&N.onVnodeBeforeMount)&&ln(T,dt,A),li(b,!0),w&&Mt){const mt=()=>{b.subTree=Do(b),Mt(w,b.subTree,b,U,null)};bt?A.type.__asyncLoader().then(()=>!b.isUnmounted&&mt()):mt()}else{const mt=b.subTree=Do(b);m(null,mt,I,B,b,U,et),A.el=mt.el}if(rt&&Oe(rt,U),!bt&&(T=N&&N.onVnodeMounted)){const mt=A;Oe(()=>ln(T,dt,mt),U)}(A.shapeFlag&256||dt&&Bs(dt.vnode)&&dt.vnode.shapeFlag&256)&&b.a&&Oe(b.a,U),b.isMounted=!0,A=I=B=null}},ft=b.effect=new sl(Q,()=>hl(it),b.scope),it=b.update=()=>ft.run();it.id=b.uid,li(b,!0),it()},$=(b,A,I)=>{A.component=b;const B=b.vnode.props;b.vnode=A,b.next=null,am(b,A.props,B,I),um(b,A.children,I),vs(),Yl(),xs()},j=(b,A,I,B,U,et,at,Q,ft=!1)=>{const it=b&&b.children,T=b?b.shapeFlag:0,w=A.children,{patchFlag:N,shapeFlag:J}=A;if(N>0){if(N&128){k(it,w,I,B,U,et,at,Q,ft);return}else if(N&256){G(it,w,I,B,U,et,at,Q,ft);return}}J&8?(T&16&&z(it,U,et),w!==it&&u(I,w)):T&16?J&16?k(it,w,I,B,U,et,at,Q,ft):z(it,U,et,!0):(T&8&&u(I,""),J&16&&M(w,I,B,U,et,at,Q,ft))},G=(b,A,I,B,U,et,at,Q,ft)=>{b=b||es,A=A||es;const it=b.length,T=A.length,w=Math.min(it,T);let N;for(N=0;N<w;N++){const J=A[N]=ft?jn(A[N]):un(A[N]);m(b[N],J,I,null,U,et,at,Q,ft)}it>T?z(b,U,et,!0,!1,w):M(A,I,B,U,et,at,Q,ft,w)},k=(b,A,I,B,U,et,at,Q,ft)=>{let it=0;const T=A.length;let w=b.length-1,N=T-1;for(;it<=w&&it<=N;){const J=b[it],rt=A[it]=ft?jn(A[it]):un(A[it]);if(As(J,rt))m(J,rt,I,null,U,et,at,Q,ft);else break;it++}for(;it<=w&&it<=N;){const J=b[w],rt=A[N]=ft?jn(A[N]):un(A[N]);if(As(J,rt))m(J,rt,I,null,U,et,at,Q,ft);else break;w--,N--}if(it>w){if(it<=N){const J=N+1,rt=J<T?A[J].el:B;for(;it<=N;)m(null,A[it]=ft?jn(A[it]):un(A[it]),I,rt,U,et,at,Q,ft),it++}}else if(it>N)for(;it<=w;)Z(b[it],U,et,!0),it++;else{const J=it,rt=it,dt=new Map;for(it=rt;it<=N;it++){const wt=A[it]=ft?jn(A[it]):un(A[it]);wt.key!=null&&dt.set(wt.key,it)}let bt,mt=0;const tt=N-rt+1;let Ct=!1,Dt=0;const Tt=new Array(tt);for(it=0;it<tt;it++)Tt[it]=0;for(it=J;it<=w;it++){const wt=b[it];if(mt>=tt){Z(wt,U,et,!0);continue}let Ot;if(wt.key!=null)Ot=dt.get(wt.key);else for(bt=rt;bt<=N;bt++)if(Tt[bt-rt]===0&&As(wt,A[bt])){Ot=bt;break}Ot===void 0?Z(wt,U,et,!0):(Tt[Ot-rt]=it+1,Ot>=Dt?Dt=Ot:Ct=!0,m(wt,A[Ot],I,null,U,et,at,Q,ft),mt++)}const Lt=Ct?mm(Tt):es;for(bt=Lt.length-1,it=tt-1;it>=0;it--){const wt=rt+it,Ot=A[wt],Qt=wt+1<T?A[wt+1].el:B;Tt[it]===0?m(null,Ot,I,Qt,U,et,at,Q,ft):Ct&&(bt<0||it!==Lt[bt]?ut(Ot,I,Qt,2):bt--)}}},ut=(b,A,I,B,U=null)=>{const{el:et,type:at,transition:Q,children:ft,shapeFlag:it}=b;if(it&6){ut(b.component.subTree,A,I,B);return}if(it&128){b.suspense.move(A,I,B);return}if(it&64){at.move(b,A,I,xt);return}if(at===We){i(et,A,I);for(let w=0;w<ft.length;w++)ut(ft[w],A,I,B);i(b.anchor,A,I);return}if(at===Qr){x(b,A,I);return}if(B!==2&&it&1&&Q)if(B===0)Q.beforeEnter(et),i(et,A,I),Oe(()=>Q.enter(et),U);else{const{leave:w,delayLeave:N,afterLeave:J}=Q,rt=()=>i(et,A,I),dt=()=>{w(et,()=>{rt(),J&&J()})};N?N(et,rt,dt):dt()}else i(et,A,I)},Z=(b,A,I,B=!1,U=!1)=>{const{type:et,props:at,ref:Q,children:ft,dynamicChildren:it,shapeFlag:T,patchFlag:w,dirs:N}=b;if(Q!=null&&Ia(Q,null,I,b,!0),T&256){A.ctx.deactivate(b);return}const J=T&1&&N,rt=!Bs(b);let dt;if(rt&&(dt=at&&at.onVnodeBeforeUnmount)&&ln(dt,A,b),T&6)W(b.component,I,B);else{if(T&128){b.suspense.unmount(I,B);return}J&&ai(b,null,A,"beforeUnmount"),T&64?b.type.remove(b,A,I,U,xt,B):it&&(et!==We||w>0&&w&64)?z(it,A,I,!1,!0):(et===We&&w&384||!U&&T&16)&&z(ft,A,I),B&&vt(b)}(rt&&(dt=at&&at.onVnodeUnmounted)||J)&&Oe(()=>{dt&&ln(dt,A,b),J&&ai(b,null,A,"unmounted")},I)},vt=b=>{const{type:A,el:I,anchor:B,transition:U}=b;if(A===We){At(I,B);return}if(A===Qr){v(b);return}const et=()=>{s(I),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(b.shapeFlag&1&&U&&!U.persisted){const{leave:at,delayLeave:Q}=U,ft=()=>at(I,et);Q?Q(b.el,et,ft):ft()}else et()},At=(b,A)=>{let I;for(;b!==A;)I=f(b),s(b),b=I;s(A)},W=(b,A,I)=>{const{bum:B,scope:U,update:et,subTree:at,um:Q}=b;B&&Xr(B),U.stop(),et&&(et.active=!1,Z(at,b,A,I)),Q&&Oe(Q,A),Oe(()=>{b.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},z=(b,A,I,B=!1,U=!1,et=0)=>{for(let at=et;at<b.length;at++)Z(b[at],A,I,B,U)},ct=b=>b.shapeFlag&6?ct(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),ht=(b,A,I)=>{b==null?A._vnode&&Z(A._vnode,null,null,!0):m(A._vnode||null,b,A,null,null,null,I),Yl(),Hh(),A._vnode=b},xt={p:m,um:Z,m:ut,r:vt,mt:O,mc:M,pc:j,pbc:D,n:ct,o:n};let pt,Mt;return t&&([pt,Mt]=t(xt)),{render:ht,hydrate:pt,createApp:fm(ht,pt)}}function li({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function of(n,t,e=!1){const i=n.children,s=t.children;if(Ft(i)&&Ft(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=jn(s[r]),a.el=o.el),e||of(o,a))}}function mm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}const gm=n=>n.__isTeleport,We=Symbol(void 0),vl=Symbol(void 0),ni=Symbol(void 0),Qr=Symbol(void 0),Us=[];let nn=null;function je(n=!1){Us.push(nn=n?null:[])}function _m(){Us.pop(),nn=Us[Us.length-1]||null}let Ks=1;function sc(n){Ks+=n}function af(n){return n.dynamicChildren=Ks>0?nn||es:null,_m(),Ks>0&&nn&&nn.push(n),n}function Pn(n,t,e,i,s,r){return af(Pe(n,t,e,i,s,r,!0))}function xl(n,t,e,i,s){return af(ge(n,t,e,i,s,!0))}function oo(n){return n?n.__v_isVNode===!0:!1}function As(n,t){return n.type===t.type&&n.key===t.key}const xo="__vInternal",lf=({key:n})=>n??null,Jr=({ref:n,ref_key:t,ref_for:e})=>n!=null?ce(n)||Se(n)||zt(n)?{i:Re,r:n,k:t,f:!!e}:n:null;function Pe(n,t=null,e=null,i=0,s=null,r=n===We?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&lf(t),ref:t&&Jr(t),scopeId:_o,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(yl(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ce(e)?8:16),Ks>0&&!o&&nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&nn.push(l),l}const ge=vm;function vm(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Kh)&&(n=ni),oo(n)){const a=ls(n,t,!0);return e&&yl(a,e),Ks>0&&!r&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag|=-2,a}if(Cm(n)&&(n=n.__vccOpts),t){t=xm(t);let{class:a,style:l}=t;a&&!ce(a)&&(t.class=ir(a)),ie(l)&&(Ih(l)&&!Ft(l)&&(l=Ie({},l)),t.style=Yn(l))}const o=ce(n)?1:zp(n)?128:gm(n)?64:ie(n)?4:zt(n)?2:0;return Pe(n,t,e,i,s,o,r,!0)}function xm(n){return n?Ih(n)||xo in n?Ie({},n):n:null}function ls(n,t,e=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=t?hf(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&lf(a),ref:t&&t.ref?e&&s?Ft(s)?s.concat(Jr(t)):[s,Jr(t)]:Jr(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==We?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ls(n.ssContent),ssFallback:n.ssFallback&&ls(n.ssFallback),el:n.el,anchor:n.anchor}}function cf(n=" ",t=0){return ge(vl,null,n,t)}function IS(n,t){const e=ge(Qr,null,n);return e.staticCount=t,e}function uf(n="",t=!1){return t?(je(),xl(ni,null,n)):ge(ni,null,n)}function un(n){return n==null||typeof n=="boolean"?ge(ni):Ft(n)?ge(We,null,n.slice()):typeof n=="object"?jn(n):ge(vl,null,String(n))}function jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ls(n)}function yl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ft(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),yl(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!(xo in t)?t._ctx=Re:s===3&&Re&&(Re.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else zt(t)?(t={default:t,_ctx:Re},e=32):(t=String(t),i&64?(e=16,t=[cf(t)]):e=8);n.children=t,n.shapeFlag|=e}function hf(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ir([t.class,i.class]));else if(s==="style")t.style=Yn([t.style,i.style]);else if(co(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ft(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function ln(n,t,e,i=null){rn(n,t,7,[e,i])}const ym=rf();let Mm=0;function bm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||ym,r={uid:Mm++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new qd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tf(i,s),emitsOptions:qh(i,s),emit:null,emitted:null,propsDefaults:Jt,inheritAttrs:i.inheritAttrs,ctx:Jt,data:Jt,props:Jt,attrs:Jt,slots:Jt,refs:Jt,setupState:Jt,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Pp.bind(null,r),n.ce&&n.ce(r),r}let xe=null;const cs=n=>{xe=n,n.scope.on()},wi=()=>{xe&&xe.scope.off(),xe=null};function ff(n){return n.vnode.shapeFlag&4}let Qs=!1;function wm(n,t=!1){Qs=t;const{props:e,children:i}=n.vnode,s=ff(n);om(n,e,s,t),cm(n,i);const r=s?Sm(n,t):void 0;return Qs=!1,r}function Sm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=Oh(new Proxy(n.ctx,tm));const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?Em(n):null;cs(n),vs();const r=Zn(i,n,0,[n.props,s]);if(xs(),wi(),xh(r)){if(r.then(wi,wi),t)return r.then(o=>{rc(n,o,t)}).catch(o=>{mo(o,n,0)});n.asyncDep=r}else rc(n,r,t)}else df(n,t)}function rc(n,t,e){zt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=Bh(t)),df(n,e)}let oc;function df(n,t,e){const i=n.type;if(!n.render){if(!t&&oc&&!i.render){const s=i.template||gl(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ie(Ie({isCustomElement:r,delimiters:a},o),l);i.render=oc(s,c)}}n.render=i.render||mn}cs(n),vs(),em(n),xs(),wi()}function Am(n){return new Proxy(n.attrs,{get(t,e){return Ue(n,"get","$attrs"),t[e]}})}function Em(n){const t=i=>{n.exposed=i||{}};let e;return{get attrs(){return e||(e=Am(n))},slots:n.slots,emit:n.emit,expose:t}}function yo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Bh(Oh(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in so)return so[e](n)}}))}function Tm(n,t=!0){return zt(n)?n.displayName||n.name:n.name||t&&n.__name}function Cm(n){return zt(n)&&"__vccOpts"in n}const Le=(n,t)=>wp(n,t,Qs);function pf(n,t,e){const i=arguments.length;return i===2?ie(t)&&!Ft(t)?oo(t)?ge(n,null,[t]):ge(n,t):ge(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&oo(e)&&(e=[e]),ge(n,t,e))}const Pm="3.2.41",Lm="http://www.w3.org/2000/svg",gi=typeof document<"u"?document:null,ac=gi&&gi.createElement("template"),Rm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t?gi.createElementNS(Lm,n):gi.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>gi.createTextNode(n),createComment:n=>gi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>gi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{ac.innerHTML=i?`<svg>${n}</svg>`:n;const a=ac.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function Dm(n,t,e){const i=n._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}function Im(n,t,e){const i=n.style,s=ce(e);if(e&&!s){for(const r in e)Oa(i,r,e[r]);if(t&&!ce(t))for(const r in t)e[r]==null&&Oa(i,r,"")}else{const r=i.display;s?t!==e&&(i.cssText=e):t&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const lc=/\s*!important$/;function Oa(n,t,e){if(Ft(e))e.forEach(i=>Oa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Om(n,t);lc.test(e)?n.setProperty(_s(i),e.replace(lc,""),"important"):n[i]=e}}const cc=["Webkit","Moz","ms"],Io={};function Om(n,t){const e=Io[t];if(e)return e;let i=gn(t);if(i!=="filter"&&i in n)return Io[t]=i;i=fo(i);for(let s=0;s<cc.length;s++){const r=cc[s]+i;if(r in n)return Io[t]=r}return t}const uc="http://www.w3.org/1999/xlink";function Nm(n,t,e,i,s){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(uc,t.slice(6,t.length)):n.setAttributeNS(uc,t,e);else{const r=Id(t);e==null||r&&!gh(e)?n.removeAttribute(t):n.setAttribute(t,r?"":e)}}function Fm(n,t,e,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),n[t]=e??"";return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=e;const l=e??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),e==null&&n.removeAttribute(t);return}let a=!1;if(e===""||e==null){const l=typeof n[t];l==="boolean"?e=gh(e):e==null&&l==="string"?(e="",a=!0):l==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(t)}function Qi(n,t,e,i){n.addEventListener(t,e,i)}function zm(n,t,e,i){n.removeEventListener(t,e,i)}function Bm(n,t,e,i,s=null){const r=n._vei||(n._vei={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Um(t);if(i){const c=r[t]=km(i,s);Qi(n,a,c,l)}else o&&(zm(n,a,o,l),r[t]=void 0)}}const hc=/(?:Once|Passive|Capture)$/;function Um(n){let t;if(hc.test(n)){t={};let i;for(;i=n.match(hc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_s(n.slice(2)),t]}let Oo=0;const Gm=Promise.resolve(),Vm=()=>Oo||(Gm.then(()=>Oo=0),Oo=Date.now());function km(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;rn(Hm(i,e.value),t,5,[i])};return e.value=n,e.attached=Vm(),e}function Hm(n,t){if(Ft(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const fc=/^on[a-z]/,Wm=(n,t,e,i,s=!1,r,o,a,l)=>{t==="class"?Dm(n,i,s):t==="style"?Im(n,e,i):co(t)?$a(t)||Bm(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qm(n,t,i,s))?Fm(n,t,i,r,o,a,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Nm(n,t,i,s))};function qm(n,t,e,i){return i?!!(t==="innerHTML"||t==="textContent"||t in n&&fc.test(t)&&zt(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||fc.test(t)&&ce(e)?!1:t in n}const dc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ft(t)?e=>Xr(t,e):t};function jm(n){n.target.composing=!0}function pc(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const OS={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n._assign=dc(s);const r=i||s.props&&s.props.type==="number";Qi(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),r&&(a=wa(a)),n._assign(a)}),e&&Qi(n,"change",()=>{n.value=n.value.trim()}),t||(Qi(n,"compositionstart",jm),Qi(n,"compositionend",pc),Qi(n,"change",pc))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,modifiers:{lazy:e,trim:i,number:s}},r){if(n._assign=dc(r),n.composing||document.activeElement===n&&n.type!=="range"&&(e||i&&n.value.trim()===t||(s||n.type==="number")&&wa(n.value)===t))return;const o=t??"";n.value!==o&&(n.value=o)}},NS={beforeMount(n,{value:t},{transition:e}){n._vod=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Es(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Es(n,!0),i.enter(n)):i.leave(n,()=>{Es(n,!1)}):Es(n,t))},beforeUnmount(n,{value:t}){Es(n,t)}};function Es(n,t){n.style.display=t?n._vod:"none"}const Xm=Ie({patchProp:Wm},Rm);let mc;function Ym(){return mc||(mc=dm(Xm))}const Km=(...n)=>{const t=Ym().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Qm(i);if(!s)return;const r=t._component;!zt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Qm(n){return ce(n)?document.querySelector(n):n}const Jm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFC0lEQVR4nN3agVHbSBiG4W8riK6CiAoiKoioIKaCkyvAqeDkCmIqiKggTgVZKkBUgKjgRAXcuywKxpHtXdmAuHfmkZkBa+R/ZVkwGL1tGVw13qTXGECGL3CPyaMMfdVoH9X4Cff4Yr3UANwLziVNkGq/GklLWPmBHDSDQ5VK+gcTJHiJWiwxR6MDZLBvCc5Q6nUrJZ2jxeD2GUAC98JnSPAWtVhg8CCGDiCX9B2pxlEjaQqryAxic6u+wBibolJEBjG5VS807ir5QQRlEFKCX8jwHqpxghZbM9hVgvf04rtqnKDFxgx25V58rveZlR/Cxgy29R2F3neVtlwTDDZVyA/g/9AUlXoy6CvDFXb1FxKk8rfAzke8ZHdYwsp//if4gV0do8azDPq6QartXSLXn00ww2ccsluU6l/JGp+wrUbSEZ5lsF6hsFN/jlKby+UP9iNc13AH2ugpK1+GBC73mOEzXHcotf3my33vDLuaotJKBqsluEKq3Z1iiW0lyGA1LPfcFo22Vyhs0RqtnQUGq5Xyv9KGdAKrcZTLf1yHNEepxwy6EtzAPYZ0AqtxlCt8AC2O4B6fDaBU+Oq7TmA1jnKFD8A1Ryky6HLv/QyhzVFqHJWKW7wax/g9gFT+9I/pJyYYQ0t8QUxHaAwb1wzfENMxaoyhDFbSB4T2FYtuAFdwOwnt4ckYUzN8Q2g1jt0AEvyL0G6Rapw1errxCunIsCkUdhPRNUepcVYo7rWcGjal4q6gR2g03u4R2tywKRU+gGtkGHNLfEFIDwOwevrFY1fnmGHMlQpf0MvYAcxRatwVCr8OPAzgBqnCmqPUuMsVflvcGjb3CG2OUuMuV/gAZHCP0OYoNe4Khb8FHgbQKPzmYY5S465U+EXw1rCxCr8IXiLXuKsk/Y2QLg0bq/ABuNxzxtwNUoU1aACnWGKMZbhCaBduAKXC3zMuK//XoDFWKfz0d80Nm1wRHxuPncBqXKXyp39MJ4aN6x4x1TjGmPqFXHGZbgBWcdcB1zlmGEOl4t7Grkvkho1rgTPENkWlt61QxI3PSnOUho0rVfz7p6uSH8Rb5BbNLd6QjtAYNl1W8W+DrhpTuMfXKJVf9VzDukQuMugq5He63jUq+XJt/2NDJX9teKlBpPKrPsM+nWIJGazW4gNWW8I9oWuCSn/+3Go1KvlJu6/3KcNnTJBr/26R6jGD1Ur1X01rTOEeXRmstg+hq4UboFVcufw/PiQ4ZF+xwEMG69X4hPVanMLKN8EP7Oon3M8Oycqv/qG6Robf9Q0gl7+p6KvFMRr5FjjDpu6Qyj9vSKn8gnzAITqG29/vDPqqtPme+isW6HJfn6GvCxTar237j+kcMzzLoK8Ejfon38h/hq42QSF/9nTPuUahtYkPaIIf2Kc7pOo5Ew02lcHq6QWtdoolXqNUw2/SXHfItWEhDLZVqP/eoMUJarxGLfoWIqRTLNGbwa5K9X80tnA7t3r5rIZ9GkxRaUsGIVXafFG08t+/RKOXySp+ABcotCOD0Gb4hphi9r8tq7gBTFEpIIOYCvVfEzYVu/9NWYUN4A5uoSoFNuQAMyzxEbsasv++rHYP4BYT1AjOYEgJSu2+QRm6//Wstg/gHKX8hTmqfQ8wl79T+4S+9t1/l1X/AK5RKHLVVzvUARby1g/yUPu3er5v98IXqLRnhzrArlx+EH/DHWSGQ7TEF1ygkh/IQTJ4DyWPGh24/wALgxPtjCtEEQAAAABJRU5ErkJggg==",mf=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Zm={},$m=n=>(Lp("data-v-fc931a84"),n=n(),Rp(),n),tg={class:"relative w-full h-full overflow-hidden"},eg=$m(()=>Pe("div",{class:"github absolute bottom-0 right-0 z-900 w-200px h-40px bg-#fff flex justify-center items-center"},[Pe("a",{class:"flex items-center",href:"https://github.com/YuFengjie97/nova",target:"_blank"},[Pe("img",{src:Jm,class:"w-36px h-36px m-l-4px",alt:""})])],-1));function ng(n,t){const e=Zp("router-view");return je(),Pn("div",tg,[eg,ge(e)])}const Ri=mf(Zm,[["render",ng],["__scopeId","data-v-fc931a84"]]);/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ji=typeof window<"u";function ig(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Kt=Object.assign;function No(n,t){const e={};for(const i in t){const s=t[i];e[i]=on(s)?s.map(n):n(s)}return e}const Gs=()=>{},on=Array.isArray,sg=/\/$/,rg=n=>n.replace(sg,"");function Fo(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=n(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=cg(i??t,e),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function og(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function gc(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function ag(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&us(t.matched[i],e.matched[s])&&gf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function us(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function gf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!lg(n[e],t[e]))return!1;return!0}function lg(n,t){return on(n)?_c(n,t):on(t)?_c(t,n):n===t}function _c(n,t){return on(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function cg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/");let s=e.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Js;(function(n){n.pop="pop",n.push="push"})(Js||(Js={}));var Vs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Vs||(Vs={}));function ug(n){if(!n)if(Ji){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),rg(n)}const hg=/^[^#]+#/;function fg(n,t){return n.replace(hg,"#")+t}function dg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Mo=()=>({left:window.pageXOffset,top:window.pageYOffset});function pg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=dg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function vc(n,t){return(history.state?history.state.position-t:-1)+n}const Na=new Map;function mg(n,t){Na.set(n,t)}function gg(n){const t=Na.get(n);return Na.delete(n),t}let _g=()=>location.protocol+"//"+location.host;function _f(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),gc(l,"")}return gc(e,n)+i+s}function vg(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=_f(n,location),g=e.value,m=t.value;let d=0;if(f){if(e.value=p,t.value=f,o&&o===g){o=null;return}d=m?f.position-m.position:0}else i(p);s.forEach(_=>{_(e.value,g,{delta:d,type:Js.pop,direction:d?d>0?Vs.forward:Vs.back:Vs.unknown})})};function l(){o=e.value}function c(f){s.push(f);const p=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Kt({},f.state,{scroll:Mo()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function xc(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Mo():null}}function xg(n){const{history:t,location:e}=window,i={value:_f(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+l:_g()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),e[u?"replace":"assign"](f)}}function o(l,c){const u=Kt({},t.state,xc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Kt({},s.value,t.state,{forward:l,scroll:Mo()});r(u.current,u,!0);const h=Kt({},xc(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function yg(n){n=ug(n);const t=xg(n),e=vg(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=Kt({location:"",base:n,go:i,createHref:fg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Mg(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),yg(n)}function bg(n){return typeof n=="string"||n&&typeof n=="object"}function vf(n){return typeof n=="string"||typeof n=="symbol"}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xf=Symbol("");var yc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(yc||(yc={}));function hs(n,t){return Kt(new Error,{type:n,[xf]:!0},t)}function xn(n,t){return n instanceof Error&&xf in n&&(t==null||!!(n.type&t))}const Mc="[^/]+?",wg={sensitive:!1,strict:!1,start:!0,end:!0},Sg=/[.+*?^${}()[\]/\\]/g;function Ag(n,t){const e=Kt({},wg,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(e.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Sg,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:m,optional:d,regexp:_}=f;r.push({name:g,repeatable:m,optional:d});const y=_||Mc;if(y!==Mc){p+=10;try{new RegExp(`(${y})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+v.message)}}let x=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(x=d&&c.length<2?`(?:/${x})`:"/"+x),d&&(x+="?"),s+=x,p+=20,d&&(p+=-8),m&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=r[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:d}=p,_=g in c?c[g]:"";if(on(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=on(_)?_.join("/"):_;if(!y)if(d)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Eg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Tg(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=Eg(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(bc(i))return 1;if(bc(s))return-1}return s.length-i.length}function bc(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Cg={type:0,value:""},Pg=/[a-zA-Z0-9_]/;function Lg(n){if(!n)return[[]];if(n==="/")return[[Cg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${c}": ${p}`)}let e=0,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(e===0?r.push({type:0,value:c}):e===1||e===2||e===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),e=1):f();break;case 4:f(),e=i;break;case 1:l==="("?e=2:Pg.test(l)?f():(h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=3:u+=l;break;case 3:h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Rg(n,t,e){const i=Ag(Lg(n.path),e),s=Kt(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Dg(n,t){const e=[],i=new Map;t=Ac({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,h,f){const p=!f,g=Ig(u);g.aliasOf=f&&f.record;const m=Ac(t,u),d=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of x)d.push(Kt({},g,{components:f?f.record.components:g.components,path:v,aliasOf:f?f.record:g}))}let _,y;for(const x of d){const{path:v}=x;if(h&&v[0]!=="/"){const E=h.record.path,S=E[E.length-1]==="/"?"":"/";x.path=h.record.path+(v&&S+v)}if(_=Rg(x,h,m),f?f.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),p&&u.name&&!Sc(_)&&o(u.name)),g.children){const E=g.children;for(let S=0;S<E.length;S++)r(E[S],_,f&&f.children[S])}f=f||_,l(_)}return y?()=>{o(y)}:Gs}function o(u){if(vf(u)){const h=i.get(u);h&&(i.delete(u),e.splice(e.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=e.indexOf(u);h>-1&&(e.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){let h=0;for(;h<e.length&&Tg(u,e[h])>=0&&(u.record.path!==e[h].record.path||!yf(u,e[h]));)h++;e.splice(h,0,u),u.record.name&&!Sc(u)&&i.set(u.record.name,u)}function c(u,h){let f,p={},g,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw hs(1,{location:u});m=f.record.name,p=Kt(wc(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&wc(u.params,f.keys.map(y=>y.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=e.find(y=>y.re.test(g)),f&&(p=f.parse(g),m=f.record.name);else{if(f=h.name?i.get(h.name):e.find(y=>y.re.test(h.path)),!f)throw hs(1,{location:u,currentLocation:h});m=f.record.name,p=Kt({},h.params,u.params),g=f.stringify(p)}const d=[];let _=f;for(;_;)d.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:d,meta:Ng(d)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function wc(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Ig(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Og(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Og(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="boolean"?e:e[i];return t}function Sc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ng(n){return n.reduce((t,e)=>Kt(t,e.meta),{})}function Ac(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function yf(n,t){return t.children.some(e=>e===n||yf(n,e))}const Mf=/#/g,Fg=/&/g,zg=/\//g,Bg=/=/g,Ug=/\?/g,bf=/\+/g,Gg=/%5B/g,Vg=/%5D/g,wf=/%5E/g,kg=/%60/g,Sf=/%7B/g,Hg=/%7C/g,Af=/%7D/g,Wg=/%20/g;function Ml(n){return encodeURI(""+n).replace(Hg,"|").replace(Gg,"[").replace(Vg,"]")}function qg(n){return Ml(n).replace(Sf,"{").replace(Af,"}").replace(wf,"^")}function Fa(n){return Ml(n).replace(bf,"%2B").replace(Wg,"+").replace(Mf,"%23").replace(Fg,"%26").replace(kg,"`").replace(Sf,"{").replace(Af,"}").replace(wf,"^")}function jg(n){return Fa(n).replace(Bg,"%3D")}function Xg(n){return Ml(n).replace(Mf,"%23").replace(Ug,"%3F")}function Yg(n){return n==null?"":Xg(n).replace(zg,"%2F")}function ao(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Kg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(bf," "),o=r.indexOf("="),a=ao(o<0?r:r.slice(0,o)),l=o<0?null:ao(r.slice(o+1));if(a in t){let c=t[a];on(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Ec(n){let t="";for(let e in n){const i=n[e];if(e=jg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(on(i)?i.map(r=>r&&Fa(r)):[i&&Fa(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function Qg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=on(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Jg=Symbol(""),Tc=Symbol(""),bl=Symbol(""),Ef=Symbol(""),za=Symbol("");function Ts(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n,reset:e}}function Xn(n,t,e,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(hs(4,{from:e,to:t})):h instanceof Error?a(h):bg(h)?a(hs(2,{from:t,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=n.call(i&&i.instances[s],t,e,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function zo(n,t,e,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(Zg(a)){const c=(a.__vccOpts||a)[t];c&&s.push(Xn(c,e,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=ig(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&Xn(f,e,i,r,o)()}))}}return s}function Zg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Cc(n){const t=$n(bl),e=$n(Ef),i=Le(()=>t.resolve(Cn(n.to))),s=Le(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const f=h.findIndex(us.bind(null,u));if(f>-1)return f;const p=Pc(l[c-2]);return c>1&&Pc(u)===p&&h[h.length-1].path!==p?h.findIndex(us.bind(null,l[c-2])):f}),r=Le(()=>s.value>-1&&n0(e.params,i.value.params)),o=Le(()=>s.value>-1&&s.value===e.matched.length-1&&gf(e.params,i.value.params));function a(l={}){return e0(l)?t[Cn(n.replace)?"replace":"push"](Cn(n.to)).catch(Gs):Promise.resolve()}return{route:i,href:Le(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const $g=Li({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cc,setup(n,{slots:t}){const e=sr(Cc(n)),{options:i}=$n(bl),s=Le(()=>({[Lc(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Lc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&t.default(e);return n.custom?r:pf("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),t0=$g;function e0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function n0(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!on(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Pc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Lc=(n,t,e)=>n??t??e,i0=Li({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=$n(za),s=Le(()=>n.route||i.value),r=$n(Tc,0),o=Le(()=>{let c=Cn(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Le(()=>s.value.matched[o.value]);Yr(Tc,Le(()=>o.value+1)),Yr(Jg,a),Yr(za,s);const l=pn();return Kr(()=>[l.value,a.value,n.name],([c,u,h],[f,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!us(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Rc(e.default,{Component:f,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,d=pf(f,Kt({},g,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Rc(e.default,{Component:d,route:c})||d}}});function Rc(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const s0=i0;function r0(n){const t=Dg(n.routes,n),e=n.parseQuery||Kg,i=n.stringifyQuery||Ec,s=n.history,r=Ts(),o=Ts(),a=Ts(),l=xp(Bn);let c=Bn;Ji&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=No.bind(null,W=>""+W),h=No.bind(null,Yg),f=No.bind(null,ao);function p(W,z){let ct,ht;return vf(W)?(ct=t.getRecordMatcher(W),ht=z):ht=W,t.addRoute(ht,ct)}function g(W){const z=t.getRecordMatcher(W);z&&t.removeRoute(z)}function m(){return t.getRoutes().map(W=>W.record)}function d(W){return!!t.getRecordMatcher(W)}function _(W,z){if(z=Kt({},z||l.value),typeof W=="string"){const b=Fo(e,W,z.path),A=t.resolve({path:b.path},z),I=s.createHref(b.fullPath);return Kt(b,A,{params:f(A.params),hash:ao(b.hash),redirectedFrom:void 0,href:I})}let ct;if("path"in W)ct=Kt({},W,{path:Fo(e,W.path,z.path).path});else{const b=Kt({},W.params);for(const A in b)b[A]==null&&delete b[A];ct=Kt({},W,{params:h(W.params)}),z.params=h(z.params)}const ht=t.resolve(ct,z),xt=W.hash||"";ht.params=u(f(ht.params));const pt=og(i,Kt({},W,{hash:qg(xt),path:ht.path})),Mt=s.createHref(pt);return Kt({fullPath:pt,hash:xt,query:i===Ec?Qg(W.query):W.query||{}},ht,{redirectedFrom:void 0,href:Mt})}function y(W){return typeof W=="string"?Fo(e,W,l.value.path):Kt({},W)}function x(W,z){if(c!==W)return hs(8,{from:z,to:W})}function v(W){return R(W)}function E(W){return v(Kt(y(W),{replace:!0}))}function S(W){const z=W.matched[W.matched.length-1];if(z&&z.redirect){const{redirect:ct}=z;let ht=typeof ct=="function"?ct(W):ct;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=y(ht):{path:ht},ht.params={}),Kt({query:W.query,hash:W.hash,params:"path"in ht?{}:W.params},ht)}}function R(W,z){const ct=c=_(W),ht=l.value,xt=W.state,pt=W.force,Mt=W.replace===!0,b=S(ct);if(b)return R(Kt(y(b),{state:typeof b=="object"?Kt({},xt,b.state):xt,force:pt,replace:Mt}),z||ct);const A=ct;A.redirectedFrom=z;let I;return!pt&&ag(i,ht,ct)&&(I=hs(16,{to:A,from:ht}),k(ht,ht,!0,!1)),(I?Promise.resolve(I):C(A,ht)).catch(B=>xn(B)?xn(B,2)?B:G(B):$(B,A,ht)).then(B=>{if(B){if(xn(B,2))return R(Kt({replace:Mt},y(B.to),{state:typeof B.to=="object"?Kt({},xt,B.to.state):xt,force:pt}),z||A)}else B=X(A,ht,!0,Mt,xt);return D(A,ht,B),B})}function M(W,z){const ct=x(W,z);return ct?Promise.reject(ct):Promise.resolve()}function C(W,z){let ct;const[ht,xt,pt]=o0(W,z);ct=zo(ht.reverse(),"beforeRouteLeave",W,z);for(const b of ht)b.leaveGuards.forEach(A=>{ct.push(Xn(A,W,z))});const Mt=M.bind(null,W,z);return ct.push(Mt),Ni(ct).then(()=>{ct=[];for(const b of r.list())ct.push(Xn(b,W,z));return ct.push(Mt),Ni(ct)}).then(()=>{ct=zo(xt,"beforeRouteUpdate",W,z);for(const b of xt)b.updateGuards.forEach(A=>{ct.push(Xn(A,W,z))});return ct.push(Mt),Ni(ct)}).then(()=>{ct=[];for(const b of W.matched)if(b.beforeEnter&&!z.matched.includes(b))if(on(b.beforeEnter))for(const A of b.beforeEnter)ct.push(Xn(A,W,z));else ct.push(Xn(b.beforeEnter,W,z));return ct.push(Mt),Ni(ct)}).then(()=>(W.matched.forEach(b=>b.enterCallbacks={}),ct=zo(pt,"beforeRouteEnter",W,z),ct.push(Mt),Ni(ct))).then(()=>{ct=[];for(const b of o.list())ct.push(Xn(b,W,z));return ct.push(Mt),Ni(ct)}).catch(b=>xn(b,8)?b:Promise.reject(b))}function D(W,z,ct){for(const ht of a.list())ht(W,z,ct)}function X(W,z,ct,ht,xt){const pt=x(W,z);if(pt)return pt;const Mt=z===Bn,b=Ji?history.state:{};ct&&(ht||Mt?s.replace(W.fullPath,Kt({scroll:Mt&&b&&b.scroll},xt)):s.push(W.fullPath,xt)),l.value=W,k(W,z,ct,Mt),G()}let nt;function V(){nt||(nt=s.listen((W,z,ct)=>{if(!At.listening)return;const ht=_(W),xt=S(ht);if(xt){R(Kt(xt,{replace:!0}),ht).catch(Gs);return}c=ht;const pt=l.value;Ji&&mg(vc(pt.fullPath,ct.delta),Mo()),C(ht,pt).catch(Mt=>xn(Mt,12)?Mt:xn(Mt,2)?(R(Mt.to,ht).then(b=>{xn(b,20)&&!ct.delta&&ct.type===Js.pop&&s.go(-1,!1)}).catch(Gs),Promise.reject()):(ct.delta&&s.go(-ct.delta,!1),$(Mt,ht,pt))).then(Mt=>{Mt=Mt||X(ht,pt,!1),Mt&&(ct.delta&&!xn(Mt,8)?s.go(-ct.delta,!1):ct.type===Js.pop&&xn(Mt,20)&&s.go(-1,!1)),D(ht,pt,Mt)}).catch(Gs)}))}let O=Ts(),Y=Ts(),K;function $(W,z,ct){G(W);const ht=Y.list();return ht.length?ht.forEach(xt=>xt(W,z,ct)):console.error(W),Promise.reject(W)}function j(){return K&&l.value!==Bn?Promise.resolve():new Promise((W,z)=>{O.add([W,z])})}function G(W){return K||(K=!W,V(),O.list().forEach(([z,ct])=>W?ct(W):z()),O.reset()),W}function k(W,z,ct,ht){const{scrollBehavior:xt}=n;if(!Ji||!xt)return Promise.resolve();const pt=!ct&&gg(vc(W.fullPath,0))||(ht||!ct)&&history.state&&history.state.scroll||null;return Vh().then(()=>xt(W,z,pt)).then(Mt=>Mt&&pg(Mt)).catch(Mt=>$(Mt,W,z))}const ut=W=>s.go(W);let Z;const vt=new Set,At={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:d,getRoutes:m,resolve:_,options:n,push:v,replace:E,go:ut,back:()=>ut(-1),forward:()=>ut(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:j,install(W){const z=this;W.component("RouterLink",t0),W.component("RouterView",s0),W.config.globalProperties.$router=z,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>Cn(l)}),Ji&&!Z&&l.value===Bn&&(Z=!0,v(s.location).catch(xt=>{}));const ct={};for(const xt in Bn)ct[xt]=Le(()=>l.value[xt]);W.provide(bl,z),W.provide(Ef,sr(ct)),W.provide(za,l);const ht=W.unmount;vt.add(W),W.unmount=function(){vt.delete(W),vt.size<1&&(c=Bn,nt&&nt(),nt=null,l.value=Bn,Z=!1,K=!1),ht()}}};return At}function Ni(n){return n.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function o0(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>us(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>us(c,l))||s.push(l))}return[e,i,s]}const a0="modulepreload",l0=function(n){return"/nova/"+n},Dc={},Et=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link");s=Promise.all(e.map(o=>{if(o=l0(o),o in Dc)return;Dc[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let h=r.length-1;h>=0;h--){const f=r[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":a0,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},c0={path:"/css",component:Ri,children:[{path:"reverseCard",meta:{type:"css",name:"反转卡片图片",visable:!0},component:()=>Et(()=>import("./reverseCardPic-8rul4IMp.js"),__vite__mapDeps([0,1,2,3]))},{path:"starRate",meta:{type:"css",name:"图案评分",visable:!0},component:()=>Et(()=>import("./StarRate-rC9Mrr_x.js"),__vite__mapDeps([4,5,6,7,8,9]))},{path:"sun",meta:{type:"css",name:"小太阳",visable:!0},component:()=>Et(()=>import("./Sun-nYV63g3r.js"),__vite__mapDeps([10,11]))},{path:"progressCube",meta:{type:"css",name:"立体进度条",visable:!1},component:()=>Et(()=>import("./ProgressCube-K0RATOoc.js"),__vite__mapDeps([12,7,8,13]))},{path:"deathLoading",meta:{type:"css",name:"死亡搁浅loading",visable:!0},component:()=>Et(()=>import("./DeathLoading-Y1v4qKSj.js"),__vite__mapDeps([14,15]))},{path:"hsCard",meta:{type:"css",name:"炉石卡片",visable:!0},component:()=>Et(()=>import("./HSCard-dNtGM6jN.js"),__vite__mapDeps([16,2,17,18]))},{path:"barChart",meta:{type:"css",name:"css条状表",visable:!1},component:()=>Et(()=>import("./BarChart-mHG_S0qZ.js"),__vite__mapDeps([19,20]))},{path:"water",meta:{type:"css",name:"模拟水滴",visable:!1},component:()=>Et(()=>import("./Water-G4k8rbyf.js"),__vite__mapDeps([21,2,17,22]))},{path:"sun-time",meta:{type:"css",name:"太阳与时间倒影",visable:!0},component:()=>Et(()=>import("./timeSun-vExACio7.js"),__vite__mapDeps([23,2,17,24]))},{path:"crush-pic",meta:{type:"css",name:"破碎图片",visable:!0},component:()=>Et(()=>import("./crushPic-ubTyp3NB.js"),__vite__mapDeps([25,26,27,2,17,1,28]))},{path:"hack-text",meta:{type:"css",name:"绿色终端",visable:!1},component:()=>Et(()=>import("./hackText-XNyeTKAX.js"),__vite__mapDeps([29,30]))}]},u0={path:"/canvas",component:Ri,children:[{path:"flowField",meta:{type:"canvas",name:"FlowField(fabric)",visable:!0},component:()=>Et(()=>import("./FlowField-m5GSdfbJ.js"),__vite__mapDeps([31,32,5,6,33,2,34]))},{path:"flowFieldLine",meta:{type:"canvas",name:"FlowFieldLine",visable:!1},component:()=>Et(()=>import("./FlowFieldLine-mepooiBa.js"),__vite__mapDeps([35,5,6,32,33,2]))},{path:"canvasTextPoint",meta:{type:"canvas",name:"canvasTextPoint",visable:!1},component:()=>Et(()=>import("./CanvasTextPoint-f9_9Wp0X.js"),__vite__mapDeps([36,37,17,38]))},{path:"canvasPoint",meta:{type:"canvas",name:"图片点阵化",visable:!0},component:()=>Et(()=>import("./canvasPoint-b88mLk48.js"),__vite__mapDeps([39,37,2,40,17]))},{path:"flow",meta:{type:"canvas",name:"mac锁屏flow",visable:!0},component:()=>Et(()=>import("./flow-klKIidaK.js"),__vite__mapDeps([41,2,37,7,8,42,17]))},{path:"delaunator",meta:{type:"canvas",name:"三角切分",visable:!0},component:()=>Et(()=>import("./delaunator-LTiKkvQ8.js"),__vite__mapDeps([43,26,37,17,40]))},{path:"circuit-borad",meta:{type:"canvas",name:"电路板",visable:!0},component:()=>Et(()=>import("./circuitBoard-rdEXEPjL.js"),__vite__mapDeps([]))},{path:"img-idle",meta:{type:"canvas",name:"图片做Idle",visable:!1},component:()=>Et(()=>import("./imgIdle-dQEnwqmp.js"),__vite__mapDeps([44,45]))},{path:"nyan-cat",meta:{type:"canvas",name:"彩虹猫",visable:!0},component:()=>Et(()=>import("./nyanCat-u4frKdlb.js"),__vite__mapDeps([46,37,42,45]))},{path:"particle-life",meta:{type:"canvas",name:"粒子生命模拟",visable:!0},component:()=>Et(()=>import("./particleLife-4fxQqZ-5.js"),__vite__mapDeps([47,48,42,7,8]))},{path:"test",meta:{type:"canvas",name:"test",visable:!1},component:()=>Et(()=>import("./test-pjLWQMaw.js"),__vite__mapDeps([49,42]))},{path:"game-of-life",meta:{type:"canvas",name:"生命游戏",visable:!1},component:()=>Et(()=>import("./gameOfLife--0kEYUY1.js"),__vite__mapDeps([50,42]))},{path:"music-mhsb",meta:{type:"canvas",name:"我是一个快乐的鸡蛋饼",visable:!0},component:()=>Et(()=>import("./mihuanshuibo-qdeYLSFI.js"),__vite__mapDeps([51,37,52,53,42,54]))},{path:"music-rect",meta:{type:"canvas",name:"music-片片面",visable:!0},component:()=>Et(()=>import("./rect-3v8Z6wJT.js"),__vite__mapDeps([55,48,37,53,52,42,2,17,56]))},{path:"music-rect-2",meta:{type:"canvas",name:"music-重叠矩形",visable:!1},component:()=>Et(()=>import("./rect2-ItEPoeiW.js"),__vite__mapDeps([57,48,37,53,52,42,2,58]))},{path:"freq-domain",meta:{type:"canvas",name:"频率和波形",visable:!0},component:()=>Et(()=>import("./freqAndDomain-948umXDp.js"),__vite__mapDeps([59,48,37,53,52,42,60]))},{path:"github-snake",meta:{type:"canvas",name:"github贪吃蛇",visable:!0},component:()=>Et(()=>import("./githubSnake-ZRQOEa8Z.js"),__vite__mapDeps([61,48,42,62]))}]},h0={path:"/three",component:Ri,children:[{path:"threeTemplate",meta:{type:"threejs",name:"threejs模板",visable:!1},component:()=>Et(()=>import("./THREE-template-eVBALcRi.js"),__vite__mapDeps([63,8,64,65,66]))},{path:"cubeLine",meta:{type:"threejs",name:"cubeLine",visable:!1},component:()=>Et(()=>import("./CubeLine-iJNkXvCk.js"),__vite__mapDeps([67,64,65,8,68]))},{path:"allBufferGeo",meta:{type:"threejs",name:"allBufferGeo",visable:!1},component:()=>Et(()=>import("./AllBufferGeo-6CAAA9hY.js"),__vite__mapDeps([69,64,65,70]))},{path:"threeTextPoint",meta:{type:"threejs",name:"threeTextPoint",visable:!1},component:()=>Et(()=>import("./ThreeTextPoint--1GsndKd.js"),__vite__mapDeps([71,64,65,72]))},{path:"threeText",meta:{type:"threejs",name:"threeText",visable:!1},component:()=>Et(()=>import("./TextGeo-iPPMlDyd.js"),__vite__mapDeps([73,64,74,8,75]))},{path:"solarSystem",meta:{type:"threejs",name:"threejs太阳系",visable:!1},component:()=>Et(()=>import("./SolarSystem-OTmyyE4J.js"),__vite__mapDeps([76,77,78,64,65,7,8]))},{path:"glowBall",meta:{type:"threejs",name:"glowBall",visable:!1},component:()=>Et(()=>import("./GlowBall-Ucqc5Uxh.js"),__vite__mapDeps([79,8,65,77,78]))},{path:"atom",meta:{type:"threejs",name:"原子",visable:!1},component:()=>Et(()=>import("./Atom-2ta7uGqH.js"),__vite__mapDeps([80,64,65,77,78,7,8,81]))},{path:"lavaBall",meta:{type:"threejs",name:"lavaBall",visable:!1},component:()=>Et(()=>import("./LavaBall-lK5BSe4p.js"),__vite__mapDeps([82,8,64,65,77,83]))},{path:"lensFlares",meta:{type:"threejs",name:"透镜光线",visable:!1},component:()=>Et(()=>import("./LensFlares-RucCOiMA.js"),__vite__mapDeps([84,8,64,74,85]))},{path:"crush-pic",meta:{type:"threejs",name:"破碎图片-threejs",visable:!0},component:()=>Et(()=>import("./crushPic-L8TUyyBv.js"),__vite__mapDeps([86,26,27,87,65,42,1]))},{path:"flowfield-point-3d",meta:{type:"threejs",name:"flowField-粒子-3D",visable:!0},component:()=>Et(()=>import("./flowFieldPoint3D-bkVyPX73.js"),__vite__mapDeps([88,37,48,87,65,42,89]))},{path:"particle-life",meta:{type:"threejs",name:"粒子生命模拟",visable:!0},component:()=>Et(()=>import("./particleLife-xbDE16FL.js"),__vite__mapDeps([90,48,87,65,42,89]))}]},f0={path:"/p5",component:Ri,children:[{path:"flowFieldLine2",meta:{name:"flowFieldLine2",visable:!1},component:()=>Et(()=>import("./FlowFieldLine2-vdizqFqv.js"),__vite__mapDeps([91,2,5,6,92,93,33,94,40,17]))},{path:"maze",meta:{name:"随机迷宫",visable:!0},component:()=>Et(()=>import("./Maze-s_u2_bIo.js"),__vite__mapDeps([95,5,6,92,2,93]))},{path:"gradientLine",meta:{name:"gradientLine",visable:!1},component:()=>Et(()=>import("./GradientLine-gVEWmaHn.js"),__vite__mapDeps([96,5,6,92,2,93,94,40,17]))},{path:"codeRain",meta:{name:"codeRain",visable:!1},component:()=>Et(()=>import("./CodeRain-URz5fCKQ.js"),__vite__mapDeps([97,5,6,92,2,93]))},{path:"cross",meta:{name:"cross",visable:!1},component:()=>Et(()=>import("./Cross-nC1M_jgZ.js"),__vite__mapDeps([98,2,5,6,92,93]))},{path:"musicRect",meta:{name:"musicRect",visable:!1},component:()=>Et(()=>import("./MusicRect-DjQD8uSU.js"),__vite__mapDeps([99,2,100,52,101,92,93,102]))},{path:"musicCircle",meta:{name:"musicCircle",visable:!1},component:()=>Et(()=>import("./MusicCircle-wjiQy6tl.js"),__vite__mapDeps([103,2,92,93,100,52,101,102,17]))},{path:"bore",meta:{name:"般若心经",visable:!0},component:()=>Et(()=>import("./BoRe-LIZek1yj.js"),__vite__mapDeps([104,2,92,93,105]))},{path:"tangram",meta:{name:"七巧板",visable:!0},component:()=>Et(()=>import("./Tangram-Qn38zbqW.js"),__vite__mapDeps([106,92,2,93]))},{path:"terrain",meta:{name:"terrain",visable:!1},component:()=>Et(()=>import("./Terrain-ZH5Noy1t.js"),__vite__mapDeps([107,108,2,109,110]))},{path:"disperseParticle",meta:{name:"disperseParticle",visable:!1},component:()=>Et(()=>import("./DisperseParticle-Tt1BNnRG.js"),__vite__mapDeps([111,2,108,109,112]))},{path:"disperseParticle2",meta:{name:"disperseParticle2",visable:!1},component:()=>Et(()=>import("./DisperseParticle2--67uT_Km.js"),__vite__mapDeps([113,2,108,109,114]))},{path:"snake",meta:{name:"贪吃蛇",visable:!0},component:()=>Et(()=>import("./Snake-bkfNFXqJ.js"),__vite__mapDeps([115,2,108,109]))},{path:"lightBall",meta:{name:"lightBall",visable:!1},component:()=>Et(()=>import("./LightBall-USEChCxP.js"),__vite__mapDeps([116,108,2,109,117]))},{path:"flappyBird",meta:{name:"像素鸟(canvas)",visable:!0},component:()=>Et(()=>import("./FlappyBird-514-wT_Y.js"),__vite__mapDeps([118,108,2,109,119]))},{path:"fireWork",meta:{name:"fireWork",visable:!1},component:()=>Et(()=>import("./Firework-SD1UJvfL.js"),__vite__mapDeps([120,2,108,109]))},{path:"pixelPicture",meta:{name:"图片像素化",visable:!0},component:()=>Et(()=>import("./PixelPicture-nHHPbVKI.js"),__vite__mapDeps([121,2,7,8,108,109,122]))}]},d0={path:"/svg",component:Ri,children:[{path:"tiktok",meta:{name:"tiktok_anima",visable:!1,type:"svg"},component:()=>Et(()=>import("./index-L2jebRlW.js"),__vite__mapDeps([]))},{path:"circuit-board",meta:{name:"电路板-svg",visable:!0,type:"svg"},component:()=>Et(()=>import("./circuitBoard-fNPFxwu8.js"),__vite__mapDeps([123,124]))},{path:"circuit-board-2",meta:{name:"电路板-svg-蓝",visable:!0,type:"svg"},component:()=>Et(()=>import("./circuitBoard2-1pK0b6eH.js"),__vite__mapDeps([125,126]))}]},p0={path:"/shader",component:Ri,children:[{path:"music-domainwrapping",meta:{name:"music-domainwrapping",visable:!1},component:()=>Et(()=>import("./index-RUyklQRV.js"),__vite__mapDeps([127,87,65,42,100,2,52,101,17]))},{path:"texture-icon",meta:{name:"texture-icon",visable:!0},component:()=>Et(()=>import("./index-DimCXbzI.js"),__vite__mapDeps([128,87,65,42]))},{path:"gamepad",meta:{name:"icon-gamepad",visable:!1},component:()=>Et(()=>import("./index-0o1ONTvD.js"),__vite__mapDeps([129,87,65,42]))},{path:"music",meta:{name:"音乐像素",visable:!1,type:"threejs"},component:()=>Et(()=>import("./index-HhYnfKw3.js"),__vite__mapDeps([130,87,65,42,52,53,131]))}]},m0={class:"h-full flex justify-center items-center"},g0=Pe("h1",{class:"text-6xl"},"NOT FOUND",-1),_0=[g0],v0=Li({__name:"NotFound",setup(n){return(t,e)=>(je(),Pn("div",m0,_0))}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="146",FS={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zS={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},x0=0,Ic=1,y0=2,Tf=1,M0=2,Fs=3,fs=0,Ye=1,Kn=2,ti=0,rs=1,Ba=2,Oc=3,Nc=4,b0=5,Zi=100,w0=101,S0=102,Fc=103,zc=104,A0=200,E0=201,T0=202,C0=203,Cf=204,Pf=205,P0=206,L0=207,R0=208,D0=209,I0=210,O0=0,N0=1,F0=2,Ua=3,z0=4,B0=5,U0=6,G0=7,bo=0,V0=1,k0=2,Ln=0,H0=1,W0=2,q0=3,j0=4,X0=5,Lf=300,ds=301,ps=302,Ga=303,Va=304,wo=306,ka=1e3,tn=1001,Ha=1002,be=1003,Bc=1004,Uc=1005,qe=1006,Y0=1007,So=1008,Ei=1009,K0=1010,Q0=1011,Rf=1012,J0=1013,xi=1014,yi=1015,Zs=1016,Z0=1017,$0=1018,os=1020,t_=1021,e_=1022,en=1023,n_=1024,i_=1025,Si=1026,ms=1027,s_=1028,r_=1029,o_=1030,a_=1031,l_=1033,Bo=33776,Uo=33777,Go=33778,Vo=33779,Gc=35840,Vc=35841,kc=35842,Hc=35843,c_=36196,Wc=37492,qc=37496,jc=37808,Xc=37809,Yc=37810,Kc=37811,Qc=37812,Jc=37813,Zc=37814,$c=37815,tu=37816,eu=37817,nu=37818,iu=37819,su=37820,ru=37821,ou=36492,Ti=3e3,oe=3001,u_=3200,h_=3201,Ao=0,f_=1,Tn="srgb",Mi="srgb-linear",ko=7680,d_=519,Wa=35044,BS=35048,au="300 es",qa=1035;class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,lu=180/Math.PI;function Rn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function ve(n,t,e){return Math.max(t,Math.min(e,n))}function p_(n,t){return(n%t+t)%t}function Ho(n,t,e){return(1-e)*n+e*t}function cu(n){return(n&n-1)===0&&n!==0}function ja(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],m=s[0],d=s[3],_=s[6],y=s[1],x=s[4],v=s[7],E=s[2],S=s[5],R=s[8];return r[0]=o*m+a*y+l*E,r[3]=o*d+a*x+l*S,r[6]=o*_+a*v+l*R,r[1]=c*m+u*y+h*E,r[4]=c*d+u*x+h*S,r[7]=c*_+u*v+h*R,r[2]=f*m+p*y+g*E,r[5]=f*d+p*x+g*S,r[8]=f*_+p*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=h*m,t[1]=(s*c-u*i)*m,t[2]=(a*i-s*o)*m,t[3]=f*m,t[4]=(u*e-s*l)*m,t[5]=(s*r-a*e)*m,t[6]=p*m,t[7]=(i*l-c*e)*m,t[8]=(o*e-i*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=e*r+i*l,s[3]=e*o+i*c,s[6]=e*a+i*u,s[1]=-i*r+e*l,s[4]=-i*o+e*c,s[7]=-i*a+e*u,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Df(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Wo={[Tn]:{[Mi]:Ai},[Mi]:{[Tn]:$r}},Ke={legacyMode:!0,get workingColorSpace(){return Mi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.legacyMode||t===e||!t||!e)return n;if(Wo[t]&&Wo[t][e]!==void 0){const i=Wo[t][e];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}},If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ue={r:0,g:0,b:0},Qe={h:0,s:0,l:0},pr={h:0,s:0,l:0};function qo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function mr(n,t){return t.r=n.r,t.g=n.g,t.b=n.b,t}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ke.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Mi){return this.r=t,this.g=e,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Mi){if(t=p_(t,1),e=ve(e,0,1),i=ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=qo(o,r,t+1/3),this.g=qo(o,r,t),this.b=qo(o,r,t-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(t,e=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ke.toWorkingColorSpace(this,e),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ke.toWorkingColorSpace(this,e),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,u,e)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ke.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ke.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Tn){const i=If[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return Ke.fromWorkingColorSpace(mr(this,ue),t),ve(ue.r*255,0,255)<<16^ve(ue.g*255,0,255)<<8^ve(ue.b*255,0,255)<<0}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Mi){Ke.fromWorkingColorSpace(mr(this,ue),e);const i=ue.r,s=ue.g,r=ue.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Mi){return Ke.fromWorkingColorSpace(mr(this,ue),e),t.r=ue.r,t.g=ue.g,t.b=ue.b,t}getStyle(t=Tn){return Ke.fromWorkingColorSpace(mr(this,ue),t),t!==Tn?`color(${t} ${ue.r} ${ue.g} ${ue.b})`:`rgb(${ue.r*255|0},${ue.g*255|0},${ue.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Qe),Qe.h+=t,Qe.s+=e,Qe.l+=i,this.setHSL(Qe.h,Qe.s,Qe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qe),t.getHSL(pr);const i=Ho(Qe.h,pr.h,e),s=Ho(Qe.s,pr.s,e),r=Ho(Qe.l,pr.l,e);return this.setHSL(i,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ht.NAMES=If;let Fi;class Of{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=$s("canvas")),Fi.width=t.width,Fi.height=t.height;const i=Fi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$s("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ai(e[i]/255)*255):e[i]=Ai(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Nf{constructor(t=null){this.isSource=!0,this.uuid=Rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jo(s[o].image)):r.push(jo(s[o]))}else r=jo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m_=0;class Ge extends ys{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,i=tn,s=tn,r=qe,o=So,a=en,l=Ei,c=1,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Rn(),this.name="",this.source=new Nf(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ka:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ka:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Lf;class ne{constructor(t=0,e=0,i=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(p+1)/2,E=(_+1)/2,S=(u+f)/4,R=(h+m)/4,M=(g+d)/4;return x>v&&x>E?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=S/i,r=R/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=M/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=R/r,s=M/r),this.set(i,s,r,e),this}let y=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(h-m)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ci extends ys{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};this.texture=new Ge(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:qe,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ff extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g_ extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-a;const _=l*f+c*p+u*g+h*m,y=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const E=Math.sqrt(x),S=Math.atan2(E,_*y);d=Math.sin(d*S)/E,a=Math.sin(a*S)/E}const v=a*y;if(l=l*d+f*v,c=c*d+p*v,u=u*d+g*v,h=h*d+m*v,d===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*s-a*i,u=l*i+a*e-r*s,h=l*s+r*i-o*e,f=-r*e-o*i-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new L,uu=new rr;class Ms{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<e&&(e=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<e&&(e=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,i,s),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)ci.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ci)}else i.boundingBox===null&&i.computeBoundingBox(),Yo.copy(i.boundingBox),Yo.applyMatrix4(t.matrixWorld),this.union(Yo);const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),gr.subVectors(this.max,Cs),zi.subVectors(t.a,Cs),Bi.subVectors(t.b,Cs),Ui.subVectors(t.c,Cs),Un.subVectors(Bi,zi),Gn.subVectors(Ui,Bi),ui.subVectors(zi,Ui);let e=[0,-Un.z,Un.y,0,-Gn.z,Gn.y,0,-ui.z,ui.y,Un.z,0,-Un.x,Gn.z,0,-Gn.x,ui.z,0,-ui.x,-Un.y,Un.x,0,-Gn.y,Gn.x,0,-ui.y,ui.x,0];return!Ko(e,zi,Bi,Ui,gr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,zi,Bi,Ui,gr))?!1:(_r.crossVectors(Un,Gn),e=[_r.x,_r.y,_r.z],Ko(e,zi,Bi,Ui,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ci.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new L,new L,new L,new L,new L,new L,new L,new L],ci=new L,Yo=new Ms,zi=new L,Bi=new L,Ui=new L,Un=new L,Gn=new L,ui=new L,Cs=new L,gr=new L,_r=new L,hi=new L;function Ko(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hi.fromArray(n,r);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const __=new Ms,Ps=new L,Qo=new L;class or{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):__.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Qo)),this.expandByPoint(Ps.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new L,Jo=new L,vr=new L,Vn=new L,Zo=new L,xr=new L,$o=new L;class Sl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.direction).multiplyScalar(e).add(this.origin),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Jo.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Jo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vr),a=Vn.dot(this.direction),l=-Vn.dot(vr),c=Vn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(vr).multiplyScalar(f).add(Jo),p}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const i=Mn.dot(this.direction),s=Mn.dot(Mn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,i,s,r){Zo.subVectors(e,t),xr.subVectors(i,t),$o.crossVectors(Zo,xr);let o=this.direction.dot($o),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot(xr.crossVectors(Vn,xr));if(l<0)return null;const c=a*this.direction.dot(Zo.cross(Vn));if(c<0||l+c>o)return null;const u=-a*Vn.dot($o);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,m,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,m=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;e[0]=f+m*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;e[0]=f-m*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,m=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+m,e[1]=l*h,e[5]=m*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;e[0]=l*u,e[4]=m-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-m*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+m,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=m*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(v_,t,x_)}lookAt(t,e,i){const s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),kn.crossVectors(i,Fe),kn.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),kn.crossVectors(i,Fe)),kn.normalize(),yr.crossVectors(Fe,kn),s[0]=kn.x,s[4]=yr.x,s[8]=Fe.x,s[1]=kn.y,s[5]=yr.y,s[9]=Fe.y,s[2]=kn.z,s[6]=yr.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],m=i[6],d=i[10],_=i[14],y=i[3],x=i[7],v=i[11],E=i[15],S=s[0],R=s[4],M=s[8],C=s[12],D=s[1],X=s[5],nt=s[9],V=s[13],O=s[2],Y=s[6],K=s[10],$=s[14],j=s[3],G=s[7],k=s[11],ut=s[15];return r[0]=o*S+a*D+l*O+c*j,r[4]=o*R+a*X+l*Y+c*G,r[8]=o*M+a*nt+l*K+c*k,r[12]=o*C+a*V+l*$+c*ut,r[1]=u*S+h*D+f*O+p*j,r[5]=u*R+h*X+f*Y+p*G,r[9]=u*M+h*nt+f*K+p*k,r[13]=u*C+h*V+f*$+p*ut,r[2]=g*S+m*D+d*O+_*j,r[6]=g*R+m*X+d*Y+_*G,r[10]=g*M+m*nt+d*K+_*k,r[14]=g*C+m*V+d*$+_*ut,r[3]=y*S+x*D+v*O+E*j,r[7]=y*R+x*X+v*Y+E*G,r[11]=y*M+x*nt+v*K+E*k,r[15]=y*C+x*V+v*$+E*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],m=t[7],d=t[11],_=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+m*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+d*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+_*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],m=t[13],d=t[14],_=t[15],y=h*d*c-m*f*c+m*l*p-a*d*p-h*l*_+a*f*_,x=g*f*c-u*d*c-g*l*p+o*d*p+u*l*_-o*f*_,v=u*m*c-g*h*c+g*a*p-o*m*p-u*a*_+o*h*_,E=g*h*l-u*m*l-g*a*f+o*m*f+u*a*d-o*h*d,S=e*y+i*x+s*v+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return t[0]=y*R,t[1]=(m*f*r-h*d*r-m*s*p+i*d*p+h*s*_-i*f*_)*R,t[2]=(a*d*r-m*l*r+m*s*c-i*d*c-a*s*_+i*l*_)*R,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*R,t[4]=x*R,t[5]=(u*d*r-g*f*r+g*s*p-e*d*p-u*s*_+e*f*_)*R,t[6]=(g*l*r-o*d*r-g*s*c+e*d*c+o*s*_-e*l*_)*R,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*R,t[8]=v*R,t[9]=(g*h*r-u*m*r-g*i*p+e*m*p+u*i*_-e*h*_)*R,t[10]=(o*m*r-g*a*r+g*i*c-e*m*c-o*i*_+e*a*_)*R,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*R,t[12]=E*R,t[13]=(u*m*s-g*h*s+g*i*f-e*m*f-u*i*d+e*h*d)*R,t[14]=(g*a*s-o*m*s-g*i*l+e*m*l+o*i*d-e*a*d)*R,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,m=o*u,d=o*h,_=a*h,y=l*c,x=l*u,v=l*h,E=i.x,S=i.y,R=i.z;return s[0]=(1-(m+_))*E,s[1]=(p+v)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(f+_))*S,s[6]=(d+y)*S,s[7]=0,s[8]=(g+x)*R,s[9]=(d-y)*R,s[10]=(1-(f+m))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const c=1/r,u=1/o,h=1/a;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(i-s),u=(e+t)/(e-t),h=(i+s)/(i-s),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,r,o){const a=this.elements,l=1/(e-t),c=1/(i-s),u=1/(o-r),h=(e+t)*l,f=(i+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Gi=new L,Je=new $t,v_=new L(0,0,0),x_=new L(1,1,1),kn=new L,yr=new L,Fe=new L,hu=new $t,fu=new rr;class ar{constructor(t=0,e=0,i=0,s=ar.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fu.setFromEuler(this),this.setFromQuaternion(fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ar.DefaultOrder="XYZ";ar.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class zf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let y_=0;const du=new L,Vi=new rr,bn=new $t,Mr=new L,Ls=new L,M_=new L,b_=new rr,pu=new L(1,0,0),mu=new L(0,1,0),gu=new L(0,0,1),w_={type:"added"},_u={type:"removed"};class _e extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DefaultUp.clone();const t=new L,e=new ar,i=new rr,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Xe}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=_e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_e.DefaultMatrixWorldAutoUpdate,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(pu,t)}rotateY(t){return this.rotateOnAxis(mu,t)}rotateZ(t){return this.rotateOnAxis(gu,t)}translateOnAxis(t,e){return du.copy(t).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pu,t)}translateY(t){return this.translateOnAxis(mu,t)}translateZ(t){return this.translateOnAxis(gu,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mr.copy(t):Mr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Ls,Mr,this.up):bn.lookAt(Mr,Ls,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(bn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(w_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_u)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(_u)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,M_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,b_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}_e.DefaultUp=new L(0,1,0);_e.DefaultMatrixAutoUpdate=!0;_e.DefaultMatrixWorldAutoUpdate=!0;const Ze=new L,wn=new L,ta=new L,Sn=new L,ki=new L,Hi=new L,vu=new L,ea=new L,na=new L,ia=new L;class dn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ze.subVectors(t,e),s.cross(Ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ze.subVectors(s,e),wn.subVectors(i,e),ta.subVectors(t,e);const o=Ze.dot(Ze),a=Ze.dot(wn),l=Ze.dot(ta),c=wn.dot(wn),u=wn.dot(ta),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Sn),l.set(0,0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l}static isFrontFacing(t,e,i,s){return Ze.subVectors(i,e),wn.subVectors(t,e),Ze.cross(wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Ze.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return dn.getUV(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ki.subVectors(s,i),Hi.subVectors(r,i),ea.subVectors(t,i);const l=ki.dot(ea),c=Hi.dot(ea);if(l<=0&&c<=0)return e.copy(i);na.subVectors(t,s);const u=ki.dot(na),h=Hi.dot(na);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ki,o);ia.subVectors(t,r);const p=ki.dot(ia),g=Hi.dot(ia);if(g>=0&&p<=g)return e.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Hi,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return vu.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(vu,a);const _=1/(d+m+f);return o=m*_,a=f*_,e.copy(i).addScaledVector(ki,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let S_=0;class Nn extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=rs,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cf,this.blendDst=Pf,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const s=this[e];if(s===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==fs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Al extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new L,br=new _t;class De{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=Wa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wa&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Bf extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Uf extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class It extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}}let A_=0;const He=new $t,sa=new _e,Wi=new L,ze=new Ms,Rs=new Ms,me=new L;class te extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Df(t)?Uf:Bf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,i){return He.makeTranslation(t,e,i),this.applyMatrix4(He),this}scale(t,e,i){return He.makeScale(t,e,i),this.applyMatrix4(He),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(ze.min,Rs.min),ze.expandByPoint(me),me.addVectors(ze.max,Rs.max),ze.expandByPoint(me)):(ze.expandByPoint(Rs.min),ze.expandByPoint(Rs.max))}ze.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)me.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(t,c),me.add(Wi)),s=Math.max(s,i.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new L,u[D]=new L;const h=new L,f=new L,p=new L,g=new _t,m=new _t,d=new _t,_=new L,y=new L;function x(D,X,nt){h.fromArray(s,D*3),f.fromArray(s,X*3),p.fromArray(s,nt*3),g.fromArray(o,D*2),m.fromArray(o,X*2),d.fromArray(o,nt*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const V=1/(m.x*d.y-d.x*m.y);isFinite(V)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(V),y.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(V),c[D].add(_),c[X].add(_),c[nt].add(_),u[D].add(y),u[X].add(y),u[nt].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let D=0,X=v.length;D<X;++D){const nt=v[D],V=nt.start,O=nt.count;for(let Y=V,K=V+O;Y<K;Y+=3)x(i[Y+0],i[Y+1],i[Y+2])}const E=new L,S=new L,R=new L,M=new L;function C(D){R.fromArray(r,D*3),M.copy(R);const X=c[D];E.copy(X),E.sub(R.multiplyScalar(R.dot(X))).normalize(),S.crossVectors(M,X);const V=S.dot(u[D])<0?-1:1;l[D*4]=E.x,l[D*4+1]=E.y,l[D*4+2]=E.z,l[D*4+3]=V}for(let D=0,X=v.length;D<X;++D){const nt=v[D],V=nt.start,O=nt.count;for(let Y=V,K=V+O;Y<K;Y+=3)C(i[Y+0]),C(i[Y+1]),C(i[Y+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),m=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new De(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new te,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const xu=new $t,qi=new Sl,ra=new or,Hn=new L,Wn=new L,qn=new L,oa=new L,aa=new L,la=new L,wr=new L,Sr=new L,Ar=new L,Er=new _t,Tr=new _t,Cr=new _t,ca=new L,Pr=new L;class sn extends _e{constructor(t=new te,e=new Al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),t.ray.intersectsSphere(ra)===!1)||(xu.copy(r).invert(),qi.copy(t.ray).applyMatrix4(xu),i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],y=s[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let E=x,S=v;E<S;E+=3){const R=a.getX(E),M=a.getX(E+1),C=a.getX(E+2);o=Lr(this,y,t,qi,l,c,u,h,f,R,M,C),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,y=d;_<y;_+=3){const x=a.getX(_),v=a.getX(_+1),E=a.getX(_+2);o=Lr(this,s,t,qi,l,c,u,h,f,x,v,E),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],y=s[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=x,S=v;E<S;E+=3){const R=E,M=E+1,C=E+2;o=Lr(this,y,t,qi,l,c,u,h,f,R,M,C),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,y=d;_<y;_+=3){const x=_,v=_+1,E=_+2;o=Lr(this,s,t,qi,l,c,u,h,f,x,v,E),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function E_(n,t,e,i,s,r,o,a){let l;if(t.side===Ye?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side!==Kn,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:n}}function Lr(n,t,e,i,s,r,o,a,l,c,u,h){Hn.fromBufferAttribute(s,c),Wn.fromBufferAttribute(s,u),qn.fromBufferAttribute(s,h);const f=n.morphTargetInfluences;if(r&&f){wr.set(0,0,0),Sr.set(0,0,0),Ar.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],_=r[g];d!==0&&(oa.fromBufferAttribute(_,c),aa.fromBufferAttribute(_,u),la.fromBufferAttribute(_,h),o?(wr.addScaledVector(oa,d),Sr.addScaledVector(aa,d),Ar.addScaledVector(la,d)):(wr.addScaledVector(oa.sub(Hn),d),Sr.addScaledVector(aa.sub(Wn),d),Ar.addScaledVector(la.sub(qn),d)))}Hn.add(wr),Wn.add(Sr),qn.add(Ar)}n.isSkinnedMesh&&(n.boneTransform(c,Hn),n.boneTransform(u,Wn),n.boneTransform(h,qn));const p=E_(n,t,e,i,Hn,Wn,qn,ca);if(p){a&&(Er.fromBufferAttribute(a,c),Tr.fromBufferAttribute(a,u),Cr.fromBufferAttribute(a,h),p.uv=dn.getUV(ca,Hn,Wn,qn,Er,Tr,Cr,new _t)),l&&(Er.fromBufferAttribute(l,c),Tr.fromBufferAttribute(l,u),Cr.fromBufferAttribute(l,h),p.uv2=dn.getUV(ca,Hn,Wn,qn,Er,Tr,Cr,new _t));const g={a:c,b:u,c:h,normal:new L,materialIndex:0};dn.getNormal(Hn,Wn,qn,g.normal),p.face=g}return p}class lr extends te{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function g(m,d,_,y,x,v,E,S,R,M,C){const D=v/R,X=E/M,nt=v/2,V=E/2,O=S/2,Y=R+1,K=M+1;let $=0,j=0;const G=new L;for(let k=0;k<K;k++){const ut=k*X-V;for(let Z=0;Z<Y;Z++){const vt=Z*D-nt;G[m]=vt*y,G[d]=ut*x,G[_]=O,c.push(G.x,G.y,G.z),G[m]=0,G[d]=0,G[_]=S>0?1:-1,u.push(G.x,G.y,G.z),h.push(Z/R),h.push(1-k/M),$+=1}}for(let k=0;k<M;k++)for(let ut=0;ut<R;ut++){const Z=f+ut+Y*k,vt=f+ut+Y*(k+1),At=f+(ut+1)+Y*(k+1),W=f+(ut+1)+Y*k;l.push(Z,vt,W),l.push(vt,At,W),j+=6}a.addGroup(p,j,C),p+=j,f+=$}}static fromJSON(t){return new lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ce(n){const t={};for(let e=0;e<n.length;e++){const i=gs(n[e]);for(const s in i)t[s]=i[s]}return t}function T_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}const C_={clone:gs,merge:Ce};var P_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P_,this.fragmentShader=L_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=T_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gf extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends Gf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lu*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=90,Xi=1;class R_ extends _e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new Be(ji,Xi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(1,0,0)),this.add(s);const r=new Be(ji,Xi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const o=new Be(ji,Xi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);const a=new Be(ji,Xi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new Be(ji,Xi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new Be(ji,Xi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Ln,t.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,s),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=p,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Vf extends Ge{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class D_ extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Vf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new lr(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:ti});r.uniforms.tEquirect.value=e;const o=new sn(s,r),a=e.minFilter;return e.minFilter===So&&(e.minFilter=qe),new R_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ua=new L,I_=new L,O_=new Xe;class di{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ua.subVectors(i,e).cross(I_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(ua),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(i).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||O_.getNormalMatrix(t),s=this.coplanarPoint(ua).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new or,Rr=new L;class El{constructor(t=new di,e=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],p=i[9],g=i[10],m=i[11],d=i[12],_=i[13],y=i[14],x=i[15];return e[0].setComponents(a-s,h-l,m-f,x-d).normalize(),e[1].setComponents(a+s,h+l,m+f,x+d).normalize(),e[2].setComponents(a+r,h+c,m+p,x+_).normalize(),e[3].setComponents(a-r,h-c,m-p,x-_).normalize(),e[4].setComponents(a-o,h-u,m-g,x-y).normalize(),e[5].setComponents(a+o,h+u,m+g,x+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Rr.x=s.normal.x>0?t.max.x:t.min.x,Rr.y=s.normal.y>0?t.max.y:t.min.y,Rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function N_(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,f):(e?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Tl extends te{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const y=_*f-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-y,0),m.push(0,0,1),d.push(x/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const x=y+c*_,v=y+c*(_+1),E=y+1+c*(_+1),S=y+1+c*_;p.push(x,v,S),p.push(v,E,S)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(d,2))}static fromJSON(t){return new Tl(t.width,t.height,t.widthSegments,t.heightSegments)}}var F_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,U_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k_="vec3 transformed = vec3( position );",H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ev=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,nv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ov=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",cv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_v=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Sv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Av=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Lv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Rv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Qv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,gx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Tx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Cx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Px=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Lx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Rx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Dx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ey=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ny=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ry=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,fy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ut={alphamap_fragment:F_,alphamap_pars_fragment:z_,alphatest_fragment:B_,alphatest_pars_fragment:U_,aomap_fragment:G_,aomap_pars_fragment:V_,begin_vertex:k_,beginnormal_vertex:H_,bsdfs:W_,iridescence_fragment:q_,bumpmap_pars_fragment:j_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:Y_,clipping_planes_pars_vertex:K_,clipping_planes_vertex:Q_,color_fragment:J_,color_pars_fragment:Z_,color_pars_vertex:$_,color_vertex:tv,common:ev,cube_uv_reflection_fragment:nv,defaultnormal_vertex:iv,displacementmap_pars_vertex:sv,displacementmap_vertex:rv,emissivemap_fragment:ov,emissivemap_pars_fragment:av,encodings_fragment:lv,encodings_pars_fragment:cv,envmap_fragment:uv,envmap_common_pars_fragment:hv,envmap_pars_fragment:fv,envmap_pars_vertex:dv,envmap_physical_pars_fragment:Av,envmap_vertex:pv,fog_vertex:mv,fog_pars_vertex:gv,fog_fragment:_v,fog_pars_fragment:vv,gradientmap_pars_fragment:xv,lightmap_fragment:yv,lightmap_pars_fragment:Mv,lights_lambert_fragment:bv,lights_lambert_pars_fragment:wv,lights_pars_begin:Sv,lights_toon_fragment:Ev,lights_toon_pars_fragment:Tv,lights_phong_fragment:Cv,lights_phong_pars_fragment:Pv,lights_physical_fragment:Lv,lights_physical_pars_fragment:Rv,lights_fragment_begin:Dv,lights_fragment_maps:Iv,lights_fragment_end:Ov,logdepthbuf_fragment:Nv,logdepthbuf_pars_fragment:Fv,logdepthbuf_pars_vertex:zv,logdepthbuf_vertex:Bv,map_fragment:Uv,map_pars_fragment:Gv,map_particle_fragment:Vv,map_particle_pars_fragment:kv,metalnessmap_fragment:Hv,metalnessmap_pars_fragment:Wv,morphcolor_vertex:qv,morphnormal_vertex:jv,morphtarget_pars_vertex:Xv,morphtarget_vertex:Yv,normal_fragment_begin:Kv,normal_fragment_maps:Qv,normal_pars_fragment:Jv,normal_pars_vertex:Zv,normal_vertex:$v,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:sx,output_fragment:rx,packing:ox,premultiplied_alpha_fragment:ax,project_vertex:lx,dithering_fragment:cx,dithering_pars_fragment:ux,roughnessmap_fragment:hx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:_x,skinning_pars_vertex:vx,skinning_vertex:xx,skinnormal_vertex:yx,specularmap_fragment:Mx,specularmap_pars_fragment:bx,tonemapping_fragment:wx,tonemapping_pars_fragment:Sx,transmission_fragment:Ax,transmission_pars_fragment:Ex,uv_pars_fragment:Tx,uv_pars_vertex:Cx,uv_vertex:Px,uv2_pars_fragment:Lx,uv2_pars_vertex:Rx,uv2_vertex:Dx,worldpos_vertex:Ix,background_vert:Ox,background_frag:Nx,backgroundCube_vert:Fx,backgroundCube_frag:zx,cube_vert:Bx,cube_frag:Ux,depth_vert:Gx,depth_frag:Vx,distanceRGBA_vert:kx,distanceRGBA_frag:Hx,equirect_vert:Wx,equirect_frag:qx,linedashed_vert:jx,linedashed_frag:Xx,meshbasic_vert:Yx,meshbasic_frag:Kx,meshlambert_vert:Qx,meshlambert_frag:Jx,meshmatcap_vert:Zx,meshmatcap_frag:$x,meshnormal_vert:ty,meshnormal_frag:ey,meshphong_vert:ny,meshphong_frag:iy,meshphysical_vert:sy,meshphysical_frag:ry,meshtoon_vert:oy,meshtoon_frag:ay,points_vert:ly,points_frag:cy,shadow_vert:uy,shadow_frag:hy,sprite_vert:fy,sprite_frag:dy},yt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xe},uv2Transform:{value:new Xe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}}},hn={basic:{uniforms:Ce([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ce([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ce([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ce([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ce([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ce([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ce([yt.points,yt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ce([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ce([yt.common,yt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ce([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ce([yt.sprite,yt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ce([yt.common,yt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ce([yt.lights,yt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};hn.physical={uniforms:Ce([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _t(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};function py(n,t,e,i,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(d,_){let y=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x));const v=n.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?m(a,l):x&&x.isColor&&(m(x,1),y=!0),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===wo)?(u===void 0&&(u=new sn(new lr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:gs(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new sn(new Tl(2,2),new ii({name:"BackgroundMaterial",uniforms:gs(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,_){i.buffers.color.setClear(d.r,d.g,d.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(a,l)},render:g}}function my(n,t,e,i){const s=n.getParameter(34921),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(O,Y,K,$,j){let G=!1;if(o){const k=m($,K,Y);c!==k&&(c=k,p(c.object)),G=_(O,$,K,j),G&&y(O,$,K,j)}else{const k=Y.wireframe===!0;(c.geometry!==$.id||c.program!==K.id||c.wireframe!==k)&&(c.geometry=$.id,c.program=K.id,c.wireframe=k,G=!0)}j!==null&&e.update(j,34963),(G||u)&&(u=!1,M(O,Y,K,$),j!==null&&n.bindBuffer(34963,e.get(j).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,Y,K){const $=K.wireframe===!0;let j=a[O.id];j===void 0&&(j={},a[O.id]=j);let G=j[Y.id];G===void 0&&(G={},j[Y.id]=G);let k=G[$];return k===void 0&&(k=d(f()),G[$]=k),k}function d(O){const Y=[],K=[],$=[];for(let j=0;j<s;j++)Y[j]=0,K[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:K,attributeDivisors:$,object:O,attributes:{},index:null}}function _(O,Y,K,$){const j=c.attributes,G=Y.attributes;let k=0;const ut=K.getAttributes();for(const Z in ut)if(ut[Z].location>=0){const At=j[Z];let W=G[Z];if(W===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),At===void 0||At.attribute!==W||W&&At.data!==W.data)return!0;k++}return c.attributesNum!==k||c.index!==$}function y(O,Y,K,$){const j={},G=Y.attributes;let k=0;const ut=K.getAttributes();for(const Z in ut)if(ut[Z].location>=0){let At=G[Z];At===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(At=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(At=O.instanceColor));const W={};W.attribute=At,At&&At.data&&(W.data=At.data),j[Z]=W,k++}c.attributes=j,c.attributesNum=k,c.index=$}function x(){const O=c.newAttributes;for(let Y=0,K=O.length;Y<K;Y++)O[Y]=0}function v(O){E(O,0)}function E(O,Y){const K=c.newAttributes,$=c.enabledAttributes,j=c.attributeDivisors;K[O]=1,$[O]===0&&(n.enableVertexAttribArray(O),$[O]=1),j[O]!==Y&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Y),j[O]=Y)}function S(){const O=c.newAttributes,Y=c.enabledAttributes;for(let K=0,$=Y.length;K<$;K++)Y[K]!==O[K]&&(n.disableVertexAttribArray(K),Y[K]=0)}function R(O,Y,K,$,j,G){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(O,Y,K,j,G):n.vertexAttribPointer(O,Y,K,$,j,G)}function M(O,Y,K,$){if(i.isWebGL2===!1&&(O.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const j=$.attributes,G=K.getAttributes(),k=Y.defaultAttributeValues;for(const ut in G){const Z=G[ut];if(Z.location>=0){let vt=j[ut];if(vt===void 0&&(ut==="instanceMatrix"&&O.instanceMatrix&&(vt=O.instanceMatrix),ut==="instanceColor"&&O.instanceColor&&(vt=O.instanceColor)),vt!==void 0){const At=vt.normalized,W=vt.itemSize,z=e.get(vt);if(z===void 0)continue;const ct=z.buffer,ht=z.type,xt=z.bytesPerElement;if(vt.isInterleavedBufferAttribute){const pt=vt.data,Mt=pt.stride,b=vt.offset;if(pt.isInstancedInterleavedBuffer){for(let A=0;A<Z.locationSize;A++)E(Z.location+A,pt.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let A=0;A<Z.locationSize;A++)v(Z.location+A);n.bindBuffer(34962,ct);for(let A=0;A<Z.locationSize;A++)R(Z.location+A,W/Z.locationSize,ht,At,Mt*xt,(b+W/Z.locationSize*A)*xt)}else{if(vt.isInstancedBufferAttribute){for(let pt=0;pt<Z.locationSize;pt++)E(Z.location+pt,vt.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let pt=0;pt<Z.locationSize;pt++)v(Z.location+pt);n.bindBuffer(34962,ct);for(let pt=0;pt<Z.locationSize;pt++)R(Z.location+pt,W/Z.locationSize,ht,At,W*xt,W/Z.locationSize*pt*xt)}}else if(k!==void 0){const At=k[ut];if(At!==void 0)switch(At.length){case 2:n.vertexAttrib2fv(Z.location,At);break;case 3:n.vertexAttrib3fv(Z.location,At);break;case 4:n.vertexAttrib4fv(Z.location,At);break;default:n.vertexAttrib1fv(Z.location,At)}}}}S()}function C(){nt();for(const O in a){const Y=a[O];for(const K in Y){const $=Y[K];for(const j in $)g($[j].object),delete $[j];delete Y[K]}delete a[O]}}function D(O){if(a[O.id]===void 0)return;const Y=a[O.id];for(const K in Y){const $=Y[K];for(const j in $)g($[j].object),delete $[j];delete Y[K]}delete a[O.id]}function X(O){for(const Y in a){const K=a[Y];if(K[O.id]===void 0)continue;const $=K[O.id];for(const j in $)g($[j].object),delete $[j];delete K[O.id]}}function nt(){V(),u=!0,c!==l&&(c=l,p(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:nt,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:v,disableUnusedAttributes:S}}function gy(n,t,e,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(s)f=n,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),e.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function _y(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),y=n.getParameter(36349),x=f>0,v=o||t.has("OES_texture_float"),E=x&&v,S=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:S}}function vy(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new di,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||i!==0||s;return s=f,e=u(h,p,0),i=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,_=n.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const y=r?0:i,x=y*4;let v=_.clippingState||null;l.value=v,v=u(g,f,x,p);for(let E=0;E!==x;++E)v[E]=e[E];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<_)&&(d=new Float32Array(_));for(let x=0,v=p;x!==m;++x,v+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,d}}function xy(n){let t=new WeakMap;function e(o,a){return a===Ga?o.mapping=ds:a===Va&&(o.mapping=ps),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ga||a===Va)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new D_(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Hf extends Gf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,yu=[.125,.215,.35,.446,.526,.582],_i=20,ha=new Hf,Mu=new Ht;let fa=null;const pi=(1+Math.sqrt(5))/2,Ki=1/pi,bu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,pi,Ki),new L(0,pi,-Ki),new L(Ki,0,pi),new L(-Ki,0,pi),new L(pi,Ki,0),new L(-pi,Ki,0)];class wu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){fa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa),t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Zs,format:en,encoding:Ti,depthBuffer:!1},s=Su(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yy(r)),this._blurMaterial=My(r,t,e)}return s}_compileMaterial(t){const e=new sn(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,i,s){const a=new Be(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Mu),u.toneMapping=Ln,u.autoClear=!1;const p=new Al({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new sn(new lr,p);let m=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,m=!0):(p.color.copy(Mu),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;Dr(s,y*x,_>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ds||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Dr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ha)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bu[(s-1)%bu.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new sn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):_i;d>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${_i}`);const _=[];let y=0;for(let R=0;R<_i;++R){const M=R/m,C=Math.exp(-M*M/2);_.push(C),R===0?y+=C:R<d&&(y+=2*C)}for(let R=0;R<_.length;R++)_[R]=_[R]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[s],E=3*v*(s>x-$i?s-x+$i:0),S=4*(this._cubeSize-v);Dr(e,E,S,3*v,2*v),l.setRenderTarget(e),l.render(h,ha)}}function yy(n){const t=[],e=[],i=[];let s=n;const r=n-$i+1+yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-$i?l=yu[o-n+$i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,_=1,y=new Float32Array(m*g*p),x=new Float32Array(d*g*p),v=new Float32Array(_*g*p);for(let S=0;S<p;S++){const R=S%3*2/3-1,M=S>2?0:-1,C=[R,M,0,R+2/3,M,0,R+2/3,M+1,0,R,M,0,R+2/3,M+1,0,R,M+1,0];y.set(C,m*g*S),x.set(f,d*g*S);const D=[S,S,S,S,S,S];v.set(D,_*g*S)}const E=new te;E.setAttribute("position",new De(y,m)),E.setAttribute("uv",new De(x,d)),E.setAttribute("faceIndex",new De(v,_)),t.push(E),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Su(n,t,e){const i=new Ci(n,t,e);return i.texture.mapping=wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function My(n,t,e){const i=new Float32Array(_i),s=new L(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Au(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Eu(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function by(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ga||l===Va,u=l===ds||l===ps;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new wu(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new wu(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function wy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Sy(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)t.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let x=0,v=y.length;x<v;x+=3){const E=y[x+0],S=y[x+1],R=y[x+2];f.push(E,S,S,R,R,E)}}else{const y=g.array;m=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const E=x+0,S=x+1,R=x+2;f.push(E,S,S,R,R,E)}}const d=new(Df(f)?Uf:Bf)(f,1);d.version=m;const _=r.get(h);_&&t.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ay(n,t,e,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){n.drawElements(r,p,a,f*l),e.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,f*l,g),e.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Ey(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ty(n,t){return n[0]-t[0]}function Cy(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Py(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new ne,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=r.get(u);if(d===void 0||d.count!==m){let Y=function(){V.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let C=0;x===!0&&(C=1),v===!0&&(C=2),E===!0&&(C=3);let D=u.attributes.position.count*C,X=1;D>t.maxTextureSize&&(X=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const nt=new Float32Array(D*X*4*m),V=new Ff(nt,D,X,m);V.type=yi,V.needsUpdate=!0;const O=C*4;for(let K=0;K<m;K++){const $=S[K],j=R[K],G=M[K],k=D*X*4*K;for(let ut=0;ut<$.count;ut++){const Z=ut*O;x===!0&&(o.fromBufferAttribute($,ut),nt[k+Z+0]=o.x,nt[k+Z+1]=o.y,nt[k+Z+2]=o.z,nt[k+Z+3]=0),v===!0&&(o.fromBufferAttribute(j,ut),nt[k+Z+4]=o.x,nt[k+Z+5]=o.y,nt[k+Z+6]=o.z,nt[k+Z+7]=0),E===!0&&(o.fromBufferAttribute(G,ut),nt[k+Z+8]=o.x,nt[k+Z+9]=o.y,nt[k+Z+10]=o.z,nt[k+Z+11]=G.itemSize===4?o.w:1)}}d={count:m,texture:V,size:new _t(D,X)},r.set(u,d),u.addEventListener("dispose",Y)}let _=0;for(let x=0;x<p.length;x++)_+=p[x];const y=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=p===void 0?0:p.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];i[u.id]=m}for(let v=0;v<g;v++){const E=m[v];E[0]=v,E[1]=p[v]}m.sort(Cy);for(let v=0;v<8;v++)v<g&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Ty);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const E=a[v],S=E[0],R=E[1];S!==Number.MAX_SAFE_INTEGER&&R?(d&&u.getAttribute("morphTarget"+v)!==d[S]&&u.setAttribute("morphTarget"+v,d[S]),_&&u.getAttribute("morphNormal"+v)!==_[S]&&u.setAttribute("morphNormal"+v,_[S]),s[v]=R,y+=R):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Ly(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);return s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Wf=new Ge,qf=new Ff,jf=new g_,Xf=new Vf,Tu=[],Cu=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Ru=new Float32Array(4);function bs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function he(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Eo(n,t){let e=Cu[t];e===void 0&&(e=new Int32Array(t),Cu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ry(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2fv(this.addr,t),fe(e,t)}}function Iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;n.uniform3fv(this.addr,t),fe(e,t)}}function Oy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4fv(this.addr,t),fe(e,t)}}function Ny(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Ru.set(i),n.uniformMatrix2fv(this.addr,!1,Ru),fe(e,i)}}function Fy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),fe(e,i)}}function zy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),fe(e,i)}}function By(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Uy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2iv(this.addr,t),fe(e,t)}}function Gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3iv(this.addr,t),fe(e,t)}}function Vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4iv(this.addr,t),fe(e,t)}}function ky(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Hy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2uiv(this.addr,t),fe(e,t)}}function Wy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3uiv(this.addr,t),fe(e,t)}}function qy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4uiv(this.addr,t),fe(e,t)}}function jy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2D(t||Wf,s)}function Xy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jf,s)}function Yy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xf,s)}function Ky(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qf,s)}function Qy(n){switch(n){case 5126:return Ry;case 35664:return Dy;case 35665:return Iy;case 35666:return Oy;case 35674:return Ny;case 35675:return Fy;case 35676:return zy;case 5124:case 35670:return By;case 35667:case 35671:return Uy;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return ky;case 36294:return Hy;case 36295:return Wy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return Ky}}function Jy(n,t){n.uniform1fv(this.addr,t)}function Zy(n,t){const e=bs(t,this.size,2);n.uniform2fv(this.addr,e)}function $y(n,t){const e=bs(t,this.size,3);n.uniform3fv(this.addr,e)}function tM(n,t){const e=bs(t,this.size,4);n.uniform4fv(this.addr,e)}function eM(n,t){const e=bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function nM(n,t){const e=bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function iM(n,t){const e=bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sM(n,t){n.uniform1iv(this.addr,t)}function rM(n,t){n.uniform2iv(this.addr,t)}function oM(n,t){n.uniform3iv(this.addr,t)}function aM(n,t){n.uniform4iv(this.addr,t)}function lM(n,t){n.uniform1uiv(this.addr,t)}function cM(n,t){n.uniform2uiv(this.addr,t)}function uM(n,t){n.uniform3uiv(this.addr,t)}function hM(n,t){n.uniform4uiv(this.addr,t)}function fM(n,t,e){const i=this.cache,s=t.length,r=Eo(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wf,r[o])}function dM(n,t,e){const i=this.cache,s=t.length,r=Eo(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jf,r[o])}function pM(n,t,e){const i=this.cache,s=t.length,r=Eo(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xf,r[o])}function mM(n,t,e){const i=this.cache,s=t.length,r=Eo(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qf,r[o])}function gM(n){switch(n){case 5126:return Jy;case 35664:return Zy;case 35665:return $y;case 35666:return tM;case 35674:return eM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}class _M{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Qy(e.type)}}class vM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=gM(e.type)}}class xM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Du(n,t){n.seq.push(t),n.map[t.id]=t}function yM(n,t,e){const i=n.name,s=i.length;for(da.lastIndex=0;;){const r=da.exec(i),o=da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Du(e,c===void 0?new _M(a,n,t):new vM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new xM(a),Du(e,h)),e=h}}}class to{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);yM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Iu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let MM=0;function bM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function wM(n){switch(n){case Ti:return["Linear","( value )"];case oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Ou(n,t,e){const i=n.getShaderParameter(t,35713),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bM(n.getShaderSource(t),o)}else return s}function SM(n,t){const e=wM(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function AM(n,t){let e;switch(t){case H0:e="Linear";break;case W0:e="Reinhard";break;case q0:e="OptimizedCineon";break;case j0:e="ACESFilmic";break;case X0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function EM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function TM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function CM(n,t){const e={},i=n.getProgramParameter(t,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zs(n){return n!==""}function Nu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(n){return n.replace(PM,LM)}function LM(n,t){const e=Ut[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Xa(e)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(n){return n.replace(RM,DM)}function DM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function IM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===M0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fs&&(t="SHADOWMAP_TYPE_VSM"),t}function OM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case ps:t="ENVMAP_TYPE_CUBE";break;case wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function NM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function FM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bo:t="ENVMAP_BLENDING_MULTIPLY";break;case V0:t="ENVMAP_BLENDING_MIX";break;case k0:t="ENVMAP_BLENDING_ADD";break}return t}function zM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function BM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=IM(e),c=OM(e),u=NM(e),h=FM(e),f=zM(e),p=e.isWebGL2?"":EM(e),g=TM(r),m=s.createProgram();let d,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(zs).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(zs).join(`
`),_.length>0&&(_+=`
`)):(d=[Bu(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),_=[p,Bu(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Ln?AM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.encodings_pars_fragment,SM("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=Xa(o),o=Nu(o,e),o=Fu(o,e),a=Xa(a),a=Nu(a,e),a=Fu(a,e),o=zu(o),a=zu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+d+o,v=y+_+a,E=Iu(s,35633,x),S=Iu(s,35632,v);if(s.attachShader(m,E),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),n.debug.checkShaderErrors){const C=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(E).trim(),X=s.getShaderInfoLog(S).trim();let nt=!0,V=!0;if(s.getProgramParameter(m,35714)===!1){nt=!1;const O=Ou(s,E,"vertex"),Y=Ou(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+O+`
`+Y)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||X==="")&&(V=!1);V&&(this.diagnostics={runnable:nt,programLog:C,vertexShader:{log:D,prefix:d},fragmentShader:{log:X,prefix:_}})}s.deleteShader(E),s.deleteShader(S);let R;this.getUniforms=function(){return R===void 0&&(R=new to(s,m)),R};let M;return this.getAttributes=function(){return M===void 0&&(M=CM(s,m)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=MM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=S,this}let UM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new VM(t),e.set(t,i)),i}}class VM{constructor(t){this.id=UM++,this.code=t,this.usedTimes=0}}function kM(n,t,e,i,s,r,o){const a=new zf,l=new GM,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,C,D,X,nt){const V=X.fog,O=nt.geometry,Y=M.isMeshStandardMaterial?X.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||Y),$=K&&K.mapping===wo?K.image.height:null,j=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,k=G!==void 0?G.length:0;let ut=0;O.morphAttributes.position!==void 0&&(ut=1),O.morphAttributes.normal!==void 0&&(ut=2),O.morphAttributes.color!==void 0&&(ut=3);let Z,vt,At,W;if(j){const Mt=hn[j];Z=Mt.vertexShader,vt=Mt.fragmentShader}else Z=M.vertexShader,vt=M.fragmentShader,l.update(M),At=l.getVertexShaderID(M),W=l.getFragmentShaderID(M);const z=n.getRenderTarget(),ct=M.alphaTest>0,ht=M.clearcoat>0,xt=M.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:M.type,vertexShader:Z,fragmentShader:vt,defines:M.defines,customVertexShaderID:At,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:nt.isInstancedMesh===!0,instancingColor:nt.isInstancedMesh===!0&&nt.instanceColor!==null,supportsVertexTextures:f,outputEncoding:z===null?n.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Ti,map:!!M.map,matcap:!!M.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:$,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===f_,tangentSpaceNormalMap:M.normalMapType===Ao,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===oe,clearcoat:ht,clearcoatMap:ht&&!!M.clearcoatMap,clearcoatRoughnessMap:ht&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ht&&!!M.clearcoatNormalMap,iridescence:xt,iridescenceMap:xt&&!!M.iridescenceMap,iridescenceThicknessMap:xt&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===rs,alphaMap:!!M.alphaMap,alphaTest:ct,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!V,useFog:M.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:nt.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ut,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Ln,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Kn,flipSided:M.side===Ye,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)C.push(D),C.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(C,M),y(C,M),C.push(n.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function _(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.combine),M.push(C.vertexUvs),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),M.push(a.mask)}function x(M){const C=g[M.type];let D;if(C){const X=hn[C];D=C_.clone(X.uniforms)}else D=M.uniforms;return D}function v(M,C){let D;for(let X=0,nt=c.length;X<nt;X++){const V=c[X];if(V.cacheKey===C){D=V,++D.usedTimes;break}}return D===void 0&&(D=new BM(n,C,M,r),c.push(D)),D}function E(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function S(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:v,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:R}}function HM(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function WM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Uu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,m,d){let _=n[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},n[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=d),t++,_}function a(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?i.push(_):p.transparent===!0?s.push(_):e.push(_)}function l(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||WM),i.length>1&&i.sort(f||Uu),s.length>1&&s.sort(f||Uu)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function qM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Gu,n.set(i,[o])):s>=r.length?(o=new Gu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function jM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function XM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let YM=0;function KM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function QM(n,t){const e=new jM,i=XM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,o=new $t,a=new $t;function l(u,h){let f=0,p=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let m=0,d=0,_=0,y=0,x=0,v=0,E=0,S=0,R=0,M=0;u.sort(KM);const C=h!==!0?Math.PI:1;for(let X=0,nt=u.length;X<nt;X++){const V=u[X],O=V.color,Y=V.intensity,K=V.distance,$=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)f+=O.r*Y*C,p+=O.g*Y*C,g+=O.b*Y*C;else if(V.isLightProbe)for(let j=0;j<9;j++)s.probe[j].addScaledVector(V.sh.coefficients[j],Y);else if(V.isDirectionalLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*C),V.castShadow){const G=V.shadow,k=i.get(V);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,s.directionalShadow[m]=k,s.directionalShadowMap[m]=$,s.directionalShadowMatrix[m]=V.shadow.matrix,v++}s.directional[m]=j,m++}else if(V.isSpotLight){const j=e.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(O).multiplyScalar(Y*C),j.distance=K,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,s.spot[_]=j;const G=V.shadow;if(V.map&&(s.spotLightMap[R]=V.map,R++,G.updateMatrices(V),V.castShadow&&M++),s.spotLightMatrix[_]=G.matrix,V.castShadow){const k=i.get(V);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,s.spotShadow[_]=k,s.spotShadowMap[_]=$,S++}_++}else if(V.isRectAreaLight){const j=e.get(V);j.color.copy(O).multiplyScalar(Y),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=j,y++}else if(V.isPointLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*C),j.distance=V.distance,j.decay=V.decay,V.castShadow){const G=V.shadow,k=i.get(V);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,s.pointShadow[d]=k,s.pointShadowMap[d]=$,s.pointShadowMatrix[d]=V.shadow.matrix,E++}s.point[d]=j,d++}else if(V.isHemisphereLight){const j=e.get(V);j.skyColor.copy(V.color).multiplyScalar(Y*C),j.groundColor.copy(V.groundColor).multiplyScalar(Y*C),s.hemi[x]=j,x++}}y>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==m||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==y||D.hemiLength!==x||D.numDirectionalShadows!==v||D.numPointShadows!==E||D.numSpotShadows!==S||D.numSpotMaps!==R)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=y,s.point.length=d,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=S+R-M,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=M,D.directionalLength=m,D.pointLength=d,D.spotLength=_,D.rectAreaLength=y,D.hemiLength=x,D.numDirectionalShadows=v,D.numPointShadows=E,D.numSpotShadows=S,D.numSpotMaps=R,s.version=YM++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const _=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const v=u[y];if(v.isDirectionalLight){const E=s.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),f++}else if(v.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const E=s.rectArea[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),p++}else if(v.isHemisphereLight){const E=s.hemi[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function Vu(n,t){const e=new QM(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function JM(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Vu(n,t),e.set(r,[l])):o>=a.length?(l=new Vu(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class ZM extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $M extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nb(n,t,e){let i=new El;const s=new _t,r=new _t,o=new ne,a=new ZM({depthPacking:h_}),l=new $M,c={},u=e.maxTextureSize,h={0:Ye,1:fs,2:Kn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:tb,fragmentShader:eb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new te;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new sn(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf,this.render=function(v,E,S){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const R=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ti),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let X=0,nt=v.length;X<nt;X++){const V=v[X],O=V.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Y=O.getFrameExtents();if(s.multiply(Y),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,O.mapSize.y=r.y)),O.map===null){const $=this.type!==Fs?{minFilter:be,magFilter:be}:{};O.map=new Ci(s.x,s.y,$),O.map.texture.name=V.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const K=O.getViewportCount();for(let $=0;$<K;$++){const j=O.getViewport($);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),D.viewport(o),O.updateMatrices(V,$),i=O.getFrustum(),x(E,S,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===Fs&&_(O,S),O.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(R,M,C)};function _(v,E){const S=t.update(m);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ci(s.x,s.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(E,null,S,f,m,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(E,null,S,p,m,null)}function y(v,E,S,R,M,C){let D=null;const X=S.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(X!==void 0?D=X:D=S.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const nt=D.uuid,V=E.uuid;let O=c[nt];O===void 0&&(O={},c[nt]=O);let Y=O[V];Y===void 0&&(Y=D.clone(),O[V]=Y),D=Y}return D.visible=E.visible,D.wireframe=E.wireframe,C===Fs?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:h[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaTest,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(S.matrixWorld),D.nearDistance=R,D.farDistance=M),D}function x(v,E,S,R,M){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&M===Fs)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,v.matrixWorld);const X=t.update(v),nt=v.material;if(Array.isArray(nt)){const V=X.groups;for(let O=0,Y=V.length;O<Y;O++){const K=V[O],$=nt[K.materialIndex];if($&&$.visible){const j=y(v,$,R,S.near,S.far,M);n.renderBufferDirect(S,null,X,j,v,K)}}}else if(nt.visible){const V=y(v,nt,R,S.near,S.far,M);n.renderBufferDirect(S,null,X,V,v,null)}}const D=v.children;for(let X=0,nt=D.length;X<nt;X++)x(D[X],E,S,R,M)}}function ib(n,t,e){const i=e.isWebGL2;function s(){let F=!1;const ot=new ne;let gt=null;const St=new ne(0,0,0,0);return{setMask:function(Pt){gt!==Pt&&!F&&(n.colorMask(Pt,Pt,Pt,Pt),gt=Pt)},setLocked:function(Pt){F=Pt},setClear:function(Pt,qt,pe,ye,si){si===!0&&(Pt*=ye,qt*=ye,pe*=ye),ot.set(Pt,qt,pe,ye),St.equals(ot)===!1&&(n.clearColor(Pt,qt,pe,ye),St.copy(ot))},reset:function(){F=!1,gt=null,St.set(-1,0,0,0)}}}function r(){let F=!1,ot=null,gt=null,St=null;return{setTest:function(Pt){Pt?ct(2929):ht(2929)},setMask:function(Pt){ot!==Pt&&!F&&(n.depthMask(Pt),ot=Pt)},setFunc:function(Pt){if(gt!==Pt){switch(Pt){case O0:n.depthFunc(512);break;case N0:n.depthFunc(519);break;case F0:n.depthFunc(513);break;case Ua:n.depthFunc(515);break;case z0:n.depthFunc(514);break;case B0:n.depthFunc(518);break;case U0:n.depthFunc(516);break;case G0:n.depthFunc(517);break;default:n.depthFunc(515)}gt=Pt}},setLocked:function(Pt){F=Pt},setClear:function(Pt){St!==Pt&&(n.clearDepth(Pt),St=Pt)},reset:function(){F=!1,ot=null,gt=null,St=null}}}function o(){let F=!1,ot=null,gt=null,St=null,Pt=null,qt=null,pe=null,ye=null,si=null;return{setTest:function(ee){F||(ee?ct(2960):ht(2960))},setMask:function(ee){ot!==ee&&!F&&(n.stencilMask(ee),ot=ee)},setFunc:function(ee,vn,Ve){(gt!==ee||St!==vn||Pt!==Ve)&&(n.stencilFunc(ee,vn,Ve),gt=ee,St=vn,Pt=Ve)},setOp:function(ee,vn,Ve){(qt!==ee||pe!==vn||ye!==Ve)&&(n.stencilOp(ee,vn,Ve),qt=ee,pe=vn,ye=Ve)},setLocked:function(ee){F=ee},setClear:function(ee){si!==ee&&(n.clearStencil(ee),si=ee)},reset:function(){F=!1,ot=null,gt=null,St=null,Pt=null,qt=null,pe=null,ye=null,si=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,_=!1,y=null,x=null,v=null,E=null,S=null,R=null,M=null,C=!1,D=null,X=null,nt=null,V=null,O=null;const Y=n.getParameter(35661);let K=!1,$=0;const j=n.getParameter(7938);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=$>=2);let G=null,k={};const ut=n.getParameter(3088),Z=n.getParameter(2978),vt=new ne().fromArray(ut),At=new ne().fromArray(Z);function W(F,ot,gt){const St=new Uint8Array(4),Pt=n.createTexture();n.bindTexture(F,Pt),n.texParameteri(F,10241,9728),n.texParameteri(F,10240,9728);for(let qt=0;qt<gt;qt++)n.texImage2D(ot+qt,0,6408,1,1,0,6408,5121,St);return Pt}const z={};z[3553]=W(3553,3553,1),z[34067]=W(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(2929),l.setFunc(Ua),U(!1),et(Ic),ct(2884),I(ti);function ct(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function ht(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function xt(F,ot){return p[F]!==ot?(n.bindFramebuffer(F,ot),p[F]=ot,i&&(F===36009&&(p[36160]=ot),F===36160&&(p[36009]=ot)),!0):!1}function pt(F,ot){let gt=m,St=!1;if(F)if(gt=g.get(ot),gt===void 0&&(gt=[],g.set(ot,gt)),F.isWebGLMultipleRenderTargets){const Pt=F.texture;if(gt.length!==Pt.length||gt[0]!==36064){for(let qt=0,pe=Pt.length;qt<pe;qt++)gt[qt]=36064+qt;gt.length=Pt.length,St=!0}}else gt[0]!==36064&&(gt[0]=36064,St=!0);else gt[0]!==1029&&(gt[0]=1029,St=!0);St&&(e.isWebGL2?n.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function Mt(F){return d!==F?(n.useProgram(F),d=F,!0):!1}const b={[Zi]:32774,[w0]:32778,[S0]:32779};if(i)b[Fc]=32775,b[zc]=32776;else{const F=t.get("EXT_blend_minmax");F!==null&&(b[Fc]=F.MIN_EXT,b[zc]=F.MAX_EXT)}const A={[A0]:0,[E0]:1,[T0]:768,[Cf]:770,[I0]:776,[R0]:774,[P0]:772,[C0]:769,[Pf]:771,[D0]:775,[L0]:773};function I(F,ot,gt,St,Pt,qt,pe,ye){if(F===ti){_===!0&&(ht(3042),_=!1);return}if(_===!1&&(ct(3042),_=!0),F!==b0){if(F!==y||ye!==C){if((x!==Zi||S!==Zi)&&(n.blendEquation(32774),x=Zi,S=Zi),ye)switch(F){case rs:n.blendFuncSeparate(1,771,1,771);break;case Ba:n.blendFunc(1,1);break;case Oc:n.blendFuncSeparate(0,769,0,1);break;case Nc:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case rs:n.blendFuncSeparate(770,771,1,771);break;case Ba:n.blendFunc(770,1);break;case Oc:n.blendFuncSeparate(0,769,0,1);break;case Nc:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,E=null,R=null,M=null,y=F,C=ye}return}Pt=Pt||ot,qt=qt||gt,pe=pe||St,(ot!==x||Pt!==S)&&(n.blendEquationSeparate(b[ot],b[Pt]),x=ot,S=Pt),(gt!==v||St!==E||qt!==R||pe!==M)&&(n.blendFuncSeparate(A[gt],A[St],A[qt],A[pe]),v=gt,E=St,R=qt,M=pe),y=F,C=null}function B(F,ot){F.side===Kn?ht(2884):ct(2884);let gt=F.side===Ye;ot&&(gt=!gt),U(gt),F.blending===rs&&F.transparent===!1?I(ti):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const St=F.stencilWrite;c.setTest(St),St&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Q(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(32926):ht(32926)}function U(F){D!==F&&(F?n.frontFace(2304):n.frontFace(2305),D=F)}function et(F){F!==x0?(ct(2884),F!==X&&(F===Ic?n.cullFace(1029):F===y0?n.cullFace(1028):n.cullFace(1032))):ht(2884),X=F}function at(F){F!==nt&&(K&&n.lineWidth(F),nt=F)}function Q(F,ot,gt){F?(ct(32823),(V!==ot||O!==gt)&&(n.polygonOffset(ot,gt),V=ot,O=gt)):ht(32823)}function ft(F){F?ct(3089):ht(3089)}function it(F){F===void 0&&(F=33984+Y-1),G!==F&&(n.activeTexture(F),G=F)}function T(F,ot,gt){gt===void 0&&(G===null?gt=33984+Y-1:gt=G);let St=k[gt];St===void 0&&(St={type:void 0,texture:void 0},k[gt]=St),(St.type!==F||St.texture!==ot)&&(G!==gt&&(n.activeTexture(gt),G=gt),n.bindTexture(F,ot||z[F]),St.type=F,St.texture=ot)}function w(){const F=k[G];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(F){vt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),vt.copy(F))}function wt(F){At.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),At.copy(F))}function Ot(F,ot){let gt=h.get(ot);gt===void 0&&(gt=new WeakMap,h.set(ot,gt));let St=gt.get(F);St===void 0&&(St=n.getUniformBlockIndex(ot,F.name),gt.set(F,St))}function Qt(F,ot){const St=h.get(ot).get(F);u.get(F)!==St&&(n.uniformBlockBinding(ot,St,F.__bindingPointIndex),u.set(F,St))}function de(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},G=null,k={},p={},g=new WeakMap,m=[],d=null,_=!1,y=null,x=null,v=null,E=null,S=null,R=null,M=null,C=!1,D=null,X=null,nt=null,V=null,O=null,vt.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ct,disable:ht,bindFramebuffer:xt,drawBuffers:pt,useProgram:Mt,setBlending:I,setMaterial:B,setFlipSided:U,setCullFace:et,setLineWidth:at,setPolygonOffset:Q,setScissorTest:ft,activeTexture:it,bindTexture:T,unbindTexture:w,compressedTexImage2D:N,compressedTexImage3D:J,texImage2D:Dt,texImage3D:Tt,updateUBOMapping:Ot,uniformBlockBinding:Qt,texStorage2D:tt,texStorage3D:Ct,texSubImage2D:rt,texSubImage3D:dt,compressedTexSubImage2D:bt,compressedTexSubImage3D:mt,scissor:Lt,viewport:wt,reset:de}}function sb(n,t,e,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,w){return _?new OffscreenCanvas(T,w):$s("canvas")}function x(T,w,N,J){let rt=1;if((T.width>J||T.height>J)&&(rt=J/Math.max(T.width,T.height)),rt<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const dt=w?ja:Math.floor,bt=dt(rt*T.width),mt=dt(rt*T.height);m===void 0&&(m=y(bt,mt));const tt=N?y(bt,mt):m;return tt.width=bt,tt.height=mt,tt.getContext("2d").drawImage(T,0,0,bt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+bt+"x"+mt+")."),tt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return cu(T.width)&&cu(T.height)}function E(T){return a?!1:T.wrapS!==tn||T.wrapT!==tn||T.minFilter!==be&&T.minFilter!==qe}function S(T,w){return T.generateMipmaps&&w&&T.minFilter!==be&&T.minFilter!==qe}function R(T){n.generateMipmap(T)}function M(T,w,N,J,rt=!1){if(a===!1)return w;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt=w;return w===6403&&(N===5126&&(dt=33326),N===5131&&(dt=33325),N===5121&&(dt=33321)),w===33319&&(N===5126&&(dt=33328),N===5131&&(dt=33327),N===5121&&(dt=33323)),w===6408&&(N===5126&&(dt=34836),N===5131&&(dt=34842),N===5121&&(dt=J===oe&&rt===!1?35907:32856),N===32819&&(dt=32854),N===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function C(T,w,N){return S(T,N)===!0||T.isFramebufferTexture&&T.minFilter!==be&&T.minFilter!==qe?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function D(T){return T===be||T===Bc||T===Uc?9728:9729}function X(T){const w=T.target;w.removeEventListener("dispose",X),V(w),w.isVideoTexture&&g.delete(w)}function nt(T){const w=T.target;w.removeEventListener("dispose",nt),Y(w)}function V(T){const w=i.get(T);if(w.__webglInit===void 0)return;const N=T.source,J=d.get(N);if(J){const rt=J[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&O(T),Object.keys(J).length===0&&d.delete(N)}i.remove(T)}function O(T){const w=i.get(T);n.deleteTexture(w.__webglTexture);const N=T.source,J=d.get(N);delete J[w.__cacheKey],o.memory.textures--}function Y(T){const w=T.texture,N=i.get(T),J=i.get(w);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)n.deleteFramebuffer(N.__webglFramebuffer[rt]),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[rt]);else{if(n.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let rt=0;rt<N.__webglColorRenderbuffer.length;rt++)N.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[rt]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let rt=0,dt=w.length;rt<dt;rt++){const bt=i.get(w[rt]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(w[rt])}i.remove(w),i.remove(T)}let K=0;function $(){K=0}function j(){const T=K;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),K+=1,T}function G(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function k(T,w){const N=i.get(T);if(T.isVideoTexture&&ft(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(N,T,w);return}}e.bindTexture(3553,N.__webglTexture,33984+w)}function ut(T,w){const N=i.get(T);if(T.version>0&&N.__version!==T.version){ht(N,T,w);return}e.bindTexture(35866,N.__webglTexture,33984+w)}function Z(T,w){const N=i.get(T);if(T.version>0&&N.__version!==T.version){ht(N,T,w);return}e.bindTexture(32879,N.__webglTexture,33984+w)}function vt(T,w){const N=i.get(T);if(T.version>0&&N.__version!==T.version){xt(N,T,w);return}e.bindTexture(34067,N.__webglTexture,33984+w)}const At={[ka]:10497,[tn]:33071,[Ha]:33648},W={[be]:9728,[Bc]:9984,[Uc]:9986,[qe]:9729,[Y0]:9985,[So]:9987};function z(T,w,N){if(N?(n.texParameteri(T,10242,At[w.wrapS]),n.texParameteri(T,10243,At[w.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,At[w.wrapR]),n.texParameteri(T,10240,W[w.magFilter]),n.texParameteri(T,10241,W[w.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(w.wrapS!==tn||w.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,D(w.magFilter)),n.texParameteri(T,10241,D(w.minFilter)),w.minFilter!==be&&w.minFilter!==qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(w.type===yi&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Zs&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ct(T,w){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",X));const J=w.source;let rt=d.get(J);rt===void 0&&(rt={},d.set(J,rt));const dt=G(w);if(dt!==T.__cacheKey){rt[dt]===void 0&&(rt[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),rt[dt].usedTimes++;const bt=rt[T.__cacheKey];bt!==void 0&&(rt[T.__cacheKey].usedTimes--,bt.usedTimes===0&&O(w)),T.__cacheKey=dt,T.__webglTexture=rt[dt].texture}return N}function ht(T,w,N){let J=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=35866),w.isData3DTexture&&(J=32879);const rt=ct(T,w),dt=w.source;e.bindTexture(J,T.__webglTexture,33984+N);const bt=i.get(dt);if(dt.version!==bt.__version||rt===!0){e.activeTexture(33984+N),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const mt=E(w)&&v(w.image)===!1;let tt=x(w.image,mt,!1,u);tt=it(w,tt);const Ct=v(tt)||a,Dt=r.convert(w.format,w.encoding);let Tt=r.convert(w.type),Lt=M(w.internalFormat,Dt,Tt,w.encoding,w.isVideoTexture);z(J,w,Ct);let wt;const Ot=w.mipmaps,Qt=a&&w.isVideoTexture!==!0,de=bt.__version===void 0||rt===!0,F=C(w,tt,Ct);if(w.isDepthTexture)Lt=6402,a?w.type===yi?Lt=36012:w.type===xi?Lt=33190:w.type===os?Lt=35056:Lt=33189:w.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Si&&Lt===6402&&w.type!==Rf&&w.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=xi,Tt=r.convert(w.type)),w.format===ms&&Lt===6402&&(Lt=34041,w.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=os,Tt=r.convert(w.type))),de&&(Qt?e.texStorage2D(3553,1,Lt,tt.width,tt.height):e.texImage2D(3553,0,Lt,tt.width,tt.height,0,Dt,Tt,null));else if(w.isDataTexture)if(Ot.length>0&&Ct){Qt&&de&&e.texStorage2D(3553,F,Lt,Ot[0].width,Ot[0].height);for(let ot=0,gt=Ot.length;ot<gt;ot++)wt=Ot[ot],Qt?e.texSubImage2D(3553,ot,0,0,wt.width,wt.height,Dt,Tt,wt.data):e.texImage2D(3553,ot,Lt,wt.width,wt.height,0,Dt,Tt,wt.data);w.generateMipmaps=!1}else Qt?(de&&e.texStorage2D(3553,F,Lt,tt.width,tt.height),e.texSubImage2D(3553,0,0,0,tt.width,tt.height,Dt,Tt,tt.data)):e.texImage2D(3553,0,Lt,tt.width,tt.height,0,Dt,Tt,tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Qt&&de&&e.texStorage3D(35866,F,Lt,Ot[0].width,Ot[0].height,tt.depth);for(let ot=0,gt=Ot.length;ot<gt;ot++)wt=Ot[ot],w.format!==en?Dt!==null?Qt?e.compressedTexSubImage3D(35866,ot,0,0,0,wt.width,wt.height,tt.depth,Dt,wt.data,0,0):e.compressedTexImage3D(35866,ot,Lt,wt.width,wt.height,tt.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(35866,ot,0,0,0,wt.width,wt.height,tt.depth,Dt,Tt,wt.data):e.texImage3D(35866,ot,Lt,wt.width,wt.height,tt.depth,0,Dt,Tt,wt.data)}else{Qt&&de&&e.texStorage2D(3553,F,Lt,Ot[0].width,Ot[0].height);for(let ot=0,gt=Ot.length;ot<gt;ot++)wt=Ot[ot],w.format!==en?Dt!==null?Qt?e.compressedTexSubImage2D(3553,ot,0,0,wt.width,wt.height,Dt,wt.data):e.compressedTexImage2D(3553,ot,Lt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(3553,ot,0,0,wt.width,wt.height,Dt,Tt,wt.data):e.texImage2D(3553,ot,Lt,wt.width,wt.height,0,Dt,Tt,wt.data)}else if(w.isDataArrayTexture)Qt?(de&&e.texStorage3D(35866,F,Lt,tt.width,tt.height,tt.depth),e.texSubImage3D(35866,0,0,0,0,tt.width,tt.height,tt.depth,Dt,Tt,tt.data)):e.texImage3D(35866,0,Lt,tt.width,tt.height,tt.depth,0,Dt,Tt,tt.data);else if(w.isData3DTexture)Qt?(de&&e.texStorage3D(32879,F,Lt,tt.width,tt.height,tt.depth),e.texSubImage3D(32879,0,0,0,0,tt.width,tt.height,tt.depth,Dt,Tt,tt.data)):e.texImage3D(32879,0,Lt,tt.width,tt.height,tt.depth,0,Dt,Tt,tt.data);else if(w.isFramebufferTexture){if(de)if(Qt)e.texStorage2D(3553,F,Lt,tt.width,tt.height);else{let ot=tt.width,gt=tt.height;for(let St=0;St<F;St++)e.texImage2D(3553,St,Lt,ot,gt,0,Dt,Tt,null),ot>>=1,gt>>=1}}else if(Ot.length>0&&Ct){Qt&&de&&e.texStorage2D(3553,F,Lt,Ot[0].width,Ot[0].height);for(let ot=0,gt=Ot.length;ot<gt;ot++)wt=Ot[ot],Qt?e.texSubImage2D(3553,ot,0,0,Dt,Tt,wt):e.texImage2D(3553,ot,Lt,Dt,Tt,wt);w.generateMipmaps=!1}else Qt?(de&&e.texStorage2D(3553,F,Lt,tt.width,tt.height),e.texSubImage2D(3553,0,0,0,Dt,Tt,tt)):e.texImage2D(3553,0,Lt,Dt,Tt,tt);S(w,Ct)&&R(J),bt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function xt(T,w,N){if(w.image.length!==6)return;const J=ct(T,w),rt=w.source;e.bindTexture(34067,T.__webglTexture,33984+N);const dt=i.get(rt);if(rt.version!==dt.__version||J===!0){e.activeTexture(33984+N),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const bt=w.isCompressedTexture||w.image[0].isCompressedTexture,mt=w.image[0]&&w.image[0].isDataTexture,tt=[];for(let ot=0;ot<6;ot++)!bt&&!mt?tt[ot]=x(w.image[ot],!1,!0,c):tt[ot]=mt?w.image[ot].image:w.image[ot],tt[ot]=it(w,tt[ot]);const Ct=tt[0],Dt=v(Ct)||a,Tt=r.convert(w.format,w.encoding),Lt=r.convert(w.type),wt=M(w.internalFormat,Tt,Lt,w.encoding),Ot=a&&w.isVideoTexture!==!0,Qt=dt.__version===void 0||J===!0;let de=C(w,Ct,Dt);z(34067,w,Dt);let F;if(bt){Ot&&Qt&&e.texStorage2D(34067,de,wt,Ct.width,Ct.height);for(let ot=0;ot<6;ot++){F=tt[ot].mipmaps;for(let gt=0;gt<F.length;gt++){const St=F[gt];w.format!==en?Tt!==null?Ot?e.compressedTexSubImage2D(34069+ot,gt,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(34069+ot,gt,wt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(34069+ot,gt,0,0,St.width,St.height,Tt,Lt,St.data):e.texImage2D(34069+ot,gt,wt,St.width,St.height,0,Tt,Lt,St.data)}}}else{F=w.mipmaps,Ot&&Qt&&(F.length>0&&de++,e.texStorage2D(34067,de,wt,tt[0].width,tt[0].height));for(let ot=0;ot<6;ot++)if(mt){Ot?e.texSubImage2D(34069+ot,0,0,0,tt[ot].width,tt[ot].height,Tt,Lt,tt[ot].data):e.texImage2D(34069+ot,0,wt,tt[ot].width,tt[ot].height,0,Tt,Lt,tt[ot].data);for(let gt=0;gt<F.length;gt++){const Pt=F[gt].image[ot].image;Ot?e.texSubImage2D(34069+ot,gt+1,0,0,Pt.width,Pt.height,Tt,Lt,Pt.data):e.texImage2D(34069+ot,gt+1,wt,Pt.width,Pt.height,0,Tt,Lt,Pt.data)}}else{Ot?e.texSubImage2D(34069+ot,0,0,0,Tt,Lt,tt[ot]):e.texImage2D(34069+ot,0,wt,Tt,Lt,tt[ot]);for(let gt=0;gt<F.length;gt++){const St=F[gt];Ot?e.texSubImage2D(34069+ot,gt+1,0,0,Tt,Lt,St.image[ot]):e.texImage2D(34069+ot,gt+1,wt,Tt,Lt,St.image[ot])}}}S(w,Dt)&&R(34067),dt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function pt(T,w,N,J,rt){const dt=r.convert(N.format,N.encoding),bt=r.convert(N.type),mt=M(N.internalFormat,dt,bt,N.encoding);i.get(w).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,mt,w.width,w.height,w.depth,0,dt,bt,null):e.texImage2D(rt,0,mt,w.width,w.height,0,dt,bt,null)),e.bindFramebuffer(36160,T),Q(w)?f.framebufferTexture2DMultisampleEXT(36160,J,rt,i.get(N).__webglTexture,0,at(w)):(rt===3553||rt>=34069&&rt<=34074)&&n.framebufferTexture2D(36160,J,rt,i.get(N).__webglTexture,0),e.bindFramebuffer(36160,null)}function Mt(T,w,N){if(n.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let J=33189;if(N||Q(w)){const rt=w.depthTexture;rt&&rt.isDepthTexture&&(rt.type===yi?J=36012:rt.type===xi&&(J=33190));const dt=at(w);Q(w)?f.renderbufferStorageMultisampleEXT(36161,dt,J,w.width,w.height):n.renderbufferStorageMultisample(36161,dt,J,w.width,w.height)}else n.renderbufferStorage(36161,J,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const J=at(w);N&&Q(w)===!1?n.renderbufferStorageMultisample(36161,J,35056,w.width,w.height):Q(w)?f.renderbufferStorageMultisampleEXT(36161,J,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,T)}else{const J=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let rt=0;rt<J.length;rt++){const dt=J[rt],bt=r.convert(dt.format,dt.encoding),mt=r.convert(dt.type),tt=M(dt.internalFormat,bt,mt,dt.encoding),Ct=at(w);N&&Q(w)===!1?n.renderbufferStorageMultisample(36161,Ct,tt,w.width,w.height):Q(w)?f.renderbufferStorageMultisampleEXT(36161,Ct,tt,w.width,w.height):n.renderbufferStorage(36161,tt,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function b(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,rt=at(w);if(w.depthTexture.format===Si)Q(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,rt):n.framebufferTexture2D(36160,36096,3553,J,0);else if(w.depthTexture.format===ms)Q(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,rt):n.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function A(T){const w=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");b(w.__webglFramebuffer,T)}else if(N){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(36160,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]=n.createRenderbuffer(),Mt(w.__webglDepthbuffer[J],T,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Mt(w.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function I(T,w,N){const J=i.get(T);w!==void 0&&pt(J.__webglFramebuffer,T,T.texture,36064,3553),N!==void 0&&A(T)}function B(T){const w=T.texture,N=i.get(T),J=i.get(w);T.addEventListener("dispose",nt),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=w.version,o.memory.textures++);const rt=T.isWebGLCubeRenderTarget===!0,dt=T.isWebGLMultipleRenderTargets===!0,bt=v(T)||a;if(rt){N.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)N.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(N.__webglFramebuffer=n.createFramebuffer(),dt)if(s.drawBuffers){const mt=T.texture;for(let tt=0,Ct=mt.length;tt<Ct;tt++){const Dt=i.get(mt[tt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Q(T)===!1){const mt=dt?w:[w];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let tt=0;tt<mt.length;tt++){const Ct=mt[tt];N.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(36161,N.__webglColorRenderbuffer[tt]);const Dt=r.convert(Ct.format,Ct.encoding),Tt=r.convert(Ct.type),Lt=M(Ct.internalFormat,Dt,Tt,Ct.encoding,T.isXRRenderTarget===!0),wt=at(T);n.renderbufferStorageMultisample(36161,wt,Lt,T.width,T.height),n.framebufferRenderbuffer(36160,36064+tt,36161,N.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(36161,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,J.__webglTexture),z(34067,w,bt);for(let mt=0;mt<6;mt++)pt(N.__webglFramebuffer[mt],T,w,36064,34069+mt);S(w,bt)&&R(34067),e.unbindTexture()}else if(dt){const mt=T.texture;for(let tt=0,Ct=mt.length;tt<Ct;tt++){const Dt=mt[tt],Tt=i.get(Dt);e.bindTexture(3553,Tt.__webglTexture),z(3553,Dt,bt),pt(N.__webglFramebuffer,T,Dt,36064+tt,3553),S(Dt,bt)&&R(3553)}e.unbindTexture()}else{let mt=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?mt=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,J.__webglTexture),z(mt,w,bt),pt(N.__webglFramebuffer,T,w,36064,mt),S(w,bt)&&R(mt),e.unbindTexture()}T.depthBuffer&&A(T)}function U(T){const w=v(T)||a,N=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,rt=N.length;J<rt;J++){const dt=N[J];if(S(dt,w)){const bt=T.isWebGLCubeRenderTarget?34067:3553,mt=i.get(dt).__webglTexture;e.bindTexture(bt,mt),R(bt),e.unbindTexture()}}}function et(T){if(a&&T.samples>0&&Q(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],N=T.width,J=T.height;let rt=16384;const dt=[],bt=T.stencilBuffer?33306:36096,mt=i.get(T),tt=T.isWebGLMultipleRenderTargets===!0;if(tt)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(36160,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ct,36161,null),e.bindFramebuffer(36160,mt.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ct,3553,null,0);e.bindFramebuffer(36008,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,mt.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){dt.push(36064+Ct),T.depthBuffer&&dt.push(bt);const Dt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(Dt===!1&&(T.depthBuffer&&(rt|=256),T.stencilBuffer&&(rt|=1024)),tt&&n.framebufferRenderbuffer(36008,36064,36161,mt.__webglColorRenderbuffer[Ct]),Dt===!0&&(n.invalidateFramebuffer(36008,[bt]),n.invalidateFramebuffer(36009,[bt])),tt){const Tt=i.get(w[Ct]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Tt,0)}n.blitFramebuffer(0,0,N,J,0,0,N,J,rt,9728),p&&n.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),tt)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(36160,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ct,36161,mt.__webglColorRenderbuffer[Ct]);const Dt=i.get(w[Ct]).__webglTexture;e.bindFramebuffer(36160,mt.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ct,3553,Dt,0)}e.bindFramebuffer(36009,mt.__webglMultisampledFramebuffer)}}function at(T){return Math.min(h,T.samples)}function Q(T){const w=i.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(T){const w=o.render.frame;g.get(T)!==w&&(g.set(T,w),T.update())}function it(T,w){const N=T.encoding,J=T.format,rt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===qa||N!==Ti&&(N===oe?a===!1?t.has("EXT_sRGB")===!0&&J===en?(T.format=qa,T.minFilter=qe,T.generateMipmaps=!1):w=Of.sRGBToLinear(w):(J!==en||rt!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),w}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=k,this.setTexture2DArray=ut,this.setTexture3D=Z,this.setTextureCube=vt,this.rebindTextures=I,this.setupRenderTarget=B,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Q}function rb(n,t,e){const i=e.isWebGL2;function s(r,o=null){let a;if(r===Ei)return 5121;if(r===Z0)return 32819;if(r===$0)return 32820;if(r===K0)return 5120;if(r===Q0)return 5122;if(r===Rf)return 5123;if(r===J0)return 5124;if(r===xi)return 5125;if(r===yi)return 5126;if(r===Zs)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===t_)return 6406;if(r===en)return 6408;if(r===n_)return 6409;if(r===i_)return 6410;if(r===Si)return 6402;if(r===ms)return 34041;if(r===s_)return 6403;if(r===e_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===qa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===r_)return 36244;if(r===o_)return 33319;if(r===a_)return 33320;if(r===l_)return 36249;if(r===Bo||r===Uo||r===Go||r===Vo)if(o===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Bo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Bo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Go)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gc||r===Vc||r===kc||r===Hc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Gc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===c_)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wc||r===qc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wc)return o===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===qc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jc||r===Xc||r===Yc||r===Kc||r===Qc||r===Jc||r===Zc||r===$c||r===tu||r===eu||r===nu||r===iu||r===su||r===ru)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===jc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$c)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===iu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===su)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ru)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ou)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ou)return o===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===os?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class ob extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ir extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const d=e.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const y=new Ir;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class lb extends Ge{constructor(t,e,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=xi),i===void 0&&u===ms&&(i=os),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1}}class cb extends ys{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=e.getContextAttributes();let m=null,d=null;const _=[],y=[],x=new Be;x.layers.enable(1),x.viewport=new ne;const v=new Be;v.layers.enable(2),v.viewport=new ne;const E=[x,v],S=new ob;S.layers.enable(1),S.layers.enable(2);let R=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let k=_[G];return k===void 0&&(k=new pa,_[G]=k),k.getTargetRaySpace()},this.getControllerGrip=function(G){let k=_[G];return k===void 0&&(k=new pa,_[G]=k),k.getGripSpace()},this.getHand=function(G){let k=_[G];return k===void 0&&(k=new pa,_[G]=k),k.getHandSpace()};function C(G){const k=y.indexOf(G.inputSource);if(k===-1)return;const ut=_[k];ut!==void 0&&ut.dispatchEvent({type:G.type,data:G.inputSource})}function D(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",X);for(let G=0;G<_.length;G++){const k=y[G];k!==null&&(y[G]=null,_[G].disconnect(k))}R=null,M=null,t.setRenderTarget(m),f=null,h=null,u=null,s=null,d=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",D),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const k={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:f}),d=new Ci(f.framebufferWidth,f.framebufferHeight,{format:en,type:Ei,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,ut=null,Z=null;g.depth&&(Z=g.stencil?35056:33190,k=g.stencil?ms:Si,ut=g.stencil?os:xi);const vt={colorFormat:32856,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,e),h=u.createProjectionLayer(vt),s.updateRenderState({layers:[h]}),d=new Ci(h.textureWidth,h.textureHeight,{format:en,type:Ei,depthTexture:new lb(h.textureWidth,h.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const At=t.properties.get(d);At.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function X(G){for(let k=0;k<G.removed.length;k++){const ut=G.removed[k],Z=y.indexOf(ut);Z>=0&&(y[Z]=null,_[Z].dispatchEvent({type:"disconnected",data:ut}))}for(let k=0;k<G.added.length;k++){const ut=G.added[k];let Z=y.indexOf(ut);if(Z===-1){for(let At=0;At<_.length;At++)if(At>=y.length){y.push(ut),Z=At;break}else if(y[At]===null){y[At]=ut,Z=At;break}if(Z===-1)break}const vt=_[Z];vt&&vt.dispatchEvent({type:"connected",data:ut})}}const nt=new L,V=new L;function O(G,k,ut){nt.setFromMatrixPosition(k.matrixWorld),V.setFromMatrixPosition(ut.matrixWorld);const Z=nt.distanceTo(V),vt=k.projectionMatrix.elements,At=ut.projectionMatrix.elements,W=vt[14]/(vt[10]-1),z=vt[14]/(vt[10]+1),ct=(vt[9]+1)/vt[5],ht=(vt[9]-1)/vt[5],xt=(vt[8]-1)/vt[0],pt=(At[8]+1)/At[0],Mt=W*xt,b=W*pt,A=Z/(-xt+pt),I=A*-xt;k.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(I),G.translateZ(A),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const B=W+A,U=z+A,et=Mt-I,at=b+(Z-I),Q=ct*z/U*B,ft=ht*z/U*B;G.projectionMatrix.makePerspective(et,at,Q,ft,B,U)}function Y(G,k){k===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(k.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;S.near=v.near=x.near=G.near,S.far=v.far=x.far=G.far,(R!==S.near||M!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,M=S.far);const k=G.parent,ut=S.cameras;Y(S,k);for(let vt=0;vt<ut.length;vt++)Y(ut[vt],k);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),G.matrix.copy(S.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const Z=G.children;for(let vt=0,At=Z.length;vt<At;vt++)Z[vt].updateMatrixWorld(!0);ut.length===2?O(S,x,v):S.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let K=null;function $(G,k){if(c=k.getViewerPose(l||o),p=k,c!==null){const ut=c.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let Z=!1;ut.length!==S.cameras.length&&(S.cameras.length=0,Z=!0);for(let vt=0;vt<ut.length;vt++){const At=ut[vt];let W=null;if(f!==null)W=f.getViewport(At);else{const ct=u.getViewSubImage(h,At);W=ct.viewport,vt===0&&(t.setRenderTargetTextures(d,ct.colorTexture,h.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(d))}let z=E[vt];z===void 0&&(z=new Be,z.layers.enable(vt),z.viewport=new ne,E[vt]=z),z.matrix.fromArray(At.transform.matrix),z.projectionMatrix.fromArray(At.projectionMatrix),z.viewport.set(W.x,W.y,W.width,W.height),vt===0&&S.matrix.copy(z.matrix),Z===!0&&S.cameras.push(z)}}for(let ut=0;ut<_.length;ut++){const Z=y[ut],vt=_[ut];Z!==null&&vt!==void 0&&vt.update(Z,k,l||o)}K&&K(G,k),p=null}const j=new kf;j.setAnimationLoop($),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function ub(n,t){function e(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Ye&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Ye&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let x;d.aoMap?x=d.aoMap:d.lightMap&&(x=d.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=y*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ye&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function hb(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(35375):0;function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function c(y,x){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",d));const E=x.program;i.updateUBOMapping(y,E);const S=t.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function u(y){const x=h();y.__bindingPointIndex=x;const v=n.createBuffer(),E=y.__size,S=y.usage;return n.bindBuffer(35345,v),n.bufferData(35345,E,S),n.bindBuffer(35345,null),n.bindBufferBase(35345,x,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],v=y.uniforms,E=y.__cache;n.bindBuffer(35345,x);for(let S=0,R=v.length;S<R;S++){const M=v[S];if(p(M,S,E)===!0){const C=M.value,D=M.__offset;typeof C=="number"?(M.__data[0]=C,n.bufferSubData(35345,D,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):C.toArray(M.__data),n.bufferSubData(35345,D,M.__data))}}n.bindBuffer(35345,null)}function p(y,x,v){const E=y.value;if(v[x]===void 0)return typeof E=="number"?v[x]=E:v[x]=E.clone(),!0;if(typeof E=="number"){if(v[x]!==E)return v[x]=E,!0}else{const S=v[x];if(S.equals(E)===!1)return S.copy(E),!0}return!1}function g(y){const x=y.uniforms;let v=0;const E=16;let S=0;for(let R=0,M=x.length;R<M;R++){const C=x[R],D=m(C);if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,R>0){S=v%E;const X=E-S;S!==0&&X-D.boundary<0&&(v+=E-S,C.__offset=v)}v+=D.storage}return S=v%E,S>0&&(v+=E-S),y.__size=v,y.__cache={},this}function m(y){const x=y.value,v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function d(y){const x=y.target;x.removeEventListener("dispose",d);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function _(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function fb(){const n=$s("canvas");return n.style.display="block",n}function Yf(n={}){this.isWebGLRenderer=!0;const t=n.canvas!==void 0?n.canvas:fb(),e=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ti,this.physicallyCorrectLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,y=0,x=null,v=-1,E=null;const S=new ne,R=new ne;let M=null,C=t.width,D=t.height,X=1,nt=null,V=null;const O=new ne(0,0,C,D),Y=new ne(0,0,C,D);let K=!1;const $=new El;let j=!1,G=!1,k=null;const ut=new $t,Z=new _t,vt=new L,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return x===null?X:1}let z=e;function ct(P,q){for(let st=0;st<P.length;st++){const H=P[st],lt=t.getContext(H,q);if(lt!==null)return lt}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),z===null){const q=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&q.shift(),z=ct(q,P),z===null)throw ct(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ht,xt,pt,Mt,b,A,I,B,U,et,at,Q,ft,it,T,w,N,J,rt,dt,bt,mt,tt,Ct;function Dt(){ht=new wy(z),xt=new _y(z,ht,n),ht.init(xt),mt=new rb(z,ht,xt),pt=new ib(z,ht,xt),Mt=new Ey,b=new HM,A=new sb(z,ht,pt,b,xt,mt,Mt),I=new xy(m),B=new by(m),U=new N_(z,xt),tt=new my(z,ht,U,xt),et=new Sy(z,U,Mt,tt),at=new Ly(z,et,U,Mt),rt=new Py(z,xt,A),w=new vy(b),Q=new kM(m,I,B,ht,xt,tt,w),ft=new ub(m,b),it=new qM,T=new JM(ht,xt),J=new py(m,I,B,pt,at,u,o),N=new nb(m,at,xt),Ct=new hb(z,Mt,xt,pt),dt=new gy(z,ht,Mt,xt),bt=new Ay(z,ht,Mt,xt),Mt.programs=Q.programs,m.capabilities=xt,m.extensions=ht,m.properties=b,m.renderLists=it,m.shadowMap=N,m.state=pt,m.info=Mt}Dt();const Tt=new cb(m,z);this.xr=Tt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=ht.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ht.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(C,D,!1))},this.getSize=function(P){return P.set(C,D)},this.setSize=function(P,q,st){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=P,D=q,t.width=Math.floor(P*X),t.height=Math.floor(q*X),st!==!1&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(C*X,D*X).floor()},this.setDrawingBufferSize=function(P,q,st){C=P,D=q,X=st,t.width=Math.floor(P*st),t.height=Math.floor(q*st),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(O)},this.setViewport=function(P,q,st,H){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,q,st,H),pt.viewport(S.copy(O).multiplyScalar(X).floor())},this.getScissor=function(P){return P.copy(Y)},this.setScissor=function(P,q,st,H){P.isVector4?Y.set(P.x,P.y,P.z,P.w):Y.set(P,q,st,H),pt.scissor(R.copy(Y).multiplyScalar(X).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(P){pt.setScissorTest(K=P)},this.setOpaqueSort=function(P){nt=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(P=!0,q=!0,st=!0){let H=0;P&&(H|=16384),q&&(H|=256),st&&(H|=1024),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),it.dispose(),T.dispose(),b.dispose(),I.dispose(),B.dispose(),at.dispose(),tt.dispose(),Ct.dispose(),Q.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",St),Tt.removeEventListener("sessionend",Pt),k&&(k.dispose(),k=null),qt.stop()};function Lt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const P=Mt.autoReset,q=N.enabled,st=N.autoUpdate,H=N.needsUpdate,lt=N.type;Dt(),Mt.autoReset=P,N.enabled=q,N.autoUpdate=st,N.needsUpdate=H,N.type=lt}function Ot(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Qt(P){const q=P.target;q.removeEventListener("dispose",Qt),de(q)}function de(P){F(P),b.remove(P)}function F(P){const q=b.get(P).programs;q!==void 0&&(q.forEach(function(st){Q.releaseProgram(st)}),P.isShaderMaterial&&Q.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,st,H,lt,Rt){q===null&&(q=At);const Nt=lt.isMesh&&lt.matrixWorld.determinant()<0,Gt=Cd(P,q,st,H,lt);pt.setMaterial(H,Nt);let Bt=st.index;const jt=st.attributes.position;if(Bt===null){if(jt===void 0||jt.count===0)return}else if(Bt.count===0)return;let Vt=1;H.wireframe===!0&&(Bt=et.getWireframeAttribute(st),Vt=2),tt.setup(lt,H,Gt,st,Bt);let Wt,re=dt;Bt!==null&&(Wt=U.get(Bt),re=bt,re.setIndex(Wt));const ri=Bt!==null?Bt.count:jt.count,Di=st.drawRange.start*Vt,Ii=st.drawRange.count*Vt,an=Rt!==null?Rt.start*Vt:0,Xt=Rt!==null?Rt.count*Vt:1/0,Oi=Math.max(Di,an),ae=Math.min(ri,Di+Ii,an+Xt)-1,ke=Math.max(0,ae-Oi+1);if(ke!==0){if(lt.isMesh)H.wireframe===!0?(pt.setLineWidth(H.wireframeLinewidth*W()),re.setMode(1)):re.setMode(4);else if(lt.isLine){let Fn=H.linewidth;Fn===void 0&&(Fn=1),pt.setLineWidth(Fn*W()),lt.isLineSegments?re.setMode(1):lt.isLineLoop?re.setMode(2):re.setMode(3)}else lt.isPoints?re.setMode(0):lt.isSprite&&re.setMode(4);if(lt.isInstancedMesh)re.renderInstances(Oi,ke,lt.count);else if(st.isInstancedBufferGeometry){const Fn=Math.min(st.instanceCount,st._maxInstanceCount);re.renderInstances(Oi,ke,Fn)}else re.render(Oi,ke)}},this.compile=function(P,q){function st(H,lt,Rt){H.transparent===!0&&H.side===Kn?(H.side=Ye,H.needsUpdate=!0,Ve(H,lt,Rt),H.side=fs,H.needsUpdate=!0,Ve(H,lt,Rt),H.side=Kn):Ve(H,lt,Rt)}f=T.get(P),f.init(),g.push(f),P.traverseVisible(function(H){H.isLight&&H.layers.test(q.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(m.physicallyCorrectLights),P.traverse(function(H){const lt=H.material;if(lt)if(Array.isArray(lt))for(let Rt=0;Rt<lt.length;Rt++){const Nt=lt[Rt];st(Nt,P,H)}else st(lt,P,H)}),g.pop(),f=null};let ot=null;function gt(P){ot&&ot(P)}function St(){qt.stop()}function Pt(){qt.start()}const qt=new kf;qt.setAnimationLoop(gt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(P){ot=P,Tt.setAnimationLoop(P),P===null?qt.stop():qt.start()},Tt.addEventListener("sessionstart",St),Tt.addEventListener("sessionend",Pt),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(q),q=Tt.getCamera()),P.isScene===!0&&P.onBeforeRender(m,P,q,x),f=T.get(P,g.length),f.init(),g.push(f),ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(ut),G=this.localClippingEnabled,j=w.init(this.clippingPlanes,G,q),h=it.get(P,p.length),h.init(),p.push(h),pe(P,q,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(nt,V),j===!0&&w.beginShadows();const st=f.state.shadowsArray;if(N.render(st,P,q),j===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(h,P),f.setupLights(m.physicallyCorrectLights),q.isArrayCamera){const H=q.cameras;for(let lt=0,Rt=H.length;lt<Rt;lt++){const Nt=H[lt];ye(h,P,Nt,Nt.viewport)}}else ye(h,P,q);x!==null&&(A.updateMultisampleRenderTarget(x),A.updateRenderTargetMipmap(x)),P.isScene===!0&&P.onAfterRender(m,P,q),tt.resetDefaultState(),v=-1,E=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function pe(P,q,st,H){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)st=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||$.intersectsSprite(P)){H&&vt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ut);const Nt=at.update(P),Gt=P.material;Gt.visible&&h.push(P,Nt,Gt,st,vt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Mt.render.frame&&(P.skeleton.update(),P.skeleton.frame=Mt.render.frame),!P.frustumCulled||$.intersectsObject(P))){H&&vt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ut);const Nt=at.update(P),Gt=P.material;if(Array.isArray(Gt)){const Bt=Nt.groups;for(let jt=0,Vt=Bt.length;jt<Vt;jt++){const Wt=Bt[jt],re=Gt[Wt.materialIndex];re&&re.visible&&h.push(P,Nt,re,st,vt.z,Wt)}}else Gt.visible&&h.push(P,Nt,Gt,st,vt.z,null)}}const Rt=P.children;for(let Nt=0,Gt=Rt.length;Nt<Gt;Nt++)pe(Rt[Nt],q,st,H)}function ye(P,q,st,H){const lt=P.opaque,Rt=P.transmissive,Nt=P.transparent;f.setupLightsView(st),Rt.length>0&&si(lt,q,st),H&&pt.viewport(S.copy(H)),lt.length>0&&ee(lt,q,st),Rt.length>0&&ee(Rt,q,st),Nt.length>0&&ee(Nt,q,st),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function si(P,q,st){const H=xt.isWebGL2;k===null&&(k=new Ci(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")?Zs:Ei,minFilter:So,samples:H&&r===!0?4:0})),m.getDrawingBufferSize(Z),H?k.setSize(Z.x,Z.y):k.setSize(ja(Z.x),ja(Z.y));const lt=m.getRenderTarget();m.setRenderTarget(k),m.clear();const Rt=m.toneMapping;m.toneMapping=Ln,ee(P,q,st),m.toneMapping=Rt,A.updateMultisampleRenderTarget(k),A.updateRenderTargetMipmap(k),m.setRenderTarget(lt)}function ee(P,q,st){const H=q.isScene===!0?q.overrideMaterial:null;for(let lt=0,Rt=P.length;lt<Rt;lt++){const Nt=P[lt],Gt=Nt.object,Bt=Nt.geometry,jt=H===null?Nt.material:H,Vt=Nt.group;Gt.layers.test(st.layers)&&vn(Gt,q,st,Bt,jt,Vt)}}function vn(P,q,st,H,lt,Rt){P.onBeforeRender(m,q,st,H,lt,Rt),P.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),lt.onBeforeRender(m,q,st,H,P,Rt),lt.transparent===!0&&lt.side===Kn?(lt.side=Ye,lt.needsUpdate=!0,m.renderBufferDirect(st,q,H,lt,P,Rt),lt.side=fs,lt.needsUpdate=!0,m.renderBufferDirect(st,q,H,lt,P,Rt),lt.side=Kn):m.renderBufferDirect(st,q,H,lt,P,Rt),P.onAfterRender(m,q,st,H,lt,Rt)}function Ve(P,q,st){q.isScene!==!0&&(q=At);const H=b.get(P),lt=f.state.lights,Rt=f.state.shadowsArray,Nt=lt.state.version,Gt=Q.getParameters(P,lt.state,Rt,q,st),Bt=Q.getProgramCacheKey(Gt);let jt=H.programs;H.environment=P.isMeshStandardMaterial?q.environment:null,H.fog=q.fog,H.envMap=(P.isMeshStandardMaterial?B:I).get(P.envMap||H.environment),jt===void 0&&(P.addEventListener("dispose",Qt),jt=new Map,H.programs=jt);let Vt=jt.get(Bt);if(Vt!==void 0){if(H.currentProgram===Vt&&H.lightsStateVersion===Nt)return Bl(P,Gt),Vt}else Gt.uniforms=Q.getUniforms(P),P.onBuild(st,Gt,m),P.onBeforeCompile(Gt,m),Vt=Q.acquireProgram(Gt,Bt),jt.set(Bt,Vt),H.uniforms=Gt.uniforms;const Wt=H.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Wt.clippingPlanes=w.uniform),Bl(P,Gt),H.needsLights=Ld(P),H.lightsStateVersion=Nt,H.needsLights&&(Wt.ambientLightColor.value=lt.state.ambient,Wt.lightProbe.value=lt.state.probe,Wt.directionalLights.value=lt.state.directional,Wt.directionalLightShadows.value=lt.state.directionalShadow,Wt.spotLights.value=lt.state.spot,Wt.spotLightShadows.value=lt.state.spotShadow,Wt.rectAreaLights.value=lt.state.rectArea,Wt.ltc_1.value=lt.state.rectAreaLTC1,Wt.ltc_2.value=lt.state.rectAreaLTC2,Wt.pointLights.value=lt.state.point,Wt.pointLightShadows.value=lt.state.pointShadow,Wt.hemisphereLights.value=lt.state.hemi,Wt.directionalShadowMap.value=lt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Wt.spotShadowMap.value=lt.state.spotShadowMap,Wt.spotLightMatrix.value=lt.state.spotLightMatrix,Wt.spotLightMap.value=lt.state.spotLightMap,Wt.pointShadowMap.value=lt.state.pointShadowMap,Wt.pointShadowMatrix.value=lt.state.pointShadowMatrix);const re=Vt.getUniforms(),ri=to.seqWithValue(re.seq,Wt);return H.currentProgram=Vt,H.uniformsList=ri,Vt}function Bl(P,q){const st=b.get(P);st.outputEncoding=q.outputEncoding,st.instancing=q.instancing,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function Cd(P,q,st,H,lt){q.isScene!==!0&&(q=At),A.resetTextureUnits();const Rt=q.fog,Nt=H.isMeshStandardMaterial?q.environment:null,Gt=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Ti,Bt=(H.isMeshStandardMaterial?B:I).get(H.envMap||Nt),jt=H.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Vt=!!H.normalMap&&!!st.attributes.tangent,Wt=!!st.morphAttributes.position,re=!!st.morphAttributes.normal,ri=!!st.morphAttributes.color,Di=H.toneMapped?m.toneMapping:Ln,Ii=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,an=Ii!==void 0?Ii.length:0,Xt=b.get(H),Oi=f.state.lights;if(j===!0&&(G===!0||P!==E)){const Ne=P===E&&H.id===v;w.setState(H,P,Ne)}let ae=!1;H.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Oi.state.version||Xt.outputEncoding!==Gt||lt.isInstancedMesh&&Xt.instancing===!1||!lt.isInstancedMesh&&Xt.instancing===!0||lt.isSkinnedMesh&&Xt.skinning===!1||!lt.isSkinnedMesh&&Xt.skinning===!0||Xt.envMap!==Bt||H.fog===!0&&Xt.fog!==Rt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==w.numPlanes||Xt.numIntersection!==w.numIntersection)||Xt.vertexAlphas!==jt||Xt.vertexTangents!==Vt||Xt.morphTargets!==Wt||Xt.morphNormals!==re||Xt.morphColors!==ri||Xt.toneMapping!==Di||xt.isWebGL2===!0&&Xt.morphTargetsCount!==an)&&(ae=!0):(ae=!0,Xt.__version=H.version);let ke=Xt.currentProgram;ae===!0&&(ke=Ve(H,q,lt));let Fn=!1,Ss=!1,Co=!1;const Ae=ke.getUniforms(),oi=Xt.uniforms;if(pt.useProgram(ke.program)&&(Fn=!0,Ss=!0,Co=!0),H.id!==v&&(v=H.id,Ss=!0),Fn||E!==P){if(Ae.setValue(z,"projectionMatrix",P.projectionMatrix),xt.logarithmicDepthBuffer&&Ae.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),E!==P&&(E=P,Ss=!0,Co=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Ne=Ae.map.cameraPosition;Ne!==void 0&&Ne.setValue(z,vt.setFromMatrixPosition(P.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ae.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||lt.isSkinnedMesh)&&Ae.setValue(z,"viewMatrix",P.matrixWorldInverse)}if(lt.isSkinnedMesh){Ae.setOptional(z,lt,"bindMatrix"),Ae.setOptional(z,lt,"bindMatrixInverse");const Ne=lt.skeleton;Ne&&(xt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ae.setValue(z,"boneTexture",Ne.boneTexture,A),Ae.setValue(z,"boneTextureSize",Ne.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Po=st.morphAttributes;if((Po.position!==void 0||Po.normal!==void 0||Po.color!==void 0&&xt.isWebGL2===!0)&&rt.update(lt,st,H,ke),(Ss||Xt.receiveShadow!==lt.receiveShadow)&&(Xt.receiveShadow=lt.receiveShadow,Ae.setValue(z,"receiveShadow",lt.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(oi.envMap.value=Bt,oi.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Ss&&(Ae.setValue(z,"toneMappingExposure",m.toneMappingExposure),Xt.needsLights&&Pd(oi,Co),Rt&&H.fog===!0&&ft.refreshFogUniforms(oi,Rt),ft.refreshMaterialUniforms(oi,H,X,D,k),to.upload(z,Xt.uniformsList,oi,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(to.upload(z,Xt.uniformsList,oi,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ae.setValue(z,"center",lt.center),Ae.setValue(z,"modelViewMatrix",lt.modelViewMatrix),Ae.setValue(z,"normalMatrix",lt.normalMatrix),Ae.setValue(z,"modelMatrix",lt.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ne=H.uniformsGroups;for(let Lo=0,Rd=Ne.length;Lo<Rd;Lo++)if(xt.isWebGL2){const Ul=Ne[Lo];Ct.update(Ul,ke),Ct.bind(Ul,ke)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ke}function Pd(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Ld(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(P,q,st){b.get(P.texture).__webglTexture=q,b.get(P.depthTexture).__webglTexture=st;const H=b.get(P);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=st===void 0,H.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,q){const st=b.get(P);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,st=0){x=P,_=q,y=st;let H=!0,lt=null,Rt=!1,Nt=!1;if(P){const Bt=b.get(P);Bt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),H=!1):Bt.__webglFramebuffer===void 0?A.setupRenderTarget(P):Bt.__hasExternalTextures&&A.rebindTextures(P,b.get(P.texture).__webglTexture,b.get(P.depthTexture).__webglTexture);const jt=P.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Nt=!0);const Vt=b.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(lt=Vt[q],Rt=!0):xt.isWebGL2&&P.samples>0&&A.useMultisampledRTT(P)===!1?lt=b.get(P).__webglMultisampledFramebuffer:lt=Vt,S.copy(P.viewport),R.copy(P.scissor),M=P.scissorTest}else S.copy(O).multiplyScalar(X).floor(),R.copy(Y).multiplyScalar(X).floor(),M=K;if(pt.bindFramebuffer(36160,lt)&&xt.drawBuffers&&H&&pt.drawBuffers(P,lt),pt.viewport(S),pt.scissor(R),pt.setScissorTest(M),Rt){const Bt=b.get(P.texture);z.framebufferTexture2D(36160,36064,34069+q,Bt.__webglTexture,st)}else if(Nt){const Bt=b.get(P.texture),jt=q||0;z.framebufferTextureLayer(36160,36064,Bt.__webglTexture,st||0,jt)}v=-1},this.readRenderTargetPixels=function(P,q,st,H,lt,Rt,Nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Gt=Gt[Nt]),Gt){pt.bindFramebuffer(36160,Gt);try{const Bt=P.texture,jt=Bt.format,Vt=Bt.type;if(jt!==en&&mt.convert(jt)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===Zs&&(ht.has("EXT_color_buffer_half_float")||xt.isWebGL2&&ht.has("EXT_color_buffer_float"));if(Vt!==Ei&&mt.convert(Vt)!==z.getParameter(35738)&&!(Vt===yi&&(xt.isWebGL2||ht.has("OES_texture_float")||ht.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-H&&st>=0&&st<=P.height-lt&&z.readPixels(q,st,H,lt,mt.convert(jt),mt.convert(Vt),Rt)}finally{const Bt=x!==null?b.get(x).__webglFramebuffer:null;pt.bindFramebuffer(36160,Bt)}}},this.copyFramebufferToTexture=function(P,q,st=0){const H=Math.pow(2,-st),lt=Math.floor(q.image.width*H),Rt=Math.floor(q.image.height*H);A.setTexture2D(q,0),z.copyTexSubImage2D(3553,st,0,0,P.x,P.y,lt,Rt),pt.unbindTexture()},this.copyTextureToTexture=function(P,q,st,H=0){const lt=q.image.width,Rt=q.image.height,Nt=mt.convert(st.format),Gt=mt.convert(st.type);A.setTexture2D(st,0),z.pixelStorei(37440,st.flipY),z.pixelStorei(37441,st.premultiplyAlpha),z.pixelStorei(3317,st.unpackAlignment),q.isDataTexture?z.texSubImage2D(3553,H,P.x,P.y,lt,Rt,Nt,Gt,q.image.data):q.isCompressedTexture?z.compressedTexSubImage2D(3553,H,P.x,P.y,q.mipmaps[0].width,q.mipmaps[0].height,Nt,q.mipmaps[0].data):z.texSubImage2D(3553,H,P.x,P.y,Nt,Gt,q.image),H===0&&st.generateMipmaps&&z.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(P,q,st,H,lt=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Rt=P.max.x-P.min.x+1,Nt=P.max.y-P.min.y+1,Gt=P.max.z-P.min.z+1,Bt=mt.convert(H.format),jt=mt.convert(H.type);let Vt;if(H.isData3DTexture)A.setTexture3D(H,0),Vt=32879;else if(H.isDataArrayTexture)A.setTexture2DArray(H,0),Vt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,H.flipY),z.pixelStorei(37441,H.premultiplyAlpha),z.pixelStorei(3317,H.unpackAlignment);const Wt=z.getParameter(3314),re=z.getParameter(32878),ri=z.getParameter(3316),Di=z.getParameter(3315),Ii=z.getParameter(32877),an=st.isCompressedTexture?st.mipmaps[0]:st.image;z.pixelStorei(3314,an.width),z.pixelStorei(32878,an.height),z.pixelStorei(3316,P.min.x),z.pixelStorei(3315,P.min.y),z.pixelStorei(32877,P.min.z),st.isDataTexture||st.isData3DTexture?z.texSubImage3D(Vt,lt,q.x,q.y,q.z,Rt,Nt,Gt,Bt,jt,an.data):st.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Vt,lt,q.x,q.y,q.z,Rt,Nt,Gt,Bt,an.data)):z.texSubImage3D(Vt,lt,q.x,q.y,q.z,Rt,Nt,Gt,Bt,jt,an),z.pixelStorei(3314,Wt),z.pixelStorei(32878,re),z.pixelStorei(3316,ri),z.pixelStorei(3315,Di),z.pixelStorei(32877,Ii),lt===0&&H.generateMipmaps&&z.generateMipmap(Vt),pt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?A.setTextureCube(P,0):P.isData3DTexture?A.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?A.setTexture2DArray(P,0):A.setTexture2D(P,0),pt.unbindTexture()},this.resetState=function(){_=0,y=0,x=null,pt.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class db extends Yf{}db.prototype.isWebGL1Renderer=!0;class Kf{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=i}clone(){return new Kf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class pb extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class US{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new L;class Qf{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ku extends De{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hu=new $t,Wu=new $t,Or=[],mb=new $t,Ds=new sn;class GS extends sn{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ku(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let s=0;s<i;s++)this.setMatrixAt(s,mb)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Hu),Wu.multiplyMatrices(i,Hu),Ds.matrixWorld=Wu,Ds.raycast(t,Or);for(let o=0,a=Or.length;o<a;o++){const l=Or[o];l.instanceId=r,l.object=this,e.push(l)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ku(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Pl extends Nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qu=new L,ju=new L,Xu=new $t,ma=new Sl,Nr=new or;class gb extends _e{constructor(t=new te,e=new Pl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)qu.fromBufferAttribute(e,s-1),ju.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=qu.distanceTo(ju);t.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;Xu.copy(s).invert(),ma.copy(t.ray).applyMatrix4(Xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,f=new L,p=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=_,v=y-1;x<v;x+=p){const E=g.getX(x),S=g.getX(x+1);if(c.fromBufferAttribute(d,E),u.fromBufferAttribute(d,S),ma.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(f);M<t.near||M>t.far||e.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let x=_,v=y-1;x<v;x+=p){if(c.fromBufferAttribute(d,x),u.fromBufferAttribute(d,x+1),ma.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(f);S<t.near||S>t.far||e.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Yu=new L,Ku=new L;class Jf extends gb{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Yu.fromBufferAttribute(e,s),Ku.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Yu.distanceTo(Ku);t.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zf extends Nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qu=new $t,Ya=new Sl,Fr=new or,zr=new L;class Ju extends _e{constructor(t=new te,e=new Zf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;Qu.copy(s).invert(),Ya.copy(t.ray).applyMatrix4(Qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);zr.fromBufferAttribute(h,d),Zu(zr,d,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)zr.fromBufferAttribute(h,g),Zu(zr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zu(n,t,e,i,s,r,o){const a=Ya.distanceSqToPoint(n);if(a<e){const l=new L;Ya.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class VS extends Ge{constructor(t,e,i){super({width:t,height:e}),this.isFramebufferTexture=!0,this.format=i,this.magFilter=be,this.minFilter=be,this.generateMipmaps=!1,this.needsUpdate=!0}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new _t:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,s=[],r=[],o=[],a=new L,l=new $t;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ve(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ve(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ll extends _n{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new _t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _b extends Ll{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Br=new L,ga=new Rl,_a=new Rl,va=new Rl;class vb extends _n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Br.subVectors(s[0],s[1]).add(s[0]),c=Br);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Br.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),ga.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,d),_a.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,d),va.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_a.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),va.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ga.calc(l),_a.calc(l),va.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $u(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function xb(n,t){const e=1-n;return e*e*t}function yb(n,t){return 2*(1-n)*n*t}function Mb(n,t){return n*n*t}function ks(n,t,e,i){return xb(n,t)+yb(n,e)+Mb(n,i)}function bb(n,t){const e=1-n;return e*e*e*t}function wb(n,t){const e=1-n;return 3*e*e*n*t}function Sb(n,t){return 3*(1-n)*n*n*t}function Ab(n,t){return n*n*n*t}function Hs(n,t,e,i,s){return bb(n,t)+wb(n,e)+Sb(n,i)+Ab(n,s)}class $f extends _n{constructor(t=new _t,e=new _t,i=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _t){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eb extends _n{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y),Hs(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dl extends _n{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const i=e||new _t;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tb extends _n{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class td extends _n{constructor(t=new _t,e=new _t,i=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _t){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ed extends _n{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y),ks(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nd extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set($u(a,l.x,c.x,u.x,h.x),$u(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var Il=Object.freeze({__proto__:null,ArcCurve:_b,CatmullRomCurve3:vb,CubicBezierCurve:$f,CubicBezierCurve3:Eb,EllipseCurve:Ll,LineCurve:Dl,LineCurve3:Tb,QuadraticBezierCurve:td,QuadraticBezierCurve3:ed,SplineCurve:nd});class Cb extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Dl(e,t))}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Il[s.type]().fromJSON(s))}return this}}class Ka extends Cb{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Dl(this.currentPoint.clone(),new _t(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new td(this.currentPoint.clone(),new _t(t,e),new _t(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new $f(this.currentPoint.clone(),new _t(t,e),new _t(i,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new nd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Ll(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class id extends te{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ve(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new L,f=new _t,p=new L,g=new L,m=new L;let d=0,_=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:d=t[y+1].x-t[y].x,_=t[y+1].y-t[y].y,p.x=_*1,p.y=-d,p.z=_*0,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:d=t[y+1].x-t[y].x,_=t[y+1].y-t[y].y,p.x=_*1,p.y=-d,p.z=_*0,g.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(g)}for(let y=0;y<=e;y++){const x=i+y*u*s,v=Math.sin(x),E=Math.cos(x);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*v,h.y=t[S].y,h.z=t[S].x*E,o.push(h.x,h.y,h.z),f.x=y/e,f.y=S/(t.length-1),a.push(f.x,f.y);const R=l[3*S+0]*v,M=l[3*S+1],C=l[3*S+0]*E;c.push(R,M,C)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const v=x+y*t.length,E=v,S=v+t.length,R=v+t.length+1,M=v+1;r.push(E,S,M),r.push(R,M,S)}this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("uv",new It(a,2)),this.setAttribute("normal",new It(c,3))}static fromJSON(t){return new id(t.points,t.segments,t.phiStart,t.phiLength)}}class sd extends te{constructor(t=1,e=8,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,u=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=i+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}static fromJSON(t){return new sd(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ol extends te{constructor(t=1,e=1,i=1,s=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const m=[],d=i/2;let _=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(p,2));function y(){const v=new L,E=new L;let S=0;const R=(e-t)/i;for(let M=0;M<=r;M++){const C=[],D=M/r,X=D*(e-t)+t;for(let nt=0;nt<=s;nt++){const V=nt/s,O=V*l+a,Y=Math.sin(O),K=Math.cos(O);E.x=X*Y,E.y=-D*i+d,E.z=X*K,h.push(E.x,E.y,E.z),v.set(Y,R,K).normalize(),f.push(v.x,v.y,v.z),p.push(V,1-D),C.push(g++)}m.push(C)}for(let M=0;M<s;M++)for(let C=0;C<r;C++){const D=m[C][M],X=m[C+1][M],nt=m[C+1][M+1],V=m[C][M+1];u.push(D,X,V),u.push(X,nt,V),S+=6}c.addGroup(_,S,0),_+=S}function x(v){const E=g,S=new _t,R=new L;let M=0;const C=v===!0?t:e,D=v===!0?1:-1;for(let nt=1;nt<=s;nt++)h.push(0,d*D,0),f.push(0,D,0),p.push(.5,.5),g++;const X=g;for(let nt=0;nt<=s;nt++){const O=nt/s*l+a,Y=Math.cos(O),K=Math.sin(O);R.x=C*K,R.y=d*D,R.z=C*Y,h.push(R.x,R.y,R.z),f.push(0,D,0),S.x=Y*.5+.5,S.y=K*.5*D+.5,p.push(S.x,S.y),g++}for(let nt=0;nt<s;nt++){const V=E+nt,O=X+nt;v===!0?u.push(O,O+1,V):u.push(O+1,O,V),M+=3}c.addGroup(_,M,v===!0?1:2),_+=M}}static fromJSON(t){return new Ol(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rd extends Ol{constructor(t=1,e=1,i=8,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new rd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ws extends te{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new L,v=new L,E=new L;for(let S=0;S<e.length;S+=3)p(e[S+0],x),p(e[S+1],v),p(e[S+2],E),l(x,v,E,y)}function l(y,x,v,E){const S=E+1,R=[];for(let M=0;M<=S;M++){R[M]=[];const C=y.clone().lerp(v,M/S),D=x.clone().lerp(v,M/S),X=S-M;for(let nt=0;nt<=X;nt++)nt===0&&M===S?R[M][nt]=C:R[M][nt]=C.clone().lerp(D,nt/X)}for(let M=0;M<S;M++)for(let C=0;C<2*(S-M)-1;C++){const D=Math.floor(C/2);C%2===0?(f(R[M][D+1]),f(R[M+1][D]),f(R[M][D])):(f(R[M][D+1]),f(R[M+1][D+1]),f(R[M+1][D]))}}function c(y){const x=new L;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const y=new L;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=d(y)/2/Math.PI+.5,E=_(y)/Math.PI+.5;o.push(v,1-E)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],E=o[y+4],S=Math.max(x,v,E),R=Math.min(x,v,E);S>.9&&R<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,x){const v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const y=new L,x=new L,v=new L,E=new L,S=new _t,R=new _t,M=new _t;for(let C=0,D=0;C<r.length;C+=9,D+=6){y.set(r[C+0],r[C+1],r[C+2]),x.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),S.set(o[D+0],o[D+1]),R.set(o[D+2],o[D+3]),M.set(o[D+4],o[D+5]),E.copy(y).add(x).add(v).divideScalar(3);const X=d(E);m(S,D+0,y,X),m(R,D+2,x,X),m(M,D+4,v,X)}}function m(y,x,v,E){E<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=E/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(t){return new ws(t.vertices,t.indices,t.radius,t.details)}}class od extends ws{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new od(t.radius,t.detail)}}const Ur=new L,Gr=new L,xa=new L,Vr=new dn;class kS extends te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Zr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:d,c:_}=Vr;if(m.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Vr.getNormal(xa),h[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,h[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=h[y],E=h[x],S=Vr[u[y]],R=Vr[u[x]],M=`${v}_${E}`,C=`${E}_${v}`;C in f&&f[C]?(xa.dot(f[C].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(R.x,R.y,R.z)),f[C]=null):M in f||(f[M]={index0:c[y],index1:c[x],normal:xa.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:d}=f[g];Ur.fromBufferAttribute(a,m),Gr.fromBufferAttribute(a,d),p.push(Ur.x,Ur.y,Ur.z),p.push(Gr.x,Gr.y,Gr.z)}this.setAttribute("position",new It(p,3))}}}class Ws extends Ka{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Ka().fromJSON(s))}return this}}const Pb={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=ad(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(i&&(r=Ob(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return tr(r,o,e,a,l,p,0),o}};function ad(n,t,e,i,s){let r,o;if(s===qb(n,t,e,i)>0)for(r=t;r<e;r+=i)o=th(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=th(r,n[r],n[r+1],o);return o&&To(o,o.next)&&(nr(o),o=o.next),o}function Pi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(To(e,e.next)||se(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function tr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Ub(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Rb(n,i,s,r):Lb(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),nr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Db(Pi(n),t,e),tr(n,t,e,i,s,r,2)):o===2&&Ib(n,t,e,i,s,r):tr(Pi(n),t,e,i,s,r,1);break}}}function Lb(n){const t=n.prev,e=n,i=n.next;if(se(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&ts(s,a,r,l,o,c,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rb(n,t,e,i){const s=n.prev,r=n,o=n.next;if(se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,m=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,_=Qa(p,g,t,e,i),y=Qa(m,d,t,e,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=_&&v&&v.z<=y;){if(x.x>=p&&x.x<=m&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&ts(a,u,l,h,c,f,x.x,x.y)&&se(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=m&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&ts(a,u,l,h,c,f,v.x,v.y)&&se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=p&&x.x<=m&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&ts(a,u,l,h,c,f,x.x,x.y)&&se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=m&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&ts(a,u,l,h,c,f,v.x,v.y)&&se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Db(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!To(s,r)&&ld(s,i,i.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),nr(i),nr(i.next),i=n=r),i=i.next}while(i!==n);return Pi(i)}function Ib(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kb(o,a)){let l=cd(o,a);o=Pi(o,o.next),l=Pi(l,l.next),tr(o,t,e,i,s,r,0),tr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ob(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=ad(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Vb(c));for(s.sort(Nb),r=0;r<s.length;r++)e=Fb(s[r],e);return e}function Nb(n,t){return n.x-t.x}function Fb(n,t){const e=zb(n,t);if(!e)return t;const i=cd(e,n);return Pi(i,i.next),Pi(e,e.next)}function zb(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ts(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),er(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Bb(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Bb(n,t){return se(n.prev,n,t.prev)<0&&se(t.next,n,n.next)<0}function Ub(n,t,e,i){let s=n;do s.z===0&&(s.z=Qa(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Gb(s)}function Gb(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Qa(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Vb(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ts(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function kb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Hb(n,t)&&(er(n,t)&&er(t,n)&&Wb(n,t)&&(se(n.prev,n,t.prev)||se(n,t.prev,t))||To(n,t)&&se(n.prev,n,n.next)>0&&se(t.prev,t,t.next)>0)}function se(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function To(n,t){return n.x===t.x&&n.y===t.y}function ld(n,t,e,i){const s=Hr(se(n,t,e)),r=Hr(se(n,t,i)),o=Hr(se(e,i,n)),a=Hr(se(e,i,t));return!!(s!==r&&o!==a||s===0&&kr(n,e,t)||r===0&&kr(n,i,t)||o===0&&kr(e,n,i)||a===0&&kr(e,t,i))}function kr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Hr(n){return n>0?1:n<0?-1:0}function Hb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ld(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function er(n,t){return se(n.prev,n,n.next)<0?se(n,t,n.next)>=0&&se(n,n.prev,t)>=0:se(n,t,n.prev)<0||se(n,n.next,t)<0}function Wb(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function cd(n,t){const e=new Ja(n.i,n.x,n.y),i=new Ja(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function th(n,t,e,i){const s=new Ja(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ja(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Dn{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Dn.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];eh(t),nh(i,t);let o=t.length;e.forEach(eh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,nh(i,e[l]);const a=Pb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function eh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function nh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ud extends te{constructor(t=new Ws([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new It(s,3)),this.setAttribute("uv",new It(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:jb;let x,v=!1,E,S,R,M;_&&(x=_.getSpacedPoints(u),v=!0,f=!1,E=_.computeFrenetFrames(u,!1),S=new L,R=new L,M=new L),f||(d=0,p=0,g=0,m=0);const C=a.extractPoints(c);let D=C.shape;const X=C.holes;if(!Dn.isClockWise(D)){D=D.reverse();for(let b=0,A=X.length;b<A;b++){const I=X[b];Dn.isClockWise(I)&&(X[b]=I.reverse())}}const V=Dn.triangulateShape(D,X),O=D;for(let b=0,A=X.length;b<A;b++){const I=X[b];D=D.concat(I)}function Y(b,A,I){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().multiplyScalar(I).add(b)}const K=D.length,$=V.length;function j(b,A,I){let B,U,et;const at=b.x-A.x,Q=b.y-A.y,ft=I.x-b.x,it=I.y-b.y,T=at*at+Q*Q,w=at*it-Q*ft;if(Math.abs(w)>Number.EPSILON){const N=Math.sqrt(T),J=Math.sqrt(ft*ft+it*it),rt=A.x-Q/N,dt=A.y+at/N,bt=I.x-it/J,mt=I.y+ft/J,tt=((bt-rt)*it-(mt-dt)*ft)/(at*it-Q*ft);B=rt+at*tt-b.x,U=dt+Q*tt-b.y;const Ct=B*B+U*U;if(Ct<=2)return new _t(B,U);et=Math.sqrt(Ct/2)}else{let N=!1;at>Number.EPSILON?ft>Number.EPSILON&&(N=!0):at<-Number.EPSILON?ft<-Number.EPSILON&&(N=!0):Math.sign(Q)===Math.sign(it)&&(N=!0),N?(B=-Q,U=at,et=Math.sqrt(T)):(B=at,U=Q,et=Math.sqrt(T/2))}return new _t(B/et,U/et)}const G=[];for(let b=0,A=O.length,I=A-1,B=b+1;b<A;b++,I++,B++)I===A&&(I=0),B===A&&(B=0),G[b]=j(O[b],O[I],O[B]);const k=[];let ut,Z=G.concat();for(let b=0,A=X.length;b<A;b++){const I=X[b];ut=[];for(let B=0,U=I.length,et=U-1,at=B+1;B<U;B++,et++,at++)et===U&&(et=0),at===U&&(at=0),ut[B]=j(I[B],I[et],I[at]);k.push(ut),Z=Z.concat(ut)}for(let b=0;b<d;b++){const A=b/d,I=p*Math.cos(A*Math.PI/2),B=g*Math.sin(A*Math.PI/2)+m;for(let U=0,et=O.length;U<et;U++){const at=Y(O[U],G[U],B);ct(at.x,at.y,-I)}for(let U=0,et=X.length;U<et;U++){const at=X[U];ut=k[U];for(let Q=0,ft=at.length;Q<ft;Q++){const it=Y(at[Q],ut[Q],B);ct(it.x,it.y,-I)}}}const vt=g+m;for(let b=0;b<K;b++){const A=f?Y(D[b],Z[b],vt):D[b];v?(R.copy(E.normals[0]).multiplyScalar(A.x),S.copy(E.binormals[0]).multiplyScalar(A.y),M.copy(x[0]).add(R).add(S),ct(M.x,M.y,M.z)):ct(A.x,A.y,0)}for(let b=1;b<=u;b++)for(let A=0;A<K;A++){const I=f?Y(D[A],Z[A],vt):D[A];v?(R.copy(E.normals[b]).multiplyScalar(I.x),S.copy(E.binormals[b]).multiplyScalar(I.y),M.copy(x[b]).add(R).add(S),ct(M.x,M.y,M.z)):ct(I.x,I.y,h/u*b)}for(let b=d-1;b>=0;b--){const A=b/d,I=p*Math.cos(A*Math.PI/2),B=g*Math.sin(A*Math.PI/2)+m;for(let U=0,et=O.length;U<et;U++){const at=Y(O[U],G[U],B);ct(at.x,at.y,h+I)}for(let U=0,et=X.length;U<et;U++){const at=X[U];ut=k[U];for(let Q=0,ft=at.length;Q<ft;Q++){const it=Y(at[Q],ut[Q],B);v?ct(it.x,it.y+x[u-1].y,x[u-1].x+I):ct(it.x,it.y,h+I)}}}At(),W();function At(){const b=s.length/3;if(f){let A=0,I=K*A;for(let B=0;B<$;B++){const U=V[B];ht(U[2]+I,U[1]+I,U[0]+I)}A=u+d*2,I=K*A;for(let B=0;B<$;B++){const U=V[B];ht(U[0]+I,U[1]+I,U[2]+I)}}else{for(let A=0;A<$;A++){const I=V[A];ht(I[2],I[1],I[0])}for(let A=0;A<$;A++){const I=V[A];ht(I[0]+K*u,I[1]+K*u,I[2]+K*u)}}i.addGroup(b,s.length/3-b,0)}function W(){const b=s.length/3;let A=0;z(O,A),A+=O.length;for(let I=0,B=X.length;I<B;I++){const U=X[I];z(U,A),A+=U.length}i.addGroup(b,s.length/3-b,1)}function z(b,A){let I=b.length;for(;--I>=0;){const B=I;let U=I-1;U<0&&(U=b.length-1);for(let et=0,at=u+d*2;et<at;et++){const Q=K*et,ft=K*(et+1),it=A+B+Q,T=A+U+Q,w=A+U+ft,N=A+B+ft;xt(it,T,w,N)}}}function ct(b,A,I){l.push(b),l.push(A),l.push(I)}function ht(b,A,I){pt(b),pt(A),pt(I);const B=s.length/3,U=y.generateTopUV(i,s,B-3,B-2,B-1);Mt(U[0]),Mt(U[1]),Mt(U[2])}function xt(b,A,I,B){pt(b),pt(A),pt(B),pt(A),pt(I),pt(B);const U=s.length/3,et=y.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);Mt(et[0]),Mt(et[1]),Mt(et[3]),Mt(et[1]),Mt(et[2]),Mt(et[3])}function pt(b){s.push(l[b*3+0]),s.push(l[b*3+1]),s.push(l[b*3+2])}function Mt(b){r.push(b.x),r.push(b.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Xb(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Il[s.type]().fromJSON(s)),new ud(i,t.options)}}const jb={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new _t(r,o),new _t(a,l),new _t(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],m=t[r*3],d=t[r*3+1],_=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _t(o,1-l),new _t(c,1-h),new _t(f,1-g),new _t(m,1-_)]:[new _t(a,1-l),new _t(u,1-h),new _t(p,1-g),new _t(d,1-_)]}};function Xb(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hd extends ws{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hd(t.radius,t.detail)}}class fd extends ws{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fd(t.radius,t.detail)}}class dd extends te{constructor(t=.5,e=1,i=8,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,p=new L,g=new _t;for(let m=0;m<=s;m++){for(let d=0;d<=i;d++){const _=r+d/i*o;p.x=h*Math.cos(_),p.y=h*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let m=0;m<s;m++){const d=m*(i+1);for(let _=0;_<i;_++){const y=_+d,x=y,v=y+i+1,E=y+i+2,S=y+1;a.push(x,v,S),a.push(v,E,S)}}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(u,2))}static fromJSON(t){return new dd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pd extends te{constructor(t=new Ws([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(r,3)),this.setAttribute("uv",new It(o,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let p=f.shape;const g=f.holes;Dn.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,_=g.length;d<_;d++){const y=g[d];Dn.isClockWise(y)===!0&&(g[d]=y.reverse())}const m=Dn.triangulateShape(p,g);for(let d=0,_=g.length;d<_;d++){const y=g[d];p=p.concat(y)}for(let d=0,_=p.length;d<_;d++){const y=p[d];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let d=0,_=m.length;d<_;d++){const y=m[d],x=y[0]+h,v=y[1]+h,E=y[2]+h;i.push(x,v,E),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Yb(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new pd(i,t.curveSegments)}}function Yb(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Nl extends te{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,p=[],g=[],m=[],d=[];for(let _=0;_<=i;_++){const y=[],x=_/i;let v=0;_==0&&o==0?v=.5/e:_==i&&l==Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const S=E/e;h.x=-t*Math.cos(s+S*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+S*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),d.push(S+v,1-x),y.push(c++)}u.push(y)}for(let _=0;_<i;_++)for(let y=0;y<e;y++){const x=u[_][y+1],v=u[_][y],E=u[_+1][y],S=u[_+1][y+1];(_!==0||o>0)&&p.push(x,v,S),(_!==i-1||l<Math.PI)&&p.push(v,E,S)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(d,2))}static fromJSON(t){return new Nl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class md extends ws{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new md(t.radius,t.detail)}}class gd extends te{constructor(t=1,e=.4,i=8,s=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const m=g/s*r,d=p/i*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(m),h.y=(t+e*Math.cos(d))*Math.sin(m),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const m=(s+1)*p+g-1,d=(s+1)*(p-1)+g-1,_=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(m,d,y),o.push(d,_,y)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(c,2))}static fromJSON(t){return new gd(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _d extends te{constructor(t=1,e=.4,i=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:s,p:r,q:o},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],c=[],u=[],h=new L,f=new L,p=new L,g=new L,m=new L,d=new L,_=new L;for(let x=0;x<=i;++x){const v=x/i*r*Math.PI*2;y(v,r,o,t,p),y(v+.01,r,o,t,g),d.subVectors(g,p),_.addVectors(g,p),m.crossVectors(d,_),_.crossVectors(m,d),m.normalize(),_.normalize();for(let E=0;E<=s;++E){const S=E/s*Math.PI*2,R=-e*Math.cos(S),M=e*Math.sin(S);h.x=p.x+(R*_.x+M*m.x),h.y=p.y+(R*_.y+M*m.y),h.z=p.z+(R*_.z+M*m.z),l.push(h.x,h.y,h.z),f.subVectors(h,p).normalize(),c.push(f.x,f.y,f.z),u.push(x/i),u.push(E/s)}}for(let x=1;x<=i;x++)for(let v=1;v<=s;v++){const E=(s+1)*(x-1)+(v-1),S=(s+1)*x+(v-1),R=(s+1)*x+v,M=(s+1)*(x-1)+v;a.push(E,S,M),a.push(S,R,M)}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(u,2));function y(x,v,E,S,R){const M=Math.cos(x),C=Math.sin(x),D=E/v*x,X=Math.cos(D);R.x=S*(2+X)*.5*M,R.y=S*(2+X)*C*.5,R.z=S*Math.sin(D)*.5}}static fromJSON(t){return new _d(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class vd extends te{constructor(t=new ed(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new _t;let u=new L;const h=[],f=[],p=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(p,2));function m(){for(let x=0;x<e;x++)d(x);d(r===!1?e:0),y(),_()}function d(x){u=t.getPointAt(x/e,u);const v=o.normals[x],E=o.binormals[x];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,M=Math.sin(R),C=-Math.cos(R);l.x=C*v.x+M*E.x,l.y=C*v.y+M*E.y,l.z=C*v.z+M*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function _(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const E=(s+1)*(x-1)+(v-1),S=(s+1)*x+(v-1),R=(s+1)*x+v,M=(s+1)*(x-1)+v;g.push(E,S,M),g.push(S,R,M)}}function y(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)c.x=x/e,c.y=v/s,p.push(c.x,c.y)}}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new vd(new Il[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class HS extends te{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new L,r=new L;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,p=h.count;for(let g=f,m=f+p;g<m;g+=3)for(let d=0;d<3;d++){const _=a.getX(g+d),y=a.getX(g+(d+1)%3);s.fromBufferAttribute(o,_),r.fromBufferAttribute(o,y),ih(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),ih(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new It(e,3))}}}function ih(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class WS extends ii{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qS extends Nn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jS extends Nn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class XS extends Nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const lo={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Kb{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Qb=new Kb;class Fl{constructor(t){this.manager=t!==void 0?t:Qb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const An={};class Jb extends Error{constructor(t,e){super(t),this.response=e}}class YS extends Fl{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=lo.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(An[t]!==void 0){An[t].push({onLoad:e,onProgress:i,onError:s});return}An[t]=[],An[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=An[t],h=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){y();function y(){h.read().then(({done:x,value:v})=>{if(x)_.close();else{m+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let S=0,R=u.length;S<R;S++){const M=u[S];M.onProgress&&M.onProgress(E)}_.enqueue(v),y()}})}}});return new Response(d)}else throw new Jb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{lo.add(t,c);const u=An[t];delete An[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=An[t];if(u===void 0)throw this.manager.itemError(t),c;delete An[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Zb extends Fl{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=lo.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=$s("img");function l(){u(),lo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class $b extends Fl{constructor(t){super(t)}load(t,e,i,s){const r=new Ge,o=new Zb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class zl extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ya=new $t,sh=new L,rh=new L;class xd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oh=new $t,Is=new L,Ma=new L;class tw extends xd{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Is.setFromMatrixPosition(t.matrixWorld),i.position.copy(Is),Ma.copy(i.position),Ma.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ma),i.updateMatrixWorld(),s.makeTranslation(-Is.x,-Is.y,-Is.z),oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}}class KS extends zl{constructor(t,e,i=0,s=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tw}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ew extends xd{constructor(){super(new Hf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QS extends zl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.target=new _e,this.shadow=new ew}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nw extends zl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class JS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ah();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ah(){return(typeof performance>"u"?Date:performance).now()}class ZS{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lh=new _t;class $S{constructor(t=new _t(1/0,1/0),e=new _t(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=lh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return lh.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class t1 extends sn{constructor(t,e,i){const s=new Nl(e,4,2),r=new Al({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=t,this.light.updateMatrixWorld(),this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Wr=new Ms;class e1 extends Jf{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new te;r.setIndex(new De(i,1)),r.setAttribute("position",new De(s,3)),super(r,new Pl({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Wr.setFromObject(this.object),Wr.isEmpty())return;const e=Wr.min,i=Wr.max,s=this.geometry.attributes.position,r=s.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=i.y,r[5]=i.z,r[6]=e.x,r[7]=e.y,r[8]=i.z,r[9]=i.x,r[10]=e.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=e.z,r[15]=e.x,r[16]=i.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=i.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class n1 extends Jf{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new te;s.setAttribute("position",new It(e,3)),s.setAttribute("color",new It(i,3));const r=new Pl({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,i){const s=new Ht,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class i1{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ka,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,o){return this.currentPath.bezierCurveTo(t,e,i,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){const y=[];for(let x=0,v=_.length;x<v;x++){const E=_[x],S=new Ws;S.curves=E.curves,y.push(S)}return y}function i(_,y){const x=y.length;let v=!1;for(let E=x-1,S=0;S<x;E=S++){let R=y[E],M=y[S],C=M.x-R.x,D=M.y-R.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(R=y[S],C=-C,M=y[E],D=-D),_.y<R.y||_.y>M.y)continue;if(_.y===R.y){if(_.x===R.x)return!0}else{const X=D*(_.x-R.x)-C*(_.y-R.y);if(X===0)return!0;if(X<0)continue;v=!v}}else{if(_.y!==R.y)continue;if(M.x<=_.x&&_.x<=R.x||R.x<=_.x&&_.x<=M.x)return!0}}return v}const s=Dn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Ws,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=t?!u:u;const h=[],f=[];let p=[],g=0,m;f[g]=void 0,p[g]=[];for(let _=0,y=r.length;_<y;_++)a=r[_],m=a.getPoints(),o=s(m),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Ws,p:m},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:m[0]});if(!f[0])return e(r);if(f.length>1){let _=!1,y=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const E=p[x];for(let S=0;S<E.length;S++){const R=E[S];let M=!0;for(let C=0;C<f.length;C++)i(R.p,f[C].p)&&(x!==C&&y++,M?(M=!1,h[C].push(R)):_=!0);M&&h[x].push(R)}}y>0&&_===!1&&(p=h)}let d;for(let _=0,y=f.length;_<y;_++){l=f[_].s,c.push(l),d=p[_];for(let x=0,v=d.length;x<v;x++)l.holes.push(d[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);const iw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAD////+/v4BAQHIyMghISECAgJ0dHR6enre3t4EBAQDAwPX19fi4uKmpqaAgIDQ0NA7OzsGBgYRERG1tbWVlZXV1dVzc3OCgoJmZmb39/cWFhZlZWU/Pz+xsbGFhYWOjo6KiopsbGx7e3uYmJhgYGCNjY0PDw8tLS0oKChbW1txcXEXFxfExMTS0tL9/f3s7OyoqKirq6va2tpNTU3t7e1/f38FBQWtra1MTExFRUWjo6MjIyNUVFTMzMzJycltbW3h4eEeHh5CQkLKysp+fn53d3cyMjLl5eX5+fm+vr4vLy/R0dELCwvY2NgJCQlfX19paWk5OTkAAAD///8BAQECAgIMDAwmJib+/v7f399qampXV1cODg79/f3Nzc3AwMBra2u6urqwsLAGBgb09PSKiooWFhYZGRnExMQ3NzfX19eampqQkJBkZGSOjo7o6OhoaGgjIyOcnJwEBAT6+vp5eXni4uJmZmYDAwNdXV0Lv2DMAAAAU3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/kc3SeAAAAFISURBVHhetZPFkuswFET72g4zDDMzMzPje5KDMMzM8PXj8caJ7UxWOVp0laoXqqN7URimkj/B1FaeLEJBBmRdQXuU/Jv1DUwhoj0yG5sN8PYANRUwx1JahepyYKTTxIPoUuLugZX4WPLt1OhBRus50CYxyZ+iLuCyDBGdh+BxLVB3VklcAtY+miDrClY26m70cBJ4GM3+NEQTDy1EcaIMkdvoIdreEbt4fuRcEOKcH6Rjlu5ojoclcoR7iQQFoj4i6qcBZCGqMag01DM0rF7meHBaGbtKJDhRhvMX9uoc+9LPw/f4BCa5QHxq2jNj/E2L9AlgltMcn0dw4clQWAwxK7wlhwKOlgGcrEA2eli1I7UOthFyQQ6YzMP1DWO3m2D3yZyh1bBvAds+YGd3Dxo6F459AP/+Q0M3cu+Bv/dCLP5eGLPw8hbkB8nyeaUUhyruAAAAAElFTkSuQmCC",sw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACW1BMVEUAAAD///8CAgIPDw8BAQF1dXVsbGwLCwujo6NeXl43NzesrKzPz8+EhIQSEhIDAwNpaWnFxcXo6OhbW1vf398VFRU/Pz+YmJiXl5e7u7uUlJTi4uI2Njbn5+ccHBzQ0NApKSkwMDBSUlKDg4MeHh65ubmlpaVQUFB/f3+dnZ04ODgFBQUICAgtLS1XV1eqqqpRUVHd3d2Li4tOTk6GhobZ2dn8/Pz9/f14eHhaWlq3t7cHBweoqKgMDAzX19c7OztfX19FRUW+vr7s7OwvLy8KCgohISF5eXnU1NR6enqRkZF2dnbAwMB9fX1jY2Ourq6Ojo7g4OAQEBD09PSwsLANDQ0ZGRnIyMjS0tK4uLhdXV1KSkrl5eVnZ2fW1tZvb29NTU2FhYXw8PBUVFQUFBRAQEAuLi49PT3z8/PHx8cRERGnp6fExMTY2Nj39/cjIyNGRkbMzMxcXFyBgYGenp68vLyQkJC0tLQrKysJCQkbGxsODg5gYGCampp7e3s6Ojr5+fnOzs6/v78XFxdPT0/GxsampqbT09MgICAGBga2trYlJSU5OTm1tbWkpKQyMjKgoKDKyspwcHAkJCQYGBiSkpIAAAABAQERERE4ODhZWVkbGxtycnJlZWVTU1MUFBRISEiAgIBEREShoaEzMzNqamqXl5cmJibBwcHFxcWOjo5NTU0WFhYJCQkxMTGWlpYtLS2ZmZkvLy80NDSHh4fd3d1oaGgCAgILCwtUVFSUlJTDw8NiYmJYWFjGxsY7OzvExMRKSkoTExOKioqQkJCwsLC1tbU9PT3m5uZ5kJL/AAAAlnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v6TC5kUAAAB5klEQVR4XqWTU5MkURSE81ZV0zbGto21bdu2bfP0GEvbNn7WRk/09lRXd0w/7PeQFRmnHu7NmwcACGEIkPrIl/okjk8MESikFFIQST3EcBgIxXA1FDwHKIYCECCC+jRvhJaaZgH6ss8w5ogG9O/UzebWgut56NS2VDNd+BYiJQUyfg27W4THqa8b0idRMDJCWGVjk15ukm/JzVK9HaQqyYEgzWHIGH9jXYYDKeWDK4qVPGKZnW3xsSqoKxdp5dKgOHr29KbRd2v0nfvUMeU20NL27kl0UGkjR3lcQGaqTGkDxrnSx6f1h0Gon0aECRNvQGauuAryTi588DApeWrkNRdMn2Ga6QiwL845c0vmzb9XzEwLNR7r4sgPS+xLS5ctX7Hy0Srl6jVr5S/WmauK1m+Q+8V96P5YtlFNcDOWBdpcbpP0QUC+M9sOzqhJ2boN4LfXuHdE9yFIRLa695Xf6fefzPadu7p6rxEX3Yfde/aqAmwf9rMD1oM8wBkgRkD1ofzDJnYEyqPWY8fdQEwfTpysdz4/ZYHrtOyV13Mmpg9BMjh0b8724NyH85+SS71x+nDhouGr5hsu/cBPXchL+8AX2tFq4cBfRlvNFYQHImp5ILdWEADoC/SIC/efixOfxMubcP3/Anriqm2DBhxnAAAAAElFTkSuQmCC",rw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAChVBMVEUAAAD///8BAQECAgIDAwPExMS+vr4ZGRmxsbHLy8uampoSEhLIyMhnZ2eXl5dOTk7e3t4mJiY1NTVMTEwwMDCwsLAfHx9WVlYMDAzo6Oinp6cgICBmZmbPz8+EhISCgoKfn58LCwshISFCQkLf399VVVW4uLgkJCTFxcVFRUUJCQlNTU2pqakjIyMUFBTw8PCYmJiFhYWUlJRqampISEg4ODgPDw91dXU0NDSdnZ0RERGzs7OKiopERERubm7y8vKMjIzHx8fQ0NAODg6mpqY3NzeDg4OIiIjz8/Ovr6/V1dVYWFjg4OAuLi6Pj4+Li4vk5OQyMjJ/f3+srKyZmZlkZGTn5+dHR0eWlpZsbGwHBwcTExNJSUnGxsZKSkopKSnp6ekGBgYvLy/t7e3a2trJycksLCwtLS29vb1fX1+1tbWrq6scHBxTU1N6enphYWHc3Ny8vLwoKCiSkpJXV1fj4+P9/f1vb29BQUFoaGjx8fG6uroQEBDs7OwNDQ2BgYGTk5M6OjqOjo5lZWV9fX3b29srKyt7e3s8PDz6+vo9PT2qqqoEBAS/v79dXV0+Pj7R0dEWFhZ4eHgFBQUiIiKgoKAqKiptbW3v7+/Dw8N2dnZAQEBwcHAKCgoAAABDQ0Ojo6MODg4KCgoBAQFdXV03NzdISEgJCQlaWlq4uLgMDAxRUVE1NTXb29vDw8OJiYlFRUXJyckbGxtSUlIfHx97e3s4ODhoaGiNjY0aGhpYWFiFhYUSEhLOzs4oKCgUFBQVFRVAQEC7u7vv7+/y8vLMzMwDAwOenp6SkpIICAhXV1cjIyP6+vo6Ojqnp6dycnLq6uocHBxsbGw5OTm+vr6dnZ0CAgJ4QJ/JAAAAnnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/hQHg5sAAAH/SURBVHherZPTzyVBFMSru+can23b1tq2bdu2bZ7PXtu2/fdsOneSmdn7sA+7v3Q/VKWS6pOcxn+DyFt7G1wKoWpjXD1jfRyAZcJdVWsBmeEgBE+qgsPZ7xZA9dI24hfCMSsAPYPKFY44Q4Gnorq1rbnbEkRdJ6KYGuLS1wK1dXjU+rjZ1B+2Jnr1uuNnLeChx3o3hmYgplPWqK5jcreVqzNpj2x7mrqjsXPfhBFdStDhDkDtDuimqAdR6U3KquzN2HxkVte6Xl48rC9Quj8gLE0d59drRR/bsFOJ4QPu1xk6MPBhTW4UY2zQYAxhLAh4/801DzqU4QtGZo9mOaVAsC/LQ8F4uz0QHAYmxjI3JkOZkjh12vQZxjGUmf6z58wNMDuFNIsYy4ktW1isT1gXLY4UiGYhUixbXrjSZ5XZFAqN+CcErF7D1gJIYsnrUr4TT9sAHTfubczbtNnXumVrxXbGnPkvGoz7YPnxs+QC7XTBxiLhf+kyrlxNMOxD6DUCmqzYtTusyL2H7Ba6vbdYC6gDmZL27T9QmXHwUETBESDu6B/7cOzZc2o8jhMnqeXN27B35PF1gdMfWuijGYFl1PCJznz5qgY0IrIhKpIRnYn8cIiUdOgggOQ9a4rHuUKktavaa+3Pp0MAAvRLtXRIxeURAlxI/fev969w2SaA33EEtXR/l4bfAAAAAElFTkSuQmCC",ow="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA51BMVEUAAAD////+/v4CAgIDAwMHBwc8PDzn5+ddXV1eXl7d3d1QUFBOTk79/f27u7vIyMiGhobu7u4BAQH6+vr5+fnl5eWNjY07OzuVlZUFBQWRkZH///8CAgIAAAABAQH+/v78/Pz9/f0EBAT4+PgGBgb5+fn6+vqqqqoFBQX7+/sDAwMKCgrLy8uJiYlLS0vi4uIHBwdUVFQyMjIhISHh4eF6enpnZ2eTk5P09PRjY2OOjo7m5uZHR0fr6+sgICANDQ3p6eksLCyFhYXT09PMzMwZGRmSkpIYGBjc3Nz19fVzc3OVlZWZmZkfCldNAAAAG3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7Q4gSTAAABRUlEQVR4Xo1Th3KsMAyUufTe20o2XC3pvfee9/7/ewIaLh4Dk8tio5G17KyNRSSUzhQaNIo+uqJRcoJ4CP28iwqaBgolhMsSRBnp19inZQ+Wu9ZKPfQQ2js+uT4TFo9AwfblCsBNqBBk2xdI0Am/9iZrRONmNjJzNMo0QHAOY/uubRCZifwcCoTJKSB2GfC2N22tP2qdVlZdCwokAE7FeoNEGWEGDnAuHS7uNT5Ku6jTDhQODgl2PSH30KV5LevAghzYogfSekaIcShc+t1Hi5FWYaKGkaXyNrG8oiYRmQTn1PTbzAmXxvTaTm30WlgTKSj0ZX3jNlNwEQCYO/EKHvcPCWJ0Hp+eX14lh784RJvyDoMtTTmdVbcanxAWZq681RkBX2QH7CqFf/+bHHZHSOiKsP2tcSzXuKpxfCylw1vvD909BN+Y2FBm4NfNwQAAAABJRU5ErkJggg==",aw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABWVBMVEUAAAD///8BAQECAgIDAwP9/f0FBQUGBgb8/Pzx8fEEBAT6+vp3d3cICAj39/cHBwcUFBRAQECHh4eysrLb29u3t7cJCQkNDQ3p6elYWFidnZ3+/v5ra2vX19eurq4tLS1ycnIoKCgsLCzJycny8vLc3NwKCgovLy9vb29ZWVl8fHyXl5eLi4sTExMhISG/v799fX3v7+9CQkJGRkYrKyv4+PjPz8/5+flqamoZGRkgICAbGxtmZmbU1NSoqKjLy8vHx8fr6+tdXV1/f3/e3t6hoaE2NjakpKTR0dGvr6+WlpY1NTVzc3Pm5uY3Nzft7e0fHx++vr5kZGRSUlLw8PA9PT3o6OgaGhqQkJAXFxdXV1cAAAD///8CAgIBAQEcHBwLCwv7+/u5ubnX19d8fHz29vYICAjh4eEkJCSXl5cDAwO2trZhYWEFBQUqKioEBAT39/dBQUEPDw8QXwTDAAAAW3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+yyiEIQAAAXhJREFUeF6tkwWP4zAUhGdsB8tdZsZjZmZmfE6X6RD+P5ySNlI3aVWddJ8URSPZmYnePAASP+krp3sjh29IVuOf0OiKKOyfGodpnlpeEQVpzyDSkB87nEkyRJPck5j2DLGY4ACMMnhHXpXsLwogs4X5KpSHo7w7FCFrIfJTHnATu7L0i08kylkoCJ6Sq5gqc7ppiRxF+pwLuLCIDMrEwkOdjk8yOIYYUzJpBqOPfzvStzVKx9LaMXviZO336TPrgNdoGZ0NznH4fIF0SPICEwJehEoDXlq7XJIrtT7rjPn+Bq9d37hx0966jQiH53/HOgU6diDVoWRGVSede+R9uBXPdd1Qq/Y+REDZPhR5ZB9Dd+qDQb/Dalga5LOhzl14zhcvYTRe8TVUhz6sDXMUIRTe8O3gl9ywIvlqOdLs5Htu5/ugcVAutr48wv58H7T6/gEVDUBpFD9K1iJBmcSiYZDtQ3b+SqW6J/9r9dweyxapT5//dFl/7f0FEbdYPB/yQuAAAAAASUVORK5CYII=",lw={class:"w-full h-full"},cw=Li({__name:"SnowyBg",setup(n){const{random:t}=Math,e=pn(),i=pn();let s,r,o,a,l;const c=1e4,u=new te,h=[],f=new Float32Array(c*3),p=1e3,g=new $b,m=g.load(iw),d=g.load(sw),_=g.load(rw),y=g.load(ow),x=g.load(aw),v=[[[1,.2,.5],d,20],[[.95,.1,.5],_,15],[[.9,.05,.5],m,10],[[.85,0,.5],x,8],[[.8,0,.5],y,5]];let E=0,S=0;dl(()=>{D(),C(),nt()});function R(){const V=Date.now()*5e-5;a.position.x+=(E-a.position.x)*.05,a.position.y+=(-S-a.position.y)*.05,a.lookAt(o.position);for(let O=0;O<o.children.length;O++){const Y=o.children[O];Y instanceof Ju&&(Y.rotation.y=V*(O<4?O+1:-(O+1)))}for(let O=0;O<h.length;O++){const Y=v[O][0],K=360*(Y[0]+V)%360/360;h[O].color.setHSL(K,Y[1],Y[2])}}function M(V){V.isPrimary&&(E=V.clientX-s/2,S=V.clientY-r/2)}function C(){for(let V=0;V<c;V++)f[V*3]=t()*(2*p)-p,f[V*3+1]=t()*(2*p)-p,f[V*3+2]=t()*(2*p)-p;u.setAttribute("position",new De(f,3));for(let V=0;V<v.length;V++){const O=v[V][0],Y=v[V][1],K=v[V][2];h[V]=new Zf({color:new Ht().setHSL(O[0],O[1],O[2]),size:K,map:Y,blending:Ba,depthTest:!1,transparent:!0});const $=new Ju(u,h[V]);$.rotation.set(t()*6,t()*6,t()*6),o.add($)}}function D(){o=new pb;const{width:V,height:O}=i.value.getBoundingClientRect();s=V,r=O,a=new Be(75,s/r,1,2e3),a.position.z=1e3,l=new Yf({canvas:e.value,antialias:!0}),l.setSize(s,r),l.setPixelRatio(window.devicePixelRatio),o.add(new nw(4210752))}let X=0;function nt(){R(),l.render(o,a),X=requestAnimationFrame(nt)}return pl(()=>{cancelAnimationFrame(X)}),(V,O)=>(je(),Pn("div",lw,[Pe("div",{ref_key:"canvasCon",ref:i,class:"w-full h-full",onPointermove:M},[Pe("canvas",{ref_key:"canvasDom",ref:e,class:"block w-full h-full"},null,512)],544)]))}});var qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function s1(n){if(n.__esModule)return n;var t=n.default;if(typeof t=="function"){var e=function i(){return this instanceof i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var s=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:function(){return n[i]}})}),e}function uw(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}var Md=uw,hw=typeof qr=="object"&&qr&&qr.Object===Object&&qr,fw=hw,dw=fw,pw=typeof self=="object"&&self&&self.Object===Object&&self,mw=dw||pw||Function("return this")(),bd=mw,gw=bd,_w=function(){return gw.Date.now()},vw=_w,xw=/\s/;function yw(n){for(var t=n.length;t--&&xw.test(n.charAt(t)););return t}var Mw=yw,bw=Mw,ww=/^\s+/;function Sw(n){return n&&n.slice(0,bw(n)+1).replace(ww,"")}var Aw=Sw,Ew=bd,Tw=Ew.Symbol,wd=Tw,ch=wd,Sd=Object.prototype,Cw=Sd.hasOwnProperty,Pw=Sd.toString,Os=ch?ch.toStringTag:void 0;function Lw(n){var t=Cw.call(n,Os),e=n[Os];try{n[Os]=void 0;var i=!0}catch{}var s=Pw.call(n);return i&&(t?n[Os]=e:delete n[Os]),s}var Rw=Lw,Dw=Object.prototype,Iw=Dw.toString;function Ow(n){return Iw.call(n)}var Nw=Ow,uh=wd,Fw=Rw,zw=Nw,Bw="[object Null]",Uw="[object Undefined]",hh=uh?uh.toStringTag:void 0;function Gw(n){return n==null?n===void 0?Uw:Bw:hh&&hh in Object(n)?Fw(n):zw(n)}var Vw=Gw;function kw(n){return n!=null&&typeof n=="object"}var Hw=kw,Ww=Vw,qw=Hw,jw="[object Symbol]";function Xw(n){return typeof n=="symbol"||qw(n)&&Ww(n)==jw}var Yw=Xw,Kw=Aw,fh=Md,Qw=Yw,dh=NaN,Jw=/^[-+]0x[0-9a-f]+$/i,Zw=/^0b[01]+$/i,$w=/^0o[0-7]+$/i,tS=parseInt;function eS(n){if(typeof n=="number")return n;if(Qw(n))return dh;if(fh(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=fh(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=Kw(n);var e=Zw.test(n);return e||$w.test(n)?tS(n.slice(2),e?2:8):Jw.test(n)?dh:+n}var nS=eS,iS=Md,ba=vw,ph=nS,sS="Expected a function",rS=Math.max,oS=Math.min;function aS(n,t,e){var i,s,r,o,a,l,c=0,u=!1,h=!1,f=!0;if(typeof n!="function")throw new TypeError(sS);t=ph(t)||0,iS(e)&&(u=!!e.leading,h="maxWait"in e,r=h?rS(ph(e.maxWait)||0,t):r,f="trailing"in e?!!e.trailing:f);function p(S){var R=i,M=s;return i=s=void 0,c=S,o=n.apply(M,R),o}function g(S){return c=S,a=setTimeout(_,t),u?p(S):o}function m(S){var R=S-l,M=S-c,C=t-R;return h?oS(C,r-M):C}function d(S){var R=S-l,M=S-c;return l===void 0||R>=t||R<0||h&&M>=r}function _(){var S=ba();if(d(S))return y(S);a=setTimeout(_,m(S))}function y(S){return a=void 0,f&&i?p(S):(i=s=void 0,o)}function x(){a!==void 0&&clearTimeout(a),c=0,i=l=s=a=void 0}function v(){return a===void 0?o:y(ba())}function E(){var S=ba(),R=d(S);if(i=arguments,s=this,l=S,R){if(a===void 0)return g(l);if(h)return clearTimeout(a),a=setTimeout(_,t),p(l)}return a===void 0&&(a=setTimeout(_,t)),o}return E.cancel=x,E.flush=v,E}var lS=aS;const cS=yd(lS);var Ad={exports:{}};(function(n){(function(){function t(m,d){document.addEventListener?m.addEventListener("scroll",d,!1):m.attachEvent("scroll",d)}function e(m){document.body?m():document.addEventListener?document.addEventListener("DOMContentLoaded",function d(){document.removeEventListener("DOMContentLoaded",d),m()}):document.attachEvent("onreadystatechange",function d(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",d),m())})}function i(m){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(m)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function s(m,d){m.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+d+";"}function r(m){var d=m.g.offsetWidth,_=d+100;return m.j.style.width=_+"px",m.i.scrollLeft=_,m.h.scrollLeft=m.h.scrollWidth+100,m.l!==d?(m.l=d,!0):!1}function o(m,d){function _(){var x=y;r(x)&&x.g.parentNode!==null&&d(x.l)}var y=m;t(m.h,_),t(m.i,_),r(m)}function a(m,d,_){d=d||{},_=_||window,this.family=m,this.style=d.style||"normal",this.weight=d.weight||"normal",this.stretch=d.stretch||"normal",this.context=_}var l=null,c=null,u=null,h=null;function f(m){return c===null&&(p(m)&&/Apple/.test(window.navigator.vendor)?(m=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!m&&603>parseInt(m[1],10)):c=!1),c}function p(m){return h===null&&(h=!!m.document.fonts),h}function g(m,d){var _=m.style,y=m.weight;if(u===null){var x=document.createElement("div");try{x.style.font="condensed 100px sans-serif"}catch{}u=x.style.font!==""}return[_,y,u?m.stretch:"","100px",d].join(" ")}a.prototype.load=function(m,d){var _=this,y=m||"BESbswy",x=0,v=d||3e3,E=new Date().getTime();return new Promise(function(S,R){if(p(_.context)&&!f(_.context)){var M=new Promise(function(D,X){function nt(){new Date().getTime()-E>=v?X(Error(""+v+"ms timeout exceeded")):_.context.document.fonts.load(g(_,'"'+_.family+'"'),y).then(function(V){1<=V.length?D():setTimeout(nt,25)},X)}nt()}),C=new Promise(function(D,X){x=setTimeout(function(){X(Error(""+v+"ms timeout exceeded"))},v)});Promise.race([C,M]).then(function(){clearTimeout(x),S(_)},R)}else e(function(){function D(){var Z;(Z=Y!=-1&&K!=-1||Y!=-1&&$!=-1||K!=-1&&$!=-1)&&((Z=Y!=K&&Y!=$&&K!=$)||(l===null&&(Z=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!Z&&(536>parseInt(Z[1],10)||parseInt(Z[1],10)===536&&11>=parseInt(Z[2],10))),Z=l&&(Y==j&&K==j&&$==j||Y==G&&K==G&&$==G||Y==k&&K==k&&$==k)),Z=!Z),Z&&(ut.parentNode!==null&&ut.parentNode.removeChild(ut),clearTimeout(x),S(_))}function X(){if(new Date().getTime()-E>=v)ut.parentNode!==null&&ut.parentNode.removeChild(ut),R(Error(""+v+"ms timeout exceeded"));else{var Z=_.context.document.hidden;(Z===!0||Z===void 0)&&(Y=nt.g.offsetWidth,K=V.g.offsetWidth,$=O.g.offsetWidth,D()),x=setTimeout(X,50)}}var nt=new i(y),V=new i(y),O=new i(y),Y=-1,K=-1,$=-1,j=-1,G=-1,k=-1,ut=document.createElement("div");ut.dir="ltr",s(nt,g(_,"sans-serif")),s(V,g(_,"serif")),s(O,g(_,"monospace")),ut.appendChild(nt.g),ut.appendChild(V.g),ut.appendChild(O.g),_.context.document.body.appendChild(ut),j=nt.g.offsetWidth,G=V.g.offsetWidth,k=O.g.offsetWidth,X(),o(nt,function(Z){Y=Z,D()}),s(nt,g(_,'"'+_.family+'",sans-serif')),o(V,function(Z){K=Z,D()}),s(V,g(_,'"'+_.family+'",serif')),o(O,function(Z){$=Z,D()}),s(O,g(_,'"'+_.family+'",monospace'))})})},n.exports=a})()})(Ad);var uS=Ad.exports;const hS=yd(uS),fS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA9CAYAAAAd1W/BAAAHuklEQVR4nN2aQVbbyBaG/1pBlHPeHGUFUVaAGL0h7hUgVoBZQYvhG8VZAdLszTArQF4BZtwD7BW0mPXM/ZXlMpZQ2dhIkOQ75+f3karuvXVVsnScGP3mLBaLUNKfKJYUSpqiMfphjCkNH35LWHgs6QINUBtTdPLbNYCFn2Gpqqu9iyvDn18eFh1g9moPUYB8PKCvyDH7pRvAwiPsAiXy84RGVvaeZ86Cz2t+yQawhlNsiGL5maOURWdawbxQ0iNyzA1/fgkoPsDswlNJofzcInu1CzUgxgC7QY5bw5+fGooO9bzNA9TGExoje8Vn8kCsVNUj0XH10zaAYmNJZyiRnznKVF3xEt8KMcfYKXL8YfjzU0GRbtGx/ExQxqIz7QGxH7FQz3wz/PlwKCzALlCieoFNcmQXXqgF4kTYDbKcm8Y4zi+wNZw3Bv8wqCdUdU8OUIDasPd3pmqbz+SBWLGqxbs4JeM/40tW5++QY2KMiT+kAatiLtAA+ZijEcootMS9EC+RdI02mRtjQq1oGZMbYxLDh3eDIs6wVFIoPxM0orgxvhNiJqovzPKEBsQotIJxI8w23XHJ+ZHhQ6+QOFT1bT5EAfKRoxFFTfFXQexE7YuPm3EYW0g6Ro4TQ4MMH3qBhBFmO57Ijy12hDKKmWkPiJ/olYu3MP5vLECOz4wrO28AiU6xIYrlZ45SCsh0AORItN/iQzVfgY0JBQa9GRIE2BkaolB+JigleaEDIVeiPRZvYU6slieAwKCDIXCo520eIB85Skk60xsgn801QptsXbyFeamqx63jyhiTCgzaGwLGqq54Ij9zlImCSVbib4Kc11iiOjsXb2HuGDtFjnOzuv0MejUEOsOGKEI+HpBddKaOIO81lqiOzZOQZ4pvhfn3WIQc39y8nQ1gcoBdoERSKD+3yC68UIeQ37f4mFwlvhNiLLA1zDPYkvWHJswJVd03AxSgNp5QpmrhM3UMNVxjieo8oJh8Jb4TYkTYPXI8MNceW/KiAUyIVS08lp85GqGMYCXeOdRxjSWqs9fiLcRJVH9q5IZXYK0waAkDz7BUUig/E5QRIFOPUMs1lqjO3ou3ECtVdUEdV2b1BLAYZAfZLRIhHznKmFioZ6jlGktU56DFW4hXqOUVWCsMA1LVO+R4QiOUMWGmnqGOALtDEdrkAcXUUOJ7Q9y/sQA5Pm/Gsg14xEM9M0ep+I1tc2CfUEOA3aEIbTJBg0PrWMW1DXA8EcseW2MbsMDXMMBg7wbpbUF3KEKb5Gbjy+oQiB2riu2YmNUrsMM2YIp/RY6Z2AEMzPFeIXeA2QIjtElu3rh4C/GH2Hfk+EFce2yNbUCi+mPCMUWXTCjUA+QNsDsUoU1y08HiLeTIVL2yO85N4wlmkB04wi5QG4WqR0ehjiBfgN2hCG2Sm44WbyFPoS1PAMuyARYGx2Lrqz5hkzGyO2KmN0CeALtDEdokNx0u3kKuBbaG+Ov1Ol4cYE6iqhFHqI1M1Y6Y6QCIn6m+LS256X7xtsH3yPFADnusxosGOAiQqHoP+ITaSFV9qZT4qyFupnoDctPx4i3kGWA3yHFLHnushrcBFoIE2HClT6hJiUboB8FLfCfEDFXdTl/RuWl8KXUFeVLVX/CuzMYrsGNrAxwEC7BU/i/KEg1JkOM/BdRcqP59dmIaX4AWg14NQUNVjThDbczEeRLl+IdCrY9YqGe+mJbvLYP2huARNkLHqI0puiRhoQ+CGheY44laAvwFBzXAQY5YXHH5G1GouvcKvSOruu6QY2Iar8CONzXAQcJEVSOOUBtjdEkRM70D1DPEviPHD3LbYy/opAEOEieqbo1PqI1M1Y6YqUeow9ZwgRyX5LTHXtBpAywkD7D/o/8iH6mqq1LinUMNheq35Ynx3IadN8BCAanqz+A27OJHqPNGkH+BrSG+d53eE2+B/KnqDZiiCLVRos7eIcgdSu3/DtiGQZ1DEanqDbhCmSodozZm4tag2Bw/GHIPsBvkuCWmPdaKQZ1DEakaDTCr11DOxWKh8jdiii4ZX+gAiJ/Kk7uNvhoQq/4cvjKNIhgzwEboCLVRqJpXaA+IO8ZOkeMPYthjrbxXA24pYoDXYFyA/YX+g3yM0SXzZ3oFxLzHIuT4YrbMfa8GTEzLmxjjUtW36wL5aspU7YiZtkBMG2MN433xlmw9eSjUEGtHAxgTqvrBIkCO/6F/0J/IRyrPo5OYsXbkbdJXA0LVH0UT0yiEMTfYADnmKGKc/S/toaqFnqE2SjRCtUYwL1H9B97c7PixxaBeoJgF5phRyBd8Cadi1a+U5dw0fhxhXKhq6x+jNuzih8zLcTt+hF0gxyXn7DEvBvUCxSywNRSyzsWpeyxCjolp7JBNGB+r2hHHqI2Zqh0xRKGeOTE7niIG9QJFL7A1FLLMxWFb5He0yTdOT/GtMHeAjdAR2sUTMQN8K8ui+oBiS+wTWkIx9h9hAj4+IuuO3Oy4T5sQJ1G1I46Qj3PTuKXa6LMBhepb9jP6jhI984RCCi3xvSFHqmrbf0IOGzMh5hjfSZ8NsAWcom1cUugIPxjyBFis6jtlSrwx/mr6bECi+iOpyQPFRviH0lsDLDQhU/uz3G7TmAZM8Q+l1wZYaEKi6j79iuZojFIWX+Ifzr/c809OB6bBYQAAAABJRU5ErkJggg==",dS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE2UlEQVR4nO2ajVXjRhSF76sgbAVrKoi3AsYVYCoIHcBWEKmCkA6ggjUVRKoApwLsCuKtQPkmWlj/aDRjy//hO+eeezDovTfX1mg4YFqiAuxsMcDeWfjCw/onkj6jc2RqZj3NYWgBAigkXaFzpDQzpzk+AkALEMADdofOkT8J4B5/pymATNLv6BzJzSzTHB8BoAUIwEn6C50jAzMrNMdHAGiBMw/gCwGM8XdWAvAQQoWdHSx+Zb0rL3hYf0oAUzTRcdBTwumV9Ru2wMoLHtY/w35BbeS2tKMeCubNFH9yfWfeC3yBUACF4qfB3E4rgNKWToGeLgE8U3CIH5zEeUtbI4BHSb+hNkprKHgImLdQPIAnM7vVEqEAMm34kToEzPuC9VEbuTXcsl0CmFHwE35wmLfCYuS2RgBD7BuK4bQnGL7EGmHelABuqDHCFzC0AvWcjuw0yPChWfvYC4oxsKVjsCdU1Om4AigtsN+sMevA1gjgAvsHHQuldQ/gEzVm+AKNAXgoXGHHwjPDD/EVGDNTfMMO3kKNL3ooXGHHQm4NO7iHMTPtKIBC8cPFvsgtHMADdofaKC1wC51KADcsYISvkDhnaRsE4Bteoy4803iI7wzmLBQPIDhHWwCZEu6tCKUFkt8WzPmK9dROboFbyFAjFM50GgFUWIzcNgjgHvsDdYLGwR7bgDlTAvjKGA/4CsHhqOuUdsBohcbBHl1hxj72gmIMrOEU6AkOR3GnLQQAl2Y20Q5YY8aBbRBAT9Ir6so9GqNN+c7wjdczo1NaAJcWeBOCAXhoUGGH5pnhh/gKjJcpYaPm+uA6g9/w0KDCDk1ugR2c8TLtOIAx9is6JLmFA3jA7lAbf3N9H28kFkCh+Clrih7VjG98jbpwwwJG+AqJ85XWchYxFKRrA653Stuk2hhYYAenfqEO83liAWSK32OlBRpwvVP3AL5Qf4yvQP1XrKd2cgvcQh5DQWiQKR7AhAaX+Apc31PHRym1DWuE+hUWI7cdB7CNIYNQumvt3DoE4JTwEaZBsA41KmxTSgvfXn3sBcUYWGAP8QQH99DEqXsAt6r/fuCU8CfsH0xRIZ4ulC7UAHWdEmaDgQVqeAwFoclWUn7jRz2nWtdonmdUSBpRa6II1HJKCyC4iXpaA/DQqMJiDCwhgGUo7QQbXpup4/7kaf2mh0YVFmNgGyyiC4yVaU8BTBS/d7/S5wHfG8zl+92hNqZm1lMLhlqhUaH4acszRo/iXqbpRDuCeXqq94971FM7pQWeIm8YaoWGhdICmGciNjP0ZC0bUCrM4BfsJA1RT+mUtoUAHhX/b5E2Jvq5u/udPgo9e6rfZad60ZvyZA3/FTJPSgCZEjabRGZohArVt8oM/w/6zC+4p+2QW8sp0GOoFQbLtL0AlhkhzxDtgty2EIAf7hs6RW4IYIQHSQnAKe3EdYwMLHI++QgARSGECjs5WHx0fdEf8LD+/30Aj6ofUZ/RKTBFBeu/VQRDyRBEH3OqH1tX6Jgo0Qj5hY/xJAxtBGFcYE51GE77/3RMUaGfi57ha2NoKxBIH3OqA7lCu8AfpQshFjzGO7O1AOYhjAvMqQ7DafNPxxSNkF+w961jaOcQSB9zqgO5Qm28vcv+l6eJdsxeApiHMC4wpzoMp5oR2tm73Ma/QnM4X5Cn2JgAAAAASUVORK5CYII=",pS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAERklEQVR4nO2a4XXaSBSF76tgtRWEVBBRQYYKbFewUAGkApMKjCtYUgGkAqAClA7YDpQK2G+ikIA0CBAYROA75577Q/PmPV070kTHphvnHgC6ae4BoJvmIgEsl8sY66KGMhaSXs0swc+KobNDAENJ/6B1vphZW2fmUgFMJX1E68zMzOnM3ANAZ+eqA2D4/OBVGKAYrZOgHjoKQpxhe2NoL7jxZ8wPGKE6k6IBQXzGd2JoJ9z8v1hb18WQEDp4KYZK4ebbknwA10jHzIYqYZ8A5liMrpGEAJr4VvYJYIldLQRQeo+lFz3cfyiAlplNVSMY00maoA2Ys/QeSy962HiJ5WnZPYB7AFPVCMZ0ugdQswAo9a/PB9QQryT0xcxS/OTQy6lOAVDWVvEAtZD0RG2CnxT6OdUlAEpibI5C7DycVIGeTjUKoC/pGW2jSX2Cnwx6OtUogKGKn7zWaVlJfRXo6VSjAHrYC9rG39Sn+Mmgp1ONAoiwBL1DeV6p7eEnhZ5OdQnAQ1mMDSV9QCteUZ/aFD8p9HOqUwArKI+xCPmnf4pvhbUR9oxmZjbG94ZapzoGcAi0mmBOGR3b8TFjHWqdrjkA2gywLlqRopbt+bqk3ulaA6BFW8VToydF723HPx0PezjVKQDKIsz/RL+xdowHYV2MTVCEQvhnRxMvhX2csn02oLb0Hksveth4ieVp2e4AJphTxhPrx/gGrImwOWqonCH1HXwr7OVUlwAo6St7mq9IUZOahdZg3QRz2o+OlTwU2cupDgGw3CkwCGz8KrNugHXRIfgQE7wA+zkF+rK+9B5LL3rYeInlaVkgAJZG2Bw1FGZIXYd1bYUfertI0XsLPBTZ06kGAYywR/SWbPwmraC30yUDYFkPe0HnYEj/Dv4L+jtdKgCWxNgcnZOOrT0UmcHpjAF8Yt8B7q9HmL/5hs5PkzkS3M/R1+ab5wdcN2wrWy+y4UfMM1WRFPWVeQ/F6BKkqK/sENVDEcrjBOQwwwoYKsDN9xVI88r5bGZ95dgWwFTFP2G5dmYW+BOcewCowB8awFcCeMQ32BaAXzhCfwrfUZsAxvgGwQCqQnBzLEZ5gumXwV5j7AHlCZ4Eq3KyABh4gHVRnv9QzNApvjfsF2EJeofyvLJfDz8aQ0fDsE6BU9hPWrZ2ajyEt9p3naMDYMgIm6OGihz9k2L/AdZFeRbKToIpXhlDR8GAI+wR5fnGcDF+NPRIsA8oz5geT3hljgqAwR6xEQrRZLgEPxr6xNgchXiizxivROUAGKqhbKgI5fnEUAP8ZNCvh72gPClq0m+hChwTgH84ORWZWeDEdQroOVX4gDalZws/GEMHwyBthT9pfUcxwyz0BtC3oezV+BfK07G17wP7UjWAMfaA8jwxhL/2ZtD7ERuhPF/p7a8dRNUAnLL/h69YKPtMNdUZ+Nm/Lamh3/Sr9Dd009wDQDfNPQB00/wPVqNIX7X7yvkAAAAASUVORK5CYII=",mS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAJRElEQVR4nOWaS0wUSxiFu3zFDUqMcafMyt1FY1zDiI+FiUKMbkyEQNyKuRqXstCtSoxbhYBbQUDjSm4coq5UHvEmLiQCcWFMfIAujCJ9z6lL9a2pruqqAYHB+yWVme6eqa7z1/+fru4ZsW7duvY4jquiKOpbv3790Ldv3yai/xFi7dq1TW1tbZ1VVVVRf39//OTJk5cfP34cxLH+2dnZAl5/a8TGjRtzJ0+eHL958+YabEuGhoZiBuPx48dfXrx48Rd2/bbZIdCinTt3Tr169Wo73qaYnJyMC4VCUXagZB79/PlzAIdXPTIAKIPO8fHxph07dsjtLFR2MCijo6P9DMaGDRsGVmt2SMEIQFNHR0fnqVOn5HYIMzMz8bFjx+KRkZGovr4+un///tSnT5/uMiCrKTukYJsPZKHEX716Vdy4cSOGiQpmDzIiHhgYkOWC96siO2QASJYP6Ojid+3aJW7fvh1jd2Rmz/T0NEslQqnET58+fYsS62FAyi07kkGjDDqfP3/eVF1dnewzMcVjlzTJy5cvx77sQUZI30CG8LWAYPThnEM/fvwYweEVQ4ogGEzTtWvXOs+cOZPs07GJVxw4cGDu4cOHmQHQYXYgEFFzczOzZ0IIUcBrX0VFxdBngPfLhkCT0AcOHz48fufOnZSQLPHk9OnTc23zPoBNL6q/xsZGMTY2FrN8CoWVyY6iAW/dunXi/fv3VXiboAbrEk9cPmDD7M/MHmYHYiC948GDB29fv349iN1Llh1FA0bUi3xgamoqbmlpSQaLXVZCfcAUj13R8ePH5zo6OsSmTZvktgn7VmaK11HsYnYM/KrsKDopOk58gKnJwfb09CSDzcKcSRObeMLLaC6Xi44cOSKw6WW+TOJ79+7NvHnz5i52PUJ2DCA5PuN9yRSdVPkA65kzf+vWraLBZpHlAy7xhFcHltCVK1ecwTNR/U1MTEStra2igIAsNDuKBkPoAyiB7Zz5zZs3p467oAi8pHxADdYmXuHLHh29P2RDVFtbG9XU1Mh+1TJ9/iauF7u82SG/qIMIdmKgjUxLLHEFT2CbVRPWqukDLKOQTPL5gEIXz/4oGLMfXbx4MfU9jofHGBB1E4fdqVt8gVYEAiDvCxBVGo/sAM4c7d69Ozp69KjA/tR3FPpMhoonIT5giscuiX7OLBgsapnPjuQWP+lIQR+w3RewVplyCEpcWVlpzQ7lA8y4c+fOSQMNKSP2zRJy+YBLPGEAent7vdmjw8nZv3//NPrdZ/2S774AGcFoymAg1WR2IBhSOMXwDjFUvIJCbDPpuxSz7Hj+rOzRgej44MGDXzDGWpql9Usog6L1gA+KZnZ0dXVJZ25vbxfIkKLs8GHzAc4UZ57BtIknPHdW9uiY4rEr7QEEAUjWA9gMgoNl2jML1KUJg4vy+bzMDt8MmT6g+qOH4Hml3OfClT06NvHE2jF9gOsB232BDTVYztT58+eT5wM4JGeI2cGA0DsYDFt28HNqJvX+QsrIlj06LKMTJ06kxBPrFwjXA+Z9gQ1zsBSB3an1AKF3IBDyyqJ7h5p1ziQyT+j9YbcXM3t0OD5leKZ4kvqCAmXg9QGKZd3rg4Ww1HrABWedAUGGyKBNwD+YJYODg0l/IbAfjoXZg80En3jiPAkCkOkDPOH169dj22A5k76aNOF1mobHAORyuSiHhlKRl1pXauuY56R47JtC1jW4xBNnx1k+QPGYOXlpMsUTtR4w69wFB8u053e6u7tl9nBWcY4kO1QwXBmp+wD7O3To0Mvv37/XwJQ/47ATa2cKmw8o8RwkNq3wM3ix+oAJZ/7SpUtJGe3du3fu2bNnqb4ZCJ4XgYlyuVwSEArG4cQHcMWIQsUTgeYEZVDkAxTGQWSJJ6E+wP7MMuJMovQys4f9w0jllQUpLoPB0sE+LnX/DhVPnCchCEDiAxwsT+gTpUD9FdWkierPLCPOJMWEZI+C2cHS6evrG0NG7IP2IPEk8yTKBxjhAgYbKp5k+YASb+sPKR4zCLZjLkqpeZPU4EzoAxCx3VaXWVAkXlIzyf0u8Qpf9uiwvwsXLixIPCkanA3+fwC3wa3sm6nJbKD5ICiZ32Wdmj7AwfrEE/pAx7yjY9MJ+8Oj9VF8rqS018k8AYEP1MMH7tIHJiEKAqTZ0Hy4kkNwnM8I9JnkYPFdr3jCEmCwzezRYX+LFU+cJ1BgIJV1dXUfbOsB1isMSLoxPpbKDuUDBQQNLUg8Yb8MguvzFI9b5C78zNaMzUUh0Lxs27Zt7N27d3/grRNkRHJpgoAon89HnBg2BsclxoVrPfArxROB5oU+gMGcVeuBEBAErsOlEebz/94SI0OS7PBBH0DpFV1FfrV4ItC86D6AzSCY/liViQIygqu8AsoAGWK9C7TBEmDmKB9YCvFEoHnBQJw+YIPia2CM/O2P79vgA/pMMjsYEPiHFMlgmNnBzzAILJ2lEk8EWhAhPkAouGZePDblzOElmUkTegeDobIjl/tvnY+gxywfLJe7l0I8EWhBhPiAKZ5AVGo9kAVnngFhduAJDgO0ZOKJQAvC5wM28Qp9PRAK+8PDliUVTwRaEKhVpw9wsDUO8YTH2wwfyIKfh/gWiO/C5pIi0IKx+QAHW5Mhnvh8QIf9LZd4ItCC0X0Az9nkIywKZ8NhJ6E+sNziiUALRvlAU1OTdGg+//eJV/h8YCXEE4EWDGygcs+ePR/wNmJNM/XxNggKbMN3bD7AYyshngi0klizZs1wQ0NDdStmv5QA0Ad4X6BfRVhGfBi6UuKJQCsJ+gB+rjrLZ/i4XsuVnFq42GZXQR/gr0bqKkLxdSgjXPdXTDwRaCWhfEDNJBYqyV0gRMp1vusZgbrDKxfxRKCVBGbcuR4gECWfESAoMZe1yIxknc9ab4Rp4hHWl+Hh4frZ2dlH0Qoj0ErGth6wYWYHPQCvSAD3T1XLzYICQB9AKsv1ADaDgOgYJTCDAOTLRTwJFqBj+oAPirf9Nl8OBAkwgQ1k+oBOOYsnCwoACfGBchdPFhwAnw/w1xo8E8z8bb4csA4+hCwfWC3iSWrwocAGrD5A8bjx8f4xoVxYcACI6QMUv9AfKVeKRQVA94HVKJ4sKgDKB7DcLelfGeXEogIAG6jcsmXLh69fv5b0r4xyYlEBIMiCzoqKij+hfdWJJ/8ArHtTMAvcDGAAAAAASUVORK5CYII=",gS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFoElEQVR4nOWa4XXaSBSF36vA4w42FXhcQVAFcSoIriB0EKhgSQVLKrC3AuQKEB2kA48r0H7PGAdiRjMDijYnfOfcXH7MvDfvooCioPI/0LbtJ2wsIh4ZDVqo6jd8UBQNBoM7bIk8OkSDKlUN+CAMHcAK86iLhgCu8UEYLACGH4vIPyiHW1VdyAAMGUDOu79lsKtgyABaLBsCGORsgzQxmP/PCIA53mMOBbTmnOZJ2NdgVygHq+vxJNR1mNU1D+x7wLNRlAWNvmAT5NAuczTTRBDsH0uPH4LUc9gXNEG7BDRn/wxPoigJze6wGxSjQZWmQ2iwK9RF8t2njsOWyKMY99T5iHeSDIBmU9kknaKmYYVHoZbDHlEXl9QJeBTqLLGRpJmp6lQ6UNQJzezADuXwTlW/SwfUa7Eo7O88E9s9tkI5BMpd4lFSzUayudRymWkicWq2WBT2p840lbwrckulqrVESDW7we5QLjP9/QL4SMl7/CCpZiMpuwICqlS1wQ9CzRaLwt7omdjqsSVyKJdKT7gCrNEjKiGgSiMhULPForDv4JnY5rElcqiES0oG/CAHm+1C4zn2GZUQUKUHQqBei0Vhz5szscVjS+RQCV8pN8GjvGn2MzR3WC3p7++fCajSn0KgXotFYf3emVjusSVyqIQ1GlEu4FH2msXgEA67R+9RCQFVuhMCtVosCmtfz8RSjy2RQyU8oBtKBbwTRdlwoL9k8yjLmKALlCKgSl9CoEaLRWHd85lY5rElcijFE5ojY0GJ75LJc7NjeDlgLYUhsK/ldRTWKEs8L5fIoRQ2/IhtDV7M0QEYLwetpSAEtEJdXKNBhjcUncQRITjURUAOpTh5eOPkAIzCEPqgl+GNXgIwBgyht+GN3gIwBgih1+GNvQAY4BM2QR4ZDZrT8BueBTU8Vkv/IRQPz1k+Y2PZzBNQgxbUeJ1HkS102BJ5dIgGVZpxY2FQz2O19BdC0fD0d1jWPNsAVphH50RDANd20zGW/IeVfxq3FkAt5ff4fwqNBfDIC4fOEgsg4BfoLLEAajnfvwIPFsBYzvlDkD/sa7DBrtA5seZr0G8DcFgt8RDWyG5EAp6Eeh5bIof6IKBKy26EasmY5zmALWwcy+ZWeLvRFs5ZuJBMqOGxPoffElClmSEYnGUs+/M8oAU1FvKCot6gocd+xfBbAqq0IIQUvQUwwPBbAqq0pxB6CWDA4bcEVGkPIZwcQOHwT+gCdZGzxgio0hNDOCmAI4YfSd5D0VoGCuHoAI4Z3g7KvpbXUVhjN2eel7UMEEJRAC8H+4CMCXIoxevwuNVIBoDZOo/Vkh/CHBn/UqLBs3huloLDOOwOjaSMveENamUFYLDUY7XkhbBLLZvfBQS8k9dmMTiEw5bIoxLeDG9Qr8WisH7vTCz3WC3lITSo0kQIe80OwQHm2GdUwsHhDeoVBWCwxWO1lIfwlXITPMqbZrvQ2GGPqITo8AY1iwMw2OaxWspDuKRkwA9ysNkWmo5kc/nn0jm8Qc0Wi8Le6JnY6rFaykKo9ISfyNxgdyiXmZ75j6Rm+vsFUOmxV4BBw4BdoBzeaeLHCdRrsSjs7zwT2z22Qjk8Uc7hUTqbGTScSl7iD6o6kg6oZYd5RF1cUifgUahTS95zzJkmrshkAAYN77EPKMYajWgW8CjUWWEeddFQ5xqPQh2H1fLjQcchvqnqWBJkBWDQdCqb298LtMtXNKVZwKOwf4L9jXK41Z2nNoegnsOm8vYe5QnN2T+VDLID2ELjkWz+DRBQQyPzJOxbYR7lYHWv8STUdZhHDgX21VJAcQDHwkFbLBsGGeRsgzQxmP/sA2iwK5TDmvk9/ssZMoCx5P8P1K0mPgT7YrAADEJosNRVMNi7bwwdgMNqiYewRiMCCPggDBrAFoIYy48fLxkNWjD4QgbmP5cUqZpLuNlqAAAAAElFTkSuQmCC",_S={class:"fit-content flex flex-col items-center pointer-events-none"},vS={class:"flex items-center m-r-10px"},xS=["src"],yS=Li({__name:"NavItem",props:{name:null,link:null,conDomRect:null,bg:null,outLink:{type:Boolean,default:!1},type:null},setup(n){const t=n,e=pn({outlink:{color:"#00b894",img:fS},css:{color:"#00cec9",img:dS},canvas:{color:"#6c5ce7",img:pS},threejs:{color:"#fdcb6e",img:mS},svg:{color:"#576574",img:gS}}),i=pn(),s=pn("");Up(()=>{if(!t.conDomRect||!i.value)return;const{top:p,left:g}=i.value.getBoundingClientRect(),{top:m,left:d}=t.conDomRect;s.value=`-${g-d}px -${p-m}px`});let r=!1;function o(){if(r=!0,t.outLink){window.open(t.link,"_blank");return}const p=Td.resolve({path:t.link});window.open(p.href,"_blank")}const a=pn(!0);function l(){a.value=!0}function c(){a.value=!r}const u=Le(()=>({"box-shadow":a.value?"0px 0px 10px rgb(210, 175, 210)":"0px 0px 8px rgba(0, 0, 0, 1)"})),h=Le(()=>({transform:a.value?"rotateY(0deg)":"rotateY(180deg)"})),f=Le(()=>{var p;return{transform:a.value?"rotateY(180deg)":"rotateY(0deg)","background-position":s.value,"background-size":`${((p=t.conDomRect)==null?void 0:p.width)??0}px`,"background-image":`url(${t.bg})`}});return(p,g)=>(je(),Pn("div",{ref_key:"navItem",ref:i,class:"navItem font-ani",style:Yn(Cn(u)),onMousemove:l,onMouseout:c,onClick:o},[Pe("div",{class:"bg pointer-events-none",style:Yn(Cn(f))},null,4),Pe("div",{class:"content pointer-events-none",style:Yn(Cn(h))},[Pe("div",_S,[Pe("div",vS,[n.type?(je(),Pn("div",{key:0,class:"rounded p-4px flex items-center justify-center m-r-4px",style:Yn({background:e.value[n.type].color})},[Pe("img",{class:"h-20px",src:e.value[n.type].img,alt:""},null,8,xS)],4)):uf("",!0),cf(" "+zd(n.name),1)]),Pe("div",{class:ir(["h-2px m-t-2px bg-#fff transition-duration-0.35s transition-delay-0.3s",a.value?"w-full":"w-0"])},null,2)])],4)],36))}}),MS=mf(yS,[["__scopeId","data-v-85c5813b"]]),mh="/nova/assets/bg-DfOmpCHv.png",bS={class:"w-full h-full flex justify-center overflow-y-scroll"},wS=Li({__name:"NavGrid",setup(n){const t=pn([]),e=pn(),i=pn();function s(){Ed.forEach(o=>{var a;o.children&&((a=o.children)==null||a.forEach(l=>{var c;if((c=l.meta)!=null&&c.visable){const u={name:l.meta.name,link:`${o.path}/${l.path}`,conDomRect:e.value.getBoundingClientRect(),visable:l.meta.visable,bg:mh,type:l.meta.type};t.value.push(u)}}))}),ES.forEach(o=>{const a={name:o.meta.name,link:o.path,conDomRect:e.value.getBoundingClientRect(),outLink:!0,visable:o.meta.visable,bg:mh,type:o.meta.type};t.value.push(a)})}function r(){i.value=e.value.getBoundingClientRect()}return dl(()=>{s(),new hS("Patrick Hand").load().then(r),window.addEventListener("resize",cS(r,500))}),(o,a)=>(je(),Pn("div",bS,[Pe("div",{ref_key:"navGrid",ref:e,class:"max-w-600px h-fit p-y-2rem flex flex-wrap justify-center gap-2px"},[(je(!0),Pn(We,null,$p(t.value,(l,c)=>(je(),Pn("div",{key:c},[l.visable?(je(),xl(MS,hf({key:0},l,{"con-dom-rect":i.value}),null,16,["con-dom-rect"])):uf("",!0)]))),128))],512)]))}}),SS={class:"bg-#b4286c relative w-full h-full overflow-hidden flex justify-center items-center"},AS=Li({__name:"Home",setup(n){return(t,e)=>(je(),Pn("div",SS,[ge(cw,{class:"snowBg absolute top-0 left-0 pointer-events-none"}),ge(wS)]))}}),ES=[{path:"https://yufengjie97.github.io/learning-phaser/#/flappyBird",meta:{type:"outlink",name:"像素鸟(phaser)",visable:!0}},{path:"https://codepen.io/Megalovania/pen/ZEVdJmL",meta:{type:"outlink",name:"排序可视化",visable:!0}},{path:"https://codepen.io/Megalovania/pen/XWOdXxZ",meta:{type:"outlink",name:"电流",visable:!0}},{path:"https://codepen.io/Megalovania/pen/wvRvWdZ",meta:{type:"outlink",name:"生命游戏",visable:!1}},{path:"https://codepen.io/Megalovania/pen/JjeaOJv",meta:{type:"outlink",name:"gsap动画",visable:!1}},{path:"https://codepen.io/Megalovania/pen/mdQqgdv",meta:{type:"outlink",name:"css 3D swiper",visable:!0}},{path:"https://www.shadertoy.com/view/dlGfDt",meta:{type:"outlink",name:"shader-noise-point",visable:!0}},{path:"https://www.shadertoy.com/view/lcfGzH",meta:{type:"outlink",name:"shader-domainWraping",visable:!1}},{path:"https://www.shadertoy.com/view/mtVBDD",meta:{type:"outlink",name:"shader-loading",visable:!0}},{path:"https://www.shadertoy.com/view/dtGBzy",meta:{type:"outlink",name:"shader-loading2",visable:!0}},{path:"https://www.shadertoy.com/view/mlKBzh",meta:{type:"outlink",name:"sdf_box_noise",visable:!0}},{path:"https://www.shadertoy.com/view/4cfGDH",meta:{type:"outlink",name:"shader-kunkun",visable:!0}}],TS={path:"/",meta:{name:"home",visable:!1},component:AS},CS={path:"/:path(.*)",meta:{name:"notfound",visable:!1},component:v0},Ed=[TS,c0,u0,f0,h0,p0,d0,CS],Td=r0({history:Mg("/nova/"),routes:Ed});Km(Ri).use(Td).mount("#app");export{Kn as $,LS as A,NS as B,pl as C,s1 as D,Ht as E,We as F,n1 as G,nw as H,L as I,Ir as J,lr as K,e1 as L,sn as M,Ba as N,te as O,Be as P,De as Q,BS as R,pb as S,Zf as T,Ju as U,_t as V,Yf as W,Pl as X,Jf as Y,qS as Z,mf as _,Kr as a,sd as a0,rd as a1,Ol as a2,od as a3,kS as a4,Ws as a5,ud as a6,hd as a7,id as a8,fd as a9,QS as aA,Fl as aB,YS as aC,i1 as aD,t1 as aE,XS as aF,Ll as aG,gb as aH,Hf as aI,It as aJ,ii as aK,C_ as aL,Ci as aM,JS as aN,zf as aO,$b as aP,ka as aQ,VS as aR,en as aS,WS as aT,$S as aU,US as aV,Qf as aW,ne as aX,uf as aY,xp as aZ,RS as a_,Tl as aa,ws as ab,dd as ac,pd as ad,Nl as ae,md as af,gd as ag,_d as ah,vd as ai,HS as aj,_n as ak,KS as al,qr as am,yd as an,DS as ao,ys as ap,FS as aq,zS as ar,rr as as,ZS as at,OS as au,jS as av,GS as aw,_e as ax,Al as ay,Kf as az,Pn as b,Le as c,Li as d,Pe as e,cf as f,ir as g,dl as h,cS as i,$p as j,xl as k,ge as l,hf as m,Yn as n,je as o,Dp as p,PS as q,pn as r,xm as s,zd as t,Cn as u,Lp as v,Up as w,Rp as x,IS as y,sr as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/reverseCardPic-8rul4IMp.js","assets/disco_communism-NN-qA4tW.js","assets/p5.min-3HXR7yvj.js","assets/reverseCardPic-LyGbVFEG.css","assets/StarRate-rC9Mrr_x.js","assets/Card-t9lNq_w9.js","assets/Card--JYLWHeZ.css","assets/initGUI-4v9Pkg7m.js","assets/dat.gui.module-PWGADmkp.js","assets/StarRate-G31reSYb.css","assets/Sun-nYV63g3r.js","assets/Sun-xxOLY8xc.css","assets/ProgressCube-K0RATOoc.js","assets/ProgressCube-eTrC3434.css","assets/DeathLoading-Y1v4qKSj.js","assets/DeathLoading-VK1Zzqw4.css","assets/HSCard-dNtGM6jN.js","assets/math-l9UUg45K.js","assets/HSCard-Iee7Ik3K.css","assets/BarChart-mHG_S0qZ.js","assets/BarChart-g3MunUDi.css","assets/Water-G4k8rbyf.js","assets/Water-zHDNNDSx.css","assets/timeSun-vExACio7.js","assets/timeSun-5ORMucVv.css","assets/crushPic-ubTyp3NB.js","assets/index-WM3n2avM.js","assets/index-FSCrshNh.js","assets/crushPic-fv0hIpOW.css","assets/hackText-XNyeTKAX.js","assets/hackText-xi3D_0GL.css","assets/FlowField-m5GSdfbJ.js","assets/fabric-Hf5_Rw--.js","assets/noise-8YyA3euy.js","assets/FlowField-AIARjlhA.css","assets/FlowFieldLine-mepooiBa.js","assets/CanvasTextPoint-f9_9Wp0X.js","assets/simplex-noise-CoJLqHZY.js","assets/CanvasTextPoint-dqqB4fGo.css","assets/canvasPoint-b88mLk48.js","assets/color-ushm2Ked.js","assets/flow-klKIidaK.js","assets/initStats-0J0VmoiC.js","assets/delaunator-LTiKkvQ8.js","assets/imgIdle-dQEnwqmp.js","assets/canvas-DEPmujqV.js","assets/nyanCat-u4frKdlb.js","assets/particleLife-4fxQqZ-5.js","assets/chroma-wKDBd-uV.js","assets/test-pjLWQMaw.js","assets/gameOfLife--0kEYUY1.js","assets/mihuanshuibo-qdeYLSFI.js","assets/audio-sugarCrush-sMDL0Z2H.js","assets/audio2-GAo0SpJu.js","assets/mihuanshuibo-WRfBndYT.css","assets/rect-3v8Z6wJT.js","assets/rect-WaK6L8VC.css","assets/rect2-ItEPoeiW.js","assets/rect2-B6dngnIA.css","assets/freqAndDomain-948umXDp.js","assets/freqAndDomain-tEGrU2YJ.css","assets/githubSnake-ZRQOEa8Z.js","assets/githubSnake-3KDXaVVF.css","assets/THREE-template-eVBALcRi.js","assets/stats.module-nRd2dy6L.js","assets/OrbitControls-7fmr3Jg8.js","assets/THREE-template-fzmV_w6V.css","assets/CubeLine-iJNkXvCk.js","assets/CubeLine-6xeDAqW-.css","assets/AllBufferGeo-6CAAA9hY.js","assets/AllBufferGeo-Ep-44pbr.css","assets/ThreeTextPoint--1GsndKd.js","assets/ThreeTextPoint-xRVaRKJa.css","assets/TextGeo-iPPMlDyd.js","assets/helvetiker_regular.typeface-yK9QKCvZ.js","assets/TextGeo-Z7MNmJdc.css","assets/SolarSystem-OTmyyE4J.js","assets/RenderPass-uBYXoUUT.js","assets/UnrealBloomPass-Oo7y_bGF.js","assets/GlowBall-Ucqc5Uxh.js","assets/Atom-2ta7uGqH.js","assets/Atom-XTv5qZ8G.css","assets/LavaBall-lK5BSe4p.js","assets/LavaBall-pFTwMW3m.css","assets/LensFlares-RucCOiMA.js","assets/LensFlares-ed54kSSq.css","assets/crushPic-L8TUyyBv.js","assets/initThree-DmbJAgr3.js","assets/flowFieldPoint3D-bkVyPX73.js","assets/dotTexture-mhtNNgxL.js","assets/particleLife-xbDE16FL.js","assets/FlowFieldLine2-vdizqFqv.js","assets/P5Con-FQKd_Z9e.js","assets/P5Con-c1o8Vdhb.css","assets/paticle-7FC01jx8.js","assets/Maze-s_u2_bIo.js","assets/GradientLine-gVEWmaHn.js","assets/CodeRain-URz5fCKQ.js","assets/Cross-nC1M_jgZ.js","assets/MusicRect-DjQD8uSU.js","assets/AudioController-KhJbxLFI.js","assets/AudioController-1B_R8sVX.css","assets/p5bezier-6Oms73Ub.js","assets/MusicCircle-wjiQy6tl.js","assets/BoRe-LIZek1yj.js","assets/BoRe-7s0lgeq5.css","assets/Tangram-Qn38zbqW.js","assets/Terrain-ZH5Noy1t.js","assets/P5-6363oOEK.js","assets/P5-ZoK4gmdE.css","assets/Terrain-p-hiz-n0.css","assets/DisperseParticle-Tt1BNnRG.js","assets/DisperseParticle-B6wHoY0K.css","assets/DisperseParticle2--67uT_Km.js","assets/DisperseParticle2-zz1KYv97.css","assets/Snake-bkfNFXqJ.js","assets/LightBall-USEChCxP.js","assets/LightBall-aZGRnPd0.css","assets/FlappyBird-514-wT_Y.js","assets/FlappyBird-TuicVYaj.css","assets/Firework-SD1UJvfL.js","assets/PixelPicture-nHHPbVKI.js","assets/PixelPicture-OMQGL23h.css","assets/circuitBoard-fNPFxwu8.js","assets/circuitBoard-QcTioUj8.css","assets/circuitBoard2-1pK0b6eH.js","assets/circuitBoard2-jWDfDwWT.css","assets/index-RUyklQRV.js","assets/index-DimCXbzI.js","assets/index-0o1ONTvD.js","assets/index-HhYnfKw3.js","assets/index-jElrcHF3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
