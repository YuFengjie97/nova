var J=Object.defineProperty;var K=(l,c,r)=>c in l?J(l,c,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[c]=r;var n=(l,c,r)=>(K(l,typeof c!="symbol"?c+"":c,r),r);import{a as O}from"./simplex-noise-BtZ5wMFy.js";import{m as Q}from"./audio-sugarCrush-1d8eZUIK.js";import{i as U}from"./audio2-Bh-ajUVZ.js";import{i as X}from"./initStats-k2kTMle0.js";import{d as Y,r as p,h as Z,o as tt,b as st,e as N,t as at,_ as et}from"./index-CpijY5gs.js";const o=800,u=32,nt=2,ot=100,it=Y({__name:"mihuanshuibo",setup(l){O();const{min:c,max:r,PI:R,sin:_,cos:w,atan:ct,random:lt,abs:rt,sqrt:z,floor:M}=Math,D=R*2,f=p(!1),S=p(()=>{}),B=p(()=>{});function V(){f.value?B.value():S.value()}const y=p(),h=p(),G=o*.2,L=M(u/nt),C=o*.2;return Z(()=>{const{width:b,height:k}=y.value.getBoundingClientRect(),{stats:W}=X(y.value),A=`${c(b,k)}px`;h.value.style.width=A,h.value.style.height=A,h.value.width=o,h.value.height=o;const e=h.value.getContext("2d");e.strokeStyle="#fff",e.lineWidth=2,e.translate(o/2,o/2);const{audio:m,getAnalyser:$}=U(Q,u);let P=!1,T;const q=new Float32Array(u);class j{constructor(t,s,a){n(this,"i",0);n(this,"angle",0);n(this,"xBase",0);n(this,"yBase",0);n(this,"x",0);n(this,"y",0);n(this,"dx",0);n(this,"dy",0);this.i=t,this.angle=t/u*D,this.x=s,this.y=a,this.xBase=s,this.yBase=a}updateD(){const t=q[this.i];performance.now()/1e3;const s=t*(this.i%L===0?C*1.4:C),a=w(this.angle)*s,i=_(this.angle)*s;this.dx=a,this.dy=i}update(){const t=this.xBase+this.dx,s=this.yBase+this.dy;this.x+=(t-this.x)*.1,this.y+=(s-this.y)*.1}}class H{constructor(t){n(this,"points");n(this,"gradientDist",o/2);this.points=t}updateD(){this.points.forEach(t=>t.updateD())}update(){this.points.forEach((t,s)=>{s===10&&(this.gradientDist=z(t.x**2+t.y**2)),t.update()})}drawShape(){let t=0,s=0;for(let i=0;i<this.points.length;i++){const d=this.points[i],F=i===this.points.length-1?this.points[0]:this.points[i+1],x=(d.x+F.x)/2,g=(d.y+F.y)/2;i===0?(e.beginPath(),e.moveTo(x,g),t=x,s=g):e.quadraticCurveTo(d.x,d.y,x,g)}e.quadraticCurveTo(this.points[0].x,this.points[0].y,t,s);const a=e.createRadialGradient(0,0,0,0,0,this.gradientDist);a.addColorStop(0,"#fd79a8"),a.addColorStop(.5,"#81ecec"),a.addColorStop(1,"#ff7675"),e.fillStyle=a,e.fill()}draw(){this.drawShape()}}const v=new H(Array.from({length:u}).map((E,t)=>{const s=t/u*D,a=G,i=w(s)*a,d=_(s)*a;return new j(t,i,d)}));function I(){W.update(),e.clearRect(-o/2,-o/2,o,o),v.update(),v.draw(),requestAnimationFrame(I)}I(),S.value=()=>{m.paused&&(m.play(),f.value=!0,!P&&(T=$().analyser,P=!0,setInterval(()=>{T.getFloatTimeDomainData(q),v.updateD()},ot)))},B.value=()=>{m.pause(),f.value=!1}}),(b,k)=>(tt(),st("div",{ref_key:"con",ref:y,class:"con w-full h-full bg-#000"},[N("div",{class:"bt",onClick:V},at(f.value?"pause":"play"),1),N("canvas",{ref_key:"canvas",ref:h,class:"canvas",width:"400",height:"400"},null,512)],512))}}),mt=et(it,[["__scopeId","data-v-16fe4b06"]]);export{mt as default};
