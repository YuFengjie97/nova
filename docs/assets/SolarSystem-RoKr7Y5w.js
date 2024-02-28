var de=Object.defineProperty;var he=(v,h,g)=>h in v?de(v,h,{enumerable:!0,configurable:!0,writable:!0,value:g}):v[h]=g;var d=(v,h,g)=>(he(v,typeof h!="symbol"?h+"":h,g),g);import{d as ce,r as E,h as pe,V as ue,I as we,G as me,S as fe,E as ge,P as be,W as ve,H as Ce,al as Me,at as ye,C as xe,o as Pe,b as Ge,e as q,J as He,ae as Re,au as Se,M as Ee,av as Le,O as Be,X as _e,aw as ke}from"./index-LMOq6Ftv.js";import{R as ze,E as Ae}from"./RenderPass-gCH5DXDs.js";import{U as Ve}from"./UnrealBloomPass-32rh_LpW.js";import{S as We}from"./stats.module-nRd2dy6L.js";import{O as Fe}from"./OrbitControls-ewB38WP2.js";import{i as Ie}from"./initGUI-4v9Pkg7m.js";import"./dat.gui.module-PWGADmkp.js";const et=ce({__name:"SolarSystem",setup(v){const{random:h,PI:g,floor:Te,ceil:Ue,min:je,max:Oe,sin:De,cos:qe}=Math,L=E(),B=E();let M=window.innerWidth,y=window.innerHeight,G,P,c,w,b,x,m,_,p;pe(()=>{J(),te(),N(),Z(),K(),ne(),$(),Y(),D()});let s,k,z,H,A,V,W,F,I,T,U;const i=20,u=10*i,f=20,R=[],t={vBase:.001,showHelper:!1,lightVisible:!0,lightColor:15158332,intensity:5,distance:2e3,decay:.5,exposure:1,bloomStrength:1.5,bloomThreshold:0,bloomRadius:0},j=E();function J(){const{gui:n}=Ie(j.value);n.add(t,"showHelper").onChange(e=>{R.forEach(r=>r.visible=e)}),n.add(t,"vBase",0,.03,.001);const o=n.addFolder("light");o.open(),o.add(t,"lightVisible").onChange(e=>{p.visible=e}),o.addColor(t,"lightColor").onChange(e=>{p.color.setHex(e)}),o.add(t,"intensity",0,7,.1).onChange(e=>{p.intensity=e}),o.add(t,"distance",0,4e3,1).onChange(e=>{p.distance=e}),o.add(t,"decay",0,10,.1).onChange(e=>{p.decay=e});const a=n.addFolder("glow");a.open(),a.add(t,"exposure",0,10,.1).onChange(e=>{b.toneMappingExposure=e**4}),a.add(t,"bloomStrength",0,10,.1).onChange(e=>{m.threshold=e}),a.add(t,"bloomThreshold",0,10,.1).onChange(e=>{m.strength=e}),a.add(t,"bloomRadius",0,10,.1).onChange(e=>{m.radius=e})}class l{constructor(o=!1,a,e,r,S,C){d(this,"isGlow");d(this,"group");d(this,"targetPlanet");d(this,"planetMesh");d(this,"oribitCurve");d(this,"oribitMesh");d(this,"oribitR");d(this,"t",0);d(this,"vRatio");this.isGlow=o,this.targetPlanet=C,this.group=new He;const oe=new Re(a,128,128),se=new Se({color:e});if(this.planetMesh=new Ee(oe,se),this.planetMesh.layers.enable(0),this.group.add(this.planetMesh),this.t=h(),this.vRatio=S,C){this.oribitR=r;const{x:ie,y:ae}=C==null?void 0:C.planetMesh.position;C.group.add(this.group),this.oribitCurve=new Le(ie,ae,r,r,0,2*Math.PI,!0,0);const re=new Be().setFromPoints(this.oribitCurve.getPoints(300)),le=new _e({color:e});this.oribitMesh=new ke(re,le),this.oribitMesh.layers.enable(0),this.oribitMesh.rotation.x=g/2,this.group.add(this.oribitMesh)}}planetMoveByCurve(){if(this.t>=1&&(this.t=0),this.targetPlanet){const{x:o,y:a,z:e}=this.targetPlanet.planetMesh.position;this.group.position.set(o,a,e),this.t+=this.vRatio*t.vBase;const{x:r,y:S}=this.oribitCurve.getPoint(this.t);this.planetMesh.position.set(r,0,S)}}}function N(){_=new ze(c,w),m=new Ve(new ue(window.innerWidth,window.innerHeight),1.5,.4,.85),m.threshold=t.bloomThreshold,m.strength=t.bloomStrength,m.radius=t.bloomRadius,x=new Ae(b),x.addPass(_),x.addPass(m)}function X(){w.layers.set(1),x.render(),w.layers.set(0)}function K(){s=new l(!0,u,15158332,0,0),c.add(s.group),k=new l(!1,.5*i,1752220,u+2*f,4.1,s),z=new l(!1,i,15965202,u+6*f,1.6,s),H=new l(!1,i,3447003,u+12*f,1,s),V=new l(!1,.8*i,12597547,u+16*f,.5,s),W=new l(!1,.3*i,2600544,u+20*f,.08,s),F=new l(!1,5*i,9807270,u+30*f,.03,s),I=new l(!1,4*i,9323693,u+50*f,.01,s),T=new l(!1,3*i,3447003,u+60*f,.006,s),A=new l(!1,.2*i,15528177,1.4*i,2,H),U=[k,z,H,V,W,F,I,T,A]}function Q(){U.forEach(n=>{n.planetMoveByCurve()})}function Y(){G=We(),B.value.append(G.dom)}function Z(){P=new Fe(w,b.domElement),P.target=new we(0,0,0),P.object.position.set(300,400,800),P.update()}function $(){const n=new me(1600);n.visible=t.showHelper,R.push(n),c.add(n)}function ee(){M=window.innerWidth,y=window.innerHeight,w.aspect=M/y,w.updateProjectionMatrix(),b.setSize(M,y)}function te(){c=new fe,c.background=new ge(0),w=new be(75,M/y,1,4e4),b=new ve({canvas:L.value,antialias:!0}),b.setSize(M,y),window.addEventListener("resize",ee)}function ne(){const n=new Ce(4210752);c.add(n),p=new Me(15158332,5,2e3,.5);const{x:o,y:a,z:e}=s.planetMesh.position;p.position.set(o,a,e),c.add(p);const r=new ye(p,1600);r.visible=t.showHelper,R.push(r),c.add(r)}let O=0;function D(){G.update(),Q(),X(),b.render(c,w),x.render(),O=requestAnimationFrame(D)}return xe(()=>{cancelAnimationFrame(O)}),(n,o)=>(Pe(),Ge("div",{ref_key:"con",ref:j,class:""},[q("div",{ref_key:"canvasCon",ref:B,class:"canvasCon"},[q("canvas",{ref_key:"canvasDom",ref:L,class:"canvas"},null,512)],512)],512))}});export{et as default};
