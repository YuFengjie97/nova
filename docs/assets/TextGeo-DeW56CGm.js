import{d as Y,r as E,E as Z,j as ee,e as ne,f as D,Q as te,a4 as H,U as y,ag as oe,ax as ie,L as ae,S as se,K as re,ay as le,P as ce,N as de,W as he,az as fe,ar as ue,o as me,_ as we}from"./index-BO-XTyUX.js";import{S as pe}from"./stats.module--VATS4Kh.js";import{F as ve,f as ge,T as xe}from"./helvetiker_regular.typeface-7PXC2F1h.js";import{G as be}from"./dat.gui.module-DcMWPYuf.js";const Se={class:"viewCon"},Ce=Y({__name:"TextGeo",setup(_e){const{PI:g,random:W,floor:ye}=Math,k=E(),z=E();let r=window.innerWidth,d=window.innerHeight,x,o,l,u,b,m="Hello three.js!",M,i,S=0,P=0,s,C,w,h,p,F=40,v;function U(e){const t=e.key;console.log(t),t==="Backspace"?m=m.slice(0,-1):m+=t,a()}function A(){const e=W()*100;v.color.setHSL(e,1,.5)}const n={changeColor(){A()},fontSize:50,height:6,curveSegments:1,bevelEnabled:!0,bevelThickness:4,bevelSize:3.2,bevelSegments:1};function I(){const e=new be({width:300});e.add(n,"changeColor").name("randomColor").listen(),e.add(n,"fontSize",20,100,1).onFinishChange(t=>{F=t*.8,a()}),e.add(n,"height",1,30,1).onFinishChange(a),e.add(n,"curveSegments",1,10,1).onFinishChange(a),e.add(n,"bevelEnabled").onChange(a),e.add(n,"bevelThickness",1,10,1).onFinishChange(a),e.add(n,"bevelSize",.1,5,.1).onFinishChange(a),e.add(n,"bevelSegments",1,10,1).onFinishChange(a)}function a(){i.remove(w),i.remove(h),G()}let _=!1;function R(e){_=!0,P=e.clientX}function j(e){_&&(S=(e.clientX-P)/b*g*.04)}function X(){_=!1,S=0}function N(){const e=new ve;return new Promise((t,f)=>{e.load(ge,c=>{t(c)},void 0,c=>{f(c)})})}function G(){var f,c,B;i=new te,o.add(i),s=new xe(m,{font:M,size:n.fontSize,height:n.height,curveSegments:n.curveSegments,bevelEnabled:n.bevelEnabled,bevelThickness:n.bevelThickness,bevelSize:n.bevelSize,bevelSegments:n.bevelSegments}),C=[new H({color:16777215,flatShading:!0}),new H({color:16777215})],w=new y(s,C),i.add(w),s.computeBoundingBox();const e=-.5*(((f=s.boundingBox)==null?void 0:f.max.x)-((c=s.boundingBox)==null?void 0:c.min.x)),t=((B=s.boundingBox)==null?void 0:B.min.y)+F;w.position.set(e,t,0),h=new y(s,C),h.position.set(e,-t,0),h.rotation.x=-g,i.add(h)}function O(){p=new y(new oe(1e4,1e4),new ie({color:16777215,opacity:.5,transparent:!0})),p.position.y=0,p.rotation.x=-g/2,o.add(p)}function V(){x=pe(),z.value.append(x.dom)}function q(){o.add(new ae(1e3))}function J(){r=window.innerWidth,d=window.innerHeight,b=r/2,l.aspect=r/d,l.updateProjectionMatrix(),u.setSize(r,d)}function K(){o=new se,o.background=new re(0),o.fog=new le(0,250,1400),l=new ce(75,r/d,1,4e3),l.position.set(0,100,300),l.lookAt(new de(0,50,0)),u=new he({canvas:k.value,antialias:!0}),u.setSize(r,d),window.addEventListener("resize",J)}function Q(){const e=new fe(16777215,.125);e.position.set(0,-100,1).normalize(),o.add(e),v=new ue(7101671,1.5),v.position.set(0,-100,90),o.add(v)}function $(){i.rotation.y=i.rotation.y+S}let T=0;function L(){T=requestAnimationFrame(L),x.update(),$(),u.render(o,l)}return Z(()=>{cancelAnimationFrame(T)}),ee(async()=>{document.addEventListener("keydown",U),b=window.innerWidth/2,K(),I(),Q(),q(),V(),M=await N(),G(),O(),L()}),(e,t)=>(me(),ne("div",Se,[D("div",{ref_key:"canvasCon",ref:z,class:"canvasCon"},[D("canvas",{ref_key:"canvasDom",ref:k,class:"canvas",onPointerdown:R,onPointermove:j,onPointerup:X},null,544)],512)]))}}),Fe=we(Ce,[["__scopeId","data-v-e5c17562"]]);export{Fe as default};
