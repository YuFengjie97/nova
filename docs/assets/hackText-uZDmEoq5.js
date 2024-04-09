import{d as T,r as d,h as j,o as A,b as E,e as H,n as I,_ as N}from"./index-CNxnBlAo.js";const o=200,x="123456789asfghjkl",P=T({__name:"hackText",setup(R){const{floor:s,random:a,ceil:f}=Math,h=d(),b=d(),g=d("");function e(r){let c="";for(let t=0;t<r;t++)c+=x.charAt(s(a()*x.length));return c}return j(()=>{const{width:r,height:c}=h.value.getBoundingClientRect(),t=f(c/o),n=f(r/o),p=o,k=p,v=p/2;let u="",m="",_="";for(let l=0;l<n;l++)for(let i=0;i<t;i++){const $=i*n+l===t*n-1?"":",",C=`rgb(${s(a()*255)},${s(a()*255)},${s(a()*255)})`;u+=`linear-gradient(90deg, ${C},${C})${$}`,m+=`${l*o}px ${i*o}px${$}`,_+=`${o}px ${o}px${$}`}const y=e(t*n),z=e(t*n),S=e(t*n),w=e(t*n),B=e(t*n),M=e(t*n);g.value=`
  --content1: ${y};
  --content2: ${z};
  --content3: ${S};
  --content4: ${w};
  --content5: ${B};
  --content6: ${M};
  --font-size: ${o}px;
  --bg-color: ${u};
  --bg-pos: ${m};
  --bg-size: ${_};
  --line-height: ${k}px;
  --letter-spacing: ${v}px;
  `}),(r,c)=>(A(),E("div",{ref_key:"con",ref:h,class:"con w-full h-full"},[H("div",{ref_key:"charCon",ref:b,class:"char-con w-full h-full","data-content":"",style:I(g.value)},null,4)],512))}}),D=N(P,[["__scopeId","data-v-1bf26079"]]);export{D as default};
