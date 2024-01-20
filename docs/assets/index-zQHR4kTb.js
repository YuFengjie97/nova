import{S,E as z,P as A,W as M,G as R,H as P,h as b,C as k,d as B,r as I,a7 as y,V as m,ax as T,aa as V,M as q,o as E,b as F,l as W}from"./index-D5VwQozy.js";import{i as G}from"./initStats-4MN9rM22.js";import{A as L}from"./AudioController-xk7Quh6U.js";import"./p5.min-8ea0dEJR.js";import{m as U}from"./math-6T_IkARJ.js";const H=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,$=`precision mediump float;

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
}`;function j(s,l=!1,u=!1){const{width:f,height:p}=s.getBoundingClientRect(),e=document.createElement("canvas");s.append(e);const n=new S;n.background=new z(0);const t=new A(75,f/p,.1,1e3);t.position.set(0,0,10);const c=new M({canvas:e,antialias:!0});i();function i(){const{width:o,height:a}=s.getBoundingClientRect();e.style.cssText=`display: block; width: ${o}px;height: ${a}px`,t.aspect=o/a,t.updateProjectionMatrix(),c.setSize(o,a)}window.addEventListener("resize",i),l&&n.add(new R(1e3)),u&&n.add(new P(4210752));const{stats:d}=G(s);function h(o){let a=0;function v(){a=requestAnimationFrame(v),d.update(),o(),c.render(n,t)}return b(()=>{v()}),k(()=>{cancelAnimationFrame(a)}),v}return{scene:n,camera:t,renderer:c,stats:d,renderWrap:h}}const Q=B({__name:"index",setup(s){const l=I();let u;const f=512;b(()=>{const{scene:e,renderWrap:n}=j(l.value),{width:t,height:c}=l.value.getBoundingClientRect(),i={iResolution:{value:new y(t,c)},iMouse:{value:new y(t/2,c/2)},iTime:{value:0},colorChannel:{value:{a:new m(0,.5,.5),b:new m(0,.5,.5),c:new m(0,.5,.333),d:new m(0,.5,.667)}},radius:{value:0}},d=new T({uniforms:i,vertexShader:H,fragmentShader:$}),h=new V(1e3,1e3),o=new q(h,d);o.position.set(0,0,10),e.add(o);function a(r,g){const _=Math.floor(r/g),C=[];for(let w=0;w<r;w+=_)C.push(w);return C}const v=a(f/2,13);function x(r){const g=u.getAudioData()[v[r]];return U(g,0,255,0,1)}n(()=>{const r=performance.now()/1e3;i.iTime.value=r,u&&(i.colorChannel.value.a.x=x(5)*.5,i.radius.value=x(4)*.8*10+r)})()});function p(e){u=e}return(e,n)=>(E(),F("div",{ref_key:"con",ref:l,class:"w-full h-full relative"},[W(L,{class:"absolute top-70px left-0","fft-size":f,onInitAudioAnalyser:p})],512))}});export{Q as default};
