var F=Object.defineProperty;var I=(f,s,u)=>s in f?F(f,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):f[s]=u;var v=(f,s,u)=>(I(f,typeof s!="symbol"?s+"":s,u),u);import{d as M,r as k,j as R,J as q,E as O,e as P,f as U,o as j,_ as z}from"./index-BO-XTyUX.js";const G=M({__name:"gameOfLife",setup(f){const{floor:s,random:u,abs:J}=Math,m=k(),a=k();let b=0;return R(async()=>{var _,N,w;const{width:l,height:c}=m.value.getBoundingClientRect();a.value.width=l,a.value.height=c;const d=a.value.getContext("2d"),{stats:E}=q(m.value),n=20,g=s(c/n),p=s(l/n),$=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],r={};function C(){const i=document.createElement("canvas");i.width=l,i.height=c;const e=i.getContext("2d");e.lineWidth=.5,e.strokeStyle="#000";for(let t=0;t<p;t+=1)e.beginPath(),e.moveTo(t*n,0),e.lineTo(t*n,c),e.stroke();for(let t=0;t<g;t+=1)e.beginPath(),e.moveTo(0,t*n),e.lineTo(l,t*n),e.stroke();return i}const L=C();class S{constructor(e,t,o){v(this,"x");v(this,"y");v(this,"isAlive");v(this,"neighborNum",0);this.x=e,this.y=t,this.isAlive=o}updateNeighborNum(){this.neighborNum=0,$.forEach(([e,t])=>{const o=this.x+e,h=this.y+t;o<0||o>=p||h<0||h>=g||r[`${o},${h}`].isAlive&&(this.neighborNum+=1)})}update(){this.updateNeighborNum(),this.isAlive&&this.neighborNum<2&&(this.isAlive=!1),this.isAlive&&this.neighborNum>=2&&this.neighborNum<=3&&(this.isAlive=!0),this.isAlive&&this.neighborNum>3&&(this.isAlive=!1),!this.isAlive&&this.neighborNum===3&&(this.isAlive=!0)}draw(){this.isAlive?d.fillStyle="#000":d.fillStyle="#fff",d.fillRect(this.x*n,this.y*n,n,n)}}function T(){for(let i=0;i<p;i++)for(let e=0;e<g;e++){const t=new S(i,e,!1);r[`${i},${e}`]=t,t.isAlive=!1}}T(),(_=a.value)==null||_.addEventListener("mousedown",()=>!0),(N=a.value)==null||N.addEventListener("mouseup",()=>!1),(w=a.value)==null||w.addEventListener("click",i=>{const{clientX:e,clientY:t}=i,o=s(e/n),h=s(t/n);r[`${o},${h}`].isAlive=!r[`${o},${h}`].isAlive});let A=!1;document.addEventListener("keyup",i=>{i.code==="Space"&&(A=!A)});const B=1e3/60;let x=0;function y(i){if(d.clearRect(0,0,l,c),d.drawImage(L,0,0,l,c),i-x>B){E.update();for(const e in r)A&&r[e].update(),r[e].draw();x=i}b=requestAnimationFrame(y)}requestAnimationFrame(y)}),O(()=>{cancelAnimationFrame(b)}),(l,c)=>(j(),P("div",{ref_key:"con",ref:m,class:"w-full h-full"},[U("canvas",{ref_key:"canvas",ref:a,class:"block w-full h-full"},null,512)],512))}}),Y=z(G,[["__scopeId","data-v-cb853f4d"]]);export{Y as default};
