import{c as d,p as f}from"./canvas-Bae2WlW-.js";import{d as u,r,j as _,G as v,e as p,f as h,o as g,_ as I}from"./index-Dk52mj26.js";const k=u({__name:"imgIdle",setup(w){const c=r(),a=r();let o,s;return _(async()=>{const{width:t,height:n}=c.value.getBoundingClientRect();a.value.width=t,a.value.height=n;const e=a.value.getContext("2d"),{canvas:i,timer:m}=await d({w:400,h:400},f,6);s=m;function l(){e.clearRect(0,0,t,n),e.moveTo(0,0),e.lineTo(400,400),e.strokeStyle="red",e.lineWidth=200,e.stroke(),e.drawImage(i,0,0),o=requestAnimationFrame(l)}l()}),v(()=>{cancelAnimationFrame(o),clearInterval(s)}),(t,n)=>(g(),p("div",{ref_key:"con",ref:c,class:"w-full h-full"},[h("canvas",{ref_key:"canvas",ref:a,class:"block w-full h-full"},null,512)],512))}}),y=I(k,[["__scopeId","data-v-09b169ef"]]);export{y as default};
