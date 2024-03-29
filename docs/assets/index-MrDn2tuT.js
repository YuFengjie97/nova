import{d as v,r as f,h as p,V as u,aK as h,aa as m,M as d,o as x,b as g}from"./index-Nwgo__yj.js";import{i as y}from"./initThree-olH43aA6.js";import"./OrbitControls-qZjsLIA7.js";import"./initStats-fFfChxOg.js";const b=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,_=`precision mediump float;

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
  vec3 a = vec3(0.731, 1.098, 0.192);
  vec3 b = vec3(0.358, 1.090, 0.657);
  vec3 c = vec3(1.077, 0.360, 0.328);
  vec3 d = vec3(0.965, 2.265, 0.837);
  return a + b * cos(6.28318 * (c * t + d));
}
float PI = 3.1415926;
float lineWidth;

// p屏幕坐标，a起点，b终点
float sdSegment(in vec2 p, in vec2 a, in vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}
float plotLine(in vec2 uv,in vec2 start,in vec2 end,in float lineWidth) {
  float l = sdSegment(uv, start, end) - lineWidth;
  return smoothstep(lineWidth * 1.5, lineWidth, abs(l));
}

float plotPoint(vec2 uv, vec2 pos) {
    float r = .2;
    float point = distance(uv, pos) - r;
    return smoothstep(0.1, 0., point);
}
void main() {
  float resolution = 20.;
  
  // 非常重要，坐标连续化的前提，原理是2+1=3
  // 把断裂的坐标拼接起来，前提是uv是归一化的，
  // 比如第1行第8列到第1行第9列，x坐标是8-9,9-10，这样两个格子的x坐标就变成连续的了
  vec2 uv = gl_FragCoord.xy / iResolution.y * resolution; 
  lineWidth = 0.05;

  vec2 uvi = floor(uv);
  vec2 uvf = fract(uv);
  vec3 fin_c = vec3(0.);

  float lineLen = 1.5;
  
  float range = ceil(lineLen);

  if(false) {
      // 仅仅是在当前cell中绘制了线段
      // 如果线段长度超出1.（预设的单元尺寸，在这里是1），就会不去绘制
      // 因为在其他单元中是绘制对应他uvi坐标对应的线
      // 所以一条完整的线，应该除了自身单元需要绘制，还有周边range*range-1个单元需要叠加绘制
      float noiseVal = noise(uvi / resolution + iTime) * 0.5 + 0.5;
      float angle = noiseVal * PI * 2.;
      vec2 start = vec2(0.5) + uvi;
      vec2 end = vec2(cos(angle) * lineLen, sin(angle) * lineLen) + start;
      float line = plotLine(uv, start, end, lineWidth);
      vec3 color = palette(noiseVal);
      fin_c += color * line;
  } else {
      // 循环range*range多层绘制出完整的线段
      for(float x = -range; x <= range; x += 1.) {
          for(float y = -range; y <= range; y += 1.) {
          
              // 对当前单元来说，线的起点在反方向，需要-vec2(x,y)
              vec2 start = vec2(0.5) + uvi - vec2(x,y);
              
              float noiseVal = noise((uvi-vec2(x,y)) / resolution + iTime) * 0.5 + 0.5;
              float angle = noiseVal * PI * 2.;
              vec3 color = palette(noiseVal);
              //lineLen *= noiseVal + 0.1;

              vec2 end = vec2(cos(angle) * lineLen, sin(angle) * lineLen) + start;
              float line = plotLine(uv, start, end, lineWidth);

              fin_c += color * line;
          }
      }
  
  }

  
  gl_FragColor = vec4(fin_c, 1.);
}`,D=v({__name:"index",setup(w){const n=f();return p(()=>{const{scene:e,renderWrap:t}=y(n.value),{width:i,height:l}=n.value.getBoundingClientRect(),o={iResolution:{value:new u(i,l)},iTime:{value:0}},s=new h({uniforms:o,vertexShader:b,fragmentShader:_}),c=new m(1e3,1e3),a=new d(c,s);a.position.set(0,0,10),e.add(a),t(()=>{const r=performance.now()/1e3;o.iTime.value=r})()}),(e,t)=>(x(),g("div",{ref_key:"con",ref:n,class:"w-full h-full relative"},null,512))}});export{D as default};
