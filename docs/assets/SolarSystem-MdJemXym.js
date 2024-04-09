var de=Object.defineProperty;var he=(v,h,g)=>h in v?de(v,h,{enumerable:!0,configurable:!0,writable:!0,value:g}):v[h]=g;var d=(v,h,g)=>(he(v,typeof h!="symbol"?h+"":h,g),g);import{d as ce,r as L,j as pe,V as ue,R as we,O as me,S as fe,N as ge,P as be,W as ve,Q as Ce,at as Me,aK as ye,G as xe,e as Pe,f as D,T as Re,am as Ge,aL as Se,Y as He,aM as Le,$ as Be,a4 as Ee,aN as _e,o as ke}from"./index-Dk52mj26.js";import{R as ze,E as Ae}from"./RenderPass-BN88JlIK.js";import{U as Ve}from"./UnrealBloomPass-q4RNDoWX.js";import{S as We}from"./stats.module--VATS4Kh.js";import{O as Fe}from"./OrbitControls-Rz_z-Chd.js";import{i as Te}from"./initGUI-CcmszmDW.js";import"./dat.gui.module-DcMWPYuf.js";const r=20,f=20,et=ce({__name:"SolarSystem",setup(v){const{random:h,PI:g,floor:je,ceil:Ie,min:Ue,max:Ne,sin:Oe,cos:De}=Math,B=L(),E=L();let M=window.innerWidth,y=window.innerHeight,R,P,c,w,b,x,m,_,p;pe(()=>{q(),te(),K(),X(),Y(),ne(),Z(),J(),O()});let s,k,z,G,A,V,W,F,T,j,I;const u=10*r,S=[],t={vBase:.001,showHelper:!1,lightVisible:!0,lightColor:15158332,intensity:5,distance:2e3,decay:.5,exposure:1,bloomStrength:1.5,bloomThreshold:0,bloomRadius:0},U=L();function q(){const{gui:n}=Te(U.value);n.add(t,"showHelper").onChange(e=>{S.forEach(a=>a.visible=e)}),n.add(t,"vBase",0,.03,.001);const o=n.addFolder("light");o.open(),o.add(t,"lightVisible").onChange(e=>{p.visible=e}),o.addColor(t,"lightColor").onChange(e=>{p.color.setHex(e)}),o.add(t,"intensity",0,7,.1).onChange(e=>{p.intensity=e}),o.add(t,"distance",0,4e3,1).onChange(e=>{p.distance=e}),o.add(t,"decay",0,10,.1).onChange(e=>{p.decay=e});const i=n.addFolder("glow");i.open(),i.add(t,"exposure",0,10,.1).onChange(e=>{b.toneMappingExposure=e**4}),i.add(t,"bloomStrength",0,10,.1).onChange(e=>{m.threshold=e}),i.add(t,"bloomThreshold",0,10,.1).onChange(e=>{m.strength=e}),i.add(t,"bloomRadius",0,10,.1).onChange(e=>{m.radius=e})}class l{constructor(o=!1,i,e,a,H,C){d(this,"isGlow");d(this,"group");d(this,"targetPlanet");d(this,"planetMesh");d(this,"oribitCurve");d(this,"oribitMesh");d(this,"oribitR");d(this,"t",0);d(this,"vRatio");this.isGlow=o,this.targetPlanet=C,this.group=new Re;const oe=new Ge(i,128,128),se=new Se({color:e});if(this.planetMesh=new He(oe,se),this.planetMesh.layers.enable(0),this.group.add(this.planetMesh),this.t=h(),this.vRatio=H,C){this.oribitR=a;const{x:ie,y:ae}=C==null?void 0:C.planetMesh.position;C.group.add(this.group),this.oribitCurve=new Le(ie,ae,a,a,0,2*Math.PI,!0,0);const re=new Be().setFromPoints(this.oribitCurve.getPoints(300)),le=new Ee({color:e});this.oribitMesh=new _e(re,le),this.oribitMesh.layers.enable(0),this.oribitMesh.rotation.x=g/2,this.group.add(this.oribitMesh)}}planetMoveByCurve(){if(this.t>=1&&(this.t=0),this.targetPlanet){const{x:o,y:i,z:e}=this.targetPlanet.planetMesh.position;this.group.position.set(o,i,e),this.t+=this.vRatio*t.vBase;const{x:a,y:H}=this.oribitCurve.getPoint(this.t);this.planetMesh.position.set(a,0,H)}}}function K(){_=new ze(c,w),m=new Ve(new ue(window.innerWidth,window.innerHeight),1.5,.4,.85),m.threshold=t.bloomThreshold,m.strength=t.bloomStrength,m.radius=t.bloomRadius,x=new Ae(b),x.addPass(_),x.addPass(m)}function Q(){w.layers.set(1),x.render(),w.layers.set(0)}function Y(){s=new l(!0,u,15158332,0,0),c.add(s.group),k=new l(!1,.5*r,1752220,u+2*f,4.1,s),z=new l(!1,r,15965202,u+6*f,1.6,s),G=new l(!1,r,3447003,u+12*f,1,s),V=new l(!1,.8*r,12597547,u+16*f,.5,s),W=new l(!1,.3*r,2600544,u+20*f,.08,s),F=new l(!1,5*r,9807270,u+30*f,.03,s),T=new l(!1,4*r,9323693,u+50*f,.01,s),j=new l(!1,3*r,3447003,u+60*f,.006,s),A=new l(!1,.2*r,15528177,1.4*r,2,G),I=[k,z,G,V,W,F,T,j,A]}function $(){I.forEach(n=>{n.planetMoveByCurve()})}function J(){R=We(),E.value.append(R.dom)}function X(){P=new Fe(w,b.domElement),P.target=new we(0,0,0),P.object.position.set(300,400,800),P.update()}function Z(){const n=new me(1600);n.visible=t.showHelper,S.push(n),c.add(n)}function ee(){M=window.innerWidth,y=window.innerHeight,w.aspect=M/y,w.updateProjectionMatrix(),b.setSize(M,y)}function te(){c=new fe,c.background=new ge(0),w=new be(75,M/y,1,4e4),b=new ve({canvas:B.value,antialias:!0}),b.setSize(M,y),window.addEventListener("resize",ee)}function ne(){const n=new Ce(4210752);c.add(n),p=new Me(15158332,5,2e3,.5);const{x:o,y:i,z:e}=s.planetMesh.position;p.position.set(o,i,e),c.add(p);const a=new ye(p,1600);a.visible=t.showHelper,S.push(a),c.add(a)}let N=0;function O(){R.update(),$(),Q(),b.render(c,w),x.render(),N=requestAnimationFrame(O)}return xe(()=>{cancelAnimationFrame(N)}),(n,o)=>(ke(),Pe("div",{ref_key:"con",ref:U,class:""},[D("div",{ref_key:"canvasCon",ref:E,class:"canvasCon"},[D("canvas",{ref_key:"canvasDom",ref:B,class:"canvas"},null,512)],512)],512))}});export{et as default};
