import{d as m,r as d,V as i,h as x,aP as p,aK as g,aa as h,M as _,o as y,b as z}from"./index-w3o6Dwr7.js";import{i as M}from"./initThree-DmbJAgr3.js";import"./OrbitControls-7fmr3Jg8.js";import"./initStats-0J0VmoiC.js";const w=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,T=`precision mediump float;\r
\r
uniform vec2 iResolution;\r
uniform float iTime;\r
uniform sampler2D texture1;\r
uniform float size;\r
uniform vec2 iMouse;\r
\r
float PI = 3.1415926;\r
float random(vec2 uv) {\r
  // return fract(dot(sin(uv), vec2(1.)));\r
  return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453123);\r
}\r
float noise(vec2 uv) {\r
  vec2 i = floor(uv);\r
  vec2 f = fract(uv);\r
\r
  float a = random(i);\r
  float b = random(i + vec2(size, 0));\r
  float c = random(i + vec2(0., size));\r
  float d = random(i + vec2(size));\r
\r
  vec2 u = f * f * (3. - 2. * f);\r
\r
  float v1 = mix(a, b, u.x);\r
  float v2 = mix(c, d, u.x);\r
  return mix(v1, v2, u.y);\r
}\r
\r
float patternSize = 3.;\r
vec2 getTexture(vec2 uv, float i) {\r
  uv = uv / patternSize;\r
  float n = 1. / patternSize;\r
\r
  float x = mod(i, patternSize);\r
  float y = floor(i / patternSize);\r
  return vec2(uv.x + n * x, uv.y + n * y);\r
}\r
\r
void main() {\r
  vec2 uv = gl_FragCoord.xy;\r
\r
  vec2 xy = floor(uv / size);\r
  vec2 uv2 = fract(uv / size);\r
  vec2 center = floor(iResolution.xy * 0.5 / size);\r
\r
  vec2 mouse = floor(iMouse/size);\r
  float d = distance(xy, mouse)+iTime*0.1;\r
\r
  vec2 uv_texture = getTexture(uv2, floor(noise(vec2(d)) * 9.));\r
\r
  gl_FragColor = vec4(0., 0., 0., 1.) + texture2D(texture1, uv_texture);\r
}`,S="/nova/assets/textures_icon_3x3-T2Q01NFx.png",k=m({__name:"index",setup(C){const n=d(),o=new i(0,0);function u(e){const{height:r}=n.value.getBoundingClientRect();o.x=e.x,o.y=r-e.y}return x(()=>{const{scene:e,renderWrap:r}=M(n.value),{width:s,height:v}=n.value.getBoundingClientRect(),t={iResolution:{value:new i(s,v)},iMouse:{value:o},iTime:{value:0},size:{value:20},texture1:{value:new p().load(S)}},c=new g({uniforms:t,vertexShader:w,fragmentShader:T}),l=new h(1e3,1e3),a=new _(l,c);a.position.set(0,0,10),e.add(a),r(()=>{const f=performance.now()/1e3;t.iTime.value=f})()}),(e,r)=>(y(),z("div",{ref_key:"con",ref:n,class:"w-full h-full relative",onMousemove:u},null,544))}});export{k as default};
