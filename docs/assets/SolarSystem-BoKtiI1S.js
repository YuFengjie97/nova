var de=Object.defineProperty;var he=(v,h,g)=>h in v?de(v,h,{enumerable:!0,configurable:!0,writable:!0,value:g}):v[h]=g;var d=(v,h,g)=>(he(v,typeof h!="symbol"?h+"":h,g),g);import{d as ce,r as H,j as pe,V as ue,O as we,N as me,L as fe,S as ge,K as be,P as ve,W as Ce,M as Me,ar as ye,aD as xe,E as Pe,e as Ge,f as O,Q as Re,ak as Se,aE as Ee,U as He,aF as Le,Y as Be,a2 as _e,aG as ke,o as ze}from"./index-BO-XTyUX.js";import{R as Ae,E as Fe}from"./RenderPass-DojWI3py.js";import{U as Ve}from"./UnrealBloomPass-C5aSs4Aq.js";import{S as We}from"./stats.module--VATS4Kh.js";import{i as Ue}from"./initGUI-CcmszmDW.js";import"./dat.gui.module-DcMWPYuf.js";const r=20,f=20,$e=ce({__name:"SolarSystem",setup(v){const{random:h,PI:g,floor:je,ceil:Ie,min:Te,max:De,sin:Ne,cos:Oe}=Math,L=H(),B=H();let M=window.innerWidth,y=window.innerHeight,G,P,c,w,b,x,m,_,p;pe(()=>{q(),te(),K(),Z(),Y(),ne(),$(),X(),N()});let o,k,z,R,A,F,V,W,U,j,I;const u=10*r,S=[],t={vBase:.001,showHelper:!1,lightVisible:!0,lightColor:15158332,intensity:5,distance:2e3,decay:.5,exposure:1,bloomStrength:1.5,bloomThreshold:0,bloomRadius:0},T=H();function q(){const{gui:n}=Ue(T.value);n.add(t,"showHelper").onChange(e=>{S.forEach(a=>a.visible=e)}),n.add(t,"vBase",0,.03,.001);const s=n.addFolder("light");s.open(),s.add(t,"lightVisible").onChange(e=>{p.visible=e}),s.addColor(t,"lightColor").onChange(e=>{p.color.setHex(e)}),s.add(t,"intensity",0,7,.1).onChange(e=>{p.intensity=e}),s.add(t,"distance",0,4e3,1).onChange(e=>{p.distance=e}),s.add(t,"decay",0,10,.1).onChange(e=>{p.decay=e});const i=n.addFolder("glow");i.open(),i.add(t,"exposure",0,10,.1).onChange(e=>{b.toneMappingExposure=e**4}),i.add(t,"bloomStrength",0,10,.1).onChange(e=>{m.threshold=e}),i.add(t,"bloomThreshold",0,10,.1).onChange(e=>{m.strength=e}),i.add(t,"bloomRadius",0,10,.1).onChange(e=>{m.radius=e})}class l{constructor(s=!1,i,e,a,E,C){d(this,"isGlow");d(this,"group");d(this,"targetPlanet");d(this,"planetMesh");d(this,"oribitCurve");d(this,"oribitMesh");d(this,"oribitR");d(this,"t",0);d(this,"vRatio");this.isGlow=s,this.targetPlanet=C,this.group=new Re;const se=new Se(i,128,128),oe=new Ee({color:e});if(this.planetMesh=new He(se,oe),this.planetMesh.layers.enable(0),this.group.add(this.planetMesh),this.t=h(),this.vRatio=E,C){this.oribitR=a;const{x:ie,y:ae}=C==null?void 0:C.planetMesh.position;C.group.add(this.group),this.oribitCurve=new Le(ie,ae,a,a,0,2*Math.PI,!0,0);const re=new Be().setFromPoints(this.oribitCurve.getPoints(300)),le=new _e({color:e});this.oribitMesh=new ke(re,le),this.oribitMesh.layers.enable(0),this.oribitMesh.rotation.x=g/2,this.group.add(this.oribitMesh)}}planetMoveByCurve(){if(this.t>=1&&(this.t=0),this.targetPlanet){const{x:s,y:i,z:e}=this.targetPlanet.planetMesh.position;this.group.position.set(s,i,e),this.t+=this.vRatio*t.vBase;const{x:a,y:E}=this.oribitCurve.getPoint(this.t);this.planetMesh.position.set(a,0,E)}}}function K(){_=new Ae(c,w),m=new Ve(new ue(window.innerWidth,window.innerHeight),1.5,.4,.85),m.threshold=t.bloomThreshold,m.strength=t.bloomStrength,m.radius=t.bloomRadius,x=new Fe(b),x.addPass(_),x.addPass(m)}function Q(){w.layers.set(1),x.render(),w.layers.set(0)}function Y(){o=new l(!0,u,15158332,0,0),c.add(o.group),k=new l(!1,.5*r,1752220,u+2*f,4.1,o),z=new l(!1,r,15965202,u+6*f,1.6,o),R=new l(!1,r,3447003,u+12*f,1,o),F=new l(!1,.8*r,12597547,u+16*f,.5,o),V=new l(!1,.3*r,2600544,u+20*f,.08,o),W=new l(!1,5*r,9807270,u+30*f,.03,o),U=new l(!1,4*r,9323693,u+50*f,.01,o),j=new l(!1,3*r,3447003,u+60*f,.006,o),A=new l(!1,.2*r,15528177,1.4*r,2,R),I=[k,z,R,F,V,W,U,j,A]}function J(){I.forEach(n=>{n.planetMoveByCurve()})}function X(){G=We(),B.value.append(G.dom)}function Z(){P=new we(w,b.domElement),P.target=new me(0,0,0),P.object.position.set(300,400,800),P.update()}function $(){const n=new fe(1600);n.visible=t.showHelper,S.push(n),c.add(n)}function ee(){M=window.innerWidth,y=window.innerHeight,w.aspect=M/y,w.updateProjectionMatrix(),b.setSize(M,y)}function te(){c=new ge,c.background=new be(0),w=new ve(75,M/y,1,4e4),b=new Ce({canvas:L.value,antialias:!0}),b.setSize(M,y),window.addEventListener("resize",ee)}function ne(){const n=new Me(4210752);c.add(n),p=new ye(15158332,5,2e3,.5);const{x:s,y:i,z:e}=o.planetMesh.position;p.position.set(s,i,e),c.add(p);const a=new xe(p,1600);a.visible=t.showHelper,S.push(a),c.add(a)}let D=0;function N(){G.update(),J(),Q(),b.render(c,w),x.render(),D=requestAnimationFrame(N)}return Pe(()=>{cancelAnimationFrame(D)}),(n,s)=>(ze(),Ge("div",{ref_key:"con",ref:T,class:""},[O("div",{ref_key:"canvasCon",ref:B,class:"canvasCon"},[O("canvas",{ref_key:"canvasDom",ref:L,class:"canvas"},null,512)],512)],512))}});export{$e as default};
