import{a}from"./p5.min-WfQBoNak.js";import{P as k}from"./P5-CFZ07hFp.js";import{d as z,e as b,q as y,o as C,_ as M}from"./index-CqfaNC88.js";const B={class:"viewCon"},F=z({__name:"DisperseParticle2",setup(R){const{floor:u}=Math;let t,r=800,p=800,l=20,c=5,_="#fd79a8",h=u(p/(l+c)),m=u(r/(l+c)),v=h*m,f=new a.Vector(r/2,r/2),d=[];class V{constructor(e){this.a=new a.Vector(0,0),this.v=new a.Vector(0,0),this.defaultPos=e,this.pos=e.copy()}draw(){t.fill(_),t.circle(this.pos.x,this.pos.y,l)}mouseDistract(){let e=r,i=5,s=a.Vector.sub(this.pos,f),n=s.mag();0<n&&n<e&&(s.normalize(),s.mult(e/Math.pow(n,2)*40),s.limit(i),this.a.add(s))}returnDefault(){let e=60,i=7,s=a.Vector.sub(this.defaultPos,this.pos),n=s.mag();s.normalize();let D=t.map(n,0,e,0,i,!0);s.mult(D);let w=a.Vector.sub(s,this.v);w.limit(i),this.a.add(w)}update(){this.mouseDistract(),this.returnDefault(),this.v.add(this.a),this.v.limit(.8),this.pos.add(this.v),this.a.mult(0)}}function g(){for(let o=0;o<h;o++)for(let e=0;e<m;e++)d.push(new V(new a.Vector(e*(l+c),o*(l+c))))}function x(){for(let o=0;o<v;o++)d[o].update(),d[o].draw()}function P(o){function e(){let s=t.min(t.windowWidth,t.windowHeight);i.style(`width: ${s}px; height: ${s}px`)}t=o;let i;t.setup=function(){i=t.createCanvas(r,p),e(),g(),t.noStroke()},t.draw=function(){t.background("#2d3436"),x()},t.mouseMoved=function(){f.set(t.mouseX,t.mouseY)},t.windowResized=function(){e()}}return(o,e)=>(C(),b("div",B,[y(k,{sketch:P})]))}}),H=M(F,[["__scopeId","data-v-75ff6469"]]);export{H as default};
