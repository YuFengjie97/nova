import{d as g,r as M,j as x,aX as y,V as d,aH as E,ad as S,R as k,e as B,o as L}from"./index-CqfaNC88.js";const R=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,C=g({__name:"Shader",props:{utils:{},fs:{}},setup(m){const s=m,e=M();return x(()=>{var l,c,v;const{scene:a,renderWrap:r}=y(e.value),{width:f,height:i}=e.value.getBoundingClientRect(),n={iResolution:{value:new d(f,i)},iTime:{value:0},iMouse:{value:new d(0,0)}};let o=!1;(l=e.value)==null||l.addEventListener("mousedown",()=>o=!0),(c=e.value)==null||c.addEventListener("mouseup",()=>o=!1),(v=e.value)==null||v.addEventListener("mousemove",t=>{if(!o)return;const{x:w,y:_}=t;n.iMouse.value.x=w,n.iMouse.value.y=i-_});const p=new E({uniforms:n,vertexShader:R,fragmentShader:`
    ${s.utils?s.utils:""}
    ${s.fs}
    `}),h=new S(1e3,1e3),u=new k(h,p);u.position.set(0,0,10),a.add(u),r(()=>{const t=performance.now()/1e3;n.iTime.value=t})()}),(a,r)=>(L(),B("div",{ref_key:"con",ref:e,class:"w-full h-full relative"},null,512))}});export{C as _};
