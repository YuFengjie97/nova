var k=Object.defineProperty;var I=(n,o,r)=>o in n?k(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r;var i=(n,o,r)=>(I(n,typeof o!="symbol"?o+"":o,r),r);import{P as g}from"./P5.11d1208b.js";import{p as l}from"./p5.min.8929ec5a.js";import{d as x,c as y,e as V,o as B,_ as b}from"./index.e5f7f35e.js";const F={class:"viewCon"},A=x({__name:"Firework",setup(n){const{floor:o,PI:r,random:C}=Math;let e,a=600,f=600,h=[],m=new l.Vector(0,.4);class p{constructor(s){i(this,"pos");i(this,"tarPos");i(this,"vel");i(this,"h",e.random(255));i(this,"d",3);i(this,"dInc",.07);i(this,"fires",[]);i(this,"isBoom",!1);i(this,"isAlive",!0);this.pos=new l.Vector(s?s.x:e.mouseX,f),this.tarPos=new l.Vector(s?s.x:e.mouseX,s?s.y:e.mouseY),this.vel=new l.Vector(0,o(-e.random(2,6)))}show(){e.fill(this.h,255,255),this.isBoom||e.circle(this.pos.x,this.pos.y,this.d);for(let s=this.fires.length-1;s>=0;s--)this.fires[s].update(),this.fires[s].show(),this.fires[s].isOver()&&(this.fires.splice(s,1),this.fires.length===0&&(this.isAlive=!1))}boom(){let s=o(e.random(30,50));for(let c=0;c<s;c++){let d=l.Vector.fromAngle(e.random(2*r),e.floor(e.random(5,8)));this.fires.push(new u(this.pos.copy(),d,this.d/2,this.h))}}update(){this.pos.y>this.tarPos.y?(this.pos.add(this.vel),this.d+=this.dInc):this.isBoom||(this.boom(),this.isBoom=!0)}}class u{constructor(s,c,d,v){i(this,"pos");i(this,"vel");i(this,"d");i(this,"dInc",.001);i(this,"h");i(this,"life",255);i(this,"lifeInc",4);this.pos=s,this.vel=c,this.d=d,this.h=v,this.lifeInc=e.floor(e.random(4,13))}show(){e.fill(this.h,255,this.life),e.circle(this.pos.x,this.pos.y,this.d)}update(){this.vel.add(m),this.vel.limit(4),this.pos.add(this.vel),this.d-=this.dInc,this.life-=this.lifeInc}isOver(){return this.life<=0||this.d<=0}}function _(){for(let t=h.length-1;t>=0;t--)h[t].update(),h[t].show(),h[t].isAlive||h.splice(t,1)}function w(t){e=t,e.setup=function(){e.createCanvas(a,f),e.colorMode(e.HSB),e.noStroke()},e.draw=function(){e.background("rgba(0,0,0,0.07)"),_()},e.mousePressed=function(){h.push(new p)},setInterval(()=>{for(let s=0;s<3;s++)h.push(new p(new l.Vector(e.random(a),e.random(f))))},1e3)}return(t,s)=>(B(),y("div",F,[V(g,{sketch:w})]))}});const S=b(A,[["__scopeId","data-v-8f83b193"]]);export{S as default};
