var S=Object.defineProperty;var V=(n,r,t)=>r in n?S(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t;var o=(n,r,t)=>(V(n,typeof r!="symbol"?r+"":r,t),t);import{P as y}from"./P5.091e3715.js";import{p}from"./p5.min.dee423cf.js";import{d as C,c as I,e as L,o as g,_ as P}from"./index.87ed8e70.js";const j={class:"viewCon"},E=C({__name:"CrossLine",setup(n){const{floor:r}=Math;let t,h=600,l=40,d=r(h/l),_=3,v=["#ff2020","#ffa202","#fff000","#2ffd32","#342def","#7221fd","#9820fc"];function x(k){t=k;let c=[],a=[];function m(){for(let s=0;s<d;s++)c.push(new b(new p.Vector(-h-l*s,l*s),"horizontal",v[(s+1)%7])),a.push(new b(new p.Vector(l*s,-h-l*s),"vertical",v[(s+2)%7]))}function z(){for(let s=0;s<d;s++){c[s].update(),a[s].update();for(let e=0;e<d;e++)!c[s].isStop&&!a[s].isStop&&(c[s].blocks[e].update(),a[s].blocks[e].update()),c[s].blocks[e].zIndex===a[e].blocks[s].zIndex?(c[s].blocks[e].draw(),a[e].blocks[s].draw()):(a[e].blocks[s].draw(),c[s].blocks[e].draw())}}class w{constructor(e,f,u,i,B){o(this,"pos");o(this,"vel");o(this,"c");o(this,"zIndex");o(this,"dir");this.pos=e,this.vel=f,this.c=u,this.zIndex=i,this.dir=B}update(){this.pos.add(this.vel)}draw(){t.noStroke(),t.fill(this.c),t.rect(this.pos.x,this.pos.y,l,l)}}class b{constructor(e,f,u){o(this,"pos");o(this,"dir");o(this,"vel");o(this,"c");o(this,"blocks",[]);o(this,"isStop",!1);if(this.pos=e,this.dir=f,this.c=u,this.dir==="horizontal"){this.vel=new p.Vector(_,0);for(let i=0;i<d;i++)this.blocks.push(new w(new p.Vector(this.pos.x+i*l,this.pos.y),this.vel,u,i%2,f))}else{this.vel=new p.Vector(0,_);for(let i=0;i<d;i++)this.blocks.push(new w(new p.Vector(this.pos.x,this.pos.y+i*l),this.vel,u,i%2,f))}}update(){return this.dir==="horizontal"?this.pos.x<0?this.pos.add(this.vel):this.isStop=!0:this.pos.y<0?this.pos.add(this.vel):this.isStop=!0,this.isStop}}t.setup=function(){t.createCanvas(h,h),m()},t.draw=function(){t.background("#2d3436"),z()}}return(k,c)=>(g(),I("div",j,[L(y,{sketch:x})]))}});const D=P(E,[["__scopeId","data-v-208033fa"]]);export{D as default};
