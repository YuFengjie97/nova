var R=Object.defineProperty;var D=(o,a,n)=>a in o?R(o,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[a]=n;var d=(o,a,n)=>(D(o,typeof a!="symbol"?a+"":a,n),n);import{a as m}from"./p5.min-3HXR7yvj.js";import{i as H}from"./initGUI-4v9Pkg7m.js";import{d as y,A as M,B as E,o as L,b as k,v as F,x as G,e as _,_ as z,r as x,h as K,l as P}from"./index-w3o6Dwr7.js";import{P as O}from"./P5-6363oOEK.js";import"./dat.gui.module-PWGADmkp.js";const S=o=>(F("data-v-a82a1169"),o=o(),G(),o),W={class:"loading"},X=S(()=>_("div",{class:"mask"},null,-1)),$=S(()=>_("div",{class:"loader"},[_("div",{class:"ring"})],-1)),q=[X,$],J=y({__name:"Loading",props:{isLoading:{type:Boolean,default:!1},type:{default:0}},setup(o){return(a,n)=>M((L(),k("div",W,q,512)),[[E,o.isLoading]])}}),Q=z(J,[["__scopeId","data-v-a82a1169"]]),C="/nova/assets/test-K5HXlduP.jpg",T=y({__name:"PixelPicture",setup(o){const{min:a}=Math,n=x(!1);let t,g=C,p,h;const r={sampleNum:20,isCircle:!1,importImg(){var s;(s=f.value)==null||s.click()},downloadImg(){t.saveCanvas()}},u=[],f=x();function N(){if(f.value){const s=f.value.files[0];g=URL.createObjectURL(s),w(g)}}const I=x();K(()=>{const{gui:s}=H(I.value);s.add(r,"sampleNum",10,100,1).name("sampleNum").onFinishChange(e=>{w(g)}),s.add(r,"isCircle").name("ShowCircle"),s.add(r,"importImg").name("LoadLocalImg").listen(),s.add(r,"downloadImg").name("DownLoad").listen()});class V{constructor(e,i,l){d(this,"pos");d(this,"tarPos");d(this,"vel",new m.Vector(0,0));d(this,"color");d(this,"size");this.tarPos=e,this.pos=new m.Vector(t.random(0,p),t.random(0,h)),this.color=i,this.size=l}show(){t.noStroke(),t.fill(this.color),r.isCircle?t.circle(this.pos.x,this.pos.y,this.size):t.rect(this.pos.x,this.pos.y,this.size,this.size)}update(){const e=m.Vector.dist(this.pos,this.tarPos),i=m.Vector.sub(this.tarPos,this.pos),l=t.map(e,0,50,.08,.3,!0);i.mult(l),this.vel.set(i),this.pos.add(this.vel)}}function b(s,e){let i=600,l=600;const c=s/e;c>1?l=i/c:i=l*c,p=i,h=l,t.createCanvas(p,h)}function w(s){n.value=!0,t.loadImage(s,e=>{b(e.width,e.height);const i=a(e.width,e.height)/r.sampleNum,l=a(p,h)/r.sampleNum;u.length=0,e.loadPixels();for(let c=0;c<e.height;c+=i)for(let v=0;v<e.width;v+=i){const j=e.get(v,c),U=v/e.width*p,A=c/e.height*h;u.push(new V(new m.Vector(U,A),j,l))}n.value=!1})}function B(s){t=s,t.setup=function(){w(C)},t.draw=function(){t.background(51);for(let e=u.length-1;e>=0;e--)u[e].update(),u[e].show()}}return(s,e)=>(L(),k("div",{ref_key:"con",ref:I,class:"viewCon"},[_("input",{ref_key:"file",ref:f,type:"file",accept:"image/png, image/jpeg, image/jpg",style:{display:"none"},onChange:N},null,544),P(O,{sketch:B}),P(Q,{"is-loading":n.value},null,8,["is-loading"])],512))}}),ae=z(T,[["__scopeId","data-v-b50bff85"]]);export{ae as default};
