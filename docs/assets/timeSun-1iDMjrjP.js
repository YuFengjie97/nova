import"./p5.min-RRRi3zu6.js";import{m as w}from"./math-sd4iWpKB.js";import{d as Y,r as o,h as _,c as $,C as A,o as F,b as P,e as u,n as l,u as c,t as z,_ as I}from"./index-somVfJ8D.js";const R=Y({__name:"timeSun",setup(j){const{floor:i,abs:s}=Math,f=o();let g=0;_(()=>{const{width:e}=f.value.getBoundingClientRect();g=e});const n=o(0),m=o(0),C=$(()=>{const e=1440*n.value,a=i(e/60),t=i(e-a*60);return m.value=a,`${h(a)}:${h(t)}`}),S=$(()=>{const t=-(n.value-.5)*40,x=s((n.value-.5)*30)+10;return X(t,x)}),p=o({x:0,y:0}),r=o(),b=o(0);function M(){if(!r.value)return;const e=.1,{width:a,height:t}=r.value.getBoundingClientRect(),x=(n.value*a-p.value.x)*e,O=(s(n.value-.5)*t-p.value.y)*e;p.value.x+=x,p.value.y+=O}let d=0;A(()=>{cancelAnimationFrame(d)});function v(){M(),d=requestAnimationFrame(v)}_(()=>{v()});function k(e){const{offsetX:a}=e,t=a/g;n.value=t,b.value=w(-s(t-.5),-.5,0,20,100)}const B=$(()=>`--color: hsl(37, 90%,${w(-s(n.value-.5),-.5,0,10,50)}%)`);function h(e){return e>=10?`${e}`:`0${e}`}function X(e,a){return e=-e*.1,a=a*.1,`
  text-shadow:
  ${-e}px ${a}px 0 rgba(160, 160, 160, .1), 
  ${e}px ${-a}px 0 rgba(255, 255, 255, .1), 
  ${e}px ${-a}px 25px white, 
  ${-e}px ${a*1.9}px 1px rgba(160, 160, 160, 2), 
  ${-e*2}px ${a*3.8}px 2px #a0a0a0, 
  ${-e*3}px ${a*5.7}px 3px rgba(160, 160, 160, 0.66666666666667), 
  ${-e*4}px ${a*7.6}px 4px rgba(160, 160, 160, 0.5), 
  ${-e*5}px ${a*9.5}px 5px rgba(160, 160, 160, 0.4), 
  ${-e*6}px ${a*11.4}px 6px rgba(160, 160, 160, 0.33333333333333), 
  ${-e*7}px ${a*13.3}px 7px rgba(160, 160, 160, 0.28571428571429), 
  ${-e*8}px ${a*15.2}px 8px rgba(160, 160, 160, 0.25), 
  ${-e*9}px ${a*17.1}px 9px rgba(160, 160, 160, 0.22222222222222), 
  ${-e*10}px ${a*19}px 10px rgba(160, 160, 160, 0.2), 
  ${-e*11}px ${a*20.9}px 11px rgba(160, 160, 160, 0.18181818181818), 
  ${-e*12}px ${a*22.8}px 12px rgba(160, 160, 160, 0.16666666666667), 
  ${-e*13}px ${a*24.7}px 13px rgba(160, 160, 160, 0.15384615384615), 
  ${-e*14}px ${a*26.6}px 14px rgba(160, 160, 160, 0.14285714285714), 
  ${-e*15}px ${a*28.5}px 15px rgba(160, 160, 160, 0.13333333333333), 
  ${-e*16}px ${a*30.4}px 16px rgba(160, 160, 160, 0.125), 
  ${-e*17}px ${a*32.3}px 17px rgba(160, 160, 160, 0.11764705882353), 
  ${-e*18}px ${a*34.2}px 18px rgba(160, 160, 160, 0.11111111111111), 
  ${-e*19}px ${a*36.1}px 19px rgba(160, 160, 160, 0.10526315789474), 
  ${-e*20}px ${a*38}px 20px rgba(160, 160, 160, 0.1), 
  ${-e*21}px ${a*39.9}px 21px rgba(160, 160, 160, 0.095238095238095), 
  ${-e*22}px ${a*41.8}px 22px rgba(160, 160, 160, 0.090909090909091), 
  ${-e*23}px ${a*43.7}px 23px rgba(160, 160, 160, 0.08695652173913), 
  ${-e*24}px ${a*45.6}px 24px rgba(160, 160, 160, 0.083333333333333), 
  ${-e*25}px ${a*47.5}px 25px rgba(160, 160, 160, 0.08)
  `}return(e,a)=>(F(),P("div",{ref_key:"con",ref:f,class:"w-full min-h-full",style:l(`background: hsl(0,0%,${b.value}%)`),onMousemove:k},[u("div",{ref_key:"sunCon",ref:r,class:"relative w-full h-40vh overflow-hidden"},[u("div",{class:"sun",style:l([`transform: translate(calc(${p.value.x}px - 50%), ${p.value.y}px)`,c(B)])},null,4)],512),u("div",{class:"time w-full h-30vh flex justify-center font-size-8rem color-#e0e0e0 select-none",style:l(c(S))},z(`${m.value>=12?"PM":"AM"} ${c(C)}`),5)],36))}}),L=I(R,[["__scopeId","data-v-2738b6b5"]]);export{L as default};
