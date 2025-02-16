import{d as M,r as $,j as T,e as A,f as E,n as H,o as I,_ as N}from"./index-CXaHQ9wk.js";const o=200,x="123456789asfghjkl",P=M({__name:"hackText",setup(R){const{floor:s,random:a,ceil:d}=Math,h=$(),b=$(),g=$("");function e(r){let c="";for(let t=0;t<r;t++)c+=x.charAt(s(a()*x.length));return c}return T(()=>{const{width:r,height:c}=h.value.getBoundingClientRect(),t=d(c/o),n=d(r/o),p=o,k=p,v=p/2;let u="",m="",_="";for(let l=0;l<n;l++)for(let i=0;i<t;i++){const f=i*n+l===t*n-1?"":",",C=`rgb(${s(a()*255)},${s(a()*255)},${s(a()*255)})`;u+=`linear-gradient(90deg, ${C},${C})${f}`,m+=`${l*o}px ${i*o}px${f}`,_+=`${o}px ${o}px${f}`}const y=e(t*n),z=e(t*n),S=e(t*n),w=e(t*n),B=e(t*n),j=e(t*n);g.value=`
  --content1: ${y};
  --content2: ${z};
  --content3: ${S};
  --content4: ${w};
  --content5: ${B};
  --content6: ${j};
  --font-size: ${o}px;
  --bg-color: ${u};
  --bg-pos: ${m};
  --bg-size: ${_};
  --line-height: ${k}px;
  --letter-spacing: ${v}px;
  `}),(r,c)=>(I(),A("div",{ref_key:"con",ref:h,class:"con w-full h-full"},[E("div",{ref_key:"charCon",ref:b,class:"char-con w-full h-full","data-content":"",style:H(g.value)},null,4)],512))}}),D=N(P,[["__scopeId","data-v-1bf26079"]]);export{D as default};
