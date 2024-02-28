(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function $a(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Id=$a(Dd);function gh(n){return!!n||n===""}function Xn(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=ct(i)?Fd(i):Xn(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ct(n))return n;if(it(n))return n}}const Od=/;(?![^(]*\))/g,Nd=/:(.+)/;function Fd(n){const e={};return n.split(Od).forEach(t=>{if(t){const i=t.split(Nd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ir(n){let e="";if(ct(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=ir(n[t]);i&&(e+=i+" ")}else if(it(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function wS(n){if(!n)return null;let{class:e,style:t}=n;return e&&!ct(e)&&(n.class=ir(e)),t&&(n.style=Xn(t)),n}const zd=n=>ct(n)?n:n==null?"":Fe(n)||it(n)&&(n.toString===yh||!ze(n.toString))?JSON.stringify(n,_h,2):String(n),_h=(n,e)=>e&&e.__v_isRef?_h(n,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:vh(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!Fe(e)&&!Mh(e)?String(e):e,Qe={},ts=[],mn=()=>{},Bd=()=>!1,Ud=/^on[^a-z]/,co=n=>Ud.test(n),el=n=>n.startsWith("onUpdate:"),Dt=Object.assign,tl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Gd=Object.prototype.hasOwnProperty,ke=(n,e)=>Gd.call(n,e),Fe=Array.isArray,ns=n=>uo(n)==="[object Map]",vh=n=>uo(n)==="[object Set]",ze=n=>typeof n=="function",ct=n=>typeof n=="string",nl=n=>typeof n=="symbol",it=n=>n!==null&&typeof n=="object",xh=n=>it(n)&&ze(n.then)&&ze(n.catch),yh=Object.prototype.toString,uo=n=>yh.call(n),Vd=n=>uo(n).slice(8,-1),Mh=n=>uo(n)==="[object Object]",il=n=>ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,jr=$a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ho=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},kd=/-(\w)/g,gn=ho(n=>n.replace(kd,(e,t)=>t?t.toUpperCase():"")),Hd=/\B([A-Z])/g,_s=ho(n=>n.replace(Hd,"-$1").toLowerCase()),fo=ho(n=>n.charAt(0).toUpperCase()+n.slice(1)),Do=ho(n=>n?`on${fo(n)}`:""),qs=(n,e)=>!Object.is(n,e),Xr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},to=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Sa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Gl;const Wd=()=>Gl||(Gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let cn;class qd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function jd(n,e=cn){e&&e.active&&e.effects.push(n)}const sl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},bh=n=>(n.w&ti)>0,wh=n=>(n.n&ti)>0,Xd=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ti},Yd=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];bh(s)&&!wh(s)?s.delete(n):e[t++]=s,s.w&=~ti,s.n&=~ti}e.length=t}},Aa=new WeakMap;let Ns=0,ti=1;const Ea=30;let $t;const bi=Symbol(""),Ta=Symbol("");class rl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,jd(this,i)}run(){if(!this.active)return this.fn();let e=$t,t=Jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,Jn=!0,ti=1<<++Ns,Ns<=Ea?Xd(this):Vl(this),this.fn()}finally{Ns<=Ea&&Yd(this),ti=1<<--Ns,$t=this.parent,Jn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(Vl(this),this.onStop&&this.onStop(),this.active=!1)}}function Vl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Jn=!0;const Sh=[];function vs(){Sh.push(Jn),Jn=!1}function xs(){const n=Sh.pop();Jn=n===void 0?!0:n}function Bt(n,e,t){if(Jn&&$t){let i=Aa.get(n);i||Aa.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=sl()),Ah(s)}}function Ah(n,e){let t=!1;Ns<=Ea?wh(n)||(n.n|=ti,t=!bh(n)):t=!n.has($t),t&&(n.add($t),$t.deps.push(n))}function Dn(n,e,t,i,s,r){const o=Aa.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(n)?il(t)&&a.push(o.get("length")):(a.push(o.get(bi)),ns(n)&&a.push(o.get(Ta)));break;case"delete":Fe(n)||(a.push(o.get(bi)),ns(n)&&a.push(o.get(Ta)));break;case"set":ns(n)&&a.push(o.get(bi));break}if(a.length===1)a[0]&&Ca(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ca(sl(l))}}function Ca(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&kl(i);for(const i of t)i.computed||kl(i)}function kl(n,e){(n!==$t||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Kd=$a("__proto__,__v_isRef,__isVue"),Eh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(nl)),Jd=ol(),Qd=ol(!1,!0),Zd=ol(!0),Hl=$d();function $d(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ye(this);for(let r=0,o=this.length;r<o;r++)Bt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Ye)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){vs();const i=Ye(this)[e].apply(this,t);return xs(),i}}),n}function ol(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?mp:Rh:e?Lh:Ph).get(i))return i;const o=Fe(i);if(!n&&o&&ke(Hl,s))return Reflect.get(Hl,s,r);const a=Reflect.get(i,s,r);return(nl(s)?Eh.has(s):Kd(s))||(n||Bt(i,"get",s),e)?a:St(a)?o&&il(s)?a:a.value:it(a)?n?Dh(a):sr(a):a}}const ep=Th(),tp=Th(!0);function Th(n=!1){return function(t,i,s,r){let o=t[i];if(as(o)&&St(o)&&!St(s))return!1;if(!n&&(!no(s)&&!as(s)&&(o=Ye(o),s=Ye(s)),!Fe(t)&&St(o)&&!St(s)))return o.value=s,!0;const a=Fe(t)&&il(i)?Number(i)<t.length:ke(t,i),l=Reflect.set(t,i,s,r);return t===Ye(r)&&(a?qs(s,o)&&Dn(t,"set",i,s):Dn(t,"add",i,s)),l}}function np(n,e){const t=ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Dn(n,"delete",e,void 0),i}function ip(n,e){const t=Reflect.has(n,e);return(!nl(e)||!Eh.has(e))&&Bt(n,"has",e),t}function sp(n){return Bt(n,"iterate",Fe(n)?"length":bi),Reflect.ownKeys(n)}const Ch={get:Jd,set:ep,deleteProperty:np,has:ip,ownKeys:sp},rp={get:Zd,set(n,e){return!0},deleteProperty(n,e){return!0}},op=Dt({},Ch,{get:Qd,set:tp}),al=n=>n,po=n=>Reflect.getPrototypeOf(n);function cr(n,e,t=!1,i=!1){n=n.__v_raw;const s=Ye(n),r=Ye(e);t||(e!==r&&Bt(s,"get",e),Bt(s,"get",r));const{has:o}=po(s),a=i?al:t?ul:js;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function ur(n,e=!1){const t=this.__v_raw,i=Ye(t),s=Ye(n);return e||(n!==s&&Bt(i,"has",n),Bt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function hr(n,e=!1){return n=n.__v_raw,!e&&Bt(Ye(n),"iterate",bi),Reflect.get(n,"size",n)}function Wl(n){n=Ye(n);const e=Ye(this);return po(e).has.call(e,n)||(e.add(n),Dn(e,"add",n,n)),this}function ql(n,e){e=Ye(e);const t=Ye(this),{has:i,get:s}=po(t);let r=i.call(t,n);r||(n=Ye(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?qs(e,o)&&Dn(t,"set",n,e):Dn(t,"add",n,e),this}function jl(n){const e=Ye(this),{has:t,get:i}=po(e);let s=t.call(e,n);s||(n=Ye(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Dn(e,"delete",n,void 0),r}function Xl(){const n=Ye(this),e=n.size!==0,t=n.clear();return e&&Dn(n,"clear",void 0,void 0),t}function fr(n,e){return function(i,s){const r=this,o=r.__v_raw,a=Ye(o),l=e?al:n?ul:js;return!n&&Bt(a,"iterate",bi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function dr(n,e,t){return function(...i){const s=this.__v_raw,r=Ye(s),o=ns(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?al:e?ul:js;return!e&&Bt(r,"iterate",l?Ta:bi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Fn(n){return function(...e){return n==="delete"?!1:this}}function ap(){const n={get(r){return cr(this,r)},get size(){return hr(this)},has:ur,add:Wl,set:ql,delete:jl,clear:Xl,forEach:fr(!1,!1)},e={get(r){return cr(this,r,!1,!0)},get size(){return hr(this)},has:ur,add:Wl,set:ql,delete:jl,clear:Xl,forEach:fr(!1,!0)},t={get(r){return cr(this,r,!0)},get size(){return hr(this,!0)},has(r){return ur.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:fr(!0,!1)},i={get(r){return cr(this,r,!0,!0)},get size(){return hr(this,!0)},has(r){return ur.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=dr(r,!1,!1),t[r]=dr(r,!0,!1),e[r]=dr(r,!1,!0),i[r]=dr(r,!0,!0)}),[n,t,e,i]}const[lp,cp,up,hp]=ap();function ll(n,e){const t=e?n?hp:up:n?cp:lp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ke(t,s)&&s in i?t:i,s,r)}const fp={get:ll(!1,!1)},dp={get:ll(!1,!0)},pp={get:ll(!0,!1)},Ph=new WeakMap,Lh=new WeakMap,Rh=new WeakMap,mp=new WeakMap;function gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _p(n){return n.__v_skip||!Object.isExtensible(n)?0:gp(Vd(n))}function sr(n){return as(n)?n:cl(n,!1,Ch,fp,Ph)}function vp(n){return cl(n,!1,op,dp,Lh)}function Dh(n){return cl(n,!0,rp,pp,Rh)}function cl(n,e,t,i,s){if(!it(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=_p(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function is(n){return as(n)?is(n.__v_raw):!!(n&&n.__v_isReactive)}function as(n){return!!(n&&n.__v_isReadonly)}function no(n){return!!(n&&n.__v_isShallow)}function Ih(n){return is(n)||as(n)}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function Oh(n){return to(n,"__v_skip",!0),n}const js=n=>it(n)?sr(n):n,ul=n=>it(n)?Dh(n):n;function Nh(n){Jn&&$t&&(n=Ye(n),Ah(n.dep||(n.dep=sl())))}function Fh(n,e){n=Ye(n),n.dep&&Ca(n.dep)}function St(n){return!!(n&&n.__v_isRef===!0)}function pn(n){return zh(n,!1)}function xp(n){return zh(n,!0)}function zh(n,e){return St(n)?n:new yp(n,e)}class yp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ye(e),this._value=t?e:js(e)}get value(){return Nh(this),this._value}set value(e){const t=this.__v_isShallow||no(e)||as(e);e=t?e:Ye(e),qs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:js(e),Fh(this))}}function Cn(n){return St(n)?n.value:n}const Mp={get:(n,e,t)=>Cn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return St(s)&&!St(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Bh(n){return is(n)?n:new Proxy(n,Mp)}var Uh;class bp{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Uh]=!1,this._dirty=!0,this.effect=new rl(e,()=>{this._dirty||(this._dirty=!0,Fh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ye(this);return Nh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Uh="__v_isReadonly";function wp(n,e,t=!1){let i,s;const r=ze(n);return r?(i=n,s=mn):(i=n.get,s=n.set),new bp(i,s,r||!s,t)}function Qn(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){mo(r,e,t)}return s}function rn(n,e,t,i){if(ze(n)){const r=Qn(n,e,t,i);return r&&xh(r)&&r.catch(o=>{mo(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(rn(n[r],e,t,i));return s}function mo(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Qn(l,null,10,[n,o,a]);return}}Sp(n,t,s,i)}function Sp(n,e,t,i=!0){console.error(n)}let Xs=!1,Pa=!1;const wt=[];let fn=0;const ss=[];let En=null,mi=0;const Gh=Promise.resolve();let hl=null;function Vh(n){const e=hl||Gh;return n?e.then(this?n.bind(this):n):e}function Ap(n){let e=fn+1,t=wt.length;for(;e<t;){const i=e+t>>>1;Ys(wt[i])<n?e=i+1:t=i}return e}function fl(n){(!wt.length||!wt.includes(n,Xs&&n.allowRecurse?fn+1:fn))&&(n.id==null?wt.push(n):wt.splice(Ap(n.id),0,n),kh())}function kh(){!Xs&&!Pa&&(Pa=!0,hl=Gh.then(Wh))}function Ep(n){const e=wt.indexOf(n);e>fn&&wt.splice(e,1)}function Tp(n){Fe(n)?ss.push(...n):(!En||!En.includes(n,n.allowRecurse?mi+1:mi))&&ss.push(n),kh()}function Yl(n,e=Xs?fn+1:0){for(;e<wt.length;e++){const t=wt[e];t&&t.pre&&(wt.splice(e,1),e--,t())}}function Hh(n){if(ss.length){const e=[...new Set(ss)];if(ss.length=0,En){En.push(...e);return}for(En=e,En.sort((t,i)=>Ys(t)-Ys(i)),mi=0;mi<En.length;mi++)En[mi]();En=null,mi=0}}const Ys=n=>n.id==null?1/0:n.id,Cp=(n,e)=>{const t=Ys(n)-Ys(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Wh(n){Pa=!1,Xs=!0,wt.sort(Cp);try{for(fn=0;fn<wt.length;fn++){const e=wt[fn];e&&e.active!==!1&&Qn(e,null,14)}}finally{fn=0,wt.length=0,Hh(),Xs=!1,hl=null,(wt.length||ss.length)&&Wh()}}function Pp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Qe;f&&(s=t.map(p=>p.trim())),h&&(s=t.map(Sa))}let a,l=i[a=Do(e)]||i[a=Do(gn(e))];!l&&r&&(l=i[a=Do(_s(e))]),l&&rn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,rn(c,n,6,s)}}function qh(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ze(n)){const l=c=>{const u=qh(c,e,!0);u&&(a=!0,Dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(it(n)&&i.set(n,null),null):(Fe(r)?r.forEach(l=>o[l]=null):Dt(o,r),it(n)&&i.set(n,o),o)}function go(n,e){return!n||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(n,e[0].toLowerCase()+e.slice(1))||ke(n,_s(e))||ke(n,e))}let Lt=null,_o=null;function io(n){const e=Lt;return Lt=n,_o=n&&n.type.__scopeId||null,e}function SS(n){_o=n}function AS(){_o=null}function Lp(n,e=Lt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&sc(-1);const r=io(e);let o;try{o=n(...s)}finally{io(r),i._d&&sc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Io(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=n;let d,_;const y=io(n);try{if(t.shapeFlag&4){const v=s||i;d=un(u.call(v,v,h,r,p,f,g)),_=l}else{const v=e;d=un(v.length>1?v(r,{attrs:l,slots:a,emit:c}):v(r,null)),_=e.props?l:Rp(l)}}catch(v){Us.length=0,mo(v,n,1),d=xt(ni)}let x=d;if(_&&m!==!1){const v=Object.keys(_),{shapeFlag:E}=x;v.length&&E&7&&(o&&v.some(el)&&(_=Dp(_,o)),x=ls(x,_))}return t.dirs&&(x=ls(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),d=x,io(y),d}const Rp=n=>{let e;for(const t in n)(t==="class"||t==="style"||co(t))&&((e||(e={}))[t]=n[t]);return e},Dp=(n,e)=>{const t={};for(const i in n)(!el(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ip(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Kl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!go(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Kl(i,o,c):!0:!!o;return!1}function Kl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!go(t,r))return!0}return!1}function Op({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Np=n=>n.__isSuspense;function Fp(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Tp(n)}function Yr(n,e){if(vt){let t=vt.provides;const i=vt.parent&&vt.parent.provides;i===t&&(t=vt.provides=Object.create(i)),t[n]=e}}function Zn(n,e,t=!1){const i=vt||Lt;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ze(e)?e.call(i.proxy):e}}function zp(n,e){return dl(n,null,e)}const Jl={};function Kr(n,e,t){return dl(n,e,t)}function dl(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=Qe){const a=vt;let l,c=!1,u=!1;if(St(n)?(l=()=>n.value,c=no(n)):is(n)?(l=()=>n,i=!0):Fe(n)?(u=!0,c=n.some(_=>is(_)||no(_)),l=()=>n.map(_=>{if(St(_))return _.value;if(is(_))return vi(_);if(ze(_))return Qn(_,a,2)})):ze(n)?e?l=()=>Qn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),rn(n,a,3,[f])}:l=mn,e&&i){const _=l;l=()=>vi(_())}let h,f=_=>{h=d.onStop=()=>{Qn(_,a,4)}};if(Js)return f=mn,e?t&&rn(e,a,3,[l(),u?[]:void 0,f]):l(),mn;let p=u?[]:Jl;const g=()=>{if(d.active)if(e){const _=d.run();(i||c||(u?_.some((y,x)=>qs(y,p[x])):qs(_,p)))&&(h&&h(),rn(e,a,3,[_,p===Jl?void 0:p,f]),p=_)}else d.run()};g.allowRecurse=!!e;let m;s==="sync"?m=g:s==="post"?m=()=>It(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>fl(g));const d=new rl(l,m);return e?t?g():p=d.run():s==="post"?It(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&tl(a.scope.effects,d)}}function Bp(n,e,t){const i=this.proxy,s=ct(n)?n.includes(".")?jh(i,n):()=>i[n]:n.bind(i,i);let r;ze(e)?r=e:(r=e.handler,t=e);const o=vt;cs(this);const a=dl(s,r.bind(i),t);return o?cs(o):wi(),a}function jh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function vi(n,e){if(!it(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),St(n))vi(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)vi(n[t],e);else if(vh(n)||ns(n))n.forEach(t=>{vi(t,e)});else if(Mh(n))for(const t in n)vi(n[t],e);return n}function Li(n){return ze(n)?{setup:n,name:n.name}:n}const Bs=n=>!!n.type.__asyncLoader,Xh=n=>n.type.__isKeepAlive;function Up(n,e){Yh(n,"a",e)}function Gp(n,e){Yh(n,"da",e)}function Yh(n,e,t=vt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(vo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Xh(s.parent.vnode)&&Vp(i,e,t,s),s=s.parent}}function Vp(n,e,t,i){const s=vo(e,n,i,!0);ml(()=>{tl(i[e],s)},t)}function vo(n,e,t=vt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;vs(),cs(t);const a=rn(e,t,n,o);return wi(),xs(),a});return i?s.unshift(r):s.push(r),r}}const In=n=>(e,t=vt)=>(!Js||n==="sp")&&vo(n,(...i)=>e(...i),t),kp=In("bm"),pl=In("m"),Hp=In("bu"),Wp=In("u"),qp=In("bum"),ml=In("um"),jp=In("sp"),Xp=In("rtg"),Yp=In("rtc");function Kp(n,e=vt){vo("ec",n,e)}function ES(n,e){const t=Lt;if(t===null)return n;const i=Mo(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Qe]=e[r];ze(o)&&(o={mounted:o,updated:o}),o.deep&&vi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function ai(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(vs(),rn(l,t,8,[n.el,a,n,e]),xs())}}const gl="components";function Jp(n,e){return Jh(gl,n,!0,e)||n}const Kh=Symbol();function TS(n){return ct(n)?Jh(gl,n,!1)||n:n||Kh}function Jh(n,e,t=!0,i=!1){const s=Lt||vt;if(s){const r=s.type;if(n===gl){const a=Am(r,!1);if(a&&(a===e||a===gn(e)||a===fo(gn(e))))return r}const o=Ql(s[n]||r[n],e)||Ql(s.appContext[n],e);return!o&&i?r:o}}function Ql(n,e){return n&&(n[e]||n[gn(e)]||n[fo(gn(e))])}function Qp(n,e,t,i){let s;const r=t&&t[i];if(Fe(n)||ct(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(it(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r&&r[a])}}else s=[];return t&&(t[i]=s),s}function CS(n,e,t={},i,s){if(Lt.isCE||Lt.parent&&Bs(Lt.parent)&&Lt.parent.isCE)return xt("slot",e==="default"?null:{name:e},i&&i());let r=n[e];r&&r._c&&(r._d=!1),jt();const o=r&&Qh(r(t)),a=xo(Ht,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Qh(n){return n.some(e=>oo(e)?!(e.type===ni||e.type===Ht&&!Qh(e.children)):!0)?n:null}const La=n=>n?ff(n)?Mo(n)||n.proxy:La(n.parent):null,so=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>La(n.parent),$root:n=>La(n.root),$emit:n=>n.emit,$options:n=>_l(n),$forceUpdate:n=>n.f||(n.f=()=>fl(n.update)),$nextTick:n=>n.n||(n.n=Vh.bind(n.proxy)),$watch:n=>Bp.bind(n)}),Zp={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(i!==Qe&&ke(i,e))return o[e]=1,i[e];if(s!==Qe&&ke(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&ke(c,e))return o[e]=3,r[e];if(t!==Qe&&ke(t,e))return o[e]=4,t[e];Ra&&(o[e]=0)}}const u=so[e];let h,f;if(u)return e==="$attrs"&&Bt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Qe&&ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ke(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return s!==Qe&&ke(s,e)?(s[e]=t,!0):i!==Qe&&ke(i,e)?(i[e]=t,!0):ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==Qe&&ke(n,o)||e!==Qe&&ke(e,o)||(a=r[0])&&ke(a,o)||ke(i,o)||ke(so,o)||ke(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Ra=!0;function $p(n){const e=_l(n),t=n.proxy,i=n.ctx;Ra=!1,e.beforeCreate&&Zl(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:y,destroyed:x,unmounted:v,render:E,renderTracked:S,renderTriggered:R,errorCaptured:M,serverPrefetch:C,expose:D,inheritAttrs:X,components:ne,directives:V,filters:O}=e;if(c&&em(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const $ in o){const j=o[$];ze(j)&&(i[$]=j.bind(t))}if(s){const $=s.call(t,t);it($)&&(n.data=sr($))}if(Ra=!0,r)for(const $ in r){const j=r[$],G=ze(j)?j.bind(t,t):ze(j.get)?j.get.bind(t,t):mn,k=!ze(j)&&ze(j.set)?j.set.bind(t):mn,ue=Pt({get:G,set:k});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>ue.value,set:Z=>ue.value=Z})}if(a)for(const $ in a)Zh(a[$],i,t,$);if(l){const $=ze(l)?l.call(t):l;Reflect.ownKeys($).forEach(j=>{Yr(j,$[j])})}u&&Zl(u,n,"c");function K($,j){Fe(j)?j.forEach(G=>$(G.bind(t))):j&&$(j.bind(t))}if(K(kp,h),K(pl,f),K(Hp,p),K(Wp,g),K(Up,m),K(Gp,d),K(Kp,M),K(Yp,S),K(Xp,R),K(qp,y),K(ml,v),K(jp,C),Fe(D))if(D.length){const $=n.exposed||(n.exposed={});D.forEach(j=>{Object.defineProperty($,j,{get:()=>t[j],set:G=>t[j]=G})})}else n.exposed||(n.exposed={});E&&n.render===mn&&(n.render=E),X!=null&&(n.inheritAttrs=X),ne&&(n.components=ne),V&&(n.directives=V)}function em(n,e,t=mn,i=!1){Fe(n)&&(n=Da(n));for(const s in n){const r=n[s];let o;it(r)?"default"in r?o=Zn(r.from||s,r.default,!0):o=Zn(r.from||s):o=Zn(r),St(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Zl(n,e,t){rn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Zh(n,e,t,i){const s=i.includes(".")?jh(t,i):()=>t[i];if(ct(n)){const r=e[n];ze(r)&&Kr(s,r)}else if(ze(n))Kr(s,n.bind(t));else if(it(n))if(Fe(n))n.forEach(r=>Zh(r,e,t,i));else{const r=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(r)&&Kr(s,r,n)}}function _l(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ro(l,c,o,!0)),ro(l,e,o)),it(e)&&r.set(e,l),l}function ro(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ro(n,r,t,!0),s&&s.forEach(o=>ro(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=tm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const tm={data:$l,props:fi,emits:fi,methods:fi,computed:fi,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:fi,directives:fi,watch:im,provide:$l,inject:nm};function $l(n,e){return e?n?function(){return Dt(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function nm(n,e){return fi(Da(n),Da(e))}function Da(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Tt(n,e){return n?[...new Set([].concat(n,e))]:e}function fi(n,e){return n?Dt(Dt(Object.create(null),n),e):e}function im(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=Tt(n[i],e[i]);return t}function sm(n,e,t,i=!1){const s={},r={};to(r,yo,1),n.propsDefaults=Object.create(null),$h(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:vp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function rm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ye(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(go(n.emitsOptions,f))continue;const p=e[f];if(l)if(ke(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=gn(f);s[g]=Ia(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{$h(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ke(e,h)&&((u=_s(h))===h||!ke(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ia(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ke(e,h))&&(delete r[h],c=!0)}c&&Dn(n,"set","$attrs")}function $h(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(jr(l))continue;const c=e[l];let u;s&&ke(s,u=gn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:go(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ye(t),c=a||Qe;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ia(s,l,h,c[h],n,!ke(c,h))}}return o}function Ia(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&ze(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(cs(s),i=c[t]=l.call(null,e),wi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_s(t))&&(i=!0))}return i}function ef(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ze(n)){const u=h=>{l=!0;const[f,p]=ef(h,e,!0);Dt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return it(n)&&i.set(n,ts),ts;if(Fe(r))for(let u=0;u<r.length;u++){const h=gn(r[u]);ec(h)&&(o[h]=Qe)}else if(r)for(const u in r){const h=gn(u);if(ec(h)){const f=r[u],p=o[h]=Fe(f)||ze(f)?{type:f}:f;if(p){const g=ic(Boolean,p.type),m=ic(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||ke(p,"default"))&&a.push(h)}}}const c=[o,a];return it(n)&&i.set(n,c),c}function ec(n){return n[0]!=="$"}function tc(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function nc(n,e){return tc(n)===tc(e)}function ic(n,e){return Fe(e)?e.findIndex(t=>nc(t,n)):ze(e)&&nc(e,n)?0:-1}const tf=n=>n[0]==="_"||n==="$stable",vl=n=>Fe(n)?n.map(un):[un(n)],om=(n,e,t)=>{if(e._n)return e;const i=Lp((...s)=>vl(e(...s)),t);return i._c=!1,i},nf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(tf(s))continue;const r=n[s];if(ze(r))e[s]=om(s,r,i);else if(r!=null){const o=vl(r);e[s]=()=>o}}},sf=(n,e)=>{const t=vl(e);n.slots.default=()=>t},am=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ye(e),to(e,"_",t)):nf(e,n.slots={})}else n.slots={},e&&sf(n,e);to(n.slots,yo,1)},lm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Qe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Dt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,nf(e,s)),o=e}else e&&(sf(n,e),o={default:1});if(r)for(const a in s)!tf(a)&&!(a in o)&&delete s[a]};function rf(){return{app:null,config:{isNativeTag:Bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function um(n,e){return function(i,s=null){ze(i)||(i=Object.assign({},i)),s!=null&&!it(s)&&(s=null);const r=rf(),o=new Set;let a=!1;const l=r.app={_uid:cm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Tm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ze(c.install)?(o.add(c),c.install(l,...u)):ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=xt(i,s);return f.appContext=r,u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Mo(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Oa(n,e,t,i,s=!1){if(Fe(n)){n.forEach((f,p)=>Oa(f,e&&(Fe(e)?e[p]:e),t,i,s));return}if(Bs(i)&&!s)return;const r=i.shapeFlag&4?Mo(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Qe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ct(c)?(u[c]=null,ke(h,c)&&(h[c]=null)):St(c)&&(c.value=null)),ze(l))Qn(l,a,12,[o,u]);else{const f=ct(l),p=St(l);if(f||p){const g=()=>{if(n.f){const m=f?ke(h,l)?h[l]:u[l]:l.value;s?Fe(m)&&tl(m,r):Fe(m)?m.includes(r)||m.push(r):f?(u[l]=[r],ke(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,ke(h,l)&&(h[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,It(g,t)):g()}}}const It=Fp;function hm(n){return fm(n)}function fm(n,e){const t=Wd();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=mn,insertStaticContent:g}=n,m=(b,A,I,B=null,U=null,te=null,ae=!1,J=null,fe=!!A.dynamicChildren)=>{if(b===A)return;b&&!As(b,A)&&(B=ce(b),Z(b,U,te,!0),b=null),A.patchFlag===-2&&(fe=!1,A.dynamicChildren=null);const{type:ie,ref:T,shapeFlag:w}=A;switch(ie){case xl:d(b,A,I,B);break;case ni:_(b,A,I,B);break;case Jr:b==null&&y(A,I,B,ae);break;case Ht:ne(b,A,I,B,U,te,ae,J,fe);break;default:w&1?E(b,A,I,B,U,te,ae,J,fe):w&6?V(b,A,I,B,U,te,ae,J,fe):(w&64||w&128)&&ie.process(b,A,I,B,U,te,ae,J,fe,xe)}T!=null&&U&&Oa(T,b&&b.ref,te,A||b,!A)},d=(b,A,I,B)=>{if(b==null)i(A.el=a(A.children),I,B);else{const U=A.el=b.el;A.children!==b.children&&c(U,A.children)}},_=(b,A,I,B)=>{b==null?i(A.el=l(A.children||""),I,B):A.el=b.el},y=(b,A,I,B)=>{[b.el,b.anchor]=g(b.children,A,I,B,b.el,b.anchor)},x=({el:b,anchor:A},I,B)=>{let U;for(;b&&b!==A;)U=f(b),i(b,I,B),b=U;i(A,I,B)},v=({el:b,anchor:A})=>{let I;for(;b&&b!==A;)I=f(b),s(b),b=I;s(A)},E=(b,A,I,B,U,te,ae,J,fe)=>{ae=ae||A.type==="svg",b==null?S(A,I,B,U,te,ae,J,fe):C(b,A,U,te,ae,J,fe)},S=(b,A,I,B,U,te,ae,J)=>{let fe,ie;const{type:T,props:w,shapeFlag:N,transition:Q,dirs:re}=b;if(fe=b.el=o(b.type,te,w&&w.is,w),N&8?u(fe,b.children):N&16&&M(b.children,fe,null,B,U,te&&T!=="foreignObject",ae,J),re&&ai(b,null,B,"created"),w){for(const be in w)be!=="value"&&!jr(be)&&r(fe,be,null,w[be],te,b.children,B,U,z);"value"in w&&r(fe,"value",null,w.value),(ie=w.onVnodeBeforeMount)&&ln(ie,B,b)}R(fe,b,b.scopeId,ae,B),re&&ai(b,null,B,"beforeMount");const de=(!U||U&&!U.pendingBranch)&&Q&&!Q.persisted;de&&Q.beforeEnter(fe),i(fe,A,I),((ie=w&&w.onVnodeMounted)||de||re)&&It(()=>{ie&&ln(ie,B,b),de&&Q.enter(fe),re&&ai(b,null,B,"mounted")},U)},R=(b,A,I,B,U)=>{if(I&&p(b,I),B)for(let te=0;te<B.length;te++)p(b,B[te]);if(U){let te=U.subTree;if(A===te){const ae=U.vnode;R(b,ae,ae.scopeId,ae.slotScopeIds,U.parent)}}},M=(b,A,I,B,U,te,ae,J,fe=0)=>{for(let ie=fe;ie<b.length;ie++){const T=b[ie]=J?qn(b[ie]):un(b[ie]);m(null,T,A,I,B,U,te,ae,J)}},C=(b,A,I,B,U,te,ae)=>{const J=A.el=b.el;let{patchFlag:fe,dynamicChildren:ie,dirs:T}=A;fe|=b.patchFlag&16;const w=b.props||Qe,N=A.props||Qe;let Q;I&&li(I,!1),(Q=N.onVnodeBeforeUpdate)&&ln(Q,I,A,b),T&&ai(A,b,I,"beforeUpdate"),I&&li(I,!0);const re=U&&A.type!=="foreignObject";if(ie?D(b.dynamicChildren,ie,J,I,B,re,te):ae||j(b,A,J,null,I,B,re,te,!1),fe>0){if(fe&16)X(J,A,w,N,I,B,U);else if(fe&2&&w.class!==N.class&&r(J,"class",null,N.class,U),fe&4&&r(J,"style",w.style,N.style,U),fe&8){const de=A.dynamicProps;for(let be=0;be<de.length;be++){const me=de[be],ee=w[me],Te=N[me];(Te!==ee||me==="value")&&r(J,me,ee,Te,U,b.children,I,B,z)}}fe&1&&b.children!==A.children&&u(J,A.children)}else!ae&&ie==null&&X(J,A,w,N,I,B,U);((Q=N.onVnodeUpdated)||T)&&It(()=>{Q&&ln(Q,I,A,b),T&&ai(A,b,I,"updated")},B)},D=(b,A,I,B,U,te,ae)=>{for(let J=0;J<A.length;J++){const fe=b[J],ie=A[J],T=fe.el&&(fe.type===Ht||!As(fe,ie)||fe.shapeFlag&70)?h(fe.el):I;m(fe,ie,T,null,B,U,te,ae,!0)}},X=(b,A,I,B,U,te,ae)=>{if(I!==B){if(I!==Qe)for(const J in I)!jr(J)&&!(J in B)&&r(b,J,I[J],null,ae,A.children,U,te,z);for(const J in B){if(jr(J))continue;const fe=B[J],ie=I[J];fe!==ie&&J!=="value"&&r(b,J,ie,fe,ae,A.children,U,te,z)}"value"in B&&r(b,"value",I.value,B.value)}},ne=(b,A,I,B,U,te,ae,J,fe)=>{const ie=A.el=b?b.el:a(""),T=A.anchor=b?b.anchor:a("");let{patchFlag:w,dynamicChildren:N,slotScopeIds:Q}=A;Q&&(J=J?J.concat(Q):Q),b==null?(i(ie,I,B),i(T,I,B),M(A.children,I,T,U,te,ae,J,fe)):w>0&&w&64&&N&&b.dynamicChildren?(D(b.dynamicChildren,N,I,U,te,ae,J),(A.key!=null||U&&A===U.subTree)&&of(b,A,!0)):j(b,A,I,T,U,te,ae,J,fe)},V=(b,A,I,B,U,te,ae,J,fe)=>{A.slotScopeIds=J,b==null?A.shapeFlag&512?U.ctx.activate(A,I,B,ae,fe):O(A,I,B,U,te,ae,fe):Y(b,A,fe)},O=(b,A,I,B,U,te,ae)=>{const J=b.component=ym(b,B,U);if(Xh(b)&&(J.ctx.renderer=xe),Mm(J),J.asyncDep){if(U&&U.registerDep(J,K),!b.el){const fe=J.subTree=xt(ni);_(null,fe,A,I)}return}K(J,b,A,I,U,te,ae)},Y=(b,A,I)=>{const B=A.component=b.component;if(Ip(b,A,I))if(B.asyncDep&&!B.asyncResolved){$(B,A,I);return}else B.next=A,Ep(B.update),B.update();else A.el=b.el,B.vnode=A},K=(b,A,I,B,U,te,ae)=>{const J=()=>{if(b.isMounted){let{next:T,bu:w,u:N,parent:Q,vnode:re}=b,de=T,be;li(b,!1),T?(T.el=re.el,$(b,T,ae)):T=re,w&&Xr(w),(be=T.props&&T.props.onVnodeBeforeUpdate)&&ln(be,Q,T,re),li(b,!0);const me=Io(b),ee=b.subTree;b.subTree=me,m(ee,me,h(ee.el),ce(ee),b,U,te),T.el=me.el,de===null&&Op(b,me.el),N&&It(N,U),(be=T.props&&T.props.onVnodeUpdated)&&It(()=>ln(be,Q,T,re),U)}else{let T;const{el:w,props:N}=A,{bm:Q,m:re,parent:de}=b,be=Bs(A);if(li(b,!1),Q&&Xr(Q),!be&&(T=N&&N.onVnodeBeforeMount)&&ln(T,de,A),li(b,!0),w&&Me){const me=()=>{b.subTree=Io(b),Me(w,b.subTree,b,U,null)};be?A.type.__asyncLoader().then(()=>!b.isUnmounted&&me()):me()}else{const me=b.subTree=Io(b);m(null,me,I,B,b,U,te),A.el=me.el}if(re&&It(re,U),!be&&(T=N&&N.onVnodeMounted)){const me=A;It(()=>ln(T,de,me),U)}(A.shapeFlag&256||de&&Bs(de.vnode)&&de.vnode.shapeFlag&256)&&b.a&&It(b.a,U),b.isMounted=!0,A=I=B=null}},fe=b.effect=new rl(J,()=>fl(ie),b.scope),ie=b.update=()=>fe.run();ie.id=b.uid,li(b,!0),ie()},$=(b,A,I)=>{A.component=b;const B=b.vnode.props;b.vnode=A,b.next=null,rm(b,A.props,B,I),lm(b,A.children,I),vs(),Yl(),xs()},j=(b,A,I,B,U,te,ae,J,fe=!1)=>{const ie=b&&b.children,T=b?b.shapeFlag:0,w=A.children,{patchFlag:N,shapeFlag:Q}=A;if(N>0){if(N&128){k(ie,w,I,B,U,te,ae,J,fe);return}else if(N&256){G(ie,w,I,B,U,te,ae,J,fe);return}}Q&8?(T&16&&z(ie,U,te),w!==ie&&u(I,w)):T&16?Q&16?k(ie,w,I,B,U,te,ae,J,fe):z(ie,U,te,!0):(T&8&&u(I,""),Q&16&&M(w,I,B,U,te,ae,J,fe))},G=(b,A,I,B,U,te,ae,J,fe)=>{b=b||ts,A=A||ts;const ie=b.length,T=A.length,w=Math.min(ie,T);let N;for(N=0;N<w;N++){const Q=A[N]=fe?qn(A[N]):un(A[N]);m(b[N],Q,I,null,U,te,ae,J,fe)}ie>T?z(b,U,te,!0,!1,w):M(A,I,B,U,te,ae,J,fe,w)},k=(b,A,I,B,U,te,ae,J,fe)=>{let ie=0;const T=A.length;let w=b.length-1,N=T-1;for(;ie<=w&&ie<=N;){const Q=b[ie],re=A[ie]=fe?qn(A[ie]):un(A[ie]);if(As(Q,re))m(Q,re,I,null,U,te,ae,J,fe);else break;ie++}for(;ie<=w&&ie<=N;){const Q=b[w],re=A[N]=fe?qn(A[N]):un(A[N]);if(As(Q,re))m(Q,re,I,null,U,te,ae,J,fe);else break;w--,N--}if(ie>w){if(ie<=N){const Q=N+1,re=Q<T?A[Q].el:B;for(;ie<=N;)m(null,A[ie]=fe?qn(A[ie]):un(A[ie]),I,re,U,te,ae,J,fe),ie++}}else if(ie>N)for(;ie<=w;)Z(b[ie],U,te,!0),ie++;else{const Q=ie,re=ie,de=new Map;for(ie=re;ie<=N;ie++){const we=A[ie]=fe?qn(A[ie]):un(A[ie]);we.key!=null&&de.set(we.key,ie)}let be,me=0;const ee=N-re+1;let Te=!1,De=0;const Ee=new Array(ee);for(ie=0;ie<ee;ie++)Ee[ie]=0;for(ie=Q;ie<=w;ie++){const we=b[ie];if(me>=ee){Z(we,U,te,!0);continue}let Oe;if(we.key!=null)Oe=de.get(we.key);else for(be=re;be<=N;be++)if(Ee[be-re]===0&&As(we,A[be])){Oe=be;break}Oe===void 0?Z(we,U,te,!0):(Ee[Oe-re]=ie+1,Oe>=De?De=Oe:Te=!0,m(we,A[Oe],I,null,U,te,ae,J,fe),me++)}const Le=Te?dm(Ee):ts;for(be=Le.length-1,ie=ee-1;ie>=0;ie--){const we=re+ie,Oe=A[we],Je=we+1<T?A[we+1].el:B;Ee[ie]===0?m(null,Oe,I,Je,U,te,ae,J,fe):Te&&(be<0||ie!==Le[be]?ue(Oe,I,Je,2):be--)}}},ue=(b,A,I,B,U=null)=>{const{el:te,type:ae,transition:J,children:fe,shapeFlag:ie}=b;if(ie&6){ue(b.component.subTree,A,I,B);return}if(ie&128){b.suspense.move(A,I,B);return}if(ie&64){ae.move(b,A,I,xe);return}if(ae===Ht){i(te,A,I);for(let w=0;w<fe.length;w++)ue(fe[w],A,I,B);i(b.anchor,A,I);return}if(ae===Jr){x(b,A,I);return}if(B!==2&&ie&1&&J)if(B===0)J.beforeEnter(te),i(te,A,I),It(()=>J.enter(te),U);else{const{leave:w,delayLeave:N,afterLeave:Q}=J,re=()=>i(te,A,I),de=()=>{w(te,()=>{re(),Q&&Q()})};N?N(te,re,de):de()}else i(te,A,I)},Z=(b,A,I,B=!1,U=!1)=>{const{type:te,props:ae,ref:J,children:fe,dynamicChildren:ie,shapeFlag:T,patchFlag:w,dirs:N}=b;if(J!=null&&Oa(J,null,I,b,!0),T&256){A.ctx.deactivate(b);return}const Q=T&1&&N,re=!Bs(b);let de;if(re&&(de=ae&&ae.onVnodeBeforeUnmount)&&ln(de,A,b),T&6)W(b.component,I,B);else{if(T&128){b.suspense.unmount(I,B);return}Q&&ai(b,null,A,"beforeUnmount"),T&64?b.type.remove(b,A,I,U,xe,B):ie&&(te!==Ht||w>0&&w&64)?z(ie,A,I,!1,!0):(te===Ht&&w&384||!U&&T&16)&&z(fe,A,I),B&&ve(b)}(re&&(de=ae&&ae.onVnodeUnmounted)||Q)&&It(()=>{de&&ln(de,A,b),Q&&ai(b,null,A,"unmounted")},I)},ve=b=>{const{type:A,el:I,anchor:B,transition:U}=b;if(A===Ht){Ae(I,B);return}if(A===Jr){v(b);return}const te=()=>{s(I),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(b.shapeFlag&1&&U&&!U.persisted){const{leave:ae,delayLeave:J}=U,fe=()=>ae(I,te);J?J(b.el,te,fe):fe()}else te()},Ae=(b,A)=>{let I;for(;b!==A;)I=f(b),s(b),b=I;s(A)},W=(b,A,I)=>{const{bum:B,scope:U,update:te,subTree:ae,um:J}=b;B&&Xr(B),U.stop(),te&&(te.active=!1,Z(ae,b,A,I)),J&&It(J,A),It(()=>{b.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},z=(b,A,I,B=!1,U=!1,te=0)=>{for(let ae=te;ae<b.length;ae++)Z(b[ae],A,I,B,U)},ce=b=>b.shapeFlag&6?ce(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),he=(b,A,I)=>{b==null?A._vnode&&Z(A._vnode,null,null,!0):m(A._vnode||null,b,A,null,null,null,I),Yl(),Hh(),A._vnode=b},xe={p:m,um:Z,m:ue,r:ve,mt:O,mc:M,pc:j,pbc:D,n:ce,o:n};let pe,Me;return e&&([pe,Me]=e(xe)),{render:he,hydrate:pe,createApp:um(he,pe)}}function li({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function of(n,e,t=!1){const i=n.children,s=e.children;if(Fe(i)&&Fe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=qn(s[r]),a.el=o.el),t||of(o,a))}}function dm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const pm=n=>n.__isTeleport,Ht=Symbol(void 0),xl=Symbol(void 0),ni=Symbol(void 0),Jr=Symbol(void 0),Us=[];let nn=null;function jt(n=!1){Us.push(nn=n?null:[])}function mm(){Us.pop(),nn=Us[Us.length-1]||null}let Ks=1;function sc(n){Ks+=n}function af(n){return n.dynamicChildren=Ks>0?nn||ts:null,mm(),Ks>0&&nn&&nn.push(n),n}function $n(n,e,t,i,s,r){return af(Wt(n,e,t,i,s,r,!0))}function xo(n,e,t,i,s){return af(xt(n,e,t,i,s,!0))}function oo(n){return n?n.__v_isVNode===!0:!1}function As(n,e){return n.type===e.type&&n.key===e.key}const yo="__vInternal",lf=({key:n})=>n??null,Qr=({ref:n,ref_key:e,ref_for:t})=>n!=null?ct(n)||St(n)||ze(n)?{i:Lt,r:n,k:e,f:!!t}:n:null;function Wt(n,e=null,t=null,i=0,s=null,r=n===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&lf(e),ref:e&&Qr(e),scopeId:_o,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(yl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=ct(t)?8:16),Ks>0&&!o&&nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&nn.push(l),l}const xt=gm;function gm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Kh)&&(n=ni),oo(n)){const a=ls(n,e,!0);return t&&yl(a,t),Ks>0&&!r&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag|=-2,a}if(Em(n)&&(n=n.__vccOpts),e){e=_m(e);let{class:a,style:l}=e;a&&!ct(a)&&(e.class=ir(a)),it(l)&&(Ih(l)&&!Fe(l)&&(l=Dt({},l)),e.style=Xn(l))}const o=ct(n)?1:Np(n)?128:pm(n)?64:it(n)?4:ze(n)?2:0;return Wt(n,e,t,i,s,o,r,!0)}function _m(n){return n?Ih(n)||yo in n?Dt({},n):n:null}function ls(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?hf(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&lf(a),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Qr(e)):[s,Qr(e)]:Qr(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ht?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ls(n.ssContent),ssFallback:n.ssFallback&&ls(n.ssFallback),el:n.el,anchor:n.anchor}}function cf(n=" ",e=0){return xt(xl,null,n,e)}function PS(n,e){const t=xt(Jr,null,n);return t.staticCount=e,t}function uf(n="",e=!1){return e?(jt(),xo(ni,null,n)):xt(ni,null,n)}function un(n){return n==null||typeof n=="boolean"?xt(ni):Fe(n)?xt(Ht,null,n.slice()):typeof n=="object"?qn(n):xt(xl,null,String(n))}function qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ls(n)}function yl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),yl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(yo in e)?e._ctx=Lt:s===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Lt},t=32):(e=String(e),i&64?(t=16,e=[cf(e)]):t=8);n.children=e,n.shapeFlag|=t}function hf(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ir([e.class,i.class]));else if(s==="style")e.style=Xn([e.style,i.style]);else if(co(s)){const r=e[s],o=i[s];o&&r!==o&&!(Fe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ln(n,e,t,i=null){rn(n,e,7,[t,i])}const vm=rf();let xm=0;function ym(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||vm,r={uid:xm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new qd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ef(i,s),emitsOptions:qh(i,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Pp.bind(null,r),n.ce&&n.ce(r),r}let vt=null;const cs=n=>{vt=n,n.scope.on()},wi=()=>{vt&&vt.scope.off(),vt=null};function ff(n){return n.vnode.shapeFlag&4}let Js=!1;function Mm(n,e=!1){Js=e;const{props:t,children:i}=n.vnode,s=ff(n);sm(n,t,s,e),am(n,i);const r=s?bm(n,e):void 0;return Js=!1,r}function bm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Oh(new Proxy(n.ctx,Zp));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Sm(n):null;cs(n),vs();const r=Qn(i,n,0,[n.props,s]);if(xs(),wi(),xh(r)){if(r.then(wi,wi),e)return r.then(o=>{rc(n,o,e)}).catch(o=>{mo(o,n,0)});n.asyncDep=r}else rc(n,r,e)}else df(n,e)}function rc(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:it(e)&&(n.setupState=Bh(e)),df(n,t)}let oc;function df(n,e,t){const i=n.type;if(!n.render){if(!e&&oc&&!i.render){const s=i.template||_l(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Dt(Dt({isCustomElement:r,delimiters:a},o),l);i.render=oc(s,c)}}n.render=i.render||mn}cs(n),vs(),$p(n),xs(),wi()}function wm(n){return new Proxy(n.attrs,{get(e,t){return Bt(n,"get","$attrs"),e[t]}})}function Sm(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=wm(n))},slots:n.slots,emit:n.emit,expose:e}}function Mo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Bh(Oh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in so)return so[t](n)}}))}function Am(n,e=!0){return ze(n)?n.displayName||n.name:n.name||e&&n.__name}function Em(n){return ze(n)&&"__vccOpts"in n}const Pt=(n,e)=>wp(n,e,Js);function pf(n,e,t){const i=arguments.length;return i===2?it(e)&&!Fe(e)?oo(e)?xt(n,null,[e]):xt(n,e):xt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&oo(t)&&(t=[t]),xt(n,e,t))}const Tm="3.2.41",Cm="http://www.w3.org/2000/svg",gi=typeof document<"u"?document:null,ac=gi&&gi.createElement("template"),Pm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?gi.createElementNS(Cm,n):gi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>gi.createTextNode(n),createComment:n=>gi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>gi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{ac.innerHTML=i?`<svg>${n}</svg>`:n;const a=ac.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Lm(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Rm(n,e,t){const i=n.style,s=ct(t);if(t&&!s){for(const r in t)Na(i,r,t[r]);if(e&&!ct(e))for(const r in e)t[r]==null&&Na(i,r,"")}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const lc=/\s*!important$/;function Na(n,e,t){if(Fe(t))t.forEach(i=>Na(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Dm(n,e);lc.test(t)?n.setProperty(_s(i),t.replace(lc,""),"important"):n[i]=t}}const cc=["Webkit","Moz","ms"],Oo={};function Dm(n,e){const t=Oo[e];if(t)return t;let i=gn(e);if(i!=="filter"&&i in n)return Oo[e]=i;i=fo(i);for(let s=0;s<cc.length;s++){const r=cc[s]+i;if(r in n)return Oo[e]=r}return e}const uc="http://www.w3.org/1999/xlink";function Im(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(uc,e.slice(6,e.length)):n.setAttributeNS(uc,e,t);else{const r=Id(e);t==null||r&&!gh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Om(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=gh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function Ji(n,e,t,i){n.addEventListener(e,t,i)}function Nm(n,e,t,i){n.removeEventListener(e,t,i)}function Fm(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=zm(e);if(i){const c=r[e]=Gm(i,s);Ji(n,a,c,l)}else o&&(Nm(n,a,o,l),r[e]=void 0)}}const hc=/(?:Once|Passive|Capture)$/;function zm(n){let e;if(hc.test(n)){e={};let i;for(;i=n.match(hc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_s(n.slice(2)),e]}let No=0;const Bm=Promise.resolve(),Um=()=>No||(Bm.then(()=>No=0),No=Date.now());function Gm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;rn(Vm(i,t.value),e,5,[i])};return t.value=n,t.attached=Um(),t}function Vm(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const fc=/^on[a-z]/,km=(n,e,t,i,s=!1,r,o,a,l)=>{e==="class"?Lm(n,i,s):e==="style"?Rm(n,t,i):co(e)?el(e)||Fm(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hm(n,e,i,s))?Om(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Im(n,e,i,s))};function Hm(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&fc.test(e)&&ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||fc.test(e)&&ct(t)?!1:e in n}const dc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>Xr(e,t):e};function Wm(n){n.target.composing=!0}function pc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const LS={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n._assign=dc(s);const r=i||s.props&&s.props.type==="number";Ji(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=Sa(a)),n._assign(a)}),t&&Ji(n,"change",()=>{n.value=n.value.trim()}),e||(Ji(n,"compositionstart",Wm),Ji(n,"compositionend",pc),Ji(n,"change",pc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n._assign=dc(r),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(s||n.type==="number")&&Sa(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},RS={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Es(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Es(n,!0),i.enter(n)):i.leave(n,()=>{Es(n,!1)}):Es(n,e))},beforeUnmount(n,{value:e}){Es(n,e)}};function Es(n,e){n.style.display=e?n._vod:"none"}const qm=Dt({patchProp:km},Pm);let mc;function jm(){return mc||(mc=hm(qm))}const Xm=(...n)=>{const e=jm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Ym(i);if(!s)return;const r=e._component;!ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ym(n){return ct(n)?document.querySelector(n):n}const mf=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Km={};function Jm(n,e){const t=Jp("router-view");return jt(),xo(t)}const Ri=mf(Km,[["render",Jm]]);/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qi=typeof window<"u";function Qm(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function Fo(n,e){const t={};for(const i in e){const s=e[i];t[i]=on(s)?s.map(n):n(s)}return t}const Gs=()=>{},on=Array.isArray,Zm=/\/$/,$m=n=>n.replace(Zm,"");function zo(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=ig(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function eg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function gc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function tg(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&us(e.matched[i],t.matched[s])&&gf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function us(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function gf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!ng(n[t],e[t]))return!1;return!0}function ng(n,e){return on(n)?_c(n,e):on(e)?_c(e,n):n===e}function _c(n,e){return on(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function ig(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let s=t.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Qs;(function(n){n.pop="pop",n.push="push"})(Qs||(Qs={}));var Vs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Vs||(Vs={}));function sg(n){if(!n)if(Qi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),$m(n)}const rg=/^[^#]+#/;function og(n,e){return n.replace(rg,"#")+e}function ag(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const bo=()=>({left:window.pageXOffset,top:window.pageYOffset});function lg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=ag(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vc(n,e){return(history.state?history.state.position-e:-1)+n}const Fa=new Map;function cg(n,e){Fa.set(n,e)}function ug(n){const e=Fa.get(n);return Fa.delete(n),e}let hg=()=>location.protocol+"//"+location.host;function _f(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),gc(l,"")}return gc(t,n)+i+s}function fg(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=_f(n,location),g=t.value,m=e.value;let d=0;if(f){if(t.value=p,e.value=f,o&&o===g){o=null;return}d=m?f.position-m.position:0}else i(p);s.forEach(_=>{_(t.value,g,{delta:d,type:Qs.pop,direction:d?d>0?Vs.forward:Vs.back:Vs.unknown})})};function l(){o=t.value}function c(f){s.push(f);const p=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Ke({},f.state,{scroll:bo()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function xc(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?bo():null}}function dg(n){const{history:e,location:t}=window,i={value:_f(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:hg()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](f)}}function o(l,c){const u=Ke({},e.state,xc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Ke({},s.value,e.state,{forward:l,scroll:bo()});r(u.current,u,!0);const h=Ke({},xc(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function pg(n){n=sg(n);const e=dg(n),t=fg(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=Ke({location:"",base:n,go:i,createHref:og.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mg(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),pg(n)}function gg(n){return typeof n=="string"||n&&typeof n=="object"}function vf(n){return typeof n=="string"||typeof n=="symbol"}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xf=Symbol("");var yc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(yc||(yc={}));function hs(n,e){return Ke(new Error,{type:n,[xf]:!0},e)}function xn(n,e){return n instanceof Error&&xf in n&&(e==null||!!(n.type&e))}const Mc="[^/]+?",_g={sensitive:!1,strict:!1,start:!0,end:!0},vg=/[.+*?^${}()[\]/\\]/g;function xg(n,e){const t=Ke({},_g,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(vg,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:m,optional:d,regexp:_}=f;r.push({name:g,repeatable:m,optional:d});const y=_||Mc;if(y!==Mc){p+=10;try{new RegExp(`(${y})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+v.message)}}let x=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(x=d&&c.length<2?`(?:/${x})`:"/"+x),d&&(x+="?"),s+=x,p+=20,d&&(p+=-8),m&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=r[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:d}=p,_=g in c?c[g]:"";if(on(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=on(_)?_.join("/"):_;if(!y)if(d)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function yg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Mg(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=yg(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(bc(i))return 1;if(bc(s))return-1}return s.length-i.length}function bc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const bg={type:0,value:""},wg=/[a-zA-Z0-9_]/;function Sg(n){if(!n)return[[]];if(n==="/")return[[bg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:wg.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Ag(n,e,t){const i=xg(Sg(n.path),t),s=Ke(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Eg(n,e){const t=[],i=new Map;e=Ac({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const p=!f,g=Tg(u);g.aliasOf=f&&f.record;const m=Ac(e,u),d=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of x)d.push(Ke({},g,{components:f?f.record.components:g.components,path:v,aliasOf:f?f.record:g}))}let _,y;for(const x of d){const{path:v}=x;if(h&&v[0]!=="/"){const E=h.record.path,S=E[E.length-1]==="/"?"":"/";x.path=h.record.path+(v&&S+v)}if(_=Ag(x,h,m),f?f.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),p&&u.name&&!Sc(_)&&o(u.name)),g.children){const E=g.children;for(let S=0;S<E.length;S++)r(E[S],_,f&&f.children[S])}f=f||_,l(_)}return y?()=>{o(y)}:Gs}function o(u){if(vf(u)){const h=i.get(u);h&&(i.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&Mg(u,t[h])>=0&&(u.record.path!==t[h].record.path||!yf(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Sc(u)&&i.set(u.record.name,u)}function c(u,h){let f,p={},g,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw hs(1,{location:u});m=f.record.name,p=Ke(wc(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&wc(u.params,f.keys.map(y=>y.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=t.find(y=>y.re.test(g)),f&&(p=f.parse(g),m=f.record.name);else{if(f=h.name?i.get(h.name):t.find(y=>y.re.test(h.path)),!f)throw hs(1,{location:u,currentLocation:h});m=f.record.name,p=Ke({},h.params,u.params),g=f.stringify(p)}const d=[];let _=f;for(;_;)d.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:d,meta:Pg(d)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function wc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Tg(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Cg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Cg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Sc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Pg(n){return n.reduce((e,t)=>Ke(e,t.meta),{})}function Ac(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function yf(n,e){return e.children.some(t=>t===n||yf(n,t))}const Mf=/#/g,Lg=/&/g,Rg=/\//g,Dg=/=/g,Ig=/\?/g,bf=/\+/g,Og=/%5B/g,Ng=/%5D/g,wf=/%5E/g,Fg=/%60/g,Sf=/%7B/g,zg=/%7C/g,Af=/%7D/g,Bg=/%20/g;function Ml(n){return encodeURI(""+n).replace(zg,"|").replace(Og,"[").replace(Ng,"]")}function Ug(n){return Ml(n).replace(Sf,"{").replace(Af,"}").replace(wf,"^")}function za(n){return Ml(n).replace(bf,"%2B").replace(Bg,"+").replace(Mf,"%23").replace(Lg,"%26").replace(Fg,"`").replace(Sf,"{").replace(Af,"}").replace(wf,"^")}function Gg(n){return za(n).replace(Dg,"%3D")}function Vg(n){return Ml(n).replace(Mf,"%23").replace(Ig,"%3F")}function kg(n){return n==null?"":Vg(n).replace(Rg,"%2F")}function ao(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Hg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(bf," "),o=r.indexOf("="),a=ao(o<0?r:r.slice(0,o)),l=o<0?null:ao(r.slice(o+1));if(a in e){let c=e[a];on(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ec(n){let e="";for(let t in n){const i=n[t];if(t=Gg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(on(i)?i.map(r=>r&&za(r)):[i&&za(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Wg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=on(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const qg=Symbol(""),Tc=Symbol(""),bl=Symbol(""),Ef=Symbol(""),Ba=Symbol("");function Ts(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function jn(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(hs(4,{from:t,to:e})):h instanceof Error?a(h):gg(h)?a(hs(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Bo(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(jg(a)){const c=(a.__vccOpts||a)[e];c&&s.push(jn(c,t,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Qm(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&jn(f,t,i,r,o)()}))}}return s}function jg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Cc(n){const e=Zn(bl),t=Zn(Ef),i=Pt(()=>e.resolve(Cn(n.to))),s=Pt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(us.bind(null,u));if(f>-1)return f;const p=Pc(l[c-2]);return c>1&&Pc(u)===p&&h[h.length-1].path!==p?h.findIndex(us.bind(null,l[c-2])):f}),r=Pt(()=>s.value>-1&&Jg(t.params,i.value.params)),o=Pt(()=>s.value>-1&&s.value===t.matched.length-1&&gf(t.params,i.value.params));function a(l={}){return Kg(l)?e[Cn(n.replace)?"replace":"push"](Cn(n.to)).catch(Gs):Promise.resolve()}return{route:i,href:Pt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Xg=Li({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cc,setup(n,{slots:e}){const t=sr(Cc(n)),{options:i}=Zn(bl),s=Pt(()=>({[Lc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Lc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:pf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Yg=Xg;function Kg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Jg(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!on(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Pc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Lc=(n,e,t)=>n??e??t,Qg=Li({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Zn(Ba),s=Pt(()=>n.route||i.value),r=Zn(Tc,0),o=Pt(()=>{let c=Cn(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Pt(()=>s.value.matched[o.value]);Yr(Tc,Pt(()=>o.value+1)),Yr(qg,a),Yr(Ba,s);const l=pn();return Kr(()=>[l.value,a.value,n.name],([c,u,h],[f,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!us(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Rc(t.default,{Component:f,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,d=pf(f,Ke({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Rc(t.default,{Component:d,route:c})||d}}});function Rc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Zg=Qg;function $g(n){const e=Eg(n.routes,n),t=n.parseQuery||Hg,i=n.stringifyQuery||Ec,s=n.history,r=Ts(),o=Ts(),a=Ts(),l=xp(zn);let c=zn;Qi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fo.bind(null,W=>""+W),h=Fo.bind(null,kg),f=Fo.bind(null,ao);function p(W,z){let ce,he;return vf(W)?(ce=e.getRecordMatcher(W),he=z):he=W,e.addRoute(he,ce)}function g(W){const z=e.getRecordMatcher(W);z&&e.removeRoute(z)}function m(){return e.getRoutes().map(W=>W.record)}function d(W){return!!e.getRecordMatcher(W)}function _(W,z){if(z=Ke({},z||l.value),typeof W=="string"){const b=zo(t,W,z.path),A=e.resolve({path:b.path},z),I=s.createHref(b.fullPath);return Ke(b,A,{params:f(A.params),hash:ao(b.hash),redirectedFrom:void 0,href:I})}let ce;if("path"in W)ce=Ke({},W,{path:zo(t,W.path,z.path).path});else{const b=Ke({},W.params);for(const A in b)b[A]==null&&delete b[A];ce=Ke({},W,{params:h(W.params)}),z.params=h(z.params)}const he=e.resolve(ce,z),xe=W.hash||"";he.params=u(f(he.params));const pe=eg(i,Ke({},W,{hash:Ug(xe),path:he.path})),Me=s.createHref(pe);return Ke({fullPath:pe,hash:xe,query:i===Ec?Wg(W.query):W.query||{}},he,{redirectedFrom:void 0,href:Me})}function y(W){return typeof W=="string"?zo(t,W,l.value.path):Ke({},W)}function x(W,z){if(c!==W)return hs(8,{from:z,to:W})}function v(W){return R(W)}function E(W){return v(Ke(y(W),{replace:!0}))}function S(W){const z=W.matched[W.matched.length-1];if(z&&z.redirect){const{redirect:ce}=z;let he=typeof ce=="function"?ce(W):ce;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=y(he):{path:he},he.params={}),Ke({query:W.query,hash:W.hash,params:"path"in he?{}:W.params},he)}}function R(W,z){const ce=c=_(W),he=l.value,xe=W.state,pe=W.force,Me=W.replace===!0,b=S(ce);if(b)return R(Ke(y(b),{state:typeof b=="object"?Ke({},xe,b.state):xe,force:pe,replace:Me}),z||ce);const A=ce;A.redirectedFrom=z;let I;return!pe&&tg(i,he,ce)&&(I=hs(16,{to:A,from:he}),k(he,he,!0,!1)),(I?Promise.resolve(I):C(A,he)).catch(B=>xn(B)?xn(B,2)?B:G(B):$(B,A,he)).then(B=>{if(B){if(xn(B,2))return R(Ke({replace:Me},y(B.to),{state:typeof B.to=="object"?Ke({},xe,B.to.state):xe,force:pe}),z||A)}else B=X(A,he,!0,Me,xe);return D(A,he,B),B})}function M(W,z){const ce=x(W,z);return ce?Promise.reject(ce):Promise.resolve()}function C(W,z){let ce;const[he,xe,pe]=e0(W,z);ce=Bo(he.reverse(),"beforeRouteLeave",W,z);for(const b of he)b.leaveGuards.forEach(A=>{ce.push(jn(A,W,z))});const Me=M.bind(null,W,z);return ce.push(Me),Ni(ce).then(()=>{ce=[];for(const b of r.list())ce.push(jn(b,W,z));return ce.push(Me),Ni(ce)}).then(()=>{ce=Bo(xe,"beforeRouteUpdate",W,z);for(const b of xe)b.updateGuards.forEach(A=>{ce.push(jn(A,W,z))});return ce.push(Me),Ni(ce)}).then(()=>{ce=[];for(const b of W.matched)if(b.beforeEnter&&!z.matched.includes(b))if(on(b.beforeEnter))for(const A of b.beforeEnter)ce.push(jn(A,W,z));else ce.push(jn(b.beforeEnter,W,z));return ce.push(Me),Ni(ce)}).then(()=>(W.matched.forEach(b=>b.enterCallbacks={}),ce=Bo(pe,"beforeRouteEnter",W,z),ce.push(Me),Ni(ce))).then(()=>{ce=[];for(const b of o.list())ce.push(jn(b,W,z));return ce.push(Me),Ni(ce)}).catch(b=>xn(b,8)?b:Promise.reject(b))}function D(W,z,ce){for(const he of a.list())he(W,z,ce)}function X(W,z,ce,he,xe){const pe=x(W,z);if(pe)return pe;const Me=z===zn,b=Qi?history.state:{};ce&&(he||Me?s.replace(W.fullPath,Ke({scroll:Me&&b&&b.scroll},xe)):s.push(W.fullPath,xe)),l.value=W,k(W,z,ce,Me),G()}let ne;function V(){ne||(ne=s.listen((W,z,ce)=>{if(!Ae.listening)return;const he=_(W),xe=S(he);if(xe){R(Ke(xe,{replace:!0}),he).catch(Gs);return}c=he;const pe=l.value;Qi&&cg(vc(pe.fullPath,ce.delta),bo()),C(he,pe).catch(Me=>xn(Me,12)?Me:xn(Me,2)?(R(Me.to,he).then(b=>{xn(b,20)&&!ce.delta&&ce.type===Qs.pop&&s.go(-1,!1)}).catch(Gs),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),$(Me,he,pe))).then(Me=>{Me=Me||X(he,pe,!1),Me&&(ce.delta&&!xn(Me,8)?s.go(-ce.delta,!1):ce.type===Qs.pop&&xn(Me,20)&&s.go(-1,!1)),D(he,pe,Me)}).catch(Gs)}))}let O=Ts(),Y=Ts(),K;function $(W,z,ce){G(W);const he=Y.list();return he.length?he.forEach(xe=>xe(W,z,ce)):console.error(W),Promise.reject(W)}function j(){return K&&l.value!==zn?Promise.resolve():new Promise((W,z)=>{O.add([W,z])})}function G(W){return K||(K=!W,V(),O.list().forEach(([z,ce])=>W?ce(W):z()),O.reset()),W}function k(W,z,ce,he){const{scrollBehavior:xe}=n;if(!Qi||!xe)return Promise.resolve();const pe=!ce&&ug(vc(W.fullPath,0))||(he||!ce)&&history.state&&history.state.scroll||null;return Vh().then(()=>xe(W,z,pe)).then(Me=>Me&&lg(Me)).catch(Me=>$(Me,W,z))}const ue=W=>s.go(W);let Z;const ve=new Set,Ae={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:d,getRoutes:m,resolve:_,options:n,push:v,replace:E,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:j,install(W){const z=this;W.component("RouterLink",Yg),W.component("RouterView",Zg),W.config.globalProperties.$router=z,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>Cn(l)}),Qi&&!Z&&l.value===zn&&(Z=!0,v(s.location).catch(xe=>{}));const ce={};for(const xe in zn)ce[xe]=Pt(()=>l.value[xe]);W.provide(bl,z),W.provide(Ef,sr(ce)),W.provide(Ba,l);const he=W.unmount;ve.add(W),W.unmount=function(){ve.delete(W),ve.size<1&&(c=zn,ne&&ne(),ne=null,l.value=zn,Z=!1,K=!1),he()}}};return Ae}function Ni(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function e0(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>us(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>us(c,l))||s.push(l))}return[t,i,s]}const t0="modulepreload",n0=function(n){return"/nova/"+n},Dc={},Pe=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link");s=Promise.all(t.map(o=>{if(o=n0(o),o in Dc)return;Dc[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let h=r.length-1;h>=0;h--){const f=r[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":t0,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},i0={path:"/css",component:Ri,children:[{path:"reverseCard",meta:{type:"css",name:"反转卡片图片",visable:!0},component:()=>Pe(()=>import("./reverseCardPic-MxjZetRm.js"),__vite__mapDeps([0,1,2,3]))},{path:"starRate",meta:{type:"css",name:"图案评分",visable:!0},component:()=>Pe(()=>import("./StarRate-s5jc2ZLe.js"),__vite__mapDeps([4,5,6,7,8,9]))},{path:"sun",meta:{type:"css",name:"小太阳",visable:!0},component:()=>Pe(()=>import("./Sun-plGfeNu0.js"),__vite__mapDeps([10,11]))},{path:"progressCube",meta:{type:"css",name:"立体进度条",visable:!1},component:()=>Pe(()=>import("./ProgressCube-o0irR05R.js"),__vite__mapDeps([12,7,8,13]))},{path:"deathLoading",meta:{type:"css",name:"死亡搁浅loading",visable:!0},component:()=>Pe(()=>import("./DeathLoading-ZlzdXI8j.js"),__vite__mapDeps([14,15]))},{path:"hsCard",meta:{type:"css",name:"炉石卡片",visable:!0},component:()=>Pe(()=>import("./HSCard-mttp5V8o.js"),__vite__mapDeps([16,2,17,18]))},{path:"barChart",meta:{type:"css",name:"css条状表",visable:!1},component:()=>Pe(()=>import("./BarChart-8Q8pGBS1.js"),__vite__mapDeps([19,20]))},{path:"water",meta:{type:"css",name:"模拟水滴",visable:!0},component:()=>Pe(()=>import("./Water-t0RPgHFN.js"),__vite__mapDeps([21,2,17,22]))},{path:"sun-time",meta:{type:"css",name:"太阳与时间倒影",visable:!0},component:()=>Pe(()=>import("./timeSun-D0Rkci0E.js"),__vite__mapDeps([23,2,17,24]))},{path:"crush-pic",meta:{type:"css",name:"破碎图片",visable:!0},component:()=>Pe(()=>import("./crushPic-brxuPTfX.js"),__vite__mapDeps([25,26,27,2,17,1,28]))}]},s0={path:"/canvas",component:Ri,children:[{path:"flowField",meta:{type:"canvas",name:"FlowField(fabric)",visable:!0},component:()=>Pe(()=>import("./FlowField-IG9tvvB3.js"),__vite__mapDeps([29,30,5,6,31,2,32]))},{path:"flowFieldLine",meta:{type:"canvas",name:"FlowFieldLine",visable:!1},component:()=>Pe(()=>import("./FlowFieldLine-pf2-zAhR.js"),__vite__mapDeps([33,5,6,30,31,2]))},{path:"canvasTextPoint",meta:{type:"canvas",name:"canvasTextPoint",visable:!1},component:()=>Pe(()=>import("./CanvasTextPoint-hH6qj3BS.js"),__vite__mapDeps([34,35,17,36]))},{path:"canvasPoint",meta:{type:"canvas",name:"图片点阵化",visable:!0},component:()=>Pe(()=>import("./canvasPoint-OGEX6DBs.js"),__vite__mapDeps([37,35,2,38,17]))},{path:"flow",meta:{type:"canvas",name:"mac锁屏flow",visable:!0},component:()=>Pe(()=>import("./flow-pmd0D66Q.js"),__vite__mapDeps([39,2,35,7,8,40,17]))},{path:"delaunator",meta:{type:"canvas",name:"三角切分",visable:!0},component:()=>Pe(()=>import("./delaunator-JFIrJk2T.js"),__vite__mapDeps([41,26,35,17,38]))},{path:"circuit-borad",meta:{type:"canvas",name:"电路板",visable:!0},component:()=>Pe(()=>import("./circuitBoard-PjDS5okx.js"),__vite__mapDeps([]))},{path:"img-idle",meta:{type:"canvas",name:"图片做Idle",visable:!0},component:()=>Pe(()=>import("./imgIdle-cxCi3agx.js"),__vite__mapDeps([42,43]))},{path:"nyan-cat",meta:{type:"canvas",name:"彩虹猫",visable:!0},component:()=>Pe(()=>import("./nyanCat-nfX2fw87.js"),__vite__mapDeps([44,35,40,43]))}]},r0={path:"/three",component:Ri,children:[{path:"threeTemplate",meta:{type:"threejs",name:"threejs模板",visable:!1},component:()=>Pe(()=>import("./THREE-template-Lui44UN8.js"),__vite__mapDeps([45,8,46,47,48]))},{path:"cubeLine",meta:{type:"threejs",name:"cubeLine",visable:!1},component:()=>Pe(()=>import("./CubeLine-jczcuWs9.js"),__vite__mapDeps([49,46,47,8,50]))},{path:"allBufferGeo",meta:{type:"threejs",name:"allBufferGeo",visable:!1},component:()=>Pe(()=>import("./AllBufferGeo-cVM_QQuz.js"),__vite__mapDeps([51,46,47,52]))},{path:"threeTextPoint",meta:{type:"threejs",name:"threeTextPoint",visable:!1},component:()=>Pe(()=>import("./ThreeTextPoint-S1Cwy0G1.js"),__vite__mapDeps([53,46,47,54]))},{path:"threeText",meta:{type:"threejs",name:"threeText",visable:!1},component:()=>Pe(()=>import("./TextGeo-EFvEp0p8.js"),__vite__mapDeps([55,46,56,8,57]))},{path:"solarSystem",meta:{type:"threejs",name:"threejs太阳系",visable:!0},component:()=>Pe(()=>import("./SolarSystem-RoKr7Y5w.js"),__vite__mapDeps([58,59,60,46,47,7,8]))},{path:"glowBall",meta:{type:"threejs",name:"glowBall",visable:!1},component:()=>Pe(()=>import("./GlowBall-9ySbZZvp.js"),__vite__mapDeps([61,8,47,59,60]))},{path:"atom",meta:{type:"threejs",name:"原子",visable:!0},component:()=>Pe(()=>import("./Atom-l6ZIcJuN.js"),__vite__mapDeps([62,46,47,59,60,7,8,63]))},{path:"lavaBall",meta:{type:"threejs",name:"lavaBall",visable:!1},component:()=>Pe(()=>import("./LavaBall-TCBCBgj9.js"),__vite__mapDeps([64,8,46,47,59,65]))},{path:"lensFlares",meta:{type:"threejs",name:"透镜光线",visable:!1},component:()=>Pe(()=>import("./LensFlares-kv2qYsLK.js"),__vite__mapDeps([66,8,46,56,67]))},{path:"crush-pic",meta:{type:"threejs",name:"破碎图片-threejs",visable:!0},component:()=>Pe(()=>import("./crushPic-61RnI6XJ.js"),__vite__mapDeps([68,26,27,69,47,40,1]))},{path:"flowfield-point-3d",meta:{type:"threejs",name:"flowField-粒子-3D",visable:!0},component:()=>Pe(()=>import("./flowFieldPoint3D-z3Jwcmue.js"),__vite__mapDeps([70,35,69,47,40]))}]},o0={path:"/p5",component:Ri,children:[{path:"flowFieldLine2",meta:{name:"flowFieldLine2",visable:!1},component:()=>Pe(()=>import("./FlowFieldLine2-HqLNc36y.js"),__vite__mapDeps([71,2,5,6,72,73,31,74,38,17]))},{path:"maze",meta:{name:"随机迷宫",visable:!0},component:()=>Pe(()=>import("./Maze-R8f4Z0VL.js"),__vite__mapDeps([75,5,6,72,2,73]))},{path:"gradientLine",meta:{name:"gradientLine",visable:!1},component:()=>Pe(()=>import("./GradientLine-xO5WKtA7.js"),__vite__mapDeps([76,5,6,72,2,73,74,38,17]))},{path:"codeRain",meta:{name:"codeRain",visable:!1},component:()=>Pe(()=>import("./CodeRain-aGgmK_8h.js"),__vite__mapDeps([77,5,6,72,2,73]))},{path:"cross",meta:{name:"cross",visable:!1},component:()=>Pe(()=>import("./Cross-RSyNgo0C.js"),__vite__mapDeps([78,2,5,6,72,73]))},{path:"musicRect",meta:{name:"musicRect",visable:!0},component:()=>Pe(()=>import("./MusicRect-qmsNHWhf.js"),__vite__mapDeps([79,2,80,81,72,73,82]))},{path:"musicCircle",meta:{name:"musicCircle",visable:!0},component:()=>Pe(()=>import("./MusicCircle-asgkDqkW.js"),__vite__mapDeps([83,2,72,73,80,81,82,17]))},{path:"bore",meta:{name:"般若心经",visable:!0},component:()=>Pe(()=>import("./BoRe-CmeewzpR.js"),__vite__mapDeps([84,2,72,73,85]))},{path:"tangram",meta:{name:"七巧板",visable:!0},component:()=>Pe(()=>import("./Tangram-ofPai0r8.js"),__vite__mapDeps([86,72,2,73]))},{path:"terrain",meta:{name:"terrain",visable:!1},component:()=>Pe(()=>import("./Terrain-0pUXYdku.js"),__vite__mapDeps([87,88,2,89,90]))},{path:"disperseParticle",meta:{name:"disperseParticle",visable:!1},component:()=>Pe(()=>import("./DisperseParticle-56a_jvMJ.js"),__vite__mapDeps([91,2,88,89,92]))},{path:"disperseParticle2",meta:{name:"disperseParticle2",visable:!1},component:()=>Pe(()=>import("./DisperseParticle2-f4ebEAiS.js"),__vite__mapDeps([93,2,88,89,94]))},{path:"snake",meta:{name:"贪吃蛇",visable:!0},component:()=>Pe(()=>import("./Snake-_1uRAM5Q.js"),__vite__mapDeps([95,2,88,89]))},{path:"lightBall",meta:{name:"lightBall",visable:!1},component:()=>Pe(()=>import("./LightBall-bbyOet7M.js"),__vite__mapDeps([96,88,2,89,97]))},{path:"flappyBird",meta:{name:"像素鸟(canvas)",visable:!0},component:()=>Pe(()=>import("./FlappyBird-3RnwZ_Vx.js"),__vite__mapDeps([98,88,2,89,99]))},{path:"fireWork",meta:{name:"fireWork",visable:!1},component:()=>Pe(()=>import("./Firework-Qx69PA3O.js"),__vite__mapDeps([100,2,88,89]))},{path:"pixelPicture",meta:{name:"图片像素化",visable:!0},component:()=>Pe(()=>import("./PixelPicture-gJNK35Ww.js"),__vite__mapDeps([101,2,7,8,88,89,102]))}]},a0={path:"/svg",component:Ri,children:[{path:"tiktok",meta:{name:"tiktok_anima",visable:!0,type:"svg"},component:()=>Pe(()=>import("./index-2367Wted.js"),__vite__mapDeps([]))},{path:"circuit-board",meta:{name:"电路板-svg",visable:!0,type:"svg"},component:()=>Pe(()=>import("./circuitBoard-uLO-eXXX.js"),__vite__mapDeps([103,104]))}]},l0={path:"/shader",component:Ri,children:[{path:"music-domainwrapping",meta:{name:"music-domainwrapping",visable:!0},component:()=>Pe(()=>import("./index-GAPM0lOP.js"),__vite__mapDeps([105,69,47,40,80,2,81,17]))},{path:"texture-icon",meta:{name:"texture-icon",visable:!0},component:()=>Pe(()=>import("./index-M5dBshxJ.js"),__vite__mapDeps([106,69,47,40]))},{path:"gamepad",meta:{name:"icon-gamepad",visable:!1},component:()=>Pe(()=>import("./index-xw83vZLo.js"),__vite__mapDeps([107,69,47,40]))}]},c0={class:"h-full flex justify-center items-center"},u0=Wt("h1",{class:"text-6xl"},"NOT FOUND",-1),h0=[u0],f0=Li({__name:"NotFound",setup(n){return(e,t)=>(jt(),$n("div",c0,h0))}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="146",DS={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},IS={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},d0=0,Ic=1,p0=2,Tf=1,m0=2,Fs=3,fs=0,Yt=1,Yn=2,ei=0,rs=1,Ua=2,Oc=3,Nc=4,g0=5,Zi=100,_0=101,v0=102,Fc=103,zc=104,x0=200,y0=201,M0=202,b0=203,Cf=204,Pf=205,w0=206,S0=207,A0=208,E0=209,T0=210,C0=0,P0=1,L0=2,Ga=3,R0=4,D0=5,I0=6,O0=7,wo=0,N0=1,F0=2,Pn=0,z0=1,B0=2,U0=3,G0=4,V0=5,Lf=300,ds=301,ps=302,Va=303,ka=304,So=306,Ha=1e3,en=1001,Wa=1002,bt=1003,Bc=1004,Uc=1005,qt=1006,k0=1007,Ao=1008,Ei=1009,H0=1010,W0=1011,Rf=1012,q0=1013,xi=1014,yi=1015,Zs=1016,j0=1017,X0=1018,os=1020,Y0=1021,K0=1022,tn=1023,J0=1024,Q0=1025,Si=1026,ms=1027,Z0=1028,$0=1029,e_=1030,t_=1031,n_=1033,Uo=33776,Go=33777,Vo=33778,ko=33779,Gc=35840,Vc=35841,kc=35842,Hc=35843,i_=36196,Wc=37492,qc=37496,jc=37808,Xc=37809,Yc=37810,Kc=37811,Jc=37812,Qc=37813,Zc=37814,$c=37815,eu=37816,tu=37817,nu=37818,iu=37819,su=37820,ru=37821,ou=36492,Ti=3e3,ot=3001,s_=3200,r_=3201,Eo=0,o_=1,Tn="srgb",Mi="srgb-linear",Ho=7680,a_=519,qa=35044,OS=35048,au="300 es",ja=1035;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,lu=180/Math.PI;function Ln(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function l_(n,e){return(n%e+e)%e}function Wo(n,e,t){return(1-t)*n+t*e}function cu(n){return(n&n-1)===0&&n!==0}function Xa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],m=s[0],d=s[3],_=s[6],y=s[1],x=s[4],v=s[7],E=s[2],S=s[5],R=s[8];return r[0]=o*m+a*y+l*E,r[3]=o*d+a*x+l*S,r[6]=o*_+a*v+l*R,r[1]=c*m+u*y+h*E,r[4]=c*d+u*x+h*S,r[7]=c*_+u*v+h*R,r[2]=f*m+p*y+g*E,r[5]=f*d+p*x+g*S,r[8]=f*_+p*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(s*c-u*i)*m,e[2]=(a*i-s*o)*m,e[3]=f*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+i*l,s[3]=t*o+i*c,s[6]=t*a+i*u,s[1]=-i*r+t*l,s[4]=-i*o+t*c,s[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Df(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const qo={[Tn]:{[Mi]:Ai},[Mi]:{[Tn]:$r}},Kt={legacyMode:!0,get workingColorSpace(){return Mi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(qo[e]&&qo[e][t]!==void 0){const i=qo[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},Jt={h:0,s:0,l:0},pr={h:0,s:0,l:0};function jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function mr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Mi){return this.r=e,this.g=t,this.b=i,Kt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Mi){if(e=l_(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=jo(o,r,e+1/3),this.g=jo(o,r,e),this.b=jo(o,r,e-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(e,t=Tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Kt.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Kt.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Kt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Kt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Tn){const i=If[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Kt.fromWorkingColorSpace(mr(this,ut),e),_t(ut.r*255,0,255)<<16^_t(ut.g*255,0,255)<<8^_t(ut.b*255,0,255)<<0}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mi){Kt.fromWorkingColorSpace(mr(this,ut),t);const i=ut.r,s=ut.g,r=ut.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mi){return Kt.fromWorkingColorSpace(mr(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=Tn){return Kt.fromWorkingColorSpace(mr(this,ut),e),e!==Tn?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Jt),Jt.h+=e,Jt.s+=t,Jt.l+=i,this.setHSL(Jt.h,Jt.s,Jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jt),e.getHSL(pr);const i=Wo(Jt.h,pr.h,t),s=Wo(Jt.s,pr.s,t),r=Wo(Jt.l,pr.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=If;let Fi;class Of{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=$s("canvas")),Fi.width=e.width,Fi.height=e.height;const i=Fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nf{constructor(e=null){this.isSource=!0,this.uuid=Ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xo(s[o].image)):r.push(Xo(s[o]))}else r=Xo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c_=0;class Ut extends ys{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=en,s=en,r=qt,o=Ao,a=tn,l=Ei,c=1,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Ln(),this.name="",this.source=new Nf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Lf;class nt{constructor(e=0,t=0,i=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,E=(_+1)/2,S=(u+f)/4,R=(h+m)/4,M=(g+d)/4;return x>v&&x>E?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=S/i,r=R/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=M/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=R/r,s=M/r),this.set(i,s,r,t),this}let y=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(h-m)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ci extends ys{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Ut(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:qt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ff extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class u_ extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-a;const _=l*f+c*p+u*g+h*m,y=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const E=Math.sqrt(x),S=Math.atan2(E,_*y);d=Math.sin(d*S)/E,a=Math.sin(a*S)/E}const v=a*y;if(l=l*d+f*v,c=c*d+p*v,u=u*d+g*v,h=h*d+m*v,d===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,u=l*i+a*t-r*s,h=l*s+r*i-o*t,f=-r*t-o*i-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new L,uu=new rr;class Ms{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)ci.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ci)}else i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox),Ko.applyMatrix4(e.matrixWorld),this.union(Ko);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),gr.subVectors(this.max,Cs),zi.subVectors(e.a,Cs),Bi.subVectors(e.b,Cs),Ui.subVectors(e.c,Cs),Bn.subVectors(Bi,zi),Un.subVectors(Ui,Bi),ui.subVectors(zi,Ui);let t=[0,-Bn.z,Bn.y,0,-Un.z,Un.y,0,-ui.z,ui.y,Bn.z,0,-Bn.x,Un.z,0,-Un.x,ui.z,0,-ui.x,-Bn.y,Bn.x,0,-Un.y,Un.x,0,-ui.y,ui.x,0];return!Jo(t,zi,Bi,Ui,gr)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,zi,Bi,Ui,gr))?!1:(_r.crossVectors(Bn,Un),t=[_r.x,_r.y,_r.z],Jo(t,zi,Bi,Ui,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ci.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new L,new L,new L,new L,new L,new L,new L,new L],ci=new L,Ko=new Ms,zi=new L,Bi=new L,Ui=new L,Bn=new L,Un=new L,ui=new L,Cs=new L,gr=new L,_r=new L,hi=new L;function Jo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hi.fromArray(n,r);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const h_=new Ms,Ps=new L,Qo=new L;class or{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):h_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ps,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Qo)),this.expandByPoint(Ps.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new L,Zo=new L,vr=new L,Gn=new L,$o=new L,xr=new L,ea=new L;class Sl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.direction).multiplyScalar(t).add(this.origin),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zo.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Zo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(vr),a=Gn.dot(this.direction),l=-Gn.dot(vr),c=Gn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(vr).multiplyScalar(f).add(Zo),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),s=Mn.dot(Mn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,s,r){$o.subVectors(t,e),xr.subVectors(i,e),ea.crossVectors($o,xr);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,e);const l=a*this.direction.dot(xr.crossVectors(Gn,xr));if(l<0)return null;const c=a*this.direction.dot($o.cross(Gn));if(c<0||l+c>o)return null;const u=-a*Gn.dot(ea);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f_,e,d_)}lookAt(e,t,i){const s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Vn.crossVectors(i,Nt),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Vn.crossVectors(i,Nt)),Vn.normalize(),yr.crossVectors(Nt,Vn),s[0]=Vn.x,s[4]=yr.x,s[8]=Nt.x,s[1]=Vn.y,s[5]=yr.y,s[9]=Nt.y,s[2]=Vn.z,s[6]=yr.z,s[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],m=i[6],d=i[10],_=i[14],y=i[3],x=i[7],v=i[11],E=i[15],S=s[0],R=s[4],M=s[8],C=s[12],D=s[1],X=s[5],ne=s[9],V=s[13],O=s[2],Y=s[6],K=s[10],$=s[14],j=s[3],G=s[7],k=s[11],ue=s[15];return r[0]=o*S+a*D+l*O+c*j,r[4]=o*R+a*X+l*Y+c*G,r[8]=o*M+a*ne+l*K+c*k,r[12]=o*C+a*V+l*$+c*ue,r[1]=u*S+h*D+f*O+p*j,r[5]=u*R+h*X+f*Y+p*G,r[9]=u*M+h*ne+f*K+p*k,r[13]=u*C+h*V+f*$+p*ue,r[2]=g*S+m*D+d*O+_*j,r[6]=g*R+m*X+d*Y+_*G,r[10]=g*M+m*ne+d*K+_*k,r[14]=g*C+m*V+d*$+_*ue,r[3]=y*S+x*D+v*O+E*j,r[7]=y*R+x*X+v*Y+E*G,r[11]=y*M+x*ne+v*K+E*k,r[15]=y*C+x*V+v*$+E*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+m*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+d*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+_*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],y=h*d*c-m*f*c+m*l*p-a*d*p-h*l*_+a*f*_,x=g*f*c-u*d*c-g*l*p+o*d*p+u*l*_-o*f*_,v=u*m*c-g*h*c+g*a*p-o*m*p-u*a*_+o*h*_,E=g*h*l-u*m*l-g*a*f+o*m*f+u*a*d-o*h*d,S=t*y+i*x+s*v+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=y*R,e[1]=(m*f*r-h*d*r-m*s*p+i*d*p+h*s*_-i*f*_)*R,e[2]=(a*d*r-m*l*r+m*s*c-i*d*c-a*s*_+i*l*_)*R,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*R,e[4]=x*R,e[5]=(u*d*r-g*f*r+g*s*p-t*d*p-u*s*_+t*f*_)*R,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*_-t*l*_)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=v*R,e[9]=(g*h*r-u*m*r-g*i*p+t*m*p+u*i*_-t*h*_)*R,e[10]=(o*m*r-g*a*r+g*i*c-t*m*c-o*i*_+t*a*_)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*R,e[12]=E*R,e[13]=(u*m*s-g*h*s+g*i*f-t*m*f-u*i*d+t*h*d)*R,e[14]=(g*a*s-o*m*s-g*i*l+t*m*l+o*i*d-t*a*d)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,m=o*u,d=o*h,_=a*h,y=l*c,x=l*u,v=l*h,E=i.x,S=i.y,R=i.z;return s[0]=(1-(m+_))*E,s[1]=(p+v)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(f+_))*S,s[6]=(d+y)*S,s[7]=0,s[8]=(g+x)*R,s[9]=(d-y)*R,s[10]=(1-(f+m))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);const c=1/r,u=1/o,h=1/a;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),h=(i+s)/(i-s),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o){const a=this.elements,l=1/(t-e),c=1/(i-s),u=1/(o-r),h=(t+e)*l,f=(i+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new L,Qt=new $e,f_=new L(0,0,0),d_=new L(1,1,1),Vn=new L,yr=new L,Nt=new L,hu=new $e,fu=new rr;class ar{constructor(e=0,t=0,i=0,s=ar.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ar.DefaultOrder="XYZ";ar.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p_=0;const du=new L,Vi=new rr,bn=new $e,Mr=new L,Ls=new L,m_=new L,g_=new rr,pu=new L(1,0,0),mu=new L(0,1,0),gu=new L(0,0,1),__={type:"added"},_u={type:"removed"};class gt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DefaultUp.clone();const e=new L,t=new ar,i=new rr,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Xt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DefaultMatrixWorldAutoUpdate,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mr.copy(e):Mr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Ls,Mr,this.up):bn.lookAt(Mr,Ls,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(bn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(__)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_u)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_u)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,m_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,g_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}gt.DefaultUp=new L(0,1,0);gt.DefaultMatrixAutoUpdate=!0;gt.DefaultMatrixWorldAutoUpdate=!0;const Zt=new L,wn=new L,ta=new L,Sn=new L,ki=new L,Hi=new L,vu=new L,na=new L,ia=new L,sa=new L;class dn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zt.subVectors(e,t),s.cross(Zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zt.subVectors(s,t),wn.subVectors(i,t),ta.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(wn),l=Zt.dot(ta),c=wn.dot(wn),u=wn.dot(ta),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Sn),l.set(0,0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l}static isFrontFacing(e,t,i,s){return Zt.subVectors(i,t),wn.subVectors(e,t),Zt.cross(wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Zt.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return dn.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ki.subVectors(s,i),Hi.subVectors(r,i),na.subVectors(e,i);const l=ki.dot(na),c=Hi.dot(na);if(l<=0&&c<=0)return t.copy(i);ia.subVectors(e,s);const u=ki.dot(ia),h=Hi.dot(ia);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ki,o);sa.subVectors(e,r);const p=ki.dot(sa),g=Hi.dot(sa);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Hi,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return vu.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(vu,a);const _=1/(d+m+f);return o=m*_,a=f*_,t.copy(i).addScaledVector(ki,o).addScaledVector(Hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let v_=0;class On extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=rs,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cf,this.blendDst=Pf,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==fs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Al extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new L,br=new _e;class Rt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=qa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Bf extends Rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uf extends Rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ie extends Rt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let x_=0;const kt=new $e,ra=new gt,Wi=new L,Ft=new Ms,Rs=new Ms,mt=new L;class et extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?Uf:Bf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ie(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ft.min,Rs.min),Ft.expandByPoint(mt),mt.addVectors(Ft.max,Rs.max),Ft.expandByPoint(mt)):(Ft.expandByPoint(Rs.min),Ft.expandByPoint(Rs.max))}Ft.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),mt.add(Wi)),s=Math.max(s,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new L,u[D]=new L;const h=new L,f=new L,p=new L,g=new _e,m=new _e,d=new _e,_=new L,y=new L;function x(D,X,ne){h.fromArray(s,D*3),f.fromArray(s,X*3),p.fromArray(s,ne*3),g.fromArray(o,D*2),m.fromArray(o,X*2),d.fromArray(o,ne*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const V=1/(m.x*d.y-d.x*m.y);isFinite(V)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(V),y.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(V),c[D].add(_),c[X].add(_),c[ne].add(_),u[D].add(y),u[X].add(y),u[ne].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let D=0,X=v.length;D<X;++D){const ne=v[D],V=ne.start,O=ne.count;for(let Y=V,K=V+O;Y<K;Y+=3)x(i[Y+0],i[Y+1],i[Y+2])}const E=new L,S=new L,R=new L,M=new L;function C(D){R.fromArray(r,D*3),M.copy(R);const X=c[D];E.copy(X),E.sub(R.multiplyScalar(R.dot(X))).normalize(),S.crossVectors(M,X);const V=S.dot(u[D])<0?-1:1;l[D*4]=E.x,l[D*4+1]=E.y,l[D*4+2]=E.z,l[D*4+3]=V}for(let D=0,X=v.length;D<X;++D){const ne=v[D],V=ne.start,O=ne.count;for(let Y=V,K=V+O;Y<K;Y+=3)C(i[Y+0]),C(i[Y+1]),C(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Rt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new et,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const xu=new $e,qi=new Sl,oa=new or,kn=new L,Hn=new L,Wn=new L,aa=new L,la=new L,ca=new L,wr=new L,Sr=new L,Ar=new L,Er=new _e,Tr=new _e,Cr=new _e,ua=new L,Pr=new L;class sn extends gt{constructor(e=new et,t=new Al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),e.ray.intersectsSphere(oa)===!1)||(xu.copy(r).invert(),qi.copy(e.ray).applyMatrix4(xu),i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],y=s[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let E=x,S=v;E<S;E+=3){const R=a.getX(E),M=a.getX(E+1),C=a.getX(E+2);o=Lr(this,y,e,qi,l,c,u,h,f,R,M,C),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,y=d;_<y;_+=3){const x=a.getX(_),v=a.getX(_+1),E=a.getX(_+2);o=Lr(this,s,e,qi,l,c,u,h,f,x,v,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],y=s[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=x,S=v;E<S;E+=3){const R=E,M=E+1,C=E+2;o=Lr(this,y,e,qi,l,c,u,h,f,R,M,C),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,y=d;_<y;_+=3){const x=_,v=_+1,E=_+2;o=Lr(this,s,e,qi,l,c,u,h,f,x,v,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function y_(n,e,t,i,s,r,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side!==Yn,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:n}}function Lr(n,e,t,i,s,r,o,a,l,c,u,h){kn.fromBufferAttribute(s,c),Hn.fromBufferAttribute(s,u),Wn.fromBufferAttribute(s,h);const f=n.morphTargetInfluences;if(r&&f){wr.set(0,0,0),Sr.set(0,0,0),Ar.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],_=r[g];d!==0&&(aa.fromBufferAttribute(_,c),la.fromBufferAttribute(_,u),ca.fromBufferAttribute(_,h),o?(wr.addScaledVector(aa,d),Sr.addScaledVector(la,d),Ar.addScaledVector(ca,d)):(wr.addScaledVector(aa.sub(kn),d),Sr.addScaledVector(la.sub(Hn),d),Ar.addScaledVector(ca.sub(Wn),d)))}kn.add(wr),Hn.add(Sr),Wn.add(Ar)}n.isSkinnedMesh&&(n.boneTransform(c,kn),n.boneTransform(u,Hn),n.boneTransform(h,Wn));const p=y_(n,e,t,i,kn,Hn,Wn,ua);if(p){a&&(Er.fromBufferAttribute(a,c),Tr.fromBufferAttribute(a,u),Cr.fromBufferAttribute(a,h),p.uv=dn.getUV(ua,kn,Hn,Wn,Er,Tr,Cr,new _e)),l&&(Er.fromBufferAttribute(l,c),Tr.fromBufferAttribute(l,u),Cr.fromBufferAttribute(l,h),p.uv2=dn.getUV(ua,kn,Hn,Wn,Er,Tr,Cr,new _e));const g={a:c,b:u,c:h,normal:new L,materialIndex:0};dn.getNormal(kn,Hn,Wn,g.normal),p.face=g}return p}class lr extends et{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function g(m,d,_,y,x,v,E,S,R,M,C){const D=v/R,X=E/M,ne=v/2,V=E/2,O=S/2,Y=R+1,K=M+1;let $=0,j=0;const G=new L;for(let k=0;k<K;k++){const ue=k*X-V;for(let Z=0;Z<Y;Z++){const ve=Z*D-ne;G[m]=ve*y,G[d]=ue*x,G[_]=O,c.push(G.x,G.y,G.z),G[m]=0,G[d]=0,G[_]=S>0?1:-1,u.push(G.x,G.y,G.z),h.push(Z/R),h.push(1-k/M),$+=1}}for(let k=0;k<M;k++)for(let ue=0;ue<R;ue++){const Z=f+ue+Y*k,ve=f+ue+Y*(k+1),Ae=f+(ue+1)+Y*(k+1),W=f+(ue+1)+Y*k;l.push(Z,ve,W),l.push(ve,Ae,W),j+=6}a.addGroup(p,j,C),p+=j,f+=$}}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=gs(n[t]);for(const s in i)e[s]=i[s]}return e}function M_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const b_={clone:gs,merge:Ct};var w_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w_,this.fragmentShader=S_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gf extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Gf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lu*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=90,Xi=1;class A_ extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new zt(ji,Xi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(1,0,0)),this.add(s);const r=new zt(ji,Xi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const o=new zt(ji,Xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);const a=new zt(ji,Xi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new zt(ji,Xi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new zt(ji,Xi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Pn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Vf extends Ut{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E_ extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lr(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:ei});r.uniforms.tEquirect.value=t;const o=new sn(s,r),a=t.minFilter;return t.minFilter===Ao&&(t.minFilter=qt),new A_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ha=new L,T_=new L,C_=new Xt;class di{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ha.subVectors(i,t).cross(T_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ha),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||C_.getNormalMatrix(e),s=this.coplanarPoint(ha).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new or,Rr=new L;class El{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],p=i[9],g=i[10],m=i[11],d=i[12],_=i[13],y=i[14],x=i[15];return t[0].setComponents(a-s,h-l,m-f,x-d).normalize(),t[1].setComponents(a+s,h+l,m+f,x+d).normalize(),t[2].setComponents(a+r,h+c,m+p,x+_).normalize(),t[3].setComponents(a-r,h-c,m-p,x-_).normalize(),t[4].setComponents(a-o,h-u,m-g,x-y).normalize(),t[5].setComponents(a+o,h+u,m+g,x+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function P_(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Tl extends et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const y=_*f-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-y,0),m.push(0,0,1),d.push(x/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const x=y+c*_,v=y+c*(_+1),E=y+1+c*(_+1),S=y+1+c*_;p.push(x,v,S),p.push(v,E,S)}this.setIndex(p),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(m,3)),this.setAttribute("uv",new Ie(d,2))}static fromJSON(e){return new Tl(e.width,e.height,e.widthSegments,e.heightSegments)}}var L_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,R_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,I_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F_="vec3 transformed = vec3( position );",z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,U_=`#ifdef USE_IRIDESCENCE
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
#endif`,G_=`#ifdef USE_BUMPMAP
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,K_=`#define PI 3.141592653589793
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
}`,J_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q_=`vec3 transformedNormal = objectNormal;
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
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,pv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,vv=`uniform bool receiveShadow;
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
#endif`,xv=`#if defined( USE_ENVMAP )
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
#endif`,yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Sv=`PhysicalMaterial material;
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
#endif`,Av=`struct PhysicalMaterial {
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
}`,Ev=`
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gv=`#ifdef USE_MORPHNORMALS
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
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
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
#endif`,Hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Wv=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
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
#endif`,Kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ux=`float getShadowMask() {
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ax=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ox=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Fx=`#define DISTANCE
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
}`,zx=`#define DISTANCE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gx=`uniform float scale;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Wx=`#define LAMBERT
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
}`,qx=`#define LAMBERT
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
}`,jx=`#define MATCAP
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
}`,Xx=`#define MATCAP
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
}`,Yx=`#define NORMAL
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
}`,Kx=`#define NORMAL
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
}`,Jx=`#define PHONG
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
}`,Qx=`#define PHONG
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
}`,Zx=`#define STANDARD
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
}`,$x=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ry=`uniform vec3 color;
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
}`,oy=`uniform float rotation;
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
}`,ay=`uniform vec3 diffuse;
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
}`,Ue={alphamap_fragment:L_,alphamap_pars_fragment:R_,alphatest_fragment:D_,alphatest_pars_fragment:I_,aomap_fragment:O_,aomap_pars_fragment:N_,begin_vertex:F_,beginnormal_vertex:z_,bsdfs:B_,iridescence_fragment:U_,bumpmap_pars_fragment:G_,clipping_planes_fragment:V_,clipping_planes_pars_fragment:k_,clipping_planes_pars_vertex:H_,clipping_planes_vertex:W_,color_fragment:q_,color_pars_fragment:j_,color_pars_vertex:X_,color_vertex:Y_,common:K_,cube_uv_reflection_fragment:J_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:Z_,displacementmap_vertex:$_,emissivemap_fragment:ev,emissivemap_pars_fragment:tv,encodings_fragment:nv,encodings_pars_fragment:iv,envmap_fragment:sv,envmap_common_pars_fragment:rv,envmap_pars_fragment:ov,envmap_pars_vertex:av,envmap_physical_pars_fragment:xv,envmap_vertex:lv,fog_vertex:cv,fog_pars_vertex:uv,fog_fragment:hv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:_v,lights_pars_begin:vv,lights_toon_fragment:yv,lights_toon_pars_fragment:Mv,lights_phong_fragment:bv,lights_phong_pars_fragment:wv,lights_physical_fragment:Sv,lights_physical_pars_fragment:Av,lights_fragment_begin:Ev,lights_fragment_maps:Tv,lights_fragment_end:Cv,logdepthbuf_fragment:Pv,logdepthbuf_pars_fragment:Lv,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Dv,map_fragment:Iv,map_pars_fragment:Ov,map_particle_fragment:Nv,map_particle_pars_fragment:Fv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:Bv,morphcolor_vertex:Uv,morphnormal_vertex:Gv,morphtarget_pars_vertex:Vv,morphtarget_vertex:kv,normal_fragment_begin:Hv,normal_fragment_maps:Wv,normal_pars_fragment:qv,normal_pars_vertex:jv,normal_vertex:Xv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:Kv,clearcoat_normal_fragment_maps:Jv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:Zv,output_fragment:$v,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:lx,shadowmap_vertex:cx,shadowmask_pars_fragment:ux,skinbase_vertex:hx,skinning_pars_vertex:fx,skinning_vertex:dx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:_x,tonemapping_pars_fragment:vx,transmission_fragment:xx,transmission_pars_fragment:yx,uv_pars_fragment:Mx,uv_pars_vertex:bx,uv_vertex:wx,uv2_pars_fragment:Sx,uv2_pars_vertex:Ax,uv2_vertex:Ex,worldpos_vertex:Tx,background_vert:Cx,background_frag:Px,backgroundCube_vert:Lx,backgroundCube_frag:Rx,cube_vert:Dx,cube_frag:Ix,depth_vert:Ox,depth_frag:Nx,distanceRGBA_vert:Fx,distanceRGBA_frag:zx,equirect_vert:Bx,equirect_frag:Ux,linedashed_vert:Gx,linedashed_frag:Vx,meshbasic_vert:kx,meshbasic_frag:Hx,meshlambert_vert:Wx,meshlambert_frag:qx,meshmatcap_vert:jx,meshmatcap_frag:Xx,meshnormal_vert:Yx,meshnormal_frag:Kx,meshphong_vert:Jx,meshphong_frag:Qx,meshphysical_vert:Zx,meshphysical_frag:$x,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:sy,shadow_frag:ry,sprite_vert:oy,sprite_frag:ay},ye={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xt},uv2Transform:{value:new Xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}}},hn={basic:{uniforms:Ct([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ct([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ct([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ct([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ct([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ct([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ct([ye.points,ye.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ct([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ct([ye.common,ye.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ct([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ct([ye.sprite,ye.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ct([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ct([ye.lights,ye.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};hn.physical={uniforms:Ct([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _e(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function ly(n,e,t,i,s,r,o){const a=new He(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(d,_){let y=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const v=n.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?m(a,l):x&&x.isColor&&(m(x,1),y=!0),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===So)?(u===void 0&&(u=new sn(new lr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:gs(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new sn(new Tl(2,2),new ii({name:"BackgroundMaterial",uniforms:gs(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,_){i.buffers.color.setClear(d.r,d.g,d.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(a,l)},render:g}}function cy(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(O,Y,K,$,j){let G=!1;if(o){const k=m($,K,Y);c!==k&&(c=k,p(c.object)),G=_(O,$,K,j),G&&y(O,$,K,j)}else{const k=Y.wireframe===!0;(c.geometry!==$.id||c.program!==K.id||c.wireframe!==k)&&(c.geometry=$.id,c.program=K.id,c.wireframe=k,G=!0)}j!==null&&t.update(j,34963),(G||u)&&(u=!1,M(O,Y,K,$),j!==null&&n.bindBuffer(34963,t.get(j).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,Y,K){const $=K.wireframe===!0;let j=a[O.id];j===void 0&&(j={},a[O.id]=j);let G=j[Y.id];G===void 0&&(G={},j[Y.id]=G);let k=G[$];return k===void 0&&(k=d(f()),G[$]=k),k}function d(O){const Y=[],K=[],$=[];for(let j=0;j<s;j++)Y[j]=0,K[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:K,attributeDivisors:$,object:O,attributes:{},index:null}}function _(O,Y,K,$){const j=c.attributes,G=Y.attributes;let k=0;const ue=K.getAttributes();for(const Z in ue)if(ue[Z].location>=0){const Ae=j[Z];let W=G[Z];if(W===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),Ae===void 0||Ae.attribute!==W||W&&Ae.data!==W.data)return!0;k++}return c.attributesNum!==k||c.index!==$}function y(O,Y,K,$){const j={},G=Y.attributes;let k=0;const ue=K.getAttributes();for(const Z in ue)if(ue[Z].location>=0){let Ae=G[Z];Ae===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(Ae=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(Ae=O.instanceColor));const W={};W.attribute=Ae,Ae&&Ae.data&&(W.data=Ae.data),j[Z]=W,k++}c.attributes=j,c.attributesNum=k,c.index=$}function x(){const O=c.newAttributes;for(let Y=0,K=O.length;Y<K;Y++)O[Y]=0}function v(O){E(O,0)}function E(O,Y){const K=c.newAttributes,$=c.enabledAttributes,j=c.attributeDivisors;K[O]=1,$[O]===0&&(n.enableVertexAttribArray(O),$[O]=1),j[O]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Y),j[O]=Y)}function S(){const O=c.newAttributes,Y=c.enabledAttributes;for(let K=0,$=Y.length;K<$;K++)Y[K]!==O[K]&&(n.disableVertexAttribArray(K),Y[K]=0)}function R(O,Y,K,$,j,G){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(O,Y,K,j,G):n.vertexAttribPointer(O,Y,K,$,j,G)}function M(O,Y,K,$){if(i.isWebGL2===!1&&(O.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=$.attributes,G=K.getAttributes(),k=Y.defaultAttributeValues;for(const ue in G){const Z=G[ue];if(Z.location>=0){let ve=j[ue];if(ve===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(ve=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(ve=O.instanceColor)),ve!==void 0){const Ae=ve.normalized,W=ve.itemSize,z=t.get(ve);if(z===void 0)continue;const ce=z.buffer,he=z.type,xe=z.bytesPerElement;if(ve.isInterleavedBufferAttribute){const pe=ve.data,Me=pe.stride,b=ve.offset;if(pe.isInstancedInterleavedBuffer){for(let A=0;A<Z.locationSize;A++)E(Z.location+A,pe.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let A=0;A<Z.locationSize;A++)v(Z.location+A);n.bindBuffer(34962,ce);for(let A=0;A<Z.locationSize;A++)R(Z.location+A,W/Z.locationSize,he,Ae,Me*xe,(b+W/Z.locationSize*A)*xe)}else{if(ve.isInstancedBufferAttribute){for(let pe=0;pe<Z.locationSize;pe++)E(Z.location+pe,ve.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let pe=0;pe<Z.locationSize;pe++)v(Z.location+pe);n.bindBuffer(34962,ce);for(let pe=0;pe<Z.locationSize;pe++)R(Z.location+pe,W/Z.locationSize,he,Ae,W*xe,W/Z.locationSize*pe*xe)}}else if(k!==void 0){const Ae=k[ue];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(Z.location,Ae);break;case 3:n.vertexAttrib3fv(Z.location,Ae);break;case 4:n.vertexAttrib4fv(Z.location,Ae);break;default:n.vertexAttrib1fv(Z.location,Ae)}}}}S()}function C(){ne();for(const O in a){const Y=a[O];for(const K in Y){const $=Y[K];for(const j in $)g($[j].object),delete $[j];delete Y[K]}delete a[O]}}function D(O){if(a[O.id]===void 0)return;const Y=a[O.id];for(const K in Y){const $=Y[K];for(const j in $)g($[j].object),delete $[j];delete Y[K]}delete a[O.id]}function X(O){for(const Y in a){const K=a[Y];if(K[O.id]===void 0)continue;const $=K[O.id];for(const j in $)g($[j].object),delete $[j];delete K[O.id]}}function ne(){V(),u=!0,c!==l&&(c=l,p(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:v,disableUnusedAttributes:S}}function uy(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(s)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function hy(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),y=n.getParameter(36349),x=f>0,v=o||e.has("OES_texture_float"),E=x&&v,S=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:S}}function fy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new di,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||i!==0||s;return s=f,t=u(h,p,0),i=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,_=n.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const y=r?0:i,x=y*4;let v=_.clippingState||null;l.value=v,v=u(g,f,x,p);for(let E=0;E!==x;++E)v[E]=t[E];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<_)&&(d=new Float32Array(_));for(let x=0,v=p;x!==m;++x,v+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function dy(n){let e=new WeakMap;function t(o,a){return a===Va?o.mapping=ds:a===ka&&(o.mapping=ps),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Va||a===ka)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new E_(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Hf extends Gf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,yu=[.125,.215,.35,.446,.526,.582],_i=20,fa=new Hf,Mu=new He;let da=null;const pi=(1+Math.sqrt(5))/2,Ki=1/pi,bu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,pi,Ki),new L(0,pi,-Ki),new L(Ki,0,pi),new L(-Ki,0,pi),new L(pi,Ki,0),new L(-pi,Ki,0)];class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){da=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(da),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),da=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Zs,format:tn,encoding:Ti,depthBuffer:!1},s=Su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=py(r)),this._blurMaterial=my(r,e,t)}return s}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,s){const a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Mu),u.toneMapping=Pn,u.autoClear=!1;const p=new Al({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new sn(new lr,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Mu),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;Dr(s,y*x,_>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ds||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bu[(s-1)%bu.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new sn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):_i;d>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${_i}`);const _=[];let y=0;for(let R=0;R<_i;++R){const M=R/m,C=Math.exp(-M*M/2);_.push(C),R===0?y+=C:R<d&&(y+=2*C)}for(let R=0;R<_.length;R++)_[R]=_[R]/y;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[s],E=3*v*(s>x-$i?s-x+$i:0),S=4*(this._cubeSize-v);Dr(t,E,S,3*v,2*v),l.setRenderTarget(t),l.render(h,fa)}}function py(n){const e=[],t=[],i=[];let s=n;const r=n-$i+1+yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-$i?l=yu[o-n+$i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,_=1,y=new Float32Array(m*g*p),x=new Float32Array(d*g*p),v=new Float32Array(_*g*p);for(let S=0;S<p;S++){const R=S%3*2/3-1,M=S>2?0:-1,C=[R,M,0,R+2/3,M,0,R+2/3,M+1,0,R,M,0,R+2/3,M+1,0,R,M+1,0];y.set(C,m*g*S),x.set(f,d*g*S);const D=[S,S,S,S,S,S];v.set(D,_*g*S)}const E=new et;E.setAttribute("position",new Rt(y,m)),E.setAttribute("uv",new Rt(x,d)),E.setAttribute("faceIndex",new Rt(v,_)),e.push(E),s>$i&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Su(n,e,t){const i=new Ci(n,e,t);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function my(n,e,t){const i=new Float32Array(_i),s=new L(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Au(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Eu(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function gy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Va||l===ka,u=l===ds||l===ps;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new wu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new wu(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _y(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function vy(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let x=0,v=y.length;x<v;x+=3){const E=y[x+0],S=y[x+1],R=y[x+2];f.push(E,S,S,R,R,E)}}else{const y=g.array;m=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const E=x+0,S=x+1,R=x+2;f.push(E,S,S,R,R,E)}}const d=new(Df(f)?Uf:Bf)(f,1);d.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function xy(n,e,t,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){n.drawElements(r,p,a,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,f*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function yy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function My(n,e){return n[0]-e[0]}function by(n,e){return Math.abs(e[1])-Math.abs(n[1])}function wy(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=r.get(u);if(d===void 0||d.count!==m){let Y=function(){V.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let C=0;x===!0&&(C=1),v===!0&&(C=2),E===!0&&(C=3);let D=u.attributes.position.count*C,X=1;D>e.maxTextureSize&&(X=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const ne=new Float32Array(D*X*4*m),V=new Ff(ne,D,X,m);V.type=yi,V.needsUpdate=!0;const O=C*4;for(let K=0;K<m;K++){const $=S[K],j=R[K],G=M[K],k=D*X*4*K;for(let ue=0;ue<$.count;ue++){const Z=ue*O;x===!0&&(o.fromBufferAttribute($,ue),ne[k+Z+0]=o.x,ne[k+Z+1]=o.y,ne[k+Z+2]=o.z,ne[k+Z+3]=0),v===!0&&(o.fromBufferAttribute(j,ue),ne[k+Z+4]=o.x,ne[k+Z+5]=o.y,ne[k+Z+6]=o.z,ne[k+Z+7]=0),E===!0&&(o.fromBufferAttribute(G,ue),ne[k+Z+8]=o.x,ne[k+Z+9]=o.y,ne[k+Z+10]=o.z,ne[k+Z+11]=G.itemSize===4?o.w:1)}}d={count:m,texture:V,size:new _e(D,X)},r.set(u,d),u.addEventListener("dispose",Y)}let _=0;for(let x=0;x<p.length;x++)_+=p[x];const y=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=p===void 0?0:p.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];i[u.id]=m}for(let v=0;v<g;v++){const E=m[v];E[0]=v,E[1]=p[v]}m.sort(by);for(let v=0;v<8;v++)v<g&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(My);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const E=a[v],S=E[0],R=E[1];S!==Number.MAX_SAFE_INTEGER&&R?(d&&u.getAttribute("morphTarget"+v)!==d[S]&&u.setAttribute("morphTarget"+v,d[S]),_&&u.getAttribute("morphNormal"+v)!==_[S]&&u.setAttribute("morphNormal"+v,_[S]),s[v]=R,y+=R):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Sy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Wf=new Ut,qf=new Ff,jf=new u_,Xf=new Vf,Tu=[],Cu=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Ru=new Float32Array(4);function bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function To(n,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Py(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Ru.set(i),n.uniformMatrix2fv(this.addr,!1,Ru),ft(t,i)}}function Ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),ft(t,i)}}function Ry(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),ft(t,i)}}function Dy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function Gy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Wf,s)}function Vy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jf,s)}function ky(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xf,s)}function Hy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qf,s)}function Wy(n){switch(n){case 5126:return Ay;case 35664:return Ey;case 35665:return Ty;case 35666:return Cy;case 35674:return Py;case 35675:return Ly;case 35676:return Ry;case 5124:case 35670:return Dy;case 35667:case 35671:return Iy;case 35668:case 35672:return Oy;case 35669:case 35673:return Ny;case 5125:return Fy;case 36294:return zy;case 36295:return By;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return Hy}}function qy(n,e){n.uniform1fv(this.addr,e)}function jy(n,e){const t=bs(e,this.size,2);n.uniform2fv(this.addr,t)}function Xy(n,e){const t=bs(e,this.size,3);n.uniform3fv(this.addr,t)}function Yy(n,e){const t=bs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ky(n,e){const t=bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jy(n,e){const t=bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qy(n,e){const t=bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zy(n,e){n.uniform1iv(this.addr,e)}function $y(n,e){n.uniform2iv(this.addr,e)}function eM(n,e){n.uniform3iv(this.addr,e)}function tM(n,e){n.uniform4iv(this.addr,e)}function nM(n,e){n.uniform1uiv(this.addr,e)}function iM(n,e){n.uniform2uiv(this.addr,e)}function sM(n,e){n.uniform3uiv(this.addr,e)}function rM(n,e){n.uniform4uiv(this.addr,e)}function oM(n,e,t){const i=this.cache,s=e.length,r=To(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Wf,r[o])}function aM(n,e,t){const i=this.cache,s=e.length,r=To(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jf,r[o])}function lM(n,e,t){const i=this.cache,s=e.length,r=To(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xf,r[o])}function cM(n,e,t){const i=this.cache,s=e.length,r=To(t,s);ht(i,r)||(n.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qf,r[o])}function uM(n){switch(n){case 5126:return qy;case 35664:return jy;case 35665:return Xy;case 35666:return Yy;case 35674:return Ky;case 35675:return Jy;case 35676:return Qy;case 5124:case 35670:return Zy;case 35667:case 35671:return $y;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return sM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}class hM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Wy(t.type)}}class fM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=uM(t.type)}}class dM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function Du(n,e){n.seq.push(e),n.map[e.id]=e}function pM(n,e,t){const i=n.name,s=i.length;for(pa.lastIndex=0;;){const r=pa.exec(i),o=pa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Du(t,c===void 0?new hM(a,n,e):new fM(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new dM(a),Du(t,h)),t=h}}}class eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);pM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let mM=0;function gM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function _M(n){switch(n){case Ti:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Ou(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gM(n.getShaderSource(e),o)}else return s}function vM(n,e){const t=_M(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xM(n,e){let t;switch(e){case z0:t="Linear";break;case B0:t="Reinhard";break;case U0:t="OptimizedCineon";break;case G0:t="ACESFilmic";break;case V0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function MM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zs(n){return n!==""}function Nu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(n){return n.replace(wM,SM)}function SM(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ya(t)}const AM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(n){return n.replace(AM,EM)}function EM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fs&&(e="SHADOWMAP_TYPE_VSM"),e}function CM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case ps:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function LM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case N0:e="ENVMAP_BLENDING_MIX";break;case F0:e="ENVMAP_BLENDING_ADD";break}return e}function RM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function DM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=TM(t),c=CM(t),u=PM(t),h=LM(t),f=RM(t),p=t.isWebGL2?"":yM(t),g=MM(r),m=s.createProgram();let d,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(zs).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(zs).join(`
`),_.length>0&&(_+=`
`)):(d=[Bu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),_=[p,Bu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Pn?xM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,vM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=Ya(o),o=Nu(o,t),o=Fu(o,t),a=Ya(a),a=Nu(a,t),a=Fu(a,t),o=zu(o),a=zu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+d+o,v=y+_+a,E=Iu(s,35633,x),S=Iu(s,35632,v);if(s.attachShader(m,E),s.attachShader(m,S),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),n.debug.checkShaderErrors){const C=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(E).trim(),X=s.getShaderInfoLog(S).trim();let ne=!0,V=!0;if(s.getProgramParameter(m,35714)===!1){ne=!1;const O=Ou(s,E,"vertex"),Y=Ou(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+O+`
`+Y)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||X==="")&&(V=!1);V&&(this.diagnostics={runnable:ne,programLog:C,vertexShader:{log:D,prefix:d},fragmentShader:{log:X,prefix:_}})}s.deleteShader(E),s.deleteShader(S);let R;this.getUniforms=function(){return R===void 0&&(R=new eo(s,m)),R};let M;return this.getAttributes=function(){return M===void 0&&(M=bM(s,m)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=mM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=S,this}let IM=0;class OM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NM(e),t.set(e,i)),i}}class NM{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}}function FM(n,e,t,i,s,r,o){const a=new zf,l=new OM,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,C,D,X,ne){const V=X.fog,O=ne.geometry,Y=M.isMeshStandardMaterial?X.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),$=K&&K.mapping===So?K.image.height:null,j=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,k=G!==void 0?G.length:0;let ue=0;O.morphAttributes.position!==void 0&&(ue=1),O.morphAttributes.normal!==void 0&&(ue=2),O.morphAttributes.color!==void 0&&(ue=3);let Z,ve,Ae,W;if(j){const Me=hn[j];Z=Me.vertexShader,ve=Me.fragmentShader}else Z=M.vertexShader,ve=M.fragmentShader,l.update(M),Ae=l.getVertexShaderID(M),W=l.getFragmentShaderID(M);const z=n.getRenderTarget(),ce=M.alphaTest>0,he=M.clearcoat>0,xe=M.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:M.type,vertexShader:Z,fragmentShader:ve,defines:M.defines,customVertexShaderID:Ae,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:f,outputEncoding:z===null?n.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Ti,map:!!M.map,matcap:!!M.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:$,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===o_,tangentSpaceNormalMap:M.normalMapType===Eo,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===ot,clearcoat:he,clearcoatMap:he&&!!M.clearcoatMap,clearcoatRoughnessMap:he&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!M.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!M.iridescenceMap,iridescenceThicknessMap:xe&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===rs,alphaMap:!!M.alphaMap,alphaTest:ce,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!V,useFog:M.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Pn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yn,flipSided:M.side===Yt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)C.push(D),C.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(C,M),y(C,M),C.push(n.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function _(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.combine),M.push(C.vertexUvs),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),M.push(a.mask)}function x(M){const C=g[M.type];let D;if(C){const X=hn[C];D=b_.clone(X.uniforms)}else D=M.uniforms;return D}function v(M,C){let D;for(let X=0,ne=c.length;X<ne;X++){const V=c[X];if(V.cacheKey===C){D=V,++D.usedTimes;break}}return D===void 0&&(D=new DM(n,C,M,r),c.push(D)),D}function E(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function S(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:v,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:R}}function zM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function BM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,g,m,d){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},n[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=d),e++,_}function a(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?i.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||BM),i.length>1&&i.sort(f||Uu),s.length>1&&s.sort(f||Uu)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function UM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Gu,n.set(i,[o])):s>=r.length?(o=new Gu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new He};break;case"SpotLight":t={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function VM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kM=0;function HM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WM(n,e){const t=new GM,i=VM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,o=new $e,a=new $e;function l(u,h){let f=0,p=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let m=0,d=0,_=0,y=0,x=0,v=0,E=0,S=0,R=0,M=0;u.sort(HM);const C=h!==!0?Math.PI:1;for(let X=0,ne=u.length;X<ne;X++){const V=u[X],O=V.color,Y=V.intensity,K=V.distance,$=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)f+=O.r*Y*C,p+=O.g*Y*C,g+=O.b*Y*C;else if(V.isLightProbe)for(let j=0;j<9;j++)s.probe[j].addScaledVector(V.sh.coefficients[j],Y);else if(V.isDirectionalLight){const j=t.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*C),V.castShadow){const G=V.shadow,k=i.get(V);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,s.directionalShadow[m]=k,s.directionalShadowMap[m]=$,s.directionalShadowMatrix[m]=V.shadow.matrix,v++}s.directional[m]=j,m++}else if(V.isSpotLight){const j=t.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(O).multiplyScalar(Y*C),j.distance=K,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,s.spot[_]=j;const G=V.shadow;if(V.map&&(s.spotLightMap[R]=V.map,R++,G.updateMatrices(V),V.castShadow&&M++),s.spotLightMatrix[_]=G.matrix,V.castShadow){const k=i.get(V);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,s.spotShadow[_]=k,s.spotShadowMap[_]=$,S++}_++}else if(V.isRectAreaLight){const j=t.get(V);j.color.copy(O).multiplyScalar(Y),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=j,y++}else if(V.isPointLight){const j=t.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*C),j.distance=V.distance,j.decay=V.decay,V.castShadow){const G=V.shadow,k=i.get(V);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,s.pointShadow[d]=k,s.pointShadowMap[d]=$,s.pointShadowMatrix[d]=V.shadow.matrix,E++}s.point[d]=j,d++}else if(V.isHemisphereLight){const j=t.get(V);j.skyColor.copy(V.color).multiplyScalar(Y*C),j.groundColor.copy(V.groundColor).multiplyScalar(Y*C),s.hemi[x]=j,x++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==m||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==y||D.hemiLength!==x||D.numDirectionalShadows!==v||D.numPointShadows!==E||D.numSpotShadows!==S||D.numSpotMaps!==R)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=y,s.point.length=d,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=S+R-M,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=M,D.directionalLength=m,D.pointLength=d,D.spotLength=_,D.rectAreaLength=y,D.hemiLength=x,D.numDirectionalShadows=v,D.numPointShadows=E,D.numSpotShadows=S,D.numSpotMaps=R,s.version=kM++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const _=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const v=u[y];if(v.isDirectionalLight){const E=s.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),f++}else if(v.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const E=s.rectArea[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(_),p++}else if(v.isHemisphereLight){const E=s.hemi[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function Vu(n,e){const t=new WM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qM(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Vu(n,e),t.set(r,[l])):o>=a.length?(l=new Vu(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class jM extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KM=`uniform sampler2D shadow_pass;
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
}`;function JM(n,e,t){let i=new El;const s=new _e,r=new _e,o=new nt,a=new jM({depthPacking:r_}),l=new XM,c={},u=t.maxTextureSize,h={0:Yt,1:fs,2:Yn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:YM,fragmentShader:KM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new et;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new sn(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf,this.render=function(v,E,S){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const R=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ei),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let X=0,ne=v.length;X<ne;X++){const V=v[X],O=V.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Y=O.getFrameExtents();if(s.multiply(Y),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,O.mapSize.y=r.y)),O.map===null){const $=this.type!==Fs?{minFilter:bt,magFilter:bt}:{};O.map=new Ci(s.x,s.y,$),O.map.texture.name=V.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const K=O.getViewportCount();for(let $=0;$<K;$++){const j=O.getViewport($);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),D.viewport(o),O.updateMatrices(V,$),i=O.getFrustum(),x(E,S,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===Fs&&_(O,S),O.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(R,M,C)};function _(v,E){const S=e.update(m);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ci(s.x,s.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(E,null,S,f,m,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(E,null,S,p,m,null)}function y(v,E,S,R,M,C){let D=null;const X=S.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(X!==void 0?D=X:D=S.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const ne=D.uuid,V=E.uuid;let O=c[ne];O===void 0&&(O={},c[ne]=O);let Y=O[V];Y===void 0&&(Y=D.clone(),O[V]=Y),D=Y}return D.visible=E.visible,D.wireframe=E.wireframe,C===Fs?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:h[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaTest,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(S.matrixWorld),D.nearDistance=R,D.farDistance=M),D}function x(v,E,S,R,M){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&M===Fs)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,v.matrixWorld);const X=e.update(v),ne=v.material;if(Array.isArray(ne)){const V=X.groups;for(let O=0,Y=V.length;O<Y;O++){const K=V[O],$=ne[K.materialIndex];if($&&$.visible){const j=y(v,$,R,S.near,S.far,M);n.renderBufferDirect(S,null,X,j,v,K)}}}else if(ne.visible){const V=y(v,ne,R,S.near,S.far,M);n.renderBufferDirect(S,null,X,V,v,null)}}const D=v.children;for(let X=0,ne=D.length;X<ne;X++)x(D[X],E,S,R,M)}}function QM(n,e,t){const i=t.isWebGL2;function s(){let F=!1;const oe=new nt;let ge=null;const Se=new nt(0,0,0,0);return{setMask:function(Ce){ge!==Ce&&!F&&(n.colorMask(Ce,Ce,Ce,Ce),ge=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,qe,pt,yt,si){si===!0&&(Ce*=yt,qe*=yt,pt*=yt),oe.set(Ce,qe,pt,yt),Se.equals(oe)===!1&&(n.clearColor(Ce,qe,pt,yt),Se.copy(oe))},reset:function(){F=!1,ge=null,Se.set(-1,0,0,0)}}}function r(){let F=!1,oe=null,ge=null,Se=null;return{setTest:function(Ce){Ce?ce(2929):he(2929)},setMask:function(Ce){oe!==Ce&&!F&&(n.depthMask(Ce),oe=Ce)},setFunc:function(Ce){if(ge!==Ce){switch(Ce){case C0:n.depthFunc(512);break;case P0:n.depthFunc(519);break;case L0:n.depthFunc(513);break;case Ga:n.depthFunc(515);break;case R0:n.depthFunc(514);break;case D0:n.depthFunc(518);break;case I0:n.depthFunc(516);break;case O0:n.depthFunc(517);break;default:n.depthFunc(515)}ge=Ce}},setLocked:function(Ce){F=Ce},setClear:function(Ce){Se!==Ce&&(n.clearDepth(Ce),Se=Ce)},reset:function(){F=!1,oe=null,ge=null,Se=null}}}function o(){let F=!1,oe=null,ge=null,Se=null,Ce=null,qe=null,pt=null,yt=null,si=null;return{setTest:function(tt){F||(tt?ce(2960):he(2960))},setMask:function(tt){oe!==tt&&!F&&(n.stencilMask(tt),oe=tt)},setFunc:function(tt,vn,Gt){(ge!==tt||Se!==vn||Ce!==Gt)&&(n.stencilFunc(tt,vn,Gt),ge=tt,Se=vn,Ce=Gt)},setOp:function(tt,vn,Gt){(qe!==tt||pt!==vn||yt!==Gt)&&(n.stencilOp(tt,vn,Gt),qe=tt,pt=vn,yt=Gt)},setLocked:function(tt){F=tt},setClear:function(tt){si!==tt&&(n.clearStencil(tt),si=tt)},reset:function(){F=!1,oe=null,ge=null,Se=null,Ce=null,qe=null,pt=null,yt=null,si=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,_=!1,y=null,x=null,v=null,E=null,S=null,R=null,M=null,C=!1,D=null,X=null,ne=null,V=null,O=null;const Y=n.getParameter(35661);let K=!1,$=0;const j=n.getParameter(7938);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=$>=2);let G=null,k={};const ue=n.getParameter(3088),Z=n.getParameter(2978),ve=new nt().fromArray(ue),Ae=new nt().fromArray(Z);function W(F,oe,ge){const Se=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(F,Ce),n.texParameteri(F,10241,9728),n.texParameteri(F,10240,9728);for(let qe=0;qe<ge;qe++)n.texImage2D(oe+qe,0,6408,1,1,0,6408,5121,Se);return Ce}const z={};z[3553]=W(3553,3553,1),z[34067]=W(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(2929),l.setFunc(Ga),U(!1),te(Ic),ce(2884),I(ei);function ce(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function he(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function xe(F,oe){return p[F]!==oe?(n.bindFramebuffer(F,oe),p[F]=oe,i&&(F===36009&&(p[36160]=oe),F===36160&&(p[36009]=oe)),!0):!1}function pe(F,oe){let ge=m,Se=!1;if(F)if(ge=g.get(oe),ge===void 0&&(ge=[],g.set(oe,ge)),F.isWebGLMultipleRenderTargets){const Ce=F.texture;if(ge.length!==Ce.length||ge[0]!==36064){for(let qe=0,pt=Ce.length;qe<pt;qe++)ge[qe]=36064+qe;ge.length=Ce.length,Se=!0}}else ge[0]!==36064&&(ge[0]=36064,Se=!0);else ge[0]!==1029&&(ge[0]=1029,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Me(F){return d!==F?(n.useProgram(F),d=F,!0):!1}const b={[Zi]:32774,[_0]:32778,[v0]:32779};if(i)b[Fc]=32775,b[zc]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(b[Fc]=F.MIN_EXT,b[zc]=F.MAX_EXT)}const A={[x0]:0,[y0]:1,[M0]:768,[Cf]:770,[T0]:776,[A0]:774,[w0]:772,[b0]:769,[Pf]:771,[E0]:775,[S0]:773};function I(F,oe,ge,Se,Ce,qe,pt,yt){if(F===ei){_===!0&&(he(3042),_=!1);return}if(_===!1&&(ce(3042),_=!0),F!==g0){if(F!==y||yt!==C){if((x!==Zi||S!==Zi)&&(n.blendEquation(32774),x=Zi,S=Zi),yt)switch(F){case rs:n.blendFuncSeparate(1,771,1,771);break;case Ua:n.blendFunc(1,1);break;case Oc:n.blendFuncSeparate(0,769,0,1);break;case Nc:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case rs:n.blendFuncSeparate(770,771,1,771);break;case Ua:n.blendFunc(770,1);break;case Oc:n.blendFuncSeparate(0,769,0,1);break;case Nc:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,E=null,R=null,M=null,y=F,C=yt}return}Ce=Ce||oe,qe=qe||ge,pt=pt||Se,(oe!==x||Ce!==S)&&(n.blendEquationSeparate(b[oe],b[Ce]),x=oe,S=Ce),(ge!==v||Se!==E||qe!==R||pt!==M)&&(n.blendFuncSeparate(A[ge],A[Se],A[qe],A[pt]),v=ge,E=Se,R=qe,M=pt),y=F,C=null}function B(F,oe){F.side===Yn?he(2884):ce(2884);let ge=F.side===Yt;oe&&(ge=!ge),U(ge),F.blending===rs&&F.transparent===!1?I(ei):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Se=F.stencilWrite;c.setTest(Se),Se&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),J(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(32926):he(32926)}function U(F){D!==F&&(F?n.frontFace(2304):n.frontFace(2305),D=F)}function te(F){F!==d0?(ce(2884),F!==X&&(F===Ic?n.cullFace(1029):F===p0?n.cullFace(1028):n.cullFace(1032))):he(2884),X=F}function ae(F){F!==ne&&(K&&n.lineWidth(F),ne=F)}function J(F,oe,ge){F?(ce(32823),(V!==oe||O!==ge)&&(n.polygonOffset(oe,ge),V=oe,O=ge)):he(32823)}function fe(F){F?ce(3089):he(3089)}function ie(F){F===void 0&&(F=33984+Y-1),G!==F&&(n.activeTexture(F),G=F)}function T(F,oe,ge){ge===void 0&&(G===null?ge=33984+Y-1:ge=G);let Se=k[ge];Se===void 0&&(Se={type:void 0,texture:void 0},k[ge]=Se),(Se.type!==F||Se.texture!==oe)&&(G!==ge&&(n.activeTexture(ge),G=ge),n.bindTexture(F,oe||z[F]),Se.type=F,Se.texture=oe)}function w(){const F=k[G];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(F){ve.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ve.copy(F))}function we(F){Ae.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ae.copy(F))}function Oe(F,oe){let ge=h.get(oe);ge===void 0&&(ge=new WeakMap,h.set(oe,ge));let Se=ge.get(F);Se===void 0&&(Se=n.getUniformBlockIndex(oe,F.name),ge.set(F,Se))}function Je(F,oe){const Se=h.get(oe).get(F);u.get(F)!==Se&&(n.uniformBlockBinding(oe,Se,F.__bindingPointIndex),u.set(F,Se))}function dt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},G=null,k={},p={},g=new WeakMap,m=[],d=null,_=!1,y=null,x=null,v=null,E=null,S=null,R=null,M=null,C=!1,D=null,X=null,ne=null,V=null,O=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:he,bindFramebuffer:xe,drawBuffers:pe,useProgram:Me,setBlending:I,setMaterial:B,setFlipSided:U,setCullFace:te,setLineWidth:ae,setPolygonOffset:J,setScissorTest:fe,activeTexture:ie,bindTexture:T,unbindTexture:w,compressedTexImage2D:N,compressedTexImage3D:Q,texImage2D:De,texImage3D:Ee,updateUBOMapping:Oe,uniformBlockBinding:Je,texStorage2D:ee,texStorage3D:Te,texSubImage2D:re,texSubImage3D:de,compressedTexSubImage2D:be,compressedTexSubImage3D:me,scissor:Le,viewport:we,reset:dt}}function ZM(n,e,t,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,w){return _?new OffscreenCanvas(T,w):$s("canvas")}function x(T,w,N,Q){let re=1;if((T.width>Q||T.height>Q)&&(re=Q/Math.max(T.width,T.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const de=w?Xa:Math.floor,be=de(re*T.width),me=de(re*T.height);m===void 0&&(m=y(be,me));const ee=N?y(be,me):m;return ee.width=be,ee.height=me,ee.getContext("2d").drawImage(T,0,0,be,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+me+")."),ee}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return cu(T.width)&&cu(T.height)}function E(T){return a?!1:T.wrapS!==en||T.wrapT!==en||T.minFilter!==bt&&T.minFilter!==qt}function S(T,w){return T.generateMipmaps&&w&&T.minFilter!==bt&&T.minFilter!==qt}function R(T){n.generateMipmap(T)}function M(T,w,N,Q,re=!1){if(a===!1)return w;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de=w;return w===6403&&(N===5126&&(de=33326),N===5131&&(de=33325),N===5121&&(de=33321)),w===33319&&(N===5126&&(de=33328),N===5131&&(de=33327),N===5121&&(de=33323)),w===6408&&(N===5126&&(de=34836),N===5131&&(de=34842),N===5121&&(de=Q===ot&&re===!1?35907:32856),N===32819&&(de=32854),N===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function C(T,w,N){return S(T,N)===!0||T.isFramebufferTexture&&T.minFilter!==bt&&T.minFilter!==qt?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function D(T){return T===bt||T===Bc||T===Uc?9728:9729}function X(T){const w=T.target;w.removeEventListener("dispose",X),V(w),w.isVideoTexture&&g.delete(w)}function ne(T){const w=T.target;w.removeEventListener("dispose",ne),Y(w)}function V(T){const w=i.get(T);if(w.__webglInit===void 0)return;const N=T.source,Q=d.get(N);if(Q){const re=Q[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&O(T),Object.keys(Q).length===0&&d.delete(N)}i.remove(T)}function O(T){const w=i.get(T);n.deleteTexture(w.__webglTexture);const N=T.source,Q=d.get(N);delete Q[w.__cacheKey],o.memory.textures--}function Y(T){const w=T.texture,N=i.get(T),Q=i.get(w);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(N.__webglFramebuffer[re]),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let re=0;re<N.__webglColorRenderbuffer.length;re++)N.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[re]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let re=0,de=w.length;re<de;re++){const be=i.get(w[re]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(T)}let K=0;function $(){K=0}function j(){const T=K;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),K+=1,T}function G(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function k(T,w){const N=i.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(N,T,w);return}}t.bindTexture(3553,N.__webglTexture,33984+w)}function ue(T,w){const N=i.get(T);if(T.version>0&&N.__version!==T.version){he(N,T,w);return}t.bindTexture(35866,N.__webglTexture,33984+w)}function Z(T,w){const N=i.get(T);if(T.version>0&&N.__version!==T.version){he(N,T,w);return}t.bindTexture(32879,N.__webglTexture,33984+w)}function ve(T,w){const N=i.get(T);if(T.version>0&&N.__version!==T.version){xe(N,T,w);return}t.bindTexture(34067,N.__webglTexture,33984+w)}const Ae={[Ha]:10497,[en]:33071,[Wa]:33648},W={[bt]:9728,[Bc]:9984,[Uc]:9986,[qt]:9729,[k0]:9985,[Ao]:9987};function z(T,w,N){if(N?(n.texParameteri(T,10242,Ae[w.wrapS]),n.texParameteri(T,10243,Ae[w.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,Ae[w.wrapR]),n.texParameteri(T,10240,W[w.magFilter]),n.texParameteri(T,10241,W[w.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(w.wrapS!==en||w.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,D(w.magFilter)),n.texParameteri(T,10241,D(w.minFilter)),w.minFilter!==bt&&w.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(w.type===yi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Zs&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ce(T,w){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",X));const Q=w.source;let re=d.get(Q);re===void 0&&(re={},d.set(Q,re));const de=G(w);if(de!==T.__cacheKey){re[de]===void 0&&(re[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),re[de].usedTimes++;const be=re[T.__cacheKey];be!==void 0&&(re[T.__cacheKey].usedTimes--,be.usedTimes===0&&O(w)),T.__cacheKey=de,T.__webglTexture=re[de].texture}return N}function he(T,w,N){let Q=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=35866),w.isData3DTexture&&(Q=32879);const re=ce(T,w),de=w.source;t.bindTexture(Q,T.__webglTexture,33984+N);const be=i.get(de);if(de.version!==be.__version||re===!0){t.activeTexture(33984+N),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const me=E(w)&&v(w.image)===!1;let ee=x(w.image,me,!1,u);ee=ie(w,ee);const Te=v(ee)||a,De=r.convert(w.format,w.encoding);let Ee=r.convert(w.type),Le=M(w.internalFormat,De,Ee,w.encoding,w.isVideoTexture);z(Q,w,Te);let we;const Oe=w.mipmaps,Je=a&&w.isVideoTexture!==!0,dt=be.__version===void 0||re===!0,F=C(w,ee,Te);if(w.isDepthTexture)Le=6402,a?w.type===yi?Le=36012:w.type===xi?Le=33190:w.type===os?Le=35056:Le=33189:w.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Si&&Le===6402&&w.type!==Rf&&w.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=xi,Ee=r.convert(w.type)),w.format===ms&&Le===6402&&(Le=34041,w.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=os,Ee=r.convert(w.type))),dt&&(Je?t.texStorage2D(3553,1,Le,ee.width,ee.height):t.texImage2D(3553,0,Le,ee.width,ee.height,0,De,Ee,null));else if(w.isDataTexture)if(Oe.length>0&&Te){Je&&dt&&t.texStorage2D(3553,F,Le,Oe[0].width,Oe[0].height);for(let oe=0,ge=Oe.length;oe<ge;oe++)we=Oe[oe],Je?t.texSubImage2D(3553,oe,0,0,we.width,we.height,De,Ee,we.data):t.texImage2D(3553,oe,Le,we.width,we.height,0,De,Ee,we.data);w.generateMipmaps=!1}else Je?(dt&&t.texStorage2D(3553,F,Le,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,ee.width,ee.height,De,Ee,ee.data)):t.texImage2D(3553,0,Le,ee.width,ee.height,0,De,Ee,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&dt&&t.texStorage3D(35866,F,Le,Oe[0].width,Oe[0].height,ee.depth);for(let oe=0,ge=Oe.length;oe<ge;oe++)we=Oe[oe],w.format!==tn?De!==null?Je?t.compressedTexSubImage3D(35866,oe,0,0,0,we.width,we.height,ee.depth,De,we.data,0,0):t.compressedTexImage3D(35866,oe,Le,we.width,we.height,ee.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(35866,oe,0,0,0,we.width,we.height,ee.depth,De,Ee,we.data):t.texImage3D(35866,oe,Le,we.width,we.height,ee.depth,0,De,Ee,we.data)}else{Je&&dt&&t.texStorage2D(3553,F,Le,Oe[0].width,Oe[0].height);for(let oe=0,ge=Oe.length;oe<ge;oe++)we=Oe[oe],w.format!==tn?De!==null?Je?t.compressedTexSubImage2D(3553,oe,0,0,we.width,we.height,De,we.data):t.compressedTexImage2D(3553,oe,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(3553,oe,0,0,we.width,we.height,De,Ee,we.data):t.texImage2D(3553,oe,Le,we.width,we.height,0,De,Ee,we.data)}else if(w.isDataArrayTexture)Je?(dt&&t.texStorage3D(35866,F,Le,ee.width,ee.height,ee.depth),t.texSubImage3D(35866,0,0,0,0,ee.width,ee.height,ee.depth,De,Ee,ee.data)):t.texImage3D(35866,0,Le,ee.width,ee.height,ee.depth,0,De,Ee,ee.data);else if(w.isData3DTexture)Je?(dt&&t.texStorage3D(32879,F,Le,ee.width,ee.height,ee.depth),t.texSubImage3D(32879,0,0,0,0,ee.width,ee.height,ee.depth,De,Ee,ee.data)):t.texImage3D(32879,0,Le,ee.width,ee.height,ee.depth,0,De,Ee,ee.data);else if(w.isFramebufferTexture){if(dt)if(Je)t.texStorage2D(3553,F,Le,ee.width,ee.height);else{let oe=ee.width,ge=ee.height;for(let Se=0;Se<F;Se++)t.texImage2D(3553,Se,Le,oe,ge,0,De,Ee,null),oe>>=1,ge>>=1}}else if(Oe.length>0&&Te){Je&&dt&&t.texStorage2D(3553,F,Le,Oe[0].width,Oe[0].height);for(let oe=0,ge=Oe.length;oe<ge;oe++)we=Oe[oe],Je?t.texSubImage2D(3553,oe,0,0,De,Ee,we):t.texImage2D(3553,oe,Le,De,Ee,we);w.generateMipmaps=!1}else Je?(dt&&t.texStorage2D(3553,F,Le,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,De,Ee,ee)):t.texImage2D(3553,0,Le,De,Ee,ee);S(w,Te)&&R(Q),be.__version=de.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function xe(T,w,N){if(w.image.length!==6)return;const Q=ce(T,w),re=w.source;t.bindTexture(34067,T.__webglTexture,33984+N);const de=i.get(re);if(re.version!==de.__version||Q===!0){t.activeTexture(33984+N),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,me=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++)!be&&!me?ee[oe]=x(w.image[oe],!1,!0,c):ee[oe]=me?w.image[oe].image:w.image[oe],ee[oe]=ie(w,ee[oe]);const Te=ee[0],De=v(Te)||a,Ee=r.convert(w.format,w.encoding),Le=r.convert(w.type),we=M(w.internalFormat,Ee,Le,w.encoding),Oe=a&&w.isVideoTexture!==!0,Je=de.__version===void 0||Q===!0;let dt=C(w,Te,De);z(34067,w,De);let F;if(be){Oe&&Je&&t.texStorage2D(34067,dt,we,Te.width,Te.height);for(let oe=0;oe<6;oe++){F=ee[oe].mipmaps;for(let ge=0;ge<F.length;ge++){const Se=F[ge];w.format!==tn?Ee!==null?Oe?t.compressedTexSubImage2D(34069+oe,ge,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(34069+oe,ge,we,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+oe,ge,0,0,Se.width,Se.height,Ee,Le,Se.data):t.texImage2D(34069+oe,ge,we,Se.width,Se.height,0,Ee,Le,Se.data)}}}else{F=w.mipmaps,Oe&&Je&&(F.length>0&&dt++,t.texStorage2D(34067,dt,we,ee[0].width,ee[0].height));for(let oe=0;oe<6;oe++)if(me){Oe?t.texSubImage2D(34069+oe,0,0,0,ee[oe].width,ee[oe].height,Ee,Le,ee[oe].data):t.texImage2D(34069+oe,0,we,ee[oe].width,ee[oe].height,0,Ee,Le,ee[oe].data);for(let ge=0;ge<F.length;ge++){const Ce=F[ge].image[oe].image;Oe?t.texSubImage2D(34069+oe,ge+1,0,0,Ce.width,Ce.height,Ee,Le,Ce.data):t.texImage2D(34069+oe,ge+1,we,Ce.width,Ce.height,0,Ee,Le,Ce.data)}}else{Oe?t.texSubImage2D(34069+oe,0,0,0,Ee,Le,ee[oe]):t.texImage2D(34069+oe,0,we,Ee,Le,ee[oe]);for(let ge=0;ge<F.length;ge++){const Se=F[ge];Oe?t.texSubImage2D(34069+oe,ge+1,0,0,Ee,Le,Se.image[oe]):t.texImage2D(34069+oe,ge+1,we,Ee,Le,Se.image[oe])}}}S(w,De)&&R(34067),de.__version=re.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function pe(T,w,N,Q,re){const de=r.convert(N.format,N.encoding),be=r.convert(N.type),me=M(N.internalFormat,de,be,N.encoding);i.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,me,w.width,w.height,w.depth,0,de,be,null):t.texImage2D(re,0,me,w.width,w.height,0,de,be,null)),t.bindFramebuffer(36160,T),J(w)?f.framebufferTexture2DMultisampleEXT(36160,Q,re,i.get(N).__webglTexture,0,ae(w)):(re===3553||re>=34069&&re<=34074)&&n.framebufferTexture2D(36160,Q,re,i.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(T,w,N){if(n.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let Q=33189;if(N||J(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===yi?Q=36012:re.type===xi&&(Q=33190));const de=ae(w);J(w)?f.renderbufferStorageMultisampleEXT(36161,de,Q,w.width,w.height):n.renderbufferStorageMultisample(36161,de,Q,w.width,w.height)}else n.renderbufferStorage(36161,Q,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const Q=ae(w);N&&J(w)===!1?n.renderbufferStorageMultisample(36161,Q,35056,w.width,w.height):J(w)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,T)}else{const Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<Q.length;re++){const de=Q[re],be=r.convert(de.format,de.encoding),me=r.convert(de.type),ee=M(de.internalFormat,be,me,de.encoding),Te=ae(w);N&&J(w)===!1?n.renderbufferStorageMultisample(36161,Te,ee,w.width,w.height):J(w)?f.renderbufferStorageMultisampleEXT(36161,Te,ee,w.width,w.height):n.renderbufferStorage(36161,ee,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function b(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,re=ae(w);if(w.depthTexture.format===Si)J(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,re):n.framebufferTexture2D(36160,36096,3553,Q,0);else if(w.depthTexture.format===ms)J(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,re):n.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function A(T){const w=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");b(w.__webglFramebuffer,T)}else if(N){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=n.createRenderbuffer(),Me(w.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Me(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function I(T,w,N){const Q=i.get(T);w!==void 0&&pe(Q.__webglFramebuffer,T,T.texture,36064,3553),N!==void 0&&A(T)}function B(T){const w=T.texture,N=i.get(T),Q=i.get(w);T.addEventListener("dispose",ne),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=w.version,o.memory.textures++);const re=T.isWebGLCubeRenderTarget===!0,de=T.isWebGLMultipleRenderTargets===!0,be=v(T)||a;if(re){N.__webglFramebuffer=[];for(let me=0;me<6;me++)N.__webglFramebuffer[me]=n.createFramebuffer()}else{if(N.__webglFramebuffer=n.createFramebuffer(),de)if(s.drawBuffers){const me=T.texture;for(let ee=0,Te=me.length;ee<Te;ee++){const De=i.get(me[ee]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&J(T)===!1){const me=de?w:[w];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let ee=0;ee<me.length;ee++){const Te=me[ee];N.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(36161,N.__webglColorRenderbuffer[ee]);const De=r.convert(Te.format,Te.encoding),Ee=r.convert(Te.type),Le=M(Te.internalFormat,De,Ee,Te.encoding,T.isXRRenderTarget===!0),we=ae(T);n.renderbufferStorageMultisample(36161,we,Le,T.width,T.height),n.framebufferRenderbuffer(36160,36064+ee,36161,N.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(36161,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,Q.__webglTexture),z(34067,w,be);for(let me=0;me<6;me++)pe(N.__webglFramebuffer[me],T,w,36064,34069+me);S(w,be)&&R(34067),t.unbindTexture()}else if(de){const me=T.texture;for(let ee=0,Te=me.length;ee<Te;ee++){const De=me[ee],Ee=i.get(De);t.bindTexture(3553,Ee.__webglTexture),z(3553,De,be),pe(N.__webglFramebuffer,T,De,36064+ee,3553),S(De,be)&&R(3553)}t.unbindTexture()}else{let me=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?me=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,Q.__webglTexture),z(me,w,be),pe(N.__webglFramebuffer,T,w,36064,me),S(w,be)&&R(me),t.unbindTexture()}T.depthBuffer&&A(T)}function U(T){const w=v(T)||a,N=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,re=N.length;Q<re;Q++){const de=N[Q];if(S(de,w)){const be=T.isWebGLCubeRenderTarget?34067:3553,me=i.get(de).__webglTexture;t.bindTexture(be,me),R(be),t.unbindTexture()}}}function te(T){if(a&&T.samples>0&&J(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],N=T.width,Q=T.height;let re=16384;const de=[],be=T.stencilBuffer?33306:36096,me=i.get(T),ee=T.isWebGLMultipleRenderTargets===!0;if(ee)for(let Te=0;Te<w.length;Te++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Te=0;Te<w.length;Te++){de.push(36064+Te),T.depthBuffer&&de.push(be);const De=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(De===!1&&(T.depthBuffer&&(re|=256),T.stencilBuffer&&(re|=1024)),ee&&n.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Te]),De===!0&&(n.invalidateFramebuffer(36008,[be]),n.invalidateFramebuffer(36009,[be])),ee){const Ee=i.get(w[Te]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ee,0)}n.blitFramebuffer(0,0,N,Q,0,0,N,Q,re,9728),p&&n.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ee)for(let Te=0;Te<w.length;Te++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,me.__webglColorRenderbuffer[Te]);const De=i.get(w[Te]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,De,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function ae(T){return Math.min(h,T.samples)}function J(T){const w=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function fe(T){const w=o.render.frame;g.get(T)!==w&&(g.set(T,w),T.update())}function ie(T,w){const N=T.encoding,Q=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ja||N!==Ti&&(N===ot?a===!1?e.has("EXT_sRGB")===!0&&Q===tn?(T.format=ja,T.minFilter=qt,T.generateMipmaps=!1):w=Of.sRGBToLinear(w):(Q!==tn||re!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),w}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=k,this.setTexture2DArray=ue,this.setTexture3D=Z,this.setTextureCube=ve,this.rebindTextures=I,this.setupRenderTarget=B,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=J}function $M(n,e,t){const i=t.isWebGL2;function s(r,o=null){let a;if(r===Ei)return 5121;if(r===j0)return 32819;if(r===X0)return 32820;if(r===H0)return 5120;if(r===W0)return 5122;if(r===Rf)return 5123;if(r===q0)return 5124;if(r===xi)return 5125;if(r===yi)return 5126;if(r===Zs)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Y0)return 6406;if(r===tn)return 6408;if(r===J0)return 6409;if(r===Q0)return 6410;if(r===Si)return 6402;if(r===ms)return 34041;if(r===Z0)return 6403;if(r===K0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ja)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===$0)return 36244;if(r===e_)return 33319;if(r===t_)return 33320;if(r===n_)return 36249;if(r===Uo||r===Go||r===Vo||r===ko)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Uo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Uo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ko)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gc||r===Vc||r===kc||r===Hc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Gc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===i_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wc||r===qc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wc)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===qc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jc||r===Xc||r===Yc||r===Kc||r===Jc||r===Qc||r===Zc||r===$c||r===eu||r===tu||r===nu||r===iu||r===su||r===ru)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===jc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zc)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$c)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===iu)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===su)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ru)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ou)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ou)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===os?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class eb extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ir extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tb={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const y=new Ir;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class nb extends Ut{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=xi),i===void 0&&u===ms&&(i=os),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class ib extends ys{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],y=[],x=new zt;x.layers.enable(1),x.viewport=new nt;const v=new zt;v.layers.enable(2),v.viewport=new nt;const E=[x,v],S=new eb;S.layers.enable(1),S.layers.enable(2);let R=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let k=_[G];return k===void 0&&(k=new ma,_[G]=k),k.getTargetRaySpace()},this.getControllerGrip=function(G){let k=_[G];return k===void 0&&(k=new ma,_[G]=k),k.getGripSpace()},this.getHand=function(G){let k=_[G];return k===void 0&&(k=new ma,_[G]=k),k.getHandSpace()};function C(G){const k=y.indexOf(G.inputSource);if(k===-1)return;const ue=_[k];ue!==void 0&&ue.dispatchEvent({type:G.type,data:G.inputSource})}function D(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",X);for(let G=0;G<_.length;G++){const k=y[G];k!==null&&(y[G]=null,_[G].disconnect(k))}R=null,M=null,e.setRenderTarget(m),f=null,h=null,u=null,s=null,d=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",D),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,k),s.updateRenderState({baseLayer:f}),d=new Ci(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Ei,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,ue=null,Z=null;g.depth&&(Z=g.stencil?35056:33190,k=g.stencil?ms:Si,ue=g.stencil?os:xi);const ve={colorFormat:32856,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(ve),s.updateRenderState({layers:[h]}),d=new Ci(h.textureWidth,h.textureHeight,{format:tn,type:Ei,depthTexture:new nb(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Ae=e.properties.get(d);Ae.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function X(G){for(let k=0;k<G.removed.length;k++){const ue=G.removed[k],Z=y.indexOf(ue);Z>=0&&(y[Z]=null,_[Z].dispatchEvent({type:"disconnected",data:ue}))}for(let k=0;k<G.added.length;k++){const ue=G.added[k];let Z=y.indexOf(ue);if(Z===-1){for(let Ae=0;Ae<_.length;Ae++)if(Ae>=y.length){y.push(ue),Z=Ae;break}else if(y[Ae]===null){y[Ae]=ue,Z=Ae;break}if(Z===-1)break}const ve=_[Z];ve&&ve.dispatchEvent({type:"connected",data:ue})}}const ne=new L,V=new L;function O(G,k,ue){ne.setFromMatrixPosition(k.matrixWorld),V.setFromMatrixPosition(ue.matrixWorld);const Z=ne.distanceTo(V),ve=k.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,W=ve[14]/(ve[10]-1),z=ve[14]/(ve[10]+1),ce=(ve[9]+1)/ve[5],he=(ve[9]-1)/ve[5],xe=(ve[8]-1)/ve[0],pe=(Ae[8]+1)/Ae[0],Me=W*xe,b=W*pe,A=Z/(-xe+pe),I=A*-xe;k.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(I),G.translateZ(A),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const B=W+A,U=z+A,te=Me-I,ae=b+(Z-I),J=ce*z/U*B,fe=he*z/U*B;G.projectionMatrix.makePerspective(te,ae,J,fe,B,U)}function Y(G,k){k===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(k.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;S.near=v.near=x.near=G.near,S.far=v.far=x.far=G.far,(R!==S.near||M!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,M=S.far);const k=G.parent,ue=S.cameras;Y(S,k);for(let ve=0;ve<ue.length;ve++)Y(ue[ve],k);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),G.matrix.copy(S.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const Z=G.children;for(let ve=0,Ae=Z.length;ve<Ae;ve++)Z[ve].updateMatrixWorld(!0);ue.length===2?O(S,x,v):S.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let K=null;function $(G,k){if(c=k.getViewerPose(l||o),p=k,c!==null){const ue=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let Z=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,Z=!0);for(let ve=0;ve<ue.length;ve++){const Ae=ue[ve];let W=null;if(f!==null)W=f.getViewport(Ae);else{const ce=u.getViewSubImage(h,Ae);W=ce.viewport,ve===0&&(e.setRenderTargetTextures(d,ce.colorTexture,h.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(d))}let z=E[ve];z===void 0&&(z=new zt,z.layers.enable(ve),z.viewport=new nt,E[ve]=z),z.matrix.fromArray(Ae.transform.matrix),z.projectionMatrix.fromArray(Ae.projectionMatrix),z.viewport.set(W.x,W.y,W.width,W.height),ve===0&&S.matrix.copy(z.matrix),Z===!0&&S.cameras.push(z)}}for(let ue=0;ue<_.length;ue++){const Z=y[ue],ve=_[ue];Z!==null&&ve!==void 0&&ve.update(Z,k,l||o)}K&&K(G,k),p=null}const j=new kf;j.setAnimationLoop($),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function sb(n,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Yt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Yt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let x;d.aoMap?x=d.aoMap:d.lightMap&&(x=d.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=y*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Yt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function rb(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function c(y,x){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",d));const E=x.program;i.updateUBOMapping(y,E);const S=e.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function u(y){const x=h();y.__bindingPointIndex=x;const v=n.createBuffer(),E=y.__size,S=y.usage;return n.bindBuffer(35345,v),n.bufferData(35345,E,S),n.bindBuffer(35345,null),n.bindBufferBase(35345,x,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],v=y.uniforms,E=y.__cache;n.bindBuffer(35345,x);for(let S=0,R=v.length;S<R;S++){const M=v[S];if(p(M,S,E)===!0){const C=M.value,D=M.__offset;typeof C=="number"?(M.__data[0]=C,n.bufferSubData(35345,D,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):C.toArray(M.__data),n.bufferSubData(35345,D,M.__data))}}n.bindBuffer(35345,null)}function p(y,x,v){const E=y.value;if(v[x]===void 0)return typeof E=="number"?v[x]=E:v[x]=E.clone(),!0;if(typeof E=="number"){if(v[x]!==E)return v[x]=E,!0}else{const S=v[x];if(S.equals(E)===!1)return S.copy(E),!0}return!1}function g(y){const x=y.uniforms;let v=0;const E=16;let S=0;for(let R=0,M=x.length;R<M;R++){const C=x[R],D=m(C);if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,R>0){S=v%E;const X=E-S;S!==0&&X-D.boundary<0&&(v+=E-S,C.__offset=v)}v+=D.storage}return S=v%E,S>0&&(v+=E-S),y.__size=v,y.__cache={},this}function m(y){const x=y.value,v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function d(y){const x=y.target;x.removeEventListener("dispose",d);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function _(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function ob(){const n=$s("canvas");return n.style.display="block",n}function Yf(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:ob(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ti,this.physicallyCorrectLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,y=0,x=null,v=-1,E=null;const S=new nt,R=new nt;let M=null,C=e.width,D=e.height,X=1,ne=null,V=null;const O=new nt(0,0,C,D),Y=new nt(0,0,C,D);let K=!1;const $=new El;let j=!1,G=!1,k=null;const ue=new $e,Z=new _e,ve=new L,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return x===null?X:1}let z=t;function ce(P,q){for(let se=0;se<P.length;se++){const H=P[se],le=e.getContext(H,q);if(le!==null)return le}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wl}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),z===null){const q=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&q.shift(),z=ce(q,P),z===null)throw ce(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let he,xe,pe,Me,b,A,I,B,U,te,ae,J,fe,ie,T,w,N,Q,re,de,be,me,ee,Te;function De(){he=new _y(z),xe=new hy(z,he,n),he.init(xe),me=new $M(z,he,xe),pe=new QM(z,he,xe),Me=new yy,b=new zM,A=new ZM(z,he,pe,b,xe,me,Me),I=new dy(m),B=new gy(m),U=new P_(z,xe),ee=new cy(z,he,U,xe),te=new vy(z,U,Me,ee),ae=new Sy(z,te,U,Me),re=new wy(z,xe,A),w=new fy(b),J=new FM(m,I,B,he,xe,ee,w),fe=new sb(m,b),ie=new UM,T=new qM(he,xe),Q=new ly(m,I,B,pe,ae,u,o),N=new JM(m,ae,xe),Te=new rb(z,Me,xe,pe),de=new uy(z,he,Me,xe),be=new xy(z,he,Me,xe),Me.programs=J.programs,m.capabilities=xe,m.extensions=he,m.properties=b,m.renderLists=ie,m.shadowMap=N,m.state=pe,m.info=Me}De();const Ee=new ib(m,z);this.xr=Ee,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=he.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=he.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(C,D,!1))},this.getSize=function(P){return P.set(C,D)},this.setSize=function(P,q,se){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=P,D=q,e.width=Math.floor(P*X),e.height=Math.floor(q*X),se!==!1&&(e.style.width=P+"px",e.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(C*X,D*X).floor()},this.setDrawingBufferSize=function(P,q,se){C=P,D=q,X=se,e.width=Math.floor(P*se),e.height=Math.floor(q*se),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(O)},this.setViewport=function(P,q,se,H){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,q,se,H),pe.viewport(S.copy(O).multiplyScalar(X).floor())},this.getScissor=function(P){return P.copy(Y)},this.setScissor=function(P,q,se,H){P.isVector4?Y.set(P.x,P.y,P.z,P.w):Y.set(P,q,se,H),pe.scissor(R.copy(Y).multiplyScalar(X).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(P){pe.setScissorTest(K=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(P=!0,q=!0,se=!0){let H=0;P&&(H|=16384),q&&(H|=256),se&&(H|=1024),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),ie.dispose(),T.dispose(),b.dispose(),I.dispose(),B.dispose(),ae.dispose(),ee.dispose(),Te.dispose(),J.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Se),Ee.removeEventListener("sessionend",Ce),k&&(k.dispose(),k=null),qe.stop()};function Le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const P=Me.autoReset,q=N.enabled,se=N.autoUpdate,H=N.needsUpdate,le=N.type;De(),Me.autoReset=P,N.enabled=q,N.autoUpdate=se,N.needsUpdate=H,N.type=le}function Oe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Je(P){const q=P.target;q.removeEventListener("dispose",Je),dt(q)}function dt(P){F(P),b.remove(P)}function F(P){const q=b.get(P).programs;q!==void 0&&(q.forEach(function(se){J.releaseProgram(se)}),P.isShaderMaterial&&J.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,se,H,le,Re){q===null&&(q=Ae);const Ne=le.isMesh&&le.matrixWorld.determinant()<0,Ge=Cd(P,q,se,H,le);pe.setMaterial(H,Ne);let Be=se.index;const je=se.attributes.position;if(Be===null){if(je===void 0||je.count===0)return}else if(Be.count===0)return;let Ve=1;H.wireframe===!0&&(Be=te.getWireframeAttribute(se),Ve=2),ee.setup(le,H,Ge,se,Be);let We,rt=de;Be!==null&&(We=U.get(Be),rt=be,rt.setIndex(We));const ri=Be!==null?Be.count:je.count,Di=se.drawRange.start*Ve,Ii=se.drawRange.count*Ve,an=Re!==null?Re.start*Ve:0,Xe=Re!==null?Re.count*Ve:1/0,Oi=Math.max(Di,an),at=Math.min(ri,Di+Ii,an+Xe)-1,Vt=Math.max(0,at-Oi+1);if(Vt!==0){if(le.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*W()),rt.setMode(1)):rt.setMode(4);else if(le.isLine){let Nn=H.linewidth;Nn===void 0&&(Nn=1),pe.setLineWidth(Nn*W()),le.isLineSegments?rt.setMode(1):le.isLineLoop?rt.setMode(2):rt.setMode(3)}else le.isPoints?rt.setMode(0):le.isSprite&&rt.setMode(4);if(le.isInstancedMesh)rt.renderInstances(Oi,Vt,le.count);else if(se.isInstancedBufferGeometry){const Nn=Math.min(se.instanceCount,se._maxInstanceCount);rt.renderInstances(Oi,Vt,Nn)}else rt.render(Oi,Vt)}},this.compile=function(P,q){function se(H,le,Re){H.transparent===!0&&H.side===Yn?(H.side=Yt,H.needsUpdate=!0,Gt(H,le,Re),H.side=fs,H.needsUpdate=!0,Gt(H,le,Re),H.side=Yn):Gt(H,le,Re)}f=T.get(P),f.init(),g.push(f),P.traverseVisible(function(H){H.isLight&&H.layers.test(q.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(m.physicallyCorrectLights),P.traverse(function(H){const le=H.material;if(le)if(Array.isArray(le))for(let Re=0;Re<le.length;Re++){const Ne=le[Re];se(Ne,P,H)}else se(le,P,H)}),g.pop(),f=null};let oe=null;function ge(P){oe&&oe(P)}function Se(){qe.stop()}function Ce(){qe.start()}const qe=new kf;qe.setAnimationLoop(ge),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(P){oe=P,Ee.setAnimationLoop(P),P===null?qe.stop():qe.start()},Ee.addEventListener("sessionstart",Se),Ee.addEventListener("sessionend",Ce),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(q),q=Ee.getCamera()),P.isScene===!0&&P.onBeforeRender(m,P,q,x),f=T.get(P,g.length),f.init(),g.push(f),ue.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(ue),G=this.localClippingEnabled,j=w.init(this.clippingPlanes,G,q),h=ie.get(P,p.length),h.init(),p.push(h),pt(P,q,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(ne,V),j===!0&&w.beginShadows();const se=f.state.shadowsArray;if(N.render(se,P,q),j===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,P),f.setupLights(m.physicallyCorrectLights),q.isArrayCamera){const H=q.cameras;for(let le=0,Re=H.length;le<Re;le++){const Ne=H[le];yt(h,P,Ne,Ne.viewport)}}else yt(h,P,q);x!==null&&(A.updateMultisampleRenderTarget(x),A.updateRenderTargetMipmap(x)),P.isScene===!0&&P.onAfterRender(m,P,q),ee.resetDefaultState(),v=-1,E=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function pt(P,q,se,H){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||$.intersectsSprite(P)){H&&ve.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ue);const Ne=ae.update(P),Ge=P.material;Ge.visible&&h.push(P,Ne,Ge,se,ve.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Me.render.frame&&(P.skeleton.update(),P.skeleton.frame=Me.render.frame),!P.frustumCulled||$.intersectsObject(P))){H&&ve.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ue);const Ne=ae.update(P),Ge=P.material;if(Array.isArray(Ge)){const Be=Ne.groups;for(let je=0,Ve=Be.length;je<Ve;je++){const We=Be[je],rt=Ge[We.materialIndex];rt&&rt.visible&&h.push(P,Ne,rt,se,ve.z,We)}}else Ge.visible&&h.push(P,Ne,Ge,se,ve.z,null)}}const Re=P.children;for(let Ne=0,Ge=Re.length;Ne<Ge;Ne++)pt(Re[Ne],q,se,H)}function yt(P,q,se,H){const le=P.opaque,Re=P.transmissive,Ne=P.transparent;f.setupLightsView(se),Re.length>0&&si(le,q,se),H&&pe.viewport(S.copy(H)),le.length>0&&tt(le,q,se),Re.length>0&&tt(Re,q,se),Ne.length>0&&tt(Ne,q,se),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function si(P,q,se){const H=xe.isWebGL2;k===null&&(k=new Ci(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Zs:Ei,minFilter:Ao,samples:H&&r===!0?4:0})),m.getDrawingBufferSize(Z),H?k.setSize(Z.x,Z.y):k.setSize(Xa(Z.x),Xa(Z.y));const le=m.getRenderTarget();m.setRenderTarget(k),m.clear();const Re=m.toneMapping;m.toneMapping=Pn,tt(P,q,se),m.toneMapping=Re,A.updateMultisampleRenderTarget(k),A.updateRenderTargetMipmap(k),m.setRenderTarget(le)}function tt(P,q,se){const H=q.isScene===!0?q.overrideMaterial:null;for(let le=0,Re=P.length;le<Re;le++){const Ne=P[le],Ge=Ne.object,Be=Ne.geometry,je=H===null?Ne.material:H,Ve=Ne.group;Ge.layers.test(se.layers)&&vn(Ge,q,se,Be,je,Ve)}}function vn(P,q,se,H,le,Re){P.onBeforeRender(m,q,se,H,le,Re),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),le.onBeforeRender(m,q,se,H,P,Re),le.transparent===!0&&le.side===Yn?(le.side=Yt,le.needsUpdate=!0,m.renderBufferDirect(se,q,H,le,P,Re),le.side=fs,le.needsUpdate=!0,m.renderBufferDirect(se,q,H,le,P,Re),le.side=Yn):m.renderBufferDirect(se,q,H,le,P,Re),P.onAfterRender(m,q,se,H,le,Re)}function Gt(P,q,se){q.isScene!==!0&&(q=Ae);const H=b.get(P),le=f.state.lights,Re=f.state.shadowsArray,Ne=le.state.version,Ge=J.getParameters(P,le.state,Re,q,se),Be=J.getProgramCacheKey(Ge);let je=H.programs;H.environment=P.isMeshStandardMaterial?q.environment:null,H.fog=q.fog,H.envMap=(P.isMeshStandardMaterial?B:I).get(P.envMap||H.environment),je===void 0&&(P.addEventListener("dispose",Je),je=new Map,H.programs=je);let Ve=je.get(Be);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===Ne)return Bl(P,Ge),Ve}else Ge.uniforms=J.getUniforms(P),P.onBuild(se,Ge,m),P.onBeforeCompile(Ge,m),Ve=J.acquireProgram(Ge,Be),je.set(Be,Ve),H.uniforms=Ge.uniforms;const We=H.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(We.clippingPlanes=w.uniform),Bl(P,Ge),H.needsLights=Ld(P),H.lightsStateVersion=Ne,H.needsLights&&(We.ambientLightColor.value=le.state.ambient,We.lightProbe.value=le.state.probe,We.directionalLights.value=le.state.directional,We.directionalLightShadows.value=le.state.directionalShadow,We.spotLights.value=le.state.spot,We.spotLightShadows.value=le.state.spotShadow,We.rectAreaLights.value=le.state.rectArea,We.ltc_1.value=le.state.rectAreaLTC1,We.ltc_2.value=le.state.rectAreaLTC2,We.pointLights.value=le.state.point,We.pointLightShadows.value=le.state.pointShadow,We.hemisphereLights.value=le.state.hemi,We.directionalShadowMap.value=le.state.directionalShadowMap,We.directionalShadowMatrix.value=le.state.directionalShadowMatrix,We.spotShadowMap.value=le.state.spotShadowMap,We.spotLightMatrix.value=le.state.spotLightMatrix,We.spotLightMap.value=le.state.spotLightMap,We.pointShadowMap.value=le.state.pointShadowMap,We.pointShadowMatrix.value=le.state.pointShadowMatrix);const rt=Ve.getUniforms(),ri=eo.seqWithValue(rt.seq,We);return H.currentProgram=Ve,H.uniformsList=ri,Ve}function Bl(P,q){const se=b.get(P);se.outputEncoding=q.outputEncoding,se.instancing=q.instancing,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function Cd(P,q,se,H,le){q.isScene!==!0&&(q=Ae),A.resetTextureUnits();const Re=q.fog,Ne=H.isMeshStandardMaterial?q.environment:null,Ge=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Ti,Be=(H.isMeshStandardMaterial?B:I).get(H.envMap||Ne),je=H.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ve=!!H.normalMap&&!!se.attributes.tangent,We=!!se.morphAttributes.position,rt=!!se.morphAttributes.normal,ri=!!se.morphAttributes.color,Di=H.toneMapped?m.toneMapping:Pn,Ii=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,an=Ii!==void 0?Ii.length:0,Xe=b.get(H),Oi=f.state.lights;if(j===!0&&(G===!0||P!==E)){const Ot=P===E&&H.id===v;w.setState(H,P,Ot)}let at=!1;H.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Oi.state.version||Xe.outputEncoding!==Ge||le.isInstancedMesh&&Xe.instancing===!1||!le.isInstancedMesh&&Xe.instancing===!0||le.isSkinnedMesh&&Xe.skinning===!1||!le.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Be||H.fog===!0&&Xe.fog!==Re||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==w.numPlanes||Xe.numIntersection!==w.numIntersection)||Xe.vertexAlphas!==je||Xe.vertexTangents!==Ve||Xe.morphTargets!==We||Xe.morphNormals!==rt||Xe.morphColors!==ri||Xe.toneMapping!==Di||xe.isWebGL2===!0&&Xe.morphTargetsCount!==an)&&(at=!0):(at=!0,Xe.__version=H.version);let Vt=Xe.currentProgram;at===!0&&(Vt=Gt(H,q,le));let Nn=!1,Ss=!1,Po=!1;const At=Vt.getUniforms(),oi=Xe.uniforms;if(pe.useProgram(Vt.program)&&(Nn=!0,Ss=!0,Po=!0),H.id!==v&&(v=H.id,Ss=!0),Nn||E!==P){if(At.setValue(z,"projectionMatrix",P.projectionMatrix),xe.logarithmicDepthBuffer&&At.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),E!==P&&(E=P,Ss=!0,Po=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Ot=At.map.cameraPosition;Ot!==void 0&&Ot.setValue(z,ve.setFromMatrixPosition(P.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&At.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||le.isSkinnedMesh)&&At.setValue(z,"viewMatrix",P.matrixWorldInverse)}if(le.isSkinnedMesh){At.setOptional(z,le,"bindMatrix"),At.setOptional(z,le,"bindMatrixInverse");const Ot=le.skeleton;Ot&&(xe.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),At.setValue(z,"boneTexture",Ot.boneTexture,A),At.setValue(z,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Lo=se.morphAttributes;if((Lo.position!==void 0||Lo.normal!==void 0||Lo.color!==void 0&&xe.isWebGL2===!0)&&re.update(le,se,H,Vt),(Ss||Xe.receiveShadow!==le.receiveShadow)&&(Xe.receiveShadow=le.receiveShadow,At.setValue(z,"receiveShadow",le.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(oi.envMap.value=Be,oi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Ss&&(At.setValue(z,"toneMappingExposure",m.toneMappingExposure),Xe.needsLights&&Pd(oi,Po),Re&&H.fog===!0&&fe.refreshFogUniforms(oi,Re),fe.refreshMaterialUniforms(oi,H,X,D,k),eo.upload(z,Xe.uniformsList,oi,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(eo.upload(z,Xe.uniformsList,oi,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&At.setValue(z,"center",le.center),At.setValue(z,"modelViewMatrix",le.modelViewMatrix),At.setValue(z,"normalMatrix",le.normalMatrix),At.setValue(z,"modelMatrix",le.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ot=H.uniformsGroups;for(let Ro=0,Rd=Ot.length;Ro<Rd;Ro++)if(xe.isWebGL2){const Ul=Ot[Ro];Te.update(Ul,Vt),Te.bind(Ul,Vt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vt}function Pd(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Ld(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(P,q,se){b.get(P.texture).__webglTexture=q,b.get(P.depthTexture).__webglTexture=se;const H=b.get(P);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=se===void 0,H.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,q){const se=b.get(P);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,se=0){x=P,_=q,y=se;let H=!0,le=null,Re=!1,Ne=!1;if(P){const Be=b.get(P);Be.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),H=!1):Be.__webglFramebuffer===void 0?A.setupRenderTarget(P):Be.__hasExternalTextures&&A.rebindTextures(P,b.get(P.texture).__webglTexture,b.get(P.depthTexture).__webglTexture);const je=P.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ne=!0);const Ve=b.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(le=Ve[q],Re=!0):xe.isWebGL2&&P.samples>0&&A.useMultisampledRTT(P)===!1?le=b.get(P).__webglMultisampledFramebuffer:le=Ve,S.copy(P.viewport),R.copy(P.scissor),M=P.scissorTest}else S.copy(O).multiplyScalar(X).floor(),R.copy(Y).multiplyScalar(X).floor(),M=K;if(pe.bindFramebuffer(36160,le)&&xe.drawBuffers&&H&&pe.drawBuffers(P,le),pe.viewport(S),pe.scissor(R),pe.setScissorTest(M),Re){const Be=b.get(P.texture);z.framebufferTexture2D(36160,36064,34069+q,Be.__webglTexture,se)}else if(Ne){const Be=b.get(P.texture),je=q||0;z.framebufferTextureLayer(36160,36064,Be.__webglTexture,se||0,je)}v=-1},this.readRenderTargetPixels=function(P,q,se,H,le,Re,Ne){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){pe.bindFramebuffer(36160,Ge);try{const Be=P.texture,je=Be.format,Ve=Be.type;if(je!==tn&&me.convert(je)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===Zs&&(he.has("EXT_color_buffer_half_float")||xe.isWebGL2&&he.has("EXT_color_buffer_float"));if(Ve!==Ei&&me.convert(Ve)!==z.getParameter(35738)&&!(Ve===yi&&(xe.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-H&&se>=0&&se<=P.height-le&&z.readPixels(q,se,H,le,me.convert(je),me.convert(Ve),Re)}finally{const Be=x!==null?b.get(x).__webglFramebuffer:null;pe.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(P,q,se=0){const H=Math.pow(2,-se),le=Math.floor(q.image.width*H),Re=Math.floor(q.image.height*H);A.setTexture2D(q,0),z.copyTexSubImage2D(3553,se,0,0,P.x,P.y,le,Re),pe.unbindTexture()},this.copyTextureToTexture=function(P,q,se,H=0){const le=q.image.width,Re=q.image.height,Ne=me.convert(se.format),Ge=me.convert(se.type);A.setTexture2D(se,0),z.pixelStorei(37440,se.flipY),z.pixelStorei(37441,se.premultiplyAlpha),z.pixelStorei(3317,se.unpackAlignment),q.isDataTexture?z.texSubImage2D(3553,H,P.x,P.y,le,Re,Ne,Ge,q.image.data):q.isCompressedTexture?z.compressedTexSubImage2D(3553,H,P.x,P.y,q.mipmaps[0].width,q.mipmaps[0].height,Ne,q.mipmaps[0].data):z.texSubImage2D(3553,H,P.x,P.y,Ne,Ge,q.image),H===0&&se.generateMipmaps&&z.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(P,q,se,H,le=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=P.max.x-P.min.x+1,Ne=P.max.y-P.min.y+1,Ge=P.max.z-P.min.z+1,Be=me.convert(H.format),je=me.convert(H.type);let Ve;if(H.isData3DTexture)A.setTexture3D(H,0),Ve=32879;else if(H.isDataArrayTexture)A.setTexture2DArray(H,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,H.flipY),z.pixelStorei(37441,H.premultiplyAlpha),z.pixelStorei(3317,H.unpackAlignment);const We=z.getParameter(3314),rt=z.getParameter(32878),ri=z.getParameter(3316),Di=z.getParameter(3315),Ii=z.getParameter(32877),an=se.isCompressedTexture?se.mipmaps[0]:se.image;z.pixelStorei(3314,an.width),z.pixelStorei(32878,an.height),z.pixelStorei(3316,P.min.x),z.pixelStorei(3315,P.min.y),z.pixelStorei(32877,P.min.z),se.isDataTexture||se.isData3DTexture?z.texSubImage3D(Ve,le,q.x,q.y,q.z,Re,Ne,Ge,Be,je,an.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ve,le,q.x,q.y,q.z,Re,Ne,Ge,Be,an.data)):z.texSubImage3D(Ve,le,q.x,q.y,q.z,Re,Ne,Ge,Be,je,an),z.pixelStorei(3314,We),z.pixelStorei(32878,rt),z.pixelStorei(3316,ri),z.pixelStorei(3315,Di),z.pixelStorei(32877,Ii),le===0&&H.generateMipmaps&&z.generateMipmap(Ve),pe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?A.setTextureCube(P,0):P.isData3DTexture?A.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?A.setTexture2DArray(P,0):A.setTexture2D(P,0),pe.unbindTexture()},this.resetState=function(){_=0,y=0,x=null,pe.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ab extends Yf{}ab.prototype.isWebGL1Renderer=!0;class Kf{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new Kf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class lb extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class NS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new L;class Jf{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ku extends Rt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hu=new $e,Wu=new $e,Or=[],cb=new $e,Ds=new sn;class FS extends sn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ku(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let s=0;s<i;s++)this.setMatrixAt(s,cb)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Hu),Wu.multiplyMatrices(i,Hu),Ds.matrixWorld=Wu,Ds.raycast(e,Or);for(let o=0,a=Or.length;o<a;o++){const l=Or[o];l.instanceId=r,l.object=this,t.push(l)}Or.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ku(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Pl extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qu=new L,ju=new L,Xu=new $e,ga=new Sl,Nr=new or;class ub extends gt{constructor(e=new et,t=new Pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)qu.fromBufferAttribute(t,s-1),ju.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=qu.distanceTo(ju);e.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;Xu.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,f=new L,p=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=_,v=y-1;x<v;x+=p){const E=g.getX(x),S=g.getX(x+1);if(c.fromBufferAttribute(d,E),u.fromBufferAttribute(d,S),ga.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let x=_,v=y-1;x<v;x+=p){if(c.fromBufferAttribute(d,x),u.fromBufferAttribute(d,x+1),ga.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Yu=new L,Ku=new L;class Qf extends ub{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Yu.fromBufferAttribute(t,s),Ku.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Yu.distanceTo(Ku);e.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zf extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ju=new $e,Ka=new Sl,Fr=new or,zr=new L;class Qu extends gt{constructor(e=new et,t=new Zf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,e.ray.intersectsSphere(Fr)===!1)return;Ju.copy(s).invert(),Ka.copy(e.ray).applyMatrix4(Ju);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);zr.fromBufferAttribute(h,d),Zu(zr,d,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)zr.fromBufferAttribute(h,g),Zu(zr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zu(n,e,t,i,s,r,o){const a=Ka.distanceSqToPoint(n);if(a<t){const l=new L;Ka.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class zS extends Ut{constructor(e,t,i){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=i,this.magFilter=bt,this.minFilter=bt,this.generateMipmaps=!1,this.needsUpdate=!0}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new _e:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,s=[],r=[],o=[],a=new L,l=new $e;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_t(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(_t(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ll extends _n{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new _e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hb extends Ll{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Br=new L,_a=new Rl,va=new Rl,xa=new Rl;class fb extends _n{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Br.subVectors(s[0],s[1]).add(s[0]),c=Br);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Br.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),_a.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,d),va.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,d),xa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(_a.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),va.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),xa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(_a.calc(l),va.calc(l),xa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $u(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function db(n,e){const t=1-n;return t*t*e}function pb(n,e){return 2*(1-n)*n*e}function mb(n,e){return n*n*e}function ks(n,e,t,i){return db(n,e)+pb(n,t)+mb(n,i)}function gb(n,e){const t=1-n;return t*t*t*e}function _b(n,e){const t=1-n;return 3*t*t*n*e}function vb(n,e){return 3*(1-n)*n*n*e}function xb(n,e){return n*n*n*e}function Hs(n,e,t,i,s){return gb(n,e)+_b(n,t)+vb(n,i)+xb(n,s)}class $f extends _n{constructor(e=new _e,t=new _e,i=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new _e){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(e,s.x,r.x,o.x,a.x),Hs(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yb extends _n{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(e,s.x,r.x,o.x,a.x),Hs(e,s.y,r.y,o.y,a.y),Hs(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dl extends _n{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new _e;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mb extends _n{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ed extends _n{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ks(e,s.x,r.x,o.x),ks(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends _n{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ks(e,s.x,r.x,o.x),ks(e,s.y,r.y,o.y),ks(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set($u(a,l.x,c.x,u.x,h.x),$u(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new _e().fromArray(s))}return this}}var Il=Object.freeze({__proto__:null,ArcCurve:hb,CatmullRomCurve3:fb,CubicBezierCurve:$f,CubicBezierCurve3:yb,EllipseCurve:Ll,LineCurve:Dl,LineCurve3:Mb,QuadraticBezierCurve:ed,QuadraticBezierCurve3:td,SplineCurve:nd});class bb extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Dl(t,e))}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Il[s.type]().fromJSON(s))}return this}}class Ja extends bb{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Dl(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new ed(this.currentPoint.clone(),new _e(e,t),new _e(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new $f(this.currentPoint.clone(),new _e(e,t),new _e(i,s),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new nd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Ll(e,t,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class id extends et{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=_t(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new L,f=new _e,p=new L,g=new L,m=new L;let d=0,_=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:d=e[y+1].x-e[y].x,_=e[y+1].y-e[y].y,p.x=_*1,p.y=-d,p.z=_*0,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:d=e[y+1].x-e[y].x,_=e[y+1].y-e[y].y,p.x=_*1,p.y=-d,p.z=_*0,g.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(g)}for(let y=0;y<=t;y++){const x=i+y*u*s,v=Math.sin(x),E=Math.cos(x);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*v,h.y=e[S].y,h.z=e[S].x*E,o.push(h.x,h.y,h.z),f.x=y/t,f.y=S/(e.length-1),a.push(f.x,f.y);const R=l[3*S+0]*v,M=l[3*S+1],C=l[3*S+0]*E;c.push(R,M,C)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const v=x+y*e.length,E=v,S=v+e.length,R=v+e.length+1,M=v+1;r.push(E,S,M),r.push(R,M,S)}this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("uv",new Ie(a,2)),this.setAttribute("normal",new Ie(c,3))}static fromJSON(e){return new id(e.points,e.segments,e.phiStart,e.phiLength)}}class sd extends et{constructor(e=1,t=8,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,u=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(l,2))}static fromJSON(e){return new sd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ol extends et{constructor(e=1,t=1,i=1,s=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const m=[],d=i/2;let _=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(p,2));function y(){const v=new L,E=new L;let S=0;const R=(t-e)/i;for(let M=0;M<=r;M++){const C=[],D=M/r,X=D*(t-e)+e;for(let ne=0;ne<=s;ne++){const V=ne/s,O=V*l+a,Y=Math.sin(O),K=Math.cos(O);E.x=X*Y,E.y=-D*i+d,E.z=X*K,h.push(E.x,E.y,E.z),v.set(Y,R,K).normalize(),f.push(v.x,v.y,v.z),p.push(V,1-D),C.push(g++)}m.push(C)}for(let M=0;M<s;M++)for(let C=0;C<r;C++){const D=m[C][M],X=m[C+1][M],ne=m[C+1][M+1],V=m[C][M+1];u.push(D,X,V),u.push(X,ne,V),S+=6}c.addGroup(_,S,0),_+=S}function x(v){const E=g,S=new _e,R=new L;let M=0;const C=v===!0?e:t,D=v===!0?1:-1;for(let ne=1;ne<=s;ne++)h.push(0,d*D,0),f.push(0,D,0),p.push(.5,.5),g++;const X=g;for(let ne=0;ne<=s;ne++){const O=ne/s*l+a,Y=Math.cos(O),K=Math.sin(O);R.x=C*K,R.y=d*D,R.z=C*Y,h.push(R.x,R.y,R.z),f.push(0,D,0),S.x=Y*.5+.5,S.y=K*.5*D+.5,p.push(S.x,S.y),g++}for(let ne=0;ne<s;ne++){const V=E+ne,O=X+ne;v===!0?u.push(O,O+1,V):u.push(O+1,O,V),M+=3}c.addGroup(_,M,v===!0?1:2),_+=M}}static fromJSON(e){return new Ol(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rd extends Ol{constructor(e=1,t=1,i=8,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new rd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ws extends et{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new L,v=new L,E=new L;for(let S=0;S<t.length;S+=3)p(t[S+0],x),p(t[S+1],v),p(t[S+2],E),l(x,v,E,y)}function l(y,x,v,E){const S=E+1,R=[];for(let M=0;M<=S;M++){R[M]=[];const C=y.clone().lerp(v,M/S),D=x.clone().lerp(v,M/S),X=S-M;for(let ne=0;ne<=X;ne++)ne===0&&M===S?R[M][ne]=C:R[M][ne]=C.clone().lerp(D,ne/X)}for(let M=0;M<S;M++)for(let C=0;C<2*(S-M)-1;C++){const D=Math.floor(C/2);C%2===0?(f(R[M][D+1]),f(R[M+1][D]),f(R[M][D])):(f(R[M][D+1]),f(R[M+1][D+1]),f(R[M+1][D]))}}function c(y){const x=new L;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const y=new L;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=d(y)/2/Math.PI+.5,E=_(y)/Math.PI+.5;o.push(v,1-E)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],E=o[y+4],S=Math.max(x,v,E),R=Math.min(x,v,E);S>.9&&R<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const y=new L,x=new L,v=new L,E=new L,S=new _e,R=new _e,M=new _e;for(let C=0,D=0;C<r.length;C+=9,D+=6){y.set(r[C+0],r[C+1],r[C+2]),x.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),S.set(o[D+0],o[D+1]),R.set(o[D+2],o[D+3]),M.set(o[D+4],o[D+5]),E.copy(y).add(x).add(v).divideScalar(3);const X=d(E);m(S,D+0,y,X),m(R,D+2,x,X),m(M,D+4,v,X)}}function m(y,x,v,E){E<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=E/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new ws(e.vertices,e.indices,e.radius,e.details)}}class od extends ws{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new od(e.radius,e.detail)}}const Ur=new L,Gr=new L,ya=new L,Vr=new dn;class BS extends et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Zr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:d,c:_}=Vr;if(m.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Vr.getNormal(ya),h[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,h[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=h[y],E=h[x],S=Vr[u[y]],R=Vr[u[x]],M=`${v}_${E}`,C=`${E}_${v}`;C in f&&f[C]?(ya.dot(f[C].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(R.x,R.y,R.z)),f[C]=null):M in f||(f[M]={index0:c[y],index1:c[x],normal:ya.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:d}=f[g];Ur.fromBufferAttribute(a,m),Gr.fromBufferAttribute(a,d),p.push(Ur.x,Ur.y,Ur.z),p.push(Gr.x,Gr.y,Gr.z)}this.setAttribute("position",new Ie(p,3))}}}class Ws extends Ja{constructor(e){super(e),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ja().fromJSON(s))}return this}}const wb={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=ad(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(i&&(r=Cb(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return er(r,o,t,a,l,p,0),o}};function ad(n,e,t,i,s){let r,o;if(s===Ub(n,e,t,i)>0)for(r=e;r<t;r+=i)o=eh(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=eh(r,n[r],n[r+1],o);return o&&Co(o,o.next)&&(nr(o),o=o.next),o}function Pi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Co(t,t.next)||st(t.prev,t,t.next)===0)){if(nr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function er(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Ib(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Ab(n,i,s,r):Sb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),nr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Eb(Pi(n),e,t),er(n,e,t,i,s,r,2)):o===2&&Tb(n,e,t,i,s,r):er(Pi(n),e,t,i,s,r,1);break}}}function Sb(n){const e=n.prev,t=n,i=n.next;if(st(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&es(s,a,r,l,o,c,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ab(n,e,t,i){const s=n.prev,r=n,o=n.next;if(st(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,m=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,_=Qa(p,g,e,t,i),y=Qa(m,d,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=_&&v&&v.z<=y;){if(x.x>=p&&x.x<=m&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&es(a,u,l,h,c,f,x.x,x.y)&&st(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=m&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&es(a,u,l,h,c,f,v.x,v.y)&&st(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=p&&x.x<=m&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&es(a,u,l,h,c,f,x.x,x.y)&&st(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=m&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&es(a,u,l,h,c,f,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Eb(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Co(s,r)&&ld(s,i,i.next,r)&&tr(s,r)&&tr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),nr(i),nr(i.next),i=n=r),i=i.next}while(i!==n);return Pi(i)}function Tb(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fb(o,a)){let l=cd(o,a);o=Pi(o,o.next),l=Pi(l,l.next),er(o,e,t,i,s,r,0),er(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Cb(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ad(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Nb(c));for(s.sort(Pb),r=0;r<s.length;r++)t=Lb(s[r],t);return t}function Pb(n,e){return n.x-e.x}function Lb(n,e){const t=Rb(n,e);if(!t)return e;const i=cd(t,n);return Pi(i,i.next),Pi(t,t.next)}function Rb(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&es(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),tr(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Db(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Db(n,e){return st(n.prev,n,e.prev)<0&&st(e.next,n,n.next)<0}function Ib(n,e,t,i){let s=n;do s.z===0&&(s.z=Qa(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ob(s)}function Ob(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Qa(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Nb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function es(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Fb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!zb(n,e)&&(tr(n,e)&&tr(e,n)&&Bb(n,e)&&(st(n.prev,n,e.prev)||st(n,e.prev,e))||Co(n,e)&&st(n.prev,n,n.next)>0&&st(e.prev,e,e.next)>0)}function st(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Co(n,e){return n.x===e.x&&n.y===e.y}function ld(n,e,t,i){const s=Hr(st(n,e,t)),r=Hr(st(n,e,i)),o=Hr(st(t,i,n)),a=Hr(st(t,i,e));return!!(s!==r&&o!==a||s===0&&kr(n,t,e)||r===0&&kr(n,i,e)||o===0&&kr(t,n,i)||a===0&&kr(t,e,i))}function kr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Hr(n){return n>0?1:n<0?-1:0}function zb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ld(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function tr(n,e){return st(n.prev,n,n.next)<0?st(n,e,n.next)>=0&&st(n,n.prev,e)>=0:st(n,e,n.prev)<0||st(n,n.next,e)<0}function Bb(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function cd(n,e){const t=new Za(n.i,n.x,n.y),i=new Za(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function eh(n,e,t,i){const s=new Za(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Za(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ub(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Rn{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Rn.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];th(e),nh(i,e);let o=e.length;t.forEach(th);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,nh(i,t[l]);const a=wb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function th(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function nh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ud extends et{constructor(e=new Ws([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ie(s,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Gb;let x,v=!1,E,S,R,M;_&&(x=_.getSpacedPoints(u),v=!0,f=!1,E=_.computeFrenetFrames(u,!1),S=new L,R=new L,M=new L),f||(d=0,p=0,g=0,m=0);const C=a.extractPoints(c);let D=C.shape;const X=C.holes;if(!Rn.isClockWise(D)){D=D.reverse();for(let b=0,A=X.length;b<A;b++){const I=X[b];Rn.isClockWise(I)&&(X[b]=I.reverse())}}const V=Rn.triangulateShape(D,X),O=D;for(let b=0,A=X.length;b<A;b++){const I=X[b];D=D.concat(I)}function Y(b,A,I){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().multiplyScalar(I).add(b)}const K=D.length,$=V.length;function j(b,A,I){let B,U,te;const ae=b.x-A.x,J=b.y-A.y,fe=I.x-b.x,ie=I.y-b.y,T=ae*ae+J*J,w=ae*ie-J*fe;if(Math.abs(w)>Number.EPSILON){const N=Math.sqrt(T),Q=Math.sqrt(fe*fe+ie*ie),re=A.x-J/N,de=A.y+ae/N,be=I.x-ie/Q,me=I.y+fe/Q,ee=((be-re)*ie-(me-de)*fe)/(ae*ie-J*fe);B=re+ae*ee-b.x,U=de+J*ee-b.y;const Te=B*B+U*U;if(Te<=2)return new _e(B,U);te=Math.sqrt(Te/2)}else{let N=!1;ae>Number.EPSILON?fe>Number.EPSILON&&(N=!0):ae<-Number.EPSILON?fe<-Number.EPSILON&&(N=!0):Math.sign(J)===Math.sign(ie)&&(N=!0),N?(B=-J,U=ae,te=Math.sqrt(T)):(B=ae,U=J,te=Math.sqrt(T/2))}return new _e(B/te,U/te)}const G=[];for(let b=0,A=O.length,I=A-1,B=b+1;b<A;b++,I++,B++)I===A&&(I=0),B===A&&(B=0),G[b]=j(O[b],O[I],O[B]);const k=[];let ue,Z=G.concat();for(let b=0,A=X.length;b<A;b++){const I=X[b];ue=[];for(let B=0,U=I.length,te=U-1,ae=B+1;B<U;B++,te++,ae++)te===U&&(te=0),ae===U&&(ae=0),ue[B]=j(I[B],I[te],I[ae]);k.push(ue),Z=Z.concat(ue)}for(let b=0;b<d;b++){const A=b/d,I=p*Math.cos(A*Math.PI/2),B=g*Math.sin(A*Math.PI/2)+m;for(let U=0,te=O.length;U<te;U++){const ae=Y(O[U],G[U],B);ce(ae.x,ae.y,-I)}for(let U=0,te=X.length;U<te;U++){const ae=X[U];ue=k[U];for(let J=0,fe=ae.length;J<fe;J++){const ie=Y(ae[J],ue[J],B);ce(ie.x,ie.y,-I)}}}const ve=g+m;for(let b=0;b<K;b++){const A=f?Y(D[b],Z[b],ve):D[b];v?(R.copy(E.normals[0]).multiplyScalar(A.x),S.copy(E.binormals[0]).multiplyScalar(A.y),M.copy(x[0]).add(R).add(S),ce(M.x,M.y,M.z)):ce(A.x,A.y,0)}for(let b=1;b<=u;b++)for(let A=0;A<K;A++){const I=f?Y(D[A],Z[A],ve):D[A];v?(R.copy(E.normals[b]).multiplyScalar(I.x),S.copy(E.binormals[b]).multiplyScalar(I.y),M.copy(x[b]).add(R).add(S),ce(M.x,M.y,M.z)):ce(I.x,I.y,h/u*b)}for(let b=d-1;b>=0;b--){const A=b/d,I=p*Math.cos(A*Math.PI/2),B=g*Math.sin(A*Math.PI/2)+m;for(let U=0,te=O.length;U<te;U++){const ae=Y(O[U],G[U],B);ce(ae.x,ae.y,h+I)}for(let U=0,te=X.length;U<te;U++){const ae=X[U];ue=k[U];for(let J=0,fe=ae.length;J<fe;J++){const ie=Y(ae[J],ue[J],B);v?ce(ie.x,ie.y+x[u-1].y,x[u-1].x+I):ce(ie.x,ie.y,h+I)}}}Ae(),W();function Ae(){const b=s.length/3;if(f){let A=0,I=K*A;for(let B=0;B<$;B++){const U=V[B];he(U[2]+I,U[1]+I,U[0]+I)}A=u+d*2,I=K*A;for(let B=0;B<$;B++){const U=V[B];he(U[0]+I,U[1]+I,U[2]+I)}}else{for(let A=0;A<$;A++){const I=V[A];he(I[2],I[1],I[0])}for(let A=0;A<$;A++){const I=V[A];he(I[0]+K*u,I[1]+K*u,I[2]+K*u)}}i.addGroup(b,s.length/3-b,0)}function W(){const b=s.length/3;let A=0;z(O,A),A+=O.length;for(let I=0,B=X.length;I<B;I++){const U=X[I];z(U,A),A+=U.length}i.addGroup(b,s.length/3-b,1)}function z(b,A){let I=b.length;for(;--I>=0;){const B=I;let U=I-1;U<0&&(U=b.length-1);for(let te=0,ae=u+d*2;te<ae;te++){const J=K*te,fe=K*(te+1),ie=A+B+J,T=A+U+J,w=A+U+fe,N=A+B+fe;xe(ie,T,w,N)}}}function ce(b,A,I){l.push(b),l.push(A),l.push(I)}function he(b,A,I){pe(b),pe(A),pe(I);const B=s.length/3,U=y.generateTopUV(i,s,B-3,B-2,B-1);Me(U[0]),Me(U[1]),Me(U[2])}function xe(b,A,I,B){pe(b),pe(A),pe(B),pe(A),pe(I),pe(B);const U=s.length/3,te=y.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);Me(te[0]),Me(te[1]),Me(te[3]),Me(te[1]),Me(te[2]),Me(te[3])}function pe(b){s.push(l[b*3+0]),s.push(l[b*3+1]),s.push(l[b*3+2])}function Me(b){r.push(b.x),r.push(b.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Vb(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Il[s.type]().fromJSON(s)),new ud(i,e.options)}}const Gb={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new _e(r,o),new _e(a,l),new _e(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],m=e[r*3],d=e[r*3+1],_=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-h),new _e(f,1-g),new _e(m,1-_)]:[new _e(a,1-l),new _e(u,1-h),new _e(p,1-g),new _e(d,1-_)]}};function Vb(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class hd extends ws{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hd(e.radius,e.detail)}}class fd extends ws{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fd(e.radius,e.detail)}}class dd extends et{constructor(e=.5,t=1,i=8,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,p=new L,g=new _e;for(let m=0;m<=s;m++){for(let d=0;d<=i;d++){const _=r+d/i*o;p.x=h*Math.cos(_),p.y=h*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let m=0;m<s;m++){const d=m*(i+1);for(let _=0;_<i;_++){const y=_+d,x=y,v=y+i+1,E=y+i+2,S=y+1;a.push(x,v,S),a.push(v,E,S)}}this.setIndex(a),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(u,2))}static fromJSON(e){return new dd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pd extends et{constructor(e=new Ws([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(r,3)),this.setAttribute("uv",new Ie(o,2));function c(u){const h=s.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;Rn.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,_=g.length;d<_;d++){const y=g[d];Rn.isClockWise(y)===!0&&(g[d]=y.reverse())}const m=Rn.triangulateShape(p,g);for(let d=0,_=g.length;d<_;d++){const y=g[d];p=p.concat(y)}for(let d=0,_=p.length;d<_;d++){const y=p[d];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let d=0,_=m.length;d<_;d++){const y=m[d],x=y[0]+h,v=y[1]+h,E=y[2]+h;i.push(x,v,E),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return kb(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new pd(i,e.curveSegments)}}function kb(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Nl extends et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,p=[],g=[],m=[],d=[];for(let _=0;_<=i;_++){const y=[],x=_/i;let v=0;_==0&&o==0?v=.5/t:_==i&&l==Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const S=E/t;h.x=-e*Math.cos(s+S*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+S*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),d.push(S+v,1-x),y.push(c++)}u.push(y)}for(let _=0;_<i;_++)for(let y=0;y<t;y++){const x=u[_][y+1],v=u[_][y],E=u[_+1][y],S=u[_+1][y+1];(_!==0||o>0)&&p.push(x,v,S),(_!==i-1||l<Math.PI)&&p.push(v,E,S)}this.setIndex(p),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(m,3)),this.setAttribute("uv",new Ie(d,2))}static fromJSON(e){return new Nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class md extends ws{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new md(e.radius,e.detail)}}class gd extends et{constructor(e=1,t=.4,i=8,s=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const m=g/s*r,d=p/i*Math.PI*2;h.x=(e+t*Math.cos(d))*Math.cos(m),h.y=(e+t*Math.cos(d))*Math.sin(m),h.z=t*Math.sin(d),a.push(h.x,h.y,h.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const m=(s+1)*p+g-1,d=(s+1)*(p-1)+g-1,_=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(m,d,y),o.push(d,_,y)}this.setIndex(o),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}static fromJSON(e){return new gd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _d extends et{constructor(e=1,t=.4,i=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:o},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],c=[],u=[],h=new L,f=new L,p=new L,g=new L,m=new L,d=new L,_=new L;for(let x=0;x<=i;++x){const v=x/i*r*Math.PI*2;y(v,r,o,e,p),y(v+.01,r,o,e,g),d.subVectors(g,p),_.addVectors(g,p),m.crossVectors(d,_),_.crossVectors(m,d),m.normalize(),_.normalize();for(let E=0;E<=s;++E){const S=E/s*Math.PI*2,R=-t*Math.cos(S),M=t*Math.sin(S);h.x=p.x+(R*_.x+M*m.x),h.y=p.y+(R*_.y+M*m.y),h.z=p.z+(R*_.z+M*m.z),l.push(h.x,h.y,h.z),f.subVectors(h,p).normalize(),c.push(f.x,f.y,f.z),u.push(x/i),u.push(E/s)}}for(let x=1;x<=i;x++)for(let v=1;v<=s;v++){const E=(s+1)*(x-1)+(v-1),S=(s+1)*x+(v-1),R=(s+1)*x+v,M=(s+1)*(x-1)+v;a.push(E,S,M),a.push(S,R,M)}this.setIndex(a),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(u,2));function y(x,v,E,S,R){const M=Math.cos(x),C=Math.sin(x),D=E/v*x,X=Math.cos(D);R.x=S*(2+X)*.5*M,R.y=S*(2+X)*C*.5,R.z=S*Math.sin(D)*.5}}static fromJSON(e){return new _d(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class vd extends et{constructor(e=new td(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new _e;let u=new L;const h=[],f=[],p=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(p,2));function m(){for(let x=0;x<t;x++)d(x);d(r===!1?t:0),y(),_()}function d(x){u=e.getPointAt(x/t,u);const v=o.normals[x],E=o.binormals[x];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,M=Math.sin(R),C=-Math.cos(R);l.x=C*v.x+M*E.x,l.y=C*v.y+M*E.y,l.z=C*v.z+M*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function _(){for(let x=1;x<=t;x++)for(let v=1;v<=s;v++){const E=(s+1)*(x-1)+(v-1),S=(s+1)*x+(v-1),R=(s+1)*x+v,M=(s+1)*(x-1)+v;g.push(E,S,M),g.push(S,R,M)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=s;v++)c.x=x/t,c.y=v/s,p.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new vd(new Il[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class US extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new L,r=new L;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,p=h.count;for(let g=f,m=f+p;g<m;g+=3)for(let d=0;d<3;d++){const _=a.getX(g+d),y=a.getX(g+(d+1)%3);s.fromBufferAttribute(o,_),r.fromBufferAttribute(o,y),ih(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),ih(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ie(t,3))}}}function ih(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}class GS extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class VS extends On{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kS extends On{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class HS extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const lo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Hb{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Wb=new Hb;class Fl{constructor(e){this.manager=e!==void 0?e:Wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const An={};class qb extends Error{constructor(e,t){super(e),this.response=t}}class WS extends Fl{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=lo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:i,onError:s});return}An[e]=[],An[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=An[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){y();function y(){h.read().then(({done:x,value:v})=>{if(x)_.close();else{m+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let S=0,R=u.length;S<R;S++){const M=u[S];M.onProgress&&M.onProgress(E)}_.enqueue(v),y()}})}}});return new Response(d)}else throw new qb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{lo.add(e,c);const u=An[e];delete An[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=An[e];if(u===void 0)throw this.manager.itemError(e),c;delete An[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jb extends Fl{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=lo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=$s("img");function l(){u(),lo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Xb extends Fl{constructor(e){super(e)}load(e,t,i,s){const r=new Ut,o=new jb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class zl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ma=new $e,sh=new L,rh=new L;class xd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(sh),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oh=new $e,Is=new L,ba=new L;class Yb extends xd{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),i.position.copy(Is),ba.copy(i.position),ba.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ba),i.updateMatrixWorld(),s.makeTranslation(-Is.x,-Is.y,-Is.z),oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}}class qS extends zl{constructor(e,t,i=0,s=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Yb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kb extends xd{constructor(){super(new Hf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jS extends zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DefaultUp),this.updateMatrix(),this.target=new gt,this.shadow=new Kb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jb extends zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class XS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ah();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ah(){return(typeof performance>"u"?Date:performance).now()}class YS{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lh=new _e;class KS{constructor(e=new _e(1/0,1/0),t=new _e(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=lh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return lh.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class JS extends sn{constructor(e,t,i){const s=new Nl(t,4,2),r=new Al({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.light.updateMatrixWorld(),this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Wr=new Ms;class QS extends Qf{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new et;r.setIndex(new Rt(i,1)),r.setAttribute("position",new Rt(s,3)),super(r,new Pl({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Wr.setFromObject(this.object),Wr.isEmpty())return;const t=Wr.min,i=Wr.max,s=this.geometry.attributes.position,r=s.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=t.x,r[4]=i.y,r[5]=i.z,r[6]=t.x,r[7]=t.y,r[8]=i.z,r[9]=i.x,r[10]=t.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=t.z,r[15]=t.x,r[16]=i.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=i.x,r[22]=t.y,r[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ZS extends Qf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new et;s.setAttribute("position",new Ie(t,3)),s.setAttribute("color",new Ie(i,3));const r=new Pl({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new He,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class $S{constructor(){this.type="ShapePath",this.color=new He,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ja,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const y=[];for(let x=0,v=_.length;x<v;x++){const E=_[x],S=new Ws;S.curves=E.curves,y.push(S)}return y}function i(_,y){const x=y.length;let v=!1;for(let E=x-1,S=0;S<x;E=S++){let R=y[E],M=y[S],C=M.x-R.x,D=M.y-R.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(R=y[S],C=-C,M=y[E],D=-D),_.y<R.y||_.y>M.y)continue;if(_.y===R.y){if(_.x===R.x)return!0}else{const X=D*(_.x-R.x)-C*(_.y-R.y);if(X===0)return!0;if(X<0)continue;v=!v}}else{if(_.y!==R.y)continue;if(M.x<=_.x&&_.x<=R.x||R.x<=_.x&&_.x<=M.x)return!0}}return v}const s=Rn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Ws,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,m;f[g]=void 0,p[g]=[];for(let _=0,y=r.length;_<y;_++)a=r[_],m=a.getPoints(),o=s(m),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Ws,p:m},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:m[0]});if(!f[0])return t(r);if(f.length>1){let _=!1,y=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const E=p[x];for(let S=0;S<E.length;S++){const R=E[S];let M=!0;for(let C=0;C<f.length;C++)i(R.p,f[C].p)&&(x!==C&&y++,M?(M=!1,h[C].push(R)):_=!0);M&&h[x].push(R)}}y>0&&_===!1&&(p=h)}let d;for(let _=0,y=f.length;_<y;_++){l=f[_].s,c.push(l),d=p[_];for(let x=0,v=d.length;x<v;x++)l.holes.push(d[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);const Qb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAD////+/v4BAQHIyMghISECAgJ0dHR6enre3t4EBAQDAwPX19fi4uKmpqaAgIDQ0NA7OzsGBgYRERG1tbWVlZXV1dVzc3OCgoJmZmb39/cWFhZlZWU/Pz+xsbGFhYWOjo6KiopsbGx7e3uYmJhgYGCNjY0PDw8tLS0oKChbW1txcXEXFxfExMTS0tL9/f3s7OyoqKirq6va2tpNTU3t7e1/f38FBQWtra1MTExFRUWjo6MjIyNUVFTMzMzJycltbW3h4eEeHh5CQkLKysp+fn53d3cyMjLl5eX5+fm+vr4vLy/R0dELCwvY2NgJCQlfX19paWk5OTkAAAD///8BAQECAgIMDAwmJib+/v7f399qampXV1cODg79/f3Nzc3AwMBra2u6urqwsLAGBgb09PSKiooWFhYZGRnExMQ3NzfX19eampqQkJBkZGSOjo7o6OhoaGgjIyOcnJwEBAT6+vp5eXni4uJmZmYDAwNdXV0Lv2DMAAAAU3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/kc3SeAAAAFISURBVHhetZPFkuswFET72g4zDDMzMzPje5KDMMzM8PXj8caJ7UxWOVp0laoXqqN7URimkj/B1FaeLEJBBmRdQXuU/Jv1DUwhoj0yG5sN8PYANRUwx1JahepyYKTTxIPoUuLugZX4WPLt1OhBRus50CYxyZ+iLuCyDBGdh+BxLVB3VklcAtY+miDrClY26m70cBJ4GM3+NEQTDy1EcaIMkdvoIdreEbt4fuRcEOKcH6Rjlu5ojoclcoR7iQQFoj4i6qcBZCGqMag01DM0rF7meHBaGbtKJDhRhvMX9uoc+9LPw/f4BCa5QHxq2jNj/E2L9AlgltMcn0dw4clQWAwxK7wlhwKOlgGcrEA2eli1I7UOthFyQQ6YzMP1DWO3m2D3yZyh1bBvAds+YGd3Dxo6F459AP/+Q0M3cu+Bv/dCLP5eGLPw8hbkB8nyeaUUhyruAAAAAElFTkSuQmCC",Zb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACW1BMVEUAAAD///8CAgIPDw8BAQF1dXVsbGwLCwujo6NeXl43NzesrKzPz8+EhIQSEhIDAwNpaWnFxcXo6OhbW1vf398VFRU/Pz+YmJiXl5e7u7uUlJTi4uI2Njbn5+ccHBzQ0NApKSkwMDBSUlKDg4MeHh65ubmlpaVQUFB/f3+dnZ04ODgFBQUICAgtLS1XV1eqqqpRUVHd3d2Li4tOTk6GhobZ2dn8/Pz9/f14eHhaWlq3t7cHBweoqKgMDAzX19c7OztfX19FRUW+vr7s7OwvLy8KCgohISF5eXnU1NR6enqRkZF2dnbAwMB9fX1jY2Ourq6Ojo7g4OAQEBD09PSwsLANDQ0ZGRnIyMjS0tK4uLhdXV1KSkrl5eVnZ2fW1tZvb29NTU2FhYXw8PBUVFQUFBRAQEAuLi49PT3z8/PHx8cRERGnp6fExMTY2Nj39/cjIyNGRkbMzMxcXFyBgYGenp68vLyQkJC0tLQrKysJCQkbGxsODg5gYGCampp7e3s6Ojr5+fnOzs6/v78XFxdPT0/GxsampqbT09MgICAGBga2trYlJSU5OTm1tbWkpKQyMjKgoKDKyspwcHAkJCQYGBiSkpIAAAABAQERERE4ODhZWVkbGxtycnJlZWVTU1MUFBRISEiAgIBEREShoaEzMzNqamqXl5cmJibBwcHFxcWOjo5NTU0WFhYJCQkxMTGWlpYtLS2ZmZkvLy80NDSHh4fd3d1oaGgCAgILCwtUVFSUlJTDw8NiYmJYWFjGxsY7OzvExMRKSkoTExOKioqQkJCwsLC1tbU9PT3m5uZ5kJL/AAAAlnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v6TC5kUAAAB5klEQVR4XqWTU5MkURSE81ZV0zbGto21bdu2bfP0GEvbNn7WRk/09lRXd0w/7PeQFRmnHu7NmwcACGEIkPrIl/okjk8MESikFFIQST3EcBgIxXA1FDwHKIYCECCC+jRvhJaaZgH6ss8w5ogG9O/UzebWgut56NS2VDNd+BYiJQUyfg27W4THqa8b0idRMDJCWGVjk15ukm/JzVK9HaQqyYEgzWHIGH9jXYYDKeWDK4qVPGKZnW3xsSqoKxdp5dKgOHr29KbRd2v0nfvUMeU20NL27kl0UGkjR3lcQGaqTGkDxrnSx6f1h0Gon0aECRNvQGauuAryTi588DApeWrkNRdMn2Ga6QiwL845c0vmzb9XzEwLNR7r4sgPS+xLS5ctX7Hy0Srl6jVr5S/WmauK1m+Q+8V96P5YtlFNcDOWBdpcbpP0QUC+M9sOzqhJ2boN4LfXuHdE9yFIRLa695Xf6fefzPadu7p6rxEX3Yfde/aqAmwf9rMD1oM8wBkgRkD1ofzDJnYEyqPWY8fdQEwfTpysdz4/ZYHrtOyV13Mmpg9BMjh0b8724NyH85+SS71x+nDhouGr5hsu/cBPXchL+8AX2tFq4cBfRlvNFYQHImp5ILdWEADoC/SIC/efixOfxMubcP3/Anriqm2DBhxnAAAAAElFTkSuQmCC",$b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAChVBMVEUAAAD///8BAQECAgIDAwPExMS+vr4ZGRmxsbHLy8uampoSEhLIyMhnZ2eXl5dOTk7e3t4mJiY1NTVMTEwwMDCwsLAfHx9WVlYMDAzo6Oinp6cgICBmZmbPz8+EhISCgoKfn58LCwshISFCQkLf399VVVW4uLgkJCTFxcVFRUUJCQlNTU2pqakjIyMUFBTw8PCYmJiFhYWUlJRqampISEg4ODgPDw91dXU0NDSdnZ0RERGzs7OKiopERERubm7y8vKMjIzHx8fQ0NAODg6mpqY3NzeDg4OIiIjz8/Ovr6/V1dVYWFjg4OAuLi6Pj4+Li4vk5OQyMjJ/f3+srKyZmZlkZGTn5+dHR0eWlpZsbGwHBwcTExNJSUnGxsZKSkopKSnp6ekGBgYvLy/t7e3a2trJycksLCwtLS29vb1fX1+1tbWrq6scHBxTU1N6enphYWHc3Ny8vLwoKCiSkpJXV1fj4+P9/f1vb29BQUFoaGjx8fG6uroQEBDs7OwNDQ2BgYGTk5M6OjqOjo5lZWV9fX3b29srKyt7e3s8PDz6+vo9PT2qqqoEBAS/v79dXV0+Pj7R0dEWFhZ4eHgFBQUiIiKgoKAqKiptbW3v7+/Dw8N2dnZAQEBwcHAKCgoAAABDQ0Ojo6MODg4KCgoBAQFdXV03NzdISEgJCQlaWlq4uLgMDAxRUVE1NTXb29vDw8OJiYlFRUXJyckbGxtSUlIfHx97e3s4ODhoaGiNjY0aGhpYWFiFhYUSEhLOzs4oKCgUFBQVFRVAQEC7u7vv7+/y8vLMzMwDAwOenp6SkpIICAhXV1cjIyP6+vo6Ojqnp6dycnLq6uocHBxsbGw5OTm+vr6dnZ0CAgJ4QJ/JAAAAnnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/hQHg5sAAAH/SURBVHherZPTzyVBFMSru+can23b1tq2bdu2bZ7PXtu2/fdsOneSmdn7sA+7v3Q/VKWS6pOcxn+DyFt7G1wKoWpjXD1jfRyAZcJdVWsBmeEgBE+qgsPZ7xZA9dI24hfCMSsAPYPKFY44Q4Gnorq1rbnbEkRdJ6KYGuLS1wK1dXjU+rjZ1B+2Jnr1uuNnLeChx3o3hmYgplPWqK5jcreVqzNpj2x7mrqjsXPfhBFdStDhDkDtDuimqAdR6U3KquzN2HxkVte6Xl48rC9Quj8gLE0d59drRR/bsFOJ4QPu1xk6MPBhTW4UY2zQYAxhLAh4/801DzqU4QtGZo9mOaVAsC/LQ8F4uz0QHAYmxjI3JkOZkjh12vQZxjGUmf6z58wNMDuFNIsYy4ktW1isT1gXLY4UiGYhUixbXrjSZ5XZFAqN+CcErF7D1gJIYsnrUr4TT9sAHTfubczbtNnXumVrxXbGnPkvGoz7YPnxs+QC7XTBxiLhf+kyrlxNMOxD6DUCmqzYtTusyL2H7Ba6vbdYC6gDmZL27T9QmXHwUETBESDu6B/7cOzZc2o8jhMnqeXN27B35PF1gdMfWuijGYFl1PCJznz5qgY0IrIhKpIRnYn8cIiUdOgggOQ9a4rHuUKktavaa+3Pp0MAAvRLtXRIxeURAlxI/fev969w2SaA33EEtXR/l4bfAAAAAElFTkSuQmCC",ew="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA51BMVEUAAAD////+/v4CAgIDAwMHBwc8PDzn5+ddXV1eXl7d3d1QUFBOTk79/f27u7vIyMiGhobu7u4BAQH6+vr5+fnl5eWNjY07OzuVlZUFBQWRkZH///8CAgIAAAABAQH+/v78/Pz9/f0EBAT4+PgGBgb5+fn6+vqqqqoFBQX7+/sDAwMKCgrLy8uJiYlLS0vi4uIHBwdUVFQyMjIhISHh4eF6enpnZ2eTk5P09PRjY2OOjo7m5uZHR0fr6+sgICANDQ3p6eksLCyFhYXT09PMzMwZGRmSkpIYGBjc3Nz19fVzc3OVlZWZmZkfCldNAAAAG3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7Q4gSTAAABRUlEQVR4Xo1Th3KsMAyUufTe20o2XC3pvfee9/7/ewIaLh4Dk8tio5G17KyNRSSUzhQaNIo+uqJRcoJ4CP28iwqaBgolhMsSRBnp19inZQ+Wu9ZKPfQQ2js+uT4TFo9AwfblCsBNqBBk2xdI0Am/9iZrRONmNjJzNMo0QHAOY/uubRCZifwcCoTJKSB2GfC2N22tP2qdVlZdCwokAE7FeoNEGWEGDnAuHS7uNT5Ku6jTDhQODgl2PSH30KV5LevAghzYogfSekaIcShc+t1Hi5FWYaKGkaXyNrG8oiYRmQTn1PTbzAmXxvTaTm30WlgTKSj0ZX3jNlNwEQCYO/EKHvcPCWJ0Hp+eX14lh784RJvyDoMtTTmdVbcanxAWZq681RkBX2QH7CqFf/+bHHZHSOiKsP2tcSzXuKpxfCylw1vvD909BN+Y2FBm4NfNwQAAAABJRU5ErkJggg==",tw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABWVBMVEUAAAD///8BAQECAgIDAwP9/f0FBQUGBgb8/Pzx8fEEBAT6+vp3d3cICAj39/cHBwcUFBRAQECHh4eysrLb29u3t7cJCQkNDQ3p6elYWFidnZ3+/v5ra2vX19eurq4tLS1ycnIoKCgsLCzJycny8vLc3NwKCgovLy9vb29ZWVl8fHyXl5eLi4sTExMhISG/v799fX3v7+9CQkJGRkYrKyv4+PjPz8/5+flqamoZGRkgICAbGxtmZmbU1NSoqKjLy8vHx8fr6+tdXV1/f3/e3t6hoaE2NjakpKTR0dGvr6+WlpY1NTVzc3Pm5uY3Nzft7e0fHx++vr5kZGRSUlLw8PA9PT3o6OgaGhqQkJAXFxdXV1cAAAD///8CAgIBAQEcHBwLCwv7+/u5ubnX19d8fHz29vYICAjh4eEkJCSXl5cDAwO2trZhYWEFBQUqKioEBAT39/dBQUEPDw8QXwTDAAAAW3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+yyiEIQAAAXhJREFUeF6tkwWP4zAUhGdsB8tdZsZjZmZmfE6X6RD+P5ySNlI3aVWddJ8URSPZmYnePAASP+krp3sjh29IVuOf0OiKKOyfGodpnlpeEQVpzyDSkB87nEkyRJPck5j2DLGY4ACMMnhHXpXsLwogs4X5KpSHo7w7FCFrIfJTHnATu7L0i08kylkoCJ6Sq5gqc7ppiRxF+pwLuLCIDMrEwkOdjk8yOIYYUzJpBqOPfzvStzVKx9LaMXviZO336TPrgNdoGZ0NznH4fIF0SPICEwJehEoDXlq7XJIrtT7rjPn+Bq9d37hx0966jQiH53/HOgU6diDVoWRGVSede+R9uBXPdd1Qq/Y+REDZPhR5ZB9Dd+qDQb/Dalga5LOhzl14zhcvYTRe8TVUhz6sDXMUIRTe8O3gl9ywIvlqOdLs5Htu5/ugcVAutr48wv58H7T6/gEVDUBpFD9K1iJBmcSiYZDtQ3b+SqW6J/9r9dweyxapT5//dFl/7f0FEbdYPB/yQuAAAAAASUVORK5CYII=",nw={class:"w-full h-full"},iw=Li({__name:"SnowyBg",setup(n){const{random:e}=Math,t=pn(),i=pn();let s,r,o,a,l;const c=1e4,u=new et,h=[],f=new Float32Array(c*3),p=1e3,g=new Xb,m=g.load(Qb),d=g.load(Zb),_=g.load($b),y=g.load(ew),x=g.load(tw),v=[[[1,.2,.5],d,20],[[.95,.1,.5],_,15],[[.9,.05,.5],m,10],[[.85,0,.5],x,8],[[.8,0,.5],y,5]];let E=0,S=0;pl(()=>{D(),C(),ne()});function R(){const V=Date.now()*5e-5;a.position.x+=(E-a.position.x)*.05,a.position.y+=(-S-a.position.y)*.05,a.lookAt(o.position);for(let O=0;O<o.children.length;O++){const Y=o.children[O];Y instanceof Qu&&(Y.rotation.y=V*(O<4?O+1:-(O+1)))}for(let O=0;O<h.length;O++){const Y=v[O][0],K=360*(Y[0]+V)%360/360;h[O].color.setHSL(K,Y[1],Y[2])}}function M(V){V.isPrimary&&(E=V.clientX-s/2,S=V.clientY-r/2)}function C(){for(let V=0;V<c;V++)f[V*3]=e()*(2*p)-p,f[V*3+1]=e()*(2*p)-p,f[V*3+2]=e()*(2*p)-p;u.setAttribute("position",new Rt(f,3));for(let V=0;V<v.length;V++){const O=v[V][0],Y=v[V][1],K=v[V][2];h[V]=new Zf({color:new He().setHSL(O[0],O[1],O[2]),size:K,map:Y,blending:Ua,depthTest:!1,transparent:!0});const $=new Qu(u,h[V]);$.rotation.set(e()*6,e()*6,e()*6),o.add($)}}function D(){o=new lb;const{width:V,height:O}=i.value.getBoundingClientRect();s=V,r=O,a=new zt(75,s/r,1,2e3),a.position.z=1e3,l=new Yf({canvas:t.value,antialias:!0}),l.setSize(s,r),l.setPixelRatio(window.devicePixelRatio),o.add(new Jb(4210752))}let X=0;function ne(){R(),l.render(o,a),X=requestAnimationFrame(ne)}return ml(()=>{cancelAnimationFrame(X)}),(V,O)=>(jt(),$n("div",nw,[Wt("div",{ref_key:"canvasCon",ref:i,class:"w-full h-full",onPointermove:M},[Wt("canvas",{ref_key:"canvasDom",ref:t,class:"block w-full h-full"},null,512)],544)]))}});var qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function e1(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var s=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return n[i]}})}),t}function sw(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Md=sw,rw=typeof qr=="object"&&qr&&qr.Object===Object&&qr,ow=rw,aw=ow,lw=typeof self=="object"&&self&&self.Object===Object&&self,cw=aw||lw||Function("return this")(),bd=cw,uw=bd,hw=function(){return uw.Date.now()},fw=hw,dw=/\s/;function pw(n){for(var e=n.length;e--&&dw.test(n.charAt(e)););return e}var mw=pw,gw=mw,_w=/^\s+/;function vw(n){return n&&n.slice(0,gw(n)+1).replace(_w,"")}var xw=vw,yw=bd,Mw=yw.Symbol,wd=Mw,ch=wd,Sd=Object.prototype,bw=Sd.hasOwnProperty,ww=Sd.toString,Os=ch?ch.toStringTag:void 0;function Sw(n){var e=bw.call(n,Os),t=n[Os];try{n[Os]=void 0;var i=!0}catch{}var s=ww.call(n);return i&&(e?n[Os]=t:delete n[Os]),s}var Aw=Sw,Ew=Object.prototype,Tw=Ew.toString;function Cw(n){return Tw.call(n)}var Pw=Cw,uh=wd,Lw=Aw,Rw=Pw,Dw="[object Null]",Iw="[object Undefined]",hh=uh?uh.toStringTag:void 0;function Ow(n){return n==null?n===void 0?Iw:Dw:hh&&hh in Object(n)?Lw(n):Rw(n)}var Nw=Ow;function Fw(n){return n!=null&&typeof n=="object"}var zw=Fw,Bw=Nw,Uw=zw,Gw="[object Symbol]";function Vw(n){return typeof n=="symbol"||Uw(n)&&Bw(n)==Gw}var kw=Vw,Hw=xw,fh=Md,Ww=kw,dh=NaN,qw=/^[-+]0x[0-9a-f]+$/i,jw=/^0b[01]+$/i,Xw=/^0o[0-7]+$/i,Yw=parseInt;function Kw(n){if(typeof n=="number")return n;if(Ww(n))return dh;if(fh(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=fh(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=Hw(n);var t=jw.test(n);return t||Xw.test(n)?Yw(n.slice(2),t?2:8):qw.test(n)?dh:+n}var Jw=Kw,Qw=Md,wa=fw,ph=Jw,Zw="Expected a function",$w=Math.max,eS=Math.min;function tS(n,e,t){var i,s,r,o,a,l,c=0,u=!1,h=!1,f=!0;if(typeof n!="function")throw new TypeError(Zw);e=ph(e)||0,Qw(t)&&(u=!!t.leading,h="maxWait"in t,r=h?$w(ph(t.maxWait)||0,e):r,f="trailing"in t?!!t.trailing:f);function p(S){var R=i,M=s;return i=s=void 0,c=S,o=n.apply(M,R),o}function g(S){return c=S,a=setTimeout(_,e),u?p(S):o}function m(S){var R=S-l,M=S-c,C=e-R;return h?eS(C,r-M):C}function d(S){var R=S-l,M=S-c;return l===void 0||R>=e||R<0||h&&M>=r}function _(){var S=wa();if(d(S))return y(S);a=setTimeout(_,m(S))}function y(S){return a=void 0,f&&i?p(S):(i=s=void 0,o)}function x(){a!==void 0&&clearTimeout(a),c=0,i=l=s=a=void 0}function v(){return a===void 0?o:y(wa())}function E(){var S=wa(),R=d(S);if(i=arguments,s=this,l=S,R){if(a===void 0)return g(l);if(h)return clearTimeout(a),a=setTimeout(_,e),p(l)}return a===void 0&&(a=setTimeout(_,e)),o}return E.cancel=x,E.flush=v,E}var nS=tS;const iS=yd(nS);var Ad={exports:{}};(function(n){(function(){function e(m,d){document.addEventListener?m.addEventListener("scroll",d,!1):m.attachEvent("scroll",d)}function t(m){document.body?m():document.addEventListener?document.addEventListener("DOMContentLoaded",function d(){document.removeEventListener("DOMContentLoaded",d),m()}):document.attachEvent("onreadystatechange",function d(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",d),m())})}function i(m){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(m)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function s(m,d){m.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+d+";"}function r(m){var d=m.g.offsetWidth,_=d+100;return m.j.style.width=_+"px",m.i.scrollLeft=_,m.h.scrollLeft=m.h.scrollWidth+100,m.l!==d?(m.l=d,!0):!1}function o(m,d){function _(){var x=y;r(x)&&x.g.parentNode!==null&&d(x.l)}var y=m;e(m.h,_),e(m.i,_),r(m)}function a(m,d,_){d=d||{},_=_||window,this.family=m,this.style=d.style||"normal",this.weight=d.weight||"normal",this.stretch=d.stretch||"normal",this.context=_}var l=null,c=null,u=null,h=null;function f(m){return c===null&&(p(m)&&/Apple/.test(window.navigator.vendor)?(m=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!m&&603>parseInt(m[1],10)):c=!1),c}function p(m){return h===null&&(h=!!m.document.fonts),h}function g(m,d){var _=m.style,y=m.weight;if(u===null){var x=document.createElement("div");try{x.style.font="condensed 100px sans-serif"}catch{}u=x.style.font!==""}return[_,y,u?m.stretch:"","100px",d].join(" ")}a.prototype.load=function(m,d){var _=this,y=m||"BESbswy",x=0,v=d||3e3,E=new Date().getTime();return new Promise(function(S,R){if(p(_.context)&&!f(_.context)){var M=new Promise(function(D,X){function ne(){new Date().getTime()-E>=v?X(Error(""+v+"ms timeout exceeded")):_.context.document.fonts.load(g(_,'"'+_.family+'"'),y).then(function(V){1<=V.length?D():setTimeout(ne,25)},X)}ne()}),C=new Promise(function(D,X){x=setTimeout(function(){X(Error(""+v+"ms timeout exceeded"))},v)});Promise.race([C,M]).then(function(){clearTimeout(x),S(_)},R)}else t(function(){function D(){var Z;(Z=Y!=-1&&K!=-1||Y!=-1&&$!=-1||K!=-1&&$!=-1)&&((Z=Y!=K&&Y!=$&&K!=$)||(l===null&&(Z=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!Z&&(536>parseInt(Z[1],10)||parseInt(Z[1],10)===536&&11>=parseInt(Z[2],10))),Z=l&&(Y==j&&K==j&&$==j||Y==G&&K==G&&$==G||Y==k&&K==k&&$==k)),Z=!Z),Z&&(ue.parentNode!==null&&ue.parentNode.removeChild(ue),clearTimeout(x),S(_))}function X(){if(new Date().getTime()-E>=v)ue.parentNode!==null&&ue.parentNode.removeChild(ue),R(Error(""+v+"ms timeout exceeded"));else{var Z=_.context.document.hidden;(Z===!0||Z===void 0)&&(Y=ne.g.offsetWidth,K=V.g.offsetWidth,$=O.g.offsetWidth,D()),x=setTimeout(X,50)}}var ne=new i(y),V=new i(y),O=new i(y),Y=-1,K=-1,$=-1,j=-1,G=-1,k=-1,ue=document.createElement("div");ue.dir="ltr",s(ne,g(_,"sans-serif")),s(V,g(_,"serif")),s(O,g(_,"monospace")),ue.appendChild(ne.g),ue.appendChild(V.g),ue.appendChild(O.g),_.context.document.body.appendChild(ue),j=ne.g.offsetWidth,G=V.g.offsetWidth,k=O.g.offsetWidth,X(),o(ne,function(Z){Y=Z,D()}),s(ne,g(_,'"'+_.family+'",sans-serif')),o(V,function(Z){K=Z,D()}),s(V,g(_,'"'+_.family+'",serif')),o(O,function(Z){$=Z,D()}),s(O,g(_,'"'+_.family+'",monospace'))})})},n.exports=a})()})(Ad);var sS=Ad.exports;const rS=yd(sS),oS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA9CAYAAAAd1W/BAAAHuklEQVR4nN2aQVbbyBaG/1pBlHPeHGUFUVaAGL0h7hUgVoBZQYvhG8VZAdLszTArQF4BZtwD7BW0mPXM/ZXlMpZQ2dhIkOQ75+f3karuvXVVsnScGP3mLBaLUNKfKJYUSpqiMfphjCkNH35LWHgs6QINUBtTdPLbNYCFn2Gpqqu9iyvDn18eFh1g9moPUYB8PKCvyDH7pRvAwiPsAiXy84RGVvaeZ86Cz2t+yQawhlNsiGL5maOURWdawbxQ0iNyzA1/fgkoPsDswlNJofzcInu1CzUgxgC7QY5bw5+fGooO9bzNA9TGExoje8Vn8kCsVNUj0XH10zaAYmNJZyiRnznKVF3xEt8KMcfYKXL8YfjzU0GRbtGx/ExQxqIz7QGxH7FQz3wz/PlwKCzALlCieoFNcmQXXqgF4kTYDbKcm8Y4zi+wNZw3Bv8wqCdUdU8OUIDasPd3pmqbz+SBWLGqxbs4JeM/40tW5++QY2KMiT+kAatiLtAA+ZijEcootMS9EC+RdI02mRtjQq1oGZMbYxLDh3eDIs6wVFIoPxM0orgxvhNiJqovzPKEBsQotIJxI8w23XHJ+ZHhQ6+QOFT1bT5EAfKRoxFFTfFXQexE7YuPm3EYW0g6Ro4TQ4MMH3qBhBFmO57Ijy12hDKKmWkPiJ/olYu3MP5vLECOz4wrO28AiU6xIYrlZ45SCsh0AORItN/iQzVfgY0JBQa9GRIE2BkaolB+JigleaEDIVeiPRZvYU6slieAwKCDIXCo520eIB85Skk60xsgn801QptsXbyFeamqx63jyhiTCgzaGwLGqq54Ij9zlImCSVbib4Kc11iiOjsXb2HuGDtFjnOzuv0MejUEOsOGKEI+HpBddKaOIO81lqiOzZOQZ4pvhfn3WIQc39y8nQ1gcoBdoERSKD+3yC68UIeQ37f4mFwlvhNiLLA1zDPYkvWHJswJVd03AxSgNp5QpmrhM3UMNVxjieo8oJh8Jb4TYkTYPXI8MNceW/KiAUyIVS08lp85GqGMYCXeOdRxjSWqs9fiLcRJVH9q5IZXYK0waAkDz7BUUig/E5QRIFOPUMs1lqjO3ou3ECtVdUEdV2b1BLAYZAfZLRIhHznKmFioZ6jlGktU56DFW4hXqOUVWCsMA1LVO+R4QiOUMWGmnqGOALtDEdrkAcXUUOJ7Q9y/sQA5Pm/Gsg14xEM9M0ep+I1tc2CfUEOA3aEIbTJBg0PrWMW1DXA8EcseW2MbsMDXMMBg7wbpbUF3KEKb5Gbjy+oQiB2riu2YmNUrsMM2YIp/RY6Z2AEMzPFeIXeA2QIjtElu3rh4C/GH2Hfk+EFce2yNbUCi+mPCMUWXTCjUA+QNsDsUoU1y08HiLeTIVL2yO85N4wlmkB04wi5QG4WqR0ehjiBfgN2hCG2Sm44WbyFPoS1PAMuyARYGx2Lrqz5hkzGyO2KmN0CeALtDEdokNx0u3kKuBbaG+Ov1Ol4cYE6iqhFHqI1M1Y6Y6QCIn6m+LS256X7xtsH3yPFADnusxosGOAiQqHoP+ITaSFV9qZT4qyFupnoDctPx4i3kGWA3yHFLHnushrcBFoIE2HClT6hJiUboB8FLfCfEDFXdTl/RuWl8KXUFeVLVX/CuzMYrsGNrAxwEC7BU/i/KEg1JkOM/BdRcqP59dmIaX4AWg14NQUNVjThDbczEeRLl+IdCrY9YqGe+mJbvLYP2huARNkLHqI0puiRhoQ+CGheY44laAvwFBzXAQY5YXHH5G1GouvcKvSOruu6QY2Iar8CONzXAQcJEVSOOUBtjdEkRM70D1DPEviPHD3LbYy/opAEOEieqbo1PqI1M1Y6YqUeow9ZwgRyX5LTHXtBpAywkD7D/o/8iH6mqq1LinUMNheq35Ynx3IadN8BCAanqz+A27OJHqPNGkH+BrSG+d53eE2+B/KnqDZiiCLVRos7eIcgdSu3/DtiGQZ1DEanqDbhCmSodozZm4tag2Bw/GHIPsBvkuCWmPdaKQZ1DEakaDTCr11DOxWKh8jdiii4ZX+gAiJ/Kk7uNvhoQq/4cvjKNIhgzwEboCLVRqJpXaA+IO8ZOkeMPYthjrbxXA24pYoDXYFyA/YX+g3yM0SXzZ3oFxLzHIuT4YrbMfa8GTEzLmxjjUtW36wL5aspU7YiZtkBMG2MN433xlmw9eSjUEGtHAxgTqvrBIkCO/6F/0J/IRyrPo5OYsXbkbdJXA0LVH0UT0yiEMTfYADnmKGKc/S/toaqFnqE2SjRCtUYwL1H9B97c7PixxaBeoJgF5phRyBd8Cadi1a+U5dw0fhxhXKhq6x+jNuzih8zLcTt+hF0gxyXn7DEvBvUCxSywNRSyzsWpeyxCjolp7JBNGB+r2hHHqI2Zqh0xRKGeOTE7niIG9QJFL7A1FLLMxWFb5He0yTdOT/GtMHeAjdAR2sUTMQN8K8ui+oBiS+wTWkIx9h9hAj4+IuuO3Oy4T5sQJ1G1I46Qj3PTuKXa6LMBhepb9jP6jhI984RCCi3xvSFHqmrbf0IOGzMh5hjfSZ8NsAWcom1cUugIPxjyBFis6jtlSrwx/mr6bECi+iOpyQPFRviH0lsDLDQhU/uz3G7TmAZM8Q+l1wZYaEKi6j79iuZojFIWX+Ifzr/c809OB6bBYQAAAABJRU5ErkJggg==",aS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE2UlEQVR4nO2ajVXjRhSF76sgbAVrKoi3AsYVYCoIHcBWEKmCkA6ggjUVRKoApwLsCuKtQPkmWlj/aDRjy//hO+eeezDovTfX1mg4YFqiAuxsMcDeWfjCw/onkj6jc2RqZj3NYWgBAigkXaFzpDQzpzk+AkALEMADdofOkT8J4B5/pymATNLv6BzJzSzTHB8BoAUIwEn6C50jAzMrNMdHAGiBMw/gCwGM8XdWAvAQQoWdHSx+Zb0rL3hYf0oAUzTRcdBTwumV9Ru2wMoLHtY/w35BbeS2tKMeCubNFH9yfWfeC3yBUACF4qfB3E4rgNKWToGeLgE8U3CIH5zEeUtbI4BHSb+hNkprKHgImLdQPIAnM7vVEqEAMm34kToEzPuC9VEbuTXcsl0CmFHwE35wmLfCYuS2RgBD7BuK4bQnGL7EGmHelABuqDHCFzC0AvWcjuw0yPChWfvYC4oxsKVjsCdU1Om4AigtsN+sMevA1gjgAvsHHQuldQ/gEzVm+AKNAXgoXGHHwjPDD/EVGDNTfMMO3kKNL3ooXGHHQm4NO7iHMTPtKIBC8cPFvsgtHMADdofaKC1wC51KADcsYISvkDhnaRsE4Bteoy4803iI7wzmLBQPIDhHWwCZEu6tCKUFkt8WzPmK9dROboFbyFAjFM50GgFUWIzcNgjgHvsDdYLGwR7bgDlTAvjKGA/4CsHhqOuUdsBohcbBHl1hxj72gmIMrOEU6AkOR3GnLQQAl2Y20Q5YY8aBbRBAT9Ir6so9GqNN+c7wjdczo1NaAJcWeBOCAXhoUGGH5pnhh/gKjJcpYaPm+uA6g9/w0KDCDk1ugR2c8TLtOIAx9is6JLmFA3jA7lAbf3N9H28kFkCh+Clrih7VjG98jbpwwwJG+AqJ85XWchYxFKRrA653Stuk2hhYYAenfqEO83liAWSK32OlBRpwvVP3AL5Qf4yvQP1XrKd2cgvcQh5DQWiQKR7AhAaX+Apc31PHRym1DWuE+hUWI7cdB7CNIYNQumvt3DoE4JTwEaZBsA41KmxTSgvfXn3sBcUYWGAP8QQH99DEqXsAt6r/fuCU8CfsH0xRIZ4ulC7UAHWdEmaDgQVqeAwFoclWUn7jRz2nWtdonmdUSBpRa6II1HJKCyC4iXpaA/DQqMJiDCwhgGUo7QQbXpup4/7kaf2mh0YVFmNgGyyiC4yVaU8BTBS/d7/S5wHfG8zl+92hNqZm1lMLhlqhUaH4acszRo/iXqbpRDuCeXqq94971FM7pQWeIm8YaoWGhdICmGciNjP0ZC0bUCrM4BfsJA1RT+mUtoUAHhX/b5E2Jvq5u/udPgo9e6rfZad60ZvyZA3/FTJPSgCZEjabRGZohArVt8oM/w/6zC+4p+2QW8sp0GOoFQbLtL0AlhkhzxDtgty2EIAf7hs6RW4IYIQHSQnAKe3EdYwMLHI++QgARSGECjs5WHx0fdEf8LD+/30Aj6ofUZ/RKTBFBeu/VQRDyRBEH3OqH1tX6Jgo0Qj5hY/xJAxtBGFcYE51GE77/3RMUaGfi57ha2NoKxBIH3OqA7lCu8AfpQshFjzGO7O1AOYhjAvMqQ7DafNPxxSNkF+w961jaOcQSB9zqgO5Qm28vcv+l6eJdsxeApiHMC4wpzoMp5oR2tm73Ma/QnM4X5Cn2JgAAAAASUVORK5CYII=",lS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAERklEQVR4nO2a4XXaSBSF76tgtRWEVBBRQYYKbFewUAGkApMKjCtYUgGkAqAClA7YDpQK2G+ikIA0CBAYROA75577Q/PmPV070kTHphvnHgC6ae4BoJvmIgEsl8sY66KGMhaSXs0swc+KobNDAENJ/6B1vphZW2fmUgFMJX1E68zMzOnM3ANAZ+eqA2D4/OBVGKAYrZOgHjoKQpxhe2NoL7jxZ8wPGKE6k6IBQXzGd2JoJ9z8v1hb18WQEDp4KYZK4ebbknwA10jHzIYqYZ8A5liMrpGEAJr4VvYJYIldLQRQeo+lFz3cfyiAlplNVSMY00maoA2Ys/QeSy962HiJ5WnZPYB7AFPVCMZ0ugdQswAo9a/PB9QQryT0xcxS/OTQy6lOAVDWVvEAtZD0RG2CnxT6OdUlAEpibI5C7DycVIGeTjUKoC/pGW2jSX2Cnwx6OtUogKGKn7zWaVlJfRXo6VSjAHrYC9rG39Sn+Mmgp1ONAoiwBL1DeV6p7eEnhZ5OdQnAQ1mMDSV9QCteUZ/aFD8p9HOqUwArKI+xCPmnf4pvhbUR9oxmZjbG94ZapzoGcAi0mmBOGR3b8TFjHWqdrjkA2gywLlqRopbt+bqk3ulaA6BFW8VToydF723HPx0PezjVKQDKIsz/RL+xdowHYV2MTVCEQvhnRxMvhX2csn02oLb0Hksveth4ieVp2e4AJphTxhPrx/gGrImwOWqonCH1HXwr7OVUlwAo6St7mq9IUZOahdZg3QRz2o+OlTwU2cupDgGw3CkwCGz8KrNugHXRIfgQE7wA+zkF+rK+9B5LL3rYeInlaVkgAJZG2Bw1FGZIXYd1bYUfertI0XsLPBTZ06kGAYywR/SWbPwmraC30yUDYFkPe0HnYEj/Dv4L+jtdKgCWxNgcnZOOrT0UmcHpjAF8Yt8B7q9HmL/5hs5PkzkS3M/R1+ab5wdcN2wrWy+y4UfMM1WRFPWVeQ/F6BKkqK/sENVDEcrjBOQwwwoYKsDN9xVI88r5bGZ95dgWwFTFP2G5dmYW+BOcewCowB8awFcCeMQ32BaAXzhCfwrfUZsAxvgGwQCqQnBzLEZ5gumXwV5j7AHlCZ4Eq3KyABh4gHVRnv9QzNApvjfsF2EJeofyvLJfDz8aQ0fDsE6BU9hPWrZ2ajyEt9p3naMDYMgIm6OGihz9k2L/AdZFeRbKToIpXhlDR8GAI+wR5fnGcDF+NPRIsA8oz5geT3hljgqAwR6xEQrRZLgEPxr6xNgchXiizxivROUAGKqhbKgI5fnEUAP8ZNCvh72gPClq0m+hChwTgH84ORWZWeDEdQroOVX4gDalZws/GEMHwyBthT9pfUcxwyz0BtC3oezV+BfK07G17wP7UjWAMfaA8jwxhL/2ZtD7ERuhPF/p7a8dRNUAnLL/h69YKPtMNdUZ+Nm/Lamh3/Sr9Dd009wDQDfNPQB00/wPVqNIX7X7yvkAAAAASUVORK5CYII=",cS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAJRElEQVR4nOWaS0wUSxiFu3zFDUqMcafMyt1FY1zDiI+FiUKMbkyEQNyKuRqXstCtSoxbhYBbQUDjSm4coq5UHvEmLiQCcWFMfIAujCJ9z6lL9a2pruqqAYHB+yWVme6eqa7z1/+fru4ZsW7duvY4jquiKOpbv3790Ldv3yai/xFi7dq1TW1tbZ1VVVVRf39//OTJk5cfP34cxLH+2dnZAl5/a8TGjRtzJ0+eHL958+YabEuGhoZiBuPx48dfXrx48Rd2/bbZIdCinTt3Tr169Wo73qaYnJyMC4VCUXagZB79/PlzAIdXPTIAKIPO8fHxph07dsjtLFR2MCijo6P9DMaGDRsGVmt2SMEIQFNHR0fnqVOn5HYIMzMz8bFjx+KRkZGovr4+un///tSnT5/uMiCrKTukYJsPZKHEX716Vdy4cSOGiQpmDzIiHhgYkOWC96siO2QASJYP6Ojid+3aJW7fvh1jd2Rmz/T0NEslQqnET58+fYsS62FAyi07kkGjDDqfP3/eVF1dnewzMcVjlzTJy5cvx77sQUZI30CG8LWAYPThnEM/fvwYweEVQ4ogGEzTtWvXOs+cOZPs07GJVxw4cGDu4cOHmQHQYXYgEFFzczOzZ0IIUcBrX0VFxdBngPfLhkCT0AcOHz48fufOnZSQLPHk9OnTc23zPoBNL6q/xsZGMTY2FrN8CoWVyY6iAW/dunXi/fv3VXiboAbrEk9cPmDD7M/MHmYHYiC948GDB29fv349iN1Llh1FA0bUi3xgamoqbmlpSQaLXVZCfcAUj13R8ePH5zo6OsSmTZvktgn7VmaK11HsYnYM/KrsKDopOk58gKnJwfb09CSDzcKcSRObeMLLaC6Xi44cOSKw6WW+TOJ79+7NvHnz5i52PUJ2DCA5PuN9yRSdVPkA65kzf+vWraLBZpHlAy7xhFcHltCVK1ecwTNR/U1MTEStra2igIAsNDuKBkPoAyiB7Zz5zZs3p467oAi8pHxADdYmXuHLHh29P2RDVFtbG9XU1Mh+1TJ9/iauF7u82SG/qIMIdmKgjUxLLHEFT2CbVRPWqukDLKOQTPL5gEIXz/4oGLMfXbx4MfU9jofHGBB1E4fdqVt8gVYEAiDvCxBVGo/sAM4c7d69Ozp69KjA/tR3FPpMhoonIT5giscuiX7OLBgsapnPjuQWP+lIQR+w3RewVplyCEpcWVlpzQ7lA8y4c+fOSQMNKSP2zRJy+YBLPGEAent7vdmjw8nZv3//NPrdZ/2S774AGcFoymAg1WR2IBhSOMXwDjFUvIJCbDPpuxSz7Hj+rOzRgej44MGDXzDGWpql9Usog6L1gA+KZnZ0dXVJZ25vbxfIkKLs8GHzAc4UZ57BtIknPHdW9uiY4rEr7QEEAUjWA9gMgoNl2jML1KUJg4vy+bzMDt8MmT6g+qOH4Hml3OfClT06NvHE2jF9gOsB232BDTVYztT58+eT5wM4JGeI2cGA0DsYDFt28HNqJvX+QsrIlj06LKMTJ06kxBPrFwjXA+Z9gQ1zsBSB3an1AKF3IBDyyqJ7h5p1ziQyT+j9YbcXM3t0OD5leKZ4kvqCAmXg9QGKZd3rg4Ww1HrABWedAUGGyKBNwD+YJYODg0l/IbAfjoXZg80En3jiPAkCkOkDPOH169dj22A5k76aNOF1mobHAORyuSiHhlKRl1pXauuY56R47JtC1jW4xBNnx1k+QPGYOXlpMsUTtR4w69wFB8u053e6u7tl9nBWcY4kO1QwXBmp+wD7O3To0Mvv37/XwJQ/47ATa2cKmw8o8RwkNq3wM3ix+oAJZ/7SpUtJGe3du3fu2bNnqb4ZCJ4XgYlyuVwSEArG4cQHcMWIQsUTgeYEZVDkAxTGQWSJJ6E+wP7MMuJMovQys4f9w0jllQUpLoPB0sE+LnX/DhVPnCchCEDiAxwsT+gTpUD9FdWkierPLCPOJMWEZI+C2cHS6evrG0NG7IP2IPEk8yTKBxjhAgYbKp5k+YASb+sPKR4zCLZjLkqpeZPU4EzoAxCx3VaXWVAkXlIzyf0u8Qpf9uiwvwsXLixIPCkanA3+fwC3wa3sm6nJbKD5ICiZ32Wdmj7AwfrEE/pAx7yjY9MJ+8Oj9VF8rqS018k8AYEP1MMH7tIHJiEKAqTZ0Hy4kkNwnM8I9JnkYPFdr3jCEmCwzezRYX+LFU+cJ1BgIJV1dXUfbOsB1isMSLoxPpbKDuUDBQQNLUg8Yb8MguvzFI9b5C78zNaMzUUh0Lxs27Zt7N27d3/grRNkRHJpgoAon89HnBg2BsclxoVrPfArxROB5oU+gMGcVeuBEBAErsOlEebz/94SI0OS7PBBH0DpFV1FfrV4ItC86D6AzSCY/liViQIygqu8AsoAGWK9C7TBEmDmKB9YCvFEoHnBQJw+YIPia2CM/O2P79vgA/pMMjsYEPiHFMlgmNnBzzAILJ2lEk8EWhAhPkAouGZePDblzOElmUkTegeDobIjl/tvnY+gxywfLJe7l0I8EWhBhPiAKZ5AVGo9kAVnngFhduAJDgO0ZOKJQAvC5wM28Qp9PRAK+8PDliUVTwRaEKhVpw9wsDUO8YTH2wwfyIKfh/gWiO/C5pIi0IKx+QAHW5Mhnvh8QIf9LZd4ItCC0X0Az9nkIywKZ8NhJ6E+sNziiUALRvlAU1OTdGg+//eJV/h8YCXEE4EWDGygcs+ePR/wNmJNM/XxNggKbMN3bD7AYyshngi0klizZs1wQ0NDdStmv5QA0Ad4X6BfRVhGfBi6UuKJQCsJ+gB+rjrLZ/i4XsuVnFq42GZXQR/gr0bqKkLxdSgjXPdXTDwRaCWhfEDNJBYqyV0gRMp1vusZgbrDKxfxRKCVBGbcuR4gECWfESAoMZe1yIxknc9ab4Rp4hHWl+Hh4frZ2dlH0Qoj0ErGth6wYWYHPQCvSAD3T1XLzYICQB9AKsv1ADaDgOgYJTCDAOTLRTwJFqBj+oAPirf9Nl8OBAkwgQ1k+oBOOYsnCwoACfGBchdPFhwAnw/w1xo8E8z8bb4csA4+hCwfWC3iSWrwocAGrD5A8bjx8f4xoVxYcACI6QMUv9AfKVeKRQVA94HVKJ4sKgDKB7DcLelfGeXEogIAG6jcsmXLh69fv5b0r4xyYlEBIMiCzoqKij+hfdWJJ/8ArHtTMAvcDGAAAAAASUVORK5CYII=",uS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFoElEQVR4nOWa4XXaSBSF36vA4w42FXhcQVAFcSoIriB0EKhgSQVLKrC3AuQKEB2kA48r0H7PGAdiRjMDijYnfOfcXH7MvDfvooCioPI/0LbtJ2wsIh4ZDVqo6jd8UBQNBoM7bIk8OkSDKlUN+CAMHcAK86iLhgCu8UEYLACGH4vIPyiHW1VdyAAMGUDOu79lsKtgyABaLBsCGORsgzQxmP/PCIA53mMOBbTmnOZJ2NdgVygHq+vxJNR1mNU1D+x7wLNRlAWNvmAT5NAuczTTRBDsH0uPH4LUc9gXNEG7BDRn/wxPoigJze6wGxSjQZWmQ2iwK9RF8t2njsOWyKMY99T5iHeSDIBmU9kknaKmYYVHoZbDHlEXl9QJeBTqLLGRpJmp6lQ6UNQJzezADuXwTlW/SwfUa7Eo7O88E9s9tkI5BMpd4lFSzUayudRymWkicWq2WBT2p840lbwrckulqrVESDW7we5QLjP9/QL4SMl7/CCpZiMpuwICqlS1wQ9CzRaLwt7omdjqsSVyKJdKT7gCrNEjKiGgSiMhULPForDv4JnY5rElcqiES0oG/CAHm+1C4zn2GZUQUKUHQqBei0Vhz5szscVjS+RQCV8pN8GjvGn2MzR3WC3p7++fCajSn0KgXotFYf3emVjusSVyqIQ1GlEu4FH2msXgEA67R+9RCQFVuhMCtVosCmtfz8RSjy2RQyU8oBtKBbwTRdlwoL9k8yjLmKALlCKgSl9CoEaLRWHd85lY5rElcijFE5ojY0GJ75LJc7NjeDlgLYUhsK/ldRTWKEs8L5fIoRQ2/IhtDV7M0QEYLwetpSAEtEJdXKNBhjcUncQRITjURUAOpTh5eOPkAIzCEPqgl+GNXgIwBgyht+GN3gIwBgih1+GNvQAY4BM2QR4ZDZrT8BueBTU8Vkv/IRQPz1k+Y2PZzBNQgxbUeJ1HkS102BJ5dIgGVZpxY2FQz2O19BdC0fD0d1jWPNsAVphH50RDANd20zGW/IeVfxq3FkAt5ff4fwqNBfDIC4fOEgsg4BfoLLEAajnfvwIPFsBYzvlDkD/sa7DBrtA5seZr0G8DcFgt8RDWyG5EAp6Eeh5bIof6IKBKy26EasmY5zmALWwcy+ZWeLvRFs5ZuJBMqOGxPoffElClmSEYnGUs+/M8oAU1FvKCot6gocd+xfBbAqq0IIQUvQUwwPBbAqq0pxB6CWDA4bcEVGkPIZwcQOHwT+gCdZGzxgio0hNDOCmAI4YfSd5D0VoGCuHoAI4Z3g7KvpbXUVhjN2eel7UMEEJRAC8H+4CMCXIoxevwuNVIBoDZOo/Vkh/CHBn/UqLBs3huloLDOOwOjaSMveENamUFYLDUY7XkhbBLLZvfBQS8k9dmMTiEw5bIoxLeDG9Qr8WisH7vTCz3WC3lITSo0kQIe80OwQHm2GdUwsHhDeoVBWCwxWO1lIfwlXITPMqbZrvQ2GGPqITo8AY1iwMw2OaxWspDuKRkwA9ysNkWmo5kc/nn0jm8Qc0Wi8Le6JnY6rFaykKo9ISfyNxgdyiXmZ75j6Rm+vsFUOmxV4BBw4BdoBzeaeLHCdRrsSjs7zwT2z22Qjk8Uc7hUTqbGTScSl7iD6o6kg6oZYd5RF1cUifgUahTS95zzJkmrshkAAYN77EPKMYajWgW8CjUWWEeddFQ5xqPQh2H1fLjQcchvqnqWBJkBWDQdCqb298LtMtXNKVZwKOwf4L9jXK41Z2nNoegnsOm8vYe5QnN2T+VDLID2ELjkWz+DRBQQyPzJOxbYR7lYHWv8STUdZhHDgX21VJAcQDHwkFbLBsGGeRsgzQxmP/sA2iwK5TDmvk9/ssZMoCx5P8P1K0mPgT7YrAADEJosNRVMNi7bwwdgMNqiYewRiMCCPggDBrAFoIYy48fLxkNWjD4QgbmP5cUqZpLuNlqAAAAAElFTkSuQmCC",hS={class:"fit-content flex flex-col items-center pointer-events-none"},fS={class:"flex items-center m-r-10px"},dS=["src"],pS=Li({__name:"NavItem",props:{name:null,link:null,conDomRect:null,bg:null,outLink:{type:Boolean,default:!1},type:null},setup(n){const e=n,t=pn({outlink:{color:"#00b894",img:oS},css:{color:"#00cec9",img:aS},canvas:{color:"#6c5ce7",img:lS},threejs:{color:"#fdcb6e",img:cS},svg:{color:"#576574",img:uS}}),i=pn(),s=pn("");zp(()=>{if(!e.conDomRect||!i.value)return;const{top:p,left:g}=i.value.getBoundingClientRect(),{top:m,left:d}=e.conDomRect;s.value=`-${g-d}px -${p-m}px`});let r=!1;function o(){if(r=!0,e.outLink){window.open(e.link,"_blank");return}const p=Td.resolve({path:e.link});window.open(p.href,"_blank")}const a=pn(!0);function l(){a.value=!0}function c(){a.value=!r}const u=Pt(()=>({"box-shadow":a.value?"0px 0px 10px rgb(210, 175, 210)":"0px 0px 8px rgba(0, 0, 0, 1)"})),h=Pt(()=>({transform:a.value?"rotateY(0deg)":"rotateY(180deg)"})),f=Pt(()=>{var p;return{transform:a.value?"rotateY(180deg)":"rotateY(0deg)","background-position":s.value,"background-size":`${((p=e.conDomRect)==null?void 0:p.width)??0}px`,"background-image":`url(${e.bg})`}});return(p,g)=>(jt(),$n("div",{ref_key:"navItem",ref:i,class:"navItem font-ani",style:Xn(Cn(u)),onMousemove:l,onMouseout:c,onClick:o},[Wt("div",{class:"bg pointer-events-none",style:Xn(Cn(f))},null,4),Wt("div",{class:"content pointer-events-none",style:Xn(Cn(h))},[Wt("div",hS,[Wt("div",fS,[n.type?(jt(),$n("div",{key:0,class:"rounded p-4px flex items-center justify-center m-r-4px",style:Xn({background:t.value[n.type].color})},[Wt("img",{class:"h-20px",src:t.value[n.type].img,alt:""},null,8,dS)],4)):uf("",!0),cf(" "+zd(n.name),1)]),Wt("div",{class:ir(["h-2px m-t-2px bg-#fff transition-duration-0.35s transition-delay-0.3s",a.value?"w-full":"w-0"])},null,2)])],4)],36))}}),mS=mf(pS,[["__scopeId","data-v-85c5813b"]]),mh="/nova/assets/bg-DfOmpCHv.png",gS={class:"w-full h-full flex justify-center overflow-y-scroll"},_S=Li({__name:"NavGrid",setup(n){const e=pn([]),t=pn(),i=pn();function s(){Ed.forEach(o=>{var a;o.children&&((a=o.children)==null||a.forEach(l=>{var c;if((c=l.meta)!=null&&c.visable){const u={name:l.meta.name,link:`${o.path}/${l.path}`,conDomRect:t.value.getBoundingClientRect(),visable:l.meta.visable,bg:mh,type:l.meta.type};e.value.push(u)}}))}),yS.forEach(o=>{const a={name:o.meta.name,link:o.path,conDomRect:t.value.getBoundingClientRect(),outLink:!0,visable:o.meta.visable,bg:mh,type:o.meta.type};e.value.push(a)})}function r(){i.value=t.value.getBoundingClientRect()}return pl(()=>{s(),new rS("Patrick Hand").load().then(r),window.addEventListener("resize",iS(r,500))}),(o,a)=>(jt(),$n("div",gS,[Wt("div",{ref_key:"navGrid",ref:t,class:"max-w-600px h-fit p-y-2rem flex flex-wrap justify-center gap-2px"},[(jt(!0),$n(Ht,null,Qp(e.value,(l,c)=>(jt(),$n("div",{key:c},[l.visable?(jt(),xo(mS,hf({key:0},l,{"con-dom-rect":i.value}),null,16,["con-dom-rect"])):uf("",!0)]))),128))],512)]))}}),vS={class:"bg-#b4286c relative w-full h-full overflow-hidden flex justify-center items-center"},xS=Li({__name:"Home",setup(n){return(e,t)=>(jt(),$n("div",vS,[xt(iw,{class:"snowBg absolute top-0 left-0 pointer-events-none"}),xt(_S)]))}}),yS=[{path:"https://yufengjie97.github.io/learning-phaser/#/flappyBird",meta:{type:"outlink",name:"像素鸟(phaser)",visable:!0}},{path:"https://codepen.io/Megalovania/pen/ZEVdJmL",meta:{type:"outlink",name:"排序可视化",visable:!0}},{path:"https://codepen.io/Megalovania/pen/XWOdXxZ",meta:{type:"outlink",name:"电流",visable:!0}},{path:"https://codepen.io/Megalovania/pen/wvRvWdZ",meta:{type:"outlink",name:"生命游戏",visable:!0}},{path:"https://codepen.io/Megalovania/pen/JjeaOJv",meta:{type:"outlink",name:"gsap动画",visable:!0}},{path:"https://codepen.io/Megalovania/pen/mdQqgdv",meta:{type:"outlink",name:"css 3D swiper",visable:!0}},{path:"https://www.shadertoy.com/view/dlGfDt",meta:{type:"outlink",name:"shader-noise-point",visable:!0}},{path:"https://www.shadertoy.com/view/lcfGzH",meta:{type:"outlink",name:"shader-domainWraping",visable:!1}},{path:"https://www.shadertoy.com/view/mtVBDD",meta:{type:"outlink",name:"shader-loading",visable:!0}},{path:"https://www.shadertoy.com/view/dtGBzy",meta:{type:"outlink",name:"shader-loading2",visable:!0}},{path:"https://www.shadertoy.com/view/mlKBzh",meta:{type:"outlink",name:"sdf_box_noise",visable:!0}},{path:"https://www.shadertoy.com/view/4cfGDH",meta:{type:"outlink",name:"shader-kunkun",visable:!0}}],MS={path:"/",meta:{name:"home",visable:!1},component:xS},bS={path:"/:path(.*)",meta:{name:"notfound",visable:!1},component:f0},Ed=[MS,i0,s0,o0,r0,l0,a0,bS],Td=$g({history:mg("/nova/"),routes:Ed});Xm(Ri).use(Td).mount("#app");export{Yn as $,ES as A,RS as B,ml as C,e1 as D,He as E,Ht as F,ZS as G,Jb as H,L as I,Ir as J,lr as K,QS as L,sn as M,Ua as N,et as O,zt as P,Rt as Q,OS as R,lb as S,Zf as T,Qu as U,_e as V,Yf as W,Pl as X,Qf as Y,VS as Z,mf as _,Kr as a,sd as a0,rd as a1,Ol as a2,od as a3,BS as a4,Ws as a5,ud as a6,hd as a7,id as a8,fd as a9,b_ as aA,Xb as aB,Ha as aC,XS as aD,Hf as aE,Ie as aF,ys as aG,rr as aH,zS as aI,tn as aJ,GS as aK,KS as aL,NS as aM,Jf as aN,nt as aO,Fl as aP,WS as aQ,$S as aR,qr as aS,yd as aT,CS as aU,DS as aV,IS as aW,YS as aX,uf as aY,xp as aZ,TS as a_,Tl as aa,ws as ab,dd as ac,pd as ad,Nl as ae,md as af,gd as ag,_d as ah,vd as ai,US as aj,_n as ak,qS as al,LS as am,kS as an,FS as ao,gt as ap,Al as aq,Kf as ar,jS as as,JS as at,HS as au,Ll as av,ub as aw,ii as ax,zf as ay,Ci as az,$n as b,Pt as c,Li as d,Wt as e,cf as f,ir as g,pl as h,iS as i,Qp as j,xo as k,xt as l,hf as m,Xn as n,jt as o,Lp as p,wS as q,pn as r,_m as s,zd as t,Cn as u,SS as v,zp as w,AS as x,PS as y,sr as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/reverseCardPic-MxjZetRm.js","assets/disco_communism-NN-qA4tW.js","assets/p5.min-GDl2HyFv.js","assets/reverseCardPic-LyGbVFEG.css","assets/StarRate-s5jc2ZLe.js","assets/Card-LS1OdpR8.js","assets/Card--JYLWHeZ.css","assets/initGUI-4v9Pkg7m.js","assets/dat.gui.module-PWGADmkp.js","assets/StarRate-G31reSYb.css","assets/Sun-plGfeNu0.js","assets/Sun-xxOLY8xc.css","assets/ProgressCube-o0irR05R.js","assets/ProgressCube-eTrC3434.css","assets/DeathLoading-ZlzdXI8j.js","assets/DeathLoading-VK1Zzqw4.css","assets/HSCard-mttp5V8o.js","assets/math-xX-10YLt.js","assets/HSCard-Iee7Ik3K.css","assets/BarChart-8Q8pGBS1.js","assets/BarChart-g3MunUDi.css","assets/Water-t0RPgHFN.js","assets/Water-zHDNNDSx.css","assets/timeSun-D0Rkci0E.js","assets/timeSun-5ORMucVv.css","assets/crushPic-brxuPTfX.js","assets/index-WM3n2avM.js","assets/index-FSCrshNh.js","assets/crushPic-fv0hIpOW.css","assets/FlowField-IG9tvvB3.js","assets/fabric-MEob0Zip.js","assets/noise-8YyA3euy.js","assets/FlowField-AIARjlhA.css","assets/FlowFieldLine-pf2-zAhR.js","assets/CanvasTextPoint-hH6qj3BS.js","assets/simplex-noise-CoJLqHZY.js","assets/CanvasTextPoint-dqqB4fGo.css","assets/canvasPoint-OGEX6DBs.js","assets/color-MmjbexgR.js","assets/flow-pmd0D66Q.js","assets/initStats-4ndSLRlZ.js","assets/delaunator-JFIrJk2T.js","assets/imgIdle-cxCi3agx.js","assets/canvas-DEPmujqV.js","assets/nyanCat-nfX2fw87.js","assets/THREE-template-Lui44UN8.js","assets/stats.module-nRd2dy6L.js","assets/OrbitControls-ewB38WP2.js","assets/THREE-template-fzmV_w6V.css","assets/CubeLine-jczcuWs9.js","assets/CubeLine-6xeDAqW-.css","assets/AllBufferGeo-cVM_QQuz.js","assets/AllBufferGeo-Ep-44pbr.css","assets/ThreeTextPoint-S1Cwy0G1.js","assets/ThreeTextPoint-xRVaRKJa.css","assets/TextGeo-EFvEp0p8.js","assets/helvetiker_regular.typeface-COeRXYcr.js","assets/TextGeo-Z7MNmJdc.css","assets/SolarSystem-RoKr7Y5w.js","assets/RenderPass-gCH5DXDs.js","assets/UnrealBloomPass-32rh_LpW.js","assets/GlowBall-9ySbZZvp.js","assets/Atom-l6ZIcJuN.js","assets/Atom-XTv5qZ8G.css","assets/LavaBall-TCBCBgj9.js","assets/LavaBall-pFTwMW3m.css","assets/LensFlares-kv2qYsLK.js","assets/LensFlares-ed54kSSq.css","assets/crushPic-61RnI6XJ.js","assets/initThree-Z9PPtI-D.js","assets/flowFieldPoint3D-z3Jwcmue.js","assets/FlowFieldLine2-HqLNc36y.js","assets/P5Con-WimvEu7X.js","assets/P5Con-c1o8Vdhb.css","assets/paticle-Q1iTPl-2.js","assets/Maze-R8f4Z0VL.js","assets/GradientLine-xO5WKtA7.js","assets/CodeRain-aGgmK_8h.js","assets/Cross-RSyNgo0C.js","assets/MusicRect-qmsNHWhf.js","assets/AudioController-ANjUJoo9.js","assets/AudioController--u9o9_dV.css","assets/p5bezier-rYabPWTv.js","assets/MusicCircle-asgkDqkW.js","assets/BoRe-CmeewzpR.js","assets/BoRe-7s0lgeq5.css","assets/Tangram-ofPai0r8.js","assets/Terrain-0pUXYdku.js","assets/P5-1bkKAgwb.js","assets/P5-ZoK4gmdE.css","assets/Terrain-p-hiz-n0.css","assets/DisperseParticle-56a_jvMJ.js","assets/DisperseParticle-B6wHoY0K.css","assets/DisperseParticle2-f4ebEAiS.js","assets/DisperseParticle2-zz1KYv97.css","assets/Snake-_1uRAM5Q.js","assets/LightBall-bbyOet7M.js","assets/LightBall-aZGRnPd0.css","assets/FlappyBird-3RnwZ_Vx.js","assets/FlappyBird-TuicVYaj.css","assets/Firework-Qx69PA3O.js","assets/PixelPicture-gJNK35Ww.js","assets/PixelPicture-OMQGL23h.css","assets/circuitBoard-uLO-eXXX.js","assets/circuitBoard-QcTioUj8.css","assets/index-GAPM0lOP.js","assets/index-M5dBshxJ.js","assets/index-xw83vZLo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
