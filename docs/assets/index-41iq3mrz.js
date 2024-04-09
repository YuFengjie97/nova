import{d as u,r as A,h as f,V as Z,aL as s,aG as c,a8 as p,M as g,b as h,o as B}from"./index-DzmhKhXa.js";import{i as x}from"./initThree-PPOsCKF4.js";import"./OrbitControls-BHNdV32M.js";import"./initStats-C5VNgmNK.js";import"./_commonjsHelpers-BosuxZz1.js";const C=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,d=`precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform sampler2D texture1;
uniform float size;

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

float patternSize = 2.;
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

  vec2 uv_texture = getTexture(uv2, floor(noise(xy + iTime * 0.1) * patternSize*2.));

  gl_FragColor = vec4(0., 0., 0., 1.) + texture2D(texture1, uv_texture);
}`,F="data:image/png;base64,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",y=u({__name:"index",setup(M){const e=A();return f(()=>{const{scene:n,renderWrap:i}=x(e.value),{width:t,height:r}=e.value.getBoundingClientRect(),o={iResolution:{value:new Z(t,r)},iTime:{value:0},size:{value:16},texture1:{value:new s().load(F)}},v=new c({uniforms:o,vertexShader:C,fragmentShader:d}),l=new p(1e3,1e3),a=new g(l,v);a.position.set(0,0,10),n.add(a),i(()=>{const m=performance.now()/1e3;o.iTime.value=m})()}),(n,i)=>(B(),h("div",{ref_key:"con",ref:e,class:"w-full h-full relative"},null,512))}});export{y as default};
