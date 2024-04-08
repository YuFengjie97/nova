import{d as g,r as f,h,V as A,aG as w,a8 as S,M as T,b as F,e as R,t as z,o as C,_ as I}from"./index-buY-64hZ.js";import{i as M}from"./initThree-oPrL-1t5.js";import{m as P}from"./audio-sugarCrush-sMDL0Z2H.js";import{i as b}from"./audio2-GAo0SpJu.js";import"./OrbitControls-2G3I6IlV.js";import"./initStats-1oN1fAIq.js";import"./_commonjsHelpers-4gQjN7DL.js";const k=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,B=`precision mediump float;

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
}`,D=g({__name:"index",setup(V){const n=f(),a=512,{audio:t,getAnalyser:v}=b(P,a);let o;const i=new Float32Array(a),e=f(!1),u=100;function d(){t.paused?(t.play(),e.value=!0,o=v().analyser):(t.pause(),e.value=!1)}return setInterval(()=>{e.value&&o.getFloatTimeDomainData(i)},u),h(()=>{const{scene:r,renderWrap:l}=M(n.value),{width:m,height:p}=n.value.getBoundingClientRect(),s={iResolution:{value:new A(m,p)},iTime:{value:0},dataArray:{value:i},fftSize:{value:a}},_=new w({uniforms:s,vertexShader:k,fragmentShader:B}),y=new S(1e3,1e3),c=new T(y,_);c.position.set(0,0,10),r.add(c),l(()=>{const x=performance.now()/1e3;s.iTime.value=x})()}),(r,l)=>(C(),F("div",{ref_key:"con",ref:n,class:"con w-full h-full relative"},[R("div",{class:"bt",onClick:d},z(e.value?"pause":"play"),1)],512))}}),H=I(D,[["__scopeId","data-v-8ad3996f"]]);export{H as default};
