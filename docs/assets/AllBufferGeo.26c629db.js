var ce=Object.defineProperty;var ue=(e,n,t)=>n in e?ce(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var z=(e,n,t)=>(ue(e,typeof n!="symbol"?n+"":n,t),t);import{L as le,j as de,k as he,B,l as ye,m as pe,n as fe,o as me,E as we,p as L,q as ge,I as xe,r as ve,s as Ce,t as Ge,u as _e,v as be,R as Te,w as Se,x as D,T as ze,y as Me,z as Pe,F as Ee,H as Be,G as Le,i as De,M as We,J as He,V as W,K as M,S as Re,O as ke,A as Ae,a as Oe,C as je,P as Ie,W as Ke}from"./OrbitControls.0b185e1b.js";import{d as Ve,b as P,h as Fe,c as qe,a as E,o as Je,_ as Ne}from"./index.71e5d15b.js";const Qe=new le({color:16777215,transparent:!0,opacity:.5}),Ue=new de({color:1401481,emissive:468276,side:he,flatShading:!0});function r(e){const n=new Le;return n.add(new De(e,Qe)),n.add(new We(e,Ue)),n}function Xe(){const e=new B(10,10,10);return r(e)}function Ye(){const e=new ye(5,32);return r(e)}function Ze(){const e=new pe(5,10,32);return r(e)}function $e(){const e=new fe(5,5,10,32);return r(e)}function et(){const e=new me(5,1);return r(e)}function tt(){const e=new B(10,10,10);return new we(e),r(e)}function nt(){const t=new L;t.moveTo(0,0),t.lineTo(0,8),t.lineTo(12,8),t.lineTo(12,0),t.lineTo(0,0);const c={steps:2,depth:10,bevelEnabled:!0,bevelThickness:1,bevelSize:1,bevelOffset:0,bevelSegments:1},y=new ge(t,c);return r(y)}function ot(){const e=new xe(5,1);return r(e)}function rt(){const e=[];for(let t=0;t<10;t++)e.push(new ve(Math.sin(t*.2)*10+5,(t-5)*2));const n=new Ce(e);return r(n)}function st(){const e=new Ge(5);return r(e)}function at(){const e=new _e(5,5);return r(e)}function it(){const e=[-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,1,1,1,-1,1,1],n=[2,1,0,0,3,2,0,4,7,7,3,0,0,1,5,5,4,0,1,2,6,6,5,1,2,3,7,7,6,2,4,5,6,6,7,4],t=new be(e,n,6,2);return r(t)}function ct(){const e=new Te(1,5,32);return r(e)}function ut(){const t=new L;t.moveTo(0+5,0+5),t.bezierCurveTo(0+5,0+5,0+4,0,0,0),t.bezierCurveTo(0-6,0,0-6,0+7,0-6,0+7),t.bezierCurveTo(0-6,0+11,0-3,0+15.4,0+5,0+19),t.bezierCurveTo(0+12,0+15.4,0+16,0+11,0+16,0+7),t.bezierCurveTo(0+16,0+7,0+16,0,0+10,0),t.bezierCurveTo(0+7,0,0+5,0+5,0+5,0+5);const c=new Se(t);return r(c)}function lt(){const e=new D(15,32,16);return r(e)}function dt(){const e=new ze(5);return r(e)}function ht(){const e=new Me(10,3,16,100);return r(e)}function yt(){const e=new Pe(10,3,100,16);return r(e)}function pt(){class e extends He{constructor(u=1){super();z(this,"scale");this.scale=u}getPoint(u,g=new W){const p=u*3-1.5,f=Math.sin(2*Math.PI*u),a=0;return g.set(p,f,a).multiplyScalar(this.scale)}}const n=new e(10),t=new Ee(n,20,2,8,!1);return r(t)}function ft(){const e=new D(10,10,10);return new Be(e),r(e)}const mt={class:"viewCon"},wt=Ve({__name:"AllBufferGeo",setup(e){const{cos:n,sin:t}=Math,c=P(),y=P();let u=innerWidth,g=innerHeight,p,f,a,h,l,i={x:120,y:60},v=100;const o=[];function H(){let s=Xe();o.push(s);let d=Ye();o.push(d);let C=Ze();o.push(C);let G=$e();o.push(G);let _=et();o.push(_);let q=tt();o.push(q);let J=nt();o.push(J);let N=ot();o.push(N);let Q=rt();o.push(Q);let U=st();o.push(U);let X=at();o.push(X);let Y=it();o.push(Y);let Z=ct();o.push(Z);let $=ut();o.push($);let ee=lt();o.push(ee);let te=dt();o.push(te);let ne=ht();o.push(ne);let oe=yt();o.push(oe);let re=pt();o.push(re);let se=ft();o.push(se),o.forEach((T,S)=>{let ae=S%6*40,ie=Math.floor(S/6)*40;T.position.set(ae,ie,0),a.add(T)})}let m,w,x=200;function R(){m=new M(16777215,2,300),m.position.set(i.x,i.y,v),w=new M(16777215,2,300),w.position.set(i.x,i.y,v),a.add(m),a.add(w)}function k(){let s=Date.now()*.005;const d=t(s)*x,C=n(s)*x;m.position.y=d,m.position.z=C;const G=t(s)*x,_=n(s)*x;w.position.x=G,w.position.z=_}function A(){let s=Date.now()*.001;o.forEach(d=>{d.rotation.y=s,d.rotation.x=s})}function O(){p=Re(),y.value.append(p.dom)}function j(){f=new ke(h,l.domElement),f.target=new W(i.x,i.y,0),f.object.position.set(i.x,i.y,v)}function I(){a.add(new Ae(1e3))}function K(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function V(){a=new Oe,a.background=new je(4473924),h=new Ie(75,u/g,1,4e3),l=new Ke({canvas:c.value,antialias:!0}),l.setSize(u,g),l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),h.updateProjectionMatrix(),window.addEventListener("resize",K)}function F(){A(),k()}function b(){requestAnimationFrame(b),p.update(),F(),l.render(a,h)}return Fe(()=>{V(),j(),H(),R(),I(),O(),b()}),(s,d)=>(Je(),qe("div",mt,[E("div",{class:"con",ref_key:"canvasCon",ref:y},[E("canvas",{class:"canvas",ref_key:"canvasDom",ref:c},null,512)],512)]))}});const Ct=Ne(wt,[["__scopeId","data-v-3ffaa5ae"]]);export{Ct as default};
