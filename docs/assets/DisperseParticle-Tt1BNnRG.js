var B=Object.defineProperty;var V=(a,e,i)=>e in a?B(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var l=(a,e,i)=>(V(a,typeof e!="symbol"?e+"":e,i),i);import{a as p}from"./p5.min-3HXR7yvj.js";import{P as b}from"./P5-6363oOEK.js";import{d as y,o as C,b as H,l as z,_ as D}from"./index-w3o6Dwr7.js";const M={class:"viewCon"},S=y({__name:"DisperseParticle",setup(a){let e,i=800,d=800,h=600,u=600,r=20,w=u/r,m=h/r,n=100,f=new p.Vector(i/2-n,d/2-n),c=[];class _{constructor(t){l(this,"pos");l(this,"d");l(this,"c",125);this.pos=t,this.d=r}draw(){let{pos:{x:t,y:o},d:P,c:k}=this;e.noStroke(),e.colorMode(e.HSB,100),e.fill(k,50,100),e.circle(t,o,P)}update(){let t=p.Vector.dist(f,this.pos),o=e.map(t,0,n,0,100);this.c=o,this.d=(o<50?50:o)/100*r}}function v(){for(let s=0;s<w;s++)for(let t=0;t<m;t++){let o=new _(new p.Vector(t*r+r/2,s*r+r/2));c.push(o),o.draw()}}function g(){for(let s=0,t=c.length;s<t;s++)c[s].update(),c[s].draw()}function x(s){e=s;let t;e.setup=function(){t=e.createCanvas(i,d),v()},e.draw=function(){e.translate(i/2-h/2,d/2-u/2),e.background("#2d3436"),g()},e.mouseMoved=function(){f.set(e.mouseX-n,e.mouseY-n)},e.windowResized=function(){let o=e.min(e.windowWidth,e.windowHeight);t.style(`width: ${o}px; height: ${o}px`)}}return(s,t)=>(C(),H("div",M,[z(b,{sketch:x})]))}}),N=D(S,[["__scopeId","data-v-b2c54193"]]);export{N as default};
