import{p as v}from"./p5.min.83b8630c.js";import{d as C,b as d,h,l as w,o as i,c as u,a as B,t as g,p as y,_ as k}from"./index.487d7da2.js";const L={class:"p5Container"},x={key:0,class:"framRate"},E=C({__name:"P5Con",props:{preLoad:null,setup:null,draw:null,isWEBGL:{type:Boolean,default:!1},showFps:{type:Boolean,default:!0}},setup(s){const a=s,o=d();let t;const r=d(0);let n,f="#2d3436";function p(e){e.preload=function(){a.preLoad&&a.preLoad(e)},e.setup=function(){var c;let{width:l,height:_}=(c=o.value)==null?void 0:c.getBoundingClientRect(),m=e.createCanvas(l,_,a.isWEBGL?e.WEBGL:void 0);e.background(f),a.setup&&a.setup(e,m)},e.draw=function(){a.draw&&a.draw(e)}}return h(()=>{t=new v(p,o.value),a.showFps&&(n=setInterval(()=>{r.value=t.floor(t.frameRate())},1e3))}),w(()=>{t.remove(),n&&clearInterval(n)}),(e,l)=>(i(),u("div",L,[B("div",{class:"p5Con",ref_key:"p5Con",ref:o},null,512),s.showFps?(i(),u("div",x,"fps: "+g(r.value),1)):y("",!0)]))}});const b=k(E,[["__scopeId","data-v-ad0aa6af"]]);export{b as P};
