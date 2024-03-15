precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform float size;
uniform int fftSize;
uniform float dataArray[512];

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

  vec3 col = palette(val);
  color_fin += col;

  gl_FragColor = vec4(color_fin, 1.);
}