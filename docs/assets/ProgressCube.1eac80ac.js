import{G as _}from"./dat.gui.module.5aaed78b.js";import{d as c,c as r,n as i,o as v,v as u,_ as n,b as l,e as p}from"./index.71e5d15b.js";const f=u('<div class="bar" data-v-3e929e8d><div class="front" data-v-3e929e8d></div><div class="behind" data-v-3e929e8d></div><div class="left" data-v-3e929e8d></div><div class="right" data-v-3e929e8d></div><div class="top" data-v-3e929e8d></div><div class="bottom" data-v-3e929e8d></div><div class="inner" data-v-3e929e8d></div></div>',1),g=[f],C=c({__name:"ProgressCube",props:{fillColor:{default:"rgba(236, 0, 140 , 0.8)"},val:{default:.5}},setup(s){return(a,o)=>(v(),r("div",{class:"progressCube",style:i({"--progress":`${s.val*100}%`,"--fillColor":s.fillColor})},g,4))}});const m=n(C,[["__scopeId","data-v-3e929e8d"]]),b={class:"viewCon"},h=c({__name:"ProgressCube",setup(s){const a=l(.4),o=l("#e308cd"),t={color:"#0984e3",val:.4},d=new _;return d.addColor(t,"color").onChange(e=>{o.value=e}),d.add(t,"val",0,1,.1).onChange(e=>{a.value=parseFloat(e.toFixed(1))}),(e,x)=>(v(),r("div",b,[p(m,{class:"item","fill-color":o.value,val:a.value},null,8,["fill-color","val"])]))}});const $=n(h,[["__scopeId","data-v-549995ec"]]);export{$ as default};