var V=Object.defineProperty;var $=(l,e,r)=>e in l?V(l,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[e]=r;var s=(l,e,r)=>($(l,typeof e!="symbol"?e+"":e,r),r);import{c as j}from"./chroma-D8b-vtvi.js";import{a as U}from"./simplex-noise-BtZ5wMFy.js";import{i as G}from"./audio2-Bh-ajUVZ.js";import{m as H}from"./audio-sugarCrush-1d8eZUIK.js";import{i as J}from"./initStats-z-qGLZo8.js";import{d as K,r as B,j as L,e as O,f as q,t as Q,o as W,M as m,_ as X}from"./index-Dk52mj26.js";const h=800,i=20,D=512,Y=100,Z=K({__name:"rect",setup(l){const e=U(),{min:r,max:tt,PI:I,sin:st,cos:et,atan:at,random:ot,abs:ct,sqrt:nt,floor:it}=Math,P=I*2,y=B(),u=B();let a;const v=h/i,S=h/i,w=D/2,R=["#d63031","#81ecec","#fdcb6e"],T=j.scale(R),b=new Uint8Array(w);let d;const{audio:g,getAnalyser:z}=G(H,D),x=B(!1);function k(f){return b[f]}function E(){g.paused?(g.play(),x.value=!0,d||(d=z().analyser)):(g.pause(),x.value=!1)}class M{constructor(o,n,t){s(this,"color",.1);s(this,"colort",.2);s(this,"x",0);s(this,"y",0);s(this,"musicVal",0);s(this,"w",1);s(this,"h",1);s(this,"wt",1);s(this,"ht",1);s(this,"a",0);s(this,"at",0);this.x=o,this.y=n,this.color=t,this.colort=t}updateTarget(){const o=k(this.x%w),n=k(this.y%w),t=e(o/S,n/v)*.5+.5;this.wt=t,this.ht=t,this.colort=t,this.at=t}update(){this.w=m(this.w,this.wt,.1),this.h=m(this.h,this.ht,.1),this.color=m(this.color,this.colort,.1),this.a=m(this.a,this.at,.1)}draw(){a.save(),a.beginPath(),a.fillStyle=T(this.color).css();const o=this.w*i,n=this.h*i,t=this.x*i+i/2,A=this.y*i+i/2;a.translate(t,A),a.rotate(this.a*P),a.fillRect(-o/2,-n/2,o,n),a.restore()}}const _=[];return L(()=>{const{stats:f}=J(y.value),{width:o,height:n}=y.value.getBoundingClientRect(),t=r(o,n);u.value.width=h,u.value.height=h,u.value.style.cssText=`width:${t}px;height:${t}px`,a=u.value.getContext("2d");function A(){for(let c=0;c<S;c+=1)for(let p=0;p<v;p+=1){const F=(c+p)/(v*2),N=new M(c,p,F);_.push(N)}}A();function C(){a.clearRect(0,0,h,h),f.update(),_.forEach(c=>{c.update(),c.draw()}),requestAnimationFrame(C)}C(),setInterval(()=>{d&&d.getByteFrequencyData(b),_.forEach(c=>c.updateTarget())},Y)}),(f,o)=>(W(),O("div",{ref_key:"con",ref:y,class:"con w-full h-full bg-#000"},[q("div",{class:"bt",onClick:E},Q(x.value?"pause":"play"),1),q("canvas",{ref_key:"canvas",ref:u,class:"canvas",width:"400",height:"400"},null,512)],512))}}),mt=X(Z,[["__scopeId","data-v-5cec969a"]]);export{mt as default};
