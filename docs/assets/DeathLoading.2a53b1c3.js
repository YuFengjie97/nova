import{d as p,b as l,h as g,o as _,c,a as s,F as f,r as h,x as m,u as n,n as i,t as x,_ as u,e as y}from"./index.a6073bd0.js";const L={class:"deatchLoading"},D={class:"petalCon"},C={class:"progressCon"},F={class:"val"},$=p({__name:"DeathLoading",setup(v){const{random:d}=Math,t=l(["#f368e0","#ff9f43","#ee5253","#0abde3","#10ac84"]);let a=l(0);return g(()=>{setInterval(()=>{let e=a.value;if(e<1){let r=d()*.2;e+=r,e=e>1?1:parseFloat(e.toFixed(1)),a.value=e}},800)}),(e,r)=>(_(),c("div",L,[s("div",D,[(_(),c(f,null,h(5,o=>s("div",{class:m(["petal",{petalFade:n(a)!==1}]),style:i({"--color":t.value[o-1],transform:`rotate(${360/5*o}deg)`,background:t.value[o-1]})},null,6)),64))]),s("div",C,[s("div",{class:"progress",style:i({"--progress":`${n(a)*100}%`})},null,4),s("div",F,x(n(a)*100)+"%",1)])]))}});const b=u($,[["__scopeId","data-v-2d183cf1"]]),k={class:"viewCon"},B=p({__name:"DeathLoading",setup(v){return(d,t)=>(_(),c("div",k,[y(b)]))}});const z=u(B,[["__scopeId","data-v-56556e4d"]]);export{z as default};