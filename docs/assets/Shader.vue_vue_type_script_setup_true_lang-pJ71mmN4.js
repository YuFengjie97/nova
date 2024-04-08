import{d as y,r as g,h as M,V as v,aG as _,a8 as S,M as D,b as z,o as E}from"./index-buY-64hZ.js";import{i as T}from"./initThree-oPrL-1t5.js";const k=`
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

#define PI 3.1415926


// https://www.shadertoy.com/view/4dS3Wd
float hash(float p) {
  p = fract(p * 0.011);
  p *= p + 7.5;
  p *= p + p;
  return fract(p);
}
float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.13);
  p3 += dot(p3, p3.yzx + 3.333);
  return fract((p3.x + p3.y) * p3.z);
}

float noise(float x) {
    float i = floor(x);
    float f = fract(x);
    float u = f * f * (3.0 - 2.0 * f);
    return mix(hash(i), hash(i + 1.0), u);
}

float noise(vec2 x) {
  vec2 i = floor(x);
  vec2 f = fract(x);

	// Four corners in 2D of a tile
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

    // Simple 2D lerp using smoothstep envelope between the values.
	// return vec3(mix(mix(a, b, smoothstep(0.0, 1.0, f.x)),
	//			mix(c, d, smoothstep(0.0, 1.0, f.x)),
	//			smoothstep(0.0, 1.0, f.y)));

	// Same code, with the clamps in smoothstep and common subexpressions
	// optimized away.
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
float noise(vec3 x) {
  const vec3 step = vec3(110, 241, 171);

  vec3 i = floor(x);
  vec3 f = fract(x);

    // For performance, compute the base input to a 1D hash from the integer part of the argument and the 
    // incremental change to the 1D based on the 3D -> 1D wrapping
  float n = dot(i, step);

  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x), mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y), mix(mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x), mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
}

// p屏幕坐标，a起点，b终点
float sdSegment(in vec2 p, in vec2 a, in vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

vec3 palette(float t) {
  vec3 a = vec3(0.731, 1.098, 0.192);
  vec3 b = vec3(0.358, 1.090, 0.657);
  vec3 c = vec3(1.077, 0.360, 0.328);
  vec3 d = vec3(0.965, 2.265, 0.837);
  return a + b * cos(6.28318 * (c * t + d));
}`,P=y({__name:"Shader",props:{utils:{default:k},fs:null},setup(p){const o=p,e=g(),h=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;return M(()=>{var u,f,l;const{scene:s,renderWrap:c}=T(e.value),{width:m,height:i}=e.value.getBoundingClientRect(),n={iResolution:{value:new v(m,i)},iTime:{value:0},iMouse:{value:new v(0,0)}};let t=!1;(u=e.value)==null||u.addEventListener("mousedown",()=>t=!0),(f=e.value)==null||f.addEventListener("mouseup",()=>t=!1),(l=e.value)==null||l.addEventListener("mousemove",a=>{if(!t)return;const{x:b,y:w}=a;n.iMouse.value.x=b,n.iMouse.value.y=i-w});const d=new _({uniforms:n,vertexShader:h,fragmentShader:`
    ${o.utils}
    ${o.fs}
    `}),x=new S(1e3,1e3),r=new D(x,d);r.position.set(0,0,10),s.add(r),c(()=>{const a=performance.now()/1e3;n.iTime.value=a})()}),(s,c)=>(E(),z("div",{ref_key:"con",ref:e,class:"w-full h-full relative"},null,512))}});export{P as _};
