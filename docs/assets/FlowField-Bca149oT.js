var T=Object.defineProperty;var U=(l,r,s)=>r in l?T(l,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[r]=s;var o=(l,r,s)=>(U(l,typeof r!="symbol"?r+"":r,s),s);import{f as c}from"./fabric-wCtRV_l8.js";import{C as v}from"./Card-y_MdRqhA.js";import{n as J}from"./noise-8YyA3euy.js";import"./p5.min-ANOqVAcF.js";import{d as K,r as X,C as O,h as Q,o as Z,b as $,l as ee,p as te,e as Y,_ as oe}from"./index-4DVSqO0R.js";const ie={class:"flowField"},ne=K({__name:"FlowField",setup(l){const{sin:r,cos:s,PI:re,ceil:F,random:le}=Math,b=X(),C=X(),x=[];let e=null,h=0,p=0,k=0,u=0;const a=50,H=.3,z=.3,D=8e-4;let W=0;const L=360;class M{constructor(t,n){o(this,"position");o(this,"size");o(this,"angle",45);o(this,"originRadius",4);o(this,"lineWidth",2);o(this,"borderWidth",1);o(this,"triangleWidth",10);o(this,"triangleHeight",14);o(this,"arrowColor","#e74c3c");o(this,"group");this.position=t,this.size=n;const{angle:d,lineWidth:w,borderWidth:m,arrowColor:_,originRadius:V,triangleWidth:j,triangleHeight:I,position:{x:f,y:g}}=this,q=new c.fabric.Rect({left:f,top:g,width:n,height:n,stroke:"#3498db",strokeWidth:m,fill:"#fff"});e==null||e.add(q);const E=new c.fabric.Circle({originX:"center",originY:"center",top:g,left:f,radius:V,fill:_});e==null||e.add(E);const B=n*.7+f,R=g,G=new c.fabric.Line([f,g,B,R],{originX:"left",originY:"center",stroke:_,strokeWidth:w,strokeLineCap:"round"}),P=new c.fabric.Triangle({originX:"center",originY:"top",top:R,left:B+I,width:j,height:I,fill:_,angle:90});this.group=new c.fabric.Group([G,P],{top:g,left:f,angle:d,originX:"left",originY:"center"}),e==null||e.add(this.group)}updateAngle(t){this.group.set("angle",t)}}function N(){for(let i=0;i<p;i+=a)for(let t=0;t<h;t+=a)x.push(new M({x:t,y:i},a))}function S(){let i=0;for(let t=0;t<k;t++){i+=H,W+=D;let n=0;for(let d=0;d<u;d++){n+=z;const w=J(i,n,W)*L,m=d+t*u;x[m].updateAngle(w)}}e==null||e.renderAll()}let y=0;function A(){S(),y=requestAnimationFrame(A),e==null||e.renderAll()}return O(()=>{cancelAnimationFrame(y)}),Q(()=>{var n;const{width:i,height:t}=(n=b.value)==null?void 0:n.getBoundingClientRect();h=i,p=t,u=F(h/a),k=F(p/a),e=new c.fabric.StaticCanvas(C.value,{width:h,height:p,backgroundColor:"#3498db"}),N(),A()}),(i,t)=>(Z(),$("div",ie,[ee(v,{class:"card"},{default:te(()=>[Y("div",{ref_key:"con",ref:b,class:"con"},[Y("canvas",{ref_key:"canvasDom",ref:C},null,512)],512)]),_:1})]))}}),he=oe(ne,[["__scopeId","data-v-a3c437aa"]]);export{he as default};
