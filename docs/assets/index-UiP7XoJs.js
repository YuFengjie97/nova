import{d as v,r as f,h as p,V as u,aG as h,a8 as m,M as d,b as x,o as g}from"./index-Ct6ceUkE.js";import{i as y}from"./initThree-hbYHqMqB.js";import"./OrbitControls-BAA5edm8.js";import"./initStats-C5VNgmNK.js";import"./_commonjsHelpers-BosuxZz1.js";const b=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,_=`precision mediump float;\r
\r
uniform vec2 iResolution;\r
uniform float iTime;\r
uniform sampler2D texture1;\r
uniform float size;\r
\r
// https://www.shadertoy.com/view/4dS3Wd\r
float hash(float p) {\r
  p = fract(p * 0.011);\r
  p *= p + 7.5;\r
  p *= p + p;\r
  return fract(p);\r
}\r
float hash(vec2 p) {\r
  vec3 p3 = fract(vec3(p.xyx) * 0.13);\r
  p3 += dot(p3, p3.yzx + 3.333);\r
  return fract((p3.x + p3.y) * p3.z);\r
}\r
\r
float noise(vec2 x) {\r
  vec2 i = floor(x);\r
  vec2 f = fract(x);\r
\r
	// Four corners in 2D of a tile\r
  float a = hash(i);\r
  float b = hash(i + vec2(1.0, 0.0));\r
  float c = hash(i + vec2(0.0, 1.0));\r
  float d = hash(i + vec2(1.0, 1.0));\r
\r
    // Simple 2D lerp using smoothstep envelope between the values.\r
	// return vec3(mix(mix(a, b, smoothstep(0.0, 1.0, f.x)),\r
	//			mix(c, d, smoothstep(0.0, 1.0, f.x)),\r
	//			smoothstep(0.0, 1.0, f.y)));\r
\r
	// Same code, with the clamps in smoothstep and common subexpressions\r
	// optimized away.\r
  vec2 u = f * f * (3.0 - 2.0 * f);\r
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\r
}\r
float noise(vec3 x) {\r
  const vec3 step = vec3(110, 241, 171);\r
\r
  vec3 i = floor(x);\r
  vec3 f = fract(x);\r
\r
    // For performance, compute the base input to a 1D hash from the integer part of the argument and the \r
    // incremental change to the 1D based on the 3D -> 1D wrapping\r
  float n = dot(i, step);\r
\r
  vec3 u = f * f * (3.0 - 2.0 * f);\r
  return mix(mix(mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x), mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y), mix(mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x), mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);\r
}\r
\r
vec3 palette(float t) {\r
  vec3 a = vec3(0.731, 1.098, 0.192);\r
  vec3 b = vec3(0.358, 1.090, 0.657);\r
  vec3 c = vec3(1.077, 0.360, 0.328);\r
  vec3 d = vec3(0.965, 2.265, 0.837);\r
  return a + b * cos(6.28318 * (c * t + d));\r
}\r
float PI = 3.1415926;\r
float lineWidth;\r
\r
// p屏幕坐标，a起点，b终点\r
float sdSegment(in vec2 p, in vec2 a, in vec2 b) {\r
  vec2 pa = p - a, ba = b - a;\r
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\r
  return length(pa - ba * h);\r
}\r
float plotLine(in vec2 uv,in vec2 start,in vec2 end,in float lineWidth) {\r
  float l = sdSegment(uv, start, end) - lineWidth;\r
  return smoothstep(lineWidth * 1.5, lineWidth, abs(l));\r
}\r
\r
float plotPoint(vec2 uv, vec2 pos) {\r
    float r = .2;\r
    float point = distance(uv, pos) - r;\r
    return smoothstep(0.1, 0., point);\r
}\r
void main() {\r
  float resolution = 20.;\r
  \r
  // 非常重要，坐标连续化的前提，原理是2+1=3\r
  // 把断裂的坐标拼接起来，前提是uv是归一化的，\r
  // 比如第1行第8列到第1行第9列，x坐标是8-9,9-10，这样两个格子的x坐标就变成连续的了\r
  vec2 uv = gl_FragCoord.xy / iResolution.y * resolution; \r
  lineWidth = 0.05;\r
\r
  vec2 uvi = floor(uv);\r
  vec2 uvf = fract(uv);\r
  vec3 fin_c = vec3(0.);\r
\r
  float lineLen = 1.5;\r
  \r
  float range = ceil(lineLen);\r
\r
  if(false) {\r
      // 仅仅是在当前cell中绘制了线段\r
      // 如果线段长度超出1.（预设的单元尺寸，在这里是1），就会不去绘制\r
      // 因为在其他单元中是绘制对应他uvi坐标对应的线\r
      // 所以一条完整的线，应该除了自身单元需要绘制，还有周边range*range-1个单元需要叠加绘制\r
      float noiseVal = noise(uvi / resolution + iTime) * 0.5 + 0.5;\r
      float angle = noiseVal * PI * 2.;\r
      vec2 start = vec2(0.5) + uvi;\r
      vec2 end = vec2(cos(angle) * lineLen, sin(angle) * lineLen) + start;\r
      float line = plotLine(uv, start, end, lineWidth);\r
      vec3 color = palette(noiseVal);\r
      fin_c += color * line;\r
  } else {\r
      // 循环range*range多层绘制出完整的线段\r
      for(float x = -range; x <= range; x += 1.) {\r
          for(float y = -range; y <= range; y += 1.) {\r
          \r
              // 对当前单元来说，线的起点在反方向，需要-vec2(x,y)\r
              vec2 start = vec2(0.5) + uvi - vec2(x,y);\r
              \r
              float noiseVal = noise((uvi-vec2(x,y)) / resolution + iTime) * 0.5 + 0.5;\r
              float angle = noiseVal * PI * 2.;\r
              vec3 color = palette(noiseVal);\r
              //lineLen *= noiseVal + 0.1;\r
\r
              vec2 end = vec2(cos(angle) * lineLen, sin(angle) * lineLen) + start;\r
              float line = plotLine(uv, start, end, lineWidth);\r
\r
              fin_c += color * line;\r
          }\r
      }\r
  \r
  }\r
\r
  \r
  gl_FragColor = vec4(fin_c, 1.);\r
}`,P=v({__name:"index",setup(w){const n=f();return p(()=>{const{scene:e,renderWrap:r}=y(n.value),{width:a,height:i}=n.value.getBoundingClientRect(),t={iResolution:{value:new u(a,i)},iTime:{value:0}},l=new h({uniforms:t,vertexShader:b,fragmentShader:_}),s=new m(1e3,1e3),o=new d(s,l);o.position.set(0,0,10),e.add(o),r(()=>{const c=performance.now()/1e3;t.iTime.value=c})()}),(e,r)=>(g(),x("div",{ref_key:"con",ref:n,class:"w-full h-full relative"},null,512))}});export{P as default};
