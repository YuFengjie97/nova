import{p as m}from"./p5.min.c7ff08ab.js";import{d as v,b as d,h as C,l as h,o as i,c as u,a as w,t as B,p as g,_ as y}from"./index.6f93ed9f.js";const k={class:"p5Container"},L={key:0,class:"framRate"},b=v({__name:"P5Con",props:{preLoad:null,setup:null,draw:null,isWEBGL:{type:Boolean,default:!1},showFps:{type:Boolean,default:!0}},setup(s){const t=s,a=d();let o;const r=d(0);let n,p="#2d3436";function f(e){e.preload=function(){t.preLoad&&t.preLoad(e)},e.setup=function(){var c;let{width:l,height:_}=(c=a.value)==null?void 0:c.getBoundingClientRect();e.createCanvas(l,_,t.isWEBGL?e.WEBGL:void 0),e.background(p),t.setup&&t.setup(e)},e.draw=function(){t.draw&&t.draw(e)}}return C(()=>{o=new m(f,a.value),t.showFps&&(n=setInterval(()=>{r.value=o.floor(o.frameRate())},1e3))}),h(()=>{o.remove(),n&&clearInterval(n)}),(e,l)=>(i(),u("div",k,[w("div",{class:"p5Con",ref_key:"p5Con",ref:a},null,512),s.showFps?(i(),u("div",L,"fps: "+B(r.value),1)):g("",!0)]))}});const P=y(b,[["__scopeId","data-v-b04da74e"]]);export{P};