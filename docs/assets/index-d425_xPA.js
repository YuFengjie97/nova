(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Za(n,t){const e=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)e[i[s]]=!0;return t?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const _d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vd=Za(_d);function ah(n){return!!n||n===""}function ro(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ce(i)?Md(i):ro(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(ce(n))return n;if(ie(n))return n}}const xd=/;(?![^(]*\))/g,yd=/:(.+)/;function Md(n){const t={};return n.split(xd).forEach(e=>{if(e){const i=e.split(yd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function oo(n){let t="";if(ce(n))t=n;else if(Ft(n))for(let e=0;e<n.length;e++){const i=oo(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function eS(n){if(!n)return null;let{class:t,style:e}=n;return t&&!ce(t)&&(n.class=oo(t)),e&&(n.style=ro(e)),n}const Po=n=>ce(n)?n:n==null?"":Ft(n)||ie(n)&&(n.toString===hh||!zt(n.toString))?JSON.stringify(n,lh,2):String(n),lh=(n,t)=>t&&t.__v_isRef?lh(n,t.value):$i(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s])=>(e[`${i} =>`]=s,e),{})}:ch(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!Ft(t)&&!fh(t)?String(t):t,Kt={},Ki=[],pn=()=>{},bd=()=>!1,Sd=/^on[^a-z]/,ao=n=>Sd.test(n),Ka=n=>n.startsWith("onUpdate:"),Re=Object.assign,$a=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},wd=Object.prototype.hasOwnProperty,Gt=(n,t)=>wd.call(n,t),Ft=Array.isArray,$i=n=>lo(n)==="[object Map]",ch=n=>lo(n)==="[object Set]",zt=n=>typeof n=="function",ce=n=>typeof n=="string",Qa=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",uh=n=>ie(n)&&zt(n.then)&&zt(n.catch),hh=Object.prototype.toString,lo=n=>hh.call(n),Ad=n=>lo(n).slice(8,-1),fh=n=>lo(n)==="[object Object]",tl=n=>ce(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=Za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),co=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Ed=/-(\w)/g,mn=co(n=>n.replace(Ed,(t,e)=>e?e.toUpperCase():"")),Td=/\B([A-Z])/g,ps=co(n=>n.replace(Td,"-$1").toLowerCase()),uo=co(n=>n.charAt(0).toUpperCase()+n.slice(1)),Lo=co(n=>n?`on${uo(n)}`:""),ks=(n,t)=>!Object.is(n,t),Gr=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},Zr=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},Ma=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let zl;const Cd=()=>zl||(zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let cn;class Pd{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!t&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}run(t){if(this.active){const e=cn;try{return cn=this,t()}finally{cn=e}}}on(){cn=this}off(){cn=this.parent}stop(t){if(this.active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Ld(n,t=cn){t&&t.active&&t.effects.push(n)}const el=n=>{const t=new Set(n);return t.w=0,t.n=0,t},dh=n=>(n.w&$n)>0,ph=n=>(n.n&$n)>0,Rd=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=$n},Dd=n=>{const{deps:t}=n;if(t.length){let e=0;for(let i=0;i<t.length;i++){const s=t[i];dh(s)&&!ph(s)?s.delete(n):t[e++]=s,s.w&=~$n,s.n&=~$n}t.length=e}},ba=new WeakMap;let Rs=0,$n=1;const Sa=30;let $e;const xi=Symbol(""),wa=Symbol("");class nl{constructor(t,e=null,i){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Ld(this,i)}run(){if(!this.active)return this.fn();let t=$e,e=Yn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=$e,$e=this,Yn=!0,$n=1<<++Rs,Rs<=Sa?Rd(this):Ul(this),this.fn()}finally{Rs<=Sa&&Dd(this),$n=1<<--Rs,$e=this.parent,Yn=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(Ul(this),this.onStop&&this.onStop(),this.active=!1)}}function Ul(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let Yn=!0;const mh=[];function ms(){mh.push(Yn),Yn=!1}function gs(){const n=mh.pop();Yn=n===void 0?!0:n}function Ue(n,t,e){if(Yn&&$e){let i=ba.get(n);i||ba.set(n,i=new Map);let s=i.get(e);s||i.set(e,s=el()),gh(s)}}function gh(n,t){let e=!1;Rs<=Sa?ph(n)||(n.n|=$n,e=!dh(n)):e=!n.has($e),e&&(n.add($e),$e.deps.push(n))}function Rn(n,t,e,i,s,r){const o=ba.get(n);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Ft(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Ft(n)?tl(e)&&a.push(o.get("length")):(a.push(o.get(xi)),$i(n)&&a.push(o.get(wa)));break;case"delete":Ft(n)||(a.push(o.get(xi)),$i(n)&&a.push(o.get(wa)));break;case"set":$i(n)&&a.push(o.get(xi));break}if(a.length===1)a[0]&&Aa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Aa(el(l))}}function Aa(n,t){const e=Ft(n)?n:[...n];for(const i of e)i.computed&&Bl(i);for(const i of e)i.computed||Bl(i)}function Bl(n,t){(n!==$e||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Id=Za("__proto__,__v_isRef,__isVue"),_h=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qa)),Od=il(),Nd=il(!1,!0),Fd=il(!0),Vl=zd();function zd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=Yt(this);for(let r=0,o=this.length;r<o;r++)Ue(i,"get",r+"");const s=i[t](...e);return s===-1||s===!1?i[t](...e.map(Yt)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){ms();const i=Yt(this)[t].apply(this,e);return gs(),i}}),n}function il(n=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(n?t?Qd:bh:t?Mh:yh).get(i))return i;const o=Ft(i);if(!n&&o&&Gt(Vl,s))return Reflect.get(Vl,s,r);const a=Reflect.get(i,s,r);return(Qa(s)?_h.has(s):Id(s))||(n||Ue(i,"get",s),t)?a:we(a)?o&&tl(s)?a:a.value:ie(a)?n?Sh(a):Qs(a):a}}const Ud=vh(),Bd=vh(!0);function vh(n=!1){return function(e,i,s,r){let o=e[i];if(ss(o)&&we(o)&&!we(s))return!1;if(!n&&(!Kr(s)&&!ss(s)&&(o=Yt(o),s=Yt(s)),!Ft(e)&&we(o)&&!we(s)))return o.value=s,!0;const a=Ft(e)&&tl(i)?Number(i)<e.length:Gt(e,i),l=Reflect.set(e,i,s,r);return e===Yt(r)&&(a?ks(s,o)&&Rn(e,"set",i,s):Rn(e,"add",i,s)),l}}function Vd(n,t){const e=Gt(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&e&&Rn(n,"delete",t,void 0),i}function kd(n,t){const e=Reflect.has(n,t);return(!Qa(t)||!_h.has(t))&&Ue(n,"has",t),e}function Gd(n){return Ue(n,"iterate",Ft(n)?"length":xi),Reflect.ownKeys(n)}const xh={get:Od,set:Ud,deleteProperty:Vd,has:kd,ownKeys:Gd},Hd={get:Fd,set(n,t){return!0},deleteProperty(n,t){return!0}},Wd=Re({},xh,{get:Nd,set:Bd}),sl=n=>n,ho=n=>Reflect.getPrototypeOf(n);function rr(n,t,e=!1,i=!1){n=n.__v_raw;const s=Yt(n),r=Yt(t);e||(t!==r&&Ue(s,"get",t),Ue(s,"get",r));const{has:o}=ho(s),a=i?sl:e?al:Gs;if(o.call(s,t))return a(n.get(t));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(t)}function or(n,t=!1){const e=this.__v_raw,i=Yt(e),s=Yt(n);return t||(n!==s&&Ue(i,"has",n),Ue(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function ar(n,t=!1){return n=n.__v_raw,!t&&Ue(Yt(n),"iterate",xi),Reflect.get(n,"size",n)}function kl(n){n=Yt(n);const t=Yt(this);return ho(t).has.call(t,n)||(t.add(n),Rn(t,"add",n,n)),this}function Gl(n,t){t=Yt(t);const e=Yt(this),{has:i,get:s}=ho(e);let r=i.call(e,n);r||(n=Yt(n),r=i.call(e,n));const o=s.call(e,n);return e.set(n,t),r?ks(t,o)&&Rn(e,"set",n,t):Rn(e,"add",n,t),this}function Hl(n){const t=Yt(this),{has:e,get:i}=ho(t);let s=e.call(t,n);s||(n=Yt(n),s=e.call(t,n)),i&&i.call(t,n);const r=t.delete(n);return s&&Rn(t,"delete",n,void 0),r}function Wl(){const n=Yt(this),t=n.size!==0,e=n.clear();return t&&Rn(n,"clear",void 0,void 0),e}function lr(n,t){return function(i,s){const r=this,o=r.__v_raw,a=Yt(o),l=t?sl:n?al:Gs;return!n&&Ue(a,"iterate",xi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function cr(n,t,e){return function(...i){const s=this.__v_raw,r=Yt(s),o=$i(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?sl:t?al:Gs;return!t&&Ue(r,"iterate",l?wa:xi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Nn(n){return function(...t){return n==="delete"?!1:this}}function qd(){const n={get(r){return rr(this,r)},get size(){return ar(this)},has:or,add:kl,set:Gl,delete:Hl,clear:Wl,forEach:lr(!1,!1)},t={get(r){return rr(this,r,!1,!0)},get size(){return ar(this)},has:or,add:kl,set:Gl,delete:Hl,clear:Wl,forEach:lr(!1,!0)},e={get(r){return rr(this,r,!0)},get size(){return ar(this,!0)},has(r){return or.call(this,r,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:lr(!0,!1)},i={get(r){return rr(this,r,!0,!0)},get size(){return ar(this,!0)},has(r){return or.call(this,r,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=cr(r,!1,!1),e[r]=cr(r,!0,!1),t[r]=cr(r,!1,!0),i[r]=cr(r,!0,!0)}),[n,e,t,i]}const[Xd,jd,Yd,Jd]=qd();function rl(n,t){const e=t?n?Jd:Yd:n?jd:Xd;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Gt(e,s)&&s in i?e:i,s,r)}const Zd={get:rl(!1,!1)},Kd={get:rl(!1,!0)},$d={get:rl(!0,!1)},yh=new WeakMap,Mh=new WeakMap,bh=new WeakMap,Qd=new WeakMap;function tp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ep(n){return n.__v_skip||!Object.isExtensible(n)?0:tp(Ad(n))}function Qs(n){return ss(n)?n:ol(n,!1,xh,Zd,yh)}function np(n){return ol(n,!1,Wd,Kd,Mh)}function Sh(n){return ol(n,!0,Hd,$d,bh)}function ol(n,t,e,i,s){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=ep(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Qi(n){return ss(n)?Qi(n.__v_raw):!!(n&&n.__v_isReactive)}function ss(n){return!!(n&&n.__v_isReadonly)}function Kr(n){return!!(n&&n.__v_isShallow)}function wh(n){return Qi(n)||ss(n)}function Yt(n){const t=n&&n.__v_raw;return t?Yt(t):n}function Ah(n){return Zr(n,"__v_skip",!0),n}const Gs=n=>ie(n)?Qs(n):n,al=n=>ie(n)?Sh(n):n;function Eh(n){Yn&&$e&&(n=Yt(n),gh(n.dep||(n.dep=el())))}function Th(n,t){n=Yt(n),n.dep&&Aa(n.dep)}function we(n){return!!(n&&n.__v_isRef===!0)}function $r(n){return Ch(n,!1)}function ip(n){return Ch(n,!0)}function Ch(n,t){return we(n)?n:new sp(n,t)}class sp{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Yt(t),this._value=e?t:Gs(t)}get value(){return Eh(this),this._value}set value(t){const e=this.__v_isShallow||Kr(t)||ss(t);t=e?t:Yt(t),ks(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Gs(t),Th(this))}}function ts(n){return we(n)?n.value:n}const rp={get:(n,t,e)=>ts(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return we(s)&&!we(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Ph(n){return Qi(n)?n:new Proxy(n,rp)}var Lh;class op{constructor(t,e,i,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Lh]=!1,this._dirty=!0,this.effect=new nl(t,()=>{this._dirty||(this._dirty=!0,Th(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=Yt(this);return Eh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Lh="__v_isReadonly";function ap(n,t,e=!1){let i,s;const r=zt(n);return r?(i=n,s=pn):(i=n.get,s=n.set),new op(i,s,r||!s,e)}function Jn(n,t,e,i){let s;try{s=i?n(...i):n()}catch(r){fo(r,t,e)}return s}function sn(n,t,e,i){if(zt(n)){const r=Jn(n,t,e,i);return r&&uh(r)&&r.catch(o=>{fo(o,t,e)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(sn(n[r],t,e,i));return s}function fo(n,t,e,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=e;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Jn(l,null,10,[n,o,a]);return}}lp(n,e,s,i)}function lp(n,t,e,i=!0){console.error(n)}let Hs=!1,Ea=!1;const Se=[];let fn=0;const es=[];let An=null,fi=0;const Rh=Promise.resolve();let ll=null;function Dh(n){const t=ll||Rh;return n?t.then(this?n.bind(this):n):t}function cp(n){let t=fn+1,e=Se.length;for(;t<e;){const i=t+e>>>1;Ws(Se[i])<n?t=i+1:e=i}return t}function cl(n){(!Se.length||!Se.includes(n,Hs&&n.allowRecurse?fn+1:fn))&&(n.id==null?Se.push(n):Se.splice(cp(n.id),0,n),Ih())}function Ih(){!Hs&&!Ea&&(Ea=!0,ll=Rh.then(Nh))}function up(n){const t=Se.indexOf(n);t>fn&&Se.splice(t,1)}function hp(n){Ft(n)?es.push(...n):(!An||!An.includes(n,n.allowRecurse?fi+1:fi))&&es.push(n),Ih()}function ql(n,t=Hs?fn+1:0){for(;t<Se.length;t++){const e=Se[t];e&&e.pre&&(Se.splice(t,1),t--,e())}}function Oh(n){if(es.length){const t=[...new Set(es)];if(es.length=0,An){An.push(...t);return}for(An=t,An.sort((e,i)=>Ws(e)-Ws(i)),fi=0;fi<An.length;fi++)An[fi]();An=null,fi=0}}const Ws=n=>n.id==null?1/0:n.id,fp=(n,t)=>{const e=Ws(n)-Ws(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function Nh(n){Ea=!1,Hs=!0,Se.sort(fp);try{for(fn=0;fn<Se.length;fn++){const t=Se[fn];t&&t.active!==!1&&Jn(t,null,14)}}finally{fn=0,Se.length=0,Oh(),Hs=!1,ll=null,(Se.length||es.length)&&Nh()}}function dp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Kt;let s=e;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Kt;f&&(s=e.map(d=>d.trim())),h&&(s=e.map(Ma))}let a,l=i[a=Lo(t)]||i[a=Lo(mn(t))];!l&&r&&(l=i[a=Lo(ps(t))]),l&&sn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,sn(c,n,6,s)}}function Fh(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!zt(n)){const l=c=>{const u=Fh(c,t,!0);u&&(a=!0,Re(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ie(n)&&i.set(n,null),null):(Ft(r)?r.forEach(l=>o[l]=null):Re(o,r),ie(n)&&i.set(n,o),o)}function po(n,t){return!n||!ao(t)?!1:(t=t.slice(2).replace(/Once$/,""),Gt(n,t[0].toLowerCase()+t.slice(1))||Gt(n,ps(t))||Gt(n,t))}let Pe=null,mo=null;function Qr(n){const t=Pe;return Pe=n,mo=n&&n.type.__scopeId||null,t}function pp(n){mo=n}function mp(){mo=null}function zh(n,t=Pe,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&nc(-1);const r=Qr(t);let o;try{o=n(...s)}finally{Qr(r),i._d&&nc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ro(n){const{type:t,vnode:e,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:m}=n;let p,_;const y=Qr(n);try{if(e.shapeFlag&4){const v=s||i;p=un(u.call(v,v,h,r,d,f,g)),_=l}else{const v=t;p=un(v.length>1?v(r,{attrs:l,slots:a,emit:c}):v(r,null)),_=t.props?l:gp(l)}}catch(v){Ns.length=0,fo(v,n,1),p=xe(Qn)}let x=p;if(_&&m!==!1){const v=Object.keys(_),{shapeFlag:A}=x;v.length&&A&7&&(o&&v.some(Ka)&&(_=_p(_,o)),x=rs(x,_))}return e.dirs&&(x=rs(x),x.dirs=x.dirs?x.dirs.concat(e.dirs):e.dirs),e.transition&&(x.transition=e.transition),p=x,Qr(y),p}const gp=n=>{let t;for(const e in n)(e==="class"||e==="style"||ao(e))&&((t||(t={}))[e]=n[e]);return t},_p=(n,t)=>{const e={};for(const i in n)(!Ka(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function vp(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Xl(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!po(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Xl(i,o,c):!0:!!o;return!1}function Xl(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!po(e,r))return!0}return!1}function xp({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}const yp=n=>n.__isSuspense;function Mp(n,t){t&&t.pendingBranch?Ft(n)?t.effects.push(...n):t.effects.push(n):hp(n)}function Hr(n,t){if(ve){let e=ve.provides;const i=ve.parent&&ve.parent.provides;i===e&&(e=ve.provides=Object.create(i)),e[n]=t}}function Zn(n,t,e=!1){const i=ve||Pe;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return e&&zt(t)?t.call(i.proxy):t}}function nS(n,t){return ul(n,null,t)}const jl={};function Wr(n,t,e){return ul(n,t,e)}function ul(n,t,{immediate:e,deep:i,flush:s,onTrack:r,onTrigger:o}=Kt){const a=ve;let l,c=!1,u=!1;if(we(n)?(l=()=>n.value,c=Kr(n)):Qi(n)?(l=()=>n,i=!0):Ft(n)?(u=!0,c=n.some(_=>Qi(_)||Kr(_)),l=()=>n.map(_=>{if(we(_))return _.value;if(Qi(_))return mi(_);if(zt(_))return Jn(_,a,2)})):zt(n)?t?l=()=>Jn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),sn(n,a,3,[f])}:l=pn,t&&i){const _=l;l=()=>mi(_())}let h,f=_=>{h=p.onStop=()=>{Jn(_,a,4)}};if(Xs)return f=pn,t?e&&sn(t,a,3,[l(),u?[]:void 0,f]):l(),pn;let d=u?[]:jl;const g=()=>{if(p.active)if(t){const _=p.run();(i||c||(u?_.some((y,x)=>ks(y,d[x])):ks(_,d)))&&(h&&h(),sn(t,a,3,[_,d===jl?void 0:d,f]),d=_)}else p.run()};g.allowRecurse=!!t;let m;s==="sync"?m=g:s==="post"?m=()=>De(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>cl(g));const p=new nl(l,m);return t?e?g():d=p.run():s==="post"?De(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&$a(a.scope.effects,p)}}function bp(n,t,e){const i=this.proxy,s=ce(n)?n.includes(".")?Uh(i,n):()=>i[n]:n.bind(i,i);let r;zt(t)?r=t:(r=t.handler,e=t);const o=ve;os(this);const a=ul(s,r.bind(i),e);return o?os(o):yi(),a}function Uh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}function mi(n,t){if(!ie(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),we(n))mi(n.value,t);else if(Ft(n))for(let e=0;e<n.length;e++)mi(n[e],t);else if(ch(n)||$i(n))n.forEach(e=>{mi(e,t)});else if(fh(n))for(const e in n)mi(n[e],t);return n}function tr(n){return zt(n)?{setup:n,name:n.name}:n}const Os=n=>!!n.type.__asyncLoader,Bh=n=>n.type.__isKeepAlive;function Sp(n,t){Vh(n,"a",t)}function wp(n,t){Vh(n,"da",t)}function Vh(n,t,e=ve){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(go(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Bh(s.parent.vnode)&&Ap(i,t,e,s),s=s.parent}}function Ap(n,t,e,i){const s=go(t,n,i,!0);hl(()=>{$a(i[t],s)},e)}function go(n,t,e=ve,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;ms(),os(e);const a=sn(t,e,n,o);return yi(),gs(),a});return i?s.unshift(r):s.push(r),r}}const Dn=n=>(t,e=ve)=>(!Xs||n==="sp")&&go(n,(...i)=>t(...i),e),Ep=Dn("bm"),kh=Dn("m"),Tp=Dn("bu"),Cp=Dn("u"),Pp=Dn("bum"),hl=Dn("um"),Lp=Dn("sp"),Rp=Dn("rtg"),Dp=Dn("rtc");function Ip(n,t=ve){go("ec",n,t)}function iS(n,t){const e=Pe;if(e===null)return n;const i=vo(e)||e.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=Kt]=t[r];zt(o)&&(o={mounted:o,updated:o}),o.deep&&mi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function si(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ms(),sn(l,e,8,[n.el,a,n,t]),gs())}}const fl="components";function Gh(n,t){return Wh(fl,n,!0,t)||n}const Hh=Symbol();function sS(n){return ce(n)?Wh(fl,n,!1)||n:n||Hh}function Wh(n,t,e=!0,i=!1){const s=Pe||ve;if(s){const r=s.type;if(n===fl){const a=lm(r,!1);if(a&&(a===t||a===mn(t)||a===uo(mn(t))))return r}const o=Yl(s[n]||r[n],t)||Yl(s.appContext[n],t);return!o&&i?r:o}}function Yl(n,t){return n&&(n[t]||n[mn(t)]||n[uo(mn(t))])}function Jl(n,t,e,i){let s;const r=e&&e[i];if(Ft(n)||ce(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=t(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r&&r[o])}else if(ie(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(n[c],c,a,r&&r[a])}}else s=[];return e&&(e[i]=s),s}function rS(n,t,e={},i,s){if(Pe.isCE||Pe.parent&&Os(Pe.parent)&&Pe.parent.isCE)return xe("slot",t==="default"?null:{name:t},i&&i());let r=n[t];r&&r._c&&(r._d=!1),He();const o=r&&qh(r(e)),a=gl(Fe,{key:e.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&n._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function qh(n){return n.some(t=>no(t)?!(t.type===Qn||t.type===Fe&&!qh(t.children)):!0)?n:null}const Ta=n=>n?sf(n)?vo(n)||n.proxy:Ta(n.parent):null,to=Re(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ta(n.parent),$root:n=>Ta(n.root),$emit:n=>n.emit,$options:n=>dl(n),$forceUpdate:n=>n.f||(n.f=()=>cl(n.update)),$nextTick:n=>n.n||(n.n=Dh.bind(n.proxy)),$watch:n=>bp.bind(n)}),Op={get({_:n},t){const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(i!==Kt&&Gt(i,t))return o[t]=1,i[t];if(s!==Kt&&Gt(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&Gt(c,t))return o[t]=3,r[t];if(e!==Kt&&Gt(e,t))return o[t]=4,e[t];Ca&&(o[t]=0)}}const u=to[t];let h,f;if(u)return t==="$attrs"&&Ue(n,"get",t),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==Kt&&Gt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,Gt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return s!==Kt&&Gt(s,t)?(s[t]=e,!0):i!==Kt&&Gt(i,t)?(i[t]=e,!0):Gt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==Kt&&Gt(n,o)||t!==Kt&&Gt(t,o)||(a=r[0])&&Gt(a,o)||Gt(i,o)||Gt(to,o)||Gt(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Gt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};let Ca=!0;function Np(n){const t=dl(n),e=n.proxy,i=n.ctx;Ca=!1,t.beforeCreate&&Zl(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:_,beforeUnmount:y,destroyed:x,unmounted:v,render:A,renderTracked:T,renderTriggered:R,errorCaptured:M,serverPrefetch:P,expose:I,inheritAttrs:j,components:at,directives:k,filters:O}=t;if(c&&Fp(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const st in o){const X=o[st];zt(X)&&(i[st]=X.bind(e))}if(s){const st=s.call(e,e);ie(st)&&(n.data=Qs(st))}if(Ca=!0,r)for(const st in r){const X=r[st],V=zt(X)?X.bind(e,e):zt(X.get)?X.get.bind(e,e):pn,H=!zt(X)&&zt(X.set)?X.set.bind(e):pn,ft=qe({get:V,set:H});Object.defineProperty(i,st,{enumerable:!0,configurable:!0,get:()=>ft.value,set:lt=>ft.value=lt})}if(a)for(const st in a)Xh(a[st],i,e,st);if(l){const st=zt(l)?l.call(e):l;Reflect.ownKeys(st).forEach(X=>{Hr(X,st[X])})}u&&Zl(u,n,"c");function K(st,X){Ft(X)?X.forEach(V=>st(V.bind(e))):X&&st(X.bind(e))}if(K(Ep,h),K(kh,f),K(Tp,d),K(Cp,g),K(Sp,m),K(wp,p),K(Ip,M),K(Dp,T),K(Rp,R),K(Pp,y),K(hl,v),K(Lp,P),Ft(I))if(I.length){const st=n.exposed||(n.exposed={});I.forEach(X=>{Object.defineProperty(st,X,{get:()=>e[X],set:V=>e[X]=V})})}else n.exposed||(n.exposed={});A&&n.render===pn&&(n.render=A),j!=null&&(n.inheritAttrs=j),at&&(n.components=at),k&&(n.directives=k)}function Fp(n,t,e=pn,i=!1){Ft(n)&&(n=Pa(n));for(const s in n){const r=n[s];let o;ie(r)?"default"in r?o=Zn(r.from||s,r.default,!0):o=Zn(r.from||s):o=Zn(r),we(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function Zl(n,t,e){sn(Ft(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Xh(n,t,e,i){const s=i.includes(".")?Uh(e,i):()=>e[i];if(ce(n)){const r=t[n];zt(r)&&Wr(s,r)}else if(zt(n))Wr(s,n.bind(e));else if(ie(n))if(Ft(n))n.forEach(r=>Xh(r,t,e,i));else{const r=zt(n.handler)?n.handler.bind(e):t[n.handler];zt(r)&&Wr(s,r,n)}}function dl(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>eo(l,c,o,!0)),eo(l,t,o)),ie(t)&&r.set(t,l),l}function eo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&eo(n,r,e,!0),s&&s.forEach(o=>eo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=zp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const zp={data:Kl,props:ci,emits:ci,methods:ci,computed:ci,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:ci,directives:ci,watch:Bp,provide:Kl,inject:Up};function Kl(n,t){return t?n?function(){return Re(zt(n)?n.call(this,this):n,zt(t)?t.call(this,this):t)}:t:n}function Up(n,t){return ci(Pa(n),Pa(t))}function Pa(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Te(n,t){return n?[...new Set([].concat(n,t))]:t}function ci(n,t){return n?Re(Re(Object.create(null),n),t):t}function Bp(n,t){if(!n)return t;if(!t)return n;const e=Re(Object.create(null),n);for(const i in t)e[i]=Te(n[i],t[i]);return e}function Vp(n,t,e,i=!1){const s={},r={};Zr(r,_o,1),n.propsDefaults=Object.create(null),jh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:np(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function kp(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Yt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(po(n.emitsOptions,f))continue;const d=t[f];if(l)if(Gt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=mn(f);s[g]=La(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{jh(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!Gt(t,h)&&((u=ps(h))===h||!Gt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=La(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!Gt(t,h))&&(delete r[h],c=!0)}c&&Rn(n,"set","$attrs")}function jh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(kr(l))continue;const c=t[l];let u;s&&Gt(s,u=mn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:po(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Yt(e),c=a||Kt;for(let u=0;u<r.length;u++){const h=r[u];e[h]=La(s,l,h,c[h],n,!Gt(c,h))}}return o}function La(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&zt(l)){const{propsDefaults:c}=s;e in c?i=c[e]:(os(s),i=c[e]=l.call(null,t),yi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ps(e))&&(i=!0))}return i}function Yh(n,t,e=!1){const i=t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!zt(n)){const u=h=>{l=!0;const[f,d]=Yh(h,t,!0);Re(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ie(n)&&i.set(n,Ki),Ki;if(Ft(r))for(let u=0;u<r.length;u++){const h=mn(r[u]);$l(h)&&(o[h]=Kt)}else if(r)for(const u in r){const h=mn(u);if($l(h)){const f=r[u],d=o[h]=Ft(f)||zt(f)?{type:f}:f;if(d){const g=ec(Boolean,d.type),m=ec(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||Gt(d,"default"))&&a.push(h)}}}const c=[o,a];return ie(n)&&i.set(n,c),c}function $l(n){return n[0]!=="$"}function Ql(n){const t=n&&n.toString().match(/^\s*function (\w+)/);return t?t[1]:n===null?"null":""}function tc(n,t){return Ql(n)===Ql(t)}function ec(n,t){return Ft(t)?t.findIndex(e=>tc(e,n)):zt(t)&&tc(t,n)?0:-1}const Jh=n=>n[0]==="_"||n==="$stable",pl=n=>Ft(n)?n.map(un):[un(n)],Gp=(n,t,e)=>{if(t._n)return t;const i=zh((...s)=>pl(t(...s)),e);return i._c=!1,i},Zh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Jh(s))continue;const r=n[s];if(zt(r))t[s]=Gp(s,r,i);else if(r!=null){const o=pl(r);t[s]=()=>o}}},Kh=(n,t)=>{const e=pl(t);n.slots.default=()=>e},Hp=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=Yt(t),Zr(t,"_",e)):Zh(t,n.slots={})}else n.slots={},t&&Kh(n,t);Zr(n.slots,_o,1)},Wp=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Kt;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:(Re(s,t),!e&&a===1&&delete s._):(r=!t.$stable,Zh(t,s)),o=t}else t&&(Kh(n,t),o={default:1});if(r)for(const a in s)!Jh(a)&&!(a in o)&&delete s[a]};function $h(){return{app:null,config:{isNativeTag:bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qp=0;function Xp(n,t){return function(i,s=null){zt(i)||(i=Object.assign({},i)),s!=null&&!ie(s)&&(s=null);const r=$h(),o=new Set;let a=!1;const l=r.app={_uid:qp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:um,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&zt(c.install)?(o.add(c),c.install(l,...u)):zt(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=xe(i,s);return f.appContext=r,u&&t?t(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,vo(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Ra(n,t,e,i,s=!1){if(Ft(n)){n.forEach((f,d)=>Ra(f,t&&(Ft(t)?t[d]:t),e,i,s));return}if(Os(i)&&!s)return;const r=i.shapeFlag&4?vo(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===Kt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ce(c)?(u[c]=null,Gt(h,c)&&(h[c]=null)):we(c)&&(c.value=null)),zt(l))Jn(l,a,12,[o,u]);else{const f=ce(l),d=we(l);if(f||d){const g=()=>{if(n.f){const m=f?Gt(h,l)?h[l]:u[l]:l.value;s?Ft(m)&&$a(m,r):Ft(m)?m.includes(r)||m.push(r):f?(u[l]=[r],Gt(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,Gt(h,l)&&(h[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,De(g,e)):g()}}}const De=Mp;function jp(n){return Yp(n)}function Yp(n,t){const e=Cd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=pn,insertStaticContent:g}=n,m=(b,w,D,U=null,B=null,Q=null,rt=!1,Y=null,ht=!!w.dynamicChildren)=>{if(b===w)return;b&&!bs(b,w)&&(U=ct(b),lt(b,B,Q,!0),b=null),w.patchFlag===-2&&(ht=!1,w.dynamicChildren=null);const{type:tt,ref:E,shapeFlag:S}=w;switch(tt){case ml:p(b,w,D,U);break;case Qn:_(b,w,D,U);break;case qr:b==null&&y(w,D,U,rt);break;case Fe:at(b,w,D,U,B,Q,rt,Y,ht);break;default:S&1?A(b,w,D,U,B,Q,rt,Y,ht):S&6?k(b,w,D,U,B,Q,rt,Y,ht):(S&64||S&128)&&tt.process(b,w,D,U,B,Q,rt,Y,ht,xt)}E!=null&&B&&Ra(E,b&&b.ref,Q,w||b,!w)},p=(b,w,D,U)=>{if(b==null)i(w.el=a(w.children),D,U);else{const B=w.el=b.el;w.children!==b.children&&c(B,w.children)}},_=(b,w,D,U)=>{b==null?i(w.el=l(w.children||""),D,U):w.el=b.el},y=(b,w,D,U)=>{[b.el,b.anchor]=g(b.children,w,D,U,b.el,b.anchor)},x=({el:b,anchor:w},D,U)=>{let B;for(;b&&b!==w;)B=f(b),i(b,D,U),b=B;i(w,D,U)},v=({el:b,anchor:w})=>{let D;for(;b&&b!==w;)D=f(b),s(b),b=D;s(w)},A=(b,w,D,U,B,Q,rt,Y,ht)=>{rt=rt||w.type==="svg",b==null?T(w,D,U,B,Q,rt,Y,ht):P(b,w,B,Q,rt,Y,ht)},T=(b,w,D,U,B,Q,rt,Y)=>{let ht,tt;const{type:E,props:S,shapeFlag:N,transition:Z,dirs:nt}=b;if(ht=b.el=o(b.type,Q,S&&S.is,S),N&8?u(ht,b.children):N&16&&M(b.children,ht,null,U,B,Q&&E!=="foreignObject",rt,Y),nt&&si(b,null,U,"created"),S){for(const bt in S)bt!=="value"&&!kr(bt)&&r(ht,bt,null,S[bt],Q,b.children,U,B,z);"value"in S&&r(ht,"value",null,S.value),(tt=S.onVnodeBeforeMount)&&ln(tt,U,b)}R(ht,b,b.scopeId,rt,U),nt&&si(b,null,U,"beforeMount");const dt=(!B||B&&!B.pendingBranch)&&Z&&!Z.persisted;dt&&Z.beforeEnter(ht),i(ht,w,D),((tt=S&&S.onVnodeMounted)||dt||nt)&&De(()=>{tt&&ln(tt,U,b),dt&&Z.enter(ht),nt&&si(b,null,U,"mounted")},B)},R=(b,w,D,U,B)=>{if(D&&d(b,D),U)for(let Q=0;Q<U.length;Q++)d(b,U[Q]);if(B){let Q=B.subTree;if(w===Q){const rt=B.vnode;R(b,rt,rt.scopeId,rt.slotScopeIds,B.parent)}}},M=(b,w,D,U,B,Q,rt,Y,ht=0)=>{for(let tt=ht;tt<b.length;tt++){const E=b[tt]=Y?Wn(b[tt]):un(b[tt]);m(null,E,w,D,U,B,Q,rt,Y)}},P=(b,w,D,U,B,Q,rt)=>{const Y=w.el=b.el;let{patchFlag:ht,dynamicChildren:tt,dirs:E}=w;ht|=b.patchFlag&16;const S=b.props||Kt,N=w.props||Kt;let Z;D&&ri(D,!1),(Z=N.onVnodeBeforeUpdate)&&ln(Z,D,w,b),E&&si(w,b,D,"beforeUpdate"),D&&ri(D,!0);const nt=B&&w.type!=="foreignObject";if(tt?I(b.dynamicChildren,tt,Y,D,U,nt,Q):rt||X(b,w,Y,null,D,U,nt,Q,!1),ht>0){if(ht&16)j(Y,w,S,N,D,U,B);else if(ht&2&&S.class!==N.class&&r(Y,"class",null,N.class,B),ht&4&&r(Y,"style",S.style,N.style,B),ht&8){const dt=w.dynamicProps;for(let bt=0;bt<dt.length;bt++){const mt=dt[bt],$=S[mt],Ct=N[mt];(Ct!==$||mt==="value")&&r(Y,mt,$,Ct,B,b.children,D,U,z)}}ht&1&&b.children!==w.children&&u(Y,w.children)}else!rt&&tt==null&&j(Y,w,S,N,D,U,B);((Z=N.onVnodeUpdated)||E)&&De(()=>{Z&&ln(Z,D,w,b),E&&si(w,b,D,"updated")},U)},I=(b,w,D,U,B,Q,rt)=>{for(let Y=0;Y<w.length;Y++){const ht=b[Y],tt=w[Y],E=ht.el&&(ht.type===Fe||!bs(ht,tt)||ht.shapeFlag&70)?h(ht.el):D;m(ht,tt,E,null,U,B,Q,rt,!0)}},j=(b,w,D,U,B,Q,rt)=>{if(D!==U){if(D!==Kt)for(const Y in D)!kr(Y)&&!(Y in U)&&r(b,Y,D[Y],null,rt,w.children,B,Q,z);for(const Y in U){if(kr(Y))continue;const ht=U[Y],tt=D[Y];ht!==tt&&Y!=="value"&&r(b,Y,tt,ht,rt,w.children,B,Q,z)}"value"in U&&r(b,"value",D.value,U.value)}},at=(b,w,D,U,B,Q,rt,Y,ht)=>{const tt=w.el=b?b.el:a(""),E=w.anchor=b?b.anchor:a("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:Z}=w;Z&&(Y=Y?Y.concat(Z):Z),b==null?(i(tt,D,U),i(E,D,U),M(w.children,D,E,B,Q,rt,Y,ht)):S>0&&S&64&&N&&b.dynamicChildren?(I(b.dynamicChildren,N,D,B,Q,rt,Y),(w.key!=null||B&&w===B.subTree)&&Qh(b,w,!0)):X(b,w,D,E,B,Q,rt,Y,ht)},k=(b,w,D,U,B,Q,rt,Y,ht)=>{w.slotScopeIds=Y,b==null?w.shapeFlag&512?B.ctx.activate(w,D,U,rt,ht):O(w,D,U,B,Q,rt,ht):J(b,w,ht)},O=(b,w,D,U,B,Q,rt)=>{const Y=b.component=im(b,U,B);if(Bh(b)&&(Y.ctx.renderer=xt),sm(Y),Y.asyncDep){if(B&&B.registerDep(Y,K),!b.el){const ht=Y.subTree=xe(Qn);_(null,ht,w,D)}return}K(Y,b,w,D,B,Q,rt)},J=(b,w,D)=>{const U=w.component=b.component;if(vp(b,w,D))if(U.asyncDep&&!U.asyncResolved){st(U,w,D);return}else U.next=w,up(U.update),U.update();else w.el=b.el,U.vnode=w},K=(b,w,D,U,B,Q,rt)=>{const Y=()=>{if(b.isMounted){let{next:E,bu:S,u:N,parent:Z,vnode:nt}=b,dt=E,bt;ri(b,!1),E?(E.el=nt.el,st(b,E,rt)):E=nt,S&&Gr(S),(bt=E.props&&E.props.onVnodeBeforeUpdate)&&ln(bt,Z,E,nt),ri(b,!0);const mt=Ro(b),$=b.subTree;b.subTree=mt,m($,mt,h($.el),ct($),b,B,Q),E.el=mt.el,dt===null&&xp(b,mt.el),N&&De(N,B),(bt=E.props&&E.props.onVnodeUpdated)&&De(()=>ln(bt,Z,E,nt),B)}else{let E;const{el:S,props:N}=w,{bm:Z,m:nt,parent:dt}=b,bt=Os(w);if(ri(b,!1),Z&&Gr(Z),!bt&&(E=N&&N.onVnodeBeforeMount)&&ln(E,dt,w),ri(b,!0),S&&Mt){const mt=()=>{b.subTree=Ro(b),Mt(S,b.subTree,b,B,null)};bt?w.type.__asyncLoader().then(()=>!b.isUnmounted&&mt()):mt()}else{const mt=b.subTree=Ro(b);m(null,mt,D,U,b,B,Q),w.el=mt.el}if(nt&&De(nt,B),!bt&&(E=N&&N.onVnodeMounted)){const mt=w;De(()=>ln(E,dt,mt),B)}(w.shapeFlag&256||dt&&Os(dt.vnode)&&dt.vnode.shapeFlag&256)&&b.a&&De(b.a,B),b.isMounted=!0,w=D=U=null}},ht=b.effect=new nl(Y,()=>cl(tt),b.scope),tt=b.update=()=>ht.run();tt.id=b.uid,ri(b,!0),tt()},st=(b,w,D)=>{w.component=b;const U=b.vnode.props;b.vnode=w,b.next=null,kp(b,w.props,U,D),Wp(b,w.children,D),ms(),ql(),gs()},X=(b,w,D,U,B,Q,rt,Y,ht=!1)=>{const tt=b&&b.children,E=b?b.shapeFlag:0,S=w.children,{patchFlag:N,shapeFlag:Z}=w;if(N>0){if(N&128){H(tt,S,D,U,B,Q,rt,Y,ht);return}else if(N&256){V(tt,S,D,U,B,Q,rt,Y,ht);return}}Z&8?(E&16&&z(tt,B,Q),S!==tt&&u(D,S)):E&16?Z&16?H(tt,S,D,U,B,Q,rt,Y,ht):z(tt,B,Q,!0):(E&8&&u(D,""),Z&16&&M(S,D,U,B,Q,rt,Y,ht))},V=(b,w,D,U,B,Q,rt,Y,ht)=>{b=b||Ki,w=w||Ki;const tt=b.length,E=w.length,S=Math.min(tt,E);let N;for(N=0;N<S;N++){const Z=w[N]=ht?Wn(w[N]):un(w[N]);m(b[N],Z,D,null,B,Q,rt,Y,ht)}tt>E?z(b,B,Q,!0,!1,S):M(w,D,U,B,Q,rt,Y,ht,S)},H=(b,w,D,U,B,Q,rt,Y,ht)=>{let tt=0;const E=w.length;let S=b.length-1,N=E-1;for(;tt<=S&&tt<=N;){const Z=b[tt],nt=w[tt]=ht?Wn(w[tt]):un(w[tt]);if(bs(Z,nt))m(Z,nt,D,null,B,Q,rt,Y,ht);else break;tt++}for(;tt<=S&&tt<=N;){const Z=b[S],nt=w[N]=ht?Wn(w[N]):un(w[N]);if(bs(Z,nt))m(Z,nt,D,null,B,Q,rt,Y,ht);else break;S--,N--}if(tt>S){if(tt<=N){const Z=N+1,nt=Z<E?w[Z].el:U;for(;tt<=N;)m(null,w[tt]=ht?Wn(w[tt]):un(w[tt]),D,nt,B,Q,rt,Y,ht),tt++}}else if(tt>N)for(;tt<=S;)lt(b[tt],B,Q,!0),tt++;else{const Z=tt,nt=tt,dt=new Map;for(tt=nt;tt<=N;tt++){const wt=w[tt]=ht?Wn(w[tt]):un(w[tt]);wt.key!=null&&dt.set(wt.key,tt)}let bt,mt=0;const $=N-nt+1;let Ct=!1,Dt=0;const Tt=new Array($);for(tt=0;tt<$;tt++)Tt[tt]=0;for(tt=Z;tt<=S;tt++){const wt=b[tt];if(mt>=$){lt(wt,B,Q,!0);continue}let Ot;if(wt.key!=null)Ot=dt.get(wt.key);else for(bt=nt;bt<=N;bt++)if(Tt[bt-nt]===0&&bs(wt,w[bt])){Ot=bt;break}Ot===void 0?lt(wt,B,Q,!0):(Tt[Ot-nt]=tt+1,Ot>=Dt?Dt=Ot:Ct=!0,m(wt,w[Ot],D,null,B,Q,rt,Y,ht),mt++)}const Lt=Ct?Jp(Tt):Ki;for(bt=Lt.length-1,tt=$-1;tt>=0;tt--){const wt=nt+tt,Ot=w[wt],Zt=wt+1<E?w[wt+1].el:U;Tt[tt]===0?m(null,Ot,D,Zt,B,Q,rt,Y,ht):Ct&&(bt<0||tt!==Lt[bt]?ft(Ot,D,Zt,2):bt--)}}},ft=(b,w,D,U,B=null)=>{const{el:Q,type:rt,transition:Y,children:ht,shapeFlag:tt}=b;if(tt&6){ft(b.component.subTree,w,D,U);return}if(tt&128){b.suspense.move(w,D,U);return}if(tt&64){rt.move(b,w,D,xt);return}if(rt===Fe){i(Q,w,D);for(let S=0;S<ht.length;S++)ft(ht[S],w,D,U);i(b.anchor,w,D);return}if(rt===qr){x(b,w,D);return}if(U!==2&&tt&1&&Y)if(U===0)Y.beforeEnter(Q),i(Q,w,D),De(()=>Y.enter(Q),B);else{const{leave:S,delayLeave:N,afterLeave:Z}=Y,nt=()=>i(Q,w,D),dt=()=>{S(Q,()=>{nt(),Z&&Z()})};N?N(Q,nt,dt):dt()}else i(Q,w,D)},lt=(b,w,D,U=!1,B=!1)=>{const{type:Q,props:rt,ref:Y,children:ht,dynamicChildren:tt,shapeFlag:E,patchFlag:S,dirs:N}=b;if(Y!=null&&Ra(Y,null,D,b,!0),E&256){w.ctx.deactivate(b);return}const Z=E&1&&N,nt=!Os(b);let dt;if(nt&&(dt=rt&&rt.onVnodeBeforeUnmount)&&ln(dt,w,b),E&6)W(b.component,D,U);else{if(E&128){b.suspense.unmount(D,U);return}Z&&si(b,null,w,"beforeUnmount"),E&64?b.type.remove(b,w,D,B,xt,U):tt&&(Q!==Fe||S>0&&S&64)?z(tt,w,D,!1,!0):(Q===Fe&&S&384||!B&&E&16)&&z(ht,w,D),U&&vt(b)}(nt&&(dt=rt&&rt.onVnodeUnmounted)||Z)&&De(()=>{dt&&ln(dt,w,b),Z&&si(b,null,w,"unmounted")},D)},vt=b=>{const{type:w,el:D,anchor:U,transition:B}=b;if(w===Fe){Et(D,U);return}if(w===qr){v(b);return}const Q=()=>{s(D),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(b.shapeFlag&1&&B&&!B.persisted){const{leave:rt,delayLeave:Y}=B,ht=()=>rt(D,Q);Y?Y(b.el,Q,ht):ht()}else Q()},Et=(b,w)=>{let D;for(;b!==w;)D=f(b),s(b),b=D;s(w)},W=(b,w,D)=>{const{bum:U,scope:B,update:Q,subTree:rt,um:Y}=b;U&&Gr(U),B.stop(),Q&&(Q.active=!1,lt(rt,b,w,D)),Y&&De(Y,w),De(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},z=(b,w,D,U=!1,B=!1,Q=0)=>{for(let rt=Q;rt<b.length;rt++)lt(b[rt],w,D,U,B)},ct=b=>b.shapeFlag&6?ct(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),ut=(b,w,D)=>{b==null?w._vnode&&lt(w._vnode,null,null,!0):m(w._vnode||null,b,w,null,null,null,D),ql(),Oh(),w._vnode=b},xt={p:m,um:lt,m:ft,r:vt,mt:O,mc:M,pc:X,pbc:I,n:ct,o:n};let pt,Mt;return t&&([pt,Mt]=t(xt)),{render:ut,hydrate:pt,createApp:Xp(ut,pt)}}function ri({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function Qh(n,t,e=!1){const i=n.children,s=t.children;if(Ft(i)&&Ft(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wn(s[r]),a.el=o.el),e||Qh(o,a))}}function Jp(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}const Zp=n=>n.__isTeleport,Fe=Symbol(void 0),ml=Symbol(void 0),Qn=Symbol(void 0),qr=Symbol(void 0),Ns=[];let en=null;function He(n=!1){Ns.push(en=n?null:[])}function Kp(){Ns.pop(),en=Ns[Ns.length-1]||null}let qs=1;function nc(n){qs+=n}function tf(n){return n.dynamicChildren=qs>0?en||Ki:null,Kp(),qs>0&&en&&en.push(n),n}function Tn(n,t,e,i,s,r){return tf(rn(n,t,e,i,s,r,!0))}function gl(n,t,e,i,s){return tf(xe(n,t,e,i,s,!0))}function no(n){return n?n.__v_isVNode===!0:!1}function bs(n,t){return n.type===t.type&&n.key===t.key}const _o="__vInternal",ef=({key:n})=>n??null,Xr=({ref:n,ref_key:t,ref_for:e})=>n!=null?ce(n)||we(n)||zt(n)?{i:Pe,r:n,k:t,f:!!e}:n:null;function rn(n,t=null,e=null,i=0,s=null,r=n===Fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&ef(t),ref:t&&Xr(t),scopeId:mo,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(_l(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ce(e)?8:16),qs>0&&!o&&en&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&en.push(l),l}const xe=$p;function $p(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Hh)&&(n=Qn),no(n)){const a=rs(n,t,!0);return e&&_l(a,e),qs>0&&!r&&en&&(a.shapeFlag&6?en[en.indexOf(n)]=a:en.push(a)),a.patchFlag|=-2,a}if(cm(n)&&(n=n.__vccOpts),t){t=Qp(t);let{class:a,style:l}=t;a&&!ce(a)&&(t.class=oo(a)),ie(l)&&(wh(l)&&!Ft(l)&&(l=Re({},l)),t.style=ro(l))}const o=ce(n)?1:yp(n)?128:Zp(n)?64:ie(n)?4:zt(n)?2:0;return rn(n,t,e,i,s,o,r,!0)}function Qp(n){return n?wh(n)||_o in n?Re({},n):n:null}function rs(n,t,e=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=t?tm(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&ef(a),ref:t&&t.ref?e&&s?Ft(s)?s.concat(Xr(t)):[s,Xr(t)]:Xr(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Fe?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rs(n.ssContent),ssFallback:n.ssFallback&&rs(n.ssFallback),el:n.el,anchor:n.anchor}}function nf(n=" ",t=0){return xe(ml,null,n,t)}function oS(n,t){const e=xe(qr,null,n);return e.staticCount=t,e}function aS(n="",t=!1){return t?(He(),gl(Qn,null,n)):xe(Qn,null,n)}function un(n){return n==null||typeof n=="boolean"?xe(Qn):Ft(n)?xe(Fe,null,n.slice()):typeof n=="object"?Wn(n):xe(ml,null,String(n))}function Wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rs(n)}function _l(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ft(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),_l(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!(_o in t)?t._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else zt(t)?(t={default:t,_ctx:Pe},e=32):(t=String(t),i&64?(e=16,t=[nf(t)]):e=8);n.children=t,n.shapeFlag|=e}function tm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=oo([t.class,i.class]));else if(s==="style")t.style=ro([t.style,i.style]);else if(ao(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ft(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function ln(n,t,e,i=null){sn(n,t,7,[e,i])}const em=$h();let nm=0;function im(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||em,r={uid:nm++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yh(i,s),emitsOptions:Fh(i,s),emit:null,emitted:null,propsDefaults:Kt,inheritAttrs:i.inheritAttrs,ctx:Kt,data:Kt,props:Kt,attrs:Kt,slots:Kt,refs:Kt,setupState:Kt,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=dp.bind(null,r),n.ce&&n.ce(r),r}let ve=null;const os=n=>{ve=n,n.scope.on()},yi=()=>{ve&&ve.scope.off(),ve=null};function sf(n){return n.vnode.shapeFlag&4}let Xs=!1;function sm(n,t=!1){Xs=t;const{props:e,children:i}=n.vnode,s=sf(n);Vp(n,e,s,t),Hp(n,i);const r=s?rm(n,t):void 0;return Xs=!1,r}function rm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=Ah(new Proxy(n.ctx,Op));const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?am(n):null;os(n),ms();const r=Jn(i,n,0,[n.props,s]);if(gs(),yi(),uh(r)){if(r.then(yi,yi),t)return r.then(o=>{ic(n,o,t)}).catch(o=>{fo(o,n,0)});n.asyncDep=r}else ic(n,r,t)}else rf(n,t)}function ic(n,t,e){zt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=Ph(t)),rf(n,e)}let sc;function rf(n,t,e){const i=n.type;if(!n.render){if(!t&&sc&&!i.render){const s=i.template||dl(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Re(Re({isCustomElement:r,delimiters:a},o),l);i.render=sc(s,c)}}n.render=i.render||pn}os(n),ms(),Np(n),gs(),yi()}function om(n){return new Proxy(n.attrs,{get(t,e){return Ue(n,"get","$attrs"),t[e]}})}function am(n){const t=i=>{n.exposed=i||{}};let e;return{get attrs(){return e||(e=om(n))},slots:n.slots,emit:n.emit,expose:t}}function vo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ph(Ah(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in to)return to[e](n)}}))}function lm(n,t=!0){return zt(n)?n.displayName||n.name:n.name||t&&n.__name}function cm(n){return zt(n)&&"__vccOpts"in n}const qe=(n,t)=>ap(n,t,Xs);function of(n,t,e){const i=arguments.length;return i===2?ie(t)&&!Ft(t)?no(t)?xe(n,null,[t]):xe(n,t):xe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&no(e)&&(e=[e]),xe(n,t,e))}const um="3.2.41",hm="http://www.w3.org/2000/svg",di=typeof document<"u"?document:null,rc=di&&di.createElement("template"),fm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t?di.createElementNS(hm,n):di.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>di.createTextNode(n),createComment:n=>di.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>di.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{rc.innerHTML=i?`<svg>${n}</svg>`:n;const a=rc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function dm(n,t,e){const i=n._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}function pm(n,t,e){const i=n.style,s=ce(e);if(e&&!s){for(const r in e)Da(i,r,e[r]);if(t&&!ce(t))for(const r in t)e[r]==null&&Da(i,r,"")}else{const r=i.display;s?t!==e&&(i.cssText=e):t&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const oc=/\s*!important$/;function Da(n,t,e){if(Ft(e))e.forEach(i=>Da(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=mm(n,t);oc.test(e)?n.setProperty(ps(i),e.replace(oc,""),"important"):n[i]=e}}const ac=["Webkit","Moz","ms"],Do={};function mm(n,t){const e=Do[t];if(e)return e;let i=mn(t);if(i!=="filter"&&i in n)return Do[t]=i;i=uo(i);for(let s=0;s<ac.length;s++){const r=ac[s]+i;if(r in n)return Do[t]=r}return t}const lc="http://www.w3.org/1999/xlink";function gm(n,t,e,i,s){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(lc,t.slice(6,t.length)):n.setAttributeNS(lc,t,e);else{const r=vd(t);e==null||r&&!ah(e)?n.removeAttribute(t):n.setAttribute(t,r?"":e)}}function _m(n,t,e,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),n[t]=e??"";return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=e;const l=e??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),e==null&&n.removeAttribute(t);return}let a=!1;if(e===""||e==null){const l=typeof n[t];l==="boolean"?e=ah(e):e==null&&l==="string"?(e="",a=!0):l==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(t)}function Xi(n,t,e,i){n.addEventListener(t,e,i)}function vm(n,t,e,i){n.removeEventListener(t,e,i)}function xm(n,t,e,i,s=null){const r=n._vei||(n._vei={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=ym(t);if(i){const c=r[t]=Sm(i,s);Xi(n,a,c,l)}else o&&(vm(n,a,o,l),r[t]=void 0)}}const cc=/(?:Once|Passive|Capture)$/;function ym(n){let t;if(cc.test(n)){t={};let i;for(;i=n.match(cc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ps(n.slice(2)),t]}let Io=0;const Mm=Promise.resolve(),bm=()=>Io||(Mm.then(()=>Io=0),Io=Date.now());function Sm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;sn(wm(i,e.value),t,5,[i])};return e.value=n,e.attached=bm(),e}function wm(n,t){if(Ft(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const uc=/^on[a-z]/,Am=(n,t,e,i,s=!1,r,o,a,l)=>{t==="class"?dm(n,i,s):t==="style"?pm(n,e,i):ao(t)?Ka(t)||xm(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Em(n,t,i,s))?_m(n,t,i,r,o,a,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),gm(n,t,i,s))};function Em(n,t,e,i){return i?!!(t==="innerHTML"||t==="textContent"||t in n&&uc.test(t)&&zt(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||uc.test(t)&&ce(e)?!1:t in n}const hc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ft(t)?e=>Gr(t,e):t};function Tm(n){n.target.composing=!0}function fc(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const lS={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n._assign=hc(s);const r=i||s.props&&s.props.type==="number";Xi(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),r&&(a=Ma(a)),n._assign(a)}),e&&Xi(n,"change",()=>{n.value=n.value.trim()}),t||(Xi(n,"compositionstart",Tm),Xi(n,"compositionend",fc),Xi(n,"change",fc))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,modifiers:{lazy:e,trim:i,number:s}},r){if(n._assign=hc(r),n.composing||document.activeElement===n&&n.type!=="range"&&(e||i&&n.value.trim()===t||(s||n.type==="number")&&Ma(n.value)===t))return;const o=t??"";n.value!==o&&(n.value=o)}},cS={beforeMount(n,{value:t},{transition:e}){n._vod=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Ss(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Ss(n,!0),i.enter(n)):i.leave(n,()=>{Ss(n,!1)}):Ss(n,t))},beforeUnmount(n,{value:t}){Ss(n,t)}};function Ss(n,t){n.style.display=t?n._vod:"none"}const Cm=Re({patchProp:Am},fm);let dc;function Pm(){return dc||(dc=jp(Cm))}const Lm=(...n)=>{const t=Pm().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Rm(i);if(!s)return;const r=t._component;!zt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Rm(n){return ce(n)?document.querySelector(n):n}const Dm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFC0lEQVR4nN3agVHbSBiG4W8riK6CiAoiKoioIKaCkyvAqeDkCmIqiKggTgVZKkBUgKjgRAXcuywKxpHtXdmAuHfmkZkBa+R/ZVkwGL1tGVw13qTXGECGL3CPyaMMfdVoH9X4Cff4Yr3UANwLziVNkGq/GklLWPmBHDSDQ5VK+gcTJHiJWiwxR6MDZLBvCc5Q6nUrJZ2jxeD2GUAC98JnSPAWtVhg8CCGDiCX9B2pxlEjaQqryAxic6u+wBibolJEBjG5VS807ir5QQRlEFKCX8jwHqpxghZbM9hVgvf04rtqnKDFxgx25V58rveZlR/Cxgy29R2F3neVtlwTDDZVyA/g/9AUlXoy6CvDFXb1FxKk8rfAzke8ZHdYwsp//if4gV0do8azDPq6QartXSLXn00ww2ccsluU6l/JGp+wrUbSEZ5lsF6hsFN/jlKby+UP9iNc13AH2ugpK1+GBC73mOEzXHcotf3my33vDLuaotJKBqsluEKq3Z1iiW0lyGA1LPfcFo22Vyhs0RqtnQUGq5Xyv9KGdAKrcZTLf1yHNEepxwy6EtzAPYZ0AqtxlCt8AC2O4B6fDaBU+Oq7TmA1jnKFD8A1Ryky6HLv/QyhzVFqHJWKW7wax/g9gFT+9I/pJyYYQ0t8QUxHaAwb1wzfENMxaoyhDFbSB4T2FYtuAFdwOwnt4ckYUzN8Q2g1jt0AEvyL0G6Rapw1errxCunIsCkUdhPRNUepcVYo7rWcGjal4q6gR2g03u4R2tywKRU+gGtkGHNLfEFIDwOwevrFY1fnmGHMlQpf0MvYAcxRatwVCr8OPAzgBqnCmqPUuMsVflvcGjb3CG2OUuMuV/gAZHCP0OYoNe4Khb8FHgbQKPzmYY5S465U+EXw1rCxCr8IXiLXuKsk/Y2QLg0bq/ABuNxzxtwNUoU1aACnWGKMZbhCaBduAKXC3zMuK//XoDFWKfz0d80Nm1wRHxuPncBqXKXyp39MJ4aN6x4x1TjGmPqFXHGZbgBWcdcB1zlmGEOl4t7Grkvkho1rgTPENkWlt61QxI3PSnOUho0rVfz7p6uSH8Rb5BbNLd6QjtAYNl1W8W+DrhpTuMfXKJVf9VzDukQuMugq5He63jUq+XJt/2NDJX9teKlBpPKrPsM+nWIJGazW4gNWW8I9oWuCSn/+3Go1KvlJu6/3KcNnTJBr/26R6jGD1Ur1X01rTOEeXRmstg+hq4UboFVcufw/PiQ4ZF+xwEMG69X4hPVanMLKN8EP7Oon3M8Oycqv/qG6Robf9Q0gl7+p6KvFMRr5FjjDpu6Qyj9vSKn8gnzAITqG29/vDPqqtPme+isW6HJfn6GvCxTar237j+kcMzzLoK8Ejfon38h/hq42QSF/9nTPuUahtYkPaIIf2Kc7pOo5Ew02lcHq6QWtdoolXqNUw2/SXHfItWEhDLZVqP/eoMUJarxGLfoWIqRTLNGbwa5K9X80tnA7t3r5rIZ9GkxRaUsGIVXafFG08t+/RKOXySp+ABcotCOD0Gb4hphi9r8tq7gBTFEpIIOYCvVfEzYVu/9NWYUN4A5uoSoFNuQAMyzxEbsasv++rHYP4BYT1AjOYEgJSu2+QRm6//Wstg/gHKX8hTmqfQ8wl79T+4S+9t1/l1X/AK5RKHLVVzvUARby1g/yUPu3er5v98IXqLRnhzrArlx+EH/DHWSGQ7TEF1ygkh/IQTJ4DyWPGh24/wALgxPtjCtEEQAAAABJRU5ErkJggg==",af=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Im={},Om=n=>(pp("data-v-fc931a84"),n=n(),mp(),n),Nm={class:"relative w-full h-full overflow-hidden"},Fm=Om(()=>rn("div",{class:"github absolute bottom-0 right-0 z-900 w-200px h-40px bg-#fff flex justify-center items-center"},[rn("a",{class:"flex items-center",href:"https://github.com/YuFengjie97/nova",target:"_blank"},[rn("img",{src:Dm,class:"w-36px h-36px m-l-4px",alt:""})])],-1));function zm(n,t){const e=Gh("router-view");return He(),Tn("div",Nm,[Fm,xe(e)])}const Ti=af(Im,[["render",zm],["__scopeId","data-v-fc931a84"]]);/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ji=typeof window<"u";function Um(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Jt=Object.assign;function Oo(n,t){const e={};for(const i in t){const s=t[i];e[i]=on(s)?s.map(n):n(s)}return e}const Fs=()=>{},on=Array.isArray,Bm=/\/$/,Vm=n=>n.replace(Bm,"");function No(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=n(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Wm(i??t,e),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function km(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function pc(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Gm(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&as(t.matched[i],e.matched[s])&&lf(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function as(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function lf(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Hm(n[e],t[e]))return!1;return!0}function Hm(n,t){return on(n)?mc(n,t):on(t)?mc(t,n):n===t}function mc(n,t){return on(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Wm(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/");let s=e.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var js;(function(n){n.pop="pop",n.push="push"})(js||(js={}));var zs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(zs||(zs={}));function qm(n){if(!n)if(ji){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Vm(n)}const Xm=/^[^#]+#/;function jm(n,t){return n.replace(Xm,"#")+t}function Ym(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const xo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jm(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Ym(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function gc(n,t){return(history.state?history.state.position-t:-1)+n}const Ia=new Map;function Zm(n,t){Ia.set(n,t)}function Km(n){const t=Ia.get(n);return Ia.delete(n),t}let $m=()=>location.protocol+"//"+location.host;function cf(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),pc(l,"")}return pc(e,n)+i+s}function Qm(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=cf(n,location),g=e.value,m=t.value;let p=0;if(f){if(e.value=d,t.value=f,o&&o===g){o=null;return}p=m?f.position-m.position:0}else i(d);s.forEach(_=>{_(e.value,g,{delta:p,type:js.pop,direction:p?p>0?zs.forward:zs.back:zs.unknown})})};function l(){o=e.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Jt({},f.state,{scroll:xo()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function _c(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?xo():null}}function tg(n){const{history:t,location:e}=window,i={value:cf(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+l:$m()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),e[u?"replace":"assign"](f)}}function o(l,c){const u=Jt({},t.state,_c(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Jt({},s.value,t.state,{forward:l,scroll:xo()});r(u.current,u,!0);const h=Jt({},_c(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function eg(n){n=qm(n);const t=tg(n),e=Qm(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=Jt({location:"",base:n,go:i,createHref:jm.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ng(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),eg(n)}function ig(n){return typeof n=="string"||n&&typeof n=="object"}function uf(n){return typeof n=="string"||typeof n=="symbol"}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hf=Symbol("");var vc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(vc||(vc={}));function ls(n,t){return Jt(new Error,{type:n,[hf]:!0},t)}function vn(n,t){return n instanceof Error&&hf in n&&(t==null||!!(n.type&t))}const xc="[^/]+?",sg={sensitive:!1,strict:!1,start:!0,end:!0},rg=/[.+*?^${}()[\]/\\]/g;function og(n,t){const e=Jt({},sg,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(e.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(rg,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:m,optional:p,regexp:_}=f;r.push({name:g,repeatable:m,optional:p});const y=_||xc;if(y!==xc){d+=10;try{new RegExp(`(${y})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+v.message)}}let x=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(x=p&&c.length<2?`(?:/${x})`:"/"+x),p&&(x+="?"),s+=x,d+=20,p&&(d+=-8),m&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:m,optional:p}=d,_=g in c?c[g]:"";if(on(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=on(_)?_.join("/"):_;if(!y)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function ag(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function lg(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=ag(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(yc(i))return 1;if(yc(s))return-1}return s.length-i.length}function yc(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const cg={type:0,value:""},ug=/[a-zA-Z0-9_]/;function hg(n){if(!n)return[[]];if(n==="/")return[[cg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=0,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(e===0?r.push({type:0,value:c}):e===1||e===2||e===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),e=1):f();break;case 4:f(),e=i;break;case 1:l==="("?e=2:ug.test(l)?f():(h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=3:u+=l;break;case 3:h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function fg(n,t,e){const i=og(hg(n.path),e),s=Jt(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function dg(n,t){const e=[],i=new Map;t=Sc({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,h,f){const d=!f,g=pg(u);g.aliasOf=f&&f.record;const m=Sc(t,u),p=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of x)p.push(Jt({},g,{components:f?f.record.components:g.components,path:v,aliasOf:f?f.record:g}))}let _,y;for(const x of p){const{path:v}=x;if(h&&v[0]!=="/"){const A=h.record.path,T=A[A.length-1]==="/"?"":"/";x.path=h.record.path+(v&&T+v)}if(_=fg(x,h,m),f?f.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),d&&u.name&&!bc(_)&&o(u.name)),g.children){const A=g.children;for(let T=0;T<A.length;T++)r(A[T],_,f&&f.children[T])}f=f||_,l(_)}return y?()=>{o(y)}:Fs}function o(u){if(uf(u)){const h=i.get(u);h&&(i.delete(u),e.splice(e.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=e.indexOf(u);h>-1&&(e.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){let h=0;for(;h<e.length&&lg(u,e[h])>=0&&(u.record.path!==e[h].record.path||!ff(u,e[h]));)h++;e.splice(h,0,u),u.record.name&&!bc(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},g,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw ls(1,{location:u});m=f.record.name,d=Jt(Mc(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Mc(u.params,f.keys.map(y=>y.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=e.find(y=>y.re.test(g)),f&&(d=f.parse(g),m=f.record.name);else{if(f=h.name?i.get(h.name):e.find(y=>y.re.test(h.path)),!f)throw ls(1,{location:u,currentLocation:h});m=f.record.name,d=Jt({},h.params,u.params),g=f.stringify(d)}const p=[];let _=f;for(;_;)p.unshift(_.record),_=_.parent;return{name:m,path:g,params:d,matched:p,meta:gg(p)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mc(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function pg(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:mg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function mg(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="boolean"?e:e[i];return t}function bc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function gg(n){return n.reduce((t,e)=>Jt(t,e.meta),{})}function Sc(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function ff(n,t){return t.children.some(e=>e===n||ff(n,e))}const df=/#/g,_g=/&/g,vg=/\//g,xg=/=/g,yg=/\?/g,pf=/\+/g,Mg=/%5B/g,bg=/%5D/g,mf=/%5E/g,Sg=/%60/g,gf=/%7B/g,wg=/%7C/g,_f=/%7D/g,Ag=/%20/g;function vl(n){return encodeURI(""+n).replace(wg,"|").replace(Mg,"[").replace(bg,"]")}function Eg(n){return vl(n).replace(gf,"{").replace(_f,"}").replace(mf,"^")}function Oa(n){return vl(n).replace(pf,"%2B").replace(Ag,"+").replace(df,"%23").replace(_g,"%26").replace(Sg,"`").replace(gf,"{").replace(_f,"}").replace(mf,"^")}function Tg(n){return Oa(n).replace(xg,"%3D")}function Cg(n){return vl(n).replace(df,"%23").replace(yg,"%3F")}function Pg(n){return n==null?"":Cg(n).replace(vg,"%2F")}function io(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Lg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(pf," "),o=r.indexOf("="),a=io(o<0?r:r.slice(0,o)),l=o<0?null:io(r.slice(o+1));if(a in t){let c=t[a];on(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function wc(n){let t="";for(let e in n){const i=n[e];if(e=Tg(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(on(i)?i.map(r=>r&&Oa(r)):[i&&Oa(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function Rg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=on(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Dg=Symbol(""),Ac=Symbol(""),xl=Symbol(""),vf=Symbol(""),Na=Symbol("");function ws(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n,reset:e}}function qn(n,t,e,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ls(4,{from:e,to:t})):h instanceof Error?a(h):ig(h)?a(ls(2,{from:t,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=n.call(i&&i.instances[s],t,e,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Fo(n,t,e,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(Ig(a)){const c=(a.__vccOpts||a)[t];c&&s.push(qn(c,e,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Um(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&qn(f,e,i,r,o)()}))}}return s}function Ig(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ec(n){const t=Zn(xl),e=Zn(vf),i=qe(()=>t.resolve(ts(n.to))),s=qe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const f=h.findIndex(as.bind(null,u));if(f>-1)return f;const d=Tc(l[c-2]);return c>1&&Tc(u)===d&&h[h.length-1].path!==d?h.findIndex(as.bind(null,l[c-2])):f}),r=qe(()=>s.value>-1&&zg(e.params,i.value.params)),o=qe(()=>s.value>-1&&s.value===e.matched.length-1&&lf(e.params,i.value.params));function a(l={}){return Fg(l)?t[ts(n.replace)?"replace":"push"](ts(n.to)).catch(Fs):Promise.resolve()}return{route:i,href:qe(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Og=tr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ec,setup(n,{slots:t}){const e=Qs(Ec(n)),{options:i}=Zn(xl),s=qe(()=>({[Cc(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Cc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&t.default(e);return n.custom?r:of("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Ng=Og;function Fg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function zg(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!on(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Tc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Cc=(n,t,e)=>n??t??e,Ug=tr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Zn(Na),s=qe(()=>n.route||i.value),r=Zn(Ac,0),o=qe(()=>{let c=ts(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=qe(()=>s.value.matched[o.value]);Hr(Ac,qe(()=>o.value+1)),Hr(Dg,a),Hr(Na,s);const l=$r();return Wr(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!as(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Pc(e.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=of(f,Jt({},g,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Pc(e.default,{Component:p,route:c})||p}}});function Pc(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Bg=Ug;function Vg(n){const t=dg(n.routes,n),e=n.parseQuery||Lg,i=n.stringifyQuery||wc,s=n.history,r=ws(),o=ws(),a=ws(),l=ip(Fn);let c=Fn;ji&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oo.bind(null,W=>""+W),h=Oo.bind(null,Pg),f=Oo.bind(null,io);function d(W,z){let ct,ut;return uf(W)?(ct=t.getRecordMatcher(W),ut=z):ut=W,t.addRoute(ut,ct)}function g(W){const z=t.getRecordMatcher(W);z&&t.removeRoute(z)}function m(){return t.getRoutes().map(W=>W.record)}function p(W){return!!t.getRecordMatcher(W)}function _(W,z){if(z=Jt({},z||l.value),typeof W=="string"){const b=No(e,W,z.path),w=t.resolve({path:b.path},z),D=s.createHref(b.fullPath);return Jt(b,w,{params:f(w.params),hash:io(b.hash),redirectedFrom:void 0,href:D})}let ct;if("path"in W)ct=Jt({},W,{path:No(e,W.path,z.path).path});else{const b=Jt({},W.params);for(const w in b)b[w]==null&&delete b[w];ct=Jt({},W,{params:h(W.params)}),z.params=h(z.params)}const ut=t.resolve(ct,z),xt=W.hash||"";ut.params=u(f(ut.params));const pt=km(i,Jt({},W,{hash:Eg(xt),path:ut.path})),Mt=s.createHref(pt);return Jt({fullPath:pt,hash:xt,query:i===wc?Rg(W.query):W.query||{}},ut,{redirectedFrom:void 0,href:Mt})}function y(W){return typeof W=="string"?No(e,W,l.value.path):Jt({},W)}function x(W,z){if(c!==W)return ls(8,{from:z,to:W})}function v(W){return R(W)}function A(W){return v(Jt(y(W),{replace:!0}))}function T(W){const z=W.matched[W.matched.length-1];if(z&&z.redirect){const{redirect:ct}=z;let ut=typeof ct=="function"?ct(W):ct;return typeof ut=="string"&&(ut=ut.includes("?")||ut.includes("#")?ut=y(ut):{path:ut},ut.params={}),Jt({query:W.query,hash:W.hash,params:"path"in ut?{}:W.params},ut)}}function R(W,z){const ct=c=_(W),ut=l.value,xt=W.state,pt=W.force,Mt=W.replace===!0,b=T(ct);if(b)return R(Jt(y(b),{state:typeof b=="object"?Jt({},xt,b.state):xt,force:pt,replace:Mt}),z||ct);const w=ct;w.redirectedFrom=z;let D;return!pt&&Gm(i,ut,ct)&&(D=ls(16,{to:w,from:ut}),H(ut,ut,!0,!1)),(D?Promise.resolve(D):P(w,ut)).catch(U=>vn(U)?vn(U,2)?U:V(U):st(U,w,ut)).then(U=>{if(U){if(vn(U,2))return R(Jt({replace:Mt},y(U.to),{state:typeof U.to=="object"?Jt({},xt,U.to.state):xt,force:pt}),z||w)}else U=j(w,ut,!0,Mt,xt);return I(w,ut,U),U})}function M(W,z){const ct=x(W,z);return ct?Promise.reject(ct):Promise.resolve()}function P(W,z){let ct;const[ut,xt,pt]=kg(W,z);ct=Fo(ut.reverse(),"beforeRouteLeave",W,z);for(const b of ut)b.leaveGuards.forEach(w=>{ct.push(qn(w,W,z))});const Mt=M.bind(null,W,z);return ct.push(Mt),Ri(ct).then(()=>{ct=[];for(const b of r.list())ct.push(qn(b,W,z));return ct.push(Mt),Ri(ct)}).then(()=>{ct=Fo(xt,"beforeRouteUpdate",W,z);for(const b of xt)b.updateGuards.forEach(w=>{ct.push(qn(w,W,z))});return ct.push(Mt),Ri(ct)}).then(()=>{ct=[];for(const b of W.matched)if(b.beforeEnter&&!z.matched.includes(b))if(on(b.beforeEnter))for(const w of b.beforeEnter)ct.push(qn(w,W,z));else ct.push(qn(b.beforeEnter,W,z));return ct.push(Mt),Ri(ct)}).then(()=>(W.matched.forEach(b=>b.enterCallbacks={}),ct=Fo(pt,"beforeRouteEnter",W,z),ct.push(Mt),Ri(ct))).then(()=>{ct=[];for(const b of o.list())ct.push(qn(b,W,z));return ct.push(Mt),Ri(ct)}).catch(b=>vn(b,8)?b:Promise.reject(b))}function I(W,z,ct){for(const ut of a.list())ut(W,z,ct)}function j(W,z,ct,ut,xt){const pt=x(W,z);if(pt)return pt;const Mt=z===Fn,b=ji?history.state:{};ct&&(ut||Mt?s.replace(W.fullPath,Jt({scroll:Mt&&b&&b.scroll},xt)):s.push(W.fullPath,xt)),l.value=W,H(W,z,ct,Mt),V()}let at;function k(){at||(at=s.listen((W,z,ct)=>{if(!Et.listening)return;const ut=_(W),xt=T(ut);if(xt){R(Jt(xt,{replace:!0}),ut).catch(Fs);return}c=ut;const pt=l.value;ji&&Zm(gc(pt.fullPath,ct.delta),xo()),P(ut,pt).catch(Mt=>vn(Mt,12)?Mt:vn(Mt,2)?(R(Mt.to,ut).then(b=>{vn(b,20)&&!ct.delta&&ct.type===js.pop&&s.go(-1,!1)}).catch(Fs),Promise.reject()):(ct.delta&&s.go(-ct.delta,!1),st(Mt,ut,pt))).then(Mt=>{Mt=Mt||j(ut,pt,!1),Mt&&(ct.delta&&!vn(Mt,8)?s.go(-ct.delta,!1):ct.type===js.pop&&vn(Mt,20)&&s.go(-1,!1)),I(ut,pt,Mt)}).catch(Fs)}))}let O=ws(),J=ws(),K;function st(W,z,ct){V(W);const ut=J.list();return ut.length?ut.forEach(xt=>xt(W,z,ct)):console.error(W),Promise.reject(W)}function X(){return K&&l.value!==Fn?Promise.resolve():new Promise((W,z)=>{O.add([W,z])})}function V(W){return K||(K=!W,k(),O.list().forEach(([z,ct])=>W?ct(W):z()),O.reset()),W}function H(W,z,ct,ut){const{scrollBehavior:xt}=n;if(!ji||!xt)return Promise.resolve();const pt=!ct&&Km(gc(W.fullPath,0))||(ut||!ct)&&history.state&&history.state.scroll||null;return Dh().then(()=>xt(W,z,pt)).then(Mt=>Mt&&Jm(Mt)).catch(Mt=>st(Mt,W,z))}const ft=W=>s.go(W);let lt;const vt=new Set,Et={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:p,getRoutes:m,resolve:_,options:n,push:v,replace:A,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:X,install(W){const z=this;W.component("RouterLink",Ng),W.component("RouterView",Bg),W.config.globalProperties.$router=z,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>ts(l)}),ji&&!lt&&l.value===Fn&&(lt=!0,v(s.location).catch(xt=>{}));const ct={};for(const xt in Fn)ct[xt]=qe(()=>l.value[xt]);W.provide(xl,z),W.provide(vf,Qs(ct)),W.provide(Na,l);const ut=W.unmount;vt.add(W),W.unmount=function(){vt.delete(W),vt.size<1&&(c=Fn,at&&at(),at=null,l.value=Fn,lt=!1,K=!1),ut()}}};return Et}function Ri(n){return n.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function kg(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>as(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>as(c,l))||s.push(l))}return[e,i,s]}const Gg="modulepreload",Hg=function(n){return"/nova/"+n},Lc={},St=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link");s=Promise.all(e.map(o=>{if(o=Hg(o),o in Lc)return;Lc[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let h=r.length-1;h>=0;h--){const f=r[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Gg,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},Wg={path:"/css",meta:{name:"CSS"},component:Ti,children:[{path:"reverseCard",meta:{type:"css",name:"反转卡片图片",visable:!0},component:()=>St(()=>import("./reverseCardPic-qtiml6cO.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"starRate",meta:{type:"css",name:"图案评分",visable:!0},component:()=>St(()=>import("./StarRate-XiV_4sUQ.js"),__vite__mapDeps([5,6,7,8,9,10]))},{path:"sun",meta:{type:"css",name:"小太阳",visable:!0},component:()=>St(()=>import("./Sun-gOL7FugW.js"),__vite__mapDeps([11,12]))},{path:"progressCube",meta:{type:"css",name:"立体进度条",visable:!1},component:()=>St(()=>import("./ProgressCube-cxaDInO6.js"),__vite__mapDeps([13,8,9,14]))},{path:"deathLoading",meta:{type:"css",name:"死亡搁浅loading",visable:!0},component:()=>St(()=>import("./DeathLoading-kbcHYpCH.js"),__vite__mapDeps([15,16]))},{path:"hsCard",meta:{type:"css",name:"炉石卡片",visable:!0},component:()=>St(()=>import("./HSCard-fZ91yKLz.js"),__vite__mapDeps([17,3,1,18,19]))},{path:"barChart",meta:{type:"css",name:"css条状表",visable:!1},component:()=>St(()=>import("./BarChart--M-BWlAU.js"),__vite__mapDeps([20,21]))},{path:"water",meta:{type:"css",name:"模拟水滴",visable:!1},component:()=>St(()=>import("./Water-475PkWw7.js"),__vite__mapDeps([22,3,1,18,23]))},{path:"sun-time",meta:{type:"css",name:"太阳与时间倒影",visable:!0},component:()=>St(()=>import("./timeSun-zvQIkcnZ.js"),__vite__mapDeps([24,3,1,18,25]))},{path:"crush-pic",meta:{type:"css",name:"破碎图片",visable:!0},component:()=>St(()=>import("./crushPic-AhhO-pWM.js"),__vite__mapDeps([26,27,28,3,1,18,2,29]))},{path:"hack-text",meta:{type:"css",name:"绿色终端",visable:!1},component:()=>St(()=>import("./hackText-gvRPI_6x.js"),__vite__mapDeps([30,31]))}]},qg={path:"/canvas",meta:{name:"Canvas"},component:Ti,children:[{path:"flowField",meta:{type:"canvas",name:"FlowField(fabric)",visable:!0},component:()=>St(()=>import("./FlowField-FuP2fO4g.js"),__vite__mapDeps([32,33,1,6,7,34,3,35]))},{path:"flowFieldLine",meta:{type:"canvas",name:"FlowFieldLine",visable:!1},component:()=>St(()=>import("./FlowFieldLine-9-XHwTr0.js"),__vite__mapDeps([36,6,7,33,1,34,3]))},{path:"canvasTextPoint",meta:{type:"canvas",name:"canvasTextPoint",visable:!1},component:()=>St(()=>import("./CanvasTextPoint-Zx5w9sq6.js"),__vite__mapDeps([37,38,18,39]))},{path:"canvasPoint",meta:{type:"canvas",name:"图片点阵化",visable:!0},component:()=>St(()=>import("./canvasPoint-J45lL-A2.js"),__vite__mapDeps([40,38,3,1,41,18]))},{path:"flow",meta:{type:"canvas",name:"mac锁屏flow",visable:!0},component:()=>St(()=>import("./flow--MTwCk6K.js"),__vite__mapDeps([42,3,1,38,8,9,43,18]))},{path:"delaunator",meta:{type:"canvas",name:"三角切分",visable:!0},component:()=>St(()=>import("./delaunator-s9eLfX0y.js"),__vite__mapDeps([44,27,38,18,41]))},{path:"circuit-borad",meta:{type:"canvas",name:"电路板",visable:!0},component:()=>St(()=>import("./circuitBoard-LDMsxqtI.js"),__vite__mapDeps([]))},{path:"img-idle",meta:{type:"canvas",name:"图片做Idle",visable:!1},component:()=>St(()=>import("./imgIdle-8jmgFVkO.js"),__vite__mapDeps([45,46]))},{path:"nyan-cat",meta:{type:"canvas",name:"彩虹猫",visable:!0},component:()=>St(()=>import("./nyanCat-DTW1Co1c.js"),__vite__mapDeps([47,38,43,1,46]))},{path:"particle-life",meta:{type:"canvas",name:"粒子生命模拟",visable:!0},component:()=>St(()=>import("./particleLife-xOfhvpsm.js"),__vite__mapDeps([48,49,1,43,8,9]))},{path:"test",meta:{type:"canvas",name:"test",visable:!1},component:()=>St(()=>import("./test-pfztVWLg.js"),__vite__mapDeps([50,43,1]))},{path:"game-of-life",meta:{type:"canvas",name:"生命游戏",visable:!1},component:()=>St(()=>import("./gameOfLife-BAnwfFOg.js"),__vite__mapDeps([51,43,1]))},{path:"music-mhsb",meta:{type:"canvas",name:"我是一个快乐的鸡蛋饼",visable:!0},component:()=>St(()=>import("./mihuanshuibo-upFKN0uL.js"),__vite__mapDeps([52,38,53,54,43,1,55]))},{path:"music-rect",meta:{type:"canvas",name:"music-片片面",visable:!0},component:()=>St(()=>import("./rect-JoEqIoHE.js"),__vite__mapDeps([56,49,1,38,54,53,43,3,18,57]))},{path:"music-rect-2",meta:{type:"canvas",name:"music-重叠矩形",visable:!1},component:()=>St(()=>import("./rect2-TYoIKxGs.js"),__vite__mapDeps([58,49,1,38,54,53,43,3,59]))},{path:"freq-domain",meta:{type:"canvas",name:"频率和波形",visable:!0},component:()=>St(()=>import("./freqAndDomain-medoudmY.js"),__vite__mapDeps([60,49,1,38,54,53,43,61]))},{path:"github-snake",meta:{type:"canvas",name:"github贪吃蛇",visable:!0},component:()=>St(()=>import("./githubSnake-_krvbTYm.js"),__vite__mapDeps([62,49,1,43,63]))}]},Xg={path:"/three",meta:{name:"three.js"},component:Ti,children:[{path:"threeTemplate",meta:{type:"threejs",name:"threejs模板",visable:!1},component:()=>St(()=>import("./THREE-template-IfCQweBE.js"),__vite__mapDeps([64,9,65,66,67]))},{path:"cubeLine",meta:{type:"threejs",name:"cubeLine",visable:!1},component:()=>St(()=>import("./CubeLine-kJaMMl09.js"),__vite__mapDeps([68,65,66,9,69]))},{path:"allBufferGeo",meta:{type:"threejs",name:"allBufferGeo",visable:!1},component:()=>St(()=>import("./AllBufferGeo-yDCxqyqT.js"),__vite__mapDeps([70,65,66,71]))},{path:"threeTextPoint",meta:{type:"threejs",name:"threeTextPoint",visable:!1},component:()=>St(()=>import("./ThreeTextPoint-46LiWNgq.js"),__vite__mapDeps([72,65,66,73]))},{path:"threeText",meta:{type:"threejs",name:"threeText",visable:!1},component:()=>St(()=>import("./TextGeo-cx7g3woz.js"),__vite__mapDeps([74,65,75,9,76]))},{path:"solarSystem",meta:{type:"threejs",name:"threejs太阳系",visable:!1},component:()=>St(()=>import("./SolarSystem-WlYrML3j.js"),__vite__mapDeps([77,78,79,65,66,8,9]))},{path:"glowBall",meta:{type:"threejs",name:"glowBall",visable:!1},component:()=>St(()=>import("./GlowBall-gcLv9W5t.js"),__vite__mapDeps([80,9,66,78,79]))},{path:"atom",meta:{type:"threejs",name:"原子",visable:!1},component:()=>St(()=>import("./Atom-4bHKIzXA.js"),__vite__mapDeps([81,65,66,78,79,8,9,82]))},{path:"lavaBall",meta:{type:"threejs",name:"lavaBall",visable:!1},component:()=>St(()=>import("./LavaBall-0AfhKo8Y.js"),__vite__mapDeps([83,9,65,66,78,84]))},{path:"lensFlares",meta:{type:"threejs",name:"透镜光线",visable:!1},component:()=>St(()=>import("./LensFlares-kaQYBmgU.js"),__vite__mapDeps([85,9,65,75,86]))},{path:"crush-pic",meta:{type:"threejs",name:"破碎图片-threejs",visable:!0},component:()=>St(()=>import("./crushPic-87neLtse.js"),__vite__mapDeps([87,27,28,88,66,43,1,2]))},{path:"flowfield-point-3d",meta:{type:"threejs",name:"flowField-粒子-3D",visable:!0},component:()=>St(()=>import("./flowFieldPoint3D-j6p4dgSh.js"),__vite__mapDeps([89,38,49,1,88,66,43,90]))},{path:"particle-life",meta:{type:"threejs",name:"粒子生命模拟",visable:!0},component:()=>St(()=>import("./particleLife-QpokV9kR.js"),__vite__mapDeps([91,49,1,88,66,43,90]))}]},jg={path:"/p5",meta:{name:"p5"},component:Ti,children:[{path:"flowFieldLine2",meta:{name:"flowFieldLine2",visable:!1},component:()=>St(()=>import("./FlowFieldLine2-mQyGpCQV.js"),__vite__mapDeps([92,3,1,6,7,93,94,34,95,41,18]))},{path:"maze",meta:{name:"随机迷宫",visable:!0},component:()=>St(()=>import("./Maze-Lh2BQ-ks.js"),__vite__mapDeps([96,6,7,93,3,1,94]))},{path:"gradientLine",meta:{name:"gradientLine",visable:!1},component:()=>St(()=>import("./GradientLine-vaoI1IFL.js"),__vite__mapDeps([97,6,7,93,3,1,94,95,41,18]))},{path:"codeRain",meta:{name:"codeRain",visable:!1},component:()=>St(()=>import("./CodeRain-VvVRQ1sm.js"),__vite__mapDeps([98,6,7,93,3,1,94]))},{path:"cross",meta:{name:"cross",visable:!1},component:()=>St(()=>import("./Cross-PUHRgdsq.js"),__vite__mapDeps([99,3,1,6,7,93,94]))},{path:"musicRect",meta:{name:"musicRect",visable:!1},component:()=>St(()=>import("./MusicRect-d-vyb03K.js"),__vite__mapDeps([100,3,1,101,53,102,93,94,103]))},{path:"musicCircle",meta:{name:"musicCircle",visable:!1},component:()=>St(()=>import("./MusicCircle-qGyNK7zo.js"),__vite__mapDeps([104,3,1,93,94,101,53,102,103,18]))},{path:"bore",meta:{name:"般若心经",visable:!0},component:()=>St(()=>import("./BoRe-Y5N3YVn4.js"),__vite__mapDeps([105,3,1,93,94,106]))},{path:"tangram",meta:{name:"七巧板",visable:!0},component:()=>St(()=>import("./Tangram-88kdm0Io.js"),__vite__mapDeps([107,93,3,1,94]))},{path:"terrain",meta:{name:"terrain",visable:!1},component:()=>St(()=>import("./Terrain-XUEd0I6r.js"),__vite__mapDeps([108,109,3,1,110,111]))},{path:"disperseParticle",meta:{name:"disperseParticle",visable:!1},component:()=>St(()=>import("./DisperseParticle-EpTyvfEk.js"),__vite__mapDeps([112,3,1,109,110,113]))},{path:"disperseParticle2",meta:{name:"disperseParticle2",visable:!1},component:()=>St(()=>import("./DisperseParticle2-St22Yt7l.js"),__vite__mapDeps([114,3,1,109,110,115]))},{path:"snake",meta:{name:"贪吃蛇",visable:!0},component:()=>St(()=>import("./Snake-tcozf82c.js"),__vite__mapDeps([116,3,1,109,110]))},{path:"lightBall",meta:{name:"lightBall",visable:!1},component:()=>St(()=>import("./LightBall-R5rVpzcc.js"),__vite__mapDeps([117,109,3,1,110,118]))},{path:"flappyBird",meta:{name:"像素鸟(canvas)",visable:!0},component:()=>St(()=>import("./FlappyBird-CCagTsRr.js"),__vite__mapDeps([119,109,3,1,110,120]))},{path:"fireWork",meta:{name:"fireWork",visable:!1},component:()=>St(()=>import("./Firework-jx-z2PCg.js"),__vite__mapDeps([121,3,1,109,110]))},{path:"pixelPicture",meta:{name:"图片像素化",visable:!0},component:()=>St(()=>import("./PixelPicture-VsTTUB__.js"),__vite__mapDeps([122,3,1,8,9,109,110,123]))}]},Yg={path:"/svg",meta:{name:"SVG"},component:Ti,children:[{path:"tiktok",meta:{name:"tiktok_anima",visable:!1,type:"svg"},component:()=>St(()=>import("./index-TCzu76kY.js"),__vite__mapDeps([]))},{path:"circuit-board",meta:{name:"电路板-svg",visable:!0,type:"svg"},component:()=>St(()=>import("./circuitBoard-Aey8wCQx.js"),__vite__mapDeps([124,125]))},{path:"circuit-board-2",meta:{name:"电路板-svg-蓝",visable:!0,type:"svg"},component:()=>St(()=>import("./circuitBoard2-y4FUC06T.js"),__vite__mapDeps([126,127]))}]},Jg={path:"/shader",meta:{name:"Shader"},component:Ti,children:[{path:"music-domainwrapping",meta:{name:"music-domainwrapping",visable:!1,type:"shader"},component:()=>St(()=>import("./index-zziHGX-x.js"),__vite__mapDeps([128,88,66,43,1,101,3,53,102,18]))},{path:"texture-icon",meta:{name:"texture-icon",visable:!0,type:"shader"},component:()=>St(()=>import("./index---jK2QEU.js"),__vite__mapDeps([129,88,66,43,1]))},{path:"gamepad",meta:{name:"icon-gamepad",visable:!1,type:"shader"},component:()=>St(()=>import("./index-A9eMKCGo.js"),__vite__mapDeps([130,88,66,43,1]))},{path:"music",meta:{name:"音乐像素",visable:!1,type:"shader"},component:()=>St(()=>import("./index-pErtnOh4.js"),__vite__mapDeps([131,88,66,43,1,53,54,132]))},{path:"flow",meta:{name:"shader-flow",visable:!0,type:"shader"},component:()=>St(()=>import("./index-AlJo0zgg.js"),__vite__mapDeps([133,88,66,43,1]))},{path:"flow2",meta:{name:"shader-flow2",visable:!0,type:"shader"},component:()=>St(()=>import("./index-ba31wELc.js"),__vite__mapDeps([134,88,66,43,1]))},{path:"flow-net",meta:{name:"shader-flow-net",visable:!0,type:"shader"},component:()=>St(()=>import("./index-VlCgyEV5.js"),__vite__mapDeps([135,136,88,66,43,1]))},{path:"shader-particle-force",meta:{name:"粒子斥力(shader绘制)",visable:!0,type:"shader"},component:()=>St(()=>import("./index-QBvk6L0D.js"),__vite__mapDeps([137,136,88,66,43,1]))},{path:"shader-voronoi-when-polar",meta:{name:"极坐标下的泰森图",visable:!0,type:"shader"},component:()=>St(()=>import("./index-7bdgtrVw.js"),__vite__mapDeps([138,136,88,66,43,1]))}]},Zg={class:"h-full flex justify-center items-center"},Kg=rn("h1",{class:"text-6xl"},"NOT FOUND",-1),$g=[Kg],Qg=tr({__name:"NotFound",setup(n){return(t,e)=>(He(),Tn("div",Zg,$g))}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yl="146",uS={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hS={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t_=0,Rc=1,e_=2,xf=1,n_=2,Ds=3,cs=0,je=1,Xn=2,Kn=0,ns=1,Fa=2,Dc=3,Ic=4,i_=5,Yi=100,s_=101,r_=102,Oc=103,Nc=104,o_=200,a_=201,l_=202,c_=203,yf=204,Mf=205,u_=206,h_=207,f_=208,d_=209,p_=210,m_=0,g_=1,__=2,za=3,v_=4,x_=5,y_=6,M_=7,yo=0,b_=1,S_=2,Cn=0,w_=1,A_=2,E_=3,T_=4,C_=5,bf=300,us=301,hs=302,Ua=303,Ba=304,Mo=306,Va=1e3,Qe=1001,ka=1002,be=1003,Fc=1004,zc=1005,We=1006,P_=1007,bo=1008,Si=1009,L_=1010,R_=1011,Sf=1012,D_=1013,gi=1014,_i=1015,Ys=1016,I_=1017,O_=1018,is=1020,N_=1021,F_=1022,tn=1023,z_=1024,U_=1025,Mi=1026,fs=1027,B_=1028,V_=1029,k_=1030,G_=1031,H_=1033,zo=33776,Uo=33777,Bo=33778,Vo=33779,Uc=35840,Bc=35841,Vc=35842,kc=35843,W_=36196,Gc=37492,Hc=37496,Wc=37808,qc=37809,Xc=37810,jc=37811,Yc=37812,Jc=37813,Zc=37814,Kc=37815,$c=37816,Qc=37817,tu=37818,eu=37819,nu=37820,iu=37821,su=36492,wi=3e3,oe=3001,q_=3200,X_=3201,So=0,j_=1,En="srgb",vi="srgb-linear",ko=7680,Y_=519,Ga=35044,fS=35048,ru="300 es",Ha=1035;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jr=Math.PI/180,ou=180/Math.PI;function Pn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function J_(n,t){return(n%t+t)%t}function Go(n,t,e){return(1-e)*n+e*t}function au(n){return(n&n-1)===0&&n!==0}function Wa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],m=s[0],p=s[3],_=s[6],y=s[1],x=s[4],v=s[7],A=s[2],T=s[5],R=s[8];return r[0]=o*m+a*y+l*A,r[3]=o*p+a*x+l*T,r[6]=o*_+a*v+l*R,r[1]=c*m+u*y+h*A,r[4]=c*p+u*x+h*T,r[7]=c*_+u*v+h*R,r[2]=f*m+d*y+g*A,r[5]=f*p+d*x+g*T,r[8]=f*_+d*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=h*m,t[1]=(s*c-u*i)*m,t[2]=(a*i-s*o)*m,t[3]=f*m,t[4]=(u*e-s*l)*m,t[5]=(s*r-a*e)*m,t[6]=d*m,t[7]=(i*l-c*e)*m,t[8]=(o*e-i*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=e*r+i*l,s[3]=e*o+i*c,s[6]=e*a+i*u,s[1]=-i*r+e*l,s[4]=-i*o+e*c,s[7]=-i*a+e*u,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function wf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ho={[En]:{[vi]:bi},[vi]:{[En]:Yr}},Ye={legacyMode:!0,get workingColorSpace(){return vi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.legacyMode||t===e||!t||!e)return n;if(Ho[t]&&Ho[t][e]!==void 0){const i=Ho[t][e];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}},Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ue={r:0,g:0,b:0},Je={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Wo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function hr(n,t){return t.r=n.r,t.g=n.g,t.b=n.b,t}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=vi){return this.r=t,this.g=e,this.b=i,Ye.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=vi){if(t=J_(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wo(o,r,t+1/3),this.g=Wo(o,r,t),this.b=Wo(o,r,t-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(t,e=En){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ye.toWorkingColorSpace(this,e),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ye.toWorkingColorSpace(this,e),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,u,e)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ye.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ye.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=En){const i=Af[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Ye.fromWorkingColorSpace(hr(this,ue),t),_e(ue.r*255,0,255)<<16^_e(ue.g*255,0,255)<<8^_e(ue.b*255,0,255)<<0}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=vi){Ye.fromWorkingColorSpace(hr(this,ue),e);const i=ue.r,s=ue.g,r=ue.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=vi){return Ye.fromWorkingColorSpace(hr(this,ue),e),t.r=ue.r,t.g=ue.g,t.b=ue.b,t}getStyle(t=En){return Ye.fromWorkingColorSpace(hr(this,ue),t),t!==En?`color(${t} ${ue.r} ${ue.g} ${ue.b})`:`rgb(${ue.r*255|0},${ue.g*255|0},${ue.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Je),Je.h+=t,Je.s+=e,Je.l+=i,this.setHSL(Je.h,Je.s,Je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Je),t.getHSL(ur);const i=Go(Je.h,ur.h,e),s=Go(Je.s,ur.s,e),r=Go(Je.l,ur.l,e);return this.setHSL(i,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ht.NAMES=Af;let Di;class Ef{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Js("canvas")),Di.width=t.width,Di.height=t.height;const i=Di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Tf{constructor(t=null){this.isSource=!0,this.uuid=Pn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qo(s[o].image)):r.push(qo(s[o]))}else r=qo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ef.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z_=0;class Be extends _s{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=Qe,s=Qe,r=We,o=bo,a=tn,l=Si,c=1,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Pn(),this.name="",this.source=new Tf(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Qe:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Qe:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=bf;class ne{constructor(t=0,e=0,i=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,A=(_+1)/2,T=(u+f)/4,R=(h+m)/4,M=(g+p)/4;return x>v&&x>A?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=R/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=M/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=M/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-m)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ai extends _s{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};this.texture=new Be(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:We,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cf extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K_ extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],m=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-a;const _=l*f+c*d+u*g+h*m,y=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const A=Math.sqrt(x),T=Math.atan2(A,_*y);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}const v=a*y;if(l=l*p+f*v,c=c*p+d*v,u=u*p+g*v,h=h*p+m*v,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*s-a*i,u=l*i+a*e-r*s,h=l*s+r*i-o*e,f=-r*e-o*i-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new L,lu=new er;class vs{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<e&&(e=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<e&&(e=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,i,s),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)oi.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(oi)}else i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox),jo.applyMatrix4(t.matrixWorld),this.union(jo);const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),fr.subVectors(this.max,As),Ii.subVectors(t.a,As),Oi.subVectors(t.b,As),Ni.subVectors(t.c,As),zn.subVectors(Oi,Ii),Un.subVectors(Ni,Oi),ai.subVectors(Ii,Ni);let e=[0,-zn.z,zn.y,0,-Un.z,Un.y,0,-ai.z,ai.y,zn.z,0,-zn.x,Un.z,0,-Un.x,ai.z,0,-ai.x,-zn.y,zn.x,0,-Un.y,Un.x,0,-ai.y,ai.x,0];return!Yo(e,Ii,Oi,Ni,fr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Ii,Oi,Ni,fr))?!1:(dr.crossVectors(zn,Un),e=[dr.x,dr.y,dr.z],Yo(e,Ii,Oi,Ni,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return oi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new L,new L,new L,new L,new L,new L,new L,new L],oi=new L,jo=new vs,Ii=new L,Oi=new L,Ni=new L,zn=new L,Un=new L,ai=new L,As=new L,fr=new L,dr=new L,li=new L;function Yo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){li.fromArray(n,r);const a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),u=i.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $_=new vs,Es=new L,Jo=new L;class nr{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Es,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Jo)),this.expandByPoint(Es.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new L,Zo=new L,pr=new L,Bn=new L,Ko=new L,mr=new L,$o=new L;class Ml{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.direction).multiplyScalar(e).add(this.origin),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Zo.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Zo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=Bn.dot(this.direction),l=-Bn.dot(pr),c=Bn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(pr).multiplyScalar(f).add(Zo),d}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const i=yn.dot(this.direction),s=yn.dot(yn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,s,r){Ko.subVectors(e,t),mr.subVectors(i,t),$o.crossVectors(Ko,mr);let o=this.direction.dot($o),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const l=a*this.direction.dot(mr.crossVectors(Bn,mr));if(l<0)return null;const c=a*this.direction.dot(Ko.cross(Bn));if(c<0||l+c>o)return null;const u=-a*Bn.dot($o);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,m,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,m=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;e[0]=f+m*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;e[0]=f-m*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,m=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+m,e[1]=l*h,e[5]=m*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*u,e[4]=m-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-m*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+m,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=m*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Q_,t,t0)}lookAt(t,e,i){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Vn.crossVectors(i,Oe),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Vn.crossVectors(i,Oe)),Vn.normalize(),gr.crossVectors(Oe,Vn),s[0]=Vn.x,s[4]=gr.x,s[8]=Oe.x,s[1]=Vn.y,s[5]=gr.y,s[9]=Oe.y,s[2]=Vn.z,s[6]=gr.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],m=i[6],p=i[10],_=i[14],y=i[3],x=i[7],v=i[11],A=i[15],T=s[0],R=s[4],M=s[8],P=s[12],I=s[1],j=s[5],at=s[9],k=s[13],O=s[2],J=s[6],K=s[10],st=s[14],X=s[3],V=s[7],H=s[11],ft=s[15];return r[0]=o*T+a*I+l*O+c*X,r[4]=o*R+a*j+l*J+c*V,r[8]=o*M+a*at+l*K+c*H,r[12]=o*P+a*k+l*st+c*ft,r[1]=u*T+h*I+f*O+d*X,r[5]=u*R+h*j+f*J+d*V,r[9]=u*M+h*at+f*K+d*H,r[13]=u*P+h*k+f*st+d*ft,r[2]=g*T+m*I+p*O+_*X,r[6]=g*R+m*j+p*J+_*V,r[10]=g*M+m*at+p*K+_*H,r[14]=g*P+m*k+p*st+_*ft,r[3]=y*T+x*I+v*O+A*X,r[7]=y*R+x*j+v*J+A*V,r[11]=y*M+x*at+v*K+A*H,r[15]=y*P+x*k+v*st+A*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],m=t[7],p=t[11],_=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+m*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+p*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+_*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],m=t[13],p=t[14],_=t[15],y=h*p*c-m*f*c+m*l*d-a*p*d-h*l*_+a*f*_,x=g*f*c-u*p*c-g*l*d+o*p*d+u*l*_-o*f*_,v=u*m*c-g*h*c+g*a*d-o*m*d-u*a*_+o*h*_,A=g*h*l-u*m*l-g*a*f+o*m*f+u*a*p-o*h*p,T=e*y+i*x+s*v+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=y*R,t[1]=(m*f*r-h*p*r-m*s*d+i*p*d+h*s*_-i*f*_)*R,t[2]=(a*p*r-m*l*r+m*s*c-i*p*c-a*s*_+i*l*_)*R,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*R,t[4]=x*R,t[5]=(u*p*r-g*f*r+g*s*d-e*p*d-u*s*_+e*f*_)*R,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*_-e*l*_)*R,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=v*R,t[9]=(g*h*r-u*m*r-g*i*d+e*m*d+u*i*_-e*h*_)*R,t[10]=(o*m*r-g*a*r+g*i*c-e*m*c-o*i*_+e*a*_)*R,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*R,t[12]=A*R,t[13]=(u*m*s-g*h*s+g*i*f-e*m*f-u*i*p+e*h*p)*R,t[14]=(g*a*s-o*m*s-g*i*l+e*m*l+o*i*p-e*a*p)*R,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,m=o*u,p=o*h,_=a*h,y=l*c,x=l*u,v=l*h,A=i.x,T=i.y,R=i.z;return s[0]=(1-(m+_))*A,s[1]=(d+v)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+_))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(g+x)*R,s[9]=(p-y)*R,s[10]=(1-(f+m))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Fi.set(s[0],s[1],s[2]).length();const o=Fi.set(s[4],s[5],s[6]).length(),a=Fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);const c=1/r,u=1/o,h=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=u,Ze.elements[5]*=u,Ze.elements[6]*=u,Ze.elements[8]*=h,Ze.elements[9]*=h,Ze.elements[10]*=h,e.setFromRotationMatrix(Ze),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(i-s),u=(e+t)/(e-t),h=(i+s)/(i-s),f=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,r,o){const a=this.elements,l=1/(e-t),c=1/(i-s),u=1/(o-r),h=(e+t)*l,f=(i+s)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Fi=new L,Ze=new Qt,Q_=new L(0,0,0),t0=new L(1,1,1),Vn=new L,gr=new L,Oe=new L,cu=new Qt,uu=new er;class ir{constructor(t=0,e=0,i=0,s=ir.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ir.DefaultOrder="XYZ";ir.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Pf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let e0=0;const hu=new L,zi=new er,Mn=new Qt,_r=new L,Ts=new L,n0=new L,i0=new er,fu=new L(1,0,0),du=new L(0,1,0),pu=new L(0,0,1),s0={type:"added"},mu={type:"removed"};class ge extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DefaultUp.clone();const t=new L,e=new ir,i=new er,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Xe}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ge.DefaultMatrixWorldAutoUpdate,this.layers=new Pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(pu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(pu,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_r.copy(t):_r.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Ts,_r,this.up):Mn.lookAt(_r,Ts,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Mn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(s0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(mu)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,n0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,i0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ge.DefaultUp=new L(0,1,0);ge.DefaultMatrixAutoUpdate=!0;ge.DefaultMatrixWorldAutoUpdate=!0;const Ke=new L,bn=new L,Qo=new L,Sn=new L,Ui=new L,Bi=new L,gu=new L,ta=new L,ea=new L,na=new L;class dn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ke.subVectors(t,e),s.cross(Ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ke.subVectors(s,e),bn.subVectors(i,e),Qo.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(bn),l=Ke.dot(Qo),c=bn.dot(bn),u=bn.dot(Qo),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Sn),l.set(0,0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l}static isFrontFacing(t,e,i,s){return Ke.subVectors(i,e),bn.subVectors(t,e),Ke.cross(bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),Ke.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return dn.getUV(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ui.subVectors(s,i),Bi.subVectors(r,i),ta.subVectors(t,i);const l=Ui.dot(ta),c=Bi.dot(ta);if(l<=0&&c<=0)return e.copy(i);ea.subVectors(t,s);const u=Ui.dot(ea),h=Bi.dot(ea);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ui,o);na.subVectors(t,r);const d=Ui.dot(na),g=Bi.dot(na);if(g>=0&&d<=g)return e.copy(r);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Bi,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return gu.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(gu,a);const _=1/(p+m+f);return o=m*_,a=f*_,e.copy(i).addScaledVector(Ui,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let r0=0;class In extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=ns,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yf,this.blendDst=Mf,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const s=this[e];if(s===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bl extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new L,vr=new _t;class Le{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=Ga,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ga&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lf extends Le{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Rf extends Le{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class It extends Le{constructor(t,e,i){super(new Float32Array(t),e,i)}}let o0=0;const Ge=new Qt,ia=new ge,Vi=new L,Ne=new vs,Cs=new vs,me=new L;class te extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wf(t)?Rf:Lf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,i){return Ge.makeTranslation(t,e,i),this.applyMatrix4(Ge),this}scale(t,e,i){return Ge.makeScale(t,e,i),this.applyMatrix4(Ge),this}lookAt(t){return ia.lookAt(t),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(Ne.min,Cs.min),Ne.expandByPoint(me),me.addVectors(Ne.max,Cs.max),Ne.expandByPoint(me)):(Ne.expandByPoint(Cs.min),Ne.expandByPoint(Cs.max))}Ne.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)me.fromBufferAttribute(a,c),l&&(Vi.fromBufferAttribute(t,c),me.add(Vi)),s=Math.max(s,i.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new L,u[I]=new L;const h=new L,f=new L,d=new L,g=new _t,m=new _t,p=new _t,_=new L,y=new L;function x(I,j,at){h.fromArray(s,I*3),f.fromArray(s,j*3),d.fromArray(s,at*3),g.fromArray(o,I*2),m.fromArray(o,j*2),p.fromArray(o,at*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const k=1/(m.x*p.y-p.x*m.y);isFinite(k)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(k),y.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(k),c[I].add(_),c[j].add(_),c[at].add(_),u[I].add(y),u[j].add(y),u[at].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let I=0,j=v.length;I<j;++I){const at=v[I],k=at.start,O=at.count;for(let J=k,K=k+O;J<K;J+=3)x(i[J+0],i[J+1],i[J+2])}const A=new L,T=new L,R=new L,M=new L;function P(I){R.fromArray(r,I*3),M.copy(R);const j=c[I];A.copy(j),A.sub(R.multiplyScalar(R.dot(j))).normalize(),T.crossVectors(M,j);const k=T.dot(u[I])<0?-1:1;l[I*4]=A.x,l[I*4+1]=A.y,l[I*4+2]=A.z,l[I*4+3]=k}for(let I=0,j=v.length;I<j;++I){const at=v[I],k=at.start,O=at.count;for(let J=k,K=k+O;J<K;J+=3)P(i[J+0]),P(i[J+1]),P(i[J+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),m=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new Le(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new te,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _u=new Qt,ki=new Ml,sa=new nr,kn=new L,Gn=new L,Hn=new L,ra=new L,oa=new L,aa=new L,xr=new L,yr=new L,Mr=new L,br=new _t,Sr=new _t,wr=new _t,la=new L,Ar=new L;class nn extends ge{constructor(t=new te,e=new bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),t.ray.intersectsSphere(sa)===!1)||(_u.copy(r).invert(),ki.copy(t.ray).applyMatrix4(_u),i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,d=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,p=d.length;m<p;m++){const _=d[m],y=s[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let A=x,T=v;A<T;A+=3){const R=a.getX(A),M=a.getX(A+1),P=a.getX(A+2);o=Er(this,y,t,ki,l,c,u,h,f,R,M,P),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=m,y=p;_<y;_+=3){const x=a.getX(_),v=a.getX(_+1),A=a.getX(_+2);o=Er(this,s,t,ki,l,c,u,h,f,x,v,A),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,p=d.length;m<p;m++){const _=d[m],y=s[_.materialIndex],x=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let A=x,T=v;A<T;A+=3){const R=A,M=A+1,P=A+2;o=Er(this,y,t,ki,l,c,u,h,f,R,M,P),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=m,y=p;_<y;_+=3){const x=_,v=_+1,A=_+2;o=Er(this,s,t,ki,l,c,u,h,f,x,v,A),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function a0(n,t,e,i,s,r,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side!==Xn,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:n}}function Er(n,t,e,i,s,r,o,a,l,c,u,h){kn.fromBufferAttribute(s,c),Gn.fromBufferAttribute(s,u),Hn.fromBufferAttribute(s,h);const f=n.morphTargetInfluences;if(r&&f){xr.set(0,0,0),yr.set(0,0,0),Mr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const p=f[g],_=r[g];p!==0&&(ra.fromBufferAttribute(_,c),oa.fromBufferAttribute(_,u),aa.fromBufferAttribute(_,h),o?(xr.addScaledVector(ra,p),yr.addScaledVector(oa,p),Mr.addScaledVector(aa,p)):(xr.addScaledVector(ra.sub(kn),p),yr.addScaledVector(oa.sub(Gn),p),Mr.addScaledVector(aa.sub(Hn),p)))}kn.add(xr),Gn.add(yr),Hn.add(Mr)}n.isSkinnedMesh&&(n.boneTransform(c,kn),n.boneTransform(u,Gn),n.boneTransform(h,Hn));const d=a0(n,t,e,i,kn,Gn,Hn,la);if(d){a&&(br.fromBufferAttribute(a,c),Sr.fromBufferAttribute(a,u),wr.fromBufferAttribute(a,h),d.uv=dn.getUV(la,kn,Gn,Hn,br,Sr,wr,new _t)),l&&(br.fromBufferAttribute(l,c),Sr.fromBufferAttribute(l,u),wr.fromBufferAttribute(l,h),d.uv2=dn.getUV(la,kn,Gn,Hn,br,Sr,wr,new _t));const g={a:c,b:u,c:h,normal:new L,materialIndex:0};dn.getNormal(kn,Gn,Hn,g.normal),d.face=g}return d}class sr extends te{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function g(m,p,_,y,x,v,A,T,R,M,P){const I=v/R,j=A/M,at=v/2,k=A/2,O=T/2,J=R+1,K=M+1;let st=0,X=0;const V=new L;for(let H=0;H<K;H++){const ft=H*j-k;for(let lt=0;lt<J;lt++){const vt=lt*I-at;V[m]=vt*y,V[p]=ft*x,V[_]=O,c.push(V.x,V.y,V.z),V[m]=0,V[p]=0,V[_]=T>0?1:-1,u.push(V.x,V.y,V.z),h.push(lt/R),h.push(1-H/M),st+=1}}for(let H=0;H<M;H++)for(let ft=0;ft<R;ft++){const lt=f+ft+J*H,vt=f+ft+J*(H+1),Et=f+(ft+1)+J*(H+1),W=f+(ft+1)+J*H;l.push(lt,vt,W),l.push(vt,Et,W),X+=6}a.addGroup(d,X,P),d+=X,f+=st}}static fromJSON(t){return new sr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ce(n){const t={};for(let e=0;e<n.length;e++){const i=ds(n[e]);for(const s in i)t[s]=i[s]}return t}function l0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}const c0={clone:ds,merge:Ce};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=l0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Df extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ze extends Df{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ou*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ou*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(jr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=90,Hi=1;class f0 extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new ze(Gi,Hi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(1,0,0)),this.add(s);const r=new ze(Gi,Hi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const o=new ze(Gi,Hi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);const a=new ze(Gi,Hi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new ze(Gi,Hi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new ze(Gi,Hi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Cn,t.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,s),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=d,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class If extends Be{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class d0 extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new If(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sr(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Kn});r.uniforms.tEquirect.value=e;const o=new nn(s,r),a=e.minFilter;return e.minFilter===bo&&(e.minFilter=We),new f0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ca=new L,p0=new L,m0=new Xe;class ui{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ca.subVectors(i,e).cross(p0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(i).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||m0.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new nr,Tr=new L;class Sl{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],d=i[9],g=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];return e[0].setComponents(a-s,h-l,m-f,x-p).normalize(),e[1].setComponents(a+s,h+l,m+f,x+p).normalize(),e[2].setComponents(a+r,h+c,m+d,x+_).normalize(),e[3].setComponents(a-r,h-c,m-d,x-_).normalize(),e[4].setComponents(a-o,h-u,m-g,x-y).normalize(),e[5].setComponents(a+o,h+u,m+g,x+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Of(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function g0(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,c),d.count===-1?n.bufferSubData(h,0,f):(e?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class wl extends te{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const y=_*f-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-y,0),m.push(0,0,1),p.push(x/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const x=y+c*_,v=y+c*(_+1),A=y+1+c*(_+1),T=y+1+c*_;d.push(x,v,T),d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(p,2))}static fromJSON(t){return new wl(t.width,t.height,t.widthSegments,t.heightSegments)}}var _0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0="vec3 transformed = vec3( position );",w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,F0=`#define PI 3.141592653589793
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
}`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tv=`#ifdef USE_GRADIENTMAP
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
}`,ev=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,rv=`uniform bool receiveShadow;
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
#endif`,ov=`#if defined( USE_ENVMAP )
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
#endif`,av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,hv=`PhysicalMaterial material;
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
#endif`,fv=`struct PhysicalMaterial {
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
}`,dv=`
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
#endif`,pv=`#if defined( RE_IndirectDiffuse )
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_v=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ev=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tv=`#ifdef USE_MORPHNORMALS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
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
#endif`,Pv=`#ifdef USE_MORPHTARGETS
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
#endif`,Lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Rv=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
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
#endif`,Fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kv=`float getShadowMask() {
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
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qv=`#ifdef USE_SKINNING
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
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,cx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ux=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,hx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,fx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,dx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mx=`#include <common>
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
}`,bx=`#if DEPTH_PACKING == 3200
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
}`,Sx=`#define DISTANCE
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
}`,wx=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tx=`uniform float scale;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Rx=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Ix=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,Nx=`#define NORMAL
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
}`,Fx=`#define NORMAL
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
}`,zx=`#define PHONG
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
}`,Ux=`#define PHONG
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
}`,Bx=`#define STANDARD
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
}`,Vx=`#define STANDARD
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
}`,kx=`#define TOON
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
}`,Gx=`#define TOON
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
}`,Hx=`uniform float size;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Xx=`uniform vec3 color;
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
}`,jx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Bt={alphamap_fragment:_0,alphamap_pars_fragment:v0,alphatest_fragment:x0,alphatest_pars_fragment:y0,aomap_fragment:M0,aomap_pars_fragment:b0,begin_vertex:S0,beginnormal_vertex:w0,bsdfs:A0,iridescence_fragment:E0,bumpmap_pars_fragment:T0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:R0,color_fragment:D0,color_pars_fragment:I0,color_pars_vertex:O0,color_vertex:N0,common:F0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:U0,displacementmap_pars_vertex:B0,displacementmap_vertex:V0,emissivemap_fragment:k0,emissivemap_pars_fragment:G0,encodings_fragment:H0,encodings_pars_fragment:W0,envmap_fragment:q0,envmap_common_pars_fragment:X0,envmap_pars_fragment:j0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:ov,envmap_vertex:J0,fog_vertex:Z0,fog_pars_vertex:K0,fog_fragment:$0,fog_pars_fragment:Q0,gradientmap_pars_fragment:tv,lightmap_fragment:ev,lightmap_pars_fragment:nv,lights_lambert_fragment:iv,lights_lambert_pars_fragment:sv,lights_pars_begin:rv,lights_toon_fragment:av,lights_toon_pars_fragment:lv,lights_phong_fragment:cv,lights_phong_pars_fragment:uv,lights_physical_fragment:hv,lights_physical_pars_fragment:fv,lights_fragment_begin:dv,lights_fragment_maps:pv,lights_fragment_end:mv,logdepthbuf_fragment:gv,logdepthbuf_pars_fragment:_v,logdepthbuf_pars_vertex:vv,logdepthbuf_vertex:xv,map_fragment:yv,map_pars_fragment:Mv,map_particle_fragment:bv,map_particle_pars_fragment:Sv,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Av,morphcolor_vertex:Ev,morphnormal_vertex:Tv,morphtarget_pars_vertex:Cv,morphtarget_vertex:Pv,normal_fragment_begin:Lv,normal_fragment_maps:Rv,normal_pars_fragment:Dv,normal_pars_vertex:Iv,normal_vertex:Ov,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Fv,clearcoat_normal_fragment_maps:zv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Bv,output_fragment:Vv,packing:kv,premultiplied_alpha_fragment:Gv,project_vertex:Hv,dithering_fragment:Wv,dithering_pars_fragment:qv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:jv,shadowmap_pars_fragment:Yv,shadowmap_pars_vertex:Jv,shadowmap_vertex:Zv,shadowmask_pars_fragment:Kv,skinbase_vertex:$v,skinning_pars_vertex:Qv,skinning_vertex:tx,skinnormal_vertex:ex,specularmap_fragment:nx,specularmap_pars_fragment:ix,tonemapping_fragment:sx,tonemapping_pars_fragment:rx,transmission_fragment:ox,transmission_pars_fragment:ax,uv_pars_fragment:lx,uv_pars_vertex:cx,uv_vertex:ux,uv2_pars_fragment:hx,uv2_pars_vertex:fx,uv2_vertex:dx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:_x,backgroundCube_frag:vx,cube_vert:xx,cube_frag:yx,depth_vert:Mx,depth_frag:bx,distanceRGBA_vert:Sx,distanceRGBA_frag:wx,equirect_vert:Ax,equirect_frag:Ex,linedashed_vert:Tx,linedashed_frag:Cx,meshbasic_vert:Px,meshbasic_frag:Lx,meshlambert_vert:Rx,meshlambert_frag:Dx,meshmatcap_vert:Ix,meshmatcap_frag:Ox,meshnormal_vert:Nx,meshnormal_frag:Fx,meshphong_vert:zx,meshphong_frag:Ux,meshphysical_vert:Bx,meshphysical_frag:Vx,meshtoon_vert:kx,meshtoon_frag:Gx,points_vert:Hx,points_frag:Wx,shadow_vert:qx,shadow_frag:Xx,sprite_vert:jx,sprite_frag:Yx},yt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xe},uv2Transform:{value:new Xe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}}},hn={basic:{uniforms:Ce([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ce([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ce([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ce([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ce([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ce([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ce([yt.points,yt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ce([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ce([yt.common,yt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ce([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ce([yt.sprite,yt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ce([yt.common,yt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ce([yt.lights,yt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};hn.physical={uniforms:Ce([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _t(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};function Jx(n,t,e,i,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(p,_){let y=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x));const v=n.xr,A=v.getSession&&v.getSession();A&&A.environmentBlendMode==="additive"&&(x=null),x===null?m(a,l):x&&x.isColor&&(m(x,1),y=!0),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Mo)?(u===void 0&&(u=new nn(new sr(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:ds(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==x||f!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new nn(new wl(2,2),new ti({name:"BackgroundMaterial",uniforms:ds(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,_){i.buffers.color.setClear(p.r,p.g,p.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:g}}function Zx(n,t,e,i){const s=n.getParameter(34921),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(O,J,K,st,X){let V=!1;if(o){const H=m(st,K,J);c!==H&&(c=H,d(c.object)),V=_(O,st,K,X),V&&y(O,st,K,X)}else{const H=J.wireframe===!0;(c.geometry!==st.id||c.program!==K.id||c.wireframe!==H)&&(c.geometry=st.id,c.program=K.id,c.wireframe=H,V=!0)}X!==null&&e.update(X,34963),(V||u)&&(u=!1,M(O,J,K,st),X!==null&&n.bindBuffer(34963,e.get(X).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,J,K){const st=K.wireframe===!0;let X=a[O.id];X===void 0&&(X={},a[O.id]=X);let V=X[J.id];V===void 0&&(V={},X[J.id]=V);let H=V[st];return H===void 0&&(H=p(f()),V[st]=H),H}function p(O){const J=[],K=[],st=[];for(let X=0;X<s;X++)J[X]=0,K[X]=0,st[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:K,attributeDivisors:st,object:O,attributes:{},index:null}}function _(O,J,K,st){const X=c.attributes,V=J.attributes;let H=0;const ft=K.getAttributes();for(const lt in ft)if(ft[lt].location>=0){const Et=X[lt];let W=V[lt];if(W===void 0&&(lt==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),lt==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),Et===void 0||Et.attribute!==W||W&&Et.data!==W.data)return!0;H++}return c.attributesNum!==H||c.index!==st}function y(O,J,K,st){const X={},V=J.attributes;let H=0;const ft=K.getAttributes();for(const lt in ft)if(ft[lt].location>=0){let Et=V[lt];Et===void 0&&(lt==="instanceMatrix"&&O.instanceMatrix&&(Et=O.instanceMatrix),lt==="instanceColor"&&O.instanceColor&&(Et=O.instanceColor));const W={};W.attribute=Et,Et&&Et.data&&(W.data=Et.data),X[lt]=W,H++}c.attributes=X,c.attributesNum=H,c.index=st}function x(){const O=c.newAttributes;for(let J=0,K=O.length;J<K;J++)O[J]=0}function v(O){A(O,0)}function A(O,J){const K=c.newAttributes,st=c.enabledAttributes,X=c.attributeDivisors;K[O]=1,st[O]===0&&(n.enableVertexAttribArray(O),st[O]=1),X[O]!==J&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,J),X[O]=J)}function T(){const O=c.newAttributes,J=c.enabledAttributes;for(let K=0,st=J.length;K<st;K++)J[K]!==O[K]&&(n.disableVertexAttribArray(K),J[K]=0)}function R(O,J,K,st,X,V){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(O,J,K,X,V):n.vertexAttribPointer(O,J,K,st,X,V)}function M(O,J,K,st){if(i.isWebGL2===!1&&(O.isInstancedMesh||st.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const X=st.attributes,V=K.getAttributes(),H=J.defaultAttributeValues;for(const ft in V){const lt=V[ft];if(lt.location>=0){let vt=X[ft];if(vt===void 0&&(ft==="instanceMatrix"&&O.instanceMatrix&&(vt=O.instanceMatrix),ft==="instanceColor"&&O.instanceColor&&(vt=O.instanceColor)),vt!==void 0){const Et=vt.normalized,W=vt.itemSize,z=e.get(vt);if(z===void 0)continue;const ct=z.buffer,ut=z.type,xt=z.bytesPerElement;if(vt.isInterleavedBufferAttribute){const pt=vt.data,Mt=pt.stride,b=vt.offset;if(pt.isInstancedInterleavedBuffer){for(let w=0;w<lt.locationSize;w++)A(lt.location+w,pt.meshPerAttribute);O.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let w=0;w<lt.locationSize;w++)v(lt.location+w);n.bindBuffer(34962,ct);for(let w=0;w<lt.locationSize;w++)R(lt.location+w,W/lt.locationSize,ut,Et,Mt*xt,(b+W/lt.locationSize*w)*xt)}else{if(vt.isInstancedBufferAttribute){for(let pt=0;pt<lt.locationSize;pt++)A(lt.location+pt,vt.meshPerAttribute);O.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let pt=0;pt<lt.locationSize;pt++)v(lt.location+pt);n.bindBuffer(34962,ct);for(let pt=0;pt<lt.locationSize;pt++)R(lt.location+pt,W/lt.locationSize,ut,Et,W*xt,W/lt.locationSize*pt*xt)}}else if(H!==void 0){const Et=H[ft];if(Et!==void 0)switch(Et.length){case 2:n.vertexAttrib2fv(lt.location,Et);break;case 3:n.vertexAttrib3fv(lt.location,Et);break;case 4:n.vertexAttrib4fv(lt.location,Et);break;default:n.vertexAttrib1fv(lt.location,Et)}}}}T()}function P(){at();for(const O in a){const J=a[O];for(const K in J){const st=J[K];for(const X in st)g(st[X].object),delete st[X];delete J[K]}delete a[O]}}function I(O){if(a[O.id]===void 0)return;const J=a[O.id];for(const K in J){const st=J[K];for(const X in st)g(st[X].object),delete st[X];delete J[K]}delete a[O.id]}function j(O){for(const J in a){const K=a[J];if(K[O.id]===void 0)continue;const st=K[O.id];for(const X in st)g(st[X].object),delete st[X];delete K[O.id]}}function at(){k(),u=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:at,resetDefaultState:k,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:j,initAttributes:x,enableAttribute:v,disableUnusedAttributes:T}}function Kx(n,t,e,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(s)f=n,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),e.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function $x(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),p=n.getParameter(36347),_=n.getParameter(36348),y=n.getParameter(36349),x=f>0,v=o||t.has("OES_texture_float"),A=x&&v,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:A,maxSamples:T}}function Qx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ui,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||i!==0||s;return s=f,e=u(h,d,0),i=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,_=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:i,x=y*4;let v=_.clippingState||null;l.value=v,v=u(g,f,x,d);for(let A=0;A!==x;++A)v[A]=e[A];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=d+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,v=d;x!==m;++x,v+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function ty(n){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=us:a===Ba&&(o.mapping=hs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ua||a===Ba)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new d0(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Nf extends Df{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,vu=[.125,.215,.35,.446,.526,.582],pi=20,ua=new Nf,xu=new Ht;let ha=null;const hi=(1+Math.sqrt(5))/2,qi=1/hi,yu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,hi,qi),new L(0,hi,-qi),new L(qi,0,hi),new L(-qi,0,hi),new L(hi,qi,0),new L(-hi,qi,0)];class Mu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ha=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ha),t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ha=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:Ys,format:tn,encoding:wi,depthBuffer:!1},s=bu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ey(r)),this._blurMaterial=ny(r,t,e)}return s}_compileMaterial(t){const e=new nn(this._lodPlanes[0],t);this._renderer.compile(e,ua)}_sceneToCubeUV(t,e,i,s){const a=new ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(xu),u.toneMapping=Cn,u.autoClear=!1;const d=new bl({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new nn(new sr,d);let m=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,m=!0):(d.color.copy(xu),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;Cr(s,y*x,_>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===us||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Cr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ua)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yu[(s-1)%yu.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nn(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*pi-1),m=r/g,p=isFinite(r)?1+Math.floor(u*m):pi;p>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);const _=[];let y=0;for(let R=0;R<pi;++R){const M=R/m,P=Math.exp(-M*M/2);_.push(P),R===0?y+=P:R<p&&(y+=2*P)}for(let R=0;R<_.length;R++)_[R]=_[R]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[s],A=3*v*(s>x-Ji?s-x+Ji:0),T=4*(this._cubeSize-v);Cr(e,A,T,3*v,2*v),l.setRenderTarget(e),l.render(h,ua)}}function ey(n){const t=[],e=[],i=[];let s=n;const r=n-Ji+1+vu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ji?l=vu[o-n+Ji-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,_=1,y=new Float32Array(m*g*d),x=new Float32Array(p*g*d),v=new Float32Array(_*g*d);for(let T=0;T<d;T++){const R=T%3*2/3-1,M=T>2?0:-1,P=[R,M,0,R+2/3,M,0,R+2/3,M+1,0,R,M,0,R+2/3,M+1,0,R,M+1,0];y.set(P,m*g*T),x.set(f,p*g*T);const I=[T,T,T,T,T,T];v.set(I,_*g*T)}const A=new te;A.setAttribute("position",new Le(y,m)),A.setAttribute("uv",new Le(x,p)),A.setAttribute("faceIndex",new Le(v,_)),t.push(A),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function bu(n,t,e){const i=new Ai(n,t,e);return i.texture.mapping=Mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ny(n,t,e){const i=new Float32Array(pi),s=new L(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Su(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function wu(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function iy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ua||l===Ba,u=l===us||l===hs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Mu(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new Mu(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function sy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ry(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)t.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let x=0,v=y.length;x<v;x+=3){const A=y[x+0],T=y[x+1],R=y[x+2];f.push(A,T,T,R,R,A)}}else{const y=g.array;m=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const A=x+0,T=x+1,R=x+2;f.push(A,T,T,R,R,A)}}const p=new(wf(f)?Rf:Lf)(f,1);p.version=m;const _=r.get(h);_&&t.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function oy(n,t,e,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){n.drawElements(r,d,a,f*l),e.update(d,r,1)}function h(f,d,g){if(g===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,a,f*l,g),e.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function ay(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ly(n,t){return n[0]-t[0]}function cy(n,t){return Math.abs(t[1])-Math.abs(n[1])}function uy(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new ne,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==m){let J=function(){k.dispose(),r.delete(u),u.removeEventListener("dispose",J)};p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let P=0;x===!0&&(P=1),v===!0&&(P=2),A===!0&&(P=3);let I=u.attributes.position.count*P,j=1;I>t.maxTextureSize&&(j=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const at=new Float32Array(I*j*4*m),k=new Cf(at,I,j,m);k.type=_i,k.needsUpdate=!0;const O=P*4;for(let K=0;K<m;K++){const st=T[K],X=R[K],V=M[K],H=I*j*4*K;for(let ft=0;ft<st.count;ft++){const lt=ft*O;x===!0&&(o.fromBufferAttribute(st,ft),at[H+lt+0]=o.x,at[H+lt+1]=o.y,at[H+lt+2]=o.z,at[H+lt+3]=0),v===!0&&(o.fromBufferAttribute(X,ft),at[H+lt+4]=o.x,at[H+lt+5]=o.y,at[H+lt+6]=o.z,at[H+lt+7]=0),A===!0&&(o.fromBufferAttribute(V,ft),at[H+lt+8]=o.x,at[H+lt+9]=o.y,at[H+lt+10]=o.z,at[H+lt+11]=V.itemSize===4?o.w:1)}}p={count:m,texture:k,size:new _t(I,j)},r.set(u,p),u.addEventListener("dispose",J)}let _=0;for(let x=0;x<d.length;x++)_+=d[x];const y=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let v=0;v<g;v++)m[v]=[v,0];i[u.id]=m}for(let v=0;v<g;v++){const A=m[v];A[0]=v,A[1]=d[v]}m.sort(cy);for(let v=0;v<8;v++)v<g&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(ly);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const A=a[v],T=A[0],R=A[1];T!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+v)!==p[T]&&u.setAttribute("morphTarget"+v,p[T]),_&&u.getAttribute("morphNormal"+v)!==_[T]&&u.setAttribute("morphNormal"+v,_[T]),s[v]=R,y+=R):(p&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function hy(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);return s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Ff=new Be,zf=new Cf,Uf=new K_,Bf=new If,Au=[],Eu=[],Tu=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function xs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Au[s];if(r===void 0&&(r=new Float32Array(s),Au[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function he(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wo(n,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function dy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2fv(this.addr,t),fe(e,t)}}function py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;n.uniform3fv(this.addr,t),fe(e,t)}}function my(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4fv(this.addr,t),fe(e,t)}}function gy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Pu.set(i),n.uniformMatrix2fv(this.addr,!1,Pu),fe(e,i)}}function _y(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Cu.set(i),n.uniformMatrix3fv(this.addr,!1,Cu),fe(e,i)}}function vy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Tu.set(i),n.uniformMatrix4fv(this.addr,!1,Tu),fe(e,i)}}function xy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2iv(this.addr,t),fe(e,t)}}function My(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3iv(this.addr,t),fe(e,t)}}function by(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4iv(this.addr,t),fe(e,t)}}function Sy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2uiv(this.addr,t),fe(e,t)}}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3uiv(this.addr,t),fe(e,t)}}function Ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4uiv(this.addr,t),fe(e,t)}}function Ty(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2D(t||Ff,s)}function Cy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Uf,s)}function Py(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Bf,s)}function Ly(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||zf,s)}function Ry(n){switch(n){case 5126:return fy;case 35664:return dy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return vy;case 5124:case 35670:return xy;case 35667:case 35671:return yy;case 35668:case 35672:return My;case 35669:case 35673:return by;case 5125:return Sy;case 36294:return wy;case 36295:return Ay;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Dy(n,t){n.uniform1fv(this.addr,t)}function Iy(n,t){const e=xs(t,this.size,2);n.uniform2fv(this.addr,e)}function Oy(n,t){const e=xs(t,this.size,3);n.uniform3fv(this.addr,e)}function Ny(n,t){const e=xs(t,this.size,4);n.uniform4fv(this.addr,e)}function Fy(n,t){const e=xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zy(n,t){const e=xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Uy(n,t){const e=xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function By(n,t){n.uniform1iv(this.addr,t)}function Vy(n,t){n.uniform2iv(this.addr,t)}function ky(n,t){n.uniform3iv(this.addr,t)}function Gy(n,t){n.uniform4iv(this.addr,t)}function Hy(n,t){n.uniform1uiv(this.addr,t)}function Wy(n,t){n.uniform2uiv(this.addr,t)}function qy(n,t){n.uniform3uiv(this.addr,t)}function Xy(n,t){n.uniform4uiv(this.addr,t)}function jy(n,t,e){const i=this.cache,s=t.length,r=wo(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ff,r[o])}function Yy(n,t,e){const i=this.cache,s=t.length,r=wo(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uf,r[o])}function Jy(n,t,e){const i=this.cache,s=t.length,r=wo(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bf,r[o])}function Zy(n,t,e){const i=this.cache,s=t.length,r=wo(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zf,r[o])}function Ky(n){switch(n){case 5126:return Dy;case 35664:return Iy;case 35665:return Oy;case 35666:return Ny;case 35674:return Fy;case 35675:return zy;case 35676:return Uy;case 5124:case 35670:return By;case 35667:case 35671:return Vy;case 35668:case 35672:return ky;case 35669:case 35673:return Gy;case 5125:return Hy;case 36294:return Wy;case 36295:return qy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Zy}}class $y{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Ry(e.type)}}class Qy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Ky(e.type)}}class tM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function Lu(n,t){n.seq.push(t),n.map[t.id]=t}function eM(n,t,e){const i=n.name,s=i.length;for(fa.lastIndex=0;;){const r=fa.exec(i),o=fa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lu(e,c===void 0?new $y(a,n,t):new Qy(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new tM(a),Lu(e,h)),e=h}}}class Jr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);eM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ru(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let nM=0;function iM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function sM(n){switch(n){case wi:return["Linear","( value )"];case oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Du(n,t,e){const i=n.getShaderParameter(t,35713),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+iM(n.getShaderSource(t),o)}else return s}function rM(n,t){const e=sM(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function oM(n,t){let e;switch(t){case w_:e="Linear";break;case A_:e="Reinhard";break;case E_:e="OptimizedCineon";break;case T_:e="ACESFilmic";break;case C_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function aM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function lM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function cM(n,t){const e={},i=n.getProgramParameter(t,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Is(n){return n!==""}function Iu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ou(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uM=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(n){return n.replace(uM,hM)}function hM(n,t){const e=Bt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return qa(e)}const fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(n){return n.replace(fM,dM)}function dM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===n_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ds&&(t="SHADOWMAP_TYPE_VSM"),t}function mM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case hs:t="ENVMAP_TYPE_CUBE";break;case Mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function _M(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yo:t="ENVMAP_BLENDING_MULTIPLY";break;case b_:t="ENVMAP_BLENDING_MIX";break;case S_:t="ENVMAP_BLENDING_ADD";break}return t}function vM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function xM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pM(e),c=mM(e),u=gM(e),h=_M(e),f=vM(e),d=e.isWebGL2?"":aM(e),g=lM(r),m=s.createProgram();let p,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Is).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(Is).join(`
`),_.length>0&&(_+=`
`)):(p=[Fu(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),_=[d,Fu(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?oM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.encodings_pars_fragment,rM("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),o=qa(o),o=Iu(o,e),o=Ou(o,e),a=qa(a),a=Iu(a,e),a=Ou(a,e),o=Nu(o),a=Nu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+p+o,v=y+_+a,A=Ru(s,35633,x),T=Ru(s,35632,v);if(s.attachShader(m,A),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),n.debug.checkShaderErrors){const P=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(A).trim(),j=s.getShaderInfoLog(T).trim();let at=!0,k=!0;if(s.getProgramParameter(m,35714)===!1){at=!1;const O=Du(s,A,"vertex"),J=Du(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+P+`
`+O+`
`+J)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||j==="")&&(k=!1);k&&(this.diagnostics={runnable:at,programLog:P,vertexShader:{log:I,prefix:p},fragmentShader:{log:j,prefix:_}})}s.deleteShader(A),s.deleteShader(T);let R;this.getUniforms=function(){return R===void 0&&(R=new Jr(s,m)),R};let M;return this.getAttributes=function(){return M===void 0&&(M=cM(s,m)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=nM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let yM=0;class MM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new bM(t),e.set(t,i)),i}}class bM{constructor(t){this.id=yM++,this.code=t,this.usedTimes=0}}function SM(n,t,e,i,s,r,o){const a=new Pf,l=new MM,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,P,I,j,at){const k=j.fog,O=at.geometry,J=M.isMeshStandardMaterial?j.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||J),st=K&&K.mapping===Mo?K.image.height:null,X=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const V=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,H=V!==void 0?V.length:0;let ft=0;O.morphAttributes.position!==void 0&&(ft=1),O.morphAttributes.normal!==void 0&&(ft=2),O.morphAttributes.color!==void 0&&(ft=3);let lt,vt,Et,W;if(X){const Mt=hn[X];lt=Mt.vertexShader,vt=Mt.fragmentShader}else lt=M.vertexShader,vt=M.fragmentShader,l.update(M),Et=l.getVertexShaderID(M),W=l.getFragmentShaderID(M);const z=n.getRenderTarget(),ct=M.alphaTest>0,ut=M.clearcoat>0,xt=M.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:M.type,vertexShader:lt,fragmentShader:vt,defines:M.defines,customVertexShaderID:Et,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:at.isInstancedMesh===!0,instancingColor:at.isInstancedMesh===!0&&at.instanceColor!==null,supportsVertexTextures:f,outputEncoding:z===null?n.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:wi,map:!!M.map,matcap:!!M.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:st,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===j_,tangentSpaceNormalMap:M.normalMapType===So,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===oe,clearcoat:ut,clearcoatMap:ut&&!!M.clearcoatMap,clearcoatRoughnessMap:ut&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ut&&!!M.clearcoatNormalMap,iridescence:xt,iridescenceMap:xt&&!!M.iridescenceMap,iridescenceThicknessMap:xt&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===ns,alphaMap:!!M.alphaMap,alphaTest:ct,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:at.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ft,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Cn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xn,flipSided:M.side===je,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)P.push(I),P.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(P,M),y(P,M),P.push(n.outputEncoding)),P.push(M.customProgramCacheKey),P.join()}function _(M,P){M.push(P.precision),M.push(P.outputEncoding),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.combine),M.push(P.vertexUvs),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function y(M,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.map&&a.enable(4),P.matcap&&a.enable(5),P.envMap&&a.enable(6),P.lightMap&&a.enable(7),P.aoMap&&a.enable(8),P.emissiveMap&&a.enable(9),P.bumpMap&&a.enable(10),P.normalMap&&a.enable(11),P.objectSpaceNormalMap&&a.enable(12),P.tangentSpaceNormalMap&&a.enable(13),P.clearcoat&&a.enable(14),P.clearcoatMap&&a.enable(15),P.clearcoatRoughnessMap&&a.enable(16),P.clearcoatNormalMap&&a.enable(17),P.iridescence&&a.enable(18),P.iridescenceMap&&a.enable(19),P.iridescenceThicknessMap&&a.enable(20),P.displacementMap&&a.enable(21),P.specularMap&&a.enable(22),P.roughnessMap&&a.enable(23),P.metalnessMap&&a.enable(24),P.gradientMap&&a.enable(25),P.alphaMap&&a.enable(26),P.alphaTest&&a.enable(27),P.vertexColors&&a.enable(28),P.vertexAlphas&&a.enable(29),P.vertexUvs&&a.enable(30),P.vertexTangents&&a.enable(31),P.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.physicallyCorrectLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.specularIntensityMap&&a.enable(15),P.specularColorMap&&a.enable(16),P.transmission&&a.enable(17),P.transmissionMap&&a.enable(18),P.thicknessMap&&a.enable(19),P.sheen&&a.enable(20),P.sheenColorMap&&a.enable(21),P.sheenRoughnessMap&&a.enable(22),P.decodeVideoTexture&&a.enable(23),P.opaque&&a.enable(24),M.push(a.mask)}function x(M){const P=g[M.type];let I;if(P){const j=hn[P];I=c0.clone(j.uniforms)}else I=M.uniforms;return I}function v(M,P){let I;for(let j=0,at=c.length;j<at;j++){const k=c[j];if(k.cacheKey===P){I=k,++I.usedTimes;break}}return I===void 0&&(I=new xM(n,P,M,r),c.push(I)),I}function A(M){if(--M.usedTimes===0){const P=c.indexOf(M);c[P]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:v,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function wM(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function AM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,g,m,p){let _=n[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},n[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=p),t++,_}function a(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?i.push(_):d.transparent===!0?s.push(_):e.push(_)}function l(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?i.unshift(_):d.transparent===!0?s.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||AM),i.length>1&&i.sort(f||zu),s.length>1&&s.sort(f||zu)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function EM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Uu,n.set(i,[o])):s>=r.length?(o=new Uu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function TM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function CM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let PM=0;function LM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function RM(n,t){const e=new TM,i=CM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,o=new Qt,a=new Qt;function l(u,h){let f=0,d=0,g=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let m=0,p=0,_=0,y=0,x=0,v=0,A=0,T=0,R=0,M=0;u.sort(LM);const P=h!==!0?Math.PI:1;for(let j=0,at=u.length;j<at;j++){const k=u[j],O=k.color,J=k.intensity,K=k.distance,st=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=O.r*J*P,d+=O.g*J*P,g+=O.b*J*P;else if(k.isLightProbe)for(let X=0;X<9;X++)s.probe[X].addScaledVector(k.sh.coefficients[X],J);else if(k.isDirectionalLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*P),k.castShadow){const V=k.shadow,H=i.get(k);H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,s.directionalShadow[m]=H,s.directionalShadowMap[m]=st,s.directionalShadowMatrix[m]=k.shadow.matrix,v++}s.directional[m]=X,m++}else if(k.isSpotLight){const X=e.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(O).multiplyScalar(J*P),X.distance=K,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,s.spot[_]=X;const V=k.shadow;if(k.map&&(s.spotLightMap[R]=k.map,R++,V.updateMatrices(k),k.castShadow&&M++),s.spotLightMatrix[_]=V.matrix,k.castShadow){const H=i.get(k);H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,s.spotShadow[_]=H,s.spotShadowMap[_]=st,T++}_++}else if(k.isRectAreaLight){const X=e.get(k);X.color.copy(O).multiplyScalar(J),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=X,y++}else if(k.isPointLight){const X=e.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*P),X.distance=k.distance,X.decay=k.decay,k.castShadow){const V=k.shadow,H=i.get(k);H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,s.pointShadow[p]=H,s.pointShadowMap[p]=st,s.pointShadowMatrix[p]=k.shadow.matrix,A++}s.point[p]=X,p++}else if(k.isHemisphereLight){const X=e.get(k);X.skyColor.copy(k.color).multiplyScalar(J*P),X.groundColor.copy(k.groundColor).multiplyScalar(J*P),s.hemi[x]=X,x++}}y>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const I=s.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==y||I.hemiLength!==x||I.numDirectionalShadows!==v||I.numPointShadows!==A||I.numSpotShadows!==T||I.numSpotMaps!==R)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=y,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=T+R-M,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=M,I.directionalLength=m,I.pointLength=p,I.spotLength=_,I.rectAreaLength=y,I.hemiLength=x,I.numDirectionalShadows=v,I.numPointShadows=A,I.numSpotShadows=T,I.numSpotMaps=R,s.version=PM++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const _=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const v=u[y];if(v.isDirectionalLight){const A=s.directional[f];A.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),f++}else if(v.isSpotLight){const A=s.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const A=s.rectArea[m];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const A=s.point[d];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){const A=s.hemi[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:s}}function Bu(n,t){const e=new RM(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function DM(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Bu(n,t),e.set(r,[l])):o>=a.length?(l=new Bu(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class IM extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OM extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const NM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
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
}`;function zM(n,t,e){let i=new Sl;const s=new _t,r=new _t,o=new ne,a=new IM({depthPacking:X_}),l=new OM,c={},u=e.maxTextureSize,h={0:je,1:cs,2:Xn},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:NM,fragmentShader:FM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new te;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new nn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xf,this.render=function(v,A,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const R=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Kn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let j=0,at=v.length;j<at;j++){const k=v[j],O=k.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const J=O.getFrameExtents();if(s.multiply(J),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,O.mapSize.y=r.y)),O.map===null){const st=this.type!==Ds?{minFilter:be,magFilter:be}:{};O.map=new Ai(s.x,s.y,st),O.map.texture.name=k.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const K=O.getViewportCount();for(let st=0;st<K;st++){const X=O.getViewport(st);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),I.viewport(o),O.updateMatrices(k,st),i=O.getFrustum(),x(A,T,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===Ds&&_(O,T),O.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(R,M,P)};function _(v,A){const T=t.update(m);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ai(s.x,s.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(A,null,T,f,m,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(A,null,T,d,m,null)}function y(v,A,T,R,M,P){let I=null;const j=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(j!==void 0?I=j:I=T.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const at=I.uuid,k=A.uuid;let O=c[at];O===void 0&&(O={},c[at]=O);let J=O[k];J===void 0&&(J=I.clone(),O[k]=J),I=J}return I.visible=A.visible,I.wireframe=A.wireframe,P===Ds?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:h[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaTest,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(T.matrixWorld),I.nearDistance=R,I.farDistance=M),I}function x(v,A,T,R,M){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&M===Ds)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const j=t.update(v),at=v.material;if(Array.isArray(at)){const k=j.groups;for(let O=0,J=k.length;O<J;O++){const K=k[O],st=at[K.materialIndex];if(st&&st.visible){const X=y(v,st,R,T.near,T.far,M);n.renderBufferDirect(T,null,j,X,v,K)}}}else if(at.visible){const k=y(v,at,R,T.near,T.far,M);n.renderBufferDirect(T,null,j,k,v,null)}}const I=v.children;for(let j=0,at=I.length;j<at;j++)x(I[j],A,T,R,M)}}function UM(n,t,e){const i=e.isWebGL2;function s(){let F=!1;const it=new ne;let gt=null;const At=new ne(0,0,0,0);return{setMask:function(Pt){gt!==Pt&&!F&&(n.colorMask(Pt,Pt,Pt,Pt),gt=Pt)},setLocked:function(Pt){F=Pt},setClear:function(Pt,qt,pe,ye,ei){ei===!0&&(Pt*=ye,qt*=ye,pe*=ye),it.set(Pt,qt,pe,ye),At.equals(it)===!1&&(n.clearColor(Pt,qt,pe,ye),At.copy(it))},reset:function(){F=!1,gt=null,At.set(-1,0,0,0)}}}function r(){let F=!1,it=null,gt=null,At=null;return{setTest:function(Pt){Pt?ct(2929):ut(2929)},setMask:function(Pt){it!==Pt&&!F&&(n.depthMask(Pt),it=Pt)},setFunc:function(Pt){if(gt!==Pt){switch(Pt){case m_:n.depthFunc(512);break;case g_:n.depthFunc(519);break;case __:n.depthFunc(513);break;case za:n.depthFunc(515);break;case v_:n.depthFunc(514);break;case x_:n.depthFunc(518);break;case y_:n.depthFunc(516);break;case M_:n.depthFunc(517);break;default:n.depthFunc(515)}gt=Pt}},setLocked:function(Pt){F=Pt},setClear:function(Pt){At!==Pt&&(n.clearDepth(Pt),At=Pt)},reset:function(){F=!1,it=null,gt=null,At=null}}}function o(){let F=!1,it=null,gt=null,At=null,Pt=null,qt=null,pe=null,ye=null,ei=null;return{setTest:function(ee){F||(ee?ct(2960):ut(2960))},setMask:function(ee){it!==ee&&!F&&(n.stencilMask(ee),it=ee)},setFunc:function(ee,_n,Ve){(gt!==ee||At!==_n||Pt!==Ve)&&(n.stencilFunc(ee,_n,Ve),gt=ee,At=_n,Pt=Ve)},setOp:function(ee,_n,Ve){(qt!==ee||pe!==_n||ye!==Ve)&&(n.stencilOp(ee,_n,Ve),qt=ee,pe=_n,ye=Ve)},setLocked:function(ee){F=ee},setClear:function(ee){ei!==ee&&(n.clearStencil(ee),ei=ee)},reset:function(){F=!1,it=null,gt=null,At=null,Pt=null,qt=null,pe=null,ye=null,ei=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,_=!1,y=null,x=null,v=null,A=null,T=null,R=null,M=null,P=!1,I=null,j=null,at=null,k=null,O=null;const J=n.getParameter(35661);let K=!1,st=0;const X=n.getParameter(7938);X.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=st>=1):X.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=st>=2);let V=null,H={};const ft=n.getParameter(3088),lt=n.getParameter(2978),vt=new ne().fromArray(ft),Et=new ne().fromArray(lt);function W(F,it,gt){const At=new Uint8Array(4),Pt=n.createTexture();n.bindTexture(F,Pt),n.texParameteri(F,10241,9728),n.texParameteri(F,10240,9728);for(let qt=0;qt<gt;qt++)n.texImage2D(it+qt,0,6408,1,1,0,6408,5121,At);return Pt}const z={};z[3553]=W(3553,3553,1),z[34067]=W(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(2929),l.setFunc(za),B(!1),Q(Rc),ct(2884),D(Kn);function ct(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function ut(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function xt(F,it){return d[F]!==it?(n.bindFramebuffer(F,it),d[F]=it,i&&(F===36009&&(d[36160]=it),F===36160&&(d[36009]=it)),!0):!1}function pt(F,it){let gt=m,At=!1;if(F)if(gt=g.get(it),gt===void 0&&(gt=[],g.set(it,gt)),F.isWebGLMultipleRenderTargets){const Pt=F.texture;if(gt.length!==Pt.length||gt[0]!==36064){for(let qt=0,pe=Pt.length;qt<pe;qt++)gt[qt]=36064+qt;gt.length=Pt.length,At=!0}}else gt[0]!==36064&&(gt[0]=36064,At=!0);else gt[0]!==1029&&(gt[0]=1029,At=!0);At&&(e.isWebGL2?n.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function Mt(F){return p!==F?(n.useProgram(F),p=F,!0):!1}const b={[Yi]:32774,[s_]:32778,[r_]:32779};if(i)b[Oc]=32775,b[Nc]=32776;else{const F=t.get("EXT_blend_minmax");F!==null&&(b[Oc]=F.MIN_EXT,b[Nc]=F.MAX_EXT)}const w={[o_]:0,[a_]:1,[l_]:768,[yf]:770,[p_]:776,[f_]:774,[u_]:772,[c_]:769,[Mf]:771,[d_]:775,[h_]:773};function D(F,it,gt,At,Pt,qt,pe,ye){if(F===Kn){_===!0&&(ut(3042),_=!1);return}if(_===!1&&(ct(3042),_=!0),F!==i_){if(F!==y||ye!==P){if((x!==Yi||T!==Yi)&&(n.blendEquation(32774),x=Yi,T=Yi),ye)switch(F){case ns:n.blendFuncSeparate(1,771,1,771);break;case Fa:n.blendFunc(1,1);break;case Dc:n.blendFuncSeparate(0,769,0,1);break;case Ic:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ns:n.blendFuncSeparate(770,771,1,771);break;case Fa:n.blendFunc(770,1);break;case Dc:n.blendFuncSeparate(0,769,0,1);break;case Ic:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,A=null,R=null,M=null,y=F,P=ye}return}Pt=Pt||it,qt=qt||gt,pe=pe||At,(it!==x||Pt!==T)&&(n.blendEquationSeparate(b[it],b[Pt]),x=it,T=Pt),(gt!==v||At!==A||qt!==R||pe!==M)&&(n.blendFuncSeparate(w[gt],w[At],w[qt],w[pe]),v=gt,A=At,R=qt,M=pe),y=F,P=null}function U(F,it){F.side===Xn?ut(2884):ct(2884);let gt=F.side===je;it&&(gt=!gt),B(gt),F.blending===ns&&F.transparent===!1?D(Kn):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const At=F.stencilWrite;c.setTest(At),At&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(32926):ut(32926)}function B(F){I!==F&&(F?n.frontFace(2304):n.frontFace(2305),I=F)}function Q(F){F!==t_?(ct(2884),F!==j&&(F===Rc?n.cullFace(1029):F===e_?n.cullFace(1028):n.cullFace(1032))):ut(2884),j=F}function rt(F){F!==at&&(K&&n.lineWidth(F),at=F)}function Y(F,it,gt){F?(ct(32823),(k!==it||O!==gt)&&(n.polygonOffset(it,gt),k=it,O=gt)):ut(32823)}function ht(F){F?ct(3089):ut(3089)}function tt(F){F===void 0&&(F=33984+J-1),V!==F&&(n.activeTexture(F),V=F)}function E(F,it,gt){gt===void 0&&(V===null?gt=33984+J-1:gt=V);let At=H[gt];At===void 0&&(At={type:void 0,texture:void 0},H[gt]=At),(At.type!==F||At.texture!==it)&&(V!==gt&&(n.activeTexture(gt),V=gt),n.bindTexture(F,it||z[F]),At.type=F,At.texture=it)}function S(){const F=H[V];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(F){vt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),vt.copy(F))}function wt(F){Et.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Et.copy(F))}function Ot(F,it){let gt=h.get(it);gt===void 0&&(gt=new WeakMap,h.set(it,gt));let At=gt.get(F);At===void 0&&(At=n.getUniformBlockIndex(it,F.name),gt.set(F,At))}function Zt(F,it){const At=h.get(it).get(F);u.get(F)!==At&&(n.uniformBlockBinding(it,At,F.__bindingPointIndex),u.set(F,At))}function de(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},V=null,H={},d={},g=new WeakMap,m=[],p=null,_=!1,y=null,x=null,v=null,A=null,T=null,R=null,M=null,P=!1,I=null,j=null,at=null,k=null,O=null,vt.set(0,0,n.canvas.width,n.canvas.height),Et.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ct,disable:ut,bindFramebuffer:xt,drawBuffers:pt,useProgram:Mt,setBlending:D,setMaterial:U,setFlipSided:B,setCullFace:Q,setLineWidth:rt,setPolygonOffset:Y,setScissorTest:ht,activeTexture:tt,bindTexture:E,unbindTexture:S,compressedTexImage2D:N,compressedTexImage3D:Z,texImage2D:Dt,texImage3D:Tt,updateUBOMapping:Ot,uniformBlockBinding:Zt,texStorage2D:$,texStorage3D:Ct,texSubImage2D:nt,texSubImage3D:dt,compressedTexSubImage2D:bt,compressedTexSubImage3D:mt,scissor:Lt,viewport:wt,reset:de}}function BM(n,t,e,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,S){return _?new OffscreenCanvas(E,S):Js("canvas")}function x(E,S,N,Z){let nt=1;if((E.width>Z||E.height>Z)&&(nt=Z/Math.max(E.width,E.height)),nt<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const dt=S?Wa:Math.floor,bt=dt(nt*E.width),mt=dt(nt*E.height);m===void 0&&(m=y(bt,mt));const $=N?y(bt,mt):m;return $.width=bt,$.height=mt,$.getContext("2d").drawImage(E,0,0,bt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+bt+"x"+mt+")."),$}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function v(E){return au(E.width)&&au(E.height)}function A(E){return a?!1:E.wrapS!==Qe||E.wrapT!==Qe||E.minFilter!==be&&E.minFilter!==We}function T(E,S){return E.generateMipmaps&&S&&E.minFilter!==be&&E.minFilter!==We}function R(E){n.generateMipmap(E)}function M(E,S,N,Z,nt=!1){if(a===!1)return S;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let dt=S;return S===6403&&(N===5126&&(dt=33326),N===5131&&(dt=33325),N===5121&&(dt=33321)),S===33319&&(N===5126&&(dt=33328),N===5131&&(dt=33327),N===5121&&(dt=33323)),S===6408&&(N===5126&&(dt=34836),N===5131&&(dt=34842),N===5121&&(dt=Z===oe&&nt===!1?35907:32856),N===32819&&(dt=32854),N===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function P(E,S,N){return T(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==be&&E.minFilter!==We?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function I(E){return E===be||E===Fc||E===zc?9728:9729}function j(E){const S=E.target;S.removeEventListener("dispose",j),k(S),S.isVideoTexture&&g.delete(S)}function at(E){const S=E.target;S.removeEventListener("dispose",at),J(S)}function k(E){const S=i.get(E);if(S.__webglInit===void 0)return;const N=E.source,Z=p.get(N);if(Z){const nt=Z[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&O(E),Object.keys(Z).length===0&&p.delete(N)}i.remove(E)}function O(E){const S=i.get(E);n.deleteTexture(S.__webglTexture);const N=E.source,Z=p.get(N);delete Z[S.__cacheKey],o.memory.textures--}function J(E){const S=E.texture,N=i.get(E),Z=i.get(S);if(Z.__webglTexture!==void 0&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)n.deleteFramebuffer(N.__webglFramebuffer[nt]),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[nt]);else{if(n.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let nt=0;nt<N.__webglColorRenderbuffer.length;nt++)N.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[nt]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let nt=0,dt=S.length;nt<dt;nt++){const bt=i.get(S[nt]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(S[nt])}i.remove(S),i.remove(E)}let K=0;function st(){K=0}function X(){const E=K;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),K+=1,E}function V(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function H(E,S){const N=i.get(E);if(E.isVideoTexture&&ht(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(N,E,S);return}}e.bindTexture(3553,N.__webglTexture,33984+S)}function ft(E,S){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ut(N,E,S);return}e.bindTexture(35866,N.__webglTexture,33984+S)}function lt(E,S){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ut(N,E,S);return}e.bindTexture(32879,N.__webglTexture,33984+S)}function vt(E,S){const N=i.get(E);if(E.version>0&&N.__version!==E.version){xt(N,E,S);return}e.bindTexture(34067,N.__webglTexture,33984+S)}const Et={[Va]:10497,[Qe]:33071,[ka]:33648},W={[be]:9728,[Fc]:9984,[zc]:9986,[We]:9729,[P_]:9985,[bo]:9987};function z(E,S,N){if(N?(n.texParameteri(E,10242,Et[S.wrapS]),n.texParameteri(E,10243,Et[S.wrapT]),(E===32879||E===35866)&&n.texParameteri(E,32882,Et[S.wrapR]),n.texParameteri(E,10240,W[S.magFilter]),n.texParameteri(E,10241,W[S.minFilter])):(n.texParameteri(E,10242,33071),n.texParameteri(E,10243,33071),(E===32879||E===35866)&&n.texParameteri(E,32882,33071),(S.wrapS!==Qe||S.wrapT!==Qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,10240,I(S.magFilter)),n.texParameteri(E,10241,I(S.minFilter)),S.minFilter!==be&&S.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(S.type===_i&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ys&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ct(E,S){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",j));const Z=S.source;let nt=p.get(Z);nt===void 0&&(nt={},p.set(Z,nt));const dt=V(S);if(dt!==E.__cacheKey){nt[dt]===void 0&&(nt[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),nt[dt].usedTimes++;const bt=nt[E.__cacheKey];bt!==void 0&&(nt[E.__cacheKey].usedTimes--,bt.usedTimes===0&&O(S)),E.__cacheKey=dt,E.__webglTexture=nt[dt].texture}return N}function ut(E,S,N){let Z=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=35866),S.isData3DTexture&&(Z=32879);const nt=ct(E,S),dt=S.source;e.bindTexture(Z,E.__webglTexture,33984+N);const bt=i.get(dt);if(dt.version!==bt.__version||nt===!0){e.activeTexture(33984+N),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const mt=A(S)&&v(S.image)===!1;let $=x(S.image,mt,!1,u);$=tt(S,$);const Ct=v($)||a,Dt=r.convert(S.format,S.encoding);let Tt=r.convert(S.type),Lt=M(S.internalFormat,Dt,Tt,S.encoding,S.isVideoTexture);z(Z,S,Ct);let wt;const Ot=S.mipmaps,Zt=a&&S.isVideoTexture!==!0,de=bt.__version===void 0||nt===!0,F=P(S,$,Ct);if(S.isDepthTexture)Lt=6402,a?S.type===_i?Lt=36012:S.type===gi?Lt=33190:S.type===is?Lt=35056:Lt=33189:S.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Mi&&Lt===6402&&S.type!==Sf&&S.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=gi,Tt=r.convert(S.type)),S.format===fs&&Lt===6402&&(Lt=34041,S.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=is,Tt=r.convert(S.type))),de&&(Zt?e.texStorage2D(3553,1,Lt,$.width,$.height):e.texImage2D(3553,0,Lt,$.width,$.height,0,Dt,Tt,null));else if(S.isDataTexture)if(Ot.length>0&&Ct){Zt&&de&&e.texStorage2D(3553,F,Lt,Ot[0].width,Ot[0].height);for(let it=0,gt=Ot.length;it<gt;it++)wt=Ot[it],Zt?e.texSubImage2D(3553,it,0,0,wt.width,wt.height,Dt,Tt,wt.data):e.texImage2D(3553,it,Lt,wt.width,wt.height,0,Dt,Tt,wt.data);S.generateMipmaps=!1}else Zt?(de&&e.texStorage2D(3553,F,Lt,$.width,$.height),e.texSubImage2D(3553,0,0,0,$.width,$.height,Dt,Tt,$.data)):e.texImage2D(3553,0,Lt,$.width,$.height,0,Dt,Tt,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&de&&e.texStorage3D(35866,F,Lt,Ot[0].width,Ot[0].height,$.depth);for(let it=0,gt=Ot.length;it<gt;it++)wt=Ot[it],S.format!==tn?Dt!==null?Zt?e.compressedTexSubImage3D(35866,it,0,0,0,wt.width,wt.height,$.depth,Dt,wt.data,0,0):e.compressedTexImage3D(35866,it,Lt,wt.width,wt.height,$.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(35866,it,0,0,0,wt.width,wt.height,$.depth,Dt,Tt,wt.data):e.texImage3D(35866,it,Lt,wt.width,wt.height,$.depth,0,Dt,Tt,wt.data)}else{Zt&&de&&e.texStorage2D(3553,F,Lt,Ot[0].width,Ot[0].height);for(let it=0,gt=Ot.length;it<gt;it++)wt=Ot[it],S.format!==tn?Dt!==null?Zt?e.compressedTexSubImage2D(3553,it,0,0,wt.width,wt.height,Dt,wt.data):e.compressedTexImage2D(3553,it,Lt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(3553,it,0,0,wt.width,wt.height,Dt,Tt,wt.data):e.texImage2D(3553,it,Lt,wt.width,wt.height,0,Dt,Tt,wt.data)}else if(S.isDataArrayTexture)Zt?(de&&e.texStorage3D(35866,F,Lt,$.width,$.height,$.depth),e.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,Dt,Tt,$.data)):e.texImage3D(35866,0,Lt,$.width,$.height,$.depth,0,Dt,Tt,$.data);else if(S.isData3DTexture)Zt?(de&&e.texStorage3D(32879,F,Lt,$.width,$.height,$.depth),e.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,Dt,Tt,$.data)):e.texImage3D(32879,0,Lt,$.width,$.height,$.depth,0,Dt,Tt,$.data);else if(S.isFramebufferTexture){if(de)if(Zt)e.texStorage2D(3553,F,Lt,$.width,$.height);else{let it=$.width,gt=$.height;for(let At=0;At<F;At++)e.texImage2D(3553,At,Lt,it,gt,0,Dt,Tt,null),it>>=1,gt>>=1}}else if(Ot.length>0&&Ct){Zt&&de&&e.texStorage2D(3553,F,Lt,Ot[0].width,Ot[0].height);for(let it=0,gt=Ot.length;it<gt;it++)wt=Ot[it],Zt?e.texSubImage2D(3553,it,0,0,Dt,Tt,wt):e.texImage2D(3553,it,Lt,Dt,Tt,wt);S.generateMipmaps=!1}else Zt?(de&&e.texStorage2D(3553,F,Lt,$.width,$.height),e.texSubImage2D(3553,0,0,0,Dt,Tt,$)):e.texImage2D(3553,0,Lt,Dt,Tt,$);T(S,Ct)&&R(Z),bt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function xt(E,S,N){if(S.image.length!==6)return;const Z=ct(E,S),nt=S.source;e.bindTexture(34067,E.__webglTexture,33984+N);const dt=i.get(nt);if(nt.version!==dt.__version||Z===!0){e.activeTexture(33984+N),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const bt=S.isCompressedTexture||S.image[0].isCompressedTexture,mt=S.image[0]&&S.image[0].isDataTexture,$=[];for(let it=0;it<6;it++)!bt&&!mt?$[it]=x(S.image[it],!1,!0,c):$[it]=mt?S.image[it].image:S.image[it],$[it]=tt(S,$[it]);const Ct=$[0],Dt=v(Ct)||a,Tt=r.convert(S.format,S.encoding),Lt=r.convert(S.type),wt=M(S.internalFormat,Tt,Lt,S.encoding),Ot=a&&S.isVideoTexture!==!0,Zt=dt.__version===void 0||Z===!0;let de=P(S,Ct,Dt);z(34067,S,Dt);let F;if(bt){Ot&&Zt&&e.texStorage2D(34067,de,wt,Ct.width,Ct.height);for(let it=0;it<6;it++){F=$[it].mipmaps;for(let gt=0;gt<F.length;gt++){const At=F[gt];S.format!==tn?Tt!==null?Ot?e.compressedTexSubImage2D(34069+it,gt,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(34069+it,gt,wt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(34069+it,gt,0,0,At.width,At.height,Tt,Lt,At.data):e.texImage2D(34069+it,gt,wt,At.width,At.height,0,Tt,Lt,At.data)}}}else{F=S.mipmaps,Ot&&Zt&&(F.length>0&&de++,e.texStorage2D(34067,de,wt,$[0].width,$[0].height));for(let it=0;it<6;it++)if(mt){Ot?e.texSubImage2D(34069+it,0,0,0,$[it].width,$[it].height,Tt,Lt,$[it].data):e.texImage2D(34069+it,0,wt,$[it].width,$[it].height,0,Tt,Lt,$[it].data);for(let gt=0;gt<F.length;gt++){const Pt=F[gt].image[it].image;Ot?e.texSubImage2D(34069+it,gt+1,0,0,Pt.width,Pt.height,Tt,Lt,Pt.data):e.texImage2D(34069+it,gt+1,wt,Pt.width,Pt.height,0,Tt,Lt,Pt.data)}}else{Ot?e.texSubImage2D(34069+it,0,0,0,Tt,Lt,$[it]):e.texImage2D(34069+it,0,wt,Tt,Lt,$[it]);for(let gt=0;gt<F.length;gt++){const At=F[gt];Ot?e.texSubImage2D(34069+it,gt+1,0,0,Tt,Lt,At.image[it]):e.texImage2D(34069+it,gt+1,wt,Tt,Lt,At.image[it])}}}T(S,Dt)&&R(34067),dt.__version=nt.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function pt(E,S,N,Z,nt){const dt=r.convert(N.format,N.encoding),bt=r.convert(N.type),mt=M(N.internalFormat,dt,bt,N.encoding);i.get(S).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,mt,S.width,S.height,S.depth,0,dt,bt,null):e.texImage2D(nt,0,mt,S.width,S.height,0,dt,bt,null)),e.bindFramebuffer(36160,E),Y(S)?f.framebufferTexture2DMultisampleEXT(36160,Z,nt,i.get(N).__webglTexture,0,rt(S)):(nt===3553||nt>=34069&&nt<=34074)&&n.framebufferTexture2D(36160,Z,nt,i.get(N).__webglTexture,0),e.bindFramebuffer(36160,null)}function Mt(E,S,N){if(n.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let Z=33189;if(N||Y(S)){const nt=S.depthTexture;nt&&nt.isDepthTexture&&(nt.type===_i?Z=36012:nt.type===gi&&(Z=33190));const dt=rt(S);Y(S)?f.renderbufferStorageMultisampleEXT(36161,dt,Z,S.width,S.height):n.renderbufferStorageMultisample(36161,dt,Z,S.width,S.height)}else n.renderbufferStorage(36161,Z,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const Z=rt(S);N&&Y(S)===!1?n.renderbufferStorageMultisample(36161,Z,35056,S.width,S.height):Y(S)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,E)}else{const Z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let nt=0;nt<Z.length;nt++){const dt=Z[nt],bt=r.convert(dt.format,dt.encoding),mt=r.convert(dt.type),$=M(dt.internalFormat,bt,mt,dt.encoding),Ct=rt(S);N&&Y(S)===!1?n.renderbufferStorageMultisample(36161,Ct,$,S.width,S.height):Y(S)?f.renderbufferStorageMultisampleEXT(36161,Ct,$,S.width,S.height):n.renderbufferStorage(36161,$,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function b(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const Z=i.get(S.depthTexture).__webglTexture,nt=rt(S);if(S.depthTexture.format===Mi)Y(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,nt):n.framebufferTexture2D(36160,36096,3553,Z,0);else if(S.depthTexture.format===fs)Y(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,nt):n.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function w(E){const S=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");b(S.__webglFramebuffer,E)}else if(N){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(36160,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]=n.createRenderbuffer(),Mt(S.__webglDepthbuffer[Z],E,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Mt(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function D(E,S,N){const Z=i.get(E);S!==void 0&&pt(Z.__webglFramebuffer,E,E.texture,36064,3553),N!==void 0&&w(E)}function U(E){const S=E.texture,N=i.get(E),Z=i.get(S);E.addEventListener("dispose",at),E.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++);const nt=E.isWebGLCubeRenderTarget===!0,dt=E.isWebGLMultipleRenderTargets===!0,bt=v(E)||a;if(nt){N.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)N.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(N.__webglFramebuffer=n.createFramebuffer(),dt)if(s.drawBuffers){const mt=E.texture;for(let $=0,Ct=mt.length;$<Ct;$++){const Dt=i.get(mt[$]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Y(E)===!1){const mt=dt?S:[S];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let $=0;$<mt.length;$++){const Ct=mt[$];N.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(36161,N.__webglColorRenderbuffer[$]);const Dt=r.convert(Ct.format,Ct.encoding),Tt=r.convert(Ct.type),Lt=M(Ct.internalFormat,Dt,Tt,Ct.encoding,E.isXRRenderTarget===!0),wt=rt(E);n.renderbufferStorageMultisample(36161,wt,Lt,E.width,E.height),n.framebufferRenderbuffer(36160,36064+$,36161,N.__webglColorRenderbuffer[$])}n.bindRenderbuffer(36161,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,Z.__webglTexture),z(34067,S,bt);for(let mt=0;mt<6;mt++)pt(N.__webglFramebuffer[mt],E,S,36064,34069+mt);T(S,bt)&&R(34067),e.unbindTexture()}else if(dt){const mt=E.texture;for(let $=0,Ct=mt.length;$<Ct;$++){const Dt=mt[$],Tt=i.get(Dt);e.bindTexture(3553,Tt.__webglTexture),z(3553,Dt,bt),pt(N.__webglFramebuffer,E,Dt,36064+$,3553),T(Dt,bt)&&R(3553)}e.unbindTexture()}else{let mt=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?mt=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,Z.__webglTexture),z(mt,S,bt),pt(N.__webglFramebuffer,E,S,36064,mt),T(S,bt)&&R(mt),e.unbindTexture()}E.depthBuffer&&w(E)}function B(E){const S=v(E)||a,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Z=0,nt=N.length;Z<nt;Z++){const dt=N[Z];if(T(dt,S)){const bt=E.isWebGLCubeRenderTarget?34067:3553,mt=i.get(dt).__webglTexture;e.bindTexture(bt,mt),R(bt),e.unbindTexture()}}}function Q(E){if(a&&E.samples>0&&Y(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,Z=E.height;let nt=16384;const dt=[],bt=E.stencilBuffer?33306:36096,mt=i.get(E),$=E.isWebGLMultipleRenderTargets===!0;if($)for(let Ct=0;Ct<S.length;Ct++)e.bindFramebuffer(36160,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ct,36161,null),e.bindFramebuffer(36160,mt.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ct,3553,null,0);e.bindFramebuffer(36008,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,mt.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){dt.push(36064+Ct),E.depthBuffer&&dt.push(bt);const Dt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(Dt===!1&&(E.depthBuffer&&(nt|=256),E.stencilBuffer&&(nt|=1024)),$&&n.framebufferRenderbuffer(36008,36064,36161,mt.__webglColorRenderbuffer[Ct]),Dt===!0&&(n.invalidateFramebuffer(36008,[bt]),n.invalidateFramebuffer(36009,[bt])),$){const Tt=i.get(S[Ct]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Tt,0)}n.blitFramebuffer(0,0,N,Z,0,0,N,Z,nt,9728),d&&n.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),$)for(let Ct=0;Ct<S.length;Ct++){e.bindFramebuffer(36160,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ct,36161,mt.__webglColorRenderbuffer[Ct]);const Dt=i.get(S[Ct]).__webglTexture;e.bindFramebuffer(36160,mt.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ct,3553,Dt,0)}e.bindFramebuffer(36009,mt.__webglMultisampledFramebuffer)}}function rt(E){return Math.min(h,E.samples)}function Y(E){const S=i.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(E){const S=o.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function tt(E,S){const N=E.encoding,Z=E.format,nt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ha||N!==wi&&(N===oe?a===!1?t.has("EXT_sRGB")===!0&&Z===tn?(E.format=Ha,E.minFilter=We,E.generateMipmaps=!1):S=Ef.sRGBToLinear(S):(Z!==tn||nt!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),S}this.allocateTextureUnit=X,this.resetTextureUnits=st,this.setTexture2D=H,this.setTexture2DArray=ft,this.setTexture3D=lt,this.setTextureCube=vt,this.rebindTextures=D,this.setupRenderTarget=U,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Y}function VM(n,t,e){const i=e.isWebGL2;function s(r,o=null){let a;if(r===Si)return 5121;if(r===I_)return 32819;if(r===O_)return 32820;if(r===L_)return 5120;if(r===R_)return 5122;if(r===Sf)return 5123;if(r===D_)return 5124;if(r===gi)return 5125;if(r===_i)return 5126;if(r===Ys)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===N_)return 6406;if(r===tn)return 6408;if(r===z_)return 6409;if(r===U_)return 6410;if(r===Mi)return 6402;if(r===fs)return 34041;if(r===B_)return 6403;if(r===F_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ha)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===V_)return 36244;if(r===k_)return 33319;if(r===G_)return 33320;if(r===H_)return 36249;if(r===zo||r===Uo||r===Bo||r===Vo)if(o===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===zo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===zo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uc||r===Bc||r===Vc||r===kc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Uc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===W_)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gc||r===Hc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Gc)return o===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Hc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wc||r===qc||r===Xc||r===jc||r===Yc||r===Jc||r===Zc||r===Kc||r===$c||r===Qc||r===tu||r===eu||r===nu||r===iu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$c)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===iu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===su)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===su)return o===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===is?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class kM extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pr extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const y=new Pr;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const _=c.joints[m.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class HM extends Be{constructor(t,e,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Mi,u!==Mi&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Mi&&(i=gi),i===void 0&&u===fs&&(i=is),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1}}class WM extends _s{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=e.getContextAttributes();let m=null,p=null;const _=[],y=[],x=new ze;x.layers.enable(1),x.viewport=new ne;const v=new ze;v.layers.enable(2),v.viewport=new ne;const A=[x,v],T=new kM;T.layers.enable(1),T.layers.enable(2);let R=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let H=_[V];return H===void 0&&(H=new da,_[V]=H),H.getTargetRaySpace()},this.getControllerGrip=function(V){let H=_[V];return H===void 0&&(H=new da,_[V]=H),H.getGripSpace()},this.getHand=function(V){let H=_[V];return H===void 0&&(H=new da,_[V]=H),H.getHandSpace()};function P(V){const H=y.indexOf(V.inputSource);if(H===-1)return;const ft=_[H];ft!==void 0&&ft.dispatchEvent({type:V.type,data:V.inputSource})}function I(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",j);for(let V=0;V<_.length;V++){const H=y[V];H!==null&&(y[V]=null,_[V].disconnect(H))}R=null,M=null,t.setRenderTarget(m),f=null,h=null,u=null,s=null,p=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",I),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:f}),p=new Ai(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Si,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let H=null,ft=null,lt=null;g.depth&&(lt=g.stencil?35056:33190,H=g.stencil?fs:Mi,ft=g.stencil?is:gi);const vt={colorFormat:32856,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),h=u.createProjectionLayer(vt),s.updateRenderState({layers:[h]}),p=new Ai(h.textureWidth,h.textureHeight,{format:tn,type:Si,depthTexture:new HM(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const Et=t.properties.get(p);Et.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),X.setContext(s),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function j(V){for(let H=0;H<V.removed.length;H++){const ft=V.removed[H],lt=y.indexOf(ft);lt>=0&&(y[lt]=null,_[lt].dispatchEvent({type:"disconnected",data:ft}))}for(let H=0;H<V.added.length;H++){const ft=V.added[H];let lt=y.indexOf(ft);if(lt===-1){for(let Et=0;Et<_.length;Et++)if(Et>=y.length){y.push(ft),lt=Et;break}else if(y[Et]===null){y[Et]=ft,lt=Et;break}if(lt===-1)break}const vt=_[lt];vt&&vt.dispatchEvent({type:"connected",data:ft})}}const at=new L,k=new L;function O(V,H,ft){at.setFromMatrixPosition(H.matrixWorld),k.setFromMatrixPosition(ft.matrixWorld);const lt=at.distanceTo(k),vt=H.projectionMatrix.elements,Et=ft.projectionMatrix.elements,W=vt[14]/(vt[10]-1),z=vt[14]/(vt[10]+1),ct=(vt[9]+1)/vt[5],ut=(vt[9]-1)/vt[5],xt=(vt[8]-1)/vt[0],pt=(Et[8]+1)/Et[0],Mt=W*xt,b=W*pt,w=lt/(-xt+pt),D=w*-xt;H.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(D),V.translateZ(w),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const U=W+w,B=z+w,Q=Mt-D,rt=b+(lt-D),Y=ct*z/B*U,ht=ut*z/B*U;V.projectionMatrix.makePerspective(Q,rt,Y,ht,U,B)}function J(V,H){H===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(H.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;T.near=v.near=x.near=V.near,T.far=v.far=x.far=V.far,(R!==T.near||M!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,M=T.far);const H=V.parent,ft=T.cameras;J(T,H);for(let vt=0;vt<ft.length;vt++)J(ft[vt],H);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),V.matrix.copy(T.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const lt=V.children;for(let vt=0,Et=lt.length;vt<Et;vt++)lt[vt].updateMatrixWorld(!0);ft.length===2?O(T,x,v):T.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(V){h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let K=null;function st(V,H){if(c=H.getViewerPose(l||o),d=H,c!==null){const ft=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let lt=!1;ft.length!==T.cameras.length&&(T.cameras.length=0,lt=!0);for(let vt=0;vt<ft.length;vt++){const Et=ft[vt];let W=null;if(f!==null)W=f.getViewport(Et);else{const ct=u.getViewSubImage(h,Et);W=ct.viewport,vt===0&&(t.setRenderTargetTextures(p,ct.colorTexture,h.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(p))}let z=A[vt];z===void 0&&(z=new ze,z.layers.enable(vt),z.viewport=new ne,A[vt]=z),z.matrix.fromArray(Et.transform.matrix),z.projectionMatrix.fromArray(Et.projectionMatrix),z.viewport.set(W.x,W.y,W.width,W.height),vt===0&&T.matrix.copy(z.matrix),lt===!0&&T.cameras.push(z)}}for(let ft=0;ft<_.length;ft++){const lt=y[ft],vt=_[ft];lt!==null&&vt!==void 0&&vt.update(lt,H,l||o)}K&&K(V,H),d=null}const X=new Of;X.setAnimationLoop(st),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}function qM(n,t){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),d(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===je&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function XM(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(35375):0;function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function c(y,x){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",p));const A=x.program;i.updateUBOMapping(y,A);const T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function u(y){const x=h();y.__bindingPointIndex=x;const v=n.createBuffer(),A=y.__size,T=y.usage;return n.bindBuffer(35345,v),n.bufferData(35345,A,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,x,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],v=y.uniforms,A=y.__cache;n.bindBuffer(35345,x);for(let T=0,R=v.length;T<R;T++){const M=v[T];if(d(M,T,A)===!0){const P=M.value,I=M.__offset;typeof P=="number"?(M.__data[0]=P,n.bufferSubData(35345,I,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):P.toArray(M.__data),n.bufferSubData(35345,I,M.__data))}}n.bindBuffer(35345,null)}function d(y,x,v){const A=y.value;if(v[x]===void 0)return typeof A=="number"?v[x]=A:v[x]=A.clone(),!0;if(typeof A=="number"){if(v[x]!==A)return v[x]=A,!0}else{const T=v[x];if(T.equals(A)===!1)return T.copy(A),!0}return!1}function g(y){const x=y.uniforms;let v=0;const A=16;let T=0;for(let R=0,M=x.length;R<M;R++){const P=x[R],I=m(P);if(P.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,R>0){T=v%A;const j=A-T;T!==0&&j-I.boundary<0&&(v+=A-T,P.__offset=v)}v+=I.storage}return T=v%A,T>0&&(v+=A-T),y.__size=v,y.__cache={},this}function m(y){const x=y.value,v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(y){const x=y.target;x.removeEventListener("dispose",p);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function _(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function jM(){const n=Js("canvas");return n.style.display="block",n}function Vf(n={}){this.isWebGLRenderer=!0;const t=n.canvas!==void 0?n.canvas:jM(),e=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wi,this.physicallyCorrectLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,_=0,y=0,x=null,v=-1,A=null;const T=new ne,R=new ne;let M=null,P=t.width,I=t.height,j=1,at=null,k=null;const O=new ne(0,0,P,I),J=new ne(0,0,P,I);let K=!1;const st=new Sl;let X=!1,V=!1,H=null;const ft=new Qt,lt=new _t,vt=new L,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return x===null?j:1}let z=e;function ct(C,q){for(let et=0;et<C.length;et++){const G=C[et],ot=t.getContext(G,q);if(ot!==null)return ot}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),z===null){const q=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&q.shift(),z=ct(q,C),z===null)throw ct(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ut,xt,pt,Mt,b,w,D,U,B,Q,rt,Y,ht,tt,E,S,N,Z,nt,dt,bt,mt,$,Ct;function Dt(){ut=new sy(z),xt=new $x(z,ut,n),ut.init(xt),mt=new VM(z,ut,xt),pt=new UM(z,ut,xt),Mt=new ay,b=new wM,w=new BM(z,ut,pt,b,xt,mt,Mt),D=new ty(m),U=new iy(m),B=new g0(z,xt),$=new Zx(z,ut,B,xt),Q=new ry(z,B,Mt,$),rt=new hy(z,Q,B,Mt),nt=new uy(z,xt,w),S=new Qx(b),Y=new SM(m,D,U,ut,xt,$,S),ht=new qM(m,b),tt=new EM,E=new DM(ut,xt),Z=new Jx(m,D,U,pt,rt,u,o),N=new zM(m,rt,xt),Ct=new XM(z,Mt,xt,pt),dt=new Kx(z,ut,Mt,xt),bt=new oy(z,ut,Mt,xt),Mt.programs=Y.programs,m.capabilities=xt,m.extensions=ut,m.properties=b,m.renderLists=tt,m.shadowMap=N,m.state=pt,m.info=Mt}Dt();const Tt=new WM(m,z);this.xr=Tt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(P,I,!1))},this.getSize=function(C){return C.set(P,I)},this.setSize=function(C,q,et){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,I=q,t.width=Math.floor(C*j),t.height=Math.floor(q*j),et!==!1&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(P*j,I*j).floor()},this.setDrawingBufferSize=function(C,q,et){P=C,I=q,j=et,t.width=Math.floor(C*et),t.height=Math.floor(q*et),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,q,et,G){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,q,et,G),pt.viewport(T.copy(O).multiplyScalar(j).floor())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,q,et,G){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,q,et,G),pt.scissor(R.copy(J).multiplyScalar(j).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){pt.setScissorTest(K=C)},this.setOpaqueSort=function(C){at=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,q=!0,et=!0){let G=0;C&&(G|=16384),q&&(G|=256),et&&(G|=1024),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),tt.dispose(),E.dispose(),b.dispose(),D.dispose(),U.dispose(),rt.dispose(),$.dispose(),Ct.dispose(),Y.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",At),Tt.removeEventListener("sessionend",Pt),H&&(H.dispose(),H=null),qt.stop()};function Lt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=Mt.autoReset,q=N.enabled,et=N.autoUpdate,G=N.needsUpdate,ot=N.type;Dt(),Mt.autoReset=C,N.enabled=q,N.autoUpdate=et,N.needsUpdate=G,N.type=ot}function Ot(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Zt(C){const q=C.target;q.removeEventListener("dispose",Zt),de(q)}function de(C){F(C),b.remove(C)}function F(C){const q=b.get(C).programs;q!==void 0&&(q.forEach(function(et){Y.releaseProgram(et)}),C.isShaderMaterial&&Y.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,et,G,ot,Rt){q===null&&(q=Et);const Nt=ot.isMesh&&ot.matrixWorld.determinant()<0,Vt=dd(C,q,et,G,ot);pt.setMaterial(G,Nt);let Ut=et.index;const Xt=et.attributes.position;if(Ut===null){if(Xt===void 0||Xt.count===0)return}else if(Ut.count===0)return;let kt=1;G.wireframe===!0&&(Ut=Q.getWireframeAttribute(et),kt=2),$.setup(ot,G,Vt,et,Ut);let Wt,re=dt;Ut!==null&&(Wt=B.get(Ut),re=bt,re.setIndex(Wt));const ni=Ut!==null?Ut.count:Xt.count,Ci=et.drawRange.start*kt,Pi=et.drawRange.count*kt,an=Rt!==null?Rt.start*kt:0,jt=Rt!==null?Rt.count*kt:1/0,Li=Math.max(Ci,an),ae=Math.min(ni,Ci+Pi,an+jt)-1,ke=Math.max(0,ae-Li+1);if(ke!==0){if(ot.isMesh)G.wireframe===!0?(pt.setLineWidth(G.wireframeLinewidth*W()),re.setMode(1)):re.setMode(4);else if(ot.isLine){let On=G.linewidth;On===void 0&&(On=1),pt.setLineWidth(On*W()),ot.isLineSegments?re.setMode(1):ot.isLineLoop?re.setMode(2):re.setMode(3)}else ot.isPoints?re.setMode(0):ot.isSprite&&re.setMode(4);if(ot.isInstancedMesh)re.renderInstances(Li,ke,ot.count);else if(et.isInstancedBufferGeometry){const On=Math.min(et.instanceCount,et._maxInstanceCount);re.renderInstances(Li,ke,On)}else re.render(Li,ke)}},this.compile=function(C,q){function et(G,ot,Rt){G.transparent===!0&&G.side===Xn?(G.side=je,G.needsUpdate=!0,Ve(G,ot,Rt),G.side=cs,G.needsUpdate=!0,Ve(G,ot,Rt),G.side=Xn):Ve(G,ot,Rt)}f=E.get(C),f.init(),g.push(f),C.traverseVisible(function(G){G.isLight&&G.layers.test(q.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(m.physicallyCorrectLights),C.traverse(function(G){const ot=G.material;if(ot)if(Array.isArray(ot))for(let Rt=0;Rt<ot.length;Rt++){const Nt=ot[Rt];et(Nt,C,G)}else et(ot,C,G)}),g.pop(),f=null};let it=null;function gt(C){it&&it(C)}function At(){qt.stop()}function Pt(){qt.start()}const qt=new Of;qt.setAnimationLoop(gt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(C){it=C,Tt.setAnimationLoop(C),C===null?qt.stop():qt.start()},Tt.addEventListener("sessionstart",At),Tt.addEventListener("sessionend",Pt),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(q),q=Tt.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,q,x),f=E.get(C,g.length),f.init(),g.push(f),ft.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),st.setFromProjectionMatrix(ft),V=this.localClippingEnabled,X=S.init(this.clippingPlanes,V,q),h=tt.get(C,d.length),h.init(),d.push(h),pe(C,q,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(at,k),X===!0&&S.beginShadows();const et=f.state.shadowsArray;if(N.render(et,C,q),X===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(h,C),f.setupLights(m.physicallyCorrectLights),q.isArrayCamera){const G=q.cameras;for(let ot=0,Rt=G.length;ot<Rt;ot++){const Nt=G[ot];ye(h,C,Nt,Nt.viewport)}}else ye(h,C,q);x!==null&&(w.updateMultisampleRenderTarget(x),w.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(m,C,q),$.resetDefaultState(),v=-1,A=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function pe(C,q,et,G){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||st.intersectsSprite(C)){G&&vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ft);const Nt=rt.update(C),Vt=C.material;Vt.visible&&h.push(C,Nt,Vt,et,vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Mt.render.frame&&(C.skeleton.update(),C.skeleton.frame=Mt.render.frame),!C.frustumCulled||st.intersectsObject(C))){G&&vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ft);const Nt=rt.update(C),Vt=C.material;if(Array.isArray(Vt)){const Ut=Nt.groups;for(let Xt=0,kt=Ut.length;Xt<kt;Xt++){const Wt=Ut[Xt],re=Vt[Wt.materialIndex];re&&re.visible&&h.push(C,Nt,re,et,vt.z,Wt)}}else Vt.visible&&h.push(C,Nt,Vt,et,vt.z,null)}}const Rt=C.children;for(let Nt=0,Vt=Rt.length;Nt<Vt;Nt++)pe(Rt[Nt],q,et,G)}function ye(C,q,et,G){const ot=C.opaque,Rt=C.transmissive,Nt=C.transparent;f.setupLightsView(et),Rt.length>0&&ei(ot,q,et),G&&pt.viewport(T.copy(G)),ot.length>0&&ee(ot,q,et),Rt.length>0&&ee(Rt,q,et),Nt.length>0&&ee(Nt,q,et),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function ei(C,q,et){const G=xt.isWebGL2;H===null&&(H=new Ai(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")?Ys:Si,minFilter:bo,samples:G&&r===!0?4:0})),m.getDrawingBufferSize(lt),G?H.setSize(lt.x,lt.y):H.setSize(Wa(lt.x),Wa(lt.y));const ot=m.getRenderTarget();m.setRenderTarget(H),m.clear();const Rt=m.toneMapping;m.toneMapping=Cn,ee(C,q,et),m.toneMapping=Rt,w.updateMultisampleRenderTarget(H),w.updateRenderTargetMipmap(H),m.setRenderTarget(ot)}function ee(C,q,et){const G=q.isScene===!0?q.overrideMaterial:null;for(let ot=0,Rt=C.length;ot<Rt;ot++){const Nt=C[ot],Vt=Nt.object,Ut=Nt.geometry,Xt=G===null?Nt.material:G,kt=Nt.group;Vt.layers.test(et.layers)&&_n(Vt,q,et,Ut,Xt,kt)}}function _n(C,q,et,G,ot,Rt){C.onBeforeRender(m,q,et,G,ot,Rt),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ot.onBeforeRender(m,q,et,G,C,Rt),ot.transparent===!0&&ot.side===Xn?(ot.side=je,ot.needsUpdate=!0,m.renderBufferDirect(et,q,G,ot,C,Rt),ot.side=cs,ot.needsUpdate=!0,m.renderBufferDirect(et,q,G,ot,C,Rt),ot.side=Xn):m.renderBufferDirect(et,q,G,ot,C,Rt),C.onAfterRender(m,q,et,G,ot,Rt)}function Ve(C,q,et){q.isScene!==!0&&(q=Et);const G=b.get(C),ot=f.state.lights,Rt=f.state.shadowsArray,Nt=ot.state.version,Vt=Y.getParameters(C,ot.state,Rt,q,et),Ut=Y.getProgramCacheKey(Vt);let Xt=G.programs;G.environment=C.isMeshStandardMaterial?q.environment:null,G.fog=q.fog,G.envMap=(C.isMeshStandardMaterial?U:D).get(C.envMap||G.environment),Xt===void 0&&(C.addEventListener("dispose",Zt),Xt=new Map,G.programs=Xt);let kt=Xt.get(Ut);if(kt!==void 0){if(G.currentProgram===kt&&G.lightsStateVersion===Nt)return Nl(C,Vt),kt}else Vt.uniforms=Y.getUniforms(C),C.onBuild(et,Vt,m),C.onBeforeCompile(Vt,m),kt=Y.acquireProgram(Vt,Ut),Xt.set(Ut,kt),G.uniforms=Vt.uniforms;const Wt=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=S.uniform),Nl(C,Vt),G.needsLights=md(C),G.lightsStateVersion=Nt,G.needsLights&&(Wt.ambientLightColor.value=ot.state.ambient,Wt.lightProbe.value=ot.state.probe,Wt.directionalLights.value=ot.state.directional,Wt.directionalLightShadows.value=ot.state.directionalShadow,Wt.spotLights.value=ot.state.spot,Wt.spotLightShadows.value=ot.state.spotShadow,Wt.rectAreaLights.value=ot.state.rectArea,Wt.ltc_1.value=ot.state.rectAreaLTC1,Wt.ltc_2.value=ot.state.rectAreaLTC2,Wt.pointLights.value=ot.state.point,Wt.pointLightShadows.value=ot.state.pointShadow,Wt.hemisphereLights.value=ot.state.hemi,Wt.directionalShadowMap.value=ot.state.directionalShadowMap,Wt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Wt.spotShadowMap.value=ot.state.spotShadowMap,Wt.spotLightMatrix.value=ot.state.spotLightMatrix,Wt.spotLightMap.value=ot.state.spotLightMap,Wt.pointShadowMap.value=ot.state.pointShadowMap,Wt.pointShadowMatrix.value=ot.state.pointShadowMatrix);const re=kt.getUniforms(),ni=Jr.seqWithValue(re.seq,Wt);return G.currentProgram=kt,G.uniformsList=ni,kt}function Nl(C,q){const et=b.get(C);et.outputEncoding=q.outputEncoding,et.instancing=q.instancing,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function dd(C,q,et,G,ot){q.isScene!==!0&&(q=Et),w.resetTextureUnits();const Rt=q.fog,Nt=G.isMeshStandardMaterial?q.environment:null,Vt=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:wi,Ut=(G.isMeshStandardMaterial?U:D).get(G.envMap||Nt),Xt=G.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,kt=!!G.normalMap&&!!et.attributes.tangent,Wt=!!et.morphAttributes.position,re=!!et.morphAttributes.normal,ni=!!et.morphAttributes.color,Ci=G.toneMapped?m.toneMapping:Cn,Pi=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,an=Pi!==void 0?Pi.length:0,jt=b.get(G),Li=f.state.lights;if(X===!0&&(V===!0||C!==A)){const Ie=C===A&&G.id===v;S.setState(G,C,Ie)}let ae=!1;G.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Li.state.version||jt.outputEncoding!==Vt||ot.isInstancedMesh&&jt.instancing===!1||!ot.isInstancedMesh&&jt.instancing===!0||ot.isSkinnedMesh&&jt.skinning===!1||!ot.isSkinnedMesh&&jt.skinning===!0||jt.envMap!==Ut||G.fog===!0&&jt.fog!==Rt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==S.numPlanes||jt.numIntersection!==S.numIntersection)||jt.vertexAlphas!==Xt||jt.vertexTangents!==kt||jt.morphTargets!==Wt||jt.morphNormals!==re||jt.morphColors!==ni||jt.toneMapping!==Ci||xt.isWebGL2===!0&&jt.morphTargetsCount!==an)&&(ae=!0):(ae=!0,jt.__version=G.version);let ke=jt.currentProgram;ae===!0&&(ke=Ve(G,q,ot));let On=!1,Ms=!1,Eo=!1;const Ae=ke.getUniforms(),ii=jt.uniforms;if(pt.useProgram(ke.program)&&(On=!0,Ms=!0,Eo=!0),G.id!==v&&(v=G.id,Ms=!0),On||A!==C){if(Ae.setValue(z,"projectionMatrix",C.projectionMatrix),xt.logarithmicDepthBuffer&&Ae.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),A!==C&&(A=C,Ms=!0,Eo=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Ie=Ae.map.cameraPosition;Ie!==void 0&&Ie.setValue(z,vt.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ae.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ot.isSkinnedMesh)&&Ae.setValue(z,"viewMatrix",C.matrixWorldInverse)}if(ot.isSkinnedMesh){Ae.setOptional(z,ot,"bindMatrix"),Ae.setOptional(z,ot,"bindMatrixInverse");const Ie=ot.skeleton;Ie&&(xt.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),Ae.setValue(z,"boneTexture",Ie.boneTexture,w),Ae.setValue(z,"boneTextureSize",Ie.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const To=et.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&xt.isWebGL2===!0)&&nt.update(ot,et,G,ke),(Ms||jt.receiveShadow!==ot.receiveShadow)&&(jt.receiveShadow=ot.receiveShadow,Ae.setValue(z,"receiveShadow",ot.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ii.envMap.value=Ut,ii.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Ms&&(Ae.setValue(z,"toneMappingExposure",m.toneMappingExposure),jt.needsLights&&pd(ii,Eo),Rt&&G.fog===!0&&ht.refreshFogUniforms(ii,Rt),ht.refreshMaterialUniforms(ii,G,j,I,H),Jr.upload(z,jt.uniformsList,ii,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Jr.upload(z,jt.uniformsList,ii,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ae.setValue(z,"center",ot.center),Ae.setValue(z,"modelViewMatrix",ot.modelViewMatrix),Ae.setValue(z,"normalMatrix",ot.normalMatrix),Ae.setValue(z,"modelMatrix",ot.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ie=G.uniformsGroups;for(let Co=0,gd=Ie.length;Co<gd;Co++)if(xt.isWebGL2){const Fl=Ie[Co];Ct.update(Fl,ke),Ct.bind(Fl,ke)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ke}function pd(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function md(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,q,et){b.get(C.texture).__webglTexture=q,b.get(C.depthTexture).__webglTexture=et;const G=b.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=et===void 0,G.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){const et=b.get(C);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,et=0){x=C,_=q,y=et;let G=!0,ot=null,Rt=!1,Nt=!1;if(C){const Ut=b.get(C);Ut.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),G=!1):Ut.__webglFramebuffer===void 0?w.setupRenderTarget(C):Ut.__hasExternalTextures&&w.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Nt=!0);const kt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ot=kt[q],Rt=!0):xt.isWebGL2&&C.samples>0&&w.useMultisampledRTT(C)===!1?ot=b.get(C).__webglMultisampledFramebuffer:ot=kt,T.copy(C.viewport),R.copy(C.scissor),M=C.scissorTest}else T.copy(O).multiplyScalar(j).floor(),R.copy(J).multiplyScalar(j).floor(),M=K;if(pt.bindFramebuffer(36160,ot)&&xt.drawBuffers&&G&&pt.drawBuffers(C,ot),pt.viewport(T),pt.scissor(R),pt.setScissorTest(M),Rt){const Ut=b.get(C.texture);z.framebufferTexture2D(36160,36064,34069+q,Ut.__webglTexture,et)}else if(Nt){const Ut=b.get(C.texture),Xt=q||0;z.framebufferTextureLayer(36160,36064,Ut.__webglTexture,et||0,Xt)}v=-1},this.readRenderTargetPixels=function(C,q,et,G,ot,Rt,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Vt=Vt[Nt]),Vt){pt.bindFramebuffer(36160,Vt);try{const Ut=C.texture,Xt=Ut.format,kt=Ut.type;if(Xt!==tn&&mt.convert(Xt)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=kt===Ys&&(ut.has("EXT_color_buffer_half_float")||xt.isWebGL2&&ut.has("EXT_color_buffer_float"));if(kt!==Si&&mt.convert(kt)!==z.getParameter(35738)&&!(kt===_i&&(xt.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-G&&et>=0&&et<=C.height-ot&&z.readPixels(q,et,G,ot,mt.convert(Xt),mt.convert(kt),Rt)}finally{const Ut=x!==null?b.get(x).__webglFramebuffer:null;pt.bindFramebuffer(36160,Ut)}}},this.copyFramebufferToTexture=function(C,q,et=0){const G=Math.pow(2,-et),ot=Math.floor(q.image.width*G),Rt=Math.floor(q.image.height*G);w.setTexture2D(q,0),z.copyTexSubImage2D(3553,et,0,0,C.x,C.y,ot,Rt),pt.unbindTexture()},this.copyTextureToTexture=function(C,q,et,G=0){const ot=q.image.width,Rt=q.image.height,Nt=mt.convert(et.format),Vt=mt.convert(et.type);w.setTexture2D(et,0),z.pixelStorei(37440,et.flipY),z.pixelStorei(37441,et.premultiplyAlpha),z.pixelStorei(3317,et.unpackAlignment),q.isDataTexture?z.texSubImage2D(3553,G,C.x,C.y,ot,Rt,Nt,Vt,q.image.data):q.isCompressedTexture?z.compressedTexSubImage2D(3553,G,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,Nt,q.mipmaps[0].data):z.texSubImage2D(3553,G,C.x,C.y,Nt,Vt,q.image),G===0&&et.generateMipmaps&&z.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(C,q,et,G,ot=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Rt=C.max.x-C.min.x+1,Nt=C.max.y-C.min.y+1,Vt=C.max.z-C.min.z+1,Ut=mt.convert(G.format),Xt=mt.convert(G.type);let kt;if(G.isData3DTexture)w.setTexture3D(G,0),kt=32879;else if(G.isDataArrayTexture)w.setTexture2DArray(G,0),kt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,G.flipY),z.pixelStorei(37441,G.premultiplyAlpha),z.pixelStorei(3317,G.unpackAlignment);const Wt=z.getParameter(3314),re=z.getParameter(32878),ni=z.getParameter(3316),Ci=z.getParameter(3315),Pi=z.getParameter(32877),an=et.isCompressedTexture?et.mipmaps[0]:et.image;z.pixelStorei(3314,an.width),z.pixelStorei(32878,an.height),z.pixelStorei(3316,C.min.x),z.pixelStorei(3315,C.min.y),z.pixelStorei(32877,C.min.z),et.isDataTexture||et.isData3DTexture?z.texSubImage3D(kt,ot,q.x,q.y,q.z,Rt,Nt,Vt,Ut,Xt,an.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(kt,ot,q.x,q.y,q.z,Rt,Nt,Vt,Ut,an.data)):z.texSubImage3D(kt,ot,q.x,q.y,q.z,Rt,Nt,Vt,Ut,Xt,an),z.pixelStorei(3314,Wt),z.pixelStorei(32878,re),z.pixelStorei(3316,ni),z.pixelStorei(3315,Ci),z.pixelStorei(32877,Pi),ot===0&&G.generateMipmaps&&z.generateMipmap(kt),pt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),pt.unbindTexture()},this.resetState=function(){_=0,y=0,x=null,pt.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class YM extends Vf{}YM.prototype.isWebGL1Renderer=!0;class kf{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=i}clone(){return new kf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class JM extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class dS{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ga,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new L;class Gf{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vu extends Le{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ku=new Qt,Gu=new Qt,Lr=[],ZM=new Qt,Ps=new nn;class pS extends nn{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vu(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let s=0;s<i;s++)this.setMatrixAt(s,ZM)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,ku),Gu.multiplyMatrices(i,ku),Ps.matrixWorld=Gu,Ps.raycast(t,Lr);for(let o=0,a=Lr.length;o<a;o++){const l=Lr[o];l.instanceId=r,l.object=this,e.push(l)}Lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vu(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class El extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hu=new L,Wu=new L,qu=new Qt,pa=new Ml,Rr=new nr;class KM extends ge{constructor(t=new te,e=new El){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Hu.fromBufferAttribute(e,s-1),Wu.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Hu.distanceTo(Wu);t.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;qu.copy(s).invert(),pa.copy(t.ray).applyMatrix4(qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,f=new L,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=_,v=y-1;x<v;x+=d){const A=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,T),pa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(f);M<t.near||M>t.far||e.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let x=_,v=y-1;x<v;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),pa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Xu=new L,ju=new L;class Hf extends KM{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Xu.fromBufferAttribute(e,s),ju.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xu.distanceTo(ju);t.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wf extends In{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yu=new Qt,Xa=new Ml,Dr=new nr,Ir=new L;class Ju extends ge{constructor(t=new te,e=new Wf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Yu.copy(s).invert(),Xa.copy(t.ray).applyMatrix4(Yu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);Ir.fromBufferAttribute(h,p),Zu(Ir,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,m=d;g<m;g++)Ir.fromBufferAttribute(h,g),Zu(Ir,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zu(n,t,e,i,s,r,o){const a=Xa.distanceSqToPoint(n);if(a<e){const l=new L;Xa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class mS extends Be{constructor(t,e,i){super({width:t,height:e}),this.isFramebufferTexture=!0,this.format=i,this.magFilter=be,this.minFilter=be,this.generateMipmaps=!1,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new _t:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,s=[],r=[],o=[],a=new L,l=new Qt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(_e(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tl extends gn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new _t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $M extends Tl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cl(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Or=new L,ma=new Cl,ga=new Cl,_a=new Cl;class QM extends gn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),c=Or);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),ma.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,p),ga.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,p),_a.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ga.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),_a.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ma.calc(l),ga.calc(l),_a.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ku(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function tb(n,t){const e=1-n;return e*e*t}function eb(n,t){return 2*(1-n)*n*t}function nb(n,t){return n*n*t}function Us(n,t,e,i){return tb(n,t)+eb(n,e)+nb(n,i)}function ib(n,t){const e=1-n;return e*e*e*t}function sb(n,t){const e=1-n;return 3*e*e*n*t}function rb(n,t){return 3*(1-n)*n*n*t}function ob(n,t){return n*n*n*t}function Bs(n,t,e,i,s){return ib(n,t)+sb(n,e)+rb(n,i)+ob(n,s)}class qf extends gn{constructor(t=new _t,e=new _t,i=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _t){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Bs(t,s.x,r.x,o.x,a.x),Bs(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ab extends gn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Bs(t,s.x,r.x,o.x,a.x),Bs(t,s.y,r.y,o.y,a.y),Bs(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pl extends gn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const i=e||new _t;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lb extends gn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xf extends gn{constructor(t=new _t,e=new _t,i=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _t){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Us(t,s.x,r.x,o.x),Us(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jf extends gn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Us(t,s.x,r.x,o.x),Us(t,s.y,r.y,o.y),Us(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yf extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Ku(a,l.x,c.x,u.x,h.x),Ku(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var Ll=Object.freeze({__proto__:null,ArcCurve:$M,CatmullRomCurve3:QM,CubicBezierCurve:qf,CubicBezierCurve3:ab,EllipseCurve:Tl,LineCurve:Pl,LineCurve3:lb,QuadraticBezierCurve:Xf,QuadraticBezierCurve3:jf,SplineCurve:Yf});class cb extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Pl(e,t))}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ll[s.type]().fromJSON(s))}return this}}class ja extends cb{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Pl(this.currentPoint.clone(),new _t(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Xf(this.currentPoint.clone(),new _t(t,e),new _t(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new qf(this.currentPoint.clone(),new _t(t,e),new _t(i,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Yf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Tl(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jf extends te{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new L,f=new _t,d=new L,g=new L,m=new L;let p=0,_=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,_=t[y+1].y-t[y].y,d.x=_*1,d.y=-p,d.z=_*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:p=t[y+1].x-t[y].x,_=t[y+1].y-t[y].y,d.x=_*1,d.y=-p,d.z=_*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(g)}for(let y=0;y<=e;y++){const x=i+y*u*s,v=Math.sin(x),A=Math.cos(x);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*v,h.y=t[T].y,h.z=t[T].x*A,o.push(h.x,h.y,h.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);const R=l[3*T+0]*v,M=l[3*T+1],P=l[3*T+0]*A;c.push(R,M,P)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const v=x+y*t.length,A=v,T=v+t.length,R=v+t.length+1,M=v+1;r.push(A,T,M),r.push(R,M,T)}this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("uv",new It(a,2)),this.setAttribute("normal",new It(c,3))}static fromJSON(t){return new Jf(t.points,t.segments,t.phiStart,t.phiLength)}}class Zf extends te{constructor(t=1,e=8,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,u=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=i+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}static fromJSON(t){return new Zf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Rl extends te{constructor(t=1,e=1,i=1,s=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const m=[],p=i/2;let _=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(d,2));function y(){const v=new L,A=new L;let T=0;const R=(e-t)/i;for(let M=0;M<=r;M++){const P=[],I=M/r,j=I*(e-t)+t;for(let at=0;at<=s;at++){const k=at/s,O=k*l+a,J=Math.sin(O),K=Math.cos(O);A.x=j*J,A.y=-I*i+p,A.z=j*K,h.push(A.x,A.y,A.z),v.set(J,R,K).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-I),P.push(g++)}m.push(P)}for(let M=0;M<s;M++)for(let P=0;P<r;P++){const I=m[P][M],j=m[P+1][M],at=m[P+1][M+1],k=m[P][M+1];u.push(I,j,k),u.push(j,at,k),T+=6}c.addGroup(_,T,0),_+=T}function x(v){const A=g,T=new _t,R=new L;let M=0;const P=v===!0?t:e,I=v===!0?1:-1;for(let at=1;at<=s;at++)h.push(0,p*I,0),f.push(0,I,0),d.push(.5,.5),g++;const j=g;for(let at=0;at<=s;at++){const O=at/s*l+a,J=Math.cos(O),K=Math.sin(O);R.x=P*K,R.y=p*I,R.z=P*J,h.push(R.x,R.y,R.z),f.push(0,I,0),T.x=J*.5+.5,T.y=K*.5*I+.5,d.push(T.x,T.y),g++}for(let at=0;at<s;at++){const k=A+at,O=j+at;v===!0?u.push(O,O+1,k):u.push(O+1,O,k),M+=3}c.addGroup(_,M,v===!0?1:2),_+=M}}static fromJSON(t){return new Rl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kf extends Rl{constructor(t=1,e=1,i=8,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Kf(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ys extends te{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new L,v=new L,A=new L;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],v),d(e[T+2],A),l(x,v,A,y)}function l(y,x,v,A){const T=A+1,R=[];for(let M=0;M<=T;M++){R[M]=[];const P=y.clone().lerp(v,M/T),I=x.clone().lerp(v,M/T),j=T-M;for(let at=0;at<=j;at++)at===0&&M===T?R[M][at]=P:R[M][at]=P.clone().lerp(I,at/j)}for(let M=0;M<T;M++)for(let P=0;P<2*(T-M)-1;P++){const I=Math.floor(P/2);P%2===0?(f(R[M][I+1]),f(R[M+1][I]),f(R[M][I])):(f(R[M][I+1]),f(R[M+1][I+1]),f(R[M+1][I]))}}function c(y){const x=new L;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const y=new L;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=p(y)/2/Math.PI+.5,A=_(y)/Math.PI+.5;o.push(v,1-A)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],A=o[y+4],T=Math.max(x,v,A),R=Math.min(x,v,A);T>.9&&R<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){const v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const y=new L,x=new L,v=new L,A=new L,T=new _t,R=new _t,M=new _t;for(let P=0,I=0;P<r.length;P+=9,I+=6){y.set(r[P+0],r[P+1],r[P+2]),x.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),T.set(o[I+0],o[I+1]),R.set(o[I+2],o[I+3]),M.set(o[I+4],o[I+5]),A.copy(y).add(x).add(v).divideScalar(3);const j=p(A);m(T,I+0,y,j),m(R,I+2,x,j),m(M,I+4,v,j)}}function m(y,x,v,A){A<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=A/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(t){return new ys(t.vertices,t.indices,t.radius,t.details)}}class $f extends ys{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $f(t.radius,t.detail)}}const Nr=new L,Fr=new L,va=new L,zr=new dn;class gS extends te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(jr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:p,c:_}=zr;if(m.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),zr.getNormal(va),h[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=h[y],A=h[x],T=zr[u[y]],R=zr[u[x]],M=`${v}_${A}`,P=`${A}_${v}`;P in f&&f[P]?(va.dot(f[P].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(R.x,R.y,R.z)),f[P]=null):M in f||(f[M]={index0:c[y],index1:c[x],normal:va.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:p}=f[g];Nr.fromBufferAttribute(a,m),Fr.fromBufferAttribute(a,p),d.push(Nr.x,Nr.y,Nr.z),d.push(Fr.x,Fr.y,Fr.z)}this.setAttribute("position",new It(d,3))}}}class Vs extends ja{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ja().fromJSON(s))}return this}}const ub={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Qf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=mb(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Zs(r,o,e,a,l,d,0),o}};function Qf(n,t,e,i,s){let r,o;if(s===Eb(n,t,e,i)>0)for(r=t;r<e;r+=i)o=$u(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=$u(r,n[r],n[r+1],o);return o&&Ao(o,o.next)&&($s(o),o=o.next),o}function Ei(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ao(e,e.next)||se(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Zs(n,t,e,i,s,r,o){if(!n)return;!o&&r&&yb(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?fb(n,i,s,r):hb(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),$s(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=db(Ei(n),t,e),Zs(n,t,e,i,s,r,2)):o===2&&pb(n,t,e,i,s,r):Zs(Ei(n),t,e,i,s,r,1);break}}}function hb(n){const t=n.prev,e=n,i=n.next;if(se(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Zi(s,a,r,l,o,c,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fb(n,t,e,i){const s=n.prev,r=n,o=n.next;if(se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,m=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,_=Ya(d,g,t,e,i),y=Ya(m,p,t,e,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=_&&v&&v.z<=y;){if(x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Zi(a,u,l,h,c,f,x.x,x.y)&&se(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=m&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Zi(a,u,l,h,c,f,v.x,v.y)&&se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Zi(a,u,l,h,c,f,x.x,x.y)&&se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Zi(a,u,l,h,c,f,v.x,v.y)&&se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function db(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Ao(s,r)&&td(s,i,i.next,r)&&Ks(s,r)&&Ks(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),$s(i),$s(i.next),i=n=r),i=i.next}while(i!==n);return Ei(i)}function pb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sb(o,a)){let l=ed(o,a);o=Ei(o,o.next),l=Ei(l,l.next),Zs(o,t,e,i,s,r,0),Zs(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function mb(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Qf(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(bb(c));for(s.sort(gb),r=0;r<s.length;r++)e=_b(s[r],e);return e}function gb(n,t){return n.x-t.x}function _b(n,t){const e=vb(n,t);if(!e)return t;const i=ed(e,n);return Ei(i,i.next),Ei(e,e.next)}function vb(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Zi(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ks(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&xb(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function xb(n,t){return se(n.prev,n,t.prev)<0&&se(t.next,n,n.next)<0}function yb(n,t,e,i){let s=n;do s.z===0&&(s.z=Ya(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Mb(s)}function Mb(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Ya(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function bb(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Zi(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Sb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!wb(n,t)&&(Ks(n,t)&&Ks(t,n)&&Ab(n,t)&&(se(n.prev,n,t.prev)||se(n,t.prev,t))||Ao(n,t)&&se(n.prev,n,n.next)>0&&se(t.prev,t,t.next)>0)}function se(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ao(n,t){return n.x===t.x&&n.y===t.y}function td(n,t,e,i){const s=Br(se(n,t,e)),r=Br(se(n,t,i)),o=Br(se(e,i,n)),a=Br(se(e,i,t));return!!(s!==r&&o!==a||s===0&&Ur(n,e,t)||r===0&&Ur(n,i,t)||o===0&&Ur(e,n,i)||a===0&&Ur(e,t,i))}function Ur(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Br(n){return n>0?1:n<0?-1:0}function wb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ks(n,t){return se(n.prev,n,n.next)<0?se(n,t,n.next)>=0&&se(n,n.prev,t)>=0:se(n,t,n.prev)<0||se(n,n.next,t)<0}function Ab(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ed(n,t){const e=new Ja(n.i,n.x,n.y),i=new Ja(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function $u(n,t,e,i){const s=new Ja(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $s(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ja(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Eb(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ln{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ln.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Qu(t),th(i,t);let o=t.length;e.forEach(Qu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,th(i,e[l]);const a=ub.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Qu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function th(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class nd extends te{constructor(t=new Vs([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new It(s,3)),this.setAttribute("uv",new It(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Tb;let x,v=!1,A,T,R,M;_&&(x=_.getSpacedPoints(u),v=!0,f=!1,A=_.computeFrenetFrames(u,!1),T=new L,R=new L,M=new L),f||(p=0,d=0,g=0,m=0);const P=a.extractPoints(c);let I=P.shape;const j=P.holes;if(!Ln.isClockWise(I)){I=I.reverse();for(let b=0,w=j.length;b<w;b++){const D=j[b];Ln.isClockWise(D)&&(j[b]=D.reverse())}}const k=Ln.triangulateShape(I,j),O=I;for(let b=0,w=j.length;b<w;b++){const D=j[b];I=I.concat(D)}function J(b,w,D){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().multiplyScalar(D).add(b)}const K=I.length,st=k.length;function X(b,w,D){let U,B,Q;const rt=b.x-w.x,Y=b.y-w.y,ht=D.x-b.x,tt=D.y-b.y,E=rt*rt+Y*Y,S=rt*tt-Y*ht;if(Math.abs(S)>Number.EPSILON){const N=Math.sqrt(E),Z=Math.sqrt(ht*ht+tt*tt),nt=w.x-Y/N,dt=w.y+rt/N,bt=D.x-tt/Z,mt=D.y+ht/Z,$=((bt-nt)*tt-(mt-dt)*ht)/(rt*tt-Y*ht);U=nt+rt*$-b.x,B=dt+Y*$-b.y;const Ct=U*U+B*B;if(Ct<=2)return new _t(U,B);Q=Math.sqrt(Ct/2)}else{let N=!1;rt>Number.EPSILON?ht>Number.EPSILON&&(N=!0):rt<-Number.EPSILON?ht<-Number.EPSILON&&(N=!0):Math.sign(Y)===Math.sign(tt)&&(N=!0),N?(U=-Y,B=rt,Q=Math.sqrt(E)):(U=rt,B=Y,Q=Math.sqrt(E/2))}return new _t(U/Q,B/Q)}const V=[];for(let b=0,w=O.length,D=w-1,U=b+1;b<w;b++,D++,U++)D===w&&(D=0),U===w&&(U=0),V[b]=X(O[b],O[D],O[U]);const H=[];let ft,lt=V.concat();for(let b=0,w=j.length;b<w;b++){const D=j[b];ft=[];for(let U=0,B=D.length,Q=B-1,rt=U+1;U<B;U++,Q++,rt++)Q===B&&(Q=0),rt===B&&(rt=0),ft[U]=X(D[U],D[Q],D[rt]);H.push(ft),lt=lt.concat(ft)}for(let b=0;b<p;b++){const w=b/p,D=d*Math.cos(w*Math.PI/2),U=g*Math.sin(w*Math.PI/2)+m;for(let B=0,Q=O.length;B<Q;B++){const rt=J(O[B],V[B],U);ct(rt.x,rt.y,-D)}for(let B=0,Q=j.length;B<Q;B++){const rt=j[B];ft=H[B];for(let Y=0,ht=rt.length;Y<ht;Y++){const tt=J(rt[Y],ft[Y],U);ct(tt.x,tt.y,-D)}}}const vt=g+m;for(let b=0;b<K;b++){const w=f?J(I[b],lt[b],vt):I[b];v?(R.copy(A.normals[0]).multiplyScalar(w.x),T.copy(A.binormals[0]).multiplyScalar(w.y),M.copy(x[0]).add(R).add(T),ct(M.x,M.y,M.z)):ct(w.x,w.y,0)}for(let b=1;b<=u;b++)for(let w=0;w<K;w++){const D=f?J(I[w],lt[w],vt):I[w];v?(R.copy(A.normals[b]).multiplyScalar(D.x),T.copy(A.binormals[b]).multiplyScalar(D.y),M.copy(x[b]).add(R).add(T),ct(M.x,M.y,M.z)):ct(D.x,D.y,h/u*b)}for(let b=p-1;b>=0;b--){const w=b/p,D=d*Math.cos(w*Math.PI/2),U=g*Math.sin(w*Math.PI/2)+m;for(let B=0,Q=O.length;B<Q;B++){const rt=J(O[B],V[B],U);ct(rt.x,rt.y,h+D)}for(let B=0,Q=j.length;B<Q;B++){const rt=j[B];ft=H[B];for(let Y=0,ht=rt.length;Y<ht;Y++){const tt=J(rt[Y],ft[Y],U);v?ct(tt.x,tt.y+x[u-1].y,x[u-1].x+D):ct(tt.x,tt.y,h+D)}}}Et(),W();function Et(){const b=s.length/3;if(f){let w=0,D=K*w;for(let U=0;U<st;U++){const B=k[U];ut(B[2]+D,B[1]+D,B[0]+D)}w=u+p*2,D=K*w;for(let U=0;U<st;U++){const B=k[U];ut(B[0]+D,B[1]+D,B[2]+D)}}else{for(let w=0;w<st;w++){const D=k[w];ut(D[2],D[1],D[0])}for(let w=0;w<st;w++){const D=k[w];ut(D[0]+K*u,D[1]+K*u,D[2]+K*u)}}i.addGroup(b,s.length/3-b,0)}function W(){const b=s.length/3;let w=0;z(O,w),w+=O.length;for(let D=0,U=j.length;D<U;D++){const B=j[D];z(B,w),w+=B.length}i.addGroup(b,s.length/3-b,1)}function z(b,w){let D=b.length;for(;--D>=0;){const U=D;let B=D-1;B<0&&(B=b.length-1);for(let Q=0,rt=u+p*2;Q<rt;Q++){const Y=K*Q,ht=K*(Q+1),tt=w+U+Y,E=w+B+Y,S=w+B+ht,N=w+U+ht;xt(tt,E,S,N)}}}function ct(b,w,D){l.push(b),l.push(w),l.push(D)}function ut(b,w,D){pt(b),pt(w),pt(D);const U=s.length/3,B=y.generateTopUV(i,s,U-3,U-2,U-1);Mt(B[0]),Mt(B[1]),Mt(B[2])}function xt(b,w,D,U){pt(b),pt(w),pt(U),pt(w),pt(D),pt(U);const B=s.length/3,Q=y.generateSideWallUV(i,s,B-6,B-3,B-2,B-1);Mt(Q[0]),Mt(Q[1]),Mt(Q[3]),Mt(Q[1]),Mt(Q[2]),Mt(Q[3])}function pt(b){s.push(l[b*3+0]),s.push(l[b*3+1]),s.push(l[b*3+2])}function Mt(b){r.push(b.x),r.push(b.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Cb(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ll[s.type]().fromJSON(s)),new nd(i,t.options)}}const Tb={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new _t(r,o),new _t(a,l),new _t(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],m=t[r*3],p=t[r*3+1],_=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _t(o,1-l),new _t(c,1-h),new _t(f,1-g),new _t(m,1-_)]:[new _t(a,1-l),new _t(u,1-h),new _t(d,1-g),new _t(p,1-_)]}};function Cb(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class id extends ys{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new id(t.radius,t.detail)}}class sd extends ys{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sd(t.radius,t.detail)}}class rd extends te{constructor(t=.5,e=1,i=8,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new L,g=new _t;for(let m=0;m<=s;m++){for(let p=0;p<=i;p++){const _=r+p/i*o;d.x=h*Math.cos(_),d.y=h*Math.sin(_),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let m=0;m<s;m++){const p=m*(i+1);for(let _=0;_<i;_++){const y=_+p,x=y,v=y+i+1,A=y+i+2,T=y+1;a.push(x,v,T),a.push(v,A,T)}}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(u,2))}static fromJSON(t){return new rd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class od extends te{constructor(t=new Vs([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(r,3)),this.setAttribute("uv",new It(o,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;Ln.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,_=g.length;p<_;p++){const y=g[p];Ln.isClockWise(y)===!0&&(g[p]=y.reverse())}const m=Ln.triangulateShape(d,g);for(let p=0,_=g.length;p<_;p++){const y=g[p];d=d.concat(y)}for(let p=0,_=d.length;p<_;p++){const y=d[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,_=m.length;p<_;p++){const y=m[p],x=y[0]+h,v=y[1]+h,A=y[2]+h;i.push(x,v,A),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Pb(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new od(i,t.curveSegments)}}function Pb(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Dl extends te{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,d=[],g=[],m=[],p=[];for(let _=0;_<=i;_++){const y=[],x=_/i;let v=0;_==0&&o==0?v=.5/e:_==i&&l==Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const T=A/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),p.push(T+v,1-x),y.push(c++)}u.push(y)}for(let _=0;_<i;_++)for(let y=0;y<e;y++){const x=u[_][y+1],v=u[_][y],A=u[_+1][y],T=u[_+1][y+1];(_!==0||o>0)&&d.push(x,v,T),(_!==i-1||l<Math.PI)&&d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(p,2))}static fromJSON(t){return new Dl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ad extends ys{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ad(t.radius,t.detail)}}class ld extends te{constructor(t=1,e=.4,i=8,s=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const m=g/s*r,p=d/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(m),h.y=(t+e*Math.cos(p))*Math.sin(m),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const m=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,_=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(m,p,y),o.push(p,_,y)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(c,2))}static fromJSON(t){return new ld(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cd extends te{constructor(t=1,e=.4,i=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:s,p:r,q:o},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],c=[],u=[],h=new L,f=new L,d=new L,g=new L,m=new L,p=new L,_=new L;for(let x=0;x<=i;++x){const v=x/i*r*Math.PI*2;y(v,r,o,t,d),y(v+.01,r,o,t,g),p.subVectors(g,d),_.addVectors(g,d),m.crossVectors(p,_),_.crossVectors(m,p),m.normalize(),_.normalize();for(let A=0;A<=s;++A){const T=A/s*Math.PI*2,R=-e*Math.cos(T),M=e*Math.sin(T);h.x=d.x+(R*_.x+M*m.x),h.y=d.y+(R*_.y+M*m.y),h.z=d.z+(R*_.z+M*m.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(x/i),u.push(A/s)}}for(let x=1;x<=i;x++)for(let v=1;v<=s;v++){const A=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),R=(s+1)*x+v,M=(s+1)*(x-1)+v;a.push(A,T,M),a.push(T,R,M)}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(u,2));function y(x,v,A,T,R){const M=Math.cos(x),P=Math.sin(x),I=A/v*x,j=Math.cos(I);R.x=T*(2+j)*.5*M,R.y=T*(2+j)*P*.5,R.z=T*Math.sin(I)*.5}}static fromJSON(t){return new cd(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class ud extends te{constructor(t=new jf(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new _t;let u=new L;const h=[],f=[],d=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(d,2));function m(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),y(),_()}function p(x){u=t.getPointAt(x/e,u);const v=o.normals[x],A=o.binormals[x];for(let T=0;T<=s;T++){const R=T/s*Math.PI*2,M=Math.sin(R),P=-Math.cos(R);l.x=P*v.x+M*A.x,l.y=P*v.y+M*A.y,l.z=P*v.z+M*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function _(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const A=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),R=(s+1)*x+v,M=(s+1)*(x-1)+v;g.push(A,T,M),g.push(T,R,M)}}function y(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)c.x=x/e,c.y=v/s,d.push(c.x,c.y)}}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ud(new Ll[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class _S extends te{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new L,r=new L;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,d=h.count;for(let g=f,m=f+d;g<m;g+=3)for(let p=0;p<3;p++){const _=a.getX(g+p),y=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,_),r.fromBufferAttribute(o,y),eh(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),eh(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new It(e,3))}}}function eh(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class vS extends ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xS extends In{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yS extends In{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class MS extends In{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const so={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Lb{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Rb=new Lb;class Il{constructor(t){this.manager=t!==void 0?t:Rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const wn={};class Db extends Error{constructor(t,e){super(t),this.response=e}}class bS extends Il{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=so.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(wn[t]!==void 0){wn[t].push({onLoad:e,onProgress:i,onError:s});return}wn[t]=[],wn[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=wn[t],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(_){y();function y(){h.read().then(({done:x,value:v})=>{if(x)_.close();else{m+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let T=0,R=u.length;T<R;T++){const M=u[T];M.onProgress&&M.onProgress(A)}_.enqueue(v),y()}})}}});return new Response(p)}else throw new Db(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{so.add(t,c);const u=wn[t];delete wn[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=wn[t];if(u===void 0)throw this.manager.itemError(t),c;delete wn[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ib extends Il{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=so.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Js("img");function l(){u(),so.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Ob extends Il{constructor(t){super(t)}load(t,e,i,s){const r=new Be,o=new Ib(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Ol extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const xa=new Qt,nh=new L,ih=new L;class hd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sh=new Qt,Ls=new L,ya=new L;class Nb extends hd{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ls),ya.copy(i.position),ya.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ya),i.updateMatrixWorld(),s.makeTranslation(-Ls.x,-Ls.y,-Ls.z),sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh)}}class SS extends Ol{constructor(t,e,i=0,s=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fb extends hd{constructor(){super(new Nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wS extends Ol{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.target=new ge,this.shadow=new Fb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zb extends Ol{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class AS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=rh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function rh(){return(typeof performance>"u"?Date:performance).now()}class ES{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const oh=new _t;class TS{constructor(t=new _t(1/0,1/0),e=new _t(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=oh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return oh.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class CS extends nn{constructor(t,e,i){const s=new Dl(e,4,2),r=new bl({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=t,this.light.updateMatrixWorld(),this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Vr=new vs;class PS extends Hf{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new te;r.setIndex(new Le(i,1)),r.setAttribute("position",new Le(s,3)),super(r,new El({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Vr.setFromObject(this.object),Vr.isEmpty())return;const e=Vr.min,i=Vr.max,s=this.geometry.attributes.position,r=s.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=i.y,r[5]=i.z,r[6]=e.x,r[7]=e.y,r[8]=i.z,r[9]=i.x,r[10]=e.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=e.z,r[15]=e.x,r[16]=i.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=i.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class LS extends Hf{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new te;s.setAttribute("position",new It(e,3)),s.setAttribute("color",new It(i,3));const r=new El({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,i){const s=new Ht,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class RS{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ja,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,o){return this.currentPath.bezierCurveTo(t,e,i,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){const y=[];for(let x=0,v=_.length;x<v;x++){const A=_[x],T=new Vs;T.curves=A.curves,y.push(T)}return y}function i(_,y){const x=y.length;let v=!1;for(let A=x-1,T=0;T<x;A=T++){let R=y[A],M=y[T],P=M.x-R.x,I=M.y-R.y;if(Math.abs(I)>Number.EPSILON){if(I<0&&(R=y[T],P=-P,M=y[A],I=-I),_.y<R.y||_.y>M.y)continue;if(_.y===R.y){if(_.x===R.x)return!0}else{const j=I*(_.x-R.x)-P*(_.y-R.y);if(j===0)return!0;if(j<0)continue;v=!v}}else{if(_.y!==R.y)continue;if(M.x<=_.x&&_.x<=R.x||R.x<=_.x&&_.x<=M.x)return!0}}return v}const s=Ln.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Vs,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],g=0,m;f[g]=void 0,d[g]=[];for(let _=0,y=r.length;_<y;_++)a=r[_],m=a.getPoints(),o=s(m),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Vs,p:m},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:m[0]});if(!f[0])return e(r);if(f.length>1){let _=!1,y=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const A=d[x];for(let T=0;T<A.length;T++){const R=A[T];let M=!0;for(let P=0;P<f.length;P++)i(R.p,f[P].p)&&(x!==P&&y++,M?(M=!1,h[P].push(R)):_=!0);M&&h[x].push(R)}}y>0&&_===!1&&(d=h)}let p;for(let _=0,y=f.length;_<y;_++){l=f[_].s,c.push(l),p=d[_];for(let x=0,v=p.length;x<v;x++)l.holes.push(p[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);const Ub="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAD////+/v4BAQHIyMghISECAgJ0dHR6enre3t4EBAQDAwPX19fi4uKmpqaAgIDQ0NA7OzsGBgYRERG1tbWVlZXV1dVzc3OCgoJmZmb39/cWFhZlZWU/Pz+xsbGFhYWOjo6KiopsbGx7e3uYmJhgYGCNjY0PDw8tLS0oKChbW1txcXEXFxfExMTS0tL9/f3s7OyoqKirq6va2tpNTU3t7e1/f38FBQWtra1MTExFRUWjo6MjIyNUVFTMzMzJycltbW3h4eEeHh5CQkLKysp+fn53d3cyMjLl5eX5+fm+vr4vLy/R0dELCwvY2NgJCQlfX19paWk5OTkAAAD///8BAQECAgIMDAwmJib+/v7f399qampXV1cODg79/f3Nzc3AwMBra2u6urqwsLAGBgb09PSKiooWFhYZGRnExMQ3NzfX19eampqQkJBkZGSOjo7o6OhoaGgjIyOcnJwEBAT6+vp5eXni4uJmZmYDAwNdXV0Lv2DMAAAAU3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/kc3SeAAAAFISURBVHhetZPFkuswFET72g4zDDMzMzPje5KDMMzM8PXj8caJ7UxWOVp0laoXqqN7URimkj/B1FaeLEJBBmRdQXuU/Jv1DUwhoj0yG5sN8PYANRUwx1JahepyYKTTxIPoUuLugZX4WPLt1OhBRus50CYxyZ+iLuCyDBGdh+BxLVB3VklcAtY+miDrClY26m70cBJ4GM3+NEQTDy1EcaIMkdvoIdreEbt4fuRcEOKcH6Rjlu5ojoclcoR7iQQFoj4i6qcBZCGqMag01DM0rF7meHBaGbtKJDhRhvMX9uoc+9LPw/f4BCa5QHxq2jNj/E2L9AlgltMcn0dw4clQWAwxK7wlhwKOlgGcrEA2eli1I7UOthFyQQ6YzMP1DWO3m2D3yZyh1bBvAds+YGd3Dxo6F459AP/+Q0M3cu+Bv/dCLP5eGLPw8hbkB8nyeaUUhyruAAAAAElFTkSuQmCC",Bb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACW1BMVEUAAAD///8CAgIPDw8BAQF1dXVsbGwLCwujo6NeXl43NzesrKzPz8+EhIQSEhIDAwNpaWnFxcXo6OhbW1vf398VFRU/Pz+YmJiXl5e7u7uUlJTi4uI2Njbn5+ccHBzQ0NApKSkwMDBSUlKDg4MeHh65ubmlpaVQUFB/f3+dnZ04ODgFBQUICAgtLS1XV1eqqqpRUVHd3d2Li4tOTk6GhobZ2dn8/Pz9/f14eHhaWlq3t7cHBweoqKgMDAzX19c7OztfX19FRUW+vr7s7OwvLy8KCgohISF5eXnU1NR6enqRkZF2dnbAwMB9fX1jY2Ourq6Ojo7g4OAQEBD09PSwsLANDQ0ZGRnIyMjS0tK4uLhdXV1KSkrl5eVnZ2fW1tZvb29NTU2FhYXw8PBUVFQUFBRAQEAuLi49PT3z8/PHx8cRERGnp6fExMTY2Nj39/cjIyNGRkbMzMxcXFyBgYGenp68vLyQkJC0tLQrKysJCQkbGxsODg5gYGCampp7e3s6Ojr5+fnOzs6/v78XFxdPT0/GxsampqbT09MgICAGBga2trYlJSU5OTm1tbWkpKQyMjKgoKDKyspwcHAkJCQYGBiSkpIAAAABAQERERE4ODhZWVkbGxtycnJlZWVTU1MUFBRISEiAgIBEREShoaEzMzNqamqXl5cmJibBwcHFxcWOjo5NTU0WFhYJCQkxMTGWlpYtLS2ZmZkvLy80NDSHh4fd3d1oaGgCAgILCwtUVFSUlJTDw8NiYmJYWFjGxsY7OzvExMRKSkoTExOKioqQkJCwsLC1tbU9PT3m5uZ5kJL/AAAAlnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v6TC5kUAAAB5klEQVR4XqWTU5MkURSE81ZV0zbGto21bdu2bfP0GEvbNn7WRk/09lRXd0w/7PeQFRmnHu7NmwcACGEIkPrIl/okjk8MESikFFIQST3EcBgIxXA1FDwHKIYCECCC+jRvhJaaZgH6ss8w5ogG9O/UzebWgut56NS2VDNd+BYiJQUyfg27W4THqa8b0idRMDJCWGVjk15ukm/JzVK9HaQqyYEgzWHIGH9jXYYDKeWDK4qVPGKZnW3xsSqoKxdp5dKgOHr29KbRd2v0nfvUMeU20NL27kl0UGkjR3lcQGaqTGkDxrnSx6f1h0Gon0aECRNvQGauuAryTi588DApeWrkNRdMn2Ga6QiwL845c0vmzb9XzEwLNR7r4sgPS+xLS5ctX7Hy0Srl6jVr5S/WmauK1m+Q+8V96P5YtlFNcDOWBdpcbpP0QUC+M9sOzqhJ2boN4LfXuHdE9yFIRLa695Xf6fefzPadu7p6rxEX3Yfde/aqAmwf9rMD1oM8wBkgRkD1ofzDJnYEyqPWY8fdQEwfTpysdz4/ZYHrtOyV13Mmpg9BMjh0b8724NyH85+SS71x+nDhouGr5hsu/cBPXchL+8AX2tFq4cBfRlvNFYQHImp5ILdWEADoC/SIC/efixOfxMubcP3/Anriqm2DBhxnAAAAAElFTkSuQmCC",Vb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAChVBMVEUAAAD///8BAQECAgIDAwPExMS+vr4ZGRmxsbHLy8uampoSEhLIyMhnZ2eXl5dOTk7e3t4mJiY1NTVMTEwwMDCwsLAfHx9WVlYMDAzo6Oinp6cgICBmZmbPz8+EhISCgoKfn58LCwshISFCQkLf399VVVW4uLgkJCTFxcVFRUUJCQlNTU2pqakjIyMUFBTw8PCYmJiFhYWUlJRqampISEg4ODgPDw91dXU0NDSdnZ0RERGzs7OKiopERERubm7y8vKMjIzHx8fQ0NAODg6mpqY3NzeDg4OIiIjz8/Ovr6/V1dVYWFjg4OAuLi6Pj4+Li4vk5OQyMjJ/f3+srKyZmZlkZGTn5+dHR0eWlpZsbGwHBwcTExNJSUnGxsZKSkopKSnp6ekGBgYvLy/t7e3a2trJycksLCwtLS29vb1fX1+1tbWrq6scHBxTU1N6enphYWHc3Ny8vLwoKCiSkpJXV1fj4+P9/f1vb29BQUFoaGjx8fG6uroQEBDs7OwNDQ2BgYGTk5M6OjqOjo5lZWV9fX3b29srKyt7e3s8PDz6+vo9PT2qqqoEBAS/v79dXV0+Pj7R0dEWFhZ4eHgFBQUiIiKgoKAqKiptbW3v7+/Dw8N2dnZAQEBwcHAKCgoAAABDQ0Ojo6MODg4KCgoBAQFdXV03NzdISEgJCQlaWlq4uLgMDAxRUVE1NTXb29vDw8OJiYlFRUXJyckbGxtSUlIfHx97e3s4ODhoaGiNjY0aGhpYWFiFhYUSEhLOzs4oKCgUFBQVFRVAQEC7u7vv7+/y8vLMzMwDAwOenp6SkpIICAhXV1cjIyP6+vo6Ojqnp6dycnLq6uocHBxsbGw5OTm+vr6dnZ0CAgJ4QJ/JAAAAnnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/hQHg5sAAAH/SURBVHherZPTzyVBFMSru+can23b1tq2bdu2bZ7PXtu2/fdsOneSmdn7sA+7v3Q/VKWS6pOcxn+DyFt7G1wKoWpjXD1jfRyAZcJdVWsBmeEgBE+qgsPZ7xZA9dI24hfCMSsAPYPKFY44Q4Gnorq1rbnbEkRdJ6KYGuLS1wK1dXjU+rjZ1B+2Jnr1uuNnLeChx3o3hmYgplPWqK5jcreVqzNpj2x7mrqjsXPfhBFdStDhDkDtDuimqAdR6U3KquzN2HxkVte6Xl48rC9Quj8gLE0d59drRR/bsFOJ4QPu1xk6MPBhTW4UY2zQYAxhLAh4/801DzqU4QtGZo9mOaVAsC/LQ8F4uz0QHAYmxjI3JkOZkjh12vQZxjGUmf6z58wNMDuFNIsYy4ktW1isT1gXLY4UiGYhUixbXrjSZ5XZFAqN+CcErF7D1gJIYsnrUr4TT9sAHTfubczbtNnXumVrxXbGnPkvGoz7YPnxs+QC7XTBxiLhf+kyrlxNMOxD6DUCmqzYtTusyL2H7Ba6vbdYC6gDmZL27T9QmXHwUETBESDu6B/7cOzZc2o8jhMnqeXN27B35PF1gdMfWuijGYFl1PCJznz5qgY0IrIhKpIRnYn8cIiUdOgggOQ9a4rHuUKktavaa+3Pp0MAAvRLtXRIxeURAlxI/fev969w2SaA33EEtXR/l4bfAAAAAElFTkSuQmCC",kb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA51BMVEUAAAD////+/v4CAgIDAwMHBwc8PDzn5+ddXV1eXl7d3d1QUFBOTk79/f27u7vIyMiGhobu7u4BAQH6+vr5+fnl5eWNjY07OzuVlZUFBQWRkZH///8CAgIAAAABAQH+/v78/Pz9/f0EBAT4+PgGBgb5+fn6+vqqqqoFBQX7+/sDAwMKCgrLy8uJiYlLS0vi4uIHBwdUVFQyMjIhISHh4eF6enpnZ2eTk5P09PRjY2OOjo7m5uZHR0fr6+sgICANDQ3p6eksLCyFhYXT09PMzMwZGRmSkpIYGBjc3Nz19fVzc3OVlZWZmZkfCldNAAAAG3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7Q4gSTAAABRUlEQVR4Xo1Th3KsMAyUufTe20o2XC3pvfee9/7/ewIaLh4Dk8tio5G17KyNRSSUzhQaNIo+uqJRcoJ4CP28iwqaBgolhMsSRBnp19inZQ+Wu9ZKPfQQ2js+uT4TFo9AwfblCsBNqBBk2xdI0Am/9iZrRONmNjJzNMo0QHAOY/uubRCZifwcCoTJKSB2GfC2N22tP2qdVlZdCwokAE7FeoNEGWEGDnAuHS7uNT5Ku6jTDhQODgl2PSH30KV5LevAghzYogfSekaIcShc+t1Hi5FWYaKGkaXyNrG8oiYRmQTn1PTbzAmXxvTaTm30WlgTKSj0ZX3jNlNwEQCYO/EKHvcPCWJ0Hp+eX14lh784RJvyDoMtTTmdVbcanxAWZq681RkBX2QH7CqFf/+bHHZHSOiKsP2tcSzXuKpxfCylw1vvD909BN+Y2FBm4NfNwQAAAABJRU5ErkJggg==",Gb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABWVBMVEUAAAD///8BAQECAgIDAwP9/f0FBQUGBgb8/Pzx8fEEBAT6+vp3d3cICAj39/cHBwcUFBRAQECHh4eysrLb29u3t7cJCQkNDQ3p6elYWFidnZ3+/v5ra2vX19eurq4tLS1ycnIoKCgsLCzJycny8vLc3NwKCgovLy9vb29ZWVl8fHyXl5eLi4sTExMhISG/v799fX3v7+9CQkJGRkYrKyv4+PjPz8/5+flqamoZGRkgICAbGxtmZmbU1NSoqKjLy8vHx8fr6+tdXV1/f3/e3t6hoaE2NjakpKTR0dGvr6+WlpY1NTVzc3Pm5uY3Nzft7e0fHx++vr5kZGRSUlLw8PA9PT3o6OgaGhqQkJAXFxdXV1cAAAD///8CAgIBAQEcHBwLCwv7+/u5ubnX19d8fHz29vYICAjh4eEkJCSXl5cDAwO2trZhYWEFBQUqKioEBAT39/dBQUEPDw8QXwTDAAAAW3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+yyiEIQAAAXhJREFUeF6tkwWP4zAUhGdsB8tdZsZjZmZmfE6X6RD+P5ySNlI3aVWddJ8URSPZmYnePAASP+krp3sjh29IVuOf0OiKKOyfGodpnlpeEQVpzyDSkB87nEkyRJPck5j2DLGY4ACMMnhHXpXsLwogs4X5KpSHo7w7FCFrIfJTHnATu7L0i08kylkoCJ6Sq5gqc7ppiRxF+pwLuLCIDMrEwkOdjk8yOIYYUzJpBqOPfzvStzVKx9LaMXviZO336TPrgNdoGZ0NznH4fIF0SPICEwJehEoDXlq7XJIrtT7rjPn+Bq9d37hx0966jQiH53/HOgU6diDVoWRGVSede+R9uBXPdd1Qq/Y+REDZPhR5ZB9Dd+qDQb/Dalga5LOhzl14zhcvYTRe8TVUhz6sDXMUIRTe8O3gl9ywIvlqOdLs5Htu5/ugcVAutr48wv58H7T6/gEVDUBpFD9K1iJBmcSiYZDtQ3b+SqW6J/9r9dweyxapT5//dFl/7f0FEbdYPB/yQuAAAAAASUVORK5CYII=",Hb={class:"w-full h-full"},Wb=tr({__name:"SnowyBg",setup(n){const{random:t}=Math,e=$r(),i=$r();let s,r,o,a,l;const c=1e4,u=new te,h=[],f=new Float32Array(c*3),d=1e3,g=new Ob,m=g.load(Ub),p=g.load(Bb),_=g.load(Vb),y=g.load(kb),x=g.load(Gb),v=[[[1,.2,.5],p,20],[[.95,.1,.5],_,15],[[.9,.05,.5],m,10],[[.85,0,.5],x,8],[[.8,0,.5],y,5]];let A=0,T=0;kh(()=>{I(),P(),at()});function R(){const k=Date.now()*5e-5;a.position.x+=(A-a.position.x)*.05,a.position.y+=(-T-a.position.y)*.05,a.lookAt(o.position);for(let O=0;O<o.children.length;O++){const J=o.children[O];J instanceof Ju&&(J.rotation.y=k*(O<4?O+1:-(O+1)))}for(let O=0;O<h.length;O++){const J=v[O][0],K=360*(J[0]+k)%360/360;h[O].color.setHSL(K,J[1],J[2])}}function M(k){k.isPrimary&&(A=k.clientX-s/2,T=k.clientY-r/2)}function P(){for(let k=0;k<c;k++)f[k*3]=t()*(2*d)-d,f[k*3+1]=t()*(2*d)-d,f[k*3+2]=t()*(2*d)-d;u.setAttribute("position",new Le(f,3));for(let k=0;k<v.length;k++){const O=v[k][0],J=v[k][1],K=v[k][2];h[k]=new Wf({color:new Ht().setHSL(O[0],O[1],O[2]),size:K,map:J,blending:Fa,depthTest:!1,transparent:!0});const st=new Ju(u,h[k]);st.rotation.set(t()*6,t()*6,t()*6),o.add(st)}}function I(){o=new JM;const{width:k,height:O}=i.value.getBoundingClientRect();s=k,r=O,a=new ze(75,s/r,1,2e3),a.position.z=1e3,l=new Vf({canvas:e.value,antialias:!0}),l.setSize(s,r),l.setPixelRatio(window.devicePixelRatio),o.add(new zb(4210752))}let j=0;function at(){R(),l.render(o,a),j=requestAnimationFrame(at)}return hl(()=>{cancelAnimationFrame(j)}),(k,O)=>(He(),Tn("div",Hb,[rn("div",{ref_key:"canvasCon",ref:i,class:"w-full h-full",onPointermove:M},[rn("canvas",{ref_key:"canvasDom",ref:e,class:"block w-full h-full"},null,512)],544)]))}}),qb={class:"bg-#b4286c relative w-full h-full overflow-hidden flex justify-center items-center"},Xb={class:"w-full h-full absolute p-y-4rem z-2 overflow-y-scroll"},jb={class:"list-wrap"},Yb=["href"],Jb=tr({__name:"Home",setup(n){const t=$r([]);return t.value.push(...fd.map(e=>({type:"",groupTitle:e.meta.name,links:e.children.reduce((s,r)=>(r.meta.visable&&s.push({title:r.meta.name,path:`${e.path}/${r.path}`}),s),[])}))),t.value.push(Kb.reduce((e,i)=>(i.meta.visable&&e.links.push({title:i.meta.name,path:i.path}),e),{type:"outlink",groupTitle:"外链",links:[]})),(e,i)=>{const s=Gh("router-link");return He(),Tn("div",qb,[xe(Wb,{class:"snowBg absolute z-1 top-0 left-0 pointer-events-none"}),rn("div",Xb,[(He(!0),Tn(Fe,null,Jl(t.value,(r,o)=>(He(),Tn("div",{key:o,class:"nav-item"},[rn("h1",null,Po(r.groupTitle),1),rn("div",jb,[(He(!0),Tn(Fe,null,Jl(r.links,(a,l)=>(He(),Tn("div",{key:l,class:"link-wrap"},[r.type!=="outlink"?(He(),gl(s,{key:0,target:"_blank",class:"link",to:a.path},{default:zh(()=>[nf(Po(a.title),1)]),_:2},1032,["to"])):(He(),Tn("a",{key:1,class:"link",href:a.path,target:"_blank"},Po(a.title),9,Yb))]))),128))])]))),128))])])}}}),Zb=af(Jb,[["__scopeId","data-v-ecbcc11a"]]),Kb=[{path:"https://yufengjie97.github.io/learning-phaser/#/flappyBird",meta:{type:"outlink",name:"像素鸟(phaser)",visable:!0}},{path:"https://codepen.io/Megalovania/pen/ZEVdJmL",meta:{type:"outlink",name:"排序可视化",visable:!0}},{path:"https://codepen.io/Megalovania/pen/XWOdXxZ",meta:{type:"outlink",name:"电流",visable:!0}},{path:"https://codepen.io/Megalovania/pen/wvRvWdZ",meta:{type:"outlink",name:"生命游戏",visable:!1}},{path:"https://codepen.io/Megalovania/pen/JjeaOJv",meta:{type:"outlink",name:"gsap动画",visable:!1}},{path:"https://codepen.io/Megalovania/pen/mdQqgdv",meta:{type:"outlink",name:"css 3D swiper",visable:!0}},{path:"https://www.shadertoy.com/view/dlGfDt",meta:{type:"outlink",name:"shader-noise-point",visable:!0}},{path:"https://www.shadertoy.com/view/lcfGzH",meta:{type:"outlink",name:"shader-domainWraping",visable:!1}},{path:"https://www.shadertoy.com/view/mtVBDD",meta:{type:"outlink",name:"shader-loading",visable:!0}},{path:"https://www.shadertoy.com/view/dtGBzy",meta:{type:"outlink",name:"shader-loading2",visable:!0}},{path:"https://www.shadertoy.com/view/mlKBzh",meta:{type:"outlink",name:"sdf_box_noise",visable:!0}},{path:"https://www.shadertoy.com/view/4cfGDH",meta:{type:"outlink",name:"shader-kunkun",visable:!0}}],$b={path:"/",meta:{name:"home",visable:!1},component:Zb},Qb={path:"/:path(.*)",meta:{name:"notfound",visable:!1},component:Qg},fd=[Wg,qg,jg,Xg,Jg,Yg],tS=Vg({history:ng("/nova/"),routes:[$b,...fd,Qb]});Lm(Ti).use(tS).mount("#app");export{Kf as $,cS as A,hl as B,Ht as C,LS as D,zb as E,Fe as F,L as G,Pr as H,sr as I,PS as J,Fa as K,te as L,nn as M,Le as N,fS as O,ze as P,Wf as Q,Ju as R,JM as S,El as T,Hf as U,_t as V,Vf as W,xS as X,Xn as Y,Zf as Z,af as _,Wr as a,Rl as a0,$f as a1,gS as a2,Vs as a3,nd as a4,id as a5,Jf as a6,sd as a7,wl as a8,ys as a9,CS as aA,MS as aB,Tl as aC,KM as aD,Nf as aE,It as aF,ti as aG,c0 as aH,Ai as aI,AS as aJ,Pf as aK,Ob as aL,Va as aM,mS as aN,tn as aO,vS as aP,TS as aQ,dS as aR,Gf as aS,ne as aT,aS as aU,ip as aV,sS as aW,rd as aa,od as ab,Dl as ac,ad,ld as ae,cd as af,ud as ag,_S as ah,gn as ai,SS as aj,rS as ak,_s as al,uS as am,hS as an,er as ao,ES as ap,lS as aq,yS as ar,pS as as,ge as at,bl as au,kf as av,wS as aw,Il as ax,bS as ay,RS as az,Tn as b,qe as c,tr as d,rn as e,nf as f,oo as g,kh as h,Jl as i,gl as j,xe as k,zh as l,tm as m,ro as n,He as o,eS as p,Qp as q,$r as r,pp as s,Po as t,ts as u,mp as v,nS as w,oS as x,Qs as y,iS as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/reverseCardPic-qtiml6cO.js","assets/_commonjsHelpers-4gQjN7DL.js","assets/disco_communism-NN-qA4tW.js","assets/p5.min-8Dsz88oV.js","assets/reverseCardPic-LyGbVFEG.css","assets/StarRate-XiV_4sUQ.js","assets/Card-ZmZwIrhG.js","assets/Card--JYLWHeZ.css","assets/initGUI-4v9Pkg7m.js","assets/dat.gui.module-PWGADmkp.js","assets/StarRate-G31reSYb.css","assets/Sun-gOL7FugW.js","assets/Sun-xxOLY8xc.css","assets/ProgressCube-cxaDInO6.js","assets/ProgressCube-eTrC3434.css","assets/DeathLoading-kbcHYpCH.js","assets/DeathLoading-VK1Zzqw4.css","assets/HSCard-fZ91yKLz.js","assets/math-2uDGtMqg.js","assets/HSCard-Iee7Ik3K.css","assets/BarChart--M-BWlAU.js","assets/BarChart-g3MunUDi.css","assets/Water-475PkWw7.js","assets/Water-zHDNNDSx.css","assets/timeSun-zvQIkcnZ.js","assets/timeSun-5ORMucVv.css","assets/crushPic-AhhO-pWM.js","assets/index-WM3n2avM.js","assets/index-FSCrshNh.js","assets/crushPic-fv0hIpOW.css","assets/hackText-gvRPI_6x.js","assets/hackText-xi3D_0GL.css","assets/FlowField-FuP2fO4g.js","assets/fabric-1Dtxchkb.js","assets/noise-8YyA3euy.js","assets/FlowField-AIARjlhA.css","assets/FlowFieldLine-9-XHwTr0.js","assets/CanvasTextPoint-Zx5w9sq6.js","assets/simplex-noise-CoJLqHZY.js","assets/CanvasTextPoint-dqqB4fGo.css","assets/canvasPoint-J45lL-A2.js","assets/color-qV8h6raO.js","assets/flow--MTwCk6K.js","assets/initStats-1oN1fAIq.js","assets/delaunator-s9eLfX0y.js","assets/imgIdle-8jmgFVkO.js","assets/canvas-DEPmujqV.js","assets/nyanCat-DTW1Co1c.js","assets/particleLife-xOfhvpsm.js","assets/chroma-Jl_dHttK.js","assets/test-pfztVWLg.js","assets/gameOfLife-BAnwfFOg.js","assets/mihuanshuibo-upFKN0uL.js","assets/audio-sugarCrush-sMDL0Z2H.js","assets/audio2-GAo0SpJu.js","assets/mihuanshuibo-WRfBndYT.css","assets/rect-JoEqIoHE.js","assets/rect-WaK6L8VC.css","assets/rect2-TYoIKxGs.js","assets/rect2-B6dngnIA.css","assets/freqAndDomain-medoudmY.js","assets/freqAndDomain-tEGrU2YJ.css","assets/githubSnake-_krvbTYm.js","assets/githubSnake-3KDXaVVF.css","assets/THREE-template-IfCQweBE.js","assets/stats.module-nRd2dy6L.js","assets/OrbitControls--t40w5p_.js","assets/THREE-template-fzmV_w6V.css","assets/CubeLine-kJaMMl09.js","assets/CubeLine-6xeDAqW-.css","assets/AllBufferGeo-yDCxqyqT.js","assets/AllBufferGeo-Ep-44pbr.css","assets/ThreeTextPoint-46LiWNgq.js","assets/ThreeTextPoint-xRVaRKJa.css","assets/TextGeo-cx7g3woz.js","assets/helvetiker_regular.typeface-kIWduHQR.js","assets/TextGeo-Z7MNmJdc.css","assets/SolarSystem-WlYrML3j.js","assets/RenderPass-7jOr7pTQ.js","assets/UnrealBloomPass-HvRGGM97.js","assets/GlowBall-gcLv9W5t.js","assets/Atom-4bHKIzXA.js","assets/Atom-XTv5qZ8G.css","assets/LavaBall-0AfhKo8Y.js","assets/LavaBall-pFTwMW3m.css","assets/LensFlares-kaQYBmgU.js","assets/LensFlares-ed54kSSq.css","assets/crushPic-87neLtse.js","assets/initThree-I4Uv1MEu.js","assets/flowFieldPoint3D-j6p4dgSh.js","assets/dotTexture-mhtNNgxL.js","assets/particleLife-QpokV9kR.js","assets/FlowFieldLine2-mQyGpCQV.js","assets/P5Con-In-ZZoEX.js","assets/P5Con-c1o8Vdhb.css","assets/paticle-xGV-AYNw.js","assets/Maze-Lh2BQ-ks.js","assets/GradientLine-vaoI1IFL.js","assets/CodeRain-VvVRQ1sm.js","assets/Cross-PUHRgdsq.js","assets/MusicRect-d-vyb03K.js","assets/AudioController-mRkoPIm-.js","assets/AudioController-1B_R8sVX.css","assets/p5bezier-vH6YuPFu.js","assets/MusicCircle-qGyNK7zo.js","assets/BoRe-Y5N3YVn4.js","assets/BoRe-7s0lgeq5.css","assets/Tangram-88kdm0Io.js","assets/Terrain-XUEd0I6r.js","assets/P5-OHVlFg7S.js","assets/P5-ZoK4gmdE.css","assets/Terrain-p-hiz-n0.css","assets/DisperseParticle-EpTyvfEk.js","assets/DisperseParticle-B6wHoY0K.css","assets/DisperseParticle2-St22Yt7l.js","assets/DisperseParticle2-zz1KYv97.css","assets/Snake-tcozf82c.js","assets/LightBall-R5rVpzcc.js","assets/LightBall-aZGRnPd0.css","assets/FlappyBird-CCagTsRr.js","assets/FlappyBird-TuicVYaj.css","assets/Firework-jx-z2PCg.js","assets/PixelPicture-VsTTUB__.js","assets/PixelPicture-OMQGL23h.css","assets/circuitBoard-Aey8wCQx.js","assets/circuitBoard-QcTioUj8.css","assets/circuitBoard2-y4FUC06T.js","assets/circuitBoard2-jWDfDwWT.css","assets/index-zziHGX-x.js","assets/index---jK2QEU.js","assets/index-A9eMKCGo.js","assets/index-pErtnOh4.js","assets/index-jElrcHF3.css","assets/index-AlJo0zgg.js","assets/index-ba31wELc.js","assets/index-VlCgyEV5.js","assets/Shader.vue_vue_type_script_setup_true_lang-LDXgcN0i.js","assets/index-QBvk6L0D.js","assets/index-7bdgtrVw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
