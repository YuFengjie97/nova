import{d as ne,r as I,C as te,h as ie,o as oe,b as ae,e as E,J as se,K as re,L as ce,M as le,N as B,I as de,O as F,Q as G,R as U,T as ue,U as we,X as me,Y as pe,G as fe,S as he,P as ve,W as xe,_ as Ce}from"./index-J-7TjqAC.js";import{S as ge}from"./stats.module-nRd2dy6L.js";import{O as be}from"./OrbitControls-P4Dc-JrM.js";import{G as ye}from"./dat.gui.module-PWGADmkp.js";const _e={class:"viewCon"},De=ne({__name:"CubeLine",setup(ze){const{random:d,sqrt:N}=Math,L=I(),P=I();let D,z,C,u,r,w,f;const o=500;let h=500;const v=1e3,n=new Float32Array(v*3),c=new Float32Array(v**2*3),l=new Float32Array(v**2*3),g=[];let b,y,M=100,A=20,m;const x={showDots:!0,showLines:!0,particleNum:500,minDistance:100,maxConnection:20};function k(){const e=new ye({width:300});e.add(x,"showDots").onChange(i=>{y.visible=i}),e.add(x,"showLines").onChange(i=>{m.visible=i}),e.add(x,"particleNum",0,v,1).onChange(i=>{h=i}),e.add(x,"minDistance",0,300,1).onChange(i=>{M=i}),e.add(x,"maxConnection",0,30,1).onChange(i=>{A=i})}function V(){w=new se,C.add(w);const e=new re(o,o,o);f=new ce(new le(e)),f.material.color.setRGB(255,0,0),f.material.blending=B,f.material.transparent=!0,w.add(f)}function O(){for(let e=0;e<v;e++){const i=d()*o-o/2,_=d()*o-o/2,t=d()*o-o/2;n[e*3]=i,n[e*3+1]=_,n[e*3+2]=t,g.push({vel:new de(d()*2-1,d()*2-1,d()*2-1),numConnection:0})}}function j(){b=new F,b.setDrawRange(0,h),b.setAttribute("position",new G(n,3).setUsage(U));const e=new ue({color:16777215,size:3,blending:B,transparent:!0,sizeAttenuation:!1});y=new we(b,e),w.add(y)}function q(){const e=new me({vertexColors:!0,blending:B,transparent:!0}),i=new F;i.setAttribute("position",new G(c,3).setUsage(U)),i.setAttribute("color",new G(l,3).setUsage(U)),m=new pe(i,e),w.add(m)}function T(){let e=0,i=0,_=0;for(let t=0;t<h;t++)g[t].numConnection=0;for(let t=0;t<h;t++){const a=g[t];if((n[t*3]<-o/2||n[t*3]>o/2)&&(a.vel.x=-a.vel.x),(n[t*3+1]<-o/2||n[t*3+1]>o/2)&&(a.vel.y=-a.vel.y),(n[t*3+2]<-o/2||n[t*3+2]>o/2)&&(a.vel.z=-a.vel.z),n[t*3]+=a.vel.x,n[t*3+1]+=a.vel.y,n[t*3+2]+=a.vel.z,!(a.numConnection>=A))for(let s=0;s<h;s++){const $=n[t*3]-n[s*3],Z=n[t*3+1]-n[s*3+1],ee=n[t*3+2]-n[s*3+2],S=N($**2+Z**2+ee**2);if(S<M){const W=g[s];if(W.numConnection>=A)continue;a.numConnection++,W.numConnection++,c[i++]=n[t*3],c[i++]=n[t*3+1],c[i++]=n[t*3+2],c[i++]=n[s*3],c[i++]=n[s*3+1],c[i++]=n[s*3+2];const p=1-S/M;l[e++]=p,l[e++]=p,l[e++]=p,l[e++]=p,l[e++]=p,l[e++]=p,_++}}}m.geometry.setDrawRange(0,_*2),m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.color.needsUpdate=!0,y.geometry.attributes.position.needsUpdate=!0}function J(){D=ge(),P.value.append(D.dom)}function K(){z=new be(u,r.domElement),z.minDistance=1e3,z.maxDistance=3e3}function Q(){C.add(new fe(1e3))}function X(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}function Y(){C=new he,u=new ve(45,window.innerWidth/window.innerHeight,1,4e3),u.position.z=1e3,r=new xe({canvas:L.value,antialias:!0}),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",X)}let H=0;function R(){const e=Date.now()*1e-4;H=requestAnimationFrame(R),D.update(),T(),w.rotation.y=e,r.render(C,u)}return te(()=>{cancelAnimationFrame(H)}),ie(()=>{k(),Y(),Q(),J(),K(),V(),O(),j(),q(),R()}),(e,i)=>(oe(),ae("div",_e,[E("div",{ref_key:"canvasCon",ref:P,class:"con"},[E("canvas",{ref_key:"canvasDom",ref:L,class:"canvas"},null,512)],512)]))}}),Ue=Ce(De,[["__scopeId","data-v-d65e4ebd"]]);export{Ue as default};
