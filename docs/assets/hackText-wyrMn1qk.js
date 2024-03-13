import{d as T,r as d,h as j,o as A,b as E,e as H,n as I,_ as N}from"./index-Qb02CAS_.js";const P=T({__name:"hackText",setup(R){const{floor:s,random:a,ceil:f}=Math,h=d(),b=d(),o=200,g=d(""),p="123456789asfghjkl";function e(r){let c="";for(let t=0;t<r;t++)c+=p.charAt(s(a()*p.length));return c}return j(()=>{const{width:r,height:c}=h.value.getBoundingClientRect(),t=f(c/o),n=f(r/o),u=o,k=u,v=u/2;let m="",_="",C="";for(let l=0;l<n;l++)for(let i=0;i<t;i++){const $=i*n+l===t*n-1?"":",",x=`rgb(${s(a()*255)},${s(a()*255)},${s(a()*255)})`;m+=`linear-gradient(90deg, ${x},${x})${$}`,_+=`${l*o}px ${i*o}px${$}`,C+=`${o}px ${o}px${$}`}const y=e(t*n),z=e(t*n),S=e(t*n),w=e(t*n),B=e(t*n),M=e(t*n);g.value=`
  --content1: ${y};
  --content2: ${z};
  --content3: ${S};
  --content4: ${w};
  --content5: ${B};
  --content6: ${M};
  --font-size: ${o}px;
  --bg-color: ${m};
  --bg-pos: ${_};
  --bg-size: ${C};
  --line-height: ${k}px;
  --letter-spacing: ${v}px;
  `}),(r,c)=>(A(),E("div",{ref_key:"con",ref:h,class:"con w-full h-full"},[H("div",{ref_key:"charCon",ref:b,class:"char-con w-full h-full","data-content":"",style:I(g.value)},null,4)],512))}}),D=N(P,[["__scopeId","data-v-1bf26079"]]);export{D as default};
