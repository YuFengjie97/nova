var $=Object.defineProperty;var U=(l,e,r)=>e in l?$(l,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[e]=r;var s=(l,e,r)=>(U(l,typeof e!="symbol"?e+"":e,r),r);import{c as j}from"./chroma-lS9WeMwn.js";import{a as G}from"./simplex-noise-CoJLqHZY.js";import{i as H}from"./audio2-GAo0SpJu.js";import{m as J}from"./audio-sugarCrush-sMDL0Z2H.js";import{i as K}from"./initStats-YaCbrA8F.js";import"./p5.min-RRRi3zu6.js";import{l as m}from"./math-sd4iWpKB.js";import{d as L,r as b,h as O,o as Q,b as W,e as D,t as X,_ as Y}from"./index-somVfJ8D.js";const Z=L({__name:"rect",setup(l){const e=G(),{min:r,max:tt,PI:I,sin:st,cos:et,atan:at,random:ot,abs:ct,sqrt:nt,floor:it}=Math,P=I*2,y=b(),u=b();let a;const h=800,n=20,v=h/n,B=h/n,S=512,w=S/2,R=100,T=["#d63031","#81ecec","#fdcb6e"],z=j.scale(T),k=new Uint8Array(w);let p;const{audio:g,getAnalyser:E}=H(J,S),x=b(!1);function C(f){return k[f]}function F(){g.paused?(g.play(),x.value=!0,p||(p=E().analyser)):(g.pause(),x.value=!1)}class M{constructor(o,i,t){s(this,"color",.1);s(this,"colort",.2);s(this,"x",0);s(this,"y",0);s(this,"musicVal",0);s(this,"w",1);s(this,"h",1);s(this,"wt",1);s(this,"ht",1);s(this,"a",0);s(this,"at",0);this.x=o,this.y=i,this.color=t,this.colort=t}updateTarget(){const o=C(this.x%w),i=C(this.y%w),t=e(o/B,i/v)*.5+.5;this.wt=t,this.ht=t,this.colort=t,this.at=t}update(){this.w=m(this.w,this.wt,.1),this.h=m(this.h,this.ht,.1),this.color=m(this.color,this.colort,.1),this.a=m(this.a,this.at,.1)}draw(){a.save(),a.beginPath(),a.fillStyle=z(this.color).css();const o=this.w*n,i=this.h*n,t=this.x*n+n/2,A=this.y*n+n/2;a.translate(t,A),a.rotate(this.a*P),a.fillRect(-o/2,-i/2,o,i),a.restore()}}const _=[];return O(()=>{const{stats:f}=K(y.value),{width:o,height:i}=y.value.getBoundingClientRect(),t=r(o,i);u.value.width=h,u.value.height=h,u.value.style.cssText=`width:${t}px;height:${t}px`,a=u.value.getContext("2d");function A(){for(let c=0;c<B;c+=1)for(let d=0;d<v;d+=1){const N=(c+d)/(v*2),V=new M(c,d,N);_.push(V)}}A();function q(){a.clearRect(0,0,h,h),f.update(),_.forEach(c=>{c.update(),c.draw()}),requestAnimationFrame(q)}q(),setInterval(()=>{p&&p.getByteFrequencyData(k),_.forEach(c=>c.updateTarget())},R)}),(f,o)=>(Q(),W("div",{ref_key:"con",ref:y,class:"con w-full h-full bg-#000"},[D("div",{class:"bt",onClick:F},X(x.value?"pause":"play"),1),D("canvas",{ref_key:"canvas",ref:u,class:"canvas",width:"400",height:"400"},null,512)],512))}}),vt=Y(Z,[["__scopeId","data-v-5cec969a"]]);export{vt as default};