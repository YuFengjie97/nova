var g=Object.defineProperty;var k=(l,o,r)=>o in l?g(l,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[o]=r;var i=(l,o,r)=>(k(l,typeof o!="symbol"?o+"":o,r),r);import{d as I,b2 as f,r as _,e as B,q as V,o as y}from"./index-Dk52mj26.js";import{P as x}from"./P5-33W7Gzbn.js";const M=I({__name:"Firework",setup(l){const{floor:o,PI:r,random:b}=Math;let s;const h=[],p=new f.Vector(0,.4);class d{constructor(e){i(this,"pos");i(this,"tarPos");i(this,"vel");i(this,"h",s.random(255));i(this,"d",3);i(this,"dInc",.07);i(this,"fires",[]);i(this,"isBoom",!1);i(this,"isAlive",!0);this.pos=new f.Vector(e?e.x:s.mouseX,400),this.tarPos=new f.Vector(e?e.x:s.mouseX,e?e.y:s.mouseY),this.vel=new f.Vector(0,o(-s.random(2,6)))}show(){s.fill(this.h,255,255),this.isBoom||s.circle(this.pos.x,this.pos.y,this.d);for(let e=this.fires.length-1;e>=0;e--)this.fires[e].update(),this.fires[e].show(),this.fires[e].isOver()&&(this.fires.splice(e,1),this.fires.length===0&&(this.isAlive=!1))}boom(){const e=o(s.random(30,50));for(let n=0;n<e;n++){const c=f.Vector.fromAngle(s.random(2*r),s.floor(s.random(5,8)));this.fires.push(new u(this.pos.copy(),c,this.d/2,this.h))}}update(){this.pos.y>this.tarPos.y?(this.pos.add(this.vel),this.d+=this.dInc):this.isBoom||(this.boom(),this.isBoom=!0)}}class u{constructor(e,n,c,v){i(this,"pos");i(this,"vel");i(this,"d");i(this,"dInc",.001);i(this,"h");i(this,"life",255);i(this,"lifeInc",4);this.pos=e,this.vel=n,this.d=c,this.h=v,this.lifeInc=s.floor(s.random(4,13))}show(){s.fill(this.h,255,this.life),s.circle(this.pos.x,this.pos.y,this.d)}update(){this.vel.add(p),this.vel.limit(4),this.pos.add(this.vel),this.d-=this.dInc,this.life-=this.lifeInc}isOver(){return this.life<=0||this.d<=0}}function m(){for(let t=h.length-1;t>=0;t--)h[t].update(),h[t].show(),h[t].isAlive||h.splice(t,1)}const a=_();function w(t){const{width:e,height:n}=a.value.getBoundingClientRect();s=t,s.setup=function(){s.createCanvas(e,n),s.colorMode(s.HSB),s.noStroke()},s.draw=function(){s.background("rgba(0,0,0,0.07)"),m()},s.mousePressed=function(){h.push(new d)},setInterval(()=>{for(let c=0;c<3;c++)h.push(new d(new f.Vector(s.random(e),s.random(n))))},1e3)}return(t,e)=>(y(),B("div",{ref_key:"con",ref:a,class:"w-full h-full"},[V(x,{sketch:w})],512))}});export{M as default};
