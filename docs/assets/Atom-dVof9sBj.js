var oe=Object.defineProperty;var ne=(u,l,c)=>l in u?oe(u,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):u[l]=c;var r=(u,l,c)=>(ne(u,typeof l!="symbol"?l+"":l,c),c);import{d as se,r as _,aq as ae,h as re,V as ie,ax as le,ae as B,au as O,M as U,J as ce,I as H,av as de,O as he,X as me,aw as ue,S as pe,E as ge,P as fe,W as ve,G as we,H as be,C as Ce,o as xe,b as ye,e as k,ay as Me,al as Pe,_ as Ee}from"./index-1TrBq7Et.js";import{S as _e}from"./stats.module-nRd2dy6L.js";import{O as Se}from"./OrbitControls-l6eHirlQ.js";import{R as Ae,E as G,S as Re}from"./RenderPass-DZgcmP4d.js";import{U as Ie}from"./UnrealBloomPass-fsu1Sejp.js";import{i as Le}from"./initGUI-4v9Pkg7m.js";import"./dat.gui.module-PWGADmkp.js";const Te=se({__name:"Atom",setup(u){const{random:l,PI:c,floor:De,ceil:Be,min:Oe,max:Ue,sin:He,cos:ke}=Math,S=_(),A=_();let f=window.innerWidth,v=window.innerHeight,E,x,i,w,p,b,y,g,M,C,m;const R=1,I=new Me;I.set(R);const P={},F=new ae({color:0}),o={showAxes:!1,atomColor:7816649,bloomStrength:5,bloomThreshold:0,bloomRadius:1,lightIntensity:10,lightDistance:90,lightDecay:1,electronNum:100,tInc:.001,electronColor:623843,orbitColor:16611752,showOrbit:!1};re(()=>{W(),j(),X(),q(),z(),D()});function N(){J()}const L=_();function W(){const{gui:n}=Le(L.value);n.add(o,"showAxes").onChange(e=>{y.visible=e});const t=n.addFolder("Atom");t.open(),t.addColor(o,"atomColor").onChange(e=>{m.mesh.material.color.setHex(e),b.color.setHex(e)}),t.add(o,"bloomStrength",0,10,.1).onChange(e=>{C.strength=e}),t.add(o,"bloomThreshold",0,5,.1).onChange(e=>{C.threshold=e}),t.add(o,"bloomRadius",0,5,.1).onChange(e=>{C.radius=e}),t.add(o,"lightIntensity",0,200,1).onChange(e=>{b.intensity=e}),t.add(o,"lightDistance",0,160,1).onChange(e=>{b.distance=e}),t.add(o,"lightDecay",0,2,.01).onChange(e=>{b.decay=e});const s=n.addFolder("Electron");s.open(),s.add(o,"electronNum",1,100,1).onChange(e=>{m.updateElectronNum(e)}),s.add(o,"tInc",0,.02,.001).name("velocity"),s.addColor(o,"electronColor").onChange(e=>{m.electrons.forEach(a=>{a.updateColor(e)})}),s.add(o,"showOrbit").onChange(e=>{m.electrons.forEach(a=>{a.orbitMesh.visible=e})}),s.addColor(o,"orbitColor").onChange(e=>{m.electrons.forEach(a=>{a.orbitMesh.material.color.set(e)})})}function V(n,t,s){const{lightIntensity:e,lightDistance:a,lightDecay:d}=o,h=new Pe(o.atomColor,e,a,d);return h.position.set(n,t,s),i.add(h),h}function z(){b=V(0,0,0)}function q(){m=new Z(o.electronNum)}function J(){m.electrons.forEach(n=>{n.moveByCurve()})}function X(){const n=new Ae(i,w),{bloomStrength:t,bloomRadius:s,bloomThreshold:e}=o;C=new Ie(new ie(window.innerWidth,window.innerHeight),t,s,e),g=new G(p),g.renderToScreen=!1,g.addPass(n),g.addPass(C);const a=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
  `,d=`
  uniform sampler2D baseTexture;
  uniform sampler2D bloomTexture;
  varying vec2 vUv;
  void main() {
    gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
  }
  `;M=new G(p);const h=new Re(new le({uniforms:{baseTexture:{value:null},bloomTexture:{value:g.renderTarget2.texture}},vertexShader:a,fragmentShader:d,defines:{}}),"baseTexture");h.needsSwap=!0,M.addPass(n),M.addPass(h)}function Y(){i.traverse(K),g.render(),i.traverse(Q),M.render()}function K(n){const t=n.material;t&&I.test(n.layers)===!1&&(P[n.uuid]=t,n.material=F)}function Q(n){P[n.uuid]&&(n.material=P[n.uuid],delete P[n.uuid])}class Z{constructor(t){r(this,"r",40);r(this,"curveR",80);r(this,"mesh");r(this,"electrons",[]);const s=new B(this.r,128,128),e=new O({color:o.atomColor}),a=new U(s,e);a.layers.enable(R),this.mesh=a,i.add(a);for(let d=0;d<t;d++)this.electrons.push(new $(c*2/t*d,this.curveR))}updateElectronNum(t){const s=c*2/t;this.electrons.forEach((e,a)=>{a<t?(e.updateOrbitRotation(s*a),e.group.visible=!0):e.group.visible=!1})}}class ${constructor(t,s){r(this,"r",2);r(this,"group",new ce);r(this,"curveR");r(this,"orbitCurve");r(this,"orbitMesh");r(this,"mesh");r(this,"t",l());r(this,"v",new H);this.curveR=s,i.add(this.group);const e=new B(this.r,128,128),a=new O({color:o.electronColor});this.mesh=new U(e,a),this.group.add(this.mesh),this.orbitCurve=new de(0,0,s,s,0,2*Math.PI,!0,c/3);const d=this.orbitCurve.getSpacedPoints(300),h=new he().setFromPoints(d),te=new me({color:o.orbitColor});this.orbitMesh=new ue(h,te),this.orbitMesh.visible=o.showOrbit,this.group.add(this.orbitMesh),this.group.rotation.x=t,this.group.rotation.y=t}moveByCurve(){this.t>=1&&(this.t=0),this.t+=o.tInc;const t=this.orbitCurve.getPointAt(this.t);this.mesh.position.x=t.x,this.mesh.position.y=t.y}updateOrbitRotation(t){this.group.rotation.x=t,this.group.rotation.y=t}updateColor(t){this.mesh.material.color.set(t)}}function j(){i=new pe,i.background=new ge(0),w=new fe(75,f/v,.1,1e3),p=new ve({canvas:S.value,antialias:!0}),p.setSize(f,v),window.addEventListener("resize",ee),y=new we(1e3),y.visible=o.showAxes,i.add(y),i.add(new be(4210752)),E=_e(),A.value.append(E.dom),x=new Se(w,p.domElement),x.target=new H(0,0,0),x.object.position.set(0,0,200),x.update()}let T=0;function D(){E.update(),N(),Y(),T=requestAnimationFrame(D)}function ee(){f=window.innerWidth,v=window.innerHeight,w.aspect=f/v,w.updateProjectionMatrix(),p.setSize(f,v)}return Ce(()=>{cancelAnimationFrame(T)}),(n,t)=>(xe(),ye("div",{ref_key:"con",ref:L},[k("div",{ref_key:"canvasCon",ref:A,class:"canvasCon"},[k("canvas",{ref_key:"canvasDom",ref:S,class:"canvas"},null,512)],512)],512))}}),Xe=Ee(Te,[["__scopeId","data-v-05a69412"]]);export{Xe as default};
