import{c as C}from"./simplex-noise-Sr2aaxRX.js";import"./p5.min-yLIrP2i3.js";import{v as M,i as D}from"./color-8IY-PzcW.js";import{d as N,b as m,x as R,e as j,o as A,c as E,a as b}from"./index-mZy-ryn_.js";import"./math-iY9w5Tob.js";const F="/nova/assets/disco_kim-GV8PQNt_.jpg",K=N({__name:"canvasPoint",setup(V){const f=m(),s=m(),i=m(),k=C(),x=D([.5,0,.5],[.5,0,.5],[.5,0,.5],[0,0,.5]);let u=0;return R(()=>{cancelAnimationFrame(u)}),j(async()=>{var w,_;const{width:d}=f.value.getBoundingClientRect(),r=(w=s.value)==null?void 0:w.getContext("2d"),c=(_=i.value)==null?void 0:_.getContext("2d"),e=Math.floor(d/2);function y(){return new Promise(a=>{const t=new Image;t.src=F,t.onload=()=>{const n=t.height/t.width,o=Math.floor(e*n);s.value.width=e,s.value.height=o,i.value.width=e,i.value.height=o,r.drawImage(t,0,0,e,o),a(o)}})}const g=await y(),l=r.getImageData(0,0,e,g).data,h=6,p=[];for(let a=0;a<g;a+=h)for(let t=0;t<e;t+=h){const n=(a*e+t)*4,o=l[n]/255,P=l[n+1]/255,B=l[n+2]/255;.299*o+.578*P+.114*B>.4&&p.push({x:t,y:a})}function I(){const a=performance.now()/1e3;c.clearRect(0,0,e,e),p.forEach(({x:t,y:n})=>{c.fillStyle=M(x(k(t*.005,n*.001,a))),c.beginPath(),c.arc(t,n,2,0,Math.PI*2),c.fill()})}function v(){I(),u=requestAnimationFrame(v)}v()}),(d,r)=>(A(),E("div",{ref_key:"con",ref:f,class:"w-full min-h-full bg-#000 flex items-center justify-center"},[b("canvas",{ref_key:"canvas",ref:s,class:"block w-30%"},null,512),b("canvas",{ref_key:"canvas2",ref:i,class:"block w-30%"},null,512)],512))}});export{K as default};
