import{D as C}from"./index-WM3n2avM.js";import{a as B}from"./simplex-noise-CoJLqHZY.js";import{d as P,r as S,C as D,h as R,V as u,o as V,b as A,e as E}from"./index-4DVSqO0R.js";import{g as F}from"./math-eBeJncVw.js";import{v as M,i as N}from"./color-uudzt06y.js";const q={class:"w-full h-full"},Q=P({__name:"delaunator",setup(I){const w=B(),{random:m}=Math,c=S(),x=N([1,.5,.5],[.5,.5,.5],[.75,1,.667],[.8,1,.333]);let d=0;return D(()=>{cancelAnimationFrame(d)}),R(()=>{if(!c.value)return;const{width:r,height:i}=c.value.getBoundingClientRect(),t=c.value.getContext("2d");t.strokeStyle="transparent",c.value.width=r,c.value.height=i;const b=1e3,h=[],f=[];k();function k(){const e=[];for(let n=0;n<b;n+=1){const a=m()*(r+200)-100,s=m()*(i+200)-100;e.push(a,s)}const o=new C(e).triangles;for(let n=0;n<o.length;n+=3){const a=o[n],s=o[n+1],p=o[n+2],y=new u(e[a*2],e[a*2+1]),v=new u(e[s*2],e[s*2+1]),_=new u(e[p*2],e[p*2+1]);h.push({p1:y,p2:v,p3:_});const T=F(y,v,_).multiply(new u(.001,.001));f.push(T)}}function g(){const e=performance.now()/8e3;t.fillStyle="rgba(0,0,0,0.02)",t.fillRect(0,0,r,i),h.forEach(({p1:l,p2:o,p3:n},a)=>{t.beginPath(),t.moveTo(l.x,l.y),t.lineTo(o.x,o.y),t.lineTo(n.x,n.y),t.lineTo(l.x,l.y);const s=M(x(w(f[a].x+e,f[a].y+e)));t.strokeStyle=s,t.fillStyle=s,t.stroke(),t.fill()}),d=requestAnimationFrame(g)}g()}),(r,i)=>(V(),A("div",q,[E("canvas",{ref_key:"canvas",ref:c,class:"block w-full h-full"},null,512)]))}});export{Q as default};
