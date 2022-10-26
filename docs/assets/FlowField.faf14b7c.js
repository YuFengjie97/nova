var G=Object.defineProperty;var P=(a,r,d)=>r in a?G(a,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[r]=d;var i=(a,r,d)=>(P(a,typeof r!="symbol"?r+"":r,d),d);import{C as T}from"./Card.e5710724.js";import{f as n}from"./fabric.190d08ff.js";import{n as J}from"./noise.16e764ed.js";import"./p5.min.4a57bc93.js";import{d as K,b as R,h as O,c as Q,e as U,w as Z,o as $,a as X,_ as ee}from"./index.87d26285.js";const te={class:"flowField"},ie=K({__name:"FlowField",setup(a){const{sin:r,cos:d,PI:oe,ceil:F,random:le}=Math,b=R(),x=R(),C=[];let e=null,h=0,p=0,k=0,u=0,s=50,Y=.3,H=.3,v=8e-4,y=0,z=360;class D{constructor(t,l){i(this,"position");i(this,"size");i(this,"angle",45);i(this,"originRadius",4);i(this,"lineWidth",2);i(this,"borderWidth",1);i(this,"triangleWidth",10);i(this,"triangleHeight",14);i(this,"arrowColor","#e74c3c");i(this,"group");this.position=t,this.size=l;let{angle:c,lineWidth:_,borderWidth:w,arrowColor:m,originRadius:N,triangleWidth:S,triangleHeight:A,position:{x:f,y:g}}=this,V=new n.fabric.Rect({left:f,top:g,width:l,height:l,stroke:"#3498db",strokeWidth:w,fill:"#fff"});e==null||e.add(V);let j=new n.fabric.Circle({originX:"center",originY:"center",top:g,left:f,radius:N,fill:m});e==null||e.add(j);let B=l*.7+f,I=g,q=new n.fabric.Line([f,g,B,I],{originX:"left",originY:"center",stroke:m,strokeWidth:_,strokeLineCap:"round"}),E=new n.fabric.Triangle({originX:"center",originY:"top",top:I,left:B+A,width:S,height:A,fill:m,angle:90});this.group=new n.fabric.Group([q,E],{top:g,left:f,angle:c,originX:"left",originY:"center"}),e==null||e.add(this.group)}updateAngle(t){this.group.set("angle",t)}}function L(){for(let o=0;o<p;o+=s)for(let t=0;t<h;t+=s)C.push(new D({x:t,y:o},s))}function M(){let o=0;for(let t=0;t<k;t++){o+=Y,y+=v;let l=0;for(let c=0;c<u;c++){l+=H;let _=J(o,l,y)*z,w=c+t*u;C[w].updateAngle(_)}}e==null||e.renderAll()}function W(){M(),n.fabric.util.requestAnimFrame(W),e==null||e.renderAll()}return O(()=>{var l;const{width:o,height:t}=(l=b.value)==null?void 0:l.getBoundingClientRect();h=o,p=t,u=F(h/s),k=F(p/s),e=new n.fabric.StaticCanvas(x.value,{width:h,height:p,backgroundColor:"#3498db"}),L(),W()}),(o,t)=>($(),Q("div",te,[U(T,{bgColor:"#d63031",class:"p-2"},{default:Z(()=>[X("div",{class:"con",ref_key:"con",ref:b},[X("canvas",{ref_key:"canvasDom",ref:x},null,512)],512)]),_:1})]))}});const fe=ee(ie,[["__scopeId","data-v-adaf3677"]]);export{fe as default};