import{d,o as r,b as c,n,y as v,_ as i,r as t,h as u,l as _}from"./index-D5VwQozy.js";import{i as f}from"./initGUI-4v9Pkg7m.js";import"./dat.gui.module-PWGADmkp.js";const m=v('<div class="bar" data-v-3e929e8d><div class="front" data-v-3e929e8d></div><div class="behind" data-v-3e929e8d></div><div class="left" data-v-3e929e8d></div><div class="right" data-v-3e929e8d></div><div class="top" data-v-3e929e8d></div><div class="bottom" data-v-3e929e8d></div><div class="inner" data-v-3e929e8d></div></div>',1),p=[m],b=d({__name:"ProgressCube",props:{fillColor:{default:"rgba(236, 0, 140 , 0.8)"},val:{default:.5}},setup(e){return(a,s)=>(r(),c("div",{class:"progressCube",style:n({"--progress":`${e.val*100}%`,"--fillColor":e.fillColor})},p,4))}}),g=i(b,[["__scopeId","data-v-3e929e8d"]]),C=d({__name:"ProgressCube",setup(e){const a=t(.4),s=t("#e308cd"),l=t();return u(()=>{const{gui:o}=f(l.value);o.addColor(s,"value").name("color"),o.add(a,"value",0,1,.1).name("progress")}),(o,h)=>(r(),c("div",{class:"w-full h-full bg-#000 flex justify-center items-center",ref_key:"con",ref:l},[_(g,{class:"item","fill-color":s.value,val:a.value},null,8,["fill-color","val"])],512))}}),k=i(C,[["__scopeId","data-v-c10c7031"]]);export{k as default};
