import{C as R}from"./Card.b62ece7f.js";import{P as j}from"./P5Con.9ce61bd5.js";import{p as b}from"./p5.min.11983fea.js";import{a as E,g as H}from"./color.3bfe44ce.js";import{d as J,c as M,e as P,w as N,o as T}from"./index.aee3fb30.js";const X={class:"gradientLine viewCon"},K=J({__name:"GradientLine",setup(Y){const{random:k,floor:C}=Math;let n=[],i=30,u,f,s=2,c=200,v=2;function V(e){let t=0;for(;t<i;)n.push(new E({$p:e,r:1,rangeWidth:u,rangeHeight:f,position:new b.Vector(k()*u,k()*f),color:H()},new b.Vector(e.random(-s,s),e.random(-s,s)))),t++}function L(e){for(let t=0;t<i;t++){let o=n[t];o.update(),o.draw(!1);for(let r=0;r<i;r++){let a=n[r];if(r===t)continue;let l=o.pos,d=a.pos,m=l.copy().sub(d).mag();if(m<c){let{x:g,y:h}=o.pos,{x:p,y:w}=a.pos,x=e.red(o.color),_=e.green(o.color),y=e.blue(o.color);const I=C(e.map(m,0,c,255,0));e.stroke(x,_,y,I),e.strokeWeight(v),e.line(g,h,p,w)}}}}function W(e){let{mouseX:t,mouseY:o}=e,r=new b.Vector(t,o);for(let a=0;a<i;a++){let l=n[a],d=r.copy().sub(l.pos).mag();if(d<c){let{x:m,y:g}=r,{x:h,y:p}=l.pos,w=e.red(l.color),x=e.green(l.color),_=e.blue(l.color);const y=C(e.map(d,0,c,255,0));e.stroke(w,x,_,y),e.strokeWeight(v),e.line(m,g,h,p)}}}function B(e){u=e.width,f=e.height,e.background("#2d3436"),V(e)}function G(e){e.background("#2d3436"),L(e),W(e)}return(e,t)=>(T(),M("div",X,[P(R,{class:"card"},{default:N(()=>[P(j,{setup:B,draw:G})]),_:1})]))}});export{K as default};
