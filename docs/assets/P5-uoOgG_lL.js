import{a as l}from"./p5.min-yLIrP2i3.js";import{d as f,b as r,e as i,x as m,o as c,c as p,a as d,t as _,aS as u,_ as v}from"./index-mZy-ryn_.js";const h={class:"p5Container"},k={key:0,class:"framRate"},C=f({__name:"P5",props:{sketch:{type:Function,default:t=>{}},showFps:{type:Boolean,default:!0}},setup(t){const o=t,s=r();let e;const n=r(0);let a;return i(()=>{e=new l(o.sketch,s.value),o.showFps&&(a=setInterval(()=>{n.value=e.floor(e.frameRate())},1e3))}),m(()=>{e.remove(),a&&clearInterval(a)}),(y,w)=>(c(),p("div",h,[d("div",{ref_key:"p5Con",ref:s,class:"p5Con"},null,512),t.showFps?(c(),p("div",k," fps: "+_(n.value),1)):u("",!0)]))}}),F=v(C,[["__scopeId","data-v-5553c418"]]);export{F as P};
