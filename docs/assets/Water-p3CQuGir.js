import"./p5.min-DK4k5B0I.js";import{a as b}from"./math-iY9w5Tob.js";import{d as M,b as a,o as r,c as n,a as m,n as h,F as w,r as B,_ as $,f as E}from"./index-242-C2dX.js";const F=M({__name:"Water",props:{dropNum:{default:40}},setup(d){const l=d,{random:c,floor:f}=Math,x=a();let y=20,k=100;const z=a(.05),g=a(.3),i=a(!1),s=a([]),D=.5,_=1;let p=.1;const u=a(_);function N(){var e;p=(_-D)/l.dropNum;for(let t=0;t<l.dropNum;t++)(e=s.value)==null||e.push({top:50,left:50,size:20})}N();function C(){s.value.forEach((e,t)=>{e.left=f(c()*100),e.top=f(c()*100),e.size=b(y,k),u.value-=p})}function S(){s.value.forEach((e,t)=>{e.left=50,e.top=50,u.value+=p})}function W(){i.value?S():C(),i.value=!i.value}return(e,t)=>(r(),n("div",{class:"water",ref_key:"con",ref:x},[m("div",{class:"base",style:h({transform:`translate(-50%, -50%) scale(${u.value})`})},null,4),m("div",{class:"clickMe",onClick:W},"Click Me"),(r(!0),n(w,null,B(s.value,(o,v)=>(r(),n("div",{class:"drop",key:v,style:h({top:`${o.top}%`,left:`${o.left}%`,width:`${o.size}px`,height:`${o.size}px`,"transition-delay":`${z.value*v}s`,"transition-duration":`${g.value}s`})},null,4))),128))],512))}}),I=$(F,[["__scopeId","data-v-ea929e30"]]),V={class:"viewCon"},A=M({__name:"Water",setup(d){return(l,c)=>(r(),n("div",V,[E(I)]))}}),q=$(A,[["__scopeId","data-v-46deb677"]]);export{q as default};
