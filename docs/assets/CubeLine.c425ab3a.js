import{G as ee,B as ne,d as te,e as ie,f as M,V as oe,g as W,h as G,D as L,i as ae,j as se,L as re,k as ce,A as le,S as de,P as ue,W as we}from"./three.module.c94f3e3c.js";import{S as me}from"./stats.module.f23e5c82.js";import{O as pe}from"./OrbitControls.d920b2db.js";import{G as fe}from"./dat.gui.module.5aaed78b.js";import{d as he,b as k,h as ve,c as xe,a as E,o as ge,_ as Ce}from"./index.dd42b8fd.js";const _e={class:"viewCon"},be=he({__name:"CubeLine",setup(ye){const{random:d,sqrt:I}=Math,P=k(),H=k();let D,z,g,u,r,w,f,o=500,h=500,v=1e3,n=new Float32Array(v*3),c=new Float32Array(v**2*3),l=new Float32Array(v**2*3),C=[],_,b,A=100,B=20,m;const x={showDots:!0,showLines:!0,particleNum:500,minDistance:100,maxConnection:20};function V(){const e=new fe({width:300});e.add(x,"showDots").onChange(function(i){b.visible=i}),e.add(x,"showLines").onChange(function(i){m.visible=i}),e.add(x,"particleNum",0,v,1).onChange(function(i){h=i}),e.add(x,"minDistance",0,300,1).onChange(function(i){A=i}),e.add(x,"maxConnection",0,30,1).onChange(function(i){B=i})}function F(){w=new ee,g.add(w);let e=new ne(o,o,o);f=new te(new ie(e)),f.material.color.setRGB(255,0,0),f.material.blending=M,f.material.transparent=!0,w.add(f)}function N(){for(let e=0;e<v;e++){let i=d()*o-o/2,y=d()*o-o/2,t=d()*o-o/2;n[e*3]=i,n[e*3+1]=y,n[e*3+2]=t,C.push({vel:new oe(d()*2-1,d()*2-1,d()*2-1),numConnection:0})}}function j(){_=new W,_.setDrawRange(0,h),_.setAttribute("position",new G(n,3).setUsage(L));const e=new ae({color:16777215,size:3,blending:M,transparent:!0,sizeAttenuation:!1});b=new se(_,e),w.add(b)}function q(){const e=new re({vertexColors:!0,blending:M,transparent:!0}),i=new W;i.setAttribute("position",new G(c,3).setUsage(L)),i.setAttribute("color",new G(l,3).setUsage(L)),m=new ce(i,e),w.add(m)}function O(){let e=0,i=0,y=0;for(let t=0;t<h;t++)C[t].numConnection=0;for(let t=0;t<h;t++){const a=C[t];if((n[t*3]<-o/2||n[t*3]>o/2)&&(a.vel.x=-a.vel.x),(n[t*3+1]<-o/2||n[t*3+1]>o/2)&&(a.vel.y=-a.vel.y),(n[t*3+2]<-o/2||n[t*3+2]>o/2)&&(a.vel.z=-a.vel.z),n[t*3]+=a.vel.x,n[t*3+1]+=a.vel.y,n[t*3+2]+=a.vel.z,!(a.numConnection>=B))for(let s=0;s<h;s++){const X=n[t*3]-n[s*3],Y=n[t*3+1]-n[s*3+1],Z=n[t*3+2]-n[s*3+2],U=I(X**2+Y**2+Z**2);if(U<A){const R=C[s];if(R.numConnection>=B)continue;a.numConnection++,R.numConnection++,c[i++]=n[t*3],c[i++]=n[t*3+1],c[i++]=n[t*3+2],c[i++]=n[s*3],c[i++]=n[s*3+1],c[i++]=n[s*3+2];const p=1-U/A;l[e++]=p,l[e++]=p,l[e++]=p,l[e++]=p,l[e++]=p,l[e++]=p,y++}}}m.geometry.setDrawRange(0,y*2),m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.color.needsUpdate=!0,b.geometry.attributes.position.needsUpdate=!0}function T(){D=me(),H.value.append(D.dom)}function $(){z=new pe(u,r.domElement),z.minDistance=1e3,z.maxDistance=3e3}function J(){g.add(new le(1e3))}function K(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}function Q(){g=new de,u=new ue(45,window.innerWidth/window.innerHeight,1,4e3),u.position.z=1e3,r=new we({canvas:P.value,antialias:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",K)}function S(){let e=Date.now()*1e-4;requestAnimationFrame(S),D.update(),O(),w.rotation.y=e,r.render(g,u)}return ve(()=>{V(),Q(),J(),T(),$(),F(),N(),j(),q(),S()}),(e,i)=>(ge(),xe("div",_e,[E("div",{class:"con",ref_key:"canvasCon",ref:H},[E("canvas",{class:"canvas",ref_key:"canvasDom",ref:P},null,512)],512)]))}});const Ge=Ce(be,[["__scopeId","data-v-4c49bd10"]]);export{Ge as default};