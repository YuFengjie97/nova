precision mediump float;

#define PI 3.141592654
#define resolution 4.
#define pix resolution / iResolution.y
#define cf cos(PI/6.)
#define sf sin(PI/6.)
#define hex_r (100. * pix)
#define hex_bw (2. * pix)

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

// 在p坐标下，以pos为中心，绘制蜂巢(旋转过的正六边形)
float sdHexagon(in vec2 p, in float r) {
  const vec3 k = vec3(-0.866025404, 0.5, 0.577350269);
  p = abs(p);
  p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
  p -= vec2(clamp(p.x, -k.z * r, k.z * r), r);
  return length(p) * sign(p.y);
}

float plotHex(vec2 p, vec2 pos, float r) {
  p -= pos;
  p *= mat2(cf, -sf, sf, cf);

  float hex = sdHexagon(p, r);
  float h = smoothstep(hex_bw / 2., 0., abs(hex));
  return h;
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.y * resolution;
  vec3 c_fin = vec3(0.);

  vec2 hex_uv = uv / hex_r;
  vec2 hex_i = floor(hex_uv);
  vec2 hex_f = fract(hex_uv);
  if(mod(hex_i.y,2.)!=0.){
    hex_f.x += 0.5;
    hex_f.x = fract(hex_f.x);
  }
  // hex_f.y -= hex_i.y * (1.-sf) * hex_r;


  vec2 pos = vec2(0.5);
  float cir = smoothstep(4. * pix, 0., abs(length(hex_f - pos) - 0.5));
  c_fin += cir * vec3(0.,1.,0.);

  vec2 pos2 = vec2(0.5)+1.;
  vec2 hex_f2 = hex_f;
  hex_f2.y += hex_i.y * (1.-sf) * hex_r;
  float cir2 = smoothstep(4. * pix, 0., abs(length(hex_f2 - pos2) - 0.5));
  c_fin += cir2 * vec3(1.,0.,0.);


  // vec2 pos = vec2(2., 2.);
  // float r = .5;
  // float hex = smoothstep(0.01, 0., abs(sdHexagon(uv-pos, r))) ;
  // c_fin += hex;

  // float cir = smoothstep(0.01, 0., abs(length(uv-pos)-r));
  // c_fin += cir;

  #if 1
  float l = hex_f.x;
  float r = hex_f.x + 1.;
  float b = hex_f.y;
  float t = hex_f.y + 1.;
  float b1 = smoothstep(4. * pix, 0., abs(l));
  float b2 = smoothstep(4. * pix, 0., abs(r));
  float b3 = smoothstep(4. * pix, 0., abs(b));
  float b4 = smoothstep(4. * pix, 0., abs(t));
  float border = b1 + b2 + b3 + b4;
  c_fin += border * vec3(1., 0., 0.);
  #endif

  gl_FragColor = vec4(c_fin, 1.);
}
