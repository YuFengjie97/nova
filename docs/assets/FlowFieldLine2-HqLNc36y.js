var M=Object.defineProperty;var S=(n,t,i)=>t in n?M(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var u=(n,t,i)=>(S(n,typeof t!="symbol"?t+"":t,i),i);import{a as h}from"./p5.min-GDl2HyFv.js";import{C as T}from"./Card-LS1OdpR8.js";import{P as E}from"./P5Con-WimvEu7X.js";import{n as W}from"./noise-8YyA3euy.js";import{P as j}from"./paticle-Q1iTPl-2.js";import{d as q,o as D,b as G,l as y,p as J}from"./index-LMOq6Ftv.js";import"./color-MmjbexgR.js";import"./math-xX-10YLt.js";class K{constructor(t,i){u(this,"position");u(this,"size");u(this,"vec");this.position=t,this.size=i,this.vec=new h.Vector(0,0)}update(t){this.vec.set(t.x,t.y)}}const O={class:"flowFieldLine2 w-full h-full"},so=q({__name:"FlowFieldLine2",setup(n){const{random:t,floor:i,ceil:Q,cos:R,sin:U,PI:P}=Math;let l,c;const s=40;let m,r,F;const w=[],C=P*8,a=[],x=500,v=.1,z=.1,b=3e-4;let g=0;const B=!0;function I(){for(let o=0;o<l;o+=s)for(let e=0;e<c;e+=s)w.push(new K({x:o,y:e},s))}function N(){let o=0;for(let e=0;e<m;e++){o+=v,g+=b;let p=0;for(let f=0;f<r;f++){p+=z;const _=W(o,p,g)*C,d=h.Vector.fromAngle(_),L=f+e*r;w[L].update(d)}}}function V(o){let e=0;for(;e<x;)a.push(new j({$p:o,rangeWidth:l,rangeHeight:c,position:new h.Vector(t()*l,t()*c),r:2,color:"rgba(0, 0, 0, 0.25)"})),e++}function k(){let o=0;for(;o<x;){const{x:e,y:p}=a[o].pos,f=i(e/s),d=i(p/s)*r+f;d>=0&&d<F&&a[o].applyForce(w[d].vec),a[o].update(),a[o].draw(B),o++}}function A(o){l=o.width,c=o.height,m=i(l/s),r=i(c/s),F=m*r,o.background("rgba(0,0,0,0.5)"),o.colorMode(o.HSB,255),I(),V(o)}function H(o){N(),k()}return(o,e)=>(D(),G("div",O,[y(T,{class:"card"},{default:J(()=>[y(E,{setup:A,draw:H})]),_:1})]))}});export{so as default};
