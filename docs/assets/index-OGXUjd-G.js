import{d as v,r as f,h as p,V as h,aK as d,aa as u,M as m,o as x,b}from"./index-CNxnBlAo.js";import{i as g}from"./initThree-B4Dctaht.js";import"./OrbitControls-vcj3RfCY.js";import"./initStats-CSQqpVNd.js";const w=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,y=`precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform sampler2D texture1;
uniform float size;

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

vec3 palette(float t) {
  vec3 a = vec3(1.000, 0.500, 0.500);
  vec3 b = vec3(0.500, 0.500, 0.500);
  vec3 c = vec3(0.750, 1.000, 0.667);
  vec3 d = vec3(0.800, 1.000, 0.333);
  return a + b * cos(6.28318 * (c * t + d));
}

float PI = 3.1415926;
float pix;
float lineWidth;

// p屏幕坐标，a起点，b终点
float sdSegment(in vec2 p, in vec2 a, in vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}
float plotLine(vec2 uv, vec2 start, vec2 end, float lineWidth) {
  float l = sdSegment(uv, start, end) - lineWidth;
  return smoothstep(lineWidth * 1.5, lineWidth, abs(l));
}

void main() {
  vec2 uv = gl_FragCoord.xy;
  pix = 1. / iResolution.y;
  lineWidth = 40. * pix;

  float cellSize = 40.;
  vec2 rc = iResolution.xy / cellSize; // rows and cols
  vec2 uvi = floor(uv / cellSize);
  vec2 uvf = fract(uv / cellSize);
  vec3 fin_c = vec3(0.);

  bool showBorder = false;
  if(showBorder) {
    float border1 = smoothstep(10. * pix, 0., abs(uvf.x));
    float border2 = smoothstep(10. * pix, 0., abs(uvf.x - 1.));
    float border3 = smoothstep(10. * pix, 0., abs(uvf.y));
    float border4 = smoothstep(10. * pix, 0., abs(uvf.y - 1.));
    float border = border1 + border2 + border3 + border4;
    fin_c += border * vec3(1.);
  }

  float noiseVal = noise(uvi / rc + iTime);
  float angle = noiseVal * PI * 2.;
  float lineLen = .5 * noiseVal - lineWidth;
  vec2 start = vec2(0.5);
  vec2 end = vec2(cos(angle) * lineLen, sin(angle) * lineLen) + start;
  float line = plotLine(uvf, start, end, lineWidth);
  vec3 color = palette(noiseVal);
  fin_c = mix(fin_c, color, line);
  //fin_c += color * line;

  gl_FragColor = vec4(fin_c, 1.);
}`,V=v({__name:"index",setup(_){const e=f();return p(()=>{const{scene:n,renderWrap:t}=g(e.value),{width:i,height:s}=e.value.getBoundingClientRect(),o={iResolution:{value:new h(i,s)},iTime:{value:0}},c=new d({uniforms:o,vertexShader:w,fragmentShader:y}),r=new u(1e3,1e3),a=new m(r,c);a.position.set(0,0,10),n.add(a),t(()=>{const l=performance.now()/1e3;o.iTime.value=l})()}),(n,t)=>(x(),b("div",{ref_key:"con",ref:e,class:"w-full h-full relative"},null,512))}});export{V as default};
