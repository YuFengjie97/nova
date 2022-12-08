var ce=Object.defineProperty;var ue=(e,n,t)=>n in e?ce(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var z=(e,n,t)=>(ue(e,typeof n!="symbol"?n+"":n,t),t);import{L as le,l as de,m as he,B as E,n as ye,o as pe,p as me,q as fe,r as we,s as L,t as ge,I as xe,c as ve,u as be,O as Ce,v as Ge,w as _e,R as Se,x as Te,y as D,z as ze,F as Me,H as Pe,J as Be,K as Ee,G as Le,k as De,e as We,N as He,V as W,U as M,A as Oe,S as Re,C as ke,P as Ae,W as Ie}from"./three.module.c94f3e3c.js";import{S as je}from"./stats.module.f23e5c82.js";import{O as Ke}from"./OrbitControls.d920b2db.js";import{d as Ve,b as P,h as Fe,c as qe,a as B,o as Ne,_ as Je}from"./index.dd42b8fd.js";const Ue=new le({color:16777215,transparent:!0,opacity:.5}),Qe=new de({color:1401481,emissive:468276,side:he,flatShading:!0});function r(e){const n=new Le;return n.add(new De(e,Ue)),n.add(new We(e,Qe)),n}function Xe(){const e=new E(10,10,10);return r(e)}function Ye(){const e=new ye(5,32);return r(e)}function Ze(){const e=new pe(5,10,32);return r(e)}function $e(){const e=new me(5,5,10,32);return r(e)}function et(){const e=new fe(5,1);return r(e)}function tt(){const e=new E(10,10,10);return new we(e),r(e)}function nt(){const t=new L;t.moveTo(0,0),t.lineTo(0,8),t.lineTo(12,8),t.lineTo(12,0),t.lineTo(0,0);const c={steps:2,depth:10,bevelEnabled:!0,bevelThickness:1,bevelSize:1,bevelOffset:0,bevelSegments:1},y=new ge(t,c);return r(y)}function ot(){const e=new xe(5,1);return r(e)}function rt(){const e=[];for(let t=0;t<10;t++)e.push(new ve(Math.sin(t*.2)*10+5,(t-5)*2));const n=new be(e);return r(n)}function st(){const e=new Ce(5);return r(e)}function it(){const e=new Ge(5,5);return r(e)}function at(){const e=[-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,1,1,1,-1,1,1],n=[2,1,0,0,3,2,0,4,7,7,3,0,0,1,5,5,4,0,1,2,6,6,5,1,2,3,7,7,6,2,4,5,6,6,7,4],t=new _e(e,n,6,2);return r(t)}function ct(){const e=new Se(1,5,32);return r(e)}function ut(){const t=new L;t.moveTo(0+5,0+5),t.bezierCurveTo(0+5,0+5,0+4,0,0,0),t.bezierCurveTo(0-6,0,0-6,0+7,0-6,0+7),t.bezierCurveTo(0-6,0+11,0-3,0+15.4,0+5,0+19),t.bezierCurveTo(0+12,0+15.4,0+16,0+11,0+16,0+7),t.bezierCurveTo(0+16,0+7,0+16,0,0+10,0),t.bezierCurveTo(0+7,0,0+5,0+5,0+5,0+5);const c=new Te(t);return r(c)}function lt(){const e=new D(15,32,16);return r(e)}function dt(){const e=new ze(5);return r(e)}function ht(){const e=new Me(10,3,16,100);return r(e)}function yt(){const e=new Pe(10,3,100,16);return r(e)}function pt(){class e extends He{constructor(u=1){super();z(this,"scale");this.scale=u}getPoint(u,g=new W){const p=u*3-1.5,m=Math.sin(2*Math.PI*u),i=0;return g.set(p,m,i).multiplyScalar(this.scale)}}const n=new e(10),t=new Be(n,20,2,8,!1);return r(t)}function mt(){const e=new D(10,10,10);return new Ee(e),r(e)}const ft={class:"viewCon"},wt=Ve({__name:"AllBufferGeo",setup(e){const{cos:n,sin:t}=Math,c=P(),y=P();let u=innerWidth,g=innerHeight,p,m,i,h,l,a={x:120,y:60},v=100;const o=[];function H(){let s=Xe();o.push(s);let d=Ye();o.push(d);let b=Ze();o.push(b);let C=$e();o.push(C);let G=et();o.push(G);let q=tt();o.push(q);let N=nt();o.push(N);let J=ot();o.push(J);let U=rt();o.push(U);let Q=st();o.push(Q);let X=it();o.push(X);let Y=at();o.push(Y);let Z=ct();o.push(Z);let $=ut();o.push($);let ee=lt();o.push(ee);let te=dt();o.push(te);let ne=ht();o.push(ne);let oe=yt();o.push(oe);let re=pt();o.push(re);let se=mt();o.push(se),o.forEach((S,T)=>{let ie=T%6*40,ae=Math.floor(T/6)*40;S.position.set(ie,ae,0),i.add(S)})}let f,w,x=200;function O(){f=new M(16777215,2,300),f.position.set(a.x,a.y,v),w=new M(16777215,2,300),w.position.set(a.x,a.y,v),i.add(f),i.add(w)}function R(){let s=Date.now()*.005;const d=t(s)*x,b=n(s)*x;f.position.y=d,f.position.z=b;const C=t(s)*x,G=n(s)*x;w.position.x=C,w.position.z=G}function k(){let s=Date.now()*.001;o.forEach(d=>{d.rotation.y=s,d.rotation.x=s})}function A(){p=je(),y.value.append(p.dom)}function I(){m=new Ke(h,l.domElement),m.target=new W(a.x,a.y,0),m.object.position.set(a.x,a.y,v)}function j(){i.add(new Oe(1e3))}function K(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function V(){i=new Re,i.background=new ke(4473924),h=new Ae(75,u/g,1,4e3),l=new Ie({canvas:c.value,antialias:!0}),l.setSize(u,g),l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),h.updateProjectionMatrix(),window.addEventListener("resize",K)}function F(){k(),R()}function _(){requestAnimationFrame(_),p.update(),F(),l.render(i,h)}return Fe(()=>{V(),I(),H(),O(),j(),A(),_()}),(s,d)=>(Ne(),qe("div",ft,[B("div",{class:"con",ref_key:"canvasCon",ref:y},[B("canvas",{class:"canvas",ref_key:"canvasDom",ref:c},null,512)],512)]))}});const Gt=Je(wt,[["__scopeId","data-v-a30b8b5f"]]);export{Gt as default};