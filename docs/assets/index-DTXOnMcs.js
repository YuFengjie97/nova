import{d as g,r as f,j as x,aZ as h,V as A,aJ as w,ag as S,U as T,e as F,f as R,t as z,o as C,_ as I}from"./index-BO-XTyUX.js";import{m as P}from"./audio-sugarCrush-1d8eZUIK.js";import{i as k}from"./audio2-Bh-ajUVZ.js";const B=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,M=`precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform float size;
uniform int fftSize;
uniform float dataArray[512];

float PI = 3.1415926;
float rand(float x) {
  return fract(sin(x + iTime * 0.1) * 1.0);
}
float noise(float x) {
  float i = floor(x);
  float f = fract(x);
  return mix(rand(i), rand(i + 1.0), smoothstep(0., 1., f));
}

vec3 palette(float t) {
  vec3 a = vec3(0.478, 0.868, 0.149);
  vec3 b = vec3(0.991, 0.389, 0.991);
  vec3 c = vec3(1.328, 1.096, 1.316);
  vec3 d = vec3(1.793, 0.183, 5.133);

  return a + b * cos(PI * 2. * (c * t + d));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - iResolution.xy * 0.5) / min(iResolution.x, iResolution.y);
  vec3 color_fin = vec3(0.0);

  float distFactor = length(uv) / 0.5;
  int index = int(distFactor * float(fftSize));
  float val = dataArray[index];
  float n = noise(iTime);
  float p = n * .9 + val * 0.1;

  vec3 col = palette(p);
  color_fin += col;

  gl_FragColor = vec4(color_fin, 1.);
}`,t=512,b=100,D=g({__name:"index",setup(U){const n=f(),{audio:a,getAnalyser:v}=k(P,t);let o;const i=new Float32Array(t),e=f(!1);function u(){a.paused?(a.play(),e.value=!0,o=v().analyser):(a.pause(),e.value=!1)}return setInterval(()=>{e.value&&o.getFloatTimeDomainData(i)},b),x(()=>{const{scene:r,renderWrap:l}=h(n.value),{width:d,height:m}=n.value.getBoundingClientRect(),s={iResolution:{value:new A(d,m)},iTime:{value:0},dataArray:{value:i},fftSize:{value:t}},p=new w({uniforms:s,vertexShader:B,fragmentShader:M}),_=new S(1e3,1e3),c=new T(_,p);c.position.set(0,0,10),r.add(c),l(()=>{const y=performance.now()/1e3;s.iTime.value=y})()}),(r,l)=>(C(),F("div",{ref_key:"con",ref:n,class:"con w-full h-full relative"},[R("div",{class:"bt",onClick:u},z(e.value?"pause":"play"),1)],512))}}),G=I(D,[["__scopeId","data-v-8ad3996f"]]);export{G as default};
