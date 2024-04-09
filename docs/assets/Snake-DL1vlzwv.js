var W=Object.defineProperty;var A=(f,t,n)=>t in f?W(f,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):f[t]=n;var i=(f,t,n)=>(A(f,typeof t!="symbol"?t+"":t,n),n);import{a as x}from"./p5.min-DzgWThwl.js";import{P as V}from"./P5-Bz-I-EbY.js";import{d as F,r as N,o as z,b as B,l as D}from"./index-CpijY5gs.js";const d=24,k=1,I=6,M=F({__name:"Snake",setup(f){let t,n=0,g=!1;const m=["#870058","#a4303f","#f2d0a4","#ffeccc","#c8d6af"];function R(){const w=t.floor(t.random(0,m.length));return m[w]}const v=N();function E(w){t=w;const{width:c,height:p}=v.value.getBoundingClientRect();class _{constructor(){i(this,"pos");i(this,"vel");i(this,"direction");i(this,"tails",[]);this.pos=new x.Vector(c/2,p/2),this.vel=new x.Vector(k,0),this.direction="right"}draw(){t.noStroke(),t.fill("#0984e3"),t.circle(this.pos.x,this.pos.y,d),this.tails.forEach(s=>s.draw())}edge(){(this.pos.x<0||this.pos.x>c||this.pos.y<0||this.pos.y>p)&&(g=!0)}update(s){this.edge(),s?this.direction=s:s=this.direction;const e=t.keyIsDown(t.SHIFT)?I:k;s==="left"?this.vel.set(-e,0):s==="right"?this.vel.set(e,0):s==="up"?this.vel.set(0,-e):s==="down"&&this.vel.set(0,e),this.pos.add(this.vel);for(let o=0;o<this.tails.length;o++){const l=o===0?this.pos:this.tails[o-1].pos,r=this.tails[o].pos.copy().sub(l).mult(d);r.limit(d),this.tails[o].update(l.copy().add(r))}}addTail(s){const{tails:e,direction:o}=this,{pos:{x:l,y:h}}=e.length===0?this:e[e.length-1],r=new C(new x.Vector(l,h),s);(o==="up"||o==="down"||o==="left"||o==="right")&&r.pos.set(l,h),e.push(r)}}class C{constructor(s,e){i(this,"pos");i(this,"prePos");i(this,"c");this.pos=s,this.prePos=s.copy(),this.c=e}draw(){t.fill(this.c),t.circle(this.pos.x,this.pos.y,d)}update(s){this.prePos.set(this.pos),this.pos.set(s.x,s.y)}}class P{constructor(){i(this,"pos");i(this,"c");this.pos=new x.Vector(t.floor(t.random(100,c-100)),t.floor(t.random(100,p-100))),this.c=R()}draw(){t.fill(this.c),t.circle(this.pos.x,this.pos.y,d)}update(s){this.pos.dist(s.pos)<d&&(n++,s.addTail(this.c),this.pos.set(t.floor(t.random(100,c-100)),t.floor(t.random(100,p-100))),this.c=R())}}const a=new _,y=new P;function S(){t.noStroke(),t.fill("#fff"),t.textAlign(t.LEFT,t.TOP),t.textSize(24),t.text(`SCORE: ${n}`,10,10)}function T(){t.fill("#fff"),t.textWrap(t.WORD),t.textAlign(t.CENTER),t.textSize(20),t.text(`键盘方向键控制方向，
    shift加速`,c/2,20)}function O(){t.fill("#fff"),t.textWrap(t.WORD),t.textAlign(t.CENTER),t.textSize(20);const u=`
    GAME OVER
    Your Score: ${n}
    `;t.text(u,c/2,p/2-20)}t.setup=function(){t.createCanvas(c,p),t.rectMode(t.CENTER)},t.draw=function(){t.background("#2d3436"),S(),T(),g?O():(a.update(),a.draw(),y.update(a),y.draw())},t.keyPressed=function(){t.keyCode===t.LEFT_ARROW?a.update("left"):t.keyCode===t.RIGHT_ARROW?a.update("right"):t.keyCode===t.UP_ARROW?a.update("up"):t.keyCode===t.DOWN_ARROW&&a.update("down")},t.windowResized=function(){}}return(w,c)=>(z(),B("div",{ref_key:"con",ref:v,class:"w-full h-full"},[D(V,{class:"w-full",sketch:E})],512))}});export{M as default};
