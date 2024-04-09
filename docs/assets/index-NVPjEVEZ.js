import{d as b,r as w,h as M,V as d,G as t,aG as z,a8 as A,M as R,b as S,k as V,o as k}from"./index-Ct6ceUkE.js";import{i as I}from"./initThree-hbYHqMqB.js";import{A as P}from"./AudioController-BM0P7Sty.js";import"./p5.min-B-rUit5K.js";import{m as T}from"./math-BV6ONGT4.js";import"./OrbitControls-BAA5edm8.js";import"./initStats-C5VNgmNK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./audio-sugarCrush-1d8eZUIK.js";const q=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,B=`precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform struct ColorChannel {
  vec3 a;
  vec3 b;
  vec3 c;
  vec3 d;
} colorChannel;
uniform float radius;

float PI = 3.1415926;

float size = 1.;

float random(vec2 uv) {
  // return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  return fract((sin(dot(uv.xy, vec2(12.9898, 78.233)))) * 43758.5453123);
}

float noise(vec2 uv) {
  vec2 i = floor(uv);
  vec2 f = fract(uv);

  float a = random(i);
  float b = random(i + vec2(size, 0));
  float c = random(i + vec2(0., size));
  float d = random(i + vec2(size));

  vec2 u = f * f * (3. - 2. * f);
  // vec2 u = smoothstep(0., 1., f);

  float v1 = mix(a, b, u.x);
  float v2 = mix(c, d, u.x);
  return mix(v1, v2, u.y);
}

vec3 palette(float t) {
  // vec3 a = vec3(1.000, 0.500, 0.500);
  // vec3 b = vec3(0.500, 0.500, 0.500);
  // vec3 c = vec3(0.750, 1.000, 0.667);
  // vec3 d = vec3(0.800, 1.000, 0.333);

  // vec3 a = vec3(0.000, 0.500, 0.500);
  // vec3 b = vec3(0.000, 0.500, 0.500);
  // vec3 c = vec3(0.000, 0.500, 0.333);
  // vec3 d = vec3(0.000, 0.500, 0.667);
  return colorChannel.a + colorChannel.b * cos(PI * 2. * (colorChannel.c * t + colorChannel.d));
}

#define octaves 6
float fbm(vec2 uv) {
  float lacunarity = 2.;
  float gain = 0.5;

  float amplitude = 0.5;
  float frequency = 1.;

  float result = 0.;

  for(int i = 0; i < octaves; i++) {
    result += amplitude * noise(frequency * uv);
    frequency *= lacunarity;
    amplitude *= gain;
  }
  return result;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.y * 10.;
  vec3 color_fin = vec3(0.0);

  float uvt = sin(length(uv) - radius);
  vec2 uv2 = uv * fbm(uv) * uvt;

  vec3 col = palette(fbm(uv2));

  color_fin += col;

  gl_FragColor = vec4(color_fin, 1.);
}`,p=512,K=b({__name:"index",setup(G){const a=w();let c;M(()=>{const{scene:e,renderWrap:l}=I(a.value),{width:v,height:u}=a.value.getBoundingClientRect(),o={iResolution:{value:new d(v,u)},iMouse:{value:new d(v/2,u/2)},iTime:{value:0},colorChannel:{value:{a:new t(0,.5,.5),b:new t(0,.5,.5),c:new t(0,.5,.333),d:new t(0,.5,.667)}},radius:{value:0}},g=new z({uniforms:o,vertexShader:q,fragmentShader:B}),x=new A(1e3,1e3),s=new R(x,g);s.position.set(0,0,10),e.add(s);function y(n,r){const C=Math.floor(n/r),m=[];for(let i=0;i<n;i+=C)m.push(i);return m}const _=y(p/2,13);function f(n){const r=c.getAudioData()[_[n]];return T(r,0,255,0,1)}l(()=>{const n=performance.now()/1e3;o.iTime.value=n,c&&(o.colorChannel.value.a.x=f(5)*.5,o.radius.value=f(4)*.8*10+n)})()});function h(e){c=e}return(e,l)=>(k(),S("div",{ref_key:"con",ref:a,class:"w-full h-full relative"},[V(P,{class:"absolute top-70px left-0","fft-size":p,onInitAudioAnalyser:h})],512))}});export{K as default};
