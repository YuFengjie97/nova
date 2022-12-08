var ee=Object.defineProperty;var te=(u,l,d)=>l in u?ee(u,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):u[l]=d;var r=(u,l,d)=>(te(u,typeof l!="symbol"?l+"":l,d),d);import{G as oe}from"./dat.gui.module.5aaed78b.js";import{a1 as se,c as ae,aa as ne,y as T,a5 as D,e as B,G as re,V as I,a6 as ie,g as le,L as de,a7 as ce,S as he,C as me,P as ue,W as pe,A as ge,a as ve,ae as we,U as fe}from"./three.module.c94f3e3c.js";import{S as be}from"./stats.module.f23e5c82.js";import{O as Ce}from"./OrbitControls.d920b2db.js";import{R as xe,U as _e,E as U,S as ye}from"./UnrealBloomPass.d4fbf360.js";import{d as Me,b as G,h as Pe,c as Ee,a as O,o as Se,_ as Ae}from"./index.dd42b8fd.js";const Le={class:"viewCon"},Re=Me({__name:"Atom",setup(u){const{random:l,PI:d,floor:Te,ceil:De,min:Be,max:Ie,sin:Ue,cos:Ge}=Math,E=G(),S=G();let v=window.innerWidth,w=window.innerHeight,P,x,i,f,p,b,_,g,y,C,m;const A=1,L=new we;L.set(A);const M={},H=new se({color:0}),o={showAxes:!1,atomColor:7816649,bloomStrength:5,bloomThreshold:0,bloomRadius:1,lightIntensity:10,lightDistance:90,lightDecay:1,electronNum:100,tInc:.001,electronColor:623843,orbitColor:16611752,showOrbit:!1};Pe(()=>{X(),q(),V(),F(),R()});function k(){z()}function N(){let s=new oe({width:300});s.add(o,"showAxes").onChange(e=>{_.visible=e});const t=s.addFolder("Atom");t.open(),t.addColor(o,"atomColor").onChange(e=>{m.mesh.material.color.setHex(e),b.color.setHex(e)}),t.add(o,"bloomStrength",0,10,.1).onChange(e=>{C.strength=e}),t.add(o,"bloomThreshold",0,5,.1).onChange(e=>{C.threshold=e}),t.add(o,"bloomRadius",0,5,.1).onChange(e=>{C.radius=e}),t.add(o,"lightIntensity",0,200,1).onChange(e=>{b.intensity=e}),t.add(o,"lightDistance",0,160,1).onChange(e=>{b.distance=e}),t.add(o,"lightDecay",0,2,.01).onChange(e=>{b.decay=e});const a=s.addFolder("Electron");a.open(),a.add(o,"electronNum",1,100,1).onChange(e=>{m.updateElectronNum(e)}),a.add(o,"tInc",0,.02,.001).name("velocity"),a.addColor(o,"electronColor").onChange(e=>{m.electrons.forEach(n=>{n.updateColor(e)})}),a.add(o,"showOrbit").onChange(e=>{m.electrons.forEach(n=>{n.orbitMesh.visible=e})}),a.addColor(o,"orbitColor").onChange(e=>{m.electrons.forEach(n=>{n.orbitMesh.material.color.set(e)})})}N();function W(s,t,a){const{lightIntensity:e,lightDistance:n,lightDecay:c}=o,h=new fe(o.atomColor,e,n,c);return h.position.set(s,t,a),i.add(h),h}function F(){b=W(0,0,0)}function V(){m=new K(o.electronNum)}function z(){m.electrons.forEach(s=>{s.moveByCurve()})}function q(){const s=new xe(i,f),{bloomStrength:t,bloomRadius:a,bloomThreshold:e}=o;C=new _e(new ae(window.innerWidth,window.innerHeight),t,a,e),g=new U(p),g.renderToScreen=!1,g.addPass(s),g.addPass(C);const n=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
  `,c=`
  uniform sampler2D baseTexture;
  uniform sampler2D bloomTexture;
  varying vec2 vUv;
  void main() {
    gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
  }
  `;y=new U(p);const h=new ye(new ne({uniforms:{baseTexture:{value:null},bloomTexture:{value:g.renderTarget2.texture}},vertexShader:n,fragmentShader:c,defines:{}}),"baseTexture");h.needsSwap=!0,y.addPass(s),y.addPass(h)}function Y(){i.traverse($),g.render(),i.traverse(J),y.render()}const $=s=>{const t=s.material;t&&L.test(s.layers)===!1&&(M[s.uuid]=t,s.material=H)},J=s=>{M[s.uuid]&&(s.material=M[s.uuid],delete M[s.uuid])};class K{constructor(t){r(this,"r",40);r(this,"curveR",80);r(this,"mesh");r(this,"electrons",[]);const a=new T(this.r,128,128),e=new D({color:o.atomColor}),n=new B(a,e);n.layers.enable(A),this.mesh=n,i.add(n);for(let c=0;c<t;c++)this.electrons.push(new Q(d*2/t*c,this.curveR))}updateElectronNum(t){let a=d*2/t;this.electrons.forEach((e,n)=>{n<t?(e.updateOrbitRotation(a*n),e.group.visible=!0):e.group.visible=!1})}}class Q{constructor(t,a){r(this,"r",2);r(this,"group",new re);r(this,"curveR");r(this,"orbitCurve");r(this,"orbitMesh");r(this,"mesh");r(this,"t",l());r(this,"v",new I);this.curveR=a,i.add(this.group);let e=new T(this.r,128,128),n=new D({color:o.electronColor});this.mesh=new B(e,n),this.group.add(this.mesh),this.orbitCurve=new ie(0,0,a,a,0,2*Math.PI,!0,d/3);let c=this.orbitCurve.getSpacedPoints(300),h=new le().setFromPoints(c),j=new de({color:o.orbitColor});this.orbitMesh=new ce(h,j),this.orbitMesh.visible=o.showOrbit,this.group.add(this.orbitMesh),this.group.rotation.x=t,this.group.rotation.y=t}moveByCurve(){this.t>=1&&(this.t=0),this.t+=o.tInc;let t=this.orbitCurve.getPointAt(this.t);this.mesh.position.x=t.x,this.mesh.position.y=t.y}updateOrbitRotation(t){this.group.rotation.x=t,this.group.rotation.y=t}updateColor(t){this.mesh.material.color.set(t)}}function X(){i=new he,i.background=new me(0),f=new ue(75,v/w,.1,1e3),p=new pe({canvas:E.value,antialias:!0}),p.setSize(v,w),window.addEventListener("resize",Z),_=new ge(1e3),_.visible=o.showAxes,i.add(_),i.add(new ve(4210752)),P=be(),S.value.append(P.dom),x=new Ce(f,p.domElement),x.target=new I(0,0,0),x.object.position.set(0,0,200),x.update()}function R(){requestAnimationFrame(R),P.update(),k(),Y()}function Z(){v=window.innerWidth,w=window.innerHeight,f.aspect=v/w,f.updateProjectionMatrix(),p.setSize(v,w)}return(s,t)=>(Se(),Ee("div",Le,[O("div",{class:"canvasCon",ref_key:"canvasCon",ref:S},[O("canvas",{class:"canvas",ref_key:"canvasDom",ref:E},null,512)],512)]))}});const ze=Ae(Re,[["__scopeId","data-v-4a7dead3"]]);export{ze as default};