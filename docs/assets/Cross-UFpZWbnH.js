var T=Object.defineProperty;var y=(r,o,i)=>o in r?T(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i;var n=(r,o,i)=>(y(r,typeof o!="symbol"?o+"":o,i),i);import{a as d}from"./p5.min-yLIrP2i3.js";import{C as P}from"./Card-_8FFN4S-.js";import{P as W}from"./P5Con-hsrGhuhJ.js";import{d as L,o as M,c as N,f as g,w as j}from"./index-mZy-ryn_.js";const q={class:"gradientLine viewCon"},I=L({__name:"Cross",setup(r){const{random:o}=Math;let i,l;const C="#d63031",_=.5,b=2,h=1,p=[0,.1],u=[.1,.5],w=[.5,.9],m=[.9,1],B=0,a=[],v=100,x=500,k=["#00b894","#00cec9","#0984e3","#6c5ce7","#b2bec3","#ffeaa7","#fab1a0","#ff7675","#fd79a8","#636e72"];function D(s){i=s.width,l=s.height,$(s)}function V(s){E()}function $(s){for(let t=0;t<v;t++)a.push(new f(s,new d.Vector(i/2,l/2)))}function E(){for(let s=0;s<a.length;s++)a[s].update(),a[s].draw()}class f{constructor(t,e,c){n(this,"$p");n(this,"pos");n(this,"velBase",1);n(this,"vel",new d.Vector(0,-this.velBase));n(this,"pre");n(this,"color","#00b894");this.$p=t,this.pos=e,c&&(this.velBase=c),this.vel=new d.Vector(0,this.velBase),this.pre=new Date().getTime()}draw(){const{$p:t,pos:{x:e,y:c}}=this;t.stroke(this.color),t.fill(C),t.strokeWeight(b),t.circle(e,c,_*2)}update(){this.edge()||(this.pos.add(this.vel),this.updateDirection())}updateDirection(){const t=new Date().getTime();if(t-this.pre>x-o()*10){this.pre=t,this.color=this.$p.random(k),a.length<v&&a.push(new f(this.$p,this.pos));const e=o();e>m[0]&&e<m[1]&&this.vel.set([0,-h]),e>u[0]&&e<u[1]&&this.vel.set([h,0]),e>w[0]&&e<w[1]&&this.vel.set([-h,0]),e>p[0]&&e<p[1]&&this.vel.set([0,h])}}edge(){if(o()<B)return this.vel.set(0,0),!0;const{pos:{x:e,y:c}}=this;return e<0||e>i||c<0||c>l?(this.vel.set(0,0),!0):!1}}return(s,t)=>(M(),N("div",q,[g(P,{class:"card"},{default:j(()=>[g(W,{setup:D,draw:V})]),_:1})]))}});export{I as default};
