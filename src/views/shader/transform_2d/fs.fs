precision mediump float;

#define PI 3.1415926

uniform vec2 iResolution;
uniform float iTime;

float sdBox(in vec2 p, in vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

vec3 palette(float t) {
  vec3 a = vec3(0.731, 1.098, 0.192);
  vec3 b = vec3(0.358, 1.090, 0.657);
  vec3 c = vec3(1.077, 0.360, 0.328);
  vec3 d = vec3(0.965, 2.265, 0.837);
  return a + b * cos(6.28318 * (c * t + d));
}

float randomFloat(float seed) {
  return fract(sin(seed) * 1348.2585);
}

vec2 random(float v) {
  float x = fract(sin(v) * 45.53 + 13.46);
  float y = fract(sin(v) * 76.41 + 75.85);
  return vec2(x, y);
}

float plotGlowParticle(vec2 uv, vec2 pos, float r, float glowFactor) {
  float v = length(uv - pos) - r;
  return smoothstep(0.01, 0., abs(v));
  //return exp(-1. * glowFactor * v);
}

mat3 rotate(float angle) {
  return mat3(
    cos(angle), -sin(angle), 0.,
    sin(angle),  cos(angle), 0.,
     0., 0., 1.
  );
}
mat3 translate(vec2 t) {
  return mat3(
    1.,0.,t.x,
    0.,1.,t.y,
    0.,0.,1.
  );
}
mat3 scale(vec2 s) {
  return mat3(
    s.x, 0., 0.,
    0., s.y, 0.,
    0., 0., 1.
  );
}

void main() {
  vec2 uv = (gl_FragCoord.xy) / iResolution.y;
  float ixy = iResolution.x / iResolution.y;
  vec3 c_fin = vec3(0.);
  float pix = 1. / iResolution.y;

  mat3 mat_r = rotate(iTime);
  mat3 mat_t = translate(vec2(-0.5 * ixy, -0.5));
  float s = sin(iTime) * 0.5 + 0.5;
  mat3 mat_s = scale(vec2(1.) + vec2(8., 4.) * s);

  vec3 uv2 = vec3(uv, 1.) * mat_t * mat_r * mat_s;

  float box = sdBox(uv2.xy, vec2(0.5, 0.1));
  box = smoothstep(10.*pix, 0., abs(box));
  c_fin += box;

  gl_FragColor = vec4(c_fin, 1.);
}
