import{d as p,r as _,h as g,o as l,b as r,e as s,F as v,j as h,n as i,u as n,t as m,g as x,_ as u,l as L}from"./index-w3o6Dwr7.js";const y={class:"deatchLoading"},D={class:"petalCon"},F={class:"progressCon"},$={class:"val"},b=p({__name:"DeathLoading",setup(f){const{random:c}=Math,t=_(["#f368e0","#ff9f43","#ee5253","#0abde3","#10ac84"]);let a=_(0);return g(()=>{setInterval(()=>{let e=a.value;if(e<1){let d=c()*.2;e+=d,e=e>1?1:parseFloat(e.toFixed(1)),a.value=e}},800)}),(e,d)=>(l(),r("div",y,[s("div",D,[(l(),r(v,null,h(5,o=>s("div",{class:x(["petal",{petalFade:n(a)!==1}]),style:i({"--color":t.value[o-1],transform:`rotate(${360/5*o}deg)`,background:t.value[o-1]})},null,6)),64))]),s("div",F,[s("div",{class:"progress",style:i({"--progress":`${n(a)*100}%`})},null,4),s("div",$,m(n(a)*100)+"%",1)])]))}}),C=u(b,[["__scopeId","data-v-431c3a66"]]),k={class:"w-full h-full flex justify-center align-items bg-#000"},B=p({__name:"DeathLoading",setup(f){return(c,t)=>(l(),r("div",k,[L(C)]))}}),j=u(B,[["__scopeId","data-v-1ea0774f"]]);export{j as default};
