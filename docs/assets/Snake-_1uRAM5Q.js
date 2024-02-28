var O=Object.defineProperty;var W=(a,t,f)=>t in a?O(a,t,{enumerable:!0,configurable:!0,writable:!0,value:f}):a[t]=f;var i=(a,t,f)=>(W(a,typeof t!="symbol"?t+"":t,f),f);import{a as w}from"./p5.min-GDl2HyFv.js";import{P as A}from"./P5-1bkKAgwb.js";import{d as B,r as F,o as V,b as N,l as z}from"./index-LMOq6Ftv.js";const M=B({__name:"Snake",setup(a){let t,v=0,x=!1;const g=["#870058","#a4303f","#f2d0a4","#ffeccc","#c8d6af"];function m(){const u=t.floor(t.random(0,g.length));return g[u]}const R=F();function k(u){t=u;const{width:c,height:p}=R.value.getBoundingClientRect();class E{constructor(){i(this,"pos");i(this,"vel");i(this,"direction");i(this,"tails",[]);this.pos=new w.Vector(c/2,p/2),this.vel=new w.Vector(1,0),this.direction="right"}draw(){t.noStroke(),t.fill("#0984e3"),t.circle(this.pos.x,this.pos.y,24),this.tails.forEach(s=>s.draw())}edge(){(this.pos.x<0||this.pos.x>c||this.pos.y<0||this.pos.y>p)&&(x=!0)}update(s){this.edge(),s?this.direction=s:s=this.direction;const e=t.keyIsDown(t.SHIFT)?6:1;s==="left"?this.vel.set(-e,0):s==="right"?this.vel.set(e,0):s==="up"?this.vel.set(0,-e):s==="down"&&this.vel.set(0,e),this.pos.add(this.vel);for(let o=0;o<this.tails.length;o++){const l=o===0?this.pos:this.tails[o-1].pos,n=this.tails[o].pos.copy().sub(l).mult(24);n.limit(24),this.tails[o].update(l.copy().add(n))}}addTail(s){const{tails:e,direction:o}=this,{pos:{x:l,y:h}}=e.length===0?this:e[e.length-1],n=new _(new w.Vector(l,h),s);(o==="up"||o==="down"||o==="left"||o==="right")&&n.pos.set(l,h),e.push(n)}}class _{constructor(s,e){i(this,"pos");i(this,"prePos");i(this,"c");this.pos=s,this.prePos=s.copy(),this.c=e}draw(){t.fill(this.c),t.circle(this.pos.x,this.pos.y,24)}update(s){this.prePos.set(this.pos),this.pos.set(s.x,s.y)}}class C{constructor(){i(this,"pos");i(this,"c");this.pos=new w.Vector(t.floor(t.random(100,c-100)),t.floor(t.random(100,p-100))),this.c=m()}draw(){t.fill(this.c),t.circle(this.pos.x,this.pos.y,24)}update(s){this.pos.dist(s.pos)<24&&(v++,s.addTail(this.c),this.pos.set(t.floor(t.random(100,c-100)),t.floor(t.random(100,p-100))),this.c=m())}}const r=new E,y=new C;function P(){t.noStroke(),t.fill("#fff"),t.textAlign(t.LEFT,t.TOP),t.textSize(24),t.text(`SCORE: ${v}`,10,10)}function S(){t.fill("#fff"),t.textWrap(t.WORD),t.textAlign(t.CENTER),t.textSize(20),t.text(`键盘方向键控制方向，
    shift加速`,c/2,20)}function T(){t.fill("#fff"),t.textWrap(t.WORD),t.textAlign(t.CENTER),t.textSize(20);const d=`
    GAME OVER
    Your Score: ${v}
    `;t.text(d,c/2,p/2-20)}t.setup=function(){t.createCanvas(c,p),t.rectMode(t.CENTER)},t.draw=function(){t.background("#2d3436"),P(),S(),x?T():(r.update(),r.draw(),y.update(r),y.draw())},t.keyPressed=function(){t.keyCode===t.LEFT_ARROW?r.update("left"):t.keyCode===t.RIGHT_ARROW?r.update("right"):t.keyCode===t.UP_ARROW?r.update("up"):t.keyCode===t.DOWN_ARROW&&r.update("down")},t.windowResized=function(){}}return(u,c)=>(V(),N("div",{ref_key:"con",ref:R,class:"w-full h-full"},[z(A,{class:"w-full",sketch:k})],512))}});export{M as default};
