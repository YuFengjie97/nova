precision mediump float;

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
}