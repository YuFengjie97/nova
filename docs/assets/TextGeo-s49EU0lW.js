import{d as Y,r as D,D as Z,h as ee,o as ne,b as te,e as E,K as oe,$ as H,N as k,ac as ie,as as ae,I as se,S as re,H as ce,at as le,P as de,V as he,W as ue,au as fe,an as me,_ as we}from"./index-ip7fc9kF.js";import{S as pe}from"./stats.module-nRd2dy6L.js";import{F as ve,f as ge,T as xe}from"./helvetiker_regular.typeface-1qTpHulz.js";import{G as be}from"./dat.gui.module-PWGADmkp.js";const Se={class:"viewCon"},Ce=Y({__name:"TextGeo",setup(_e){const{PI:g,random:W,floor:ke}=Math,y=D(),z=D();let r=window.innerWidth,d=window.innerHeight,x,o,c,f,b,m="Hello three.js!",M,i,S=0,P=0,s,C,w,h,p,F=40,v;function I(e){const t=e.key;console.log(t),t==="Backspace"?m=m.slice(0,-1):m+=t,a()}function A(){const e=W()*100;v.color.setHSL(e,1,.5)}const n={changeColor(){A()},fontSize:50,height:6,curveSegments:1,bevelEnabled:!0,bevelThickness:4,bevelSize:3.2,bevelSegments:1};function R(){const e=new be({width:300});e.add(n,"changeColor").name("randomColor").listen(),e.add(n,"fontSize",20,100,1).onFinishChange(t=>{F=t*.8,a()}),e.add(n,"height",1,30,1).onFinishChange(a),e.add(n,"curveSegments",1,10,1).onFinishChange(a),e.add(n,"bevelEnabled").onChange(a),e.add(n,"bevelThickness",1,10,1).onFinishChange(a),e.add(n,"bevelSize",.1,5,.1).onFinishChange(a),e.add(n,"bevelSegments",1,10,1).onFinishChange(a)}function a(){i.remove(w),i.remove(h),G()}let _=!1;function U(e){_=!0,P=e.clientX}function V(e){_&&(S=(e.clientX-P)/b*g*.04)}function X(){_=!1,S=0}function j(){const e=new ve;return new Promise((t,u)=>{e.load(ge,l=>{t(l)},void 0,l=>{u(l)})})}function G(){var u,l,L;i=new oe,o.add(i),s=new xe(m,{font:M,size:n.fontSize,height:n.height,curveSegments:n.curveSegments,bevelEnabled:n.bevelEnabled,bevelThickness:n.bevelThickness,bevelSize:n.bevelSize,bevelSegments:n.bevelSegments}),C=[new H({color:16777215,flatShading:!0}),new H({color:16777215})],w=new k(s,C),i.add(w),s.computeBoundingBox();const e=-.5*(((u=s.boundingBox)==null?void 0:u.max.x)-((l=s.boundingBox)==null?void 0:l.min.x)),t=((L=s.boundingBox)==null?void 0:L.min.y)+F;w.position.set(e,t,0),h=new k(s,C),h.position.set(e,-t,0),h.rotation.x=-g,i.add(h)}function N(){p=new k(new ie(1e4,1e4),new ae({color:16777215,opacity:.5,transparent:!0})),p.position.y=0,p.rotation.x=-g/2,o.add(p)}function O(){x=pe(),z.value.append(x.dom)}function $(){o.add(new se(1e3))}function q(){r=window.innerWidth,d=window.innerHeight,b=r/2,c.aspect=r/d,c.updateProjectionMatrix(),f.setSize(r,d)}function J(){o=new re,o.background=new ce(0),o.fog=new le(0,250,1400),c=new de(75,r/d,1,4e3),c.position.set(0,100,300),c.lookAt(new he(0,50,0)),f=new ue({canvas:y.value,antialias:!0}),f.setSize(r,d),window.addEventListener("resize",q)}function K(){const e=new fe(16777215,.125);e.position.set(0,-100,1).normalize(),o.add(e),v=new me(7101671,1.5),v.position.set(0,-100,90),o.add(v)}function Q(){i.rotation.y=i.rotation.y+S}let T=0;function B(){T=requestAnimationFrame(B),x.update(),Q(),f.render(o,c)}return Z(()=>{cancelAnimationFrame(T)}),ee(async()=>{document.addEventListener("keydown",I),b=window.innerWidth/2,J(),R(),K(),$(),O(),M=await j(),G(),N(),B()}),(e,t)=>(ne(),te("div",Se,[E("div",{ref_key:"canvasCon",ref:z,class:"canvasCon"},[E("canvas",{ref_key:"canvasDom",ref:y,class:"canvas",onPointerdown:U,onPointermove:V,onPointerup:X},null,544)],512)]))}}),Fe=we(Ce,[["__scopeId","data-v-e5c17562"]]);export{Fe as default};
