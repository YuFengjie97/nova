import{d as C,r as B,G as P,j as S,K as R,V as u,L as V,e as A,f as D,o as E}from"./index-Dk52mj26.js";import{a as F}from"./simplex-noise-BtZ5wMFy.js";import{v as M,i as N}from"./color-CVlT263R.js";const j={class:"w-full h-full"},J=C({__name:"delaunator",setup(q){const w=F(),{random:m}=Math,c=B(),x=N([1,.5,.5],[.5,.5,.5],[.75,1,.667],[.8,1,.333]);let d=0;return P(()=>{cancelAnimationFrame(d)}),S(()=>{if(!c.value)return;const{width:i,height:r}=c.value.getBoundingClientRect(),t=c.value.getContext("2d");t.strokeStyle="transparent",c.value.width=i,c.value.height=r;const k=1e3,h=[],f=[];T();function T(){const e=[];for(let n=0;n<k;n+=1){const a=m()*(i+200)-100,s=m()*(r+200)-100;e.push(a,s)}const o=new R(e).triangles;for(let n=0;n<o.length;n+=3){const a=o[n],s=o[n+1],p=o[n+2],y=new u(e[a*2],e[a*2+1]),v=new u(e[s*2],e[s*2+1]),_=new u(e[p*2],e[p*2+1]);h.push({p1:y,p2:v,p3:_});const b=V(y,v,_).multiply(new u(.001,.001));f.push(b)}}function g(){const e=performance.now()/8e3;t.fillStyle="rgba(0,0,0,0.02)",t.fillRect(0,0,i,r),h.forEach(({p1:l,p2:o,p3:n},a)=>{t.beginPath(),t.moveTo(l.x,l.y),t.lineTo(o.x,o.y),t.lineTo(n.x,n.y),t.lineTo(l.x,l.y);const s=M(x(w(f[a].x+e,f[a].y+e)));t.strokeStyle=s,t.fillStyle=s,t.stroke(),t.fill()}),d=requestAnimationFrame(g)}g()}),(i,r)=>(E(),A("div",j,[D("canvas",{ref_key:"canvas",ref:c,class:"block w-full h-full"},null,512)]))}});export{J as default};
