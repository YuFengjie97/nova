import{c as M}from"./simplex-noise-Sr2aaxRX.js";import{m as N}from"./math-iY9w5Tob.js";import{d as P,b as _,e as S,o as B,c as I,a as w,_ as F}from"./index-242-C2dX.js";const V={class:"w-full min-h-full bg-#000 flex flex-col items-center gap-10px"},$=P({__name:"CanvasTextPoint",setup(j){const{PI:C}=Math,y=M();let i;const r=_();let e,o;const h=_();let l;const T="Verdana",m=100,b=`弱水三千
我只取一尿饮`;let u=[];function k(){r.value&&(i=r.value.getContext("2d"),e=r.value),h.value&&(o=h.value.getContext("2d"),l=h.value)}function D(){const n=b.split(`
`),c=n.map(t=>t.length).reduce((t,s)=>s>t?s:t,0),f=m*c+100,a=n.length*m+100;e.width=f,e.height=a,l.width=f,l.height=a;const v=n.length;i.font=`${m}px ${T}`,i.fillStyle="#fff";for(let t=0;t<v;t++)i.fillText(n[t],0,(t+.8)*a/v);u=[];const g=6;if(f>0){const t=i.getImageData(0,0,e.width,e.height);for(let s=0;s<e.height;s+=g)for(let d=0;d<e.width;d+=g)t.data[(d+s*e.width)*4]>0&&u.push({x:d,y:s})}}function x(){const n=performance.now()/1e3;for(let c=0,f=u.length;c<f;c++){const a=u[c];o.fillStyle="#fff",o.beginPath(),o.arc(a.x,a.y,N(y(a.x,a.y,Math.sin(n)),-1,1,0,1)*4+1,0,C*2),o.fill()}}function p(){o.clearRect(0,0,l.width,l.height),x(),requestAnimationFrame(p)}return S(()=>{k(),D(),x(),p()}),(n,c)=>(B(),I("div",V,[w("canvas",{ref_key:"canvas",ref:r,class:"canvas"},null,512),w("canvas",{ref_key:"canvas2",ref:h,class:"canvas"},null,512)]))}}),E=F($,[["__scopeId","data-v-9578f5da"]]);export{E as default};
