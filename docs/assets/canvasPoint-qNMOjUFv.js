import{c as C}from"./simplex-noise-BtZ5wMFy.js";import"./p5.min-CSTknFkb.js";import{v as M,i as j}from"./color-BA4_CMbf.js";import{d as A,r as m,E as D,j as E,e as R,f as b,o as F}from"./index-BO-XTyUX.js";import"./math-BF_JwGsa.js";const N="/nova/assets/disco_kim-ZXw9A23-.jpg",J=A({__name:"canvasPoint",setup(q){const f=m(),s=m(),r=m(),k=C(),y=j([.5,0,.5],[.5,0,.5],[.5,0,.5],[0,0,.5]);let u=0;return D(()=>{cancelAnimationFrame(u)}),E(async()=>{var w,_;const{width:d}=f.value.getBoundingClientRect(),i=(w=s.value)==null?void 0:w.getContext("2d"),c=(_=r.value)==null?void 0:_.getContext("2d"),e=Math.floor(d/2);function x(){return new Promise(n=>{const t=new Image;t.src=N,t.onload=()=>{const a=t.height/t.width,o=Math.floor(e*a);s.value.width=e,s.value.height=o,r.value.width=e,r.value.height=o,i.drawImage(t,0,0,e,o),n(o)}})}const g=await x(),l=i.getImageData(0,0,e,g).data,h=6,p=[];for(let n=0;n<g;n+=h)for(let t=0;t<e;t+=h){const a=(n*e+t)*4,o=l[a]/255,P=l[a+1]/255,B=l[a+2]/255;.299*o+.578*P+.114*B>.4&&p.push({x:t,y:n})}function I(){const n=performance.now()/1e3;c.clearRect(0,0,e,e),p.forEach(({x:t,y:a})=>{c.fillStyle=M(y(k(t*.005,a*.001,n))),c.beginPath(),c.arc(t,a,2,0,Math.PI*2),c.fill()})}function v(){I(),u=requestAnimationFrame(v)}v()}),(d,i)=>(F(),R("div",{ref_key:"con",ref:f,class:"w-full min-h-full bg-#000 flex items-center justify-center"},[b("canvas",{ref_key:"canvas",ref:s,class:"block w-30%"},null,512),b("canvas",{ref_key:"canvas2",ref:r,class:"block w-30%"},null,512)],512))}});export{J as default};
