const n=`// https://www.shadertoy.com/view/4dS3Wd\r
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
float noise(float x) {\r
    float i = floor(x);\r
    float f = fract(x);\r
    float u = f * f * (3.0 - 2.0 * f);\r
    return mix(hash(i), hash(i + 1.0), u);\r
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
// p屏幕坐标，a起点，b终点\r
float sdSegment(in vec2 p, in vec2 a, in vec2 b) {\r
  vec2 pa = p - a, ba = b - a;\r
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\r
  return length(pa - ba * h);\r
}\r
`;export{n as u};
