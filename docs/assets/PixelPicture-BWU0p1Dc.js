var $=Object.defineProperty;var A=(a,o,l)=>o in a?$(a,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[o]=l;var d=(a,o,l)=>(A(a,typeof o!="symbol"?o+"":o,l),l);import{d as y,q as D,v as G,o as L,c as k,p as H,i as q,a as g,_ as z,b as I,f as P}from"./index-242-C2dX.js";import{P as E}from"./P5-s4r8JNqI.js";import{p as m}from"./p5.min-DK4k5B0I.js";import{G as F}from"./dat.gui.module-PWGADmkp.js";const S=a=>(H("data-v-a82a1169"),a=a(),q(),a),K={class:"loading"},M=S(()=>g("div",{class:"mask"},null,-1)),O=S(()=>g("div",{class:"loader"},[g("div",{class:"ring"})],-1)),W=[M,O],X=y({__name:"Loading",props:{isLoading:{type:Boolean,default:!1},type:{default:0}},setup(a){return(o,l)=>D((L(),k("div",K,W,512)),[[G,a.isLoading]])}}),J=z(X,[["__scopeId","data-v-a82a1169"]]),C="/nova/assets/test-K5HXlduP.jpg",Q={class:"viewCon"},T=y({__name:"PixelPicture",setup(a){const{min:o}=Math,l=I(!1);let t,w=C,p,h,r={sampleNum:20,isCircle:!1,importImg:function(){var s;(s=f.value)==null||s.click()},downloadImg:function(){t.saveCanvas()}},u=[];const f=I();function N(){if(f.value){let s=f.value.files[0];w=URL.createObjectURL(s),x(w)}}const _=new F({width:300});_.add(r,"sampleNum",10,100,1).name("sampleNum").onFinishChange(function(s){x(w)}),_.add(r,"isCircle").name("ShowCircle"),_.add(r,"importImg").name("LoadLocalImg").listen(),_.add(r,"downloadImg").name("DownLoad").listen();class V{constructor(e,i,n){d(this,"pos");d(this,"tarPos");d(this,"vel",new m.Vector(0,0));d(this,"color");d(this,"size");this.tarPos=e,this.pos=new m.Vector(t.random(0,p),t.random(0,h)),this.color=i,this.size=n}show(){t.noStroke(),t.fill(this.color),r.isCircle?t.circle(this.pos.x,this.pos.y,this.size):t.rect(this.pos.x,this.pos.y,this.size,this.size)}update(){let e=m.Vector.dist(this.pos,this.tarPos),i=m.Vector.sub(this.tarPos,this.pos),n=t.map(e,0,50,.08,.3,!0);i.mult(n),this.vel.set(i),this.pos.add(this.vel)}}function b(s,e){let i=600,n=600,c=s/e;c>1?n=i/c:i=n*c,p=i,h=n,t.createCanvas(p,h)}function x(s){l.value=!0,t.loadImage(s,e=>{b(e.width,e.height);let i=o(e.width,e.height)/r.sampleNum,n=o(p,h)/r.sampleNum;u.length=0,e.loadPixels();for(let c=0;c<e.height;c+=i)for(let v=0;v<e.width;v+=i){let B=e.get(v,c),U=v/e.width*p,R=c/e.height*h;u.push(new V(new m.Vector(U,R),B,n))}l.value=!1})}function j(s){t=s,t.setup=function(){x(C)},t.draw=function(){t.background(51);for(let e=u.length-1;e>=0;e--)u[e].update(),u[e].show()}}return(s,e)=>(L(),k("div",Q,[g("input",{onChange:N,ref_key:"file",ref:f,type:"file",accept:"image/png, image/jpeg, image/jpg",style:{display:"none"}},null,544),P(E,{sketch:j}),P(J,{"is-loading":l.value},null,8,["is-loading"])]))}}),ae=z(T,[["__scopeId","data-v-cabb3c6c"]]);export{ae as default};
