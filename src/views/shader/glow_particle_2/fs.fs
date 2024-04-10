precision mediump float;

#define PI 3.1415926

uniform vec2 iResolution;
uniform float iTime;

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
  //return smoothstep(0.01, 0.,abs(v));
  return exp(-1. * glowFactor * v);
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2. - iResolution.xy) / iResolution.y;
  float ixy = iResolution.x / iResolution.y;
  vec3 c_fin = vec3(0.);
  float pix = 1. / iResolution.y;

  float total = 100.;

  for(float i = 0.; i < total; i += 1.) {

    float factor = i / total;
    float radius = (10. * factor + 4.) * pix;
    float glowFactor = 80. - ( i / total) * 40.;
    float isClock = randomFloat(i) > 0.5 ? 1. : -1.;
    float speed = (factor + 1.) * 0.4;

    vec2 trackCenter = random(i) * vec2(ixy,1.) - vec2(ixy * 0.5, .5);
    float trackRadius = randomFloat(i) * .8 + .1;
    vec2 pos = trackCenter + vec2(cos(iTime * isClock * speed) * trackRadius, sin(iTime *isClock * speed) * trackRadius);

    float glowParticle = plotGlowParticle(uv, pos, radius, glowFactor);

    //c_fin = mix(c_fin, palette(factor), glowParticle);
    c_fin += palette(factor) * glowParticle;
  }

  gl_FragColor = vec4(c_fin, 1.);
}
