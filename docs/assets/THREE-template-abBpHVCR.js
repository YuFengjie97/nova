import{G as _}from"./dat.gui.module-PWGADmkp.js";import{d as v,r as m,h,S as C,E,P as b,W as H,G as g,H as S,I as k,C as x,o as G,b as I,e as p,_ as R}from"./index-7fEuWlIe.js";import{S as W}from"./stats.module-nRd2dy6L.js";import{O as z}from"./OrbitControls-AUK2vtP9.js";const A={class:"viewCon"},T=v({__name:"THREE-template",setup(B){const i=m(),c=m();let e=window.innerWidth,n=window.innerHeight,r,s,t,a,o;h(()=>{w(),u(),l()});function w(){new _}function u(){t=new C,t.background=new E(4473924),a=new b(75,e/n,.1,1e3),o=new H({canvas:i.value,antialias:!0}),o.setSize(e,n),window.addEventListener("resize",f),t.add(new g(1e3)),t.add(new S(4210752)),r=W(),c.value.append(r.dom),s=new z(a,o.domElement),s.target=new k(120,60,0),s.object.position.set(120,60,100),s.update()}let d=0;function l(){d=requestAnimationFrame(l),r.update(),o.render(t,a)}x(()=>{cancelAnimationFrame(d)});function f(){e=window.innerWidth,n=window.innerHeight,a.aspect=e/n,a.updateProjectionMatrix(),o.setSize(e,n)}return(L,P)=>(G(),I("div",A,[p("div",{ref_key:"canvasCon",ref:c,class:"canvasCon"},[p("canvas",{ref_key:"canvasDom",ref:i,class:"canvas"},null,512)],512)]))}}),F=R(T,[["__scopeId","data-v-bb857f98"]]);export{F as default};
