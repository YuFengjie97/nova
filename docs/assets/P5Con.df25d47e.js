import{p as v}from"./p5.min.57e3792e.js";import{d as C,b as u,h as P,l as h,o as c,c as i,a as y,t as k,p as w,_ as B}from"./index.ab691cc5.js";const R={class:"p5Container"},g={key:0,class:"framRate"},L=C({__name:"P5Con",props:{preLoad:null,setup:null,draw:null,mousePressed:null,mouseReleased:null,keyPressed:null,isWEBGL:{type:Boolean,default:!1},showFps:{type:Boolean,default:!0}},setup(a){const e=a,t=u();let o;const l=u(0);let n,f="#2d3436";function m(s){s.preload=function(){e.preLoad&&e.preLoad(s)},s.setup=function(){var d;let{width:r,height:p}=(d=t.value)==null?void 0:d.getBoundingClientRect(),_=s.createCanvas(r,p,e.isWEBGL?s.WEBGL:void 0);s.background(f),e.setup&&e.setup(s,_)},s.draw=function(){e.draw&&e.draw(s)},s.mousePressed=function(){e.mousePressed&&e.mousePressed()},s.mouseReleased=function(){e.mouseReleased&&e.mouseReleased()},s.keyPressed=function(){e.keyPressed&&e.keyPressed()}}return P(()=>{o=new v(m,t.value),e.showFps&&(n=setInterval(()=>{l.value=o.floor(o.frameRate())},1e3))}),h(()=>{o.remove(),n&&clearInterval(n)}),(s,r)=>(c(),i("div",R,[y("div",{class:"p5Con",ref_key:"p5Con",ref:t},null,512),a.showFps?(c(),i("div",g,"fps: "+k(l.value),1)):w("",!0)]))}});const E=B(L,[["__scopeId","data-v-81d39bf9"]]);export{E as P};
