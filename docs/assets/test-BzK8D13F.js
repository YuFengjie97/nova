var p=Object.defineProperty;var _=(e,t,s)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var o=(e,t,s)=>(_(e,typeof t!="symbol"?t+"":t,s),s);import{i as g}from"./initStats-z-qGLZo8.js";import{d as w,r as d,j as k,G as b,e as B,f as P,o as C}from"./index-Dk52mj26.js";const I=0,N=w({__name:"test",setup(e){const{random:t,PI:s,floor:r,min:M,abs:$,max:q,sqrt:A,sin:E,cos:F,atan:R}=Math,h=d(),l=d();return k(()=>{const{width:a,height:n}=h.value.getBoundingClientRect();l.value.width=a,l.value.height=n;const c=l.value.getContext("2d"),{stats:m}=g(h.value);class v{constructor(x,y){o(this,"x");o(this,"y");o(this,"vx",0);o(this,"vy",0);o(this,"color");this.x=x,this.y=y,this.vx=t()*100,this.vy=t()*100,this.color=`rgb(${r(t()*255)},${r(t()*255)},${r(t()*255)})`}edge(){(this.x<0||this.x>a||this.y<0||this.y>n)&&(this.x=t()*a,this.y=t()*n)}update(){this.x+=this.vx,this.y+=this.vy,this.edge()}draw(){c.beginPath(),c.fillStyle=this.color,c.arc(this.x,this.y,4,0,Math.PI*2),c.fill()}}const u=[];for(let i=0;i<8e3;i++)u.push(new v(t()*a,t()*n));function f(){m.update(),c.clearRect(0,0,a,n),u.forEach(i=>{i.update(),i.draw()}),requestAnimationFrame(f)}f()}),b(()=>{cancelAnimationFrame(I)}),(a,n)=>(C(),B("div",{ref_key:"con",ref:h,class:"w-full h-full"},[P("canvas",{ref_key:"canvas",ref:l,class:"block w-full h-full"},null,512)],512))}});export{N as default};
