import{d as m,r as d,V as r,h as x,aB as p,ax as g,aa as h,M as _,o as y,b as z}from"./index-RK8JUcLd.js";import{i as M}from"./initThree-XfAprS46.js";import"./OrbitControls-vREfl18C.js";import"./initStats-kcgqo1M2.js";const w=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,T=`precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform sampler2D texture1;
uniform float size;
uniform vec2 iMouse;

float PI = 3.1415926;
float random(vec2 uv) {
  // return fract(dot(sin(uv), vec2(1.)));
  return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
float noise(vec2 uv) {
  vec2 i = floor(uv);
  vec2 f = fract(uv);

  float a = random(i);
  float b = random(i + vec2(size, 0));
  float c = random(i + vec2(0., size));
  float d = random(i + vec2(size));

  vec2 u = f * f * (3. - 2. * f);

  float v1 = mix(a, b, u.x);
  float v2 = mix(c, d, u.x);
  return mix(v1, v2, u.y);
}

float patternSize = 3.;
vec2 getTexture(vec2 uv, float i) {
  uv = uv / patternSize;
  float n = 1. / patternSize;

  float x = mod(i, patternSize);
  float y = floor(i / patternSize);
  return vec2(uv.x + n * x, uv.y + n * y);
}

void main() {
  vec2 uv = gl_FragCoord.xy;

  vec2 xy = floor(uv / size);
  vec2 uv2 = fract(uv / size);
  vec2 center = floor(iResolution.xy * 0.5 / size);

  vec2 mouse = floor(iMouse/size);
  float d = distance(xy, mouse)+iTime*0.1;

  vec2 uv_texture = getTexture(uv2, floor(noise(vec2(d)) * 9.));

  gl_FragColor = vec4(0., 0., 0., 1.) + texture2D(texture1, uv_texture);
}`,S="/nova/assets/textures_icon_3x3-T2Q01NFx.png",F=m({__name:"index",setup(B){const n=d(),t=new r(0,0);function u(e){const{height:o}=n.value.getBoundingClientRect();t.x=e.x,t.y=o-e.y}return x(()=>{const{scene:e,renderWrap:o}=M(n.value),{width:s,height:v}=n.value.getBoundingClientRect(),a={iResolution:{value:new r(s,v)},iMouse:{value:t},iTime:{value:0},size:{value:20},texture1:{value:new p().load(S)}},c=new g({uniforms:a,vertexShader:w,fragmentShader:T}),l=new h(1e3,1e3),i=new _(l,c);i.position.set(0,0,10),e.add(i),o(()=>{const f=performance.now()/1e3;a.iTime.value=f})()}),(e,o)=>(y(),z("div",{ref_key:"con",ref:n,class:"w-full h-full relative",onMousemove:u},null,544))}});export{F as default};
