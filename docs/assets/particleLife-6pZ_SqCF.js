var V=Object.defineProperty;var D=(u,n,i)=>n in u?V(u,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[n]=i;var h=(u,n,i)=>(D(u,typeof n!="symbol"?n+"":n,i),i);import{c as H}from"./chroma-eh7xmDAu.js";import{i as J}from"./initStats-RmPhGrq2.js";import{d as K,r as B,h as Q,C as T,o as W,b as X,e as Y}from"./index-4DVSqO0R.js";const nt=K({__name:"particleLife",setup(u){const{random:n,PI:i,min:I,abs:Z,sqrt:M}=Math,_=B(),v=B(),S=H.scale(["#55efc4","#81ecec","#74b9ff","#a29bfe","#ffeaa7","#fab1a0","#ff7675","#fd79a8"]),o=8,A=o*100,m=2,b=.98,y=[];let F=0;return Q(()=>{const{width:r,height:l}=_.value.getBoundingClientRect();v.value.width=r,v.value.height=l;const w=v.value.getContext("2d"),{stats:E}=J(_.value),G=r/2,N=l/2,P=I(r,l),k=30,p=P/k,C=p*5,R=1/(k*4),x=P/4;class q{constructor(t,s,c){h(this,"x",0);h(this,"y",0);h(this,"vx",0);h(this,"vy",0);h(this,"type",0);h(this,"canvasoff");this.x=t,this.y=s,this.type=c;const f=document.createElement("canvas");f.width=m*2,f.height=m*2;const a=f.getContext("2d"),g=S(c/o).css();a.beginPath(),a.fillStyle=g,a.arc(m,m,m,0,2*i),a.fill(),a.closePath(),this.canvasoff=f}edge(){return this.x<0||this.x>r||this.y<0||this.y>l?(this.x=n()*r,this.y=n()*l,!0):!1}accletorForce(t,s){return t<=p?(t/p-1)*.5:t<C?s*(t-p)/(C-p):0}update(t){if(this.edge())return;const s=y[this.type][t.type],c=t.x-this.x,f=t.y-this.y,a=M(c**2+f**2),g=this.accletorForce(a,s)*R;this.vx+=c/a*g,this.vy+=f/a*g,this.vx*=b,this.vy*=b,this.x+=this.vx,this.y+=this.vy}draw(){w.drawImage(this.canvasoff,this.x,this.y)}}function z(){let e=-0;for(let t=0;t<o;t++){const s=[];for(let c=0;c<o;c++)e+=.1,e=e>1?-1:e,s.push(e);y.push(s)}}z();function L(){for(let e=0;e<o;e++)for(let t=0;t<o;t++){let s=y[e][t];s+=.1,y[e][t]=s>1?-1:s}}setInterval(()=>L(),3e3);const d=[];function O(){for(let e=0;e<o;e++)for(let t=0;t<A/o;t++)d.push(new q(n()*x-x/2+G,n()*x-x/2+N,e))}O();function U(){for(let e=0;e<d.length;e++){const t=d[e];for(let s=e+1;s<d.length;s++){if(e===s)continue;const c=d[s];t.update(c),c.update(t)}}d.forEach(e=>e.draw())}w.fillStyle="rgba(0,0,0,1)";function j(){E.update(),w.fillRect(0,0,r,l),U(),F=requestAnimationFrame(j)}j()}),T(()=>{cancelAnimationFrame(F)}),(r,l)=>(W(),X("div",{ref_key:"con",ref:_,class:"w-full h-full"},[Y("canvas",{ref_key:"canvas",ref:v,class:"block w-full h-full"},null,512)],512))}});export{nt as default};
