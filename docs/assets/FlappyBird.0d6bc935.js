var V=Object.defineProperty;var W=(r,e,a)=>e in r?V(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var o=(r,e,a)=>(W(r,typeof e!="symbol"?e+"":e,a),a);import{d as z,b as v,c as F,a as d,e as N,y,z as b,u as D,t as E,o as G,_ as I}from"./index.dd42b8fd.js";import{P as L}from"./P5.d4ae85c8.js";import{p as _}from"./p5.min.c2b8c1b1.js";const M="/nova/assets/gameover.5abf3b0a.png",O={class:"viewCon"},T={class:"canvasCon"},U=["src"],j={class:"score"},q={class:"info"},A=z({__name:"FlappyBird",setup(r){const{floor:e,min:a}=Math,u=v(!1),m=v(0),w=v(!1);let t,c=800,i=800,n,l=[],g=2,x=6,C=new _.Vector(0,.2);class k{constructor(h){o(this,"top");o(this,"bottom");o(this,"w");o(this,"x");o(this,"c","#0984e3");o(this,"cross",!1);this.top=e(t.random(60,i/2)),this.bottom=e(t.random(60,i/2)),this.w=e(t.random(30,70)),this.x=h}show(){t.noStroke(),t.fill(this.c),t.rect(this.x,0,this.w,this.top,0,0,this.w/2,this.w/2),t.rect(this.x,i-this.bottom,this.w,this.bottom,this.w/2,this.w/2,0,0)}update(){this.outCanvas(),this.x-=g}outCanvas(){this.x<-50&&(this.x=c,this.w=e(t.random(30,70)),this.c="#0984e3",this.cross=!1)}birdHit(h){let{pos:{x:p,y:f}}=h;p>=this.x&&p<=this.x+this.w&&(f<=this.top||f>=i-this.bottom)&&(this.c="#d63031",u.value=!0)}birdCross(h){if(this.cross)return;let{pos:{x:p,y:f}}=h;p>this.x+this.w&&(this.cross=!0,m.value++)}}class B{constructor(){o(this,"pos",new _.Vector(40,i/2));o(this,"vel",new _.Vector(0,1));o(this,"d",20)}show(){t.fill("#fdcb6e"),t.circle(this.pos.x,this.pos.y,this.d)}up(){this.vel.set(0,-4)}update(){this.pos.y+this.d/2>i?(this.vel.mult(0),this.pos.set(this.pos.x,i-this.d/2)):this.vel.add(C),this.pos.y<this.d/2&&(this.pos.y=this.d/2),this.pos.add(this.vel)}}function P(){for(let s=0;s<x;s++)l.push(new k(c+s*(c/x)))}function H(){for(let s=0;s<l.length;s++)l[s].birdHit(n),l[s].birdCross(n),l[s].update(),l[s].show()}function S(s){t=s,t.setup=function(){i=c=a(innerWidth,innerHeight),innerWidth<800?(t.createCanvas(innerWidth,innerHeight),c=innerWidth,i=innerHeight):t.createCanvas(c,i),n=new B,P(),setTimeout(()=>{w.value=!0},5e3)},t.draw=function(){t.touches.length>0&&n.up(),u.value||(t.background(50),n.update(),n.show(),H())},t.keyPressed=function(){t.keyCode===32&&n.up()}}return(s,h)=>(G(),F("div",O,[d("div",T,[N(L,{sketch:S}),y(d("img",{class:"gameover",src:D(M)},null,8,U),[[b,u.value]]),d("div",j,"Score: "+E(m.value),1),y(d("div",q,"Use space/touch to fly",512),[[b,!w.value]])])]))}});const X=I(A,[["__scopeId","data-v-a3304756"]]);export{X as default};