import{S as w,E as g,P as f,W as x,G as C,H as S,h as b,C as v}from"./index-vgcEZ1AI.js";import{i as A}from"./initStats-CExlaGMQ.js";function L(a,u=!1,h=!1){const{width:m,height:p}=a.getBoundingClientRect(),s=document.createElement("canvas");a.append(s);const t=new w;t.background=new g(0);const n=new f(75,m/p,.1,1e3);n.position.set(0,0,10);const r=new x({canvas:s,antialias:!0});d();function d(){const{width:i,height:e}=a.getBoundingClientRect();s.style.cssText=`display: block; width: ${i}px;height: ${e}px`,n.aspect=i/e,n.updateProjectionMatrix(),r.setSize(i,e)}window.addEventListener("resize",d),u&&t.add(new C(1e3)),h&&t.add(new S(4210752));const{stats:c}=A(a);function l(i){let e=0;function o(){e=requestAnimationFrame(o),c.update(),i(),r.render(t,n)}return b(()=>{o()}),v(()=>{cancelAnimationFrame(e)}),o}return{scene:t,camera:n,renderer:r,stats:c,renderWrap:l}}export{L as i};