import{p as l}from"./p5.min.4a57bc93.js";import{d as _,b as c,h as f,l as d,o as r,c as p,a as i,t as m,p as u,_ as v}from"./index.87d26285.js";const h={class:"p5Container"},C={key:0,class:"framRate"},y=_({__name:"P5Con",props:{sketch:{type:Function,default:t=>{}},showFps:{type:Boolean,default:!0}},setup(t){const s=t,a=c();let e;const n=c(0);let o;return f(()=>{e=new l(s.sketch,a.value),s.showFps&&(o=setInterval(()=>{n.value=e.floor(e.frameRate())},1e3))}),d(()=>{e.remove(),o&&clearInterval(o)}),(k,b)=>(r(),p("div",h,[i("div",{class:"p5Con",ref_key:"p5Con",ref:a},null,512),t.showFps?(r(),p("div",C,"fps: "+m(n.value),1)):u("",!0)]))}});const B=v(y,[["__scopeId","data-v-7ebbcf1f"]]);export{B as P};
