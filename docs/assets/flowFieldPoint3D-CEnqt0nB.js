var j=Object.defineProperty;var q=(u,s,f)=>s in u?j(u,s,{enumerable:!0,configurable:!0,writable:!0,value:f}):u[s]=f;var k=(u,s,f)=>(q(u,typeof s!="symbol"?s+"":s,f),f);import{b as H}from"./simplex-noise-BtZ5wMFy.js";import{d as J,r as K,h as X,E as Y,I as N,O as tt,Q as S,T as et,aP as ot,N as st,U as nt,o as it,b as rt}from"./index-CpijY5gs.js";import{c as at}from"./chroma-ZZZ4fKfI.js";import{i as ct}from"./initThree-7ahq76Y7.js";import{p as lt}from"./dotTexture-NXlc0I5v.js";import"./OrbitControls-DbIETR5g.js";import"./initStats-k2kTMle0.js";const C=1e4,m=100,w=4,D=2,vt=J({__name:"flowFieldPoint3D",setup(u){const{random:s,PI:f,sin:F,cos:T,floor:z}=Math,U=at.scale(["#00b894","#0984e3","#6c5ce7","#fdcb6e","#e84393"]),L=H(),b=K(),t=new Float32Array(C*3),v=new Float32Array(C*3);let a=0,c=0,n=20;const R=[],y={};class G{constructor(i){k(this,"ind");k(this,"vel");this.ind=i,this.vel=new N(0,0,0)}getPos(){return{x:t[this.ind*3],y:t[this.ind*3+1],z:t[this.ind*3+2]}}edge(){const{x:i,y:d,z:h}=this.getPos();i<0&&(t[this.ind*3]=a),i>a&&(t[this.ind*3]=0),d<0&&(t[this.ind*3+1]=c),d>c&&(t[this.ind*3+1]=0),h<0&&(t[this.ind*3+2]=m),h>m&&(t[this.ind*3+2]=0)}update(i,d){this.edge();const[h,P,E]=U(i).gl();v[this.ind*3]=h,v[this.ind*3+1]=P,v[this.ind*3+2]=E,this.vel.add(d),this.vel.length()>D&&this.vel.setLength(D),t[this.ind*3]+=this.vel.x,t[this.ind*3+1]+=this.vel.y,t[this.ind*3+2]+=this.vel.z}}return X(()=>{const{width:$,height:i}=b.value.getBoundingClientRect();a=$/4,c=i/4,n=i/40;const{scene:d,camera:h,renderWrap:P,orbitControls:E}=ct(b.value,!1,!1,!1);h.position.set(a/2,c/2,m*2),h.lookAt(a/2,c/2,0),d.background=new Y(0);for(let e=-1;e*n<a+n;e+=1)for(let o=-1;o*n<c+n;o+=1)for(let r=-1;r*w<m+w;r+=1)y[`${e},${o},${r}`]={n:0,v:new N(0,0,0)};for(let e=0;e<C;e++){const o=s()*a,r=s()*c,l=s()*m;t[e*3]=o,t[e*3+1]=r,t[e*3+2]=l,R.push(new G(e))}const _=new tt;_.setAttribute("position",new S(t,3)),_.setAttribute("color",new S(v,3));const O=new et({size:1.5,map:new ot().load(lt),blending:st,transparent:!1,sizeAttenuation:!0,vertexColors:!0}),A=new nt(_,O);d.add(A);const Q=.05,V=.05,W=.01;let M=0;const Z=.01;P(()=>{M+=Z;let e=0;for(let o=-1;o*n<a+n;o+=1){e+=Q;let r=0;for(let l=-1;l*n<c+n;l+=1){r+=V;let x=0;for(let p=-1;p*w<m+w;p+=1){x+=W;const g=L(e,r,x,M)*.5+.5,B=4*f*g,I=D*.1*g;y[`${o},${l},${p}`].n=g,y[`${o},${l},${p}`].v.set(T(B)*I,F(B)*I,F(B)*I)}}}R.forEach(o=>{const{x:r,y:l,z:x}=o.getPos(),{n:p,v:g}=y[`${z(r/n)},${z(l/n)},${z(x/w)}`];o.update(p,g)}),A.geometry.attributes.position.needsUpdate=!0,A.geometry.attributes.color.needsUpdate=!0})()}),($,i)=>(it(),rt("div",{ref_key:"con",ref:b,class:"w-full h-full"},null,512))}});export{vt as default};
