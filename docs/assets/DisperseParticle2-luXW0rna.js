var y=Object.defineProperty;var C=(n,i,a)=>i in n?y(n,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[i]=a;var p=(n,i,a)=>(C(n,typeof i!="symbol"?i+"":i,a),a);import{d as M,b2 as l,e as B,q as F,o as I,_ as R}from"./index-Dk52mj26.js";import{P as $}from"./P5-33W7Gzbn.js";const q={class:"viewCon"},E=M({__name:"DisperseParticle2",setup(n){const{PI:i,floor:a,sin:H,cos:N}=Math;let t,c=800,f=800,d=20,h=5,V="#fd79a8",w=a(f/(d+h)),_=a(c/(d+h)),g=w*_,v=new l.Vector(c/2,c/2),m=[];class x{constructor(e){p(this,"defaultPos");p(this,"pos");p(this,"a",new l.Vector(0,0));p(this,"v",new l.Vector(0,0));this.defaultPos=e,this.pos=e.copy()}draw(){t.fill(V),t.circle(this.pos.x,this.pos.y,d)}mouseDistract(){let e=c,r=5,s=l.Vector.sub(this.pos,v),u=s.mag();0<u&&u<e&&(s.normalize(),s.mult(e/Math.pow(u,2)*40),s.limit(r),this.a.add(s))}returnDefault(){let e=60,r=7,s=l.Vector.sub(this.defaultPos,this.pos),u=s.mag();s.normalize();let z=t.map(u,0,e,0,r,!0);s.mult(z);let P=l.Vector.sub(s,this.v);P.limit(r),this.a.add(P)}update(){this.mouseDistract(),this.returnDefault(),this.v.add(this.a),this.v.limit(.8),this.pos.add(this.v),this.a.mult(0)}}function D(){for(let o=0;o<w;o++)for(let e=0;e<_;e++)m.push(new x(new l.Vector(e*(d+h),o*(d+h))))}function b(){for(let o=0;o<g;o++)m[o].update(),m[o].draw()}function k(o){function e(){let s=t.min(t.windowWidth,t.windowHeight);r.style(`width: ${s}px; height: ${s}px`)}t=o;let r;t.setup=function(){r=t.createCanvas(c,f),e(),D(),t.noStroke()},t.draw=function(){t.background("#2d3436"),b()},t.mouseMoved=function(){v.set(t.mouseX,t.mouseY)},t.windowResized=function(){e()}}return(o,e)=>(I(),B("div",q,[F($,{sketch:k})]))}}),Y=R(E,[["__scopeId","data-v-75ff6469"]]);export{Y as default};
