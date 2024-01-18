(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function tl(n,t){const e=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)e[i[s]]=!0;return t?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const Pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ld=tl(Pd);function mh(n){return!!n||n===""}function yi(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ue(i)?Id(i):yi(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(ue(n))return n;if(ie(n))return n}}const Rd=/;(?![^(]*\))/g,Dd=/:(.+)/;function Id(n){const t={};return n.split(Rd).forEach(e=>{if(e){const i=e.split(Dd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ir(n){let t="";if(ue(n))t=n;else if(Nt(n))for(let e=0;e<n.length;e++){const i=ir(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function dw(n){if(!n)return null;let{class:t,style:e}=n;return t&&!ue(t)&&(n.class=ir(t)),e&&(n.style=yi(e)),n}const Od=n=>ue(n)?n:n==null?"":Nt(n)||ie(n)&&(n.toString===vh||!Ft(n.toString))?JSON.stringify(n,gh,2):String(n),gh=(n,t)=>t&&t.__v_isRef?gh(n,t.value):ts(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s])=>(e[`${i} =>`]=s,e),{})}:_h(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!Nt(t)&&!yh(t)?String(t):t,Zt={},Qi=[],fn=()=>{},Nd=()=>!1,Fd=/^on[^a-z]/,co=n=>Fd.test(n),el=n=>n.startsWith("onUpdate:"),De=Object.assign,nl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},zd=Object.prototype.hasOwnProperty,Gt=(n,t)=>zd.call(n,t),Nt=Array.isArray,ts=n=>uo(n)==="[object Map]",_h=n=>uo(n)==="[object Set]",Ft=n=>typeof n=="function",ue=n=>typeof n=="string",il=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",xh=n=>ie(n)&&Ft(n.then)&&Ft(n.catch),vh=Object.prototype.toString,uo=n=>vh.call(n),Ud=n=>uo(n).slice(8,-1),yh=n=>uo(n)==="[object Object]",sl=n=>ue(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,jr=tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ho=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Bd=/-(\w)/g,pn=ho(n=>n.replace(Bd,(t,e)=>e?e.toUpperCase():"")),kd=/\B([A-Z])/g,gs=ho(n=>n.replace(kd,"-$1").toLowerCase()),fo=ho(n=>n.charAt(0).toUpperCase()+n.slice(1)),Io=ho(n=>n?`on${fo(n)}`:""),qs=(n,t)=>!Object.is(n,t),Yr=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},eo=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},Ea=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Bl;const Vd=()=>Bl||(Bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let an;class Gd{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=an,!t&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}run(t){if(this.active){const e=an;try{return an=this,t()}finally{an=e}}}on(){an=this}off(){an=this.parent}stop(t){if(this.active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Hd(n,t=an){t&&t.active&&t.effects.push(n)}const rl=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Mh=n=>(n.w&Qn)>0,bh=n=>(n.n&Qn)>0,Wd=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=Qn},qd=n=>{const{deps:t}=n;if(t.length){let e=0;for(let i=0;i<t.length;i++){const s=t[i];Mh(s)&&!bh(s)?s.delete(n):t[e++]=s,s.w&=~Qn,s.n&=~Qn}t.length=e}},Aa=new WeakMap;let Os=0,Qn=1;const Ta=30;let Ze;const Mi=Symbol(""),Ca=Symbol("");class ol{constructor(t,e=null,i){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Hd(this,i)}run(){if(!this.active)return this.fn();let t=Ze,e=$n;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ze,Ze=this,$n=!0,Qn=1<<++Os,Os<=Ta?Wd(this):kl(this),this.fn()}finally{Os<=Ta&&qd(this),Qn=1<<--Os,Ze=this.parent,$n=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ze===this?this.deferStop=!0:this.active&&(kl(this),this.onStop&&this.onStop(),this.active=!1)}}function kl(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let $n=!0;const Sh=[];function _s(){Sh.push($n),$n=!1}function xs(){const n=Sh.pop();$n=n===void 0?!0:n}function Ue(n,t,e){if($n&&Ze){let i=Aa.get(n);i||Aa.set(n,i=new Map);let s=i.get(e);s||i.set(e,s=rl()),wh(s)}}function wh(n,t){let e=!1;Os<=Ta?bh(n)||(n.n|=Qn,e=!Mh(n)):e=!n.has(Ze),e&&(n.add(Ze),Ze.deps.push(n))}function Dn(n,t,e,i,s,r){const o=Aa.get(n);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Nt(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Nt(n)?sl(e)&&a.push(o.get("length")):(a.push(o.get(Mi)),ts(n)&&a.push(o.get(Ca)));break;case"delete":Nt(n)||(a.push(o.get(Mi)),ts(n)&&a.push(o.get(Ca)));break;case"set":ts(n)&&a.push(o.get(Mi));break}if(a.length===1)a[0]&&Pa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Pa(rl(l))}}function Pa(n,t){const e=Nt(n)?n:[...n];for(const i of e)i.computed&&Vl(i);for(const i of e)i.computed||Vl(i)}function Vl(n,t){(n!==Ze||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Xd=tl("__proto__,__v_isRef,__isVue"),Eh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(il)),jd=al(),Yd=al(!1,!0),$d=al(!0),Gl=Jd();function Jd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=Yt(this);for(let r=0,o=this.length;r<o;r++)Ue(i,"get",r+"");const s=i[t](...e);return s===-1||s===!1?i[t](...e.map(Yt)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){_s();const i=Yt(this)[t].apply(this,e);return xs(),i}}),n}function al(n=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(n?t?fp:Lh:t?Ph:Ch).get(i))return i;const o=Nt(i);if(!n&&o&&Gt(Gl,s))return Reflect.get(Gl,s,r);const a=Reflect.get(i,s,r);return(il(s)?Eh.has(s):Xd(s))||(n||Ue(i,"get",s),t)?a:we(a)?o&&sl(s)?a:a.value:ie(a)?n?Rh(a):sr(a):a}}const Zd=Ah(),Kd=Ah(!0);function Ah(n=!1){return function(e,i,s,r){let o=e[i];if(rs(o)&&we(o)&&!we(s))return!1;if(!n&&(!no(s)&&!rs(s)&&(o=Yt(o),s=Yt(s)),!Nt(e)&&we(o)&&!we(s)))return o.value=s,!0;const a=Nt(e)&&sl(i)?Number(i)<e.length:Gt(e,i),l=Reflect.set(e,i,s,r);return e===Yt(r)&&(a?qs(s,o)&&Dn(e,"set",i,s):Dn(e,"add",i,s)),l}}function Qd(n,t){const e=Gt(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&e&&Dn(n,"delete",t,void 0),i}function tp(n,t){const e=Reflect.has(n,t);return(!il(t)||!Eh.has(t))&&Ue(n,"has",t),e}function ep(n){return Ue(n,"iterate",Nt(n)?"length":Mi),Reflect.ownKeys(n)}const Th={get:jd,set:Zd,deleteProperty:Qd,has:tp,ownKeys:ep},np={get:$d,set(n,t){return!0},deleteProperty(n,t){return!0}},ip=De({},Th,{get:Yd,set:Kd}),ll=n=>n,po=n=>Reflect.getPrototypeOf(n);function ur(n,t,e=!1,i=!1){n=n.__v_raw;const s=Yt(n),r=Yt(t);e||(t!==r&&Ue(s,"get",t),Ue(s,"get",r));const{has:o}=po(s),a=i?ll:e?hl:Xs;if(o.call(s,t))return a(n.get(t));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(t)}function hr(n,t=!1){const e=this.__v_raw,i=Yt(e),s=Yt(n);return t||(n!==s&&Ue(i,"has",n),Ue(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function fr(n,t=!1){return n=n.__v_raw,!t&&Ue(Yt(n),"iterate",Mi),Reflect.get(n,"size",n)}function Hl(n){n=Yt(n);const t=Yt(this);return po(t).has.call(t,n)||(t.add(n),Dn(t,"add",n,n)),this}function Wl(n,t){t=Yt(t);const e=Yt(this),{has:i,get:s}=po(e);let r=i.call(e,n);r||(n=Yt(n),r=i.call(e,n));const o=s.call(e,n);return e.set(n,t),r?qs(t,o)&&Dn(e,"set",n,t):Dn(e,"add",n,t),this}function ql(n){const t=Yt(this),{has:e,get:i}=po(t);let s=e.call(t,n);s||(n=Yt(n),s=e.call(t,n)),i&&i.call(t,n);const r=t.delete(n);return s&&Dn(t,"delete",n,void 0),r}function Xl(){const n=Yt(this),t=n.size!==0,e=n.clear();return t&&Dn(n,"clear",void 0,void 0),e}function dr(n,t){return function(i,s){const r=this,o=r.__v_raw,a=Yt(o),l=t?ll:n?hl:Xs;return!n&&Ue(a,"iterate",Mi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function pr(n,t,e){return function(...i){const s=this.__v_raw,r=Yt(s),o=ts(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?ll:t?hl:Xs;return!t&&Ue(r,"iterate",l?Ca:Mi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Fn(n){return function(...t){return n==="delete"?!1:this}}function sp(){const n={get(r){return ur(this,r)},get size(){return fr(this)},has:hr,add:Hl,set:Wl,delete:ql,clear:Xl,forEach:dr(!1,!1)},t={get(r){return ur(this,r,!1,!0)},get size(){return fr(this)},has:hr,add:Hl,set:Wl,delete:ql,clear:Xl,forEach:dr(!1,!0)},e={get(r){return ur(this,r,!0)},get size(){return fr(this,!0)},has(r){return hr.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:dr(!0,!1)},i={get(r){return ur(this,r,!0,!0)},get size(){return fr(this,!0)},has(r){return hr.call(this,r,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=pr(r,!1,!1),e[r]=pr(r,!0,!1),t[r]=pr(r,!1,!0),i[r]=pr(r,!0,!0)}),[n,e,t,i]}const[rp,op,ap,lp]=sp();function cl(n,t){const e=t?n?lp:ap:n?op:rp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Gt(e,s)&&s in i?e:i,s,r)}const cp={get:cl(!1,!1)},up={get:cl(!1,!0)},hp={get:cl(!0,!1)},Ch=new WeakMap,Ph=new WeakMap,Lh=new WeakMap,fp=new WeakMap;function dp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pp(n){return n.__v_skip||!Object.isExtensible(n)?0:dp(Ud(n))}function sr(n){return rs(n)?n:ul(n,!1,Th,cp,Ch)}function mp(n){return ul(n,!1,ip,up,Ph)}function Rh(n){return ul(n,!0,np,hp,Lh)}function ul(n,t,e,i,s){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=pp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function es(n){return rs(n)?es(n.__v_raw):!!(n&&n.__v_isReactive)}function rs(n){return!!(n&&n.__v_isReadonly)}function no(n){return!!(n&&n.__v_isShallow)}function Dh(n){return es(n)||rs(n)}function Yt(n){const t=n&&n.__v_raw;return t?Yt(t):n}function Ih(n){return eo(n,"__v_skip",!0),n}const Xs=n=>ie(n)?sr(n):n,hl=n=>ie(n)?Rh(n):n;function Oh(n){$n&&Ze&&(n=Yt(n),wh(n.dep||(n.dep=rl())))}function Nh(n,t){n=Yt(n),n.dep&&Pa(n.dep)}function we(n){return!!(n&&n.__v_isRef===!0)}function Tn(n){return Fh(n,!1)}function gp(n){return Fh(n,!0)}function Fh(n,t){return we(n)?n:new _p(n,t)}class _p{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Yt(t),this._value=e?t:Xs(t)}get value(){return Oh(this),this._value}set value(t){const e=this.__v_isShallow||no(t)||rs(t);t=e?t:Yt(t),qs(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Xs(t),Nh(this))}}function Cn(n){return we(n)?n.value:n}const xp={get:(n,t,e)=>Cn(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return we(s)&&!we(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function zh(n){return es(n)?n:new Proxy(n,xp)}var Uh;class vp{constructor(t,e,i,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Uh]=!1,this._dirty=!0,this.effect=new ol(t,()=>{this._dirty||(this._dirty=!0,Nh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=Yt(this);return Oh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Uh="__v_isReadonly";function yp(n,t,e=!1){let i,s;const r=Ft(n);return r?(i=n,s=fn):(i=n.get,s=n.set),new vp(i,s,r||!s,e)}function Jn(n,t,e,i){let s;try{s=i?n(...i):n()}catch(r){mo(r,t,e)}return s}function nn(n,t,e,i){if(Ft(n)){const r=Jn(n,t,e,i);return r&&xh(r)&&r.catch(o=>{mo(o,t,e)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(nn(n[r],t,e,i));return s}function mo(n,t,e,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=e;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Jn(l,null,10,[n,o,a]);return}}Mp(n,e,s,i)}function Mp(n,t,e,i=!0){console.error(n)}let js=!1,La=!1;const Se=[];let un=0;const ns=[];let wn=null,di=0;const Bh=Promise.resolve();let fl=null;function kh(n){const t=fl||Bh;return n?t.then(this?n.bind(this):n):t}function bp(n){let t=un+1,e=Se.length;for(;t<e;){const i=t+e>>>1;Ys(Se[i])<n?t=i+1:e=i}return t}function dl(n){(!Se.length||!Se.includes(n,js&&n.allowRecurse?un+1:un))&&(n.id==null?Se.push(n):Se.splice(bp(n.id),0,n),Vh())}function Vh(){!js&&!La&&(La=!0,fl=Bh.then(Hh))}function Sp(n){const t=Se.indexOf(n);t>un&&Se.splice(t,1)}function wp(n){Nt(n)?ns.push(...n):(!wn||!wn.includes(n,n.allowRecurse?di+1:di))&&ns.push(n),Vh()}function jl(n,t=js?un+1:0){for(;t<Se.length;t++){const e=Se[t];e&&e.pre&&(Se.splice(t,1),t--,e())}}function Gh(n){if(ns.length){const t=[...new Set(ns)];if(ns.length=0,wn){wn.push(...t);return}for(wn=t,wn.sort((e,i)=>Ys(e)-Ys(i)),di=0;di<wn.length;di++)wn[di]();wn=null,di=0}}const Ys=n=>n.id==null?1/0:n.id,Ep=(n,t)=>{const e=Ys(n)-Ys(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function Hh(n){La=!1,js=!0,Se.sort(Ep);try{for(un=0;un<Se.length;un++){const t=Se[un];t&&t.active!==!1&&Jn(t,null,14)}}finally{un=0,Se.length=0,Gh(),js=!1,fl=null,(Se.length||ns.length)&&Hh()}}function Ap(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Zt;let s=e;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Zt;f&&(s=e.map(p=>p.trim())),h&&(s=e.map(Ea))}let a,l=i[a=Io(t)]||i[a=Io(pn(t))];!l&&r&&(l=i[a=Io(gs(t))]),l&&nn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,nn(c,n,6,s)}}function Wh(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ft(n)){const l=c=>{const u=Wh(c,t,!0);u&&(a=!0,De(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ie(n)&&i.set(n,null),null):(Nt(r)?r.forEach(l=>o[l]=null):De(o,r),ie(n)&&i.set(n,o),o)}function go(n,t){return!n||!co(t)?!1:(t=t.slice(2).replace(/Once$/,""),Gt(n,t[0].toLowerCase()+t.slice(1))||Gt(n,gs(t))||Gt(n,t))}let Le=null,_o=null;function io(n){const t=Le;return Le=n,_o=n&&n.type.__scopeId||null,t}function pw(n){_o=n}function mw(){_o=null}function Tp(n,t=Le,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ic(-1);const r=io(t);let o;try{o=n(...s)}finally{io(r),i._d&&ic(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Oo(n){const{type:t,vnode:e,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=n;let d,_;const y=io(n);try{if(e.shapeFlag&4){const x=s||i;d=ln(u.call(x,x,h,r,p,f,g)),_=l}else{const x=t;d=ln(x.length>1?x(r,{attrs:l,slots:a,emit:c}):x(r,null)),_=t.props?l:Cp(l)}}catch(x){Bs.length=0,mo(x,n,1),d=ve(ti)}let v=d;if(_&&m!==!1){const x=Object.keys(_),{shapeFlag:E}=v;x.length&&E&7&&(o&&x.some(el)&&(_=Pp(_,o)),v=as(v,_))}return e.dirs&&(v=as(v),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition&&(v.transition=e.transition),d=v,io(y),d}const Cp=n=>{let t;for(const e in n)(e==="class"||e==="style"||co(e))&&((t||(t={}))[e]=n[e]);return t},Pp=(n,t)=>{const e={};for(const i in n)(!el(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Lp(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Yl(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!go(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yl(i,o,c):!0:!!o;return!1}function Yl(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!go(e,r))return!0}return!1}function Rp({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}const Dp=n=>n.__isSuspense;function Ip(n,t){t&&t.pendingBranch?Nt(n)?t.effects.push(...n):t.effects.push(n):wp(n)}function $r(n,t){if(xe){let e=xe.provides;const i=xe.parent&&xe.parent.provides;i===e&&(e=xe.provides=Object.create(i)),e[n]=t}}function Zn(n,t,e=!1){const i=xe||Le;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Ft(t)?t.call(i.proxy):t}}const $l={};function zs(n,t,e){return qh(n,t,e)}function qh(n,t,{immediate:e,deep:i,flush:s,onTrack:r,onTrigger:o}=Zt){const a=xe;let l,c=!1,u=!1;if(we(n)?(l=()=>n.value,c=no(n)):es(n)?(l=()=>n,i=!0):Nt(n)?(u=!0,c=n.some(_=>es(_)||no(_)),l=()=>n.map(_=>{if(we(_))return _.value;if(es(_))return gi(_);if(Ft(_))return Jn(_,a,2)})):Ft(n)?t?l=()=>Jn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),nn(n,a,3,[f])}:l=fn,t&&i){const _=l;l=()=>gi(_())}let h,f=_=>{h=d.onStop=()=>{Jn(_,a,4)}};if(Js)return f=fn,t?e&&nn(t,a,3,[l(),u?[]:void 0,f]):l(),fn;let p=u?[]:$l;const g=()=>{if(d.active)if(t){const _=d.run();(i||c||(u?_.some((y,v)=>qs(y,p[v])):qs(_,p)))&&(h&&h(),nn(t,a,3,[_,p===$l?void 0:p,f]),p=_)}else d.run()};g.allowRecurse=!!t;let m;s==="sync"?m=g:s==="post"?m=()=>Ie(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>dl(g));const d=new ol(l,m);return t?e?g():p=d.run():s==="post"?Ie(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&nl(a.scope.effects,d)}}function Op(n,t,e){const i=this.proxy,s=ue(n)?n.includes(".")?Xh(i,n):()=>i[n]:n.bind(i,i);let r;Ft(t)?r=t:(r=t.handler,e=t);const o=xe;ls(this);const a=qh(s,r.bind(i),e);return o?ls(o):bi(),a}function Xh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}function gi(n,t){if(!ie(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),we(n))gi(n.value,t);else if(Nt(n))for(let e=0;e<n.length;e++)gi(n[e],t);else if(_h(n)||ts(n))n.forEach(e=>{gi(e,t)});else if(yh(n))for(const e in n)gi(n[e],t);return n}function Pi(n){return Ft(n)?{setup:n,name:n.name}:n}const Us=n=>!!n.type.__asyncLoader,jh=n=>n.type.__isKeepAlive;function Np(n,t){Yh(n,"a",t)}function Fp(n,t){Yh(n,"da",t)}function Yh(n,t,e=xe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(xo(t,i,e),e){let s=e.parent;for(;s&&s.parent;)jh(s.parent.vnode)&&zp(i,t,e,s),s=s.parent}}function zp(n,t,e,i){const s=xo(t,n,i,!0);ml(()=>{nl(i[t],s)},e)}function xo(n,t,e=xe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;_s(),ls(e);const a=nn(t,e,n,o);return bi(),xs(),a});return i?s.unshift(r):s.push(r),r}}const In=n=>(t,e=xe)=>(!Js||n==="sp")&&xo(n,(...i)=>t(...i),e),Up=In("bm"),pl=In("m"),Bp=In("bu"),kp=In("u"),Vp=In("bum"),ml=In("um"),Gp=In("sp"),Hp=In("rtg"),Wp=In("rtc");function qp(n,t=xe){xo("ec",n,t)}function gw(n,t){const e=Le;if(e===null)return n;const i=Mo(e)||e.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=Zt]=t[r];Ft(o)&&(o={mounted:o,updated:o}),o.deep&&gi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function ri(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(_s(),nn(l,e,8,[n.el,a,n,t]),xs())}}const $h="components";function Xp(n,t){return Yp($h,n,!0,t)||n}const jp=Symbol();function Yp(n,t,e=!0,i=!1){const s=Le||xe;if(s){const r=s.type;if(n===$h){const a=Sm(r,!1);if(a&&(a===t||a===pn(t)||a===fo(pn(t))))return r}const o=Jl(s[n]||r[n],t)||Jl(s.appContext[n],t);return!o&&i?r:o}}function Jl(n,t){return n&&(n[t]||n[pn(t)]||n[fo(pn(t))])}function $p(n,t,e,i){let s;const r=e&&e[i];if(Nt(n)||ue(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=t(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=t(o+1,o,void 0,r&&r[o])}else if(ie(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(n[c],c,a,r&&r[a])}}else s=[];return e&&(e[i]=s),s}function _w(n,t,e={},i,s){if(Le.isCE||Le.parent&&Us(Le.parent)&&Le.parent.isCE)return ve("slot",t==="default"?null:{name:t},i&&i());let r=n[t];r&&r._c&&(r._d=!1),dn();const o=r&&Jh(r(e)),a=vo(He,{key:e.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&n._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Jh(n){return n.some(t=>oo(t)?!(t.type===ti||t.type===He&&!Jh(t.children)):!0)?n:null}const Ra=n=>n?uf(n)?Mo(n)||n.proxy:Ra(n.parent):null,so=De(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ra(n.parent),$root:n=>Ra(n.root),$emit:n=>n.emit,$options:n=>gl(n),$forceUpdate:n=>n.f||(n.f=()=>dl(n.update)),$nextTick:n=>n.n||(n.n=kh.bind(n.proxy)),$watch:n=>Op.bind(n)}),Jp={get({_:n},t){const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(i!==Zt&&Gt(i,t))return o[t]=1,i[t];if(s!==Zt&&Gt(s,t))return o[t]=2,s[t];if((c=n.propsOptions[0])&&Gt(c,t))return o[t]=3,r[t];if(e!==Zt&&Gt(e,t))return o[t]=4,e[t];Da&&(o[t]=0)}}const u=so[t];let h,f;if(u)return t==="$attrs"&&Ue(n,"get",t),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==Zt&&Gt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,Gt(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return s!==Zt&&Gt(s,t)?(s[t]=e,!0):i!==Zt&&Gt(i,t)?(i[t]=e,!0):Gt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==Zt&&Gt(n,o)||t!==Zt&&Gt(t,o)||(a=r[0])&&Gt(a,o)||Gt(i,o)||Gt(so,o)||Gt(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Gt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};let Da=!0;function Zp(n){const t=gl(n),e=n.proxy,i=n.ctx;Da=!1,t.beforeCreate&&Zl(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:y,destroyed:v,unmounted:x,render:E,renderTracked:A,renderTriggered:R,errorCaptured:M,serverPrefetch:C,expose:D,inheritAttrs:Y,components:nt,directives:X,filters:F}=t;if(c&&Kp(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const tt in o){const q=o[tt];Ft(q)&&(i[tt]=q.bind(e))}if(s){const tt=s.call(e,e);ie(tt)&&(n.data=sr(tt))}if(Da=!0,r)for(const tt in r){const q=r[tt],k=Ft(q)?q.bind(e,e):Ft(q.get)?q.get.bind(e,e):fn,V=!Ft(q)&&Ft(q.set)?q.set.bind(e):fn,K=Pe({get:k,set:V});Object.defineProperty(i,tt,{enumerable:!0,configurable:!0,get:()=>K.value,set:H=>K.value=H})}if(a)for(const tt in a)Zh(a[tt],i,e,tt);if(l){const tt=Ft(l)?l.call(e):l;Reflect.ownKeys(tt).forEach(q=>{$r(q,tt[q])})}u&&Zl(u,n,"c");function $(tt,q){Nt(q)?q.forEach(k=>tt(k.bind(e))):q&&tt(q.bind(e))}if($(Up,h),$(pl,f),$(Bp,p),$(kp,g),$(Np,m),$(Fp,d),$(qp,M),$(Wp,A),$(Hp,R),$(Vp,y),$(ml,x),$(Gp,C),Nt(D))if(D.length){const tt=n.exposed||(n.exposed={});D.forEach(q=>{Object.defineProperty(tt,q,{get:()=>e[q],set:k=>e[q]=k})})}else n.exposed||(n.exposed={});E&&n.render===fn&&(n.render=E),Y!=null&&(n.inheritAttrs=Y),nt&&(n.components=nt),X&&(n.directives=X)}function Kp(n,t,e=fn,i=!1){Nt(n)&&(n=Ia(n));for(const s in n){const r=n[s];let o;ie(r)?"default"in r?o=Zn(r.from||s,r.default,!0):o=Zn(r.from||s):o=Zn(r),we(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function Zl(n,t,e){nn(Nt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Zh(n,t,e,i){const s=i.includes(".")?Xh(e,i):()=>e[i];if(ue(n)){const r=t[n];Ft(r)&&zs(s,r)}else if(Ft(n))zs(s,n.bind(e));else if(ie(n))if(Nt(n))n.forEach(r=>Zh(r,t,e,i));else{const r=Ft(n.handler)?n.handler.bind(e):t[n.handler];Ft(r)&&zs(s,r,n)}}function gl(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ro(l,c,o,!0)),ro(l,t,o)),ie(t)&&r.set(t,l),l}function ro(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ro(n,r,e,!0),s&&s.forEach(o=>ro(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Qp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Qp={data:Kl,props:ui,emits:ui,methods:ui,computed:ui,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:ui,directives:ui,watch:em,provide:Kl,inject:tm};function Kl(n,t){return t?n?function(){return De(Ft(n)?n.call(this,this):n,Ft(t)?t.call(this,this):t)}:t:n}function tm(n,t){return ui(Ia(n),Ia(t))}function Ia(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Te(n,t){return n?[...new Set([].concat(n,t))]:t}function ui(n,t){return n?De(De(Object.create(null),n),t):t}function em(n,t){if(!n)return t;if(!t)return n;const e=De(Object.create(null),n);for(const i in t)e[i]=Te(n[i],t[i]);return e}function nm(n,t,e,i=!1){const s={},r={};eo(r,yo,1),n.propsDefaults=Object.create(null),Kh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:mp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function im(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Yt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(go(n.emitsOptions,f))continue;const p=t[f];if(l)if(Gt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=pn(f);s[g]=Oa(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Kh(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!Gt(t,h)&&((u=gs(h))===h||!Gt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Oa(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!Gt(t,h))&&(delete r[h],c=!0)}c&&Dn(n,"set","$attrs")}function Kh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(jr(l))continue;const c=t[l];let u;s&&Gt(s,u=pn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:go(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Yt(e),c=a||Zt;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Oa(s,l,h,c[h],n,!Gt(c,h))}}return o}function Oa(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Ft(l)){const{propsDefaults:c}=s;e in c?i=c[e]:(ls(s),i=c[e]=l.call(null,t),bi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===gs(e))&&(i=!0))}return i}function Qh(n,t,e=!1){const i=t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ft(n)){const u=h=>{l=!0;const[f,p]=Qh(h,t,!0);De(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ie(n)&&i.set(n,Qi),Qi;if(Nt(r))for(let u=0;u<r.length;u++){const h=pn(r[u]);Ql(h)&&(o[h]=Zt)}else if(r)for(const u in r){const h=pn(u);if(Ql(h)){const f=r[u],p=o[h]=Nt(f)||Ft(f)?{type:f}:f;if(p){const g=nc(Boolean,p.type),m=nc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Gt(p,"default"))&&a.push(h)}}}const c=[o,a];return ie(n)&&i.set(n,c),c}function Ql(n){return n[0]!=="$"}function tc(n){const t=n&&n.toString().match(/^\s*function (\w+)/);return t?t[1]:n===null?"null":""}function ec(n,t){return tc(n)===tc(t)}function nc(n,t){return Nt(t)?t.findIndex(e=>ec(e,n)):Ft(t)&&ec(t,n)?0:-1}const tf=n=>n[0]==="_"||n==="$stable",_l=n=>Nt(n)?n.map(ln):[ln(n)],sm=(n,t,e)=>{if(t._n)return t;const i=Tp((...s)=>_l(t(...s)),e);return i._c=!1,i},ef=(n,t,e)=>{const i=n._ctx;for(const s in n){if(tf(s))continue;const r=n[s];if(Ft(r))t[s]=sm(s,r,i);else if(r!=null){const o=_l(r);t[s]=()=>o}}},nf=(n,t)=>{const e=_l(t);n.slots.default=()=>e},rm=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=Yt(t),eo(t,"_",e)):ef(t,n.slots={})}else n.slots={},t&&nf(n,t);eo(n.slots,yo,1)},om=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Zt;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:(De(s,t),!e&&a===1&&delete s._):(r=!t.$stable,ef(t,s)),o=t}else t&&(nf(n,t),o={default:1});if(r)for(const a in s)!tf(a)&&!(a in o)&&delete s[a]};function sf(){return{app:null,config:{isNativeTag:Nd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let am=0;function lm(n,t){return function(i,s=null){Ft(i)||(i=Object.assign({},i)),s!=null&&!ie(s)&&(s=null);const r=sf(),o=new Set;let a=!1;const l=r.app={_uid:am++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Em,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ft(c.install)?(o.add(c),c.install(l,...u)):Ft(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=ve(i,s);return f.appContext=r,u&&t?t(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Mo(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Na(n,t,e,i,s=!1){if(Nt(n)){n.forEach((f,p)=>Na(f,t&&(Nt(t)?t[p]:t),e,i,s));return}if(Us(i)&&!s)return;const r=i.shapeFlag&4?Mo(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===Zt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ue(c)?(u[c]=null,Gt(h,c)&&(h[c]=null)):we(c)&&(c.value=null)),Ft(l))Jn(l,a,12,[o,u]);else{const f=ue(l),p=we(l);if(f||p){const g=()=>{if(n.f){const m=f?Gt(h,l)?h[l]:u[l]:l.value;s?Nt(m)&&nl(m,r):Nt(m)?m.includes(r)||m.push(r):f?(u[l]=[r],Gt(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,Gt(h,l)&&(h[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ie(g,e)):g()}}}const Ie=Ip;function cm(n){return um(n)}function um(n,t){const e=Vd();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=fn,insertStaticContent:g}=n,m=(b,w,I,U=null,B=null,it=null,lt=!1,Z=null,ft=!!w.dynamicChildren)=>{if(b===w)return;b&&!ws(b,w)&&(U=ut(b),H(b,B,it,!0),b=null),w.patchFlag===-2&&(ft=!1,w.dynamicChildren=null);const{type:st,ref:T,shapeFlag:S}=w;switch(st){case xl:d(b,w,I,U);break;case ti:_(b,w,I,U);break;case Jr:b==null&&y(w,I,U,lt);break;case He:nt(b,w,I,U,B,it,lt,Z,ft);break;default:S&1?E(b,w,I,U,B,it,lt,Z,ft):S&6?X(b,w,I,U,B,it,lt,Z,ft):(S&64||S&128)&&st.process(b,w,I,U,B,it,lt,Z,ft,vt)}T!=null&&B&&Na(T,b&&b.ref,it,w||b,!w)},d=(b,w,I,U)=>{if(b==null)i(w.el=a(w.children),I,U);else{const B=w.el=b.el;w.children!==b.children&&c(B,w.children)}},_=(b,w,I,U)=>{b==null?i(w.el=l(w.children||""),I,U):w.el=b.el},y=(b,w,I,U)=>{[b.el,b.anchor]=g(b.children,w,I,U,b.el,b.anchor)},v=({el:b,anchor:w},I,U)=>{let B;for(;b&&b!==w;)B=f(b),i(b,I,U),b=B;i(w,I,U)},x=({el:b,anchor:w})=>{let I;for(;b&&b!==w;)I=f(b),s(b),b=I;s(w)},E=(b,w,I,U,B,it,lt,Z,ft)=>{lt=lt||w.type==="svg",b==null?A(w,I,U,B,it,lt,Z,ft):C(b,w,B,it,lt,Z,ft)},A=(b,w,I,U,B,it,lt,Z)=>{let ft,st;const{type:T,props:S,shapeFlag:O,transition:Q,dirs:ot}=b;if(ft=b.el=o(b.type,it,S&&S.is,S),O&8?u(ft,b.children):O&16&&M(b.children,ft,null,U,B,it&&T!=="foreignObject",lt,Z),ot&&ri(b,null,U,"created"),S){for(const bt in S)bt!=="value"&&!jr(bt)&&r(ft,bt,null,S[bt],it,b.children,U,B,z);"value"in S&&r(ft,"value",null,S.value),(st=S.onVnodeBeforeMount)&&on(st,U,b)}R(ft,b,b.scopeId,lt,U),ot&&ri(b,null,U,"beforeMount");const dt=(!B||B&&!B.pendingBranch)&&Q&&!Q.persisted;dt&&Q.beforeEnter(ft),i(ft,w,I),((st=S&&S.onVnodeMounted)||dt||ot)&&Ie(()=>{st&&on(st,U,b),dt&&Q.enter(ft),ot&&ri(b,null,U,"mounted")},B)},R=(b,w,I,U,B)=>{if(I&&p(b,I),U)for(let it=0;it<U.length;it++)p(b,U[it]);if(B){let it=B.subTree;if(w===it){const lt=B.vnode;R(b,lt,lt.scopeId,lt.slotScopeIds,B.parent)}}},M=(b,w,I,U,B,it,lt,Z,ft=0)=>{for(let st=ft;st<b.length;st++){const T=b[st]=Z?qn(b[st]):ln(b[st]);m(null,T,w,I,U,B,it,lt,Z)}},C=(b,w,I,U,B,it,lt)=>{const Z=w.el=b.el;let{patchFlag:ft,dynamicChildren:st,dirs:T}=w;ft|=b.patchFlag&16;const S=b.props||Zt,O=w.props||Zt;let Q;I&&oi(I,!1),(Q=O.onVnodeBeforeUpdate)&&on(Q,I,w,b),T&&ri(w,b,I,"beforeUpdate"),I&&oi(I,!0);const ot=B&&w.type!=="foreignObject";if(st?D(b.dynamicChildren,st,Z,I,U,ot,it):lt||q(b,w,Z,null,I,U,ot,it,!1),ft>0){if(ft&16)Y(Z,w,S,O,I,U,B);else if(ft&2&&S.class!==O.class&&r(Z,"class",null,O.class,B),ft&4&&r(Z,"style",S.style,O.style,B),ft&8){const dt=w.dynamicProps;for(let bt=0;bt<dt.length;bt++){const gt=dt[bt],et=S[gt],Tt=O[gt];(Tt!==et||gt==="value")&&r(Z,gt,et,Tt,B,b.children,I,U,z)}}ft&1&&b.children!==w.children&&u(Z,w.children)}else!lt&&st==null&&Y(Z,w,S,O,I,U,B);((Q=O.onVnodeUpdated)||T)&&Ie(()=>{Q&&on(Q,I,w,b),T&&ri(w,b,I,"updated")},U)},D=(b,w,I,U,B,it,lt)=>{for(let Z=0;Z<w.length;Z++){const ft=b[Z],st=w[Z],T=ft.el&&(ft.type===He||!ws(ft,st)||ft.shapeFlag&70)?h(ft.el):I;m(ft,st,T,null,U,B,it,lt,!0)}},Y=(b,w,I,U,B,it,lt)=>{if(I!==U){if(I!==Zt)for(const Z in I)!jr(Z)&&!(Z in U)&&r(b,Z,I[Z],null,lt,w.children,B,it,z);for(const Z in U){if(jr(Z))continue;const ft=U[Z],st=I[Z];ft!==st&&Z!=="value"&&r(b,Z,st,ft,lt,w.children,B,it,z)}"value"in U&&r(b,"value",I.value,U.value)}},nt=(b,w,I,U,B,it,lt,Z,ft)=>{const st=w.el=b?b.el:a(""),T=w.anchor=b?b.anchor:a("");let{patchFlag:S,dynamicChildren:O,slotScopeIds:Q}=w;Q&&(Z=Z?Z.concat(Q):Q),b==null?(i(st,I,U),i(T,I,U),M(w.children,I,T,B,it,lt,Z,ft)):S>0&&S&64&&O&&b.dynamicChildren?(D(b.dynamicChildren,O,I,B,it,lt,Z),(w.key!=null||B&&w===B.subTree)&&rf(b,w,!0)):q(b,w,I,T,B,it,lt,Z,ft)},X=(b,w,I,U,B,it,lt,Z,ft)=>{w.slotScopeIds=Z,b==null?w.shapeFlag&512?B.ctx.activate(w,I,U,lt,ft):F(w,I,U,B,it,lt,ft):J(b,w,ft)},F=(b,w,I,U,B,it,lt)=>{const Z=b.component=xm(b,U,B);if(jh(b)&&(Z.ctx.renderer=vt),vm(Z),Z.asyncDep){if(B&&B.registerDep(Z,$),!b.el){const ft=Z.subTree=ve(ti);_(null,ft,w,I)}return}$(Z,b,w,I,B,it,lt)},J=(b,w,I)=>{const U=w.component=b.component;if(Lp(b,w,I))if(U.asyncDep&&!U.asyncResolved){tt(U,w,I);return}else U.next=w,Sp(U.update),U.update();else w.el=b.el,U.vnode=w},$=(b,w,I,U,B,it,lt)=>{const Z=()=>{if(b.isMounted){let{next:T,bu:S,u:O,parent:Q,vnode:ot}=b,dt=T,bt;oi(b,!1),T?(T.el=ot.el,tt(b,T,lt)):T=ot,S&&Yr(S),(bt=T.props&&T.props.onVnodeBeforeUpdate)&&on(bt,Q,T,ot),oi(b,!0);const gt=Oo(b),et=b.subTree;b.subTree=gt,m(et,gt,h(et.el),ut(et),b,B,it),T.el=gt.el,dt===null&&Rp(b,gt.el),O&&Ie(O,B),(bt=T.props&&T.props.onVnodeUpdated)&&Ie(()=>on(bt,Q,T,ot),B)}else{let T;const{el:S,props:O}=w,{bm:Q,m:ot,parent:dt}=b,bt=Us(w);if(oi(b,!1),Q&&Yr(Q),!bt&&(T=O&&O.onVnodeBeforeMount)&&on(T,dt,w),oi(b,!0),S&&Mt){const gt=()=>{b.subTree=Oo(b),Mt(S,b.subTree,b,B,null)};bt?w.type.__asyncLoader().then(()=>!b.isUnmounted&&gt()):gt()}else{const gt=b.subTree=Oo(b);m(null,gt,I,U,b,B,it),w.el=gt.el}if(ot&&Ie(ot,B),!bt&&(T=O&&O.onVnodeMounted)){const gt=w;Ie(()=>on(T,dt,gt),B)}(w.shapeFlag&256||dt&&Us(dt.vnode)&&dt.vnode.shapeFlag&256)&&b.a&&Ie(b.a,B),b.isMounted=!0,w=I=U=null}},ft=b.effect=new ol(Z,()=>dl(st),b.scope),st=b.update=()=>ft.run();st.id=b.uid,oi(b,!0),st()},tt=(b,w,I)=>{w.component=b;const U=b.vnode.props;b.vnode=w,b.next=null,im(b,w.props,U,I),om(b,w.children,I),_s(),jl(),xs()},q=(b,w,I,U,B,it,lt,Z,ft=!1)=>{const st=b&&b.children,T=b?b.shapeFlag:0,S=w.children,{patchFlag:O,shapeFlag:Q}=w;if(O>0){if(O&128){V(st,S,I,U,B,it,lt,Z,ft);return}else if(O&256){k(st,S,I,U,B,it,lt,Z,ft);return}}Q&8?(T&16&&z(st,B,it),S!==st&&u(I,S)):T&16?Q&16?V(st,S,I,U,B,it,lt,Z,ft):z(st,B,it,!0):(T&8&&u(I,""),Q&16&&M(S,I,U,B,it,lt,Z,ft))},k=(b,w,I,U,B,it,lt,Z,ft)=>{b=b||Qi,w=w||Qi;const st=b.length,T=w.length,S=Math.min(st,T);let O;for(O=0;O<S;O++){const Q=w[O]=ft?qn(w[O]):ln(w[O]);m(b[O],Q,I,null,B,it,lt,Z,ft)}st>T?z(b,B,it,!0,!1,S):M(w,I,U,B,it,lt,Z,ft,S)},V=(b,w,I,U,B,it,lt,Z,ft)=>{let st=0;const T=w.length;let S=b.length-1,O=T-1;for(;st<=S&&st<=O;){const Q=b[st],ot=w[st]=ft?qn(w[st]):ln(w[st]);if(ws(Q,ot))m(Q,ot,I,null,B,it,lt,Z,ft);else break;st++}for(;st<=S&&st<=O;){const Q=b[S],ot=w[O]=ft?qn(w[O]):ln(w[O]);if(ws(Q,ot))m(Q,ot,I,null,B,it,lt,Z,ft);else break;S--,O--}if(st>S){if(st<=O){const Q=O+1,ot=Q<T?w[Q].el:U;for(;st<=O;)m(null,w[st]=ft?qn(w[st]):ln(w[st]),I,ot,B,it,lt,Z,ft),st++}}else if(st>O)for(;st<=S;)H(b[st],B,it,!0),st++;else{const Q=st,ot=st,dt=new Map;for(st=ot;st<=O;st++){const wt=w[st]=ft?qn(w[st]):ln(w[st]);wt.key!=null&&dt.set(wt.key,st)}let bt,gt=0;const et=O-ot+1;let Tt=!1,Rt=0;const At=new Array(et);for(st=0;st<et;st++)At[st]=0;for(st=Q;st<=S;st++){const wt=b[st];if(gt>=et){H(wt,B,it,!0);continue}let It;if(wt.key!=null)It=dt.get(wt.key);else for(bt=ot;bt<=O;bt++)if(At[bt-ot]===0&&ws(wt,w[bt])){It=bt;break}It===void 0?H(wt,B,it,!0):(At[It-ot]=st+1,It>=Rt?Rt=It:Tt=!0,m(wt,w[It],I,null,B,it,lt,Z,ft),gt++)}const Pt=Tt?hm(At):Qi;for(bt=Pt.length-1,st=et-1;st>=0;st--){const wt=ot+st,It=w[wt],Jt=wt+1<T?w[wt+1].el:U;At[st]===0?m(null,It,I,Jt,B,it,lt,Z,ft):Tt&&(bt<0||st!==Pt[bt]?K(It,I,Jt,2):bt--)}}},K=(b,w,I,U,B=null)=>{const{el:it,type:lt,transition:Z,children:ft,shapeFlag:st}=b;if(st&6){K(b.component.subTree,w,I,U);return}if(st&128){b.suspense.move(w,I,U);return}if(st&64){lt.move(b,w,I,vt);return}if(lt===He){i(it,w,I);for(let S=0;S<ft.length;S++)K(ft[S],w,I,U);i(b.anchor,w,I);return}if(lt===Jr){v(b,w,I);return}if(U!==2&&st&1&&Z)if(U===0)Z.beforeEnter(it),i(it,w,I),Ie(()=>Z.enter(it),B);else{const{leave:S,delayLeave:O,afterLeave:Q}=Z,ot=()=>i(it,w,I),dt=()=>{S(it,()=>{ot(),Q&&Q()})};O?O(it,ot,dt):dt()}else i(it,w,I)},H=(b,w,I,U=!1,B=!1)=>{const{type:it,props:lt,ref:Z,children:ft,dynamicChildren:st,shapeFlag:T,patchFlag:S,dirs:O}=b;if(Z!=null&&Na(Z,null,I,b,!0),T&256){w.ctx.deactivate(b);return}const Q=T&1&&O,ot=!Us(b);let dt;if(ot&&(dt=lt&&lt.onVnodeBeforeUnmount)&&on(dt,w,b),T&6)W(b.component,I,U);else{if(T&128){b.suspense.unmount(I,U);return}Q&&ri(b,null,w,"beforeUnmount"),T&64?b.type.remove(b,w,I,B,vt,U):st&&(it!==He||S>0&&S&64)?z(st,w,I,!1,!0):(it===He&&S&384||!B&&T&16)&&z(ft,w,I),U&&mt(b)}(ot&&(dt=lt&&lt.onVnodeUnmounted)||Q)&&Ie(()=>{dt&&on(dt,w,b),Q&&ri(b,null,w,"unmounted")},I)},mt=b=>{const{type:w,el:I,anchor:U,transition:B}=b;if(w===He){St(I,U);return}if(w===Jr){x(b);return}const it=()=>{s(I),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(b.shapeFlag&1&&B&&!B.persisted){const{leave:lt,delayLeave:Z}=B,ft=()=>lt(I,it);Z?Z(b.el,it,ft):ft()}else it()},St=(b,w)=>{let I;for(;b!==w;)I=f(b),s(b),b=I;s(w)},W=(b,w,I)=>{const{bum:U,scope:B,update:it,subTree:lt,um:Z}=b;U&&Yr(U),B.stop(),it&&(it.active=!1,H(lt,b,w,I)),Z&&Ie(Z,w),Ie(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},z=(b,w,I,U=!1,B=!1,it=0)=>{for(let lt=it;lt<b.length;lt++)H(b[lt],w,I,U,B)},ut=b=>b.shapeFlag&6?ut(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),ht=(b,w,I)=>{b==null?w._vnode&&H(w._vnode,null,null,!0):m(w._vnode||null,b,w,null,null,null,I),jl(),Gh(),w._vnode=b},vt={p:m,um:H,m:K,r:mt,mt:F,mc:M,pc:q,pbc:D,n:ut,o:n};let pt,Mt;return t&&([pt,Mt]=t(vt)),{render:ht,hydrate:pt,createApp:lm(ht,pt)}}function oi({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function rf(n,t,e=!1){const i=n.children,s=t.children;if(Nt(i)&&Nt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=qn(s[r]),a.el=o.el),e||rf(o,a))}}function hm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}const fm=n=>n.__isTeleport,He=Symbol(void 0),xl=Symbol(void 0),ti=Symbol(void 0),Jr=Symbol(void 0),Bs=[];let tn=null;function dn(n=!1){Bs.push(tn=n?null:[])}function dm(){Bs.pop(),tn=Bs[Bs.length-1]||null}let $s=1;function ic(n){$s+=n}function of(n){return n.dynamicChildren=$s>0?tn||Qi:null,dm(),$s>0&&tn&&tn.push(n),n}function os(n,t,e,i,s,r){return of(An(n,t,e,i,s,r,!0))}function vo(n,t,e,i,s){return of(ve(n,t,e,i,s,!0))}function oo(n){return n?n.__v_isVNode===!0:!1}function ws(n,t){return n.type===t.type&&n.key===t.key}const yo="__vInternal",af=({key:n})=>n??null,Zr=({ref:n,ref_key:t,ref_for:e})=>n!=null?ue(n)||we(n)||Ft(n)?{i:Le,r:n,k:t,f:!!e}:n:null;function An(n,t=null,e=null,i=0,s=null,r=n===He?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&af(t),ref:t&&Zr(t),scopeId:_o,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(vl(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ue(e)?8:16),$s>0&&!o&&tn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&tn.push(l),l}const ve=pm;function pm(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===jp)&&(n=ti),oo(n)){const a=as(n,t,!0);return e&&vl(a,e),$s>0&&!r&&tn&&(a.shapeFlag&6?tn[tn.indexOf(n)]=a:tn.push(a)),a.patchFlag|=-2,a}if(wm(n)&&(n=n.__vccOpts),t){t=mm(t);let{class:a,style:l}=t;a&&!ue(a)&&(t.class=ir(a)),ie(l)&&(Dh(l)&&!Nt(l)&&(l=De({},l)),t.style=yi(l))}const o=ue(n)?1:Dp(n)?128:fm(n)?64:ie(n)?4:Ft(n)?2:0;return An(n,t,e,i,s,o,r,!0)}function mm(n){return n?Dh(n)||yo in n?De({},n):n:null}function as(n,t,e=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=t?cf(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&af(a),ref:t&&t.ref?e&&s?Nt(s)?s.concat(Zr(t)):[s,Zr(t)]:Zr(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==He?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&as(n.ssContent),ssFallback:n.ssFallback&&as(n.ssFallback),el:n.el,anchor:n.anchor}}function lf(n=" ",t=0){return ve(xl,null,n,t)}function xw(n,t){const e=ve(Jr,null,n);return e.staticCount=t,e}function vw(n="",t=!1){return t?(dn(),vo(ti,null,n)):ve(ti,null,n)}function ln(n){return n==null||typeof n=="boolean"?ve(ti):Nt(n)?ve(He,null,n.slice()):typeof n=="object"?qn(n):ve(xl,null,String(n))}function qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:as(n)}function vl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Nt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),vl(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!(yo in t)?t._ctx=Le:s===3&&Le&&(Le.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ft(t)?(t={default:t,_ctx:Le},e=32):(t=String(t),i&64?(e=16,t=[lf(t)]):e=8);n.children=t,n.shapeFlag|=e}function cf(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ir([t.class,i.class]));else if(s==="style")t.style=yi([t.style,i.style]);else if(co(s)){const r=t[s],o=i[s];o&&r!==o&&!(Nt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function on(n,t,e,i=null){nn(n,t,7,[e,i])}const gm=sf();let _m=0;function xm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||gm,r={uid:_m++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qh(i,s),emitsOptions:Wh(i,s),emit:null,emitted:null,propsDefaults:Zt,inheritAttrs:i.inheritAttrs,ctx:Zt,data:Zt,props:Zt,attrs:Zt,slots:Zt,refs:Zt,setupState:Zt,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Ap.bind(null,r),n.ce&&n.ce(r),r}let xe=null;const ls=n=>{xe=n,n.scope.on()},bi=()=>{xe&&xe.scope.off(),xe=null};function uf(n){return n.vnode.shapeFlag&4}let Js=!1;function vm(n,t=!1){Js=t;const{props:e,children:i}=n.vnode,s=uf(n);nm(n,e,s,t),rm(n,i);const r=s?ym(n,t):void 0;return Js=!1,r}function ym(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=Ih(new Proxy(n.ctx,Jp));const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?bm(n):null;ls(n),_s();const r=Jn(i,n,0,[n.props,s]);if(xs(),bi(),xh(r)){if(r.then(bi,bi),t)return r.then(o=>{sc(n,o,t)}).catch(o=>{mo(o,n,0)});n.asyncDep=r}else sc(n,r,t)}else hf(n,t)}function sc(n,t,e){Ft(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=zh(t)),hf(n,e)}let rc;function hf(n,t,e){const i=n.type;if(!n.render){if(!t&&rc&&!i.render){const s=i.template||gl(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=De(De({isCustomElement:r,delimiters:a},o),l);i.render=rc(s,c)}}n.render=i.render||fn}ls(n),_s(),Zp(n),xs(),bi()}function Mm(n){return new Proxy(n.attrs,{get(t,e){return Ue(n,"get","$attrs"),t[e]}})}function bm(n){const t=i=>{n.exposed=i||{}};let e;return{get attrs(){return e||(e=Mm(n))},slots:n.slots,emit:n.emit,expose:t}}function Mo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(zh(Ih(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in so)return so[e](n)}}))}function Sm(n,t=!0){return Ft(n)?n.displayName||n.name:n.name||t&&n.__name}function wm(n){return Ft(n)&&"__vccOpts"in n}const Pe=(n,t)=>yp(n,t,Js);function ff(n,t,e){const i=arguments.length;return i===2?ie(t)&&!Nt(t)?oo(t)?ve(n,null,[t]):ve(n,t):ve(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&oo(e)&&(e=[e]),ve(n,t,e))}const Em="3.2.41",Am="http://www.w3.org/2000/svg",pi=typeof document<"u"?document:null,oc=pi&&pi.createElement("template"),Tm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t?pi.createElementNS(Am,n):pi.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>pi.createTextNode(n),createComment:n=>pi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{oc.innerHTML=i?`<svg>${n}</svg>`:n;const a=oc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function Cm(n,t,e){const i=n._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}function Pm(n,t,e){const i=n.style,s=ue(e);if(e&&!s){for(const r in e)Fa(i,r,e[r]);if(t&&!ue(t))for(const r in t)e[r]==null&&Fa(i,r,"")}else{const r=i.display;s?t!==e&&(i.cssText=e):t&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const ac=/\s*!important$/;function Fa(n,t,e){if(Nt(e))e.forEach(i=>Fa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Lm(n,t);ac.test(e)?n.setProperty(gs(i),e.replace(ac,""),"important"):n[i]=e}}const lc=["Webkit","Moz","ms"],No={};function Lm(n,t){const e=No[t];if(e)return e;let i=pn(t);if(i!=="filter"&&i in n)return No[t]=i;i=fo(i);for(let s=0;s<lc.length;s++){const r=lc[s]+i;if(r in n)return No[t]=r}return t}const cc="http://www.w3.org/1999/xlink";function Rm(n,t,e,i,s){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(cc,t.slice(6,t.length)):n.setAttributeNS(cc,t,e);else{const r=Ld(t);e==null||r&&!mh(e)?n.removeAttribute(t):n.setAttribute(t,r?"":e)}}function Dm(n,t,e,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),n[t]=e??"";return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=e;const l=e??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),e==null&&n.removeAttribute(t);return}let a=!1;if(e===""||e==null){const l=typeof n[t];l==="boolean"?e=mh(e):e==null&&l==="string"?(e="",a=!0):l==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(t)}function Yi(n,t,e,i){n.addEventListener(t,e,i)}function Im(n,t,e,i){n.removeEventListener(t,e,i)}function Om(n,t,e,i,s=null){const r=n._vei||(n._vei={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Nm(t);if(i){const c=r[t]=Um(i,s);Yi(n,a,c,l)}else o&&(Im(n,a,o,l),r[t]=void 0)}}const uc=/(?:Once|Passive|Capture)$/;function Nm(n){let t;if(uc.test(n)){t={};let i;for(;i=n.match(uc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):gs(n.slice(2)),t]}let Fo=0;const Fm=Promise.resolve(),zm=()=>Fo||(Fm.then(()=>Fo=0),Fo=Date.now());function Um(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;nn(Bm(i,e.value),t,5,[i])};return e.value=n,e.attached=zm(),e}function Bm(n,t){if(Nt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const hc=/^on[a-z]/,km=(n,t,e,i,s=!1,r,o,a,l)=>{t==="class"?Cm(n,i,s):t==="style"?Pm(n,e,i):co(t)?el(t)||Om(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vm(n,t,i,s))?Dm(n,t,i,r,o,a,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Rm(n,t,i,s))};function Vm(n,t,e,i){return i?!!(t==="innerHTML"||t==="textContent"||t in n&&hc.test(t)&&Ft(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||hc.test(t)&&ue(e)?!1:t in n}const fc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Nt(t)?e=>Yr(t,e):t};function Gm(n){n.target.composing=!0}function dc(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const yw={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n._assign=fc(s);const r=i||s.props&&s.props.type==="number";Yi(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),r&&(a=Ea(a)),n._assign(a)}),e&&Yi(n,"change",()=>{n.value=n.value.trim()}),t||(Yi(n,"compositionstart",Gm),Yi(n,"compositionend",dc),Yi(n,"change",dc))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,modifiers:{lazy:e,trim:i,number:s}},r){if(n._assign=fc(r),n.composing||document.activeElement===n&&n.type!=="range"&&(e||i&&n.value.trim()===t||(s||n.type==="number")&&Ea(n.value)===t))return;const o=t??"";n.value!==o&&(n.value=o)}},Mw={beforeMount(n,{value:t},{transition:e}){n._vod=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Es(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Es(n,!0),i.enter(n)):i.leave(n,()=>{Es(n,!1)}):Es(n,t))},beforeUnmount(n,{value:t}){Es(n,t)}};function Es(n,t){n.style.display=t?n._vod:"none"}const Hm=De({patchProp:km},Tm);let pc;function Wm(){return pc||(pc=cm(Hm))}const qm=(...n)=>{const t=Wm().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Xm(i);if(!s)return;const r=t._component;!Ft(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Xm(n){return ue(n)?document.querySelector(n):n}const bo=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},jm={};function Ym(n,t){const e=Xp("router-view");return dn(),vo(e)}const rr=bo(jm,[["render",Ym]]);/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const $i=typeof window<"u";function $m(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const $t=Object.assign;function zo(n,t){const e={};for(const i in t){const s=t[i];e[i]=sn(s)?s.map(n):n(s)}return e}const ks=()=>{},sn=Array.isArray,Jm=/\/$/,Zm=n=>n.replace(Jm,"");function Uo(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=n(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=eg(i??t,e),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Km(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function mc(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Qm(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&cs(t.matched[i],e.matched[s])&&df(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function cs(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function df(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!tg(n[e],t[e]))return!1;return!0}function tg(n,t){return sn(n)?gc(n,t):sn(t)?gc(t,n):n===t}function gc(n,t){return sn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function eg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/");let s=e.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Zs;(function(n){n.pop="pop",n.push="push"})(Zs||(Zs={}));var Vs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Vs||(Vs={}));function ng(n){if(!n)if($i){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Zm(n)}const ig=/^[^#]+#/;function sg(n,t){return n.replace(ig,"#")+t}function rg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const So=()=>({left:window.pageXOffset,top:window.pageYOffset});function og(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=rg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function _c(n,t){return(history.state?history.state.position-t:-1)+n}const za=new Map;function ag(n,t){za.set(n,t)}function lg(n){const t=za.get(n);return za.delete(n),t}let cg=()=>location.protocol+"//"+location.host;function pf(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),mc(l,"")}return mc(e,n)+i+s}function ug(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=pf(n,location),g=e.value,m=t.value;let d=0;if(f){if(e.value=p,t.value=f,o&&o===g){o=null;return}d=m?f.position-m.position:0}else i(p);s.forEach(_=>{_(e.value,g,{delta:d,type:Zs.pop,direction:d?d>0?Vs.forward:Vs.back:Vs.unknown})})};function l(){o=e.value}function c(f){s.push(f);const p=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState($t({},f.state,{scroll:So()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function xc(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?So():null}}function hg(n){const{history:t,location:e}=window,i={value:pf(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+l:cg()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),e[u?"replace":"assign"](f)}}function o(l,c){const u=$t({},t.state,xc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=$t({},s.value,t.state,{forward:l,scroll:So()});r(u.current,u,!0);const h=$t({},xc(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function fg(n){n=ng(n);const t=hg(n),e=ug(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=$t({location:"",base:n,go:i,createHref:sg.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function dg(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),fg(n)}function pg(n){return typeof n=="string"||n&&typeof n=="object"}function mf(n){return typeof n=="string"||typeof n=="symbol"}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gf=Symbol("");var vc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(vc||(vc={}));function us(n,t){return $t(new Error,{type:n,[gf]:!0},t)}function _n(n,t){return n instanceof Error&&gf in n&&(t==null||!!(n.type&t))}const yc="[^/]+?",mg={sensitive:!1,strict:!1,start:!0,end:!0},gg=/[.+*?^${}()[\]/\\]/g;function _g(n,t){const e=$t({},mg,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];e.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(e.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(gg,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:m,optional:d,regexp:_}=f;r.push({name:g,repeatable:m,optional:d});const y=_||yc;if(y!==yc){p+=10;try{new RegExp(`(${y})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+x.message)}}let v=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(v=d&&c.length<2?`(?:/${v})`:"/"+v),d&&(v+="?"),s+=v,p+=20,d&&(p+=-8),m&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=r[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:d}=p,_=g in c?c[g]:"";if(sn(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=sn(_)?_.join("/"):_;if(!y)if(d)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function xg(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function vg(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=xg(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(Mc(i))return 1;if(Mc(s))return-1}return s.length-i.length}function Mc(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const yg={type:0,value:""},Mg=/[a-zA-Z0-9_]/;function bg(n){if(!n)return[[]];if(n==="/")return[[yg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${c}": ${p}`)}let e=0,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(e===0?r.push({type:0,value:c}):e===1||e===2||e===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),e=1):f();break;case 4:f(),e=i;break;case 1:l==="("?e=2:Mg.test(l)?f():(h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=3:u+=l;break;case 3:h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Sg(n,t,e){const i=_g(bg(n.path),e),s=$t(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function wg(n,t){const e=[],i=new Map;t=wc({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,h,f){const p=!f,g=Eg(u);g.aliasOf=f&&f.record;const m=wc(t,u),d=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of v)d.push($t({},g,{components:f?f.record.components:g.components,path:x,aliasOf:f?f.record:g}))}let _,y;for(const v of d){const{path:x}=v;if(h&&x[0]!=="/"){const E=h.record.path,A=E[E.length-1]==="/"?"":"/";v.path=h.record.path+(x&&A+x)}if(_=Sg(v,h,m),f?f.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),p&&u.name&&!Sc(_)&&o(u.name)),g.children){const E=g.children;for(let A=0;A<E.length;A++)r(E[A],_,f&&f.children[A])}f=f||_,l(_)}return y?()=>{o(y)}:ks}function o(u){if(mf(u)){const h=i.get(u);h&&(i.delete(u),e.splice(e.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=e.indexOf(u);h>-1&&(e.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){let h=0;for(;h<e.length&&vg(u,e[h])>=0&&(u.record.path!==e[h].record.path||!_f(u,e[h]));)h++;e.splice(h,0,u),u.record.name&&!Sc(u)&&i.set(u.record.name,u)}function c(u,h){let f,p={},g,m;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw us(1,{location:u});m=f.record.name,p=$t(bc(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&bc(u.params,f.keys.map(y=>y.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=e.find(y=>y.re.test(g)),f&&(p=f.parse(g),m=f.record.name);else{if(f=h.name?i.get(h.name):e.find(y=>y.re.test(h.path)),!f)throw us(1,{location:u,currentLocation:h});m=f.record.name,p=$t({},h.params,u.params),g=f.stringify(p)}const d=[];let _=f;for(;_;)d.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:d,meta:Tg(d)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function bc(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function Eg(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Ag(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Ag(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="boolean"?e:e[i];return t}function Sc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Tg(n){return n.reduce((t,e)=>$t(t,e.meta),{})}function wc(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function _f(n,t){return t.children.some(e=>e===n||_f(n,e))}const xf=/#/g,Cg=/&/g,Pg=/\//g,Lg=/=/g,Rg=/\?/g,vf=/\+/g,Dg=/%5B/g,Ig=/%5D/g,yf=/%5E/g,Og=/%60/g,Mf=/%7B/g,Ng=/%7C/g,bf=/%7D/g,Fg=/%20/g;function yl(n){return encodeURI(""+n).replace(Ng,"|").replace(Dg,"[").replace(Ig,"]")}function zg(n){return yl(n).replace(Mf,"{").replace(bf,"}").replace(yf,"^")}function Ua(n){return yl(n).replace(vf,"%2B").replace(Fg,"+").replace(xf,"%23").replace(Cg,"%26").replace(Og,"`").replace(Mf,"{").replace(bf,"}").replace(yf,"^")}function Ug(n){return Ua(n).replace(Lg,"%3D")}function Bg(n){return yl(n).replace(xf,"%23").replace(Rg,"%3F")}function kg(n){return n==null?"":Bg(n).replace(Pg,"%2F")}function ao(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Vg(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(vf," "),o=r.indexOf("="),a=ao(o<0?r:r.slice(0,o)),l=o<0?null:ao(r.slice(o+1));if(a in t){let c=t[a];sn(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Ec(n){let t="";for(let e in n){const i=n[e];if(e=Ug(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(sn(i)?i.map(r=>r&&Ua(r)):[i&&Ua(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function Gg(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=sn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Hg=Symbol(""),Ac=Symbol(""),Ml=Symbol(""),Sf=Symbol(""),Ba=Symbol("");function As(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n,reset:e}}function Xn(n,t,e,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(us(4,{from:e,to:t})):h instanceof Error?a(h):pg(h)?a(us(2,{from:t,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=n.call(i&&i.instances[s],t,e,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Bo(n,t,e,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(Wg(a)){const c=(a.__vccOpts||a)[t];c&&s.push(Xn(c,e,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=$m(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&Xn(f,e,i,r,o)()}))}}return s}function Wg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Tc(n){const t=Zn(Ml),e=Zn(Sf),i=Pe(()=>t.resolve(Cn(n.to))),s=Pe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const f=h.findIndex(cs.bind(null,u));if(f>-1)return f;const p=Cc(l[c-2]);return c>1&&Cc(u)===p&&h[h.length-1].path!==p?h.findIndex(cs.bind(null,l[c-2])):f}),r=Pe(()=>s.value>-1&&Yg(e.params,i.value.params)),o=Pe(()=>s.value>-1&&s.value===e.matched.length-1&&df(e.params,i.value.params));function a(l={}){return jg(l)?t[Cn(n.replace)?"replace":"push"](Cn(n.to)).catch(ks):Promise.resolve()}return{route:i,href:Pe(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const qg=Pi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tc,setup(n,{slots:t}){const e=sr(Tc(n)),{options:i}=Zn(Ml),s=Pe(()=>({[Pc(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Pc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&t.default(e);return n.custom?r:ff("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Xg=qg;function jg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Yg(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!sn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Cc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Pc=(n,t,e)=>n??t??e,$g=Pi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Zn(Ba),s=Pe(()=>n.route||i.value),r=Zn(Ac,0),o=Pe(()=>{let c=Cn(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Pe(()=>s.value.matched[o.value]);$r(Ac,Pe(()=>o.value+1)),$r(Hg,a),$r(Ba,s);const l=Tn();return zs(()=>[l.value,a.value,n.name],([c,u,h],[f,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!cs(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Lc(e.default,{Component:f,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,d=ff(f,$t({},g,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Lc(e.default,{Component:d,route:c})||d}}});function Lc(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Jg=$g;function Zg(n){const t=wg(n.routes,n),e=n.parseQuery||Vg,i=n.stringifyQuery||Ec,s=n.history,r=As(),o=As(),a=As(),l=gp(zn);let c=zn;$i&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zo.bind(null,W=>""+W),h=zo.bind(null,kg),f=zo.bind(null,ao);function p(W,z){let ut,ht;return mf(W)?(ut=t.getRecordMatcher(W),ht=z):ht=W,t.addRoute(ht,ut)}function g(W){const z=t.getRecordMatcher(W);z&&t.removeRoute(z)}function m(){return t.getRoutes().map(W=>W.record)}function d(W){return!!t.getRecordMatcher(W)}function _(W,z){if(z=$t({},z||l.value),typeof W=="string"){const b=Uo(e,W,z.path),w=t.resolve({path:b.path},z),I=s.createHref(b.fullPath);return $t(b,w,{params:f(w.params),hash:ao(b.hash),redirectedFrom:void 0,href:I})}let ut;if("path"in W)ut=$t({},W,{path:Uo(e,W.path,z.path).path});else{const b=$t({},W.params);for(const w in b)b[w]==null&&delete b[w];ut=$t({},W,{params:h(W.params)}),z.params=h(z.params)}const ht=t.resolve(ut,z),vt=W.hash||"";ht.params=u(f(ht.params));const pt=Km(i,$t({},W,{hash:zg(vt),path:ht.path})),Mt=s.createHref(pt);return $t({fullPath:pt,hash:vt,query:i===Ec?Gg(W.query):W.query||{}},ht,{redirectedFrom:void 0,href:Mt})}function y(W){return typeof W=="string"?Uo(e,W,l.value.path):$t({},W)}function v(W,z){if(c!==W)return us(8,{from:z,to:W})}function x(W){return R(W)}function E(W){return x($t(y(W),{replace:!0}))}function A(W){const z=W.matched[W.matched.length-1];if(z&&z.redirect){const{redirect:ut}=z;let ht=typeof ut=="function"?ut(W):ut;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=y(ht):{path:ht},ht.params={}),$t({query:W.query,hash:W.hash,params:"path"in ht?{}:W.params},ht)}}function R(W,z){const ut=c=_(W),ht=l.value,vt=W.state,pt=W.force,Mt=W.replace===!0,b=A(ut);if(b)return R($t(y(b),{state:typeof b=="object"?$t({},vt,b.state):vt,force:pt,replace:Mt}),z||ut);const w=ut;w.redirectedFrom=z;let I;return!pt&&Qm(i,ht,ut)&&(I=us(16,{to:w,from:ht}),V(ht,ht,!0,!1)),(I?Promise.resolve(I):C(w,ht)).catch(U=>_n(U)?_n(U,2)?U:k(U):tt(U,w,ht)).then(U=>{if(U){if(_n(U,2))return R($t({replace:Mt},y(U.to),{state:typeof U.to=="object"?$t({},vt,U.to.state):vt,force:pt}),z||w)}else U=Y(w,ht,!0,Mt,vt);return D(w,ht,U),U})}function M(W,z){const ut=v(W,z);return ut?Promise.reject(ut):Promise.resolve()}function C(W,z){let ut;const[ht,vt,pt]=Kg(W,z);ut=Bo(ht.reverse(),"beforeRouteLeave",W,z);for(const b of ht)b.leaveGuards.forEach(w=>{ut.push(Xn(w,W,z))});const Mt=M.bind(null,W,z);return ut.push(Mt),Ii(ut).then(()=>{ut=[];for(const b of r.list())ut.push(Xn(b,W,z));return ut.push(Mt),Ii(ut)}).then(()=>{ut=Bo(vt,"beforeRouteUpdate",W,z);for(const b of vt)b.updateGuards.forEach(w=>{ut.push(Xn(w,W,z))});return ut.push(Mt),Ii(ut)}).then(()=>{ut=[];for(const b of W.matched)if(b.beforeEnter&&!z.matched.includes(b))if(sn(b.beforeEnter))for(const w of b.beforeEnter)ut.push(Xn(w,W,z));else ut.push(Xn(b.beforeEnter,W,z));return ut.push(Mt),Ii(ut)}).then(()=>(W.matched.forEach(b=>b.enterCallbacks={}),ut=Bo(pt,"beforeRouteEnter",W,z),ut.push(Mt),Ii(ut))).then(()=>{ut=[];for(const b of o.list())ut.push(Xn(b,W,z));return ut.push(Mt),Ii(ut)}).catch(b=>_n(b,8)?b:Promise.reject(b))}function D(W,z,ut){for(const ht of a.list())ht(W,z,ut)}function Y(W,z,ut,ht,vt){const pt=v(W,z);if(pt)return pt;const Mt=z===zn,b=$i?history.state:{};ut&&(ht||Mt?s.replace(W.fullPath,$t({scroll:Mt&&b&&b.scroll},vt)):s.push(W.fullPath,vt)),l.value=W,V(W,z,ut,Mt),k()}let nt;function X(){nt||(nt=s.listen((W,z,ut)=>{if(!St.listening)return;const ht=_(W),vt=A(ht);if(vt){R($t(vt,{replace:!0}),ht).catch(ks);return}c=ht;const pt=l.value;$i&&ag(_c(pt.fullPath,ut.delta),So()),C(ht,pt).catch(Mt=>_n(Mt,12)?Mt:_n(Mt,2)?(R(Mt.to,ht).then(b=>{_n(b,20)&&!ut.delta&&ut.type===Zs.pop&&s.go(-1,!1)}).catch(ks),Promise.reject()):(ut.delta&&s.go(-ut.delta,!1),tt(Mt,ht,pt))).then(Mt=>{Mt=Mt||Y(ht,pt,!1),Mt&&(ut.delta&&!_n(Mt,8)?s.go(-ut.delta,!1):ut.type===Zs.pop&&_n(Mt,20)&&s.go(-1,!1)),D(ht,pt,Mt)}).catch(ks)}))}let F=As(),J=As(),$;function tt(W,z,ut){k(W);const ht=J.list();return ht.length?ht.forEach(vt=>vt(W,z,ut)):console.error(W),Promise.reject(W)}function q(){return $&&l.value!==zn?Promise.resolve():new Promise((W,z)=>{F.add([W,z])})}function k(W){return $||($=!W,X(),F.list().forEach(([z,ut])=>W?ut(W):z()),F.reset()),W}function V(W,z,ut,ht){const{scrollBehavior:vt}=n;if(!$i||!vt)return Promise.resolve();const pt=!ut&&lg(_c(W.fullPath,0))||(ht||!ut)&&history.state&&history.state.scroll||null;return kh().then(()=>vt(W,z,pt)).then(Mt=>Mt&&og(Mt)).catch(Mt=>tt(Mt,W,z))}const K=W=>s.go(W);let H;const mt=new Set,St={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:d,getRoutes:m,resolve:_,options:n,push:x,replace:E,go:K,back:()=>K(-1),forward:()=>K(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:q,install(W){const z=this;W.component("RouterLink",Xg),W.component("RouterView",Jg),W.config.globalProperties.$router=z,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>Cn(l)}),$i&&!H&&l.value===zn&&(H=!0,x(s.location).catch(vt=>{}));const ut={};for(const vt in zn)ut[vt]=Pe(()=>l.value[vt]);W.provide(Ml,z),W.provide(Sf,sr(ut)),W.provide(Ba,l);const ht=W.unmount;mt.add(W),W.unmount=function(){mt.delete(W),mt.size<1&&(c=zn,nt&&nt(),nt=null,l.value=zn,H=!1,$=!1),ht()}}};return St}function Ii(n){return n.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function Kg(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>cs(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>cs(c,l))||s.push(l))}return[e,i,s]}const Qg="modulepreload",t_=function(n){return"/nova/"+n},Rc={},Bt=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link");s=Promise.all(e.map(o=>{if(o=t_(o),o in Rc)return;Rc[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let h=r.length-1;h>=0;h--){const f=r[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Qg,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},e_={path:"/css",component:rr,children:[{path:"starRate",meta:{name:"图案评分",show:!0},component:()=>Bt(()=>import("./StarRate-NY57AMx4.js"),__vite__mapDeps([0,1,2,3,4,5]))},{path:"sun",meta:{name:"小太阳",show:!0},component:()=>Bt(()=>import("./Sun-ei6IH0NT.js"),__vite__mapDeps([6,7]))},{path:"progressCube",meta:{name:"立体进度条",show:!0},component:()=>Bt(()=>import("./ProgressCube-HDymAYbh.js"),__vite__mapDeps([8,3,4,9]))},{path:"deathLoading",meta:{name:"死亡搁浅loading",show:!0},component:()=>Bt(()=>import("./DeathLoading-aACKdFiq.js"),__vite__mapDeps([10,11]))},{path:"hsCard",meta:{name:"炉石卡片",show:!0},component:()=>Bt(()=>import("./HSCard--p_iwB4J.js"),__vite__mapDeps([12,13,14,15]))},{path:"barChart",meta:{name:"css条状表",show:!1},component:()=>Bt(()=>import("./BarChart-pSmy98at.js"),__vite__mapDeps([16,17]))},{path:"water",meta:{name:"模拟水滴",show:!0},component:()=>Bt(()=>import("./Water--YK2cyjM.js"),__vite__mapDeps([18,13,14,19]))}]},n_={path:"/canvas",component:rr,children:[{path:"flowField",meta:{name:"FlowField",show:!0},component:()=>Bt(()=>import("./FlowField-zW1JHeC-.js"),__vite__mapDeps([20,1,2,21,22,13,23]))},{path:"flowFieldLine",meta:{name:"FlowFieldLine",show:!1},component:()=>Bt(()=>import("./FlowFieldLine-lHwerNUX.js"),__vite__mapDeps([24,1,2,21,22,13]))},{path:"canvasTextPoint",meta:{name:"canvasTextPoint",show:!1},component:()=>Bt(()=>import("./CanvasTextPoint-ow_7YCwJ.js"),__vite__mapDeps([25,26,14,27]))},{path:"canvasPoint",meta:{name:"图片点阵化",show:!0},component:()=>Bt(()=>import("./canvasPoint-HpGzuDSV.js"),__vite__mapDeps([28,26,13,29,14]))},{path:"flow",meta:{name:"mac锁屏flow",show:!0},component:()=>Bt(()=>import("./flow-UIRMHifx.js"),__vite__mapDeps([30,13,26,3,4,14]))}]},i_={path:"/three",component:rr,children:[{path:"threeTemplate",meta:{name:"threejs模板",show:!1},component:()=>Bt(()=>import("./THREE-template-tMPOFgEk.js"),__vite__mapDeps([31,4,32,33,34]))},{path:"cubeLine",meta:{name:"cubeLine",show:!1},component:()=>Bt(()=>import("./CubeLine-KbzLseku.js"),__vite__mapDeps([35,32,33,4,36]))},{path:"allBufferGeo",meta:{name:"allBufferGeo",show:!1},component:()=>Bt(()=>import("./AllBufferGeo-LrzmFCWi.js"),__vite__mapDeps([37,32,33,38]))},{path:"threeTextPoint",meta:{name:"threeTextPoint",show:!1},component:()=>Bt(()=>import("./ThreeTextPoint-etc2BaUF.js"),__vite__mapDeps([39,32,33,40]))},{path:"threeText",meta:{name:"threeText",show:!1},component:()=>Bt(()=>import("./TextGeo-g9jAV21B.js"),__vite__mapDeps([41,32,42,4,43]))},{path:"solarSystem",meta:{name:"threejs太阳系",show:!0},component:()=>Bt(()=>import("./SolarSystem-FZBYI9K4.js"),__vite__mapDeps([44,45,46,32,33,3,4]))},{path:"glowBall",meta:{name:"glowBall",show:!1},component:()=>Bt(()=>import("./GlowBall-EET0UEa-.js"),__vite__mapDeps([47,4,33,45,46]))},{path:"atom",meta:{name:"原子",show:!0},component:()=>Bt(()=>import("./Atom-YfLd7RDM.js"),__vite__mapDeps([48,32,33,45,46,3,4,49]))},{path:"lavaBall",meta:{name:"lavaBall",show:!1},component:()=>Bt(()=>import("./LavaBall-XUhlA6yE.js"),__vite__mapDeps([50,4,32,33,45,51]))},{path:"lensFlares",meta:{name:"透镜光线",show:!1},component:()=>Bt(()=>import("./LensFlares-0CunoogV.js"),__vite__mapDeps([52,4,32,42,53]))}]},s_={path:"/p5",component:rr,children:[{path:"flowFieldLine2",meta:{name:"flowFieldLine2",show:!1},component:()=>Bt(()=>import("./FlowFieldLine2-u89jzyp3.js"),__vite__mapDeps([54,13,1,2,55,56,22,57,29,14]))},{path:"maze",meta:{name:"随机迷宫",show:!0},component:()=>Bt(()=>import("./Maze-mGdVHfHA.js"),__vite__mapDeps([58,1,2,55,13,56]))},{path:"gradientLine",meta:{name:"gradientLine",show:!1},component:()=>Bt(()=>import("./GradientLine-OXmUxX1n.js"),__vite__mapDeps([59,1,2,55,13,56,57,29,14]))},{path:"codeRain",meta:{name:"codeRain",show:!1},component:()=>Bt(()=>import("./CodeRain--07pAeTN.js"),__vite__mapDeps([60,1,2,55,13,56]))},{path:"cross",meta:{name:"cross",show:!1},component:()=>Bt(()=>import("./Cross-UFpZWbnH.js"),__vite__mapDeps([61,13,1,2,55,56]))},{path:"musicRect",meta:{name:"musicRect",show:!0},component:()=>Bt(()=>import("./MusicRect-ubrG9M-4.js"),__vite__mapDeps([62,13,63,64,55,56]))},{path:"musicCircle",meta:{name:"musicCircle",show:!0},component:()=>Bt(()=>import("./MusicCircle-_30D_CZH.js"),__vite__mapDeps([65,13,55,56,63,64,14]))},{path:"bore",meta:{name:"般若心经",show:!0},component:()=>Bt(()=>import("./BoRe-mFdc_yp7.js"),__vite__mapDeps([66,13,55,56,67]))},{path:"tangram",meta:{name:"七巧板",show:!0},component:()=>Bt(()=>import("./Tangram-F4w5QpqQ.js"),__vite__mapDeps([68,55,13,56]))},{path:"terrain",meta:{name:"terrain",show:!1},component:()=>Bt(()=>import("./Terrain-jrArTeUr.js"),__vite__mapDeps([69,70,13,71,72]))},{path:"disperseParticle",meta:{name:"disperseParticle",show:!1},component:()=>Bt(()=>import("./DisperseParticle-JG2pmFwf.js"),__vite__mapDeps([73,13,70,71,74]))},{path:"disperseParticle2",meta:{name:"disperseParticle2",show:!1},component:()=>Bt(()=>import("./DisperseParticle2-mSAONANV.js"),__vite__mapDeps([75,13,70,71,76]))},{path:"snake",meta:{name:"贪吃蛇",show:!0},component:()=>Bt(()=>import("./Snake-AaPvrjdC.js"),__vite__mapDeps([77,13,70,71]))},{path:"lightBall",meta:{name:"lightBall",show:!1},component:()=>Bt(()=>import("./LightBall-PcojpoFW.js"),__vite__mapDeps([78,70,13,71,79]))},{path:"flappyBird",meta:{name:"flappyBird",show:!0},component:()=>Bt(()=>import("./FlappyBird-x9NfeBbI.js"),__vite__mapDeps([80,70,13,71,81]))},{path:"fireWork",meta:{name:"fireWork",show:!1},component:()=>Bt(()=>import("./Firework-cNHbw4M6.js"),__vite__mapDeps([82,13,70,71]))},{path:"pixelPicture",meta:{name:"图片像素化",show:!0},component:()=>Bt(()=>import("./PixelPicture-lgWFi9-F.js"),__vite__mapDeps([83,70,13,71,4,84]))}]},r_={class:"h-full flex justify-center items-center"},o_=An("h1",{class:"text-6xl"},"NOT FOUND",-1),a_=[o_],l_=Pi({__name:"NotFound",setup(n){return(t,e)=>(dn(),os("div",r_,a_))}});var mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function bw(n){if(n.__esModule)return n;var t=n.default;if(typeof t=="function"){var e=function i(){return this instanceof i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var s=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:function(){return n[i]}})}),e}function c_(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}var Ef=c_,u_=typeof mr=="object"&&mr&&mr.Object===Object&&mr,h_=u_,f_=h_,d_=typeof self=="object"&&self&&self.Object===Object&&self,p_=f_||d_||Function("return this")(),Af=p_,m_=Af,g_=function(){return m_.Date.now()},__=g_,x_=/\s/;function v_(n){for(var t=n.length;t--&&x_.test(n.charAt(t)););return t}var y_=v_,M_=y_,b_=/^\s+/;function S_(n){return n&&n.slice(0,M_(n)+1).replace(b_,"")}var w_=S_,E_=Af,A_=E_.Symbol,Tf=A_,Dc=Tf,Cf=Object.prototype,T_=Cf.hasOwnProperty,C_=Cf.toString,Ts=Dc?Dc.toStringTag:void 0;function P_(n){var t=T_.call(n,Ts),e=n[Ts];try{n[Ts]=void 0;var i=!0}catch{}var s=C_.call(n);return i&&(t?n[Ts]=e:delete n[Ts]),s}var L_=P_,R_=Object.prototype,D_=R_.toString;function I_(n){return D_.call(n)}var O_=I_,Ic=Tf,N_=L_,F_=O_,z_="[object Null]",U_="[object Undefined]",Oc=Ic?Ic.toStringTag:void 0;function B_(n){return n==null?n===void 0?U_:z_:Oc&&Oc in Object(n)?N_(n):F_(n)}var k_=B_;function V_(n){return n!=null&&typeof n=="object"}var G_=V_,H_=k_,W_=G_,q_="[object Symbol]";function X_(n){return typeof n=="symbol"||W_(n)&&H_(n)==q_}var j_=X_,Y_=w_,Nc=Ef,$_=j_,Fc=NaN,J_=/^[-+]0x[0-9a-f]+$/i,Z_=/^0b[01]+$/i,K_=/^0o[0-7]+$/i,Q_=parseInt;function t0(n){if(typeof n=="number")return n;if($_(n))return Fc;if(Nc(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=Nc(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=Y_(n);var e=Z_.test(n);return e||K_.test(n)?Q_(n.slice(2),e?2:8):J_.test(n)?Fc:+n}var e0=t0,n0=Ef,ko=__,zc=e0,i0="Expected a function",s0=Math.max,r0=Math.min;function o0(n,t,e){var i,s,r,o,a,l,c=0,u=!1,h=!1,f=!0;if(typeof n!="function")throw new TypeError(i0);t=zc(t)||0,n0(e)&&(u=!!e.leading,h="maxWait"in e,r=h?s0(zc(e.maxWait)||0,t):r,f="trailing"in e?!!e.trailing:f);function p(A){var R=i,M=s;return i=s=void 0,c=A,o=n.apply(M,R),o}function g(A){return c=A,a=setTimeout(_,t),u?p(A):o}function m(A){var R=A-l,M=A-c,C=t-R;return h?r0(C,r-M):C}function d(A){var R=A-l,M=A-c;return l===void 0||R>=t||R<0||h&&M>=r}function _(){var A=ko();if(d(A))return y(A);a=setTimeout(_,m(A))}function y(A){return a=void 0,f&&i?p(A):(i=s=void 0,o)}function v(){a!==void 0&&clearTimeout(a),c=0,i=l=s=a=void 0}function x(){return a===void 0?o:y(ko())}function E(){var A=ko(),R=d(A);if(i=arguments,s=this,l=A,R){if(a===void 0)return g(l);if(h)return clearTimeout(a),a=setTimeout(_,t),p(l)}return a===void 0&&(a=setTimeout(_,t)),o}return E.cancel=v,E.flush=x,E}var a0=o0;const l0=wf(a0);var Pf={exports:{}};(function(n){(function(){function t(m,d){document.addEventListener?m.addEventListener("scroll",d,!1):m.attachEvent("scroll",d)}function e(m){document.body?m():document.addEventListener?document.addEventListener("DOMContentLoaded",function d(){document.removeEventListener("DOMContentLoaded",d),m()}):document.attachEvent("onreadystatechange",function d(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",d),m())})}function i(m){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(m)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function s(m,d){m.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+d+";"}function r(m){var d=m.g.offsetWidth,_=d+100;return m.j.style.width=_+"px",m.i.scrollLeft=_,m.h.scrollLeft=m.h.scrollWidth+100,m.l!==d?(m.l=d,!0):!1}function o(m,d){function _(){var v=y;r(v)&&v.g.parentNode!==null&&d(v.l)}var y=m;t(m.h,_),t(m.i,_),r(m)}function a(m,d,_){d=d||{},_=_||window,this.family=m,this.style=d.style||"normal",this.weight=d.weight||"normal",this.stretch=d.stretch||"normal",this.context=_}var l=null,c=null,u=null,h=null;function f(m){return c===null&&(p(m)&&/Apple/.test(window.navigator.vendor)?(m=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!m&&603>parseInt(m[1],10)):c=!1),c}function p(m){return h===null&&(h=!!m.document.fonts),h}function g(m,d){var _=m.style,y=m.weight;if(u===null){var v=document.createElement("div");try{v.style.font="condensed 100px sans-serif"}catch{}u=v.style.font!==""}return[_,y,u?m.stretch:"","100px",d].join(" ")}a.prototype.load=function(m,d){var _=this,y=m||"BESbswy",v=0,x=d||3e3,E=new Date().getTime();return new Promise(function(A,R){if(p(_.context)&&!f(_.context)){var M=new Promise(function(D,Y){function nt(){new Date().getTime()-E>=x?Y(Error(""+x+"ms timeout exceeded")):_.context.document.fonts.load(g(_,'"'+_.family+'"'),y).then(function(X){1<=X.length?D():setTimeout(nt,25)},Y)}nt()}),C=new Promise(function(D,Y){v=setTimeout(function(){Y(Error(""+x+"ms timeout exceeded"))},x)});Promise.race([C,M]).then(function(){clearTimeout(v),A(_)},R)}else e(function(){function D(){var H;(H=J!=-1&&$!=-1||J!=-1&&tt!=-1||$!=-1&&tt!=-1)&&((H=J!=$&&J!=tt&&$!=tt)||(l===null&&(H=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!H&&(536>parseInt(H[1],10)||parseInt(H[1],10)===536&&11>=parseInt(H[2],10))),H=l&&(J==q&&$==q&&tt==q||J==k&&$==k&&tt==k||J==V&&$==V&&tt==V)),H=!H),H&&(K.parentNode!==null&&K.parentNode.removeChild(K),clearTimeout(v),A(_))}function Y(){if(new Date().getTime()-E>=x)K.parentNode!==null&&K.parentNode.removeChild(K),R(Error(""+x+"ms timeout exceeded"));else{var H=_.context.document.hidden;(H===!0||H===void 0)&&(J=nt.g.offsetWidth,$=X.g.offsetWidth,tt=F.g.offsetWidth,D()),v=setTimeout(Y,50)}}var nt=new i(y),X=new i(y),F=new i(y),J=-1,$=-1,tt=-1,q=-1,k=-1,V=-1,K=document.createElement("div");K.dir="ltr",s(nt,g(_,"sans-serif")),s(X,g(_,"serif")),s(F,g(_,"monospace")),K.appendChild(nt.g),K.appendChild(X.g),K.appendChild(F.g),_.context.document.body.appendChild(K),q=nt.g.offsetWidth,k=X.g.offsetWidth,V=F.g.offsetWidth,Y(),o(nt,function(H){J=H,D()}),s(nt,g(_,'"'+_.family+'",sans-serif')),o(X,function(H){$=H,D()}),s(X,g(_,'"'+_.family+'",serif')),o(F,function(H){tt=H,D()}),s(F,g(_,'"'+_.family+'",monospace'))})})},n.exports=a})()})(Pf);var c0=Pf.exports;const u0=wf(c0),h0={class:"fit-content flex flex-col items-center pointer-events-none"},f0=Pi({__name:"NavItem",props:{name:null,link:null,conDomRect:null,bg:null,show:{type:Boolean},outLink:{type:Boolean,default:!1}},setup(n,{expose:t}){const e=n,i=Tn(),s=Tn("");zs(()=>e.conDomRect,f=>{const{top:p,left:g}=i.value.getBoundingClientRect(),{top:m,left:d}=f;s.value=`-${g-d}px -${p-m}px`});function r(){if(e.outLink){window.open(e.link,"_blank");return}wd.push(e.link)}const o=Tn(!!e.show);function a(){o.value=!0}function l(){o.value=!1}const c=Pe(()=>({"box-shadow":o.value?"0px 0px 10px rgb(210, 175, 210)":"0px 0px 8px rgba(0, 0, 0, 1)"})),u=Pe(()=>({transform:o.value?"rotateY(0deg)":"rotateY(180deg)"})),h=Pe(()=>{var f;return{transform:o.value?"rotateY(180deg)":"rotateY(0deg)","background-position":s.value,"background-size":`${((f=e.conDomRect)==null?void 0:f.width)??0}px`,"background-image":`url(${e.bg})`}});return t({isHover:o,mousemove:a,mouseout:l}),(f,p)=>(dn(),os("div",{ref_key:"navItem",ref:i,class:"navItem font-ani",style:yi(Cn(c)),onMousemove:a,onMouseout:l,onClick:r},[An("div",{class:"bg pointer-events-none",style:yi(Cn(h))},null,4),An("div",{class:"content pointer-events-none",style:yi(Cn(u))},[An("div",h0,[lf(Od(n.name)+" ",1),An("div",{class:ir(["h-2px m-t-2px bg-#fff transition-duration-0.35s transition-delay-0.3s",o.value?"w-full":"w-0"])},null,2)])],4)],36))}}),d0=bo(f0,[["__scopeId","data-v-e4aa57a4"]]),Uc="/nova/assets/bg-DfOmpCHv.png",p0=Pi({__name:"NavGrid",setup(n){const t=Tn([]),e=Tn(),i=Tn();function s(){Sd.forEach(o=>{var a;o.children&&((a=o.children)==null||a.forEach(l=>{var c;if((c=l.meta)!=null&&c.show){const u={name:l.meta.name,link:`${o.path}/${l.path}`,conDomRect:e.value.getBoundingClientRect(),show:l.meta.show,bg:Uc};t.value.push(u)}}))}),t.value.push({name:"像素鸟(phaser)",link:"https://yufengjie97.github.io/learning-phaser/#/flappyBird",conDomRect:e.value.getBoundingClientRect(),outLink:!0,show:!0,bg:Uc})}function r(){i.value=e.value.getBoundingClientRect()}return pl(()=>{new u0("Patrick Hand").load().then(r),s(),window.addEventListener("resize",l0(r,500))}),(o,a)=>(dn(),os("div",{ref_key:"navGrid",ref:e,class:"navGrid"},[(dn(!0),os(He,null,$p(t.value,(l,c)=>(dn(),vo(d0,cf({key:c},l,{"con-dom-rect":i.value}),null,16,["con-dom-rect"]))),128))],512))}}),m0=bo(p0,[["__scopeId","data-v-dacb48fc"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="146",Sw={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ww={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},g0=0,Bc=1,_0=2,Lf=1,x0=2,Ns=3,hs=0,Xe=1,jn=2,Kn=0,is=1,ka=2,kc=3,Vc=4,v0=5,Ji=100,y0=101,M0=102,Gc=103,Hc=104,b0=200,S0=201,w0=202,E0=203,Rf=204,Df=205,A0=206,T0=207,C0=208,P0=209,L0=210,R0=0,D0=1,I0=2,Va=3,O0=4,N0=5,F0=6,z0=7,wo=0,U0=1,B0=2,Pn=0,k0=1,V0=2,G0=3,H0=4,W0=5,If=300,fs=301,ds=302,Ga=303,Ha=304,Eo=306,Wa=1e3,Ke=1001,qa=1002,be=1003,Wc=1004,qc=1005,We=1006,q0=1007,Ao=1008,Ei=1009,X0=1010,j0=1011,Of=1012,Y0=1013,_i=1014,xi=1015,Ks=1016,$0=1017,J0=1018,ss=1020,Z0=1021,K0=1022,Qe=1023,Q0=1024,tx=1025,Si=1026,ps=1027,ex=1028,nx=1029,ix=1030,sx=1031,rx=1033,Vo=33776,Go=33777,Ho=33778,Wo=33779,Xc=35840,jc=35841,Yc=35842,$c=35843,ox=36196,Jc=37492,Zc=37496,Kc=37808,Qc=37809,tu=37810,eu=37811,nu=37812,iu=37813,su=37814,ru=37815,ou=37816,au=37817,lu=37818,cu=37819,uu=37820,hu=37821,fu=36492,Ai=3e3,oe=3001,ax=3200,lx=3201,To=0,cx=1,En="srgb",vi="srgb-linear",qo=7680,ux=519,Xa=35044,Ew=35048,du="300 es",ja=1035;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,pu=180/Math.PI;function Ln(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function hx(n,t){return(n%t+t)%t}function Xo(n,t,e){return(1-e)*n+e*t}function mu(n){return(n&n-1)===0&&n!==0}function Ya(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],m=s[0],d=s[3],_=s[6],y=s[1],v=s[4],x=s[7],E=s[2],A=s[5],R=s[8];return r[0]=o*m+a*y+l*E,r[3]=o*d+a*v+l*A,r[6]=o*_+a*x+l*R,r[1]=c*m+u*y+h*E,r[4]=c*d+u*v+h*A,r[7]=c*_+u*x+h*R,r[2]=f*m+p*y+g*E,r[5]=f*d+p*v+g*A,r[8]=f*_+p*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=h*m,t[1]=(s*c-u*i)*m,t[2]=(a*i-s*o)*m,t[3]=f*m,t[4]=(u*e-s*l)*m,t[5]=(s*r-a*e)*m,t[6]=p*m,t[7]=(i*l-c*e)*m,t[8]=(o*e-i*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=e*r+i*l,s[3]=e*o+i*c,s[6]=e*a+i*u,s[1]=-i*r+e*l,s[4]=-i*o+e*c,s[7]=-i*a+e*u,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Nf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jo={[En]:{[vi]:wi},[vi]:{[En]:Qr}},je={legacyMode:!0,get workingColorSpace(){return vi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.legacyMode||t===e||!t||!e)return n;if(jo[t]&&jo[t][e]!==void 0){const i=jo[t][e];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ce={r:0,g:0,b:0},Ye={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Yo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function _r(n,t){return t.r=n.r,t.g=n.g,t.b=n.b,t}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,je.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=vi){return this.r=t,this.g=e,this.b=i,je.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=vi){if(t=hx(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Yo(o,r,t+1/3),this.g=Yo(o,r,t),this.b=Yo(o,r,t-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(t,e=En){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,je.toWorkingColorSpace(this,e),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,je.toWorkingColorSpace(this,e),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,u,e)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,je.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,je.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=En){const i=Ff[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return je.fromWorkingColorSpace(_r(this,ce),t),_e(ce.r*255,0,255)<<16^_e(ce.g*255,0,255)<<8^_e(ce.b*255,0,255)<<0}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=vi){je.fromWorkingColorSpace(_r(this,ce),e);const i=ce.r,s=ce.g,r=ce.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=vi){return je.fromWorkingColorSpace(_r(this,ce),e),t.r=ce.r,t.g=ce.g,t.b=ce.b,t}getStyle(t=En){return je.fromWorkingColorSpace(_r(this,ce),t),t!==En?`color(${t} ${ce.r} ${ce.g} ${ce.b})`:`rgb(${ce.r*255|0},${ce.g*255|0},${ce.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Ye),Ye.h+=t,Ye.s+=e,Ye.l+=i,this.setHSL(Ye.h,Ye.s,Ye.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ye),t.getHSL(gr);const i=Xo(Ye.h,gr.h,e),s=Xo(Ye.s,gr.s,e),r=Xo(Ye.l,gr.l,e);return this.setHSL(i,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ht.NAMES=Ff;let Oi;class zf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Qs("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(wi(e[i]/255)*255):e[i]=wi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Uf{constructor(t=null){this.isSource=!0,this.uuid=Ln(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function $o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fx=0;class Be extends vs{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=Ke,s=Ke,r=We,o=Ao,a=Qe,l=Ei,c=1,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ln(),this.name="",this.source=new Uf(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==If)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wa:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wa:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=If;class ne{constructor(t=0,e=0,i=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(p+1)/2,E=(_+1)/2,A=(u+f)/4,R=(h+m)/4,M=(g+d)/4;return v>x&&v>E?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=R/i):x>E?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=M/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=R/r,s=M/r),this.set(i,s,r,e),this}let y=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(h-m)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ti extends vs{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};this.texture=new Be(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:We,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bf extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dx extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-a;const _=l*f+c*p+u*g+h*m,y=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,_*y);d=Math.sin(d*A)/E,a=Math.sin(a*A)/E}const x=a*y;if(l=l*d+f*x,c=c*d+p*x,u=u*d+g*x,h=h*d+m*x,d===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*s-a*i,u=l*i+a*e-r*s,h=l*s+r*i-o*e,f=-r*e-o*i-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new L,gu=new or;class ys{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<e&&(e=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<e&&(e=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,i,s),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)ai.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ai)}else i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox),Zo.applyMatrix4(t.matrixWorld),this.union(Zo);const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),xr.subVectors(this.max,Cs),Ni.subVectors(t.a,Cs),Fi.subVectors(t.b,Cs),zi.subVectors(t.c,Cs),Un.subVectors(Fi,Ni),Bn.subVectors(zi,Fi),li.subVectors(Ni,zi);let e=[0,-Un.z,Un.y,0,-Bn.z,Bn.y,0,-li.z,li.y,Un.z,0,-Un.x,Bn.z,0,-Bn.x,li.z,0,-li.x,-Un.y,Un.x,0,-Bn.y,Bn.x,0,-li.y,li.x,0];return!Ko(e,Ni,Fi,zi,xr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,Ni,Fi,zi,xr))?!1:(vr.crossVectors(Un,Bn),e=[vr.x,vr.y,vr.z],Ko(e,Ni,Fi,zi,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ai.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new L,new L,new L,new L,new L,new L,new L,new L],ai=new L,Zo=new ys,Ni=new L,Fi=new L,zi=new L,Un=new L,Bn=new L,li=new L,Cs=new L,xr=new L,vr=new L,ci=new L;function Ko(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ci.fromArray(n,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),u=i.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const px=new ys,Ps=new L,Qo=new L;class ar{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):px.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Qo)),this.expandByPoint(Ps.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new L,ta=new L,yr=new L,kn=new L,ea=new L,Mr=new L,na=new L;class Sl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.direction).multiplyScalar(e).add(this.origin),vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ta.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(ta);const r=t.distanceTo(e)*.5,o=-this.direction.dot(yr),a=kn.dot(this.direction),l=-kn.dot(yr),c=kn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(yr).multiplyScalar(f).add(ta),p}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const i=vn.dot(this.direction),s=vn.dot(vn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,i,s,r){ea.subVectors(e,t),Mr.subVectors(i,t),na.crossVectors(ea,Mr);let o=this.direction.dot(na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(Mr.crossVectors(kn,Mr));if(l<0)return null;const c=a*this.direction.dot(ea.cross(kn));if(c<0||l+c>o)return null;const u=-a*kn.dot(na);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,m,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),o=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,m=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;e[0]=f+m*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;e[0]=f-m*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,m=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+m,e[1]=l*h,e[5]=m*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;e[0]=l*u,e[4]=m-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-m*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+m,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=m*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mx,t,gx)}lookAt(t,e,i){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Vn.crossVectors(i,Ne),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Vn.crossVectors(i,Ne)),Vn.normalize(),br.crossVectors(Ne,Vn),s[0]=Vn.x,s[4]=br.x,s[8]=Ne.x,s[1]=Vn.y,s[5]=br.y,s[9]=Ne.y,s[2]=Vn.z,s[6]=br.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],m=i[6],d=i[10],_=i[14],y=i[3],v=i[7],x=i[11],E=i[15],A=s[0],R=s[4],M=s[8],C=s[12],D=s[1],Y=s[5],nt=s[9],X=s[13],F=s[2],J=s[6],$=s[10],tt=s[14],q=s[3],k=s[7],V=s[11],K=s[15];return r[0]=o*A+a*D+l*F+c*q,r[4]=o*R+a*Y+l*J+c*k,r[8]=o*M+a*nt+l*$+c*V,r[12]=o*C+a*X+l*tt+c*K,r[1]=u*A+h*D+f*F+p*q,r[5]=u*R+h*Y+f*J+p*k,r[9]=u*M+h*nt+f*$+p*V,r[13]=u*C+h*X+f*tt+p*K,r[2]=g*A+m*D+d*F+_*q,r[6]=g*R+m*Y+d*J+_*k,r[10]=g*M+m*nt+d*$+_*V,r[14]=g*C+m*X+d*tt+_*K,r[3]=y*A+v*D+x*F+E*q,r[7]=y*R+v*Y+x*J+E*k,r[11]=y*M+v*nt+x*$+E*V,r[15]=y*C+v*X+x*tt+E*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],m=t[7],d=t[11],_=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+m*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+d*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+_*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],m=t[13],d=t[14],_=t[15],y=h*d*c-m*f*c+m*l*p-a*d*p-h*l*_+a*f*_,v=g*f*c-u*d*c-g*l*p+o*d*p+u*l*_-o*f*_,x=u*m*c-g*h*c+g*a*p-o*m*p-u*a*_+o*h*_,E=g*h*l-u*m*l-g*a*f+o*m*f+u*a*d-o*h*d,A=e*y+i*v+s*x+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=y*R,t[1]=(m*f*r-h*d*r-m*s*p+i*d*p+h*s*_-i*f*_)*R,t[2]=(a*d*r-m*l*r+m*s*c-i*d*c-a*s*_+i*l*_)*R,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*R,t[4]=v*R,t[5]=(u*d*r-g*f*r+g*s*p-e*d*p-u*s*_+e*f*_)*R,t[6]=(g*l*r-o*d*r-g*s*c+e*d*c+o*s*_-e*l*_)*R,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*R,t[8]=x*R,t[9]=(g*h*r-u*m*r-g*i*p+e*m*p+u*i*_-e*h*_)*R,t[10]=(o*m*r-g*a*r+g*i*c-e*m*c-o*i*_+e*a*_)*R,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*R,t[12]=E*R,t[13]=(u*m*s-g*h*s+g*i*f-e*m*f-u*i*d+e*h*d)*R,t[14]=(g*a*s-o*m*s-g*i*l+e*m*l+o*i*d-e*a*d)*R,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,m=o*u,d=o*h,_=a*h,y=l*c,v=l*u,x=l*h,E=i.x,A=i.y,R=i.z;return s[0]=(1-(m+_))*E,s[1]=(p+x)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(f+_))*A,s[6]=(d+y)*A,s[7]=0,s[8]=(g+v)*R,s[9]=(d-y)*R,s[10]=(1-(f+m))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),a=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$e.copy(this);const c=1/r,u=1/o,h=1/a;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=u,$e.elements[5]*=u,$e.elements[6]*=u,$e.elements[8]*=h,$e.elements[9]*=h,$e.elements[10]*=h,e.setFromRotationMatrix($e),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(i-s),u=(e+t)/(e-t),h=(i+s)/(i-s),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,r,o){const a=this.elements,l=1/(e-t),c=1/(i-s),u=1/(o-r),h=(e+t)*l,f=(i+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ui=new L,$e=new Qt,mx=new L(0,0,0),gx=new L(1,1,1),Vn=new L,br=new L,Ne=new L,_u=new Qt,xu=new or;class lr{constructor(t=0,e=0,i=0,s=lr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}lr.DefaultOrder="XYZ";lr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _x=0;const vu=new L,Bi=new or,yn=new Qt,Sr=new L,Ls=new L,xx=new L,vx=new or,yu=new L(1,0,0),Mu=new L(0,1,0),bu=new L(0,0,1),yx={type:"added"},Su={type:"removed"};class ge extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DefaultUp.clone();const t=new L,e=new lr,i=new or,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new qe}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ge.DefaultMatrixWorldAutoUpdate,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Sr.copy(t):Sr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Ls,Sr,this.up):yn.lookAt(Sr,Ls,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(yn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(yx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Su)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Su)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,xx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,vx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ge.DefaultUp=new L(0,1,0);ge.DefaultMatrixAutoUpdate=!0;ge.DefaultMatrixWorldAutoUpdate=!0;const Je=new L,Mn=new L,ia=new L,bn=new L,ki=new L,Vi=new L,wu=new L,sa=new L,ra=new L,oa=new L;class hn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Je.subVectors(t,e),s.cross(Je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Je.subVectors(s,e),Mn.subVectors(i,e),ia.subVectors(t,e);const o=Je.dot(Je),a=Je.dot(Mn),l=Je.dot(ia),c=Mn.dot(Mn),u=Mn.dot(ia),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,bn),l.set(0,0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l}static isFrontFacing(t,e,i,s){return Je.subVectors(i,e),Mn.subVectors(t,e),Je.cross(Mn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Je.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return hn.getUV(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ki.subVectors(s,i),Vi.subVectors(r,i),sa.subVectors(t,i);const l=ki.dot(sa),c=Vi.dot(sa);if(l<=0&&c<=0)return e.copy(i);ra.subVectors(t,s);const u=ki.dot(ra),h=Vi.dot(ra);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ki,o);oa.subVectors(t,r);const p=ki.dot(oa),g=Vi.dot(oa);if(g>=0&&p<=g)return e.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Vi,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return wu.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(wu,a);const _=1/(d+m+f);return o=m*_,a=f*_,e.copy(i).addScaledVector(ki,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Mx=0;class On extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=is,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rf,this.blendDst=Df,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const s=this[e];if(s===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==hs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wl extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new L,wr=new xt;class Re{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=Xa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Vf extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gf extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Dt extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}}let bx=0;const Ge=new Qt,aa=new ge,Gi=new L,Fe=new ys,Rs=new ys,me=new L;class te extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nf(t)?Gf:Vf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,i){return Ge.makeTranslation(t,e,i),this.applyMatrix4(Ge),this}scale(t,e,i){return Ge.makeScale(t,e,i),this.applyMatrix4(Ge),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(Fe.min,Rs.min),Fe.expandByPoint(me),me.addVectors(Fe.max,Rs.max),Fe.expandByPoint(me)):(Fe.expandByPoint(Rs.min),Fe.expandByPoint(Rs.max))}Fe.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)me.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),me.add(Gi)),s=Math.max(s,i.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new L,u[D]=new L;const h=new L,f=new L,p=new L,g=new xt,m=new xt,d=new xt,_=new L,y=new L;function v(D,Y,nt){h.fromArray(s,D*3),f.fromArray(s,Y*3),p.fromArray(s,nt*3),g.fromArray(o,D*2),m.fromArray(o,Y*2),d.fromArray(o,nt*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const X=1/(m.x*d.y-d.x*m.y);isFinite(X)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(X),y.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(X),c[D].add(_),c[Y].add(_),c[nt].add(_),u[D].add(y),u[Y].add(y),u[nt].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let D=0,Y=x.length;D<Y;++D){const nt=x[D],X=nt.start,F=nt.count;for(let J=X,$=X+F;J<$;J+=3)v(i[J+0],i[J+1],i[J+2])}const E=new L,A=new L,R=new L,M=new L;function C(D){R.fromArray(r,D*3),M.copy(R);const Y=c[D];E.copy(Y),E.sub(R.multiplyScalar(R.dot(Y))).normalize(),A.crossVectors(M,Y);const X=A.dot(u[D])<0?-1:1;l[D*4]=E.x,l[D*4+1]=E.y,l[D*4+2]=E.z,l[D*4+3]=X}for(let D=0,Y=x.length;D<Y;++D){const nt=x[D],X=nt.start,F=nt.count;for(let J=X,$=X+F;J<$;J+=3)C(i[J+0]),C(i[J+1]),C(i[J+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),m=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Re(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new te,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new Qt,Hi=new Sl,la=new ar,Gn=new L,Hn=new L,Wn=new L,ca=new L,ua=new L,ha=new L,Er=new L,Ar=new L,Tr=new L,Cr=new xt,Pr=new xt,Lr=new xt,fa=new L,Rr=new L;class en extends ge{constructor(t=new te,e=new wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),t.ray.intersectsSphere(la)===!1)||(Eu.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(Eu),i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],y=s[_.materialIndex],v=Math.max(_.start,g.start),x=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let E=v,A=x;E<A;E+=3){const R=a.getX(E),M=a.getX(E+1),C=a.getX(E+2);o=Dr(this,y,t,Hi,l,c,u,h,f,R,M,C),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,y=d;_<y;_+=3){const v=a.getX(_),x=a.getX(_+1),E=a.getX(_+2);o=Dr(this,s,t,Hi,l,c,u,h,f,v,x,E),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],y=s[_.materialIndex],v=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=v,A=x;E<A;E+=3){const R=E,M=E+1,C=E+2;o=Dr(this,y,t,Hi,l,c,u,h,f,R,M,C),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,y=d;_<y;_+=3){const v=_,x=_+1,E=_+2;o=Dr(this,s,t,Hi,l,c,u,h,f,v,x,E),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function Sx(n,t,e,i,s,r,o,a){let l;if(t.side===Xe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side!==jn,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:n}}function Dr(n,t,e,i,s,r,o,a,l,c,u,h){Gn.fromBufferAttribute(s,c),Hn.fromBufferAttribute(s,u),Wn.fromBufferAttribute(s,h);const f=n.morphTargetInfluences;if(r&&f){Er.set(0,0,0),Ar.set(0,0,0),Tr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],_=r[g];d!==0&&(ca.fromBufferAttribute(_,c),ua.fromBufferAttribute(_,u),ha.fromBufferAttribute(_,h),o?(Er.addScaledVector(ca,d),Ar.addScaledVector(ua,d),Tr.addScaledVector(ha,d)):(Er.addScaledVector(ca.sub(Gn),d),Ar.addScaledVector(ua.sub(Hn),d),Tr.addScaledVector(ha.sub(Wn),d)))}Gn.add(Er),Hn.add(Ar),Wn.add(Tr)}n.isSkinnedMesh&&(n.boneTransform(c,Gn),n.boneTransform(u,Hn),n.boneTransform(h,Wn));const p=Sx(n,t,e,i,Gn,Hn,Wn,fa);if(p){a&&(Cr.fromBufferAttribute(a,c),Pr.fromBufferAttribute(a,u),Lr.fromBufferAttribute(a,h),p.uv=hn.getUV(fa,Gn,Hn,Wn,Cr,Pr,Lr,new xt)),l&&(Cr.fromBufferAttribute(l,c),Pr.fromBufferAttribute(l,u),Lr.fromBufferAttribute(l,h),p.uv2=hn.getUV(fa,Gn,Hn,Wn,Cr,Pr,Lr,new xt));const g={a:c,b:u,c:h,normal:new L,materialIndex:0};hn.getNormal(Gn,Hn,Wn,g.normal),p.face=g}return p}class cr extends te{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function g(m,d,_,y,v,x,E,A,R,M,C){const D=x/R,Y=E/M,nt=x/2,X=E/2,F=A/2,J=R+1,$=M+1;let tt=0,q=0;const k=new L;for(let V=0;V<$;V++){const K=V*Y-X;for(let H=0;H<J;H++){const mt=H*D-nt;k[m]=mt*y,k[d]=K*v,k[_]=F,c.push(k.x,k.y,k.z),k[m]=0,k[d]=0,k[_]=A>0?1:-1,u.push(k.x,k.y,k.z),h.push(H/R),h.push(1-V/M),tt+=1}}for(let V=0;V<M;V++)for(let K=0;K<R;K++){const H=f+K+J*V,mt=f+K+J*(V+1),St=f+(K+1)+J*(V+1),W=f+(K+1)+J*V;l.push(H,mt,W),l.push(mt,St,W),q+=6}a.addGroup(p,q,C),p+=q,f+=tt}}static fromJSON(t){return new cr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ce(n){const t={};for(let e=0;e<n.length;e++){const i=ms(n[e]);for(const s in i)t[s]=i[s]}return t}function wx(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}const Ex={clone:ms,merge:Ce};var Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=wx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Hf extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ze extends Hf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pu*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=90,qi=1;class Cx extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new ze(Wi,qi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(1,0,0)),this.add(s);const r=new ze(Wi,qi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const o=new ze(Wi,qi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);const a=new ze(Wi,qi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new ze(Wi,qi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new ze(Wi,qi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Pn,t.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,s),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=p,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Wf extends Be{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Px extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cr(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:Kn});r.uniforms.tEquirect.value=e;const o=new en(s,r),a=e.minFilter;return e.minFilter===Ao&&(e.minFilter=We),new Cx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const da=new L,Lx=new L,Rx=new qe;class hi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=da.subVectors(i,e).cross(Lx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(da),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(i).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Rx.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new ar,Ir=new L;class El{constructor(t=new hi,e=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],p=i[9],g=i[10],m=i[11],d=i[12],_=i[13],y=i[14],v=i[15];return e[0].setComponents(a-s,h-l,m-f,v-d).normalize(),e[1].setComponents(a+s,h+l,m+f,v+d).normalize(),e[2].setComponents(a+r,h+c,m+p,v+_).normalize(),e[3].setComponents(a-r,h-c,m-p,v-_).normalize(),e[4].setComponents(a-o,h-u,m-g,v-y).normalize(),e[5].setComponents(a+o,h+u,m+g,v+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Dx(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,f):(e?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Al extends te{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const y=_*f-o;for(let v=0;v<c;v++){const x=v*h-r;g.push(x,-y,0),m.push(0,0,1),d.push(v/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const v=y+c*_,x=y+c*(_+1),E=y+1+c*(_+1),A=y+1+c*_;p.push(v,x,A),p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(m,3)),this.setAttribute("uv",new Dt(d,2))}static fromJSON(t){return new Al(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx="vec3 transformed = vec3( position );",kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Gx=`#ifdef USE_IRIDESCENCE
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
#endif`,Hx=`#ifdef USE_BUMPMAP
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
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
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tv=`vec3 transformedNormal = objectNormal;
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
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",ov=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
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
}`,_v=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Mv=`uniform bool receiveShadow;
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
#endif`,bv=`#if defined( USE_ENVMAP )
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
#endif`,Sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wv=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Tv=`PhysicalMaterial material;
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
#endif`,Cv=`struct PhysicalMaterial {
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
}`,Pv=`
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
#endif`,Lv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hv=`#ifdef USE_MORPHNORMALS
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
#endif`,Wv=`#ifdef USE_MORPHTARGETS
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
#endif`,qv=`#ifdef USE_MORPHTARGETS
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
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,jv=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zv=`#ifdef USE_NORMALMAP
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
#endif`,Qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dy=`float getShadowMask() {
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
}`,py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,xy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,by=`#ifdef USE_TRANSMISSION
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
#endif`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ey=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ay=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ty=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Cy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Py=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dy=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zy=`#include <common>
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
}`,Uy=`#if DEPTH_PACKING == 3200
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
}`,By=`#define DISTANCE
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
}`,ky=`#define DISTANCE
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hy=`uniform float scale;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,Xy=`uniform vec3 diffuse;
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
}`,jy=`#define LAMBERT
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
}`,Yy=`#define LAMBERT
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
}`,$y=`#define MATCAP
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
}`,Jy=`#define MATCAP
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
}`,Zy=`#define NORMAL
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
}`,Ky=`#define NORMAL
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
}`,Qy=`#define PHONG
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
}`,tM=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,nM=`#define STANDARD
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
}`,iM=`#define TOON
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
}`,sM=`#define TOON
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
}`,rM=`uniform float size;
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,lM=`uniform vec3 color;
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
}`,cM=`uniform float rotation;
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
}`,uM=`uniform vec3 diffuse;
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
}`,Ut={alphamap_fragment:Ix,alphamap_pars_fragment:Ox,alphatest_fragment:Nx,alphatest_pars_fragment:Fx,aomap_fragment:zx,aomap_pars_fragment:Ux,begin_vertex:Bx,beginnormal_vertex:kx,bsdfs:Vx,iridescence_fragment:Gx,bumpmap_pars_fragment:Hx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Xx,clipping_planes_vertex:jx,color_fragment:Yx,color_pars_fragment:$x,color_pars_vertex:Jx,color_vertex:Zx,common:Kx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:tv,displacementmap_pars_vertex:ev,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:sv,encodings_fragment:rv,encodings_pars_fragment:ov,envmap_fragment:av,envmap_common_pars_fragment:lv,envmap_pars_fragment:cv,envmap_pars_vertex:uv,envmap_physical_pars_fragment:bv,envmap_vertex:hv,fog_vertex:fv,fog_pars_vertex:dv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_fragment:_v,lightmap_pars_fragment:xv,lights_lambert_fragment:vv,lights_lambert_pars_fragment:yv,lights_pars_begin:Mv,lights_toon_fragment:Sv,lights_toon_pars_fragment:wv,lights_phong_fragment:Ev,lights_phong_pars_fragment:Av,lights_physical_fragment:Tv,lights_physical_pars_fragment:Cv,lights_fragment_begin:Pv,lights_fragment_maps:Lv,lights_fragment_end:Rv,logdepthbuf_fragment:Dv,logdepthbuf_pars_fragment:Iv,logdepthbuf_pars_vertex:Ov,logdepthbuf_vertex:Nv,map_fragment:Fv,map_pars_fragment:zv,map_particle_fragment:Uv,map_particle_pars_fragment:Bv,metalnessmap_fragment:kv,metalnessmap_pars_fragment:Vv,morphcolor_vertex:Gv,morphnormal_vertex:Hv,morphtarget_pars_vertex:Wv,morphtarget_vertex:qv,normal_fragment_begin:Xv,normal_fragment_maps:jv,normal_pars_fragment:Yv,normal_pars_vertex:$v,normal_vertex:Jv,normalmap_pars_fragment:Zv,clearcoat_normal_fragment_begin:Kv,clearcoat_normal_fragment_maps:Qv,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ey,output_fragment:ny,packing:iy,premultiplied_alpha_fragment:sy,project_vertex:ry,dithering_fragment:oy,dithering_pars_fragment:ay,roughnessmap_fragment:ly,roughnessmap_pars_fragment:cy,shadowmap_pars_fragment:uy,shadowmap_pars_vertex:hy,shadowmap_vertex:fy,shadowmask_pars_fragment:dy,skinbase_vertex:py,skinning_pars_vertex:my,skinning_vertex:gy,skinnormal_vertex:_y,specularmap_fragment:xy,specularmap_pars_fragment:vy,tonemapping_fragment:yy,tonemapping_pars_fragment:My,transmission_fragment:by,transmission_pars_fragment:Sy,uv_pars_fragment:wy,uv_pars_vertex:Ey,uv_vertex:Ay,uv2_pars_fragment:Ty,uv2_pars_vertex:Cy,uv2_vertex:Py,worldpos_vertex:Ly,background_vert:Ry,background_frag:Dy,backgroundCube_vert:Iy,backgroundCube_frag:Oy,cube_vert:Ny,cube_frag:Fy,depth_vert:zy,depth_frag:Uy,distanceRGBA_vert:By,distanceRGBA_frag:ky,equirect_vert:Vy,equirect_frag:Gy,linedashed_vert:Hy,linedashed_frag:Wy,meshbasic_vert:qy,meshbasic_frag:Xy,meshlambert_vert:jy,meshlambert_frag:Yy,meshmatcap_vert:$y,meshmatcap_frag:Jy,meshnormal_vert:Zy,meshnormal_frag:Ky,meshphong_vert:Qy,meshphong_frag:tM,meshphysical_vert:eM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:sM,points_vert:rM,points_frag:oM,shadow_vert:aM,shadow_frag:lM,sprite_vert:cM,sprite_frag:uM},yt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qe},uv2Transform:{value:new qe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}}},cn={basic:{uniforms:Ce([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ce([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ce([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ce([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ce([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ce([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ce([yt.points,yt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ce([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ce([yt.common,yt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ce([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ce([yt.sprite,yt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ce([yt.common,yt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ce([yt.lights,yt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};cn.physical={uniforms:Ce([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};function hM(n,t,e,i,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(d,_){let y=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v));const x=n.xr,E=x.getSession&&x.getSession();E&&E.environmentBlendMode==="additive"&&(v=null),v===null?m(a,l):v&&v.isColor&&(m(v,1),y=!0),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Eo)?(u===void 0&&(u=new en(new cr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ms(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new en(new Al(2,2),new ei({name:"BackgroundMaterial",uniforms:ms(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,_){i.buffers.color.setClear(d.r,d.g,d.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(a,l)},render:g}}function fM(n,t,e,i){const s=n.getParameter(34921),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(F,J,$,tt,q){let k=!1;if(o){const V=m(tt,$,J);c!==V&&(c=V,p(c.object)),k=_(F,tt,$,q),k&&y(F,tt,$,q)}else{const V=J.wireframe===!0;(c.geometry!==tt.id||c.program!==$.id||c.wireframe!==V)&&(c.geometry=tt.id,c.program=$.id,c.wireframe=V,k=!0)}q!==null&&e.update(q,34963),(k||u)&&(u=!1,M(F,J,$,tt),q!==null&&n.bindBuffer(34963,e.get(q).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function m(F,J,$){const tt=$.wireframe===!0;let q=a[F.id];q===void 0&&(q={},a[F.id]=q);let k=q[J.id];k===void 0&&(k={},q[J.id]=k);let V=k[tt];return V===void 0&&(V=d(f()),k[tt]=V),V}function d(F){const J=[],$=[],tt=[];for(let q=0;q<s;q++)J[q]=0,$[q]=0,tt[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:$,attributeDivisors:tt,object:F,attributes:{},index:null}}function _(F,J,$,tt){const q=c.attributes,k=J.attributes;let V=0;const K=$.getAttributes();for(const H in K)if(K[H].location>=0){const St=q[H];let W=k[H];if(W===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(W=F.instanceColor)),St===void 0||St.attribute!==W||W&&St.data!==W.data)return!0;V++}return c.attributesNum!==V||c.index!==tt}function y(F,J,$,tt){const q={},k=J.attributes;let V=0;const K=$.getAttributes();for(const H in K)if(K[H].location>=0){let St=k[H];St===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(St=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(St=F.instanceColor));const W={};W.attribute=St,St&&St.data&&(W.data=St.data),q[H]=W,V++}c.attributes=q,c.attributesNum=V,c.index=tt}function v(){const F=c.newAttributes;for(let J=0,$=F.length;J<$;J++)F[J]=0}function x(F){E(F,0)}function E(F,J){const $=c.newAttributes,tt=c.enabledAttributes,q=c.attributeDivisors;$[F]=1,tt[F]===0&&(n.enableVertexAttribArray(F),tt[F]=1),q[F]!==J&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,J),q[F]=J)}function A(){const F=c.newAttributes,J=c.enabledAttributes;for(let $=0,tt=J.length;$<tt;$++)J[$]!==F[$]&&(n.disableVertexAttribArray($),J[$]=0)}function R(F,J,$,tt,q,k){i.isWebGL2===!0&&($===5124||$===5125)?n.vertexAttribIPointer(F,J,$,q,k):n.vertexAttribPointer(F,J,$,tt,q,k)}function M(F,J,$,tt){if(i.isWebGL2===!1&&(F.isInstancedMesh||tt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const q=tt.attributes,k=$.getAttributes(),V=J.defaultAttributeValues;for(const K in k){const H=k[K];if(H.location>=0){let mt=q[K];if(mt===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(mt=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(mt=F.instanceColor)),mt!==void 0){const St=mt.normalized,W=mt.itemSize,z=e.get(mt);if(z===void 0)continue;const ut=z.buffer,ht=z.type,vt=z.bytesPerElement;if(mt.isInterleavedBufferAttribute){const pt=mt.data,Mt=pt.stride,b=mt.offset;if(pt.isInstancedInterleavedBuffer){for(let w=0;w<H.locationSize;w++)E(H.location+w,pt.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let w=0;w<H.locationSize;w++)x(H.location+w);n.bindBuffer(34962,ut);for(let w=0;w<H.locationSize;w++)R(H.location+w,W/H.locationSize,ht,St,Mt*vt,(b+W/H.locationSize*w)*vt)}else{if(mt.isInstancedBufferAttribute){for(let pt=0;pt<H.locationSize;pt++)E(H.location+pt,mt.meshPerAttribute);F.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let pt=0;pt<H.locationSize;pt++)x(H.location+pt);n.bindBuffer(34962,ut);for(let pt=0;pt<H.locationSize;pt++)R(H.location+pt,W/H.locationSize,ht,St,W*vt,W/H.locationSize*pt*vt)}}else if(V!==void 0){const St=V[K];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv(H.location,St);break;case 3:n.vertexAttrib3fv(H.location,St);break;case 4:n.vertexAttrib4fv(H.location,St);break;default:n.vertexAttrib1fv(H.location,St)}}}}A()}function C(){nt();for(const F in a){const J=a[F];for(const $ in J){const tt=J[$];for(const q in tt)g(tt[q].object),delete tt[q];delete J[$]}delete a[F]}}function D(F){if(a[F.id]===void 0)return;const J=a[F.id];for(const $ in J){const tt=J[$];for(const q in tt)g(tt[q].object),delete tt[q];delete J[$]}delete a[F.id]}function Y(F){for(const J in a){const $=a[J];if($[F.id]===void 0)continue;const tt=$[F.id];for(const q in tt)g(tt[q].object),delete tt[q];delete $[F.id]}}function nt(){X(),u=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:nt,resetDefaultState:X,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:x,disableUnusedAttributes:A}}function dM(n,t,e,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(s)f=n,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),e.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function pM(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),y=n.getParameter(36349),v=f>0,x=o||t.has("OES_texture_float"),E=v&&x,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:A}}function mM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new hi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||i!==0||s;return s=f,e=u(h,p,0),i=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,_=n.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const y=r?0:i,v=y*4;let x=_.clippingState||null;l.value=x,x=u(g,f,v,p);for(let E=0;E!==v;++E)x[E]=e[E];_.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<_)&&(d=new Float32Array(_));for(let v=0,x=p;v!==m;++v,x+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(d,x),d[x+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,d}}function gM(n){let t=new WeakMap;function e(o,a){return a===Ga?o.mapping=fs:a===Ha&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ga||a===Ha)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Px(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xf extends Hf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Au=[.125,.215,.35,.446,.526,.582],mi=20,pa=new Xf,Tu=new Ht;let ma=null;const fi=(1+Math.sqrt(5))/2,ji=1/fi,Cu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,fi,ji),new L(0,fi,-ji),new L(ji,0,fi),new L(-ji,0,fi),new L(fi,ji,0),new L(-fi,ji,0)];class Pu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ma=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma),t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:Ks,format:Qe,encoding:Ai,depthBuffer:!1},s=Lu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_M(r)),this._blurMaterial=xM(r,t,e)}return s}_compileMaterial(t){const e=new en(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,i,s){const a=new ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Tu),u.toneMapping=Pn,u.autoClear=!1;const p=new wl({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new en(new cr,p);let m=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,m=!0):(p.color.copy(Tu),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;Or(s,y*v,_>2?v:0,v,v),u.setRenderTarget(s),m&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===fs||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Or(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,pa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Cu[(s-1)%Cu.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):mi;d>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${mi}`);const _=[];let y=0;for(let R=0;R<mi;++R){const M=R/m,C=Math.exp(-M*M/2);_.push(C),R===0?y+=C:R<d&&(y+=2*C)}for(let R=0;R<_.length;R++)_[R]=_[R]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[s],E=3*x*(s>v-Zi?s-v+Zi:0),A=4*(this._cubeSize-x);Or(e,E,A,3*x,2*x),l.setRenderTarget(e),l.render(h,pa)}}function _M(n){const t=[],e=[],i=[];let s=n;const r=n-Zi+1+Au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Zi?l=Au[o-n+Zi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,_=1,y=new Float32Array(m*g*p),v=new Float32Array(d*g*p),x=new Float32Array(_*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,M=A>2?0:-1,C=[R,M,0,R+2/3,M,0,R+2/3,M+1,0,R,M,0,R+2/3,M+1,0,R,M+1,0];y.set(C,m*g*A),v.set(f,d*g*A);const D=[A,A,A,A,A,A];x.set(D,_*g*A)}const E=new te;E.setAttribute("position",new Re(y,m)),E.setAttribute("uv",new Re(v,d)),E.setAttribute("faceIndex",new Re(x,_)),t.push(E),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Lu(n,t,e){const i=new Ti(n,t,e);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Or(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function xM(n,t,e){const i=new Float32Array(mi),s=new L(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ru(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Du(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function vM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ga||l===Ha,u=l===fs||l===ds;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Pu(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new Pu(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function yM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function MM(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)t.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let v=0,x=y.length;v<x;v+=3){const E=y[v+0],A=y[v+1],R=y[v+2];f.push(E,A,A,R,R,E)}}else{const y=g.array;m=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const E=v+0,A=v+1,R=v+2;f.push(E,A,A,R,R,E)}}const d=new(Nf(f)?Gf:Vf)(f,1);d.version=m;const _=r.get(h);_&&t.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function bM(n,t,e,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){n.drawElements(r,p,a,f*l),e.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,f*l,g),e.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function SM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function wM(n,t){return n[0]-t[0]}function EM(n,t){return Math.abs(t[1])-Math.abs(n[1])}function AM(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new ne,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=r.get(u);if(d===void 0||d.count!==m){let J=function(){X.dispose(),r.delete(u),u.removeEventListener("dispose",J)};d!==void 0&&d.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let C=0;v===!0&&(C=1),x===!0&&(C=2),E===!0&&(C=3);let D=u.attributes.position.count*C,Y=1;D>t.maxTextureSize&&(Y=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const nt=new Float32Array(D*Y*4*m),X=new Bf(nt,D,Y,m);X.type=xi,X.needsUpdate=!0;const F=C*4;for(let $=0;$<m;$++){const tt=A[$],q=R[$],k=M[$],V=D*Y*4*$;for(let K=0;K<tt.count;K++){const H=K*F;v===!0&&(o.fromBufferAttribute(tt,K),nt[V+H+0]=o.x,nt[V+H+1]=o.y,nt[V+H+2]=o.z,nt[V+H+3]=0),x===!0&&(o.fromBufferAttribute(q,K),nt[V+H+4]=o.x,nt[V+H+5]=o.y,nt[V+H+6]=o.z,nt[V+H+7]=0),E===!0&&(o.fromBufferAttribute(k,K),nt[V+H+8]=o.x,nt[V+H+9]=o.y,nt[V+H+10]=o.z,nt[V+H+11]=k.itemSize===4?o.w:1)}}d={count:m,texture:X,size:new xt(D,Y)},r.set(u,d),u.addEventListener("dispose",J)}let _=0;for(let v=0;v<p.length;v++)_+=p[v];const y=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const g=p===void 0?0:p.length;let m=i[u.id];if(m===void 0||m.length!==g){m=[];for(let x=0;x<g;x++)m[x]=[x,0];i[u.id]=m}for(let x=0;x<g;x++){const E=m[x];E[0]=x,E[1]=p[x]}m.sort(EM);for(let x=0;x<8;x++)x<g&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(wM);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const E=a[x],A=E[0],R=E[1];A!==Number.MAX_SAFE_INTEGER&&R?(d&&u.getAttribute("morphTarget"+x)!==d[A]&&u.setAttribute("morphTarget"+x,d[A]),_&&u.getAttribute("morphNormal"+x)!==_[A]&&u.setAttribute("morphNormal"+x,_[A]),s[x]=R,y+=R):(d&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),_&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}const v=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function TM(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);return s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const jf=new Be,Yf=new Bf,$f=new dx,Jf=new Wf,Iu=[],Ou=[],Nu=new Float32Array(16),Fu=new Float32Array(9),zu=new Float32Array(4);function Ms(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function he(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Co(n,t){let e=Ou[t];e===void 0&&(e=new Int32Array(t),Ou[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function CM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function PM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2fv(this.addr,t),fe(e,t)}}function LM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;n.uniform3fv(this.addr,t),fe(e,t)}}function RM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4fv(this.addr,t),fe(e,t)}}function DM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),fe(e,i)}}function IM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Fu.set(i),n.uniformMatrix3fv(this.addr,!1,Fu),fe(e,i)}}function OM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(he(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(he(e,i))return;Nu.set(i),n.uniformMatrix4fv(this.addr,!1,Nu),fe(e,i)}}function NM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function FM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2iv(this.addr,t),fe(e,t)}}function zM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3iv(this.addr,t),fe(e,t)}}function UM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4iv(this.addr,t),fe(e,t)}}function BM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function kM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;n.uniform2uiv(this.addr,t),fe(e,t)}}function VM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;n.uniform3uiv(this.addr,t),fe(e,t)}}function GM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;n.uniform4uiv(this.addr,t),fe(e,t)}}function HM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2D(t||jf,s)}function WM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||$f,s)}function qM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Jf,s)}function XM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yf,s)}function jM(n){switch(n){case 5126:return CM;case 35664:return PM;case 35665:return LM;case 35666:return RM;case 35674:return DM;case 35675:return IM;case 35676:return OM;case 5124:case 35670:return NM;case 35667:case 35671:return FM;case 35668:case 35672:return zM;case 35669:case 35673:return UM;case 5125:return BM;case 36294:return kM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return XM}}function YM(n,t){n.uniform1fv(this.addr,t)}function $M(n,t){const e=Ms(t,this.size,2);n.uniform2fv(this.addr,e)}function JM(n,t){const e=Ms(t,this.size,3);n.uniform3fv(this.addr,e)}function ZM(n,t){const e=Ms(t,this.size,4);n.uniform4fv(this.addr,e)}function KM(n,t){const e=Ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function QM(n,t){const e=Ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tb(n,t){const e=Ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function eb(n,t){n.uniform1iv(this.addr,t)}function nb(n,t){n.uniform2iv(this.addr,t)}function ib(n,t){n.uniform3iv(this.addr,t)}function sb(n,t){n.uniform4iv(this.addr,t)}function rb(n,t){n.uniform1uiv(this.addr,t)}function ob(n,t){n.uniform2uiv(this.addr,t)}function ab(n,t){n.uniform3uiv(this.addr,t)}function lb(n,t){n.uniform4uiv(this.addr,t)}function cb(n,t,e){const i=this.cache,s=t.length,r=Co(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jf,r[o])}function ub(n,t,e){const i=this.cache,s=t.length,r=Co(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$f,r[o])}function hb(n,t,e){const i=this.cache,s=t.length,r=Co(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jf,r[o])}function fb(n,t,e){const i=this.cache,s=t.length,r=Co(e,s);he(i,r)||(n.uniform1iv(this.addr,r),fe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yf,r[o])}function db(n){switch(n){case 5126:return YM;case 35664:return $M;case 35665:return JM;case 35666:return ZM;case 35674:return KM;case 35675:return QM;case 35676:return tb;case 5124:case 35670:return eb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return sb;case 5125:return rb;case 36294:return ob;case 36295:return ab;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return fb}}class pb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=jM(e.type)}}class mb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=db(e.type)}}class gb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Uu(n,t){n.seq.push(t),n.map[t.id]=t}function _b(n,t,e){const i=n.name,s=i.length;for(ga.lastIndex=0;;){const r=ga.exec(i),o=ga.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Uu(e,c===void 0?new pb(a,n,t):new mb(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new gb(a),Uu(e,h)),e=h}}}class to{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_b(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Bu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let xb=0;function vb(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function yb(n){switch(n){case Ai:return["Linear","( value )"];case oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function ku(n,t,e){const i=n.getShaderParameter(t,35713),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+vb(n.getShaderSource(t),o)}else return s}function Mb(n,t){const e=yb(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function bb(n,t){let e;switch(t){case k0:e="Linear";break;case V0:e="Reinhard";break;case G0:e="OptimizedCineon";break;case H0:e="ACESFilmic";break;case W0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Sb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function wb(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Eb(n,t){const e={},i=n.getProgramParameter(t,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Fs(n){return n!==""}function Vu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(n){return n.replace(Ab,Tb)}function Tb(n,t){const e=Ut[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return $a(e)}const Cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(n){return n.replace(Cb,Pb)}function Pb(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wu(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lb(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===x0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ns&&(t="SHADOWMAP_TYPE_VSM"),t}function Rb(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fs:case ds:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Db(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function Ib(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wo:t="ENVMAP_BLENDING_MULTIPLY";break;case U0:t="ENVMAP_BLENDING_MIX";break;case B0:t="ENVMAP_BLENDING_ADD";break}return t}function Ob(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Nb(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Lb(e),c=Rb(e),u=Db(e),h=Ib(e),f=Ob(e),p=e.isWebGL2?"":Sb(e),g=wb(r),m=s.createProgram();let d,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(Fs).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(Fs).join(`
`),_.length>0&&(_+=`
`)):(d=[Wu(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),_=[p,Wu(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Pn?bb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.encodings_pars_fragment,Mb("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),o=$a(o),o=Vu(o,e),o=Gu(o,e),a=$a(a),a=Vu(a,e),a=Gu(a,e),o=Hu(o),a=Hu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=y+d+o,x=y+_+a,E=Bu(s,35633,v),A=Bu(s,35632,x);if(s.attachShader(m,E),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),n.debug.checkShaderErrors){const C=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(E).trim(),Y=s.getShaderInfoLog(A).trim();let nt=!0,X=!0;if(s.getProgramParameter(m,35714)===!1){nt=!1;const F=ku(s,E,"vertex"),J=ku(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+F+`
`+J)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||Y==="")&&(X=!1);X&&(this.diagnostics={runnable:nt,programLog:C,vertexShader:{log:D,prefix:d},fragmentShader:{log:Y,prefix:_}})}s.deleteShader(E),s.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new to(s,m)),R};let M;return this.getAttributes=function(){return M===void 0&&(M=Eb(s,m)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=xb++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}let Fb=0;class zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ub(t),e.set(t,i)),i}}class Ub{constructor(t){this.id=Fb++,this.code=t,this.usedTimes=0}}function Bb(n,t,e,i,s,r,o){const a=new kf,l=new zb,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,C,D,Y,nt){const X=Y.fog,F=nt.geometry,J=M.isMeshStandardMaterial?Y.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||J),tt=$&&$.mapping===Eo?$.image.height:null,q=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const k=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=k!==void 0?k.length:0;let K=0;F.morphAttributes.position!==void 0&&(K=1),F.morphAttributes.normal!==void 0&&(K=2),F.morphAttributes.color!==void 0&&(K=3);let H,mt,St,W;if(q){const Mt=cn[q];H=Mt.vertexShader,mt=Mt.fragmentShader}else H=M.vertexShader,mt=M.fragmentShader,l.update(M),St=l.getVertexShaderID(M),W=l.getFragmentShaderID(M);const z=n.getRenderTarget(),ut=M.alphaTest>0,ht=M.clearcoat>0,vt=M.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:M.type,vertexShader:H,fragmentShader:mt,defines:M.defines,customVertexShaderID:St,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:nt.isInstancedMesh===!0,instancingColor:nt.isInstancedMesh===!0&&nt.instanceColor!==null,supportsVertexTextures:f,outputEncoding:z===null?n.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Ai,map:!!M.map,matcap:!!M.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:tt,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===cx,tangentSpaceNormalMap:M.normalMapType===To,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===oe,clearcoat:ht,clearcoatMap:ht&&!!M.clearcoatMap,clearcoatRoughnessMap:ht&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ht&&!!M.clearcoatNormalMap,iridescence:vt,iridescenceMap:vt&&!!M.iridescenceMap,iridescenceThicknessMap:vt&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===is,alphaMap:!!M.alphaMap,alphaTest:ut,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!F.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!X,useFog:M.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:nt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:K,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Pn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jn,flipSided:M.side===Xe,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)C.push(D),C.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(C,M),y(C,M),C.push(n.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function _(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.combine),M.push(C.vertexUvs),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function y(M,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),M.push(a.mask)}function v(M){const C=g[M.type];let D;if(C){const Y=cn[C];D=Ex.clone(Y.uniforms)}else D=M.uniforms;return D}function x(M,C){let D;for(let Y=0,nt=c.length;Y<nt;Y++){const X=c[Y];if(X.cacheKey===C){D=X,++D.usedTimes;break}}return D===void 0&&(D=new Nb(n,C,M,r),c.push(D)),D}function E(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:x,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:R}}function kb(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Vb(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,m,d){let _=n[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},n[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=d),t++,_}function a(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?i.push(_):p.transparent===!0?s.push(_):e.push(_)}function l(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||Vb),i.length>1&&i.sort(f||qu),s.length>1&&s.sort(f||qu)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Gb(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Xu,n.set(i,[o])):s>=r.length?(o=new Xu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Hb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Wb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let qb=0;function Xb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jb(n,t){const e=new Hb,i=Wb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,o=new Qt,a=new Qt;function l(u,h){let f=0,p=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let m=0,d=0,_=0,y=0,v=0,x=0,E=0,A=0,R=0,M=0;u.sort(Xb);const C=h!==!0?Math.PI:1;for(let Y=0,nt=u.length;Y<nt;Y++){const X=u[Y],F=X.color,J=X.intensity,$=X.distance,tt=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)f+=F.r*J*C,p+=F.g*J*C,g+=F.b*J*C;else if(X.isLightProbe)for(let q=0;q<9;q++)s.probe[q].addScaledVector(X.sh.coefficients[q],J);else if(X.isDirectionalLight){const q=e.get(X);if(q.color.copy(X.color).multiplyScalar(X.intensity*C),X.castShadow){const k=X.shadow,V=i.get(X);V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,s.directionalShadow[m]=V,s.directionalShadowMap[m]=tt,s.directionalShadowMatrix[m]=X.shadow.matrix,x++}s.directional[m]=q,m++}else if(X.isSpotLight){const q=e.get(X);q.position.setFromMatrixPosition(X.matrixWorld),q.color.copy(F).multiplyScalar(J*C),q.distance=$,q.coneCos=Math.cos(X.angle),q.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),q.decay=X.decay,s.spot[_]=q;const k=X.shadow;if(X.map&&(s.spotLightMap[R]=X.map,R++,k.updateMatrices(X),X.castShadow&&M++),s.spotLightMatrix[_]=k.matrix,X.castShadow){const V=i.get(X);V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,s.spotShadow[_]=V,s.spotShadowMap[_]=tt,A++}_++}else if(X.isRectAreaLight){const q=e.get(X);q.color.copy(F).multiplyScalar(J),q.halfWidth.set(X.width*.5,0,0),q.halfHeight.set(0,X.height*.5,0),s.rectArea[y]=q,y++}else if(X.isPointLight){const q=e.get(X);if(q.color.copy(X.color).multiplyScalar(X.intensity*C),q.distance=X.distance,q.decay=X.decay,X.castShadow){const k=X.shadow,V=i.get(X);V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,s.pointShadow[d]=V,s.pointShadowMap[d]=tt,s.pointShadowMatrix[d]=X.shadow.matrix,E++}s.point[d]=q,d++}else if(X.isHemisphereLight){const q=e.get(X);q.skyColor.copy(X.color).multiplyScalar(J*C),q.groundColor.copy(X.groundColor).multiplyScalar(J*C),s.hemi[v]=q,v++}}y>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==m||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==y||D.hemiLength!==v||D.numDirectionalShadows!==x||D.numPointShadows!==E||D.numSpotShadows!==A||D.numSpotMaps!==R)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=y,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=A+R-M,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=M,D.directionalLength=m,D.pointLength=d,D.spotLength=_,D.rectAreaLength=y,D.hemiLength=v,D.numDirectionalShadows=x,D.numPointShadows=E,D.numSpotShadows=A,D.numSpotMaps=R,s.version=qb++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const _=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const x=u[y];if(x.isDirectionalLight){const E=s.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),f++}else if(x.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const E=s.rectArea[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(_),a.identity(),o.copy(x.matrixWorld),o.premultiply(_),a.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(_),p++}else if(x.isHemisphereLight){const E=s.hemi[d];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function ju(n,t){const e=new jb(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Yb(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new ju(n,t),e.set(r,[l])):o>=a.length?(l=new ju(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class $b extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jb extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kb=`uniform sampler2D shadow_pass;
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
}`;function Qb(n,t,e){let i=new El;const s=new xt,r=new xt,o=new ne,a=new $b({depthPacking:lx}),l=new Jb,c={},u=e.maxTextureSize,h={0:Xe,1:hs,2:jn},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Zb,fragmentShader:Kb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new te;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new en(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lf,this.render=function(x,E,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const R=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Kn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let Y=0,nt=x.length;Y<nt;Y++){const X=x[Y],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const J=F.getFrameExtents();if(s.multiply(J),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,F.mapSize.y=r.y)),F.map===null){const tt=this.type!==Ns?{minFilter:be,magFilter:be}:{};F.map=new Ti(s.x,s.y,tt),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const $=F.getViewportCount();for(let tt=0;tt<$;tt++){const q=F.getViewport(tt);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),D.viewport(o),F.updateMatrices(X,tt),i=F.getFrustum(),v(E,A,F.camera,X,this.type)}F.isPointLightShadow!==!0&&this.type===Ns&&_(F,A),F.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(R,M,C)};function _(x,E){const A=t.update(m);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(E,null,A,f,m,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(E,null,A,p,m,null)}function y(x,E,A,R,M,C){let D=null;const Y=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(Y!==void 0?D=Y:D=A.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const nt=D.uuid,X=E.uuid;let F=c[nt];F===void 0&&(F={},c[nt]=F);let J=F[X];J===void 0&&(J=D.clone(),F[X]=J),D=J}return D.visible=E.visible,D.wireframe=E.wireframe,C===Ns?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:h[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaTest,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=R,D.farDistance=M),D}function v(x,E,A,R,M){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===Ns)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const Y=t.update(x),nt=x.material;if(Array.isArray(nt)){const X=Y.groups;for(let F=0,J=X.length;F<J;F++){const $=X[F],tt=nt[$.materialIndex];if(tt&&tt.visible){const q=y(x,tt,R,A.near,A.far,M);n.renderBufferDirect(A,null,Y,q,x,$)}}}else if(nt.visible){const X=y(x,nt,R,A.near,A.far,M);n.renderBufferDirect(A,null,Y,X,x,null)}}const D=x.children;for(let Y=0,nt=D.length;Y<nt;Y++)v(D[Y],E,A,R,M)}}function tS(n,t,e){const i=e.isWebGL2;function s(){let N=!1;const at=new ne;let _t=null;const Et=new ne(0,0,0,0);return{setMask:function(Ct){_t!==Ct&&!N&&(n.colorMask(Ct,Ct,Ct,Ct),_t=Ct)},setLocked:function(Ct){N=Ct},setClear:function(Ct,qt,pe,ye,ni){ni===!0&&(Ct*=ye,qt*=ye,pe*=ye),at.set(Ct,qt,pe,ye),Et.equals(at)===!1&&(n.clearColor(Ct,qt,pe,ye),Et.copy(at))},reset:function(){N=!1,_t=null,Et.set(-1,0,0,0)}}}function r(){let N=!1,at=null,_t=null,Et=null;return{setTest:function(Ct){Ct?ut(2929):ht(2929)},setMask:function(Ct){at!==Ct&&!N&&(n.depthMask(Ct),at=Ct)},setFunc:function(Ct){if(_t!==Ct){switch(Ct){case R0:n.depthFunc(512);break;case D0:n.depthFunc(519);break;case I0:n.depthFunc(513);break;case Va:n.depthFunc(515);break;case O0:n.depthFunc(514);break;case N0:n.depthFunc(518);break;case F0:n.depthFunc(516);break;case z0:n.depthFunc(517);break;default:n.depthFunc(515)}_t=Ct}},setLocked:function(Ct){N=Ct},setClear:function(Ct){Et!==Ct&&(n.clearDepth(Ct),Et=Ct)},reset:function(){N=!1,at=null,_t=null,Et=null}}}function o(){let N=!1,at=null,_t=null,Et=null,Ct=null,qt=null,pe=null,ye=null,ni=null;return{setTest:function(ee){N||(ee?ut(2960):ht(2960))},setMask:function(ee){at!==ee&&!N&&(n.stencilMask(ee),at=ee)},setFunc:function(ee,gn,ke){(_t!==ee||Et!==gn||Ct!==ke)&&(n.stencilFunc(ee,gn,ke),_t=ee,Et=gn,Ct=ke)},setOp:function(ee,gn,ke){(qt!==ee||pe!==gn||ye!==ke)&&(n.stencilOp(ee,gn,ke),qt=ee,pe=gn,ye=ke)},setLocked:function(ee){N=ee},setClear:function(ee){ni!==ee&&(n.clearStencil(ee),ni=ee)},reset:function(){N=!1,at=null,_t=null,Et=null,Ct=null,qt=null,pe=null,ye=null,ni=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,_=!1,y=null,v=null,x=null,E=null,A=null,R=null,M=null,C=!1,D=null,Y=null,nt=null,X=null,F=null;const J=n.getParameter(35661);let $=!1,tt=0;const q=n.getParameter(7938);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=tt>=2);let k=null,V={};const K=n.getParameter(3088),H=n.getParameter(2978),mt=new ne().fromArray(K),St=new ne().fromArray(H);function W(N,at,_t){const Et=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(N,Ct),n.texParameteri(N,10241,9728),n.texParameteri(N,10240,9728);for(let qt=0;qt<_t;qt++)n.texImage2D(at+qt,0,6408,1,1,0,6408,5121,Et);return Ct}const z={};z[3553]=W(3553,3553,1),z[34067]=W(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ut(2929),l.setFunc(Va),B(!1),it(Bc),ut(2884),I(Kn);function ut(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function ht(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function vt(N,at){return p[N]!==at?(n.bindFramebuffer(N,at),p[N]=at,i&&(N===36009&&(p[36160]=at),N===36160&&(p[36009]=at)),!0):!1}function pt(N,at){let _t=m,Et=!1;if(N)if(_t=g.get(at),_t===void 0&&(_t=[],g.set(at,_t)),N.isWebGLMultipleRenderTargets){const Ct=N.texture;if(_t.length!==Ct.length||_t[0]!==36064){for(let qt=0,pe=Ct.length;qt<pe;qt++)_t[qt]=36064+qt;_t.length=Ct.length,Et=!0}}else _t[0]!==36064&&(_t[0]=36064,Et=!0);else _t[0]!==1029&&(_t[0]=1029,Et=!0);Et&&(e.isWebGL2?n.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function Mt(N){return d!==N?(n.useProgram(N),d=N,!0):!1}const b={[Ji]:32774,[y0]:32778,[M0]:32779};if(i)b[Gc]=32775,b[Hc]=32776;else{const N=t.get("EXT_blend_minmax");N!==null&&(b[Gc]=N.MIN_EXT,b[Hc]=N.MAX_EXT)}const w={[b0]:0,[S0]:1,[w0]:768,[Rf]:770,[L0]:776,[C0]:774,[A0]:772,[E0]:769,[Df]:771,[P0]:775,[T0]:773};function I(N,at,_t,Et,Ct,qt,pe,ye){if(N===Kn){_===!0&&(ht(3042),_=!1);return}if(_===!1&&(ut(3042),_=!0),N!==v0){if(N!==y||ye!==C){if((v!==Ji||A!==Ji)&&(n.blendEquation(32774),v=Ji,A=Ji),ye)switch(N){case is:n.blendFuncSeparate(1,771,1,771);break;case ka:n.blendFunc(1,1);break;case kc:n.blendFuncSeparate(0,769,0,1);break;case Vc:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case is:n.blendFuncSeparate(770,771,1,771);break;case ka:n.blendFunc(770,1);break;case kc:n.blendFuncSeparate(0,769,0,1);break;case Vc:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,E=null,R=null,M=null,y=N,C=ye}return}Ct=Ct||at,qt=qt||_t,pe=pe||Et,(at!==v||Ct!==A)&&(n.blendEquationSeparate(b[at],b[Ct]),v=at,A=Ct),(_t!==x||Et!==E||qt!==R||pe!==M)&&(n.blendFuncSeparate(w[_t],w[Et],w[qt],w[pe]),x=_t,E=Et,R=qt,M=pe),y=N,C=null}function U(N,at){N.side===jn?ht(2884):ut(2884);let _t=N.side===Xe;at&&(_t=!_t),B(_t),N.blending===is&&N.transparent===!1?I(Kn):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Et=N.stencilWrite;c.setTest(Et),Et&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Z(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ut(32926):ht(32926)}function B(N){D!==N&&(N?n.frontFace(2304):n.frontFace(2305),D=N)}function it(N){N!==g0?(ut(2884),N!==Y&&(N===Bc?n.cullFace(1029):N===_0?n.cullFace(1028):n.cullFace(1032))):ht(2884),Y=N}function lt(N){N!==nt&&($&&n.lineWidth(N),nt=N)}function Z(N,at,_t){N?(ut(32823),(X!==at||F!==_t)&&(n.polygonOffset(at,_t),X=at,F=_t)):ht(32823)}function ft(N){N?ut(3089):ht(3089)}function st(N){N===void 0&&(N=33984+J-1),k!==N&&(n.activeTexture(N),k=N)}function T(N,at,_t){_t===void 0&&(k===null?_t=33984+J-1:_t=k);let Et=V[_t];Et===void 0&&(Et={type:void 0,texture:void 0},V[_t]=Et),(Et.type!==N||Et.texture!==at)&&(k!==_t&&(n.activeTexture(_t),k=_t),n.bindTexture(N,at||z[N]),Et.type=N,Et.texture=at)}function S(){const N=V[k];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(N){mt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),mt.copy(N))}function wt(N){St.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),St.copy(N))}function It(N,at){let _t=h.get(at);_t===void 0&&(_t=new WeakMap,h.set(at,_t));let Et=_t.get(N);Et===void 0&&(Et=n.getUniformBlockIndex(at,N.name),_t.set(N,Et))}function Jt(N,at){const Et=h.get(at).get(N);u.get(N)!==Et&&(n.uniformBlockBinding(at,Et,N.__bindingPointIndex),u.set(N,Et))}function de(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},k=null,V={},p={},g=new WeakMap,m=[],d=null,_=!1,y=null,v=null,x=null,E=null,A=null,R=null,M=null,C=!1,D=null,Y=null,nt=null,X=null,F=null,mt.set(0,0,n.canvas.width,n.canvas.height),St.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ut,disable:ht,bindFramebuffer:vt,drawBuffers:pt,useProgram:Mt,setBlending:I,setMaterial:U,setFlipSided:B,setCullFace:it,setLineWidth:lt,setPolygonOffset:Z,setScissorTest:ft,activeTexture:st,bindTexture:T,unbindTexture:S,compressedTexImage2D:O,compressedTexImage3D:Q,texImage2D:Rt,texImage3D:At,updateUBOMapping:It,uniformBlockBinding:Jt,texStorage2D:et,texStorage3D:Tt,texSubImage2D:ot,texSubImage3D:dt,compressedTexSubImage2D:bt,compressedTexSubImage3D:gt,scissor:Pt,viewport:wt,reset:de}}function eS(n,t,e,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,S){return _?new OffscreenCanvas(T,S):Qs("canvas")}function v(T,S,O,Q){let ot=1;if((T.width>Q||T.height>Q)&&(ot=Q/Math.max(T.width,T.height)),ot<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const dt=S?Ya:Math.floor,bt=dt(ot*T.width),gt=dt(ot*T.height);m===void 0&&(m=y(bt,gt));const et=O?y(bt,gt):m;return et.width=bt,et.height=gt,et.getContext("2d").drawImage(T,0,0,bt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+bt+"x"+gt+")."),et}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function x(T){return mu(T.width)&&mu(T.height)}function E(T){return a?!1:T.wrapS!==Ke||T.wrapT!==Ke||T.minFilter!==be&&T.minFilter!==We}function A(T,S){return T.generateMipmaps&&S&&T.minFilter!==be&&T.minFilter!==We}function R(T){n.generateMipmap(T)}function M(T,S,O,Q,ot=!1){if(a===!1)return S;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt=S;return S===6403&&(O===5126&&(dt=33326),O===5131&&(dt=33325),O===5121&&(dt=33321)),S===33319&&(O===5126&&(dt=33328),O===5131&&(dt=33327),O===5121&&(dt=33323)),S===6408&&(O===5126&&(dt=34836),O===5131&&(dt=34842),O===5121&&(dt=Q===oe&&ot===!1?35907:32856),O===32819&&(dt=32854),O===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function C(T,S,O){return A(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==be&&T.minFilter!==We?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function D(T){return T===be||T===Wc||T===qc?9728:9729}function Y(T){const S=T.target;S.removeEventListener("dispose",Y),X(S),S.isVideoTexture&&g.delete(S)}function nt(T){const S=T.target;S.removeEventListener("dispose",nt),J(S)}function X(T){const S=i.get(T);if(S.__webglInit===void 0)return;const O=T.source,Q=d.get(O);if(Q){const ot=Q[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&F(T),Object.keys(Q).length===0&&d.delete(O)}i.remove(T)}function F(T){const S=i.get(T);n.deleteTexture(S.__webglTexture);const O=T.source,Q=d.get(O);delete Q[S.__cacheKey],o.memory.textures--}function J(T){const S=T.texture,O=i.get(T),Q=i.get(S);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++)n.deleteFramebuffer(O.__webglFramebuffer[ot]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ot]);else{if(n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ot=0;ot<O.__webglColorRenderbuffer.length;ot++)O.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[ot]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ot=0,dt=S.length;ot<dt;ot++){const bt=i.get(S[ot]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(S[ot])}i.remove(S),i.remove(T)}let $=0;function tt(){$=0}function q(){const T=$;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),$+=1,T}function k(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function V(T,S){const O=i.get(T);if(T.isVideoTexture&&ft(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(O,T,S);return}}e.bindTexture(3553,O.__webglTexture,33984+S)}function K(T,S){const O=i.get(T);if(T.version>0&&O.__version!==T.version){ht(O,T,S);return}e.bindTexture(35866,O.__webglTexture,33984+S)}function H(T,S){const O=i.get(T);if(T.version>0&&O.__version!==T.version){ht(O,T,S);return}e.bindTexture(32879,O.__webglTexture,33984+S)}function mt(T,S){const O=i.get(T);if(T.version>0&&O.__version!==T.version){vt(O,T,S);return}e.bindTexture(34067,O.__webglTexture,33984+S)}const St={[Wa]:10497,[Ke]:33071,[qa]:33648},W={[be]:9728,[Wc]:9984,[qc]:9986,[We]:9729,[q0]:9985,[Ao]:9987};function z(T,S,O){if(O?(n.texParameteri(T,10242,St[S.wrapS]),n.texParameteri(T,10243,St[S.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,St[S.wrapR]),n.texParameteri(T,10240,W[S.magFilter]),n.texParameteri(T,10241,W[S.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(S.wrapS!==Ke||S.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,D(S.magFilter)),n.texParameteri(T,10241,D(S.minFilter)),S.minFilter!==be&&S.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(S.type===xi&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ks&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ut(T,S){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",Y));const Q=S.source;let ot=d.get(Q);ot===void 0&&(ot={},d.set(Q,ot));const dt=k(S);if(dt!==T.__cacheKey){ot[dt]===void 0&&(ot[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ot[dt].usedTimes++;const bt=ot[T.__cacheKey];bt!==void 0&&(ot[T.__cacheKey].usedTimes--,bt.usedTimes===0&&F(S)),T.__cacheKey=dt,T.__webglTexture=ot[dt].texture}return O}function ht(T,S,O){let Q=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=35866),S.isData3DTexture&&(Q=32879);const ot=ut(T,S),dt=S.source;e.bindTexture(Q,T.__webglTexture,33984+O);const bt=i.get(dt);if(dt.version!==bt.__version||ot===!0){e.activeTexture(33984+O),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const gt=E(S)&&x(S.image)===!1;let et=v(S.image,gt,!1,u);et=st(S,et);const Tt=x(et)||a,Rt=r.convert(S.format,S.encoding);let At=r.convert(S.type),Pt=M(S.internalFormat,Rt,At,S.encoding,S.isVideoTexture);z(Q,S,Tt);let wt;const It=S.mipmaps,Jt=a&&S.isVideoTexture!==!0,de=bt.__version===void 0||ot===!0,N=C(S,et,Tt);if(S.isDepthTexture)Pt=6402,a?S.type===xi?Pt=36012:S.type===_i?Pt=33190:S.type===ss?Pt=35056:Pt=33189:S.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Si&&Pt===6402&&S.type!==Of&&S.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=_i,At=r.convert(S.type)),S.format===ps&&Pt===6402&&(Pt=34041,S.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ss,At=r.convert(S.type))),de&&(Jt?e.texStorage2D(3553,1,Pt,et.width,et.height):e.texImage2D(3553,0,Pt,et.width,et.height,0,Rt,At,null));else if(S.isDataTexture)if(It.length>0&&Tt){Jt&&de&&e.texStorage2D(3553,N,Pt,It[0].width,It[0].height);for(let at=0,_t=It.length;at<_t;at++)wt=It[at],Jt?e.texSubImage2D(3553,at,0,0,wt.width,wt.height,Rt,At,wt.data):e.texImage2D(3553,at,Pt,wt.width,wt.height,0,Rt,At,wt.data);S.generateMipmaps=!1}else Jt?(de&&e.texStorage2D(3553,N,Pt,et.width,et.height),e.texSubImage2D(3553,0,0,0,et.width,et.height,Rt,At,et.data)):e.texImage2D(3553,0,Pt,et.width,et.height,0,Rt,At,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&de&&e.texStorage3D(35866,N,Pt,It[0].width,It[0].height,et.depth);for(let at=0,_t=It.length;at<_t;at++)wt=It[at],S.format!==Qe?Rt!==null?Jt?e.compressedTexSubImage3D(35866,at,0,0,0,wt.width,wt.height,et.depth,Rt,wt.data,0,0):e.compressedTexImage3D(35866,at,Pt,wt.width,wt.height,et.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(35866,at,0,0,0,wt.width,wt.height,et.depth,Rt,At,wt.data):e.texImage3D(35866,at,Pt,wt.width,wt.height,et.depth,0,Rt,At,wt.data)}else{Jt&&de&&e.texStorage2D(3553,N,Pt,It[0].width,It[0].height);for(let at=0,_t=It.length;at<_t;at++)wt=It[at],S.format!==Qe?Rt!==null?Jt?e.compressedTexSubImage2D(3553,at,0,0,wt.width,wt.height,Rt,wt.data):e.compressedTexImage2D(3553,at,Pt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(3553,at,0,0,wt.width,wt.height,Rt,At,wt.data):e.texImage2D(3553,at,Pt,wt.width,wt.height,0,Rt,At,wt.data)}else if(S.isDataArrayTexture)Jt?(de&&e.texStorage3D(35866,N,Pt,et.width,et.height,et.depth),e.texSubImage3D(35866,0,0,0,0,et.width,et.height,et.depth,Rt,At,et.data)):e.texImage3D(35866,0,Pt,et.width,et.height,et.depth,0,Rt,At,et.data);else if(S.isData3DTexture)Jt?(de&&e.texStorage3D(32879,N,Pt,et.width,et.height,et.depth),e.texSubImage3D(32879,0,0,0,0,et.width,et.height,et.depth,Rt,At,et.data)):e.texImage3D(32879,0,Pt,et.width,et.height,et.depth,0,Rt,At,et.data);else if(S.isFramebufferTexture){if(de)if(Jt)e.texStorage2D(3553,N,Pt,et.width,et.height);else{let at=et.width,_t=et.height;for(let Et=0;Et<N;Et++)e.texImage2D(3553,Et,Pt,at,_t,0,Rt,At,null),at>>=1,_t>>=1}}else if(It.length>0&&Tt){Jt&&de&&e.texStorage2D(3553,N,Pt,It[0].width,It[0].height);for(let at=0,_t=It.length;at<_t;at++)wt=It[at],Jt?e.texSubImage2D(3553,at,0,0,Rt,At,wt):e.texImage2D(3553,at,Pt,Rt,At,wt);S.generateMipmaps=!1}else Jt?(de&&e.texStorage2D(3553,N,Pt,et.width,et.height),e.texSubImage2D(3553,0,0,0,Rt,At,et)):e.texImage2D(3553,0,Pt,Rt,At,et);A(S,Tt)&&R(Q),bt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function vt(T,S,O){if(S.image.length!==6)return;const Q=ut(T,S),ot=S.source;e.bindTexture(34067,T.__webglTexture,33984+O);const dt=i.get(ot);if(ot.version!==dt.__version||Q===!0){e.activeTexture(33984+O),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const bt=S.isCompressedTexture||S.image[0].isCompressedTexture,gt=S.image[0]&&S.image[0].isDataTexture,et=[];for(let at=0;at<6;at++)!bt&&!gt?et[at]=v(S.image[at],!1,!0,c):et[at]=gt?S.image[at].image:S.image[at],et[at]=st(S,et[at]);const Tt=et[0],Rt=x(Tt)||a,At=r.convert(S.format,S.encoding),Pt=r.convert(S.type),wt=M(S.internalFormat,At,Pt,S.encoding),It=a&&S.isVideoTexture!==!0,Jt=dt.__version===void 0||Q===!0;let de=C(S,Tt,Rt);z(34067,S,Rt);let N;if(bt){It&&Jt&&e.texStorage2D(34067,de,wt,Tt.width,Tt.height);for(let at=0;at<6;at++){N=et[at].mipmaps;for(let _t=0;_t<N.length;_t++){const Et=N[_t];S.format!==Qe?At!==null?It?e.compressedTexSubImage2D(34069+at,_t,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(34069+at,_t,wt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(34069+at,_t,0,0,Et.width,Et.height,At,Pt,Et.data):e.texImage2D(34069+at,_t,wt,Et.width,Et.height,0,At,Pt,Et.data)}}}else{N=S.mipmaps,It&&Jt&&(N.length>0&&de++,e.texStorage2D(34067,de,wt,et[0].width,et[0].height));for(let at=0;at<6;at++)if(gt){It?e.texSubImage2D(34069+at,0,0,0,et[at].width,et[at].height,At,Pt,et[at].data):e.texImage2D(34069+at,0,wt,et[at].width,et[at].height,0,At,Pt,et[at].data);for(let _t=0;_t<N.length;_t++){const Ct=N[_t].image[at].image;It?e.texSubImage2D(34069+at,_t+1,0,0,Ct.width,Ct.height,At,Pt,Ct.data):e.texImage2D(34069+at,_t+1,wt,Ct.width,Ct.height,0,At,Pt,Ct.data)}}else{It?e.texSubImage2D(34069+at,0,0,0,At,Pt,et[at]):e.texImage2D(34069+at,0,wt,At,Pt,et[at]);for(let _t=0;_t<N.length;_t++){const Et=N[_t];It?e.texSubImage2D(34069+at,_t+1,0,0,At,Pt,Et.image[at]):e.texImage2D(34069+at,_t+1,wt,At,Pt,Et.image[at])}}}A(S,Rt)&&R(34067),dt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function pt(T,S,O,Q,ot){const dt=r.convert(O.format,O.encoding),bt=r.convert(O.type),gt=M(O.internalFormat,dt,bt,O.encoding);i.get(S).__hasExternalTextures||(ot===32879||ot===35866?e.texImage3D(ot,0,gt,S.width,S.height,S.depth,0,dt,bt,null):e.texImage2D(ot,0,gt,S.width,S.height,0,dt,bt,null)),e.bindFramebuffer(36160,T),Z(S)?f.framebufferTexture2DMultisampleEXT(36160,Q,ot,i.get(O).__webglTexture,0,lt(S)):(ot===3553||ot>=34069&&ot<=34074)&&n.framebufferTexture2D(36160,Q,ot,i.get(O).__webglTexture,0),e.bindFramebuffer(36160,null)}function Mt(T,S,O){if(n.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let Q=33189;if(O||Z(S)){const ot=S.depthTexture;ot&&ot.isDepthTexture&&(ot.type===xi?Q=36012:ot.type===_i&&(Q=33190));const dt=lt(S);Z(S)?f.renderbufferStorageMultisampleEXT(36161,dt,Q,S.width,S.height):n.renderbufferStorageMultisample(36161,dt,Q,S.width,S.height)}else n.renderbufferStorage(36161,Q,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const Q=lt(S);O&&Z(S)===!1?n.renderbufferStorageMultisample(36161,Q,35056,S.width,S.height):Z(S)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,T)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ot=0;ot<Q.length;ot++){const dt=Q[ot],bt=r.convert(dt.format,dt.encoding),gt=r.convert(dt.type),et=M(dt.internalFormat,bt,gt,dt.encoding),Tt=lt(S);O&&Z(S)===!1?n.renderbufferStorageMultisample(36161,Tt,et,S.width,S.height):Z(S)?f.renderbufferStorageMultisampleEXT(36161,Tt,et,S.width,S.height):n.renderbufferStorage(36161,et,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function b(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,ot=lt(S);if(S.depthTexture.format===Si)Z(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ot):n.framebufferTexture2D(36160,36096,3553,Q,0);else if(S.depthTexture.format===ps)Z(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ot):n.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function w(T){const S=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");b(S.__webglFramebuffer,T)}else if(O){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=n.createRenderbuffer(),Mt(S.__webglDepthbuffer[Q],T,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Mt(S.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function I(T,S,O){const Q=i.get(T);S!==void 0&&pt(Q.__webglFramebuffer,T,T.texture,36064,3553),O!==void 0&&w(T)}function U(T){const S=T.texture,O=i.get(T),Q=i.get(S);T.addEventListener("dispose",nt),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,o.memory.textures++);const ot=T.isWebGLCubeRenderTarget===!0,dt=T.isWebGLMultipleRenderTargets===!0,bt=x(T)||a;if(ot){O.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)O.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(O.__webglFramebuffer=n.createFramebuffer(),dt)if(s.drawBuffers){const gt=T.texture;for(let et=0,Tt=gt.length;et<Tt;et++){const Rt=i.get(gt[et]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Z(T)===!1){const gt=dt?S:[S];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let et=0;et<gt.length;et++){const Tt=gt[et];O.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(36161,O.__webglColorRenderbuffer[et]);const Rt=r.convert(Tt.format,Tt.encoding),At=r.convert(Tt.type),Pt=M(Tt.internalFormat,Rt,At,Tt.encoding,T.isXRRenderTarget===!0),wt=lt(T);n.renderbufferStorageMultisample(36161,wt,Pt,T.width,T.height),n.framebufferRenderbuffer(36160,36064+et,36161,O.__webglColorRenderbuffer[et])}n.bindRenderbuffer(36161,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}}if(ot){e.bindTexture(34067,Q.__webglTexture),z(34067,S,bt);for(let gt=0;gt<6;gt++)pt(O.__webglFramebuffer[gt],T,S,36064,34069+gt);A(S,bt)&&R(34067),e.unbindTexture()}else if(dt){const gt=T.texture;for(let et=0,Tt=gt.length;et<Tt;et++){const Rt=gt[et],At=i.get(Rt);e.bindTexture(3553,At.__webglTexture),z(3553,Rt,bt),pt(O.__webglFramebuffer,T,Rt,36064+et,3553),A(Rt,bt)&&R(3553)}e.unbindTexture()}else{let gt=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?gt=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,Q.__webglTexture),z(gt,S,bt),pt(O.__webglFramebuffer,T,S,36064,gt),A(S,bt)&&R(gt),e.unbindTexture()}T.depthBuffer&&w(T)}function B(T){const S=x(T)||a,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,ot=O.length;Q<ot;Q++){const dt=O[Q];if(A(dt,S)){const bt=T.isWebGLCubeRenderTarget?34067:3553,gt=i.get(dt).__webglTexture;e.bindTexture(bt,gt),R(bt),e.unbindTexture()}}}function it(T){if(a&&T.samples>0&&Z(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,Q=T.height;let ot=16384;const dt=[],bt=T.stencilBuffer?33306:36096,gt=i.get(T),et=T.isWebGLMultipleRenderTargets===!0;if(et)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(36160,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Tt,36161,null),e.bindFramebuffer(36160,gt.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Tt,3553,null,0);e.bindFramebuffer(36008,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,gt.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){dt.push(36064+Tt),T.depthBuffer&&dt.push(bt);const Rt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Rt===!1&&(T.depthBuffer&&(ot|=256),T.stencilBuffer&&(ot|=1024)),et&&n.framebufferRenderbuffer(36008,36064,36161,gt.__webglColorRenderbuffer[Tt]),Rt===!0&&(n.invalidateFramebuffer(36008,[bt]),n.invalidateFramebuffer(36009,[bt])),et){const At=i.get(S[Tt]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,At,0)}n.blitFramebuffer(0,0,O,Q,0,0,O,Q,ot,9728),p&&n.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),et)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(36160,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Tt,36161,gt.__webglColorRenderbuffer[Tt]);const Rt=i.get(S[Tt]).__webglTexture;e.bindFramebuffer(36160,gt.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Tt,3553,Rt,0)}e.bindFramebuffer(36009,gt.__webglMultisampledFramebuffer)}}function lt(T){return Math.min(h,T.samples)}function Z(T){const S=i.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ft(T){const S=o.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function st(T,S){const O=T.encoding,Q=T.format,ot=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ja||O!==Ai&&(O===oe?a===!1?t.has("EXT_sRGB")===!0&&Q===Qe?(T.format=ja,T.minFilter=We,T.generateMipmaps=!1):S=zf.sRGBToLinear(S):(Q!==Qe||ot!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),S}this.allocateTextureUnit=q,this.resetTextureUnits=tt,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=mt,this.rebindTextures=I,this.setupRenderTarget=U,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Z}function nS(n,t,e){const i=e.isWebGL2;function s(r,o=null){let a;if(r===Ei)return 5121;if(r===$0)return 32819;if(r===J0)return 32820;if(r===X0)return 5120;if(r===j0)return 5122;if(r===Of)return 5123;if(r===Y0)return 5124;if(r===_i)return 5125;if(r===xi)return 5126;if(r===Ks)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Z0)return 6406;if(r===Qe)return 6408;if(r===Q0)return 6409;if(r===tx)return 6410;if(r===Si)return 6402;if(r===ps)return 34041;if(r===ex)return 6403;if(r===K0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ja)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===nx)return 36244;if(r===ix)return 33319;if(r===sx)return 33320;if(r===rx)return 36249;if(r===Vo||r===Go||r===Ho||r===Wo)if(o===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Vo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Vo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ho)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xc||r===jc||r===Yc||r===$c)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$c)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ox)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jc||r===Zc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Jc)return o===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Zc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kc||r===Qc||r===tu||r===eu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===lu||r===cu||r===uu||r===hu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Kc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qc)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===iu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===su)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ru)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ou)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===au)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hu)return o===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===fu)return o===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ss?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class iS extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nr extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sS={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const d=e.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const y=new Nr;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class rS extends Be{constructor(t,e,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=_i),i===void 0&&u===ps&&(i=ss),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1}}class oS extends vs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=e.getContextAttributes();let m=null,d=null;const _=[],y=[],v=new ze;v.layers.enable(1),v.viewport=new ne;const x=new ze;x.layers.enable(2),x.viewport=new ne;const E=[v,x],A=new iS;A.layers.enable(1),A.layers.enable(2);let R=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let V=_[k];return V===void 0&&(V=new _a,_[k]=V),V.getTargetRaySpace()},this.getControllerGrip=function(k){let V=_[k];return V===void 0&&(V=new _a,_[k]=V),V.getGripSpace()},this.getHand=function(k){let V=_[k];return V===void 0&&(V=new _a,_[k]=V),V.getHandSpace()};function C(k){const V=y.indexOf(k.inputSource);if(V===-1)return;const K=_[V];K!==void 0&&K.dispatchEvent({type:k.type,data:k.inputSource})}function D(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",Y);for(let k=0;k<_.length;k++){const V=y[k];V!==null&&(y[k]=null,_[k].disconnect(V))}R=null,M=null,t.setRenderTarget(m),f=null,h=null,u=null,s=null,d=null,q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",D),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const V={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:f}),d=new Ti(f.framebufferWidth,f.framebufferHeight,{format:Qe,type:Ei,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,K=null,H=null;g.depth&&(H=g.stencil?35056:33190,V=g.stencil?ps:Si,K=g.stencil?ss:_i);const mt={colorFormat:32856,depthFormat:H,scaleFactor:r};u=new XRWebGLBinding(s,e),h=u.createProjectionLayer(mt),s.updateRenderState({layers:[h]}),d=new Ti(h.textureWidth,h.textureHeight,{format:Qe,type:Ei,depthTexture:new rS(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const St=t.properties.get(d);St.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),q.setContext(s),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Y(k){for(let V=0;V<k.removed.length;V++){const K=k.removed[V],H=y.indexOf(K);H>=0&&(y[H]=null,_[H].dispatchEvent({type:"disconnected",data:K}))}for(let V=0;V<k.added.length;V++){const K=k.added[V];let H=y.indexOf(K);if(H===-1){for(let St=0;St<_.length;St++)if(St>=y.length){y.push(K),H=St;break}else if(y[St]===null){y[St]=K,H=St;break}if(H===-1)break}const mt=_[H];mt&&mt.dispatchEvent({type:"connected",data:K})}}const nt=new L,X=new L;function F(k,V,K){nt.setFromMatrixPosition(V.matrixWorld),X.setFromMatrixPosition(K.matrixWorld);const H=nt.distanceTo(X),mt=V.projectionMatrix.elements,St=K.projectionMatrix.elements,W=mt[14]/(mt[10]-1),z=mt[14]/(mt[10]+1),ut=(mt[9]+1)/mt[5],ht=(mt[9]-1)/mt[5],vt=(mt[8]-1)/mt[0],pt=(St[8]+1)/St[0],Mt=W*vt,b=W*pt,w=H/(-vt+pt),I=w*-vt;V.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(I),k.translateZ(w),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const U=W+w,B=z+w,it=Mt-I,lt=b+(H-I),Z=ut*z/B*U,ft=ht*z/B*U;k.projectionMatrix.makePerspective(it,lt,Z,ft,U,B)}function J(k,V){V===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(V.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;A.near=x.near=v.near=k.near,A.far=x.far=v.far=k.far,(R!==A.near||M!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,M=A.far);const V=k.parent,K=A.cameras;J(A,V);for(let mt=0;mt<K.length;mt++)J(K[mt],V);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),k.matrix.copy(A.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const H=k.children;for(let mt=0,St=H.length;mt<St;mt++)H[mt].updateMatrixWorld(!0);K.length===2?F(A,v,x):A.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(k){h!==null&&(h.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)};let $=null;function tt(k,V){if(c=V.getViewerPose(l||o),p=V,c!==null){const K=c.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let H=!1;K.length!==A.cameras.length&&(A.cameras.length=0,H=!0);for(let mt=0;mt<K.length;mt++){const St=K[mt];let W=null;if(f!==null)W=f.getViewport(St);else{const ut=u.getViewSubImage(h,St);W=ut.viewport,mt===0&&(t.setRenderTargetTextures(d,ut.colorTexture,h.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(d))}let z=E[mt];z===void 0&&(z=new ze,z.layers.enable(mt),z.viewport=new ne,E[mt]=z),z.matrix.fromArray(St.transform.matrix),z.projectionMatrix.fromArray(St.projectionMatrix),z.viewport.set(W.x,W.y,W.width,W.height),mt===0&&A.matrix.copy(z.matrix),H===!0&&A.cameras.push(z)}}for(let K=0;K<_.length;K++){const H=y[K],mt=_[K];H!==null&&mt!==void 0&&mt.update(H,V,l||o)}$&&$(k,V),p=null}const q=new qf;q.setAnimationLoop(tt),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}}function aS(n,t){function e(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Xe&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Xe&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let v;d.aoMap?v=d.aoMap:d.lightMap&&(v=d.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=y*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Xe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function lS(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(35375):0;function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",d));const E=v.program;i.updateUBOMapping(y,E);const A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function u(y){const v=h();y.__bindingPointIndex=v;const x=n.createBuffer(),E=y.__size,A=y.usage;return n.bindBuffer(35345,x),n.bufferData(35345,E,A),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=s[y.id],x=y.uniforms,E=y.__cache;n.bindBuffer(35345,v);for(let A=0,R=x.length;A<R;A++){const M=x[A];if(p(M,A,E)===!0){const C=M.value,D=M.__offset;typeof C=="number"?(M.__data[0]=C,n.bufferSubData(35345,D,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):C.toArray(M.__data),n.bufferSubData(35345,D,M.__data))}}n.bindBuffer(35345,null)}function p(y,v,x){const E=y.value;if(x[v]===void 0)return typeof E=="number"?x[v]=E:x[v]=E.clone(),!0;if(typeof E=="number"){if(x[v]!==E)return x[v]=E,!0}else{const A=x[v];if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(y){const v=y.uniforms;let x=0;const E=16;let A=0;for(let R=0,M=v.length;R<M;R++){const C=v[R],D=m(C);if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,R>0){A=x%E;const Y=E-A;A!==0&&Y-D.boundary<0&&(x+=E-A,C.__offset=x)}x+=D.storage}return A=x%E,A>0&&(x+=E-A),y.__size=x,y.__cache={},this}function m(y){const v=y.value,x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function d(y){const v=y.target;v.removeEventListener("dispose",d);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function _(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function cS(){const n=Qs("canvas");return n.style.display="block",n}function Zf(n={}){this.isWebGLRenderer=!0;const t=n.canvas!==void 0?n.canvas:cS(),e=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ai,this.physicallyCorrectLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,y=0,v=null,x=-1,E=null;const A=new ne,R=new ne;let M=null,C=t.width,D=t.height,Y=1,nt=null,X=null;const F=new ne(0,0,C,D),J=new ne(0,0,C,D);let $=!1;const tt=new El;let q=!1,k=!1,V=null;const K=new Qt,H=new xt,mt=new L,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return v===null?Y:1}let z=e;function ut(P,j){for(let rt=0;rt<P.length;rt++){const G=P[rt],ct=t.getContext(G,j);if(ct!==null)return ct}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",It,!1),z===null){const j=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&j.shift(),z=ut(j,P),z===null)throw ut(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ht,vt,pt,Mt,b,w,I,U,B,it,lt,Z,ft,st,T,S,O,Q,ot,dt,bt,gt,et,Tt;function Rt(){ht=new yM(z),vt=new pM(z,ht,n),ht.init(vt),gt=new nS(z,ht,vt),pt=new tS(z,ht,vt),Mt=new SM,b=new kb,w=new eS(z,ht,pt,b,vt,gt,Mt),I=new gM(m),U=new vM(m),B=new Dx(z,vt),et=new fM(z,ht,B,vt),it=new MM(z,B,Mt,et),lt=new TM(z,it,B,Mt),ot=new AM(z,vt,w),S=new mM(b),Z=new Bb(m,I,U,ht,vt,et,S),ft=new aS(m,b),st=new Gb,T=new Yb(ht,vt),Q=new hM(m,I,U,pt,lt,u,o),O=new Qb(m,lt,vt),Tt=new lS(z,Mt,vt,pt),dt=new dM(z,ht,Mt,vt),bt=new bM(z,ht,Mt,vt),Mt.programs=Z.programs,m.capabilities=vt,m.extensions=ht,m.properties=b,m.renderLists=st,m.shadowMap=O,m.state=pt,m.info=Mt}Rt();const At=new oS(m,z);this.xr=At,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=ht.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ht.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(P){P!==void 0&&(Y=P,this.setSize(C,D,!1))},this.getSize=function(P){return P.set(C,D)},this.setSize=function(P,j,rt){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=P,D=j,t.width=Math.floor(P*Y),t.height=Math.floor(j*Y),rt!==!1&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(C*Y,D*Y).floor()},this.setDrawingBufferSize=function(P,j,rt){C=P,D=j,Y=rt,t.width=Math.floor(P*rt),t.height=Math.floor(j*rt),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(F)},this.setViewport=function(P,j,rt,G){P.isVector4?F.set(P.x,P.y,P.z,P.w):F.set(P,j,rt,G),pt.viewport(A.copy(F).multiplyScalar(Y).floor())},this.getScissor=function(P){return P.copy(J)},this.setScissor=function(P,j,rt,G){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,j,rt,G),pt.scissor(R.copy(J).multiplyScalar(Y).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(P){pt.setScissorTest($=P)},this.setOpaqueSort=function(P){nt=P},this.setTransparentSort=function(P){X=P},this.getClearColor=function(P){return P.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(P=!0,j=!0,rt=!0){let G=0;P&&(G|=16384),j&&(G|=256),rt&&(G|=1024),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",It,!1),st.dispose(),T.dispose(),b.dispose(),I.dispose(),U.dispose(),lt.dispose(),et.dispose(),Tt.dispose(),Z.dispose(),At.dispose(),At.removeEventListener("sessionstart",Et),At.removeEventListener("sessionend",Ct),V&&(V.dispose(),V=null),qt.stop()};function Pt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const P=Mt.autoReset,j=O.enabled,rt=O.autoUpdate,G=O.needsUpdate,ct=O.type;Rt(),Mt.autoReset=P,O.enabled=j,O.autoUpdate=rt,O.needsUpdate=G,O.type=ct}function It(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Jt(P){const j=P.target;j.removeEventListener("dispose",Jt),de(j)}function de(P){N(P),b.remove(P)}function N(P){const j=b.get(P).programs;j!==void 0&&(j.forEach(function(rt){Z.releaseProgram(rt)}),P.isShaderMaterial&&Z.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,rt,G,ct,Lt){j===null&&(j=St);const Ot=ct.isMesh&&ct.matrixWorld.determinant()<0,kt=Ed(P,j,rt,G,ct);pt.setMaterial(G,Ot);let zt=rt.index;const Xt=rt.attributes.position;if(zt===null){if(Xt===void 0||Xt.count===0)return}else if(zt.count===0)return;let Vt=1;G.wireframe===!0&&(zt=it.getWireframeAttribute(rt),Vt=2),et.setup(ct,G,kt,rt,zt);let Wt,re=dt;zt!==null&&(Wt=B.get(zt),re=bt,re.setIndex(Wt));const ii=zt!==null?zt.count:Xt.count,Li=rt.drawRange.start*Vt,Ri=rt.drawRange.count*Vt,rn=Lt!==null?Lt.start*Vt:0,jt=Lt!==null?Lt.count*Vt:1/0,Di=Math.max(Li,rn),ae=Math.min(ii,Li+Ri,rn+jt)-1,Ve=Math.max(0,ae-Di+1);if(Ve!==0){if(ct.isMesh)G.wireframe===!0?(pt.setLineWidth(G.wireframeLinewidth*W()),re.setMode(1)):re.setMode(4);else if(ct.isLine){let Nn=G.linewidth;Nn===void 0&&(Nn=1),pt.setLineWidth(Nn*W()),ct.isLineSegments?re.setMode(1):ct.isLineLoop?re.setMode(2):re.setMode(3)}else ct.isPoints?re.setMode(0):ct.isSprite&&re.setMode(4);if(ct.isInstancedMesh)re.renderInstances(Di,Ve,ct.count);else if(rt.isInstancedBufferGeometry){const Nn=Math.min(rt.instanceCount,rt._maxInstanceCount);re.renderInstances(Di,Ve,Nn)}else re.render(Di,Ve)}},this.compile=function(P,j){function rt(G,ct,Lt){G.transparent===!0&&G.side===jn?(G.side=Xe,G.needsUpdate=!0,ke(G,ct,Lt),G.side=hs,G.needsUpdate=!0,ke(G,ct,Lt),G.side=jn):ke(G,ct,Lt)}f=T.get(P),f.init(),g.push(f),P.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(m.physicallyCorrectLights),P.traverse(function(G){const ct=G.material;if(ct)if(Array.isArray(ct))for(let Lt=0;Lt<ct.length;Lt++){const Ot=ct[Lt];rt(Ot,P,G)}else rt(ct,P,G)}),g.pop(),f=null};let at=null;function _t(P){at&&at(P)}function Et(){qt.stop()}function Ct(){qt.start()}const qt=new qf;qt.setAnimationLoop(_t),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(P){at=P,At.setAnimationLoop(P),P===null?qt.stop():qt.start()},At.addEventListener("sessionstart",Et),At.addEventListener("sessionend",Ct),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(j),j=At.getCamera()),P.isScene===!0&&P.onBeforeRender(m,P,j,v),f=T.get(P,g.length),f.init(),g.push(f),K.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),tt.setFromProjectionMatrix(K),k=this.localClippingEnabled,q=S.init(this.clippingPlanes,k,j),h=st.get(P,p.length),h.init(),p.push(h),pe(P,j,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(nt,X),q===!0&&S.beginShadows();const rt=f.state.shadowsArray;if(O.render(rt,P,j),q===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,P),f.setupLights(m.physicallyCorrectLights),j.isArrayCamera){const G=j.cameras;for(let ct=0,Lt=G.length;ct<Lt;ct++){const Ot=G[ct];ye(h,P,Ot,Ot.viewport)}}else ye(h,P,j);v!==null&&(w.updateMultisampleRenderTarget(v),w.updateRenderTargetMipmap(v)),P.isScene===!0&&P.onAfterRender(m,P,j),et.resetDefaultState(),x=-1,E=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function pe(P,j,rt,G){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)rt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||tt.intersectsSprite(P)){G&&mt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);const Ot=lt.update(P),kt=P.material;kt.visible&&h.push(P,Ot,kt,rt,mt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Mt.render.frame&&(P.skeleton.update(),P.skeleton.frame=Mt.render.frame),!P.frustumCulled||tt.intersectsObject(P))){G&&mt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);const Ot=lt.update(P),kt=P.material;if(Array.isArray(kt)){const zt=Ot.groups;for(let Xt=0,Vt=zt.length;Xt<Vt;Xt++){const Wt=zt[Xt],re=kt[Wt.materialIndex];re&&re.visible&&h.push(P,Ot,re,rt,mt.z,Wt)}}else kt.visible&&h.push(P,Ot,kt,rt,mt.z,null)}}const Lt=P.children;for(let Ot=0,kt=Lt.length;Ot<kt;Ot++)pe(Lt[Ot],j,rt,G)}function ye(P,j,rt,G){const ct=P.opaque,Lt=P.transmissive,Ot=P.transparent;f.setupLightsView(rt),Lt.length>0&&ni(ct,j,rt),G&&pt.viewport(A.copy(G)),ct.length>0&&ee(ct,j,rt),Lt.length>0&&ee(Lt,j,rt),Ot.length>0&&ee(Ot,j,rt),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function ni(P,j,rt){const G=vt.isWebGL2;V===null&&(V=new Ti(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")?Ks:Ei,minFilter:Ao,samples:G&&r===!0?4:0})),m.getDrawingBufferSize(H),G?V.setSize(H.x,H.y):V.setSize(Ya(H.x),Ya(H.y));const ct=m.getRenderTarget();m.setRenderTarget(V),m.clear();const Lt=m.toneMapping;m.toneMapping=Pn,ee(P,j,rt),m.toneMapping=Lt,w.updateMultisampleRenderTarget(V),w.updateRenderTargetMipmap(V),m.setRenderTarget(ct)}function ee(P,j,rt){const G=j.isScene===!0?j.overrideMaterial:null;for(let ct=0,Lt=P.length;ct<Lt;ct++){const Ot=P[ct],kt=Ot.object,zt=Ot.geometry,Xt=G===null?Ot.material:G,Vt=Ot.group;kt.layers.test(rt.layers)&&gn(kt,j,rt,zt,Xt,Vt)}}function gn(P,j,rt,G,ct,Lt){P.onBeforeRender(m,j,rt,G,ct,Lt),P.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ct.onBeforeRender(m,j,rt,G,P,Lt),ct.transparent===!0&&ct.side===jn?(ct.side=Xe,ct.needsUpdate=!0,m.renderBufferDirect(rt,j,G,ct,P,Lt),ct.side=hs,ct.needsUpdate=!0,m.renderBufferDirect(rt,j,G,ct,P,Lt),ct.side=jn):m.renderBufferDirect(rt,j,G,ct,P,Lt),P.onAfterRender(m,j,rt,G,ct,Lt)}function ke(P,j,rt){j.isScene!==!0&&(j=St);const G=b.get(P),ct=f.state.lights,Lt=f.state.shadowsArray,Ot=ct.state.version,kt=Z.getParameters(P,ct.state,Lt,j,rt),zt=Z.getProgramCacheKey(kt);let Xt=G.programs;G.environment=P.isMeshStandardMaterial?j.environment:null,G.fog=j.fog,G.envMap=(P.isMeshStandardMaterial?U:I).get(P.envMap||G.environment),Xt===void 0&&(P.addEventListener("dispose",Jt),Xt=new Map,G.programs=Xt);let Vt=Xt.get(zt);if(Vt!==void 0){if(G.currentProgram===Vt&&G.lightsStateVersion===Ot)return zl(P,kt),Vt}else kt.uniforms=Z.getUniforms(P),P.onBuild(rt,kt,m),P.onBeforeCompile(kt,m),Vt=Z.acquireProgram(kt,zt),Xt.set(zt,Vt),G.uniforms=kt.uniforms;const Wt=G.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Wt.clippingPlanes=S.uniform),zl(P,kt),G.needsLights=Td(P),G.lightsStateVersion=Ot,G.needsLights&&(Wt.ambientLightColor.value=ct.state.ambient,Wt.lightProbe.value=ct.state.probe,Wt.directionalLights.value=ct.state.directional,Wt.directionalLightShadows.value=ct.state.directionalShadow,Wt.spotLights.value=ct.state.spot,Wt.spotLightShadows.value=ct.state.spotShadow,Wt.rectAreaLights.value=ct.state.rectArea,Wt.ltc_1.value=ct.state.rectAreaLTC1,Wt.ltc_2.value=ct.state.rectAreaLTC2,Wt.pointLights.value=ct.state.point,Wt.pointLightShadows.value=ct.state.pointShadow,Wt.hemisphereLights.value=ct.state.hemi,Wt.directionalShadowMap.value=ct.state.directionalShadowMap,Wt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Wt.spotShadowMap.value=ct.state.spotShadowMap,Wt.spotLightMatrix.value=ct.state.spotLightMatrix,Wt.spotLightMap.value=ct.state.spotLightMap,Wt.pointShadowMap.value=ct.state.pointShadowMap,Wt.pointShadowMatrix.value=ct.state.pointShadowMatrix);const re=Vt.getUniforms(),ii=to.seqWithValue(re.seq,Wt);return G.currentProgram=Vt,G.uniformsList=ii,Vt}function zl(P,j){const rt=b.get(P);rt.outputEncoding=j.outputEncoding,rt.instancing=j.instancing,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function Ed(P,j,rt,G,ct){j.isScene!==!0&&(j=St),w.resetTextureUnits();const Lt=j.fog,Ot=G.isMeshStandardMaterial?j.environment:null,kt=v===null?m.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Ai,zt=(G.isMeshStandardMaterial?U:I).get(G.envMap||Ot),Xt=G.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Vt=!!G.normalMap&&!!rt.attributes.tangent,Wt=!!rt.morphAttributes.position,re=!!rt.morphAttributes.normal,ii=!!rt.morphAttributes.color,Li=G.toneMapped?m.toneMapping:Pn,Ri=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,rn=Ri!==void 0?Ri.length:0,jt=b.get(G),Di=f.state.lights;if(q===!0&&(k===!0||P!==E)){const Oe=P===E&&G.id===x;S.setState(G,P,Oe)}let ae=!1;G.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Di.state.version||jt.outputEncoding!==kt||ct.isInstancedMesh&&jt.instancing===!1||!ct.isInstancedMesh&&jt.instancing===!0||ct.isSkinnedMesh&&jt.skinning===!1||!ct.isSkinnedMesh&&jt.skinning===!0||jt.envMap!==zt||G.fog===!0&&jt.fog!==Lt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==S.numPlanes||jt.numIntersection!==S.numIntersection)||jt.vertexAlphas!==Xt||jt.vertexTangents!==Vt||jt.morphTargets!==Wt||jt.morphNormals!==re||jt.morphColors!==ii||jt.toneMapping!==Li||vt.isWebGL2===!0&&jt.morphTargetsCount!==rn)&&(ae=!0):(ae=!0,jt.__version=G.version);let Ve=jt.currentProgram;ae===!0&&(Ve=ke(G,j,ct));let Nn=!1,Ss=!1,Lo=!1;const Ee=Ve.getUniforms(),si=jt.uniforms;if(pt.useProgram(Ve.program)&&(Nn=!0,Ss=!0,Lo=!0),G.id!==x&&(x=G.id,Ss=!0),Nn||E!==P){if(Ee.setValue(z,"projectionMatrix",P.projectionMatrix),vt.logarithmicDepthBuffer&&Ee.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),E!==P&&(E=P,Ss=!0,Lo=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Oe=Ee.map.cameraPosition;Oe!==void 0&&Oe.setValue(z,mt.setFromMatrixPosition(P.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ee.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ct.isSkinnedMesh)&&Ee.setValue(z,"viewMatrix",P.matrixWorldInverse)}if(ct.isSkinnedMesh){Ee.setOptional(z,ct,"bindMatrix"),Ee.setOptional(z,ct,"bindMatrixInverse");const Oe=ct.skeleton;Oe&&(vt.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ee.setValue(z,"boneTexture",Oe.boneTexture,w),Ee.setValue(z,"boneTextureSize",Oe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ro=rt.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&vt.isWebGL2===!0)&&ot.update(ct,rt,G,Ve),(Ss||jt.receiveShadow!==ct.receiveShadow)&&(jt.receiveShadow=ct.receiveShadow,Ee.setValue(z,"receiveShadow",ct.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(si.envMap.value=zt,si.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Ss&&(Ee.setValue(z,"toneMappingExposure",m.toneMappingExposure),jt.needsLights&&Ad(si,Lo),Lt&&G.fog===!0&&ft.refreshFogUniforms(si,Lt),ft.refreshMaterialUniforms(si,G,Y,D,V),to.upload(z,jt.uniformsList,si,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(to.upload(z,jt.uniformsList,si,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ee.setValue(z,"center",ct.center),Ee.setValue(z,"modelViewMatrix",ct.modelViewMatrix),Ee.setValue(z,"normalMatrix",ct.normalMatrix),Ee.setValue(z,"modelMatrix",ct.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Oe=G.uniformsGroups;for(let Do=0,Cd=Oe.length;Do<Cd;Do++)if(vt.isWebGL2){const Ul=Oe[Do];Tt.update(Ul,Ve),Tt.bind(Ul,Ve)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ve}function Ad(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Td(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(P,j,rt){b.get(P.texture).__webglTexture=j,b.get(P.depthTexture).__webglTexture=rt;const G=b.get(P);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=rt===void 0,G.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,j){const rt=b.get(P);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,rt=0){v=P,_=j,y=rt;let G=!0,ct=null,Lt=!1,Ot=!1;if(P){const zt=b.get(P);zt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),G=!1):zt.__webglFramebuffer===void 0?w.setupRenderTarget(P):zt.__hasExternalTextures&&w.rebindTextures(P,b.get(P.texture).__webglTexture,b.get(P.depthTexture).__webglTexture);const Xt=P.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ot=!0);const Vt=b.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ct=Vt[j],Lt=!0):vt.isWebGL2&&P.samples>0&&w.useMultisampledRTT(P)===!1?ct=b.get(P).__webglMultisampledFramebuffer:ct=Vt,A.copy(P.viewport),R.copy(P.scissor),M=P.scissorTest}else A.copy(F).multiplyScalar(Y).floor(),R.copy(J).multiplyScalar(Y).floor(),M=$;if(pt.bindFramebuffer(36160,ct)&&vt.drawBuffers&&G&&pt.drawBuffers(P,ct),pt.viewport(A),pt.scissor(R),pt.setScissorTest(M),Lt){const zt=b.get(P.texture);z.framebufferTexture2D(36160,36064,34069+j,zt.__webglTexture,rt)}else if(Ot){const zt=b.get(P.texture),Xt=j||0;z.framebufferTextureLayer(36160,36064,zt.__webglTexture,rt||0,Xt)}x=-1},this.readRenderTargetPixels=function(P,j,rt,G,ct,Lt,Ot){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt){pt.bindFramebuffer(36160,kt);try{const zt=P.texture,Xt=zt.format,Vt=zt.type;if(Xt!==Qe&&gt.convert(Xt)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===Ks&&(ht.has("EXT_color_buffer_half_float")||vt.isWebGL2&&ht.has("EXT_color_buffer_float"));if(Vt!==Ei&&gt.convert(Vt)!==z.getParameter(35738)&&!(Vt===xi&&(vt.isWebGL2||ht.has("OES_texture_float")||ht.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-G&&rt>=0&&rt<=P.height-ct&&z.readPixels(j,rt,G,ct,gt.convert(Xt),gt.convert(Vt),Lt)}finally{const zt=v!==null?b.get(v).__webglFramebuffer:null;pt.bindFramebuffer(36160,zt)}}},this.copyFramebufferToTexture=function(P,j,rt=0){const G=Math.pow(2,-rt),ct=Math.floor(j.image.width*G),Lt=Math.floor(j.image.height*G);w.setTexture2D(j,0),z.copyTexSubImage2D(3553,rt,0,0,P.x,P.y,ct,Lt),pt.unbindTexture()},this.copyTextureToTexture=function(P,j,rt,G=0){const ct=j.image.width,Lt=j.image.height,Ot=gt.convert(rt.format),kt=gt.convert(rt.type);w.setTexture2D(rt,0),z.pixelStorei(37440,rt.flipY),z.pixelStorei(37441,rt.premultiplyAlpha),z.pixelStorei(3317,rt.unpackAlignment),j.isDataTexture?z.texSubImage2D(3553,G,P.x,P.y,ct,Lt,Ot,kt,j.image.data):j.isCompressedTexture?z.compressedTexSubImage2D(3553,G,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,Ot,j.mipmaps[0].data):z.texSubImage2D(3553,G,P.x,P.y,Ot,kt,j.image),G===0&&rt.generateMipmaps&&z.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(P,j,rt,G,ct=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Lt=P.max.x-P.min.x+1,Ot=P.max.y-P.min.y+1,kt=P.max.z-P.min.z+1,zt=gt.convert(G.format),Xt=gt.convert(G.type);let Vt;if(G.isData3DTexture)w.setTexture3D(G,0),Vt=32879;else if(G.isDataArrayTexture)w.setTexture2DArray(G,0),Vt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,G.flipY),z.pixelStorei(37441,G.premultiplyAlpha),z.pixelStorei(3317,G.unpackAlignment);const Wt=z.getParameter(3314),re=z.getParameter(32878),ii=z.getParameter(3316),Li=z.getParameter(3315),Ri=z.getParameter(32877),rn=rt.isCompressedTexture?rt.mipmaps[0]:rt.image;z.pixelStorei(3314,rn.width),z.pixelStorei(32878,rn.height),z.pixelStorei(3316,P.min.x),z.pixelStorei(3315,P.min.y),z.pixelStorei(32877,P.min.z),rt.isDataTexture||rt.isData3DTexture?z.texSubImage3D(Vt,ct,j.x,j.y,j.z,Lt,Ot,kt,zt,Xt,rn.data):rt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Vt,ct,j.x,j.y,j.z,Lt,Ot,kt,zt,rn.data)):z.texSubImage3D(Vt,ct,j.x,j.y,j.z,Lt,Ot,kt,zt,Xt,rn),z.pixelStorei(3314,Wt),z.pixelStorei(32878,re),z.pixelStorei(3316,ii),z.pixelStorei(3315,Li),z.pixelStorei(32877,Ri),ct===0&&G.generateMipmaps&&z.generateMipmap(Vt),pt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?w.setTextureCube(P,0):P.isData3DTexture?w.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?w.setTexture2DArray(P,0):w.setTexture2D(P,0),pt.unbindTexture()},this.resetState=function(){_=0,y=0,v=null,pt.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class uS extends Zf{}uS.prototype.isWebGL1Renderer=!0;class Kf{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=i}clone(){return new Kf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class hS extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Aw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new L;class Qf{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yu extends Re{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $u=new Qt,Ju=new Qt,Fr=[],fS=new Qt,Ds=new en;class Tw extends en{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yu(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let s=0;s<i;s++)this.setMatrixAt(s,fS)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,$u),Ju.multiplyMatrices(i,$u),Ds.matrixWorld=Ju,Ds.raycast(t,Fr);for(let o=0,a=Fr.length;o<a;o++){const l=Fr[o];l.instanceId=r,l.object=this,e.push(l)}Fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yu(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Cl extends On{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zu=new L,Ku=new L,Qu=new Qt,xa=new Sl,zr=new ar;class dS extends ge{constructor(t=new te,e=new Cl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Zu.fromBufferAttribute(e,s-1),Ku.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Zu.distanceTo(Ku);t.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;Qu.copy(s).invert(),xa.copy(t.ray).applyMatrix4(Qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,f=new L,p=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=_,x=y-1;v<x;v+=p){const E=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(d,E),u.fromBufferAttribute(d,A),xa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(f);M<t.near||M>t.far||e.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let v=_,x=y-1;v<x;v+=p){if(c.fromBufferAttribute(d,v),u.fromBufferAttribute(d,v+1),xa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const th=new L,eh=new L;class td extends dS{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)th.fromBufferAttribute(e,s),eh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+th.distanceTo(eh);t.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ed extends On{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nh=new Qt,Ja=new Sl,Ur=new ar,Br=new L;class ih extends ge{constructor(t=new te,e=new ed){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;nh.copy(s).invert(),Ja.copy(t.ray).applyMatrix4(nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);Br.fromBufferAttribute(h,d),sh(Br,d,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)Br.fromBufferAttribute(h,g),sh(Br,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sh(n,t,e,i,s,r,o){const a=Ja.distanceSqToPoint(n);if(a<e){const l=new L;Ja.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Cw extends Be{constructor(t,e,i){super({width:t,height:e}),this.isFramebufferTexture=!0,this.format=i,this.magFilter=be,this.minFilter=be,this.generateMipmaps=!1,this.needsUpdate=!0}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new xt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,s=[],r=[],o=[],a=new L,l=new Qt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(_e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pl extends mn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new xt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class pS extends Pl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const kr=new L,va=new Ll,ya=new Ll,Ma=new Ll;class mS extends mn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(kr.subVectors(s[0],s[1]).add(s[0]),c=kr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),va.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,d),ya.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,d),Ma.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(va.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ya.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ma.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(va.calc(l),ya.calc(l),Ma.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function gS(n,t){const e=1-n;return e*e*t}function _S(n,t){return 2*(1-n)*n*t}function xS(n,t){return n*n*t}function Gs(n,t,e,i){return gS(n,t)+_S(n,e)+xS(n,i)}function vS(n,t){const e=1-n;return e*e*e*t}function yS(n,t){const e=1-n;return 3*e*e*n*t}function MS(n,t){return 3*(1-n)*n*n*t}function bS(n,t){return n*n*n*t}function Hs(n,t,e,i,s){return vS(n,t)+yS(n,e)+MS(n,i)+bS(n,s)}class nd extends mn{constructor(t=new xt,e=new xt,i=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new xt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class SS extends mn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y),Hs(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rl extends mn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const i=e||new xt;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wS extends mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class id extends mn{constructor(t=new xt,e=new xt,i=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new xt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sd extends mn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rd extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(rh(a,l.x,c.x,u.x,h.x),rh(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var Dl=Object.freeze({__proto__:null,ArcCurve:pS,CatmullRomCurve3:mS,CubicBezierCurve:nd,CubicBezierCurve3:SS,EllipseCurve:Pl,LineCurve:Rl,LineCurve3:wS,QuadraticBezierCurve:id,QuadraticBezierCurve3:sd,SplineCurve:rd});class ES extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Rl(e,t))}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}}class Za extends ES{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Rl(this.currentPoint.clone(),new xt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new id(this.currentPoint.clone(),new xt(t,e),new xt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new nd(this.currentPoint.clone(),new xt(t,e),new xt(i,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new rd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Pl(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class od extends te{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new L,f=new xt,p=new L,g=new L,m=new L;let d=0,_=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:d=t[y+1].x-t[y].x,_=t[y+1].y-t[y].y,p.x=_*1,p.y=-d,p.z=_*0,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:d=t[y+1].x-t[y].x,_=t[y+1].y-t[y].y,p.x=_*1,p.y=-d,p.z=_*0,g.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(g)}for(let y=0;y<=e;y++){const v=i+y*u*s,x=Math.sin(v),E=Math.cos(v);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*x,h.y=t[A].y,h.z=t[A].x*E,o.push(h.x,h.y,h.z),f.x=y/e,f.y=A/(t.length-1),a.push(f.x,f.y);const R=l[3*A+0]*x,M=l[3*A+1],C=l[3*A+0]*E;c.push(R,M,C)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){const x=v+y*t.length,E=x,A=x+t.length,R=x+t.length+1,M=x+1;r.push(E,A,M),r.push(R,M,A)}this.setIndex(r),this.setAttribute("position",new Dt(o,3)),this.setAttribute("uv",new Dt(a,2)),this.setAttribute("normal",new Dt(c,3))}static fromJSON(t){return new od(t.points,t.segments,t.phiStart,t.phiLength)}}class ad extends te{constructor(t=1,e=8,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,u=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=i+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(l,2))}static fromJSON(t){return new ad(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Il extends te{constructor(t=1,e=1,i=1,s=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const m=[],d=i/2;let _=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(p,2));function y(){const x=new L,E=new L;let A=0;const R=(e-t)/i;for(let M=0;M<=r;M++){const C=[],D=M/r,Y=D*(e-t)+t;for(let nt=0;nt<=s;nt++){const X=nt/s,F=X*l+a,J=Math.sin(F),$=Math.cos(F);E.x=Y*J,E.y=-D*i+d,E.z=Y*$,h.push(E.x,E.y,E.z),x.set(J,R,$).normalize(),f.push(x.x,x.y,x.z),p.push(X,1-D),C.push(g++)}m.push(C)}for(let M=0;M<s;M++)for(let C=0;C<r;C++){const D=m[C][M],Y=m[C+1][M],nt=m[C+1][M+1],X=m[C][M+1];u.push(D,Y,X),u.push(Y,nt,X),A+=6}c.addGroup(_,A,0),_+=A}function v(x){const E=g,A=new xt,R=new L;let M=0;const C=x===!0?t:e,D=x===!0?1:-1;for(let nt=1;nt<=s;nt++)h.push(0,d*D,0),f.push(0,D,0),p.push(.5,.5),g++;const Y=g;for(let nt=0;nt<=s;nt++){const F=nt/s*l+a,J=Math.cos(F),$=Math.sin(F);R.x=C*$,R.y=d*D,R.z=C*J,h.push(R.x,R.y,R.z),f.push(0,D,0),A.x=J*.5+.5,A.y=$*.5*D+.5,p.push(A.x,A.y),g++}for(let nt=0;nt<s;nt++){const X=E+nt,F=Y+nt;x===!0?u.push(F,F+1,X):u.push(F+1,F,X),M+=3}c.addGroup(_,M,x===!0?1:2),_+=M}}static fromJSON(t){return new Il(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ld extends Il{constructor(t=1,e=1,i=8,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ld(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bs extends te{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(r.slice(),3)),this.setAttribute("uv",new Dt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new L,x=new L,E=new L;for(let A=0;A<e.length;A+=3)p(e[A+0],v),p(e[A+1],x),p(e[A+2],E),l(v,x,E,y)}function l(y,v,x,E){const A=E+1,R=[];for(let M=0;M<=A;M++){R[M]=[];const C=y.clone().lerp(x,M/A),D=v.clone().lerp(x,M/A),Y=A-M;for(let nt=0;nt<=Y;nt++)nt===0&&M===A?R[M][nt]=C:R[M][nt]=C.clone().lerp(D,nt/Y)}for(let M=0;M<A;M++)for(let C=0;C<2*(A-M)-1;C++){const D=Math.floor(C/2);C%2===0?(f(R[M][D+1]),f(R[M+1][D]),f(R[M][D])):(f(R[M][D+1]),f(R[M+1][D+1]),f(R[M+1][D]))}}function c(y){const v=new L;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function u(){const y=new L;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const x=d(y)/2/Math.PI+.5,E=_(y)/Math.PI+.5;o.push(x,1-E)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const v=o[y+0],x=o[y+2],E=o[y+4],A=Math.max(v,x,E),R=Math.min(v,x,E);A>.9&&R<.1&&(v<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,v){const x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const y=new L,v=new L,x=new L,E=new L,A=new xt,R=new xt,M=new xt;for(let C=0,D=0;C<r.length;C+=9,D+=6){y.set(r[C+0],r[C+1],r[C+2]),v.set(r[C+3],r[C+4],r[C+5]),x.set(r[C+6],r[C+7],r[C+8]),A.set(o[D+0],o[D+1]),R.set(o[D+2],o[D+3]),M.set(o[D+4],o[D+5]),E.copy(y).add(v).add(x).divideScalar(3);const Y=d(E);m(A,D+0,y,Y),m(R,D+2,v,Y),m(M,D+4,x,Y)}}function m(y,v,x,E){E<0&&y.x===1&&(o[v]=y.x-1),x.x===0&&x.z===0&&(o[v]=E/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(t){return new bs(t.vertices,t.indices,t.radius,t.details)}}class cd extends bs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cd(t.radius,t.detail)}}const Vr=new L,Gr=new L,ba=new L,Hr=new hn;class Pw extends te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Kr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:d,c:_}=Hr;if(m.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Hr.getNormal(ba),h[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,h[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const v=(y+1)%3,x=h[y],E=h[v],A=Hr[u[y]],R=Hr[u[v]],M=`${x}_${E}`,C=`${E}_${x}`;C in f&&f[C]?(ba.dot(f[C].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(R.x,R.y,R.z)),f[C]=null):M in f||(f[M]={index0:c[y],index1:c[v],normal:ba.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:d}=f[g];Vr.fromBufferAttribute(a,m),Gr.fromBufferAttribute(a,d),p.push(Vr.x,Vr.y,Vr.z),p.push(Gr.x,Gr.y,Gr.z)}this.setAttribute("position",new Dt(p,3))}}}class Ws extends Za{constructor(t){super(t),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Za().fromJSON(s))}return this}}const AS={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=ud(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(i&&(r=RS(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return tr(r,o,e,a,l,p,0),o}};function ud(n,t,e,i,s){let r,o;if(s===GS(n,t,e,i)>0)for(r=t;r<e;r+=i)o=oh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=oh(r,n[r],n[r+1],o);return o&&Po(o,o.next)&&(nr(o),o=o.next),o}function Ci(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Po(e,e.next)||se(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function tr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&FS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?CS(n,i,s,r):TS(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),nr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=PS(Ci(n),t,e),tr(n,t,e,i,s,r,2)):o===2&&LS(n,t,e,i,s,r):tr(Ci(n),t,e,i,s,r,1);break}}}function TS(n){const t=n.prev,e=n,i=n.next;if(se(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Ki(s,a,r,l,o,c,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function CS(n,t,e,i){const s=n.prev,r=n,o=n.next;if(se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,m=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,_=Ka(p,g,t,e,i),y=Ka(m,d,t,e,i);let v=n.prevZ,x=n.nextZ;for(;v&&v.z>=_&&x&&x.z<=y;){if(v.x>=p&&v.x<=m&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&Ki(a,u,l,h,c,f,v.x,v.y)&&se(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=m&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&Ki(a,u,l,h,c,f,x.x,x.y)&&se(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=_;){if(v.x>=p&&v.x<=m&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&Ki(a,u,l,h,c,f,v.x,v.y)&&se(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=m&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&Ki(a,u,l,h,c,f,x.x,x.y)&&se(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function PS(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Po(s,r)&&hd(s,i,i.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),nr(i),nr(i.next),i=n=r),i=i.next}while(i!==n);return Ci(i)}function LS(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&BS(o,a)){let l=fd(o,a);o=Ci(o,o.next),l=Ci(l,l.next),tr(o,t,e,i,s,r,0),tr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function RS(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=ud(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(US(c));for(s.sort(DS),r=0;r<s.length;r++)e=IS(s[r],e);return e}function DS(n,t){return n.x-t.x}function IS(n,t){const e=OS(n,t);if(!e)return t;const i=fd(e,n);return Ci(i,i.next),Ci(e,e.next)}function OS(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ki(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),er(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&NS(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function NS(n,t){return se(n.prev,n,t.prev)<0&&se(t.next,n,n.next)<0}function FS(n,t,e,i){let s=n;do s.z===0&&(s.z=Ka(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,zS(s)}function zS(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Ka(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function US(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ki(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function BS(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!kS(n,t)&&(er(n,t)&&er(t,n)&&VS(n,t)&&(se(n.prev,n,t.prev)||se(n,t.prev,t))||Po(n,t)&&se(n.prev,n,n.next)>0&&se(t.prev,t,t.next)>0)}function se(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Po(n,t){return n.x===t.x&&n.y===t.y}function hd(n,t,e,i){const s=qr(se(n,t,e)),r=qr(se(n,t,i)),o=qr(se(e,i,n)),a=qr(se(e,i,t));return!!(s!==r&&o!==a||s===0&&Wr(n,e,t)||r===0&&Wr(n,i,t)||o===0&&Wr(e,n,i)||a===0&&Wr(e,t,i))}function Wr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function qr(n){return n>0?1:n<0?-1:0}function kS(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&hd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function er(n,t){return se(n.prev,n,n.next)<0?se(n,t,n.next)>=0&&se(n,n.prev,t)>=0:se(n,t,n.prev)<0||se(n,n.next,t)<0}function VS(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function fd(n,t){const e=new Qa(n.i,n.x,n.y),i=new Qa(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function oh(n,t,e,i){const s=new Qa(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Qa(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function GS(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Rn{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Rn.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];ah(t),lh(i,t);let o=t.length;e.forEach(ah);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,lh(i,e[l]);const a=AS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ah(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function lh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class dd extends te{constructor(t=new Ws([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Dt(s,3)),this.setAttribute("uv",new Dt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:HS;let v,x=!1,E,A,R,M;_&&(v=_.getSpacedPoints(u),x=!0,f=!1,E=_.computeFrenetFrames(u,!1),A=new L,R=new L,M=new L),f||(d=0,p=0,g=0,m=0);const C=a.extractPoints(c);let D=C.shape;const Y=C.holes;if(!Rn.isClockWise(D)){D=D.reverse();for(let b=0,w=Y.length;b<w;b++){const I=Y[b];Rn.isClockWise(I)&&(Y[b]=I.reverse())}}const X=Rn.triangulateShape(D,Y),F=D;for(let b=0,w=Y.length;b<w;b++){const I=Y[b];D=D.concat(I)}function J(b,w,I){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().multiplyScalar(I).add(b)}const $=D.length,tt=X.length;function q(b,w,I){let U,B,it;const lt=b.x-w.x,Z=b.y-w.y,ft=I.x-b.x,st=I.y-b.y,T=lt*lt+Z*Z,S=lt*st-Z*ft;if(Math.abs(S)>Number.EPSILON){const O=Math.sqrt(T),Q=Math.sqrt(ft*ft+st*st),ot=w.x-Z/O,dt=w.y+lt/O,bt=I.x-st/Q,gt=I.y+ft/Q,et=((bt-ot)*st-(gt-dt)*ft)/(lt*st-Z*ft);U=ot+lt*et-b.x,B=dt+Z*et-b.y;const Tt=U*U+B*B;if(Tt<=2)return new xt(U,B);it=Math.sqrt(Tt/2)}else{let O=!1;lt>Number.EPSILON?ft>Number.EPSILON&&(O=!0):lt<-Number.EPSILON?ft<-Number.EPSILON&&(O=!0):Math.sign(Z)===Math.sign(st)&&(O=!0),O?(U=-Z,B=lt,it=Math.sqrt(T)):(U=lt,B=Z,it=Math.sqrt(T/2))}return new xt(U/it,B/it)}const k=[];for(let b=0,w=F.length,I=w-1,U=b+1;b<w;b++,I++,U++)I===w&&(I=0),U===w&&(U=0),k[b]=q(F[b],F[I],F[U]);const V=[];let K,H=k.concat();for(let b=0,w=Y.length;b<w;b++){const I=Y[b];K=[];for(let U=0,B=I.length,it=B-1,lt=U+1;U<B;U++,it++,lt++)it===B&&(it=0),lt===B&&(lt=0),K[U]=q(I[U],I[it],I[lt]);V.push(K),H=H.concat(K)}for(let b=0;b<d;b++){const w=b/d,I=p*Math.cos(w*Math.PI/2),U=g*Math.sin(w*Math.PI/2)+m;for(let B=0,it=F.length;B<it;B++){const lt=J(F[B],k[B],U);ut(lt.x,lt.y,-I)}for(let B=0,it=Y.length;B<it;B++){const lt=Y[B];K=V[B];for(let Z=0,ft=lt.length;Z<ft;Z++){const st=J(lt[Z],K[Z],U);ut(st.x,st.y,-I)}}}const mt=g+m;for(let b=0;b<$;b++){const w=f?J(D[b],H[b],mt):D[b];x?(R.copy(E.normals[0]).multiplyScalar(w.x),A.copy(E.binormals[0]).multiplyScalar(w.y),M.copy(v[0]).add(R).add(A),ut(M.x,M.y,M.z)):ut(w.x,w.y,0)}for(let b=1;b<=u;b++)for(let w=0;w<$;w++){const I=f?J(D[w],H[w],mt):D[w];x?(R.copy(E.normals[b]).multiplyScalar(I.x),A.copy(E.binormals[b]).multiplyScalar(I.y),M.copy(v[b]).add(R).add(A),ut(M.x,M.y,M.z)):ut(I.x,I.y,h/u*b)}for(let b=d-1;b>=0;b--){const w=b/d,I=p*Math.cos(w*Math.PI/2),U=g*Math.sin(w*Math.PI/2)+m;for(let B=0,it=F.length;B<it;B++){const lt=J(F[B],k[B],U);ut(lt.x,lt.y,h+I)}for(let B=0,it=Y.length;B<it;B++){const lt=Y[B];K=V[B];for(let Z=0,ft=lt.length;Z<ft;Z++){const st=J(lt[Z],K[Z],U);x?ut(st.x,st.y+v[u-1].y,v[u-1].x+I):ut(st.x,st.y,h+I)}}}St(),W();function St(){const b=s.length/3;if(f){let w=0,I=$*w;for(let U=0;U<tt;U++){const B=X[U];ht(B[2]+I,B[1]+I,B[0]+I)}w=u+d*2,I=$*w;for(let U=0;U<tt;U++){const B=X[U];ht(B[0]+I,B[1]+I,B[2]+I)}}else{for(let w=0;w<tt;w++){const I=X[w];ht(I[2],I[1],I[0])}for(let w=0;w<tt;w++){const I=X[w];ht(I[0]+$*u,I[1]+$*u,I[2]+$*u)}}i.addGroup(b,s.length/3-b,0)}function W(){const b=s.length/3;let w=0;z(F,w),w+=F.length;for(let I=0,U=Y.length;I<U;I++){const B=Y[I];z(B,w),w+=B.length}i.addGroup(b,s.length/3-b,1)}function z(b,w){let I=b.length;for(;--I>=0;){const U=I;let B=I-1;B<0&&(B=b.length-1);for(let it=0,lt=u+d*2;it<lt;it++){const Z=$*it,ft=$*(it+1),st=w+U+Z,T=w+B+Z,S=w+B+ft,O=w+U+ft;vt(st,T,S,O)}}}function ut(b,w,I){l.push(b),l.push(w),l.push(I)}function ht(b,w,I){pt(b),pt(w),pt(I);const U=s.length/3,B=y.generateTopUV(i,s,U-3,U-2,U-1);Mt(B[0]),Mt(B[1]),Mt(B[2])}function vt(b,w,I,U){pt(b),pt(w),pt(U),pt(w),pt(I),pt(U);const B=s.length/3,it=y.generateSideWallUV(i,s,B-6,B-3,B-2,B-1);Mt(it[0]),Mt(it[1]),Mt(it[3]),Mt(it[1]),Mt(it[2]),Mt(it[3])}function pt(b){s.push(l[b*3+0]),s.push(l[b*3+1]),s.push(l[b*3+2])}function Mt(b){r.push(b.x),r.push(b.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return WS(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dl[s.type]().fromJSON(s)),new dd(i,t.options)}}const HS={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new xt(r,o),new xt(a,l),new xt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],m=t[r*3],d=t[r*3+1],_=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new xt(o,1-l),new xt(c,1-h),new xt(f,1-g),new xt(m,1-_)]:[new xt(a,1-l),new xt(u,1-h),new xt(p,1-g),new xt(d,1-_)]}};function WS(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pd extends bs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pd(t.radius,t.detail)}}class md extends bs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new md(t.radius,t.detail)}}class gd extends te{constructor(t=.5,e=1,i=8,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,p=new L,g=new xt;for(let m=0;m<=s;m++){for(let d=0;d<=i;d++){const _=r+d/i*o;p.x=h*Math.cos(_),p.y=h*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let m=0;m<s;m++){const d=m*(i+1);for(let _=0;_<i;_++){const y=_+d,v=y,x=y+i+1,E=y+i+2,A=y+1;a.push(v,x,A),a.push(x,E,A)}}this.setIndex(a),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(u,2))}static fromJSON(t){return new gd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _d extends te{constructor(t=new Ws([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(r,3)),this.setAttribute("uv",new Dt(o,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let p=f.shape;const g=f.holes;Rn.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,_=g.length;d<_;d++){const y=g[d];Rn.isClockWise(y)===!0&&(g[d]=y.reverse())}const m=Rn.triangulateShape(p,g);for(let d=0,_=g.length;d<_;d++){const y=g[d];p=p.concat(y)}for(let d=0,_=p.length;d<_;d++){const y=p[d];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let d=0,_=m.length;d<_;d++){const y=m[d],v=y[0]+h,x=y[1]+h,E=y[2]+h;i.push(v,x,E),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return qS(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new _d(i,t.curveSegments)}}function qS(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Ol extends te{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,p=[],g=[],m=[],d=[];for(let _=0;_<=i;_++){const y=[],v=_/i;let x=0;_==0&&o==0?x=.5/e:_==i&&l==Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){const A=E/e;h.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),d.push(A+x,1-v),y.push(c++)}u.push(y)}for(let _=0;_<i;_++)for(let y=0;y<e;y++){const v=u[_][y+1],x=u[_][y],E=u[_+1][y],A=u[_+1][y+1];(_!==0||o>0)&&p.push(v,x,A),(_!==i-1||l<Math.PI)&&p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(m,3)),this.setAttribute("uv",new Dt(d,2))}static fromJSON(t){return new Ol(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xd extends bs{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xd(t.radius,t.detail)}}class vd extends te{constructor(t=1,e=.4,i=8,s=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const m=g/s*r,d=p/i*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(m),h.y=(t+e*Math.cos(d))*Math.sin(m),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const m=(s+1)*p+g-1,d=(s+1)*(p-1)+g-1,_=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(m,d,y),o.push(d,_,y)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(c,2))}static fromJSON(t){return new vd(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yd extends te{constructor(t=1,e=.4,i=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:s,p:r,q:o},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],c=[],u=[],h=new L,f=new L,p=new L,g=new L,m=new L,d=new L,_=new L;for(let v=0;v<=i;++v){const x=v/i*r*Math.PI*2;y(x,r,o,t,p),y(x+.01,r,o,t,g),d.subVectors(g,p),_.addVectors(g,p),m.crossVectors(d,_),_.crossVectors(m,d),m.normalize(),_.normalize();for(let E=0;E<=s;++E){const A=E/s*Math.PI*2,R=-e*Math.cos(A),M=e*Math.sin(A);h.x=p.x+(R*_.x+M*m.x),h.y=p.y+(R*_.y+M*m.y),h.z=p.z+(R*_.z+M*m.z),l.push(h.x,h.y,h.z),f.subVectors(h,p).normalize(),c.push(f.x,f.y,f.z),u.push(v/i),u.push(E/s)}}for(let v=1;v<=i;v++)for(let x=1;x<=s;x++){const E=(s+1)*(v-1)+(x-1),A=(s+1)*v+(x-1),R=(s+1)*v+x,M=(s+1)*(v-1)+x;a.push(E,A,M),a.push(A,R,M)}this.setIndex(a),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(u,2));function y(v,x,E,A,R){const M=Math.cos(v),C=Math.sin(v),D=E/x*v,Y=Math.cos(D);R.x=A*(2+Y)*.5*M,R.y=A*(2+Y)*C*.5,R.z=A*Math.sin(D)*.5}}static fromJSON(t){return new yd(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Md extends te{constructor(t=new sd(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new xt;let u=new L;const h=[],f=[],p=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(p,2));function m(){for(let v=0;v<e;v++)d(v);d(r===!1?e:0),y(),_()}function d(v){u=t.getPointAt(v/e,u);const x=o.normals[v],E=o.binormals[v];for(let A=0;A<=s;A++){const R=A/s*Math.PI*2,M=Math.sin(R),C=-Math.cos(R);l.x=C*x.x+M*E.x,l.y=C*x.y+M*E.y,l.z=C*x.z+M*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function _(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){const E=(s+1)*(v-1)+(x-1),A=(s+1)*v+(x-1),R=(s+1)*v+x,M=(s+1)*(v-1)+x;g.push(E,A,M),g.push(A,R,M)}}function y(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,p.push(c.x,c.y)}}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Md(new Dl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Lw extends te{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new L,r=new L;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,p=h.count;for(let g=f,m=f+p;g<m;g+=3)for(let d=0;d<3;d++){const _=a.getX(g+d),y=a.getX(g+(d+1)%3);s.fromBufferAttribute(o,_),r.fromBufferAttribute(o,y),ch(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),ch(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Dt(e,3))}}}function ch(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class Rw extends ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dw extends On{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Iw extends On{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ow extends On{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const lo={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class XS{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const jS=new XS;class Nl{constructor(t){this.manager=t!==void 0?t:jS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Sn={};class YS extends Error{constructor(t,e){super(t),this.response=e}}class Nw extends Nl{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=lo.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Sn[t]!==void 0){Sn[t].push({onLoad:e,onProgress:i,onError:s});return}Sn[t]=[],Sn[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Sn[t],h=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){y();function y(){h.read().then(({done:v,value:x})=>{if(v)_.close();else{m+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let A=0,R=u.length;A<R;A++){const M=u[A];M.onProgress&&M.onProgress(E)}_.enqueue(x),y()}})}}});return new Response(d)}else throw new YS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{lo.add(t,c);const u=Sn[t];delete Sn[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Sn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Sn[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class $S extends Nl{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=lo.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Qs("img");function l(){u(),lo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class JS extends Nl{constructor(t){super(t)}load(t,e,i,s){const r=new Be,o=new $S(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Fl extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Sa=new Qt,uh=new L,hh=new L;class bd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(uh),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fh=new Qt,Is=new L,wa=new L;class ZS extends bd{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Is.setFromMatrixPosition(t.matrixWorld),i.position.copy(Is),wa.copy(i.position),wa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(wa),i.updateMatrixWorld(),s.makeTranslation(-Is.x,-Is.y,-Is.z),fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}}class Fw extends Fl{constructor(t,e,i=0,s=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ZS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class KS extends bd{constructor(){super(new Xf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zw extends Fl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.target=new ge,this.shadow=new KS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class QS extends Fl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Uw{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=dh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dh(){return(typeof performance>"u"?Date:performance).now()}class Bw{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ph=new xt;class kw{constructor(t=new xt(1/0,1/0),e=new xt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ph.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ph.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Vw extends en{constructor(t,e,i){const s=new Ol(e,4,2),r=new wl({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=t,this.light.updateMatrixWorld(),this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Xr=new ys;class Gw extends td{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new te;r.setIndex(new Re(i,1)),r.setAttribute("position",new Re(s,3)),super(r,new Cl({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Xr.setFromObject(this.object),Xr.isEmpty())return;const e=Xr.min,i=Xr.max,s=this.geometry.attributes.position,r=s.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=i.y,r[5]=i.z,r[6]=e.x,r[7]=e.y,r[8]=i.z,r[9]=i.x,r[10]=e.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=e.z,r[15]=e.x,r[16]=i.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=i.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hw extends td{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new te;s.setAttribute("position",new Dt(e,3)),s.setAttribute("color",new Dt(i,3));const r=new Cl({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,i){const s=new Ht,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ww{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Za,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,o){return this.currentPath.bezierCurveTo(t,e,i,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){const y=[];for(let v=0,x=_.length;v<x;v++){const E=_[v],A=new Ws;A.curves=E.curves,y.push(A)}return y}function i(_,y){const v=y.length;let x=!1;for(let E=v-1,A=0;A<v;E=A++){let R=y[E],M=y[A],C=M.x-R.x,D=M.y-R.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(R=y[A],C=-C,M=y[E],D=-D),_.y<R.y||_.y>M.y)continue;if(_.y===R.y){if(_.x===R.x)return!0}else{const Y=D*(_.x-R.x)-C*(_.y-R.y);if(Y===0)return!0;if(Y<0)continue;x=!x}}else{if(_.y!==R.y)continue;if(M.x<=_.x&&_.x<=R.x||R.x<=_.x&&_.x<=M.x)return!0}}return x}const s=Rn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Ws,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=t?!u:u;const h=[],f=[];let p=[],g=0,m;f[g]=void 0,p[g]=[];for(let _=0,y=r.length;_<y;_++)a=r[_],m=a.getPoints(),o=s(m),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Ws,p:m},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:m[0]});if(!f[0])return e(r);if(f.length>1){let _=!1,y=0;for(let v=0,x=f.length;v<x;v++)h[v]=[];for(let v=0,x=f.length;v<x;v++){const E=p[v];for(let A=0;A<E.length;A++){const R=E[A];let M=!0;for(let C=0;C<f.length;C++)i(R.p,f[C].p)&&(v!==C&&y++,M?(M=!1,h[C].push(R)):_=!0);M&&h[v].push(R)}}y>0&&_===!1&&(p=h)}let d;for(let _=0,y=f.length;_<y;_++){l=f[_].s,c.push(l),d=p[_];for(let v=0,x=d.length;v<x;v++)l.holes.push(d[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);const tw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABcVBMVEUAAAD////+/v4BAQHIyMghISECAgJ0dHR6enre3t4EBAQDAwPX19fi4uKmpqaAgIDQ0NA7OzsGBgYRERG1tbWVlZXV1dVzc3OCgoJmZmb39/cWFhZlZWU/Pz+xsbGFhYWOjo6KiopsbGx7e3uYmJhgYGCNjY0PDw8tLS0oKChbW1txcXEXFxfExMTS0tL9/f3s7OyoqKirq6va2tpNTU3t7e1/f38FBQWtra1MTExFRUWjo6MjIyNUVFTMzMzJycltbW3h4eEeHh5CQkLKysp+fn53d3cyMjLl5eX5+fm+vr4vLy/R0dELCwvY2NgJCQlfX19paWk5OTkAAAD///8BAQECAgIMDAwmJib+/v7f399qampXV1cODg79/f3Nzc3AwMBra2u6urqwsLAGBgb09PSKiooWFhYZGRnExMQ3NzfX19eampqQkJBkZGSOjo7o6OhoaGgjIyOcnJwEBAT6+vp5eXni4uJmZmYDAwNdXV0Lv2DMAAAAU3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/kc3SeAAAAFISURBVHhetZPFkuswFET72g4zDDMzMzPje5KDMMzM8PXj8caJ7UxWOVp0laoXqqN7URimkj/B1FaeLEJBBmRdQXuU/Jv1DUwhoj0yG5sN8PYANRUwx1JahepyYKTTxIPoUuLugZX4WPLt1OhBRus50CYxyZ+iLuCyDBGdh+BxLVB3VklcAtY+miDrClY26m70cBJ4GM3+NEQTDy1EcaIMkdvoIdreEbt4fuRcEOKcH6Rjlu5ojoclcoR7iQQFoj4i6qcBZCGqMag01DM0rF7meHBaGbtKJDhRhvMX9uoc+9LPw/f4BCa5QHxq2jNj/E2L9AlgltMcn0dw4clQWAwxK7wlhwKOlgGcrEA2eli1I7UOthFyQQ6YzMP1DWO3m2D3yZyh1bBvAds+YGd3Dxo6F459AP/+Q0M3cu+Bv/dCLP5eGLPw8hbkB8nyeaUUhyruAAAAAElFTkSuQmCC",ew="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACW1BMVEUAAAD///8CAgIPDw8BAQF1dXVsbGwLCwujo6NeXl43NzesrKzPz8+EhIQSEhIDAwNpaWnFxcXo6OhbW1vf398VFRU/Pz+YmJiXl5e7u7uUlJTi4uI2Njbn5+ccHBzQ0NApKSkwMDBSUlKDg4MeHh65ubmlpaVQUFB/f3+dnZ04ODgFBQUICAgtLS1XV1eqqqpRUVHd3d2Li4tOTk6GhobZ2dn8/Pz9/f14eHhaWlq3t7cHBweoqKgMDAzX19c7OztfX19FRUW+vr7s7OwvLy8KCgohISF5eXnU1NR6enqRkZF2dnbAwMB9fX1jY2Ourq6Ojo7g4OAQEBD09PSwsLANDQ0ZGRnIyMjS0tK4uLhdXV1KSkrl5eVnZ2fW1tZvb29NTU2FhYXw8PBUVFQUFBRAQEAuLi49PT3z8/PHx8cRERGnp6fExMTY2Nj39/cjIyNGRkbMzMxcXFyBgYGenp68vLyQkJC0tLQrKysJCQkbGxsODg5gYGCampp7e3s6Ojr5+fnOzs6/v78XFxdPT0/GxsampqbT09MgICAGBga2trYlJSU5OTm1tbWkpKQyMjKgoKDKyspwcHAkJCQYGBiSkpIAAAABAQERERE4ODhZWVkbGxtycnJlZWVTU1MUFBRISEiAgIBEREShoaEzMzNqamqXl5cmJibBwcHFxcWOjo5NTU0WFhYJCQkxMTGWlpYtLS2ZmZkvLy80NDSHh4fd3d1oaGgCAgILCwtUVFSUlJTDw8NiYmJYWFjGxsY7OzvExMRKSkoTExOKioqQkJCwsLC1tbU9PT3m5uZ5kJL/AAAAlnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v6TC5kUAAAB5klEQVR4XqWTU5MkURSE81ZV0zbGto21bdu2bfP0GEvbNn7WRk/09lRXd0w/7PeQFRmnHu7NmwcACGEIkPrIl/okjk8MESikFFIQST3EcBgIxXA1FDwHKIYCECCC+jRvhJaaZgH6ss8w5ogG9O/UzebWgut56NS2VDNd+BYiJQUyfg27W4THqa8b0idRMDJCWGVjk15ukm/JzVK9HaQqyYEgzWHIGH9jXYYDKeWDK4qVPGKZnW3xsSqoKxdp5dKgOHr29KbRd2v0nfvUMeU20NL27kl0UGkjR3lcQGaqTGkDxrnSx6f1h0Gon0aECRNvQGauuAryTi588DApeWrkNRdMn2Ga6QiwL845c0vmzb9XzEwLNR7r4sgPS+xLS5ctX7Hy0Srl6jVr5S/WmauK1m+Q+8V96P5YtlFNcDOWBdpcbpP0QUC+M9sOzqhJ2boN4LfXuHdE9yFIRLa695Xf6fefzPadu7p6rxEX3Yfde/aqAmwf9rMD1oM8wBkgRkD1ofzDJnYEyqPWY8fdQEwfTpysdz4/ZYHrtOyV13Mmpg9BMjh0b8724NyH85+SS71x+nDhouGr5hsu/cBPXchL+8AX2tFq4cBfRlvNFYQHImp5ILdWEADoC/SIC/efixOfxMubcP3/Anriqm2DBhxnAAAAAElFTkSuQmCC",nw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAChVBMVEUAAAD///8BAQECAgIDAwPExMS+vr4ZGRmxsbHLy8uampoSEhLIyMhnZ2eXl5dOTk7e3t4mJiY1NTVMTEwwMDCwsLAfHx9WVlYMDAzo6Oinp6cgICBmZmbPz8+EhISCgoKfn58LCwshISFCQkLf399VVVW4uLgkJCTFxcVFRUUJCQlNTU2pqakjIyMUFBTw8PCYmJiFhYWUlJRqampISEg4ODgPDw91dXU0NDSdnZ0RERGzs7OKiopERERubm7y8vKMjIzHx8fQ0NAODg6mpqY3NzeDg4OIiIjz8/Ovr6/V1dVYWFjg4OAuLi6Pj4+Li4vk5OQyMjJ/f3+srKyZmZlkZGTn5+dHR0eWlpZsbGwHBwcTExNJSUnGxsZKSkopKSnp6ekGBgYvLy/t7e3a2trJycksLCwtLS29vb1fX1+1tbWrq6scHBxTU1N6enphYWHc3Ny8vLwoKCiSkpJXV1fj4+P9/f1vb29BQUFoaGjx8fG6uroQEBDs7OwNDQ2BgYGTk5M6OjqOjo5lZWV9fX3b29srKyt7e3s8PDz6+vo9PT2qqqoEBAS/v79dXV0+Pj7R0dEWFhZ4eHgFBQUiIiKgoKAqKiptbW3v7+/Dw8N2dnZAQEBwcHAKCgoAAABDQ0Ojo6MODg4KCgoBAQFdXV03NzdISEgJCQlaWlq4uLgMDAxRUVE1NTXb29vDw8OJiYlFRUXJyckbGxtSUlIfHx97e3s4ODhoaGiNjY0aGhpYWFiFhYUSEhLOzs4oKCgUFBQVFRVAQEC7u7vv7+/y8vLMzMwDAwOenp6SkpIICAhXV1cjIyP6+vo6Ojqnp6dycnLq6uocHBxsbGw5OTm+vr6dnZ0CAgJ4QJ/JAAAAnnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/hQHg5sAAAH/SURBVHherZPTzyVBFMSru+can23b1tq2bdu2bZ7PXtu2/fdsOneSmdn7sA+7v3Q/VKWS6pOcxn+DyFt7G1wKoWpjXD1jfRyAZcJdVWsBmeEgBE+qgsPZ7xZA9dI24hfCMSsAPYPKFY44Q4Gnorq1rbnbEkRdJ6KYGuLS1wK1dXjU+rjZ1B+2Jnr1uuNnLeChx3o3hmYgplPWqK5jcreVqzNpj2x7mrqjsXPfhBFdStDhDkDtDuimqAdR6U3KquzN2HxkVte6Xl48rC9Quj8gLE0d59drRR/bsFOJ4QPu1xk6MPBhTW4UY2zQYAxhLAh4/801DzqU4QtGZo9mOaVAsC/LQ8F4uz0QHAYmxjI3JkOZkjh12vQZxjGUmf6z58wNMDuFNIsYy4ktW1isT1gXLY4UiGYhUixbXrjSZ5XZFAqN+CcErF7D1gJIYsnrUr4TT9sAHTfubczbtNnXumVrxXbGnPkvGoz7YPnxs+QC7XTBxiLhf+kyrlxNMOxD6DUCmqzYtTusyL2H7Ba6vbdYC6gDmZL27T9QmXHwUETBESDu6B/7cOzZc2o8jhMnqeXN27B35PF1gdMfWuijGYFl1PCJznz5qgY0IrIhKpIRnYn8cIiUdOgggOQ9a4rHuUKktavaa+3Pp0MAAvRLtXRIxeURAlxI/fev969w2SaA33EEtXR/l4bfAAAAAElFTkSuQmCC",iw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA51BMVEUAAAD////+/v4CAgIDAwMHBwc8PDzn5+ddXV1eXl7d3d1QUFBOTk79/f27u7vIyMiGhobu7u4BAQH6+vr5+fnl5eWNjY07OzuVlZUFBQWRkZH///8CAgIAAAABAQH+/v78/Pz9/f0EBAT4+PgGBgb5+fn6+vqqqqoFBQX7+/sDAwMKCgrLy8uJiYlLS0vi4uIHBwdUVFQyMjIhISHh4eF6enpnZ2eTk5P09PRjY2OOjo7m5uZHR0fr6+sgICANDQ3p6eksLCyFhYXT09PMzMwZGRmSkpIYGBjc3Nz19fVzc3OVlZWZmZkfCldNAAAAG3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7Q4gSTAAABRUlEQVR4Xo1Th3KsMAyUufTe20o2XC3pvfee9/7/ewIaLh4Dk8tio5G17KyNRSSUzhQaNIo+uqJRcoJ4CP28iwqaBgolhMsSRBnp19inZQ+Wu9ZKPfQQ2js+uT4TFo9AwfblCsBNqBBk2xdI0Am/9iZrRONmNjJzNMo0QHAOY/uubRCZifwcCoTJKSB2GfC2N22tP2qdVlZdCwokAE7FeoNEGWEGDnAuHS7uNT5Ku6jTDhQODgl2PSH30KV5LevAghzYogfSekaIcShc+t1Hi5FWYaKGkaXyNrG8oiYRmQTn1PTbzAmXxvTaTm30WlgTKSj0ZX3jNlNwEQCYO/EKHvcPCWJ0Hp+eX14lh784RJvyDoMtTTmdVbcanxAWZq681RkBX2QH7CqFf/+bHHZHSOiKsP2tcSzXuKpxfCylw1vvD909BN+Y2FBm4NfNwQAAAABJRU5ErkJggg==",sw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABWVBMVEUAAAD///8BAQECAgIDAwP9/f0FBQUGBgb8/Pzx8fEEBAT6+vp3d3cICAj39/cHBwcUFBRAQECHh4eysrLb29u3t7cJCQkNDQ3p6elYWFidnZ3+/v5ra2vX19eurq4tLS1ycnIoKCgsLCzJycny8vLc3NwKCgovLy9vb29ZWVl8fHyXl5eLi4sTExMhISG/v799fX3v7+9CQkJGRkYrKyv4+PjPz8/5+flqamoZGRkgICAbGxtmZmbU1NSoqKjLy8vHx8fr6+tdXV1/f3/e3t6hoaE2NjakpKTR0dGvr6+WlpY1NTVzc3Pm5uY3Nzft7e0fHx++vr5kZGRSUlLw8PA9PT3o6OgaGhqQkJAXFxdXV1cAAAD///8CAgIBAQEcHBwLCwv7+/u5ubnX19d8fHz29vYICAjh4eEkJCSXl5cDAwO2trZhYWEFBQUqKioEBAT39/dBQUEPDw8QXwTDAAAAW3RSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+yyiEIQAAAXhJREFUeF6tkwWP4zAUhGdsB8tdZsZjZmZmfE6X6RD+P5ySNlI3aVWddJ8URSPZmYnePAASP+krp3sjh29IVuOf0OiKKOyfGodpnlpeEQVpzyDSkB87nEkyRJPck5j2DLGY4ACMMnhHXpXsLwogs4X5KpSHo7w7FCFrIfJTHnATu7L0i08kylkoCJ6Sq5gqc7ppiRxF+pwLuLCIDMrEwkOdjk8yOIYYUzJpBqOPfzvStzVKx9LaMXviZO336TPrgNdoGZ0NznH4fIF0SPICEwJehEoDXlq7XJIrtT7rjPn+Bq9d37hx0966jQiH53/HOgU6diDVoWRGVSede+R9uBXPdd1Qq/Y+REDZPhR5ZB9Dd+qDQb/Dalga5LOhzl14zhcvYTRe8TVUhz6sDXMUIRTe8O3gl9ywIvlqOdLs5Htu5/ugcVAutr48wv58H7T6/gEVDUBpFD9K1iJBmcSiYZDtQ3b+SqW6J/9r9dweyxapT5//dFl/7f0FEbdYPB/yQuAAAAAASUVORK5CYII=",rw={class:"w-full h-full"},ow=Pi({__name:"SnowyBg",setup(n){const{random:t,PI:e,floor:i,ceil:s,min:r,max:o,sin:a,cos:l}=Math,c=Tn(),u=Tn();let h,f,p,g,m;const d=1e4,_=new te,y=[],v=new Float32Array(d*3),x=1e3,E=new JS,A=E.load(tw),R=E.load(ew),M=E.load(nw),C=E.load(iw),D=E.load(sw),Y=[[[1,.2,.5],R,20],[[.95,.1,.5],M,15],[[.9,.05,.5],A,10],[[.85,0,.5],D,8],[[.8,0,.5],C,5]];let nt,X;pl(()=>{tt(),V(),nt=h/2,X=f/2,$(),k()});function F(){const K=Date.now()*5e-5;g.position.x+=(nt-g.position.x)*.05,g.position.y+=(-X-g.position.y)*.05,g.lookAt(p.position);for(let H=0;H<p.children.length;H++){const mt=p.children[H];mt instanceof ih&&(mt.rotation.y=K*(H<4?H+1:-(H+1)))}for(let H=0;H<y.length;H++){const mt=Y[H][0],St=360*(mt[0]+K)%360/360;y[H].color.setHSL(St,mt[1],mt[2])}}function J(K){K.isPrimary&&(nt=K.clientX-h/2,X=K.clientY-f/2)}function $(){for(let K=0;K<d;K++)v[K*3]=t()*(2*x)-x,v[K*3+1]=t()*(2*x)-x,v[K*3+2]=t()*(2*x)-x;_.setAttribute("position",new Re(v,3));for(let K=0;K<Y.length;K++){const H=Y[K][0],mt=Y[K][1],St=Y[K][2];y[K]=new ed({color:new Ht().setHSL(H[0],H[1],H[2]),size:St,map:mt,blending:ka,depthTest:!1,transparent:!0});const W=new ih(_,y[K]);W.rotation.set(t()*6,t()*6,t()*6),p.add(W)}}function tt(){p=new hS,g=new ze(75,h/f,1,2e3),g.position.z=1e3,m=new Zf({canvas:c.value,antialias:!0}),m.setSize(h,f),m.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",V),p.add(new QS(4210752))}let q=0;function k(){F(),m.render(p,g),q=requestAnimationFrame(k)}ml(()=>{cancelAnimationFrame(q)});function V(){var H;const K=(H=u.value)==null?void 0:H.getBoundingClientRect();h=K.width,f=K.height,g.aspect=h/f,g.updateProjectionMatrix(),m.setSize(h,f)}return(K,H)=>(dn(),os("div",rw,[An("div",{ref_key:"canvasCon",ref:u,class:"w-full h-full",onPointermove:J},[An("canvas",{ref_key:"canvasDom",ref:c,class:"block w-full h-full"},null,512)],544)]))}}),aw={class:"home min-h-100vh flex justify-center items-center"},lw=Pi({__name:"Home",setup(n){return(t,e)=>(dn(),os("div",aw,[ve(ow,{class:"snowBg absolute top-0 left-0"}),ve(m0)]))}}),cw=bo(lw,[["__scopeId","data-v-96af0d5f"]]),uw={path:"/",meta:{name:"home",show:!1},component:cw},hw={path:"/:path(.*)",meta:{name:"notfound",show:!1},component:l_},Sd=[uw,e_,n_,s_,i_,hw],wd=Zg({history:dg("/nova/"),routes:Sd});var fw={VITE_BASE_URL:"/nova/",BASE_URL:"/nova/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};console.log(fw);qm(rr).use(wd).mount("#app");export{Pw as $,Hw as A,QS as B,Ht as C,cr as D,Gw as E,He as F,Nr as G,ka as H,te as I,Re as J,Ew as K,ed as L,en as M,ih as N,Cl as O,ze as P,td as Q,Dw as R,hS as S,jn as T,ad as U,L as V,Zf as W,ld as X,Il as Y,cd as Z,bo as _,An as a,Ws as a0,dd as a1,pd as a2,xt as a3,od as a4,md as a5,Al as a6,bs as a7,gd as a8,_d as a9,Xf as aA,Dt as aB,vs as aC,Sw as aD,ww as aE,or as aF,Bw as aG,Cw as aH,Qe as aI,Rw as aJ,kw as aK,Aw as aL,Qf as aM,ne as aN,Nl as aO,Nw as aP,Ww as aQ,_w as aR,vw as aS,Ol as aa,xd as ab,vd as ac,yd as ad,Md as ae,Lw as af,mn as ag,Fw as ah,yw as ai,Iw as aj,Tw as ak,ge as al,wl as am,Kf as an,zw as ao,Vw as ap,Ow as aq,Pl as ar,dS as as,ei as at,kf as au,Ti as av,Ex as aw,JS as ax,Wa as ay,Uw as az,Tn as b,os as c,Pi as d,pl as e,ve as f,dw as g,mm as h,mw as i,xw as j,ir as k,Pe as l,sr as m,yi as n,dn as o,pw as p,gw as q,$p as r,bw as s,Od as t,Cn as u,Mw as v,Tp as w,ml as x,mr as y,wf as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarRate-NY57AMx4.js","assets/Card-_8FFN4S-.js","assets/Card--JYLWHeZ.css","assets/useGUI-7eNpPIRv.js","assets/dat.gui.module-PWGADmkp.js","assets/StarRate-goMyPD1E.css","assets/Sun-ei6IH0NT.js","assets/Sun-tgVRJqb7.css","assets/ProgressCube-HDymAYbh.js","assets/ProgressCube-eWgJnfMn.css","assets/DeathLoading-aACKdFiq.js","assets/DeathLoading-VK1Zzqw4.css","assets/HSCard--p_iwB4J.js","assets/p5.min-yLIrP2i3.js","assets/math-iY9w5Tob.js","assets/HSCard-kUWXWJ5w.css","assets/BarChart-pSmy98at.js","assets/BarChart-qSuNxLh2.css","assets/Water--YK2cyjM.js","assets/Water-OQyXYF0i.css","assets/FlowField-zW1JHeC-.js","assets/fabric-EsAJ704D.js","assets/noise-YmXM1zo_.js","assets/FlowField-FEZu6wcc.css","assets/FlowFieldLine-lHwerNUX.js","assets/CanvasTextPoint-ow_7YCwJ.js","assets/simplex-noise-Sr2aaxRX.js","assets/CanvasTextPoint-dqqB4fGo.css","assets/canvasPoint-HpGzuDSV.js","assets/color-8IY-PzcW.js","assets/flow-UIRMHifx.js","assets/THREE-template-tMPOFgEk.js","assets/stats.module-nRd2dy6L.js","assets/OrbitControls-SaVlCI6X.js","assets/THREE-template-fzmV_w6V.css","assets/CubeLine-KbzLseku.js","assets/CubeLine-6xeDAqW-.css","assets/AllBufferGeo-LrzmFCWi.js","assets/AllBufferGeo-Ep-44pbr.css","assets/ThreeTextPoint-etc2BaUF.js","assets/ThreeTextPoint-xRVaRKJa.css","assets/TextGeo-g9jAV21B.js","assets/helvetiker_regular.typeface-1CfxT3au.js","assets/TextGeo-Z7MNmJdc.css","assets/SolarSystem-FZBYI9K4.js","assets/RenderPass-wWZ8I9BR.js","assets/UnrealBloomPass-G9bJkUK8.js","assets/GlowBall-EET0UEa-.js","assets/Atom-YfLd7RDM.js","assets/Atom-ywus22j8.css","assets/LavaBall-XUhlA6yE.js","assets/LavaBall-pFTwMW3m.css","assets/LensFlares-0CunoogV.js","assets/LensFlares-ed54kSSq.css","assets/FlowFieldLine2-u89jzyp3.js","assets/P5Con-hsrGhuhJ.js","assets/P5Con-c1o8Vdhb.css","assets/paticle-cJjapdPX.js","assets/Maze-mGdVHfHA.js","assets/GradientLine-OXmUxX1n.js","assets/CodeRain--07pAeTN.js","assets/Cross-UFpZWbnH.js","assets/MusicRect-ubrG9M-4.js","assets/p5bezier-w8zctfOF.js","assets/p5bezier-vEik55gv.css","assets/MusicCircle-_30D_CZH.js","assets/BoRe-mFdc_yp7.js","assets/BoRe-7s0lgeq5.css","assets/Tangram-F4w5QpqQ.js","assets/Terrain-jrArTeUr.js","assets/P5-uoOgG_lL.js","assets/P5-ZoK4gmdE.css","assets/Terrain-p-hiz-n0.css","assets/DisperseParticle-JG2pmFwf.js","assets/DisperseParticle-B6wHoY0K.css","assets/DisperseParticle2-mSAONANV.js","assets/DisperseParticle2-zz1KYv97.css","assets/Snake-AaPvrjdC.js","assets/LightBall-PcojpoFW.js","assets/LightBall-aZGRnPd0.css","assets/FlappyBird-x9NfeBbI.js","assets/FlappyBird-TuicVYaj.css","assets/Firework-cNHbw4M6.js","assets/PixelPicture-lgWFi9-F.js","assets/PixelPicture-Q448YupA.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
