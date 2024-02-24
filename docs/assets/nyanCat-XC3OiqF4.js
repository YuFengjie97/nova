var M=Object.defineProperty;var X=(f,a,r)=>a in f?M(f,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):f[a]=r;var i=(f,a,r)=>(X(f,typeof a!="symbol"?a+"":a,r),r);import{d as D,r as E,h as G,V as u,C as H,o as U,b as Y,e as j}from"./index-7fEuWlIe.js";import{a as J}from"./simplex-noise-WoAbzQnb.js";import{i as K}from"./initStats-6aMX_FK1.js";import{c as O,p as Q}from"./canvas-DEPmujqV.js";const it=D({__name:"nyanCat",setup(f){const a=J(),{floor:r,random:m}=Math,R=E(),d=E(),p=20,S=30,_=40;let b=0,k;return G(async()=>{const{width:y,height:x}=R.value.getBoundingClientRect();d.value.width=y,d.value.height=x;const s=d.value.getContext("2d"),{stats:N}=K(R.value),l=new u(y/2,x/2);d.value.addEventListener("mousemove",o=>{const{clientX:e,clientY:t}=o;l.x=e,l.y=t});const P=105/68,w=p*9,C=w*P;class T{constructor(){i(this,"size",10);i(this,"type",0);i(this,"pos");i(this,"isLive",!0);i(this,"lastTime",0);i(this,"interval",.1);this.pos=new u(m()*y+y,m()*x),this.type=r(m()*4)}update(e){e-this.lastTime>this.interval&&(this.type=(this.type+1)%4,this.lastTime=e),this.pos.x-=10,this.pos.x<-10&&(this.isLive=!1)}draw(){const e=this.pos,t=this.size;s.fillStyle="#fff",this.type===0&&s.fillRect(this.pos.x,this.pos.y,this.size,this.size),this.type===1&&(s.fillRect(e.x,e.y,t,t),s.fillRect(e.x-t,e.y,t,t),s.fillRect(e.x+t,e.y,t,t),s.fillRect(e.x,e.y-t,t,t),s.fillRect(e.x,e.y+t,t,t)),this.type===2&&(s.fillRect(e.x,e.y,t,t),s.fillRect(e.x-t,e.y,t,t),s.fillRect(e.x-2*t,e.y,t,t),s.fillRect(e.x+t,e.y,t,t),s.fillRect(e.x+2*t,e.y,t,t),s.fillRect(e.x,e.y-t,t,t),s.fillRect(e.x,e.y-2*t,t,t),s.fillRect(e.x,e.y+t,t,t),s.fillRect(e.x,e.y+2*t,t,t)),this.type===3&&(s.fillRect(e.x-1.5*t,e.y-1.5*t,t,t),s.fillRect(e.x+1.5*t,e.y+1.5*t,t,t),s.fillRect(e.x+1.5*t,e.y-1.5*t,t,t),s.fillRect(e.x-1.5*t,e.y+1.5*t,t,t),s.fillRect(e.x-2*t,e.y,t,t),s.fillRect(e.x+2*t,e.y,t,t),s.fillRect(e.x,e.y-2*t,t,t),s.fillRect(e.x,e.y+2*t,t,t))}}class V{constructor(e){i(this,"points",[]);i(this,"color","#fff");this.color=e}draw(){s.beginPath(),s.moveTo(this.points[0].x,this.points[0].y);for(let h=1;h<this.points.length-1;h+=1){const g=this.points[h],F=this.points[h+1],B=new u().copy(g).add(F).multiplyScalar(.5);s.quadraticCurveTo(g.x,g.y,B.x,B.y)}const e=this.points[this.points.length-1];s.lineTo(e.x,e.y);const t=this.points[0],n=this.points[this.points.length-1],c=s.createLinearGradient(t.x,t.y,n.x,n.y);c.addColorStop(0,"transparent"),c.addColorStop(.5,this.color),c.addColorStop(1,this.color),s.strokeStyle=c,s.stroke()}}class W{constructor(e){i(this,"points",[]);i(this,"curves",[]);i(this,"noiseXRatio",1);i(this,"colors",["#e12523","#dc8d30","#deeb44","#01eb3e","#138ee9","#7127ee"]);i(this,"catCanvas");this.catCanvas=e;for(let t=0;t<this.colors.length;t+=1){const n=new V(this.colors[t]);this.curves.push(n)}}updateCurvePoints(){this.curves.forEach((e,t,n)=>{e.points=this.points.map(h=>new u(h.x,h.y+(t-n.length/2)*p+p/2));const c=new u(l.x,l.y+(t-n.length/2)*p+p/2);e.points.push(c)})}update(e){this.points.length=0;const t=l.y-S;for(let n=-_;n<l.x-C/2;n+=_){const c=t+a(n*.01+e*2,0)*S*2;this.points.push(new u(n,c))}this.updateCurvePoints()}draw(){this.curves.forEach(e=>e.draw()),s.drawImage(this.catCanvas,l.x-C/2,l.y-w/2)}}const{canvas:q,timer:A}=await O({w:C,h:w},Q,6),I=new W(q);k=A;const L=10,v=[];for(let o=0;o<L;o++)v.push(new T);function z(){const o=performance.now()/1e3;s.fillStyle="#74b9ff",s.fillRect(0,0,y,x),s.lineWidth=p,I.update(o),I.draw();let e=0;for(;e<L;){const t=v[e];t.update(o),t.isLive?(t.draw(),e++):(v.splice(e,1),v.push(new T))}N.update(),b=requestAnimationFrame(z)}z()}),H(()=>{cancelAnimationFrame(b),clearInterval(k)}),(y,x)=>(U(),Y("div",{ref_key:"con",ref:R,class:"w-full h-full"},[j("canvas",{ref_key:"canvas",ref:d,class:"block w-full h-full"},null,512)],512))}});export{it as default};
