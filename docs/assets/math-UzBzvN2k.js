import{V as t,I as o}from"./index-7fEuWlIe.js";const{floor:f,random:c}=Math;function s(e,r){if(typeof e=="number"&&r===void 0)return f(c()*e);if(typeof e=="number"&&typeof r=="number")return f(c()*(r-e))+e;if(Array.isArray(e)){const n=s(e.length);return e[n]}}function i(e){const r=[];for(let n=0;n<e;n++)r.push(n);return function(){if(r.length===0)return;const n=f(c()*r.length);return r.splice(n,1)[0]}}function d(e,r,n,a,u){return e<=r?a:e>=n?u:(e-r)/(n-r)*(u-a)+a}function y(e,r,n){if(e instanceof t&&r instanceof t&&n instanceof t)return new t().copy(e).add(r).add(n).multiplyScalar(1/3);if(e instanceof o&&r instanceof o&&n instanceof o)return new o().copy(e).add(r).add(n).multiplyScalar(1/3);throw new Error("类型错误")}export{s as a,i as b,y as g,d as m};
