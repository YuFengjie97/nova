import{C as I}from"./Card.b7e33741.js";import{P as j}from"./P5Con.c1938251.js";import{p as k}from"./p5.min.4270ced6.js";import{a as R,g as E}from"./color.f1ca8acd.js";import{d as H,c as J,e as L,w as M,o as N,_ as T}from"./index.bb7097a3.js";const X={class:"gradientLine h-full flex justify-center items-center"},Y=H({__name:"GradientLine",setup(q){const{random:b,floor:v}=Math;let l=[],s=30,f=800,m=600,c=2,i=200,C=2;function P(e){let t=0;for(;t<s;)l.push(new R({$p:e,r:1,rangeWidth:f,rangeHeight:m,position:new k.Vector(b()*f,b()*m),color:E()},new k.Vector(e.random(-c,c),e.random(-c,c)))),t++}function V(e){for(let t=0;t<s;t++){let o=l[t];o.update(),o.draw(!1);for(let r=0;r<s;r++){let n=l[r];if(r===t)continue;let a=o.pos,d=n.pos,u=a.copy().sub(d).mag();if(u<i){let{x:_,y:g}=o.pos,{x:h,y:p}=n.pos,x=e.red(o.color),y=e.green(o.color),w=e.blue(o.color);const B=v(e.map(u,0,i,255,0));e.stroke(x,y,w,B),e.strokeWeight(C),e.line(_,g,h,p)}}}}function G(e){let{mouseX:t,mouseY:o}=e,r=new k.Vector(t,o);for(let n=0;n<s;n++){let a=l[n],d=r.copy().sub(a.pos).mag();if(d<i){let{x:u,y:_}=r,{x:g,y:h}=a.pos,p=e.red(a.color),x=e.green(a.color),y=e.blue(a.color);const w=v(e.map(d,0,i,255,0));e.stroke(p,x,y,w),e.strokeWeight(C),e.line(u,_,g,h)}}}function W(e){e.setup=function(){e.createCanvas(f,m),e.background("#2d3436"),P(e)},e.draw=function(){e.background("#2d3436"),V(e),G(e)}}return(e,t)=>(N(),J("div",X,[L(I,{class:"card"},{default:M(()=>[L(j,{sketch:W})]),_:1})]))}});const O=T(Y,[["__scopeId","data-v-cc91fdc6"]]);export{O as default};
