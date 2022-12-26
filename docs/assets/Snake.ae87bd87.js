var A=Object.defineProperty;var W=(c,e,s)=>e in c?A(c,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[e]=s;var l=(c,e,s)=>(W(c,typeof e!="symbol"?e+"":e,s),s);import{P as F}from"./P5.f74b673d.js";import{p as _}from"./p5.min.0a1714b2.js";import{d as I,c as V,e as N,o as z,_ as D}from"./index.d28c4049.js";const L={class:"viewCon"},B=I({__name:"Snake",setup(c){let e,s=800,p=800,d=24,x=1,k=6,w=0,v=!1,m=["#870058","#a4303f","#f2d0a4","#ffeccc","#c8d6af"];function y(){let u=e.floor(e.random(0,m.length));return m[u]}function S(u){e=u;class g{constructor(){l(this,"pos");l(this,"vel");l(this,"direction");l(this,"tails",[]);this.pos=new _.Vector(s/2,p/2),this.vel=new _.Vector(x,0),this.direction="right"}draw(){e.noStroke(),e.fill("#0984e3"),e.circle(this.pos.x,this.pos.y,d),this.tails.forEach(t=>t.draw())}edge(){(this.pos.x<0||this.pos.x>s||this.pos.y<0||this.pos.y>p)&&(v=!0)}update(t){this.edge(),t?this.direction=t:t=this.direction;let o=e.keyIsDown(e.SHIFT)?k:x;t==="left"?this.vel.set(-o,0):t==="right"?this.vel.set(o,0):t==="up"?this.vel.set(0,-o):t==="down"&&this.vel.set(0,o),this.pos.add(this.vel);for(let i=0;i<this.tails.length;i++){let r=i===0?this.pos:this.tails[i-1].pos,a=this.tails[i].pos.copy().sub(r).mult(d);a.limit(d),this.tails[i].update(r.copy().add(a))}}addTail(t){let{tails:o,direction:i}=this,{pos:{x:r,y:h}}=o.length===0?this:o[o.length-1],a=new E(new _.Vector(r,h),t);(i==="up"||i==="down"||i==="left"||i==="right")&&a.pos.set(r,h),o.push(a)}}class E{constructor(t,o){l(this,"pos");l(this,"prePos");l(this,"c");this.pos=t,this.prePos=t.copy(),this.c=o}draw(){e.fill(this.c),e.circle(this.pos.x,this.pos.y,d)}update(t){this.prePos.set(this.pos),this.pos.set(t.x,t.y)}}class C{constructor(){l(this,"pos");l(this,"c");this.pos=new _.Vector(e.floor(e.random(100,s-100)),e.floor(e.random(100,p-100))),this.c=y()}draw(){e.fill(this.c),e.circle(this.pos.x,this.pos.y,d)}update(t){this.pos.dist(t.pos)<d&&(w++,t.addTail(this.c),this.pos.set(e.floor(e.random(100,s-100)),e.floor(e.random(100,p-100))),this.c=y())}}let n=new g,R=new C;function T(){e.noStroke(),e.fill("#fff"),e.textAlign(e.LEFT,e.TOP),e.textSize(24),e.text(`SCORE: ${w}`,10,10)}function P(){e.fill("#fff"),e.textWrap(e.WORD),e.textAlign(e.CENTER),e.textSize(20);let f=`
    SHIFT to speed up,
    ArrowKey to control direction
    `;e.text(f,s/2,20)}function O(){e.fill("#fff"),e.textWrap(e.WORD),e.textAlign(e.CENTER),e.textSize(20);let f=`
    GAME OVER
    Your Score: ${w}
    `;e.text(f,s/2,p/2-20)}e.setup=function(){e.createCanvas(s,p),e.rectMode(e.CENTER)},e.draw=function(){e.background("#2d3436"),T(),P(),v?O():(n.update(),n.draw(),R.update(n),R.draw())},e.keyPressed=function(){e.keyCode===e.LEFT_ARROW?n.update("left"):e.keyCode===e.RIGHT_ARROW?n.update("right"):e.keyCode===e.UP_ARROW?n.update("up"):e.keyCode===e.DOWN_ARROW&&n.update("down")},e.windowResized=function(){}}return(u,g)=>(z(),V("div",L,[N(F,{sketch:S})]))}});const $=D(B,[["__scopeId","data-v-1307074e"]]);export{$ as default};